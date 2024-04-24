function eD(V) {
  return V && V.__esModule && Object.prototype.hasOwnProperty.call(V, "default") ? V.default : V;
}
var h0 = { exports: {} }, Et = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var J1;
function tD() {
  if (J1)
    return Et;
  J1 = 1;
  var V = Symbol.for("react.element"), X = Symbol.for("react.portal"), z = Symbol.for("react.fragment"), tt = Symbol.for("react.strict_mode"), Ct = Symbol.for("react.profiler"), Yt = Symbol.for("react.provider"), Xe = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), nt = Symbol.for("react.suspense"), ke = Symbol.for("react.memo"), ue = Symbol.for("react.lazy"), Re = Symbol.iterator;
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
    return { $$typeof: V, type: T, key: ft, ref: ut, props: je, _owner: Te.current };
  }
  function wn(T, Y) {
    return { $$typeof: V, type: T.type, key: Y, ref: T.ref, props: T.props, _owner: T._owner };
  }
  function mn(T) {
    return typeof T == "object" && T !== null && T.$$typeof === V;
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
            case V:
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
  function Ze(T, Y, me) {
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
  var Je = { current: null }, $ = { transition: null }, he = { ReactCurrentDispatcher: Je, ReactCurrentBatchConfig: $, ReactCurrentOwner: Te };
  return Et.Children = { map: Ze, forEach: function(T, Y, me) {
    Ze(T, function() {
      Y.apply(this, arguments);
    }, me);
  }, count: function(T) {
    var Y = 0;
    return Ze(T, function() {
      Y++;
    }), Y;
  }, toArray: function(T) {
    return Ze(T, function(Y) {
      return Y;
    }) || [];
  }, only: function(T) {
    if (!mn(T))
      throw Error("React.Children.only expected to receive a single React element child.");
    return T;
  } }, Et.Component = Qe, Et.Fragment = z, Et.Profiler = Ct, Et.PureComponent = ln, Et.StrictMode = tt, Et.Suspense = nt, Et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = he, Et.cloneElement = function(T, Y, me) {
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
    return { $$typeof: V, type: T.type, key: je, ref: ft, props: Fe, _owner: ut };
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
    return Je.current.useCallback(T, Y);
  }, Et.useContext = function(T) {
    return Je.current.useContext(T);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(T) {
    return Je.current.useDeferredValue(T);
  }, Et.useEffect = function(T, Y) {
    return Je.current.useEffect(T, Y);
  }, Et.useId = function() {
    return Je.current.useId();
  }, Et.useImperativeHandle = function(T, Y, me) {
    return Je.current.useImperativeHandle(T, Y, me);
  }, Et.useInsertionEffect = function(T, Y) {
    return Je.current.useInsertionEffect(T, Y);
  }, Et.useLayoutEffect = function(T, Y) {
    return Je.current.useLayoutEffect(T, Y);
  }, Et.useMemo = function(T, Y) {
    return Je.current.useMemo(T, Y);
  }, Et.useReducer = function(T, Y, me) {
    return Je.current.useReducer(T, Y, me);
  }, Et.useRef = function(T) {
    return Je.current.useRef(T);
  }, Et.useState = function(T) {
    return Je.current.useState(T);
  }, Et.useSyncExternalStore = function(T, Y, me) {
    return Je.current.useSyncExternalStore(T, Y, me);
  }, Et.useTransition = function() {
    return Je.current.useTransition();
  }, Et.version = "18.2.0", Et;
}
var Ip = { exports: {} };
Ip.exports;
var eR;
function nD() {
  return eR || (eR = 1, function(V, X) {
    var z = {};
    /**
     * @license React
     * react.development.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    z.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var tt = "18.2.0", Ct = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Xe = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), nt = Symbol.for("react.profiler"), ke = Symbol.for("react.provider"), ue = Symbol.for("react.context"), Re = Symbol.for("react.forward_ref"), K = Symbol.for("react.suspense"), Oe = Symbol.for("react.suspense_list"), te = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), Qe = Symbol.for("react.offscreen"), sn = Symbol.iterator, ln = "@@iterator";
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
      var It = !1, mt = !1, Zt = !1, Be = !1, Ze = !1, Rt = {
        ReactCurrentDispatcher: Ve,
        ReactCurrentBatchConfig: _t,
        ReactCurrentOwner: ct
      };
      Rt.ReactDebugCurrentFrame = Ye, Rt.ReactCurrentActQueue = Te;
      function Je(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          he("warn", h, M);
        }
      }
      function $(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), F = 1; F < C; F++)
            M[F - 1] = arguments[F];
          he("error", h, M);
        }
      }
      function he(h, C, M) {
        {
          var F = Rt.ReactDebugCurrentFrame, Z = F.getStackAddendum();
          Z !== "" && (C += "%s", M = M.concat([Z]));
          var Ee = M.map(function(fe) {
            return String(fe);
          });
          Ee.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, Ee);
        }
      }
      var T = {};
      function Y(h, C) {
        {
          var M = h.constructor, F = M && (M.displayName || M.name) || "ReactClass", Z = F + "." + C;
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
        enqueueForceUpdate: function(h, C, M) {
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
        enqueueReplaceState: function(h, C, M, F) {
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
        enqueueSetState: function(h, C, M, F) {
          Y(h, "setState");
        }
      }, Fe = Object.assign, je = {};
      Object.freeze(je);
      function ft(h, C, M) {
        this.props = h, this.context = C, this.refs = je, this.updater = M || me;
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
              Je("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var ot in ut)
          ut.hasOwnProperty(ot) && dt(ot, ut[ot]);
      }
      function Jt() {
      }
      Jt.prototype = ft.prototype;
      function Zn(h, C, M) {
        this.props = h, this.context = C, this.refs = je, this.updater = M || me;
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
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
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
      function Tr(h, C, M) {
        var F = h.displayName;
        if (F)
          return F;
        var Z = C.displayName || C.name || "";
        return Z !== "" ? M + "(" + Z + ")" : M;
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
              var M = h;
              return hr(M._context) + ".Provider";
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
        var M = function() {
          mr || (mr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function ca(h, C) {
        var M = function() {
          oa || (oa = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function fa(h) {
        if (typeof h.ref == "string" && ct.current && h.__self && ct.current.stateNode !== h.__self) {
          var C = Vn(ct.current.type);
          tr[C] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), tr[C] = !0);
        }
      }
      var ae = function(h, C, M, F, Z, Ee, fe) {
        var Pe = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: Ct,
          // Built-in properties that belong on the element
          type: h,
          key: C,
          ref: M,
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
      function De(h, C, M) {
        var F, Z = {}, Ee = null, fe = null, Pe = null, it = null;
        if (C != null) {
          wr(C) && (fe = C.ref, fa(C)), un(C) && (zn(C.key), Ee = "" + C.key), Pe = C.__self === void 0 ? null : C.__self, it = C.__source === void 0 ? null : C.__source;
          for (F in C)
            la.call(C, F) && !ua.hasOwnProperty(F) && (Z[F] = C[F]);
        }
        var zt = arguments.length - 2;
        if (zt === 1)
          Z.children = M;
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
        var M = ae(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function Mt(h, C, M) {
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
          Z.children = M;
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
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, F = h.replace(C, function(Z) {
          return M[Z];
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
      function qa(h, C, M, F, Z) {
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
            zt != null && (Ft = Nt(zt) + "/"), qa(it, C, Ft, "", function(Qf) {
              return Qf;
            });
          } else
            it != null && (xt(it) && (it.key && (!Pe || Pe.key !== it.key) && zn(it.key), it = rt(
              it,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              M + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
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
            jt = h[gl], Ht = wt + Qt(jt, gl), tn += qa(jt, C, M, Ht, Z);
        else {
          var Qu = lt(h);
          if (typeof Qu == "function") {
            var ns = h;
            Qu === ns.entries && (At || Je("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), At = !0);
            for (var rs = Qu.call(ns), ji, as = 0; !(ji = rs.next()).done; )
              jt = ji.value, Ht = wt + Qt(jt, as++), tn += qa(jt, C, M, Ht, Z);
          } else if (Ee === "object") {
            var is = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (is === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : is) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return tn;
      }
      function ba(h, C, M) {
        if (h == null)
          return h;
        var F = [], Z = 0;
        return qa(h, F, "", "", function(Ee) {
          return C.call(M, Ee, Z++);
        }), F;
      }
      function cl(h) {
        var C = 0;
        return ba(h, function() {
          C++;
        }), C;
      }
      function Gl(h, C, M) {
        ba(h, function() {
          C.apply(this, arguments);
        }, M);
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
        var M = !1, F = !1, Z = !1;
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
                return M || (M = !0, $("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(fe) {
                Z || (Je("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", fe), Z = !0);
              }
            }
          }), C.Consumer = Ee;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var Ka = -1, _a = 0, Li = 1, jr = 2;
      function Hr(h) {
        if (h._status === Ka) {
          var C = h._result, M = C();
          if (M.then(function(Ee) {
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
            F._status = _a, F._result = M;
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
        }, M = {
          $$typeof: oe,
          _payload: C,
          _init: Hr
        };
        {
          var F, Z;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return F;
              },
              set: function(Ee) {
                $("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), F = Ee, Object.defineProperty(M, "defaultProps", {
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
                $("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), Z = Ee, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Mi(h) {
        h != null && h.$$typeof === te ? $("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? $("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && $("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && $("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Re,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(F) {
              M = F, !h.name && !h.displayName && (h.displayName = F);
            }
          });
        }
        return C;
      }
      var R;
      R = Symbol.for("react.module.reference");
      function Q(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Xe || h === nt || Ze || h === S || h === K || h === Oe || Be || h === Qe || It || mt || Zt || typeof h == "object" && h !== null && (h.$$typeof === oe || h.$$typeof === te || h.$$typeof === ke || h.$$typeof === ue || h.$$typeof === Re || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        h.$$typeof === R || h.getModuleId !== void 0));
      }
      function ne(h, C) {
        Q(h) || $("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: te,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var F;
          Object.defineProperty(M, "displayName", {
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
        return M;
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
          var M = h._context;
          M.Consumer === h ? $("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && $("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function yt(h) {
        var C = ie();
        return C.useState(h);
      }
      function et(h, C, M) {
        var F = ie();
        return F.useReducer(h, C, M);
      }
      function Le(h) {
        var C = ie();
        return C.useRef(h);
      }
      function Un(h, C) {
        var M = ie();
        return M.useEffect(h, C);
      }
      function Wt(h, C) {
        var M = ie();
        return M.useInsertionEffect(h, C);
      }
      function Gt(h, C) {
        var M = ie();
        return M.useLayoutEffect(h, C);
      }
      function gr(h, C) {
        var M = ie();
        return M.useCallback(h, C);
      }
      function oi(h, C) {
        var M = ie();
        return M.useMemo(h, C);
      }
      function qt(h, C, M) {
        var F = ie();
        return F.useImperativeHandle(h, C, M);
      }
      function Vr(h, C) {
        {
          var M = ie();
          return M.useDebugValue(h, C);
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
      function Xl(h, C, M) {
        var F = ie();
        return F.useSyncExternalStore(h, C, M);
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
      function pl(h, C, M) {
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
          var M = Zl.get(h);
          if (M !== void 0)
            return M;
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
      function Xo(h, C, M) {
        return vl(h, !1);
      }
      function Ko(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function ht(h, C, M) {
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
              return ht(h.type, C, M);
            case oe: {
              var F = h, Z = F._payload, Ee = F._init;
              try {
                return ht(Ee(Z), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var Zo = {}, Hu = Rt.ReactDebugCurrentFrame;
      function hl(h) {
        if (h) {
          var C = h._owner, M = ht(h.type, h._source, C ? C.type : null);
          Hu.setExtraStackFrame(M);
        } else
          Hu.setExtraStackFrame(null);
      }
      function Jo(h, C, M, F, Z) {
        {
          var Ee = Function.call.bind(la);
          for (var fe in h)
            if (Ee(h, fe)) {
              var Pe = void 0;
              try {
                if (typeof h[fe] != "function") {
                  var it = Error((F || "React class") + ": " + M + " type `" + fe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[fe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw it.name = "Invariant Violation", it;
                }
                Pe = h[fe](C, fe, F, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (zt) {
                Pe = zt;
              }
              Pe && !(Pe instanceof Error) && (hl(Z), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", F || "React class", M, fe, typeof Pe), hl(null)), Pe instanceof Error && !(Pe.message in Zo) && (Zo[Pe.message] = !0, hl(Z), $("Failed %s type: %s", M, Pe.message), hl(null));
            }
        }
      }
      function Tt(h) {
        if (h) {
          var C = h._owner, M = ht(h.type, h._source, C ? C.type : null);
          mn(M);
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
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
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
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function Da(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Br(C);
          if (!fn[M]) {
            fn[M] = !0;
            var F = "";
            h && h._owner && h._owner !== ct.current && (F = " It was passed a child from " + Vn(h._owner.type) + "."), Tt(h), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, F), Tt(null);
          }
        }
      }
      function ml(h, C) {
        if (typeof h == "object") {
          if (yn(h))
            for (var M = 0; M < h.length; M++) {
              var F = h[M];
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
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Re || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          C.$$typeof === te))
            M = C.propTypes;
          else
            return;
          if (M) {
            var F = Vn(C);
            Jo(M, h.props, "prop", F, h);
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
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var F = C[M];
            if (F !== "children" && F !== "key") {
              Tt(h), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", F), Tt(null);
              break;
            }
          }
          h.ref !== null && (Tt(h), $("Invalid attribute `ref` supplied to `React.Fragment`."), Tt(null));
        }
      }
      function es(h, C, M) {
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
        return C.type = h, nr || (nr = !0, Je("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return Je("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Ja(h, C, M) {
        for (var F = Mt.apply(this, arguments), Z = 2; Z < arguments.length; Z++)
          ml(arguments[Z], F.type);
        return en(F), F;
      }
      function Pu(h, C) {
        var M = _t.transition;
        _t.transition = {};
        var F = _t.transition;
        _t.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (_t.transition = M, M === null && F._updatedFibers) {
            var Z = F._updatedFibers.size;
            Z > 10 && Je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), F._updatedFibers.clear();
          }
        }
      }
      var tu = !1, nu = null;
      function yl(h) {
        if (nu === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = V && V[C];
            nu = M.call(V, "timers").setImmediate;
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
          var M = Te.isBatchingLegacy, F;
          try {
            if (Te.isBatchingLegacy = !0, F = h(), !M && Te.didScheduleLegacyUpdate) {
              var Z = Te.current;
              Z !== null && (Te.didScheduleLegacyUpdate = !1, Fi(Z));
            }
          } catch (Ht) {
            throw Ai(C), Ht;
          } finally {
            Te.isBatchingLegacy = M;
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
      function $u(h, C, M) {
        {
          var F = Te.current;
          if (F !== null)
            try {
              Fi(F), yl(function() {
                F.length === 0 ? (Te.current = null, C(h)) : $u(h, C, M);
              });
            } catch (Z) {
              M(Z);
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
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
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
      X.Children = Iu, X.Component = ft, X.Fragment = Xe, X.Profiler = nt, X.PureComponent = Zn, X.StrictMode = S, X.Suspense = K, X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rt, X.cloneElement = ts, X.createContext = Xa, X.createElement = Yu, X.createFactory = ei, X.createRef = Fr, X.forwardRef = Mi, X.isValidElement = xt, X.lazy = da, X.memo = ne, X.startTransition = Pu, X.unstable_act = Bu, X.useCallback = gr, X.useContext = st, X.useDebugValue = Vr, X.useDeferredValue = si, X.useEffect = Un, X.useId = at, X.useImperativeHandle = qt, X.useInsertionEffect = Wt, X.useLayoutEffect = Gt, X.useMemo = oi, X.useReducer = et, X.useRef = Le, X.useState = yt, X.useSyncExternalStore = Xl, X.useTransition = Io, X.version = tt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ip, Ip.exports)), Ip.exports;
}
var rD = {};
rD.NODE_ENV === "production" ? h0.exports = tD() : h0.exports = nD();
var Qp = h0.exports;
const sR = /* @__PURE__ */ eD(Qp);
var m0 = { exports: {} }, Wa = {}, Am = { exports: {} }, f0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tR;
function aD() {
  return tR || (tR = 1, function(V) {
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
    function z($) {
      return $.length === 0 ? null : $[0];
    }
    function tt($) {
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
      V.unstable_now = function() {
        return Yt.now();
      };
    } else {
      var Xe = Date, S = Xe.now();
      V.unstable_now = function() {
        return Xe.now() - S;
      };
    }
    var nt = [], ke = [], ue = 1, Re = null, K = 3, Oe = !1, te = !1, oe = !1, Qe = typeof setTimeout == "function" ? setTimeout : null, sn = typeof clearTimeout == "function" ? clearTimeout : null, ln = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function lt($) {
      for (var he = z(ke); he !== null; ) {
        if (he.callback === null)
          tt(ke);
        else if (he.startTime <= $)
          tt(ke), he.sortIndex = he.expirationTime, X(nt, he);
        else
          break;
        he = z(ke);
      }
    }
    function Ve($) {
      if (oe = !1, lt($), !te)
        if (z(nt) !== null)
          te = !0, Rt(_t);
        else {
          var he = z(ke);
          he !== null && Je(Ve, he.startTime - $);
        }
    }
    function _t($, he) {
      te = !1, oe && (oe = !1, sn(Ye), Ye = -1), Oe = !0;
      var T = K;
      try {
        for (lt(he), Re = z(nt); Re !== null && (!(Re.expirationTime > he) || $ && !It()); ) {
          var Y = Re.callback;
          if (typeof Y == "function") {
            Re.callback = null, K = Re.priorityLevel;
            var me = Y(Re.expirationTime <= he);
            he = V.unstable_now(), typeof me == "function" ? Re.callback = me : Re === z(nt) && tt(nt), lt(he);
          } else
            tt(nt);
          Re = z(nt);
        }
        if (Re !== null)
          var Fe = !0;
        else {
          var je = z(ke);
          je !== null && Je(Ve, je.startTime - he), Fe = !1;
        }
        return Fe;
      } finally {
        Re = null, K = T, Oe = !1;
      }
    }
    var Te = !1, ct = null, Ye = -1, wn = 5, mn = -1;
    function It() {
      return !(V.unstable_now() - mn < wn);
    }
    function mt() {
      if (ct !== null) {
        var $ = V.unstable_now();
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
      var Be = new MessageChannel(), Ze = Be.port2;
      Be.port1.onmessage = mt, Zt = function() {
        Ze.postMessage(null);
      };
    } else
      Zt = function() {
        Qe(mt, 0);
      };
    function Rt($) {
      ct = $, Te || (Te = !0, Zt());
    }
    function Je($, he) {
      Ye = Qe(function() {
        $(V.unstable_now());
      }, he);
    }
    V.unstable_IdlePriority = 5, V.unstable_ImmediatePriority = 1, V.unstable_LowPriority = 4, V.unstable_NormalPriority = 3, V.unstable_Profiling = null, V.unstable_UserBlockingPriority = 2, V.unstable_cancelCallback = function($) {
      $.callback = null;
    }, V.unstable_continueExecution = function() {
      te || Oe || (te = !0, Rt(_t));
    }, V.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : wn = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, V.unstable_getCurrentPriorityLevel = function() {
      return K;
    }, V.unstable_getFirstCallbackNode = function() {
      return z(nt);
    }, V.unstable_next = function($) {
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
    }, V.unstable_pauseExecution = function() {
    }, V.unstable_requestPaint = function() {
    }, V.unstable_runWithPriority = function($, he) {
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
    }, V.unstable_scheduleCallback = function($, he, T) {
      var Y = V.unstable_now();
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
      return me = T + me, $ = { id: ue++, callback: he, priorityLevel: $, startTime: T, expirationTime: me, sortIndex: -1 }, T > Y ? ($.sortIndex = T, X(ke, $), z(nt) === null && $ === z(ke) && (oe ? (sn(Ye), Ye = -1) : oe = !0, Je(Ve, T - Y))) : ($.sortIndex = me, X(nt, $), te || Oe || (te = !0, Rt(_t))), $;
    }, V.unstable_shouldYield = It, V.unstable_wrapCallback = function($) {
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
  }(f0)), f0;
}
var d0 = {}, nR;
function iD() {
  return nR || (nR = 1, function(V) {
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
      var z = !1, tt = !1, Ct = 5;
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
        V.unstable_now = function() {
          return ln.now();
        };
      } else {
        var lt = Date, Ve = lt.now();
        V.unstable_now = function() {
          return lt.now() - Ve;
        };
      }
      var _t = 1073741823, Te = -1, ct = 250, Ye = 5e3, wn = 1e4, mn = _t, It = [], mt = [], Zt = 1, Be = null, Ze = Oe, Rt = !1, Je = !1, $ = !1, he = typeof setTimeout == "function" ? setTimeout : null, T = typeof clearTimeout == "function" ? clearTimeout : null, Y = typeof setImmediate < "u" ? setImmediate : null;
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
        if ($ = !1, me(ae), !Je)
          if (Xe(It) !== null)
            Je = !0, wr(je);
          else {
            var De = Xe(mt);
            De !== null && un(Fe, De.startTime - ae);
          }
      }
      function je(ae, De) {
        Je = !1, $ && ($ = !1, sa()), Rt = !0;
        var rt = Ze;
        try {
          var Mt;
          if (!tt)
            return ft(ae, De);
        } finally {
          Be = null, Ze = rt, Rt = !1;
        }
      }
      function ft(ae, De) {
        var rt = De;
        for (me(rt), Be = Xe(It); Be !== null && !z && !(Be.expirationTime > rt && (!ae || hr())); ) {
          var Mt = Be.callback;
          if (typeof Mt == "function") {
            Be.callback = null, Ze = Be.priorityLevel;
            var xt = Be.expirationTime <= rt, bn = Mt(xt);
            rt = V.unstable_now(), typeof bn == "function" ? Be.callback = bn : Be === Xe(It) && S(It), me(rt);
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
        var rt = Ze;
        Ze = ae;
        try {
          return De();
        } finally {
          Ze = rt;
        }
      }
      function dt(ae) {
        var De;
        switch (Ze) {
          case Re:
          case K:
          case Oe:
            De = Oe;
            break;
          default:
            De = Ze;
            break;
        }
        var rt = Ze;
        Ze = De;
        try {
          return ae();
        } finally {
          Ze = rt;
        }
      }
      function ot(ae) {
        var De = Ze;
        return function() {
          var rt = Ze;
          Ze = De;
          try {
            return ae.apply(this, arguments);
          } finally {
            Ze = rt;
          }
        };
      }
      function Jt(ae, De, rt) {
        var Mt = V.unstable_now(), xt;
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
        return xt > Mt ? (At.sortIndex = xt, Yt(mt, At), Xe(It) === null && At === Xe(mt) && ($ ? sa() : $ = !0, un(Fe, xt - Mt))) : (At.sortIndex = yr, Yt(It, At), !Je && !Rt && (Je = !0, wr(je))), At;
      }
      function Zn() {
      }
      function Jn() {
        !Je && !Rt && (Je = !0, wr(je));
      }
      function Fr() {
        return Xe(It);
      }
      function vr(ae) {
        ae.callback = null;
      }
      function yn() {
        return Ze;
      }
      var er = !1, Hn = null, Nn = -1, zn = Ct, Tr = -1;
      function hr() {
        var ae = V.unstable_now() - Tr;
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
          var ae = V.unstable_now();
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
          ae(V.unstable_now());
        }, De);
      }
      function sa() {
        T(Nn), Nn = -1;
      }
      var ca = Vn, fa = null;
      V.unstable_IdlePriority = oe, V.unstable_ImmediatePriority = Re, V.unstable_LowPriority = te, V.unstable_NormalPriority = Oe, V.unstable_Profiling = fa, V.unstable_UserBlockingPriority = K, V.unstable_cancelCallback = vr, V.unstable_continueExecution = Jn, V.unstable_forceFrameRate = la, V.unstable_getCurrentPriorityLevel = yn, V.unstable_getFirstCallbackNode = Fr, V.unstable_next = dt, V.unstable_pauseExecution = Zn, V.unstable_requestPaint = ca, V.unstable_runWithPriority = ut, V.unstable_scheduleCallback = Jt, V.unstable_shouldYield = hr, V.unstable_wrapCallback = ot, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(d0)), d0;
}
var rR;
function cR() {
  if (rR)
    return Am.exports;
  rR = 1;
  var V = {};
  return V.NODE_ENV === "production" ? Am.exports = aD() : Am.exports = iD(), Am.exports;
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
var aR;
function lD() {
  if (aR)
    return Wa;
  aR = 1;
  var V = Qp, X = cR();
  function z(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var tt = /* @__PURE__ */ new Set(), Ct = {};
  function Yt(n, r) {
    Xe(n, r), Xe(n + "Capture", r);
  }
  function Xe(n, r) {
    for (Ct[n] = r, n = 0; n < r.length; n++)
      tt.add(r[n]);
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
  var Ve = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _t = Symbol.for("react.element"), Te = Symbol.for("react.portal"), ct = Symbol.for("react.fragment"), Ye = Symbol.for("react.strict_mode"), wn = Symbol.for("react.profiler"), mn = Symbol.for("react.provider"), It = Symbol.for("react.context"), mt = Symbol.for("react.forward_ref"), Zt = Symbol.for("react.suspense"), Be = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Rt = Symbol.for("react.lazy"), Je = Symbol.for("react.offscreen"), $ = Symbol.iterator;
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
        case Ze:
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
      throw Error(z(91));
    return T({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function ua(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(z(92));
        if (hr(l)) {
          if (1 < l.length)
            throw Error(z(93));
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
        throw Error(z(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(z(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(z(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(z(62));
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
        throw Error(z(280));
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
      throw Error(z(231, r, typeof l));
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
        throw Error(z(198));
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
      throw Error(z(188));
  }
  function et(n) {
    var r = n.alternate;
    if (!r) {
      if (r = ie(n), r === null)
        throw Error(z(188));
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
        throw Error(z(188));
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
            throw Error(z(189));
        }
      }
      if (l.alternate !== o)
        throw Error(z(190));
    }
    if (l.tag !== 3)
      throw Error(z(188));
    return l.stateNode.current === l ? n : r;
  }
  function Le(n) {
    return n = et(n), n !== null ? Un(n) : null;
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
        ad(n, r, o, Fi, l), es(n, o);
      else if ($r(c, n, r, l, o))
        o.stopPropagation();
      else if (es(n, o), r & 4 && -1 < dn.indexOf(n)) {
        for (; c !== null; ) {
          var d = vi(c);
          if (d !== null && Hu(d), d = Yu(n, r, l, o), d === null && ad(n, r, o, Fi, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        ad(n, r, o, null, l);
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
  function M(n) {
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
  } }), Qf = Ee(is), Vm = T({}, fe, { data: 0 }), Wp = Ee(Vm), Gp = {
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
  }, Wf = {
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
  }, qp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Xp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = qp[n]) ? !!r[n] : !1;
  }
  function fc() {
    return Xp;
  }
  var Pm = T({}, it, { key: function(n) {
    if (n.key) {
      var r = Gp[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = M(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Wf[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fc, charCode: function(n) {
    return n.type === "keypress" ? M(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? M(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Hi = Ee(Pm), Bm = T({}, tn, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), dc = Ee(Bm), Gf = T({}, it, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fc }), qf = Ee(Gf), $m = T({}, fe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), pc = Ee($m), Kp = T({}, tn, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Yr = Ee(Kp), Vi = [9, 13, 27, 32], gn = S && "CompositionEvent" in window, pa = null;
  S && "documentMode" in document && (pa = document.documentMode);
  var Xf = S && "TextEvent" in window && !pa, ls = S && (!gn || pa && 8 < pa && 11 >= pa), Zp = " ", Wu = !1;
  function Jp(n, r) {
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
  function ev(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var Sl = !1;
  function Ym(n, r) {
    switch (n) {
      case "compositionend":
        return ev(r);
      case "keypress":
        return r.which !== 32 ? null : (Wu = !0, Zp);
      case "textInput":
        return n = r.data, n === Zp && Wu ? null : n;
      default:
        return null;
    }
  }
  function Im(n, r) {
    if (Sl)
      return n === "compositionend" || !gn && Jp(n, r) ? (n = C(), h = Iu = ei = null, Sl = !1, n) : null;
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
  var Qm = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Kf(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Qm[n.type] : r === "textarea";
  }
  function tv(n, r, l, o) {
    qa(o), r = Sc(r, "onChange"), 0 < r.length && (l = new Pe("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var us = null, os = null;
  function nv(n) {
    gv(n, 0);
  }
  function Pi(n) {
    var r = Ku(n);
    if (Fr(r))
      return n;
  }
  function Zf(n, r) {
    if (n === "change")
      return r;
  }
  var Jf = !1;
  if (S) {
    var vc;
    if (S) {
      var ed = "oninput" in document;
      if (!ed) {
        var rv = document.createElement("div");
        rv.setAttribute("oninput", "return;"), ed = typeof rv.oninput == "function";
      }
      vc = ed;
    } else
      vc = !1;
    Jf = vc && (!document.documentMode || 9 < document.documentMode);
  }
  function av() {
    us && (us.detachEvent("onpropertychange", iv), os = us = null);
  }
  function iv(n) {
    if (n.propertyName === "value" && Pi(os)) {
      var r = [];
      tv(r, os, n, yr(n)), fl(nv, r);
    }
  }
  function Wm(n, r, l) {
    n === "focusin" ? (av(), us = r, os = l, us.attachEvent("onpropertychange", iv)) : n === "focusout" && av();
  }
  function Gm(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Pi(os);
  }
  function qm(n, r) {
    if (n === "click")
      return Pi(r);
  }
  function Xm(n, r) {
    if (n === "input" || n === "change")
      return Pi(r);
  }
  function lv(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ti = typeof Object.is == "function" ? Object.is : lv;
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
  function uv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function ov(n, r) {
    var l = uv(n);
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
      l = uv(l);
    }
  }
  function sv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? sv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function cv() {
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
    var r = cv(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && sv(l.ownerDocument.documentElement, l)) {
      if (o !== null && ss(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = ov(l, d);
          var m = ov(
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
  var hc = S && "documentMode" in document && 11 >= document.documentMode, au = null, El = null, cs = null, td = !1;
  function fv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    td || au == null || au !== vr(o) || (o = au, "selectionStart" in o && ss(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), cs && Gu(cs, o) || (cs = o, o = Sc(El, "onSelect"), 0 < o.length && (r = new Pe("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = au)));
  }
  function mc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var qu = { animationend: mc("Animation", "AnimationEnd"), animationiteration: mc("Animation", "AnimationIteration"), animationstart: mc("Animation", "AnimationStart"), transitionend: mc("Transition", "TransitionEnd") }, yc = {}, dv = {};
  S && (dv = document.createElement("div").style, "AnimationEvent" in window || (delete qu.animationend.animation, delete qu.animationiteration.animation, delete qu.animationstart.animation), "TransitionEvent" in window || delete qu.transitionend.transition);
  function fs(n) {
    if (yc[n])
      return yc[n];
    if (!qu[n])
      return n;
    var r = qu[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in dv)
        return yc[n] = r[l];
    return n;
  }
  var Sr = fs("animationend"), nd = fs("animationiteration"), pv = fs("animationstart"), vv = fs("transitionend"), hv = /* @__PURE__ */ new Map(), mv = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Cl(n, r) {
    hv.set(n, r), Yt(r, [n]);
  }
  for (var gc = 0; gc < mv.length; gc++) {
    var ds = mv[gc], ps = ds.toLowerCase(), Km = ds[0].toUpperCase() + ds.slice(1);
    Cl(ps, "on" + Km);
  }
  Cl(Sr, "onAnimationEnd"), Cl(nd, "onAnimationIteration"), Cl(pv, "onAnimationStart"), Cl("dblclick", "onDoubleClick"), Cl("focusin", "onFocus"), Cl("focusout", "onBlur"), Cl(vv, "onTransitionEnd"), Xe("onMouseEnter", ["mouseout", "mouseover"]), Xe("onMouseLeave", ["mouseout", "mouseover"]), Xe("onPointerEnter", ["pointerout", "pointerover"]), Xe("onPointerLeave", ["pointerout", "pointerover"]), Yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Bi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Zm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bi));
  function yv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ne(o, r, void 0, n), n.currentTarget = null;
  }
  function gv(n, r) {
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
            yv(c, E, A), d = w;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], w = E.instance, A = E.currentTarget, E = E.listener, w !== d && c.isPropagationStopped())
              break e;
            yv(c, E, A), d = w;
          }
      }
    }
    if (da)
      throw n = Mi, da = !1, Mi = null, n;
  }
  function Bt(n, r) {
    var l = r[dd];
    l === void 0 && (l = r[dd] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (rd(r, n, 2, !1), l.add(o));
  }
  function vs(n, r, l) {
    var o = 0;
    r && (o |= 4), rd(l, n, o, r);
  }
  var $i = "_reactListening" + Math.random().toString(36).slice(2);
  function pi(n) {
    if (!n[$i]) {
      n[$i] = !0, tt.forEach(function(l) {
        l !== "selectionchange" && (Zm.has(l) || vs(l, !1, n), vs(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[$i] || (r[$i] = !0, vs("selectionchange", !1, r));
    }
  }
  function rd(n, r, l, o) {
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
  function ad(n, r, l, o, c) {
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
        var I = hv.get(n);
        if (I !== void 0) {
          var se = Pe, ye = n;
          switch (n) {
            case "keypress":
              if (M(l) === 0)
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
              se = qf;
              break;
            case Sr:
            case nd:
            case pv:
              se = as;
              break;
            case vv:
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
              se = Qf;
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
            se !== null && id(G, I, se, Ce, !1), ye !== null && Ln !== null && id(G, Ln, ye, Ce, !0);
          }
        }
        e: {
          if (I = A ? Ku(A) : window, se = I.nodeName && I.nodeName.toLowerCase(), se === "select" || se === "input" && I.type === "file")
            var be = Zf;
          else if (Kf(I))
            if (Jf)
              be = Xm;
            else {
              be = Gm;
              var Ae = Wm;
            }
          else
            (se = I.nodeName) && se.toLowerCase() === "input" && (I.type === "checkbox" || I.type === "radio") && (be = qm);
          if (be && (be = be(n, A))) {
            tv(G, be, l, W);
            break e;
          }
          Ae && Ae(n, I, A), n === "focusout" && (Ae = I._wrapperState) && Ae.controlled && I.type === "number" && Tr(I, "number", I.value);
        }
        switch (Ae = A ? Ku(A) : window, n) {
          case "focusin":
            (Kf(Ae) || Ae.contentEditable === "true") && (au = Ae, El = A, cs = null);
            break;
          case "focusout":
            cs = El = au = null;
            break;
          case "mousedown":
            td = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            td = !1, fv(G, l, W);
            break;
          case "selectionchange":
            if (hc)
              break;
          case "keydown":
          case "keyup":
            fv(G, l, W);
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
          Sl ? Jp(n, l) && (He = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (He = "onCompositionStart");
        He && (ls && l.locale !== "ko" && (Sl || He !== "onCompositionStart" ? He === "onCompositionEnd" && Sl && (ge = C()) : (ei = W, Iu = "value" in ei ? ei.value : ei.textContent, Sl = !0)), Ae = Sc(A, He), 0 < Ae.length && (He = new Wp(He, n, null, l, W), G.push({ event: He, listeners: Ae }), ge ? He.data = ge : (ge = ev(l), ge !== null && (He.data = ge)))), (ge = Xf ? Ym(n, l) : Im(n, l)) && (A = Sc(A, "onBeforeInput"), 0 < A.length && (W = new Wp("onBeforeInput", "beforeinput", null, l, W), G.push({ event: W, listeners: A }), W.data = ge));
      }
      gv(G, r);
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
  function id(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, w = E.alternate, A = E.stateNode;
      if (w !== null && w === o)
        break;
      E.tag === 5 && A !== null && (E = A, c ? (w = Xa(l, d), w != null && m.unshift(Xu(l, w, E))) : c || (w = Xa(l, d), w != null && m.push(Xu(l, w, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var Sv = /\r\n?/g, ld = /\u0000|\uFFFD/g;
  function Ev(n) {
    return (typeof n == "string" ? n : "" + n).replace(Sv, `
`).replace(ld, "");
  }
  function hs(n, r, l) {
    if (r = Ev(r), Ev(n) !== r && l)
      throw Error(z(425));
  }
  function Ec() {
  }
  var ud = null, od = null;
  function lu(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var ms = typeof setTimeout == "function" ? setTimeout : void 0, ys = typeof clearTimeout == "function" ? clearTimeout : void 0, sd = typeof Promise == "function" ? Promise : void 0, Cv = typeof queueMicrotask == "function" ? queueMicrotask : typeof sd < "u" ? function(n) {
    return sd.resolve(null).then(n).catch(cd);
  } : ms;
  function cd(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function fd(n, r) {
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
  var Yi = Math.random().toString(36).slice(2), Oa = "__reactFiber$" + Yi, Ss = "__reactProps$" + Yi, ni = "__reactContainer$" + Yi, dd = "__reactEvents$" + Yi, Jm = "__reactListeners$" + Yi, ey = "__reactHandles$" + Yi;
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
    throw Error(z(33));
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
      throw Error(z(168));
    Dt(Wn, r), Dt(We, l);
  }
  function Rl(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(z(108, dt(n) || "Unknown", c));
    return T({}, l, o);
  }
  function uu(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || La, _r = Wn.current, Dt(Wn, n), Dt(We, We.current), !0;
  }
  function Rv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(z(169));
    l ? (n = Rl(n, r, _r), o.__reactInternalMemoizedMergedChildContext = n, we(We), we(Wn), Dt(Wn, n)) : we(We), Dt(We, l);
  }
  var Qi = null, Tl = !1, rr = !1;
  function Rc(n) {
    Qi === null ? Qi = [n] : Qi.push(n);
  }
  function Tv(n) {
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
  function pd(n, r) {
    var l = Pa(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function vd(n, r) {
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
  function hd(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function bc(n) {
    if (nn) {
      var r = ya;
      if (r) {
        var l = r;
        if (!vd(n, r)) {
          if (hd(n))
            throw Error(z(418));
          r = va(l.nextSibling);
          var o = ma;
          r && vd(n, r) ? pd(o, l) : (n.flags = n.flags & -4097 | 2, nn = !1, ma = n);
        }
      } else {
        if (hd(n))
          throw Error(z(418));
        n.flags = n.flags & -4097 | 2, nn = !1, ma = n;
      }
    }
  }
  function md(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    ma = n;
  }
  function _c(n) {
    if (n !== ma)
      return !1;
    if (!nn)
      return md(n), nn = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !lu(n.type, n.memoizedProps)), r && (r = ya)) {
      if (hd(n))
        throw wv(), Error(z(418));
      for (; r; )
        pd(n, r), r = va(r.nextSibling);
    }
    if (md(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(z(317));
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
  function wv() {
    for (var n = ya; n; )
      n = va(n.nextSibling);
  }
  function Zu() {
    ya = ma = null, nn = !1;
  }
  function Fn(n) {
    za === null ? za = [n] : za.push(n);
  }
  var ty = Ve.ReactCurrentBatchConfig;
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
  function yd() {
    Es = eo = yi = null;
  }
  function gd(n) {
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
          throw Error(z(308));
        eo = n, yi.dependencies = { lanes: 0, firstContext: n };
      } else
        eo = eo.next = n;
    return r;
  }
  var Er = null;
  function ga(n) {
    Er === null ? Er = [n] : Er.push(n);
  }
  function bv(n, r, l, o) {
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
  function Sd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function _v(n, r) {
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
  function xv(n, r) {
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
            throw Error(z(191, c));
          c.call(o);
        }
      }
  }
  var cu = new V.Component().refs;
  function Ed(n, r, l, o) {
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
  function Dv(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Gu(l, o) || !Gu(c, d) : !0;
  }
  function kv(n, r, l) {
    var o = !1, c = La, d = r.contextType;
    return typeof d == "object" && d !== null ? d = ee(d) : (c = An(r) ? _r : Wn.current, o = r.contextTypes, d = (o = o != null) ? ha(n, c) : La), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Dc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Ov(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Dc.enqueueReplaceState(r, r.state, null);
  }
  function Cd(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = cu, Sd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = ee(d) : (d = An(r) ? _r : Wn.current, c.context = ha(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Ed(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Dc.enqueueReplaceState(c, c.state, null), Cs(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function no(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(z(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(z(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === cu && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(z(284));
      if (!l._owner)
        throw Error(z(290, n));
    }
    return n;
  }
  function Rs(n, r) {
    throw n = Object.prototype.toString.call(r), Error(z(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Lv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function Mv(n) {
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
      return be === ct ? W(D, _, L.props.children, J, L.key) : _ !== null && (_.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Rt && Lv(be) === _.type) ? (J = c(_, L.props), J.ref = no(D, _, L), J.return = D, J) : (J = of(L.type, L.key, L.props, null, D.mode, J), J.ref = no(D, _, L), J.return = D, J);
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
        throw Error(z(150));
      if (L = be.call(L), L == null)
        throw Error(z(151));
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
      return n && ge.forEach(function(Ey) {
        return r(D, Ey);
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
                  } else if (Ae.elementType === be || typeof be == "object" && be !== null && be.$$typeof === Rt && Lv(be) === Ae.type) {
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
  var ro = Mv(!0), Nv = Mv(!1), Ts = {}, gi = $t(Ts), ao = $t(Ts), ws = $t(Ts);
  function kl(n) {
    if (n === Ts)
      throw Error(z(174));
    return n;
  }
  function Rd(n, r) {
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
  var bs = Ve.ReactCurrentDispatcher, Td = Ve.ReactCurrentBatchConfig, fu = 0, pn = null, xn = null, P = null, Dn = !1, Ue = !1, Si = 0, Gi = 0;
  function En() {
    throw Error(z(321));
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
    if (fu = d, pn = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, bs.current = n === null || n.memoizedState === null ? ny : ry, n = l(o, c), Ue) {
      d = 0;
      do {
        if (Ue = !1, Si = 0, 25 <= d)
          throw Error(z(301));
        d += 1, P = xn = null, r.updateQueue = null, bs.current = ay, n = l(o, c);
      } while (Ue);
    }
    if (bs.current = $c, r = xn !== null && xn.next !== null, fu = 0, P = xn = pn = null, Dn = !1, r)
      throw Error(z(300));
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
        throw Error(z(310));
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
      throw Error(z(311));
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
      throw Error(z(311));
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
        throw Error(z(349));
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
  function wd(n, r, l) {
    return l = l != null ? l.concat([n]) : null, hu(4, 4, Pc.bind(null, r, n), l);
  }
  function yu() {
  }
  function bd(n, r) {
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
    var o = Td.transition;
    Td.transition = {};
    try {
      n(!1), r();
    } finally {
      ht = l, Td.transition = o;
    }
  }
  function zv() {
    return Kr().memoizedState;
  }
  function Kt(n, r, l) {
    var o = Ki(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, ks(n))
      oo(r, l);
    else if (l = bv(n, r, l, o), l !== null) {
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
      l = bv(n, r, c, o), l !== null && (c = Xn(), vn(l, n, o, c), Os(l, r, o));
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
  var $c = { readContext: ee, useCallback: En, useContext: En, useEffect: En, useImperativeHandle: En, useInsertionEffect: En, useLayoutEffect: En, useMemo: En, useReducer: En, useRef: En, useState: En, useDebugValue: En, useDeferredValue: En, useTransition: En, useMutableSource: En, useSyncExternalStore: En, useId: En, unstable_isNewReconciler: !1 }, ny = { readContext: ee, useCallback: function(n, r) {
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
        throw Error(z(407));
      l = l();
    } else {
      if (l = r(), Rn === null)
        throw Error(z(349));
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
  }, unstable_isNewReconciler: !1 }, ry = {
    readContext: ee,
    useCallback: bd,
    useContext: ee,
    useEffect: Ds,
    useImperativeHandle: wd,
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
    useId: zv,
    unstable_isNewReconciler: !1
  }, ay = { readContext: ee, useCallback: bd, useContext: ee, useEffect: Ds, useImperativeHandle: wd, useInsertionEffect: Hc, useLayoutEffect: Vc, useMemo: uo, useReducer: xs, useRef: jc, useState: function() {
    return xs(pu);
  }, useDebugValue: yu, useDeferredValue: function(n) {
    var r = Kr();
    return xn === null ? r.memoizedState = n : Ll(r, xn.memoizedState, n);
  }, useTransition: function() {
    var n = xs(pu)[0], r = Kr().memoizedState;
    return [n, r];
  }, useMutableSource: Oc, useSyncExternalStore: Lc, useId: zv, unstable_isNewReconciler: !1 };
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
  function _d(n, r, l) {
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
  var Uv = typeof WeakMap == "function" ? WeakMap : Map;
  function Av(n, r, l) {
    l = Xt(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      tf || (tf = !0, Ud = o), Ls(n, r);
    }, l;
  }
  function Fv(n, r, l) {
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
      o = n.pingCache = new Uv();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = vy.bind(null, n, r, l), r.then(n, n));
  }
  function jv(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xd(n, r, l, o, c) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = c, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = Xt(-1, 1), r.tag = 2, Dl(l, r, 1))), l.lanes |= 1), n);
  }
  var Hv = Ve.ReactCurrentOwner, Zr = !1;
  function kn(n, r, l, o) {
    r.child = n === null ? Nv(r, null, l, o) : ro(r, n.child, l, o);
  }
  function so(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return _n(r, c), o = du(n, r, l, o, d, c), l = Ol(), n !== null && !Zr ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, On(n, r, c)) : (nn && l && Tc(r), r.flags |= 1, kn(n, r, o, c), r.child);
  }
  function Nl(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Vd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Yc(n, r, d, o, c)) : (n = of(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
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
      Us(n, r), kv(r, l, o), Cd(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var w = m.context, A = l.contextType;
      typeof A == "object" && A !== null ? A = ee(A) : (A = An(l) ? _r : Wn.current, A = ha(r, A));
      var W = l.getDerivedStateFromProps, G = typeof W == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      G || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || w !== A) && Ov(r, m, o, A), xl = !1;
      var I = r.memoizedState;
      m.state = I, Cs(r, o, m, c), w = r.memoizedState, E !== o || I !== w || We.current || xl ? (typeof W == "function" && (Ed(r, l, W, o), w = r.memoizedState), (E = xl || Dv(r, l, E, o, I, w, A)) ? (G || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = w), m.props = o, m.state = w, m.context = A, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, _v(n, r), E = r.memoizedProps, A = r.type === r.elementType ? E : qr(r.type, E), m.props = A, G = r.pendingProps, I = m.context, w = l.contextType, typeof w == "object" && w !== null ? w = ee(w) : (w = An(l) ? _r : Wn.current, w = ha(r, w));
      var se = l.getDerivedStateFromProps;
      (W = typeof se == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== G || I !== w) && Ov(r, m, o, w), xl = !1, I = r.memoizedState, m.state = I, Cs(r, o, m, c);
      var ye = r.memoizedState;
      E !== G || I !== ye || We.current || xl ? (typeof se == "function" && (Ed(r, l, se, o), ye = r.memoizedState), (A = xl || Dv(r, l, A, o, I, ye, w) || !1) ? (W || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ye, w), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ye, w)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ye), m.props = o, m.state = ye, m.context = w, o = A) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && I === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return Ic(n, r, l, o, d, c);
  }
  function Ic(n, r, l, o, c, d) {
    gu(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && Rv(r, l, !1), On(n, r, d);
    o = r.stateNode, Hv.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = ro(r, n.child, null, d), r.child = ro(r, null, E, d)) : kn(n, r, E, d), r.memoizedState = o.state, c && Rv(r, l, !0), r.child;
  }
  function iy(n) {
    var r = n.stateNode;
    r.pendingContext ? hi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && hi(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function Vv(n, r, l, o, c) {
    return Zu(), Fn(c), r.flags |= 256, kn(n, r, l, o), r.child;
  }
  var zs = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Su(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Pv(n, r, l) {
    var o = r.pendingProps, c = _e.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Dt(_e, c & 1), n === null)
      return bc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, !(o & 1) && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = sf(m, o, 0, null), n = bu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = Su(l), r.memoizedState = zs, n) : Qc(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return Dd(n, r, m, o, E, c, l);
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
  function Dd(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = _d(Error(z(422))), Wc(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = sf({ mode: "visible", children: o.children }, c, 0, null), d = bu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, r.mode & 1 && ro(r, n.child, null, m), r.child.memoizedState = Su(m), r.memoizedState = zs, d);
    if (!(r.mode & 1))
      return Wc(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(z(419)), o = _d(d, o, void 0), Wc(n, r, m, o);
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
      return Vs(), o = _d(Error(z(421))), Wc(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Hd.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, ya = va(c.nextSibling), ma = r, nn = !0, za = null, n !== null && (Qr[Wr++] = Gr, Qr[Wr++] = ar, Qr[Wr++] = ai, Gr = n.id, ar = n.overflow, ai = r), r = Qc(r, o.children), r.flags |= 4096, r);
  }
  function Bv(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), _l(n.return, r, l);
  }
  function Gc(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function kd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (kn(n, r, o.children, l), o = _e.current, o & 2)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Bv(n, l, r);
            else if (n.tag === 19)
              Bv(n, l, r);
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
      throw Error(z(153));
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
        iy(r), Zu();
        break;
      case 5:
        kc(r);
        break;
      case 1:
        An(r.type) && uu(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Dt(Ju, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Dt(_e, _e.current & 1), r.flags |= 128, null) : l & r.child.childLanes ? Pv(n, r, l) : (Dt(_e, _e.current & 1), n = On(n, r, l), n !== null ? n.sibling : null);
        Dt(_e, _e.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, n.flags & 128) {
          if (o)
            return kd(n, r, l);
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
  function ly(n, r, l) {
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
        return o = r.stateNode, io(), we(We), we(Wn), Ua(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (_c(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, za !== null && (Ad(za), za = null))), co(n, r), Cr(r), null;
      case 5:
        Ne(r);
        var c = kl(ws.current);
        if (l = r.type, n !== null && r.stateNode != null)
          fo(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(z(166));
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
            throw Error(z(166));
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
            wv(), Zu(), r.flags |= 98560, d = !1;
          else if (d = _c(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(z(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(z(317));
              d[Oa] = r;
            } else
              Zu(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            Cr(r), d = !1;
          } else
            za !== null && (Ad(za), za = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, r.mode & 1 && (n === null || _e.current & 1 ? Bn === 0 && (Bn = 3) : Vs())), r.updateQueue !== null && (r.flags |= 4), Cr(r), null);
      case 4:
        return io(), co(n, r), n === null && pi(r.stateNode.containerInfo), Cr(r), null;
      case 10:
        return gd(r.type._context), Cr(r), null;
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
    throw Error(z(156, r.tag));
  }
  function uy(n, r) {
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
            throw Error(z(340));
          Zu();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return we(_e), null;
      case 4:
        return io(), null;
      case 10:
        return gd(r.type._context), null;
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
  function Od(n, r, l) {
    try {
      l();
    } catch (o) {
      Tn(n, r, o);
    }
  }
  var Xc = !1;
  function oy(n, r) {
    if (ud = Bu, n = cv(), ss(n)) {
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
    for (od = { focusedElem: n, selectionRange: l }, Bu = !1, ve = r; ve !== null; )
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
                  throw Error(z(163));
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
          c.destroy = void 0, d !== void 0 && Od(r, l, d);
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
  function $v(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, $v(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Oa], delete r[Ss], delete r[dd], delete r[Jm], delete r[ey])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Ld(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yv(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Ld(n.return))
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
        on !== null && (Gn ? (n = on, l = l.stateNode, n.nodeType === 8 ? fd(n.parentNode, l) : n.nodeType === 1 && fd(n, l), ka(n)) : fd(on, l.stateNode));
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
            d = d.tag, m !== void 0 && (d & 2 || d & 4) && Od(l, r, m), c = c.next;
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
        var c = hy.bind(null, n, o);
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
            throw Error(z(160));
          yo(d, m, c), on = null, Gn = !1;
          var w = c.alternate;
          w !== null && (w.return = null), c.return = null;
        } catch (A) {
          Tn(c, r, A);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Iv(r, n), r = r.sibling;
  }
  function Iv(n, r) {
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
            throw Error(z(162));
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
                      Qv(G);
                      continue;
                    }
                }
                se !== null ? (se.return = I, ve = se) : Qv(G);
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
            if (Ld(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(z(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (ca(c, ""), o.flags &= -33);
            var d = Yv(n);
            mo(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Yv(n);
            As(n, E, m);
            break;
          default:
            throw Error(z(161));
        }
      } catch (w) {
        Tn(n, n.return, w);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function sy(n, r, l) {
    ve = n, Md(n);
  }
  function Md(n, r, l) {
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
              m = ve, w = m.child, m.tag === 22 && m.memoizedState !== null ? Nd(c) : w !== null ? (w.return = m, ve = w) : Nd(c);
          for (; d !== null; )
            ve = d, Md(d), d = d.sibling;
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
                throw Error(z(163));
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
  function Qv(n) {
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
  function Nd(n) {
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
  var cy = Math.ceil, Eu = Ve.ReactCurrentDispatcher, Jc = Ve.ReactCurrentOwner, ja = Ve.ReactCurrentBatchConfig, pt = 0, Rn = null, rn = null, Pn = 0, ea = 0, Eo = $t(0), Bn = 0, Fs = null, Cu = 0, Co = 0, zd = 0, zl = null, Rr = null, ef = 0, Ro = 1 / 0, Xi = null, tf = !1, Ud = null, Ha = null, To = !1, Va = null, nf = 0, js = 0, rf = null, Hs = -1, Ru = 0;
  function Xn() {
    return pt & 6 ? qt() : Hs !== -1 ? Hs : Hs = qt();
  }
  function Ki(n) {
    return n.mode & 1 ? pt & 2 && Pn !== 0 ? Pn & -Pn : ty.transition !== null ? (Ru === 0 && (Ru = Zl()), Ru) : (n = ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : ts(n.type)), n) : 1;
  }
  function vn(n, r, l, o) {
    if (50 < js)
      throw js = 0, rf = null, Error(z(185));
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
        n.tag === 0 ? Tv(wo.bind(null, n)) : Rc(wo.bind(null, n)), Cv(function() {
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
        l = eh(l, af.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function af(n, r) {
    if (Hs = -1, Ru = 0, pt & 6)
      throw Error(z(327));
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
      var d = Gv();
      (Rn !== n || Pn !== r) && (Xi = null, Ro = qt() + 500, wu(n, r));
      do
        try {
          dy();
          break;
        } catch (E) {
          Wv(n, E);
        }
      while (!0);
      yd(), Eu.current = d, pt = c, rn !== null ? r = 0 : (Rn = null, Pn = 0, r = Bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = fi(n), c !== 0 && (o = c, r = Tu(n, c))), r === 1)
        throw l = Fs, wu(n, 0), Ri(n, o), $n(n, qt()), l;
      if (r === 6)
        Ri(n, o);
      else {
        if (c = n.current.alternate, !(o & 30) && !Fd(c) && (r = uf(n, o), r === 2 && (d = fi(n), d !== 0 && (o = d, r = Tu(n, d))), r === 1))
          throw l = Fs, wu(n, 0), Ri(n, o), $n(n, qt()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(z(345));
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
            if (o = c, o = qt() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * cy(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = ms(Ul.bind(null, n, Rr, Xi), o);
              break;
            }
            Ul(n, Rr, Xi);
            break;
          case 5:
            Ul(n, Rr, Xi);
            break;
          default:
            throw Error(z(329));
        }
      }
    }
    return $n(n, qt()), n.callbackNode === l ? af.bind(null, n) : null;
  }
  function Tu(n, r) {
    var l = zl;
    return n.current.memoizedState.isDehydrated && (wu(n, r).flags |= 256), n = uf(n, r), n !== 2 && (r = Rr, Rr = l, r !== null && Ad(r)), n;
  }
  function Ad(n) {
    Rr === null ? Rr = n : Rr.push.apply(Rr, n);
  }
  function Fd(n) {
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
    for (r &= ~zd, r &= ~Co, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - br(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function wo(n) {
    if (pt & 6)
      throw Error(z(327));
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
      throw Error(z(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, Ul(n, Rr, Xi), $n(n, qt()), null;
  }
  function jd(n, r) {
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
            gd(o.type._context);
            break;
          case 22:
          case 23:
            lf();
        }
        l = l.return;
      }
    if (Rn = n, rn = n = Al(n.current, null), Pn = ea = r, Bn = 0, Fs = null, zd = Co = Cu = 0, Rr = zl = null, Er !== null) {
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
  function Wv(n, r) {
    do {
      var l = rn;
      try {
        if (yd(), bs.current = $c, Dn) {
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
            var se = jv(m);
            if (se !== null) {
              se.flags &= -257, xd(se, m, E, d, r), se.mode & 1 && Ms(d, A, r), r = se, w = A;
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
              w = Error(z(426));
            }
          } else if (nn && E.mode & 1) {
            var Ln = jv(m);
            if (Ln !== null) {
              !(Ln.flags & 65536) && (Ln.flags |= 256), xd(Ln, m, E, d, r), Fn(Ml(w, E));
              break e;
            }
          }
          d = w = Ml(w, E), Bn !== 4 && (Bn = 2), zl === null ? zl = [d] : zl.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var D = Av(d, w, r);
                xv(d, D);
                break e;
              case 1:
                E = w;
                var _ = d.type, L = d.stateNode;
                if (!(d.flags & 128) && (typeof _.getDerivedStateFromError == "function" || L !== null && typeof L.componentDidCatch == "function" && (Ha === null || !Ha.has(L)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var J = Fv(d, E, r);
                  xv(d, J);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Xv(l);
      } catch (be) {
        r = be, rn === l && l !== null && (rn = l = l.return);
        continue;
      }
      break;
    } while (!0);
  }
  function Gv() {
    var n = Eu.current;
    return Eu.current = $c, n === null ? $c : n;
  }
  function Vs() {
    (Bn === 0 || Bn === 3 || Bn === 2) && (Bn = 4), Rn === null || !(Cu & 268435455) && !(Co & 268435455) || Ri(Rn, Pn);
  }
  function uf(n, r) {
    var l = pt;
    pt |= 2;
    var o = Gv();
    (Rn !== n || Pn !== r) && (Xi = null, wu(n, r));
    do
      try {
        fy();
        break;
      } catch (c) {
        Wv(n, c);
      }
    while (!0);
    if (yd(), pt = l, Eu.current = o, rn !== null)
      throw Error(z(261));
    return Rn = null, Pn = 0, Bn;
  }
  function fy() {
    for (; rn !== null; )
      qv(rn);
  }
  function dy() {
    for (; rn !== null && !gr(); )
      qv(rn);
  }
  function qv(n) {
    var r = Jv(n.alternate, n, ea);
    n.memoizedProps = n.pendingProps, r === null ? Xv(n) : rn = r, Jc.current = null;
  }
  function Xv(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (l = uy(l, r), l !== null) {
          l.flags &= 32767, rn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          Bn = 6, rn = null;
          return;
        }
      } else if (l = ly(l, r, ea), l !== null) {
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
      ja.transition = null, ht = 1, py(n, r, l, o);
    } finally {
      ja.transition = c, ht = o;
    }
    return null;
  }
  function py(n, r, l, o) {
    do
      bo();
    while (Va !== null);
    if (pt & 6)
      throw Error(z(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(z(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Xo(n, d), n === Rn && (rn = Rn = null, Pn = 0), !(l.subtreeFlags & 2064) && !(l.flags & 2064) || To || (To = !0, eh(at, function() {
      return bo(), null;
    })), d = (l.flags & 15990) !== 0, l.subtreeFlags & 15990 || d) {
      d = ja.transition, ja.transition = null;
      var m = ht;
      ht = 1;
      var E = pt;
      pt |= 4, Jc.current = null, oy(n, l), Iv(l, n), ru(od), Bu = !!ud, od = ud = null, n.current = l, sy(l), oi(), pt = E, ht = m, ja.transition = d;
    } else
      n.current = l;
    if (To && (To = !1, Va = n, nf = c), d = n.pendingLanes, d === 0 && (Ha = null), Qo(l.stateNode), $n(n, qt()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (tf)
      throw tf = !1, n = Ud, Ud = null, n;
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
            throw Error(z(331));
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
                        if ($v(W), W === A) {
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
  function Kv(n, r, l) {
    r = Ml(l, r), r = Av(n, r, 1), n = Dl(n, r, 1), r = Xn(), n !== null && (vl(n, 1, r), $n(n, r));
  }
  function Tn(n, r, l) {
    if (n.tag === 3)
      Kv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Kv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Ha === null || !Ha.has(o))) {
            n = Ml(l, n), n = Fv(r, n, 1), r = Dl(r, n, 1), n = Xn(), r !== null && (vl(r, 1, n), $n(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function vy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = Xn(), n.pingedLanes |= n.suspendedLanes & l, Rn === n && (Pn & l) === l && (Bn === 4 || Bn === 3 && (Pn & 130023424) === Pn && 500 > qt() - ef ? wu(n, 0) : zd |= l), $n(n, r);
  }
  function Zv(n, r) {
    r === 0 && (n.mode & 1 ? (r = ju, ju <<= 1, !(ju & 130023424) && (ju = 4194304)) : r = 1);
    var l = Xn();
    n = Wi(n, r), n !== null && (vl(n, r, l), $n(n, l));
  }
  function Hd(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zv(n, l);
  }
  function hy(n, r) {
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
        throw Error(z(314));
    }
    o !== null && o.delete(r), Zv(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
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
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, An(o) ? (d = !0, uu(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Sd(r), c.updater = Dc, r.stateNode = c, c._reactInternals = r, Cd(r, o, n, l), r = Ic(null, r, o, !0, d, l)) : (r.tag = 0, nn && d && Tc(r), kn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (Us(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = my(o), n = qr(o, n), c) {
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
          throw Error(z(
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
          if (iy(r), n === null)
            throw Error(z(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, _v(n, r), Cs(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = Ml(Error(z(423)), r), r = Vv(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = Ml(Error(z(424)), r), r = Vv(n, r, o, l, c);
              break e;
            } else
              for (ya = va(r.stateNode.containerInfo.firstChild), ma = r, nn = !0, za = null, l = Nv(r, null, o, l), r.child = l; l; )
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
        return Pv(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = ro(r, null, o, l) : kn(n, r, o, l), r.child;
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
                    throw Error(z(341));
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
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Us(n, r), r.tag = 1, An(o) ? (n = !0, uu(r)) : n = !1, _n(r, l), kv(r, o, c), Cd(r, o, c, l), Ic(null, r, o, !0, n, l);
      case 19:
        return kd(n, r, l);
      case 22:
        return Jr(n, r, l);
    }
    throw Error(z(156, r.tag));
  };
  function eh(n, r) {
    return Wt(n, r);
  }
  function th(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Pa(n, r, l, o) {
    return new th(n, r, l, o);
  }
  function Vd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function my(n) {
    if (typeof n == "function")
      return Vd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === mt)
        return 11;
      if (n === Ze)
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
      Vd(n) && (m = 1);
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
          case Je:
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
                case Ze:
                  m = 14;
                  break e;
                case Rt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(z(130, n == null ? n : typeof n, ""));
        }
    return r = Pa(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function bu(n, r, l, o) {
    return n = Pa(7, n, o, r), n.lanes = l, n;
  }
  function sf(n, r, l, o) {
    return n = Pa(22, n, o, r), n.elementType = Je, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
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
  function Pd(n, r, l, o, c, d, m, E, w) {
    return n = new Bs(n, r, l, E, w), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = Pa(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sd(d), n;
  }
  function nh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Te, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Bd(n) {
    if (!n)
      return La;
    n = n._reactInternals;
    e: {
      if (ie(n) !== n || n.tag !== 1)
        throw Error(z(170));
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
      throw Error(z(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (An(l))
        return Rl(n, l, r);
    }
    return r;
  }
  function $d(n, r, l, o, c, d, m, E, w) {
    return n = Pd(l, o, !0, n, c, d, m, E, w), n.context = Bd(null), l = n.current, o = Xn(), c = Ki(l), d = Xt(o, c), d.callback = r ?? null, Dl(l, d, c), n.current.lanes = c, vl(n, c, o), $n(n, o), n;
  }
  function ff(n, r, l, o) {
    var c = r.current, d = Xn(), m = Ki(c);
    return l = Bd(l), r.context === null ? r.context = l : r.pendingContext = l, r = Xt(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = Dl(c, r, m), n !== null && (vn(n, c, m, d), xc(n, c, m)), m;
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
  function rh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Yd(n, r) {
    rh(n, r), (n = n.alternate) && rh(n, r);
  }
  function yy() {
    return null;
  }
  var Id = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function df(n) {
    this._internalRoot = n;
  }
  Ys.prototype.render = df.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(z(409));
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
  function ah() {
  }
  function gy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var A = $s(m);
          d.call(A);
        };
      }
      var m = $d(r, o, n, 0, null, !1, !1, "", ah);
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
    var w = Pd(n, 0, !1, null, null, !1, !1, "", ah);
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
      m = gy(l, r, n, c, o);
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
        }), Yd(n, 1);
    }
  }, hl = function(n) {
    if (n.tag === 13) {
      var r = Wi(n, 134217728);
      if (r !== null) {
        var l = Xn();
        vn(r, n, 134217728, l);
      }
      Yd(n, 134217728);
    }
  }, Jo = function(n) {
    if (n.tag === 13) {
      var r = Ki(n), l = Wi(n, r);
      if (l !== null) {
        var o = Xn();
        vn(l, n, r, o);
      }
      Yd(n, r);
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
                throw Error(z(90));
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
  }, cl = jd, Gl = Ti;
  var Sy = { usingClientEntryPoint: !1, Events: [vi, Ku, Cc, qa, ba, jd] }, Is = { findFiberByHostInstance: Ii, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, ih = { bundleType: Is.bundleType, version: Is.version, rendererPackageName: Is.rendererPackageName, rendererConfig: Is.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ve.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Le(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Is.findFiberByHostInstance || yy, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hf.isDisabled && hf.supportsFiber)
      try {
        dl = hf.inject(ih), Pr = hf;
      } catch {
      }
  }
  return Wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Sy, Wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Fl(r))
      throw Error(z(200));
    return nh(n, r, null, l);
  }, Wa.createRoot = function(n, r) {
    if (!Fl(n))
      throw Error(z(299));
    var l = !1, o = "", c = Id;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = Pd(n, 1, !1, null, null, l, !1, o, c), n[ni] = r.current, pi(n.nodeType === 8 ? n.parentNode : n), new df(r);
  }, Wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(z(188)) : (n = Object.keys(n).join(","), Error(z(268, n)));
    return n = Le(r), n = n === null ? null : n.stateNode, n;
  }, Wa.flushSync = function(n) {
    return Ti(n);
  }, Wa.hydrate = function(n, r, l) {
    if (!pf(r))
      throw Error(z(200));
    return vf(null, n, r, !0, l);
  }, Wa.hydrateRoot = function(n, r, l) {
    if (!Fl(n))
      throw Error(z(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = Id;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = $d(r, null, n, 1, l ?? null, c, !1, d, m), n[ni] = r.current, pi(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Ys(r);
  }, Wa.render = function(n, r, l) {
    if (!pf(r))
      throw Error(z(200));
    return vf(null, n, r, !1, l);
  }, Wa.unmountComponentAtNode = function(n) {
    if (!pf(n))
      throw Error(z(40));
    return n._reactRootContainer ? (Ti(function() {
      vf(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ni] = null;
      });
    }), !0) : !1;
  }, Wa.unstable_batchedUpdates = jd, Wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!pf(l))
      throw Error(z(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(z(38));
    return vf(n, r, l, !1, o);
  }, Wa.version = "18.2.0-next-9e3b772b8-20220608", Wa;
}
var Ga = {}, iR;
function uD() {
  if (iR)
    return Ga;
  iR = 1;
  var V = {};
  /**
   * @license React
   * react-dom.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return V.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var X = Qp, z = cR(), tt = X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ct = !1;
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
        var i = tt.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = 0, ue = 1, Re = 2, K = 3, Oe = 4, te = 5, oe = 6, Qe = 7, sn = 8, ln = 9, lt = 10, Ve = 11, _t = 12, Te = 13, ct = 14, Ye = 15, wn = 16, mn = 17, It = 18, mt = 19, Zt = 21, Be = 22, Ze = 23, Rt = 24, Je = 25, $ = !0, he = !1, T = !1, Y = !1, me = !1, Fe = !0, je = !1, ft = !1, ut = !0, dt = !0, ot = !0, Jt = /* @__PURE__ */ new Set(), Zn = {}, Jn = {};
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
    var jr = Symbol.for("react.element"), Hr = Symbol.for("react.portal"), da = Symbol.for("react.fragment"), Mi = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), Q = Symbol.for("react.provider"), ne = Symbol.for("react.context"), ie = Symbol.for("react.forward_ref"), st = Symbol.for("react.suspense"), yt = Symbol.for("react.suspense_list"), et = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), Un = Symbol.for("react.scope"), Wt = Symbol.for("react.debug_trace_mode"), Gt = Symbol.for("react.offscreen"), gr = Symbol.for("react.legacy_hidden"), oi = Symbol.for("react.cache"), qt = Symbol.for("react.tracing_marker"), Vr = Symbol.iterator, Io = "@@iterator";
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
    var zi = tt.ReactCurrentDispatcher, ci;
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
      var b = e ? e.displayName || e.name : "", N = b ? xa(b) : "";
      return typeof e == "function" && fi.set(e, N), N;
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
          case et:
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
          case et:
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
        case Je:
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
    var Za = tt.ReactDebugCurrentFrame, fn = null, Br = !1;
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
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Li(a, "checked", i, !1);
    }
    function F(e, t) {
      var a = e;
      {
        var i = Iu(t);
        !a._wrapperState.controlled && i && !ei && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ei = !0), a._wrapperState.controlled && !i && !ts && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), ts = !0);
      }
      M(e, t);
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
            var p = Rh(f);
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
    function Qf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? ji(a, !!t.multiple, i, !1) : t.defaultValue != null && ji(a, !!t.multiple, t.defaultValue, !0);
    }
    function Vm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? ji(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? ji(a, !!t.multiple, t.defaultValue, !0) : ji(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Wp(e, t) {
      var a = e, i = t.value;
      i != null && ji(a, !!t.multiple, i, !1);
    }
    var Gp = !1;
    function Wf(e, t) {
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
    function qp(e, t) {
      var a = e;
      tu("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !Gp && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", Da() || "A component"), Gp = !0);
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
    function Xp(e, t) {
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
    function Pm(e, t) {
      Xp(e, t);
    }
    var Hi = "http://www.w3.org/1999/xhtml", Bm = "http://www.w3.org/1998/Math/MathML", dc = "http://www.w3.org/2000/svg";
    function Gf(e) {
      switch (e) {
        case "svg":
          return dc;
        case "math":
          return Bm;
        default:
          return Hi;
      }
    }
    function qf(e, t) {
      return e == null || e === Hi ? Gf(t) : e === dc && t === "foreignObject" ? Hi : e;
    }
    var $m = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, pc, Kp = $m(function(e, t) {
      if (e.namespaceURI === dc && !("innerHTML" in e)) {
        pc = pc || document.createElement("div"), pc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = pc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Yr = 1, Vi = 3, gn = 8, pa = 9, Xf = 11, ls = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === Vi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, Zp = {
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
    function Jp(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var ev = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Wu).forEach(function(e) {
      ev.forEach(function(t) {
        Wu[Jp(t, e)] = Wu[e];
      });
    });
    function Sl(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Wu.hasOwnProperty(e) && Wu[e]) ? t + "px" : (la(t, e), ("" + t).trim());
    }
    var Ym = /([A-Z])/g, Im = /^ms-/;
    function Qm(e) {
      return e.replace(Ym, "-$1").toLowerCase().replace(Im, "-ms-");
    }
    var Kf = function() {
    };
    {
      var tv = /^(?:webkit|moz|o)[A-Z]/, us = /^-ms-/, os = /-(.)/g, nv = /;\s*$/, Pi = {}, Zf = {}, Jf = !1, vc = !1, ed = function(e) {
        return e.replace(os, function(t, a) {
          return a.toUpperCase();
        });
      }, rv = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          ed(e.replace(us, "ms-"))
        ));
      }, av = function(e) {
        Pi.hasOwnProperty(e) && Pi[e] || (Pi[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, iv = function(e, t) {
        Zf.hasOwnProperty(t) && Zf[t] || (Zf[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(nv, "")));
      }, Wm = function(e, t) {
        Jf || (Jf = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Gm = function(e, t) {
        vc || (vc = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Kf = function(e, t) {
        e.indexOf("-") > -1 ? rv(e) : tv.test(e) ? av(e) : nv.test(t) && iv(e, t), typeof t == "number" && (isNaN(t) ? Wm(e, t) : isFinite(t) || Gm(e, t));
      };
    }
    var qm = Kf;
    function Xm(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Qm(i)) + ":", t += Sl(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function lv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || qm(i, t[i]);
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
        for (var i = Zp[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function uv(e, t) {
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
    var ov = {
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
    }, sv = at({
      menuitem: !0
    }, ov), cv = "__html";
    function ss(e, t) {
      if (t) {
        if (sv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(cv in t.dangerouslySetInnerHTML))
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
    }, El = {}, cs = new RegExp("^(aria)-[" + De + "]*$"), td = new RegExp("^(aria)[A-Z][" + De + "]*$");
    function fv(e, t) {
      {
        if (er.call(El, t) && El[t])
          return !0;
        if (td.test(t)) {
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
          var u = fv(e, i);
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
    function dv(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !yc && (yc = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var fs = function() {
    };
    {
      var Sr = {}, nd = /^on./, pv = /^on[^A-Z]/, vv = new RegExp("^(aria)-[" + De + "]*$"), hv = new RegExp("^(aria)[A-Z][" + De + "]*$");
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
          if (nd.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Sr[t] = !0, !0;
        } else if (nd.test(t))
          return pv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Sr[t] = !0, !0;
        if (vv.test(t) || hv.test(t))
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
    var mv = function(e, t, a) {
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
      ru(e, t) || mv(e, t, a);
    }
    var gc = 1, ds = 2, ps = 4, Km = gc | ds | ps, Bi = null;
    function Zm(e) {
      Bi !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Bi = e;
    }
    function yv() {
      Bi === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Bi = null;
    }
    function gv(e) {
      return e === Bi;
    }
    function Bt(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === Vi ? t.parentNode : t;
    }
    var vs = null, $i = null, pi = null;
    function rd(e) {
      var t = Do(e);
      if (t) {
        if (typeof vs != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Rh(a);
          vs(t.stateNode, t.type, i);
        }
      }
    }
    function ad(e) {
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
        if ($i = null, pi = null, rd(e), t)
          for (var a = 0; a < t.length; a++)
            rd(t[a]);
      }
    }
    var id = function(e, t) {
      return e(t);
    }, Sv = function() {
    }, ld = !1;
    function Ev() {
      var e = Sc();
      e && (Sv(), iu());
    }
    function hs(e, t, a) {
      if (ld)
        return e(t, a);
      ld = !0;
      try {
        return id(e, t, a);
      } finally {
        ld = !1, Ev();
      }
    }
    function Ec(e, t, a) {
      id = e, Sv = a;
    }
    function ud(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function od(e, t, a) {
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
          return !!(a.disabled && ud(t));
        default:
          return !1;
      }
    }
    function lu(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Rh(a);
      if (i === null)
        return null;
      var u = i[t];
      if (od(t, e.type, i))
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
    function sd(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var Cv = sd;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var cd = document.createElement("react");
      Cv = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), x = !1, b = !0, N = window.event, U = Object.getOwnPropertyDescriptor(window, "event");
        function j() {
          cd.removeEventListener(H, ze, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = N);
        }
        var de = Array.prototype.slice.call(arguments, 3);
        function ze() {
          x = !0, j(), a.apply(i, de), b = !1;
        }
        var xe, St = !1, vt = !1;
        function k(O) {
          if (xe = O.error, St = !0, xe === null && O.colno === 0 && O.lineno === 0 && (vt = !0), O.defaultPrevented && xe != null && typeof xe == "object")
            try {
              xe._suppressLogging = !0;
            } catch {
            }
        }
        var H = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", k), cd.addEventListener(H, ze, !1), g.initEvent(H, !1, !1), cd.dispatchEvent(g), U && Object.defineProperty(window, "event", U), x && b && (St ? vt && (xe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : xe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(xe)), window.removeEventListener("error", k), !x)
          return j(), sd.apply(this, arguments);
      };
    }
    var fd = Cv, va = !1, gs = null, Yi = !1, Oa = null, Ss = {
      onError: function(e) {
        va = !0, gs = e;
      }
    };
    function ni(e, t, a, i, u, s, f, p, v) {
      va = !1, gs = null, fd.apply(Ss, arguments);
    }
    function dd(e, t, a, i, u, s, f, p, v) {
      if (ni.apply(this, arguments), va) {
        var y = Ii();
        Yi || (Yi = !0, Oa = y);
      }
    }
    function Jm() {
      if (Yi) {
        var e = Oa;
        throw Yi = !1, Oa = null, e;
      }
    }
    function ey() {
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
    ), Rv = Ir | we | Wn | ha | An | uu, Qi = (
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
    ), Tv = (
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
    ), Wr = $t | we | Dt | La | ha | hi | Rl, ai = we | Wn | ha | Rl, Gr = Ir | Dt, ar = Ma | wl | mi, su = tt.ReactCurrentOwner;
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
    function pd(e) {
      var t = za(e);
      return t !== null ? vd(t) : null;
    }
    function vd(e) {
      if (e.tag === te || e.tag === oe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = vd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function hd(e) {
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
    var md = z.unstable_scheduleCallback, _c = z.unstable_cancelCallback, wv = z.unstable_shouldYield, Zu = z.unstable_requestPaint, Fn = z.unstable_now, ty = z.unstable_getCurrentPriorityLevel, qr = z.unstable_ImmediatePriority, Ju = z.unstable_UserBlockingPriority, yi = z.unstable_NormalPriority, eo = z.unstable_LowPriority, Es = z.unstable_IdlePriority, yd = z.unstable_yieldValue, gd = z.unstable_setDisableYieldValue, _l = null, _n = null, ee = null, Er = !1, ga = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function bv(e) {
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
    function Sd(e) {
      if (_n && typeof _n.onPostCommitFiberRoot == "function")
        try {
          _n.onPostCommitFiberRoot(_l, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function _v(e) {
      if (_n && typeof _n.onCommitFiberUnmount == "function")
        try {
          _n.onCommitFiberUnmount(_l, e);
        } catch (t) {
          Er || (Er = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Xt(e) {
      if (typeof yd == "function" && (gd(e), Yt(e)), _n && typeof _n.setStrictMode == "function")
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
          var i = zv(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function xv(e) {
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
    function Ed(e) {
      ee !== null && typeof ee.markComponentPassiveEffectMountStarted == "function" && ee.markComponentPassiveEffectMountStarted(e);
    }
    function Dc() {
      ee !== null && typeof ee.markComponentPassiveEffectMountStopped == "function" && ee.markComponentPassiveEffectMountStopped();
    }
    function Dv(e) {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStarted == "function" && ee.markComponentPassiveEffectUnmountStarted(e);
    }
    function kv() {
      ee !== null && typeof ee.markComponentPassiveEffectUnmountStopped == "function" && ee.markComponentPassiveEffectUnmountStopped();
    }
    function Ov(e) {
      ee !== null && typeof ee.markComponentLayoutEffectMountStarted == "function" && ee.markComponentLayoutEffectMountStarted(e);
    }
    function Cd() {
      ee !== null && typeof ee.markComponentLayoutEffectMountStopped == "function" && ee.markComponentLayoutEffectMountStopped();
    }
    function no(e) {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStarted == "function" && ee.markComponentLayoutEffectUnmountStarted(e);
    }
    function Rs() {
      ee !== null && typeof ee.markComponentLayoutEffectUnmountStopped == "function" && ee.markComponentLayoutEffectUnmountStopped();
    }
    function Lv(e, t, a) {
      ee !== null && typeof ee.markComponentErrored == "function" && ee.markComponentErrored(e, t, a);
    }
    function Mv(e, t, a) {
      ee !== null && typeof ee.markComponentSuspended == "function" && ee.markComponentSuspended(e, t, a);
    }
    function ro(e) {
      ee !== null && typeof ee.markLayoutEffectsStarted == "function" && ee.markLayoutEffectsStarted(e);
    }
    function Nv() {
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
    function Rd(e) {
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
    ), bs = Math.clz32 ? Math.clz32 : pn, Td = Math.log, fu = Math.LN2;
    function pn(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Td(t) / fu | 0) | 0;
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
    ), wd = mu, yu = (
      /*          */
      134217728
    ), bd = (
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
    function zv(e) {
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
      var i = P, u = e.suspendedLanes, s = e.pingedLanes, f = a & bd;
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
        for (var N = e.entanglements, U = i & b; U > 0; ) {
          var j = Nl(U), de = 1 << j;
          i |= N[j], U &= ~de;
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
    function ny(e, t) {
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
    function ry(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = Nl(f), v = 1 << p, y = s[p];
        y === Kt ? ((v & i) === P || (v & u) !== P) && (s[p] = ny(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ay(e) {
      return oo(e.pendingLanes);
    }
    function Ml(e) {
      var t = e.pendingLanes & ~Sa;
      return t !== P ? t : t & Sa ? Sa : P;
    }
    function _d(e) {
      return (e & Ue) !== P;
    }
    function Ls(e) {
      return (e & bd) !== P;
    }
    function Uv(e) {
      return (e & hu) === e;
    }
    function Av(e) {
      var t = Ue | Gi | Aa;
      return (e & t) === P;
    }
    function Fv(e) {
      return (e & Ol) === e;
    }
    function Ms(e, t) {
      var a = Si | Gi | En | Aa;
      return (t & a) !== P;
    }
    function jv(e, t) {
      return (t & e.expiredLanes) !== P;
    }
    function xd(e) {
      return (e & Ol) !== P;
    }
    function Hv() {
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
    function iy(e) {
      return e;
    }
    function Vv(e, t) {
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
    function Pv(e, t) {
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
    function Dd(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = Nl(u), f = 1 << s;
        // Is this one of the newly entangled lanes?
        f & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function Bv(e, t) {
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
    function kd(e, t) {
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
    function ly(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function uy(e, t) {
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
    function Od(e) {
      ve(e);
    }
    var Xc;
    function oy(e) {
      Xc = e;
    }
    var ho;
    function Kc(e) {
      ho = e;
    }
    var Zc;
    function $v(e) {
      Zc = e;
    }
    var Ld;
    function Yv(e) {
      Ld = e;
    }
    var As = !1, mo = [], on = null, Gn = null, xr = null, yo = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), qn = [], Iv = [
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
      return Iv.indexOf(e) > -1;
    }
    function sy(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Md(e, t) {
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
        var f = sy(t, a, i, u, s);
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
    function Qv(e, t, a, i, u) {
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
    function Nd(e) {
      var t = Gs(e.target);
      if (t !== null) {
        var a = bl(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = Tc(a);
            if (u !== null) {
              e.blockedOn = u, Ld(e.priority, function() {
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
    function cy(e) {
      for (var t = Zc(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < qn.length && po(t, qn[i].priority); i++)
        ;
      qn.splice(i, 0, a), i === 0 && Nd(a);
    }
    function Eu(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Rr(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Zm(s), u.target.dispatchEvent(s), yv();
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
      e.blockedOn === t && (e.blockedOn = null, As || (As = !0, z.unstable_scheduleCallback(z.unstable_NormalPriority, ja)));
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
        Nd(f), f.blockedOn === null && qn.shift();
      }
    }
    var rn = tt.ReactCurrentBatchConfig, Pn = !0;
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
      Pn && zd(e, t, a, i);
    }
    function zd(e, t, a, i) {
      var u = Rr(e, t, a, i);
      if (u === null) {
        xy(e, t, i, zl, a), Md(e, i);
        return;
      }
      if (Qv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Md(e, i), t & ps && Ci(e)) {
        for (; u !== null; ) {
          var s = Do(u);
          s !== null && Od(s);
          var f = Rr(e, t, a, i);
          if (f === null && xy(e, t, i, zl, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      xy(e, t, i, null, a);
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
          var t = ty();
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
    function Ud(e, t, a, i) {
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
    }), Ad = vn(Tu), Fd, Ri, wo;
    function jd(e) {
      e !== wo && (wo && e.type === "mousemove" ? (Fd = e.screenX - wo.screenX, Ri = e.screenY - wo.screenY) : (Fd = 0, Ri = 0), wo = e);
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
      getModifierState: Hd,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (jd(e), Fd);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Ri;
      }
    }), lf = vn(Ti), wu = at({}, Ti, {
      dataTransfer: 0
    }), Wv = vn(wu), Gv = at({}, Tu, {
      relatedTarget: 0
    }), Vs = vn(Gv), uf = at({}, $n, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), fy = vn(uf), dy = at({}, $n, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), qv = vn(dy), Xv = at({}, $n, {
      data: 0
    }), Ul = vn(Xv), py = Ul, bo = {
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
    }, Kv = {
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
      return e.type === "keydown" || e.type === "keyup" ? Kv[e.keyCode] || "Unidentified" : "";
    }
    var vy = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Zv(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = vy[e];
      return i ? !!a[i] : !1;
    }
    function Hd(e) {
      return Zv;
    }
    var hy = at({}, Tu, {
      key: Tn,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Hd,
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
    }), Jv = vn(hy), eh = at({}, Ti, {
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
    }), th = vn(eh), Pa = at({}, Tu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Hd
    }), Vd = vn(Pa), my = at({}, $n, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Al = vn(my), of = at({}, Ti, {
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
    var Pd = yn && "TextEvent" in window && !Bs, nh = yn && (!Ps || Bs && Bs > 8 && Bs <= 11), Bd = 32, $d = String.fromCharCode(Bd);
    function ff() {
      Fr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Fr("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Fr("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var $s = !1;
    function rh(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function Yd(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function yy(e, t) {
      return e === "keydown" && t.keyCode === cf;
    }
    function Id(e, t) {
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
      if (Ps ? s = Yd(t) : Fl ? Id(t, i) && (s = "onCompositionEnd") : yy(t, i) && (s = "onCompositionStart"), !s)
        return null;
      nh && !Ys(i) && (!Fl && s === "onCompositionStart" ? Fl = nf(u) : s === "onCompositionEnd" && Fl && (f = rf()));
      var p = sh(a, s);
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
    function ah(e, t) {
      switch (e) {
        case "compositionend":
          return df(t);
        case "keypress":
          var a = t.which;
          return a !== Bd ? null : ($s = !0, $d);
        case "textInput":
          var i = t.data;
          return i === $d && $s ? null : i;
        default:
          return null;
      }
    }
    function gy(e, t) {
      if (Fl) {
        if (e === "compositionend" || !Ps && Id(e, t)) {
          var a = rf();
          return js(), Fl = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!rh(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return nh && !Ys(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vf(e, t, a, i, u) {
      var s;
      if (Pd ? s = ah(t, i) : s = gy(t, i), !s)
        return null;
      var f = sh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new py("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function Sy(e, t, a, i, u, s, f) {
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
    function ih(e) {
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
      var u = sh(t, "onChange");
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
      L0(e, 0);
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
      if (c(p) ? v = w : ih(p) ? A ? v = D : (v = ye, y = se) : Ce(p) && (v = Ln), v) {
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
      if (p && !gv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (Gs(y) || ip(y)))
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
        var b, N;
        if (v) {
          var U = i.relatedTarget || i.toElement;
          if (b = a, N = U ? Gs(U) : null, N !== null) {
            var j = bl(N);
            (N !== j || N.tag !== te && N.tag !== oe) && (N = null);
          }
        } else
          b = null, N = a;
        if (b !== N) {
          var de = lf, ze = "onMouseLeave", xe = "onMouseEnter", St = "mouse";
          (t === "pointerout" || t === "pointerover") && (de = th, ze = "onPointerLeave", xe = "onPointerEnter", St = "pointer");
          var vt = b == null ? g : Cf(b), k = N == null ? g : Cf(N), H = new de(ze, St + "leave", b, i, u);
          H.target = vt, H.relatedTarget = k;
          var O = null, q = Gs(u);
          if (q === a) {
            var pe = new de(xe, St + "enter", N, i, u);
            pe.target = k, pe.relatedTarget = vt, O = pe;
          }
          NR(e, H, O, b, N);
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
    function Ey(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return pR(e, u, s, f, p);
    }
    function pR(e, t, a, i, u) {
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
    function vR(e, t) {
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
    function S0(e) {
      return e && e.nodeType === Vi;
    }
    function E0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : S0(e) ? !1 : S0(t) ? E0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function hR(e) {
      return e && e.ownerDocument && E0(e.ownerDocument.documentElement, e);
    }
    function mR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function C0() {
      for (var e = window, t = di(); t instanceof e.HTMLIFrameElement; ) {
        if (mR(t))
          e = t.contentWindow;
        else
          return t;
        t = di(e.document);
      }
      return t;
    }
    function Cy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function yR() {
      var e = C0();
      return {
        focusedElem: e,
        selectionRange: Cy(e) ? SR(e) : null
      };
    }
    function gR(e) {
      var t = C0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && hR(a)) {
        i !== null && Cy(a) && ER(a, i);
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
    function SR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ey(e), t || {
        start: 0,
        end: 0
      };
    }
    function ER(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : vR(e, t);
    }
    var CR = yn && "documentMode" in document && document.documentMode <= 11;
    function RR() {
      Fr("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var mf = null, Ry = null, Qd = null, Ty = !1;
    function TR(e) {
      if ("selectionStart" in e && Cy(e))
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
    function wR(e) {
      return e.window === e ? e.document : e.nodeType === pa ? e : e.ownerDocument;
    }
    function R0(e, t, a) {
      var i = wR(a);
      if (!(Ty || mf == null || mf !== di(i))) {
        var u = TR(mf);
        if (!Qd || !He(Qd, u)) {
          Qd = u;
          var s = sh(Ry, "onSelect");
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
    function bR(e, t, a, i, u, s, f) {
      var p = a ? Cf(a) : window;
      switch (t) {
        case "focusin":
          (ih(p) || p.contentEditable === "true") && (mf = p, Ry = a, Qd = null);
          break;
        case "focusout":
          mf = null, Ry = null, Qd = null;
          break;
        case "mousedown":
          Ty = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ty = !1, R0(e, i, u);
          break;
        case "selectionchange":
          if (CR)
            break;
        case "keydown":
        case "keyup":
          R0(e, i, u);
      }
    }
    function lh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var yf = {
      animationend: lh("Animation", "AnimationEnd"),
      animationiteration: lh("Animation", "AnimationIteration"),
      animationstart: lh("Animation", "AnimationStart"),
      transitionend: lh("Transition", "TransitionEnd")
    }, wy = {}, T0 = {};
    yn && (T0 = document.createElement("div").style, "AnimationEvent" in window || (delete yf.animationend.animation, delete yf.animationiteration.animation, delete yf.animationstart.animation), "TransitionEvent" in window || delete yf.transitionend.transition);
    function uh(e) {
      if (wy[e])
        return wy[e];
      if (!yf[e])
        return e;
      var t = yf[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in T0)
          return wy[e] = t[a];
      return e;
    }
    var w0 = uh("animationend"), b0 = uh("animationiteration"), _0 = uh("animationstart"), x0 = uh("transitionend"), D0 = /* @__PURE__ */ new Map(), k0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function _o(e, t) {
      D0.set(e, t), Fr(t, [e]);
    }
    function _R() {
      for (var e = 0; e < k0.length; e++) {
        var t = k0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        _o(a, "on" + i);
      }
      _o(w0, "onAnimationEnd"), _o(b0, "onAnimationIteration"), _o(_0, "onAnimationStart"), _o("dblclick", "onDoubleClick"), _o("focusin", "onFocus"), _o("focusout", "onBlur"), _o(x0, "onTransitionEnd");
    }
    function xR(e, t, a, i, u, s, f) {
      var p = D0.get(t);
      if (p !== void 0) {
        var v = af, y = t;
        switch (t) {
          case "keypress":
            if (Ru(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = Jv;
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
            v = Wv;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = Vd;
            break;
          case w0:
          case b0:
          case _0:
            v = fy;
            break;
          case x0:
            v = Al;
            break;
          case "scroll":
            v = Ad;
            break;
          case "wheel":
            v = bu;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = qv;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = th;
            break;
        }
        var g = (s & ps) !== 0;
        {
          var x = !g && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", b = LR(a, p, i.type, g, x);
          if (b.length > 0) {
            var N = new v(p, y, null, i, u);
            e.push({
              event: N,
              listeners: b
            });
          }
        }
      }
    }
    _R(), J(), n(), RR(), ff();
    function DR(e, t, a, i, u, s, f) {
      xR(e, t, a, i, u, s);
      var p = (s & Km) === 0;
      p && (be(e, t, a, i, u), L(e, t, a, i, u), bR(e, t, a, i, u), Sy(e, t, a, i, u));
    }
    var Wd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], by = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Wd));
    function O0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, dd(i, t, void 0, e), e.currentTarget = null;
    }
    function kR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          O0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], x = g.instance, b = g.currentTarget, N = g.listener;
          if (x !== i && e.isPropagationStopped())
            return;
          O0(e, N, b), i = x;
        }
    }
    function L0(e, t) {
      for (var a = (t & ps) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        kR(s, f, a);
      }
      Jm();
    }
    function OR(e, t, a, i, u) {
      var s = Bt(a), f = [];
      DR(f, e, i, a, s, t), L0(f, t);
    }
    function hn(e, t) {
      by.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = lw(t), u = zR(e, a);
      i.has(u) || (M0(t, e, ds, a), i.add(u));
    }
    function _y(e, t, a) {
      by.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= ps), M0(a, e, i, t);
    }
    var oh = "_reactListening" + Math.random().toString(36).slice(2);
    function Gd(e) {
      if (!e[oh]) {
        e[oh] = !0, Jt.forEach(function(a) {
          a !== "selectionchange" && (by.has(a) || _y(a, !1, e), _y(a, !0, e));
        });
        var t = e.nodeType === pa ? e : e.ownerDocument;
        t !== null && (t[oh] || (t[oh] = !0, _y("selectionchange", !1, t)));
      }
    }
    function M0(e, t, a, i, u) {
      var s = Bn(e, t, a), f = void 0;
      ms && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? tf(e, t, s, f) : Xi(e, t, s) : f !== void 0 ? Ud(e, t, s, f) : Ro(e, t, s);
    }
    function N0(e, t) {
      return e === t || e.nodeType === gn && e.parentNode === t;
    }
    function xy(e, t, a, i, u) {
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
                if (N0(y, f))
                  break;
                if (v === Oe)
                  for (var g = p.return; g !== null; ) {
                    var x = g.tag;
                    if (x === K || x === Oe) {
                      var b = g.stateNode.containerInfo;
                      if (N0(b, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var N = Gs(y);
                  if (N === null)
                    return;
                  var U = N.tag;
                  if (U === te || U === oe) {
                    p = s = N;
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
        return OR(e, t, a, s);
      });
    }
    function qd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function LR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var x = y, b = x.stateNode, N = x.tag;
        if (N === te && b !== null && (g = b, p !== null)) {
          var U = lu(y, p);
          U != null && v.push(qd(y, U, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function sh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === te && f !== null) {
          var v = f, y = lu(u, a);
          y != null && i.unshift(qd(u, y, v));
          var g = lu(u, t);
          g != null && i.push(qd(u, g, v));
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
    function MR(e, t) {
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
    function z0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, x = v.tag;
        if (y !== null && y === i)
          break;
        if (x === te && g !== null) {
          var b = g;
          if (u) {
            var N = lu(p, s);
            N != null && f.unshift(qd(p, N, b));
          } else if (!u) {
            var U = lu(p, s);
            U != null && f.push(qd(p, U, b));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function NR(e, t, a, i, u) {
      var s = i && u ? MR(i, u) : null;
      i !== null && z0(e, t, i, s, !1), u !== null && a !== null && z0(e, a, u, s, !0);
    }
    function zR(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Ba = !1, Xd = "dangerouslySetInnerHTML", ch = "suppressContentEditableWarning", xo = "suppressHydrationWarning", U0 = "autoFocus", Qs = "children", Ws = "style", fh = "__html", Dy, dh, Kd, A0, ph, F0, j0;
    Dy = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, dh = function(e, t) {
      qu(e, t), dv(e, t), Cl(e, t, {
        registrationNameDependencies: Zn,
        possibleRegistrationNames: Jn
      });
    }, F0 = yn && !document.documentMode, Kd = function(e, t, a) {
      if (!Ba) {
        var i = vh(a), u = vh(t);
        u !== i && (Ba = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, A0 = function(e) {
      if (!Ba) {
        Ba = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, ph = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, j0 = function(e, t) {
      var a = e.namespaceURI === Hi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var UR = /\r\n?/g, AR = /\u0000|\uFFFD/g;
    function vh(e) {
      ua(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(UR, `
`).replace(AR, "");
    }
    function hh(e, t, a, i) {
      var u = vh(t), s = vh(e);
      if (s !== u && (i && (Ba || (Ba = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && $))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function H0(e) {
      return e.nodeType === pa ? e : e.ownerDocument;
    }
    function FR() {
    }
    function mh(e) {
      e.onclick = FR;
    }
    function jR(e, t, a, i, u) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === Ws)
            f && Object.freeze(f), lv(t, f);
          else if (s === Xd) {
            var p = f ? f[fh] : void 0;
            p != null && Kp(t, p);
          } else if (s === Qs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && ls(t, f);
            } else
              typeof f == "number" && ls(t, "" + f);
          else
            s === ch || s === xo || s === U0 || (Zn.hasOwnProperty(s) ? f != null && (typeof f != "function" && ph(s, f), s === "onScroll" && hn("scroll", t)) : f != null && Li(t, s, f, u));
        }
    }
    function HR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === Ws ? lv(e, f) : s === Xd ? Kp(e, f) : s === Qs ? ls(e, f) : Li(e, s, f, i);
      }
    }
    function VR(e, t, a, i) {
      var u, s = H0(a), f, p = i;
      if (p === Hi && (p = Gf(e)), p === Hi) {
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
      return p === Hi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !er.call(Dy, e) && (Dy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function PR(e, t) {
      return H0(t).createTextNode(e);
    }
    function BR(e, t, a, i) {
      var u = ru(t, a);
      dh(t, a);
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
          for (var f = 0; f < Wd.length; f++)
            hn(Wd[f], e);
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
          qp(e, a), s = Wf(e, a), hn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ss(t, s), jR(t, e, i, s, u), t) {
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
          Qf(e, a);
          break;
        default:
          typeof s.onClick == "function" && mh(e);
          break;
      }
    }
    function $R(e, t, a, i, u) {
      dh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = as(e, a), p = as(e, i), s = [];
          break;
        case "textarea":
          f = Wf(e, a), p = Wf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && mh(e);
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
            v === Xd || v === Qs || v === ch || v === xo || v === U0 || (Zn.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var b = p[v], N = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || b === N || b == null && N == null))
          if (v === Ws)
            if (b && Object.freeze(b), N) {
              for (y in N)
                N.hasOwnProperty(y) && (!b || !b.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in b)
                b.hasOwnProperty(y) && N[y] !== b[y] && (g || (g = {}), g[y] = b[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = b;
          else if (v === Xd) {
            var U = b ? b[fh] : void 0, j = N ? N[fh] : void 0;
            U != null && j !== U && (s = s || []).push(v, U);
          } else
            v === Qs ? (typeof b == "string" || typeof b == "number") && (s = s || []).push(v, "" + b) : v === ch || v === xo || (Zn.hasOwnProperty(v) ? (b != null && (typeof b != "function" && ph(v, b), v === "onScroll" && hn("scroll", e)), !s && N !== b && (s = [])) : (s = s || []).push(v, b));
      }
      return g && (uv(g, p[Ws]), (s = s || []).push(Ws, g)), s;
    }
    function YR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = ru(a, i), f = ru(a, u);
      switch (HR(e, t, s, f), a) {
        case "input":
          F(e, u);
          break;
        case "textarea":
          Xp(e, u);
          break;
        case "select":
          Vm(e, u);
          break;
      }
    }
    function IR(e) {
      {
        var t = e.toLowerCase();
        return hc.hasOwnProperty(t) && hc[t] || null;
      }
    }
    function QR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = ru(t, a), dh(t, a), t) {
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
          for (var y = 0; y < Wd.length; y++)
            hn(Wd[y], e);
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
          qp(e, a), hn("invalid", e);
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
      var N = null;
      for (var U in a)
        if (a.hasOwnProperty(U)) {
          var j = a[U];
          if (U === Qs)
            typeof j == "string" ? e.textContent !== j && (a[xo] !== !0 && hh(e.textContent, j, s, f), N = [Qs, j]) : typeof j == "number" && e.textContent !== "" + j && (a[xo] !== !0 && hh(e.textContent, j, s, f), N = [Qs, "" + j]);
          else if (Zn.hasOwnProperty(U))
            j != null && (typeof j != "function" && ph(U, j), U === "onScroll" && hn("scroll", e));
          else if (f && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof p == "boolean") {
            var de = void 0, ze = p && je ? null : Qn(U);
            if (a[xo] !== !0) {
              if (!(U === ch || U === xo || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              U === "value" || U === "checked" || U === "selected")) {
                if (U === Xd) {
                  var xe = e.innerHTML, St = j ? j[fh] : void 0;
                  if (St != null) {
                    var vt = j0(e, St);
                    vt !== xe && Kd(U, xe, vt);
                  }
                } else if (U === Ws) {
                  if (v.delete(U), F0) {
                    var k = Xm(j);
                    de = e.getAttribute("style"), k !== de && Kd(U, de, k);
                  }
                } else if (p && !je)
                  v.delete(U.toLowerCase()), de = _a(e, U, j), j !== de && Kd(U, de, j);
                else if (!cn(U, ze, p) && !At(U, j, ze, p)) {
                  var H = !1;
                  if (ze !== null)
                    v.delete(ze.attributeName), de = Ka(e, U, j, ze);
                  else {
                    var O = i;
                    if (O === Hi && (O = Gf(t)), O === Hi)
                      v.delete(U.toLowerCase());
                    else {
                      var q = IR(U);
                      q !== null && q !== U && (H = !0, v.delete(q)), v.delete(U);
                    }
                    de = _a(e, U, j);
                  }
                  var pe = je;
                  !pe && j !== de && !H && Kd(U, de, j);
                }
              }
            }
          }
        }
      switch (f && // $FlowFixMe - Should be inferred as not undefined.
      v.size > 0 && a[xo] !== !0 && A0(v), t) {
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
          typeof a.onClick == "function" && mh(e);
          break;
      }
      return N;
    }
    function WR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function ky(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function Oy(e, t) {
      {
        if (Ba)
          return;
        Ba = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Ly(e, t, a) {
      {
        if (Ba)
          return;
        Ba = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function My(e, t) {
      {
        if (t === "" || Ba)
          return;
        Ba = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function GR(e, t, a) {
      switch (t) {
        case "input":
          Ee(e, a);
          return;
        case "textarea":
          Pm(e, a);
          return;
        case "select":
          Wp(e, a);
          return;
      }
    }
    var Zd = function() {
    }, Jd = function() {
    };
    {
      var qR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], V0 = [
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
      ], XR = V0.concat(["button"]), KR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], P0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      Jd = function(e, t) {
        var a = at({}, e || P0), i = {
          tag: t
        };
        return V0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), XR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), qR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var ZR = function(e, t) {
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
            return KR.indexOf(t) === -1;
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
      }, JR = function(e, t) {
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
      }, B0 = {};
      Zd = function(e, t, a) {
        a = a || P0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = ZR(e, u) ? null : i, f = s ? null : JR(e, a), p = s || f;
        if (p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!B0[y]) {
            B0[y] = !0;
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
    var yh = "suppressHydrationWarning", gh = "$", Sh = "/$", ep = "$?", tp = "$!", eT = "style", Ny = null, zy = null;
    function tT(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case pa:
        case Xf: {
          t = i === pa ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : qf(null, "");
          break;
        }
        default: {
          var s = i === gn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = qf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = Jd(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function nT(e, t, a) {
      {
        var i = e, u = qf(i.namespace, t), s = Jd(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function kD(e) {
      return e;
    }
    function rT(e) {
      Ny = Eo(), zy = yR();
      var t = null;
      return ea(!1), t;
    }
    function aT(e) {
      gR(zy), ea(Ny), Ny = null, zy = null;
    }
    function iT(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (Zd(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = Jd(f.ancestorInfo, e);
          Zd(null, p, v);
        }
        s = f.namespace;
      }
      var y = VR(e, t, a, s);
      return ap(u, y), By(y, t), y;
    }
    function lT(e, t) {
      e.appendChild(t);
    }
    function uT(e, t, a, i, u) {
      switch (BR(e, t, a, i), t) {
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
    function oT(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = Jd(f.ancestorInfo, t);
          Zd(null, p, v);
        }
      }
      return $R(e, t, a, i);
    }
    function Uy(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function sT(e, t, a, i) {
      {
        var u = a;
        Zd(null, e, u.ancestorInfo);
      }
      var s = PR(e, t);
      return ap(i, s), s;
    }
    function cT() {
      var e = window.event;
      return e === void 0 ? Ei : ef(e.type);
    }
    var Ay = typeof setTimeout == "function" ? setTimeout : void 0, fT = typeof clearTimeout == "function" ? clearTimeout : void 0, Fy = -1, $0 = typeof Promise == "function" ? Promise : void 0, dT = typeof queueMicrotask == "function" ? queueMicrotask : typeof $0 < "u" ? function(e) {
      return $0.resolve(null).then(e).catch(pT);
    } : Ay;
    function pT(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function vT(e, t, a, i) {
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
    function hT(e, t, a, i, u, s) {
      YR(e, t, a, i, u), By(e, u);
    }
    function Y0(e) {
      ls(e, "");
    }
    function mT(e, t, a) {
      e.nodeValue = a;
    }
    function yT(e, t) {
      e.appendChild(t);
    }
    function gT(e, t) {
      var a;
      e.nodeType === gn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && mh(a);
    }
    function ST(e, t, a) {
      e.insertBefore(t, a);
    }
    function ET(e, t, a) {
      e.nodeType === gn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function CT(e, t) {
      e.removeChild(t);
    }
    function RT(e, t) {
      e.nodeType === gn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function jy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === gn) {
          var s = u.data;
          if (s === Sh)
            if (i === 0) {
              e.removeChild(u), Rn(t);
              return;
            } else
              i--;
          else
            (s === gh || s === ep || s === tp) && i++;
        }
        a = u;
      } while (a);
      Rn(t);
    }
    function TT(e, t) {
      e.nodeType === gn ? jy(e.parentNode, t) : e.nodeType === Yr && jy(e, t), Rn(e);
    }
    function wT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function bT(e) {
      e.nodeValue = "";
    }
    function _T(e, t) {
      e = e;
      var a = t[eT], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Sl("display", i);
    }
    function xT(e, t) {
      e.nodeValue = t;
    }
    function DT(e) {
      e.nodeType === Yr ? e.textContent = "" : e.nodeType === pa && e.documentElement && e.removeChild(e.documentElement);
    }
    function kT(e, t, a) {
      return e.nodeType !== Yr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function OT(e, t) {
      return t === "" || e.nodeType !== Vi ? null : e;
    }
    function LT(e) {
      return e.nodeType !== gn ? null : e;
    }
    function I0(e) {
      return e.data === ep;
    }
    function Hy(e) {
      return e.data === tp;
    }
    function MT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function NT(e, t) {
      e._reactRetry = t;
    }
    function Eh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Yr || t === Vi)
          break;
        if (t === gn) {
          var a = e.data;
          if (a === gh || a === tp || a === ep)
            break;
          if (a === Sh)
            return null;
        }
      }
      return e;
    }
    function np(e) {
      return Eh(e.nextSibling);
    }
    function zT(e) {
      return Eh(e.firstChild);
    }
    function UT(e) {
      return Eh(e.firstChild);
    }
    function AT(e) {
      return Eh(e.nextSibling);
    }
    function FT(e, t, a, i, u, s, f) {
      ap(s, e), By(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & _e) !== Ne;
      return QR(e, t, a, p, i, y, f);
    }
    function jT(e, t, a, i) {
      return ap(a, e), a.mode & _e, WR(e, t);
    }
    function HT(e, t) {
      ap(t, e);
    }
    function VT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var i = t.data;
          if (i === Sh) {
            if (a === 0)
              return np(t);
            a--;
          } else
            (i === gh || i === tp || i === ep) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function Q0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === gn) {
          var i = t.data;
          if (i === gh || i === tp || i === ep) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Sh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function PT(e) {
      Rn(e);
    }
    function BT(e) {
      Rn(e);
    }
    function $T(e) {
      return e !== "head" && e !== "body";
    }
    function YT(e, t, a, i) {
      var u = !0;
      hh(t.nodeValue, a, i, u);
    }
    function IT(e, t, a, i, u, s) {
      if (t[yh] !== !0) {
        var f = !0;
        hh(i.nodeValue, u, s, f);
      }
    }
    function QT(e, t) {
      t.nodeType === Yr ? ky(e, t) : t.nodeType === gn || Oy(e, t);
    }
    function WT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Yr ? ky(a, t) : t.nodeType === gn || Oy(a, t));
      }
    }
    function GT(e, t, a, i, u) {
      (u || t[yh] !== !0) && (i.nodeType === Yr ? ky(a, i) : i.nodeType === gn || Oy(a, i));
    }
    function qT(e, t, a) {
      Ly(e, t);
    }
    function XT(e, t) {
      My(e, t);
    }
    function KT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Ly(i, t);
      }
    }
    function ZT(e, t) {
      {
        var a = e.parentNode;
        a !== null && My(a, t);
      }
    }
    function JT(e, t, a, i, u, s) {
      (s || t[yh] !== !0) && Ly(a, i);
    }
    function ew(e, t, a, i, u) {
      (u || t[yh] !== !0) && My(a, i);
    }
    function tw(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function nw(e) {
      Gd(e);
    }
    var Sf = Math.random().toString(36).slice(2), Ef = "__reactFiber$" + Sf, Vy = "__reactProps$" + Sf, rp = "__reactContainer$" + Sf, Py = "__reactEvents$" + Sf, rw = "__reactListeners$" + Sf, aw = "__reactHandles$" + Sf;
    function iw(e) {
      delete e[Ef], delete e[Vy], delete e[Py], delete e[rw], delete e[aw];
    }
    function ap(e, t) {
      t[Ef] = e;
    }
    function Ch(e, t) {
      t[rp] = e;
    }
    function W0(e) {
      e[rp] = null;
    }
    function ip(e) {
      return !!e[rp];
    }
    function Gs(e) {
      var t = e[Ef];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[rp] || a[Ef], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = Q0(e); u !== null; ) {
              var s = u[Ef];
              if (s)
                return s;
              u = Q0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Do(e) {
      var t = e[Ef] || e[rp];
      return t && (t.tag === te || t.tag === oe || t.tag === Te || t.tag === K) ? t : null;
    }
    function Cf(e) {
      if (e.tag === te || e.tag === oe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Rh(e) {
      return e[Vy] || null;
    }
    function By(e, t) {
      e[Vy] = t;
    }
    function lw(e) {
      var t = e[Py];
      return t === void 0 && (t = e[Py] = /* @__PURE__ */ new Set()), t;
    }
    var G0 = {}, q0 = tt.ReactDebugCurrentFrame;
    function Th(e) {
      if (e) {
        var t = e._owner, a = ht(e.type, e._source, t ? t.type : null);
        q0.setExtraStackFrame(a);
      } else
        q0.setExtraStackFrame(null);
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
            p && !(p instanceof Error) && (Th(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Th(null)), p instanceof Error && !(p.message in G0) && (G0[p.message] = !0, Th(u), S("Failed %s type: %s", a, p.message), Th(null));
          }
      }
    }
    var $y = [], wh;
    wh = [];
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
      t !== wh[_u] && S("Unexpected Fiber popped."), e.current = $y[_u], $y[_u] = null, wh[_u] = null, _u--;
    }
    function na(e, t, a) {
      _u++, $y[_u] = e.current, wh[_u] = a, e.current = t;
    }
    var Yy;
    Yy = {};
    var ii = {};
    Object.freeze(ii);
    var xu = ko(ii), jl = ko(!1), Iy = ii;
    function Rf(e, t, a) {
      return a && Hl(t) ? Iy : xu.current;
    }
    function X0(e, t, a) {
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
        return u && X0(e, t, s), s;
      }
    }
    function bh() {
      return jl.current;
    }
    function Hl(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function _h(e) {
      ta(jl, e), ta(xu, e);
    }
    function Qy(e) {
      ta(jl, e), ta(xu, e);
    }
    function K0(e, t, a) {
      {
        if (xu.current !== ii)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        na(xu, t, e), na(jl, a, e);
      }
    }
    function Z0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ie(e) || "Unknown";
            Yy[s] || (Yy[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
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
    function xh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || ii;
        return Iy = xu.current, na(xu, a, e), na(jl, jl.current, e), !0;
      }
    }
    function J0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Z0(e, t, Iy);
          i.__reactInternalMemoizedMergedChildContext = u, ta(jl, e), ta(xu, e), na(xu, u, e), na(jl, a, e);
        } else
          ta(jl, e), na(jl, a, e);
      }
    }
    function uw(e) {
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
    var Oo = 0, Dh = 1, Du = null, Wy = !1, Gy = !1;
    function eE(e) {
      Du === null ? Du = [e] : Du.push(e);
    }
    function ow(e) {
      Wy = !0, eE(e);
    }
    function tE() {
      Wy && Lo();
    }
    function Lo() {
      if (!Gy && Du !== null) {
        Gy = !0;
        var e = 0, t = Fa();
        try {
          var a = !0, i = Du;
          for (Cn(On); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          Du = null, Wy = !1;
        } catch (s) {
          throw Du !== null && (Du = Du.slice(e + 1)), md(qr, Lo), s;
        } finally {
          Cn(t), Gy = !1;
        }
      }
      return null;
    }
    var wf = [], bf = 0, kh = null, Oh = 0, wi = [], bi = 0, qs = null, ku = 1, Ou = "";
    function sw(e) {
      return Ks(), (e.flags & Tv) !== Me;
    }
    function cw(e) {
      return Ks(), Oh;
    }
    function fw() {
      var e = Ou, t = ku, a = t & ~dw(t);
      return a.toString(32) + e;
    }
    function Xs(e, t) {
      Ks(), wf[bf++] = Oh, wf[bf++] = kh, kh = e, Oh = t;
    }
    function nE(e, t, a) {
      Ks(), wi[bi++] = ku, wi[bi++] = Ou, wi[bi++] = qs, qs = e;
      var i = ku, u = Ou, s = Lh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Lh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, x = (f & g).toString(32), b = f >> y, N = s - y, U = Lh(t) + N, j = p << N, de = j | b, ze = x + u;
        ku = 1 << U | de, Ou = ze;
      } else {
        var xe = p << s, St = xe | f, vt = u;
        ku = 1 << v | St, Ou = vt;
      }
    }
    function qy(e) {
      Ks();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        Xs(e, a), nE(e, a, i);
      }
    }
    function Lh(e) {
      return 32 - bs(e);
    }
    function dw(e) {
      return 1 << Lh(e) - 1;
    }
    function Xy(e) {
      for (; e === kh; )
        kh = wf[--bf], wf[bf] = null, Oh = wf[--bf], wf[bf] = null;
      for (; e === qs; )
        qs = wi[--bi], wi[bi] = null, Ou = wi[--bi], wi[bi] = null, ku = wi[--bi], wi[bi] = null;
    }
    function pw() {
      return Ks(), qs !== null ? {
        id: ku,
        overflow: Ou
      } : null;
    }
    function vw(e, t) {
      Ks(), wi[bi++] = ku, wi[bi++] = Ou, wi[bi++] = qs, ku = t.id, Ou = t.overflow, qs = e;
    }
    function Ks() {
      kr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var Dr = null, _i = null, el = !1, Zs = !1, Mo = null;
    function hw() {
      el && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function rE() {
      Zs = !0;
    }
    function mw() {
      return Zs;
    }
    function yw(e) {
      var t = e.stateNode.containerInfo;
      return _i = UT(t), Dr = e, el = !0, Mo = null, Zs = !1, !0;
    }
    function gw(e, t, a) {
      return _i = AT(t), Dr = e, el = !0, Mo = null, Zs = !1, a !== null && vw(e, a), !0;
    }
    function aE(e, t) {
      switch (e.tag) {
        case K: {
          QT(e.stateNode.containerInfo, t);
          break;
        }
        case te: {
          var a = (e.mode & _e) !== Ne;
          GT(
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
          i.dehydrated !== null && WT(i.dehydrated, t);
          break;
        }
      }
    }
    function iE(e, t) {
      aE(e, t);
      var a = Cx();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Dt) : i.push(a);
    }
    function Ky(e, t) {
      {
        if (Zs)
          return;
        switch (e.tag) {
          case K: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case te:
                var i = t.type;
                t.pendingProps, qT(a, i);
                break;
              case oe:
                var u = t.pendingProps;
                XT(a, u);
                break;
            }
            break;
          }
          case te: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case te: {
                var v = t.type, y = t.pendingProps, g = (e.mode & _e) !== Ne;
                JT(
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
                ew(
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
            var N = e.memoizedState, U = N.dehydrated;
            if (U !== null)
              switch (t.tag) {
                case te:
                  var j = t.type;
                  t.pendingProps, KT(U, j);
                  break;
                case oe:
                  var de = t.pendingProps;
                  ZT(U, de);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function lE(e, t) {
      t.flags = t.flags & ~hi | $t, Ky(e, t);
    }
    function uE(e, t) {
      switch (e.tag) {
        case te: {
          var a = e.type;
          e.pendingProps;
          var i = kT(t, a);
          return i !== null ? (e.stateNode = i, Dr = e, _i = zT(i), !0) : !1;
        }
        case oe: {
          var u = e.pendingProps, s = OT(t, u);
          return s !== null ? (e.stateNode = s, Dr = e, _i = null, !0) : !1;
        }
        case Te: {
          var f = LT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: pw(),
              retryLane: Sa
            };
            e.memoizedState = p;
            var v = Rx(f);
            return v.return = e, e.child = v, Dr = e, _i = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Zy(e) {
      return (e.mode & _e) !== Ne && (e.flags & We) === Me;
    }
    function Jy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function eg(e) {
      if (el) {
        var t = _i;
        if (!t) {
          Zy(e) && (Ky(Dr, e), Jy()), lE(Dr, e), el = !1, Dr = e;
          return;
        }
        var a = t;
        if (!uE(e, t)) {
          Zy(e) && (Ky(Dr, e), Jy()), t = np(a);
          var i = Dr;
          if (!t || !uE(e, t)) {
            lE(Dr, e), el = !1, Dr = e;
            return;
          }
          iE(i, a);
        }
      }
    }
    function Sw(e, t, a) {
      var i = e.stateNode, u = !Zs, s = FT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function Ew(e) {
      var t = e.stateNode, a = e.memoizedProps, i = jT(t, a, e);
      if (i) {
        var u = Dr;
        if (u !== null)
          switch (u.tag) {
            case K: {
              var s = u.stateNode.containerInfo, f = (u.mode & _e) !== Ne;
              YT(
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
              IT(
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
    function Cw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      HT(a, e);
    }
    function Rw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return VT(a);
    }
    function oE(e) {
      for (var t = e.return; t !== null && t.tag !== te && t.tag !== K && t.tag !== Te; )
        t = t.return;
      Dr = t;
    }
    function Mh(e) {
      if (e !== Dr)
        return !1;
      if (!el)
        return oE(e), el = !0, !1;
      if (e.tag !== K && (e.tag !== te || $T(e.type) && !Uy(e.type, e.memoizedProps))) {
        var t = _i;
        if (t)
          if (Zy(e))
            sE(e), Jy();
          else
            for (; t; )
              iE(e, t), t = np(t);
      }
      return oE(e), e.tag === Te ? _i = Rw(e) : _i = Dr ? np(e.stateNode) : null, !0;
    }
    function Tw() {
      return el && _i !== null;
    }
    function sE(e) {
      for (var t = _i; t; )
        aE(e, t), t = np(t);
    }
    function _f() {
      Dr = null, _i = null, el = !1, Zs = !1;
    }
    function cE() {
      Mo !== null && (a1(Mo), Mo = null);
    }
    function kr() {
      return el;
    }
    function tg(e) {
      Mo === null ? Mo = [e] : Mo.push(e);
    }
    var ww = tt.ReactCurrentBatchConfig, bw = null;
    function _w() {
      return ww.transition;
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
      var xw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Sn && (t = a), a = a.return;
        return t;
      }, Js = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, lp = [], up = [], op = [], sp = [], cp = [], fp = [], ec = /* @__PURE__ */ new Set();
      tl.recordUnsafeLifecycleWarnings = function(e, t) {
        ec.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && lp.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillMount == "function" && up.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && op.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillReceiveProps == "function" && sp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & Sn && typeof t.UNSAFE_componentWillUpdate == "function" && fp.push(e));
      }, tl.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        lp.length > 0 && (lp.forEach(function(b) {
          e.add(Ie(b) || "Component"), ec.add(b.type);
        }), lp = []);
        var t = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(b) {
          t.add(Ie(b) || "Component"), ec.add(b.type);
        }), up = []);
        var a = /* @__PURE__ */ new Set();
        op.length > 0 && (op.forEach(function(b) {
          a.add(Ie(b) || "Component"), ec.add(b.type);
        }), op = []);
        var i = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(b) {
          i.add(Ie(b) || "Component"), ec.add(b.type);
        }), sp = []);
        var u = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(b) {
          u.add(Ie(b) || "Component"), ec.add(b.type);
        }), cp = []);
        var s = /* @__PURE__ */ new Set();
        if (fp.length > 0 && (fp.forEach(function(b) {
          s.add(Ie(b) || "Component"), ec.add(b.type);
        }), fp = []), t.size > 0) {
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
      var Nh = /* @__PURE__ */ new Map(), fE = /* @__PURE__ */ new Set();
      tl.recordLegacyContextWarning = function(e, t) {
        var a = xw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!fE.has(e.type)) {
          var i = Nh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Nh.set(a, i)), i.push(e));
        }
      }, tl.flushLegacyContextWarning = function() {
        Nh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ie(s) || "Component"), fE.add(s.type);
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
        lp = [], up = [], op = [], sp = [], cp = [], fp = [], Nh = /* @__PURE__ */ new Map();
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
    var ng = ko(null), rg;
    rg = {};
    var zh = null, xf = null, ag = null, Uh = !1;
    function Ah() {
      zh = null, xf = null, ag = null, Uh = !1;
    }
    function dE() {
      Uh = !0;
    }
    function pE() {
      Uh = !1;
    }
    function vE(e, t, a) {
      na(ng, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== rg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = rg;
    }
    function ig(e, t) {
      var a = ng.current;
      ta(ng, t), e._currentValue = a;
    }
    function lg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (gu(i.childLanes, t) ? u !== null && !gu(u.childLanes, t) && (u.childLanes = Ke(u.childLanes, t)) : (i.childLanes = Ke(i.childLanes, t), u !== null && (u.childLanes = Ke(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function Dw(e, t, a) {
      kw(e, t, a);
    }
    function kw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === ue) {
                var p = so(a), v = Lu(Kt, p);
                v.tag = jh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, x = g.pending;
                  x === null ? v.next = v : (v.next = x.next, x.next = v), g.pending = v;
                }
              }
              i.lanes = Ke(i.lanes, a);
              var b = i.alternate;
              b !== null && (b.lanes = Ke(b.lanes, a)), lg(i.return, a, e), s.lanes = Ke(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === lt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === It) {
          var N = i.return;
          if (N === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          N.lanes = Ke(N.lanes, a);
          var U = N.alternate;
          U !== null && (U.lanes = Ke(U.lanes, a)), lg(N, a, e), u = i.sibling;
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
            var j = u.sibling;
            if (j !== null) {
              j.return = u.return, u = j;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Df(e, t) {
      zh = e, xf = null, ag = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Jr(a.lanes, t) && bp(), a.firstContext = null);
      }
    }
    function Kn(e) {
      Uh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (ag !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (xf === null) {
          if (zh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          xf = a, zh.dependencies = {
            lanes: P,
            firstContext: a
          };
        } else
          xf = xf.next = a;
      }
      return t;
    }
    var tc = null;
    function ug(e) {
      tc === null ? tc = [e] : tc.push(e);
    }
    function Ow() {
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
    function hE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function Lw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function Mw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ug(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Fh(e, i);
    }
    function $a(e, t) {
      return Fh(e, t);
    }
    var Nw = Fh;
    function Fh(e, t) {
      e.lanes = Ke(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = Ke(a.lanes, t)), a === null && (e.flags & ($t | hi)) !== Me && m1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = Ke(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = Ke(a.childLanes, t) : (u.flags & ($t | hi)) !== Me && m1(e), i = u, u = u.return;
      if (i.tag === K) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var mE = 0, yE = 1, jh = 2, og = 3, Hh = !1, sg, Vh;
    sg = !1, Vh = null;
    function cg(e) {
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
    function gE(e, t) {
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
        tag: mE,
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
      if (Vh === u && !sg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), sg = !0), N_()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Nw(e, a);
      } else
        return Mw(e, u, t, a);
    }
    function Ph(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (xd(a)) {
          var s = u.lanes;
          s = Ic(s, e.pendingLanes);
          var f = Ke(s, a);
          u.lanes = f, Dd(e, f);
        }
      }
    }
    function fg(e, t) {
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
    function zw(e, t, a, i, u, s) {
      switch (a.tag) {
        case yE: {
          var f = a.payload;
          if (typeof f == "function") {
            dE();
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
              pE();
            }
            return p;
          }
          return f;
        }
        case og:
          e.flags = e.flags & ~rr | We;
        case mE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            dE(), y = v.call(s, i, u);
            {
              if (e.mode & Sn) {
                Xt(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Xt(!1);
                }
              }
              pE();
            }
          } else
            y = v;
          return y == null ? i : at({}, i, y);
        }
        case jh:
          return Hh = !0, i;
      }
      return i;
    }
    function Bh(e, t, a, i) {
      var u = e.updateQueue;
      Hh = !1, Vh = u.shared;
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
        var N = u.baseState, U = P, j = null, de = null, ze = null, xe = s;
        do {
          var St = xe.lane, vt = xe.eventTime;
          if (gu(i, St)) {
            if (ze !== null) {
              var H = {
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
              ze = ze.next = H;
            }
            N = zw(e, u, xe, N, t, a);
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
            ze === null ? (de = ze = k, j = N) : ze = ze.next = k, U = Ke(U, St);
          }
          if (xe = xe.next, xe === null) {
            if (p = u.shared.pending, p === null)
              break;
            var pe = p, le = pe.next;
            pe.next = null, xe = le, u.lastBaseUpdate = pe, u.shared.pending = null;
          }
        } while (!0);
        ze === null && (j = N), u.baseState = j, u.firstBaseUpdate = de, u.lastBaseUpdate = ze;
        var $e = u.shared.interleaved;
        if ($e !== null) {
          var qe = $e;
          do
            U = Ke(U, qe.lane), qe = qe.next;
          while (qe !== $e);
        } else
          s === null && (u.shared.lanes = P);
        Fp(U), e.lanes = U, e.memoizedState = N;
      }
      Vh = null;
    }
    function Uw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function SE() {
      Hh = !1;
    }
    function $h() {
      return Hh;
    }
    function EE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Uw(f, a));
        }
    }
    var dg = {}, CE = new X.Component().refs, pg, vg, hg, mg, yg, RE, Yh, gg, Sg, Eg;
    {
      pg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), gg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set(), Sg = /* @__PURE__ */ new Set(), Eg = /* @__PURE__ */ new Set();
      var TE = /* @__PURE__ */ new Set();
      Yh = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          TE.has(a) || (TE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, RE = function(e, t) {
        if (t === void 0) {
          var a = Tt(e) || "Component";
          yg.has(a) || (yg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(dg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(dg);
    }
    function Cg(e, t, a, i) {
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
        RE(t, s);
      }
      var f = s == null ? u : at({}, u, s);
      if (e.memoizedState = f, e.lanes === P) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Rg = {
      isMounted: ya,
      enqueueSetState: function(e, t, a) {
        var i = vi(e), u = Ra(), s = Po(i), f = Lu(u, s);
        f.payload = t, a != null && (Yh(a, "setState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Ph(p, i, s)), kc(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = vi(e), u = Ra(), s = Po(i), f = Lu(u, s);
        f.tag = yE, f.payload = t, a != null && (Yh(a, "replaceState"), f.callback = a);
        var p = No(i, f, s);
        p !== null && (pr(p, i, s, u), Ph(p, i, s)), kc(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = vi(e), i = Ra(), u = Po(a), s = Lu(i, u);
        s.tag = jh, t != null && (Yh(t, "forceUpdate"), s.callback = t);
        var f = No(a, s, u);
        f !== null && (pr(f, a, u, i), Ph(f, a, u)), io(a, u);
      }
    };
    function wE(e, t, a, i, u, s, f) {
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
    function Aw(e, t, a) {
      var i = e.stateNode;
      {
        var u = Tt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !Sg.has(t) && (Sg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Tt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !hg.has(t) && (hg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Tt(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || wt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function bE(e, t) {
      t.updater = Rg, e.stateNode = t, Cc(t, e), t._reactInternalInstance = dg;
    }
    function _E(e, t, a) {
      var i = !1, u = ii, s = ii, f = t.contextType;
      if ("contextType" in t) {
        var p = (
          // Allow null for conditional declaration
          f === null || f !== void 0 && f.$$typeof === ne && f._context === void 0
        );
        if (!p && !Eg.has(t)) {
          Eg.add(t);
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
      bE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && x === null) {
          var b = Tt(t) || "Component";
          vg.has(b) || (vg.add(b), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", b, g.state === null ? "null" : "undefined", b));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var N = null, U = null, j = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? N = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (N = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? U = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (U = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? j = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (j = "UNSAFE_componentWillUpdate"), N !== null || U !== null || j !== null) {
            var de = Tt(t) || "Component", ze = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            mg.has(de) || (mg.add(de), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, de, ze, N !== null ? `
  ` + N : "", U !== null ? `
  ` + U : "", j !== null ? `
  ` + j : ""));
          }
        }
      }
      return i && X0(e, u, s), g;
    }
    function Fw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ie(e) || "Component"), Rg.enqueueReplaceState(t, t.state, null));
    }
    function xE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ie(e) || "Component";
          pg.has(s) || (pg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Rg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Tg(e, t, a, i) {
      Aw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = CE, cg(e);
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
          gg.has(p) || (gg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Sn && tl.recordLegacyContextWarning(e, u), tl.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (Cg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Fw(e, u), Bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = we;
        y |= Ma, (e.mode & Ua) !== Ne && (y |= Na), e.flags |= y;
      }
    }
    function jw(e, t, a, i) {
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
      !x && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && xE(e, u, a, v), SE();
      var b = e.memoizedState, N = u.state = b;
      if (Bh(e, a, u, i), N = e.memoizedState, s === a && b === N && !bh() && !$h()) {
        if (typeof u.componentDidMount == "function") {
          var U = we;
          U |= Ma, (e.mode & Ua) !== Ne && (U |= Na), e.flags |= U;
        }
        return !1;
      }
      typeof g == "function" && (Cg(e, t, g, a), N = e.memoizedState);
      var j = $h() || wE(e, t, s, a, b, N, v);
      if (j) {
        if (!x && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var de = we;
          de |= Ma, (e.mode & Ua) !== Ne && (de |= Na), e.flags |= de;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var ze = we;
          ze |= Ma, (e.mode & Ua) !== Ne && (ze |= Na), e.flags |= ze;
        }
        e.memoizedProps = a, e.memoizedState = N;
      }
      return u.props = a, u.state = N, u.context = v, j;
    }
    function Hw(e, t, a, i, u) {
      var s = t.stateNode;
      gE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : nl(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, x = ii;
      if (typeof g == "object" && g !== null)
        x = Kn(g);
      else {
        var b = Rf(t, a, !0);
        x = Tf(t, b);
      }
      var N = a.getDerivedStateFromProps, U = typeof N == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !U && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== x) && xE(t, s, i, x), SE();
      var j = t.memoizedState, de = s.state = j;
      if (Bh(t, i, s, u), de = t.memoizedState, f === v && j === de && !bh() && !$h() && !T)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= An), !1;
      typeof N == "function" && (Cg(t, a, N, i), de = t.memoizedState);
      var ze = $h() || wE(t, a, p, i, j, de, x) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      T;
      return ze ? (!U && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, de, x), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, de, x)), typeof s.componentDidUpdate == "function" && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= An)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= we), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || j !== e.memoizedState) && (t.flags |= An), t.memoizedProps = i, t.memoizedState = de), s.props = i, s.state = de, s.context = x, ze;
    }
    var wg, bg, _g, xg, Dg, DE = function(e, t) {
    };
    wg = !1, bg = !1, _g = {}, xg = {}, Dg = {}, DE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ie(t) || "Component";
        xg[a] || (xg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function dp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Sn || ft) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ie(e) || "Component";
          _g[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), _g[u] = !0);
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
            b === CE && (b = v.refs = {}), x === null ? delete b[y] : b[y] = x;
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
    function Ih(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Qh(e) {
      {
        var t = Ie(e) || "Component";
        if (Dg[t])
          return;
        Dg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function kE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function OE(e) {
      function t(k, H) {
        if (e) {
          var O = k.deletions;
          O === null ? (k.deletions = [H], k.flags |= Dt) : O.push(H);
        }
      }
      function a(k, H) {
        if (!e)
          return null;
        for (var O = H; O !== null; )
          t(k, O), O = O.sibling;
        return null;
      }
      function i(k, H) {
        for (var O = /* @__PURE__ */ new Map(), q = H; q !== null; )
          q.key !== null ? O.set(q.key, q) : O.set(q.index, q), q = q.sibling;
        return O;
      }
      function u(k, H) {
        var O = sc(k, H);
        return O.index = 0, O.sibling = null, O;
      }
      function s(k, H, O) {
        if (k.index = O, !e)
          return k.flags |= Tv, H;
        var q = k.alternate;
        if (q !== null) {
          var pe = q.index;
          return pe < H ? (k.flags |= $t, H) : pe;
        } else
          return k.flags |= $t, H;
      }
      function f(k) {
        return e && k.alternate === null && (k.flags |= $t), k;
      }
      function p(k, H, O, q) {
        if (H === null || H.tag !== oe) {
          var pe = t0(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var le = u(H, O);
          return le.return = k, le;
        }
      }
      function v(k, H, O, q) {
        var pe = O.type;
        if (pe === da)
          return g(k, H, O.props.children, q, O.key);
        if (H !== null && (H.elementType === pe || // Keep this check inline so it only runs on the false path:
        E1(H, O) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof pe == "object" && pe !== null && pe.$$typeof === Le && kE(pe) === H.type)) {
          var le = u(H, O.props);
          return le.ref = dp(k, H, O), le.return = k, le._debugSource = O._source, le._debugOwner = O._owner, le;
        }
        var $e = e0(O, k.mode, q);
        return $e.ref = dp(k, H, O), $e.return = k, $e;
      }
      function y(k, H, O, q) {
        if (H === null || H.tag !== Oe || H.stateNode.containerInfo !== O.containerInfo || H.stateNode.implementation !== O.implementation) {
          var pe = n0(O, k.mode, q);
          return pe.return = k, pe;
        } else {
          var le = u(H, O.children || []);
          return le.return = k, le;
        }
      }
      function g(k, H, O, q, pe) {
        if (H === null || H.tag !== Qe) {
          var le = $o(O, k.mode, q, pe);
          return le.return = k, le;
        } else {
          var $e = u(H, O);
          return $e.return = k, $e;
        }
      }
      function x(k, H, O) {
        if (typeof H == "string" && H !== "" || typeof H == "number") {
          var q = t0("" + H, k.mode, O);
          return q.return = k, q;
        }
        if (typeof H == "object" && H !== null) {
          switch (H.$$typeof) {
            case jr: {
              var pe = e0(H, k.mode, O);
              return pe.ref = dp(k, null, H), pe.return = k, pe;
            }
            case Hr: {
              var le = n0(H, k.mode, O);
              return le.return = k, le;
            }
            case Le: {
              var $e = H._payload, qe = H._init;
              return x(k, qe($e), O);
            }
          }
          if (wt(H) || si(H)) {
            var Pt = $o(H, k.mode, O, null);
            return Pt.return = k, Pt;
          }
          Ih(k, H);
        }
        return typeof H == "function" && Qh(k), null;
      }
      function b(k, H, O, q) {
        var pe = H !== null ? H.key : null;
        if (typeof O == "string" && O !== "" || typeof O == "number")
          return pe !== null ? null : p(k, H, "" + O, q);
        if (typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jr:
              return O.key === pe ? v(k, H, O, q) : null;
            case Hr:
              return O.key === pe ? y(k, H, O, q) : null;
            case Le: {
              var le = O._payload, $e = O._init;
              return b(k, H, $e(le), q);
            }
          }
          if (wt(O) || si(O))
            return pe !== null ? null : g(k, H, O, q, null);
          Ih(k, O);
        }
        return typeof O == "function" && Qh(k), null;
      }
      function N(k, H, O, q, pe) {
        if (typeof q == "string" && q !== "" || typeof q == "number") {
          var le = k.get(O) || null;
          return p(H, le, "" + q, pe);
        }
        if (typeof q == "object" && q !== null) {
          switch (q.$$typeof) {
            case jr: {
              var $e = k.get(q.key === null ? O : q.key) || null;
              return v(H, $e, q, pe);
            }
            case Hr: {
              var qe = k.get(q.key === null ? O : q.key) || null;
              return y(H, qe, q, pe);
            }
            case Le:
              var Pt = q._payload, Ot = q._init;
              return N(k, H, O, Ot(Pt), pe);
          }
          if (wt(q) || si(q)) {
            var In = k.get(O) || null;
            return g(H, In, q, pe, null);
          }
          Ih(H, q);
        }
        return typeof q == "function" && Qh(H), null;
      }
      function U(k, H, O) {
        {
          if (typeof k != "object" || k === null)
            return H;
          switch (k.$$typeof) {
            case jr:
            case Hr:
              DE(k, O);
              var q = k.key;
              if (typeof q != "string")
                break;
              if (H === null) {
                H = /* @__PURE__ */ new Set(), H.add(q);
                break;
              }
              if (!H.has(q)) {
                H.add(q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", q);
              break;
            case Le:
              var pe = k._payload, le = k._init;
              U(le(pe), H, O);
              break;
          }
        }
        return H;
      }
      function j(k, H, O, q) {
        for (var pe = null, le = 0; le < O.length; le++) {
          var $e = O[le];
          pe = U($e, pe, k);
        }
        for (var qe = null, Pt = null, Ot = H, In = 0, Lt = 0, jn = null; Ot !== null && Lt < O.length; Lt++) {
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
          var ia = N(wa, k, Lt, O[Lt], q);
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
      function de(k, H, O, q) {
        var pe = si(O);
        if (typeof pe != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          O[Symbol.toStringTag] === "Generator" && (bg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), bg = !0), O.entries === pe && (wg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), wg = !0);
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
        for (var In = null, Lt = null, jn = H, aa = 0, Ar = 0, ui = null, Ta = Ot.next(); jn !== null && !Ta.done; Ar++, Ta = Ot.next()) {
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
        for (var Bp = i(k, jn); !Ta.done; Ar++, Ta = Ot.next()) {
          var Wl = N(Bp, k, Ar, Ta.value, q);
          Wl !== null && (e && Wl.alternate !== null && Bp.delete(Wl.key === null ? Ar : Wl.key), aa = s(Wl, aa, Ar), Lt === null ? In = Wl : Lt.sibling = Wl, Lt = Wl);
        }
        if (e && Bp.forEach(function(Jx) {
          return t(k, Jx);
        }), kr()) {
          var Zx = Ar;
          Xs(k, Zx);
        }
        return In;
      }
      function ze(k, H, O, q) {
        if (H !== null && H.tag === oe) {
          a(k, H.sibling);
          var pe = u(H, O);
          return pe.return = k, pe;
        }
        a(k, H);
        var le = t0(O, k.mode, q);
        return le.return = k, le;
      }
      function xe(k, H, O, q) {
        for (var pe = O.key, le = H; le !== null; ) {
          if (le.key === pe) {
            var $e = O.type;
            if ($e === da) {
              if (le.tag === Qe) {
                a(k, le.sibling);
                var qe = u(le, O.props.children);
                return qe.return = k, qe._debugSource = O._source, qe._debugOwner = O._owner, qe;
              }
            } else if (le.elementType === $e || // Keep this check inline so it only runs on the false path:
            E1(le, O) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof $e == "object" && $e !== null && $e.$$typeof === Le && kE($e) === le.type) {
              a(k, le.sibling);
              var Pt = u(le, O.props);
              return Pt.ref = dp(k, le, O), Pt.return = k, Pt._debugSource = O._source, Pt._debugOwner = O._owner, Pt;
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
          var In = e0(O, k.mode, q);
          return In.ref = dp(k, H, O), In.return = k, In;
        }
      }
      function St(k, H, O, q) {
        for (var pe = O.key, le = H; le !== null; ) {
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
        var qe = n0(O, k.mode, q);
        return qe.return = k, qe;
      }
      function vt(k, H, O, q) {
        var pe = typeof O == "object" && O !== null && O.type === da && O.key === null;
        if (pe && (O = O.props.children), typeof O == "object" && O !== null) {
          switch (O.$$typeof) {
            case jr:
              return f(xe(k, H, O, q));
            case Hr:
              return f(St(k, H, O, q));
            case Le:
              var le = O._payload, $e = O._init;
              return vt(k, H, $e(le), q);
          }
          if (wt(O))
            return j(k, H, O, q);
          if (si(O))
            return de(k, H, O, q);
          Ih(k, O);
        }
        return typeof O == "string" && O !== "" || typeof O == "number" ? f(ze(k, H, "" + O, q)) : (typeof O == "function" && Qh(k), a(k, H));
      }
      return vt;
    }
    var kf = OE(!0), LE = OE(!1);
    function Vw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = sc(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = sc(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Pw(e, t) {
      for (var a = e.child; a !== null; )
        mx(a, t), a = a.sibling;
    }
    var pp = {}, zo = ko(pp), vp = ko(pp), Wh = ko(pp);
    function Gh(e) {
      if (e === pp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function ME() {
      var e = Gh(Wh.current);
      return e;
    }
    function kg(e, t) {
      na(Wh, t, e), na(vp, e, e), na(zo, pp, e);
      var a = tT(t);
      ta(zo, e), na(zo, a, e);
    }
    function Of(e) {
      ta(zo, e), ta(vp, e), ta(Wh, e);
    }
    function Og() {
      var e = Gh(zo.current);
      return e;
    }
    function NE(e) {
      Gh(Wh.current);
      var t = Gh(zo.current), a = nT(t, e.type);
      t !== a && (na(vp, e, e), na(zo, a, e));
    }
    function Lg(e) {
      vp.current === e && (ta(zo, e), ta(vp, e));
    }
    var Bw = 0, zE = 1, UE = 1, hp = 2, rl = ko(Bw);
    function Mg(e, t) {
      return (e & t) !== 0;
    }
    function Lf(e) {
      return e & zE;
    }
    function Ng(e, t) {
      return e & zE | t;
    }
    function $w(e, t) {
      return e | t;
    }
    function Uo(e, t) {
      na(rl, t, e);
    }
    function Mf(e) {
      ta(rl, e);
    }
    function Yw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function qh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || I0(i) || Hy(i))
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
    ), zg = [];
    function Ug() {
      for (var e = 0; e < zg.length; e++) {
        var t = zg[e];
        t._workInProgressVersionPrimary = null;
      }
      zg.length = 0;
    }
    function Iw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var ce = tt.ReactCurrentDispatcher, mp = tt.ReactCurrentBatchConfig, Ag, Nf;
    Ag = /* @__PURE__ */ new Set();
    var nc = P, Vt = null, or = null, sr = null, Xh = !1, yp = !1, gp = 0, Qw = 0, Ww = 25, B = null, xi = null, Ao = -1, Fg = !1;
    function Ut() {
      {
        var e = B;
        xi === null ? xi = [e] : xi.push(e);
      }
    }
    function re() {
      {
        var e = B;
        xi !== null && (Ao++, xi[Ao] !== e && Gw(e));
      }
    }
    function zf(e) {
      e != null && !wt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", B, typeof e);
    }
    function Gw(e) {
      {
        var t = Ie(Vt);
        if (!Ag.has(t) && (Ag.add(t), xi !== null)) {
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
    function jg(e, t) {
      if (Fg)
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
      nc = s, Vt = t, xi = e !== null ? e._debugHookTypes : null, Ao = -1, Fg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = P, e !== null && e.memoizedState !== null ? ce.current = rC : xi !== null ? ce.current = nC : ce.current = tC;
      var f = a(i, u);
      if (yp) {
        var p = 0;
        do {
          if (yp = !1, gp = 0, p >= Ww)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, Fg = !1, or = null, sr = null, t.updateQueue = null, Ao = -1, ce.current = aC, f = a(i, u);
        } while (yp);
      }
      ce.current = sm, t._debugHookTypes = xi;
      var v = or !== null && or.next !== null;
      if (nc = P, Vt = null, or = null, sr = null, B = null, xi = null, Ao = -1, e !== null && (e.flags & ar) !== (t.flags & ar) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & _e) !== Ne && S("Internal React error: Expected static flag was missing. Please notify the React team."), Xh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function Af() {
      var e = gp !== 0;
      return gp = 0, e;
    }
    function AE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & Ua) !== Ne ? t.flags &= ~(ou | Na | Ir | we) : t.flags &= ~(Ir | we), e.lanes = Ns(e.lanes, a);
    }
    function FE() {
      if (ce.current = sm, Xh) {
        for (var e = Vt.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Xh = !1;
      }
      nc = P, Vt = null, or = null, sr = null, xi = null, Ao = -1, B = null, XE = !1, yp = !1, gp = 0;
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
    function jE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Hg(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Vg(e, t, a) {
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
      var f = s.dispatch = Zw.bind(null, Vt, s);
      return [i.memoizedState, f];
    }
    function Pg(e, t, a) {
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
        var g = f.next, x = s.baseState, b = null, N = null, U = null, j = g;
        do {
          var de = j.lane;
          if (gu(nc, de)) {
            if (U !== null) {
              var xe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: Dn,
                action: j.action,
                hasEagerState: j.hasEagerState,
                eagerState: j.eagerState,
                next: null
              };
              U = U.next = xe;
            }
            if (j.hasEagerState)
              x = j.eagerState;
            else {
              var St = j.action;
              x = e(x, St);
            }
          } else {
            var ze = {
              lane: de,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            };
            U === null ? (N = U = ze, b = x) : U = U.next = ze, Vt.lanes = Ke(Vt.lanes, de), Fp(de);
          }
          j = j.next;
        } while (j !== null && j !== g);
        U === null ? b = x : U.next = N, ge(x, i.memoizedState) || bp(), i.memoizedState = x, i.baseState = b, i.baseQueue = U, u.lastRenderedState = x;
      }
      var vt = u.interleaved;
      if (vt !== null) {
        var k = vt;
        do {
          var H = k.lane;
          Vt.lanes = Ke(Vt.lanes, H), Fp(H), k = k.next;
        } while (k !== vt);
      } else
        f === null && (u.lanes = P);
      var O = u.dispatch;
      return [i.memoizedState, O];
    }
    function Bg(e, t, a) {
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
        ge(p, i.memoizedState) || bp(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function OD(e, t, a) {
    }
    function LD(e, t, a) {
    }
    function $g(e, t, a) {
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
        var v = xm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(v, nc) || HE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, tm(PE.bind(null, i, y, e), [e]), i.flags |= Ir, Sp(lr | Or, VE.bind(null, i, y, s, t), void 0, null), s;
    }
    function Kh(e, t, a) {
      var i = Vt, u = Di(), s = t();
      if (!Nf) {
        var f = t();
        ge(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), Nf = !0);
      }
      var p = u.memoizedState, v = !ge(p, s);
      v && (u.memoizedState = s, bp());
      var y = u.queue;
      if (Cp(PE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      sr !== null && sr.memoizedState.tag & lr) {
        i.flags |= Ir, Sp(lr | Or, VE.bind(null, i, y, s, t), void 0, null);
        var g = xm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        Ms(g, nc) || HE(i, t, s);
      }
      return s;
    }
    function HE(e, t, a) {
      e.flags |= uu;
      var i = {
        getSnapshot: t,
        value: a
      }, u = Vt.updateQueue;
      if (u === null)
        u = jE(), Vt.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function VE(e, t, a, i) {
      t.value = a, t.getSnapshot = i, BE(t) && $E(e);
    }
    function PE(e, t, a) {
      var i = function() {
        BE(t) && $E(e);
      };
      return a(i);
    }
    function BE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !ge(a, i);
      } catch {
        return !0;
      }
    }
    function $E(e) {
      var t = $a(e, Ue);
      t !== null && pr(t, e, Ue, Kt);
    }
    function Zh(e) {
      var t = Pl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: P,
        dispatch: null,
        lastRenderedReducer: Hg,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Jw.bind(null, Vt, a);
      return [t.memoizedState, i];
    }
    function Yg(e) {
      return Pg(Hg);
    }
    function Ig(e) {
      return Bg(Hg);
    }
    function Sp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = Vt.updateQueue;
      if (s === null)
        s = jE(), Vt.updateQueue = s, s.lastEffect = u.next = u;
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
    function Qg(e) {
      var t = Pl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Jh(e) {
      var t = Di();
      return t.memoizedState;
    }
    function Ep(e, t, a, i) {
      var u = Pl(), s = i === void 0 ? null : i;
      Vt.flags |= e, u.memoizedState = Sp(lr | t, a, void 0, s);
    }
    function em(e, t, a, i) {
      var u = Di(), s = i === void 0 ? null : i, f = void 0;
      if (or !== null) {
        var p = or.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (jg(s, v)) {
            u.memoizedState = Sp(t, a, f, s);
            return;
          }
        }
      }
      Vt.flags |= e, u.memoizedState = Sp(lr | t, a, f, s);
    }
    function tm(e, t) {
      return (Vt.mode & Ua) !== Ne ? Ep(ou | Ir | wl, Or, e, t) : Ep(Ir | wl, Or, e, t);
    }
    function Cp(e, t) {
      return em(Ir, Or, e, t);
    }
    function Wg(e, t) {
      return Ep(we, Vl, e, t);
    }
    function nm(e, t) {
      return em(we, Vl, e, t);
    }
    function Gg(e, t) {
      var a = we;
      return a |= Ma, (Vt.mode & Ua) !== Ne && (a |= Na), Ep(a, ur, e, t);
    }
    function rm(e, t) {
      return em(we, ur, e, t);
    }
    function YE(e, t) {
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
    function qg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = we;
      return u |= Ma, (Vt.mode & Ua) !== Ne && (u |= Na), Ep(u, ur, YE.bind(null, t, e), i);
    }
    function am(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return em(we, ur, YE.bind(null, t, e), i);
    }
    function qw(e, t) {
    }
    var im = qw;
    function Xg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function lm(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Kg(e, t) {
      var a = Pl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function um(e, t) {
      var a = Di(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (jg(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function Zg(e) {
      var t = Pl();
      return t.memoizedState = e, e;
    }
    function IE(e) {
      var t = Di(), a = or, i = a.memoizedState;
      return WE(t, i, e);
    }
    function QE(e) {
      var t = Di();
      if (or === null)
        return t.memoizedState = e, e;
      var a = or.memoizedState;
      return WE(t, a, e);
    }
    function WE(e, t, a) {
      var i = !Av(nc);
      if (i) {
        if (!ge(a, t)) {
          var u = Hv();
          Vt.lanes = Ke(Vt.lanes, u), Fp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, bp()), e.memoizedState = a, a;
    }
    function Xw(e, t, a) {
      var i = Fa();
      Cn(ly(i, qi)), e(!0);
      var u = mp.transition;
      mp.transition = {};
      var s = mp.transition;
      mp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Cn(i), mp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Xe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Jg() {
      var e = Zh(!1), t = e[0], a = e[1], i = Xw.bind(null, a), u = Pl();
      return u.memoizedState = i, [t, i];
    }
    function GE() {
      var e = Yg(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    function qE() {
      var e = Ig(), t = e[0], a = Di(), i = a.memoizedState;
      return [t, i];
    }
    var XE = !1;
    function Kw() {
      return XE;
    }
    function eS() {
      var e = Pl(), t = xm(), a = t.identifierPrefix, i;
      if (kr()) {
        var u = fw();
        i = ":" + a + "R" + u;
        var s = gp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Qw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function om() {
      var e = Di(), t = e.memoizedState;
      return t;
    }
    function Zw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        ZE(t, u);
      else {
        var s = hE(e, t, u, i);
        if (s !== null) {
          var f = Ra();
          pr(s, e, i, f), JE(s, t, i);
        }
      }
      eC(e, i);
    }
    function Jw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = Po(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (KE(e))
        ZE(t, u);
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
                Lw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              ce.current = p;
            }
          }
        }
        var g = hE(e, t, u, i);
        if (g !== null) {
          var x = Ra();
          pr(g, e, i, x), JE(g, t, i);
        }
      }
      eC(e, i);
    }
    function KE(e) {
      var t = e.alternate;
      return e === Vt || t !== null && t === Vt;
    }
    function ZE(e, t) {
      yp = Xh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function JE(e, t, a) {
      if (xd(a)) {
        var i = t.lanes;
        i = Ic(i, e.pendingLanes);
        var u = Ke(i, a);
        t.lanes = u, Dd(e, u);
      }
    }
    function eC(e, t, a) {
      kc(e, t);
    }
    var sm = {
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
    }, tC = null, nC = null, rC = null, aC = null, Bl = null, al = null, cm = null;
    {
      var tS = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, Ge = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      tC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ut(), zf(t), Xg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ut(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ut(), zf(t), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ut(), zf(a), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ut(), zf(t), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ut(), zf(t), Gg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ut(), zf(t);
          var a = ce.current;
          ce.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ut();
          var i = ce.current;
          ce.current = Bl;
          try {
            return Vg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ut(), Qg(e);
        },
        useState: function(e) {
          B = "useState", Ut();
          var t = ce.current;
          ce.current = Bl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ut(), Zg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ut(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ut(), $g(e, t, a);
        },
        useId: function() {
          return B = "useId", Ut(), eS();
        },
        unstable_isNewReconciler: he
      }, nC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), Xg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), Gg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ce.current;
          ce.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ce.current;
          ce.current = Bl;
          try {
            return Vg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Qg(e);
        },
        useState: function(e) {
          B = "useState", re();
          var t = ce.current;
          ce.current = Bl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), Zg(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), $g(e, t, a);
        },
        useId: function() {
          return B = "useId", re(), eS();
        },
        unstable_isNewReconciler: he
      }, rC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ce.current;
          ce.current = al;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ce.current;
          ce.current = al;
          try {
            return Pg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Jh();
        },
        useState: function(e) {
          B = "useState", re();
          var t = ce.current;
          ce.current = al;
          try {
            return Yg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), im();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", re(), IE(e);
        },
        useTransition: function() {
          return B = "useTransition", re(), GE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", re(), om();
        },
        unstable_isNewReconciler: he
      }, aC = {
        readContext: function(e) {
          return Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", re(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", re();
          var a = ce.current;
          ce.current = cm;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", re();
          var i = ce.current;
          ce.current = cm;
          try {
            return Bg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", re(), Jh();
        },
        useState: function(e) {
          B = "useState", re();
          var t = ce.current;
          ce.current = cm;
          try {
            return Ig(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", re(), im();
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
          return B = "useSyncExternalStore", re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", re(), om();
        },
        unstable_isNewReconciler: he
      }, Bl = {
        readContext: function(e) {
          return tS(), Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), Ut(), Xg(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), Ut(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), Ut(), tm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), Ut(), qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), Ut(), Wg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), Ut(), Gg(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), Ut();
          var a = ce.current;
          ce.current = Bl;
          try {
            return Kg(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), Ut();
          var i = ce.current;
          ce.current = Bl;
          try {
            return Vg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), Ut(), Qg(e);
        },
        useState: function(e) {
          B = "useState", Ge(), Ut();
          var t = ce.current;
          ce.current = Bl;
          try {
            return Zh(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), Ut(), void 0;
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), Ut(), Zg(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), Ut(), Jg();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), Ut(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), Ut(), $g(e, t, a);
        },
        useId: function() {
          return B = "useId", Ge(), Ut(), eS();
        },
        unstable_isNewReconciler: he
      }, al = {
        readContext: function(e) {
          return tS(), Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), re(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), re();
          var a = ce.current;
          ce.current = al;
          try {
            return um(e, t);
          } finally {
            ce.current = a;
          }
        },
        useReducer: function(e, t, a) {
          B = "useReducer", Ge(), re();
          var i = ce.current;
          ce.current = al;
          try {
            return Pg(e, t, a);
          } finally {
            ce.current = i;
          }
        },
        useRef: function(e) {
          return B = "useRef", Ge(), re(), Jh();
        },
        useState: function(e) {
          B = "useState", Ge(), re();
          var t = ce.current;
          ce.current = al;
          try {
            return Yg(e);
          } finally {
            ce.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return B = "useDebugValue", Ge(), re(), im();
        },
        useDeferredValue: function(e) {
          return B = "useDeferredValue", Ge(), re(), IE(e);
        },
        useTransition: function() {
          return B = "useTransition", Ge(), re(), GE();
        },
        useMutableSource: function(e, t, a) {
          return B = "useMutableSource", Ge(), re(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return B = "useSyncExternalStore", Ge(), re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", Ge(), re(), om();
        },
        unstable_isNewReconciler: he
      }, cm = {
        readContext: function(e) {
          return tS(), Kn(e);
        },
        useCallback: function(e, t) {
          return B = "useCallback", Ge(), re(), lm(e, t);
        },
        useContext: function(e) {
          return B = "useContext", Ge(), re(), Kn(e);
        },
        useEffect: function(e, t) {
          return B = "useEffect", Ge(), re(), Cp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return B = "useImperativeHandle", Ge(), re(), am(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return B = "useInsertionEffect", Ge(), re(), nm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return B = "useLayoutEffect", Ge(), re(), rm(e, t);
        },
        useMemo: function(e, t) {
          B = "useMemo", Ge(), re();
          var a = ce.current;
          ce.current = al;
          try {
            return um(e, t);
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
          return B = "useRef", Ge(), re(), Jh();
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
          return B = "useDebugValue", Ge(), re(), im();
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
          return B = "useSyncExternalStore", Ge(), re(), Kh(e, t);
        },
        useId: function() {
          return B = "useId", Ge(), re(), om();
        },
        unstable_isNewReconciler: he
      };
    }
    var Fo = z.unstable_now, iC = 0, fm = -1, Rp = -1, dm = -1, nS = !1, pm = !1;
    function lC() {
      return nS;
    }
    function eb() {
      pm = !0;
    }
    function tb() {
      nS = !1, pm = !1;
    }
    function nb() {
      nS = pm, pm = !1;
    }
    function uC() {
      return iC;
    }
    function oC() {
      iC = Fo();
    }
    function rS(e) {
      Rp = Fo(), e.actualStartTime < 0 && (e.actualStartTime = Fo());
    }
    function sC(e) {
      Rp = -1;
    }
    function vm(e, t) {
      if (Rp >= 0) {
        var a = Fo() - Rp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), Rp = -1;
      }
    }
    function $l(e) {
      if (fm >= 0) {
        var t = Fo() - fm;
        fm = -1;
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
    function aS(e) {
      if (dm >= 0) {
        var t = Fo() - dm;
        dm = -1;
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
      fm = Fo();
    }
    function iS() {
      dm = Fo();
    }
    function lS(e) {
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
    function uS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function rb(e, t) {
      return !0;
    }
    function oS(e, t) {
      try {
        var a = rb(e, t);
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
    var ab = typeof WeakMap == "function" ? WeakMap : Map;
    function cC(e, t, a) {
      var i = Lu(Kt, a);
      i.tag = og, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        X_(u), oS(e, t);
      }, i;
    }
    function sS(e, t, a) {
      var i = Lu(Kt, a);
      i.tag = og;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          C1(e), oS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        C1(e), oS(e, t), typeof u != "function" && G_(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Jr(e.lanes, Ue) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ie(e) || "Unknown"));
      }), i;
    }
    function fC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new ab(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = K_.bind(null, e, t, a);
        ga && jp(e, a), t.then(s, s);
      }
    }
    function ib(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function lb(e, t) {
      var a = e.tag;
      if ((e.mode & _e) === Ne && (a === ke || a === Ve || a === Ye)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function dC(e) {
      var t = e;
      do {
        if (t.tag === Te && Yw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function pC(e, t, a, i, u) {
      if ((e.mode & _e) === Ne) {
        if (e === t)
          e.flags |= rr;
        else {
          if (e.flags |= We, a.flags |= Rc, a.flags &= ~(Rv | Tl), a.tag === ue) {
            var s = a.alternate;
            if (s === null)
              a.tag = mn;
            else {
              var f = Lu(Kt, Ue);
              f.tag = jh, No(a, f, Ue);
            }
          }
          a.lanes = Ke(a.lanes, Ue);
        }
        return e;
      }
      return e.flags |= rr, e.lanes = u, e;
    }
    function ub(e, t, a, i, u) {
      if (a.flags |= Tl, ga && jp(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        lb(a), kr() && a.mode & _e && rE();
        var f = dC(t);
        if (f !== null) {
          f.flags &= ~_r, pC(f, t, a, e, u), f.mode & _e && fC(e, s, u), ib(f, e, s);
          return;
        } else {
          if (!_d(u)) {
            fC(e, s, u), BS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (kr() && a.mode & _e) {
        rE();
        var v = dC(t);
        if (v !== null) {
          (v.flags & rr) === Me && (v.flags |= _r), pC(v, t, a, e, u), tg(rc(i, a));
          return;
        }
      }
      i = rc(i, a), V_(i);
      var y = t;
      do {
        switch (y.tag) {
          case K: {
            var g = i;
            y.flags |= rr;
            var x = so(u);
            y.lanes = Ke(y.lanes, x);
            var b = cC(y, g, x);
            fg(y, b);
            return;
          }
          case ue:
            var N = i, U = y.type, j = y.stateNode;
            if ((y.flags & We) === Me && (typeof U.getDerivedStateFromError == "function" || j !== null && typeof j.componentDidCatch == "function" && !d1(j))) {
              y.flags |= rr;
              var de = so(u);
              y.lanes = Ke(y.lanes, de);
              var ze = sS(y, N, de);
              fg(y, ze);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function ob() {
      return null;
    }
    var Tp = tt.ReactCurrentOwner, il = !1, cS, wp, fS, dS, pS, ac, vS, hm;
    cS = {}, wp = {}, fS = {}, dS = {}, pS = {}, ac = !1, vS = {}, hm = {};
    function Ea(e, t, a, i) {
      e === null ? t.child = LE(t, null, a, i) : t.child = kf(t, e.child, a, i);
    }
    function sb(e, t, a, i) {
      t.child = kf(t, e.child, null, i), t.child = kf(t, null, a, i);
    }
    function vC(e, t, a, i, u) {
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
        if (Tp.current = t, nr(!0), v = Uf(e, t, f, i, p, u), y = Af(), t.mode & Sn) {
          Xt(!0);
          try {
            v = Uf(e, t, f, i, p, u), y = Af();
          } finally {
            Xt(!1);
          }
        }
        nr(!1);
      }
      return cu(), e !== null && !il ? (AE(e, t, u), Mu(e, t, u)) : (kr() && y && qy(t), t.flags |= ri, Ea(e, t, v, u), t.child);
    }
    function hC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (vx(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var f = s;
          return f = Yf(s), t.tag = Ye, t.type = f, yS(t, s), mC(e, t, f, i, u);
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
        var v = JS(a.type, null, i, t, t.mode, u);
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
      var x = e.child, b = TS(e, u);
      if (!b) {
        var N = x.memoizedProps, U = a.compare;
        if (U = U !== null ? U : He, U(N, i) && e.ref === t.ref)
          return Mu(e, t, u);
      }
      t.flags |= ri;
      var j = sc(x, i);
      return j.ref = t.ref, j.return = t, t.child = j, j;
    }
    function mC(e, t, a, i, u) {
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
          if (il = !1, t.pendingProps = i = g, TS(e, u))
            (e.flags & Rc) !== Me && (il = !0);
          else
            return t.lanes = e.lanes, Mu(e, t, u);
      }
      return hS(e, t, a, i, u);
    }
    function yC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || Y)
        if ((t.mode & _e) === Ne) {
          var f = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, Dm(t, a);
        } else if (Jr(a, Sa)) {
          var x = {
            baseLanes: P,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = x;
          var b = s !== null ? s.baseLanes : a;
          Dm(t, b);
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
          return t.memoizedState = g, t.updateQueue = null, Dm(t, v), null;
        }
      else {
        var N;
        s !== null ? (N = Ke(s.baseLanes, a), t.memoizedState = null) : N = a, Dm(t, N);
      }
      return Ea(e, t, u, a), t.child;
    }
    function cb(e, t, a) {
      var i = t.pendingProps;
      return Ea(e, t, i, a), t.child;
    }
    function fb(e, t, a) {
      var i = t.pendingProps.children;
      return Ea(e, t, i, a), t.child;
    }
    function db(e, t, a) {
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
    function gC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= ha, t.flags |= mi);
    }
    function hS(e, t, a, i, u) {
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
        if (Tp.current = t, nr(!0), v = Uf(e, t, a, i, f, u), y = Af(), t.mode & Sn) {
          Xt(!0);
          try {
            v = Uf(e, t, a, i, f, u), y = Af();
          } finally {
            Xt(!1);
          }
        }
        nr(!1);
      }
      return cu(), e !== null && !il ? (AE(e, t, u), Mu(e, t, u)) : (kr() && y && qy(t), t.flags |= ri, Ea(e, t, v, u), t.child);
    }
    function SC(e, t, a, i, u) {
      {
        switch (kx(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= We, t.flags |= rr;
            var y = new Error("Simulated error coming from DevTools"), g = so(u);
            t.lanes = Ke(t.lanes, g);
            var x = sS(t, rc(y, t), g);
            fg(t, x);
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
      var N;
      Hl(a) ? (N = !0, xh(t)) : N = !1, Df(t, u);
      var U = t.stateNode, j;
      U === null ? (ym(e, t), _E(t, a, i), Tg(t, a, i, u), j = !0) : e === null ? j = jw(t, a, i, u) : j = Hw(e, t, a, i, u);
      var de = mS(e, t, a, j, N, u);
      {
        var ze = t.stateNode;
        j && ze.props !== i && (ac || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ie(t) || "a component"), ac = !0);
      }
      return de;
    }
    function mS(e, t, a, i, u, s) {
      gC(e, t);
      var f = (t.flags & We) !== Me;
      if (!i && !f)
        return u && J0(t, a, !1), Mu(e, t, s);
      var p = t.stateNode;
      Tp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, sC();
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
      return t.flags |= ri, e !== null && f ? sb(e, t, v, s) : Ea(e, t, v, s), t.memoizedState = p.state, u && J0(t, a, !0), t.child;
    }
    function EC(e) {
      var t = e.stateNode;
      t.pendingContext ? K0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && K0(e, t.context, !1), kg(e, t.containerInfo);
    }
    function pb(e, t, a) {
      if (EC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      gE(e, t), Bh(t, i, null, a);
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
          return CC(e, t, p, a, g);
        } else if (p !== s) {
          var x = rc(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CC(e, t, p, a, x);
        } else {
          yw(t);
          var b = LE(t, null, p, a);
          t.child = b;
          for (var N = b; N; )
            N.flags = N.flags & ~$t | hi, N = N.sibling;
        }
      } else {
        if (_f(), p === s)
          return Mu(e, t, a);
        Ea(e, t, p, a);
      }
      return t.child;
    }
    function CC(e, t, a, i, u) {
      return _f(), tg(u), t.flags |= _r, Ea(e, t, a, i), t.child;
    }
    function vb(e, t, a) {
      NE(t), e === null && eg(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = Uy(i, u);
      return p ? f = null : s !== null && Uy(i, s) && (t.flags |= La), gC(e, t), Ea(e, t, f, a), t.child;
    }
    function hb(e, t) {
      return e === null && eg(t), null;
    }
    function mb(e, t, a, i) {
      ym(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = hx(v), g = nl(v, u), x;
      switch (y) {
        case ke:
          return yS(t, v), t.type = v = Yf(v), x = hS(null, t, v, g, i), x;
        case ue:
          return t.type = v = WS(v), x = SC(null, t, v, g, i), x;
        case Ve:
          return t.type = v = GS(v), x = vC(null, t, v, g, i), x;
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
          return x = hC(
            null,
            t,
            v,
            nl(v.type, g),
            // The inner type can have defaults too
            i
          ), x;
        }
      }
      var N = "";
      throw v !== null && typeof v == "object" && v.$$typeof === Le && (N = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + N));
    }
    function yb(e, t, a, i, u) {
      ym(e, t), t.tag = ue;
      var s;
      return Hl(a) ? (s = !0, xh(t)) : s = !1, Df(t, u), _E(t, a, i), Tg(t, a, i, u), mS(null, t, a, !0, s, u);
    }
    function gb(e, t, a, i) {
      ym(e, t);
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
          cS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), cS[y] = !0);
        }
        t.mode & Sn && tl.recordLegacyContextWarning(t, null), nr(!0), Tp.current = t, p = Uf(null, t, a, u, s, i), v = Af(), nr(!1);
      }
      if (cu(), t.flags |= ri, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = Tt(a) || "Unknown";
        wp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), wp[g] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0
      ) {
        {
          var x = Tt(a) || "Unknown";
          wp[x] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", x, x, x), wp[x] = !0);
        }
        t.tag = ue, t.memoizedState = null, t.updateQueue = null;
        var b = !1;
        return Hl(a) ? (b = !0, xh(t)) : b = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, cg(t), bE(t, p), Tg(t, a, u, i), mS(null, t, a, !0, b, i);
      } else {
        if (t.tag = ke, t.mode & Sn) {
          Xt(!0);
          try {
            p = Uf(null, t, a, u, s, i), v = Af();
          } finally {
            Xt(!1);
          }
        }
        return kr() && v && qy(t), Ea(null, t, p, i), yS(t, a), t.child;
      }
    }
    function yS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = Da();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), pS[u] || (pS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = Tt(t) || "Unknown";
          dS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), dS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = Tt(t) || "Unknown";
          fS[p] || (S("%s: Function components do not support contextType.", p), fS[p] = !0);
        }
      }
    }
    var gS = {
      dehydrated: null,
      treeContext: null,
      retryLane: Dn
    };
    function SS(e) {
      return {
        baseLanes: e,
        cachePool: ob(),
        transitions: null
      };
    }
    function Sb(e, t) {
      var a = null;
      return {
        baseLanes: Ke(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function Eb(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return Mg(e, hp);
    }
    function Cb(e, t) {
      return Ns(e.childLanes, t);
    }
    function RC(e, t, a) {
      var i = t.pendingProps;
      Ox(t) && (t.flags |= We);
      var u = rl.current, s = !1, f = (t.flags & We) !== Me;
      if (f || Eb(u, e) ? (s = !0, t.flags &= ~We) : (e === null || e.memoizedState !== null) && (u = $w(u, UE)), u = Lf(u), Uo(t, u), e === null) {
        eg(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return _b(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var x = Rb(t, y, g, a), b = t.child;
          return b.memoizedState = SS(a), t.memoizedState = gS, x;
        } else
          return ES(t, y);
      } else {
        var N = e.memoizedState;
        if (N !== null) {
          var U = N.dehydrated;
          if (U !== null)
            return xb(e, t, f, i, U, N, a);
        }
        if (s) {
          var j = i.fallback, de = i.children, ze = wb(e, t, de, j, a), xe = t.child, St = e.child.memoizedState;
          return xe.memoizedState = St === null ? SS(a) : Sb(St, a), xe.childLanes = Cb(e, a), t.memoizedState = gS, ze;
        } else {
          var vt = i.children, k = Tb(e, t, vt, a);
          return t.memoizedState = null, k;
        }
      }
    }
    function ES(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = CS(u, i);
      return s.return = e, e.child = s, s;
    }
    function Rb(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & _e) === Ne && s !== null ? (p = s, p.childLanes = P, p.pendingProps = f, e.mode & bt && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = $o(a, u, i, null)) : (p = CS(f, u), v = $o(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function CS(e, t, a) {
      return T1(e, t, P, null);
    }
    function TC(e, t) {
      return sc(e, t);
    }
    function Tb(e, t, a, i) {
      var u = e.child, s = u.sibling, f = TC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & _e) === Ne && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= Dt) : p.push(s);
      }
      return t.child = f, f;
    }
    function wb(e, t, a, i, u) {
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
        y = TC(f, v), y.subtreeFlags = f.subtreeFlags & ar;
      var x;
      return p !== null ? x = sc(p, i) : (x = $o(i, s, u, null), x.flags |= $t), x.return = t, y.return = t, y.sibling = x, t.child = y, x;
    }
    function mm(e, t, a, i) {
      i !== null && tg(i), kf(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = ES(t, s);
      return f.flags |= $t, t.memoizedState = null, f;
    }
    function bb(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = CS(f, s), v = $o(i, s, u, null);
      return v.flags |= $t, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & _e) !== Ne && kf(t, e.child, null, u), v;
    }
    function _b(e, t, a) {
      return (e.mode & _e) === Ne ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ue) : Hy(t) ? e.lanes = En : e.lanes = Sa, null;
    }
    function xb(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & _r) {
          t.flags &= ~_r;
          var k = uS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return mm(e, t, f, k);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= We, null;
          var H = i.children, O = i.fallback, q = bb(e, t, H, O, f), pe = t.child;
          return pe.memoizedState = SS(f), t.memoizedState = gS, q;
        }
      else {
        if (hw(), (t.mode & _e) === Ne)
          return mm(
            e,
            t,
            f,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (Hy(u)) {
          var p, v, y;
          {
            var g = MT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var x;
          v ? x = new Error(v) : x = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var b = uS(x, p, y);
          return mm(e, t, f, b);
        }
        var N = Jr(f, e.childLanes);
        if (il || N) {
          var U = xm();
          if (U !== null) {
            var j = Bv(U, f);
            if (j !== Dn && j !== s.retryLane) {
              s.retryLane = j;
              var de = Kt;
              $a(e, j), pr(U, e, j, de);
            }
          }
          BS();
          var ze = uS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return mm(e, t, f, ze);
        } else if (I0(u)) {
          t.flags |= We, t.child = e.child;
          var xe = Z_.bind(null, e);
          return NT(u, xe), null;
        } else {
          gw(t, u, s.treeContext);
          var St = i.children, vt = ES(t, St);
          return vt.flags |= hi, vt;
        }
      }
    }
    function wC(e, t, a) {
      e.lanes = Ke(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = Ke(i.lanes, t)), lg(e.return, t, a);
    }
    function Db(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && wC(i, a, e);
        } else if (i.tag === mt)
          wC(i, a, e);
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
    function kb(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && qh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function Ob(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !vS[e])
        if (vS[e] = !0, typeof e == "string")
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
    function Lb(e, t) {
      e !== void 0 && !hm[e] && (e !== "collapsed" && e !== "hidden" ? (hm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (hm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function bC(e, t) {
      {
        var a = wt(e), i = !a && typeof si(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function Mb(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (wt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!bC(e[a], a))
              return;
        } else {
          var i = si(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!bC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function RS(e, t, a, i, u) {
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
    function _C(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      Ob(u), Lb(s, u), Mb(f, u), Ea(e, t, f, a);
      var p = rl.current, v = Mg(p, hp);
      if (v)
        p = Ng(p, hp), t.flags |= We;
      else {
        var y = e !== null && (e.flags & We) !== Me;
        y && Db(t, t.child, a), p = Lf(p);
      }
      if (Uo(t, p), (t.mode & _e) === Ne)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = kb(t.child), x;
            g === null ? (x = t.child, t.child = null) : (x = g.sibling, g.sibling = null), RS(
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
            var b = null, N = t.child;
            for (t.child = null; N !== null; ) {
              var U = N.alternate;
              if (U !== null && qh(U) === null) {
                t.child = N;
                break;
              }
              var j = N.sibling;
              N.sibling = b, b = N, N = j;
            }
            RS(
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
            RS(
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
    function Nb(e, t, a) {
      kg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = kf(t, null, i, a) : Ea(e, t, i, a), t.child;
    }
    var xC = !1;
    function zb(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || xC || (xC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Ji(v, s, "prop", "Context.Provider");
      }
      if (vE(t, u, p), f !== null) {
        var y = f.value;
        if (ge(y, p)) {
          if (f.children === s.children && !bh())
            return Mu(e, t, a);
        } else
          Dw(t, u, a);
      }
      var g = s.children;
      return Ea(e, t, g, a), t.child;
    }
    var DC = !1;
    function Ub(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (DC || (DC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Df(t, a);
      var f = Kn(i);
      to(t);
      var p;
      return Tp.current = t, nr(!0), p = s(f), nr(!1), cu(), t.flags |= ri, Ea(e, t, p, a), t.child;
    }
    function bp() {
      il = !0;
    }
    function ym(e, t) {
      (t.mode & _e) === Ne && e !== null && (e.alternate = null, t.alternate = null, t.flags |= $t);
    }
    function Mu(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), sC(), Fp(t.lanes), Jr(a, t.childLanes) ? (Vw(e, t), t.child) : null;
    }
    function Ab(e, t, a) {
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
    function TS(e, t) {
      var a = e.lanes;
      return !!Jr(a, t);
    }
    function Fb(e, t, a) {
      switch (t.tag) {
        case K:
          EC(t), t.stateNode, _f();
          break;
        case te:
          NE(t);
          break;
        case ue: {
          var i = t.type;
          Hl(i) && xh(t);
          break;
        }
        case Oe:
          kg(t, t.stateNode.containerInfo);
          break;
        case lt: {
          var u = t.memoizedProps.value, s = t.type._context;
          vE(t, s, u);
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
              return RC(e, t, a);
            Uo(t, Lf(rl.current));
            var x = Mu(e, t, a);
            return x !== null ? x.sibling : null;
          } else
            Uo(t, Lf(rl.current));
          break;
        }
        case mt: {
          var b = (e.flags & We) !== Me, N = Jr(a, t.childLanes);
          if (b) {
            if (N)
              return _C(e, t, a);
            t.flags |= We;
          }
          var U = t.memoizedState;
          if (U !== null && (U.rendering = null, U.tail = null, U.lastEffect = null), Uo(t, rl.current), N)
            break;
          return null;
        }
        case Be:
        case Ze:
          return t.lanes = P, yC(e, t, a);
      }
      return Mu(e, t, a);
    }
    function kC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Ab(e, t, JS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || bh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          il = !0;
        else {
          var s = TS(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & We) === Me)
            return il = !1, Fb(e, t, a);
          (e.flags & Rc) !== Me ? il = !0 : il = !1;
        }
      } else if (il = !1, kr() && sw(t)) {
        var f = t.index, p = cw();
        nE(t, p, f);
      }
      switch (t.lanes = P, t.tag) {
        case Re:
          return gb(e, t, t.type, a);
        case wn: {
          var v = t.elementType;
          return mb(e, t, v, a);
        }
        case ke: {
          var y = t.type, g = t.pendingProps, x = t.elementType === y ? g : nl(y, g);
          return hS(e, t, y, x, a);
        }
        case ue: {
          var b = t.type, N = t.pendingProps, U = t.elementType === b ? N : nl(b, N);
          return SC(e, t, b, U, a);
        }
        case K:
          return pb(e, t, a);
        case te:
          return vb(e, t, a);
        case oe:
          return hb(e, t);
        case Te:
          return RC(e, t, a);
        case Oe:
          return Nb(e, t, a);
        case Ve: {
          var j = t.type, de = t.pendingProps, ze = t.elementType === j ? de : nl(j, de);
          return vC(e, t, j, ze, a);
        }
        case Qe:
          return cb(e, t, a);
        case sn:
          return fb(e, t, a);
        case _t:
          return db(e, t, a);
        case lt:
          return zb(e, t, a);
        case ln:
          return Ub(e, t, a);
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
          return vt = nl(xe.type, vt), hC(e, t, xe, vt, a);
        }
        case Ye:
          return mC(e, t, t.type, t.pendingProps, a);
        case mn: {
          var H = t.type, O = t.pendingProps, q = t.elementType === H ? O : nl(H, O);
          return yb(e, t, H, q, a);
        }
        case mt:
          return _C(e, t, a);
        case Zt:
          break;
        case Be:
          return yC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Ff(e) {
      e.flags |= we;
    }
    function OC(e) {
      e.flags |= ha, e.flags |= mi;
    }
    var LC, wS, MC, NC;
    LC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === te || u.tag === oe)
          lT(e, u.stateNode);
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
    }, wS = function(e, t) {
    }, MC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = Og(), v = oT(f, a, s, i, u, p);
        t.updateQueue = v, v && Ff(t);
      }
    }, NC = function(e, t, a, i) {
      a !== i && Ff(t);
    };
    function _p(e, t) {
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
    function jb(e, t, a) {
      if (Tw() && (t.mode & _e) !== Ne && (t.flags & We) === Me)
        return sE(t), _f(), t.flags |= _r | Tl | rr, !1;
      var i = Mh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (Cw(t), Lr(t), (t.mode & bt) !== Ne) {
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
        return cE(), !0;
    }
    function zC(e, t, a) {
      var i = t.pendingProps;
      switch (Xy(t), t.tag) {
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
          return Hl(u) && _h(t), Lr(t), null;
        }
        case K: {
          var s = t.stateNode;
          if (Of(t), Qy(t), Ug(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Mh(t);
            if (f)
              Ff(t);
            else if (e !== null) {
              var p = e.memoizedState;
              // Check if this is a client root
              (!p.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & _r) !== Me) && (t.flags |= An, cE());
            }
          }
          return wS(e, t), Lr(t), null;
        }
        case te: {
          Lg(t);
          var v = ME(), y = t.type;
          if (e !== null && t.stateNode != null)
            MC(e, t, y, i, v), e.ref !== t.ref && OC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return Lr(t), null;
            }
            var g = Og(), x = Mh(t);
            if (x)
              Sw(t, v, g) && Ff(t);
            else {
              var b = iT(y, i, v, g, t);
              LC(b, t, !1, !1), t.stateNode = b, uT(b, y, i, v) && Ff(t);
            }
            t.ref !== null && OC(t);
          }
          return Lr(t), null;
        }
        case oe: {
          var N = i;
          if (e && t.stateNode != null) {
            var U = e.memoizedProps;
            NC(e, t, U, N);
          } else {
            if (typeof N != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var j = ME(), de = Og(), ze = Mh(t);
            ze ? Ew(t) && Ff(t) : t.stateNode = sT(N, j, de, t);
          }
          return Lr(t), null;
        }
        case Te: {
          Mf(t);
          var xe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var St = jb(e, t, xe);
            if (!St)
              return t.flags & rr ? t : null;
          }
          if ((t.flags & We) !== Me)
            return t.lanes = a, (t.mode & bt) !== Ne && lS(t), t;
          var vt = xe !== null, k = e !== null && e.memoizedState !== null;
          if (vt !== k && vt) {
            var H = t.child;
            if (H.flags |= Rl, (t.mode & _e) !== Ne) {
              var O = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !me);
              O || Mg(rl.current, UE) ? H_() : BS();
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
          return Of(t), wS(e, t), e === null && nw(t.stateNode.containerInfo), Lr(t), null;
        case lt:
          var le = t.type._context;
          return ig(le, t), Lr(t), null;
        case mn: {
          var $e = t.type;
          return Hl($e) && _h(t), Lr(t), null;
        }
        case mt: {
          Mf(t);
          var qe = t.memoizedState;
          if (qe === null)
            return Lr(t), null;
          var Pt = (t.flags & We) !== Me, Ot = qe.rendering;
          if (Ot === null)
            if (Pt)
              _p(qe, !1);
            else {
              var In = P_() && (e === null || (e.flags & We) === Me);
              if (!In)
                for (var Lt = t.child; Lt !== null; ) {
                  var jn = qh(Lt);
                  if (jn !== null) {
                    Pt = !0, t.flags |= We, _p(qe, !1);
                    var aa = jn.updateQueue;
                    return aa !== null && (t.updateQueue = aa, t.flags |= we), t.subtreeFlags = Me, Pw(t, a), Uo(t, Ng(rl.current, hp)), t.child;
                  }
                  Lt = Lt.sibling;
                }
              qe.tail !== null && Fn() > t1() && (t.flags |= We, Pt = !0, _p(qe, !1), t.lanes = wd);
            }
          else {
            if (!Pt) {
              var Ar = qh(Ot);
              if (Ar !== null) {
                t.flags |= We, Pt = !0;
                var ui = Ar.updateQueue;
                if (ui !== null && (t.updateQueue = ui, t.flags |= we), _p(qe, !0), qe.tail === null && qe.tailMode === "hidden" && !Ot.alternate && !kr())
                  return Lr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                Fn() * 2 - qe.renderingStartTime > t1() && a !== Sa && (t.flags |= We, Pt = !0, _p(qe, !1), t.lanes = wd);
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
            return Pt ? ia = Ng(ia, hp) : ia = Lf(ia), Uo(t, ia), wa;
          }
          return Lr(t), null;
        }
        case Zt:
          break;
        case Be:
        case Ze: {
          PS(t);
          var Fu = t.memoizedState, If = Fu !== null;
          if (e !== null) {
            var Bp = e.memoizedState, Wl = Bp !== null;
            Wl !== If && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !Y && (t.flags |= Rl);
          }
          return !If || (t.mode & _e) === Ne ? Lr(t) : Jr(Ql, Sa) && (Lr(t), t.subtreeFlags & ($t | we) && (t.flags |= Rl)), null;
        }
        case Rt:
          return null;
        case Je:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Hb(e, t, a) {
      switch (Xy(t), t.tag) {
        case ue: {
          var i = t.type;
          Hl(i) && _h(t);
          var u = t.flags;
          return u & rr ? (t.flags = u & ~rr | We, (t.mode & bt) !== Ne && lS(t), t) : null;
        }
        case K: {
          t.stateNode, Of(t), Qy(t), Ug();
          var s = t.flags;
          return (s & rr) !== Me && (s & We) === Me ? (t.flags = s & ~rr | We, t) : null;
        }
        case te:
          return Lg(t), null;
        case Te: {
          Mf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            _f();
          }
          var p = t.flags;
          return p & rr ? (t.flags = p & ~rr | We, (t.mode & bt) !== Ne && lS(t), t) : null;
        }
        case mt:
          return Mf(t), null;
        case Oe:
          return Of(t), null;
        case lt:
          var v = t.type._context;
          return ig(v, t), null;
        case Be:
        case Ze:
          return PS(t), null;
        case Rt:
          return null;
        default:
          return null;
      }
    }
    function UC(e, t, a) {
      switch (Xy(t), t.tag) {
        case ue: {
          var i = t.type.childContextTypes;
          i != null && _h(t);
          break;
        }
        case K: {
          t.stateNode, Of(t), Qy(t), Ug();
          break;
        }
        case te: {
          Lg(t);
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
          ig(u, t);
          break;
        case Be:
        case Ze:
          PS(t);
          break;
      }
    }
    var AC = null;
    AC = /* @__PURE__ */ new Set();
    var gm = !1, Mr = !1, Vb = typeof WeakSet == "function" ? WeakSet : Set, Se = null, jf = null, Hf = null;
    function Pb(e) {
      ni(null, function() {
        throw e;
      }), Ii();
    }
    var Bb = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & bt)
        try {
          Yl(), t.componentWillUnmount();
        } finally {
          $l(e);
        }
      else
        t.componentWillUnmount();
    };
    function FC(e, t) {
      try {
        jo(ur, e);
      } catch (a) {
        an(e, t, a);
      }
    }
    function bS(e, t, a) {
      try {
        Bb(e, a);
      } catch (i) {
        an(e, t, i);
      }
    }
    function $b(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        an(e, t, i);
      }
    }
    function jC(e, t) {
      try {
        VC(e);
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
    function Sm(e, t, a) {
      try {
        a();
      } catch (i) {
        an(e, t, i);
      }
    }
    var HC = !1;
    function Yb(e, t) {
      rT(e.containerInfo), Se = t, Ib();
      var a = HC;
      return HC = !1, a;
    }
    function Ib() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        (e.subtreeFlags & Qr) !== Me && t !== null ? (t.return = e, Se = t) : Qb();
      }
    }
    function Qb() {
      for (; Se !== null; ) {
        var e = Se;
        dn(e);
        try {
          Wb(e);
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
    function Wb(e) {
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
                var p = AC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ie(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case K: {
            {
              var v = e.stateNode;
              DT(v.containerInfo);
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
            f.destroy = void 0, p !== void 0 && ((e & Or) !== Ya ? Dv(t) : (e & ur) !== Ya && no(t), (e & Vl) !== Ya && Hp(!0), Sm(t, a, p), (e & Vl) !== Ya && Hp(!1), (e & Or) !== Ya ? kv() : (e & ur) !== Ya && Rs());
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
            (e & Or) !== Ya ? Ed(t) : (e & ur) !== Ya && Ov(t);
            var f = s.create;
            (e & Vl) !== Ya && Hp(!0), s.destroy = f(), (e & Vl) !== Ya && Hp(!1), (e & Or) !== Ya ? Dc() : (e & ur) !== Ya && Cd();
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
    function Gb(e, t) {
      if ((t.flags & we) !== Me)
        switch (t.tag) {
          case _t: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = uC(), p = t.alternate === null ? "mount" : "update";
            lC() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
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
    function qb(e, t, a, i) {
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
            p !== null && (a.type === a.elementType && !ac && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ie(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ie(a) || "instance")), EE(a, p, u));
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
              EE(a, v, y);
            }
            break;
          }
          case te: {
            var g = a.stateNode;
            if (t === null && a.flags & we) {
              var x = a.type, b = a.memoizedProps;
              vT(g, x, b);
            }
            break;
          }
          case oe:
            break;
          case Oe:
            break;
          case _t: {
            {
              var N = a.memoizedProps, U = N.onCommit, j = N.onRender, de = a.stateNode.effectDuration, ze = uC(), xe = t === null ? "mount" : "update";
              lC() && (xe = "nested-update"), typeof j == "function" && j(a.memoizedProps.id, xe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, ze);
              {
                typeof U == "function" && U(a.memoizedProps.id, xe, de, ze), Q_(a);
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
            r_(e, a);
            break;
          }
          case mt:
          case mn:
          case Zt:
          case Be:
          case Ze:
          case Je:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      Mr || a.flags & ha && VC(a);
    }
    function Xb(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          if (e.mode & bt)
            try {
              Yl(), FC(e, e.return);
            } finally {
              $l(e);
            }
          else
            FC(e, e.return);
          break;
        }
        case ue: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && $b(e, e.return, t), jC(e, e.return);
          break;
        }
        case te: {
          jC(e, e.return);
          break;
        }
      }
    }
    function Kb(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === te) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? wT(u) : _T(i.stateNode, i.memoizedProps);
            } catch (f) {
              an(e, e.return, f);
            }
          }
        } else if (i.tag === oe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? bT(s) : xT(s, i.memoizedProps);
            } catch (f) {
              an(e, e.return, f);
            }
        } else if (!((i.tag === Be || i.tag === Ze) && i.memoizedState !== null && i !== e)) {
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
    function VC(e) {
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
    function Zb(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function PC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, PC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === te) {
          var a = e.stateNode;
          a !== null && iw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function Jb(e) {
      for (var t = e.return; t !== null; ) {
        if (BC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function BC(e) {
      return e.tag === te || e.tag === K || e.tag === Oe;
    }
    function $C(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || BC(t.return))
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
    function e_(e) {
      var t = Jb(e);
      switch (t.tag) {
        case te: {
          var a = t.stateNode;
          t.flags & La && (Y0(a), t.flags &= ~La);
          var i = $C(e);
          xS(e, i, a);
          break;
        }
        case K:
        case Oe: {
          var u = t.stateNode.containerInfo, s = $C(e);
          _S(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function _S(e, t, a) {
      var i = e.tag, u = i === te || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? ET(a, s, t) : gT(a, s);
      } else if (i !== Oe) {
        var f = e.child;
        if (f !== null) {
          _S(f, t, a);
          for (var p = f.sibling; p !== null; )
            _S(p, t, a), p = p.sibling;
        }
      }
    }
    function xS(e, t, a) {
      var i = e.tag, u = i === te || i === oe;
      if (u) {
        var s = e.stateNode;
        t ? ST(a, s, t) : yT(a, s);
      } else if (i !== Oe) {
        var f = e.child;
        if (f !== null) {
          xS(f, t, a);
          for (var p = f.sibling; p !== null; )
            xS(p, t, a), p = p.sibling;
        }
      }
    }
    var Nr = null, ul = !1;
    function t_(e, t, a) {
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
        YC(e, t, a), Nr = null, ul = !1;
      }
      Zb(a);
    }
    function Ho(e, t, a) {
      for (var i = a.child; i !== null; )
        YC(e, t, i), i = i.sibling;
    }
    function YC(e, t, a) {
      switch (_v(a), a.tag) {
        case te:
          Mr || Vf(a, t);
        case oe: {
          {
            var i = Nr, u = ul;
            Nr = null, Ho(e, t, a), Nr = i, ul = u, Nr !== null && (ul ? RT(Nr, a.stateNode) : CT(Nr, a.stateNode));
          }
          return;
        }
        case It: {
          Nr !== null && (ul ? TT(Nr, a.stateNode) : jy(Nr, a.stateNode));
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
                  var x = g, b = x.destroy, N = x.tag;
                  b !== void 0 && ((N & Vl) !== Ya ? Sm(a, t, b) : (N & ur) !== Ya && (no(a), a.mode & bt ? (Yl(), Sm(a, t, b), $l(a)) : Sm(a, t, b), Rs())), g = g.next;
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
            typeof U.componentWillUnmount == "function" && bS(a, t, U);
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
            var j = Mr;
            Mr = j || a.memoizedState !== null, Ho(e, t, a), Mr = j;
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
    function n_(e) {
      e.memoizedState;
    }
    function r_(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && BT(s);
          }
        }
      }
    }
    function IC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new Vb()), t.forEach(function(i) {
          var u = J_.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), ga)
              if (jf !== null && Hf !== null)
                jp(Hf, jf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function a_(e, t, a) {
      jf = a, Hf = e, dn(t), QC(t, e), dn(t), jf = null, Hf = null;
    }
    function ol(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            t_(e, t, s);
          } catch (v) {
            an(s, t, v);
          }
        }
      var f = es();
      if (t.subtreeFlags & Wr)
        for (var p = t.child; p !== null; )
          dn(p), QC(p, e), p = p.sibling;
      dn(f);
    }
    function QC(e, t, a) {
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
                Y0(s);
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
                    hT(f, g, y, v, p, e);
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
            var x = e.stateNode, b = e.memoizedProps, N = i !== null ? i.memoizedProps : b;
            try {
              mT(x, N, b);
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
                PT(t.containerInfo);
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
          var j = e.child;
          if (j.flags & Rl) {
            var de = j.stateNode, ze = j.memoizedState, xe = ze !== null;
            if (de.isHidden = xe, xe) {
              var St = j.alternate !== null && j.alternate.memoizedState !== null;
              St || j_();
            }
          }
          if (u & we) {
            try {
              n_(e);
            } catch ($e) {
              an(e, e.return, $e);
            }
            IC(e);
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
            var H = e.stateNode, O = e.memoizedState, q = O !== null, pe = e;
            if (H.isHidden = q, q && !vt && (pe.mode & _e) !== Ne) {
              Se = pe;
              for (var le = pe.child; le !== null; )
                Se = le, l_(le), le = le.sibling;
            }
            Kb(pe, q);
          }
          return;
        }
        case mt: {
          ol(t, e), Il(e), u & we && IC(e);
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
          e_(e);
        } catch (a) {
          an(e, e.return, a);
        }
        e.flags &= ~$t;
      }
      t & hi && (e.flags &= ~hi);
    }
    function i_(e, t, a) {
      jf = a, Hf = t, Se = e, WC(e, t, a), jf = null, Hf = null;
    }
    function WC(e, t, a) {
      for (var i = (e.mode & _e) !== Ne; Se !== null; ) {
        var u = Se, s = u.child;
        if (u.tag === Be && i) {
          var f = u.memoizedState !== null, p = f || gm;
          if (p) {
            DS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || Mr, x = gm, b = Mr;
            gm = p, Mr = g, Mr && !b && (Se = u, u_(u));
            for (var N = s; N !== null; )
              Se = N, WC(
                N,
                // New root; bubble back up to here and stop.
                t,
                a
              ), N = N.sibling;
            Se = u, gm = x, Mr = b, DS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & ai) !== Me && s !== null ? (s.return = u, Se = s) : DS(e, t, a);
      }
    }
    function DS(e, t, a) {
      for (; Se !== null; ) {
        var i = Se;
        if ((i.flags & ai) !== Me) {
          var u = i.alternate;
          dn(i);
          try {
            qb(t, u, i, a);
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
    function l_(e) {
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
            typeof i.componentWillUnmount == "function" && bS(t, t.return, i);
            break;
          }
          case te: {
            Vf(t, t.return);
            break;
          }
          case Be: {
            var u = t.memoizedState !== null;
            if (u) {
              GC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Se = a) : GC(e);
      }
    }
    function GC(e) {
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
    function u_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.child;
        if (t.tag === Be) {
          var i = t.memoizedState !== null;
          if (i) {
            qC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Se = a) : qC(e);
      }
    }
    function qC(e) {
      for (; Se !== null; ) {
        var t = Se;
        dn(t);
        try {
          Xb(t);
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
    function o_(e, t, a, i) {
      Se = t, s_(t, e, a, i);
    }
    function s_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se, s = u.child;
        (u.subtreeFlags & Gr) !== Me && s !== null ? (s.return = u, Se = s) : c_(e, t, a, i);
      }
    }
    function c_(e, t, a, i) {
      for (; Se !== null; ) {
        var u = Se;
        if ((u.flags & Ir) !== Me) {
          dn(u);
          try {
            f_(t, u, a, i);
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
    function f_(e, t, a, i) {
      switch (t.tag) {
        case ke:
        case Ve:
        case Ye: {
          if (t.mode & bt) {
            iS();
            try {
              jo(Or | lr, t);
            } finally {
              aS(t);
            }
          } else
            jo(Or | lr, t);
          break;
        }
      }
    }
    function d_(e) {
      Se = e, p_();
    }
    function p_() {
      for (; Se !== null; ) {
        var e = Se, t = e.child;
        if ((Se.flags & Dt) !== Me) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              Se = u, m_(u, e);
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
        (e.subtreeFlags & Gr) !== Me && t !== null ? (t.return = e, Se = t) : v_();
      }
    }
    function v_() {
      for (; Se !== null; ) {
        var e = Se;
        (e.flags & Ir) !== Me && (dn(e), h_(e), en());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Se = t;
          return;
        }
        Se = e.return;
      }
    }
    function h_(e) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          e.mode & bt ? (iS(), ll(Or | lr, e, e.return), aS(e)) : ll(Or | lr, e, e.return);
          break;
        }
      }
    }
    function m_(e, t) {
      for (; Se !== null; ) {
        var a = Se;
        dn(a), g_(a, t), en();
        var i = a.child;
        i !== null ? (i.return = a, Se = i) : y_(e);
      }
    }
    function y_(e) {
      for (; Se !== null; ) {
        var t = Se, a = t.sibling, i = t.return;
        if (PC(t), t === e) {
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
    function g_(e, t) {
      switch (e.tag) {
        case ke:
        case Ve:
        case Ye: {
          e.mode & bt ? (iS(), ll(Or, e, t), aS(e)) : ll(Or, e, t);
          break;
        }
      }
    }
    function S_(e) {
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
    function E_(e) {
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
    function C_(e) {
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
          typeof t.componentWillUnmount == "function" && bS(e, e.return, t);
          break;
        }
      }
    }
    function R_(e) {
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
      var xp = Symbol.for;
      xp("selector.component"), xp("selector.has_pseudo_class"), xp("selector.role"), xp("selector.test_id"), xp("selector.text");
    }
    var T_ = [];
    function w_() {
      T_.forEach(function(e) {
        return e();
      });
    }
    var b_ = tt.ReactCurrentActQueue;
    function __(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function XC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && b_.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var x_ = Math.ceil, kS = tt.ReactCurrentDispatcher, OS = tt.ReactCurrentOwner, zr = tt.ReactCurrentBatchConfig, sl = tt.ReactCurrentActQueue, cr = (
      /*             */
      0
    ), KC = (
      /*               */
      1
    ), Ur = (
      /*                */
      2
    ), ki = (
      /*                */
      4
    ), Nu = 0, Dp = 1, ic = 2, Em = 3, kp = 4, ZC = 5, LS = 6, gt = cr, Ca = null, Mn = null, fr = P, Ql = P, MS = ko(P), dr = Nu, Op = null, Cm = P, Lp = P, Rm = P, Mp = null, Ia = null, NS = 0, JC = 500, e1 = 1 / 0, D_ = 500, zu = null;
    function Np() {
      e1 = Fn() + D_;
    }
    function t1() {
      return e1;
    }
    var Tm = !1, zS = null, Pf = null, lc = !1, Vo = null, zp = P, US = [], AS = null, k_ = 50, Up = 0, FS = null, jS = !1, wm = !1, O_ = 50, Bf = 0, bm = null, Ap = Kt, _m = P, n1 = !1;
    function xm() {
      return Ca;
    }
    function Ra() {
      return (gt & (Ur | ki)) !== cr ? Fn() : (Ap !== Kt || (Ap = Fn()), Ap);
    }
    function Po(e) {
      var t = e.mode;
      if ((t & _e) === Ne)
        return Ue;
      if ((gt & Ur) !== cr && fr !== P)
        return so(fr);
      var a = _w() !== bw;
      if (a) {
        if (zr.transition !== null) {
          var i = zr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return _m === Dn && (_m = Hv()), _m;
      }
      var u = Fa();
      if (u !== Dn)
        return u;
      var s = cT();
      return s;
    }
    function L_(e) {
      var t = e.mode;
      return (t & _e) === Ne ? Ue : Zr();
    }
    function pr(e, t, a, i) {
      tx(), n1 && S("useInsertionEffect must not schedule updates."), jS && (wm = !0), Su(e, a, i), (gt & Ur) !== P && e === Ca ? ax(t) : (ga && Gc(e, t, a), ix(t), e === Ca && ((gt & Ur) === cr && (Lp = Ke(Lp, a)), dr === kp && Bo(e, fr)), Qa(e, i), a === Ue && gt === cr && (t.mode & _e) === Ne && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !sl.isBatchingLegacy && (Np(), tE()));
    }
    function M_(e, t, a) {
      var i = e.current;
      i.lanes = t, Su(e, t, a), Qa(e, a);
    }
    function N_(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (gt & Ur) !== cr
      );
    }
    function Qa(e, t) {
      var a = e.callbackNode;
      ry(e, t);
      var i = Os(e, e === Ca ? fr : P);
      if (i === P) {
        a !== null && g1(a), e.callbackNode = null, e.callbackPriority = Dn;
        return;
      }
      var u = kn(i), s = e.callbackPriority;
      if (s === u && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(sl.current !== null && a !== IS)) {
        a == null && s !== Ue && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && g1(a);
      var f;
      if (u === Ue)
        e.tag === Oo ? (sl.isBatchingLegacy !== null && (sl.didScheduleLegacyUpdate = !0), ow(i1.bind(null, e))) : eE(i1.bind(null, e)), sl.current !== null ? sl.current.push(Lo) : dT(function() {
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
        f = QS(p, r1.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function r1(e, t) {
      if (tb(), Ap = Kt, _m = P, (gt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Au();
      if (i && e.callbackNode !== a)
        return null;
      var u = Os(e, e === Ca ? fr : P);
      if (u === P)
        return null;
      var s = !Ms(e, u) && !jv(e, u) && !t, f = s ? $_(e, u) : km(e, u);
      if (f !== Nu) {
        if (f === ic) {
          var p = Ml(e);
          p !== P && (u = p, f = HS(e, p));
        }
        if (f === Dp) {
          var v = Op;
          throw uc(e, P), Bo(e, u), Qa(e, Fn()), v;
        }
        if (f === LS)
          Bo(e, u);
        else {
          var y = !Ms(e, u), g = e.current.alternate;
          if (y && !U_(g)) {
            if (f = km(e, u), f === ic) {
              var x = Ml(e);
              x !== P && (u = x, f = HS(e, x));
            }
            if (f === Dp) {
              var b = Op;
              throw uc(e, P), Bo(e, u), Qa(e, Fn()), b;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, z_(e, f, u);
        }
      }
      return Qa(e, Fn()), e.callbackNode === a ? r1.bind(null, e) : null;
    }
    function HS(e, t) {
      var a = Mp;
      if (qc(e)) {
        var i = uc(e, t);
        i.flags |= _r, tw(e.containerInfo);
      }
      var u = km(e, t);
      if (u !== ic) {
        var s = Ia;
        Ia = a, s !== null && a1(s);
      }
      return u;
    }
    function a1(e) {
      Ia === null ? Ia = e : Ia.push.apply(Ia, e);
    }
    function z_(e, t, a) {
      switch (t) {
        case Nu:
        case Dp:
          throw new Error("Root did not complete. This is a bug in React.");
        case ic: {
          oc(e, Ia, zu);
          break;
        }
        case Em: {
          if (Bo(e, a), Uv(a) && // do not delay if we're inside an act() scope
          !S1()) {
            var i = NS + JC - Fn();
            if (i > 10) {
              var u = Os(e, P);
              if (u !== P)
                break;
              var s = e.suspendedLanes;
              if (!gu(s, a)) {
                Ra(), Qc(e, s);
                break;
              }
              e.timeoutHandle = Ay(oc.bind(null, e, Ia, zu), i);
              break;
            }
          }
          oc(e, Ia, zu);
          break;
        }
        case kp: {
          if (Bo(e, a), Fv(a))
            break;
          if (!S1()) {
            var f = $c(e, a), p = f, v = Fn() - p, y = ex(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ay(oc.bind(null, e, Ia, zu), y);
              break;
            }
          }
          oc(e, Ia, zu);
          break;
        }
        case ZC: {
          oc(e, Ia, zu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function U_(e) {
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
      t = Ns(t, Rm), t = Ns(t, Lp), Pv(e, t);
    }
    function i1(e) {
      if (nb(), (gt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      Au();
      var t = Os(e, P);
      if (!Jr(t, Ue))
        return Qa(e, Fn()), null;
      var a = km(e, t);
      if (e.tag !== Oo && a === ic) {
        var i = Ml(e);
        i !== P && (t = i, a = HS(e, i));
      }
      if (a === Dp) {
        var u = Op;
        throw uc(e, P), Bo(e, t), Qa(e, Fn()), u;
      }
      if (a === LS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, oc(e, Ia, zu), Qa(e, Fn()), null;
    }
    function A_(e, t) {
      t !== P && (Dd(e, Ke(t, Ue)), Qa(e, Fn()), (gt & (Ur | ki)) === cr && (Np(), Lo()));
    }
    function VS(e, t) {
      var a = gt;
      gt |= KC;
      try {
        return e(t);
      } finally {
        gt = a, gt === cr && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !sl.isBatchingLegacy && (Np(), tE());
      }
    }
    function F_(e, t, a, i, u) {
      var s = Fa(), f = zr.transition;
      try {
        return zr.transition = null, Cn(On), e(t, a, i, u);
      } finally {
        Cn(s), zr.transition = f, gt === cr && Np();
      }
    }
    function Uu(e) {
      Vo !== null && Vo.tag === Oo && (gt & (Ur | ki)) === cr && Au();
      var t = gt;
      gt |= KC;
      var a = zr.transition, i = Fa();
      try {
        return zr.transition = null, Cn(On), e ? e() : void 0;
      } finally {
        Cn(i), zr.transition = a, gt = t, (gt & (Ur | ki)) === cr && Lo();
      }
    }
    function l1() {
      return (gt & (Ur | ki)) !== cr;
    }
    function Dm(e, t) {
      na(MS, Ql, e), Ql = Ke(Ql, t);
    }
    function PS(e) {
      Ql = MS.current, ta(MS, e);
    }
    function uc(e, t) {
      e.finishedWork = null, e.finishedLanes = P;
      var a = e.timeoutHandle;
      if (a !== Fy && (e.timeoutHandle = Fy, fT(a)), Mn !== null)
        for (var i = Mn.return; i !== null; ) {
          var u = i.alternate;
          UC(u, i), i = i.return;
        }
      Ca = e;
      var s = sc(e.current, null);
      return Mn = s, fr = Ql = t, dr = Nu, Op = null, Cm = P, Lp = P, Rm = P, Mp = null, Ia = null, Ow(), tl.discardPendingWarnings(), s;
    }
    function u1(e, t) {
      do {
        var a = Mn;
        try {
          if (Ah(), FE(), en(), OS.current = null, a === null || a.return === null) {
            dr = Dp, Op = t, Mn = null;
            return;
          }
          if (dt && a.mode & bt && vm(a, !0), ut)
            if (cu(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Mv(a, i, fr);
            } else
              Lv(a, t, fr);
          ub(e, a.return, a, t, fr), f1(a);
        } catch (u) {
          t = u, Mn === a && a !== null ? (a = a.return, Mn = a) : a = Mn;
          continue;
        }
        return;
      } while (!0);
    }
    function o1() {
      var e = kS.current;
      return kS.current = sm, e === null ? sm : e;
    }
    function s1(e) {
      kS.current = e;
    }
    function j_() {
      NS = Fn();
    }
    function Fp(e) {
      Cm = Ke(e, Cm);
    }
    function H_() {
      dr === Nu && (dr = Em);
    }
    function BS() {
      (dr === Nu || dr === Em || dr === ic) && (dr = kp), Ca !== null && (Ls(Cm) || Ls(Lp)) && Bo(Ca, fr);
    }
    function V_(e) {
      dr !== kp && (dr = ic), Mp === null ? Mp = [e] : Mp.push(e);
    }
    function P_() {
      return dr === Nu;
    }
    function km(e, t) {
      var a = gt;
      gt |= Ur;
      var i = o1();
      if (Ca !== e || fr !== t) {
        if (ga) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (jp(e, fr), u.clear()), kd(e, t);
        }
        zu = Us(), uc(e, t);
      }
      ao(t);
      do
        try {
          B_();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      if (Ah(), gt = a, s1(i), Mn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return kl(), Ca = null, fr = P, dr;
    }
    function B_() {
      for (; Mn !== null; )
        c1(Mn);
    }
    function $_(e, t) {
      var a = gt;
      gt |= Ur;
      var i = o1();
      if (Ca !== e || fr !== t) {
        if (ga) {
          var u = e.memoizedUpdaters;
          u.size > 0 && (jp(e, fr), u.clear()), kd(e, t);
        }
        zu = Us(), Np(), uc(e, t);
      }
      ao(t);
      do
        try {
          Y_();
          break;
        } catch (s) {
          u1(e, s);
        }
      while (!0);
      return Ah(), s1(i), gt = a, Mn !== null ? (ws(), Nu) : (kl(), Ca = null, fr = P, dr);
    }
    function Y_() {
      for (; Mn !== null && !wv(); )
        c1(Mn);
    }
    function c1(e) {
      var t = e.alternate;
      dn(e);
      var a;
      (e.mode & bt) !== Ne ? (rS(e), a = $S(t, e, Ql), vm(e, !0)) : a = $S(t, e, Ql), en(), e.memoizedProps = e.pendingProps, a === null ? f1(e) : Mn = a, OS.current = null;
    }
    function f1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Tl) === Me) {
          dn(t);
          var u = void 0;
          if ((t.mode & bt) === Ne ? u = zC(a, t, Ql) : (rS(t), u = zC(a, t, Ql), vm(t, !1)), en(), u !== null) {
            Mn = u;
            return;
          }
        } else {
          var s = Hb(a, t);
          if (s !== null) {
            s.flags &= Qi, Mn = s;
            return;
          }
          if ((t.mode & bt) !== Ne) {
            vm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Tl, i.subtreeFlags = Me, i.deletions = null;
          else {
            dr = LS, Mn = null;
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
      dr === Nu && (dr = ZC);
    }
    function oc(e, t, a) {
      var i = Fa(), u = zr.transition;
      try {
        zr.transition = null, Cn(On), I_(e, t, a, i);
      } finally {
        zr.transition = u, Cn(i);
      }
      return null;
    }
    function I_(e, t, a, i) {
      do
        Au();
      while (Vo !== null);
      if (nx(), (gt & (Ur | ki)) !== cr)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (xv(s), u === null)
        return Cs(), null;
      if (s === P && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = P, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = Dn;
      var f = Ke(u.lanes, u.childLanes);
      Wc(e, f), e === Ca && (Ca = null, Mn = null, fr = P), ((u.subtreeFlags & Gr) !== Me || (u.flags & Gr) !== Me) && (lc || (lc = !0, AS = a, QS(yi, function() {
        return Au(), null;
      })));
      var p = (u.subtreeFlags & (Qr | Wr | ai | Gr)) !== Me, v = (u.flags & (Qr | Wr | ai | Gr)) !== Me;
      if (p || v) {
        var y = zr.transition;
        zr.transition = null;
        var g = Fa();
        Cn(On);
        var x = gt;
        gt |= ki, OS.current = null, Yb(e, u), oC(), a_(e, u, s), aT(e.containerInfo), e.current = u, ro(s), i_(u, e, s), Nv(), Zu(), gt = x, Cn(g), zr.transition = y;
      } else
        e.current = u, oC();
      var b = lc;
      if (lc ? (lc = !1, Vo = e, zp = s) : (Bf = 0, bm = null), f = e.pendingLanes, f === P && (Pf = null), b || h1(e.current, !1), xl(u.stateNode, i), ga && e.memoizedUpdaters.clear(), w_(), Qa(e, Fn()), t !== null)
        for (var N = e.onRecoverableError, U = 0; U < t.length; U++) {
          var j = t[U], de = j.stack, ze = j.digest;
          N(j.value, {
            componentStack: de,
            digest: ze
          });
        }
      if (Tm) {
        Tm = !1;
        var xe = zS;
        throw zS = null, xe;
      }
      return Jr(zp, Ue) && e.tag !== Oo && Au(), f = e.pendingLanes, Jr(f, Ue) ? (eb(), e === FS ? Up++ : (Up = 0, FS = e)) : Up = 0, Lo(), Cs(), null;
    }
    function Au() {
      if (Vo !== null) {
        var e = ir(zp), t = uy(Ei, e), a = zr.transition, i = Fa();
        try {
          return zr.transition = null, Cn(t), W_();
        } finally {
          Cn(i), zr.transition = a;
        }
      }
      return !1;
    }
    function Q_(e) {
      US.push(e), lc || (lc = !0, QS(yi, function() {
        return Au(), null;
      }));
    }
    function W_() {
      if (Vo === null)
        return !1;
      var e = AS;
      AS = null;
      var t = Vo, a = zp;
      if (Vo = null, zp = P, (gt & (Ur | ki)) !== cr)
        throw new Error("Cannot flush passive effects while already rendering.");
      jS = !0, wm = !1, Ts(a);
      var i = gt;
      gt |= ki, d_(t.current), o_(t, t.current, a, e);
      {
        var u = US;
        US = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          Gb(t, f);
        }
      }
      gi(), h1(t.current, !0), gt = i, Lo(), wm ? t === bm ? Bf++ : (Bf = 0, bm = t) : Bf = 0, jS = !1, wm = !1, Sd(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function d1(e) {
      return Pf !== null && Pf.has(e);
    }
    function G_(e) {
      Pf === null ? Pf = /* @__PURE__ */ new Set([e]) : Pf.add(e);
    }
    function q_(e) {
      Tm || (Tm = !0, zS = e);
    }
    var X_ = q_;
    function p1(e, t, a) {
      var i = rc(a, t), u = cC(e, i, Ue), s = No(e, u, Ue), f = Ra();
      s !== null && (Su(s, Ue, f), Qa(s, f));
    }
    function an(e, t, a) {
      if (Pb(a), Hp(!1), e.tag === K) {
        p1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === K) {
          p1(i, e, a);
          return;
        } else if (i.tag === ue) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !d1(s)) {
            var f = rc(a, e), p = sS(i, f, Ue), v = No(i, p, Ue), y = Ra();
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
    function K_(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = Ra();
      Qc(e, a), lx(e), Ca === e && gu(fr, a) && (dr === kp || dr === Em && Uv(fr) && Fn() - NS < JC ? uc(e, P) : Rm = Ke(Rm, a)), Qa(e, u);
    }
    function v1(e, t) {
      t === Dn && (t = L_(e));
      var a = Ra(), i = $a(e, t);
      i !== null && (Su(i, t, a), Qa(i, a));
    }
    function Z_(e) {
      var t = e.memoizedState, a = Dn;
      t !== null && (a = t.retryLane), v1(e, a);
    }
    function J_(e, t) {
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
      i !== null && i.delete(t), v1(e, a);
    }
    function ex(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : x_(e / 1960) * 1960;
    }
    function tx() {
      if (Up > k_)
        throw Up = 0, FS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Bf > O_ && (Bf = 0, bm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function nx() {
      tl.flushLegacyContextWarning(), tl.flushPendingUnsafeLifecycleWarnings();
    }
    function h1(e, t) {
      dn(e), Om(e, Na, C_), t && Om(e, ou, R_), Om(e, Na, S_), t && Om(e, ou, E_), en();
    }
    function Om(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Me ? i = i.child : ((i.flags & t) !== Me && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Lm = null;
    function m1(e) {
      {
        if ((gt & Ur) !== cr || !(e.mode & _e))
          return;
        var t = e.tag;
        if (t !== Re && t !== K && t !== ue && t !== ke && t !== Ve && t !== ct && t !== Ye)
          return;
        var a = Ie(e) || "ReactComponent";
        if (Lm !== null) {
          if (Lm.has(a))
            return;
          Lm.add(a);
        } else
          Lm = /* @__PURE__ */ new Set([a]);
        var i = fn;
        try {
          dn(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? dn(e) : en();
        }
      }
    }
    var $S;
    {
      var rx = null;
      $S = function(e, t, a) {
        var i = w1(rx, t);
        try {
          return kC(e, t, a);
        } catch (s) {
          if (mw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Ah(), FE(), UC(e, t), w1(t, i), t.mode & bt && rS(t), ni(null, kC, null, e, t, a), ey()) {
            var u = Ii();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var y1 = !1, YS;
    YS = /* @__PURE__ */ new Set();
    function ax(e) {
      if (Br && !Kw())
        switch (e.tag) {
          case ke:
          case Ve:
          case Ye: {
            var t = Mn && Ie(Mn) || "Unknown", a = t;
            if (!YS.has(a)) {
              YS.add(a);
              var i = Ie(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case ue: {
            y1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), y1 = !0);
            break;
          }
        }
    }
    function jp(e, t) {
      if (ga) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Gc(e, i, t);
        });
      }
    }
    var IS = {};
    function QS(e, t) {
      {
        var a = sl.current;
        return a !== null ? (a.push(t), IS) : md(e, t);
      }
    }
    function g1(e) {
      if (e !== IS)
        return _c(e);
    }
    function S1() {
      return sl.current !== null;
    }
    function ix(e) {
      {
        if (e.mode & _e) {
          if (!XC())
            return;
        } else if (!__() || gt !== cr || e.tag !== ke && e.tag !== Ve && e.tag !== Ye)
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
    function lx(e) {
      e.tag !== Oo && XC() && sl.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Hp(e) {
      n1 = e;
    }
    var Oi = null, $f = null, ux = function(e) {
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
    function WS(e) {
      return Yf(e);
    }
    function GS(e) {
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
    function E1(e, t) {
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
            (s === et || s === Le) && (u = !0);
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
    function C1(e) {
      {
        if (Oi === null || typeof WeakSet != "function")
          return;
        $f === null && ($f = /* @__PURE__ */ new WeakSet()), $f.add(e);
      }
    }
    var ox = function(e, t) {
      {
        if (Oi === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Au(), Uu(function() {
          qS(e.current, i, a);
        });
      }
    }, sx = function(e, t) {
      {
        if (e.context !== ii)
          return;
        Au(), Uu(function() {
          Vp(t, e, null, null);
        });
      }
    };
    function qS(e, t, a) {
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
        u !== null && !g && qS(u, t, a), s !== null && qS(s, t, a);
      }
    }
    var cx = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return XS(e.current, i, a), a;
      }
    };
    function XS(e, t, a) {
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
        p !== null && t.has(p) && (v = !0), v ? fx(e, a) : i !== null && XS(i, t, a), u !== null && XS(u, t, a);
      }
    }
    function fx(e, t) {
      {
        var a = dx(e, t);
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
    function dx(e, t) {
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
    var KS;
    {
      KS = !1;
      try {
        var R1 = Object.preventExtensions({});
      } catch {
        KS = !0;
      }
    }
    function px(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Me, this.subtreeFlags = Me, this.deletions = null, this.lanes = P, this.childLanes = P, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !KS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var li = function(e, t, a, i) {
      return new px(e, t, a, i);
    };
    function ZS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function vx(e) {
      return typeof e == "function" && !ZS(e) && e.defaultProps === void 0;
    }
    function hx(e) {
      if (typeof e == "function")
        return ZS(e) ? ue : ke;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ie)
          return Ve;
        if (t === et)
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
          a.type = WS(e.type);
          break;
        case Ve:
          a.type = GS(e.type);
          break;
      }
      return a;
    }
    function mx(e, t) {
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
    function yx(e, t, a) {
      var i;
      return e === Dh ? (i = _e, t === !0 && (i |= Sn, i |= Ua)) : i = Ne, ga && (i |= bt), li(K, null, null, i);
    }
    function JS(e, t, a, i, u, s) {
      var f = Re, p = e;
      if (typeof e == "function")
        ZS(e) ? (f = ue, p = WS(p)) : p = Yf(p);
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
              return gx(a, u, s, t);
            case st:
              return Sx(a, u, s, t);
            case yt:
              return Ex(a, u, s, t);
            case Gt:
              return T1(a, u, s, t);
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
                    f = Ve, p = GS(p);
                    break e;
                  case et:
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
    function e0(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = JS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function $o(e, t, a, i) {
      var u = li(Qe, e, i, t);
      return u.lanes = a, u;
    }
    function gx(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = li(_t, e, i, t | bt);
      return u.elementType = R, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function Sx(e, t, a, i) {
      var u = li(Te, e, i, t);
      return u.elementType = st, u.lanes = a, u;
    }
    function Ex(e, t, a, i) {
      var u = li(mt, e, i, t);
      return u.elementType = yt, u.lanes = a, u;
    }
    function T1(e, t, a, i) {
      var u = li(Be, e, i, t);
      u.elementType = Gt, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function t0(e, t, a) {
      var i = li(oe, e, null, t);
      return i.lanes = a, i;
    }
    function Cx() {
      var e = li(te, null, null, Ne);
      return e.elementType = "DELETED", e;
    }
    function Rx(e) {
      var t = li(It, null, null, Ne);
      return t.stateNode = e, t;
    }
    function n0(e, t, a) {
      var i = e.children !== null ? e.children : [], u = li(Oe, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, u;
    }
    function w1(e, t) {
      return e === null && (e = li(Re, null, null, Ne)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function Tx(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = Fy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = Dn, this.eventTimes = zs(P), this.expirationTimes = zs(Kt), this.pendingLanes = P, this.suspendedLanes = P, this.pingedLanes = P, this.expiredLanes = P, this.mutableReadLanes = P, this.finishedLanes = P, this.entangledLanes = P, this.entanglements = zs(P), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < xn; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Dh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Oo:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function b1(e, t, a, i, u, s, f, p, v, y) {
      var g = new Tx(e, t, a, p, v), x = yx(t, s);
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
      return cg(x), g;
    }
    var r0 = "18.2.0";
    function wx(e, t, a) {
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
    var a0, i0;
    a0 = !1, i0 = {};
    function _1(e) {
      if (!e)
        return ii;
      var t = vi(e), a = uw(t);
      if (t.tag === ue) {
        var i = t.type;
        if (Hl(i))
          return Z0(t, i, a);
      }
      return a;
    }
    function bx(e, t) {
      {
        var a = vi(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = pd(a);
        if (u === null)
          return null;
        if (u.mode & Sn) {
          var s = Ie(a) || "Component";
          if (!i0[s]) {
            i0[s] = !0;
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
    function x1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return b1(e, t, v, y, a, i, u, s, f);
    }
    function D1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, x = b1(a, i, g, e, u, s, f, p, v);
      x.context = _1(null);
      var b = x.current, N = Ra(), U = Po(b), j = Lu(N, U);
      return j.callback = t ?? null, No(b, j, U), M_(x, U, N), x;
    }
    function Vp(e, t, a, i) {
      Wi(t, e);
      var u = t.current, s = Ra(), f = Po(u);
      Rd(f);
      var p = _1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Br && fn !== null && !a0 && (a0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ie(fn) || "Unknown"));
      var v = Lu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = No(u, v, f);
      return y !== null && (pr(y, u, f, s), Ph(y, u, f)), f;
    }
    function Mm(e) {
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
    function _x(e) {
      switch (e.tag) {
        case K: {
          var t = e.stateNode;
          if (qc(t)) {
            var a = ay(t);
            A_(t, a);
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
          l0(e, i);
          break;
        }
      }
    }
    function k1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Vv(a.retryLane, t));
    }
    function l0(e, t) {
      k1(e, t);
      var a = e.alternate;
      a && k1(a, t);
    }
    function xx(e) {
      if (e.tag === Te) {
        var t = yu, a = $a(e, t);
        if (a !== null) {
          var i = Ra();
          pr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function Dx(e) {
      if (e.tag === Te) {
        var t = Po(e), a = $a(e, t);
        if (a !== null) {
          var i = Ra();
          pr(a, e, t, i);
        }
        l0(e, t);
      }
    }
    function O1(e) {
      var t = hd(e);
      return t === null ? null : t.stateNode;
    }
    var L1 = function(e) {
      return null;
    };
    function kx(e) {
      return L1(e);
    }
    var M1 = function(e) {
      return !1;
    };
    function Ox(e) {
      return M1(e);
    }
    var N1 = null, z1 = null, U1 = null, A1 = null, F1 = null, j1 = null, H1 = null, V1 = null, P1 = null;
    {
      var B1 = function(e, t, a) {
        var i = t[a], u = wt(e) ? e.slice() : at({}, e);
        return a + 1 === t.length ? (wt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = B1(e[i], t, a + 1), u);
      }, $1 = function(e, t) {
        return B1(e, t, 0);
      }, Y1 = function(e, t, a, i) {
        var u = t[i], s = wt(e) ? e.slice() : at({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], wt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = Y1(
            // $FlowFixMe number or string is fine here
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, I1 = function(e, t, a) {
        if (t.length !== a.length) {
          Xe("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Xe("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return Y1(e, t, a, 0);
      }, Q1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = wt(e) ? e.slice() : at({}, e);
        return s[u] = Q1(e[u], t, a + 1, i), s;
      }, W1 = function(e, t, a) {
        return Q1(e, t, 0, a);
      }, u0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      N1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = W1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = $a(e, Ue);
          f !== null && pr(f, e, Ue, Kt);
        }
      }, z1 = function(e, t, a) {
        var i = u0(e, t);
        if (i !== null) {
          var u = $1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = at({}, e.memoizedProps);
          var s = $a(e, Ue);
          s !== null && pr(s, e, Ue, Kt);
        }
      }, U1 = function(e, t, a, i) {
        var u = u0(e, t);
        if (u !== null) {
          var s = I1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = at({}, e.memoizedProps);
          var f = $a(e, Ue);
          f !== null && pr(f, e, Ue, Kt);
        }
      }, A1 = function(e, t, a) {
        e.pendingProps = W1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Ue);
        i !== null && pr(i, e, Ue, Kt);
      }, F1 = function(e, t) {
        e.pendingProps = $1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = $a(e, Ue);
        a !== null && pr(a, e, Ue, Kt);
      }, j1 = function(e, t, a) {
        e.pendingProps = I1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = $a(e, Ue);
        i !== null && pr(i, e, Ue, Kt);
      }, H1 = function(e) {
        var t = $a(e, Ue);
        t !== null && pr(t, e, Ue, Kt);
      }, V1 = function(e) {
        L1 = e;
      }, P1 = function(e) {
        M1 = e;
      };
    }
    function Lx(e) {
      var t = pd(e);
      return t === null ? null : t.stateNode;
    }
    function Mx(e) {
      return null;
    }
    function Nx() {
      return fn;
    }
    function zx(e) {
      var t = e.findFiberByHostInstance, a = tt.ReactCurrentDispatcher;
      return bv({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: N1,
        overrideHookStateDeletePath: z1,
        overrideHookStateRenamePath: U1,
        overrideProps: A1,
        overridePropsDeletePath: F1,
        overridePropsRenamePath: j1,
        setErrorHandler: V1,
        setSuspenseHandler: P1,
        scheduleUpdate: H1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: Lx,
        findFiberByHostInstance: t || Mx,
        // React Refresh
        findHostInstancesForRefresh: cx,
        scheduleRefresh: ox,
        scheduleRoot: sx,
        setRefreshHandler: ux,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: Nx,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: r0
      });
    }
    var G1 = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function o0(e) {
      this._internalRoot = e;
    }
    Nm.prototype.render = o0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : zm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== gn) {
          var i = O1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Vp(e, t, null, null);
    }, Nm.prototype.unmount = o0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        l1() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Uu(function() {
          Vp(null, e, null, null);
        }), W0(t);
      }
    };
    function Ux(e, t) {
      if (!zm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      q1(e);
      var a = !1, i = !1, u = "", s = G1;
      t != null && (t.hydrate ? Xe("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === jr && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = x1(e, Dh, null, a, i, u, s);
      Ch(f.current, e);
      var p = e.nodeType === gn ? e.parentNode : e;
      return Gd(p), new o0(f);
    }
    function Nm(e) {
      this._internalRoot = e;
    }
    function Ax(e) {
      e && cy(e);
    }
    Nm.prototype.unstable_scheduleHydration = Ax;
    function Fx(e, t, a) {
      if (!zm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      q1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = G1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = D1(t, null, e, Dh, i, s, f, p, v);
      if (Ch(y.current, e), Gd(e), u)
        for (var g = 0; g < u.length; g++) {
          var x = u[g];
          Iw(y, x);
        }
      return new Nm(y);
    }
    function zm(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === pa || e.nodeType === Xf || !Fe));
    }
    function Pp(e) {
      return !!(e && (e.nodeType === Yr || e.nodeType === pa || e.nodeType === Xf || e.nodeType === gn && e.nodeValue === " react-mount-point-unstable "));
    }
    function q1(e) {
      e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), ip(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var jx = tt.ReactCurrentOwner, X1;
    X1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== gn) {
        var t = O1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = s0(e), u = !!(i && Do(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Yr && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function s0(e) {
      return e ? e.nodeType === pa ? e.documentElement : e.firstChild : null;
    }
    function K1() {
    }
    function Hx(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var b = Mm(f);
            s.call(b);
          };
        }
        var f = D1(
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
          K1
        );
        e._reactRootContainer = f, Ch(f.current, e);
        var p = e.nodeType === gn ? e.parentNode : e;
        return Gd(p), Uu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var b = Mm(g);
            y.call(b);
          };
        }
        var g = x1(
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
          K1
        );
        e._reactRootContainer = g, Ch(g.current, e);
        var x = e.nodeType === gn ? e.parentNode : e;
        return Gd(x), Uu(function() {
          Vp(t, g, a, i);
        }), g;
      }
    }
    function Vx(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function Um(e, t, a, i, u) {
      X1(a), Vx(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = Hx(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Mm(f);
            p.call(v);
          };
        }
        Vp(t, f, e, u);
      }
      return Mm(f);
    }
    function Px(e) {
      {
        var t = jx.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Tt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Yr ? e : bx(e, "findDOMNode");
    }
    function Bx(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Pp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ip(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return Um(null, e, t, !0, a);
    }
    function $x(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Pp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = ip(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return Um(null, e, t, !1, a);
    }
    function Yx(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Pp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Ku(e))
        throw new Error("parentComponent must be a valid React Component");
      return Um(e, t, a, !1, i);
    }
    function Ix(e) {
      if (!Pp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = ip(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = s0(e), i = a && !Do(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Uu(function() {
          Um(null, null, e, !1, function() {
            e._reactRootContainer = null, W0(e);
          });
        }), !0;
      } else {
        {
          var u = s0(e), s = !!(u && Do(u)), f = e.nodeType === Yr && Pp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    vo(_x), oy(xx), Kc(Dx), $v(Fa), Yv(Cr), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), ad(GR), Ec(VS, F_, Uu);
    function Qx(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!zm(t))
        throw new Error("Target container is not a DOM element.");
      return wx(e, t, null, a);
    }
    function Wx(e, t, a, i) {
      return Yx(e, t, a, i);
    }
    var c0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Do, Cf, Rh, Xu, iu, VS]
    };
    function Gx(e, t) {
      return c0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Ux(e, t);
    }
    function qx(e, t, a) {
      return c0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), Fx(e, t, a);
    }
    function Xx(e) {
      return l1() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Uu(e);
    }
    var Kx = zx({
      findFiberByHostInstance: Gs,
      bundleType: 1,
      version: r0,
      rendererPackageName: "react-dom"
    });
    if (!Kx && yn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Z1 = window.location.protocol;
      /^(https?|file):$/.test(Z1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Z1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ga.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = c0, Ga.createPortal = Qx, Ga.createRoot = Gx, Ga.findDOMNode = Px, Ga.flushSync = Xx, Ga.hydrate = Bx, Ga.hydrateRoot = qx, Ga.render = $x, Ga.unmountComponentAtNode = Ix, Ga.unstable_batchedUpdates = VS, Ga.unstable_renderSubtreeIntoContainer = Wx, Ga.version = r0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }(), Ga;
}
var fR = {};
function dR() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (fR.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dR);
    } catch (V) {
      console.error(V);
    }
  }
}
fR.NODE_ENV === "production" ? (dR(), m0.exports = lD()) : m0.exports = uD();
var oD = m0.exports, y0, sD = {}, Fm = oD;
if (sD.NODE_ENV === "production")
  y0 = Fm.createRoot, Fm.hydrateRoot;
else {
  var lR = Fm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  y0 = function(V, X) {
    lR.usingClientEntryPoint = !0;
    try {
      return Fm.createRoot(V, X);
    } finally {
      lR.usingClientEntryPoint = !1;
    }
  };
}
var cD = Object.defineProperty, fD = (V, X, z) => X in V ? cD(V, X, { enumerable: !0, configurable: !0, writable: !0, value: z }) : V[X] = z, jm = (V, X, z) => (fD(V, typeof X != "symbol" ? X + "" : X, z), z);
const dD = {
  stringify: (V) => V,
  parse: (V) => V
}, pD = {
  stringify: (V) => `${V}`,
  parse: (V) => parseFloat(V)
}, vD = {
  stringify: (V) => V ? "true" : "false",
  parse: (V) => /^[ty1-9]/i.test(V)
}, hD = {
  stringify: (V) => V.name,
  parse: (V, X) => {
    const z = (() => {
      if (typeof window < "u" && V in window)
        return window[V];
      if (typeof global < "u" && V in global)
        return global[V];
    })();
    return typeof z == "function" ? z.bind(X) : void 0;
  }
}, mD = {
  stringify: (V) => JSON.stringify(V),
  parse: (V) => JSON.parse(V)
}, p0 = {
  string: dD,
  number: pD,
  boolean: vD,
  function: hD,
  json: mD
}, v0 = Symbol.for("r2wc.render"), Hm = Symbol.for("r2wc.connected"), cc = Symbol.for("r2wc.context"), Yo = Symbol.for("r2wc.props");
function yD(V, X, z) {
  var tt, Ct, Yt;
  X.props || (X.props = V.propTypes ? Object.keys(V.propTypes) : []);
  const Xe = (Array.isArray(X.props) ? X.props.slice() : Object.keys(X.props)).filter((Re) => Re !== "container"), S = {}, nt = {}, ke = {};
  for (const Re of Xe) {
    S[Re] = Array.isArray(X.props) ? "string" : X.props[Re];
    const K = gD(Re);
    nt[Re] = K, ke[K] = Re;
  }
  class ue extends HTMLElement {
    constructor() {
      super(), jm(this, tt, !0), jm(this, Ct), jm(this, Yt, {}), jm(this, "container"), X.shadow ? this.container = this.attachShadow({
        mode: X.shadow
      }) : this.container = this, this[Yo].container = this.container;
      for (const K of Xe) {
        const Oe = nt[K], te = this.getAttribute(Oe), oe = S[K], Qe = p0[oe];
        te && Qe != null && Qe.parse && (this[Yo][K] = Qe.parse(te, this));
      }
    }
    static get observedAttributes() {
      return Object.keys(ke);
    }
    connectedCallback() {
      this[Hm] = !0, this[v0]();
    }
    disconnectedCallback() {
      this[Hm] = !1, this[cc] && z.unmount(this[cc]), delete this[cc];
    }
    attributeChangedCallback(K, Oe, te) {
      const oe = ke[K], Qe = S[oe], sn = p0[Qe];
      oe in S && sn != null && sn.parse && (this[Yo][oe] = sn.parse(te, this), this[v0]());
    }
    [(tt = Hm, Ct = cc, Yt = Yo, v0)]() {
      this[Hm] && (this[cc] ? z.update(this[cc], this[Yo]) : this[cc] = z.mount(
        this.container,
        V,
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
        const oe = p0[Oe];
        if (oe != null && oe.stringify) {
          const Qe = oe.stringify(te);
          this.getAttribute(K) !== Qe && this.setAttribute(K, Qe);
        }
      }
    });
  }
  return ue;
}
function gD(V = "") {
  return V.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function SD(V, X, z) {
  const tt = y0(V), Ct = sR.createElement(X, z);
  return tt.render(Ct), {
    root: tt,
    ReactComponent: X
  };
}
function ED({ root: V, ReactComponent: X }, z) {
  const tt = sR.createElement(X, z);
  V.render(tt);
}
function CD({ root: V }) {
  V.unmount();
}
function RD(V, X = {}) {
  return yD(V, X, { mount: SD, update: ED, unmount: CD });
}
var g0 = { exports: {} }, $p = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uR;
function TD() {
  if (uR)
    return $p;
  uR = 1;
  var V = Qp, X = Symbol.for("react.element"), z = Symbol.for("react.fragment"), tt = Object.prototype.hasOwnProperty, Ct = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Yt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Xe(S, nt, ke) {
    var ue, Re = {}, K = null, Oe = null;
    ke !== void 0 && (K = "" + ke), nt.key !== void 0 && (K = "" + nt.key), nt.ref !== void 0 && (Oe = nt.ref);
    for (ue in nt)
      tt.call(nt, ue) && !Yt.hasOwnProperty(ue) && (Re[ue] = nt[ue]);
    if (S && S.defaultProps)
      for (ue in nt = S.defaultProps, nt)
        Re[ue] === void 0 && (Re[ue] = nt[ue]);
    return { $$typeof: X, type: S, key: K, ref: Oe, props: Re, _owner: Ct.current };
  }
  return $p.Fragment = z, $p.jsx = Xe, $p.jsxs = Xe, $p;
}
var Yp = {}, oR;
function wD() {
  if (oR)
    return Yp;
  oR = 1;
  var V = {};
  /**
   * @license React
   * react-jsx-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  return V.NODE_ENV !== "production" && function() {
    var X = Qp, z = Symbol.for("react.element"), tt = Symbol.for("react.portal"), Ct = Symbol.for("react.fragment"), Yt = Symbol.for("react.strict_mode"), Xe = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), nt = Symbol.for("react.context"), ke = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), Re = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Oe = Symbol.for("react.lazy"), te = Symbol.for("react.offscreen"), oe = Symbol.iterator, Qe = "@@iterator";
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
        var yt = ne.map(function(et) {
          return String(et);
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
        case tt:
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
            var st = R, yt = st._payload, et = st._init;
            try {
              return Be(et(yt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ze = Object.assign, Rt = 0, Je, $, he, T, Y, me, Fe;
    function je() {
    }
    je.__reactDisabledLog = !0;
    function ft() {
      {
        if (Rt === 0) {
          Je = console.log, $ = console.info, he = console.warn, T = console.error, Y = console.group, me = console.groupCollapsed, Fe = console.groupEnd;
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
            log: Ze({}, R, {
              value: Je
            }),
            info: Ze({}, R, {
              value: $
            }),
            warn: Ze({}, R, {
              value: he
            }),
            error: Ze({}, R, {
              value: T
            }),
            group: Ze({}, R, {
              value: Y
            }),
            groupCollapsed: Ze({}, R, {
              value: me
            }),
            groupEnd: Ze({}, R, {
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
          var et = function() {
            throw Error();
          };
          if (Object.defineProperty(et.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(et, []);
            } catch (Vr) {
              ie = Vr;
            }
            Reflect.construct(R, [], et);
          } else {
            try {
              et.call();
            } catch (Vr) {
              ie = Vr;
            }
            R.call(et.prototype);
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
        for (var et in R)
          if (yt(R, et)) {
            var Le = void 0;
            try {
              if (typeof R[et] != "function") {
                var Un = Error((ie || "React class") + ": " + ne + " type `" + et + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[et] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Un.name = "Invariant Violation", Un;
              }
              Le = R[et](Q, et, ie, ne, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Wt) {
              Le = Wt;
            }
            Le && !(Le instanceof Error) && (hr(st), lt("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", ne, et, typeof Le), hr(null)), Le instanceof Error && !(Le.message in zn) && (zn[Le.message] = !0, hr(st), lt("Failed %s type: %s", ne, Le.message), hr(null));
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
    var cn = function(R, Q, ne, ie, st, yt, et) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: z,
        // Built-in properties that belong on the element
        type: R,
        key: Q,
        ref: ne,
        props: et,
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
        var yt, et = {}, Le = null, Un = null;
        ne !== void 0 && (wr(ne), Le = "" + ne), rt(Q) && (wr(Q.key), Le = "" + Q.key), De(Q) && (Un = Q.ref, Mt(Q, st));
        for (yt in Q)
          Nn.call(Q, yt) && !sa.hasOwnProperty(yt) && (et[yt] = Q[yt]);
        if (R && R.defaultProps) {
          var Wt = R.defaultProps;
          for (yt in Wt)
            et[yt] === void 0 && (et[yt] = Wt[yt]);
        }
        if (Le || Un) {
          var Gt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Le && xt(et, Gt), Un && bn(et, Gt);
        }
        return cn(R, Le, Un, st, ie, un.current, et);
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
      return typeof R == "object" && R !== null && R.$$typeof === z;
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
            for (var yt = st.call(R), et; !(et = yt.next()).done; )
              qa(et.value) && fl(et.value, Q);
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
        var et = It(R);
        if (!et) {
          var Le = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Un = cl(st);
          Un ? Le += Un : Le += ba();
          var Wt;
          R === null ? Wt = "null" : ua(R) ? Wt = "array" : R !== void 0 && R.$$typeof === z ? (Wt = "<" + (Be(R.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : Wt = typeof R, lt("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Wt, Le);
        }
        var Gt = yr(R, Q, ne, st, yt);
        if (Gt == null)
          return Gt;
        if (et) {
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
    Yp.Fragment = Ct, Yp.jsx = da, Yp.jsxs = Mi;
  }(), Yp;
}
var bD = {};
bD.NODE_ENV === "production" ? g0.exports = TD() : g0.exports = wD();
var _D = g0.exports;
const xD = ({ name: V = "World" }) => /* @__PURE__ */ _D.jsxs("h1", { children: [
  "Hello, ",
  V,
  "!"
] }), DD = RD(xD, {
  props: {
    name: "string"
  }
});
customElements.define("web-greeting", DD);
export {
  DD as WebGreeting
};
