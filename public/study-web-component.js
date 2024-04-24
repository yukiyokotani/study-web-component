function nD(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var m0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var eR;
function rD() {
  if (eR)
    return Et;
  eR = 1;
  var j = Symbol.for("react.element"), X = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), Ze = Symbol.for("react.strict_mode"), Ct = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), Xe = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), ke = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Re = Symbol.iterator;
  function K(T) {
    return T === null || typeof T != "object" ? null : (T = Re && T[Re] || T["@@iterator"], typeof T == "function" ? T : null);
  }
  var Oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, te = Object.assign, oe = {};
  function Qe(T, Y, me) {
    this.props = T, this.context = Y, this.refs = oe, this.updater = me || Oe;
  }
  Qe.prototype.isReactComponent = {}, Qe.prototype.setState = function(T, Y) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, T, Y, "setState");
  }, Qe.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function sn() {
  }
  sn.prototype = Qe.prototype;
  function ln(T, Y, me) {
    this.props = T, this.context = Y, this.refs = oe, this.updater = me || Oe;
  }
  var lt = ln.prototype = new sn();
  lt.constructor = ln, te(lt, Qe.prototype), lt.isPureReactComponent = !0;
  var Ve = Array.isArray, _t = Object.prototype.hasOwnProperty, Te = { current: null }, ct = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ye(T, Y, me) {
    var Fe, je = {}, ft = null, ut = null;
    if (Y != null)
      for (Fe in Y.ref !== void 0 && (ut = Y.ref), Y.key !== void 0 && (ft = "" + Y.key), Y)
        _t.call(Y, Fe) && !ct.hasOwnProperty(Fe) && (je[Fe] = Y[Fe]);
    var dt = arguments.length - 2;
    if (dt === 1)
      je.children = me;
    else if (1 < dt) {
      for (var ot = Array(dt), Jt = 0; Jt < dt; Jt++)
        ot[Jt] = arguments[Jt + 2];
      je.children = ot;
    }
    if (T && T.defaultProps)
      for (Fe in dt = T.defaultProps, dt)
        je[Fe] === void 0 && (je[Fe] = dt[Fe]);
    return { $$typeof: j, type: T, key: ft, ref: ut, props: je, _owner: Te.current };
  }
  function wn(T, Y) {
    return { $$typeof: j, type: T.type, key: Y, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function mn(T) {
    return typeof T == "object" && T !== null && T.$$typeof === j;
  }
  function It(T) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(me) {
      return Y[me];
    });
  }
  var mt = /\/+/g;
  function Zt(T, Y) {
    return typeof T == "object" && T !== null && T.key != null ? It("" + T.key) : Y.toString(36);
  }
  function Be(T, Y, me, Fe, je) {
    var ft = typeof T;
    (ft === "undefined" || ft === "boolean") && (T = null);
    var ut = !1;
    if (T === null)
      ut = !0;
    else
      switch (ft) {
        case "string":
        case "number":
          ut = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case j:
            case X:
              ut = !0;
          }
      }
    if (ut)
      return ut = T, je = je(ut), T = Fe === "" ? "." + Zt(ut, 0) : Fe, Ve(je) ? (me = "", T != null && (me = T.replace(mt, "$&/") + "/"), Be(je, Y, me, "", function(Jt) {
        return Jt;
      })) : je != null && (mn(je) && (je = wn(je, me + (!je.key || ut && ut.key === je.key ? "" : ("" + je.key).replace(mt, "$&/") + "/") + T)), Y.push(je)), 1;
    if (ut = 0, Fe = Fe === "" ? "." : Fe + ":", Ve(T))
      for (var dt = 0; dt < T.length; dt++) {
        ft = T[dt];
        var ot = Fe + Zt(ft, dt);
        ut += Be(ft, Y, me, ot, je);
      }
    else if (ot = K(T), typeof ot == "function")
      for (T = ot.call(T), dt = 0; !(ft = T.next()).done; )
        ft = ft.value, ot = Fe + Zt(ft, dt++), ut += Be(ft, Y, me, ot, je);
    else if (ft === "object")
      throw Y = String(T), Error("Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead.");
    return ut;
  }
  function Je(T, Y, me) {
    if (T == null)
      return T;
    var Fe = [], je = 0;
    return Be(T, Fe, "", "", function(ft) {
      return Y.call(me, ft, je++);
    }), Fe;
  }
  function Rt(T) {
    if (T._status === -1) {
      var Y = T._result;
      Y = Y(), Y.then(function(me) {
        (T._status === 0 || T._status === -1) && (T._status = 1, T._result = me);
      }, function(me) {
        (T._status === 0 || T._status === -1) && (T._status = 2, T._result = me);
      }), T._status === -1 && (T._status = 0, T._result = Y);
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result;
  }
  var et = { current: null }, $ = { transition: null }, he = { ReactCurrentDispatcher: et, ReactCurrentBatchConfig: $, ReactCurrentOwner: Te };
  return Et.Children = { map: Je, forEach: function(T, Y, me) {
    Je(T, function() {
      Y.apply(this, arguments);
    }, me);
  }, count: function(T) {
    var Y = 0;
    return Je(T, function() {
      Y++;
    }), Y;
  }, toArray: function(T) {
    return Je(T, function(Y) {
      return Y;
    }) || [];
  }, only: function(T) {
    if (!mn(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Et.Component = Qe, Et.Fragment = M, Et.Profiler = Ct, Et.PureComponent = ln, Et.StrictMode = Ze, Et.Suspense = nt, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, Et.cloneElement = function(T, Y, me) {
    if (T == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + T + ".");
    var Fe = te({}, T.props), je = T.key, ft = T.ref, ut = T._owner;
    if (Y != null) {
      if (Y.ref !== void 0 && (ft = Y.ref, ut = Te.current), Y.key !== void 0 && (je = "" + Y.key), T.type && T.type.defaultProps)
        var dt = T.type.defaultProps;
      for (ot in Y)
        _t.call(Y, ot) && !ct.hasOwnProperty(ot) && (Fe[ot] = Y[ot] === void 0 && dt !== void 0 ? dt[ot] : Y[ot]);
    }
    var ot = arguments.length - 2;
    if (ot === 1)
      Fe.children = me;
    else if (1 < ot) {
      dt = Array(ot);
      for (var Jt = 0; Jt < ot; Jt++)
        dt[Jt] = arguments[Jt + 2];
      Fe.children = dt;
    }
    return { $$typeof: j, type: T.type, key: je, ref: ft, props: Fe, _owner: ut };
  }, Et.createContext = function(T) {
    return T = { $$typeof: Xe, _currentValue: T, _currentValue2: T, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, T.Provider = { $$typeof: Yt, _context: T }, T.Consumer = T;
  }, Et.createElement = Ye, Et.createFactory = function(T) {
    var Y = Ye.bind(null, T);
    return Y.type = T, Y;
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(T) {
    return { $$typeof: S, render: T };
  }, Et.isValidElement = mn, Et.lazy = function(T) {
    return { $$typeof: ue, _payload: { _status: -1, _result: T }, _init: Rt };
  }, Et.memo = function(T, Y) {
    return { $$typeof: ke, type: T, compare: Y === void 0 ? null : Y };
  }, Et.startTransition = function(T) {
    var Y = $.transition;
    $.transition = {};
    try {
      T();
    } finally {
      $.transition = Y;
    }
  }, Et.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Et.useCallback = function(T, Y) {
    return et.current.useCallback(T, Y);
  }, Et.useContext = function(T) {
    return et.current.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T) {
    return et.current.useDeferredValue(T);
  }, Et.useEffect = function(T, Y) {
    return et.current.useEffect(T, Y);
  }, Et.useId = function() {
    return et.current.useId();
  }, Et.useImperativeHandle = function(T, Y, me) {
    return et.current.useImperativeHandle(T, Y, me);
  }, Et.useInsertionEffect = function(T, Y) {
    return et.current.useInsertionEffect(T, Y);
  }, Et.useLayoutEffect = function(T, Y) {
    return et.current.useLayoutEffect(T, Y);
  }, Et.useMemo = function(T, Y) {
    return et.current.useMemo(T, Y);
  }, Et.useReducer = function(T, Y, me) {
    return et.current.useReducer(T, Y, me);
  }, Et.useRef = function(T) {
    return et.current.useRef(T);
  }, Et.useState = function(T) {
    return et.current.useState(T);
  }, Et.useSyncExternalStore = function(T, Y, me) {
    return et.current.useSyncExternalStore(T, Y, me);
  }, Et.useTransition = function() {
    return et.current.useTransition();
  }, Et.version = "18.2.0", Et;
}
var Qp = { exports: {} };
Qp.exports;
var tR;
function aD() {
  return tR || (tR = 1, function(j, X) {
    var M = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    M.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Ze = "18.2.0", Ct = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Xe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), Qe = Symbol.for("react.offscreen"), sn = Symbol.iterator, ln = "@@iterator";
      function lt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = sn && h[sn] || h[ln];
        return typeof C == "function" ? C : null;
      }
      var Ve = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, _t = {
        transition: null
      }, Te = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, ct = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, Ye = {}, wn = null;
      function mn(h) {
        wn = h;
      }
      Ye.setExtraStackFrame = function(h) {
        wn = h;
      }, Ye.getCurrentStack = null, Ye.getStackAddendum = function() {
        var h = "";
        wn && (h += wn);
        var C = Ye.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var It = !1, mt = !1, Zt = !1, Be = !1, Je = !1, Rt = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: _t,
        ReactCurrentOwner: ct
      };
      Rt.ReactDebugCurrentFrame = Ye, Rt.ReactCurrentActQueue = Te;
      function et(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          he("warn", h, N);
        }
      }
      function $(h) {
        {
          for (var C = arguments.length, N = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            N[F - 1] = arguments[F];
          he("error", h, N);
        }
      }
      function he(h, C, N) {
        {
          var F = Rt.ReactDebugCurrentFrame, Z = F.getStackAddendum();
          Z !== "" && (C += "%s", N = N.concat([Z]));
          var Ee = N.map(function(fe) {
            return String(fe);
          });
          Ee.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ee);
        }
      }
      var T = {};
      function Y(h, C) {
        {
          var N = h.constructor, F = N && (N.displayName || N.name) || "ReactClass", Z = F + "." + C;
          if (T[Z])
            return;
          $("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, F), T[Z] = !0;
        }
      }
      var me = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(h) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(h, C, N) {
          Y(h, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(h, C, N, F) {
          Y(h, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(h, C, N, F) {
          Y(h, "setState");
        }
      }, Fe = Object.assign, je = {};
      Object.freeze(je);
      function ft(h, C, N) {
        this.props = h, this.context = C, this.refs = je, this.updater = N || me;
      }
      ft.prototype.isReactComponent = {}, ft.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, ft.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ut = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, dt = function(h, C) {
          Object.defineProperty(ft.prototype, h, {
            get: function() {
              et("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ot in ut)
          ut.hasOwnProperty(ot) && dt(ot, ut[ot]);
      }
      function Jt() {
      }
      Jt.prototype = ft.prototype;
      function Zn(h, C, N) {
        this.props = h, this.context = C, this.refs = je, this.updater = N || me;
      }
      var Jn = Zn.prototype = new Jt();
      Jn.constructor = Zn, Fe(Jn, ft.prototype), Jn.isPureReactComponent = !0;
      function Fr() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var vr = Array.isArray;
      function yn(h) {
        return vr(h);
      }
      function er(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, N = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return N;
        }
      }
      function Hn(h) {
        try {
          return Nn(h), !1;
        } catch {
          return !0;
        }
      }
      function Nn(h) {
        return "" + h;
      }
      function zn(h) {
        if (Hn(h))
          return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(h)), Nn(h);
      }
      function Tr(h, C, N) {
        var F = h.displayName;
        if (F)
          return F;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? N + "(" + Z + ")" : N;
      }
      function hr(h) {
        return h.displayName || "Context";
      }
      function Vn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Xe:
            return "Fragment";
          case Yt:
            return "Portal";
          case nt:
            return "Profiler";
          case S:
            return "StrictMode";
          case K:
            return "Suspense";
          case Oe:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case ue:
              var C = h;
              return hr(C) + ".Consumer";
            case ke:
              var N = h;
              return hr(N._context) + ".Provider";
            case Re:
              return Tr(h, h.render, "ForwardRef");
            case te:
              var F = h.displayName || null;
              return F !== null ? F : Vn(h.type) || "Memo";
            case oe: {
              var Z = h, Ee = Z._payload, fe = Z._init;
              try {
                return Vn(fe(Ee));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var la = Object.prototype.hasOwnProperty, ua = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, mr, oa, tr;
      tr = {};
      function wr(h) {
        if (la.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function un(h) {
        if (la.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function sa(h, C) {
        var N = function() {
          mr || (mr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: N,
          configurable: !0
        });
      }
      function ca(h, C) {
        var N = function() {
          oa || (oa = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        N.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: N,
          configurable: !0
        });
      }
      function fa(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = Vn(ct.current.type);
          tr[C] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), tr[C] = !0);
        }
      }
      var ae = function(h, C, N, F, Z, Ee, fe) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ct,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: N,
          props: fe,
          // Record the component responsible for creating this element.
          _owner: Ee
        };
        return Pe._store = {}, Object.defineProperty(Pe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(Pe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: F
        }), Object.defineProperty(Pe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: Z
        }), Object.freeze && (Object.freeze(Pe.props), Object.freeze(Pe)), Pe;
      };
      function De(h, C, N) {
        var F, Z = {}, Ee = null, fe = null, Pe = null, it = null;
        if (C != null) {
          wr(C) && (fe = C.ref, fa(C)), un(C) && (zn(C.key), Ee = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, it = C.__source === void 0 ? null : C.__source;
          for (F in C)
            la.call(C, F) && !ua.hasOwnProperty(F) && (Z[F] = C[F]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          Z.children = N;
        else if (zt > 1) {
          for (var Ft = Array(zt), jt = 0; jt < zt; jt++)
            Ft[jt] = arguments[jt + 2];
          Object.freeze && Object.freeze(Ft), Z.children = Ft;
        }
        if (h && h.defaultProps) {
          var Ht = h.defaultProps;
          for (F in Ht)
            Z[F] === void 0 && (Z[F] = Ht[F]);
        }
        if (Ee || fe) {
          var tn = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          Ee && sa(Z, tn), fe && ca(Z, tn);
        }
        return ae(h, Ee, fe, Pe, it, ct.current, Z);
      }
      function rt(h, C) {
        var N = ae(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return N;
      }
      function Mt(h, C, N) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var F, Z = Fe({}, h.props), Ee = h.key, fe = h.ref, Pe = h._self, it = h._source, zt = h._owner;
        if (C != null) {
          wr(C) && (fe = C.ref, zt = ct.current), un(C) && (zn(C.key), Ee = "" + C.key);
          var Ft;
          h.type && h.type.defaultProps && (Ft = h.type.defaultProps);
          for (F in C)
            la.call(C, F) && !ua.hasOwnProperty(F) && (C[F] === void 0 && Ft !== void 0 ? Z[F] = Ft[F] : Z[F] = C[F]);
        }
        var jt = arguments.length - 2;
        if (jt === 1)
          Z.children = N;
        else if (jt > 1) {
          for (var Ht = Array(jt), tn = 0; tn < jt; tn++)
            Ht[tn] = arguments[tn + 2];
          Z.children = Ht;
        }
        return ae(h.type, Ee, fe, Pe, it, zt, Z);
      }
      function xt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === Ct;
      }
      var bn = ".", cn = ":";
      function yr(h) {
        var C = /[=:]/g, N = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(Z) {
          return N[Z];
        });
        return "$" + F;
      }
      var At = !1, Qn = /\/+/g;
      function Nt(h) {
        return h.replace(Qn, "$&/");
      }
      function Qt(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (zn(h.key), yr("" + h.key)) : C.toString(36);
      }
      function qa(h, C, N, F, Z) {
        var Ee = typeof h;
        (Ee === "undefined" || Ee === "boolean") && (h = null);
        var fe = !1;
        if (h === null)
          fe = !0;
        else
          switch (Ee) {
            case "string":
            case "number":
              fe = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case Ct:
                case Yt:
                  fe = !0;
              }
          }
        if (fe) {
          var Pe = h, it = Z(Pe), zt = F === "" ? bn + Qt(Pe, 0) : F;
          if (yn(it)) {
            var Ft = "";
            zt != null && (Ft = Nt(zt) + "/"), qa(it, C, Ft, "", function(Wf) {
              return Wf;
            });
          } else
            it != null && (xt(it) && (it.key && (!Pe || Pe.key !== it.key) && zn(it.key), it = rt(
              it,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              N + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (it.key && (!Pe || Pe.key !== it.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Nt("" + it.key) + "/"
              ) : "") + zt
            )), C.push(it));
          return 1;
        }
        var jt, Ht, tn = 0, wt = F === "" ? bn : F + cn;
        if (yn(h))
          for (var gl = 0; gl < h.length; gl++)
            jt = h[gl], Ht = wt + Qt(jt, gl), tn += qa(jt, C, N, Ht, Z);
        else {
          var Qu = lt(h);
          if (typeof Qu == "function") {
            var ns = h;
            Qu === ns.entries && (At || et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var rs = Qu.call(ns), ji, as = 0; !(ji = rs.next()).done; )
              jt = ji.value, Ht = wt + Qt(jt, as++), tn += qa(jt, C, N, Ht, Z);
          } else if (Ee === "object") {
            var is = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (is === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : is) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function ba(h, C, N) {
        if (h == null)
          return h;
        var F = [], Z = 0;
        return qa(h, F, "", "", function(Ee) {
          return C.call(N, Ee, Z++);
        }), F;
      }
      function cl(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, N) {
        ba(h, function() {
          C.apply(this, arguments);
        }, N);
      }
      function ql(h) {
        return ba(h, function(C) {
          return C;
        }) || [];
      }
      function fl(h) {
        if (!xt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Xa(h) {
        var C = {
          $$typeof: ue,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: h,
          _currentValue2: h,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: ke,
          _context: C
        };
        var N = !1, F = !1, Z = !1;
        {
          var Ee = {
            $$typeof: ue,
            _context: C
          };
          Object.defineProperties(Ee, {
            Provider: {
              get: function() {
                return F || (F = !0, $("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(fe) {
                C.Provider = fe;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(fe) {
                C._currentValue = fe;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(fe) {
                C._currentValue2 = fe;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(fe) {
                C._threadCount = fe;
              }
            },
            Consumer: {
              get: function() {
                return N || (N = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(fe) {
                Z || (et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), Z = !0);
              }
            }
          }), C.Consumer = Ee;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Ka = -1, _a = 0, Li = 1, jr = 2;
      function Hr(h) {
        if (h._status === Ka) {
          var C = h._result, N = C();
          if (N.then(function(Ee) {
            if (h._status === _a || h._status === Ka) {
              var fe = h;
              fe._status = Li, fe._result = Ee;
            }
          }, function(Ee) {
            if (h._status === _a || h._status === Ka) {
              var fe = h;
              fe._status = jr, fe._result = Ee;
            }
          }), h._status === Ka) {
            var F = h;
            F._status = _a, F._result = N;
          }
        }
        if (h._status === Li) {
          var Z = h._result;
          return Z === void 0 && $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, Z), "default" in Z || $(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, Z), Z.default;
        } else
          throw h._result;
      }
      function da(h) {
        var C = {
          // We use these fields to store the result.
          _status: Ka,
          _result: h
        }, N = {
          $$typeof: oe,
          _payload: C,
          _init: Hr
        };
        {
          var F, Z;
          Object.defineProperties(N, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ee) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ee, Object.defineProperty(N, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return Z;
              },
              set: function(Ee) {
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Ee, Object.defineProperty(N, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return N;
      }
      function Mi(h) {
        h != null && h.$$typeof === te ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? $("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Re,
          render: h
        };
        {
          var N;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return N;
            },
            set: function(F) {
              N = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Xe || h === nt || Je || h === S || h === K || h === Oe || Be || h === Qe || It || mt || Zt || typeof h == "object" && h !== null && (h.$$typeof === oe || h.$$typeof === te || h.$$typeof === ke || h.$$typeof === ue || h.$$typeof === Re || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        Q(h) || $("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var N = {
          $$typeof: te,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(N, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return F;
            },
            set: function(Z) {
              F = Z, !h.name && !h.displayName && (h.displayName = Z);
            }
          });
        }
        return N;
      }
      function ie() {
        var h = Ve.current;
        return h === null && $(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function st(h) {
        var C = ie();
        if (h._context !== void 0) {
          var N = h._context;
          N.Consumer === h ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : N.Provider === h && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function yt(h) {
        var C = ie();
        return C.useState(h);
      }
      function tt(h, C, N) {
        var F = ie();
        return F.useReducer(h, C, N);
      }
      function Le(h) {
        var C = ie();
        return C.useRef(h);
      }
      function Un(h, C) {
        var N = ie();
        return N.useEffect(h, C);
      }
      function Wt(h, C) {
        var N = ie();
        return N.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var N = ie();
        return N.useLayoutEffect(h, C);
      }
      function gr(h, C) {
        var N = ie();
        return N.useCallback(h, C);
      }
      function oi(h, C) {
        var N = ie();
        return N.useMemo(h, C);
      }
      function qt(h, C, N) {
        var F = ie();
        return F.useImperativeHandle(h, C, N);
      }
      function Vr(h, C) {
        {
          var N = ie();
          return N.useDebugValue(h, C);
        }
      }
      function Io() {
        var h = ie();
        return h.useTransition();
      }
      function si(h) {
        var C = ie();
        return C.useDeferredValue(h);
      }
      function at() {
        var h = ie();
        return h.useId();
      }
      function Xl(h, C, N) {
        var F = ie();
        return F.useSyncExternalStore(h, C, N);
      }
      var Ni = 0, dl, Pr, Qo, br, Wo, Go, qo;
      function Kl() {
      }
      Kl.__reactDisabledLog = !0;
      function ju() {
        {
          if (Ni === 0) {
            dl = console.log, Pr = console.info, Qo = console.warn, br = console.error, Wo = console.group, Go = console.groupCollapsed, qo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Kl,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Ni++;
        }
      }
      function zi() {
        {
          if (Ni--, Ni === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: Fe({}, h, {
                value: dl
              }),
              info: Fe({}, h, {
                value: Pr
              }),
              warn: Fe({}, h, {
                value: Qo
              }),
              error: Fe({}, h, {
                value: br
              }),
              group: Fe({}, h, {
                value: Wo
              }),
              groupCollapsed: Fe({}, h, {
                value: Go
              }),
              groupEnd: Fe({}, h, {
                value: qo
              })
            });
          }
          Ni < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ci = Rt.ReactCurrentDispatcher, xa;
      function pl(h, C, N) {
        {
          if (xa === void 0)
            try {
              throw Error();
            } catch (Z) {
              var F = Z.stack.trim().match(/\n( *(at )?)/);
              xa = F && F[1] || "";
            }
          return `
` + xa + h;
        }
      }
      var fi = !1, Zl;
      {
        var Jl = typeof WeakMap == "function" ? WeakMap : Map;
        Zl = new Jl();
      }
      function vl(h, C) {
        if (!h || fi)
          return "";
        {
          var N = Zl.get(h);
          if (N !== void 0)
            return N;
        }
        var F;
        fi = !0;
        var Z = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var Ee;
        Ee = ci.current, ci.current = null, ju();
        try {
          if (C) {
            var fe = function() {
              throw Error();
            };
            if (Object.defineProperty(fe.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(fe, []);
              } catch (wt) {
                F = wt;
              }
              Reflect.construct(h, [], fe);
            } else {
              try {
                fe.call();
              } catch (wt) {
                F = wt;
              }
              h.call(fe.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (wt) {
              F = wt;
            }
            h();
          }
        } catch (wt) {
          if (wt && F && typeof wt.stack == "string") {
            for (var Pe = wt.stack.split(`
`), it = F.stack.split(`
`), zt = Pe.length - 1, Ft = it.length - 1; zt >= 1 && Ft >= 0 && Pe[zt] !== it[Ft]; )
              Ft--;
            for (; zt >= 1 && Ft >= 0; zt--, Ft--)
              if (Pe[zt] !== it[Ft]) {
                if (zt !== 1 || Ft !== 1)
                  do
                    if (zt--, Ft--, Ft < 0 || Pe[zt] !== it[Ft]) {
                      var jt = `
` + Pe[zt].replace(" at new ", " at ");
                      return h.displayName && jt.includes("<anonymous>") && (jt = jt.replace("<anonymous>", h.displayName)), typeof h == "function" && Zl.set(h, jt), jt;
                    }
                  while (zt >= 1 && Ft >= 0);
                break;
              }
          }
        } finally {
          fi = !1, ci.current = Ee, zi(), Error.prepareStackTrace = Z;
        }
        var Ht = h ? h.displayName || h.name : "", tn = Ht ? pl(Ht) : "";
        return typeof h == "function" && Zl.set(h, tn), tn;
      }
      function Xo(h, C, N) {
        return vl(h, !1);
      }
      function Ko(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function ht(h, C, N) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return vl(h, Ko(h));
        if (typeof h == "string")
          return pl(h);
        switch (h) {
          case K:
            return pl("Suspense");
          case Oe:
            return pl("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Re:
              return Xo(h.render);
            case te:
              return ht(h.type, C, N);
            case oe: {
              var F = h, Z = F._payload, Ee = F._init;
              try {
                return ht(Ee(Z), C, N);
              } catch {
              }
            }
          }
        return "";
      }
      var Zo = {}, Hu = Rt.ReactDebugCurrentFrame;
      function hl(h) {
        if (h) {
          var C = h._owner, N = ht(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(N);
        } else
          Hu.setExtraStackFrame(null);
      }
      function Jo(h, C, N, F, Z) {
        {
          var Ee = Function.call.bind(la);
          for (var fe in h)
            if (Ee(h, fe)) {
              var Pe = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var it = Error((F || "React class") + ": " + N + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw it.name = "Invariant Violation", it;
                }
                Pe = h[fe](C, fe, F, N, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                Pe = zt;
              }
              Pe && !(Pe instanceof Error) && (hl(Z), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", N, fe, typeof Pe), hl(null)), Pe instanceof Error && !(Pe.message in Zo) && (Zo[Pe.message] = !0, hl(Z), $("Failed %s type: %s", N, Pe.message), hl(null));
            }
        }
      }
      function Tt(h) {
        if (h) {
          var C = h._owner, N = ht(h.type, h._source, C ? C.type : null);
          mn(N);
        } else
          mn(null);
      }
      var Vu;
      Vu = !1;
      function eu() {
        if (ct.current) {
          var h = Vn(ct.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ie(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), N = h.lineNumber;
          return `

Check your code at ` + C + ":" + N + ".";
        }
        return "";
      }
      function Za(h) {
        return h != null ? Ie(h.__source) : "";
      }
      var fn = {};
      function Br(h) {
        var C = eu();
        if (!C) {
          var N = typeof h == "string" ? h : h.displayName || h.name;
          N && (C = `

Check the top-level render call using <` + N + ">.");
        }
        return C;
      }
      function Da(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var N = Br(C);
          if (!fn[N]) {
            fn[N] = !0;
            var F = "";
            h && h._owner && h._owner !== ct.current && (F = " It was passed a child from " + Vn(h._owner.type) + "."), Tt(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', N, F), Tt(null);
          }
        }
      }
      function ml(h, C) {
        if (typeof h == "object") {
          if (yn(h))
            for (var N = 0; N < h.length; N++) {
              var F = h[N];
              xt(F) && Da(F, C);
            }
          else if (xt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var Z = lt(h);
            if (typeof Z == "function" && Z !== h.entries)
              for (var Ee = Z.call(h), fe; !(fe = Ee.next()).done; )
                xt(fe.value) && Da(fe.value, C);
          }
        }
      }
      function en(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var N;
          if (typeof C == "function")
            N = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Re || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === te))
            N = C.propTypes;
          else
            return;
          if (N) {
            var F = Vn(C);
            Jo(N, h.props, "prop", F, h);
          } else if (C.PropTypes !== void 0 && !Vu) {
            Vu = !0;
            var Z = Vn(C);
            $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Z || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function dn(h) {
        {
          for (var C = Object.keys(h.props), N = 0; N < C.length; N++) {
            var F = C[N];
            if (F !== "children" && F !== "key") {
              Tt(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Tt(null);
              break;
            }
          }
          h.ref !== null && (Tt(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
        }
      }
      function es(h, C, N) {
        var F = Q(h);
        if (!F) {
          var Z = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (Z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ee = Za(C);
          Ee ? Z += Ee : Z += eu();
          var fe;
          h === null ? fe = "null" : yn(h) ? fe = "array" : h !== void 0 && h.$$typeof === Ct ? (fe = "<" + (Vn(h.type) || "Unknown") + " />", Z = " Did you accidentally export a JSX literal instead of a component?") : fe = typeof h, $("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", fe, Z);
        }
        var Pe = De.apply(this, arguments);
        if (Pe == null)
          return Pe;
        if (F)
          for (var it = 2; it < arguments.length; it++)
            ml(arguments[it], h);
        return h === Xe ? dn(Pe) : en(Pe), Pe;
      }
      var nr = !1;
      function $r(h) {
        var C = es.bind(null, h);
        return C.type = h, nr || (nr = !0, et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, N) {
        for (var F = Mt.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          ml(arguments[Z], F.type);
        return en(F), F;
      }
      function Pu(h, C) {
        var N = _t.transition;
        _t.transition = {};
        var F = _t.transition;
        _t.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (_t.transition = N, N === null && F._updatedFibers) {
            var Z = F._updatedFibers.size;
            Z > 10 && et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var tu = !1, nu = null;
      function yl(h) {
        if (nu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), N = j && j[C];
            nu = N.call(j, "timers").setImmediate;
          } catch {
            nu = function(Z) {
              tu === !1 && (tu = !0, typeof MessageChannel > "u" && $("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var Ee = new MessageChannel();
              Ee.port1.onmessage = Z, Ee.port2.postMessage(void 0);
            };
          }
        return nu(h);
      }
      var ka = 0, Ui = !1;
      function Bu(h) {
        {
          var C = ka;
          ka++, Te.current === null && (Te.current = []);
          var N = Te.isBatchingLegacy, F;
          try {
            if (Te.isBatchingLegacy = !0, F = h(), !N && Te.didScheduleLegacyUpdate) {
              var Z = Te.current;
              Z !== null && (Te.didScheduleLegacyUpdate = !1, Fi(Z));
            }
          } catch (Ht) {
            throw Ai(C), Ht;
          } finally {
            Te.isBatchingLegacy = N;
          }
          if (F !== null && typeof F == "object" && typeof F.then == "function") {
            var Ee = F, fe = !1, Pe = {
              then: function(Ht, tn) {
                fe = !0, Ee.then(function(wt) {
                  Ai(C), ka === 0 ? $u(wt, Ht, tn) : Ht(wt);
                }, function(wt) {
                  Ai(C), tn(wt);
                });
              }
            };
            return !Ui && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              fe || (Ui = !0, $("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), Pe;
          } else {
            var it = F;
            if (Ai(C), ka === 0) {
              var zt = Te.current;
              zt !== null && (Fi(zt), Te.current = null);
              var Ft = {
                then: function(Ht, tn) {
                  Te.current === null ? (Te.current = [], $u(it, Ht, tn)) : Ht(it);
                }
              };
              return Ft;
            } else {
              var jt = {
                then: function(Ht, tn) {
                  Ht(it);
                }
              };
              return jt;
            }
          }
        }
      }
      function Ai(h) {
        h !== ka - 1 && $("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ka = h;
      }
      function $u(h, C, N) {
        {
          var F = Te.current;
          if (F !== null)
            try {
              Fi(F), yl(function() {
                F.length === 0 ? (Te.current = null, C(h)) : $u(h, C, N);
              });
            } catch (Z) {
              N(Z);
            }
          else
            C(h);
        }
      }
      var di = !1;
      function Fi(h) {
        if (!di) {
          di = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var N = h[C];
              do
                N = N(!0);
              while (N !== null);
            }
            h.length = 0;
          } catch (F) {
            throw h = h.slice(C + 1), F;
          } finally {
            di = !1;
          }
        }
      }
      var Yu = es, ts = Ja, ei = $r, Iu = {
        map: ba,
        forEach: Gl,
        count: cl,
        toArray: ql,
        only: fl
      };
      X.Children = Iu, X.Component = ft, X.Fragment = Xe, X.Profiler = nt, X.PureComponent = Zn, X.StrictMode = S, X.Suspense = K, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rt, X.cloneElement = ts, X.createContext = Xa, X.createElement = Yu, X.createFactory = ei, X.createRef = Fr, X.forwardRef = Mi, X.isValidElement = xt, X.lazy = da, X.memo = ne, X.startTransition = Pu, X.unstable_act = Bu, X.useCallback = gr, X.useContext = st, X.useDebugValue = Vr, X.useDeferredValue = si, X.useEffect = Un, X.useId = at, X.useImperativeHandle = qt, X.useInsertionEffect = Wt, X.useLayoutEffect = Gt, X.useMemo = oi, X.useReducer = tt, X.useRef = Le, X.useState = yt, X.useSyncExternalStore = Xl, X.useTransition = Io, X.version = Ze, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Qp, Qp.exports)), Qp.exports;
}
var iD = {};
iD.NODE_ENV === "production" ? m0.exports = rD() : m0.exports = aD();
var Qf = m0.exports;
const cR = /* @__PURE__ */ nD(Qf);
var y0 = { exports: {} }, Wa = {}, Fm = { exports: {} }, d0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nR;
function lD() {
  return nR || (nR = 1, function(j) {
    function X($, he) {
      var T = $.length;
      $.push(he);
      e:
        for (; 0 < T; ) {
          var Y = T - 1 >>> 1, me = $[Y];
          if (0 < Ct(me, he))
            $[Y] = he, $[T] = me, T = Y;
          else
            break e;
        }
    }
    function M($) {
      return $.length === 0 ? null : $[0];
    }
    function Ze($) {
      if ($.length === 0)
        return null;
      var he = $[0], T = $.pop();
      if (T !== he) {
        $[0] = T;
        e:
          for (var Y = 0, me = $.length, Fe = me >>> 1; Y < Fe; ) {
            var je = 2 * (Y + 1) - 1, ft = $[je], ut = je + 1, dt = $[ut];
            if (0 > Ct(ft, T))
              ut < me && 0 > Ct(dt, ft) ? ($[Y] = dt, $[ut] = T, Y = ut) : ($[Y] = ft, $[je] = T, Y = je);
            else if (ut < me && 0 > Ct(dt, T))
              $[Y] = dt, $[ut] = T, Y = ut;
            else
              break e;
          }
      }
      return he;
    }
    function Ct($, he) {
      var T = $.sortIndex - he.sortIndex;
      return T !== 0 ? T : $.id - he.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Yt = performance;
      j.unstable_now = function() {
        return Yt.now();
      };
    } else {
      var Xe = Date, S = Xe.now();
      j.unstable_now = function() {
        return Xe.now() - S;
      };
    }
    var nt = [], ke = [], ue = 1, Re = null, K = 3, Oe = !1, te = !1, oe = !1, Qe = typeof setTimeout == "function" ? setTimeout : null, sn = typeof clearTimeout == "function" ? clearTimeout : null, ln = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function lt($) {
      for (var he = M(ke); he !== null; ) {
        if (he.callback === null)
          Ze(ke);
        else if (he.startTime <= $)
          Ze(ke), he.sortIndex = he.expirationTime, X(nt, he);
        else
          break;
        he = M(ke);
      }
    }
    function Ve($) {
      if (oe = !1, lt($), !te)
        if (M(nt) !== null)
          te = !0, Rt(_t);
        else {
          var he = M(ke);
          he !== null && et(Ve, he.startTime - $);
        }
    }
    function _t($, he) {
      te = !1, oe && (oe = !1, sn(Ye), Ye = -1), Oe = !0;
      var T = K;
      try {
        for (lt(he), Re = M(nt); Re !== null && (!(Re.expirationTime > he) || $ && !It()); ) {
          var Y = Re.callback;
          if (typeof Y == "function") {
            Re.callback = null, K = Re.priorityLevel;
            var me = Y(Re.expirationTime <= he);
            he = j.unstable_now(), typeof me == "function" ? Re.callback = me : Re === M(nt) && Ze(nt), lt(he);
          } else
            Ze(nt);
          Re = M(nt);
        }
        if (Re !== null)
          var Fe = !0;
        else {
          var je = M(ke);
          je !== null && et(Ve, je.startTime - he), Fe = !1;
        }
        return Fe;
      } finally {
        Re = null, K = T, Oe = !1;
      }
    }
    var Te = !1, ct = null, Ye = -1, wn = 5, mn = -1;
    function It() {
      return !(j.unstable_now() - mn < wn);
    }
    function mt() {
      if (ct !== null) {
        var $ = j.unstable_now();
        mn = $;
        var he = !0;
        try {
          he = ct(!0, $);
        } finally {
          he ? Zt() : (Te = !1, ct = null);
        }
      } else
        Te = !1;
    }
    var Zt;
    if (typeof ln == "function")
      Zt = function() {
        ln(mt);
      };
    else if (typeof MessageChannel < "u") {
      var Be = new MessageChannel(), Je = Be.port2;
      Be.port1.onmessage = mt, Zt = function() {
        Je.postMessage(null);
      };
    } else
      Zt = function() {
        Qe(mt, 0);
      };
    function Rt($) {
      ct = $, Te || (Te = !0, Zt());
    }
    function et($, he) {
      Ye = Qe(function() {
        $(j.unstable_now());
      }, he);
    }
    j.unstable_IdlePriority = 5, j.unstable_ImmediatePriority = 1, j.unstable_LowPriority = 4, j.unstable_NormalPriority = 3, j.unstable_Profiling = null, j.unstable_UserBlockingPriority = 2, j.unstable_cancelCallback = function($) {
      $.callback = null;
    }, j.unstable_continueExecution = function() {
      te || Oe || (te = !0, Rt(_t));
    }, j.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, j.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, j.unstable_getFirstCallbackNode = function() {
      return M(nt);
    }, j.unstable_next = function($) {
      switch (K) {
        case 1:
        case 2:
        case 3:
          var he = 3;
          break;
        default:
          he = K;
      }
      var T = K;
      K = he;
      try {
        return $();
      } finally {
        K = T;
      }
    }, j.unstable_pauseExecution = function() {
    }, j.unstable_requestPaint = function() {
    }, j.unstable_runWithPriority = function($, he) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var T = K;
      K = $;
      try {
        return he();
      } finally {
        K = T;
      }
    }, j.unstable_scheduleCallback = function($, he, T) {
      var Y = j.unstable_now();
      switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? Y + T : Y) : T = Y, $) {
        case 1:
          var me = -1;
          break;
        case 2:
          me = 250;
          break;
        case 5:
          me = 1073741823;
          break;
        case 4:
          me = 1e4;
          break;
        default:
          me = 5e3;
      }
      return me = T + me, $ = { id: ue++, callback: he, priorityLevel: $, startTime: T, expirationTime: me, sortIndex: -1 }, T > Y ? ($.sortIndex = T, X(ke, $), M(nt) === null && $ === M(ke) && (oe ? (sn(Ye), Ye = -1) : oe = !0, et(Ve, T - Y))) : ($.sortIndex = me, X(nt, $), te || Oe || (te = !0, Rt(_t))), $;
    }, j.unstable_shouldYield = It, j.unstable_wrapCallback = function($) {
      var he = K;
      return function() {
        var T = K;
        K = he;
        try {
          return $.apply(this, arguments);
        } finally {
          K = T;
        }
      };
    };
  }(d0)), d0;
}
var p0 = {}, rR;
function uD() {
  return rR || (rR = 1, function(j) {
    var X = {};
    /**
     * @license React
     * scheduler.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    X.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var M = !1, Ze = !1, Ct = 5;
      function Yt(ae, De) {
        var rt = ae.length;
        ae.push(De), nt(ae, De, rt);
      }
      function Xe(ae) {
        return ae.length === 0 ? null : ae[0];
      }
      function S(ae) {
        if (ae.length === 0)
          return null;
        var De = ae[0], rt = ae.pop();
        return rt !== De && (ae[0] = rt, ke(ae, rt, 0)), De;
      }
      function nt(ae, De, rt) {
        for (var Mt = rt; Mt > 0; ) {
          var xt = Mt - 1 >>> 1, bn = ae[xt];
          if (ue(bn, De) > 0)
            ae[xt] = De, ae[Mt] = bn, Mt = xt;
          else
            return;
        }
      }
      function ke(ae, De, rt) {
        for (var Mt = rt, xt = ae.length, bn = xt >>> 1; Mt < bn; ) {
          var cn = (Mt + 1) * 2 - 1, yr = ae[cn], At = cn + 1, Qn = ae[At];
          if (ue(yr, De) < 0)
            At < xt && ue(Qn, yr) < 0 ? (ae[Mt] = Qn, ae[At] = De, Mt = At) : (ae[Mt] = yr, ae[cn] = De, Mt = cn);
          else if (At < xt && ue(Qn, De) < 0)
            ae[Mt] = Qn, ae[At] = De, Mt = At;
          else
            return;
        }
      }
      function ue(ae, De) {
        var rt = ae.sortIndex - De.sortIndex;
        return rt !== 0 ? rt : ae.id - De.id;
      }
      var Re = 1, K = 2, Oe = 3, te = 4, oe = 5;
      function Qe(ae, De) {
      }
      var sn = typeof performance == "object" && typeof performance.now == "function";
      if (sn) {
        var ln = performance;
        j.unstable_now = function() {
          return ln.now();
        };
      } else {
        var lt = Date, Ve = lt.now();
        j.unstable_now = function() {
          return lt.now() - Ve;
        };
      }
      var _t = 1073741823, Te = -1, ct = 250, Ye = 5e3, wn = 1e4, mn = _t, It = [], mt = [], Zt = 1, Be = null, Je = Oe, Rt = !1, et = !1, $ = !1, he = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function me(ae) {
        for (var De = Xe(mt); De !== null; ) {
          if (De.callback === null)
            S(mt);
          else if (De.startTime <= ae)
            S(mt), De.sortIndex = De.expirationTime, Yt(It, De);
          else
            return;
          De = Xe(mt);
        }
      }
      function Fe(ae) {
        if ($ = !1, me(ae), !et)
          if (Xe(It) !== null)
            et = !0, wr(je);
          else {
            var De = Xe(mt);
            De !== null && un(Fe, De.startTime - ae);
          }
      }
      function je(ae, De) {
        et = !1, $ && ($ = !1, sa()), Rt = !0;
        var rt = Je;
        try {
          var Mt;
          if (!Ze)
            return ft(ae, De);
        } finally {
          Be = null, Je = rt, Rt = !1;
        }
      }
      function ft(ae, De) {
        var rt = De;
        for (me(rt), Be = Xe(It); Be !== null && !M && !(Be.expirationTime > rt && (!ae || hr())); ) {
          var Mt = Be.callback;
          if (typeof Mt == "function") {
            Be.callback = null, Je = Be.priorityLevel;
            var xt = Be.expirationTime <= rt, bn = Mt(xt);
            rt = j.unstable_now(), typeof bn == "function" ? Be.callback = bn : Be === Xe(It) && S(It), me(rt);
          } else
            S(It);
          Be = Xe(It);
        }
        if (Be !== null)
          return !0;
        var cn = Xe(mt);
        return cn !== null && un(Fe, cn.startTime - rt), !1;
      }
      function ut(ae, De) {
        switch (ae) {
          case Re:
          case K:
          case Oe:
          case te:
          case oe:
            break;
          default:
            ae = Oe;
        }
        var rt = Je;
        Je = ae;
        try {
          return De();
        } finally {
          Je = rt;
        }
      }
      function dt(ae) {
        var De;
        switch (Je) {
          case Re:
          case K:
          case Oe:
            De = Oe;
            break;
          default:
            De = Je;
            break;
        }
        var rt = Je;
        Je = De;
        try {
          return ae();
        } finally {
          Je = rt;
        }
      }
      function ot(ae) {
        var De = Je;
        return function() {
          var rt = Je;
          Je = De;
          try {
            return ae.apply(this, arguments);
          } finally {
            Je = rt;
          }
        };
      }
      function Jt(ae, De, rt) {
        var Mt = j.unstable_now(), xt;
        if (typeof rt == "object" && rt !== null) {
          var bn = rt.delay;
          typeof bn == "number" && bn > 0 ? xt = Mt + bn : xt = Mt;
        } else
          xt = Mt;
        var cn;
        switch (ae) {
          case Re:
            cn = Te;
            break;
          case K:
            cn = ct;
            break;
          case oe:
            cn = mn;
            break;
          case te:
            cn = wn;
            break;
          case Oe:
          default:
            cn = Ye;
            break;
        }
        var yr = xt + cn, At = {
          id: Zt++,
          callback: De,
          priorityLevel: ae,
          startTime: xt,
          expirationTime: yr,
          sortIndex: -1
        };
        return xt > Mt ? (At.sortIndex = xt, Yt(mt, At), Xe(It) === null && At === Xe(mt) && ($ ? sa() : $ = !0, un(Fe, xt - Mt))) : (At.sortIndex = yr, Yt(It, At), !et && !Rt && (et = !0, wr(je))), At;
      }
      function Zn() {
      }
      function Jn() {
        !et && !Rt && (et = !0, wr(je));
      }
      function Fr() {
        return Xe(It);
      }
      function vr(ae) {
        ae.callback = null;
      }
      function yn() {
        return Je;
      }
      var er = !1, Hn = null, Nn = -1, zn = Ct, Tr = -1;
      function hr() {
        var ae = j.unstable_now() - Tr;
        return !(ae < zn);
      }
      function Vn() {
      }
      function la(ae) {
        if (ae < 0 || ae > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        ae > 0 ? zn = Math.floor(1e3 / ae) : zn = Ct;
      }
      var ua = function() {
        if (Hn !== null) {
          var ae = j.unstable_now();
          Tr = ae;
          var De = !0, rt = !0;
          try {
            rt = Hn(De, ae);
          } finally {
            rt ? mr() : (er = !1, Hn = null);
          }
        } else
          er = !1;
      }, mr;
      if (typeof Y == "function")
        mr = function() {
          Y(ua);
        };
      else if (typeof MessageChannel < "u") {
        var oa = new MessageChannel(), tr = oa.port2;
        oa.port1.onmessage = ua, mr = function() {
          tr.postMessage(null);
        };
      } else
        mr = function() {
          he(ua, 0);
        };
      function wr(ae) {
        Hn = ae, er || (er = !0, mr());
      }
      function un(ae, De) {
        Nn = he(function() {
          ae(j.unstable_now());
        }, De);
      }
      function sa() {
        T(Nn), Nn = -1;
      }
      var ca = Vn, fa = null;
      j.unstable_IdlePriority = oe, j.unstable_ImmediatePriority = Re, j.unstable_LowPriority = te, j.unstable_NormalPriority = Oe, j.unstable_Profiling = fa, j.unstable_UserBlockingPriority = K, j.unstable_cancelCallback = vr, j.unstable_continueExecution = Jn, j.unstable_forceFrameRate = la, j.unstable_getCurrentPriorityLevel = yn, j.unstable_getFirstCallbackNode = Fr, j.unstable_next = dt, j.unstable_pauseExecution = Zn, j.unstable_requestPaint = ca, j.unstable_runWithPriority = ut, j.unstable_scheduleCallback = Jt, j.unstable_shouldYield = hr, j.unstable_wrapCallback = ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(p0)), p0;
}
var aR;
function fR() {
  if (aR)
    return Fm.exports;
  aR = 1;
  var j = {};
  return j.NODE_ENV === "production" ? Fm.exports = lD() : Fm.exports = uD(), Fm.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var iR;
function oD() {
  if (iR)
    return Wa;
  iR = 1;
  var j = Qf, X = fR();
  function M(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Ze = /* @__PURE__ */ new Set(), Ct = {};
  function Yt(n, r) {
    Xe(n, r), Xe(n + "Capture", r);
  }
  function Xe(n, r) {
    for (Ct[n] = r, n = 0; n < r.length; n++)
      Ze.add(r[n]);
  }
  var S = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nt = Object.prototype.hasOwnProperty, ke = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ue = {}, Re = {};
  function K(n) {
    return nt.call(Re, n) ? !0 : nt.call(ue, n) ? !1 : ke.test(n) ? Re[n] = !0 : (ue[n] = !0, !1);
  }
  function Oe(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function te(n, r, l, o) {
    if (r === null || typeof r > "u" || Oe(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function oe(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var Qe = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    Qe[n] = new oe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    Qe[r] = new oe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    Qe[n] = new oe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    Qe[n] = new oe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    Qe[n] = new oe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    Qe[n] = new oe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    Qe[n] = new oe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    Qe[n] = new oe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    Qe[n] = new oe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var sn = /[\-:]([a-z])/g;
  function ln(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      sn,
      ln
    );
    Qe[r] = new oe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(sn, ln);
    Qe[r] = new oe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(sn, ln);
    Qe[r] = new oe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    Qe[n] = new oe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), Qe.xlinkHref = new oe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    Qe[n] = new oe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function lt(n, r, l, o) {
    var c = Qe.hasOwnProperty(r) ? Qe[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (te(r, l, c, o) && (l = null), o || c === null ? K(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var Ve = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _t = Symbol.for("react.element"), Te = Symbol.for("react.portal"), ct = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), It = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Zt = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), Je = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), et = Symbol.for("react.offscreen"), $ = Symbol.iterator;
  function he(n) {
    return n === null || typeof n != "object" ? null : (n = $ && n[$] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var T = Object.assign, Y;
  function me(n) {
    if (Y === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        Y = r && r[1] || "";
      }
    return `
` + Y + n;
  }
  var Fe = !1;
  function je(n, r) {
    if (!n || Fe)
      return "";
    Fe = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (A) {
            var o = A;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (A) {
            o = A;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (A) {
          o = A;
        }
        n();
      }
    } catch (A) {
      if (A && o && typeof A.stack == "string") {
        for (var c = A.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var w = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", n.displayName)), w;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Fe = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? me(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return me(n.type);
      case 16:
        return me("Lazy");
      case 13:
        return me("Suspense");
      case 19:
        return me("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = je(n.type, !1), n;
      case 11:
        return n = je(n.type.render, !1), n;
      case 1:
        return n = je(n.type, !0), n;
      default:
        return "";
    }
  }
  function ut(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case ct:
        return "Fragment";
      case Te:
        return "Portal";
      case wn:
        return "Profiler";
      case Ye:
        return "StrictMode";
      case Zt:
        return "Suspense";
      case Be:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case It:
          return (n.displayName || "Context") + ".Consumer";
        case mn:
          return (n._context.displayName || "Context") + ".Provider";
        case mt:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Je:
          return r = n.displayName || null, r !== null ? r : ut(n.type) || "Memo";
        case Rt:
          r = n._payload, n = n._init;
          try {
            return ut(n(r));
          } catch {
          }
      }
    return null;
  }
  function dt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return ut(r);
      case 8:
        return r === Ye ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function ot(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function Jt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Zn(n) {
    var r = Jt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Jn(n) {
    n._valueTracker || (n._valueTracker = Zn(n));
  }
  function Fr(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = Jt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function vr(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function yn(n, r) {
    var l = r.checked;
    return T({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l ?? n._wrapperState.initialChecked });
  }
  function er(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = ot(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Hn(n, r) {
    r = r.checked, r != null && lt(n, "checked", r, !1);
  }
  function Nn(n, r) {
    Hn(n, r);
    var l = ot(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Tr(n, r.type, l) : r.hasOwnProperty("defaultValue") && Tr(n, r.type, ot(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function zn(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function Tr(n, r, l) {
    (r !== "number" || vr(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var hr = Array.isArray;
  function Vn(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + ot(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function la(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(M(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ua(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(M(92));
        if (hr(l)) {
          if (1 < l.length)
            throw Error(M(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: ot(l) };
  }
  function mr(n, r) {
    var l = ot(r.value), o = ot(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function oa(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function tr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function wr(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? tr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var un, sa = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (un = un || document.createElement("div"), un.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = un.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function ca(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var fa = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ae = ["Webkit", "ms", "Moz", "O"];
  Object.keys(fa).forEach(function(n) {
    ae.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), fa[r] = fa[n];
    });
  });
  function De(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || fa.hasOwnProperty(n) && fa[n] ? ("" + r).trim() : r + "px";
  }
  function rt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = De(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var Mt = T({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function xt(n, r) {
    if (r) {
      if (Mt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(M(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(M(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(M(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(M(62));
    }
  }
  function bn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var cn = null;
  function yr(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var At = null, Qn = null, Nt = null;
  function Qt(n) {
    if (n = vi(n)) {
      if (typeof At != "function")
        throw Error(M(280));
      var r = n.stateNode;
      r && (r = Cc(r), At(n.stateNode, n.type, r));
    }
  }
  function qa(n) {
    Qn ? Nt ? Nt.push(n) : Nt = [n] : Qn = n;
  }
  function ba() {
    if (Qn) {
      var n = Qn, r = Nt;
      if (Nt = Qn = null, Qt(n), r)
        for (n = 0; n < r.length; n++)
          Qt(r[n]);
    }
  }
  function cl(n, r) {
    return n(r);
  }
  function Gl() {
  }
  var ql = !1;
  function fl(n, r, l) {
    if (ql)
      return n(r, l);
    ql = !0;
    try {
      return cl(n, r, l);
    } finally {
      ql = !1, (Qn !== null || Nt !== null) && (Gl(), ba());
    }
  }
  function Xa(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Cc(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(M(231, r, typeof l));
    return l;
  }
  var Ka = !1;
  if (S)
    try {
      var _a = {};
      Object.defineProperty(_a, "passive", { get: function() {
        Ka = !0;
      } }), window.addEventListener("test", _a, _a), window.removeEventListener("test", _a, _a);
    } catch {
      Ka = !1;
    }
  function Li(n, r, l, o, c, d, m, E, w) {
    var A = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, A);
    } catch (W) {
      this.onError(W);
    }
  }
  var jr = !1, Hr = null, da = !1, Mi = null, R = { onError: function(n) {
    jr = !0, Hr = n;
  } };
  function Q(n, r, l, o, c, d, m, E, w) {
    jr = !1, Hr = null, Li.apply(R, arguments);
  }
  function ne(n, r, l, o, c, d, m, E, w) {
    if (Q.apply(this, arguments), jr) {
      if (jr) {
        var A = Hr;
        jr = !1, Hr = null;
      } else
        throw Error(M(198));
      da || (da = !0, Mi = A);
    }
  }
  function ie(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function st(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function yt(n) {
    if (ie(n) !== n)
      throw Error(M(188));
  }
  function tt(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ie(n), r === null)
        throw Error(M(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return yt(c), n;
          if (d === o)
            return yt(c), r;
          d = d.sibling;
        }
        throw Error(M(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(M(189));
        }
      }
      if (l.alternate !== o)
        throw Error(M(190));
    }
    if (l.tag !== 3)
      throw Error(M(188));
    return l.stateNode.current === l ? n : r;
  }
  function Le(n) {
    return n = tt(n), n !== null ? Un(n) : null;
  }
  function Un(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Un(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Wt = X.unstable_scheduleCallback, Gt = X.unstable_cancelCallback, gr = X.unstable_shouldYield, oi = X.unstable_requestPaint, qt = X.unstable_now, Vr = X.unstable_getCurrentPriorityLevel, Io = X.unstable_ImmediatePriority, si = X.unstable_UserBlockingPriority, at = X.unstable_NormalPriority, Xl = X.unstable_LowPriority, Ni = X.unstable_IdlePriority, dl = null, Pr = null;
  function Qo(n) {
    if (Pr && typeof Pr.onCommitFiberRoot == "function")
      try {
        Pr.onCommitFiberRoot(dl, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var br = Math.clz32 ? Math.clz32 : qo, Wo = Math.log, Go = Math.LN2;
  function qo(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Wo(n) / Go | 0) | 0;
  }
  var Kl = 64, ju = 4194304;
  function zi(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function ci(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = zi(E) : (d &= m, d !== 0 && (o = zi(d)));
    } else
      m = l & ~c, m !== 0 ? o = zi(m) : d !== 0 && (o = zi(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && !(r & c) && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if (o & 4 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - br(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function xa(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function pl(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - br(d), E = 1 << m, w = c[m];
      w === -1 ? (!(E & l) || E & o) && (c[m] = xa(E, r)) : w <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function fi(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Zl() {
    var n = Kl;
    return Kl <<= 1, !(Kl & 4194240) && (Kl = 64), n;
  }
  function Jl(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vl(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - br(r), n[r] = l;
  }
  function Xo(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - br(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function Ko(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - br(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ht = 0;
  function Zo(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Hu, hl, Jo, Tt, Vu, eu = !1, Ie = [], Za = null, fn = null, Br = null, Da = /* @__PURE__ */ new Map(), ml = /* @__PURE__ */ new Map(), en = [], dn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function es(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Za = null;
        break;
      case "dragenter":
      case "dragleave":
        fn = null;
        break;
      case "mouseover":
      case "mouseout":
        Br = null;
        break;
      case "pointerover":
      case "pointerout":
        Da.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ml.delete(r.pointerId);
    }
  }
  function nr(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = vi(r), r !== null && hl(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function $r(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Za = nr(Za, n, r, l, o, c), !0;
      case "dragenter":
        return fn = nr(fn, n, r, l, o, c), !0;
      case "mouseover":
        return Br = nr(Br, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return Da.set(d, nr(Da.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, ml.set(d, nr(ml.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Ja(n) {
    var r = Ii(n.target);
    if (r !== null) {
      var l = ie(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = st(l), r !== null) {
            n.blockedOn = r, Vu(n.priority, function() {
              Jo(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function Pu(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Yu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        cn = o, l.target.dispatchEvent(o), cn = null;
      } else
        return r = vi(l), r !== null && hl(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function tu(n, r, l) {
    Pu(n) && l.delete(r);
  }
  function nu() {
    eu = !1, Za !== null && Pu(Za) && (Za = null), fn !== null && Pu(fn) && (fn = null), Br !== null && Pu(Br) && (Br = null), Da.forEach(tu), ml.forEach(tu);
  }
  function yl(n, r) {
    n.blockedOn === r && (n.blockedOn = null, eu || (eu = !0, X.unstable_scheduleCallback(X.unstable_NormalPriority, nu)));
  }
  function ka(n) {
    function r(c) {
      return yl(c, n);
    }
    if (0 < Ie.length) {
      yl(Ie[0], n);
      for (var l = 1; l < Ie.length; l++) {
        var o = Ie[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Za !== null && yl(Za, n), fn !== null && yl(fn, n), Br !== null && yl(Br, n), Da.forEach(r), ml.forEach(r), l = 0; l < en.length; l++)
      o = en[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < en.length && (l = en[0], l.blockedOn === null); )
      Ja(l), l.blockedOn === null && en.shift();
  }
  var Ui = Ve.ReactCurrentBatchConfig, Bu = !0;
  function Ai(n, r, l, o) {
    var c = ht, d = Ui.transition;
    Ui.transition = null;
    try {
      ht = 1, di(n, r, l, o);
    } finally {
      ht = c, Ui.transition = d;
    }
  }
  function $u(n, r, l, o) {
    var c = ht, d = Ui.transition;
    Ui.transition = null;
    try {
      ht = 4, di(n, r, l, o);
    } finally {
      ht = c, Ui.transition = d;
    }
  }
  function di(n, r, l, o) {
    if (Bu) {
      var c = Yu(n, r, l, o);
      if (c === null)
        id(n, r, o, Fi, l), es(n, o);
      else if ($r(c, n, r, l, o))
        o.stopPropagation();
      else if (es(n, o), r & 4 && -1 < dn.indexOf(n)) {
        for (; c !== null; ) {
          var d = vi(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && id(n, r, o, Fi, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        id(n, r, o, null, l);
    }
  }
  var Fi = null;
  function Yu(n, r, l, o) {
    if (Fi = null, n = yr(o), n = Ii(n), n !== null)
      if (r = ie(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = st(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Fi = n, null;
  }
  function ts(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Vr()) {
          case Io:
            return 1;
          case si:
            return 4;
          case at:
          case Xl:
            return 16;
          case Ni:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ei = null, Iu = null, h = null;
  function C() {
    if (h)
      return h;
    var n, r = Iu, l = r.length, o, c = "value" in ei ? ei.value : ei.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return h = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function N(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function F() {
    return !0;
  }
  function Z() {
    return !1;
  }
  function Ee(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? F : Z, this.isPropagationStopped = Z, this;
    }
    return T(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = F);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = F);
    }, persist: function() {
    }, isPersistent: F }), r;
  }
  var fe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Pe = Ee(fe), it = T({}, fe, { view: 0, detail: 0 }), zt = Ee(it), Ft, jt, Ht, tn = T({}, it, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fc, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Ht && (Ht && n.type === "mousemove" ? (Ft = n.screenX - Ht.screenX, jt = n.screenY - Ht.screenY) : jt = Ft = 0, Ht = n), Ft);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : jt;
  } }), wt = Ee(tn), gl = T({}, tn, { dataTransfer: 0 }), Qu = Ee(gl), ns = T({}, it, { relatedTarget: 0 }), rs = Ee(ns), ji = T({}, fe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), as = Ee(ji), is = T({}, fe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Wf = Ee(is), Pm = T({}, fe, { data: 0 }), Gp = Ee(Pm), qp = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Gf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Xp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Kp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Xp[n]) ? !!r[n] : !1;
  }
  function fc() {
    return Kp;
  }
  var Bm = T({}, it, { key: function(n) {
    if (n.key) {
      var r = qp[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = N(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Gf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fc, charCode: function(n) {
    return n.type === "keypress" ? N(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? N(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hi = Ee(Bm), $m = T({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dc = Ee($m), qf = T({}, it, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fc }), Xf = Ee(qf), Ym = T({}, fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Ee(Ym), Zp = T({}, tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Ee(Zp), Vi = [9, 13, 27, 32], gn = S && "CompositionEvent" in window, pa = null;
  S && "documentMode" in document && (pa = document.documentMode);
  var Kf = S && "TextEvent" in window && !pa, ls = S && (!gn || pa && 8 < pa && 11 >= pa), Jp = " ", Wu = !1;
  function ev(n, r) {
    switch (n) {
      case "keyup":
        return Vi.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function tv(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Sl = !1;
  function Im(n, r) {
    switch (n) {
      case "compositionend":
        return tv(r);
      case "keypress":
        return r.which !== 32 ? null : (Wu = !0, Jp);
      case "textInput":
        return n = r.data, n === Jp && Wu ? null : n;
      default:
        return null;
    }
  }
  function Qm(n, r) {
    if (Sl)
      return n === "compositionend" || !gn && ev(n, r) ? (n = C(), h = Iu = ei = null, Sl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ls && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Wm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Zf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Wm[n.type] : r === "textarea";
  }
  function nv(n, r, l, o) {
    qa(o), r = Sc(r, "onChange"), 0 < r.length && (l = new Pe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var us = null, os = null;
  function rv(n) {
    Sv(n, 0);
  }
  function Pi(n) {
    var r = Ku(n);
    if (Fr(r))
      return n;
  }
  function Jf(n, r) {
    if (n === "change")
      return r;
  }
  var ed = !1;
  if (S) {
    var vc;
    if (S) {
      var td = "oninput" in document;
      if (!td) {
        var av = document.createElement("div");
        av.setAttribute("oninput", "return;"), td = typeof av.oninput == "function";
      }
      vc = td;
    } else
      vc = !1;
    ed = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function iv() {
    us && (us.detachEvent("onpropertychange", lv), os = us = null);
  }
  function lv(n) {
    if (n.propertyName === "value" && Pi(os)) {
      var r = [];
      nv(r, os, n, yr(n)), fl(rv, r);
    }
  }
  function Gm(n, r, l) {
    n === "focusin" ? (iv(), us = r, os = l, us.attachEvent("onpropertychange", lv)) : n === "focusout" && iv();
  }
  function qm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Pi(os);
  }
  function Xm(n, r) {
    if (n === "click")
      return Pi(r);
  }
  function Km(n, r) {
    if (n === "input" || n === "change")
      return Pi(r);
  }
  function uv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : uv;
  function Gu(n, r) {
    if (ti(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!nt.call(r, c) || !ti(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function ov(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function sv(n, r) {
    var l = ov(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = ov(l);
    }
  }
  function cv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? cv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function fv() {
    for (var n = window, r = vr(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = vr(n.document);
    }
    return r;
  }
  function ss(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ru(n) {
    var r = fv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && cv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ss(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = sv(l, d);
          var m = sv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var hc = S && "documentMode" in document && 11 >= document.documentMode, au = null, El = null, cs = null, nd = !1;
  function dv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    nd || au == null || au !== vr(o) || (o = au, "selectionStart" in o && ss(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), cs && Gu(cs, o) || (cs = o, o = Sc(El, "onSelect"), 0 < o.length && (r = new Pe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = au)));
  }
  function mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var qu = { animationend: mc("Animation", "AnimationEnd"), animationiteration: mc("Animation", "AnimationIteration"), animationstart: mc("Animation", "AnimationStart"), transitionend: mc("Transition", "TransitionEnd") }, yc = {}, pv = {};
  S && (pv = document.createElement("div").style, "AnimationEvent" in window || (delete qu.animationend.animation, delete qu.animationiteration.animation, delete qu.animationstart.animation), "TransitionEvent" in window || delete qu.transitionend.transition);
  function fs(n) {
    if (yc[n])
      return yc[n];
    if (!qu[n])
      return n;
    var r = qu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in pv)
        return yc[n] = r[l];
    return n;
  }
  var Sr = fs("animationend"), rd = fs("animationiteration"), vv = fs("animationstart"), hv = fs("transitionend"), mv = /* @__PURE__ */ new Map(), yv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Cl(n, r) {
    mv.set(n, r), Yt(r, [n]);
  }
  for (var gc = 0; gc < yv.length; gc++) {
    var ds = yv[gc], ps = ds.toLowerCase(), Zm = ds[0].toUpperCase() + ds.slice(1);
    Cl(ps, "on" + Zm);
  }
  Cl(Sr, "onAnimationEnd"), Cl(rd, "onAnimationIteration"), Cl(vv, "onAnimationStart"), Cl("dblclick", "onDoubleClick"), Cl("focusin", "onFocus"), Cl("focusout", "onBlur"), Cl(hv, "onTransitionEnd"), Xe("onMouseEnter", ["mouseout", "mouseover"]), Xe("onMouseLeave", ["mouseout", "mouseover"]), Xe("onPointerEnter", ["pointerout", "pointerover"]), Xe("onPointerLeave", ["pointerout", "pointerover"]), Yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Jm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));
  function gv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
  }
  function Sv(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], w = E.instance, A = E.currentTarget;
            if (E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            gv(c, E, A), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            gv(c, E, A), d = w;
          }
      }
    }
    if (da)
      throw n = Mi, da = !1, Mi = null, n;
  }
  function Bt(n, r) {
    var l = r[pd];
    l === void 0 && (l = r[pd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (ad(r, n, 2, !1), l.add(o));
  }
  function vs(n, r, l) {
    var o = 0;
    r && (o |= 4), ad(l, n, o, r);
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function pi(n) {
    if (!n[$i]) {
      n[$i] = !0, Ze.forEach(function(l) {
        l !== "selectionchange" && (Jm.has(l) || vs(l, !1, n), vs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[$i] || (r[$i] = !0, vs("selectionchange", !1, r));
    }
  }
  function ad(n, r, l, o) {
    switch (ts(r)) {
      case 1:
        var c = Ai;
        break;
      case 4:
        c = $u;
        break;
      default:
        c = di;
    }
    l = c.bind(null, r, l, n), c = void 0, !Ka || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function id(n, r, l, o, c) {
    var d = o;
    if (!(r & 1) && !(r & 2) && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var w = m.tag;
                if ((w === 3 || w === 4) && (w = m.stateNode.containerInfo, w === c || w.nodeType === 8 && w.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = Ii(E), m === null)
                return;
              if (w = m.tag, w === 5 || w === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    fl(function() {
      var A = d, W = yr(l), G = [];
      e: {
        var I = mv.get(n);
        if (I !== void 0) {
          var se = Pe, ye = n;
          switch (n) {
            case "keypress":
              if (N(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              se = Hi;
              break;
            case "focusin":
              ye = "focus", se = rs;
              break;
            case "focusout":
              ye = "blur", se = rs;
              break;
            case "beforeblur":
            case "afterblur":
              se = rs;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              se = wt;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              se = Qu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              se = Xf;
              break;
            case Sr:
            case rd:
            case vv:
              se = as;
              break;
            case hv:
              se = pc;
              break;
            case "scroll":
              se = zt;
              break;
            case "wheel":
              se = Yr;
              break;
            case "copy":
            case "cut":
            case "paste":
              se = Wf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              se = dc;
          }
          var Ce = (r & 4) !== 0, Ln = !Ce && n === "scroll", D = Ce ? I !== null ? I + "Capture" : null : I;
          Ce = [];
          for (var _ = A, L; _ !== null; ) {
            L = _;
            var J = L.stateNode;
            if (L.tag === 5 && J !== null && (L = J, D !== null && (J = Xa(_, D), J != null && Ce.push(Xu(_, J, L)))), Ln)
              break;
            _ = _.return;
          }
          0 < Ce.length && (I = new se(I, ye, null, l, W), G.push({ event: I, listeners: Ce }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (I = n === "mouseover" || n === "pointerover", se = n === "mouseout" || n === "pointerout", I && l !== cn && (ye = l.relatedTarget || l.fromElement) && (Ii(ye) || ye[ni]))
            break e;
          if ((se || I) && (I = W.window === W ? W : (I = W.ownerDocument) ? I.defaultView || I.parentWindow : window, se ? (ye = l.relatedTarget || l.toElement, se = A, ye = ye ? Ii(ye) : null, ye !== null && (Ln = ie(ye), ye !== Ln || ye.tag !== 5 && ye.tag !== 6) && (ye = null)) : (se = null, ye = A), se !== ye)) {
            if (Ce = wt, J = "onMouseLeave", D = "onMouseEnter", _ = "mouse", (n === "pointerout" || n === "pointerover") && (Ce = dc, J = "onPointerLeave", D = "onPointerEnter", _ = "pointer"), Ln = se == null ? I : Ku(se), L = ye == null ? I : Ku(ye), I = new Ce(J, _ + "leave", se, l, W), I.target = Ln, I.relatedTarget = L, J = null, Ii(W) === A && (Ce = new Ce(D, _ + "enter", ye, l, W), Ce.target = L, Ce.relatedTarget = Ln, J = Ce), Ln = J, se && ye)
              t: {
                for (Ce = se, D = ye, _ = 0, L = Ce; L; L = iu(L))
                  _++;
                for (L = 0, J = D; J; J = iu(J))
                  L++;
                for (; 0 < _ - L; )
                  Ce = iu(Ce), _--;
                for (; 0 < L - _; )
                  D = iu(D), L--;
                for (; _--; ) {
                  if (Ce === D || D !== null && Ce === D.alternate)
                    break t;
                  Ce = iu(Ce), D = iu(D);
                }
                Ce = null;
              }
            else
              Ce = null;
            se !== null && ld(G, I, se, Ce, !1), ye !== null && Ln !== null && ld(G, Ln, ye, Ce, !0);
          }
        }
        e: {
          if (I = A ? Ku(A) : window, se = I.nodeName && I.nodeName.toLowerCase(), se === "select" || se === "input" && I.type === "file")
            var be = Jf;
          else if (Zf(I))
            if (ed)
              be = Km;
            else {
              be = qm;
              var Ae = Gm;
            }
          else
            (se = I.nodeName) && se.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (be = Xm);
          if (be && (be = be(n, A))) {
            nv(G, be, l, W);
            break e;
          }
          Ae && Ae(n, I, A), n === "focusout" && (Ae = I._wrapperState) && Ae.controlled && I.type === "number" && Tr(I, "number", I.value);
        }
        switch (Ae = A ? Ku(A) : window, n) {
          case "focusin":
            (Zf(Ae) || Ae.contentEditable === "true") && (au = Ae, El = A, cs = null);
            break;
          case "focusout":
            cs = El = au = null;
            break;
          case "mousedown":
            nd = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nd = !1, dv(G, l, W);
            break;
          case "selectionchange":
            if (hc)
              break;
          case "keydown":
          case "keyup":
            dv(G, l, W);
        }
        var ge;
        if (gn)
          e: {
            switch (n) {
              case "compositionstart":
                var He = "onCompositionStart";
                break e;
              case "compositionend":
                He = "onCompositionEnd";
                break e;
              case "compositionupdate":
                He = "onCompositionUpdate";
                break e;
            }
            He = void 0;
          }
        else
          Sl ? ev(n, l) && (He = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (He = "onCompositionStart");
        He && (ls && l.locale !== "ko" && (Sl || He !== "onCompositionStart" ? He === "onCompositionEnd" && Sl && (ge = C()) : (ei = W, Iu = "value" in ei ? ei.value : ei.textContent, Sl = !0)), Ae = Sc(A, He), 0 < Ae.length && (He = new Gp(He, n, null, l, W), G.push({ event: He, listeners: Ae }), ge ? He.data = ge : (ge = tv(l), ge !== null && (He.data = ge)))), (ge = Kf ? Im(n, l) : Qm(n, l)) && (A = Sc(A, "onBeforeInput"), 0 < A.length && (W = new Gp("onBeforeInput", "beforeinput", null, l, W), G.push({ event: W, listeners: A }), W.data = ge));
      }
      Sv(G, r);
    });
  }
  function Xu(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Sc(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = Xa(n, l), d != null && o.unshift(Xu(n, d, c)), d = Xa(n, r), d != null && o.push(Xu(n, d, c))), n = n.return;
    }
    return o;
  }
  function iu(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function ld(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (w = Xa(l, d), w != null && m.unshift(Xu(l, w, E))) : c || (w = Xa(l, d), w != null && m.push(Xu(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Ev = /\r\n?/g, ud = /\u0000|\uFFFD/g;
  function Cv(n) {
    return (typeof n == "string" ? n : "" + n).replace(Ev, `
`).replace(ud, "");
  }
  function hs(n, r, l) {
    if (r = Cv(r), Cv(n) !== r && l)
      throw Error(M(425));
  }
  function Ec() {
  }
  var od = null, sd = null;
  function lu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ms = typeof setTimeout == "function" ? setTimeout : void 0, ys = typeof clearTimeout == "function" ? clearTimeout : void 0, cd = typeof Promise == "function" ? Promise : void 0, Rv = typeof queueMicrotask == "function" ? queueMicrotask : typeof cd < "u" ? function(n) {
    return cd.resolve(null).then(n).catch(fd);
  } : ms;
  function fd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function dd(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), ka(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    ka(r);
  }
  function va(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function gs(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Yi = Math.random().toString(36).slice(2), Oa = "__reactFiber$" + Yi, Ss = "__reactProps$" + Yi, ni = "__reactContainer$" + Yi, pd = "__reactEvents$" + Yi, ey = "__reactListeners$" + Yi, ty = "__reactHandles$" + Yi;
  function Ii(n) {
    var r = n[Oa];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[ni] || l[Oa]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = gs(n); n !== null; ) {
            if (l = n[Oa])
              return l;
            n = gs(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function vi(n) {
    return n = n[Oa] || n[ni], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Ku(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(M(33));
  }
  function Cc(n) {
    return n[Ss] || null;
  }
  var Me = [], ri = -1;
  function $t(n) {
    return { current: n };
  }
  function we(n) {
    0 > ri || (n.current = Me[ri], Me[ri] = null, ri--);
  }
  function Dt(n, r) {
    ri++, Me[ri] = n.current, n.current = r;
  }
  var La = {}, Wn = $t(La), We = $t(!1), _r = La;
  function ha(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return La;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function An(n) {
    return n = n.childContextTypes, n != null;
  }
  function Ir() {
    we(We), we(Wn);
  }
  function hi(n, r, l) {
    if (Wn.current !== La)
      throw Error(M(168));
    Dt(Wn, r), Dt(We, l);
  }
  function Rl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(M(108, dt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function uu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || La, _r = Wn.current, Dt(Wn, n), Dt(We, We.current), !0;
  }
  function Tv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(M(169));
    l ? (n = Rl(n, r, _r), o.__reactInternalMemoizedMergedChildContext = n, we(We), we(Wn), Dt(Wn, n)) : we(We), Dt(We, l);
  }
  var Qi = null, Tl = !1, rr = !1;
  function Rc(n) {
    Qi === null ? Qi = [n] : Qi.push(n);
  }
  function wv(n) {
    Tl = !0, Rc(n);
  }
  function mi() {
    if (!rr && Qi !== null) {
      rr = !0;
      var n = 0, r = ht;
      try {
        var l = Qi;
        for (ht = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Qi = null, Tl = !1;
      } catch (c) {
        throw Qi !== null && (Qi = Qi.slice(n + 1)), Wt(Io, mi), c;
      } finally {
        ht = r, rr = !1;
      }
    }
    return null;
  }
  var Ma = [], wl = 0, Na = null, ou = 0, Qr = [], Wr = 0, ai = null, Gr = 1, ar = "";
  function su(n, r) {
    Ma[wl++] = ou, Ma[wl++] = Na, Na = n, ou = r;
  }
  function bl(n, r, l) {
    Qr[Wr++] = Gr, Qr[Wr++] = ar, Qr[Wr++] = ai, ai = n;
    var o = Gr;
    n = ar;
    var c = 32 - br(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - br(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Gr = 1 << 32 - br(r) + c | l << c | o, ar = d + n;
    } else
      Gr = 1 << d | l << c | o, ar = n;
  }
  function Tc(n) {
    n.return !== null && (su(n, 1), bl(n, 1, 0));
  }
  function wc(n) {
    for (; n === Na; )
      Na = Ma[--wl], Ma[wl] = null, ou = Ma[--wl], Ma[wl] = null;
    for (; n === ai; )
      ai = Qr[--Wr], Qr[Wr] = null, ar = Qr[--Wr], Qr[Wr] = null, Gr = Qr[--Wr], Qr[Wr] = null;
  }
  var ma = null, ya = null, nn = !1, za = null;
  function vd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function hd(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, ma = n, ya = va(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, ma = n, ya = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = ai !== null ? { id: Gr, overflow: ar } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = Pa(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, ma = n, ya = null, !0) : !1;
      default:
        return !1;
    }
  }
  function md(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function bc(n) {
    if (nn) {
      var r = ya;
      if (r) {
        var l = r;
        if (!hd(n, r)) {
          if (md(n))
            throw Error(M(418));
          r = va(l.nextSibling);
          var o = ma;
          r && hd(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, nn = !1, ma = n);
        }
      } else {
        if (md(n))
          throw Error(M(418));
        n.flags = n.flags & -4097 | 2, nn = !1, ma = n;
      }
    }
  }
  function yd(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function _c(n) {
    if (n !== ma)
      return !1;
    if (!nn)
      return yd(n), nn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !lu(n.type, n.memoizedProps)), r && (r = ya)) {
      if (md(n))
        throw bv(), Error(M(418));
      for (; r; )
        vd(n, r), r = va(r.nextSibling);
    }
    if (yd(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(M(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                ya = va(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        ya = null;
      }
    } else
      ya = ma ? va(n.stateNode.nextSibling) : null;
    return !0;
  }
  function bv() {
    for (var n = ya; n; )
      n = va(n.nextSibling);
  }
  function Zu() {
    ya = ma = null, nn = !1;
  }
  function Fn(n) {
    za === null ? za = [n] : za.push(n);
  }
  var ny = Ve.ReactCurrentBatchConfig;
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = T({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ju = $t(null), yi = null, eo = null, Es = null;
  function gd() {
    Es = eo = yi = null;
  }
  function Sd(n) {
    var r = Ju.current;
    we(Ju), n._currentValue = r;
  }
  function _l(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function _n(n, r) {
    yi = n, Es = eo = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (Zr = !0), n.firstContext = null);
  }
  function ee(n) {
    var r = n._currentValue;
    if (Es !== n)
      if (n = { context: n, memoizedValue: r, next: null }, eo === null) {
        if (yi === null)
          throw Error(M(308));
        eo = n, yi.dependencies = { lanes: 0, firstContext: n };
      } else
        eo = eo.next = n;
    return r;
  }
  var Er = null;
  function ga(n) {
    Er === null ? Er = [n] : Er.push(n);
  }
  function _v(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, ga(r)) : (l.next = c.next, c.next = l), r.interleaved = l, Wi(n, o);
  }
  function Wi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var xl = !1;
  function Ed(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function xv(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function Xt(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Dl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, pt & 2) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, Wi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, ga(o)) : (r.next = c.next, c.next = r), o.interleaved = r, Wi(n, l);
  }
  function xc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ko(n, l);
    }
  }
  function Dv(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function Cs(n, r, l, o) {
    var c = n.updateQueue;
    xl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var w = E, A = w.next;
      w.next = null, m === null ? d = A : m.next = A, m = w;
      var W = n.alternate;
      W !== null && (W = W.updateQueue, E = W.lastBaseUpdate, E !== m && (E === null ? W.firstBaseUpdate = A : E.next = A, W.lastBaseUpdate = w));
    }
    if (d !== null) {
      var G = c.baseState;
      m = 0, W = A = w = null, E = d;
      do {
        var I = E.lane, se = E.eventTime;
        if ((o & I) === I) {
          W !== null && (W = W.next = {
            eventTime: se,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ye = n, Ce = E;
            switch (I = r, se = l, Ce.tag) {
              case 1:
                if (ye = Ce.payload, typeof ye == "function") {
                  G = ye.call(se, G, I);
                  break e;
                }
                G = ye;
                break e;
              case 3:
                ye.flags = ye.flags & -65537 | 128;
              case 0:
                if (ye = Ce.payload, I = typeof ye == "function" ? ye.call(se, G, I) : ye, I == null)
                  break e;
                G = T({}, G, I);
                break e;
              case 2:
                xl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, I = c.effects, I === null ? c.effects = [E] : I.push(E));
        } else
          se = { eventTime: se, lane: I, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, W === null ? (A = W = se, w = G) : W = W.next = se, m |= I;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          I = E, E = I.next, I.next = null, c.lastBaseUpdate = I, c.shared.pending = null;
        }
      } while (!0);
      if (W === null && (w = G), c.baseState = w, c.firstBaseUpdate = A, c.lastBaseUpdate = W, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      Cu |= m, n.lanes = m, n.memoizedState = G;
    }
  }
  function to(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(M(191, c));
          c.call(o);
        }
      }
  }
  var cu = new j.Component().refs;
  function Cd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : T({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Dc = { isMounted: function(n) {
    return (n = n._reactInternals) ? ie(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = Ki(n), d = Xt(o, c);
    d.payload = r, l != null && (d.callback = l), r = Dl(n, d, c), r !== null && (vn(r, n, c, o), xc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = Xn(), c = Ki(n), d = Xt(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = Dl(n, d, c), r !== null && (vn(r, n, c, o), xc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = Xn(), o = Ki(n), c = Xt(l, o);
    c.tag = 2, r != null && (c.callback = r), r = Dl(n, c, o), r !== null && (vn(r, n, o, l), xc(r, n, o));
  } };
  function kv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Gu(l, o) || !Gu(c, d) : !0;
  }
  function Ov(n, r, l) {
    var o = !1, c = La, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ee(d) : (c = An(r) ? _r : Wn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : La), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Lv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Dc.enqueueReplaceState(r, r.state, null);
  }
  function Rd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = cu, Ed(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ee(d) : (d = An(r) ? _r : Wn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Cd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Dc.enqueueReplaceState(c, c.state, null), Cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function no(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(M(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(M(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === cu && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(M(284));
      if (!l._owner)
        throw Error(M(290, n));
    }
    return n;
  }
  function Rs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(M(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Mv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Nv(n) {
    function r(D, _) {
      if (n) {
        var L = D.deletions;
        L === null ? (D.deletions = [_], D.flags |= 16) : L.push(_);
      }
    }
    function l(D, _) {
      if (!n)
        return null;
      for (; _ !== null; )
        r(D, _), _ = _.sibling;
      return null;
    }
    function o(D, _) {
      for (D = /* @__PURE__ */ new Map(); _ !== null; )
        _.key !== null ? D.set(_.key, _) : D.set(_.index, _), _ = _.sibling;
      return D;
    }
    function c(D, _) {
      return D = Al(D, _), D.index = 0, D.sibling = null, D;
    }
    function d(D, _, L) {
      return D.index = L, n ? (L = D.alternate, L !== null ? (L = L.index, L < _ ? (D.flags |= 2, _) : L) : (D.flags |= 2, _)) : (D.flags |= 1048576, _);
    }
    function m(D) {
      return n && D.alternate === null && (D.flags |= 2), D;
    }
    function E(D, _, L, J) {
      return _ === null || _.tag !== 6 ? (_ = cf(L, D.mode, J), _.return = D, _) : (_ = c(_, L), _.return = D, _);
    }
    function w(D, _, L, J) {
      var be = L.type;
      return be === ct ? W(D, _, L.props.children, J, L.key) : _ !== null && (_.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Rt && Mv(be) === _.type) ? (J = c(_, L.props), J.ref = no(D, _, L), J.return = D, J) : (J = of(L.type, L.key, L.props, null, D.mode, J), J.ref = no(D, _, L), J.return = D, J);
    }
    function A(D, _, L, J) {
      return _ === null || _.tag !== 4 || _.stateNode.containerInfo !== L.containerInfo || _.stateNode.implementation !== L.implementation ? (_ = Ps(L, D.mode, J), _.return = D, _) : (_ = c(_, L.children || []), _.return = D, _);
    }
    function W(D, _, L, J, be) {
      return _ === null || _.tag !== 7 ? (_ = bu(L, D.mode, J, be), _.return = D, _) : (_ = c(_, L), _.return = D, _);
    }
    function G(D, _, L) {
      if (typeof _ == "string" && _ !== "" || typeof _ == "number")
        return _ = cf("" + _, D.mode, L), _.return = D, _;
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case _t:
            return L = of(_.type, _.key, _.props, null, D.mode, L), L.ref = no(D, null, _), L.return = D, L;
          case Te:
            return _ = Ps(_, D.mode, L), _.return = D, _;
          case Rt:
            var J = _._init;
            return G(D, J(_._payload), L);
        }
        if (hr(_) || he(_))
          return _ = bu(_, D.mode, L, null), _.return = D, _;
        Rs(D, _);
      }
      return null;
    }
    function I(D, _, L, J) {
      var be = _ !== null ? _.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number")
        return be !== null ? null : E(D, _, "" + L, J);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _t:
            return L.key === be ? w(D, _, L, J) : null;
          case Te:
            return L.key === be ? A(D, _, L, J) : null;
          case Rt:
            return be = L._init, I(
              D,
              _,
              be(L._payload),
              J
            );
        }
        if (hr(L) || he(L))
          return be !== null ? null : W(D, _, L, J, null);
        Rs(D, L);
      }
      return null;
    }
    function se(D, _, L, J, be) {
      if (typeof J == "string" && J !== "" || typeof J == "number")
        return D = D.get(L) || null, E(_, D, "" + J, be);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case _t:
            return D = D.get(J.key === null ? L : J.key) || null, w(_, D, J, be);
          case Te:
            return D = D.get(J.key === null ? L : J.key) || null, A(_, D, J, be);
          case Rt:
            var Ae = J._init;
            return se(D, _, L, Ae(J._payload), be);
        }
        if (hr(J) || he(J))
          return D = D.get(L) || null, W(_, D, J, be, null);
        Rs(_, J);
      }
      return null;
    }
    function ye(D, _, L, J) {
      for (var be = null, Ae = null, ge = _, He = _ = 0, Yn = null; ge !== null && He < L.length; He++) {
        ge.index > He ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var kt = I(D, ge, L[He], J);
        if (kt === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && kt.alternate === null && r(D, ge), _ = d(kt, _, He), Ae === null ? be = kt : Ae.sibling = kt, Ae = kt, ge = Yn;
      }
      if (He === L.length)
        return l(D, ge), nn && su(D, He), be;
      if (ge === null) {
        for (; He < L.length; He++)
          ge = G(D, L[He], J), ge !== null && (_ = d(ge, _, He), Ae === null ? be = ge : Ae.sibling = ge, Ae = ge);
        return nn && su(D, He), be;
      }
      for (ge = o(D, ge); He < L.length; He++)
        Yn = se(ge, D, He, L[He], J), Yn !== null && (n && Yn.alternate !== null && ge.delete(Yn.key === null ? He : Yn.key), _ = d(Yn, _, He), Ae === null ? be = Yn : Ae.sibling = Yn, Ae = Yn);
      return n && ge.forEach(function(Zi) {
        return r(D, Zi);
      }), nn && su(D, He), be;
    }
    function Ce(D, _, L, J) {
      var be = he(L);
      if (typeof be != "function")
        throw Error(M(150));
      if (L = be.call(L), L == null)
        throw Error(M(151));
      for (var Ae = be = null, ge = _, He = _ = 0, Yn = null, kt = L.next(); ge !== null && !kt.done; He++, kt = L.next()) {
        ge.index > He ? (Yn = ge, ge = null) : Yn = ge.sibling;
        var Zi = I(D, ge, kt.value, J);
        if (Zi === null) {
          ge === null && (ge = Yn);
          break;
        }
        n && ge && Zi.alternate === null && r(D, ge), _ = d(Zi, _, He), Ae === null ? be = Zi : Ae.sibling = Zi, Ae = Zi, ge = Yn;
      }
      if (kt.done)
        return l(
          D,
          ge
        ), nn && su(D, He), be;
      if (ge === null) {
        for (; !kt.done; He++, kt = L.next())
          kt = G(D, kt.value, J), kt !== null && (_ = d(kt, _, He), Ae === null ? be = kt : Ae.sibling = kt, Ae = kt);
        return nn && su(D, He), be;
      }
      for (ge = o(D, ge); !kt.done; He++, kt = L.next())
        kt = se(ge, D, He, kt.value, J), kt !== null && (n && kt.alternate !== null && ge.delete(kt.key === null ? He : kt.key), _ = d(kt, _, He), Ae === null ? be = kt : Ae.sibling = kt, Ae = kt);
      return n && ge.forEach(function(Cy) {
        return r(D, Cy);
      }), nn && su(D, He), be;
    }
    function Ln(D, _, L, J) {
      if (typeof L == "object" && L !== null && L.type === ct && L.key === null && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case _t:
            e: {
              for (var be = L.key, Ae = _; Ae !== null; ) {
                if (Ae.key === be) {
                  if (be = L.type, be === ct) {
                    if (Ae.tag === 7) {
                      l(D, Ae.sibling), _ = c(Ae, L.props.children), _.return = D, D = _;
                      break e;
                    }
                  } else if (Ae.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Rt && Mv(be) === Ae.type) {
                    l(D, Ae.sibling), _ = c(Ae, L.props), _.ref = no(D, Ae, L), _.return = D, D = _;
                    break e;
                  }
                  l(D, Ae);
                  break;
                } else
                  r(D, Ae);
                Ae = Ae.sibling;
              }
              L.type === ct ? (_ = bu(L.props.children, D.mode, J, L.key), _.return = D, D = _) : (J = of(L.type, L.key, L.props, null, D.mode, J), J.ref = no(D, _, L), J.return = D, D = J);
            }
            return m(D);
          case Te:
            e: {
              for (Ae = L.key; _ !== null; ) {
                if (_.key === Ae)
                  if (_.tag === 4 && _.stateNode.containerInfo === L.containerInfo && _.stateNode.implementation === L.implementation) {
                    l(D, _.sibling), _ = c(_, L.children || []), _.return = D, D = _;
                    break e;
                  } else {
                    l(D, _);
                    break;
                  }
                else
                  r(D, _);
                _ = _.sibling;
              }
              _ = Ps(L, D.mode, J), _.return = D, D = _;
            }
            return m(D);
          case Rt:
            return Ae = L._init, Ln(D, _, Ae(L._payload), J);
        }
        if (hr(L))
          return ye(D, _, L, J);
        if (he(L))
          return Ce(D, _, L, J);
        Rs(D, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" ? (L = "" + L, _ !== null && _.tag === 6 ? (l(D, _.sibling), _ = c(_, L), _.return = D, D = _) : (l(D, _), _ = cf(L, D.mode, J), _.return = D, D = _), m(D)) : l(D, _);
    }
    return Ln;
  }
  var ro = Nv(!0), zv = Nv(!1), Ts = {}, gi = $t(Ts), ao = $t(Ts), ws = $t(Ts);
  function kl(n) {
    if (n === Ts)
      throw Error(M(174));
    return n;
  }
  function Td(n, r) {
    switch (Dt(ws, r), Dt(ao, n), Dt(gi, Ts), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : wr(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = wr(r, n);
    }
    we(gi), Dt(gi, r);
  }
  function io() {
    we(gi), we(ao), we(ws);
  }
  function kc(n) {
    kl(ws.current);
    var r = kl(gi.current), l = wr(r, n.type);
    r !== l && (Dt(ao, n), Dt(gi, l));
  }
  function Ne(n) {
    ao.current === n && (we(gi), we(ao));
  }
  var _e = $t(0);
  function bt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var Sn = [];
  function Ua() {
    for (var n = 0; n < Sn.length; n++)
      Sn[n]._workInProgressVersionPrimary = null;
    Sn.length = 0;
  }
  var bs = Ve.ReactCurrentDispatcher, wd = Ve.ReactCurrentBatchConfig, fu = 0, pn = null, xn = null, P = null, Dn = !1, Ue = !1, Si = 0, Gi = 0;
  function En() {
    throw Error(M(321));
  }
  function Aa(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ti(n[l], r[l]))
        return !1;
    return !0;
  }
  function du(n, r, l, o, c, d) {
    if (fu = d, pn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bs.current = n === null || n.memoizedState === null ? ry : ay, n = l(o, c), Ue) {
      d = 0;
      do {
        if (Ue = !1, Si = 0, 25 <= d)
          throw Error(M(301));
        d += 1, P = xn = null, r.updateQueue = null, bs.current = iy, n = l(o, c);
      } while (Ue);
    }
    if (bs.current = $c, r = xn !== null && xn.next !== null, fu = 0, P = xn = pn = null, Dn = !1, r)
      throw Error(M(300));
    return n;
  }
  function Ol() {
    var n = Si !== 0;
    return Si = 0, n;
  }
  function Xr() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return P === null ? pn.memoizedState = P = n : P = P.next = n, P;
  }
  function Kr() {
    if (xn === null) {
      var n = pn.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = xn.next;
    var r = P === null ? pn.memoizedState : P.next;
    if (r !== null)
      P = r, xn = n;
    else {
      if (n === null)
        throw Error(M(310));
      xn = n, n = { memoizedState: xn.memoizedState, baseState: xn.baseState, baseQueue: xn.baseQueue, queue: xn.queue, next: null }, P === null ? pn.memoizedState = P = n : P = P.next = n;
    }
    return P;
  }
  function pu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function _s(n) {
    var r = Kr(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = xn, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, w = null, A = d;
      do {
        var W = A.lane;
        if ((fu & W) === W)
          w !== null && (w = w.next = { lane: 0, action: A.action, hasEagerState: A.hasEagerState, eagerState: A.eagerState, next: null }), o = A.hasEagerState ? A.eagerState : n(o, A.action);
        else {
          var G = {
            lane: W,
            action: A.action,
            hasEagerState: A.hasEagerState,
            eagerState: A.eagerState,
            next: null
          };
          w === null ? (E = w = G, m = o) : w = w.next = G, pn.lanes |= W, Cu |= W;
        }
        A = A.next;
      } while (A !== null && A !== d);
      w === null ? m = o : w.next = E, ti(o, r.memoizedState) || (Zr = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = w, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, pn.lanes |= d, Cu |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function xs(n) {
    var r = Kr(), l = r.queue;
    if (l === null)
      throw Error(M(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ti(d, r.memoizedState) || (Zr = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function Oc() {
  }
  function Lc(n, r) {
    var l = pn, o = Kr(), c = r(), d = !ti(o.memoizedState, c);
    if (d && (o.memoizedState = c, Zr = !0), o = o.queue, Ds(zc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || P !== null && P.memoizedState.tag & 1) {
      if (l.flags |= 2048, vu(9, Nc.bind(null, l, o, c, r), void 0, null), Rn === null)
        throw Error(M(349));
      fu & 30 || Mc(l, r, c);
    }
    return c;
  }
  function Mc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = pn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pn.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function Nc(n, r, l, o) {
    r.value = l, r.getSnapshot = o, Uc(r) && Ac(n);
  }
  function zc(n, r, l) {
    return l(function() {
      Uc(r) && Ac(n);
    });
  }
  function Uc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ti(n, l);
    } catch {
      return !0;
    }
  }
  function Ac(n) {
    var r = Wi(n, 1);
    r !== null && vn(r, n, 1, -1);
  }
  function Fc(n) {
    var r = Xr();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Bc.bind(null, pn, n), [r.memoizedState, n];
  }
  function vu(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = pn.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, pn.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function jc() {
    return Kr().memoizedState;
  }
  function lo(n, r, l, o) {
    var c = Xr();
    pn.flags |= n, c.memoizedState = vu(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function hu(n, r, l, o) {
    var c = Kr();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (xn !== null) {
      var m = xn.memoizedState;
      if (d = m.destroy, o !== null && Aa(o, m.deps)) {
        c.memoizedState = vu(r, l, d, o);
        return;
      }
    }
    pn.flags |= n, c.memoizedState = vu(1 | r, l, d, o);
  }
  function mu(n, r) {
    return lo(8390656, 8, n, r);
  }
  function Ds(n, r) {
    return hu(2048, 8, n, r);
  }
  function Hc(n, r) {
    return hu(4, 2, n, r);
  }
  function Vc(n, r) {
    return hu(4, 4, n, r);
  }
  function Pc(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function bd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hu(4, 4, Pc.bind(null, r, n), l);
  }
  function yu() {
  }
  function _d(n, r) {
    var l = Kr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Aa(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function uo(n, r) {
    var l = Kr();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && Aa(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Ll(n, r, l) {
    return fu & 21 ? (ti(l, r) || (l = Zl(), pn.lanes |= l, Cu |= l, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, Zr = !0), n.memoizedState = l);
  }
  function Sa(n, r) {
    var l = ht;
    ht = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = wd.transition;
    wd.transition = {};
    try {
      n(!1), r();
    } finally {
      ht = l, wd.transition = o;
    }
  }
  function Uv() {
    return Kr().memoizedState;
  }
  function Kt(n, r, l) {
    var o = Ki(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ks(n))
      oo(r, l);
    else if (l = _v(n, r, l, o), l !== null) {
      var c = Xn();
      vn(l, n, o, c), Os(l, r, o);
    }
  }
  function Bc(n, r, l) {
    var o = Ki(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (ks(n))
      oo(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ti(E, m)) {
            var w = r.interleaved;
            w === null ? (c.next = c, ga(r)) : (c.next = w.next, w.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = _v(n, r, c, o), l !== null && (c = Xn(), vn(l, n, o, c), Os(l, r, o));
    }
  }
  function ks(n) {
    var r = n.alternate;
    return n === pn || r !== null && r === pn;
  }
  function oo(n, r) {
    Ue = Dn = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Os(n, r, l) {
    if (l & 4194240) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, Ko(n, l);
    }
  }
  var $c = { readContext: ee, useCallback: En, useContext: En, useEffect: En, useImperativeHandle: En, useInsertionEffect: En, useLayoutEffect: En, useMemo: En, useReducer: En, useRef: En, useState: En, useDebugValue: En, useDeferredValue: En, useTransition: En, useMutableSource: En, useSyncExternalStore: En, useId: En, unstable_isNewReconciler: !1 }, ry = { readContext: ee, useCallback: function(n, r) {
    return Xr().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: ee, useEffect: mu, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, lo(
      4194308,
      4,
      Pc.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return lo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return lo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = Xr();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = Xr();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Kt.bind(null, pn, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = Xr();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Fc, useDebugValue: yu, useDeferredValue: function(n) {
    return Xr().memoizedState = n;
  }, useTransition: function() {
    var n = Fc(!1), r = n[0];
    return n = Sa.bind(null, n[1]), Xr().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = pn, c = Xr();
    if (nn) {
      if (l === void 0)
        throw Error(M(407));
      l = l();
    } else {
      if (l = r(), Rn === null)
        throw Error(M(349));
      fu & 30 || Mc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, mu(zc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, vu(9, Nc.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = Xr(), r = Rn.identifierPrefix;
    if (nn) {
      var l = ar, o = Gr;
      l = (o & ~(1 << 32 - br(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Si++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Gi++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ay = {
    readContext: ee,
    useCallback: _d,
    useContext: ee,
    useEffect: Ds,
    useImperativeHandle: bd,
    useInsertionEffect: Hc,
    useLayoutEffect: Vc,
    useMemo: uo,
    useReducer: _s,
    useRef: jc,
    useState: function() {
      return _s(pu);
    },
    useDebugValue: yu,
    useDeferredValue: function(n) {
      var r = Kr();
      return Ll(r, xn.memoizedState, n);
    },
    useTransition: function() {
      var n = _s(pu)[0], r = Kr().memoizedState;
      return [n, r];
    },
    useMutableSource: Oc,
    useSyncExternalStore: Lc,
    useId: Uv,
    unstable_isNewReconciler: !1
  }, iy = { readContext: ee, useCallback: _d, useContext: ee, useEffect: Ds, useImperativeHandle: bd, useInsertionEffect: Hc, useLayoutEffect: Vc, useMemo: uo, useReducer: xs, useRef: jc, useState: function() {
    return xs(pu);
  }, useDebugValue: yu, useDeferredValue: function(n) {
    var r = Kr();
    return xn === null ? r.memoizedState = n : Ll(r, xn.memoizedState, n);
  }, useTransition: function() {
    var n = xs(pu)[0], r = Kr().memoizedState;
    return [n, r];
  }, useMutableSource: Oc, useSyncExternalStore: Lc, useId: Uv, unstable_isNewReconciler: !1 };
  function Ml(n, r) {
    try {
      var l = "", o = r;
      do
        l += ft(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function xd(n, r, l) {
    return { value: n, source: null, stack: l ?? null, digest: r ?? null };
  }
  function Ls(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var Av = typeof WeakMap == "function" ? WeakMap : Map;
  function Fv(n, r, l) {
    l = Xt(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      tf || (tf = !0, Ad = o), Ls(n, r);
    }, l;
  }
  function jv(n, r, l) {
    l = Xt(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Ls(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Ls(n, r), typeof o != "function" && (Ha === null ? Ha = /* @__PURE__ */ new Set([this]) : Ha.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Ms(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new Av();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = hy.bind(null, n, r, l), r.then(n, n));
  }
  function Hv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function Dd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xt(-1, 1), r.tag = 2, Dl(l, r, 1))), l.lanes |= 1), n);
  }
  var Vv = Ve.ReactCurrentOwner, Zr = !1;
  function kn(n, r, l, o) {
    r.child = n === null ? zv(r, null, l, o) : ro(r, n.child, l, o);
  }
  function so(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return _n(r, c), o = du(n, r, l, o, d, c), l = Ol(), n !== null && !Zr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (nn && l && Tc(r), r.flags |= 1, kn(n, r, o, c), r.child);
  }
  function Nl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Pd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Yc(n, r, d, o, c)) : (n = of(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, !(n.lanes & c)) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Gu, l(m, o) && n.ref === r.ref)
        return On(n, r, c);
    }
    return r.flags |= 1, n = Al(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Yc(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Gu(d, o) && n.ref === r.ref)
        if (Zr = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          n.flags & 131072 && (Zr = !0);
        else
          return r.lanes = n.lanes, On(n, r, c);
    }
    return Ke(n, r, l, o, c);
  }
  function Jr(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Dt(Eo, ea), ea |= l;
      else {
        if (!(l & 1073741824))
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Dt(Eo, ea), ea |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Dt(Eo, ea), ea |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Dt(Eo, ea), ea |= o;
    return kn(n, r, c, l), r.child;
  }
  function gu(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function Ke(n, r, l, o, c) {
    var d = An(l) ? _r : Wn.current;
    return d = ha(r, d), _n(r, c), l = du(n, r, l, o, d, c), o = Ol(), n !== null && !Zr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (nn && o && Tc(r), r.flags |= 1, kn(n, r, l, c), r.child);
  }
  function Ns(n, r, l, o, c) {
    if (An(l)) {
      var d = !0;
      uu(r);
    } else
      d = !1;
    if (_n(r, c), r.stateNode === null)
      Us(n, r), Ov(r, l, o), Rd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = ee(A) : (A = An(l) ? _r : Wn.current, A = ha(r, A));
      var W = l.getDerivedStateFromProps, G = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && Lv(r, m, o, A), xl = !1;
      var I = r.memoizedState;
      m.state = I, Cs(r, o, m, c), w = r.memoizedState, E !== o || I !== w || We.current || xl ? (typeof W == "function" && (Cd(r, l, W, o), w = r.memoizedState), (E = xl || kv(r, l, E, o, I, w, A)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, xv(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : qr(r.type, E), m.props = A, G = r.pendingProps, I = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = ee(w) : (w = An(l) ? _r : Wn.current, w = ha(r, w));
      var se = l.getDerivedStateFromProps;
      (W = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || I !== w) && Lv(r, m, o, w), xl = !1, I = r.memoizedState, m.state = I, Cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== G || I !== ye || We.current || xl ? (typeof se == "function" && (Cd(r, l, se, o), ye = r.memoizedState), (A = xl || kv(r, l, A, o, I, ye, w) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ic(n, r, l, o, d, c);
  }
  function Ic(n, r, l, o, c, d) {
    gu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Tv(r, l, !1), On(n, r, d);
    o = r.stateNode, Vv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ro(r, n.child, null, d), r.child = ro(r, null, E, d)) : kn(n, r, E, d), r.memoizedState = o.state, c && Tv(r, l, !0), r.child;
  }
  function ly(n) {
    var r = n.stateNode;
    r.pendingContext ? hi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && hi(n, r.context, !1), Td(n, r.containerInfo);
  }
  function Pv(n, r, l, o, c) {
    return Zu(), Fn(c), r.flags |= 256, kn(n, r, l, o), r.child;
  }
  var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Su(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Bv(n, r, l) {
    var o = r.pendingProps, c = _e.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Dt(_e, c & 1), n === null)
      return bc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = sf(m, o, 0, null), n = bu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Su(l), r.memoizedState = zs, n) : Qc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return kd(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var w = { mode: "hidden", children: o.children };
      return !(m & 1) && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = w, r.deletions = null) : (o = Al(c, w), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = Al(E, d) : (d = bu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? Su(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = zs, o;
    }
    return d = n.child, n = d.sibling, o = Al(d, { mode: "visible", children: o.children }), !(r.mode & 1) && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Qc(n, r) {
    return r = sf({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Wc(n, r, l, o) {
    return o !== null && Fn(o), ro(r, n.child, null, l), n = Qc(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function kd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = xd(Error(M(422))), Wc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = sf({ mode: "visible", children: o.children }, c, 0, null), d = bu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ro(r, n.child, null, m), r.child.memoizedState = Su(m), r.memoizedState = zs, d);
    if (!(r.mode & 1))
      return Wc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(M(419)), o = xd(d, o, void 0), Wc(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, Zr || E) {
      if (o = Rn, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = c & (o.suspendedLanes | m) ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, Wi(n, c), vn(o, n, c, -1));
      }
      return Vs(), o = xd(Error(M(421))), Wc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Vd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ya = va(c.nextSibling), ma = r, nn = !0, za = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = ar, Qr[Wr++] = ai, Gr = n.id, ar = n.overflow, ai = r), r = Qc(r, o.children), r.flags |= 4096, r);
  }
  function $v(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), _l(n.return, r, l);
  }
  function Gc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Od(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (kn(n, r, o.children, l), o = _e.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && $v(n, l, r);
            else if (n.tag === 19)
              $v(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Dt(_e, o), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && bt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), Gc(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && bt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          Gc(r, !0, l, null, d);
          break;
        case "together":
          Gc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function Us(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function On(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), Cu |= r.lanes, !(l & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(M(153));
    if (r.child !== null) {
      for (n = r.child, l = Al(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = Al(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function qi(n, r, l) {
    switch (r.tag) {
      case 3:
        ly(r), Zu();
        break;
      case 5:
        kc(r);
        break;
      case 1:
        An(r.type) && uu(r);
        break;
      case 4:
        Td(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Dt(Ju, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Dt(_e, _e.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Bv(n, r, l) : (Dt(_e, _e.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        Dt(_e, _e.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return Od(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Dt(_e, _e.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, Jr(n, r, l);
    }
    return On(n, r, l);
  }
  var Ei, co, fo, Fa;
  Ei = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, co = function() {
  }, fo = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, kl(gi.current);
      var d = null;
      switch (l) {
        case "input":
          c = yn(n, c), o = yn(n, o), d = [];
          break;
        case "select":
          c = T({}, c, { value: void 0 }), o = T({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = la(n, c), o = la(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = Ec);
      }
      xt(l, o);
      var m;
      l = null;
      for (A in c)
        if (!o.hasOwnProperty(A) && c.hasOwnProperty(A) && c[A] != null)
          if (A === "style") {
            var E = c[A];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            A !== "dangerouslySetInnerHTML" && A !== "children" && A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && A !== "autoFocus" && (Ct.hasOwnProperty(A) ? d || (d = []) : (d = d || []).push(A, null));
      for (A in o) {
        var w = o[A];
        if (E = c != null ? c[A] : void 0, o.hasOwnProperty(A) && w !== E && (w != null || E != null))
          if (A === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || w && w.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in w)
                w.hasOwnProperty(m) && E[m] !== w[m] && (l || (l = {}), l[m] = w[m]);
            } else
              l || (d || (d = []), d.push(
                A,
                l
              )), l = w;
          else
            A === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, E = E ? E.__html : void 0, w != null && E !== w && (d = d || []).push(A, w)) : A === "children" ? typeof w != "string" && typeof w != "number" || (d = d || []).push(A, "" + w) : A !== "suppressContentEditableWarning" && A !== "suppressHydrationWarning" && (Ct.hasOwnProperty(A) ? (w != null && A === "onScroll" && Bt("scroll", n), d || E === w || (d = [])) : (d = d || []).push(A, w));
      }
      l && (d = d || []).push("style", l);
      var A = d;
      (r.updateQueue = A) && (r.flags |= 4);
    }
  }, Fa = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function Cn(n, r) {
    if (!nn)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function Cr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function uy(n, r, l) {
    var o = r.pendingProps;
    switch (wc(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Cr(r), null;
      case 1:
        return An(r.type) && Ir(), Cr(r), null;
      case 3:
        return o = r.stateNode, io(), we(We), we(Wn), Ua(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (Fd(za), za = null))), co(n, r), Cr(r), null;
      case 5:
        Ne(r);
        var c = kl(ws.current);
        if (l = r.type, n !== null && r.stateNode != null)
          fo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(M(166));
            return Cr(r), null;
          }
          if (n = kl(gi.current), _c(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Oa] = r, o[Ss] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Bt("cancel", o), Bt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Bt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Bi.length; c++)
                  Bt(Bi[c], o);
                break;
              case "source":
                Bt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Bt(
                  "error",
                  o
                ), Bt("load", o);
                break;
              case "details":
                Bt("toggle", o);
                break;
              case "input":
                er(o, d), Bt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Bt("invalid", o);
                break;
              case "textarea":
                ua(o, d), Bt("invalid", o);
            }
            xt(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && hs(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && hs(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : Ct.hasOwnProperty(m) && E != null && m === "onScroll" && Bt("scroll", o);
              }
            switch (l) {
              case "input":
                Jn(o), zn(o, d, !0);
                break;
              case "textarea":
                Jn(o), oa(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = Ec);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = tr(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Oa] = r, n[Ss] = o, Ei(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = bn(l, o), l) {
                case "dialog":
                  Bt("cancel", n), Bt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Bt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Bi.length; c++)
                    Bt(Bi[c], n);
                  c = o;
                  break;
                case "source":
                  Bt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Bt(
                    "error",
                    n
                  ), Bt("load", n), c = o;
                  break;
                case "details":
                  Bt("toggle", n), c = o;
                  break;
                case "input":
                  er(n, o), c = yn(n, o), Bt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = T({}, o, { value: void 0 }), Bt("invalid", n);
                  break;
                case "textarea":
                  ua(n, o), c = la(n, o), Bt("invalid", n);
                  break;
                default:
                  c = o;
              }
              xt(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var w = E[d];
                  d === "style" ? rt(n, w) : d === "dangerouslySetInnerHTML" ? (w = w ? w.__html : void 0, w != null && sa(n, w)) : d === "children" ? typeof w == "string" ? (l !== "textarea" || w !== "") && ca(n, w) : typeof w == "number" && ca(n, "" + w) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Ct.hasOwnProperty(d) ? w != null && d === "onScroll" && Bt("scroll", n) : w != null && lt(n, d, w, m));
                }
              switch (l) {
                case "input":
                  Jn(n), zn(n, o, !1);
                  break;
                case "textarea":
                  Jn(n), oa(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + ot(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Vn(n, !!o.multiple, d, !1) : o.defaultValue != null && Vn(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = Ec);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return Cr(r), null;
      case 6:
        if (n && r.stateNode != null)
          Fa(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(M(166));
          if (l = kl(ws.current), kl(gi.current), _c(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Oa] = r, (d = o.nodeValue !== l) && (n = ma, n !== null))
              switch (n.tag) {
                case 3:
                  hs(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && hs(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Oa] = r, r.stateNode = o;
        }
        return Cr(r), null;
      case 13:
        if (we(_e), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (nn && ya !== null && r.mode & 1 && !(r.flags & 128))
            bv(), Zu(), r.flags |= 98560, d = !1;
          else if (d = _c(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(M(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(M(317));
              d[Oa] = r;
            } else
              Zu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Cr(r), d = !1;
          } else
            za !== null && (Fd(za), za = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || _e.current & 1 ? Bn === 0 && (Bn = 3) : Vs())), r.updateQueue !== null && (r.flags |= 4), Cr(r), null);
      case 4:
        return io(), co(n, r), n === null && pi(r.stateNode.containerInfo), Cr(r), null;
      case 10:
        return Sd(r.type._context), Cr(r), null;
      case 17:
        return An(r.type) && Ir(), Cr(r), null;
      case 19:
        if (we(_e), d = r.memoizedState, d === null)
          return Cr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            Cn(d, !1);
          else {
            if (Bn !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (m = bt(n), m !== null) {
                  for (r.flags |= 128, Cn(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Dt(_e, _e.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && qt() > Ro && (r.flags |= 128, o = !0, Cn(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = bt(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), Cn(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !nn)
                return Cr(r), null;
            } else
              2 * qt() - d.renderingStartTime > Ro && l !== 1073741824 && (r.flags |= 128, o = !0, Cn(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = qt(), r.sibling = null, l = _e.current, Dt(_e, o ? l & 1 | 2 : l & 1), r) : (Cr(r), null);
      case 22:
      case 23:
        return lf(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && r.mode & 1 ? ea & 1073741824 && (Cr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : Cr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(M(156, r.tag));
  }
  function oy(n, r) {
    switch (wc(r), r.tag) {
      case 1:
        return An(r.type) && Ir(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return io(), we(We), we(Wn), Ua(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ne(r), null;
      case 13:
        if (we(_e), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(M(340));
          Zu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return we(_e), null;
      case 4:
        return io(), null;
      case 10:
        return Sd(r.type._context), null;
      case 22:
      case 23:
        return lf(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var po = !1, ir = !1, qc = typeof WeakSet == "function" ? WeakSet : Set, ve = null;
  function vo(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          Tn(n, r, o);
        }
      else
        l.current = null;
  }
  function Ld(n, r, l) {
    try {
      l();
    } catch (o) {
      Tn(n, r, o);
    }
  }
  var Xc = !1;
  function sy(n, r) {
    if (od = Bu, n = fv(), ss(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, w = -1, A = 0, W = 0, G = n, I = null;
            t:
              for (; ; ) {
                for (var se; G !== l || c !== 0 && G.nodeType !== 3 || (E = m + c), G !== d || o !== 0 && G.nodeType !== 3 || (w = m + o), G.nodeType === 3 && (m += G.nodeValue.length), (se = G.firstChild) !== null; )
                  I = G, G = se;
                for (; ; ) {
                  if (G === n)
                    break t;
                  if (I === l && ++A === c && (E = m), I === d && ++W === o && (w = m), (se = G.nextSibling) !== null)
                    break;
                  G = I, I = G.parentNode;
                }
                G = se;
              }
            l = E === -1 || w === -1 ? null : { start: E, end: w };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (sd = { focusedElem: n, selectionRange: l }, Bu = !1, ve = r; ve !== null; )
      if (r = ve, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, ve = n;
      else
        for (; ve !== null; ) {
          r = ve;
          try {
            var ye = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ye !== null) {
                    var Ce = ye.memoizedProps, Ln = ye.memoizedState, D = r.stateNode, _ = D.getSnapshotBeforeUpdate(r.elementType === r.type ? Ce : qr(r.type, Ce), Ln);
                    D.__reactInternalSnapshotBeforeUpdate = _;
                  }
                  break;
                case 3:
                  var L = r.stateNode.containerInfo;
                  L.nodeType === 1 ? L.textContent = "" : L.nodeType === 9 && L.documentElement && L.removeChild(L.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(M(163));
              }
          } catch (J) {
            Tn(r, r.return, J);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, ve = n;
            break;
          }
          ve = r.return;
        }
    return ye = Xc, Xc = !1, ye;
  }
  function ho(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && Ld(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function Kc(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Zc(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Yv(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Yv(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oa], delete r[Ss], delete r[pd], delete r[ey], delete r[ty])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Md(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Iv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Md(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function As(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = Ec));
    else if (o !== 4 && (n = n.child, n !== null))
      for (As(n, r, l), n = n.sibling; n !== null; )
        As(n, r, l), n = n.sibling;
  }
  function mo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (mo(n, r, l), n = n.sibling; n !== null; )
        mo(n, r, l), n = n.sibling;
  }
  var on = null, Gn = !1;
  function xr(n, r, l) {
    for (l = l.child; l !== null; )
      yo(n, r, l), l = l.sibling;
  }
  function yo(n, r, l) {
    if (Pr && typeof Pr.onCommitFiberUnmount == "function")
      try {
        Pr.onCommitFiberUnmount(dl, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        ir || vo(l, r);
      case 6:
        var o = on, c = Gn;
        on = null, xr(n, r, l), on = o, Gn = c, on !== null && (Gn ? (n = on, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : on.removeChild(l.stateNode));
        break;
      case 18:
        on !== null && (Gn ? (n = on, l = l.stateNode, n.nodeType === 8 ? dd(n.parentNode, l) : n.nodeType === 1 && dd(n, l), ka(n)) : dd(on, l.stateNode));
        break;
      case 4:
        o = on, c = Gn, on = l.stateNode.containerInfo, Gn = !0, xr(n, r, l), on = o, Gn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!ir && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Ld(l, r, m), c = c.next;
          } while (c !== o);
        }
        xr(n, r, l);
        break;
      case 1:
        if (!ir && (vo(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            Tn(l, r, E);
          }
        xr(n, r, l);
        break;
      case 21:
        xr(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (ir = (o = ir) || l.memoizedState !== null, xr(n, r, l), ir = o) : xr(n, r, l);
        break;
      default:
        xr(n, r, l);
    }
  }
  function go(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new qc()), r.forEach(function(o) {
        var c = my.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function qn(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  on = E.stateNode, Gn = !1;
                  break e;
                case 3:
                  on = E.stateNode.containerInfo, Gn = !0;
                  break e;
                case 4:
                  on = E.stateNode.containerInfo, Gn = !0;
                  break e;
              }
              E = E.return;
            }
          if (on === null)
            throw Error(M(160));
          yo(d, m, c), on = null, Gn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (A) {
          Tn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Qv(r, n), r = r.sibling;
  }
  function Qv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (qn(r, n), Ci(n), o & 4) {
          try {
            ho(3, n, n.return), Kc(3, n);
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
          try {
            ho(5, n, n.return);
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        }
        break;
      case 1:
        qn(r, n), Ci(n), o & 512 && l !== null && vo(l, l.return);
        break;
      case 5:
        if (qn(r, n), Ci(n), o & 512 && l !== null && vo(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            ca(c, "");
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, w = n.updateQueue;
          if (n.updateQueue = null, w !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Hn(c, d), bn(E, m);
              var A = bn(E, d);
              for (m = 0; m < w.length; m += 2) {
                var W = w[m], G = w[m + 1];
                W === "style" ? rt(c, G) : W === "dangerouslySetInnerHTML" ? sa(c, G) : W === "children" ? ca(c, G) : lt(c, W, G, A);
              }
              switch (E) {
                case "input":
                  Nn(c, d);
                  break;
                case "textarea":
                  mr(c, d);
                  break;
                case "select":
                  var I = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var se = d.value;
                  se != null ? Vn(c, !!d.multiple, se, !1) : I !== !!d.multiple && (d.defaultValue != null ? Vn(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Vn(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Ss] = d;
            } catch (Ce) {
              Tn(n, n.return, Ce);
            }
        }
        break;
      case 6:
        if (qn(r, n), Ci(n), o & 4) {
          if (n.stateNode === null)
            throw Error(M(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        }
        break;
      case 3:
        if (qn(r, n), Ci(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ka(r.containerInfo);
          } catch (Ce) {
            Tn(n, n.return, Ce);
          }
        break;
      case 4:
        qn(r, n), Ci(n);
        break;
      case 13:
        qn(r, n), Ci(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (ef = qt())), o & 4 && go(n);
        break;
      case 22:
        if (W = l !== null && l.memoizedState !== null, n.mode & 1 ? (ir = (A = ir) || W, qn(r, n), ir = A) : qn(r, n), Ci(n), o & 8192) {
          if (A = n.memoizedState !== null, (n.stateNode.isHidden = A) && !W && n.mode & 1)
            for (ve = n, W = n.child; W !== null; ) {
              for (G = ve = W; ve !== null; ) {
                switch (I = ve, se = I.child, I.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ho(4, I, I.return);
                    break;
                  case 1:
                    vo(I, I.return);
                    var ye = I.stateNode;
                    if (typeof ye.componentWillUnmount == "function") {
                      o = I, l = I.return;
                      try {
                        r = o, ye.props = r.memoizedProps, ye.state = r.memoizedState, ye.componentWillUnmount();
                      } catch (Ce) {
                        Tn(o, l, Ce);
                      }
                    }
                    break;
                  case 5:
                    vo(I, I.return);
                    break;
                  case 22:
                    if (I.memoizedState !== null) {
                      Wv(G);
                      continue;
                    }
                }
                se !== null ? (se.return = I, ve = se) : Wv(G);
              }
              W = W.sibling;
            }
          e:
            for (W = null, G = n; ; ) {
              if (G.tag === 5) {
                if (W === null) {
                  W = G;
                  try {
                    c = G.stateNode, A ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = G.stateNode, w = G.memoizedProps.style, m = w != null && w.hasOwnProperty("display") ? w.display : null, E.style.display = De("display", m));
                  } catch (Ce) {
                    Tn(n, n.return, Ce);
                  }
                }
              } else if (G.tag === 6) {
                if (W === null)
                  try {
                    G.stateNode.nodeValue = A ? "" : G.memoizedProps;
                  } catch (Ce) {
                    Tn(n, n.return, Ce);
                  }
              } else if ((G.tag !== 22 && G.tag !== 23 || G.memoizedState === null || G === n) && G.child !== null) {
                G.child.return = G, G = G.child;
                continue;
              }
              if (G === n)
                break e;
              for (; G.sibling === null; ) {
                if (G.return === null || G.return === n)
                  break e;
                W === G && (W = null), G = G.return;
              }
              W === G && (W = null), G.sibling.return = G.return, G = G.sibling;
            }
        }
        break;
      case 19:
        qn(r, n), Ci(n), o & 4 && go(n);
        break;
      case 21:
        break;
      default:
        qn(
          r,
          n
        ), Ci(n);
    }
  }
  function Ci(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Md(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(M(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Iv(n);
            mo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Iv(n);
            As(n, E, m);
            break;
          default:
            throw Error(M(161));
        }
      } catch (w) {
        Tn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function cy(n, r, l) {
    ve = n, Nd(n);
  }
  function Nd(n, r, l) {
    for (var o = (n.mode & 1) !== 0; ve !== null; ) {
      var c = ve, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || po;
        if (!m) {
          var E = c.alternate, w = E !== null && E.memoizedState !== null || ir;
          E = po;
          var A = ir;
          if (po = m, (ir = w) && !A)
            for (ve = c; ve !== null; )
              m = ve, w = m.child, m.tag === 22 && m.memoizedState !== null ? zd(c) : w !== null ? (w.return = m, ve = w) : zd(c);
          for (; d !== null; )
            ve = d, Nd(d), d = d.sibling;
          ve = c, po = E, ir = A;
        }
        So(n);
      } else
        c.subtreeFlags & 8772 && d !== null ? (d.return = c, ve = d) : So(n);
    }
  }
  function So(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r.flags & 8772) {
        var l = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                ir || Kc(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !ir)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && to(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  to(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var w = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      w.autoFocus && l.focus();
                      break;
                    case "img":
                      w.src && (l.src = w.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var A = r.alternate;
                  if (A !== null) {
                    var W = A.memoizedState;
                    if (W !== null) {
                      var G = W.dehydrated;
                      G !== null && ka(G);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(M(163));
            }
          ir || r.flags & 512 && Zc(r);
        } catch (I) {
          Tn(r, r.return, I);
        }
      }
      if (r === n) {
        ve = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function Wv(n) {
    for (; ve !== null; ) {
      var r = ve;
      if (r === n) {
        ve = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, ve = l;
        break;
      }
      ve = r.return;
    }
  }
  function zd(n) {
    for (; ve !== null; ) {
      var r = ve;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              Kc(4, r);
            } catch (w) {
              Tn(r, l, w);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (w) {
                Tn(r, c, w);
              }
            }
            var d = r.return;
            try {
              Zc(r);
            } catch (w) {
              Tn(r, d, w);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Zc(r);
            } catch (w) {
              Tn(r, m, w);
            }
        }
      } catch (w) {
        Tn(r, r.return, w);
      }
      if (r === n) {
        ve = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, ve = E;
        break;
      }
      ve = r.return;
    }
  }
  var fy = Math.ceil, Eu = Ve.ReactCurrentDispatcher, Jc = Ve.ReactCurrentOwner, ja = Ve.ReactCurrentBatchConfig, pt = 0, Rn = null, rn = null, Pn = 0, ea = 0, Eo = $t(0), Bn = 0, Fs = null, Cu = 0, Co = 0, Ud = 0, zl = null, Rr = null, ef = 0, Ro = 1 / 0, Xi = null, tf = !1, Ad = null, Ha = null, To = !1, Va = null, nf = 0, js = 0, rf = null, Hs = -1, Ru = 0;
  function Xn() {
    return pt & 6 ? qt() : Hs !== -1 ? Hs : Hs = qt();
  }
  function Ki(n) {
    return n.mode & 1 ? pt & 2 && Pn !== 0 ? Pn & -Pn : ny.transition !== null ? (Ru === 0 && (Ru = Zl()), Ru) : (n = ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ts(n.type)), n) : 1;
  }
  function vn(n, r, l, o) {
    if (50 < js)
      throw js = 0, rf = null, Error(M(185));
    vl(n, l, o), (!(pt & 2) || n !== Rn) && (n === Rn && (!(pt & 2) && (Co |= l), Bn === 4 && Ri(n, Pn)), $n(n, o), l === 1 && pt === 0 && !(r.mode & 1) && (Ro = qt() + 500, Tl && mi()));
  }
  function $n(n, r) {
    var l = n.callbackNode;
    pl(n, r);
    var o = ci(n, n === Rn ? Pn : 0);
    if (o === 0)
      l !== null && Gt(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && Gt(l), r === 1)
        n.tag === 0 ? wv(wo.bind(null, n)) : Rc(wo.bind(null, n)), Rv(function() {
          !(pt & 6) && mi();
        }), l = null;
      else {
        switch (Zo(o)) {
          case 1:
            l = Io;
            break;
          case 4:
            l = si;
            break;
          case 16:
            l = at;
            break;
          case 536870912:
            l = Ni;
            break;
          default:
            l = at;
        }
        l = th(l, af.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function af(n, r) {
    if (Hs = -1, Ru = 0, pt & 6)
      throw Error(M(327));
    var l = n.callbackNode;
    if (bo() && n.callbackNode !== l)
      return null;
    var o = ci(n, n === Rn ? Pn : 0);
    if (o === 0)
      return null;
    if (o & 30 || o & n.expiredLanes || r)
      r = uf(n, o);
    else {
      r = o;
      var c = pt;
      pt |= 2;
      var d = qv();
      (Rn !== n || Pn !== r) && (Xi = null, Ro = qt() + 500, wu(n, r));
      do
        try {
          py();
          break;
        } catch (E) {
          Gv(n, E);
        }
      while (!0);
      gd(), Eu.current = d, pt = c, rn !== null ? r = 0 : (Rn = null, Pn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fi(n), c !== 0 && (o = c, r = Tu(n, c))), r === 1)
        throw l = Fs, wu(n, 0), Ri(n, o), $n(n, qt()), l;
      if (r === 6)
        Ri(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !jd(c) && (r = uf(n, o), r === 2 && (d = fi(n), d !== 0 && (o = d, r = Tu(n, d))), r === 1))
          throw l = Fs, wu(n, 0), Ri(n, o), $n(n, qt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(M(345));
          case 2:
            Ul(n, Rr, Xi);
            break;
          case 3:
            if (Ri(n, o), (o & 130023424) === o && (r = ef + 500 - qt(), 10 < r)) {
              if (ci(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                Xn(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = ms(Ul.bind(null, n, Rr, Xi), r);
              break;
            }
            Ul(n, Rr, Xi);
            break;
          case 4:
            if (Ri(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - br(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = qt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * fy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ms(Ul.bind(null, n, Rr, Xi), o);
              break;
            }
            Ul(n, Rr, Xi);
            break;
          case 5:
            Ul(n, Rr, Xi);
            break;
          default:
            throw Error(M(329));
        }
      }
    }
    return $n(n, qt()), n.callbackNode === l ? af.bind(null, n) : null;
  }
  function Tu(n, r) {
    var l = zl;
    return n.current.memoizedState.isDehydrated && (wu(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = Rr, Rr = l, r !== null && Fd(r)), n;
  }
  function Fd(n) {
    Rr === null ? Rr = n : Rr.push.apply(Rr, n);
  }
  function jd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ti(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function Ri(n, r) {
    for (r &= ~Ud, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - br(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function wo(n) {
    if (pt & 6)
      throw Error(M(327));
    bo();
    var r = ci(n, 0);
    if (!(r & 1))
      return $n(n, qt()), null;
    var l = uf(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = fi(n);
      o !== 0 && (r = o, l = Tu(n, o));
    }
    if (l === 1)
      throw l = Fs, wu(n, 0), Ri(n, r), $n(n, qt()), l;
    if (l === 6)
      throw Error(M(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ul(n, Rr, Xi), $n(n, qt()), null;
  }
  function Hd(n, r) {
    var l = pt;
    pt |= 1;
    try {
      return n(r);
    } finally {
      pt = l, pt === 0 && (Ro = qt() + 500, Tl && mi());
    }
  }
  function Ti(n) {
    Va !== null && Va.tag === 0 && !(pt & 6) && bo();
    var r = pt;
    pt |= 1;
    var l = ja.transition, o = ht;
    try {
      if (ja.transition = null, ht = 1, n)
        return n();
    } finally {
      ht = o, ja.transition = l, pt = r, !(pt & 6) && mi();
    }
  }
  function lf() {
    ea = Eo.current, we(Eo);
  }
  function wu(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, ys(l)), rn !== null)
      for (l = rn.return; l !== null; ) {
        var o = l;
        switch (wc(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && Ir();
            break;
          case 3:
            io(), we(We), we(Wn), Ua();
            break;
          case 5:
            Ne(o);
            break;
          case 4:
            io();
            break;
          case 13:
            we(_e);
            break;
          case 19:
            we(_e);
            break;
          case 10:
            Sd(o.type._context);
            break;
          case 22:
          case 23:
            lf();
        }
        l = l.return;
      }
    if (Rn = n, rn = n = Al(n.current, null), Pn = ea = r, Bn = 0, Fs = null, Ud = Co = Cu = 0, Rr = zl = null, Er !== null) {
      for (r = 0; r < Er.length; r++)
        if (l = Er[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      Er = null;
    }
    return n;
  }
  function Gv(n, r) {
    do {
      var l = rn;
      try {
        if (gd(), bs.current = $c, Dn) {
          for (var o = pn.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          Dn = !1;
        }
        if (fu = 0, P = xn = pn = null, Ue = !1, Si = 0, Jc.current = null, l === null || l.return === null) {
          Bn = 1, Fs = r, rn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, w = r;
          if (r = Pn, E.flags |= 32768, w !== null && typeof w == "object" && typeof w.then == "function") {
            var A = w, W = E, G = W.tag;
            if (!(W.mode & 1) && (G === 0 || G === 11 || G === 15)) {
              var I = W.alternate;
              I ? (W.updateQueue = I.updateQueue, W.memoizedState = I.memoizedState, W.lanes = I.lanes) : (W.updateQueue = null, W.memoizedState = null);
            }
            var se = Hv(m);
            if (se !== null) {
              se.flags &= -257, Dd(se, m, E, d, r), se.mode & 1 && Ms(d, A, r), r = se, w = A;
              var ye = r.updateQueue;
              if (ye === null) {
                var Ce = /* @__PURE__ */ new Set();
                Ce.add(w), r.updateQueue = Ce;
              } else
                ye.add(w);
              break e;
            } else {
              if (!(r & 1)) {
                Ms(d, A, r), Vs();
                break e;
              }
              w = Error(M(426));
            }
          } else if (nn && E.mode & 1) {
            var Ln = Hv(m);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), Dd(Ln, m, E, d, r), Fn(Ml(w, E));
              break e;
            }
          }
          d = w = Ml(w, E), Bn !== 4 && (Bn = 2), zl === null ? zl = [d] : zl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Fv(d, w, r);
                Dv(d, D);
                break e;
              case 1:
                E = w;
                var _ = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = jv(d, E, r);
                  Dv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Kv(l);
      } catch (be) {
        r = be, rn === l && l !== null && (rn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function qv() {
    var n = Eu.current;
    return Eu.current = $c, n === null ? $c : n;
  }
  function Vs() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Rn === null || !(Cu & 268435455) && !(Co & 268435455) || Ri(Rn, Pn);
  }
  function uf(n, r) {
    var l = pt;
    pt |= 2;
    var o = qv();
    (Rn !== n || Pn !== r) && (Xi = null, wu(n, r));
    do
      try {
        dy();
        break;
      } catch (c) {
        Gv(n, c);
      }
    while (!0);
    if (gd(), pt = l, Eu.current = o, rn !== null)
      throw Error(M(261));
    return Rn = null, Pn = 0, Bn;
  }
  function dy() {
    for (; rn !== null; )
      Xv(rn);
  }
  function py() {
    for (; rn !== null && !gr(); )
      Xv(rn);
  }
  function Xv(n) {
    var r = eh(n.alternate, n, ea);
    n.memoizedProps = n.pendingProps, r === null ? Kv(n) : rn = r, Jc.current = null;
  }
  function Kv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = oy(l, r), l !== null) {
          l.flags &= 32767, rn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, rn = null;
          return;
        }
      } else if (l = uy(l, r, ea), l !== null) {
        rn = l;
        return;
      }
      if (r = r.sibling, r !== null) {
        rn = r;
        return;
      }
      rn = r = n;
    } while (r !== null);
    Bn === 0 && (Bn = 5);
  }
  function Ul(n, r, l) {
    var o = ht, c = ja.transition;
    try {
      ja.transition = null, ht = 1, vy(n, r, l, o);
    } finally {
      ja.transition = c, ht = o;
    }
    return null;
  }
  function vy(n, r, l, o) {
    do
      bo();
    while (Va !== null);
    if (pt & 6)
      throw Error(M(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(M(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xo(n, d), n === Rn && (rn = Rn = null, Pn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || To || (To = !0, th(at, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = ja.transition, ja.transition = null;
      var m = ht;
      ht = 1;
      var E = pt;
      pt |= 4, Jc.current = null, sy(n, l), Qv(l, n), ru(sd), Bu = !!od, sd = od = null, n.current = l, cy(l), oi(), pt = E, ht = m, ja.transition = d;
    } else
      n.current = l;
    if (To && (To = !1, Va = n, nf = c), d = n.pendingLanes, d === 0 && (Ha = null), Qo(l.stateNode), $n(n, qt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (tf)
      throw tf = !1, n = Ad, Ad = null, n;
    return nf & 1 && n.tag !== 0 && bo(), d = n.pendingLanes, d & 1 ? n === rf ? js++ : (js = 0, rf = n) : js = 0, mi(), null;
  }
  function bo() {
    if (Va !== null) {
      var n = Zo(nf), r = ja.transition, l = ht;
      try {
        if (ja.transition = null, ht = 16 > n ? 16 : n, Va === null)
          var o = !1;
        else {
          if (n = Va, Va = null, nf = 0, pt & 6)
            throw Error(M(331));
          var c = pt;
          for (pt |= 4, ve = n.current; ve !== null; ) {
            var d = ve, m = d.child;
            if (ve.flags & 16) {
              var E = d.deletions;
              if (E !== null) {
                for (var w = 0; w < E.length; w++) {
                  var A = E[w];
                  for (ve = A; ve !== null; ) {
                    var W = ve;
                    switch (W.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(8, W, d);
                    }
                    var G = W.child;
                    if (G !== null)
                      G.return = W, ve = G;
                    else
                      for (; ve !== null; ) {
                        W = ve;
                        var I = W.sibling, se = W.return;
                        if (Yv(W), W === A) {
                          ve = null;
                          break;
                        }
                        if (I !== null) {
                          I.return = se, ve = I;
                          break;
                        }
                        ve = se;
                      }
                  }
                }
                var ye = d.alternate;
                if (ye !== null) {
                  var Ce = ye.child;
                  if (Ce !== null) {
                    ye.child = null;
                    do {
                      var Ln = Ce.sibling;
                      Ce.sibling = null, Ce = Ln;
                    } while (Ce !== null);
                  }
                }
                ve = d;
              }
            }
            if (d.subtreeFlags & 2064 && m !== null)
              m.return = d, ve = m;
            else
              e:
                for (; ve !== null; ) {
                  if (d = ve, d.flags & 2048)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ho(9, d, d.return);
                    }
                  var D = d.sibling;
                  if (D !== null) {
                    D.return = d.return, ve = D;
                    break e;
                  }
                  ve = d.return;
                }
          }
          var _ = n.current;
          for (ve = _; ve !== null; ) {
            m = ve;
            var L = m.child;
            if (m.subtreeFlags & 2064 && L !== null)
              L.return = m, ve = L;
            else
              e:
                for (m = _; ve !== null; ) {
                  if (E = ve, E.flags & 2048)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Kc(9, E);
                      }
                    } catch (be) {
                      Tn(E, E.return, be);
                    }
                  if (E === m) {
                    ve = null;
                    break e;
                  }
                  var J = E.sibling;
                  if (J !== null) {
                    J.return = E.return, ve = J;
                    break e;
                  }
                  ve = E.return;
                }
          }
          if (pt = c, mi(), Pr && typeof Pr.onPostCommitFiberRoot == "function")
            try {
              Pr.onPostCommitFiberRoot(dl, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ht = l, ja.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = Ml(l, r), r = Fv(n, r, 1), n = Dl(n, r, 1), r = Xn(), n !== null && (vl(n, 1, r), $n(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3)
      Zv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
            n = Ml(l, n), n = jv(r, n, 1), r = Dl(r, n, 1), n = Xn(), r !== null && (vl(r, 1, n), $n(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function hy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Xn(), n.pingedLanes |= n.suspendedLanes & l, Rn === n && (Pn & l) === l && (Bn === 4 || Bn === 3 && (Pn & 130023424) === Pn && 500 > qt() - ef ? wu(n, 0) : Ud |= l), $n(n, r);
  }
  function Jv(n, r) {
    r === 0 && (n.mode & 1 ? (r = ju, ju <<= 1, !(ju & 130023424) && (ju = 4194304)) : r = 1);
    var l = Xn();
    n = Wi(n, r), n !== null && (vl(n, r, l), $n(n, l));
  }
  function Vd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Jv(n, l);
  }
  function my(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(M(314));
    }
    o !== null && o.delete(r), Jv(n, l);
  }
  var eh;
  eh = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || We.current)
        Zr = !0;
      else {
        if (!(n.lanes & l) && !(r.flags & 128))
          return Zr = !1, qi(n, r, l);
        Zr = !!(n.flags & 131072);
      }
    else
      Zr = !1, nn && r.flags & 1048576 && bl(r, ou, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        Us(n, r), n = r.pendingProps;
        var c = ha(r, Wn.current);
        _n(r, l), c = du(null, r, o, n, c, l);
        var d = Ol();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (d = !0, uu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Ed(r), c.updater = Dc, r.stateNode = c, c._reactInternals = r, Rd(r, o, n, l), r = Ic(null, r, o, !0, d, l)) : (r.tag = 0, nn && d && Tc(r), kn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Us(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = yy(o), n = qr(o, n), c) {
            case 0:
              r = Ke(null, r, o, n, l);
              break e;
            case 1:
              r = Ns(null, r, o, n, l);
              break e;
            case 11:
              r = so(null, r, o, n, l);
              break e;
            case 14:
              r = Nl(null, r, o, qr(o.type, n), l);
              break e;
          }
          throw Error(M(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Ke(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Ns(n, r, o, c, l);
      case 3:
        e: {
          if (ly(r), n === null)
            throw Error(M(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, xv(n, r), Cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ml(Error(M(423)), r), r = Pv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ml(Error(M(424)), r), r = Pv(n, r, o, l, c);
              break e;
            } else
              for (ya = va(r.stateNode.containerInfo.firstChild), ma = r, nn = !0, za = null, l = zv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Zu(), o === c) {
              r = On(n, r, l);
              break e;
            }
            kn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return kc(r), n === null && bc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, lu(o, c) ? m = null : d !== null && lu(o, d) && (r.flags |= 32), gu(n, r), kn(n, r, m, l), r.child;
      case 6:
        return n === null && bc(r), null;
      case 13:
        return Bv(n, r, l);
      case 4:
        return Td(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ro(r, null, o, l) : kn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), so(n, r, o, c, l);
      case 7:
        return kn(n, r, r.pendingProps, l), r.child;
      case 8:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return kn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Dt(Ju, o._currentValue), o._currentValue = m, d !== null)
            if (ti(d.value, m)) {
              if (d.children === c.children && !We.current) {
                r = On(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var w = E.firstContext; w !== null; ) {
                    if (w.context === o) {
                      if (d.tag === 1) {
                        w = Xt(-1, l & -l), w.tag = 2;
                        var A = d.updateQueue;
                        if (A !== null) {
                          A = A.shared;
                          var W = A.pending;
                          W === null ? w.next = w : (w.next = W.next, W.next = w), A.pending = w;
                        }
                      }
                      d.lanes |= l, w = d.alternate, w !== null && (w.lanes |= l), _l(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    w = w.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(M(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), _l(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          kn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, _n(r, l), c = ee(c), o = o(c), r.flags |= 1, kn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = qr(o, r.pendingProps), c = qr(o.type, c), Nl(n, r, o, c, l);
      case 15:
        return Yc(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Us(n, r), r.tag = 1, An(o) ? (n = !0, uu(r)) : n = !1, _n(r, l), Ov(r, o, c), Rd(r, o, c, l), Ic(null, r, o, !0, n, l);
      case 19:
        return Od(n, r, l);
      case 22:
        return Jr(n, r, l);
    }
    throw Error(M(156, r.tag));
  };
  function th(n, r) {
    return Wt(n, r);
  }
  function nh(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new nh(n, r, l, o);
  }
  function Pd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function yy(n) {
    if (typeof n == "function")
      return Pd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === mt)
        return 11;
      if (n === Je)
        return 14;
    }
    return 2;
  }
  function Al(n, r) {
    var l = n.alternate;
    return l === null ? (l = Pa(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function of(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Pd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case ct:
            return bu(l.children, c, d, r);
          case Ye:
            m = 8, c |= 8;
            break;
          case wn:
            return n = Pa(12, l, r, c | 2), n.elementType = wn, n.lanes = d, n;
          case Zt:
            return n = Pa(13, l, r, c), n.elementType = Zt, n.lanes = d, n;
          case Be:
            return n = Pa(19, l, r, c), n.elementType = Be, n.lanes = d, n;
          case et:
            return sf(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case mn:
                  m = 10;
                  break e;
                case It:
                  m = 9;
                  break e;
                case mt:
                  m = 11;
                  break e;
                case Je:
                  m = 14;
                  break e;
                case Rt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(M(130, n == null ? n : typeof n, ""));
        }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function bu(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function sf(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = et, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function cf(n, r, l) {
    return n = Pa(6, n, null, r), n.lanes = l, n;
  }
  function Ps(n, r, l) {
    return r = Pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function Bs(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Jl(0), this.expirationTimes = Jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Jl(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function Bd(n, r, l, o, c, d, m, E, w) {
    return n = new Bs(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ed(d), n;
  }
  function rh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function $d(n) {
    if (!n)
      return La;
    n = n._reactInternals;
    e: {
      if (ie(n) !== n || n.tag !== 1)
        throw Error(M(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (An(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(M(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l))
        return Rl(n, l, r);
    }
    return r;
  }
  function Yd(n, r, l, o, c, d, m, E, w) {
    return n = Bd(l, o, !0, n, c, d, m, E, w), n.context = $d(null), l = n.current, o = Xn(), c = Ki(l), d = Xt(o, c), d.callback = r ?? null, Dl(l, d, c), n.current.lanes = c, vl(n, c, o), $n(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Xn(), m = Ki(c);
    return l = $d(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xt(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Dl(c, r, m), n !== null && (vn(n, c, m, d), xc(n, c, m)), m;
  }
  function $s(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function ah(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Id(n, r) {
    ah(n, r), (n = n.alternate) && ah(n, r);
  }
  function gy() {
    return null;
  }
  var Qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function df(n) {
    this._internalRoot = n;
  }
  Ys.prototype.render = df.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(M(409));
    ff(n, r, null, null);
  }, Ys.prototype.unmount = df.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Ti(function() {
        ff(null, n, null, null);
      }), r[ni] = null;
    }
  };
  function Ys(n) {
    this._internalRoot = n;
  }
  Ys.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Tt();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < en.length && r !== 0 && r < en[l].priority; l++)
        ;
      en.splice(l, 0, n), l === 0 && Ja(n);
    }
  };
  function Fl(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function pf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ih() {
  }
  function Sy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = $s(m);
          d.call(A);
        };
      }
      var m = Yd(r, o, n, 0, null, !1, !1, "", ih);
      return n._reactRootContainer = m, n[ni] = m.current, pi(n.nodeType === 8 ? n.parentNode : n), Ti(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var A = $s(w);
        E.call(A);
      };
    }
    var w = Bd(n, 0, !1, null, null, !1, !1, "", ih);
    return n._reactRootContainer = w, n[ni] = w.current, pi(n.nodeType === 8 ? n.parentNode : n), Ti(function() {
      ff(r, w, l, o);
    }), w;
  }
  function vf(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var w = $s(m);
          E.call(w);
        };
      }
      ff(r, m, n, c);
    } else
      m = Sy(l, r, n, c, o);
    return $s(m);
  }
  Hu = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = zi(r.pendingLanes);
          l !== 0 && (Ko(r, l | 1), $n(r, qt()), !(pt & 6) && (Ro = qt() + 500, mi()));
        }
        break;
      case 13:
        Ti(function() {
          var o = Wi(n, 1);
          if (o !== null) {
            var c = Xn();
            vn(o, n, 1, c);
          }
        }), Id(n, 1);
    }
  }, hl = function(n) {
    if (n.tag === 13) {
      var r = Wi(n, 134217728);
      if (r !== null) {
        var l = Xn();
        vn(r, n, 134217728, l);
      }
      Id(n, 134217728);
    }
  }, Jo = function(n) {
    if (n.tag === 13) {
      var r = Ki(n), l = Wi(n, r);
      if (l !== null) {
        var o = Xn();
        vn(l, n, r, o);
      }
      Id(n, r);
    }
  }, Tt = function() {
    return ht;
  }, Vu = function(n, r) {
    var l = ht;
    try {
      return ht = n, r();
    } finally {
      ht = l;
    }
  }, At = function(n, r, l) {
    switch (r) {
      case "input":
        if (Nn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Cc(o);
              if (!c)
                throw Error(M(90));
              Fr(o), Nn(o, c);
            }
          }
        }
        break;
      case "textarea":
        mr(n, l);
        break;
      case "select":
        r = l.value, r != null && Vn(n, !!l.multiple, r, !1);
    }
  }, cl = Hd, Gl = Ti;
  var Ey = { usingClientEntryPoint: !1, Events: [vi, Ku, Cc, qa, ba, Hd] }, Is = { findFiberByHostInstance: Ii, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, lh = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Le(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || gy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hf.isDisabled && hf.supportsFiber)
      try {
        dl = hf.inject(lh), Pr = hf;
      } catch {
      }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ey, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fl(r))
      throw Error(M(200));
    return rh(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!Fl(n))
      throw Error(M(299));
    var l = !1, o = "", c = Qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Bd(n, 1, !1, null, null, l, !1, o, c), n[ni] = r.current, pi(n.nodeType === 8 ? n.parentNode : n), new df(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(M(188)) : (n = Object.keys(n).join(","), Error(M(268, n)));
    return n = Le(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Ti(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!pf(r))
      throw Error(M(200));
    return vf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!Fl(n))
      throw Error(M(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = Yd(r, null, n, 1, l ?? null, c, !1, d, m), n[ni] = r.current, pi(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ys(r);
  }, Wa.render = function(n, r, l) {
    if (!pf(r))
      throw Error(M(200));
    return vf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!pf(n))
      throw Error(M(40));
    return n._reactRootContainer ? (Ti(function() {
      vf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ni] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = Hd, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!pf(l))
      throw Error(M(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(M(38));
    return vf(n, r, l, !1, o);
  }, Wa.version = "18.2.0-next-9e3b772b8-20220608", Wa;
}
var Ga = {}, lR;
function sD() {
  if (lR)
    return Ga;
  lR = 1;
  var j = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return j.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var X = Qf, M = fR(), Ze = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ct = !1;
    function Yt(e) {
      Ct = e;
    }
    function Xe(e) {
      if (!Ct) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("warn", e, a);
      }
    }
    function S(e) {
      if (!Ct) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        nt("error", e, a);
      }
    }
    function nt(e, t, a) {
      {
        var i = Ze.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = 0, ue = 1, Re = 2, K = 3, Oe = 4, te = 5, oe = 6, Qe = 7, sn = 8, ln = 9, lt = 10, Ve = 11, _t = 12, Te = 13, ct = 14, Ye = 15, wn = 16, mn = 17, It = 18, mt = 19, Zt = 21, Be = 22, Je = 23, Rt = 24, et = 25, $ = !0, he = !1, T = !1, Y = !1, me = !1, Fe = !0, je = !1, ft = !1, ut = !0, dt = !0, ot = !0, Jt = /* @__PURE__ */ new Set(), Zn = {}, Jn = {};
    function Fr(e, t) {
      vr(e, t), vr(e + "Capture", t);
    }
    function vr(e, t) {
      Zn[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), Zn[e] = t;
      {
        var a = e.toLowerCase();
        Jn[a] = e, e === "onDoubleClick" && (Jn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Jt.add(t[i]);
    }
    var yn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", er = Object.prototype.hasOwnProperty;
    function Hn(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Nn(e) {
      try {
        return zn(e), !1;
      } catch {
        return !0;
      }
    }
    function zn(e) {
      return "" + e;
    }
    function Tr(e, t) {
      if (Nn(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), zn(e);
    }
    function hr(e) {
      if (Nn(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), zn(e);
    }
    function Vn(e, t) {
      if (Nn(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), zn(e);
    }
    function la(e, t) {
      if (Nn(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Hn(e)), zn(e);
    }
    function ua(e) {
      if (Nn(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Hn(e)), zn(e);
    }
    function mr(e) {
      if (Nn(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Hn(e)), zn(e);
    }
    var oa = 0, tr = 1, wr = 2, un = 3, sa = 4, ca = 5, fa = 6, ae = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", De = ae + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", rt = new RegExp("^[" + ae + "][" + De + "]*$"), Mt = {}, xt = {};
    function bn(e) {
      return er.call(xt, e) ? !0 : er.call(Mt, e) ? !1 : rt.test(e) ? (xt[e] = !0, !0) : (Mt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function cn(e, t, a) {
      return t !== null ? t.type === oa : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function yr(e, t, a, i) {
      if (a !== null && a.type === oa)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function At(e, t, a, i) {
      if (t === null || typeof t > "u" || yr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case un:
            return !t;
          case sa:
            return t === !1;
          case ca:
            return isNaN(t);
          case fa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Qn(e) {
      return Qt.hasOwnProperty(e) ? Qt[e] : null;
    }
    function Nt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === wr || t === un || t === sa, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Qt = {}, qa = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    qa.forEach(function(e) {
      Qt[e] = new Nt(
        e,
        oa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Qt[t] = new Nt(
        t,
        tr,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        wr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        wr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        un,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        un,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        sa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        fa,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var ba = /[\-\:]([a-z])/g, cl = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, cl);
      Qt[t] = new Nt(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, cl);
      Qt[t] = new Nt(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(ba, cl);
      Qt[t] = new Nt(
        t,
        tr,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Gl = "xlinkHref";
    Qt[Gl] = new Nt(
      "xlinkHref",
      tr,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Qt[e] = new Nt(
        e,
        tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var ql = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, fl = !1;
    function Xa(e) {
      !fl && ql.test(e) && (fl = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function Ka(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Tr(a, t), i.sanitizeURL && Xa("" + a);
        var s = i.attributeName, f = null;
        if (i.type === sa) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : At(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (At(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === un)
            return a;
          f = e.getAttribute(s);
        }
        return At(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function _a(e, t, a, i) {
      {
        if (!bn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Tr(a, t), u === "" + a ? a : u;
      }
    }
    function Li(e, t, a, i) {
      var u = Qn(t);
      if (!cn(t, u, i)) {
        if (At(t, a, u, i) && (a = null), i || u === null) {
          if (bn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Tr(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === un ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var x = u.type, b;
          x === un || x === sa && a === !0 ? b = "" : (Tr(a, y), b = "" + a, u.sanitizeURL && Xa(b.toString())), g ? e.setAttributeNS(g, y, b) : e.setAttribute(y, b);
        }
      }
    }
    var jr = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), da = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ne = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), yt = Symbol.for("react.suspense_list"), tt = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), Un = Symbol.for("react.scope"), Wt = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), gr = Symbol.for("react.legacy_hidden"), oi = Symbol.for("react.cache"), qt = Symbol.for("react.tracing_marker"), Vr = Symbol.iterator, Io = "@@iterator";
    function si(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Vr && e[Vr] || e[Io];
      return typeof t == "function" ? t : null;
    }
    var at = Object.assign, Xl = 0, Ni, dl, Pr, Qo, br, Wo, Go;
    function qo() {
    }
    qo.__reactDisabledLog = !0;
    function Kl() {
      {
        if (Xl === 0) {
          Ni = console.log, dl = console.info, Pr = console.warn, Qo = console.error, br = console.group, Wo = console.groupCollapsed, Go = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: qo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Xl++;
      }
    }
    function ju() {
      {
        if (Xl--, Xl === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: at({}, e, {
              value: Ni
            }),
            info: at({}, e, {
              value: dl
            }),
            warn: at({}, e, {
              value: Pr
            }),
            error: at({}, e, {
              value: Qo
            }),
            group: at({}, e, {
              value: br
            }),
            groupCollapsed: at({}, e, {
              value: Wo
            }),
            groupEnd: at({}, e, {
              value: Go
            })
          });
        }
        Xl < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var zi = Ze.ReactCurrentDispatcher, ci;
    function xa(e, t, a) {
      {
        if (ci === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            ci = i && i[1] || "";
          }
        return `
` + ci + e;
      }
    }
    var pl = !1, fi;
    {
      var Zl = typeof WeakMap == "function" ? WeakMap : Map;
      fi = new Zl();
    }
    function Jl(e, t) {
      if (!e || pl)
        return "";
      {
        var a = fi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      pl = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = zi.current, zi.current = null, Kl();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (U) {
              i = U;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (U) {
              i = U;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (U) {
            i = U;
          }
          e();
        }
      } catch (U) {
        if (U && i && typeof U.stack == "string") {
          for (var p = U.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var x = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && fi.set(e, x), x;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        pl = !1, zi.current = s, ju(), Error.prepareStackTrace = u;
      }
      var b = e ? e.displayName || e.name : "", z = b ? xa(b) : "";
      return typeof e == "function" && fi.set(e, z), z;
    }
    function vl(e, t, a) {
      return Jl(e, !0);
    }
    function Xo(e, t, a) {
      return Jl(e, !1);
    }
    function Ko(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ht(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Jl(e, Ko(e));
      if (typeof e == "string")
        return xa(e);
      switch (e) {
        case st:
          return xa("Suspense");
        case yt:
          return xa("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ie:
            return Xo(e.render);
          case tt:
            return ht(e.type, t, a);
          case Le: {
            var i = e, u = i._payload, s = i._init;
            try {
              return ht(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Zo(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case te:
          return xa(e.type);
        case wn:
          return xa("Lazy");
        case Te:
          return xa("Suspense");
        case mt:
          return xa("SuspenseList");
        case ke:
        case Re:
        case Ye:
          return Xo(e.type);
        case Ve:
          return Xo(e.type.render);
        case ue:
          return vl(e.type);
        default:
          return "";
      }
    }
    function Hu(e) {
      try {
        var t = "", a = e;
        do
          t += Zo(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function hl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Jo(e) {
      return e.displayName || "Context";
    }
    function Tt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case da:
          return "Fragment";
        case Hr:
          return "Portal";
        case R:
          return "Profiler";
        case Mi:
          return "StrictMode";
        case st:
          return "Suspense";
        case yt:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ne:
            var t = e;
            return Jo(t) + ".Consumer";
          case Q:
            var a = e;
            return Jo(a._context) + ".Provider";
          case ie:
            return hl(e, e.render, "ForwardRef");
          case tt:
            var i = e.displayName || null;
            return i !== null ? i : Tt(e.type) || "Memo";
          case Le: {
            var u = e, s = u._payload, f = u._init;
            try {
              return Tt(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Vu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function eu(e) {
      return e.displayName || "Context";
    }
    function Ie(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Rt:
          return "Cache";
        case ln:
          var i = a;
          return eu(i) + ".Consumer";
        case lt:
          var u = a;
          return eu(u._context) + ".Provider";
        case It:
          return "DehydratedFragment";
        case Ve:
          return Vu(a, a.render, "ForwardRef");
        case Qe:
          return "Fragment";
        case te:
          return a;
        case Oe:
          return "Portal";
        case K:
          return "Root";
        case oe:
          return "Text";
        case wn:
          return Tt(a);
        case sn:
          return a === Mi ? "StrictMode" : "Mode";
        case Be:
          return "Offscreen";
        case _t:
          return "Profiler";
        case Zt:
          return "Scope";
        case Te:
          return "Suspense";
        case mt:
          return "SuspenseList";
        case et:
          return "TracingMarker";
        case ue:
        case ke:
        case mn:
        case Re:
        case ct:
        case Ye:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Za = Ze.ReactDebugCurrentFrame, fn = null, Br = !1;
    function Da() {
      {
        if (fn === null)
          return null;
        var e = fn._debugOwner;
        if (e !== null && typeof e < "u")
          return Ie(e);
      }
      return null;
    }
    function ml() {
      return fn === null ? "" : Hu(fn);
    }
    function en() {
      Za.getCurrentStack = null, fn = null, Br = !1;
    }
    function dn(e) {
      Za.getCurrentStack = e === null ? null : ml, fn = e, Br = !1;
    }
    function es() {
      return fn;
    }
    function nr(e) {
      Br = e;
    }
    function $r(e) {
      return "" + e;
    }
    function Ja(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return mr(e), e;
        default:
          return "";
      }
    }
    var Pu = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function tu(e, t) {
      Pu[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function nu(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function yl(e) {
      return e._valueTracker;
    }
    function ka(e) {
      e._valueTracker = null;
    }
    function Ui(e) {
      var t = "";
      return e && (nu(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function Bu(e) {
      var t = nu(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      mr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            mr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            mr(p), i = "" + p;
          },
          stopTracking: function() {
            ka(e), delete e[t];
          }
        };
        return f;
      }
    }
    function Ai(e) {
      yl(e) || (e._valueTracker = Bu(e));
    }
    function $u(e) {
      if (!e)
        return !1;
      var t = yl(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = Ui(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function di(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Fi = !1, Yu = !1, ts = !1, ei = !1;
    function Iu(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = at({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      tu("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Yu && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component", t.type), Yu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Fi && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component", t.type), Fi = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Ja(t.value != null ? t.value : i),
        controlled: Iu(t)
      };
    }
    function N(e, t) {
      var a = e, i = t.checked;
      i != null && Li(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Iu(t);
        !a._wrapperState.controlled && i && !ei && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ei = !0), a._wrapperState.controlled && !i && !ts && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ts = !0);
      }
      N(e, t);
      var u = Ja(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != u) && (a.value = $r(u)) : a.value !== $r(u) && (a.value = $r(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? Pe(a, t.type, u) : t.hasOwnProperty("defaultValue") && Pe(a, t.type, Ja(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function Z(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = $r(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function Ee(e, t) {
      var a = e;
      F(a, t), fe(a, t);
    }
    function fe(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Tr(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Th(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            $u(f), F(f, p);
          }
        }
      }
    }
    function Pe(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || di(e.ownerDocument) !== e) && (a == null ? e.defaultValue = $r(e._wrapperState.initialValue) : e.defaultValue !== $r(a) && (e.defaultValue = $r(a)));
    }
    var it = !1, zt = !1, Ft = !1;
    function jt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? X.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || zt || (zt = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (Ft || (Ft = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !it && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), it = !0);
    }
    function Ht(e, t) {
      t.value != null && e.setAttribute("value", $r(Ja(t.value)));
    }
    var tn = Array.isArray;
    function wt(e) {
      return tn(e);
    }
    var gl;
    gl = !1;
    function Qu() {
      var e = Da();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var ns = ["value", "defaultValue"];
    function rs(e) {
      {
        tu("select", e);
        for (var t = 0; t < ns.length; t++) {
          var a = ns[t];
          if (e[a] != null) {
            var i = wt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Qu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Qu());
          }
        }
      }
    }
    function ji(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = $r(Ja(a)), x = null, b = 0; b < u.length; b++) {
          if (u[b].value === g) {
            u[b].selected = !0, i && (u[b].defaultSelected = !0);
            return;
          }
          x === null && !u[b].disabled && (x = u[b]);
        }
        x !== null && (x.selected = !0);
      }
    }
    function as(e, t) {
      return at({}, t, {
        value: void 0
      });
    }
    function is(e, t) {
      var a = e;
      rs(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !gl && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), gl = !0);
    }
    function Wf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ji(a, !!t.multiple, i, !1) : t.defaultValue != null && ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function Pm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ji(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ji(a, !!t.multiple, t.defaultValue, !0) : ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Gp(e, t) {
      var a = e, i = t.value;
      i != null && ji(a, !!t.multiple, i, !1);
    }
    var qp = !1;
    function Gf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = at({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: $r(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      tu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !qp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component"), qp = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (wt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Ja(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = Ja(t.value), u = Ja(t.defaultValue);
      if (i != null) {
        var s = $r(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = $r(u));
    }
    function fc(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Bm(e, t) {
      Kp(e, t);
    }
    var Hi = "http://www.w3.org/1999/xhtml", $m = "http://www.w3.org/1998/Math/MathML", dc = "http://www.w3.org/2000/svg";
    function qf(e) {
      switch (e) {
        case "svg":
          return dc;
        case "math":
          return $m;
        default:
          return Hi;
      }
    }
    function Xf(e, t) {
      return e == null || e === Hi ? qf(t) : e === dc && t === "foreignObject" ? Hi : e;
    }
    var Ym = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, pc, Zp = Ym(function(e, t) {
      if (e.namespaceURI === dc && !("innerHTML" in e)) {
        pc = pc || document.createElement("div"), pc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = pc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, Vi = 3, gn = 8, pa = 9, Kf = 11, ls = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Jp = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Wu = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function ev(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var tv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wu).forEach(function(e) {
      tv.forEach(function(t) {
        Wu[ev(t, e)] = Wu[e];
      });
    });
    function Sl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wu.hasOwnProperty(e) && Wu[e]) ? t + "px" : (la(t, e), ("" + t).trim());
    }
    var Im = /([A-Z])/g, Qm = /^ms-/;
    function Wm(e) {
      return e.replace(Im, "-$1").toLowerCase().replace(Qm, "-ms-");
    }
    var Zf = function() {
    };
    {
      var nv = /^(?:webkit|moz|o)[A-Z]/, us = /^-ms-/, os = /-(.)/g, rv = /;\s*$/, Pi = {}, Jf = {}, ed = !1, vc = !1, td = function(e) {
        return e.replace(os, function(t, a) {
          return a.toUpperCase();
        });
      }, av = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          td(e.replace(us, "ms-"))
        ));
      }, iv = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, lv = function(e, t) {
        Jf.hasOwnProperty(t) && Jf[t] || (Jf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(rv, "")));
      }, Gm = function(e, t) {
        ed || (ed = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, qm = function(e, t) {
        vc || (vc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Zf = function(e, t) {
        e.indexOf("-") > -1 ? av(e) : nv.test(e) ? iv(e) : rv.test(t) && lv(e, t), typeof t == "number" && (isNaN(t) ? Gm(e, t) : isFinite(t) || qm(e, t));
      };
    }
    var Xm = Zf;
    function Km(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Wm(i)) + ":", t += Sl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function uv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Xm(i, t[i]);
          var s = Sl(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function ti(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function Gu(e) {
      var t = {};
      for (var a in e)
        for (var i = Jp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function ov(e, t) {
      {
        if (!t)
          return;
        var a = Gu(e), i = Gu(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", ti(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var sv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, cv = at({
      menuitem: !0
    }, sv), fv = "__html";
    function ss(e, t) {
      if (t) {
        if (cv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ru(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var hc = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, au = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, El = {}, cs = new RegExp("^(aria)-[" + De + "]*$"), nd = new RegExp("^(aria)[A-Z][" + De + "]*$");
    function dv(e, t) {
      {
        if (er.call(El, t) && El[t])
          return !0;
        if (nd.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = au.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), El[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), El[t] = !0, !0;
        }
        if (cs.test(t)) {
          var u = t.toLowerCase(), s = au.hasOwnProperty(u) ? u : null;
          if (s == null)
            return El[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), El[t] = !0, !0;
        }
      }
      return !0;
    }
    function mc(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = dv(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function qu(e, t) {
      ru(e, t) || mc(e, t);
    }
    var yc = !1;
    function pv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yc && (yc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fs = function() {
    };
    {
      var Sr = {}, rd = /^on./, vv = /^on[^A-Z]/, hv = new RegExp("^(aria)-[" + De + "]*$"), mv = new RegExp("^(aria)[A-Z][" + De + "]*$");
      fs = function(e, t, a, i) {
        if (er.call(Sr, t) && Sr[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Sr[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Sr[t] = !0, !0;
          if (rd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Sr[t] = !0, !0;
        } else if (rd.test(t))
          return vv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Sr[t] = !0, !0;
        if (hv.test(t) || mv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Sr[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Sr[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Sr[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Sr[t] = !0, !0;
        var v = Qn(t), y = v !== null && v.type === oa;
        if (hc.hasOwnProperty(u)) {
          var g = hc[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Sr[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Sr[t] = !0, !0;
        return typeof a == "boolean" && yr(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Sr[t] = !0, !0) : y ? !0 : yr(t, a, v, !1) ? (Sr[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === un && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Sr[t] = !0), !0);
      };
    }
    var yv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = fs(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Cl(e, t, a) {
      ru(e, t) || yv(e, t, a);
    }
    var gc = 1, ds = 2, ps = 4, Zm = gc | ds | ps, Bi = null;
    function Jm(e) {
      Bi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Bi = e;
    }
    function gv() {
      Bi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Bi = null;
    }
    function Sv(e) {
      return e === Bi;
    }
    function Bt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var vs = null, $i = null, pi = null;
    function ad(e) {
      var t = Do(e);
      if (t) {
        if (typeof vs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Th(a);
          vs(t.stateNode, t.type, i);
        }
      }
    }
    function id(e) {
      vs = e;
    }
    function Xu(e) {
      $i ? pi ? pi.push(e) : pi = [e] : $i = e;
    }
    function Sc() {
      return $i !== null || pi !== null;
    }
    function iu() {
      if ($i) {
        var e = $i, t = pi;
        if ($i = null, pi = null, ad(e), t)
          for (var a = 0; a < t.length; a++)
            ad(t[a]);
      }
    }
    var ld = function(e, t) {
      return e(t);
    }, Ev = function() {
    }, ud = !1;
    function Cv() {
      var e = Sc();
      e && (Ev(), iu());
    }
    function hs(e, t, a) {
      if (ud)
        return e(t, a);
      ud = !0;
      try {
        return ld(e, t, a);
      } finally {
        ud = !1, Cv();
      }
    }
    function Ec(e, t, a) {
      ld = e, Ev = a;
    }
    function od(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function sd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && od(t));
        default:
          return !1;
      }
    }
    function lu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Th(a);
      if (i === null)
        return null;
      var u = i[t];
      if (sd(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var ms = !1;
    if (yn)
      try {
        var ys = {};
        Object.defineProperty(ys, "passive", {
          get: function() {
            ms = !0;
          }
        }), window.addEventListener("test", ys, ys), window.removeEventListener("test", ys, ys);
      } catch {
        ms = !1;
      }
    function cd(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Rv = cd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var fd = document.createElement("react");
      Rv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, b = !0, z = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          fd.removeEventListener(V, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = z);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function ze() {
          x = !0, H(), a.apply(i, de), b = !1;
        }
        var xe, St = !1, vt = !1;
        function k(O) {
          if (xe = O.error, St = !0, xe === null && O.colno === 0 && O.lineno === 0 && (vt = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var V = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), fd.addEventListener(V, ze, !1), g.initEvent(V, !1, !1), fd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), x && b && (St ? vt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", k), !x)
          return H(), cd.apply(this, arguments);
      };
    }
    var dd = Rv, va = !1, gs = null, Yi = !1, Oa = null, Ss = {
      onError: function(e) {
        va = !0, gs = e;
      }
    };
    function ni(e, t, a, i, u, s, f, p, v) {
      va = !1, gs = null, dd.apply(Ss, arguments);
    }
    function pd(e, t, a, i, u, s, f, p, v) {
      if (ni.apply(this, arguments), va) {
        var y = Ii();
        Yi || (Yi = !0, Oa = y);
      }
    }
    function ey() {
      if (Yi) {
        var e = Oa;
        throw Yi = !1, Oa = null, e;
      }
    }
    function ty() {
      return va;
    }
    function Ii() {
      if (va) {
        var e = gs;
        return va = !1, gs = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vi(e) {
      return e._reactInternals;
    }
    function Ku(e) {
      return e._reactInternals !== void 0;
    }
    function Cc(e, t) {
      e._reactInternals = t;
    }
    var Me = (
      /*                      */
      0
    ), ri = (
      /*                */
      1
    ), $t = (
      /*                    */
      2
    ), we = (
      /*                       */
      4
    ), Dt = (
      /*                */
      16
    ), La = (
      /*                 */
      32
    ), Wn = (
      /*                     */
      64
    ), We = (
      /*                   */
      128
    ), _r = (
      /*            */
      256
    ), ha = (
      /*                          */
      512
    ), An = (
      /*                     */
      1024
    ), Ir = (
      /*                      */
      2048
    ), hi = (
      /*                    */
      4096
    ), Rl = (
      /*                   */
      8192
    ), uu = (
      /*             */
      16384
    ), Tv = Ir | we | Wn | ha | An | uu, Qi = (
      /*               */
      32767
    ), Tl = (
      /*                   */
      32768
    ), rr = (
      /*                */
      65536
    ), Rc = (
      /* */
      131072
    ), wv = (
      /*                       */
      1048576
    ), mi = (
      /*                    */
      2097152
    ), Ma = (
      /*                 */
      4194304
    ), wl = (
      /*                */
      8388608
    ), Na = (
      /*               */
      16777216
    ), ou = (
      /*              */
      33554432
    ), Qr = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      we | An | 0
    ), Wr = $t | we | Dt | La | ha | hi | Rl, ai = we | Wn | ha | Rl, Gr = Ir | Dt, ar = Ma | wl | mi, su = Ze.ReactCurrentOwner;
    function bl(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & ($t | hi)) !== Me && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === K ? a : null;
    }
    function Tc(e) {
      if (e.tag === Te) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function wc(e) {
      return e.tag === K ? e.stateNode.containerInfo : null;
    }
    function ma(e) {
      return bl(e) === e;
    }
    function ya(e) {
      {
        var t = su.current;
        if (t !== null && t.tag === ue) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ie(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = vi(e);
      return u ? bl(u) === u : !1;
    }
    function nn(e) {
      if (bl(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function za(e) {
      var t = e.alternate;
      if (!t) {
        var a = bl(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return nn(s), e;
            if (v === u)
              return nn(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== K)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function vd(e) {
      var t = za(e);
      return t !== null ? hd(t) : null;
    }
    function hd(e) {
      if (e.tag === te || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = hd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function md(e) {
      var t = za(e);
      return t !== null ? bc(t) : null;
    }
    function bc(e) {
      if (e.tag === te || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== Oe) {
          var a = bc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var yd = M.unstable_scheduleCallback, _c = M.unstable_cancelCallback, bv = M.unstable_shouldYield, Zu = M.unstable_requestPaint, Fn = M.unstable_now, ny = M.unstable_getCurrentPriorityLevel, qr = M.unstable_ImmediatePriority, Ju = M.unstable_UserBlockingPriority, yi = M.unstable_NormalPriority, eo = M.unstable_LowPriority, Es = M.unstable_IdlePriority, gd = M.unstable_yieldValue, Sd = M.unstable_setDisableYieldValue, _l = null, _n = null, ee = null, Er = !1, ga = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function _v(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ut && (e = at({}, e, {
          getLaneLabelMap: xc,
          injectProfilingHooks: Dl
        })), _l = t.inject(e), _n = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Wi(e, t) {
      if (_n && typeof _n.onScheduleFiberRoot == "function")
        try {
          _n.onScheduleFiberRoot(_l, e, t);
        } catch (a) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function xl(e, t) {
      if (_n && typeof _n.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & We) === We;
          if (dt) {
            var i;
            switch (t) {
              case On:
                i = qr;
                break;
              case qi:
                i = Ju;
                break;
              case Ei:
                i = yi;
                break;
              case co:
                i = Es;
                break;
              default:
                i = yi;
                break;
            }
            _n.onCommitFiberRoot(_l, e, i, a);
          }
        } catch (u) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function Ed(e) {
      if (_n && typeof _n.onPostCommitFiberRoot == "function")
        try {
          _n.onPostCommitFiberRoot(_l, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function xv(e) {
      if (_n && typeof _n.onCommitFiberUnmount == "function")
        try {
          _n.onCommitFiberUnmount(_l, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Xt(e) {
      if (typeof gd == "function" && (Sd(e), Yt(e)), _n && typeof _n.setStrictMode == "function")
        try {
          _n.setStrictMode(_l, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Dl(e) {
      ee = e;
    }
    function xc() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < xn; a++) {
          var i = Uv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function Dv(e) {
      ee !== null && typeof ee.markCommitStarted == "function" && ee.markCommitStarted(e);
    }
    function Cs() {
      ee !== null && typeof ee.markCommitStopped == "function" && ee.markCommitStopped();
    }
    function to(e) {
      ee !== null && typeof ee.markComponentRenderStarted == "function" && ee.markComponentRenderStarted(e);
    }
    function cu() {
      ee !== null && typeof ee.markComponentRenderStopped == "function" && ee.markComponentRenderStopped();
    }
    function Cd(e) {
      ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(e);
    }
    function Dc() {
      ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped();
    }
    function kv(e) {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ov() {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped();
    }
    function Lv(e) {
      ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(e);
    }
    function Rd() {
      ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped();
    }
    function no(e) {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function Rs() {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped();
    }
    function Mv(e, t, a) {
      ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(e, t, a);
    }
    function Nv(e, t, a) {
      ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(e, t, a);
    }
    function ro(e) {
      ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(e);
    }
    function zv() {
      ee !== null && typeof ee.markLayoutEffectsStopped == "function" && ee.markLayoutEffectsStopped();
    }
    function Ts(e) {
      ee !== null && typeof ee.markPassiveEffectsStarted == "function" && ee.markPassiveEffectsStarted(e);
    }
    function gi() {
      ee !== null && typeof ee.markPassiveEffectsStopped == "function" && ee.markPassiveEffectsStopped();
    }
    function ao(e) {
      ee !== null && typeof ee.markRenderStarted == "function" && ee.markRenderStarted(e);
    }
    function ws() {
      ee !== null && typeof ee.markRenderYielded == "function" && ee.markRenderYielded();
    }
    function kl() {
      ee !== null && typeof ee.markRenderStopped == "function" && ee.markRenderStopped();
    }
    function Td(e) {
      ee !== null && typeof ee.markRenderScheduled == "function" && ee.markRenderScheduled(e);
    }
    function io(e, t) {
      ee !== null && typeof ee.markForceUpdateScheduled == "function" && ee.markForceUpdateScheduled(e, t);
    }
    function kc(e, t) {
      ee !== null && typeof ee.markStateUpdateScheduled == "function" && ee.markStateUpdateScheduled(e, t);
    }
    var Ne = (
      /*                         */
      0
    ), _e = (
      /*                 */
      1
    ), bt = (
      /*                    */
      2
    ), Sn = (
      /*               */
      8
    ), Ua = (
      /*              */
      16
    ), bs = Math.clz32 ? Math.clz32 : pn, wd = Math.log, fu = Math.LN2;
    function pn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (wd(t) / fu | 0) | 0;
    }
    var xn = 31, P = (
      /*                        */
      0
    ), Dn = (
      /*                          */
      0
    ), Ue = (
      /*                        */
      1
    ), Si = (
      /*    */
      2
    ), Gi = (
      /*             */
      4
    ), En = (
      /*            */
      8
    ), Aa = (
      /*                     */
      16
    ), du = (
      /*                */
      32
    ), Ol = (
      /*                       */
      4194240
    ), Xr = (
      /*                        */
      64
    ), Kr = (
      /*                        */
      128
    ), pu = (
      /*                        */
      256
    ), _s = (
      /*                        */
      512
    ), xs = (
      /*                        */
      1024
    ), Oc = (
      /*                        */
      2048
    ), Lc = (
      /*                        */
      4096
    ), Mc = (
      /*                        */
      8192
    ), Nc = (
      /*                        */
      16384
    ), zc = (
      /*                       */
      32768
    ), Uc = (
      /*                       */
      65536
    ), Ac = (
      /*                       */
      131072
    ), Fc = (
      /*                       */
      262144
    ), vu = (
      /*                       */
      524288
    ), jc = (
      /*                       */
      1048576
    ), lo = (
      /*                       */
      2097152
    ), hu = (
      /*                            */
      130023424
    ), mu = (
      /*                             */
      4194304
    ), Ds = (
      /*                             */
      8388608
    ), Hc = (
      /*                             */
      16777216
    ), Vc = (
      /*                             */
      33554432
    ), Pc = (
      /*                             */
      67108864
    ), bd = mu, yu = (
      /*          */
      134217728
    ), _d = (
      /*                          */
      268435455
    ), uo = (
      /*               */
      268435456
    ), Ll = (
      /*                        */
      536870912
    ), Sa = (
      /*                   */
      1073741824
    );
    function Uv(e) {
      {
        if (e & Ue)
          return "Sync";
        if (e & Si)
          return "InputContinuousHydration";
        if (e & Gi)
          return "InputContinuous";
        if (e & En)
          return "DefaultHydration";
        if (e & Aa)
          return "Default";
        if (e & du)
          return "TransitionHydration";
        if (e & Ol)
          return "Transition";
        if (e & hu)
          return "Retry";
        if (e & yu)
          return "SelectiveHydration";
        if (e & uo)
          return "IdleHydration";
        if (e & Ll)
          return "Idle";
        if (e & Sa)
          return "Offscreen";
      }
    }
    var Kt = -1, Bc = Xr, ks = mu;
    function oo(e) {
      switch (kn(e)) {
        case Ue:
          return Ue;
        case Si:
          return Si;
        case Gi:
          return Gi;
        case En:
          return En;
        case Aa:
          return Aa;
        case du:
          return du;
        case Xr:
        case Kr:
        case pu:
        case _s:
        case xs:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case vu:
        case jc:
        case lo:
          return e & Ol;
        case mu:
        case Ds:
        case Hc:
        case Vc:
        case Pc:
          return e & hu;
        case yu:
          return yu;
        case uo:
          return uo;
        case Ll:
          return Ll;
        case Sa:
          return Sa;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Os(e, t) {
      var a = e.pendingLanes;
      if (a === P)
        return P;
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & _d;
      if (f !== P) {
        var p = f & ~u;
        if (p !== P)
          i = oo(p);
        else {
          var v = f & s;
          v !== P && (i = oo(v));
        }
      } else {
        var y = a & ~u;
        y !== P ? i = oo(y) : s !== P && (i = oo(s));
      }
      if (i === P)
        return P;
      if (t !== P && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & u) === P) {
        var g = kn(i), x = kn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          g >= x || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          g === Aa && (x & Ol) !== P
        )
          return t;
      }
      (i & Gi) !== P && (i |= a & Aa);
      var b = e.entangledLanes;
      if (b !== P)
        for (var z = e.entanglements, U = i & b; U > 0; ) {
          var H = Nl(U), de = 1 << H;
          i |= z[H], U &= ~de;
        }
      return i;
    }
    function $c(e, t) {
      for (var a = e.eventTimes, i = Kt; t > 0; ) {
        var u = Nl(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function ry(e, t) {
      switch (e) {
        case Ue:
        case Si:
        case Gi:
          return t + 250;
        case En:
        case Aa:
        case du:
        case Xr:
        case Kr:
        case pu:
        case _s:
        case xs:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case vu:
        case jc:
        case lo:
          return t + 5e3;
        case mu:
        case Ds:
        case Hc:
        case Vc:
        case Pc:
          return Kt;
        case yu:
        case uo:
        case Ll:
        case Sa:
          return Kt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Kt;
      }
    }
    function ay(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nl(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === P || (v & u) !== P) && (s[p] = ry(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function iy(e) {
      return oo(e.pendingLanes);
    }
    function Ml(e) {
      var t = e.pendingLanes & ~Sa;
      return t !== P ? t : t & Sa ? Sa : P;
    }
    function xd(e) {
      return (e & Ue) !== P;
    }
    function Ls(e) {
      return (e & _d) !== P;
    }
    function Av(e) {
      return (e & hu) === e;
    }
    function Fv(e) {
      var t = Ue | Gi | Aa;
      return (e & t) === P;
    }
    function jv(e) {
      return (e & Ol) === e;
    }
    function Ms(e, t) {
      var a = Si | Gi | En | Aa;
      return (t & a) !== P;
    }
    function Hv(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function Dd(e) {
      return (e & Ol) !== P;
    }
    function Vv() {
      var e = Bc;
      return Bc <<= 1, (Bc & Ol) === P && (Bc = Xr), e;
    }
    function Zr() {
      var e = ks;
      return ks <<= 1, (ks & hu) === P && (ks = mu), e;
    }
    function kn(e) {
      return e & -e;
    }
    function so(e) {
      return kn(e);
    }
    function Nl(e) {
      return 31 - bs(e);
    }
    function Yc(e) {
      return Nl(e);
    }
    function Jr(e, t) {
      return (e & t) !== P;
    }
    function gu(e, t) {
      return (e & t) === t;
    }
    function Ke(e, t) {
      return e | t;
    }
    function Ns(e, t) {
      return e & ~t;
    }
    function Ic(e, t) {
      return e & t;
    }
    function ly(e) {
      return e;
    }
    function Pv(e, t) {
      return e !== Dn && e < t ? e : t;
    }
    function zs(e) {
      for (var t = [], a = 0; a < xn; a++)
        t.push(e);
      return t;
    }
    function Su(e, t, a) {
      e.pendingLanes |= t, t !== Ll && (e.suspendedLanes = P, e.pingedLanes = P);
      var i = e.eventTimes, u = Yc(t);
      i[u] = a;
    }
    function Bv(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = Nl(i), s = 1 << u;
        a[u] = Kt, i &= ~s;
      }
    }
    function Qc(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Wc(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = P, e.pingedLanes = P, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nl(f), v = 1 << p;
        i[p] = P, u[p] = Kt, s[p] = Kt, f &= ~v;
      }
    }
    function kd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Nl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function $v(e, t) {
      var a = kn(t), i;
      switch (a) {
        case Gi:
          i = Si;
          break;
        case Aa:
          i = En;
          break;
        case Xr:
        case Kr:
        case pu:
        case _s:
        case xs:
        case Oc:
        case Lc:
        case Mc:
        case Nc:
        case zc:
        case Uc:
        case Ac:
        case Fc:
        case vu:
        case jc:
        case lo:
        case mu:
        case Ds:
        case Hc:
        case Vc:
        case Pc:
          i = du;
          break;
        case Ll:
          i = uo;
          break;
        default:
          i = Dn;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== Dn ? Dn : i;
    }
    function Gc(e, t, a) {
      if (ga)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Yc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function Od(e, t) {
      if (ga)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Yc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Us(e, t) {
      return null;
    }
    var On = Ue, qi = Gi, Ei = Aa, co = Ll, fo = Dn;
    function Fa() {
      return fo;
    }
    function Cn(e) {
      fo = e;
    }
    function Cr(e, t) {
      var a = fo;
      try {
        return fo = e, t();
      } finally {
        fo = a;
      }
    }
    function uy(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function oy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function po(e, t) {
      return e !== 0 && e < t;
    }
    function ir(e) {
      var t = kn(e);
      return po(On, t) ? po(qi, t) ? Ls(t) ? Ei : co : qi : On;
    }
    function qc(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var ve;
    function vo(e) {
      ve = e;
    }
    function Ld(e) {
      ve(e);
    }
    var Xc;
    function sy(e) {
      Xc = e;
    }
    var ho;
    function Kc(e) {
      ho = e;
    }
    var Zc;
    function Yv(e) {
      Zc = e;
    }
    var Md;
    function Iv(e) {
      Md = e;
    }
    var As = !1, mo = [], on = null, Gn = null, xr = null, yo = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), qn = [], Qv = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Ci(e) {
      return Qv.indexOf(e) > -1;
    }
    function cy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Nd(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          on = null;
          break;
        case "dragenter":
        case "dragleave":
          Gn = null;
          break;
        case "mouseover":
        case "mouseout":
          xr = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          yo.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          go.delete(i);
          break;
        }
      }
    }
    function So(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = cy(t, a, i, u, s);
        if (t !== null) {
          var p = Do(t);
          p !== null && Xc(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return on = So(on, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Gn = So(Gn, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return xr = So(xr, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return yo.set(y, So(yo.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, x = g.pointerId;
          return go.set(x, So(go.get(x) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function zd(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = bl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = Tc(a);
            if (u !== null) {
              e.blockedOn = u, Md(e.priority, function() {
                ho(a);
              });
              return;
            }
          } else if (i === K) {
            var s = a.stateNode;
            if (qc(s)) {
              e.blockedOn = wc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function fy(e) {
      for (var t = Zc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qn.length && po(t, qn[i].priority); i++)
        ;
      qn.splice(i, 0, a), i === 0 && zd(a);
    }
    function Eu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Rr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Jm(s), u.target.dispatchEvent(s), gv();
        } else {
          var f = Do(i);
          return f !== null && Xc(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Jc(e, t, a) {
      Eu(e) && a.delete(t);
    }
    function ja() {
      As = !1, on !== null && Eu(on) && (on = null), Gn !== null && Eu(Gn) && (Gn = null), xr !== null && Eu(xr) && (xr = null), yo.forEach(Jc), go.forEach(Jc);
    }
    function pt(e, t) {
      e.blockedOn === t && (e.blockedOn = null, As || (As = !0, M.unstable_scheduleCallback(M.unstable_NormalPriority, ja)));
    }
    function Rn(e) {
      if (mo.length > 0) {
        pt(mo[0], e);
        for (var t = 1; t < mo.length; t++) {
          var a = mo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      on !== null && pt(on, e), Gn !== null && pt(Gn, e), xr !== null && pt(xr, e);
      var i = function(p) {
        return pt(p, e);
      };
      yo.forEach(i), go.forEach(i);
      for (var u = 0; u < qn.length; u++) {
        var s = qn[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; qn.length > 0; ) {
        var f = qn[0];
        if (f.blockedOn !== null)
          break;
        zd(f), f.blockedOn === null && qn.shift();
      }
    }
    var rn = Ze.ReactCurrentBatchConfig, Pn = !0;
    function ea(e) {
      Pn = !!e;
    }
    function Eo() {
      return Pn;
    }
    function Bn(e, t, a) {
      var i = ef(t), u;
      switch (i) {
        case On:
          u = Fs;
          break;
        case qi:
          u = Cu;
          break;
        case Ei:
        default:
          u = Co;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function Fs(e, t, a, i) {
      var u = Fa(), s = rn.transition;
      rn.transition = null;
      try {
        Cn(On), Co(e, t, a, i);
      } finally {
        Cn(u), rn.transition = s;
      }
    }
    function Cu(e, t, a, i) {
      var u = Fa(), s = rn.transition;
      rn.transition = null;
      try {
        Cn(qi), Co(e, t, a, i);
      } finally {
        Cn(u), rn.transition = s;
      }
    }
    function Co(e, t, a, i) {
      Pn && Ud(e, t, a, i);
    }
    function Ud(e, t, a, i) {
      var u = Rr(e, t, a, i);
      if (u === null) {
        Dy(e, t, i, zl, a), Nd(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Nd(e, i), t & ps && Ci(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && Ld(s);
          var f = Rr(e, t, a, i);
          if (f === null && Dy(e, t, i, zl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      Dy(e, t, i, null, a);
    }
    var zl = null;
    function Rr(e, t, a, i) {
      zl = null;
      var u = Bt(i), s = Gs(u);
      if (s !== null) {
        var f = bl(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = Tc(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === K) {
            var y = f.stateNode;
            if (qc(y))
              return wc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return zl = s, null;
    }
    function ef(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return On;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return qi;
        case "message": {
          var t = ny();
          switch (t) {
            case qr:
              return On;
            case Ju:
              return qi;
            case yi:
            case eo:
              return Ei;
            case Es:
              return co;
            default:
              return Ei;
          }
        }
        default:
          return Ei;
      }
    }
    function Ro(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function Xi(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function tf(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Ad(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ha = null, To = null, Va = null;
    function nf(e) {
      return Ha = e, To = Hs(), !0;
    }
    function js() {
      Ha = null, To = null, Va = null;
    }
    function rf() {
      if (Va)
        return Va;
      var e, t = To, a = t.length, i, u = Hs(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Va = u.slice(e, p), Va;
    }
    function Hs() {
      return "value" in Ha ? Ha.value : Ha.textContent;
    }
    function Ru(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Xn() {
      return !0;
    }
    function Ki() {
      return !1;
    }
    function vn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = Xn : this.isDefaultPrevented = Ki, this.isPropagationStopped = Ki, this;
      }
      return at(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Xn);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Xn);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Xn
      }), t;
    }
    var $n = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, af = vn($n), Tu = at({}, $n, {
      view: 0,
      detail: 0
    }), Fd = vn(Tu), jd, Ri, wo;
    function Hd(e) {
      e !== wo && (wo && e.type === "mousemove" ? (jd = e.screenX - wo.screenX, Ri = e.screenY - wo.screenY) : (jd = 0, Ri = 0), wo = e);
    }
    var Ti = at({}, Tu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Vd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Hd(e), jd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), lf = vn(Ti), wu = at({}, Ti, {
      dataTransfer: 0
    }), Gv = vn(wu), qv = at({}, Tu, {
      relatedTarget: 0
    }), Vs = vn(qv), uf = at({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dy = vn(uf), py = at({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Xv = vn(py), Kv = at({}, $n, {
      data: 0
    }), Ul = vn(Kv), vy = Ul, bo = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Zv = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Tn(e) {
      if (e.key) {
        var t = bo[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Ru(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Zv[e.keyCode] || "Unidentified" : "";
    }
    var hy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Jv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = hy[e];
      return i ? !!a[i] : !1;
    }
    function Vd(e) {
      return Jv;
    }
    var my = at({}, Tu, {
      key: Tn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Vd,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Ru(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Ru(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), eh = vn(my), th = at({}, Ti, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), nh = vn(th), Pa = at({}, Tu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Vd
    }), Pd = vn(Pa), yy = at({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Al = vn(yy), of = at({}, Ti, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), bu = vn(of), sf = [9, 13, 27, 32], cf = 229, Ps = yn && "CompositionEvent" in window, Bs = null;
    yn && "documentMode" in document && (Bs = document.documentMode);
    var Bd = yn && "TextEvent" in window && !Bs, rh = yn && (!Ps || Bs && Bs > 8 && Bs <= 11), $d = 32, Yd = String.fromCharCode($d);
    function ff() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $s = !1;
    function ah(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Id(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function gy(e, t) {
      return e === "keydown" && t.keyCode === cf;
    }
    function Qd(e, t) {
      switch (e) {
        case "keyup":
          return sf.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== cf;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function df(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Ys(e) {
      return e.locale === "ko";
    }
    var Fl = !1;
    function pf(e, t, a, i, u) {
      var s, f;
      if (Ps ? s = Id(t) : Fl ? Qd(t, i) && (s = "onCompositionEnd") : gy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      rh && !Ys(i) && (!Fl && s === "onCompositionStart" ? Fl = nf(u) : s === "onCompositionEnd" && Fl && (f = rf()));
      var p = ch(a, s);
      if (p.length > 0) {
        var v = new Ul(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = df(i);
          y !== null && (v.data = y);
        }
      }
    }
    function ih(e, t) {
      switch (e) {
        case "compositionend":
          return df(t);
        case "keypress":
          var a = t.which;
          return a !== $d ? null : ($s = !0, Yd);
        case "textInput":
          var i = t.data;
          return i === Yd && $s ? null : i;
        default:
          return null;
      }
    }
    function Sy(e, t) {
      if (Fl) {
        if (e === "compositionend" || !Ps && Qd(e, t)) {
          var a = rf();
          return js(), Fl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!ah(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return rh && !Ys(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vf(e, t, a, i, u) {
      var s;
      if (Bd ? s = ih(t, i) : s = Sy(t, i), !s)
        return null;
      var f = ch(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new vy("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Ey(e, t, a, i, u, s, f) {
      pf(e, t, a, i, u), vf(e, t, a, i, u);
    }
    var Is = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function lh(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!Is[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function hf(e) {
      if (!yn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function n() {
      Fr("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function r(e, t, a, i) {
      Xu(i);
      var u = ch(t, "onChange");
      if (u.length > 0) {
        var s = new af("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var l = null, o = null;
    function c(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function d(e) {
      var t = [];
      r(t, o, e, Bt(e)), hs(m, t);
    }
    function m(e) {
      M0(e, 0);
    }
    function E(e) {
      var t = Cf(e);
      if ($u(t))
        return e;
    }
    function w(e, t) {
      if (e === "change")
        return t;
    }
    var A = !1;
    yn && (A = hf("input") && (!document.documentMode || document.documentMode > 9));
    function W(e, t) {
      l = e, o = t, l.attachEvent("onpropertychange", I);
    }
    function G() {
      l && (l.detachEvent("onpropertychange", I), l = null, o = null);
    }
    function I(e) {
      e.propertyName === "value" && E(o) && d(e);
    }
    function se(e, t, a) {
      e === "focusin" ? (G(), W(t, a)) : e === "focusout" && G();
    }
    function ye(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function Ln(e, t) {
      if (e === "click")
        return E(t);
    }
    function D(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function _(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || Pe(e, "number", e.value);
    }
    function L(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window, v, y;
      if (c(p) ? v = w : lh(p) ? A ? v = D : (v = ye, y = se) : Ce(p) && (v = Ln), v) {
        var g = v(t, a);
        if (g) {
          r(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && _(p);
    }
    function J() {
      vr("onMouseEnter", ["mouseout", "mouseover"]), vr("onMouseLeave", ["mouseout", "mouseover"]), vr("onPointerEnter", ["pointerout", "pointerover"]), vr("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function be(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Sv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Gs(y) || lp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var x = u.ownerDocument;
          x ? g = x.defaultView || x.parentWindow : g = window;
        }
        var b, z;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (b = a, z = U ? Gs(U) : null, z !== null) {
            var H = bl(z);
            (z !== H || z.tag !== te && z.tag !== oe) && (z = null);
          }
        } else
          b = null, z = a;
        if (b !== z) {
          var de = lf, ze = "onMouseLeave", xe = "onMouseEnter", St = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = nh, ze = "onPointerLeave", xe = "onPointerEnter", St = "pointer");
          var vt = b == null ? g : Cf(b), k = z == null ? g : Cf(z), V = new de(ze, St + "leave", b, i, u);
          V.target = vt, V.relatedTarget = k;
          var O = null, q = Gs(u);
          if (q === a) {
            var pe = new de(xe, St + "enter", z, i, u);
            pe.target = k, pe.relatedTarget = vt, O = pe;
          }
          UR(e, V, O, b, z);
        }
      }
    }
    function Ae(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var ge = typeof Object.is == "function" ? Object.is : Ae;
    function He(e, t) {
      if (ge(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!er.call(t, s) || !ge(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function Yn(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function kt(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Zi(e, t) {
      for (var a = Yn(e), i = 0, u = 0; a; ) {
        if (a.nodeType === Vi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = Yn(kt(a));
      }
    }
    function Cy(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return hR(e, u, s, f, p);
    }
    function hR(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, x = null;
      e:
        for (; ; ) {
          for (var b = null; g === t && (a === 0 || g.nodeType === Vi) && (f = s + a), g === i && (u === 0 || g.nodeType === Vi) && (p = s + u), g.nodeType === Vi && (s += g.nodeValue.length), (b = g.firstChild) !== null; )
            x = g, g = b;
          for (; ; ) {
            if (g === e)
              break e;
            if (x === t && ++v === a && (f = s), x === i && ++y === u && (p = s), (b = g.nextSibling) !== null)
              break;
            g = x, x = g.parentNode;
          }
          g = b;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function mR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = Zi(e, f), g = Zi(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var x = a.createRange();
          x.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(x), u.extend(g.node, g.offset)) : (x.setEnd(g.node, g.offset), u.addRange(x));
        }
      }
    }
    function E0(e) {
      return e && e.nodeType === Vi;
    }
    function C0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : E0(e) ? !1 : E0(t) ? C0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function yR(e) {
      return e && e.ownerDocument && C0(e.ownerDocument.documentElement, e);
    }
    function gR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function R0() {
      for (var e = window, t = di(); t instanceof e.HTMLIFrameElement; ) {
        if (gR(t))
          e = t.contentWindow;
        else
          return t;
        t = di(e.document);
      }
      return t;
    }
    function Ry(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function SR() {
      var e = R0();
      return {
        focusedElem: e,
        selectionRange: Ry(e) ? CR(e) : null
      };
    }
    function ER(e) {
      var t = R0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && yR(a)) {
        i !== null && Ry(a) && RR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Yr && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function CR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Cy(e), t || {
        start: 0,
        end: 0
      };
    }
    function RR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : mR(e, t);
    }
    var TR = yn && "documentMode" in document && document.documentMode <= 11;
    function wR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ty = null, Wd = null, wy = !1;
    function bR(e) {
      if ("selectionStart" in e && Ry(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function _R(e) {
      return e.window === e ? e.document : e.nodeType === pa ? e : e.ownerDocument;
    }
    function T0(e, t, a) {
      var i = _R(a);
      if (!(wy || mf == null || mf !== di(i))) {
        var u = bR(mf);
        if (!Wd || !He(Wd, u)) {
          Wd = u;
          var s = ch(Ty, "onSelect");
          if (s.length > 0) {
            var f = new af("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = mf;
          }
        }
      }
    }
    function xR(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (lh(p) || p.contentEditable === "true") && (mf = p, Ty = a, Wd = null);
          break;
        case "focusout":
          mf = null, Ty = null, Wd = null;
          break;
        case "mousedown":
          wy = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          wy = !1, T0(e, i, u);
          break;
        case "selectionchange":
          if (TR)
            break;
        case "keydown":
        case "keyup":
          T0(e, i, u);
      }
    }
    function uh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: uh("Animation", "AnimationEnd"),
      animationiteration: uh("Animation", "AnimationIteration"),
      animationstart: uh("Animation", "AnimationStart"),
      transitionend: uh("Transition", "TransitionEnd")
    }, by = {}, w0 = {};
    yn && (w0 = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function oh(e) {
      if (by[e])
        return by[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in w0)
          return by[e] = t[a];
      return e;
    }
    var b0 = oh("animationend"), _0 = oh("animationiteration"), x0 = oh("animationstart"), D0 = oh("transitionend"), k0 = /* @__PURE__ */ new Map(), O0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      k0.set(e, t), Fr(t, [e]);
    }
    function DR() {
      for (var e = 0; e < O0.length; e++) {
        var t = O0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(b0, "onAnimationEnd"), _o(_0, "onAnimationIteration"), _o(x0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(D0, "onTransitionEnd");
    }
    function kR(e, t, a, i, u, s, f) {
      var p = k0.get(t);
      if (p !== void 0) {
        var v = af, y = t;
        switch (t) {
          case "keypress":
            if (Ru(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = eh;
            break;
          case "focusin":
            y = "focus", v = Vs;
            break;
          case "focusout":
            y = "blur", v = Vs;
            break;
          case "beforeblur":
          case "afterblur":
            v = Vs;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = lf;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = Gv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Pd;
            break;
          case b0:
          case _0:
          case x0:
            v = dy;
            break;
          case D0:
            v = Al;
            break;
          case "scroll":
            v = Fd;
            break;
          case "wheel":
            v = bu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = Xv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = nh;
            break;
        }
        var g = (s & ps) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = NR(a, p, i.type, g, x);
          if (b.length > 0) {
            var z = new v(p, y, null, i, u);
            e.push({
              event: z,
              listeners: b
            });
          }
        }
      }
    }
    DR(), J(), n(), wR(), ff();
    function OR(e, t, a, i, u, s, f) {
      kR(e, t, a, i, u, s);
      var p = (s & Zm) === 0;
      p && (be(e, t, a, i, u), L(e, t, a, i, u), xR(e, t, a, i, u), Ey(e, t, a, i, u));
    }
    var Gd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], _y = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Gd));
    function L0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, pd(i, t, void 0, e), e.currentTarget = null;
    }
    function LR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          L0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, b = g.currentTarget, z = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          L0(e, z, b), i = x;
        }
    }
    function M0(e, t) {
      for (var a = (t & ps) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        LR(s, f, a);
      }
      ey();
    }
    function MR(e, t, a, i, u) {
      var s = Bt(a), f = [];
      OR(f, e, i, a, s, t), M0(f, t);
    }
    function hn(e, t) {
      _y.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = ow(t), u = AR(e, a);
      i.has(u) || (N0(t, e, ds, a), i.add(u));
    }
    function xy(e, t, a) {
      _y.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ps), N0(a, e, i, t);
    }
    var sh = "_reactListening" + Math.random().toString(36).slice(2);
    function qd(e) {
      if (!e[sh]) {
        e[sh] = !0, Jt.forEach(function(a) {
          a !== "selectionchange" && (_y.has(a) || xy(a, !1, e), xy(a, !0, e));
        });
        var t = e.nodeType === pa ? e : e.ownerDocument;
        t !== null && (t[sh] || (t[sh] = !0, xy("selectionchange", !1, t)));
      }
    }
    function N0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? tf(e, t, s, f) : Xi(e, t, s) : f !== void 0 ? Ad(e, t, s, f) : Ro(e, t, s);
    }
    function z0(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function Dy(e, t, a, i, u) {
      var s = i;
      if (!(t & gc) && !(t & ds)) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === K || v === Oe) {
                var y = p.stateNode.containerInfo;
                if (z0(y, f))
                  break;
                if (v === Oe)
                  for (var g = p.return; g !== null; ) {
                    var x = g.tag;
                    if (x === K || x === Oe) {
                      var b = g.stateNode.containerInfo;
                      if (z0(b, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var z = Gs(y);
                  if (z === null)
                    return;
                  var U = z.tag;
                  if (U === te || U === oe) {
                    p = s = z;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      hs(function() {
        return MR(e, t, a, s);
      });
    }
    function Xd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function NR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, b = x.stateNode, z = x.tag;
        if (z === te && b !== null && (g = b, p !== null)) {
          var U = lu(y, p);
          U != null && v.push(Xd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function ch(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === te && f !== null) {
          var v = f, y = lu(u, a);
          y != null && i.unshift(Xd(u, y, v));
          var g = lu(u, t);
          g != null && i.push(Xd(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function gf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== te);
      return e || null;
    }
    function zR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = gf(s))
        u++;
      for (var f = 0, p = i; p; p = gf(p))
        f++;
      for (; u - f > 0; )
        a = gf(a), u--;
      for (; f - u > 0; )
        i = gf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = gf(a), i = gf(i);
      }
      return null;
    }
    function U0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === te && g !== null) {
          var b = g;
          if (u) {
            var z = lu(p, s);
            z != null && f.unshift(Xd(p, z, b));
          } else if (!u) {
            var U = lu(p, s);
            U != null && f.push(Xd(p, U, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function UR(e, t, a, i, u) {
      var s = i && u ? zR(i, u) : null;
      i !== null && U0(e, t, i, s, !1), u !== null && a !== null && U0(e, a, u, s, !0);
    }
    function AR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ba = !1, Kd = "dangerouslySetInnerHTML", fh = "suppressContentEditableWarning", xo = "suppressHydrationWarning", A0 = "autoFocus", Qs = "children", Ws = "style", dh = "__html", ky, ph, Zd, F0, vh, j0, H0;
    ky = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, ph = function(e, t) {
      qu(e, t), pv(e, t), Cl(e, t, {
        registrationNameDependencies: Zn,
        possibleRegistrationNames: Jn
      });
    }, j0 = yn && !document.documentMode, Zd = function(e, t, a) {
      if (!Ba) {
        var i = hh(a), u = hh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, F0 = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, vh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, H0 = function(e, t) {
      var a = e.namespaceURI === Hi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var FR = /\r\n?/g, jR = /\u0000|\uFFFD/g;
    function hh(e) {
      ua(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(FR, `
`).replace(jR, "");
    }
    function mh(e, t, a, i) {
      var u = hh(t), s = hh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && $))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function V0(e) {
      return e.nodeType === pa ? e : e.ownerDocument;
    }
    function HR() {
    }
    function yh(e) {
      e.onclick = HR;
    }
    function VR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ws)
            f && Object.freeze(f), uv(t, f);
          else if (s === Kd) {
            var p = f ? f[dh] : void 0;
            p != null && Zp(t, p);
          } else if (s === Qs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ls(t, f);
            } else
              typeof f == "number" && ls(t, "" + f);
          else
            s === fh || s === xo || s === A0 || (Zn.hasOwnProperty(s) ? f != null && (typeof f != "function" && vh(s, f), s === "onScroll" && hn("scroll", t)) : f != null && Li(t, s, f, u));
        }
    }
    function PR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ws ? uv(e, f) : s === Kd ? Zp(e, f) : s === Qs ? ls(e, f) : Li(e, s, f, i);
      }
    }
    function BR(e, t, a, i) {
      var u, s = V0(a), f, p = i;
      if (p === Hi && (p = qf(e)), p === Hi) {
        if (u = ru(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === Hi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !er.call(ky, e) && (ky[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function $R(e, t) {
      return V0(t).createTextNode(e);
    }
    function YR(e, t, a, i) {
      var u = ru(t, a);
      ph(t, a);
      var s;
      switch (t) {
        case "dialog":
          hn("cancel", e), hn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Gd.length; f++)
            hn(Gd[f], e);
          s = a;
          break;
        case "source":
          hn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e), s = a;
          break;
        case "details":
          hn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), hn("invalid", e);
          break;
        case "option":
          jt(e, a), s = a;
          break;
        case "select":
          is(e, a), s = as(e, a), hn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = Gf(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ss(t, s), VR(t, e, i, s, u), t) {
        case "input":
          Ai(e), Z(e, a, !1);
          break;
        case "textarea":
          Ai(e), fc(e);
          break;
        case "option":
          Ht(e, a);
          break;
        case "select":
          Wf(e, a);
          break;
        default:
          typeof s.onClick == "function" && yh(e);
          break;
      }
    }
    function IR(e, t, a, i, u) {
      ph(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = as(e, a), p = as(e, i), s = [];
          break;
        case "textarea":
          f = Gf(e, a), p = Gf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && yh(e);
          break;
      }
      ss(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === Ws) {
            var x = f[v];
            for (y in x)
              x.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === Kd || v === Qs || v === fh || v === xo || v === A0 || (Zn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], z = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === z || b == null && z == null))
          if (v === Ws)
            if (b && Object.freeze(b), z) {
              for (y in z)
                z.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && z[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === Kd) {
            var U = b ? b[dh] : void 0, H = z ? z[dh] : void 0;
            U != null && H !== U && (s = s || []).push(v, U);
          } else
            v === Qs ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === fh || v === xo || (Zn.hasOwnProperty(v) ? (b != null && (typeof b != "function" && vh(v, b), v === "onScroll" && hn("scroll", e)), !s && z !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (ov(g, p[Ws]), (s = s || []).push(Ws, g)), s;
    }
    function QR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && N(e, u);
      var s = ru(a, i), f = ru(a, u);
      switch (PR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Pm(e, u);
          break;
      }
    }
    function WR(e) {
      {
        var t = e.toLowerCase();
        return hc.hasOwnProperty(t) && hc[t] || null;
      }
    }
    function GR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ru(t, a), ph(t, a), t) {
        case "dialog":
          hn("cancel", e), hn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          hn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Gd.length; y++)
            hn(Gd[y], e);
          break;
        case "source":
          hn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          hn("error", e), hn("load", e);
          break;
        case "details":
          hn("toggle", e);
          break;
        case "input":
          C(e, a), hn("invalid", e);
          break;
        case "option":
          jt(e, a);
          break;
        case "select":
          is(e, a), hn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), hn("invalid", e);
          break;
      }
      ss(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, x = 0; x < g.length; x++) {
          var b = g[x].name.toLowerCase();
          switch (b) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[x].name);
          }
        }
      }
      var z = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var H = a[U];
          if (U === Qs)
            typeof H == "string" ? e.textContent !== H && (a[xo] !== !0 && mh(e.textContent, H, s, f), z = [Qs, H]) : typeof H == "number" && e.textContent !== "" + H && (a[xo] !== !0 && mh(e.textContent, H, s, f), z = [Qs, "" + H]);
          else if (Zn.hasOwnProperty(U))
            H != null && (typeof H != "function" && vh(U, H), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, ze = p && je ? null : Qn(U);
            if (a[xo] !== !0) {
              if (!(U === fh || U === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Kd) {
                  var xe = e.innerHTML, St = H ? H[dh] : void 0;
                  if (St != null) {
                    var vt = H0(e, St);
                    vt !== xe && Zd(U, xe, vt);
                  }
                } else if (U === Ws) {
                  if (v.delete(U), j0) {
                    var k = Km(H);
                    de = e.getAttribute("style"), k !== de && Zd(U, de, k);
                  }
                } else if (p && !je)
                  v.delete(U.toLowerCase()), de = _a(e, U, H), H !== de && Zd(U, de, H);
                else if (!cn(U, ze, p) && !At(U, H, ze, p)) {
                  var V = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), de = Ka(e, U, H, ze);
                  else {
                    var O = i;
                    if (O === Hi && (O = qf(t)), O === Hi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = WR(U);
                      q !== null && q !== U && (V = !0, v.delete(q)), v.delete(U);
                    }
                    de = _a(e, U, H);
                  }
                  var pe = je;
                  !pe && H !== de && !V && Zd(U, de, H);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xo] !== !0 && F0(v), t) {
        case "input":
          Ai(e), Z(e, a, !0);
          break;
        case "textarea":
          Ai(e), fc(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && yh(e);
          break;
      }
      return z;
    }
    function qR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function Oy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function My(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Ny(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function XR(e, t, a) {
      switch (t) {
        case "input":
          Ee(e, a);
          return;
        case "textarea":
          Bm(e, a);
          return;
        case "select":
          Gp(e, a);
          return;
      }
    }
    var Jd = function() {
    }, ep = function() {
    };
    {
      var KR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], P0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], ZR = P0.concat(["button"]), JR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], B0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ep = function(e, t) {
        var a = at({}, e || B0), i = {
          tag: t
        };
        return P0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), ZR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), KR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var eT = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return JR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, tT = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, $0 = {};
      Jd = function(e, t, a) {
        a = a || B0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = eT(e, u) ? null : i, f = s ? null : tT(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!$0[y]) {
            $0[y] = !0;
            var g = e, x = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", x = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var b = "";
              v === "table" && e === "tr" && (b += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, x, b);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var gh = "suppressHydrationWarning", Sh = "$", Eh = "/$", tp = "$?", np = "$!", nT = "style", zy = null, Uy = null;
    function rT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case pa:
        case Kf: {
          t = i === pa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Xf(null, "");
          break;
        }
        default: {
          var s = i === gn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Xf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ep(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function aT(e, t, a) {
      {
        var i = e, u = Xf(i.namespace, t), s = ep(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function LD(e) {
      return e;
    }
    function iT(e) {
      zy = Eo(), Uy = SR();
      var t = null;
      return ea(!1), t;
    }
    function lT(e) {
      ER(Uy), ea(zy), zy = null, Uy = null;
    }
    function uT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Jd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ep(f.ancestorInfo, e);
          Jd(null, p, v);
        }
        s = f.namespace;
      }
      var y = BR(e, t, a, s);
      return ip(u, y), $y(y, t), y;
    }
    function oT(e, t) {
      e.appendChild(t);
    }
    function sT(e, t, a, i, u) {
      switch (YR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function cT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ep(f.ancestorInfo, t);
          Jd(null, p, v);
        }
      }
      return IR(e, t, a, i);
    }
    function Ay(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function fT(e, t, a, i) {
      {
        var u = a;
        Jd(null, e, u.ancestorInfo);
      }
      var s = $R(e, t);
      return ip(i, s), s;
    }
    function dT() {
      var e = window.event;
      return e === void 0 ? Ei : ef(e.type);
    }
    var Fy = typeof setTimeout == "function" ? setTimeout : void 0, pT = typeof clearTimeout == "function" ? clearTimeout : void 0, jy = -1, Y0 = typeof Promise == "function" ? Promise : void 0, vT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Y0 < "u" ? function(e) {
      return Y0.resolve(null).then(e).catch(hT);
    } : Fy;
    function hT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function mT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function yT(e, t, a, i, u, s) {
      QR(e, t, a, i, u), $y(e, u);
    }
    function I0(e) {
      ls(e, "");
    }
    function gT(e, t, a) {
      e.nodeValue = a;
    }
    function ST(e, t) {
      e.appendChild(t);
    }
    function ET(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && yh(a);
    }
    function CT(e, t, a) {
      e.insertBefore(t, a);
    }
    function RT(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function TT(e, t) {
      e.removeChild(t);
    }
    function wT(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Hy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === gn) {
          var s = u.data;
          if (s === Eh)
            if (i === 0) {
              e.removeChild(u), Rn(t);
              return;
            } else
              i--;
          else
            (s === Sh || s === tp || s === np) && i++;
        }
        a = u;
      } while (a);
      Rn(t);
    }
    function bT(e, t) {
      e.nodeType === gn ? Hy(e.parentNode, t) : e.nodeType === Yr && Hy(e, t), Rn(e);
    }
    function _T(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function xT(e) {
      e.nodeValue = "";
    }
    function DT(e, t) {
      e = e;
      var a = t[nT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Sl("display", i);
    }
    function kT(e, t) {
      e.nodeValue = t;
    }
    function OT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === pa && e.documentElement && e.removeChild(e.documentElement);
    }
    function LT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function MT(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function NT(e) {
      return e.nodeType !== gn ? null : e;
    }
    function Q0(e) {
      return e.data === tp;
    }
    function Vy(e) {
      return e.data === np;
    }
    function zT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function UT(e, t) {
      e._reactRetry = t;
    }
    function Ch(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === Vi)
          break;
        if (t === gn) {
          var a = e.data;
          if (a === Sh || a === np || a === tp)
            break;
          if (a === Eh)
            return null;
        }
      }
      return e;
    }
    function rp(e) {
      return Ch(e.nextSibling);
    }
    function AT(e) {
      return Ch(e.firstChild);
    }
    function FT(e) {
      return Ch(e.firstChild);
    }
    function jT(e) {
      return Ch(e.nextSibling);
    }
    function HT(e, t, a, i, u, s, f) {
      ip(s, e), $y(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & _e) !== Ne;
      return GR(e, t, a, p, i, y, f);
    }
    function VT(e, t, a, i) {
      return ip(a, e), a.mode & _e, qR(e, t);
    }
    function PT(e, t) {
      ip(t, e);
    }
    function BT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var i = t.data;
          if (i === Eh) {
            if (a === 0)
              return rp(t);
            a--;
          } else
            (i === Sh || i === np || i === tp) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function W0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var i = t.data;
          if (i === Sh || i === np || i === tp) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Eh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function $T(e) {
      Rn(e);
    }
    function YT(e) {
      Rn(e);
    }
    function IT(e) {
      return e !== "head" && e !== "body";
    }
    function QT(e, t, a, i) {
      var u = !0;
      mh(t.nodeValue, a, i, u);
    }
    function WT(e, t, a, i, u, s) {
      if (t[gh] !== !0) {
        var f = !0;
        mh(i.nodeValue, u, s, f);
      }
    }
    function GT(e, t) {
      t.nodeType === Yr ? Oy(e, t) : t.nodeType === gn || Ly(e, t);
    }
    function qT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? Oy(a, t) : t.nodeType === gn || Ly(a, t));
      }
    }
    function XT(e, t, a, i, u) {
      (u || t[gh] !== !0) && (i.nodeType === Yr ? Oy(a, i) : i.nodeType === gn || Ly(a, i));
    }
    function KT(e, t, a) {
      My(e, t);
    }
    function ZT(e, t) {
      Ny(e, t);
    }
    function JT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && My(i, t);
      }
    }
    function ew(e, t) {
      {
        var a = e.parentNode;
        a !== null && Ny(a, t);
      }
    }
    function tw(e, t, a, i, u, s) {
      (s || t[gh] !== !0) && My(a, i);
    }
    function nw(e, t, a, i, u) {
      (u || t[gh] !== !0) && Ny(a, i);
    }
    function rw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function aw(e) {
      qd(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Py = "__reactProps$" + Sf, ap = "__reactContainer$" + Sf, By = "__reactEvents$" + Sf, iw = "__reactListeners$" + Sf, lw = "__reactHandles$" + Sf;
    function uw(e) {
      delete e[Ef], delete e[Py], delete e[By], delete e[iw], delete e[lw];
    }
    function ip(e, t) {
      t[Ef] = e;
    }
    function Rh(e, t) {
      t[ap] = e;
    }
    function G0(e) {
      e[ap] = null;
    }
    function lp(e) {
      return !!e[ap];
    }
    function Gs(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ap] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = W0(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = W0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[ap];
      return t && (t.tag === te || t.tag === oe || t.tag === Te || t.tag === K) ? t : null;
    }
    function Cf(e) {
      if (e.tag === te || e.tag === oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Th(e) {
      return e[Py] || null;
    }
    function $y(e, t) {
      e[Py] = t;
    }
    function ow(e) {
      var t = e[By];
      return t === void 0 && (t = e[By] = /* @__PURE__ */ new Set()), t;
    }
    var q0 = {}, X0 = Ze.ReactDebugCurrentFrame;
    function wh(e) {
      if (e) {
        var t = e._owner, a = ht(e.type, e._source, t ? t.type : null);
        X0.setExtraStackFrame(a);
      } else
        X0.setExtraStackFrame(null);
    }
    function Ji(e, t, a, i, u) {
      {
        var s = Function.call.bind(er);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (wh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), wh(null)), p instanceof Error && !(p.message in q0) && (q0[p.message] = !0, wh(u), S("Failed %s type: %s", a, p.message), wh(null));
          }
      }
    }
    var Yy = [], bh;
    bh = [];
    var _u = -1;
    function ko(e) {
      return {
        current: e
      };
    }
    function ta(e, t) {
      if (_u < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== bh[_u] && S("Unexpected Fiber popped."), e.current = Yy[_u], Yy[_u] = null, bh[_u] = null, _u--;
    }
    function na(e, t, a) {
      _u++, Yy[_u] = e.current, bh[_u] = a, e.current = t;
    }
    var Iy;
    Iy = {};
    var ii = {};
    Object.freeze(ii);
    var xu = ko(ii), jl = ko(!1), Qy = ii;
    function Rf(e, t, a) {
      return a && Hl(t) ? Qy : xu.current;
    }
    function K0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Tf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return ii;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ie(e) || "Unknown";
          Ji(i, s, "context", p);
        }
        return u && K0(e, t, s), s;
      }
    }
    function _h() {
      return jl.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xh(e) {
      ta(jl, e), ta(xu, e);
    }
    function Wy(e) {
      ta(jl, e), ta(xu, e);
    }
    function Z0(e, t, a) {
      {
        if (xu.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        na(xu, t, e), na(jl, a, e);
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            Iy[s] || (Iy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ie(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ie(e) || "Unknown";
          Ji(u, f, "child context", v);
        }
        return at({}, a, f);
      }
    }
    function Dh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return Qy = xu.current, na(xu, a, e), na(jl, jl.current, e), !0;
      }
    }
    function eE(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = J0(e, t, Qy);
          i.__reactInternalMemoizedMergedChildContext = u, ta(jl, e), ta(xu, e), na(xu, u, e), na(jl, a, e);
        } else
          ta(jl, e), na(jl, a, e);
      }
    }
    function sw(e) {
      {
        if (!ma(e) || e.tag !== ue)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case K:
              return t.stateNode.context;
            case ue: {
              var a = t.type;
              if (Hl(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Oo = 0, kh = 1, Du = null, Gy = !1, qy = !1;
    function tE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function cw(e) {
      Gy = !0, tE(e);
    }
    function nE() {
      Gy && Lo();
    }
    function Lo() {
      if (!qy && Du !== null) {
        qy = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Du;
          for (Cn(On); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Gy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), yd(qr, Lo), s;
        } finally {
          Cn(t), qy = !1;
        }
      }
      return null;
    }
    var wf = [], bf = 0, Oh = null, Lh = 0, wi = [], bi = 0, qs = null, ku = 1, Ou = "";
    function fw(e) {
      return Ks(), (e.flags & wv) !== Me;
    }
    function dw(e) {
      return Ks(), Lh;
    }
    function pw() {
      var e = Ou, t = ku, a = t & ~vw(t);
      return a.toString(32) + e;
    }
    function Xs(e, t) {
      Ks(), wf[bf++] = Lh, wf[bf++] = Oh, Oh = e, Lh = t;
    }
    function rE(e, t, a) {
      Ks(), wi[bi++] = ku, wi[bi++] = Ou, wi[bi++] = qs, qs = e;
      var i = ku, u = Ou, s = Mh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Mh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), b = f >> y, z = s - y, U = Mh(t) + z, H = p << z, de = H | b, ze = x + u;
        ku = 1 << U | de, Ou = ze;
      } else {
        var xe = p << s, St = xe | f, vt = u;
        ku = 1 << v | St, Ou = vt;
      }
    }
    function Xy(e) {
      Ks();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Xs(e, a), rE(e, a, i);
      }
    }
    function Mh(e) {
      return 32 - bs(e);
    }
    function vw(e) {
      return 1 << Mh(e) - 1;
    }
    function Ky(e) {
      for (; e === Oh; )
        Oh = wf[--bf], wf[bf] = null, Lh = wf[--bf], wf[bf] = null;
      for (; e === qs; )
        qs = wi[--bi], wi[bi] = null, Ou = wi[--bi], wi[bi] = null, ku = wi[--bi], wi[bi] = null;
    }
    function hw() {
      return Ks(), qs !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function mw(e, t) {
      Ks(), wi[bi++] = ku, wi[bi++] = Ou, wi[bi++] = qs, ku = t.id, Ou = t.overflow, qs = e;
    }
    function Ks() {
      kr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dr = null, _i = null, el = !1, Zs = !1, Mo = null;
    function yw() {
      el && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function aE() {
      Zs = !0;
    }
    function gw() {
      return Zs;
    }
    function Sw(e) {
      var t = e.stateNode.containerInfo;
      return _i = FT(t), Dr = e, el = !0, Mo = null, Zs = !1, !0;
    }
    function Ew(e, t, a) {
      return _i = jT(t), Dr = e, el = !0, Mo = null, Zs = !1, a !== null && mw(e, a), !0;
    }
    function iE(e, t) {
      switch (e.tag) {
        case K: {
          GT(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & _e) !== Ne;
          XT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && qT(i.dehydrated, t);
          break;
        }
      }
    }
    function lE(e, t) {
      iE(e, t);
      var a = Tx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Dt) : i.push(a);
    }
    function Zy(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case K: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, KT(a, i);
                break;
              case oe:
                var u = t.pendingProps;
                ZT(a, u);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case te: {
                var v = t.type, y = t.pendingProps, g = (e.mode & _e) !== Ne;
                tw(
                  s,
                  f,
                  p,
                  v,
                  y,
                  // TODO: Delete this argument when we remove the legacy root API.
                  g
                );
                break;
              }
              case oe: {
                var x = t.pendingProps, b = (e.mode & _e) !== Ne;
                nw(
                  s,
                  f,
                  p,
                  x,
                  // TODO: Delete this argument when we remove the legacy root API.
                  b
                );
                break;
              }
            }
            break;
          }
          case Te: {
            var z = e.memoizedState, U = z.dehydrated;
            if (U !== null)
              switch (t.tag) {
                case te:
                  var H = t.type;
                  t.pendingProps, JT(U, H);
                  break;
                case oe:
                  var de = t.pendingProps;
                  ew(U, de);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function uE(e, t) {
      t.flags = t.flags & ~hi | $t, Zy(e, t);
    }
    function oE(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = LT(t, a);
          return i !== null ? (e.stateNode = i, Dr = e, _i = AT(i), !0) : !1;
        }
        case oe: {
          var u = e.pendingProps, s = MT(t, u);
          return s !== null ? (e.stateNode = s, Dr = e, _i = null, !0) : !1;
        }
        case Te: {
          var f = NT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: hw(),
              retryLane: Sa
            };
            e.memoizedState = p;
            var v = wx(f);
            return v.return = e, e.child = v, Dr = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Jy(e) {
      return (e.mode & _e) !== Ne && (e.flags & We) === Me;
    }
    function eg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function tg(e) {
      if (el) {
        var t = _i;
        if (!t) {
          Jy(e) && (Zy(Dr, e), eg()), uE(Dr, e), el = !1, Dr = e;
          return;
        }
        var a = t;
        if (!oE(e, t)) {
          Jy(e) && (Zy(Dr, e), eg()), t = rp(a);
          var i = Dr;
          if (!t || !oE(e, t)) {
            uE(Dr, e), el = !1, Dr = e;
            return;
          }
          lE(i, a);
        }
      }
    }
    function Cw(e, t, a) {
      var i = e.stateNode, u = !Zs, s = HT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Rw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = VT(t, a, e);
      if (i) {
        var u = Dr;
        if (u !== null)
          switch (u.tag) {
            case K: {
              var s = u.stateNode.containerInfo, f = (u.mode & _e) !== Ne;
              QT(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                f
              );
              break;
            }
            case te: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & _e) !== Ne;
              WT(
                p,
                v,
                y,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function Tw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      PT(a, e);
    }
    function ww(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return BT(a);
    }
    function sE(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== K && t.tag !== Te; )
        t = t.return;
      Dr = t;
    }
    function Nh(e) {
      if (e !== Dr)
        return !1;
      if (!el)
        return sE(e), el = !0, !1;
      if (e.tag !== K && (e.tag !== te || IT(e.type) && !Ay(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Jy(e))
            cE(e), eg();
          else
            for (; t; )
              lE(e, t), t = rp(t);
      }
      return sE(e), e.tag === Te ? _i = ww(e) : _i = Dr ? rp(e.stateNode) : null, !0;
    }
    function bw() {
      return el && _i !== null;
    }
    function cE(e) {
      for (var t = _i; t; )
        iE(e, t), t = rp(t);
    }
    function _f() {
      Dr = null, _i = null, el = !1, Zs = !1;
    }
    function fE() {
      Mo !== null && (i1(Mo), Mo = null);
    }
    function kr() {
      return el;
    }
    function ng(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var _w = Ze.ReactCurrentBatchConfig, xw = null;
    function Dw() {
      return _w.transition;
    }
    var tl = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var kw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Sn && (t = a), a = a.return;
        return t;
      }, Js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, up = [], op = [], sp = [], cp = [], fp = [], dp = [], ec = /* @__PURE__ */ new Set();
      tl.recordUnsafeLifecycleWarnings = function(e, t) {
        ec.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillMount == "function" && op.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && sp.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && cp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillUpdate == "function" && dp.push(e));
      }, tl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(b) {
          e.add(Ie(b) || "Component"), ec.add(b.type);
        }), up = []);
        var t = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(b) {
          t.add(Ie(b) || "Component"), ec.add(b.type);
        }), op = []);
        var a = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(b) {
          a.add(Ie(b) || "Component"), ec.add(b.type);
        }), sp = []);
        var i = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(b) {
          i.add(Ie(b) || "Component"), ec.add(b.type);
        }), cp = []);
        var u = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(b) {
          u.add(Ie(b) || "Component"), ec.add(b.type);
        }), fp = []);
        var s = /* @__PURE__ */ new Set();
        if (dp.length > 0 && (dp.forEach(function(b) {
          s.add(Ie(b) || "Component"), ec.add(b.type);
        }), dp = []), t.size > 0) {
          var f = Js(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Js(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Js(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Js(e);
          Xe(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Js(a);
          Xe(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var x = Js(u);
          Xe(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, x);
        }
      };
      var zh = /* @__PURE__ */ new Map(), dE = /* @__PURE__ */ new Set();
      tl.recordLegacyContextWarning = function(e, t) {
        var a = kw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!dE.has(e.type)) {
          var i = zh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], zh.set(a, i)), i.push(e));
        }
      }, tl.flushLegacyContextWarning = function() {
        zh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), dE.add(s.type);
            });
            var u = Js(i);
            try {
              dn(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              en();
            }
          }
        });
      }, tl.discardPendingWarnings = function() {
        up = [], op = [], sp = [], cp = [], fp = [], dp = [], zh = /* @__PURE__ */ new Map();
      };
    }
    function nl(e, t) {
      if (e && e.defaultProps) {
        var a = at({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var rg = ko(null), ag;
    ag = {};
    var Uh = null, xf = null, ig = null, Ah = !1;
    function Fh() {
      Uh = null, xf = null, ig = null, Ah = !1;
    }
    function pE() {
      Ah = !0;
    }
    function vE() {
      Ah = !1;
    }
    function hE(e, t, a) {
      na(rg, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== ag && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = ag;
    }
    function lg(e, t) {
      var a = rg.current;
      ta(rg, t), e._currentValue = a;
    }
    function ug(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (gu(i.childLanes, t) ? u !== null && !gu(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ow(e, t, a) {
      Lw(e, t, a);
    }
    function Lw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = so(a), v = Lu(Kt, p);
                v.tag = Hh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = Ke(b.lanes, a)), ug(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === lt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === It) {
          var z = i.return;
          if (z === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          z.lanes = Ke(z.lanes, a);
          var U = z.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), ug(z, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      Uh = e, xf = null, ig = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && _p(), a.firstContext = null);
      }
    }
    function Kn(e) {
      Ah && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ig !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (xf === null) {
          if (Uh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          xf = a, Uh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          xf = xf.next = a;
      }
      return t;
    }
    var tc = null;
    function og(e) {
      tc === null ? tc = [e] : tc.push(e);
    }
    function Mw() {
      if (tc !== null) {
        for (var e = 0; e < tc.length; e++) {
          var t = tc[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        tc = null;
      }
    }
    function mE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, jh(e, i);
    }
    function Nw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function zw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, og(t)) : (a.next = u.next, u.next = a), t.interleaved = a, jh(e, i);
    }
    function $a(e, t) {
      return jh(e, t);
    }
    var Uw = jh;
    function jh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & ($t | hi)) !== Me && y1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & ($t | hi)) !== Me && y1(e), i = u, u = u.return;
      if (i.tag === K) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yE = 0, gE = 1, Hh = 2, sg = 3, Vh = !1, cg, Ph;
    cg = !1, Ph = null;
    function fg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: P
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function SE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Lu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function No(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (Ph === u && !cg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), cg = !0), U_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Uw(e, a);
      } else
        return zw(e, u, t, a);
    }
    function Bh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (Dd(a)) {
          var s = u.lanes;
          s = Ic(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, kd(e, f);
        }
      }
    }
    function dg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Aw(e, t, a, i, u, s) {
      switch (a.tag) {
        case gE: {
          var f = a.payload;
          if (typeof f == "function") {
            pE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Sn) {
                Xt(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Xt(!1);
                }
              }
              vE();
            }
            return p;
          }
          return f;
        }
        case sg:
          e.flags = e.flags & ~rr | We;
        case yE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            pE(), y = v.call(s, i, u);
            {
              if (e.mode & Sn) {
                Xt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Xt(!1);
                }
              }
              vE();
            }
          } else
            y = v;
          return y == null ? i : at({}, i, y);
        }
        case Hh:
          return Vh = !0, i;
      }
      return i;
    }
    function $h(e, t, a, i) {
      var u = e.updateQueue;
      Vh = !1, Ph = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var x = g.updateQueue, b = x.lastBaseUpdate;
          b !== f && (b === null ? x.firstBaseUpdate = y : b.next = y, x.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var z = u.baseState, U = P, H = null, de = null, ze = null, xe = s;
        do {
          var St = xe.lane, vt = xe.eventTime;
          if (gu(i, St)) {
            if (ze !== null) {
              var V = {
                eventTime: vt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                tag: xe.tag,
                payload: xe.payload,
                callback: xe.callback,
                next: null
              };
              ze = ze.next = V;
            }
            z = Aw(e, u, xe, z, t, a);
            var O = xe.callback;
            if (O !== null && // If the update was already committed, we should not queue its
            // callback again.
            xe.lane !== Dn) {
              e.flags |= Wn;
              var q = u.effects;
              q === null ? u.effects = [xe] : q.push(xe);
            }
          } else {
            var k = {
              eventTime: vt,
              lane: St,
              tag: xe.tag,
              payload: xe.payload,
              callback: xe.callback,
              next: null
            };
            ze === null ? (de = ze = k, H = z) : ze = ze.next = k, U = Ke(U, St);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, le = pe.next;
            pe.next = null, xe = le, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (H = z), u.baseState = H, u.firstBaseUpdate = de, u.lastBaseUpdate = ze;
        var $e = u.shared.interleaved;
        if ($e !== null) {
          var qe = $e;
          do
            U = Ke(U, qe.lane), qe = qe.next;
          while (qe !== $e);
        } else
          s === null && (u.shared.lanes = P);
        jp(U), e.lanes = U, e.memoizedState = z;
      }
      Ph = null;
    }
    function Fw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function EE() {
      Vh = !1;
    }
    function Yh() {
      return Vh;
    }
    function CE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Fw(f, a));
        }
    }
    var pg = {}, RE = new X.Component().refs, vg, hg, mg, yg, gg, TE, Ih, Sg, Eg, Cg;
    {
      vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set(), Cg = /* @__PURE__ */ new Set();
      var wE = /* @__PURE__ */ new Set();
      Ih = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          wE.has(a) || (wE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, TE = function(e, t) {
        if (t === void 0) {
          var a = Tt(e) || "Component";
          gg.has(a) || (gg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(pg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(pg);
    }
    function Rg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Sn) {
          Xt(!0);
          try {
            s = a(i, u);
          } finally {
            Xt(!1);
          }
        }
        TE(t, s);
      }
      var f = s == null ? u : at({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Tg = {
      isMounted: ya,
      enqueueSetState: function(e, t, a) {
        var i = vi(e), u = Ra(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Ih(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Bh(p, i, s)), kc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vi(e), u = Ra(), s = Po(i), f = Lu(u, s);
        f.tag = gE, f.payload = t, a != null && (Ih(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Bh(p, i, s)), kc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vi(e), i = Ra(), u = Po(a), s = Lu(i, u);
        s.tag = Hh, t != null && (Ih(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (pr(f, a, u, i), Bh(f, a, u)), io(a, u);
      }
    };
    function bE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Sn) {
            Xt(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Xt(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Tt(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !He(a, i) || !He(u, s) : !0;
    }
    function jw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Tt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Eg.has(t) && (Eg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Tt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !mg.has(t) && (mg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Tt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || wt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function _E(e, t) {
      t.updater = Tg, e.stateNode = t, Cc(t, e), t._reactInternalInstance = pg;
    }
    function xE(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ne && f._context === void 0
        );
        if (!p && !Cg.has(t)) {
          Cg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Q ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Tt(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Kn(f);
      else {
        u = Rf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? Tf(e, u) : ii;
      }
      var g = new t(a, s);
      if (e.mode & Sn) {
        Xt(!0);
        try {
          g = new t(a, s);
        } finally {
          Xt(!1);
        }
      }
      var x = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      _E(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var b = Tt(t) || "Component";
          hg.has(b) || (hg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var z = null, U = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? z = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (z = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), z !== null || U !== null || H !== null) {
            var de = Tt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            yg.has(de) || (yg.add(de), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, ze, z !== null ? `
  ` + z : "", U !== null ? `
  ` + U : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && K0(e, u, s), g;
    }
    function Hw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), Tg.enqueueReplaceState(t, t.state, null));
    }
    function DE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          vg.has(s) || (vg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Tg.enqueueReplaceState(t, t.state, null);
      }
    }
    function wg(e, t, a, i) {
      jw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = RE, fg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Kn(s);
      else {
        var f = Rf(e, t, !0);
        u.context = Tf(e, f);
      }
      {
        if (u.state === a) {
          var p = Tt(t) || "Component";
          Sg.has(p) || (Sg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Sn && tl.recordLegacyContextWarning(e, u), tl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Rg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Hw(e, u), $h(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = we;
        y |= Ma, (e.mode & Ua) !== Ne && (y |= Na), e.flags |= y;
      }
    }
    function Vw(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = ii;
      if (typeof p == "object" && p !== null)
        v = Kn(p);
      else {
        var y = Rf(e, t, !0);
        v = Tf(e, y);
      }
      var g = t.getDerivedStateFromProps, x = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && DE(e, u, a, v), EE();
      var b = e.memoizedState, z = u.state = b;
      if ($h(e, a, u, i), z = e.memoizedState, s === a && b === z && !_h() && !Yh()) {
        if (typeof u.componentDidMount == "function") {
          var U = we;
          U |= Ma, (e.mode & Ua) !== Ne && (U |= Na), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (Rg(e, t, g, a), z = e.memoizedState);
      var H = Yh() || bE(e, t, s, a, b, z, v);
      if (H) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = we;
          de |= Ma, (e.mode & Ua) !== Ne && (de |= Na), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = we;
          ze |= Ma, (e.mode & Ua) !== Ne && (ze |= Na), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = z;
      }
      return u.props = a, u.state = z, u.context = v, H;
    }
    function Pw(e, t, a, i, u) {
      var s = t.stateNode;
      SE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = ii;
      if (typeof g == "object" && g !== null)
        x = Kn(g);
      else {
        var b = Rf(t, a, !0);
        x = Tf(t, b);
      }
      var z = a.getDerivedStateFromProps, U = typeof z == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && DE(t, s, i, x), EE();
      var H = t.memoizedState, de = s.state = H;
      if ($h(t, i, s, u), de = t.memoizedState, f === v && H === de && !_h() && !Yh() && !T)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= An), !1;
      typeof z == "function" && (Rg(t, a, z, i), de = t.memoizedState);
      var ze = Yh() || bE(t, a, p, i, H, de, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      T;
      return ze ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, x)), typeof s.componentDidUpdate == "function" && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= An)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= An), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = x, ze;
    }
    var bg, _g, xg, Dg, kg, kE = function(e, t) {
    };
    bg = !1, _g = !1, xg = {}, Dg = {}, kg = {}, kE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        Dg[a] || (Dg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function pp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Sn || ft) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ie(e) || "Component";
          xg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), xg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== ue)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Vn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(x) {
            var b = v.refs;
            b === RE && (b = v.refs = {}), x === null ? delete b[y] : b[y] = x;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Qh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Wh(e) {
      {
        var t = Ie(e) || "Component";
        if (kg[t])
          return;
        kg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function OE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function LE(e) {
      function t(k, V) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [V], k.flags |= Dt) : O.push(V);
        }
      }
      function a(k, V) {
        if (!e)
          return null;
        for (var O = V; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, V) {
        for (var O = /* @__PURE__ */ new Map(), q = V; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, V) {
        var O = sc(k, V);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, V, O) {
        if (k.index = O, !e)
          return k.flags |= wv, V;
        var q = k.alternate;
        if (q !== null) {
          var pe = q.index;
          return pe < V ? (k.flags |= $t, V) : pe;
        } else
          return k.flags |= $t, V;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= $t), k;
      }
      function p(k, V, O, q) {
        if (V === null || V.tag !== oe) {
          var pe = n0(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var le = u(V, O);
          return le.return = k, le;
        }
      }
      function v(k, V, O, q) {
        var pe = O.type;
        if (pe === da)
          return g(k, V, O.props.children, q, O.key);
        if (V !== null && (V.elementType === pe || // Keep this check inline so it only runs on the false path:
        C1(V, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Le && OE(pe) === V.type)) {
          var le = u(V, O.props);
          return le.ref = pp(k, V, O), le.return = k, le._debugSource = O._source, le._debugOwner = O._owner, le;
        }
        var $e = t0(O, k.mode, q);
        return $e.ref = pp(k, V, O), $e.return = k, $e;
      }
      function y(k, V, O, q) {
        if (V === null || V.tag !== Oe || V.stateNode.containerInfo !== O.containerInfo || V.stateNode.implementation !== O.implementation) {
          var pe = r0(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var le = u(V, O.children || []);
          return le.return = k, le;
        }
      }
      function g(k, V, O, q, pe) {
        if (V === null || V.tag !== Qe) {
          var le = $o(O, k.mode, q, pe);
          return le.return = k, le;
        } else {
          var $e = u(V, O);
          return $e.return = k, $e;
        }
      }
      function x(k, V, O) {
        if (typeof V == "string" && V !== "" || typeof V == "number") {
          var q = n0("" + V, k.mode, O);
          return q.return = k, q;
        }
        if (typeof V == "object" && V !== null) {
          switch (V.$$typeof) {
            case jr: {
              var pe = t0(V, k.mode, O);
              return pe.ref = pp(k, null, V), pe.return = k, pe;
            }
            case Hr: {
              var le = r0(V, k.mode, O);
              return le.return = k, le;
            }
            case Le: {
              var $e = V._payload, qe = V._init;
              return x(k, qe($e), O);
            }
          }
          if (wt(V) || si(V)) {
            var Pt = $o(V, k.mode, O, null);
            return Pt.return = k, Pt;
          }
          Qh(k, V);
        }
        return typeof V == "function" && Wh(k), null;
      }
      function b(k, V, O, q) {
        var pe = V !== null ? V.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(k, V, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jr:
              return O.key === pe ? v(k, V, O, q) : null;
            case Hr:
              return O.key === pe ? y(k, V, O, q) : null;
            case Le: {
              var le = O._payload, $e = O._init;
              return b(k, V, $e(le), q);
            }
          }
          if (wt(O) || si(O))
            return pe !== null ? null : g(k, V, O, q, null);
          Qh(k, O);
        }
        return typeof O == "function" && Wh(k), null;
      }
      function z(k, V, O, q, pe) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var le = k.get(O) || null;
          return p(V, le, "" + q, pe);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case jr: {
              var $e = k.get(q.key === null ? O : q.key) || null;
              return v(V, $e, q, pe);
            }
            case Hr: {
              var qe = k.get(q.key === null ? O : q.key) || null;
              return y(V, qe, q, pe);
            }
            case Le:
              var Pt = q._payload, Ot = q._init;
              return z(k, V, O, Ot(Pt), pe);
          }
          if (wt(q) || si(q)) {
            var In = k.get(O) || null;
            return g(V, In, q, pe, null);
          }
          Qh(V, q);
        }
        return typeof q == "function" && Wh(V), null;
      }
      function U(k, V, O) {
        {
          if (typeof k != "object" || k === null)
            return V;
          switch (k.$$typeof) {
            case jr:
            case Hr:
              kE(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (V === null) {
                V = /* @__PURE__ */ new Set(), V.add(q);
                break;
              }
              if (!V.has(q)) {
                V.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Le:
              var pe = k._payload, le = k._init;
              U(le(pe), V, O);
              break;
          }
        }
        return V;
      }
      function H(k, V, O, q) {
        for (var pe = null, le = 0; le < O.length; le++) {
          var $e = O[le];
          pe = U($e, pe, k);
        }
        for (var qe = null, Pt = null, Ot = V, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
          Ot.index > Lt ? (jn = Ot, Ot = null) : jn = Ot.sibling;
          var aa = b(k, Ot, O[Lt], q);
          if (aa === null) {
            Ot === null && (Ot = jn);
            break;
          }
          e && Ot && aa.alternate === null && t(k, Ot), In = s(aa, In, Lt), Pt === null ? qe = aa : Pt.sibling = aa, Pt = aa, Ot = jn;
        }
        if (Lt === O.length) {
          if (a(k, Ot), kr()) {
            var Ar = Lt;
            Xs(k, Ar);
          }
          return qe;
        }
        if (Ot === null) {
          for (; Lt < O.length; Lt++) {
            var ui = x(k, O[Lt], q);
            ui !== null && (In = s(ui, In, Lt), Pt === null ? qe = ui : Pt.sibling = ui, Pt = ui);
          }
          if (kr()) {
            var Ta = Lt;
            Xs(k, Ta);
          }
          return qe;
        }
        for (var wa = i(k, Ot); Lt < O.length; Lt++) {
          var ia = z(wa, k, Lt, O[Lt], q);
          ia !== null && (e && ia.alternate !== null && wa.delete(ia.key === null ? Lt : ia.key), In = s(ia, In, Lt), Pt === null ? qe = ia : Pt.sibling = ia, Pt = ia);
        }
        if (e && wa.forEach(function(If) {
          return t(k, If);
        }), kr()) {
          var Fu = Lt;
          Xs(k, Fu);
        }
        return qe;
      }
      function de(k, V, O, q) {
        var pe = si(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (_g || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), _g = !0), O.entries === pe && (bg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), bg = !0);
          var le = pe.call(O);
          if (le)
            for (var $e = null, qe = le.next(); !qe.done; qe = le.next()) {
              var Pt = qe.value;
              $e = U(Pt, $e, k);
            }
        }
        var Ot = pe.call(O);
        if (Ot == null)
          throw new Error("An iterable object provided no iterator.");
        for (var In = null, Lt = null, jn = V, aa = 0, Ar = 0, ui = null, Ta = Ot.next(); jn !== null && !Ta.done; Ar++, Ta = Ot.next()) {
          jn.index > Ar ? (ui = jn, jn = null) : ui = jn.sibling;
          var wa = b(k, jn, Ta.value, q);
          if (wa === null) {
            jn === null && (jn = ui);
            break;
          }
          e && jn && wa.alternate === null && t(k, jn), aa = s(wa, aa, Ar), Lt === null ? In = wa : Lt.sibling = wa, Lt = wa, jn = ui;
        }
        if (Ta.done) {
          if (a(k, jn), kr()) {
            var ia = Ar;
            Xs(k, ia);
          }
          return In;
        }
        if (jn === null) {
          for (; !Ta.done; Ar++, Ta = Ot.next()) {
            var Fu = x(k, Ta.value, q);
            Fu !== null && (aa = s(Fu, aa, Ar), Lt === null ? In = Fu : Lt.sibling = Fu, Lt = Fu);
          }
          if (kr()) {
            var If = Ar;
            Xs(k, If);
          }
          return In;
        }
        for (var $p = i(k, jn); !Ta.done; Ar++, Ta = Ot.next()) {
          var Wl = z($p, k, Ar, Ta.value, q);
          Wl !== null && (e && Wl.alternate !== null && $p.delete(Wl.key === null ? Ar : Wl.key), aa = s(Wl, aa, Ar), Lt === null ? In = Wl : Lt.sibling = Wl, Lt = Wl);
        }
        if (e && $p.forEach(function(tD) {
          return t(k, tD);
        }), kr()) {
          var eD = Ar;
          Xs(k, eD);
        }
        return In;
      }
      function ze(k, V, O, q) {
        if (V !== null && V.tag === oe) {
          a(k, V.sibling);
          var pe = u(V, O);
          return pe.return = k, pe;
        }
        a(k, V);
        var le = n0(O, k.mode, q);
        return le.return = k, le;
      }
      function xe(k, V, O, q) {
        for (var pe = O.key, le = V; le !== null; ) {
          if (le.key === pe) {
            var $e = O.type;
            if ($e === da) {
              if (le.tag === Qe) {
                a(k, le.sibling);
                var qe = u(le, O.props.children);
                return qe.return = k, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (le.elementType === $e || // Keep this check inline so it only runs on the false path:
            C1(le, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === Le && OE($e) === le.type) {
              a(k, le.sibling);
              var Pt = u(le, O.props);
              return Pt.ref = pp(k, le, O), Pt.return = k, Pt._debugSource = O._source, Pt._debugOwner = O._owner, Pt;
            }
            a(k, le);
            break;
          } else
            t(k, le);
          le = le.sibling;
        }
        if (O.type === da) {
          var Ot = $o(O.props.children, k.mode, q, O.key);
          return Ot.return = k, Ot;
        } else {
          var In = t0(O, k.mode, q);
          return In.ref = pp(k, V, O), In.return = k, In;
        }
      }
      function St(k, V, O, q) {
        for (var pe = O.key, le = V; le !== null; ) {
          if (le.key === pe)
            if (le.tag === Oe && le.stateNode.containerInfo === O.containerInfo && le.stateNode.implementation === O.implementation) {
              a(k, le.sibling);
              var $e = u(le, O.children || []);
              return $e.return = k, $e;
            } else {
              a(k, le);
              break;
            }
          else
            t(k, le);
          le = le.sibling;
        }
        var qe = r0(O, k.mode, q);
        return qe.return = k, qe;
      }
      function vt(k, V, O, q) {
        var pe = typeof O == "object" && O !== null && O.type === da && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jr:
              return f(xe(k, V, O, q));
            case Hr:
              return f(St(k, V, O, q));
            case Le:
              var le = O._payload, $e = O._init;
              return vt(k, V, $e(le), q);
          }
          if (wt(O))
            return H(k, V, O, q);
          if (si(O))
            return de(k, V, O, q);
          Qh(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(ze(k, V, "" + O, q)) : (typeof O == "function" && Wh(k), a(k, V));
      }
      return vt;
    }
    var kf = LE(!0), ME = LE(!1);
    function Bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function $w(e, t) {
      for (var a = e.child; a !== null; )
        gx(a, t), a = a.sibling;
    }
    var vp = {}, zo = ko(vp), hp = ko(vp), Gh = ko(vp);
    function qh(e) {
      if (e === vp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function NE() {
      var e = qh(Gh.current);
      return e;
    }
    function Og(e, t) {
      na(Gh, t, e), na(hp, e, e), na(zo, vp, e);
      var a = rT(t);
      ta(zo, e), na(zo, a, e);
    }
    function Of(e) {
      ta(zo, e), ta(hp, e), ta(Gh, e);
    }
    function Lg() {
      var e = qh(zo.current);
      return e;
    }
    function zE(e) {
      qh(Gh.current);
      var t = qh(zo.current), a = aT(t, e.type);
      t !== a && (na(hp, e, e), na(zo, a, e));
    }
    function Mg(e) {
      hp.current === e && (ta(zo, e), ta(hp, e));
    }
    var Yw = 0, UE = 1, AE = 1, mp = 2, rl = ko(Yw);
    function Ng(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & UE;
    }
    function zg(e, t) {
      return e & UE | t;
    }
    function Iw(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      na(rl, t, e);
    }
    function Mf(e) {
      ta(rl, e);
    }
    function Qw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Xh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || Q0(i) || Vy(i))
              return t;
          }
        } else if (t.tag === mt && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & We) !== Me;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ya = (
      /*   */
      0
    ), lr = (
      /* */
      1
    ), Vl = (
      /*  */
      2
    ), ur = (
      /*    */
      4
    ), Or = (
      /*   */
      8
    ), Ug = [];
    function Ag() {
      for (var e = 0; e < Ug.length; e++) {
        var t = Ug[e];
        t._workInProgressVersionPrimary = null;
      }
      Ug.length = 0;
    }
    function Ww(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = Ze.ReactCurrentDispatcher, yp = Ze.ReactCurrentBatchConfig, Fg, Nf;
    Fg = /* @__PURE__ */ new Set();
    var nc = P, Vt = null, or = null, sr = null, Kh = !1, gp = !1, Sp = 0, Gw = 0, qw = 25, B = null, xi = null, Ao = -1, jg = !1;
    function Ut() {
      {
        var e = B;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function re() {
      {
        var e = B;
        xi !== null && (Ao++, xi[Ao] !== e && Xw(e));
      }
    }
    function zf(e) {
      e != null && !wt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function Xw(e) {
      {
        var t = Ie(Vt);
        if (!Fg.has(t) && (Fg.add(t), xi !== null)) {
          for (var a = "", i = 30, u = 0; u <= Ao; u++) {
            for (var s = xi[u], f = u === Ao ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function ra() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Hg(e, t) {
      if (jg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", B), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, B, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!ge(e[a], t[a]))
          return !1;
      return !0;
    }
    function Uf(e, t, a, i, u, s) {
      nc = s, Vt = t, xi = e !== null ? e._debugHookTypes : null, Ao = -1, jg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? ce.current = aC : xi !== null ? ce.current = rC : ce.current = nC;
      var f = a(i, u);
      if (gp) {
        var p = 0;
        do {
          if (gp = !1, Sp = 0, p >= qw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, jg = !1, or = null, sr = null, t.updateQueue = null, Ao = -1, ce.current = iC, f = a(i, u);
        } while (gp);
      }
      ce.current = cm, t._debugHookTypes = xi;
      var v = or !== null && or.next !== null;
      if (nc = P, Vt = null, or = null, sr = null, B = null, xi = null, Ao = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & _e) !== Ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), Kh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = Sp !== 0;
      return Sp = 0, e;
    }
    function FE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ua) !== Ne ? t.flags &= ~(ou | Na | Ir | we) : t.flags &= ~(Ir | we), e.lanes = Ns(e.lanes, a);
    }
    function jE() {
      if (ce.current = cm, Kh) {
        for (var e = Vt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Kh = !1;
      }
      nc = P, Vt = null, or = null, sr = null, xi = null, Ao = -1, B = null, KE = !1, gp = !1, Sp = 0;
    }
    function Pl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return sr === null ? Vt.memoizedState = sr = e : sr = sr.next = e, sr;
    }
    function Di() {
      var e;
      if (or === null) {
        var t = Vt.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = or.next;
      var a;
      if (sr === null ? a = Vt.memoizedState : a = sr.next, a !== null)
        sr = a, a = sr.next, or = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        or = e;
        var i = {
          memoizedState: or.memoizedState,
          baseState: or.baseState,
          baseQueue: or.baseQueue,
          queue: or.queue,
          next: null
        };
        sr === null ? Vt.memoizedState = sr = i : sr = sr.next = i;
      }
      return sr;
    }
    function HE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Vg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Pg(e, t, a) {
      var i = Pl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = eb.bind(null, Vt, s);
      return [i.memoizedState, f];
    }
    function Bg(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = or, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, x = s.baseState, b = null, z = null, U = null, H = g;
        do {
          var de = H.lane;
          if (gu(nc, de)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (H.hasEagerState)
              x = H.eagerState;
            else {
              var St = H.action;
              x = e(x, St);
            }
          } else {
            var ze = {
              lane: de,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            U === null ? (z = U = ze, b = x) : U = U.next = ze, Vt.lanes = Ke(Vt.lanes, de), jp(de);
          }
          H = H.next;
        } while (H !== null && H !== g);
        U === null ? b = x : U.next = z, ge(x, i.memoizedState) || _p(), i.memoizedState = x, i.baseState = b, i.baseQueue = U, u.lastRenderedState = x;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var k = vt;
        do {
          var V = k.lane;
          Vt.lanes = Ke(Vt.lanes, V), jp(V), k = k.next;
        } while (k !== vt);
      } else
        f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function $g(e, t, a) {
      var i = Di(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        ge(p, i.memoizedState) || _p(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function MD(e, t, a) {
    }
    function ND(e, t, a) {
    }
    function Yg(e, t, a) {
      var i = Vt, u = Pl(), s, f = kr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), Nf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      } else {
        if (s = t(), !Nf) {
          var p = t();
          ge(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
        }
        var v = Dm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(v, nc) || VE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, nm(BE.bind(null, i, y, e), [e]), i.flags |= Ir, Ep(lr | Or, PE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Zh(e, t, a) {
      var i = Vt, u = Di(), s = t();
      if (!Nf) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, _p());
      var y = u.queue;
      if (Rp(BE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      sr !== null && sr.memoizedState.tag & lr) {
        i.flags |= Ir, Ep(lr | Or, PE.bind(null, i, y, s, t), void 0, null);
        var g = Dm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(g, nc) || VE(i, t, s);
      }
      return s;
    }
    function VE(e, t, a) {
      e.flags |= uu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Vt.updateQueue;
      if (u === null)
        u = HE(), Vt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function PE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, $E(t) && YE(e);
    }
    function BE(e, t, a) {
      var i = function() {
        $E(t) && YE(e);
      };
      return a(i);
    }
    function $E(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function YE(e) {
      var t = $a(e, Ue);
      t !== null && pr(t, e, Ue, Kt);
    }
    function Jh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: Vg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = tb.bind(null, Vt, a);
      return [t.memoizedState, i];
    }
    function Ig(e) {
      return Bg(Vg);
    }
    function Qg(e) {
      return $g(Vg);
    }
    function Ep(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Vt.updateQueue;
      if (s === null)
        s = HE(), Vt.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function Wg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function em(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Cp(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      Vt.flags |= e, u.memoizedState = Ep(lr | t, a, void 0, s);
    }
    function tm(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (or !== null) {
        var p = or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Hg(s, v)) {
            u.memoizedState = Ep(t, a, f, s);
            return;
          }
        }
      }
      Vt.flags |= e, u.memoizedState = Ep(lr | t, a, f, s);
    }
    function nm(e, t) {
      return (Vt.mode & Ua) !== Ne ? Cp(ou | Ir | wl, Or, e, t) : Cp(Ir | wl, Or, e, t);
    }
    function Rp(e, t) {
      return tm(Ir, Or, e, t);
    }
    function Gg(e, t) {
      return Cp(we, Vl, e, t);
    }
    function rm(e, t) {
      return tm(we, Vl, e, t);
    }
    function qg(e, t) {
      var a = we;
      return a |= Ma, (Vt.mode & Ua) !== Ne && (a |= Na), Cp(a, ur, e, t);
    }
    function am(e, t) {
      return tm(we, ur, e, t);
    }
    function IE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Xg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = we;
      return u |= Ma, (Vt.mode & Ua) !== Ne && (u |= Na), Cp(u, ur, IE.bind(null, t, e), i);
    }
    function im(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return tm(we, ur, IE.bind(null, t, e), i);
    }
    function Kw(e, t) {
    }
    var lm = Kw;
    function Kg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function um(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Hg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Zg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function om(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Hg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Jg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function QE(e) {
      var t = Di(), a = or, i = a.memoizedState;
      return GE(t, i, e);
    }
    function WE(e) {
      var t = Di();
      if (or === null)
        return t.memoizedState = e, e;
      var a = or.memoizedState;
      return GE(t, a, e);
    }
    function GE(e, t, a) {
      var i = !Fv(nc);
      if (i) {
        if (!ge(a, t)) {
          var u = Vv();
          Vt.lanes = Ke(Vt.lanes, u), jp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, _p()), e.memoizedState = a, a;
    }
    function Zw(e, t, a) {
      var i = Fa();
      Cn(uy(i, qi)), e(!0);
      var u = yp.transition;
      yp.transition = {};
      var s = yp.transition;
      yp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Cn(i), yp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function eS() {
      var e = Jh(!1), t = e[0], a = e[1], i = Zw.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function qE() {
      var e = Ig(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function XE() {
      var e = Qg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var KE = !1;
    function Jw() {
      return KE;
    }
    function tS() {
      var e = Pl(), t = Dm(), a = t.identifierPrefix, i;
      if (kr()) {
        var u = pw();
        i = ":" + a + "R" + u;
        var s = Sp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Gw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function sm() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function eb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZE(e))
        JE(t, u);
      else {
        var s = mE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          pr(s, e, i, f), eC(s, t, i);
        }
      }
      tC(e, i);
    }
    function tb(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (ZE(e))
        JE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === P && (s === null || s.lanes === P)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = ce.current, ce.current = al;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, ge(y, v)) {
                Nw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = mE(e, t, u, i);
        if (g !== null) {
          var x = Ra();
          pr(g, e, i, x), eC(g, t, i);
        }
      }
      tC(e, i);
    }
    function ZE(e) {
      var t = e.alternate;
      return e === Vt || t !== null && t === Vt;
    }
    function JE(e, t) {
      gp = Kh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function eC(e, t, a) {
      if (Dd(a)) {
        var i = t.lanes;
        i = Ic(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, kd(e, u);
      }
    }
    function tC(e, t, a) {
      kc(e, t);
    }
    var cm = {
      readContext: Kn,
      useCallback: ra,
      useContext: ra,
      useEffect: ra,
      useImperativeHandle: ra,
      useInsertionEffect: ra,
      useLayoutEffect: ra,
      useMemo: ra,
      useReducer: ra,
      useRef: ra,
      useState: ra,
      useDebugValue: ra,
      useDeferredValue: ra,
      useTransition: ra,
      useMutableSource: ra,
      useSyncExternalStore: ra,
      useId: ra,
      unstable_isNewReconciler: he
    }, nC = null, rC = null, aC = null, iC = null, Bl = null, al = null, fm = null;
    {
      var nS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      nC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ut(), zf(t), Kg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ut(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ut(), zf(t), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ut(), zf(a), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ut(), zf(t), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ut(), zf(t), qg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ut(), zf(t);
          var a = ce.current;
          ce.current = Bl;
          try {
            return Zg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ut();
          var i = ce.current;
          ce.current = Bl;
          try {
            return Pg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ut(), Wg(e);
        },
        useState: function(e) {
          B = "useState", Ut();
          var t = ce.current;
          ce.current = Bl;
          try {
            return Jh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ut(), Jg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ut(), eS();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ut(), Yg(e, t, a);
        },
        useId: function() {
          return B = "useId", Ut(), tS();
        },
        unstable_isNewReconciler: he
      }, rC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), Kg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), qg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ce.current;
          ce.current = Bl;
          try {
            return Zg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ce.current;
          ce.current = Bl;
          try {
            return Pg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Wg(e);
        },
        useState: function(e) {
          B = "useState", re();
          var t = ce.current;
          ce.current = Bl;
          try {
            return Jh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), Jg(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), eS();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Yg(e, t, a);
        },
        useId: function() {
          return B = "useId", re(), tS();
        },
        unstable_isNewReconciler: he
      }, aC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), um(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), am(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ce.current;
          ce.current = al;
          try {
            return om(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ce.current;
          ce.current = al;
          try {
            return Bg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), em();
        },
        useState: function(e) {
          B = "useState", re();
          var t = ce.current;
          ce.current = al;
          try {
            return Ig(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), lm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), QE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Zh(e, t);
        },
        useId: function() {
          return B = "useId", re(), sm();
        },
        unstable_isNewReconciler: he
      }, iC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), um(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), am(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ce.current;
          ce.current = fm;
          try {
            return om(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ce.current;
          ce.current = fm;
          try {
            return $g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), em();
        },
        useState: function(e) {
          B = "useState", re();
          var t = ce.current;
          ce.current = fm;
          try {
            return Qg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), lm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), WE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), XE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Zh(e, t);
        },
        useId: function() {
          return B = "useId", re(), sm();
        },
        unstable_isNewReconciler: he
      }, Bl = {
        readContext: function(e) {
          return nS(), Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), Ut(), Kg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), Ut(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), Ut(), nm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), Ut(), Xg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), Ut(), Gg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), Ut(), qg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), Ut();
          var a = ce.current;
          ce.current = Bl;
          try {
            return Zg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), Ut();
          var i = ce.current;
          ce.current = Bl;
          try {
            return Pg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), Ut(), Wg(e);
        },
        useState: function(e) {
          B = "useState", Ge(), Ut();
          var t = ce.current;
          ce.current = Bl;
          try {
            return Jh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), Ut(), Jg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), Ut(), eS();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), Ut(), Yg(e, t, a);
        },
        useId: function() {
          return B = "useId", Ge(), Ut(), tS();
        },
        unstable_isNewReconciler: he
      }, al = {
        readContext: function(e) {
          return nS(), Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), re(), um(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), re(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), re(), am(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), re();
          var a = ce.current;
          ce.current = al;
          try {
            return om(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), re();
          var i = ce.current;
          ce.current = al;
          try {
            return Bg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), re(), em();
        },
        useState: function(e) {
          B = "useState", Ge(), re();
          var t = ce.current;
          ce.current = al;
          try {
            return Ig(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), re(), lm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), re(), QE(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), re(), qE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), re(), Zh(e, t);
        },
        useId: function() {
          return B = "useId", Ge(), re(), sm();
        },
        unstable_isNewReconciler: he
      }, fm = {
        readContext: function(e) {
          return nS(), Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), re(), um(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), re(), Rp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), re(), im(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), re(), rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), re(), am(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), re();
          var a = ce.current;
          ce.current = al;
          try {
            return om(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), re();
          var i = ce.current;
          ce.current = al;
          try {
            return $g(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), re(), em();
        },
        useState: function(e) {
          B = "useState", Ge(), re();
          var t = ce.current;
          ce.current = al;
          try {
            return Qg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), re(), lm();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), re(), WE(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), re(), XE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), re(), Zh(e, t);
        },
        useId: function() {
          return B = "useId", Ge(), re(), sm();
        },
        unstable_isNewReconciler: he
      };
    }
    var Fo = M.unstable_now, lC = 0, dm = -1, Tp = -1, pm = -1, rS = !1, vm = !1;
    function uC() {
      return rS;
    }
    function nb() {
      vm = !0;
    }
    function rb() {
      rS = !1, vm = !1;
    }
    function ab() {
      rS = vm, vm = !1;
    }
    function oC() {
      return lC;
    }
    function sC() {
      lC = Fo();
    }
    function aS(e) {
      Tp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function cC(e) {
      Tp = -1;
    }
    function hm(e, t) {
      if (Tp >= 0) {
        var a = Fo() - Tp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Tp = -1;
      }
    }
    function $l(e) {
      if (dm >= 0) {
        var t = Fo() - dm;
        dm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case K:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case _t:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function iS(e) {
      if (pm >= 0) {
        var t = Fo() - pm;
        pm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case K:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case _t:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Yl() {
      dm = Fo();
    }
    function lS() {
      pm = Fo();
    }
    function uS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function rc(e, t) {
      return {
        value: e,
        source: t,
        stack: Hu(t),
        digest: null
      };
    }
    function oS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function ib(e, t) {
      return !0;
    }
    function sS(e, t) {
      try {
        var a = ib(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === ue)
            return;
          console.error(i);
        }
        var p = u ? Ie(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === K)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ie(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var x = v + `
` + f + `

` + ("" + y);
        console.error(x);
      } catch (b) {
        setTimeout(function() {
          throw b;
        });
      }
    }
    var lb = typeof WeakMap == "function" ? WeakMap : Map;
    function fC(e, t, a) {
      var i = Lu(Kt, a);
      i.tag = sg, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Z_(u), sS(e, t);
      }, i;
    }
    function cS(e, t, a) {
      var i = Lu(Kt, a);
      i.tag = sg;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          R1(e), sS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        R1(e), sS(e, t), typeof u != "function" && X_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, Ue) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function dC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new lb(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = J_.bind(null, e, t, a);
        ga && Hp(e, a), t.then(s, s);
      }
    }
    function ub(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function ob(e, t) {
      var a = e.tag;
      if ((e.mode & _e) === Ne && (a === ke || a === Ve || a === Ye)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function pC(e) {
      var t = e;
      do {
        if (t.tag === Te && Qw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function vC(e, t, a, i, u) {
      if ((e.mode & _e) === Ne) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= We, a.flags |= Rc, a.flags &= ~(Tv | Tl), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = mn;
            else {
              var f = Lu(Kt, Ue);
              f.tag = Hh, No(a, f, Ue);
            }
          }
          a.lanes = Ke(a.lanes, Ue);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = u, e;
    }
    function sb(e, t, a, i, u) {
      if (a.flags |= Tl, ga && Hp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        ob(a), kr() && a.mode & _e && aE();
        var f = pC(t);
        if (f !== null) {
          f.flags &= ~_r, vC(f, t, a, e, u), f.mode & _e && dC(e, s, u), ub(f, e, s);
          return;
        } else {
          if (!xd(u)) {
            dC(e, s, u), $S();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (kr() && a.mode & _e) {
        aE();
        var v = pC(t);
        if (v !== null) {
          (v.flags & rr) === Me && (v.flags |= _r), vC(v, t, a, e, u), ng(rc(i, a));
          return;
        }
      }
      i = rc(i, a), B_(i);
      var y = t;
      do {
        switch (y.tag) {
          case K: {
            var g = i;
            y.flags |= rr;
            var x = so(u);
            y.lanes = Ke(y.lanes, x);
            var b = fC(y, g, x);
            dg(y, b);
            return;
          }
          case ue:
            var z = i, U = y.type, H = y.stateNode;
            if ((y.flags & We) === Me && (typeof U.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !p1(H))) {
              y.flags |= rr;
              var de = so(u);
              y.lanes = Ke(y.lanes, de);
              var ze = cS(y, z, de);
              dg(y, ze);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function cb() {
      return null;
    }
    var wp = Ze.ReactCurrentOwner, il = !1, fS, bp, dS, pS, vS, ac, hS, mm;
    fS = {}, bp = {}, dS = {}, pS = {}, vS = {}, ac = !1, hS = {}, mm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = ME(t, null, a, i) : t.child = kf(t, e.child, a, i);
    }
    function fb(e, t, a, i) {
      t.child = kf(t, e.child, null, i), t.child = kf(t, null, a, i);
    }
    function hC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Df(t, u), to(t);
      {
        if (wp.current = t, nr(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Sn) {
          Xt(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            Xt(!1);
          }
        }
        nr(!1);
      }
      return cu(), e !== null && !il ? (FE(e, t, u), Mu(e, t, u)) : (kr() && y && Xy(t), t.flags |= ri, Ea(e, t, v, u), t.child);
    }
    function mC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (mx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Ye, t.type = f, gS(t, s), yC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Ji(
            p,
            i,
            // Resolved props
            "prop",
            Tt(s)
          );
        }
        var v = e0(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Ji(
          g,
          i,
          // Resolved props
          "prop",
          Tt(y)
        );
      }
      var x = e.child, b = wS(e, u);
      if (!b) {
        var z = x.memoizedProps, U = a.compare;
        if (U = U !== null ? U : He, U(z, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= ri;
      var H = sc(x, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function yC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === Le) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Ji(
            y,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Tt(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (He(g, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (il = !1, t.pendingProps = i = g, wS(e, u))
            (e.flags & Rc) !== Me && (il = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return mS(e, t, a, i, u);
    }
    function gC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Y)
        if ((t.mode & _e) === Ne) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, km(t, a);
        } else if (Jr(a, Sa)) {
          var x = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var b = s !== null ? s.baseLanes : a;
          km(t, b);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = Ke(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Sa;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, km(t, v), null;
        }
      else {
        var z;
        s !== null ? (z = Ke(s.baseLanes, a), t.memoizedState = null) : z = a, km(t, z);
      }
      return Ea(e, t, u, a), t.child;
    }
    function db(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function pb(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function vb(e, t, a) {
      {
        t.flags |= we;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Ea(e, t, s, a), t.child;
    }
    function SC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ha, t.flags |= mi);
    }
    function mS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Ji(
          s,
          i,
          // Resolved props
          "prop",
          Tt(a)
        );
      }
      var f;
      {
        var p = Rf(t, a, !0);
        f = Tf(t, p);
      }
      var v, y;
      Df(t, u), to(t);
      {
        if (wp.current = t, nr(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Sn) {
          Xt(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            Xt(!1);
          }
        }
        nr(!1);
      }
      return cu(), e !== null && !il ? (FE(e, t, u), Mu(e, t, u)) : (kr() && y && Xy(t), t.flags |= ri, Ea(e, t, v, u), t.child);
    }
    function EC(e, t, a, i, u) {
      {
        switch (Lx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= rr;
            var y = new Error("Simulated error coming from DevTools"), g = so(u);
            t.lanes = Ke(t.lanes, g);
            var x = cS(t, rc(y, t), g);
            dg(t, x);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var b = a.propTypes;
          b && Ji(
            b,
            i,
            // Resolved props
            "prop",
            Tt(a)
          );
        }
      }
      var z;
      Hl(a) ? (z = !0, Dh(t)) : z = !1, Df(t, u);
      var U = t.stateNode, H;
      U === null ? (gm(e, t), xE(t, a, i), wg(t, a, i, u), H = !0) : e === null ? H = Vw(t, a, i, u) : H = Pw(e, t, a, i, u);
      var de = yS(e, t, a, H, z, u);
      {
        var ze = t.stateNode;
        H && ze.props !== i && (ac || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), ac = !0);
      }
      return de;
    }
    function yS(e, t, a, i, u, s) {
      SC(e, t);
      var f = (t.flags & We) !== Me;
      if (!i && !f)
        return u && eE(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      wp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, cC();
      else {
        to(t);
        {
          if (nr(!0), v = p.render(), t.mode & Sn) {
            Xt(!0);
            try {
              p.render();
            } finally {
              Xt(!1);
            }
          }
          nr(!1);
        }
        cu();
      }
      return t.flags |= ri, e !== null && f ? fb(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && eE(t, a, !0), t.child;
    }
    function CC(e) {
      var t = e.stateNode;
      t.pendingContext ? Z0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Z0(e, t.context, !1), Og(e, t.containerInfo);
    }
    function hb(e, t, a) {
      if (CC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      SE(e, t), $h(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & _r) {
          var g = rc(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return RC(e, t, p, a, g);
        } else if (p !== s) {
          var x = rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return RC(e, t, p, a, x);
        } else {
          Sw(t);
          var b = ME(t, null, p, a);
          t.child = b;
          for (var z = b; z; )
            z.flags = z.flags & ~$t | hi, z = z.sibling;
        }
      } else {
        if (_f(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function RC(e, t, a, i, u) {
      return _f(), ng(u), t.flags |= _r, Ea(e, t, a, i), t.child;
    }
    function mb(e, t, a) {
      zE(t), e === null && tg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Ay(i, u);
      return p ? f = null : s !== null && Ay(i, s) && (t.flags |= La), SC(e, t), Ea(e, t, f, a), t.child;
    }
    function yb(e, t) {
      return e === null && tg(t), null;
    }
    function gb(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = yx(v), g = nl(v, u), x;
      switch (y) {
        case ke:
          return gS(t, v), t.type = v = Yf(v), x = mS(null, t, v, g, i), x;
        case ue:
          return t.type = v = GS(v), x = EC(null, t, v, g, i), x;
        case Ve:
          return t.type = v = qS(v), x = hC(null, t, v, g, i), x;
        case ct: {
          if (t.type !== t.elementType) {
            var b = v.propTypes;
            b && Ji(
              b,
              g,
              // Resolved for outer only
              "prop",
              Tt(v)
            );
          }
          return x = mC(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var z = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Le && (z = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + z));
    }
    function Sb(e, t, a, i, u) {
      gm(e, t), t.tag = ue;
      var s;
      return Hl(a) ? (s = !0, Dh(t)) : s = !1, Df(t, u), xE(t, a, i), wg(t, a, i, u), yS(null, t, a, !0, s, u);
    }
    function Eb(e, t, a, i) {
      gm(e, t);
      var u = t.pendingProps, s;
      {
        var f = Rf(t, a, !1);
        s = Tf(t, f);
      }
      Df(t, i);
      var p, v;
      to(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = Tt(a) || "Unknown";
          fS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), fS[y] = !0);
        }
        t.mode & Sn && tl.recordLegacyContextWarning(t, null), nr(!0), wp.current = t, p = Uf(null, t, a, u, s, i), v = Af(), nr(!1);
      }
      if (cu(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Tt(a) || "Unknown";
        bp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), bp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Tt(a) || "Unknown";
          bp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), bp[x] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Hl(a) ? (b = !0, Dh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, fg(t), _E(t, p), wg(t, a, u, i), yS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ke, t.mode & Sn) {
          Xt(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            Xt(!1);
          }
        }
        return kr() && v && Xy(t), Ea(null, t, p, i), gS(t, a), t.child;
      }
    }
    function gS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Da();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), vS[u] || (vS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Tt(t) || "Unknown";
          pS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), pS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Tt(t) || "Unknown";
          dS[p] || (S("%s: Function components do not support contextType.", p), dS[p] = !0);
        }
      }
    }
    var SS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dn
    };
    function ES(e) {
      return {
        baseLanes: e,
        cachePool: cb(),
        transitions: null
      };
    }
    function Cb(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Rb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Ng(e, mp);
    }
    function Tb(e, t) {
      return Ns(e.childLanes, t);
    }
    function TC(e, t, a) {
      var i = t.pendingProps;
      Mx(t) && (t.flags |= We);
      var u = rl.current, s = !1, f = (t.flags & We) !== Me;
      if (f || Rb(u, e) ? (s = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (u = Iw(u, AE)), u = Lf(u), Uo(t, u), e === null) {
        tg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return Db(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = wb(t, y, g, a), b = t.child;
          return b.memoizedState = ES(a), t.memoizedState = SS, x;
        } else
          return CS(t, y);
      } else {
        var z = e.memoizedState;
        if (z !== null) {
          var U = z.dehydrated;
          if (U !== null)
            return kb(e, t, f, i, U, z, a);
        }
        if (s) {
          var H = i.fallback, de = i.children, ze = _b(e, t, de, H, a), xe = t.child, St = e.child.memoizedState;
          return xe.memoizedState = St === null ? ES(a) : Cb(St, a), xe.childLanes = Tb(e, a), t.memoizedState = SS, ze;
        } else {
          var vt = i.children, k = bb(e, t, vt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function CS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = RS(u, i);
      return s.return = e, e.child = s, s;
    }
    function wb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & _e) === Ne && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = RS(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function RS(e, t, a) {
      return w1(e, t, P, null);
    }
    function wC(e, t) {
      return sc(e, t);
    }
    function bb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = wC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & _e) === Ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Dt) : p.push(s);
      }
      return t.child = f, f;
    }
    function _b(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & _e) === Ne && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== f
      ) {
        var g = t.child;
        y = g, y.childLanes = P, y.pendingProps = v, t.mode & bt && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = wC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var x;
      return p !== null ? x = sc(p, i) : (x = $o(i, s, u, null), x.flags |= $t), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function ym(e, t, a, i) {
      i !== null && ng(i), kf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = CS(t, s);
      return f.flags |= $t, t.memoizedState = null, f;
    }
    function xb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = RS(f, s), v = $o(i, s, u, null);
      return v.flags |= $t, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & _e) !== Ne && kf(t, e.child, null, u), v;
    }
    function Db(e, t, a) {
      return (e.mode & _e) === Ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : Vy(t) ? e.lanes = En : e.lanes = Sa, null;
    }
    function kb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & _r) {
          t.flags &= ~_r;
          var k = oS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return ym(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var V = i.children, O = i.fallback, q = xb(e, t, V, O, f), pe = t.child;
          return pe.memoizedState = ES(f), t.memoizedState = SS, q;
        }
      else {
        if (yw(), (t.mode & _e) === Ne)
          return ym(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Vy(u)) {
          var p, v, y;
          {
            var g = zT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = oS(x, p, y);
          return ym(e, t, f, b);
        }
        var z = Jr(f, e.childLanes);
        if (il || z) {
          var U = Dm();
          if (U !== null) {
            var H = $v(U, f);
            if (H !== Dn && H !== s.retryLane) {
              s.retryLane = H;
              var de = Kt;
              $a(e, H), pr(U, e, H, de);
            }
          }
          $S();
          var ze = oS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return ym(e, t, f, ze);
        } else if (Q0(u)) {
          t.flags |= We, t.child = e.child;
          var xe = ex.bind(null, e);
          return UT(u, xe), null;
        } else {
          Ew(t, u, s.treeContext);
          var St = i.children, vt = CS(t, St);
          return vt.flags |= hi, vt;
        }
      }
    }
    function bC(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), ug(e.return, t, a);
    }
    function Ob(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && bC(i, a, e);
        } else if (i.tag === mt)
          bC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function Lb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Xh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Mb(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !hS[e])
        if (hS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function Nb(e, t) {
      e !== void 0 && !mm[e] && (e !== "collapsed" && e !== "hidden" ? (mm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (mm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function _C(e, t) {
      {
        var a = wt(e), i = !a && typeof si(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function zb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!_C(e[a], a))
              return;
        } else {
          var i = si(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!_C(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function TS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function xC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Mb(u), Nb(s, u), zb(f, u), Ea(e, t, f, a);
      var p = rl.current, v = Ng(p, mp);
      if (v)
        p = zg(p, mp), t.flags |= We;
      else {
        var y = e !== null && (e.flags & We) !== Me;
        y && Ob(t, t.child, a), p = Lf(p);
      }
      if (Uo(t, p), (t.mode & _e) === Ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = Lb(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), TS(
              t,
              !1,
              // isBackwards
              x,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var b = null, z = t.child;
            for (t.child = null; z !== null; ) {
              var U = z.alternate;
              if (U !== null && Xh(U) === null) {
                t.child = z;
                break;
              }
              var H = z.sibling;
              z.sibling = b, b = z, z = H;
            }
            TS(
              t,
              !0,
              // isBackwards
              b,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            TS(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Ub(e, t, a) {
      Og(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = kf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var DC = !1;
    function Ab(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || DC || (DC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ji(v, s, "prop", "Context.Provider");
      }
      if (hE(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !_h())
            return Mu(e, t, a);
        } else
          Ow(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var kC = !1;
    function Fb(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (kC || (kC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = Kn(i);
      to(t);
      var p;
      return wp.current = t, nr(!0), p = s(f), nr(!1), cu(), t.flags |= ri, Ea(e, t, p, a), t.child;
    }
    function _p() {
      il = !0;
    }
    function gm(e, t) {
      (t.mode & _e) === Ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= $t);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), cC(), jp(t.lanes), Jr(a, t.childLanes) ? (Bw(e, t), t.child) : null;
    }
    function jb(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Dt) : s.push(e), a.flags |= $t, a;
      }
    }
    function wS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function Hb(e, t, a) {
      switch (t.tag) {
        case K:
          CC(t), t.stateNode, _f();
          break;
        case te:
          zE(t);
          break;
        case ue: {
          var i = t.type;
          Hl(i) && Dh(t);
          break;
        }
        case Oe:
          Og(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          hE(t, s, u);
          break;
        }
        case _t:
          {
            var f = Jr(a, t.childLanes);
            f && (t.flags |= we);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return Uo(t, Lf(rl.current)), t.flags |= We, null;
            var y = t.child, g = y.childLanes;
            if (Jr(a, g))
              return TC(e, t, a);
            Uo(t, Lf(rl.current));
            var x = Mu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Uo(t, Lf(rl.current));
          break;
        }
        case mt: {
          var b = (e.flags & We) !== Me, z = Jr(a, t.childLanes);
          if (b) {
            if (z)
              return xC(e, t, a);
            t.flags |= We;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Uo(t, rl.current), z)
            break;
          return null;
        }
        case Be:
        case Je:
          return t.lanes = P, gC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function OC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return jb(e, t, e0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || _h() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          il = !0;
        else {
          var s = wS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Me)
            return il = !1, Hb(e, t, a);
          (e.flags & Rc) !== Me ? il = !0 : il = !1;
        }
      } else if (il = !1, kr() && fw(t)) {
        var f = t.index, p = dw();
        rE(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Re:
          return Eb(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return gb(e, t, v, a);
        }
        case ke: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : nl(y, g);
          return mS(e, t, y, x, a);
        }
        case ue: {
          var b = t.type, z = t.pendingProps, U = t.elementType === b ? z : nl(b, z);
          return EC(e, t, b, U, a);
        }
        case K:
          return hb(e, t, a);
        case te:
          return mb(e, t, a);
        case oe:
          return yb(e, t);
        case Te:
          return TC(e, t, a);
        case Oe:
          return Ub(e, t, a);
        case Ve: {
          var H = t.type, de = t.pendingProps, ze = t.elementType === H ? de : nl(H, de);
          return hC(e, t, H, ze, a);
        }
        case Qe:
          return db(e, t, a);
        case sn:
          return pb(e, t, a);
        case _t:
          return vb(e, t, a);
        case lt:
          return Ab(e, t, a);
        case ln:
          return Fb(e, t, a);
        case ct: {
          var xe = t.type, St = t.pendingProps, vt = nl(xe, St);
          if (t.type !== t.elementType) {
            var k = xe.propTypes;
            k && Ji(
              k,
              vt,
              // Resolved for outer only
              "prop",
              Tt(xe)
            );
          }
          return vt = nl(xe.type, vt), mC(e, t, xe, vt, a);
        }
        case Ye:
          return yC(e, t, t.type, t.pendingProps, a);
        case mn: {
          var V = t.type, O = t.pendingProps, q = t.elementType === V ? O : nl(V, O);
          return Sb(e, t, V, q, a);
        }
        case mt:
          return xC(e, t, a);
        case Zt:
          break;
        case Be:
          return gC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= we;
    }
    function LC(e) {
      e.flags |= ha, e.flags |= mi;
    }
    var MC, bS, NC, zC;
    MC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === te || u.tag === oe)
          oT(e, u.stateNode);
        else if (u.tag !== Oe) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, bS = function(e, t) {
    }, NC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Lg(), v = cT(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, zC = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function xp(e, t) {
      if (!kr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function Lr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = P, i = Me;
      if (t) {
        if ((e.mode & bt) !== Ne) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = Ke(a, Ke(y.lanes, y.childLanes)), i |= y.subtreeFlags & ar, i |= y.flags & ar, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = Ke(a, Ke(g.lanes, g.childLanes)), i |= g.subtreeFlags & ar, i |= g.flags & ar, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & bt) !== Ne) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = Ke(a, Ke(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = Ke(a, Ke(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function Vb(e, t, a) {
      if (bw() && (t.mode & _e) !== Ne && (t.flags & We) === Me)
        return cE(t), _f(), t.flags |= _r | Tl | rr, !1;
      var i = Nh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Tw(t), Lr(t), (t.mode & bt) !== Ne) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (_f(), (t.flags & We) === Me && (t.memoizedState = null), t.flags |= we, Lr(t), (t.mode & bt) !== Ne) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fE(), !0;
    }
    function UC(e, t, a) {
      var i = t.pendingProps;
      switch (Ky(t), t.tag) {
        case Re:
        case wn:
        case Ye:
        case ke:
        case Ve:
        case Qe:
        case sn:
        case _t:
        case ln:
        case ct:
          return Lr(t), null;
        case ue: {
          var u = t.type;
          return Hl(u) && xh(t), Lr(t), null;
        }
        case K: {
          var s = t.stateNode;
          if (Of(t), Wy(t), Ag(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Nh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== Me) && (t.flags |= An, fE());
            }
          }
          return bS(e, t), Lr(t), null;
        }
        case te: {
          Mg(t);
          var v = NE(), y = t.type;
          if (e !== null && t.stateNode != null)
            NC(e, t, y, i, v), e.ref !== t.ref && LC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = Lg(), x = Nh(t);
            if (x)
              Cw(t, v, g) && Ff(t);
            else {
              var b = uT(y, i, v, g, t);
              MC(b, t, !1, !1), t.stateNode = b, sT(b, y, i, v) && Ff(t);
            }
            t.ref !== null && LC(t);
          }
          return Lr(t), null;
        }
        case oe: {
          var z = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            zC(e, t, U, z);
          } else {
            if (typeof z != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = NE(), de = Lg(), ze = Nh(t);
            ze ? Rw(t) && Ff(t) : t.stateNode = fT(z, H, de, t);
          }
          return Lr(t), null;
        }
        case Te: {
          Mf(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var St = Vb(e, t, xe);
            if (!St)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & We) !== Me)
            return t.lanes = a, (t.mode & bt) !== Ne && uS(t), t;
          var vt = xe !== null, k = e !== null && e.memoizedState !== null;
          if (vt !== k && vt) {
            var V = t.child;
            if (V.flags |= Rl, (t.mode & _e) !== Ne) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !me);
              O || Ng(rl.current, AE) ? P_() : $S();
            }
          }
          var q = t.updateQueue;
          if (q !== null && (t.flags |= we), Lr(t), (t.mode & bt) !== Ne && vt) {
            var pe = t.child;
            pe !== null && (t.treeBaseDuration -= pe.treeBaseDuration);
          }
          return null;
        }
        case Oe:
          return Of(t), bS(e, t), e === null && aw(t.stateNode.containerInfo), Lr(t), null;
        case lt:
          var le = t.type._context;
          return lg(le, t), Lr(t), null;
        case mn: {
          var $e = t.type;
          return Hl($e) && xh(t), Lr(t), null;
        }
        case mt: {
          Mf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return Lr(t), null;
          var Pt = (t.flags & We) !== Me, Ot = qe.rendering;
          if (Ot === null)
            if (Pt)
              xp(qe, !1);
            else {
              var In = $_() && (e === null || (e.flags & We) === Me);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = Xh(Lt);
                  if (jn !== null) {
                    Pt = !0, t.flags |= We, xp(qe, !1);
                    var aa = jn.updateQueue;
                    return aa !== null && (t.updateQueue = aa, t.flags |= we), t.subtreeFlags = Me, $w(t, a), Uo(t, zg(rl.current, mp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              qe.tail !== null && Fn() > n1() && (t.flags |= We, Pt = !0, xp(qe, !1), t.lanes = bd);
            }
          else {
            if (!Pt) {
              var Ar = Xh(Ot);
              if (Ar !== null) {
                t.flags |= We, Pt = !0;
                var ui = Ar.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= we), xp(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Ot.alternate && !kr())
                  return Lr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Fn() * 2 - qe.renderingStartTime > n1() && a !== Sa && (t.flags |= We, Pt = !0, xp(qe, !1), t.lanes = bd);
            }
            if (qe.isBackwards)
              Ot.sibling = t.child, t.child = Ot;
            else {
              var Ta = qe.last;
              Ta !== null ? Ta.sibling = Ot : t.child = Ot, qe.last = Ot;
            }
          }
          if (qe.tail !== null) {
            var wa = qe.tail;
            qe.rendering = wa, qe.tail = wa.sibling, qe.renderingStartTime = Fn(), wa.sibling = null;
            var ia = rl.current;
            return Pt ? ia = zg(ia, mp) : ia = Lf(ia), Uo(t, ia), wa;
          }
          return Lr(t), null;
        }
        case Zt:
          break;
        case Be:
        case Je: {
          BS(t);
          var Fu = t.memoizedState, If = Fu !== null;
          if (e !== null) {
            var $p = e.memoizedState, Wl = $p !== null;
            Wl !== If && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Y && (t.flags |= Rl);
          }
          return !If || (t.mode & _e) === Ne ? Lr(t) : Jr(Ql, Sa) && (Lr(t), t.subtreeFlags & ($t | we) && (t.flags |= Rl)), null;
        }
        case Rt:
          return null;
        case et:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Pb(e, t, a) {
      switch (Ky(t), t.tag) {
        case ue: {
          var i = t.type;
          Hl(i) && xh(t);
          var u = t.flags;
          return u & rr ? (t.flags = u & ~rr | We, (t.mode & bt) !== Ne && uS(t), t) : null;
        }
        case K: {
          t.stateNode, Of(t), Wy(t), Ag();
          var s = t.flags;
          return (s & rr) !== Me && (s & We) === Me ? (t.flags = s & ~rr | We, t) : null;
        }
        case te:
          return Mg(t), null;
        case Te: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var p = t.flags;
          return p & rr ? (t.flags = p & ~rr | We, (t.mode & bt) !== Ne && uS(t), t) : null;
        }
        case mt:
          return Mf(t), null;
        case Oe:
          return Of(t), null;
        case lt:
          var v = t.type._context;
          return lg(v, t), null;
        case Be:
        case Je:
          return BS(t), null;
        case Rt:
          return null;
        default:
          return null;
      }
    }
    function AC(e, t, a) {
      switch (Ky(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && xh(t);
          break;
        }
        case K: {
          t.stateNode, Of(t), Wy(t), Ag();
          break;
        }
        case te: {
          Mg(t);
          break;
        }
        case Oe:
          Of(t);
          break;
        case Te:
          Mf(t);
          break;
        case mt:
          Mf(t);
          break;
        case lt:
          var u = t.type._context;
          lg(u, t);
          break;
        case Be:
        case Je:
          BS(t);
          break;
      }
    }
    var FC = null;
    FC = /* @__PURE__ */ new Set();
    var Sm = !1, Mr = !1, Bb = typeof WeakSet == "function" ? WeakSet : Set, Se = null, jf = null, Hf = null;
    function $b(e) {
      ni(null, function() {
        throw e;
      }), Ii();
    }
    var Yb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function jC(e, t) {
      try {
        jo(ur, e);
      } catch (a) {
        an(e, t, a);
      }
    }
    function _S(e, t, a) {
      try {
        Yb(e, a);
      } catch (i) {
        an(e, t, i);
      }
    }
    function Ib(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        an(e, t, i);
      }
    }
    function HC(e, t) {
      try {
        PC(e);
      } catch (a) {
        an(e, t, a);
      }
    }
    function Vf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (dt && ot && e.mode & bt)
              try {
                Yl(), i = a(null);
              } finally {
                $l(e);
              }
            else
              i = a(null);
          } catch (u) {
            an(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          a.current = null;
    }
    function Em(e, t, a) {
      try {
        a();
      } catch (i) {
        an(e, t, i);
      }
    }
    var VC = !1;
    function Qb(e, t) {
      iT(e.containerInfo), Se = t, Wb();
      var a = VC;
      return VC = !1, a;
    }
    function Wb() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & Qr) !== Me && t !== null ? (t.return = e, Se = t) : Gb();
      }
    }
    function Gb() {
      for (; Se !== null; ) {
        var e = Se;
        dn(e);
        try {
          qb(e);
        } catch (a) {
          an(e, e.return, a);
        }
        en();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function qb(e) {
      var t = e.alternate, a = e.flags;
      if ((a & An) !== Me) {
        switch (dn(e), e.tag) {
          case ke:
          case Ve:
          case Ye:
            break;
          case ue: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !ac && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : nl(e.type, i), u);
              {
                var p = FC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case K: {
            {
              var v = e.stateNode;
              OT(v.containerInfo);
            }
            break;
          }
          case te:
          case oe:
          case Oe:
          case mn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        en();
      }
    }
    function ll(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & Or) !== Ya ? kv(t) : (e & ur) !== Ya && no(t), (e & Vl) !== Ya && Vp(!0), Em(t, a, p), (e & Vl) !== Ya && Vp(!1), (e & Or) !== Ya ? Ov() : (e & ur) !== Ya && Rs());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function jo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & Or) !== Ya ? Cd(t) : (e & ur) !== Ya && Lv(t);
            var f = s.create;
            (e & Vl) !== Ya && Vp(!0), s.destroy = f(), (e & Vl) !== Ya && Vp(!1), (e & Or) !== Ya ? Dc() : (e & ur) !== Ya && Rd();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & ur) !== Me ? v = "useLayoutEffect" : (s.tag & Vl) !== Me ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function Xb(e, t) {
      if ((t.flags & we) !== Me)
        switch (t.tag) {
          case _t: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = oC(), p = t.alternate === null ? "mount" : "update";
            uC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case K:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case _t:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Kb(e, t, a, i) {
      if ((a.flags & ai) !== Me)
        switch (a.tag) {
          case ke:
          case Ve:
          case Ye: {
            if (!Mr)
              if (a.mode & bt)
                try {
                  Yl(), jo(ur | lr, a);
                } finally {
                  $l(a);
                }
              else
                jo(ur | lr, a);
            break;
          }
          case ue: {
            var u = a.stateNode;
            if (a.flags & we && !Mr)
              if (t === null)
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & bt)
                  try {
                    Yl(), u.componentDidMount();
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : nl(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), a.mode & bt)
                  try {
                    Yl(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    $l(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), CE(a, p, u));
            break;
          }
          case K: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case te:
                    y = a.child.stateNode;
                    break;
                  case ue:
                    y = a.child.stateNode;
                    break;
                }
              CE(a, v, y);
            }
            break;
          }
          case te: {
            var g = a.stateNode;
            if (t === null && a.flags & we) {
              var x = a.type, b = a.memoizedProps;
              mT(g, x, b);
            }
            break;
          }
          case oe:
            break;
          case Oe:
            break;
          case _t: {
            {
              var z = a.memoizedProps, U = z.onCommit, H = z.onRender, de = a.stateNode.effectDuration, ze = oC(), xe = t === null ? "mount" : "update";
              uC() && (xe = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, de, ze), G_(a);
                var St = a.return;
                e:
                  for (; St !== null; ) {
                    switch (St.tag) {
                      case K:
                        var vt = St.stateNode;
                        vt.effectDuration += de;
                        break e;
                      case _t:
                        var k = St.stateNode;
                        k.effectDuration += de;
                        break e;
                    }
                    St = St.return;
                  }
              }
            }
            break;
          }
          case Te: {
            i_(e, a);
            break;
          }
          case mt:
          case mn:
          case Zt:
          case Be:
          case Je:
          case et:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & ha && PC(a);
    }
    function Zb(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          if (e.mode & bt)
            try {
              Yl(), jC(e, e.return);
            } finally {
              $l(e);
            }
          else
            jC(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && Ib(e, e.return, t), HC(e, e.return);
          break;
        }
        case te: {
          HC(e, e.return);
          break;
        }
      }
    }
    function Jb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? _T(u) : DT(i.stateNode, i.memoizedProps);
            } catch (f) {
              an(e, e.return, f);
            }
          }
        } else if (i.tag === oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? xT(s) : kT(s, i.memoizedProps);
            } catch (f) {
              an(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === Je) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function PC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case te:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & bt)
            try {
              Yl(), u = t(i);
            } finally {
              $l(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ie(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ie(e)), t.current = i;
      }
    }
    function e_(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function BC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, BC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && uw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function t_(e) {
      for (var t = e.return; t !== null; ) {
        if ($C(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function $C(e) {
      return e.tag === te || e.tag === K || e.tag === Oe;
    }
    function YC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || $C(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== te && t.tag !== oe && t.tag !== It; ) {
            if (t.flags & $t || t.child === null || t.tag === Oe)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & $t))
            return t.stateNode;
        }
    }
    function n_(e) {
      var t = t_(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & La && (I0(a), t.flags &= ~La);
          var i = YC(e);
          DS(e, i, a);
          break;
        }
        case K:
        case Oe: {
          var u = t.stateNode.containerInfo, s = YC(e);
          xS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === te || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? RT(a, s, t) : ET(a, s);
      } else if (i !== Oe) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    function DS(e, t, a) {
      var i = e.tag, u = i === te || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? CT(a, s, t) : ST(a, s);
      } else if (i !== Oe) {
        var f = e.child;
        if (f !== null) {
          DS(f, t, a);
          for (var p = f.sibling; p !== null; )
            DS(p, t, a), p = p.sibling;
        }
      }
    }
    var Nr = null, ul = !1;
    function r_(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case te: {
                Nr = i.stateNode, ul = !1;
                break e;
              }
              case K: {
                Nr = i.stateNode.containerInfo, ul = !0;
                break e;
              }
              case Oe: {
                Nr = i.stateNode.containerInfo, ul = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Nr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        IC(e, t, a), Nr = null, ul = !1;
      }
      e_(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        IC(e, t, i), i = i.sibling;
    }
    function IC(e, t, a) {
      switch (xv(a), a.tag) {
        case te:
          Mr || Vf(a, t);
        case oe: {
          {
            var i = Nr, u = ul;
            Nr = null, Ho(e, t, a), Nr = i, ul = u, Nr !== null && (ul ? wT(Nr, a.stateNode) : TT(Nr, a.stateNode));
          }
          return;
        }
        case It: {
          Nr !== null && (ul ? bT(Nr, a.stateNode) : Hy(Nr, a.stateNode));
          return;
        }
        case Oe: {
          {
            var s = Nr, f = ul;
            Nr = a.stateNode.containerInfo, ul = !0, Ho(e, t, a), Nr = s, ul = f;
          }
          return;
        }
        case ke:
        case Ve:
        case ct:
        case Ye: {
          if (!Mr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var x = g, b = x.destroy, z = x.tag;
                  b !== void 0 && ((z & Vl) !== Ya ? Em(a, t, b) : (z & ur) !== Ya && (no(a), a.mode & bt ? (Yl(), Em(a, t, b), $l(a)) : Em(a, t, b), Rs())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Ho(e, t, a);
          return;
        }
        case ue: {
          if (!Mr) {
            Vf(a, t);
            var U = a.stateNode;
            typeof U.componentWillUnmount == "function" && _S(a, t, U);
          }
          Ho(e, t, a);
          return;
        }
        case Zt: {
          Ho(e, t, a);
          return;
        }
        case Be: {
          if (
            // TODO: Remove this dead flag
            a.mode & _e
          ) {
            var H = Mr;
            Mr = H || a.memoizedState !== null, Ho(e, t, a), Mr = H;
          } else
            Ho(e, t, a);
          break;
        }
        default: {
          Ho(e, t, a);
          return;
        }
      }
    }
    function a_(e) {
      e.memoizedState;
    }
    function i_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && YT(s);
          }
        }
      }
    }
    function QC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Bb()), t.forEach(function(i) {
          var u = tx.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ga)
              if (jf !== null && Hf !== null)
                Hp(Hf, jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function l_(e, t, a) {
      jf = a, Hf = e, dn(t), WC(t, e), dn(t), jf = null, Hf = null;
    }
    function ol(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            r_(e, t, s);
          } catch (v) {
            an(s, t, v);
          }
        }
      var f = es();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          dn(p), WC(p, e), p = p.sibling;
      dn(f);
    }
    function WC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case ke:
        case Ve:
        case ct:
        case Ye: {
          if (ol(t, e), Il(e), u & we) {
            try {
              ll(Vl | lr, e, e.return), jo(Vl | lr, e);
            } catch ($e) {
              an(e, e.return, $e);
            }
            if (e.mode & bt) {
              try {
                Yl(), ll(ur | lr, e, e.return);
              } catch ($e) {
                an(e, e.return, $e);
              }
              $l(e);
            } else
              try {
                ll(ur | lr, e, e.return);
              } catch ($e) {
                an(e, e.return, $e);
              }
          }
          return;
        }
        case ue: {
          ol(t, e), Il(e), u & ha && i !== null && Vf(i, i.return);
          return;
        }
        case te: {
          ol(t, e), Il(e), u & ha && i !== null && Vf(i, i.return);
          {
            if (e.flags & La) {
              var s = e.stateNode;
              try {
                I0(s);
              } catch ($e) {
                an(e, e.return, $e);
              }
            }
            if (u & we) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    yT(f, g, y, v, p, e);
                  } catch ($e) {
                    an(e, e.return, $e);
                  }
              }
            }
          }
          return;
        }
        case oe: {
          if (ol(t, e), Il(e), u & we) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var x = e.stateNode, b = e.memoizedProps, z = i !== null ? i.memoizedProps : b;
            try {
              gT(x, z, b);
            } catch ($e) {
              an(e, e.return, $e);
            }
          }
          return;
        }
        case K: {
          if (ol(t, e), Il(e), u & we && i !== null) {
            var U = i.memoizedState;
            if (U.isDehydrated)
              try {
                $T(t.containerInfo);
              } catch ($e) {
                an(e, e.return, $e);
              }
          }
          return;
        }
        case Oe: {
          ol(t, e), Il(e);
          return;
        }
        case Te: {
          ol(t, e), Il(e);
          var H = e.child;
          if (H.flags & Rl) {
            var de = H.stateNode, ze = H.memoizedState, xe = ze !== null;
            if (de.isHidden = xe, xe) {
              var St = H.alternate !== null && H.alternate.memoizedState !== null;
              St || V_();
            }
          }
          if (u & we) {
            try {
              a_(e);
            } catch ($e) {
              an(e, e.return, $e);
            }
            QC(e);
          }
          return;
        }
        case Be: {
          var vt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & _e
          ) {
            var k = Mr;
            Mr = k || vt, ol(t, e), Mr = k;
          } else
            ol(t, e);
          if (Il(e), u & Rl) {
            var V = e.stateNode, O = e.memoizedState, q = O !== null, pe = e;
            if (V.isHidden = q, q && !vt && (pe.mode & _e) !== Ne) {
              Se = pe;
              for (var le = pe.child; le !== null; )
                Se = le, o_(le), le = le.sibling;
            }
            Jb(pe, q);
          }
          return;
        }
        case mt: {
          ol(t, e), Il(e), u & we && QC(e);
          return;
        }
        case Zt:
          return;
        default: {
          ol(t, e), Il(e);
          return;
        }
      }
    }
    function Il(e) {
      var t = e.flags;
      if (t & $t) {
        try {
          n_(e);
        } catch (a) {
          an(e, e.return, a);
        }
        e.flags &= ~$t;
      }
      t & hi && (e.flags &= ~hi);
    }
    function u_(e, t, a) {
      jf = a, Hf = t, Se = e, GC(e, t, a), jf = null, Hf = null;
    }
    function GC(e, t, a) {
      for (var i = (e.mode & _e) !== Ne; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, p = f || Sm;
          if (p) {
            kS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, x = Sm, b = Mr;
            Sm = p, Mr = g, Mr && !b && (Se = u, s_(u));
            for (var z = s; z !== null; )
              Se = z, GC(
                z,
                // New root; bubble back up to here and stop.
                t,
                a
              ), z = z.sibling;
            Se = u, Sm = x, Mr = b, kS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ai) !== Me && s !== null ? (s.return = u, Se = s) : kS(e, t, a);
      }
    }
    function kS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & ai) !== Me) {
          var u = i.alternate;
          dn(i);
          try {
            Kb(t, u, i, a);
          } catch (f) {
            an(i, i.return, f);
          }
          en();
        }
        if (i === e) {
          Se = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Se = s;
          return;
        }
        Se = i.return;
      }
    }
    function o_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        switch (t.tag) {
          case ke:
          case Ve:
          case ct:
          case Ye: {
            if (t.mode & bt)
              try {
                Yl(), ll(ur, t, t.return);
              } finally {
                $l(t);
              }
            else
              ll(ur, t, t.return);
            break;
          }
          case ue: {
            Vf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && _S(t, t.return, i);
            break;
          }
          case te: {
            Vf(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              qC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : qC(e);
      }
    }
    function qC(e) {
      for (; Se !== null; ) {
        var t = Se;
        if (t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function s_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            XC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : XC(e);
      }
    }
    function XC(e) {
      for (; Se !== null; ) {
        var t = Se;
        dn(t);
        try {
          Zb(t);
        } catch (i) {
          an(t, t.return, i);
        }
        if (en(), t === e) {
          Se = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Se = a;
          return;
        }
        Se = t.return;
      }
    }
    function c_(e, t, a, i) {
      Se = t, f_(t, e, a, i);
    }
    function f_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Gr) !== Me && s !== null ? (s.return = u, Se = s) : d_(e, t, a, i);
      }
    }
    function d_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Ir) !== Me) {
          dn(u);
          try {
            p_(t, u, a, i);
          } catch (f) {
            an(u, u.return, f);
          }
          en();
        }
        if (u === e) {
          Se = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, Se = s;
          return;
        }
        Se = u.return;
      }
    }
    function p_(e, t, a, i) {
      switch (t.tag) {
        case ke:
        case Ve:
        case Ye: {
          if (t.mode & bt) {
            lS();
            try {
              jo(Or | lr, t);
            } finally {
              iS(t);
            }
          } else
            jo(Or | lr, t);
          break;
        }
      }
    }
    function v_(e) {
      Se = e, h_();
    }
    function h_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Dt) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, g_(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            Se = e;
          }
        }
        (e.subtreeFlags & Gr) !== Me && t !== null ? (t.return = e, Se = t) : m_();
      }
    }
    function m_() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Ir) !== Me && (dn(e), y_(e), en());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function y_(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          e.mode & bt ? (lS(), ll(Or | lr, e, e.return), iS(e)) : ll(Or | lr, e, e.return);
          break;
        }
      }
    }
    function g_(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        dn(a), E_(a, t), en();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : S_(e);
      }
    }
    function S_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (BC(t), t === e) {
          Se = null;
          return;
        }
        if (a !== null) {
          a.return = i, Se = a;
          return;
        }
        Se = i;
      }
    }
    function E_(e, t) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          e.mode & bt ? (lS(), ll(Or, e, t), iS(e)) : ll(Or, e, t);
          break;
        }
      }
    }
    function C_(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          try {
            jo(ur | lr, e);
          } catch (a) {
            an(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            an(e, e.return, a);
          }
          break;
        }
      }
    }
    function R_(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          try {
            jo(Or | lr, e);
          } catch (t) {
            an(e, e.return, t);
          }
          break;
        }
      }
    }
    function T_(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          try {
            ll(ur | lr, e, e.return);
          } catch (a) {
            an(e, e.return, a);
          }
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && _S(e, e.return, t);
          break;
        }
      }
    }
    function w_(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye:
          try {
            ll(Or | lr, e, e.return);
          } catch (t) {
            an(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Dp = Symbol.for;
      Dp("selector.component"), Dp("selector.has_pseudo_class"), Dp("selector.role"), Dp("selector.test_id"), Dp("selector.text");
    }
    var b_ = [];
    function __() {
      b_.forEach(function(e) {
        return e();
      });
    }
    var x_ = Ze.ReactCurrentActQueue;
    function D_(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function KC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && x_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var k_ = Math.ceil, OS = Ze.ReactCurrentDispatcher, LS = Ze.ReactCurrentOwner, zr = Ze.ReactCurrentBatchConfig, sl = Ze.ReactCurrentActQueue, cr = (
      /*             */
      0
    ), ZC = (
      /*               */
      1
    ), Ur = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Nu = 0, kp = 1, ic = 2, Cm = 3, Op = 4, JC = 5, MS = 6, gt = cr, Ca = null, Mn = null, fr = P, Ql = P, NS = ko(P), dr = Nu, Lp = null, Rm = P, Mp = P, Tm = P, Np = null, Ia = null, zS = 0, e1 = 500, t1 = 1 / 0, O_ = 500, zu = null;
    function zp() {
      t1 = Fn() + O_;
    }
    function n1() {
      return t1;
    }
    var wm = !1, US = null, Pf = null, lc = !1, Vo = null, Up = P, AS = [], FS = null, L_ = 50, Ap = 0, jS = null, HS = !1, bm = !1, M_ = 50, Bf = 0, _m = null, Fp = Kt, xm = P, r1 = !1;
    function Dm() {
      return Ca;
    }
    function Ra() {
      return (gt & (Ur | ki)) !== cr ? Fn() : (Fp !== Kt || (Fp = Fn()), Fp);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & _e) === Ne)
        return Ue;
      if ((gt & Ur) !== cr && fr !== P)
        return so(fr);
      var a = Dw() !== xw;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return xm === Dn && (xm = Vv()), xm;
      }
      var u = Fa();
      if (u !== Dn)
        return u;
      var s = dT();
      return s;
    }
    function N_(e) {
      var t = e.mode;
      return (t & _e) === Ne ? Ue : Zr();
    }
    function pr(e, t, a, i) {
      rx(), r1 && S("useInsertionEffect must not schedule updates."), HS && (bm = !0), Su(e, a, i), (gt & Ur) !== P && e === Ca ? lx(t) : (ga && Gc(e, t, a), ux(t), e === Ca && ((gt & Ur) === cr && (Mp = Ke(Mp, a)), dr === Op && Bo(e, fr)), Qa(e, i), a === Ue && gt === cr && (t.mode & _e) === Ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !sl.isBatchingLegacy && (zp(), nE()));
    }
    function z_(e, t, a) {
      var i = e.current;
      i.lanes = t, Su(e, t, a), Qa(e, a);
    }
    function U_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (gt & Ur) !== cr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      ay(e, t);
      var i = Os(e, e === Ca ? fr : P);
      if (i === P) {
        a !== null && S1(a), e.callbackNode = null, e.callbackPriority = Dn;
        return;
      }
      var u = kn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(sl.current !== null && a !== QS)) {
        a == null && s !== Ue && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && S1(a);
      var f;
      if (u === Ue)
        e.tag === Oo ? (sl.isBatchingLegacy !== null && (sl.didScheduleLegacyUpdate = !0), cw(l1.bind(null, e))) : tE(l1.bind(null, e)), sl.current !== null ? sl.current.push(Lo) : vT(function() {
          (gt & (Ur | ki)) === cr && Lo();
        }), f = null;
      else {
        var p;
        switch (ir(i)) {
          case On:
            p = qr;
            break;
          case qi:
            p = Ju;
            break;
          case Ei:
            p = yi;
            break;
          case co:
            p = Es;
            break;
          default:
            p = yi;
            break;
        }
        f = WS(p, a1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function a1(e, t) {
      if (rb(), Fp = Kt, xm = P, (gt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = Os(e, e === Ca ? fr : P);
      if (u === P)
        return null;
      var s = !Ms(e, u) && !Hv(e, u) && !t, f = s ? I_(e, u) : Om(e, u);
      if (f !== Nu) {
        if (f === ic) {
          var p = Ml(e);
          p !== P && (u = p, f = VS(e, p));
        }
        if (f === kp) {
          var v = Lp;
          throw uc(e, P), Bo(e, u), Qa(e, Fn()), v;
        }
        if (f === MS)
          Bo(e, u);
        else {
          var y = !Ms(e, u), g = e.current.alternate;
          if (y && !F_(g)) {
            if (f = Om(e, u), f === ic) {
              var x = Ml(e);
              x !== P && (u = x, f = VS(e, x));
            }
            if (f === kp) {
              var b = Lp;
              throw uc(e, P), Bo(e, u), Qa(e, Fn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, A_(e, f, u);
        }
      }
      return Qa(e, Fn()), e.callbackNode === a ? a1.bind(null, e) : null;
    }
    function VS(e, t) {
      var a = Np;
      if (qc(e)) {
        var i = uc(e, t);
        i.flags |= _r, rw(e.containerInfo);
      }
      var u = Om(e, t);
      if (u !== ic) {
        var s = Ia;
        Ia = a, s !== null && i1(s);
      }
      return u;
    }
    function i1(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function A_(e, t, a) {
      switch (t) {
        case Nu:
        case kp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ic: {
          oc(e, Ia, zu);
          break;
        }
        case Cm: {
          if (Bo(e, a), Av(a) && // do not delay if we're inside an act() scope
          !E1()) {
            var i = zS + e1 - Fn();
            if (i > 10) {
              var u = Os(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!gu(s, a)) {
                Ra(), Qc(e, s);
                break;
              }
              e.timeoutHandle = Fy(oc.bind(null, e, Ia, zu), i);
              break;
            }
          }
          oc(e, Ia, zu);
          break;
        }
        case Op: {
          if (Bo(e, a), jv(a))
            break;
          if (!E1()) {
            var f = $c(e, a), p = f, v = Fn() - p, y = nx(v) - v;
            if (y > 10) {
              e.timeoutHandle = Fy(oc.bind(null, e, Ia, zu), y);
              break;
            }
          }
          oc(e, Ia, zu);
          break;
        }
        case JC: {
          oc(e, Ia, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function F_(e) {
      for (var t = e; ; ) {
        if (t.flags & uu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!ge(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & uu && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function Bo(e, t) {
      t = Ns(t, Tm), t = Ns(t, Mp), Bv(e, t);
    }
    function l1(e) {
      if (ab(), (gt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      Au();
      var t = Os(e, P);
      if (!Jr(t, Ue))
        return Qa(e, Fn()), null;
      var a = Om(e, t);
      if (e.tag !== Oo && a === ic) {
        var i = Ml(e);
        i !== P && (t = i, a = VS(e, i));
      }
      if (a === kp) {
        var u = Lp;
        throw uc(e, P), Bo(e, t), Qa(e, Fn()), u;
      }
      if (a === MS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, oc(e, Ia, zu), Qa(e, Fn()), null;
    }
    function j_(e, t) {
      t !== P && (kd(e, Ke(t, Ue)), Qa(e, Fn()), (gt & (Ur | ki)) === cr && (zp(), Lo()));
    }
    function PS(e, t) {
      var a = gt;
      gt |= ZC;
      try {
        return e(t);
      } finally {
        gt = a, gt === cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !sl.isBatchingLegacy && (zp(), nE());
      }
    }
    function H_(e, t, a, i, u) {
      var s = Fa(), f = zr.transition;
      try {
        return zr.transition = null, Cn(On), e(t, a, i, u);
      } finally {
        Cn(s), zr.transition = f, gt === cr && zp();
      }
    }
    function Uu(e) {
      Vo !== null && Vo.tag === Oo && (gt & (Ur | ki)) === cr && Au();
      var t = gt;
      gt |= ZC;
      var a = zr.transition, i = Fa();
      try {
        return zr.transition = null, Cn(On), e ? e() : void 0;
      } finally {
        Cn(i), zr.transition = a, gt = t, (gt & (Ur | ki)) === cr && Lo();
      }
    }
    function u1() {
      return (gt & (Ur | ki)) !== cr;
    }
    function km(e, t) {
      na(NS, Ql, e), Ql = Ke(Ql, t);
    }
    function BS(e) {
      Ql = NS.current, ta(NS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== jy && (e.timeoutHandle = jy, pT(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          AC(u, i), i = i.return;
        }
      Ca = e;
      var s = sc(e.current, null);
      return Mn = s, fr = Ql = t, dr = Nu, Lp = null, Rm = P, Mp = P, Tm = P, Np = null, Ia = null, Mw(), tl.discardPendingWarnings(), s;
    }
    function o1(e, t) {
      do {
        var a = Mn;
        try {
          if (Fh(), jE(), en(), LS.current = null, a === null || a.return === null) {
            dr = kp, Lp = t, Mn = null;
            return;
          }
          if (dt && a.mode & bt && hm(a, !0), ut)
            if (cu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Nv(a, i, fr);
            } else
              Mv(a, t, fr);
          sb(e, a.return, a, t, fr), d1(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function s1() {
      var e = OS.current;
      return OS.current = cm, e === null ? cm : e;
    }
    function c1(e) {
      OS.current = e;
    }
    function V_() {
      zS = Fn();
    }
    function jp(e) {
      Rm = Ke(e, Rm);
    }
    function P_() {
      dr === Nu && (dr = Cm);
    }
    function $S() {
      (dr === Nu || dr === Cm || dr === ic) && (dr = Op), Ca !== null && (Ls(Rm) || Ls(Mp)) && Bo(Ca, fr);
    }
    function B_(e) {
      dr !== Op && (dr = ic), Np === null ? Np = [e] : Np.push(e);
    }
    function $_() {
      return dr === Nu;
    }
    function Om(e, t) {
      var a = gt;
      gt |= Ur;
      var i = s1();
      if (Ca !== e || fr !== t) {
        if (ga) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, fr), u.clear()), Od(e, t);
        }
        zu = Us(), uc(e, t);
      }
      ao(t);
      do
        try {
          Y_();
          break;
        } catch (s) {
          o1(e, s);
        }
      while (!0);
      if (Fh(), gt = a, c1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return kl(), Ca = null, fr = P, dr;
    }
    function Y_() {
      for (; Mn !== null; )
        f1(Mn);
    }
    function I_(e, t) {
      var a = gt;
      gt |= Ur;
      var i = s1();
      if (Ca !== e || fr !== t) {
        if (ga) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (Hp(e, fr), u.clear()), Od(e, t);
        }
        zu = Us(), zp(), uc(e, t);
      }
      ao(t);
      do
        try {
          Q_();
          break;
        } catch (s) {
          o1(e, s);
        }
      while (!0);
      return Fh(), c1(i), gt = a, Mn !== null ? (ws(), Nu) : (kl(), Ca = null, fr = P, dr);
    }
    function Q_() {
      for (; Mn !== null && !bv(); )
        f1(Mn);
    }
    function f1(e) {
      var t = e.alternate;
      dn(e);
      var a;
      (e.mode & bt) !== Ne ? (aS(e), a = YS(t, e, Ql), hm(e, !0)) : a = YS(t, e, Ql), en(), e.memoizedProps = e.pendingProps, a === null ? d1(e) : Mn = a, LS.current = null;
    }
    function d1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Tl) === Me) {
          dn(t);
          var u = void 0;
          if ((t.mode & bt) === Ne ? u = UC(a, t, Ql) : (aS(t), u = UC(a, t, Ql), hm(t, !1)), en(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Pb(a, t);
          if (s !== null) {
            s.flags &= Qi, Mn = s;
            return;
          }
          if ((t.mode & bt) !== Ne) {
            hm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Tl, i.subtreeFlags = Me, i.deletions = null;
          else {
            dr = MS, Mn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          Mn = v;
          return;
        }
        t = i, Mn = t;
      } while (t !== null);
      dr === Nu && (dr = JC);
    }
    function oc(e, t, a) {
      var i = Fa(), u = zr.transition;
      try {
        zr.transition = null, Cn(On), W_(e, t, a, i);
      } finally {
        zr.transition = u, Cn(i);
      }
      return null;
    }
    function W_(e, t, a, i) {
      do
        Au();
      while (Vo !== null);
      if (ax(), (gt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (Dv(s), u === null)
        return Cs(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dn;
      var f = Ke(u.lanes, u.childLanes);
      Wc(e, f), e === Ca && (Ca = null, Mn = null, fr = P), ((u.subtreeFlags & Gr) !== Me || (u.flags & Gr) !== Me) && (lc || (lc = !0, FS = a, WS(yi, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ai | Gr)) !== Me, v = (u.flags & (Qr | Wr | ai | Gr)) !== Me;
      if (p || v) {
        var y = zr.transition;
        zr.transition = null;
        var g = Fa();
        Cn(On);
        var x = gt;
        gt |= ki, LS.current = null, Qb(e, u), sC(), l_(e, u, s), lT(e.containerInfo), e.current = u, ro(s), u_(u, e, s), zv(), Zu(), gt = x, Cn(g), zr.transition = y;
      } else
        e.current = u, sC();
      var b = lc;
      if (lc ? (lc = !1, Vo = e, Up = s) : (Bf = 0, _m = null), f = e.pendingLanes, f === P && (Pf = null), b || m1(e.current, !1), xl(u.stateNode, i), ga && e.memoizedUpdaters.clear(), __(), Qa(e, Fn()), t !== null)
        for (var z = e.onRecoverableError, U = 0; U < t.length; U++) {
          var H = t[U], de = H.stack, ze = H.digest;
          z(H.value, {
            componentStack: de,
            digest: ze
          });
        }
      if (wm) {
        wm = !1;
        var xe = US;
        throw US = null, xe;
      }
      return Jr(Up, Ue) && e.tag !== Oo && Au(), f = e.pendingLanes, Jr(f, Ue) ? (nb(), e === jS ? Ap++ : (Ap = 0, jS = e)) : Ap = 0, Lo(), Cs(), null;
    }
    function Au() {
      if (Vo !== null) {
        var e = ir(Up), t = oy(Ei, e), a = zr.transition, i = Fa();
        try {
          return zr.transition = null, Cn(t), q_();
        } finally {
          Cn(i), zr.transition = a;
        }
      }
      return !1;
    }
    function G_(e) {
      AS.push(e), lc || (lc = !0, WS(yi, function() {
        return Au(), null;
      }));
    }
    function q_() {
      if (Vo === null)
        return !1;
      var e = FS;
      FS = null;
      var t = Vo, a = Up;
      if (Vo = null, Up = P, (gt & (Ur | ki)) !== cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      HS = !0, bm = !1, Ts(a);
      var i = gt;
      gt |= ki, v_(t.current), c_(t, t.current, a, e);
      {
        var u = AS;
        AS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Xb(t, f);
        }
      }
      gi(), m1(t.current, !0), gt = i, Lo(), bm ? t === _m ? Bf++ : (Bf = 0, _m = t) : Bf = 0, HS = !1, bm = !1, Ed(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function p1(e) {
      return Pf !== null && Pf.has(e);
    }
    function X_(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function K_(e) {
      wm || (wm = !0, US = e);
    }
    var Z_ = K_;
    function v1(e, t, a) {
      var i = rc(a, t), u = fC(e, i, Ue), s = No(e, u, Ue), f = Ra();
      s !== null && (Su(s, Ue, f), Qa(s, f));
    }
    function an(e, t, a) {
      if ($b(a), Vp(!1), e.tag === K) {
        v1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === K) {
          v1(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !p1(s)) {
            var f = rc(a, e), p = cS(i, f, Ue), v = No(i, p, Ue), y = Ra();
            v !== null && (Su(v, Ue, y), Qa(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function J_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Qc(e, a), ox(e), Ca === e && gu(fr, a) && (dr === Op || dr === Cm && Av(fr) && Fn() - zS < e1 ? uc(e, P) : Tm = Ke(Tm, a)), Qa(e, u);
    }
    function h1(e, t) {
      t === Dn && (t = N_(e));
      var a = Ra(), i = $a(e, t);
      i !== null && (Su(i, t, a), Qa(i, a));
    }
    function ex(e) {
      var t = e.memoizedState, a = Dn;
      t !== null && (a = t.retryLane), h1(e, a);
    }
    function tx(e, t) {
      var a = Dn, i;
      switch (e.tag) {
        case Te:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case mt:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), h1(e, a);
    }
    function nx(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : k_(e / 1960) * 1960;
    }
    function rx() {
      if (Ap > L_)
        throw Ap = 0, jS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > M_ && (Bf = 0, _m = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function ax() {
      tl.flushLegacyContextWarning(), tl.flushPendingUnsafeLifecycleWarnings();
    }
    function m1(e, t) {
      dn(e), Lm(e, Na, T_), t && Lm(e, ou, w_), Lm(e, Na, C_), t && Lm(e, ou, R_), en();
    }
    function Lm(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Mm = null;
    function y1(e) {
      {
        if ((gt & Ur) !== cr || !(e.mode & _e))
          return;
        var t = e.tag;
        if (t !== Re && t !== K && t !== ue && t !== ke && t !== Ve && t !== ct && t !== Ye)
          return;
        var a = Ie(e) || "ReactComponent";
        if (Mm !== null) {
          if (Mm.has(a))
            return;
          Mm.add(a);
        } else
          Mm = /* @__PURE__ */ new Set([a]);
        var i = fn;
        try {
          dn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? dn(e) : en();
        }
      }
    }
    var YS;
    {
      var ix = null;
      YS = function(e, t, a) {
        var i = b1(ix, t);
        try {
          return OC(e, t, a);
        } catch (s) {
          if (gw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Fh(), jE(), AC(e, t), b1(t, i), t.mode & bt && aS(t), ni(null, OC, null, e, t, a), ty()) {
            var u = Ii();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var g1 = !1, IS;
    IS = /* @__PURE__ */ new Set();
    function lx(e) {
      if (Br && !Jw())
        switch (e.tag) {
          case ke:
          case Ve:
          case Ye: {
            var t = Mn && Ie(Mn) || "Unknown", a = t;
            if (!IS.has(a)) {
              IS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            g1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), g1 = !0);
            break;
          }
        }
    }
    function Hp(e, t) {
      if (ga) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Gc(e, i, t);
        });
      }
    }
    var QS = {};
    function WS(e, t) {
      {
        var a = sl.current;
        return a !== null ? (a.push(t), QS) : yd(e, t);
      }
    }
    function S1(e) {
      if (e !== QS)
        return _c(e);
    }
    function E1() {
      return sl.current !== null;
    }
    function ux(e) {
      {
        if (e.mode & _e) {
          if (!KC())
            return;
        } else if (!D_() || gt !== cr || e.tag !== ke && e.tag !== Ve && e.tag !== Ye)
          return;
        if (sl.current === null) {
          var t = fn;
          try {
            dn(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ie(e));
          } finally {
            t ? dn(e) : en();
          }
        }
      }
    }
    function ox(e) {
      e.tag !== Oo && KC() && sl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Vp(e) {
      r1 = e;
    }
    var Oi = null, $f = null, sx = function(e) {
      Oi = e;
    };
    function Yf(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        return t === void 0 ? e : t.current;
      }
    }
    function GS(e) {
      return Yf(e);
    }
    function qS(e) {
      {
        if (Oi === null)
          return e;
        var t = Oi(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ie,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function C1(e, t) {
      {
        if (Oi === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case ue: {
            typeof i == "function" && (u = !0);
            break;
          }
          case ke: {
            (typeof i == "function" || s === Le) && (u = !0);
            break;
          }
          case Ve: {
            (s === ie || s === Le) && (u = !0);
            break;
          }
          case ct:
          case Ye: {
            (s === tt || s === Le) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = Oi(a);
          if (f !== void 0 && f === Oi(i))
            return !0;
        }
        return !1;
      }
    }
    function R1(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var cx = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          XS(e.current, i, a);
        });
      }
    }, fx = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Au(), Uu(function() {
          Pp(t, e, null, null);
        });
      }
    };
    function XS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case ke:
          case Ye:
          case ue:
            v = p;
            break;
          case Ve:
            v = p.render;
            break;
        }
        if (Oi === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var x = Oi(v);
          x !== void 0 && (a.has(x) ? g = !0 : t.has(x) && (f === ue ? g = !0 : y = !0));
        }
        if ($f !== null && ($f.has(e) || i !== null && $f.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var b = $a(e, Ue);
          b !== null && pr(b, e, Ue, Kt);
        }
        u !== null && !g && XS(u, t, a), s !== null && XS(s, t, a);
      }
    }
    var dx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return KS(e.current, i, a), a;
      }
    };
    function KS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case ke:
          case Ye:
          case ue:
            p = f;
            break;
          case Ve:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? px(e, a) : i !== null && KS(i, t, a), u !== null && KS(u, t, a);
      }
    }
    function px(e, t) {
      {
        var a = vx(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case te:
              t.add(i.stateNode);
              return;
            case Oe:
              t.add(i.stateNode.containerInfo);
              return;
            case K:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function vx(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === te)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var ZS;
    {
      ZS = !1;
      try {
        var T1 = Object.preventExtensions({});
      } catch {
        ZS = !0;
      }
    }
    function hx(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !ZS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new hx(e, t, a, i);
    };
    function JS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function mx(e) {
      return typeof e == "function" && !JS(e) && e.defaultProps === void 0;
    }
    function yx(e) {
      if (typeof e == "function")
        return JS(e) ? ue : ke;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ie)
          return Ve;
        if (t === tt)
          return ct;
      }
      return Re;
    }
    function sc(e, t) {
      var a = e.alternate;
      a === null ? (a = li(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Me, a.subtreeFlags = Me, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & ar, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Re:
        case ke:
        case Ye:
          a.type = Yf(e.type);
          break;
        case ue:
          a.type = GS(e.type);
          break;
        case Ve:
          a.type = qS(e.type);
          break;
      }
      return a;
    }
    function gx(e, t) {
      e.flags &= ar | $t;
      var a = e.alternate;
      if (a === null)
        e.childLanes = P, e.lanes = t, e.child = null, e.subtreeFlags = Me, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Me, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function Sx(e, t, a) {
      var i;
      return e === kh ? (i = _e, t === !0 && (i |= Sn, i |= Ua)) : i = Ne, ga && (i |= bt), li(K, null, null, i);
    }
    function e0(e, t, a, i, u, s) {
      var f = Re, p = e;
      if (typeof e == "function")
        JS(e) ? (f = ue, p = GS(p)) : p = Yf(p);
      else if (typeof e == "string")
        f = te;
      else
        e:
          switch (e) {
            case da:
              return $o(a.children, u, s, t);
            case Mi:
              f = sn, u |= Sn, (u & _e) !== Ne && (u |= Ua);
              break;
            case R:
              return Ex(a, u, s, t);
            case st:
              return Cx(a, u, s, t);
            case yt:
              return Rx(a, u, s, t);
            case Gt:
              return w1(a, u, s, t);
            case gr:
            case Un:
            case oi:
            case qt:
            case Wt:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Q:
                    f = lt;
                    break e;
                  case ne:
                    f = ln;
                    break e;
                  case ie:
                    f = Ve, p = qS(p);
                    break e;
                  case tt:
                    f = ct;
                    break e;
                  case Le:
                    f = wn, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ie(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      var g = li(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function t0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = e0(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = li(Qe, e, i, t);
      return u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(_t, e, i, t | bt);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Cx(e, t, a, i) {
      var u = li(Te, e, i, t);
      return u.elementType = st, u.lanes = a, u;
    }
    function Rx(e, t, a, i) {
      var u = li(mt, e, i, t);
      return u.elementType = yt, u.lanes = a, u;
    }
    function w1(e, t, a, i) {
      var u = li(Be, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function n0(e, t, a) {
      var i = li(oe, e, null, t);
      return i.lanes = a, i;
    }
    function Tx() {
      var e = li(te, null, null, Ne);
      return e.elementType = "DELETED", e;
    }
    function wx(e) {
      var t = li(It, null, null, Ne);
      return t.stateNode = e, t;
    }
    function r0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Oe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function b1(e, t) {
      return e === null && (e = li(Re, null, null, Ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function bx(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = jy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dn, this.eventTimes = zs(P), this.expirationTimes = zs(Kt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = zs(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case kh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function _1(e, t, a, i, u, s, f, p, v, y) {
      var g = new bx(e, t, a, p, v), x = Sx(t, s);
      g.current = x, x.stateNode = g;
      {
        var b = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        x.memoizedState = b;
      }
      return fg(x), g;
    }
    var a0 = "18.2.0";
    function _x(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return hr(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Hr,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var i0, l0;
    i0 = !1, l0 = {};
    function x1(e) {
      if (!e)
        return ii;
      var t = vi(e), a = sw(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Hl(i))
          return J0(t, i, a);
      }
      return a;
    }
    function xx(e, t) {
      {
        var a = vi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = vd(a);
        if (u === null)
          return null;
        if (u.mode & Sn) {
          var s = Ie(a) || "Component";
          if (!l0[s]) {
            l0[s] = !0;
            var f = fn;
            try {
              dn(u), a.mode & Sn ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? dn(f) : en();
            }
          }
        }
        return u.stateNode;
      }
    }
    function D1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return _1(e, t, v, y, a, i, u, s, f);
    }
    function k1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = _1(a, i, g, e, u, s, f, p, v);
      x.context = x1(null);
      var b = x.current, z = Ra(), U = Po(b), H = Lu(z, U);
      return H.callback = t ?? null, No(b, H, U), z_(x, U, z), x;
    }
    function Pp(e, t, a, i) {
      Wi(t, e);
      var u = t.current, s = Ra(), f = Po(u);
      Td(f);
      var p = x1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && fn !== null && !i0 && (i0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(fn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (pr(y, u, f, s), Bh(y, u, f)), f;
    }
    function Nm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case te:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function Dx(e) {
      switch (e.tag) {
        case K: {
          var t = e.stateNode;
          if (qc(t)) {
            var a = iy(t);
            j_(t, a);
          }
          break;
        }
        case Te: {
          Uu(function() {
            var u = $a(e, Ue);
            if (u !== null) {
              var s = Ra();
              pr(u, e, Ue, s);
            }
          });
          var i = Ue;
          u0(e, i);
          break;
        }
      }
    }
    function O1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Pv(a.retryLane, t));
    }
    function u0(e, t) {
      O1(e, t);
      var a = e.alternate;
      a && O1(a, t);
    }
    function kx(e) {
      if (e.tag === Te) {
        var t = yu, a = $a(e, t);
        if (a !== null) {
          var i = Ra();
          pr(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function Ox(e) {
      if (e.tag === Te) {
        var t = Po(e), a = $a(e, t);
        if (a !== null) {
          var i = Ra();
          pr(a, e, t, i);
        }
        u0(e, t);
      }
    }
    function L1(e) {
      var t = md(e);
      return t === null ? null : t.stateNode;
    }
    var M1 = function(e) {
      return null;
    };
    function Lx(e) {
      return M1(e);
    }
    var N1 = function(e) {
      return !1;
    };
    function Mx(e) {
      return N1(e);
    }
    var z1 = null, U1 = null, A1 = null, F1 = null, j1 = null, H1 = null, V1 = null, P1 = null, B1 = null;
    {
      var $1 = function(e, t, a) {
        var i = t[a], u = wt(e) ? e.slice() : at({}, e);
        return a + 1 === t.length ? (wt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = $1(e[i], t, a + 1), u);
      }, Y1 = function(e, t) {
        return $1(e, t, 0);
      }, I1 = function(e, t, a, i) {
        var u = t[i], s = wt(e) ? e.slice() : at({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], wt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = I1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, Q1 = function(e, t, a) {
        if (t.length !== a.length) {
          Xe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Xe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return I1(e, t, a, 0);
      }, W1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = wt(e) ? e.slice() : at({}, e);
        return s[u] = W1(e[u], t, a + 1, i), s;
      }, G1 = function(e, t, a) {
        return W1(e, t, 0, a);
      }, o0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      z1 = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = G1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = $a(e, Ue);
          f !== null && pr(f, e, Ue, Kt);
        }
      }, U1 = function(e, t, a) {
        var i = o0(e, t);
        if (i !== null) {
          var u = Y1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = at({}, e.memoizedProps);
          var s = $a(e, Ue);
          s !== null && pr(s, e, Ue, Kt);
        }
      }, A1 = function(e, t, a, i) {
        var u = o0(e, t);
        if (u !== null) {
          var s = Q1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = $a(e, Ue);
          f !== null && pr(f, e, Ue, Kt);
        }
      }, F1 = function(e, t, a) {
        e.pendingProps = G1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Ue);
        i !== null && pr(i, e, Ue, Kt);
      }, j1 = function(e, t) {
        e.pendingProps = Y1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Ue);
        a !== null && pr(a, e, Ue, Kt);
      }, H1 = function(e, t, a) {
        e.pendingProps = Q1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Ue);
        i !== null && pr(i, e, Ue, Kt);
      }, V1 = function(e) {
        var t = $a(e, Ue);
        t !== null && pr(t, e, Ue, Kt);
      }, P1 = function(e) {
        M1 = e;
      }, B1 = function(e) {
        N1 = e;
      };
    }
    function Nx(e) {
      var t = vd(e);
      return t === null ? null : t.stateNode;
    }
    function zx(e) {
      return null;
    }
    function Ux() {
      return fn;
    }
    function Ax(e) {
      var t = e.findFiberByHostInstance, a = Ze.ReactCurrentDispatcher;
      return _v({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: z1,
        overrideHookStateDeletePath: U1,
        overrideHookStateRenamePath: A1,
        overrideProps: F1,
        overridePropsDeletePath: j1,
        overridePropsRenamePath: H1,
        setErrorHandler: P1,
        setSuspenseHandler: B1,
        scheduleUpdate: V1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Nx,
        findFiberByHostInstance: t || zx,
        // React Refresh
        findHostInstancesForRefresh: dx,
        scheduleRefresh: cx,
        scheduleRoot: fx,
        setRefreshHandler: sx,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Ux,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: a0
      });
    }
    var q1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function s0(e) {
      this._internalRoot = e;
    }
    zm.prototype.render = s0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Um(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gn) {
          var i = L1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Pp(e, t, null, null);
    }, zm.prototype.unmount = s0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        u1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Pp(null, e, null, null);
        }), G0(t);
      }
    };
    function Fx(e, t) {
      if (!Um(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      X1(e);
      var a = !1, i = !1, u = "", s = q1;
      t != null && (t.hydrate ? Xe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = D1(e, kh, null, a, i, u, s);
      Rh(f.current, e);
      var p = e.nodeType === gn ? e.parentNode : e;
      return qd(p), new s0(f);
    }
    function zm(e) {
      this._internalRoot = e;
    }
    function jx(e) {
      e && fy(e);
    }
    zm.prototype.unstable_scheduleHydration = jx;
    function Hx(e, t, a) {
      if (!Um(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      X1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = q1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = k1(t, null, e, kh, i, s, f, p, v);
      if (Rh(y.current, e), qd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          Ww(y, x);
        }
      return new zm(y);
    }
    function Um(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === pa || e.nodeType === Kf || !Fe));
    }
    function Bp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === pa || e.nodeType === Kf || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function X1(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), lp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var Vx = Ze.ReactCurrentOwner, K1;
    K1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = L1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = c0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function c0(e) {
      return e ? e.nodeType === pa ? e.documentElement : e.firstChild : null;
    }
    function Z1() {
    }
    function Px(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Nm(f);
            s.call(b);
          };
        }
        var f = k1(
          t,
          i,
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Z1
        );
        e._reactRootContainer = f, Rh(f.current, e);
        var p = e.nodeType === gn ? e.parentNode : e;
        return qd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Nm(g);
            y.call(b);
          };
        }
        var g = D1(
          e,
          Oo,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          Z1
        );
        e._reactRootContainer = g, Rh(g.current, e);
        var x = e.nodeType === gn ? e.parentNode : e;
        return qd(x), Uu(function() {
          Pp(t, g, a, i);
        }), g;
      }
    }
    function Bx(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Am(e, t, a, i, u) {
      K1(a), Bx(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Px(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Nm(f);
            p.call(v);
          };
        }
        Pp(t, f, e, u);
      }
      return Nm(f);
    }
    function $x(e) {
      {
        var t = Vx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Tt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : xx(e, "findDOMNode");
    }
    function Yx(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = lp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Am(null, e, t, !0, a);
    }
    function Ix(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = lp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Am(null, e, t, !1, a);
    }
    function Qx(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Bp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ku(e))
        throw new Error("parentComponent must be a valid React Component");
      return Am(e, t, a, !1, i);
    }
    function Wx(e) {
      if (!Bp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = lp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = c0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Am(null, null, e, !1, function() {
            e._reactRootContainer = null, G0(e);
          });
        }), !0;
      } else {
        {
          var u = c0(e), s = !!(u && Do(u)), f = e.nodeType === Yr && Bp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    vo(Dx), sy(kx), Kc(Ox), Yv(Fa), Iv(Cr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), id(XR), Ec(PS, H_, Uu);
    function Gx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Um(t))
        throw new Error("Target container is not a DOM element.");
      return _x(e, t, null, a);
    }
    function qx(e, t, a, i) {
      return Qx(e, t, a, i);
    }
    var f0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Th, Xu, iu, PS]
    };
    function Xx(e, t) {
      return f0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Fx(e, t);
    }
    function Kx(e, t, a) {
      return f0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Hx(e, t, a);
    }
    function Zx(e) {
      return u1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Jx = Ax({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: a0,
      rendererPackageName: "react-dom"
    });
    if (!Jx && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var J1 = window.location.protocol;
      /^(https?|file):$/.test(J1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (J1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = f0, Ga.createPortal = Gx, Ga.createRoot = Xx, Ga.findDOMNode = $x, Ga.flushSync = Zx, Ga.hydrate = Yx, Ga.hydrateRoot = Kx, Ga.render = Ix, Ga.unmountComponentAtNode = Wx, Ga.unstable_batchedUpdates = PS, Ga.unstable_renderSubtreeIntoContainer = qx, Ga.version = a0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ga;
}
var dR = {};
function pR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (dR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(pR);
    } catch (j) {
      console.error(j);
    }
  }
}
dR.NODE_ENV === "production" ? (pR(), y0.exports = oD()) : y0.exports = sD();
var cD = y0.exports, g0, fD = {}, jm = cD;
if (fD.NODE_ENV === "production")
  g0 = jm.createRoot, jm.hydrateRoot;
else {
  var uR = jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  g0 = function(j, X) {
    uR.usingClientEntryPoint = !0;
    try {
      return jm.createRoot(j, X);
    } finally {
      uR.usingClientEntryPoint = !1;
    }
  };
}
var dD = Object.defineProperty, pD = (j, X, M) => X in j ? dD(j, X, { enumerable: !0, configurable: !0, writable: !0, value: M }) : j[X] = M, Hm = (j, X, M) => (pD(j, typeof X != "symbol" ? X + "" : X, M), M);
const vD = {
  stringify: (j) => j,
  parse: (j) => j
}, hD = {
  stringify: (j) => `${j}`,
  parse: (j) => parseFloat(j)
}, mD = {
  stringify: (j) => j ? "true" : "false",
  parse: (j) => /^[ty1-9]/i.test(j)
}, yD = {
  stringify: (j) => j.name,
  parse: (j, X) => {
    const M = (() => {
      if (typeof window < "u" && j in window)
        return window[j];
      if (typeof global < "u" && j in global)
        return global[j];
    })();
    return typeof M == "function" ? M.bind(X) : void 0;
  }
}, gD = {
  stringify: (j) => JSON.stringify(j),
  parse: (j) => JSON.parse(j)
}, v0 = {
  string: vD,
  number: hD,
  boolean: mD,
  function: yD,
  json: gD
}, h0 = Symbol.for("r2wc.render"), Vm = Symbol.for("r2wc.connected"), cc = Symbol.for("r2wc.context"), Yo = Symbol.for("r2wc.props");
function SD(j, X, M) {
  var Ze, Ct, Yt;
  X.props || (X.props = j.propTypes ? Object.keys(j.propTypes) : []);
  const Xe = (Array.isArray(X.props) ? X.props.slice() : Object.keys(X.props)).filter((Re) => Re !== "container"), S = {}, nt = {}, ke = {};
  for (const Re of Xe) {
    S[Re] = Array.isArray(X.props) ? "string" : X.props[Re];
    const K = ED(Re);
    nt[Re] = K, ke[K] = Re;
  }
  class ue extends HTMLElement {
    constructor() {
      super(), Hm(this, Ze, !0), Hm(this, Ct), Hm(this, Yt, {}), Hm(this, "container"), X.shadow ? this.container = this.attachShadow({
        mode: X.shadow
      }) : this.container = this, this[Yo].container = this.container;
      for (const K of Xe) {
        const Oe = nt[K], te = this.getAttribute(Oe), oe = S[K], Qe = v0[oe];
        te && Qe != null && Qe.parse && (this[Yo][K] = Qe.parse(te, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(ke);
    }
    connectedCallback() {
      this[Vm] = !0, this[h0]();
    }
    disconnectedCallback() {
      this[Vm] = !1, this[cc] && M.unmount(this[cc]), delete this[cc];
    }
    attributeChangedCallback(K, Oe, te) {
      const oe = ke[K], Qe = S[oe], sn = v0[Qe];
      oe in S && sn != null && sn.parse && (this[Yo][oe] = sn.parse(te, this), this[h0]());
    }
    [(Ze = Vm, Ct = cc, Yt = Yo, h0)]() {
      this[Vm] && (this[cc] ? M.update(this[cc], this[Yo]) : this[cc] = M.mount(
        this.container,
        j,
        this[Yo]
      ));
    }
  }
  for (const Re of Xe) {
    const K = nt[Re], Oe = S[Re];
    Object.defineProperty(ue.prototype, Re, {
      enumerable: !0,
      configurable: !0,
      get() {
        return this[Yo][Re];
      },
      set(te) {
        this[Yo][Re] = te;
        const oe = v0[Oe];
        if (oe != null && oe.stringify) {
          const Qe = oe.stringify(te);
          this.getAttribute(K) !== Qe && this.setAttribute(K, Qe);
        }
      }
    });
  }
  return ue;
}
function ED(j = "") {
  return j.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function CD(j, X, M) {
  const Ze = g0(j), Ct = cR.createElement(X, M);
  return Ze.render(Ct), {
    root: Ze,
    ReactComponent: X
  };
}
function RD({ root: j, ReactComponent: X }, M) {
  const Ze = cR.createElement(X, M);
  j.render(Ze);
}
function TD({ root: j }) {
  j.unmount();
}
function vR(j, X = {}) {
  return SD(j, X, { mount: CD, update: RD, unmount: TD });
}
var S0 = { exports: {} }, Yp = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oR;
function wD() {
  if (oR)
    return Yp;
  oR = 1;
  var j = Qf, X = Symbol.for("react.element"), M = Symbol.for("react.fragment"), Ze = Object.prototype.hasOwnProperty, Ct = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(S, nt, ke) {
    var ue, Re = {}, K = null, Oe = null;
    ke !== void 0 && (K = "" + ke), nt.key !== void 0 && (K = "" + nt.key), nt.ref !== void 0 && (Oe = nt.ref);
    for (ue in nt)
      Ze.call(nt, ue) && !Yt.hasOwnProperty(ue) && (Re[ue] = nt[ue]);
    if (S && S.defaultProps)
      for (ue in nt = S.defaultProps, nt)
        Re[ue] === void 0 && (Re[ue] = nt[ue]);
    return { $$typeof: X, type: S, key: K, ref: Oe, props: Re, _owner: Ct.current };
  }
  return Yp.Fragment = M, Yp.jsx = Xe, Yp.jsxs = Xe, Yp;
}
var Ip = {}, sR;
function bD() {
  if (sR)
    return Ip;
  sR = 1;
  var j = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return j.NODE_ENV !== "production" && function() {
    var X = Qf, M = Symbol.for("react.element"), Ze = Symbol.for("react.portal"), Ct = Symbol.for("react.fragment"), Yt = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), nt = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), oe = Symbol.iterator, Qe = "@@iterator";
    function sn(R) {
      if (R === null || typeof R != "object")
        return null;
      var Q = oe && R[oe] || R[Qe];
      return typeof Q == "function" ? Q : null;
    }
    var ln = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function lt(R) {
      {
        for (var Q = arguments.length, ne = new Array(Q > 1 ? Q - 1 : 0), ie = 1; ie < Q; ie++)
          ne[ie - 1] = arguments[ie];
        Ve("error", R, ne);
      }
    }
    function Ve(R, Q, ne) {
      {
        var ie = ln.ReactDebugCurrentFrame, st = ie.getStackAddendum();
        st !== "" && (Q += "%s", ne = ne.concat([st]));
        var yt = ne.map(function(tt) {
          return String(tt);
        });
        yt.unshift("Warning: " + Q), Function.prototype.apply.call(console[R], console, yt);
      }
    }
    var _t = !1, Te = !1, ct = !1, Ye = !1, wn = !1, mn;
    mn = Symbol.for("react.module.reference");
    function It(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === Ct || R === Xe || wn || R === Yt || R === ue || R === Re || Ye || R === te || _t || Te || ct || typeof R == "object" && R !== null && (R.$$typeof === Oe || R.$$typeof === K || R.$$typeof === S || R.$$typeof === nt || R.$$typeof === ke || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === mn || R.getModuleId !== void 0));
    }
    function mt(R, Q, ne) {
      var ie = R.displayName;
      if (ie)
        return ie;
      var st = Q.displayName || Q.name || "";
      return st !== "" ? ne + "(" + st + ")" : ne;
    }
    function Zt(R) {
      return R.displayName || "Context";
    }
    function Be(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && lt("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case Ct:
          return "Fragment";
        case Ze:
          return "Portal";
        case Xe:
          return "Profiler";
        case Yt:
          return "StrictMode";
        case ue:
          return "Suspense";
        case Re:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case nt:
            var Q = R;
            return Zt(Q) + ".Consumer";
          case S:
            var ne = R;
            return Zt(ne._context) + ".Provider";
          case ke:
            return mt(R, R.render, "ForwardRef");
          case K:
            var ie = R.displayName || null;
            return ie !== null ? ie : Be(R.type) || "Memo";
          case Oe: {
            var st = R, yt = st._payload, tt = st._init;
            try {
              return Be(tt(yt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Je = Object.assign, Rt = 0, et, $, he, T, Y, me, Fe;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function ft() {
      {
        if (Rt === 0) {
          et = console.log, $ = console.info, he = console.warn, T = console.error, Y = console.group, me = console.groupCollapsed, Fe = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: je,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        Rt++;
      }
    }
    function ut() {
      {
        if (Rt--, Rt === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Je({}, R, {
              value: et
            }),
            info: Je({}, R, {
              value: $
            }),
            warn: Je({}, R, {
              value: he
            }),
            error: Je({}, R, {
              value: T
            }),
            group: Je({}, R, {
              value: Y
            }),
            groupCollapsed: Je({}, R, {
              value: me
            }),
            groupEnd: Je({}, R, {
              value: Fe
            })
          });
        }
        Rt < 0 && lt("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var dt = ln.ReactCurrentDispatcher, ot;
    function Jt(R, Q, ne) {
      {
        if (ot === void 0)
          try {
            throw Error();
          } catch (st) {
            var ie = st.stack.trim().match(/\n( *(at )?)/);
            ot = ie && ie[1] || "";
          }
        return `
` + ot + R;
      }
    }
    var Zn = !1, Jn;
    {
      var Fr = typeof WeakMap == "function" ? WeakMap : Map;
      Jn = new Fr();
    }
    function vr(R, Q) {
      if (!R || Zn)
        return "";
      {
        var ne = Jn.get(R);
        if (ne !== void 0)
          return ne;
      }
      var ie;
      Zn = !0;
      var st = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var yt;
      yt = dt.current, dt.current = null, ft();
      try {
        if (Q) {
          var tt = function() {
            throw Error();
          };
          if (Object.defineProperty(tt.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(tt, []);
            } catch (Vr) {
              ie = Vr;
            }
            Reflect.construct(R, [], tt);
          } else {
            try {
              tt.call();
            } catch (Vr) {
              ie = Vr;
            }
            R.call(tt.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Vr) {
            ie = Vr;
          }
          R();
        }
      } catch (Vr) {
        if (Vr && ie && typeof Vr.stack == "string") {
          for (var Le = Vr.stack.split(`
`), Un = ie.stack.split(`
`), Wt = Le.length - 1, Gt = Un.length - 1; Wt >= 1 && Gt >= 0 && Le[Wt] !== Un[Gt]; )
            Gt--;
          for (; Wt >= 1 && Gt >= 0; Wt--, Gt--)
            if (Le[Wt] !== Un[Gt]) {
              if (Wt !== 1 || Gt !== 1)
                do
                  if (Wt--, Gt--, Gt < 0 || Le[Wt] !== Un[Gt]) {
                    var gr = `
` + Le[Wt].replace(" at new ", " at ");
                    return R.displayName && gr.includes("<anonymous>") && (gr = gr.replace("<anonymous>", R.displayName)), typeof R == "function" && Jn.set(R, gr), gr;
                  }
                while (Wt >= 1 && Gt >= 0);
              break;
            }
        }
      } finally {
        Zn = !1, dt.current = yt, ut(), Error.prepareStackTrace = st;
      }
      var oi = R ? R.displayName || R.name : "", qt = oi ? Jt(oi) : "";
      return typeof R == "function" && Jn.set(R, qt), qt;
    }
    function yn(R, Q, ne) {
      return vr(R, !1);
    }
    function er(R) {
      var Q = R.prototype;
      return !!(Q && Q.isReactComponent);
    }
    function Hn(R, Q, ne) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return vr(R, er(R));
      if (typeof R == "string")
        return Jt(R);
      switch (R) {
        case ue:
          return Jt("Suspense");
        case Re:
          return Jt("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case ke:
            return yn(R.render);
          case K:
            return Hn(R.type, Q, ne);
          case Oe: {
            var ie = R, st = ie._payload, yt = ie._init;
            try {
              return Hn(yt(st), Q, ne);
            } catch {
            }
          }
        }
      return "";
    }
    var Nn = Object.prototype.hasOwnProperty, zn = {}, Tr = ln.ReactDebugCurrentFrame;
    function hr(R) {
      if (R) {
        var Q = R._owner, ne = Hn(R.type, R._source, Q ? Q.type : null);
        Tr.setExtraStackFrame(ne);
      } else
        Tr.setExtraStackFrame(null);
    }
    function Vn(R, Q, ne, ie, st) {
      {
        var yt = Function.call.bind(Nn);
        for (var tt in R)
          if (yt(R, tt)) {
            var Le = void 0;
            try {
              if (typeof R[tt] != "function") {
                var Un = Error((ie || "React class") + ": " + ne + " type `" + tt + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[tt] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              Le = R[tt](Q, tt, ie, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Wt) {
              Le = Wt;
            }
            Le && !(Le instanceof Error) && (hr(st), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", ne, tt, typeof Le), hr(null)), Le instanceof Error && !(Le.message in zn) && (zn[Le.message] = !0, hr(st), lt("Failed %s type: %s", ne, Le.message), hr(null));
          }
      }
    }
    var la = Array.isArray;
    function ua(R) {
      return la(R);
    }
    function mr(R) {
      {
        var Q = typeof Symbol == "function" && Symbol.toStringTag, ne = Q && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return ne;
      }
    }
    function oa(R) {
      try {
        return tr(R), !1;
      } catch {
        return !0;
      }
    }
    function tr(R) {
      return "" + R;
    }
    function wr(R) {
      if (oa(R))
        return lt("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(R)), tr(R);
    }
    var un = ln.ReactCurrentOwner, sa = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ca, fa, ae;
    ae = {};
    function De(R) {
      if (Nn.call(R, "ref")) {
        var Q = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function rt(R) {
      if (Nn.call(R, "key")) {
        var Q = Object.getOwnPropertyDescriptor(R, "key").get;
        if (Q && Q.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function Mt(R, Q) {
      if (typeof R.ref == "string" && un.current && Q && un.current.stateNode !== Q) {
        var ne = Be(un.current.type);
        ae[ne] || (lt('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Be(un.current.type), R.ref), ae[ne] = !0);
      }
    }
    function xt(R, Q) {
      {
        var ne = function() {
          ca || (ca = !0, lt("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: ne,
          configurable: !0
        });
      }
    }
    function bn(R, Q) {
      {
        var ne = function() {
          fa || (fa = !0, lt("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", Q));
        };
        ne.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: ne,
          configurable: !0
        });
      }
    }
    var cn = function(R, Q, ne, ie, st, yt, tt) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: M,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: ne,
        props: tt,
        // Record the component responsible for creating this element.
        _owner: yt
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: st
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function yr(R, Q, ne, ie, st) {
      {
        var yt, tt = {}, Le = null, Un = null;
        ne !== void 0 && (wr(ne), Le = "" + ne), rt(Q) && (wr(Q.key), Le = "" + Q.key), De(Q) && (Un = Q.ref, Mt(Q, st));
        for (yt in Q)
          Nn.call(Q, yt) && !sa.hasOwnProperty(yt) && (tt[yt] = Q[yt]);
        if (R && R.defaultProps) {
          var Wt = R.defaultProps;
          for (yt in Wt)
            tt[yt] === void 0 && (tt[yt] = Wt[yt]);
        }
        if (Le || Un) {
          var Gt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Le && xt(tt, Gt), Un && bn(tt, Gt);
        }
        return cn(R, Le, Un, st, ie, un.current, tt);
      }
    }
    var At = ln.ReactCurrentOwner, Qn = ln.ReactDebugCurrentFrame;
    function Nt(R) {
      if (R) {
        var Q = R._owner, ne = Hn(R.type, R._source, Q ? Q.type : null);
        Qn.setExtraStackFrame(ne);
      } else
        Qn.setExtraStackFrame(null);
    }
    var Qt;
    Qt = !1;
    function qa(R) {
      return typeof R == "object" && R !== null && R.$$typeof === M;
    }
    function ba() {
      {
        if (At.current) {
          var R = Be(At.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function cl(R) {
      {
        if (R !== void 0) {
          var Q = R.fileName.replace(/^.*[\\\/]/, ""), ne = R.lineNumber;
          return `

Check your code at ` + Q + ":" + ne + ".";
        }
        return "";
      }
    }
    var Gl = {};
    function ql(R) {
      {
        var Q = ba();
        if (!Q) {
          var ne = typeof R == "string" ? R : R.displayName || R.name;
          ne && (Q = `

Check the top-level render call using <` + ne + ">.");
        }
        return Q;
      }
    }
    function fl(R, Q) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var ne = ql(Q);
        if (Gl[ne])
          return;
        Gl[ne] = !0;
        var ie = "";
        R && R._owner && R._owner !== At.current && (ie = " It was passed a child from " + Be(R._owner.type) + "."), Nt(R), lt('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ne, ie), Nt(null);
      }
    }
    function Xa(R, Q) {
      {
        if (typeof R != "object")
          return;
        if (ua(R))
          for (var ne = 0; ne < R.length; ne++) {
            var ie = R[ne];
            qa(ie) && fl(ie, Q);
          }
        else if (qa(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var st = sn(R);
          if (typeof st == "function" && st !== R.entries)
            for (var yt = st.call(R), tt; !(tt = yt.next()).done; )
              qa(tt.value) && fl(tt.value, Q);
        }
      }
    }
    function Ka(R) {
      {
        var Q = R.type;
        if (Q == null || typeof Q == "string")
          return;
        var ne;
        if (typeof Q == "function")
          ne = Q.propTypes;
        else if (typeof Q == "object" && (Q.$$typeof === ke || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        Q.$$typeof === K))
          ne = Q.propTypes;
        else
          return;
        if (ne) {
          var ie = Be(Q);
          Vn(ne, R.props, "prop", ie, R);
        } else if (Q.PropTypes !== void 0 && !Qt) {
          Qt = !0;
          var st = Be(Q);
          lt("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", st || "Unknown");
        }
        typeof Q.getDefaultProps == "function" && !Q.getDefaultProps.isReactClassApproved && lt("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _a(R) {
      {
        for (var Q = Object.keys(R.props), ne = 0; ne < Q.length; ne++) {
          var ie = Q[ne];
          if (ie !== "children" && ie !== "key") {
            Nt(R), lt("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), Nt(null);
            break;
          }
        }
        R.ref !== null && (Nt(R), lt("Invalid attribute `ref` supplied to `React.Fragment`."), Nt(null));
      }
    }
    function Li(R, Q, ne, ie, st, yt) {
      {
        var tt = It(R);
        if (!tt) {
          var Le = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = cl(st);
          Un ? Le += Un : Le += ba();
          var Wt;
          R === null ? Wt = "null" : ua(R) ? Wt = "array" : R !== void 0 && R.$$typeof === M ? (Wt = "<" + (Be(R.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : Wt = typeof R, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Wt, Le);
        }
        var Gt = yr(R, Q, ne, st, yt);
        if (Gt == null)
          return Gt;
        if (tt) {
          var gr = Q.children;
          if (gr !== void 0)
            if (ie)
              if (ua(gr)) {
                for (var oi = 0; oi < gr.length; oi++)
                  Xa(gr[oi], R);
                Object.freeze && Object.freeze(gr);
              } else
                lt("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xa(gr, R);
        }
        return R === Ct ? _a(Gt) : Ka(Gt), Gt;
      }
    }
    function jr(R, Q, ne) {
      return Li(R, Q, ne, !0);
    }
    function Hr(R, Q, ne) {
      return Li(R, Q, ne, !1);
    }
    var da = Hr, Mi = jr;
    Ip.Fragment = Ct, Ip.jsx = da, Ip.jsxs = Mi;
  }(), Ip;
}
var _D = {};
_D.NODE_ENV === "production" ? S0.exports = wD() : S0.exports = bD();
var Wp = S0.exports;
const xD = ({ initialCount: j = 0 }) => {
  const [X, M] = Qf.useState(j);
  return /* @__PURE__ */ Wp.jsxs(Wp.Fragment, { children: [
    /* @__PURE__ */ Wp.jsxs("h1", { children: [
      "Count: ",
      X
    ] }),
    /* @__PURE__ */ Wp.jsx("button", { onClick: () => M((Ze) => ++Ze), children: "Increment" })
  ] });
}, DD = ({ name: j = "World" }) => /* @__PURE__ */ Wp.jsxs("h1", { children: [
  "Hello, ",
  j,
  "!"
] }), kD = vR(DD, {
  props: {
    name: "string"
  }
}), OD = vR(xD, {
  props: {
    initialCount: "number"
  }
});
customElements.define("web-greeting", kD);
customElements.define("web-counter", OD);
export {
  OD as WebCounter,
  kD as WebGreeting
};
