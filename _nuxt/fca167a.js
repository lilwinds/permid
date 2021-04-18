/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([
    [4],
    [, function(e, r, t) {
        "use strict";
        t.d(r, "k", (function() {
            return w
        })), t.d(r, "m", (function() {
            return v
        })), t.d(r, "l", (function() {
            return j
        })), t.d(r, "e", (function() {
            return x
        })), t.d(r, "b", (function() {
            return P
        })), t.d(r, "s", (function() {
            return _
        })), t.d(r, "g", (function() {
            return D
        })), t.d(r, "h", (function() {
            return z
        })), t.d(r, "d", (function() {
            return M
        })), t.d(r, "r", (function() {
            return S
        })), t.d(r, "j", (function() {
            return L
        })), t.d(r, "t", (function() {
            return I
        })), t.d(r, "o", (function() {
            return N
        })), t.d(r, "q", (function() {
            return T
        })), t.d(r, "f", (function() {
            return O
        })), t.d(r, "c", (function() {
            return B
        })), t.d(r, "i", (function() {
            return E
        })), t.d(r, "p", (function() {
            return R
        })), t.d(r, "a", (function() {
            return H
        })), t.d(r, "v", (function() {
            return G
        })), t.d(r, "n", (function() {
            return Y
        })), t.d(r, "u", (function() {
            return J
        }));
        t(30), t(17), t(34), t(40), t(52), t(22), t(53);
        var o = t(32),
            n = t(2),
            l = t(14),
            d = t(13),
            c = (t(33), t(16), t(166), t(7), t(27), t(44), t(49), t(28), t(18), t(26), t(23), t(15), t(43), t(129), t(131), t(225), t(60), t(76), t(226), t(35), t(50), t(0)),
            m = t(41);

        function h(object, e) {
            var r = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(object);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), r.push.apply(r, t)
            }
            return r
        }

        function f(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? h(Object(source), !0).forEach((function(r) {
                    Object(l.a)(e, r, source[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : h(Object(source)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(source, r))
                }))
            }
            return e
        }

        function y(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return k(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                d = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, n = e
                },
                f: function() {
                    try {
                        l || null == t.return || t.return()
                    } finally {
                        if (d) throw n
                    }
                }
            }
        }

        function k(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }

        function w(e) {
            c.a.config.errorHandler && c.a.config.errorHandler(e)
        }

        function v(e) {
            return e.then((function(e) {
                return e.default || e
            }))
        }

        function j(e) {
            return e.$options && "function" == typeof e.$options.fetch && !e.$options.fetch.length
        }

        function x(e) {
            var r, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                o = e.$children || [],
                n = y(o);
            try {
                for (n.s(); !(r = n.n()).done;) {
                    var l = r.value;
                    l.$fetch ? t.push(l) : l.$children && x(l, t)
                }
            } catch (e) {
                n.e(e)
            } finally {
                n.f()
            }
            return t
        }

        function P(e, r) {
            if (r || !e.options.__hasNuxtData) {
                var t = e.options._originDataFn || e.options.data || function() {
                    return {}
                };
                e.options._originDataFn = t, e.options.data = function() {
                    var data = t.call(this, this);
                    return this.$ssrContext && (r = this.$ssrContext.asyncData[e.cid]), f(f({}, data), r)
                }, e.options.__hasNuxtData = !0, e._Ctor && e._Ctor.options && (e._Ctor.options.data = e.options.data)
            }
        }

        function _(e) {
            return e.options && e._Ctor === e || (e.options ? (e._Ctor = e, e.extendOptions = e.options) : (e = c.a.extend(e))._Ctor = e, !e.options.name && e.options.__file && (e.options.name = e.options.__file)), e
        }

        function D(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
            return Array.prototype.concat.apply([], e.matched.map((function(e, o) {
                return Object.keys(e[t]).map((function(n) {
                    return r && r.push(o), e[t][n]
                }))
            })))
        }

        function z(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return D(e, r, "instances")
        }

        function M(e, r) {
            return Array.prototype.concat.apply([], e.matched.map((function(e, t) {
                return Object.keys(e.components).reduce((function(o, n) {
                    return e.components[n] ? o.push(r(e.components[n], e.instances[n], e, n, t)) : delete e.components[n], o
                }), [])
            })))
        }

        function S(e, r) {
            return Promise.all(M(e, function() {
                var e = Object(n.a)(regeneratorRuntime.mark((function e(t, o, n, l) {
                    var d, c;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" != typeof t || t.options) {
                                    e.next = 11;
                                    break
                                }
                                return e.prev = 1, e.next = 4, t();
                            case 4:
                                t = e.sent, e.next = 11;
                                break;
                            case 7:
                                throw e.prev = 7, e.t0 = e.catch(1), e.t0 && "ChunkLoadError" === e.t0.name && "undefined" != typeof window && window.sessionStorage && (d = Date.now(), (!(c = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || c + 6e4 < d) && (window.sessionStorage.setItem("nuxt-reload", d), window.location.reload(!0))), e.t0;
                            case 11:
                                return n.components[l] = t = _(t), e.abrupt("return", "function" == typeof r ? r(t, o, n, l) : t);
                            case 13:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 7]
                    ])
                })));
                return function(r, t, o, n) {
                    return e.apply(this, arguments)
                }
            }()))
        }

        function L(e) {
            return A.apply(this, arguments)
        }

        function A() {
            return (A = Object(n.a)(regeneratorRuntime.mark((function e(r) {
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (r) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4, S(r);
                        case 4:
                            return e.abrupt("return", f(f({}, r), {}, {
                                meta: D(r).map((function(e, t) {
                                    return f(f({}, e.options.meta), (r.matched[t] || {}).meta)
                                }))
                            }));
                        case 5:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function I(e, r) {
            return C.apply(this, arguments)
        }

        function C() {
            return (C = Object(n.a)(regeneratorRuntime.mark((function e(r, t) {
                var n, l, c, h;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return r.context || (r.context = {
                                isStatic: !1,
                                isDev: !1,
                                isHMR: !1,
                                app: r,
                                store: r.store,
                                payload: t.payload,
                                error: t.error,
                                base: r.router.options.base,
                                env: {
                                    apiBase: "https://api.premid.app/v2",
                                    graphQLapiBase: "https://api.premid.app/v3"
                                }
                            }, t.req && (r.context.req = t.req), t.res && (r.context.res = t.res), t.ssrContext && (r.context.ssrContext = t.ssrContext), r.context.redirect = function(e, path, t) {
                                if (e) {
                                    r.context._redirected = !0;
                                    var n = Object(o.a)(path);
                                    if ("number" == typeof e || "undefined" !== n && "object" !== n || (t = path || {}, path = e, n = Object(o.a)(path), e = 302), "object" === n && (path = r.router.resolve(path).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) throw path = Object(m.d)(path, t), window.location.replace(path), new Error("ERR_REDIRECT");
                                    r.context.next({
                                        path: path,
                                        query: t,
                                        status: e
                                    })
                                }
                            }, r.context.nuxtState = window.__NUXT__), e.next = 3, Promise.all([L(t.route), L(t.from)]);
                        case 3:
                            n = e.sent, l = Object(d.a)(n, 2), c = l[0], h = l[1], t.route && (r.context.route = c), t.from && (r.context.from = h), r.context.next = t.next, r.context._redirected = !1, r.context._errored = !1, r.context.isHMR = !1, r.context.params = r.context.route.params || {}, r.context.query = r.context.route.query || {};
                        case 15:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function N(e, r) {
            return !e.length || r._redirected || r._errored ? Promise.resolve() : T(e[0], r).then((function() {
                return N(e.slice(1), r)
            }))
        }

        function T(e, r) {
            var t;
            return (t = 2 === e.length ? new Promise((function(t) {
                e(r, (function(e, data) {
                    e && r.error(e), t(data = data || {})
                }))
            })) : e(r)) && t instanceof Promise && "function" == typeof t.then ? t : Promise.resolve(t)
        }

        function O(base, e) {
            if ("hash" === e) return window.location.hash.replace(/^#\//, "");
            base = decodeURI(base).slice(0, -1);
            var path = decodeURI(window.location.pathname);
            base && path.startsWith(base) && (path = path.slice(base.length));
            var r = (path || "/") + window.location.search + window.location.hash;
            return Object(m.c)(r)
        }

        function B(e, r) {
            return function(e, r) {
                for (var t = new Array(e.length), i = 0; i < e.length; i++) "object" === Object(o.a)(e[i]) && (t[i] = new RegExp("^(?:" + e[i].pattern + ")$", W(r)));
                return function(r, o) {
                    for (var path = "", data = r || {}, n = (o || {}).pretty ? V : encodeURIComponent, l = 0; l < e.length; l++) {
                        var d = e[l];
                        if ("string" != typeof d) {
                            var c = data[d.name || "pathMatch"],
                                m = void 0;
                            if (null == c) {
                                if (d.optional) {
                                    d.partial && (path += d.prefix);
                                    continue
                                }
                                throw new TypeError('Expected "' + d.name + '" to be defined')
                            }
                            if (Array.isArray(c)) {
                                if (!d.repeat) throw new TypeError('Expected "' + d.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                                if (0 === c.length) {
                                    if (d.optional) continue;
                                    throw new TypeError('Expected "' + d.name + '" to not be empty')
                                }
                                for (var h = 0; h < c.length; h++) {
                                    if (m = n(c[h]), !t[l].test(m)) throw new TypeError('Expected all "' + d.name + '" to match "' + d.pattern + '", but received `' + JSON.stringify(m) + "`");
                                    path += (0 === h ? d.prefix : d.delimiter) + m
                                }
                            } else {
                                if (m = d.asterisk ? F(c) : n(c), !t[l].test(m)) throw new TypeError('Expected "' + d.name + '" to match "' + d.pattern + '", but received "' + m + '"');
                                path += d.prefix + m
                            }
                        } else path += d
                    }
                    return path
                }
            }(function(e, r) {
                var t, o = [],
                    n = 0,
                    l = 0,
                    path = "",
                    d = r && r.delimiter || "/";
                for (; null != (t = U.exec(e));) {
                    var c = t[0],
                        m = t[1],
                        h = t.index;
                    if (path += e.slice(l, h), l = h + c.length, m) path += m[1];
                    else {
                        var f = e[l],
                            y = t[2],
                            k = t[3],
                            w = t[4],
                            v = t[5],
                            j = t[6],
                            x = t[7];
                        path && (o.push(path), path = "");
                        var P = null != y && null != f && f !== y,
                            _ = "+" === j || "*" === j,
                            D = "?" === j || "*" === j,
                            z = t[2] || d,
                            pattern = w || v;
                        o.push({
                            name: k || n++,
                            prefix: y || "",
                            delimiter: z,
                            optional: D,
                            repeat: _,
                            partial: P,
                            asterisk: Boolean(x),
                            pattern: pattern ? K(pattern) : x ? ".*" : "[^" + $(z) + "]+?"
                        })
                    }
                }
                l < e.length && (path += e.substr(l));
                path && o.push(path);
                return o
            }(e, r), r)
        }

        function E(e, r) {
            var t = {},
                o = f(f({}, e), r);
            for (var n in o) String(e[n]) !== String(r[n]) && (t[n] = !0);
            return t
        }

        function R(e) {
            var r;
            if (e.message || "string" == typeof e) r = e.message || e;
            else try {
                r = JSON.stringify(e, null, 2)
            } catch (t) {
                r = "[".concat(e.constructor.name, "]")
            }
            return f(f({}, e), {}, {
                message: r,
                statusCode: e.statusCode || e.status || e.response && e.response.status || 500
            })
        }
        window.onNuxtReadyCbs = [], window.onNuxtReady = function(e) {
            window.onNuxtReadyCbs.push(e)
        };
        var U = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

        function V(e, r) {
            var t = r ? /[?#]/g : /[/?#]/g;
            return encodeURI(e).replace(t, (function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            }))
        }

        function F(e) {
            return V(e, !0)
        }

        function $(e) {
            return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
        }

        function K(e) {
            return e.replace(/([=!:$/()])/g, "\\$1")
        }

        function W(e) {
            return e && e.sensitive ? "" : "i"
        }

        function H(e, r, t) {
            e.$options[r] || (e.$options[r] = []), e.$options[r].includes(t) || e.$options[r].push(t)
        }
        var G = m.b,
            Y = (m.e, m.a);

        function J(e) {
            try {
                window.history.scrollRestoration = e
            } catch (e) {}
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        "use strict";
        t.d(r, "b", (function() {
            return Xr
        })), t.d(r, "a", (function() {
            return I
        }));
        t(28), t(17), t(16), t(52), t(22), t(53);
        var o = t(2),
            n = t(14),
            l = (t(33), t(27), t(49), t(7), t(0)),
            d = t(71),
            c = t(182),
            m = t(119),
            h = t.n(m),
            f = t(59),
            y = t.n(f),
            k = (t(18), t(26), t(120)),
            w = t(41),
            v = t(1);
        "scrollRestoration" in window.history && (Object(v.u)("manual"), window.addEventListener("beforeunload", (function() {
            Object(v.u)("auto")
        })), window.addEventListener("load", (function() {
            Object(v.u)("manual")
        })));

        function j(object, e) {
            var r = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(object);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), r.push.apply(r, t)
            }
            return r
        }

        function x(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? j(Object(source), !0).forEach((function(r) {
                    Object(n.a)(e, r, source[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : j(Object(source)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(source, r))
                }))
            }
            return e
        }
        var P = function() {};
        l.a.use(k.a);
        var _ = {
            mode: "history",
            base: "/",
            linkActiveClass: "nuxt-link-active",
            linkExactActiveClass: "nuxt-link-exact-active",
            scrollBehavior: function(e, r, t) {
                var o = !1,
                    n = e !== r;
                t ? o = t : n && function(e) {
                    var r = Object(v.g)(e);
                    if (1 === r.length) {
                        var t = r[0].options;
                        return !1 !== (void 0 === t ? {} : t).scrollToTop
                    }
                    return r.some((function(e) {
                        var r = e.options;
                        return r && r.scrollToTop
                    }))
                }(e) && (o = {
                    x: 0,
                    y: 0
                });
                var l = window.$nuxt;
                return (!n || e.path === r.path && e.hash !== r.hash) && l.$nextTick((function() {
                    return l.$emit("triggerScroll")
                })), new Promise((function(r) {
                    l.$once("triggerScroll", (function() {
                        if (e.hash) {
                            var t = e.hash;
                            void 0 !== window.CSS && void 0 !== window.CSS.escape && (t = "#" + window.CSS.escape(t.substr(1)));
                            try {
                                document.querySelector(t) && (o = {
                                    selector: t
                                })
                            } catch (e) {
                                console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")
                            }
                        }
                        r(o)
                    }))
                }))
            },
            routes: [{
                path: "/beta",
                component: function() {
                    return Object(v.m)(t.e(31).then(t.bind(null, 630)))
                },
                name: "beta"
            }, {
                path: "/bug",
                component: function() {
                    return Object(v.m)(t.e(33).then(t.bind(null, 631)))
                },
                name: "bug"
            }, {
                path: "/callback",
                component: function() {
                    return Object(v.m)(t.e(34).then(t.bind(null, 632)))
                },
                name: "callback"
            }, {
                path: "/contributors",
                component: function() {
                    return Object(v.m)(Promise.all([t.e(0), t.e(35)]).then(t.bind(null, 633)))
                },
                name: "contributors"
            }, {
                path: "/cookies",
                component: function() {
                    return Object(v.m)(t.e(36).then(t.bind(null, 634)))
                },
                name: "cookies"
            }, {
                path: "/crowdin",
                component: function() {
                    return Object(v.m)(t.e(37).then(t.bind(null, 635)))
                },
                name: "crowdin"
            }, {
                path: "/downloads",
                component: function() {
                    return Object(v.m)(t.e(38).then(t.bind(null, 636)))
                },
                name: "downloads"
            }, {
                path: "/jobs",
                component: function() {
                    return Object(v.m)(t.e(40).then(t.bind(null, 637)))
                },
                name: "jobs"
            }, {
                path: "/login",
                component: function() {
                    return Object(v.m)(t.e(41).then(t.bind(null, 638)))
                },
                name: "login"
            }, {
                path: "/logout",
                component: function() {
                    return Object(v.m)(t.e(42).then(t.bind(null, 639)))
                },
                name: "logout"
            }, {
                path: "/partners",
                component: function() {
                    return Object(v.m)(Promise.all([t.e(0), t.e(1), t.e(2), t.e(3), t.e(43)]).then(t.bind(null, 640)))
                },
                name: "partners"
            }, {
                path: "/privacy",
                component: function() {
                    return Object(v.m)(t.e(44).then(t.bind(null, 641)))
                },
                name: "privacy"
            }, {
                path: "/staff",
                component: function() {
                    return Object(v.m)(Promise.all([t.e(1), t.e(45)]).then(t.bind(null, 642)))
                },
                name: "staff"
            }, {
                path: "/store",
                component: function() {
                    return Object(v.m)(Promise.all([t.e(0), t.e(46)]).then(t.bind(null, 643)))
                },
                name: "store"
            }, {
                path: "/tos",
                component: function() {
                    return Object(v.m)(t.e(48).then(t.bind(null, 644)))
                },
                name: "tos"
            }, {
                path: "/beta/register",
                component: function() {
                    return Object(v.m)(t.e(32).then(t.bind(null, 645)))
                },
                name: "beta-register"
            }, {
                path: "/store/presences/:presenceName?",
                component: function() {
                    return Object(v.m)(Promise.all([t.e(0), t.e(47)]).then(t.bind(null, 646)))
                },
                name: "store-presences-presenceName"
            }, {
                path: "/users/:userId?",
                component: function() {
                    return Object(v.m)(Promise.all([t.e(0), t.e(49)]).then(t.bind(null, 647)))
                },
                name: "users-userId"
            }, {
                path: "/",
                component: function() {
                    return Object(v.m)(t.e(39).then(t.bind(null, 648)))
                },
                name: "index"
            }],
            fallback: !1
        };

        function D(e, r) {
            var base = r._app && r._app.basePath || _.base,
                t = new k.a(x(x({}, _), {}, {
                    base: base
                })),
                o = t.push;
            t.push = function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P,
                    t = arguments.length > 2 ? arguments[2] : void 0;
                return o.call(this, e, r, t)
            };
            var n = t.resolve.bind(t);
            return t.resolve = function(e, r, t) {
                return "string" == typeof e && (e = Object(w.c)(e)), n(e, r, t)
            }, t
        }
        var z = {
                name: "NuxtChild",
                functional: !0,
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: ""
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    }
                },
                render: function(e, r) {
                    var t = r.parent,
                        data = r.data,
                        o = r.props,
                        n = t.$createElement;
                    data.nuxtChild = !0;
                    for (var l = t, d = t.$nuxt.nuxt.transitions, c = t.$nuxt.nuxt.defaultTransition, m = 0; t;) t.$vnode && t.$vnode.data.nuxtChild && m++, t = t.$parent;
                    data.nuxtChildDepth = m;
                    var h = d[m] || c,
                        f = {};
                    M.forEach((function(e) {
                        void 0 !== h[e] && (f[e] = h[e])
                    }));
                    var y = {};
                    S.forEach((function(e) {
                        "function" == typeof h[e] && (y[e] = h[e].bind(l))
                    }));
                    var k = y.beforeEnter;
                    if (y.beforeEnter = function(e) {
                            if (window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), k) return k.call(l, e)
                        }, !1 === h.css) {
                        var w = y.leave;
                        (!w || w.length < 2) && (y.leave = function(e, r) {
                            w && w.call(l, e), l.$nextTick(r)
                        })
                    }
                    var v = n("routerView", data);
                    return o.keepAlive && (v = n("keep-alive", {
                        props: o.keepAliveProps
                    }, [v])), n("transition", {
                        props: f,
                        on: y
                    }, [v])
                }
            },
            M = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
            S = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
            L = {
                props: ["error"],
                head: {
                    title: "Error"
                },
                mounted: function() {
                    console.log(this.$props.error)
                },
                methods: {
                    reload: function() {
                        location.reload()
                    }
                }
            },
            A = t(9),
            I = Object(A.a)(L, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("div", {
                    staticClass: "container error-container"
                }, [404 === e.error.statusCode ? t("div", [t("h1", [e._v(e._s(e.$t("error.code.404")))])]) : 4 === e.error.statusCode ? t("div", [t("h1", [e._v(e._s(e.$t("error.code.4")))])]) : t("div", [t("h1", [e._v(e._s(e.$t("error.code.500")))])]), e._v(" "), e.$props.error.message ? t("div", {
                    staticClass: "error-textarea"
                }, [t("p", [t("b", [e._v(e._s(e.$t("error.page.details")) + ":")])]), e._v(" "), t("p", [e._v(e._s(e.$props.error.message))])]) : e._e(), e._v(" "), t("div", {
                    staticClass: "error-container--btns"
                }, [t("nuxt-link", {
                    staticClass: "button button--sm",
                    attrs: {
                        to: "/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("error.page.button"))
                    }
                }), e._v(" "), t("a", {
                    staticClass: "button button--sm",
                    on: {
                        click: function(r) {
                            return e.reload()
                        }
                    }
                }, [t("i", {
                    staticClass: "fas fa-redo"
                })])], 1)])
            }), [], !1, null, null, null).exports,
            C = t(13),
            N = (t(15), t(43), t(60), {
                name: "Nuxt",
                components: {
                    NuxtChild: z,
                    NuxtError: I
                },
                props: {
                    nuxtChildKey: {
                        type: String,
                        default: void 0
                    },
                    keepAlive: Boolean,
                    keepAliveProps: {
                        type: Object,
                        default: void 0
                    },
                    name: {
                        type: String,
                        default: "default"
                    }
                },
                errorCaptured: function(e) {
                    this.displayingNuxtError && (this.errorFromNuxtError = e, this.$forceUpdate())
                },
                computed: {
                    routerViewKey: function() {
                        if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(v.c)(this.$route.matched[0].path)(this.$route.params);
                        var e = Object(C.a)(this.$route.matched, 1)[0];
                        if (!e) return this.$route.path;
                        var r = e.components.default;
                        if (r && r.options) {
                            var t = r.options;
                            if (t.key) return "function" == typeof t.key ? t.key(this.$route) : t.key
                        }
                        return /\/$/.test(e.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                    }
                },
                beforeCreate: function() {
                    l.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                },
                render: function(e) {
                    var r = this;
                    return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                        return r.errorFromNuxtError = !1
                    })), e("div", {}, [e("h2", "An error occurred while showing the error page"), e("p", "Unfortunately an error occurred and while showing the error page another error occurred"), e("p", "Error details: ".concat(this.errorFromNuxtError.toString())), e("nuxt-link", {
                        props: {
                            to: "/"
                        }
                    }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                        return r.displayingNuxtError = !1
                    })), e(I, {
                        props: {
                            error: this.nuxt.err
                        }
                    })) : e("NuxtChild", {
                        key: this.routerViewKey,
                        props: this.$props
                    })
                }
            }),
            T = (t(23), t(30), t(34), t(40), t(134)),
            O = (t(233), t(132)),
            B = {
                name: "PremidWeb",
                mixins: [t(133).default, O.default],
                data: function() {
                    return {
                        switcherVisible: !1,
                        ua: navigator.userAgent
                    }
                },
                created: function() {
                    this.$root.$data.i18nLanguageList = this.$i18n.availableLocales, void 0 !== localStorage.language && (this.$root.$i18n.locale = localStorage.language), this.$root.$data.navigatorLanguage = this.getBrowserLanguage(), this.$root.$data.i18nLanguage = this.getCurrentLanguage()
                },
                methods: {
                    toggleSwitcher: function() {
                        this.switcherVisible = !this.switcherVisible
                    }
                }
            },
            E = Object(A.a)(B, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("div", {
                    attrs: {
                        id: "app"
                    }
                }, [e.switcherVisible ? t("LanguageSwitcher") : e._e(), e._v(" "), t("div", {
                    staticClass: "floating-button"
                }, [t("span", {
                    directives: [{
                        name: "tippy",
                        rawName: "v-tippy"
                    }],
                    staticClass: "button button--gray button--language-switch",
                    attrs: {
                        content: e.$t("home.languageSelector.tippy")
                    },
                    on: {
                        click: e.toggleSwitcher
                    }
                }, [t("i", {
                    staticClass: "fa-language fas"
                })])]), e._v(" "), t("header", [t("Navigation")], 1), e._v(" "), t("div", {
                    staticClass: "app-wrapper"
                }, [t("div", {
                    staticClass: "content"
                }, [t("nuxt")], 1), e._v(" "), t("Footer")], 1)], 1)
            }), [], !1, null, null, null),
            R = E.exports;
        installComponents(E, {
            LanguageSwitcher: t(96).default,
            Navigation: t(130).default,
            Footer: t(200).default
        });
        var U = {
                head: {
                    title: "Downloads"
                },
                data: function() {
                    return {
                        texts: [this.$t("downloads.skipanyway.message1"), this.$t("downloads.skipanyway.message2"), this.$t("downloads.skipanyway.message3"), this.$t("downloads.skipanyway.message4"), this.$t("downloads.skipanyway.message5"), this.$t("downloads.skipanyway.message6")],
                        YhGqBeGRGd: !1,
                        target: null,
                        countDown: 5,
                        href: null,
                        isMobile: !1,
                        urls: {
                            windows: "https://dl.premid.app/PreMiD-installer.exe",
                            apple: "https://dl.premid.app/PreMiD-installer.app.zip",
                            edge: "https://microsoftedge.microsoft.com/addons/detail/hkchpjlnddoppadcbefbpgmgaeidkkkm",
                            chrome: "https://chrome.google.com/webstore/detail/premid/agjnjboanicjcpenljmaaigopkgdnihi",
                            firefox: "https://dl.premid.app/PreMiD.xpi",
                            safari: "https://github.com/PreMiD/Extension-Safari"
                        }
                    }
                },
                beforeMount: function() {
                    var e = this.$store.state.download.platform;
                    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.target = "chrome" === e ? "_blank" : null, this.href = this.urls[e], this.AhuCwRuozM()
                },
                mounted: function() {
                    var e = this;
                    this.isMobile && (this.interval = this.oMdVKawyLG((function() {
                        e.countDown--, e.countDown < 0 && e.interval.clear()
                    }), 1e3)), window.scrollTo(0, 0);
                    for (var r = 0; 0 === r;) r = Math.floor(10 * Math.random())
                },
                beforeDestroy: function() {
                    this.HXScvbzoWq && this.HXScvbzoWq.clear()
                },
                methods: {
                    skipAnyway: function() {
                        this.texts = this.texts.slice(1), this.texts.length || (this.open(this.href), this.$nuxt.setLayout("default"))
                    },
                    open: function(e) {
                        this.isMobile && this.target ? (window.open(e, this.target).focus(), this.$nuxt.setLayout("default")) : window.location.href = e || window.location.href
                    },
                    AhuCwRuozM: function(e) {
                        var r = this;
                        this.HXScvbzoWq = this.oMdVKawyLG((function() {
                            r.YhGqBeGRGd = 0 === Array.from(document.querySelectorAll(".adsbygoogle")).filter((function(e) {
                                return "" !== e.innerHTML
                            })).length, r.YhGqBeGRGd && r.HXScvbzoWq.clear()
                        }), 100)
                    },
                    oMdVKawyLG: function(e, r) {
                        var t = Date.now,
                            o = window.requestAnimationFrame,
                            n = t(),
                            l = 0;
                        return o((function d() {
                            t() - n < r || (n += r, e()), l || o(d)
                        })), {
                            clear: function() {
                                l = 1
                            }
                        }
                    }
                }
            },
            V = (t(250), Object(A.a)(U, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("div", {
                    attrs: {
                        id: "wrapper"
                    }
                }, [t("navigation", {
                    attrs: {
                        noLinks: "true",
                        target: e.target,
                        href: e.href,
                        yqHaKiGCKl: !e.YhGqBeGRGd
                    }
                }), e._v(" "), e.isMobile ? e._e() : t("div", {
                    staticClass: "adswrapper"
                }, [t("adsense", {
                    attrs: {
                        "root-class": "ad",
                        "ad-slot": "3276628083",
                        "ad-style": {
                            display: "block",
                            height: "85vh",
                            minWidth: "250px"
                        }
                    }
                }), e._v(" "), t("adsense", {
                    attrs: {
                        "root-class": "ad",
                        "ad-slot": "4398138065",
                        "ad-style": {
                            display: "block",
                            height: "85vh",
                            minWidth: "250px"
                        }
                    }
                })], 1), e._v(" "), e.YhGqBeGRGd ? e.YhGqBeGRGd ? t("div", {
                    staticClass: "note smol"
                }, [t("div", {
                    staticClass: "disable"
                }, [t("img", {
                    attrs: {
                        src: "https://cdn.discordapp.com/attachments/473603737135349792/695397570272559235/634432333226836020.png"
                    }
                }), e._v(" "), t("p", [e._v(e._s(e.$t("downloads.adsbox.disableAdblock")))])]), e._v(" "), t("div", {
                    staticClass: "controls"
                }, [t("button", {
                    staticClass: "button",
                    on: {
                        click: function(r) {
                            return e.$router.go({
                                path: "/downloads"
                            })
                        }
                    }
                }, [e._v("\n\t\t\t\t" + e._s(e.$t("downloads.button.done")) + "\n\t\t\t")])]), e._v(" "), t("a", {
                    staticClass: "skip-anyway",
                    attrs: {
                        href: "#"
                    },
                    on: {
                        click: e.skipAnyway
                    }
                }, [e._v("\n\t\t\t" + e._s(e.texts[0]) + "\n\t\t")])]) : e._e() : t("div", {
                    staticClass: "note"
                }, [t("h1", {
                    staticClass: "title"
                }, [e._v(e._s(e.$t("downloads.adsbox.thankyou.title")))]), e._v(" "), t("p", {
                    staticClass: "description"
                }, [e._v(e._s(e.$t("downloads.adsbox.thankyou.message")))]), e._v(" "), e.isMobile && !e.YhGqBeGRGd ? t("div", {
                    staticClass: "mobile"
                }, [e.countDown <= 0 ? t("button", {
                    staticClass: "button",
                    on: {
                        click: function(r) {
                            return e.$router.go({
                                path: "/downloads"
                            })
                        }
                    }
                }, [e._v("\n\t\t\t\t" + e._s(e.$t("downloads.button.back")) + "\n\t\t\t")]) : e._e(), e._v(" "), t("button", {
                    class: "button " + (this.countDown > 0 ? "disabled" : ""),
                    attrs: {
                        disabled: e.countDown > 0
                    },
                    on: {
                        click: function(r) {
                            !(e.countDown > 0) && e.open(e.href)
                        }
                    }
                }, [e._v("\n\t\t\t\t" + e._s(e.countDown > 0 ? e.countDown : e.$t("downloads.button.skip")) + "\n\t\t\t")])]) : e._e()]), e._v(" "), t("adsense", {
                    attrs: {
                        "root-class": "ad",
                        "ad-slot": "9757727213",
                        "ad-style": {
                            display: "block",
                            margin: "15px auto",
                            "text-align": "center",
                            height: "250px",
                            width: "100%",
                            position: "absolute",
                            bottom: "0"
                        }
                    }
                })], 1)
            }), [], !1, null, "4cff79de", null)),
            F = V.exports;

        function $(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return K(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return K(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                d = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, n = e
                },
                f: function() {
                    try {
                        l || null == t.return || t.return()
                    } finally {
                        if (d) throw n
                    }
                }
            }
        }

        function K(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }
        installComponents(V, {
            Navigation: t(130).default
        });
        var W = {
                _default: Object(v.s)(R),
                _skipAds: Object(v.s)(F)
            },
            H = {
                render: function(e, r) {
                    var t = e("NuxtLoading", {
                            ref: "loading"
                        }),
                        o = e(this.layout || "nuxt"),
                        n = e("div", {
                            domProps: {
                                id: "__layout"
                            },
                            key: this.layoutName
                        }, [o]),
                        l = e("transition", {
                            props: {
                                name: "layout",
                                mode: "out-in"
                            },
                            on: {
                                beforeEnter: function(e) {
                                    window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    }))
                                }
                            }
                        }, [n]);
                    return e("div", {
                        domProps: {
                            id: "__nuxt"
                        }
                    }, [t, l])
                },
                data: function() {
                    return {
                        isOnline: !0,
                        layout: null,
                        layoutName: "",
                        nbFetching: 0
                    }
                },
                beforeCreate: function() {
                    l.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                },
                created: function() {
                    this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                },
                mounted: function() {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark((function r() {
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    e.$loading = e.$refs.loading;
                                case 1:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                },
                watch: {
                    "nuxt.err": "errorChanged"
                },
                computed: {
                    isOffline: function() {
                        return !this.isOnline
                    },
                    isFetching: function() {
                        return this.nbFetching > 0
                    }
                },
                methods: {
                    refreshOnlineStatus: function() {
                        void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                    },
                    refresh: function() {
                        var e = this;
                        return Object(o.a)(regeneratorRuntime.mark((function r() {
                            var t, o;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if ((t = Object(v.h)(e.$route)).length) {
                                            r.next = 3;
                                            break
                                        }
                                        return r.abrupt("return");
                                    case 3:
                                        return e.$loading.start(), o = t.map((function(r) {
                                            var p = [];
                                            if (r.$options.fetch && r.$options.fetch.length && p.push(Object(v.q)(r.$options.fetch, e.context)), r.$fetch) p.push(r.$fetch());
                                            else {
                                                var t, o = $(Object(v.e)(r.$vnode.componentInstance));
                                                try {
                                                    for (o.s(); !(t = o.n()).done;) {
                                                        var component = t.value;
                                                        p.push(component.$fetch())
                                                    }
                                                } catch (e) {
                                                    o.e(e)
                                                } finally {
                                                    o.f()
                                                }
                                            }
                                            return r.$options.asyncData && p.push(Object(v.q)(r.$options.asyncData, e.context).then((function(e) {
                                                for (var t in e) l.a.set(r.$data, t, e[t])
                                            }))), Promise.all(p)
                                        })), r.prev = 5, r.next = 8, Promise.all(o);
                                    case 8:
                                        r.next = 15;
                                        break;
                                    case 10:
                                        r.prev = 10, r.t0 = r.catch(5), e.$loading.fail(r.t0), Object(v.k)(r.t0), e.error(r.t0);
                                    case 15:
                                        e.$loading.finish();
                                    case 16:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, null, [
                                [5, 10]
                            ])
                        })))()
                    },
                    errorChanged: function() {
                        if (this.nuxt.err) {
                            this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                            var e = (I.options || I).layout;
                            "function" == typeof e && (e = e(this.context)), this.setLayout(e)
                        }
                    },
                    setLayout: function(e) {
                        return e && W["_" + e] || (e = "default"), this.layoutName = e, this.layout = W["_" + e], this.layout
                    },
                    loadLayout: function(e) {
                        return e && W["_" + e] || (e = "default"), Promise.resolve(W["_" + e])
                    }
                },
                components: {
                    NuxtLoading: T.default
                }
            };
        t(54), t(35);

        function G(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return Y(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Y(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                d = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, n = e
                },
                f: function() {
                    try {
                        l || null == t.return || t.return()
                    } finally {
                        if (d) throw n
                    }
                }
            }
        }

        function Y(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }
        l.a.use(d.a);
        var J = ["state", "getters", "actions", "mutations"],
            Z = {};
        Z.modules = Z.modules || {}, ee(t(252), "download.js"), ee(t(253), "extension.js"), ee(t(254), "presences.js");
        var Q = Z instanceof Function ? Z : function() {
            return new d.a.Store(Object.assign({
                strict: !1
            }, Z))
        };

        function X(e, r) {
            if (e.state && "function" != typeof e.state) {
                console.warn("'state' should be a method that returns an object in ".concat(r));
                var t = Object.assign({}, e.state);
                e = Object.assign({}, e, {
                    state: function() {
                        return t
                    }
                })
            }
            return e
        }

        function ee(e, r) {
            e = e.default || e;
            var t = r.replace(/\.(js|mjs|ts)$/, "").split("/"),
                o = t[t.length - 1],
                n = "store/".concat(r);
            if (e = "state" === o ? function(e, r) {
                    if ("function" != typeof e) {
                        console.warn("".concat(r, " should export a method that returns an object"));
                        var t = Object.assign({}, e);
                        return function() {
                            return t
                        }
                    }
                    return X(e, r)
                }(e, n) : X(e, n), J.includes(o)) {
                var l = o;
                te(re(Z, t, {
                    isProperty: !0
                }), e, l)
            } else {
                "index" === o && (t.pop(), o = t[t.length - 1]);
                var d, c = re(Z, t),
                    m = G(J);
                try {
                    for (m.s(); !(d = m.n()).done;) {
                        var h = d.value;
                        te(c, e[h], h)
                    }
                } catch (e) {
                    m.e(e)
                } finally {
                    m.f()
                }!1 === e.namespaced && delete c.namespaced
            }
        }

        function re(e, r) {
            var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                o = t.isProperty,
                n = void 0 !== o && o;
            if (!r.length || n && 1 === r.length) return e;
            var l = r.shift();
            return e.modules[l] = e.modules[l] || {}, e.modules[l].namespaced = !0, e.modules[l].modules = e.modules[l].modules || {}, re(e.modules[l], r, {
                isProperty: n
            })
        }

        function te(e, r, t) {
            r && ("state" === t ? e.state = r || e.state : e[t] = Object.assign({}, e[t], r))
        }
        t(50);

        function oe(e) {
            if (!e || !e.functional) return e;
            var r = Array.isArray(e.props) ? e.props : Object.keys(e.props || {});
            return {
                render: function(t) {
                    var o = {},
                        n = {};
                    for (var l in this.$attrs) r.includes(l) ? n[l] = this.$attrs[l] : o[l] = this.$attrs[l];
                    return t(e, {
                        on: this.$listeners,
                        attrs: o,
                        props: n,
                        scopedSlots: this.$scopedSlots
                    }, this.$slots.default)
                }
            }
        }
        var ae = {
            Apply: function() {
                return t.e(6).then(t.bind(null, 494)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Benefit: function() {
                return t.e(7).then(t.bind(null, 488)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            CategoryCard: function() {
                return Promise.all([t.e(0), t.e(8)]).then(t.bind(null, 536)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Checkbox: function() {
                return t.e(9).then(t.bind(null, 537)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            CreditCard: function() {
                return Promise.all([t.e(0), t.e(10)]).then(t.bind(null, 487)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Footer: function() {
                return Promise.resolve().then(t.bind(null, 200)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            JobApply: function() {
                return t.e(11).then(t.bind(null, 489)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            JoinGuild: function() {
                return t.e(12).then(t.bind(null, 490)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            LanguageNotification: function() {
                return Promise.resolve().then(t.bind(null, 135)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            LanguageSwitcher: function() {
                return Promise.resolve().then(t.bind(null, 96)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            LineChart: function() {
                return Promise.all([t.e(1), t.e(13)]).then(t.bind(null, 332)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Loader: function() {
                return Promise.resolve().then(t.bind(null, 134)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Navigation: function() {
                return Promise.resolve().then(t.bind(null, 130)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Partner: function() {
                return t.e(16).then(t.bind(null, 493)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            Sponsor: function() {
                return Promise.all([t.e(0), t.e(1), t.e(2), t.e(3)]).then(t.bind(null, 535)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StoreCard: function() {
                return Promise.all([t.e(0), t.e(30)]).then(t.bind(null, 333)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            MixinsDebug: function() {
                return Promise.resolve().then(t.bind(null, 133)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            MixinsDetection: function() {
                return Promise.resolve().then(t.bind(null, 132)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            MixinsPresence: function() {
                return t.e(14).then(t.bind(null, 326)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            MixinsStore: function() {
                return t.e(15).then(t.t.bind(null, 515, 7)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffApplication: function() {
                return t.e(18).then(t.bind(null, 538)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffApplications: function() {
                return t.e(19).then(t.bind(null, 539)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffBar: function() {
                return t.e(20).then(t.bind(null, 540)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffLoggedIn: function() {
                return t.e(22).then(t.bind(null, 541)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffPullRequests: function() {
                return t.e(23).then(t.bind(null, 542)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffSidebar: function() {
                return t.e(24).then(t.bind(null, 543)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffActivity: function() {
                return Promise.all([t.e(1), t.e(17)]).then(t.bind(null, 491)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffHandbook: function() {
                return t.e(21).then(t.bind(null, 492)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffTicket: function() {
                return Promise.all([t.e(2), t.e(25)]).then(t.bind(null, 544)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffTickets: function() {
                return t.e(27).then(t.bind(null, 545)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StepsFirst: function() {
                return t.e(28).then(t.bind(null, 547)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StepsQuestions: function() {
                return t.e(29).then(t.bind(null, 548)).then((function(e) {
                    return oe(e.default || e)
                }))
            },
            StaffTicketMessage: function() {
                return Promise.all([t.e(2), t.e(26)]).then(t.bind(null, 546)).then((function(e) {
                    return oe(e.default || e)
                }))
            }
        };
        for (var ne in ae) l.a.component(ne, ae[ne]), l.a.component("Lazy" + ne, ae[ne]);
        var se = t(72),
            ie = t.n(se),
            le = t(185),
            de = t.n(le),
            ce = t(186),
            pe = t.n(ce);

        function ue(object, e) {
            var r = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(object);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), r.push.apply(r, t)
            }
            return r
        }

        function me(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? ue(Object(source), !0).forEach((function(r) {
                    Object(n.a)(e, r, source[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : ue(Object(source)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(source, r))
                }))
            }
            return e
        }

        function he(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return ge(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ge(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                d = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, n = e
                },
                f: function() {
                    try {
                        l || null == t.return || t.return()
                    } finally {
                        if (d) throw n
                    }
                }
            }
        }

        function ge(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }
        for (var fe = {
                setBaseURL: function(e) {
                    this.defaults.baseURL = e
                },
                setHeader: function(e, r) {
                    var t, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        n = he(Array.isArray(o) ? o : [o]);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var l = t.value;
                            if (!r) return void delete this.defaults.headers[l][e];
                            this.defaults.headers[l][e] = r
                        }
                    } catch (e) {
                        n.e(e)
                    } finally {
                        n.f()
                    }
                },
                setToken: function(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                        o = e ? (r ? r + " " : "") + e : null;
                    this.setHeader("Authorization", o, t)
                },
                onRequest: function(e) {
                    this.interceptors.request.use((function(r) {
                        return e(r) || r
                    }))
                },
                onResponse: function(e) {
                    this.interceptors.response.use((function(r) {
                        return e(r) || r
                    }))
                },
                onRequestError: function(e) {
                    this.interceptors.request.use(void 0, (function(r) {
                        return e(r) || Promise.reject(r)
                    }))
                },
                onResponseError: function(e) {
                    this.interceptors.response.use(void 0, (function(r) {
                        return e(r) || Promise.reject(r)
                    }))
                },
                onError: function(e) {
                    this.onRequestError(e), this.onResponseError(e)
                },
                create: function(e) {
                    return we(de()(e, this.defaults))
                }
            }, be = function() {
                var e = ke[ye];
                fe["$" + e] = function() {
                    return this[e].apply(this, arguments).then((function(e) {
                        return e && e.data
                    }))
                }
            }, ye = 0, ke = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; ye < ke.length; ye++) be();
        var we = function(e) {
                var r = ie.a.create(e);
                return r.CancelToken = ie.a.CancelToken, r.isCancel = ie.a.isCancel,
                    function(e) {
                        for (var r in fe) e[r] = fe[r].bind(e)
                    }(r), r.onRequest((function(e) {
                        e.headers = me(me({}, r.defaults.headers.common), e.headers)
                    })), ve(r), pe()(r, {
                        retries: 3
                    }), r
            },
            ve = function(e) {
                var r = {
                        finish: function() {},
                        start: function() {},
                        fail: function() {},
                        set: function() {}
                    },
                    t = function() {
                        var e = "undefined" != typeof window && window.$nuxt;
                        return e && e.$loading && e.$loading.set ? e.$loading : r
                    },
                    o = 0;
                e.onRequest((function(e) {
                    e && !1 === e.progress || o++
                })), e.onResponse((function(e) {
                    e && e.config && !1 === e.config.progress || --o <= 0 && (o = 0, t().finish())
                })), e.onError((function(e) {
                    e && e.config && !1 === e.config.progress || (o--, ie.a.isCancel(e) ? o <= 0 && (o = 0, t().finish()) : (t().fail(), t().finish()))
                }));
                var n = function(e) {
                    if (o && e.total) {
                        var progress = 100 * e.loaded / (e.total * o);
                        t().set(Math.min(100, progress))
                    }
                };
                e.defaults.onUploadProgress = n, e.defaults.onDownloadProgress = n
            },
            je = function(e, r) {
                var t = e.$config && e.$config.axios || {},
                    o = t.browserBaseURL || t.browserBaseUrl || t.baseURL || t.baseUrl || "/";
                var n = we({
                    baseURL: o,
                    headers: {
                        common: {
                            Accept: "application/json, text/plain, */*"
                        },
                        delete: {},
                        get: {},
                        head: {},
                        post: {},
                        put: {},
                        patch: {}
                    }
                });
                e.$axios = n, r("axios", n)
            },
            xe = {
                render: function(e) {
                    return e("ins", {
                        class: ["adsbygoogle"],
                        style: this.adStyle,
                        attrs: {
                            "data-ad-client": this.adClient,
                            "data-ad-slot": this.adSlot || null,
                            "data-ad-format": this.adFormat,
                            "data-ad-region": this.show ? this.adRegion() : null,
                            "data-ad-layout": this.adLayout || null,
                            "data-ad-layout-key": this.adLayoutKey || null,
                            "data-page-url": this.pageUrl ? this.pageUrl : null,
                            "data-analytics-uacct": this.analyticsUacct ? this.analyticsUacct : null,
                            "data-analytics-domain-name": this.analyticsDomainName ? this.analyticsDomainName : null,
                            "data-adtest": null,
                            "data-adsbygoogle-status": this.show ? null : "",
                            "data-full-width-responsive": this.adFullWidthResponsive || null
                        },
                        domProps: {
                            innerHTML: this.show ? "" : " "
                        },
                        key: Math.random()
                    })
                },
                props: {
                    adClient: {
                        type: String,
                        default: "ca-pub-1575460061917202"
                    },
                    adSlot: {
                        type: String
                    },
                    adFormat: {
                        type: String,
                        default: "auto"
                    },
                    adLayout: {
                        type: String
                    },
                    adLayoutKey: {
                        type: String
                    },
                    adStyle: {
                        type: Object,
                        default: function() {
                            return {
                                display: "block"
                            }
                        }
                    },
                    adFullWidthResponsive: {
                        type: Boolean,
                        default: !1
                    },
                    pageUrl: {
                        type: String
                    },
                    analyticsUacct: {
                        type: String,
                        default: ""
                    },
                    analyticsDomainName: {
                        type: String,
                        default: ""
                    },
                    includeQuery: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        show: !0
                    }
                },
                mounted: function() {
                    this.showAd()
                },
                watch: {
                    $route: function(e, r) {
                        if (e.fullPath !== r.fullPath) {
                            var t = Object.keys,
                                o = e.query,
                                n = r.query,
                                l = !1;
                            e.path !== r.path ? l = !0 : this.includeQuery && (l = t(o).length !== t(n).length || !t(o).every((function(e) {
                                return o[e] === n[e]
                            }))), l && this.updateAd()
                        }
                    }
                },
                methods: {
                    adRegion: function() {
                        return "page-" + Math.random()
                    },
                    updateAd: function() {
                        this.isServer || (this.show = !1, this.$nextTick(this.showAd))
                    },
                    showAd: function() {
                        this.show = !0, this.$nextTick((function() {
                            try {
                                (window.adsbygoogle = window.adsbygoogle || []).push({})
                            } catch (e) {
                                console.error(e)
                            }
                        }))
                    }
                }
            };
        l.a.component("adsense", xe);
        var Pe = t(92);
        t(44), t(202);

        function _e(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return De(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return De(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                d = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, n = e
                },
                f: function() {
                    try {
                        l || null == t.return || t.return()
                    } finally {
                        if (d) throw n
                    }
                }
            }
        }

        function De(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }
        t(274);
        var s, ze = {
                images: !0,
                videos: !0,
                audios: !0,
                iframes: !0,
                native: !1,
                polyfill: !0,
                directiveOnly: !1,
                loadingClass: "isLoading",
                loadedClass: "isLoaded",
                appendClass: "lazyLoad",
                observerConfig: {
                    rootMargin: "50px 0px 50px 0px",
                    threshold: 0
                },
                globalName: "nuxt"
            },
            Me = null,
            Se = ["src", "poster", "srcset"],
            Le = {
                img: "images",
                video: "videos",
                audio: "audios",
                iframe: "iframes",
                picture: "images"
            },
            Ae = function(e) {
                var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = e.tagName.toLowerCase();
                if ("svg" !== t) {
                    var o = e.children && e.children.length > 0 ? [].concat(Object(Pe.a)(e.children), [e]) : [e];
                    o.forEach((function(e) {
                        var o, n = _e(Se);
                        try {
                            for (n.s(); !(o = n.n()).done;) {
                                var l = o.value;
                                e.dataset[l] && (e[l] = r ? ze.defaultImage : e.dataset[l], r || e.removeAttribute("data-".concat(l))), e.load && e.load(), "audio" === t && "true" === e.getAttribute("data-lazy-controls") && (e.removeAttribute("controls"), e.removeAttribute("data-lazy-controls"))
                            }
                        } catch (e) {
                            n.e(e)
                        } finally {
                            n.f()
                        }
                    }))
                }
            },
            Ie = function(e) {
                e.style.backgroundImage = "url(".concat(e.getAttribute("lazy-background"), ")"), e.removeAttribute("lazy-background"), !1 !== ze.loadedClass && e.classList.add(ze.loadedClass)
            },
            Ce = function(e, r) {
                var t = e.tagName.toLowerCase();
                if (["img", "video"].includes(t)) {
                    var o = "img" === t ? "load" : "loadeddata";
                    !1 !== ze.loadingClass && "loading" === r ? (e.classList.add(ze.loadingClass), e.addEventListener(o, (function() {
                        e.classList.remove(ze.loadingClass)
                    }))) : !1 !== ze.loadedClass && "loaded" === r && e.addEventListener(o, (function() {
                        e.classList.add(ze.loadedClass)
                    }))
                } else "loaded" === r && !1 !== ze.loadedClass && e.classList.add(ze.loadedClass)
            },
            Ne = function(e) {
                e.removeAttribute("data-no-lazy"), e.removeAttribute("data-not-lazy")
            },
            Te = !1,
            qe = ("string" != typeof(s = ze.globalName) ? "" : s.charAt(0).toUpperCase() + s.slice(1)) || "Nuxt";
        window["on".concat(qe, "Ready")]((function() {
            Te = !0
        })), Me = new IntersectionObserver((function(e, r) {
            Te && e.forEach((function(e) {
                if (e.isIntersecting) {
                    var t = e.target;
                    t.getAttribute("lazy-background") ? Ie(t) : (Ae(t), Ce(t, "loaded"), Ce(t, "loading"), r.unobserve(t))
                }
            }))
        }), ze.observerConfig);
        var Oe = l.a.directive("lazy-load", {
                inserted: function(e, r) {
                    var t = r.value;
                    r.def.set(e, t)
                },
                update: function(e, r, t, o) {
                    var n, l = r.value,
                        d = r.def,
                        c = _e(Se);
                    try {
                        for (c.s(); !(n = c.n()).done;) {
                            var m = n.value;
                            if (o.data.attrs && t.data.attrs && o.data.attrs["data-".concat(m)] !== t.data.attrs["data-".concat(m)]) {
                                d.set(e, l);
                                break
                            }
                        }
                    } catch (e) {
                        c.e(e)
                    } finally {
                        c.f()
                    }
                },
                set: function(e, r) {
                    if (!0 === ze.native) ze.appendClass && e.classList.add(ze.appendClass), ["notLazy", "noLazy"].every((function(r) {
                        return void 0 === e.dataset[r]
                    })) && (e.setAttribute("loading", "lazy"), Ne(e), ze.loadedClass && e.addEventListener("load", (function() {
                        e.classList.add(ze.loadedClass)
                    })));
                    else if (ze.defaultImage && Ae(e, !0), r) {
                        var t = [];
                        for (var o in r.replace(/( )src=/g, " data-src="), r.replace(/( )srcset=/g, " data-srcset="), r.replace(/( )poster=/g, " data-poster="), e.innerHTML = r, Le) ze[Le[o]] && t.push.apply(t, Object(Pe.a)(e.querySelectorAll(o)));
                        for (var n = 0, l = t; n < l.length; n++) {
                            var element = l[n];
                            !1 !== ze.appendClass && element.classList.add(ze.appendClass), Me.observe(element)
                        }
                    } else {
                        var d = "source" === e.tagName.toLowerCase() ? e.parentNode : e;
                        !0 !== ze[Le[d.tagName.toLowerCase()]] || ["notLazy", "noLazy"].some((function(e) {
                            return void 0 !== d.dataset[e]
                        })) ? (Ae(d), Ne(d)) : void 0 === d.dataset.manualLazy && (!1 !== ze.appendClass && d.classList.add(ze.appendClass), "audio" !== d.tagName.toLowerCase() || d.getAttribute("controls") || (d.setAttribute("controls", ""), d.setAttribute("data-lazy-controls", "true")), Me.observe(d))
                    }
                }
            }),
            Be = l.a.directive("lazy-background", {
                inserted: function(e, r) {
                    r.def.set(e)
                },
                update: function(e, r, t, o) {
                    r.def.set(e, t.data.attrs["lazy-background"] !== o.data.attrs["lazy-background"])
                },
                set: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    ze.defaultImage && (e.style.backgroundImage = "url(".concat(ze.defaultImage, ")")), ["notLazy", "noLazy"].some((function(r) {
                        return void 0 !== e.dataset[r]
                    })) ? Ie(e) : (void 0 === e.dataset.manualLazy && (!1 !== ze.appendClass && e.classList.add(ze.appendClass), Me.observe(e)), r && (Me.unobserve(e), Me.observe(e)))
                }
            });
        l.a.use(Oe), l.a.use(Be);
        var Ee, Re, Ue, Ve, Fe = function(e) {
                e.removeAttribute("data-manual-lazy"), !1 !== ze.appendClass && e.classList.add(ze.appendClass), e.getAttribute("lazy-background") ? Ie(e) : (Ae(e), Ce(e, "loading"), Ce(e, "loaded"))
            },
            $e = function(e) {
                if (e.target) {
                    var r = e.target.querySelectorAll("[data-manual-lazy]");
                    Object(Pe.a)(r).forEach((function(e) {
                        return Fe(e)
                    }))
                } else Fe(e)
            };
        !Array.from && ze.polyfill && (Array.from = (Ee = Object.prototype.toString, Re = function(e) {
            return "function" == typeof e || "[object Function]" === Ee.call(e)
        }, Ue = Math.pow(2, 53) - 1, Ve = function(e) {
            var r = function(e) {
                var r = Number(e);
                return isNaN(r) ? 0 : 0 !== r && isFinite(r) ? (r > 0 ? 1 : -1) * Math.floor(Math.abs(r)) : r
            }(e);
            return Math.min(Math.max(r, 0), Ue)
        }, function(e) {
            var r = this,
                t = Object(e);
            if (null == e) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var o, n = arguments.length > 1 ? arguments[1] : void 0;
            if (void 0 !== n) {
                if (!Re(n)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (o = arguments[2])
            }
            for (var l, d = Ve(t.length), c = Re(r) ? Object(new r(d)) : new Array(d), m = 0; m < d;) l = t[m], c[m] = n ? void 0 === o ? n(l, m) : n.call(o, l, m) : l, m += 1;
            return c.length = d, c
        }));
        var Ke = function(e, r) {
                r("lazyLoad", $e)
            },
            We = t(187),
            He = t.n(We);

        function Ge(object, e) {
            var r = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(object);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), r.push.apply(r, t)
            }
            return r
        }

        function Ye(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Ge(Object(source), !0).forEach((function(r) {
                    Object(n.a)(e, r, source[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Ge(Object(source)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(source, r))
                }))
            }
            return e
        }
        var Je = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(r, t) {
                    var o, n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (o = r.$config && r.$config.googleAnalytics || {}, "function" != typeof(n = Ye(Ye({}, {
                                        dev: !0,
                                        debug: {
                                            sendHitTask: !0
                                        },
                                        id: "UA-129058596-1"
                                    }), o)).asyncID) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 6, n.asyncID(r);
                            case 6:
                                n.id = e.sent;
                            case 7:
                                l.a.use(He.a, Ye(Ye({}, {
                                    router: r.app.router
                                }), n)), r.$ga = l.a.$ga, t("ga", l.a.$ga);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(r, t) {
                    return e.apply(this, arguments)
                }
            }(),
            Ze = function(e) {
                var r = e.app,
                    t = function(e) {
                        return new Promise((function(t, o) {
                            r.$axios({
                                url: "/v3",
                                method: "POST",
                                data: {
                                    query: e
                                }
                            }).then((function(e) {
                                var data = e.data;
                                return t(data.data)
                            })).catch(o)
                        }))
                    };
                r.$graphql = t, l.a.prototype.$graphql = t
            },
            Qe = t(121),
            Xe = t(96),
            er = t(135),
            rr = function() {
                l.a.component("LanguageSwitcher", Xe.default), l.a.component("LanguageNotification", er.default), l.a.mixin({
                    methods: {
                        getBrowserLanguage: function() {
                            return 2 == navigator.language.length ? navigator.language : navigator.language.slice(0, 2) === navigator.language.slice(3, 5).toLocaleLowerCase() ? navigator.language.slice(0, 2) : navigator.language.slice(0, 2) + "_" + navigator.language.slice(3)
                        },
                        getCurrentLanguage: function() {
                            return this.$i18n.locale
                        },
                        setLanguage: function(e) {
                            return localStorage.setItem("language", e), this.$i18n.locale = e, !0
                        }
                    }
                })
            },
            or = t(188),
            ar = t.n(or);
        l.a.use(ar.a);
        var nr = function(e) {
                e.$axios.onRequest((function(e) {
                    e.headers.Authorization && delete e.headers.Authorization, e.headers.common.Authorization && delete e.headers.common.Authorization
                }))
            },
            sr = t(123),
            ir = function(e) {
                e.app;
                l.a.use(sr.b, {
                    directive: "tippy",
                    theme: "discord",
                    arrow: !0,
                    inertia: !0,
                    animation: "discord-anim",
                    duration: [100, 100],
                    hideOnClick: !1
                }), l.a.component("tippy", sr.a)
            },
            lr = t(189),
            dr = t.n(lr),
            cr = function() {
                l.a.use(dr.a, {
                    timeout: 1e3,
                    progressBar: !1,
                    layout: "topRight",
                    theme: "premid"
                })
            },
            pr = t(124),
            ur = t.n(pr),
            mr = function(e) {
                e.app;
                l.a.use(ur.a), l.a.component("paginate", ur.a)
            },
            gr = t(190),
            fr = t.n(gr);
        l.a.use(fr.a);
        var yr = t(191),
            kr = t.n(yr);
        l.a.use(kr.a);
        var wr = t(192),
            vr = t.n(wr);
        l.a.use(vr.a);
        var jr = t(32),
            xr = t(47),
            Pr = t(48),
            _r = t(125),
            Dr = (t(76), t(166), t(323), function(e) {
                return null == e
            }),
            zr = function(e) {
                return !Dr(e)
            },
            Mr = function(a, b) {
                return a.split("?")[0].replace(/\/+$/, "") === b.split("?")[0].replace(/\/+$/, "")
            },
            Sr = function(u) {
                return u && u.length && /^\/([a-zA-Z0-9@\-%_~][/a-zA-Z0-9@\-%_~]*)?([?][^#]*)?(#[^#]*)?$/.test(u)
            },
            Lr = function(e) {
                for (var r = {}, t = e.split("&"), i = 0; i < t.length; i++) {
                    var o = t[i].split("=");
                    r[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "")
                }
                return r
            },
            Ar = function(e) {
                return Object.entries(e).filter((function(e) {
                    var r = Object(C.a)(e, 2);
                    r[0];
                    return void 0 !== r[1]
                })).map((function(e) {
                    var r = Object(C.a)(e, 2),
                        t = r[0],
                        o = r[1];
                    return encodeURIComponent(t) + (null != o ? "=" + encodeURIComponent(o) : "")
                })).join("&")
            },
            Ir = function(e, r, t) {
                return e.matched.some((function(e) {
                    return Object.values(e.components).some((function(component) {
                        return component.options && component.options[r] === t
                    }))
                }))
            };

        function Cr() {
            var path = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                e = path.split("?")[0];
            return "/" === e.charAt(e.length - 1) && (e = e.slice(0, -1)), e
        }

        function Nr(e) {
            return "string" == typeof e ? e : JSON.stringify(e)
        }

        function Tr(e) {
            if ("string" == typeof e) try {
                return JSON.parse(e)
            } catch (e) {}
            return e
        }

        function qr(e, r) {
            if (!r || !e) return e;
            if (r in e) return e[r];
            for (var t = Array.isArray(r) ? r : (r + "").split("."), o = e; t.length && o;) o = o[t.shift()];
            return o
        }
        var Or = function() {
            function e(r, t) {
                Object(xr.a)(this, e), this.ctx = r, this.options = t, this._initState()
            }
            return Object(Pr.a)(e, [{
                key: "setUniversal",
                value: function(e, r) {
                    return Dr(r) ? this.removeUniversal(e) : (this.setState(e, r), this.setCookie(e, r), this.setLocalStorage(e, r), r)
                }
            }, {
                key: "getUniversal",
                value: function(e) {
                    var r = this.getState(e);
                    return Dr(r) && (r = this.getCookie(e)), Dr(r) && (r = this.getLocalStorage(e)), r
                }
            }, {
                key: "syncUniversal",
                value: function(e, r) {
                    var t = this.getUniversal(e);
                    return Dr(t) && zr(r) && (t = r), zr(t) && this.setUniversal(e, t), t
                }
            }, {
                key: "removeUniversal",
                value: function(e) {
                    this.removeState(e), this.removeLocalStorage(e), this.removeCookie(e)
                }
            }, {
                key: "_initState",
                value: function() {
                    var e = this;
                    if (l.a.set(this, "_state", {}), this._useVuex = this.options.vuex && this.ctx.store, this._useVuex) {
                        var r = {
                            namespaced: !0,
                            state: function() {
                                return e.options.initialState
                            },
                            mutations: {
                                SET: function(e, r) {
                                    l.a.set(e, r.key, r.value)
                                }
                            }
                        };
                        this.ctx.store.registerModule(this.options.vuex.namespace, r, {
                            preserveState: Boolean(this.ctx.store.state[this.options.vuex.namespace])
                        }), this.state = this.ctx.store.state[this.options.vuex.namespace]
                    } else l.a.set(this, "state", {})
                }
            }, {
                key: "setState",
                value: function(e, r) {
                    return "_" === e[0] ? l.a.set(this._state, e, r) : this._useVuex ? this.ctx.store.commit(this.options.vuex.namespace + "/SET", {
                        key: e,
                        value: r
                    }) : l.a.set(this.state, e, r), r
                }
            }, {
                key: "getState",
                value: function(e) {
                    return "_" !== e[0] ? this.state[e] : this._state[e]
                }
            }, {
                key: "watchState",
                value: function(e, r) {
                    var t = this;
                    if (this._useVuex) return this.ctx.store.watch((function(r) {
                        return qr(r[t.options.vuex.namespace], e)
                    }), r)
                }
            }, {
                key: "removeState",
                value: function(e) {
                    this.setState(e, void 0)
                }
            }, {
                key: "setLocalStorage",
                value: function(e, r) {
                    if (Dr(r)) return this.removeLocalStorage(e);
                    if ("undefined" != typeof localStorage && this.options.localStorage) {
                        var t = this.options.localStorage.prefix + e;
                        try {
                            localStorage.setItem(t, Nr(r))
                        } catch (e) {
                            if (!this.options.ignoreExceptions) throw e
                        }
                        return r
                    }
                }
            }, {
                key: "getLocalStorage",
                value: function(e) {
                    if ("undefined" != typeof localStorage && this.options.localStorage) {
                        var r = this.options.localStorage.prefix + e;
                        return Tr(localStorage.getItem(r))
                    }
                }
            }, {
                key: "removeLocalStorage",
                value: function(e) {
                    if ("undefined" != typeof localStorage && this.options.localStorage) {
                        var r = this.options.localStorage.prefix + e;
                        localStorage.removeItem(r)
                    }
                }
            }, {
                key: "getCookies",
                value: function() {
                    var e = document.cookie;
                    return Object(_r.parse)(e || "") || {}
                }
            }, {
                key: "setCookie",
                value: function(e, r) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (this.options.cookie) {
                        var o = this.options.cookie.prefix + e,
                            n = Object.assign({}, this.options.cookie.options, t),
                            l = Nr(r);
                        Dr(r) && (n.maxAge = -1), "number" == typeof n.expires && (n.expires = new Date(1 * new Date + 864e5 * n.expires));
                        var d = Object(_r.serialize)(o, l, n);
                        return document.cookie = d, r
                    }
                }
            }, {
                key: "getCookie",
                value: function(e) {
                    if (this.options.cookie) {
                        var r = this.options.cookie.prefix + e,
                            t = this.getCookies();
                        return Tr(t[r] ? decodeURIComponent(t[r]) : void 0)
                    }
                }
            }, {
                key: "removeCookie",
                value: function(e, r) {
                    this.setCookie(e, void 0, r)
                }
            }]), e
        }();

        function Br(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return Er(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Er(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, l = !0,
                d = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return l = e.done, e
                },
                e: function(e) {
                    d = !0, n = e
                },
                f: function() {
                    try {
                        l || null == t.return || t.return()
                    } finally {
                        if (d) throw n
                    }
                }
            }
        }

        function Er(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }
        var Rr = function() {
            function e(r, t) {
                Object(xr.a)(this, e), this.ctx = r, this.options = t, this.strategies = {}, this._errorListeners = [], this._redirectListeners = [], t.initialState = {
                    user: null,
                    loggedIn: !1
                };
                var o = new Or(r, t);
                this.$storage = o, this.$state = o.state
            }
            var r;
            return Object(Pr.a)(e, [{
                key: "init",
                value: (r = Object(o.a)(regeneratorRuntime.mark((function e() {
                    var r = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.options.resetOnError && this.onError((function() {
                                        var e;
                                        ("function" != typeof r.options.resetOnError || (e = r.options).resetOnError.apply(e, arguments)) && r.reset()
                                    })), this.$storage.syncUniversal("strategy", this.options.defaultStrategy), this.strategy) {
                                    e.next = 6;
                                    break
                                }
                                if (this.$storage.setUniversal("strategy", this.options.defaultStrategy), this.strategy) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve());
                            case 6:
                                return e.prev = 6, e.next = 9, this.mounted();
                            case 9:
                                e.next = 14;
                                break;
                            case 11:
                                e.prev = 11, e.t0 = e.catch(6), this.callOnError(e.t0);
                            case 14:
                                return e.prev = 14, this.options.watchLoggedIn && this.$storage.watchState("loggedIn", (function(e) {
                                    Ir(r.ctx.route, "auth", !1) || r.redirect(e ? "home" : "logout")
                                })), e.finish(14);
                            case 17:
                            case "end":
                                return e.stop()
                        }
                    }), e, this, [
                        [6, 11, 14, 17]
                    ])
                }))), function() {
                    return r.apply(this, arguments)
                })
            }, {
                key: "state",
                get: function() {
                    return this._state_warn_shown || (this._state_warn_shown = !0, console.warn("[AUTH] $auth.state is deprecated. Please use $auth.$state or top level props like $auth.loggedIn")), this.$state
                }
            }, {
                key: "getState",
                value: function(e) {
                    return this._get_state_warn_shown || (this._get_state_warn_shown = !0, console.warn("[AUTH] $auth.getState is deprecated. Please use $auth.$storage.getState() or top level props like $auth.loggedIn")), this.$storage.getState(e)
                }
            }, {
                key: "strategy",
                get: function() {
                    return this.strategies[this.$state.strategy]
                }
            }, {
                key: "registerStrategy",
                value: function(e, r) {
                    this.strategies[e] = r
                }
            }, {
                key: "setStrategy",
                value: function(e) {
                    return e === this.$storage.getUniversal("strategy") ? Promise.resolve() : (this.$storage.setUniversal("strategy", e), this.mounted())
                }
            }, {
                key: "mounted",
                value: function() {
                    var e, r = this;
                    return this.strategy.mounted ? Promise.resolve((e = this.strategy).mounted.apply(e, arguments)).catch((function(e) {
                        return r.callOnError(e, {
                            method: "mounted"
                        }), Promise.reject(e)
                    })) : this.fetchUserOnce()
                }
            }, {
                key: "loginWith",
                value: function(e) {
                    for (var r = this, t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) o[n - 1] = arguments[n];
                    return this.setStrategy(e).then((function() {
                        return r.login.apply(r, o)
                    }))
                }
            }, {
                key: "login",
                value: function() {
                    var e, r = this;
                    return this.strategy.login ? this.wrapLogin((e = this.strategy).login.apply(e, arguments)).catch((function(e) {
                        return r.callOnError(e, {
                            method: "login"
                        }), Promise.reject(e)
                    })) : Promise.resolve()
                }
            }, {
                key: "fetchUser",
                value: function() {
                    var e, r = this;
                    return this.strategy.fetchUser ? Promise.resolve((e = this.strategy).fetchUser.apply(e, arguments)).catch((function(e) {
                        return r.callOnError(e, {
                            method: "fetchUser"
                        }), Promise.reject(e)
                    })) : Promise.resolve()
                }
            }, {
                key: "logout",
                value: function() {
                    var e, r = this;
                    return this.strategy.logout ? Promise.resolve((e = this.strategy).logout.apply(e, arguments)).catch((function(e) {
                        return r.callOnError(e, {
                            method: "logout"
                        }), Promise.reject(e)
                    })) : (this.reset(), Promise.resolve())
                }
            }, {
                key: "setUserToken",
                value: function(e) {
                    var r = this;
                    return this.strategy.setUserToken ? Promise.resolve(this.strategy.setUserToken(e)).catch((function(e) {
                        return r.callOnError(e, {
                            method: "setUserToken"
                        }), Promise.reject(e)
                    })) : (this.setToken(this.strategy.name, e), Promise.resolve())
                }
            }, {
                key: "reset",
                value: function() {
                    var e, r = this;
                    return this.strategy.reset ? Promise.resolve((e = this.strategy).reset.apply(e, arguments)).catch((function(e) {
                        return r.callOnError(e, {
                            method: "reset"
                        }), Promise.reject(e)
                    })) : (this.setUser(!1), this.setToken(this.$state.strategy, !1), this.setRefreshToken(this.$state.strategy, !1), Promise.resolve())
                }
            }, {
                key: "getToken",
                value: function(e) {
                    var r = this.options.token.prefix + e;
                    return this.$storage.getUniversal(r)
                }
            }, {
                key: "setToken",
                value: function(e, r) {
                    var t = this.options.token.prefix + e;
                    return this.$storage.setUniversal(t, r)
                }
            }, {
                key: "syncToken",
                value: function(e) {
                    var r = this.options.token.prefix + e;
                    return this.$storage.syncUniversal(r)
                }
            }, {
                key: "getRefreshToken",
                value: function(e) {
                    var r = this.options.refresh_token.prefix + e;
                    return this.$storage.getUniversal(r)
                }
            }, {
                key: "setRefreshToken",
                value: function(e, r) {
                    var t = this.options.refresh_token.prefix + e;
                    return this.$storage.setUniversal(t, r)
                }
            }, {
                key: "syncRefreshToken",
                value: function(e) {
                    var r = this.options.refresh_token.prefix + e;
                    return this.$storage.syncUniversal(r)
                }
            }, {
                key: "user",
                get: function() {
                    return this.$state.user
                }
            }, {
                key: "loggedIn",
                get: function() {
                    return this.$state.loggedIn
                }
            }, {
                key: "fetchUserOnce",
                value: function() {
                    return this.$state.user ? Promise.resolve() : this.fetchUser.apply(this, arguments)
                }
            }, {
                key: "setUser",
                value: function(e) {
                    this.$storage.setState("user", e), this.$storage.setState("loggedIn", Boolean(e))
                }
            }, {
                key: "busy",
                get: function() {
                    return this.$storage.getState("busy")
                }
            }, {
                key: "request",
                value: function(e, r, t) {
                    var o = this,
                        n = "object" === Object(jr.a)(r) ? Object.assign({}, r, e) : e;
                    if (this.ctx.app.$axios) return this.ctx.app.$axios.request(n).then((function(e) {
                        var r = n.propertyName ? qr(e.data, n.propertyName) : e.data;
                        return t ? {
                            response: e,
                            result: r
                        } : r
                    })).catch((function(e) {
                        return o.callOnError(e, {
                            method: "request"
                        }), Promise.reject(e)
                    }));
                    console.error("[AUTH] add the @nuxtjs/axios module to nuxt.config file")
                }
            }, {
                key: "requestWith",
                value: function(e, r, t, o) {
                    var n = this.getToken(e),
                        l = Object.assign({}, t, r),
                        d = this.strategies[e].options.tokenName || "Authorization";
                    return l.headers || (l.headers = {}), !l.headers[d] && zr(n) && n && (l.headers[d] = n), this.request(l, !1, o)
                }
            }, {
                key: "wrapLogin",
                value: function(e) {
                    var r = this;
                    return this.$storage.setState("busy", !0), this.error = null, Promise.resolve(e).then((function(e) {
                        return r.$storage.setState("busy", !1), e
                    })).catch((function(e) {
                        return r.$storage.setState("busy", !1), Promise.reject(e)
                    }))
                }
            }, {
                key: "onError",
                value: function(e) {
                    this._errorListeners.push(e)
                }
            }, {
                key: "callOnError",
                value: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.error = e;
                    var t, o = Br(this._errorListeners);
                    try {
                        for (o.s(); !(t = o.n()).done;) {
                            var n = t.value;
                            n(e, r)
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                }
            }, {
                key: "redirect",
                value: function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.options.redirect) {
                        var t = this.options.fullPathRedirect ? this.ctx.route.fullPath : this.ctx.route.path,
                            o = this.options.redirect[e];
                        if (o) {
                            if (this.options.rewriteRedirects && ("login" === e && Sr(t) && !Mr(o, t) && this.$storage.setUniversal("redirect", t), "home" === e)) {
                                var n = this.$storage.getUniversal("redirect");
                                this.$storage.setUniversal("redirect", null), Sr(n) && (o = n)
                            }
                            o = this.callOnRedirect(o, t) || o, Mr(o, t) || (r ? window.location.replace(o) : this.ctx.redirect(o, this.ctx.query))
                        }
                    }
                }
            }, {
                key: "onRedirect",
                value: function(e) {
                    this._redirectListeners.push(e)
                }
            }, {
                key: "callOnRedirect",
                value: function(e, r) {
                    var t, o = Br(this._redirectListeners);
                    try {
                        for (o.s(); !(t = o.n()).done;) {
                            e = (0, t.value)(e, r) || e
                        }
                    } catch (e) {
                        o.e(e)
                    } finally {
                        o.f()
                    }
                    return e
                }
            }, {
                key: "hasScope",
                value: function(e) {
                    var r = this.$state.user && qr(this.$state.user, this.options.scopeKey);
                    return !!r && (Array.isArray(r) ? r.includes(e) : Boolean(qr(r, e)))
                }
            }]), e
        }();
        t(69).a.auth = function(e) {
            if (!Ir(e.route, "auth", !1)) {
                if (function(e) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return [].concat.apply([], e.matched.map((function(e, t) {
                            return Object.keys(e.components).map((function(o) {
                                return r && r.push(t), e.components[o]
                            }))
                        })))
                    }(e.route, []).length) {
                    var r = e.$auth.options.redirect,
                        t = r.login,
                        o = r.callback,
                        n = Ir(e.route, "auth", "guest"),
                        l = function(r) {
                            return Cr(e.route.path) === Cr(r)
                        };
                    e.$auth.$state.loggedIn ? (!t || l(t) || n) && e.$auth.redirect("home") : n || o && l(o) || e.$auth.redirect("login")
                }
            }
        };
        var Ur = t(126),
            Vr = t.n(Ur);

        function Fr(object, e) {
            var r = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(object);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), r.push.apply(r, t)
            }
            return r
        }

        function $r(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Fr(Object(source), !0).forEach((function(r) {
                    Object(n.a)(e, r, source[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Fr(Object(source)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(source, r))
                }))
            }
            return e
        }
        var Kr = {
                token_type: "Bearer",
                response_type: "token",
                tokenName: "Authorization",
                token_key: "access_token",
                refresh_token_key: "refresh_token"
            },
            Wr = function() {
                function e(r, t) {
                    Object(xr.a)(this, e), this.$auth = r, this.req = r.ctx.req, this.name = t._name, this.options = Object.assign({}, Kr, t)
                }
                var r, t, n, l;
                return Object(Pr.a)(e, [{
                    key: "_scope",
                    get: function() {
                        return Array.isArray(this.options.scope) ? this.options.scope.join(" ") : this.options.scope
                    }
                }, {
                    key: "_redirectURI",
                    get: function() {
                        var e = this.options.redirect_uri;
                        return e || window.location.origin + this.$auth.options.redirect.callback
                    }
                }, {
                    key: "mounted",
                    value: (l = Object(o.a)(regeneratorRuntime.mark((function e() {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (r = this.$auth.syncToken(this.name)) && this._setToken(r), e.next = 4, this._handleCallback();
                                case 4:
                                    if (e.sent) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", this.$auth.fetchUserOnce());
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "_setToken",
                    value: function(e) {
                        this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, e)
                    }
                }, {
                    key: "_clearToken",
                    value: function() {
                        this.$auth.ctx.app.$axios.setHeader(this.options.tokenName, !1)
                    }
                }, {
                    key: "reset",
                    value: (n = Object(o.a)(regeneratorRuntime.mark((function e() {
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return this._clearToken(), this.$auth.setUser(!1), this.$auth.setToken(this.name, !1), this.$auth.setRefreshToken(this.name, !1), e.abrupt("return", Promise.resolve());
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "login",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = e.params,
                            t = e.state,
                            o = e.nonce,
                            n = $r({
                                protocol: "oauth2",
                                response_type: this.options.response_type,
                                access_type: this.options.access_type,
                                client_id: this.options.client_id,
                                redirect_uri: this._redirectURI,
                                scope: this._scope,
                                state: t || Vr()()
                            }, r);
                        this.options.audience && (n.audience = this.options.audience), n.response_type.includes("id_token") && (n.nonce = o || Vr()()), this.$auth.$storage.setUniversal(this.name + ".state", n.state);
                        var l = this.options.authorization_endpoint + "?" + Ar(n);
                        window.location = l
                    }
                }, {
                    key: "fetchUser",
                    value: (t = Object(o.a)(regeneratorRuntime.mark((function e() {
                        var r;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this.$auth.getToken(this.name)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    if (this.options.userinfo_endpoint) {
                                        e.next = 5;
                                        break
                                    }
                                    return this.$auth.setUser({}), e.abrupt("return");
                                case 5:
                                    return e.next = 7, this.$auth.requestWith(this.name, {
                                        url: this.options.userinfo_endpoint
                                    });
                                case 7:
                                    r = e.sent, this.$auth.setUser(r);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function() {
                        return t.apply(this, arguments)
                    })
                }, {
                    key: "_handleCallback",
                    value: (r = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                        var t, o, n, l, d, data;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!this.$auth.options.redirect || Cr(this.$auth.ctx.route.path) === Cr(this.$auth.options.redirect.callback)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 2:
                                    e.next = 4;
                                    break;
                                case 4:
                                    if (t = Lr(this.$auth.ctx.route.hash.substr(1)), o = Object.assign({}, this.$auth.ctx.route.query, t), n = o[this.options.token_key], l = o[this.options.refresh_token_key], d = this.$auth.$storage.getUniversal(this.name + ".state"), this.$auth.$storage.setUniversal(this.name + ".state", null), !d || o.state === d) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 12:
                                    if ("code" !== this.options.response_type || !o.code) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.next = 15, this.$auth.request({
                                        method: "post",
                                        url: this.options.access_token_endpoint,
                                        baseURL: !1,
                                        data: Ar({
                                            code: o.code,
                                            client_id: this.options.client_id,
                                            redirect_uri: this._redirectURI,
                                            response_type: this.options.response_type,
                                            audience: this.options.audience,
                                            grant_type: this.options.grant_type
                                        })
                                    });
                                case 15:
                                    (data = e.sent)[this.options.token_key] && (n = data[this.options.token_key]), data[this.options.refresh_token_key] && (l = data[this.options.refresh_token_key]);
                                case 18:
                                    if (n && n.length) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 20:
                                    return this.options.token_type && (n = this.options.token_type + " " + n), this.$auth.setToken(this.name, n), this._setToken(n), l && l.length && (l = this.options.token_type + " " + l, this.$auth.setRefreshToken(this.name, l)), this.$auth.redirect("home", !0), e.abrupt("return", !0);
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    }))), function(e) {
                        return r.apply(this, arguments)
                    })
                }]), e
            }(),
            Hr = function(e, r) {
                var t = new Rr(e, {
                    resetOnError: !1,
                    scopeKey: "scope",
                    rewriteRedirects: !0,
                    fullPathRedirect: !1,
                    watchLoggedIn: !0,
                    redirect: {
                        login: "/login",
                        logout: "/",
                        home: "/",
                        callback: "/callback"
                    },
                    vuex: {
                        namespace: "auth"
                    },
                    cookie: {
                        prefix: "auth.",
                        options: {
                            path: "/"
                        }
                    },
                    localStorage: {
                        prefix: "auth."
                    },
                    token: {
                        prefix: "_token."
                    },
                    refresh_token: {
                        prefix: "_refresh_token."
                    },
                    defaultStrategy: "discord"
                });
                return t.registerStrategy("discord", new Wr(t, {
                    authorization_endpoint: "https://discordapp.com/api/oauth2/authorize",
                    userinfo_endpoint: "https://discordapp.com/api/users/@me",
                    scope: ["identify"],
                    client_id: "503557087041683458",
                    _name: "discord"
                })), r("auth", t), e.$auth = t, t.init().catch((function(e) {
                    console.error("[ERROR] [AUTH]", e)
                }))
            };

        function Gr(object, e) {
            var r = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var t = Object.getOwnPropertySymbols(object);
                e && (t = t.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }))), r.push.apply(r, t)
            }
            return r
        }

        function Yr(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? Gr(Object(source), !0).forEach((function(r) {
                    Object(n.a)(e, r, source[r])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : Gr(Object(source)).forEach((function(r) {
                    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(source, r))
                }))
            }
            return e
        }
        l.a.component(h.a.name, h.a), l.a.component(y.a.name, Yr(Yr({}, y.a), {}, {
            render: function(e, r) {
                return y.a._warned || (y.a._warned = !0, console.warn("<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead")), y.a.render(e, r)
            }
        })), l.a.component(z.name, z), l.a.component("NChild", z), l.a.component(N.name, N), Object.defineProperty(l.a.prototype, "$nuxt", {
            get: function() {
                var e = this.$root.$options.$nuxt;
                return e || "undefined" == typeof window ? e : window.$nuxt
            },
            configurable: !0
        }), l.a.use(c.a, {
            keyName: "head",
            attribute: "data-n-head",
            ssrAttribute: "data-n-head-ssr",
            tagIDKeyName: "hid"
        });
        var Jr = {
                name: "page",
                mode: "out-in",
                appear: !1,
                appearClass: "appear",
                appearActiveClass: "appear-active",
                appearToClass: "appear-to"
            },
            Zr = d.a.Store.prototype.registerModule;

        function Qr(path, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                t = Array.isArray(path) ? !!path.reduce((function(e, path) {
                    return e && e[path]
                }), this.state) : path in this.state;
            return Zr.call(this, path, e, Yr({
                preserveState: t
            }, r))
        }

        function Xr(e) {
            return et.apply(this, arguments)
        }

        function et() {
            return (et = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                var t, n, d, c, m, h, path, f, y = arguments;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return f = function(e, r) {
                                if (!e) throw new Error("inject(key, value) has no key provided");
                                if (void 0 === r) throw new Error("inject('".concat(e, "', value) has no value provided"));
                                c[e = "$" + e] = r, c.context[e] || (c.context[e] = r), d[e] = c[e];
                                var t = "__nuxt_" + e + "_installed__";
                                l.a[t] || (l.a[t] = !0, l.a.use((function() {
                                    Object.prototype.hasOwnProperty.call(l.a.prototype, e) || Object.defineProperty(l.a.prototype, e, {
                                        get: function() {
                                            return this.$root.$options[e]
                                        }
                                    })
                                })))
                            }, t = y.length > 1 && void 0 !== y[1] ? y[1] : {}, e.next = 4, D(0, t);
                        case 4:
                            return n = e.sent, (d = Q(r)).$router = n, d.registerModule = Qr, c = Yr({
                                head: {
                                    titleTemplate: "%s - PreMiD",
                                    link: [{
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/assets/meta/favicon.ico"
                                    }, {
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/assets/meta/favicon-32x32.png"
                                    }, {
                                        rel: "icon",
                                        type: "image/x-icon",
                                        href: "/assets/meta/favicon-32x32.png"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/assets/fonts/FontAwesome/all.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "https://cdn.jsdelivr.net/npm/inter-ui@3.11.0/inter.min.css"
                                    }, {
                                        rel: "stylesheet",
                                        type: "text/css",
                                        href: "/assets/fonts/Discord/font.css"
                                    }],
                                    meta: [{
                                        charset: "utf-8"
                                    }, {
                                        name: "viewport",
                                        content: "width=device-width, initial-scale=1"
                                    }, {
                                        name: "PreMiD_Presence",
                                        content: "PreMiD"
                                    }, {
                                        hid: "theme-color",
                                        name: "theme-color",
                                        content: "#7289DA"
                                    }, {
                                        hid: "description",
                                        property: "description",
                                        content: "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
                                    }, {
                                        hid: "twitter:card",
                                        property: "twitter:card",
                                        content: "summary"
                                    }, {
                                        hid: "twitter:url",
                                        property: "twitter:url",
                                        content: "https://premid.app"
                                    }, {
                                        hid: "twitter:description",
                                        property: "twitter:description",
                                        content: "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
                                    }, {
                                        hid: "twitter:image",
                                        property: "twitter:image",
                                        content: "https://premid.app/assets/images/logo.png"
                                    }, {
                                        hid: "og:site_name",
                                        property: "og:site_name",
                                        content: "PreMiD"
                                    }, {
                                        hid: "og:title",
                                        property: "og:title",
                                        content: "PreMiD"
                                    }, {
                                        hid: "og:description",
                                        property: "og:description",
                                        content: "PreMiD is a simple, configurable utility that allows you to show what you're doing on the web in your Discord now playing status."
                                    }, {
                                        hid: "og:image",
                                        property: "og:image",
                                        content: "https://premid.app/assets/images/logo.png"
                                    }],
                                    script: [{
                                        hid: "stripe",
                                        src: "https://t8yhzkqt8q6g.statuspage.io/embed/script.js",
                                        defer: !0
                                    }, {
                                        hid: "adsbygoogle-script",
                                        async: !0,
                                        src: "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                                    }, {
                                        hid: "adsbygoogle",
                                        innerHTML: "if (!window.__abg_called){ (window.adsbygoogle = window.adsbygoogle || []).onload = function() {\n          [].forEach.call(document.getElementsByClassName('adsbygoogle'), function () { adsbygoogle.push({\n    google_ad_client: \"ca-pub-1575460061917202\",\n    enable_page_level_ads: false,\n    overlays: {bottom: false}\n  }); })\n        }; window.__abg_called = true;}"
                                    }],
                                    style: [],
                                    __dangerouslyDisableSanitizersByTagID: {
                                        adsbygoogle: ["innerHTML"]
                                    }
                                },
                                store: d,
                                router: n,
                                nuxt: {
                                    defaultTransition: Jr,
                                    transitions: [Jr],
                                    setTransitions: function(e) {
                                        return Array.isArray(e) || (e = [e]), e = e.map((function(e) {
                                            return e = e ? "string" == typeof e ? Object.assign({}, Jr, {
                                                name: e
                                            }) : Object.assign({}, Jr, e) : Jr
                                        })), this.$options.nuxt.transitions = e, e
                                    },
                                    err: null,
                                    dateErr: null,
                                    error: function(e) {
                                        e = e || null, c.context._errored = Boolean(e), e = e ? Object(v.p)(e) : null;
                                        var t = c.nuxt;
                                        return this && (t = this.nuxt || this.$options.nuxt), t.dateErr = Date.now(), t.err = e, r && (r.nuxt.error = e), e
                                    }
                                }
                            }, H), d.app = c, m = r ? r.next : function(e) {
                                return c.router.push(e)
                            }, r ? h = n.resolve(r.url).route : (path = Object(v.f)(n.options.base, n.options.mode), h = n.resolve(path).route), e.next = 14, Object(v.t)(c, {
                                store: d,
                                route: h,
                                next: m,
                                error: c.nuxt.error.bind(c),
                                payload: r ? r.payload : void 0,
                                req: r ? r.req : void 0,
                                res: r ? r.res : void 0,
                                beforeRenderFns: r ? r.beforeRenderFns : void 0,
                                ssrContext: r
                            });
                        case 14:
                            f("config", t), window.__NUXT__ && window.__NUXT__.state && d.replaceState(window.__NUXT__.state), e.next = 20;
                            break;
                        case 20:
                            return e.next = 23, je(c.context, f);
                        case 23:
                            e.next = 26;
                            break;
                        case 26:
                            return e.next = 29, Ke(c.context, f);
                        case 29:
                            if ("function" != typeof Je) {
                                e.next = 32;
                                break
                            }
                            return e.next = 32, Je(c.context, f);
                        case 32:
                            return e.next = 35, Ze(c.context);
                        case 35:
                            if ("function" != typeof Qe.a) {
                                e.next = 38;
                                break
                            }
                            return e.next = 38, Object(Qe.a)(c.context, f);
                        case 38:
                            return e.next = 41, rr(c.context);
                        case 41:
                            e.next = 44;
                            break;
                        case 44:
                            return e.next = 47, nr(c.context);
                        case 47:
                            return e.next = 50, ir(c.context);
                        case 50:
                            return e.next = 53, cr(c.context);
                        case 53:
                            return e.next = 56, mr(c.context);
                        case 56:
                            e.next = 59;
                            break;
                        case 59:
                            e.next = 62;
                            break;
                        case 62:
                            e.next = 65;
                            break;
                        case 65:
                            return e.next = 68, Hr(c.context, f);
                        case 68:
                            return e.next = 71, new Promise((function(e, r) {
                                n.push(c.context.route.fullPath, e, (function(t) {
                                    if (!t._isRouter) return r(t);
                                    if (2 !== t.type) return e();
                                    var l = n.afterEach(function() {
                                        var r = Object(o.a)(regeneratorRuntime.mark((function r(t, o) {
                                            return regeneratorRuntime.wrap((function(r) {
                                                for (;;) switch (r.prev = r.next) {
                                                    case 0:
                                                        return r.next = 3, Object(v.j)(t);
                                                    case 3:
                                                        c.context.route = r.sent, c.context.params = t.params || {}, c.context.query = t.query || {}, l(), e();
                                                    case 8:
                                                    case "end":
                                                        return r.stop()
                                                }
                                            }), r)
                                        })));
                                        return function(e, t) {
                                            return r.apply(this, arguments)
                                        }
                                    }())
                                }))
                            }));
                        case 71:
                            return e.abrupt("return", {
                                store: d,
                                app: c,
                                router: n
                            });
                        case 72:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        "use strict";
        r.a = {}
    }, , , , , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        "use strict";
        t(55), t(22), t(35), t(50), t(49), t(16), t(7), t(23), t(27), t(30), t(18), t(17), t(34), t(40), t(26);
        var o = t(0);

        function n(e, r) {
            var t;
            if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                if (Array.isArray(e) || (t = function(e, r) {
                        if (!e) return;
                        if ("string" == typeof e) return l(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === t && e.constructor && (t = e.constructor.name);
                        if ("Map" === t || "Set" === t) return Array.from(e);
                        if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return l(e, r)
                    }(e)) || r && e && "number" == typeof e.length) {
                    t && (e = t);
                    var i = 0,
                        o = function() {};
                    return {
                        s: o,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: o
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var n, d = !0,
                c = !1;
            return {
                s: function() {
                    t = e[Symbol.iterator]()
                },
                n: function() {
                    var e = t.next();
                    return d = e.done, e
                },
                e: function(e) {
                    c = !0, n = e
                },
                f: function() {
                    try {
                        d || null == t.return || t.return()
                    } finally {
                        if (c) throw n
                    }
                }
            }
        }

        function l(e, r) {
            (null == r || r > e.length) && (r = e.length);
            for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
            return t
        }
        var d = window.requestIdleCallback || function(e) {
                var r = Date.now();
                return setTimeout((function() {
                    e({
                        didTimeout: !1,
                        timeRemaining: function() {
                            return Math.max(0, 50 - (Date.now() - r))
                        }
                    })
                }), 1)
            },
            c = window.cancelIdleCallback || function(e) {
                clearTimeout(e)
            },
            m = window.IntersectionObserver && new window.IntersectionObserver((function(e) {
                e.forEach((function(e) {
                    var r = e.intersectionRatio,
                        link = e.target;
                    r <= 0 || !link.__prefetch || link.__prefetch()
                }))
            }));
        r.a = {
            name: "NuxtLink",
            extends: o.a.component("RouterLink"),
            props: {
                prefetch: {
                    type: Boolean,
                    default: !0
                },
                noPrefetch: {
                    type: Boolean,
                    default: !1
                }
            },
            mounted: function() {
                this.prefetch && !this.noPrefetch && (this.handleId = d(this.observe, {
                    timeout: 2e3
                }))
            },
            beforeDestroy: function() {
                c(this.handleId), this.__observed && (m.unobserve(this.$el), delete this.$el.__prefetch)
            },
            methods: {
                observe: function() {
                    m && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), m.observe(this.$el), this.__observed = !0)
                },
                shouldPrefetch: function() {
                    return this.getPrefetchComponents().length > 0
                },
                canPrefetch: function() {
                    var e = navigator.connection;
                    return !(this.$nuxt.isOffline || e && ((e.effectiveType || "").includes("2g") || e.saveData))
                },
                getPrefetchComponents: function() {
                    return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(e) {
                        return e.components.default
                    })).filter((function(e) {
                        return "function" == typeof e && !e.options && !e.__prefetched
                    }))
                },
                prefetchLink: function() {
                    if (this.canPrefetch()) {
                        m.unobserve(this.$el);
                        var e, r = n(this.getPrefetchComponents());
                        try {
                            for (r.s(); !(e = r.n()).done;) {
                                var t = e.value,
                                    o = t();
                                o instanceof Promise && o.catch((function() {})), t.__prefetched = !0
                            }
                        } catch (e) {
                            r.e(e)
                        } finally {
                            r.f()
                        }
                    }
                }
            }
        }
    }, , , function(e, r, t) {
        "use strict";
        t.r(r);
        var o = {
                name: "LanguageSwitcher",
                methods: {
                    closeSwitcher: function() {
                        this.$parent.$data.switcherVisible = !1
                    }
                },
                beforeDestroy: function() {
                    window.removeEventListener("keydown", this.listener)
                },
                mounted: function() {
                    var e = this;
                    this.listener = window.addEventListener("keydown", (function(r) {
                        "escape" == r.key.toLowerCase() && e.closeSwitcher()
                    }))
                }
            },
            n = t(9),
            component = Object(n.a)(o, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("div", [t("div", {
                    staticClass: "languages-container",
                    on: {
                        click: e.closeSwitcher
                    }
                }, [t("div", {
                    staticClass: "languages-list"
                }, e._l(e.$root.$data.i18nLanguageList, (function(r, i) {
                    return t("button", {
                        key: "Lang" + i,
                        staticClass: "languages-list__item",
                        class: {
                            active: e.getCurrentLanguage() === r
                        },
                        on: {
                            click: function(t) {
                                return e.setLanguage(r)
                            }
                        }
                    }, [e._v("\n\t\t\t\t" + e._s(e.$t("header.language", r)) + "\n\t\t\t")])
                })), 0), e._v(" "), t("a", {
                    staticClass: "languages-container__close",
                    on: {
                        click: e.closeSwitcher
                    }
                }, [t("i", {
                    staticClass: "fa-times fas"
                })])])])
            }), [], !1, null, null, null);
        r.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        "use strict";
        (function(e) {
            t(44), t(22), t(7), t(26), t(15), t(128);
            var o = t(0),
                n = t(122);

            function l() {
                var e = t(275),
                    r = {};
                return e.keys().forEach((function(t) {
                    var o = t.match(/([A-Za-z0-9-_]+)\./i);
                    if (o && o.length > 1) {
                        var n = o[1];
                        r[n] = e(t)
                    }
                })), r
            }
            o.a.use(n.a), r.a = function(r) {
                var t = r.app;
                r.store;
                t.i18n = new n.a({
                    locale: (e.env.VUE_APP_I18N_LOCALE, window.navigator.language),
                    fallbackLocale: "en",
                    messages: l()
                }), t.i18n.path = function(link) {
                    return t.i18n.locale === t.i18n.fallbackLocale ? "/".concat(link) : "/".concat(t.i18n.locale, "/").concat(link)
                }
            }
        }).call(this, t(118))
    }, , , , , , , , , function(e, r, t) {
        "use strict";
        t.r(r);
        t(44), t(55);
        var o = {
                name: "Navigation",
                props: ["noLinks", "yqHaKiGCKl", "href", "target"],
                data: function() {
                    return {
                        hovered: !1,
                        pageLoad: !1,
                        cLEszRMQAH: 5,
                        mobileMenuActive: !1,
                        isMobile: !1,
                        isStaff: !1,
                        contributors: [],
                        categories: [{
                            logo: "cart-arrow-down",
                            route: "store",
                            string: "header.store"
                        }, {
                            logo: "download",
                            route: "downloads",
                            string: "header.downloads"
                        }, {
                            logo: "hands-helping",
                            route: "contributors",
                            string: "header.contributors"
                        }]
                    }
                },
                methods: {
                    open: function(e) {
                        window.open(e, this.$props.target).focus(), this.$nuxt.setLayout("default")
                    },
                    avatarify: function() {
                        return this.$auth && this.$auth.loggedIn ? this.$auth && this.$auth.user.avatar ? "https://cdn.discordapp.com/avatars/".concat(this.$auth.user.id, "/").concat(this.$auth.user.avatar) : void 0 : ""
                    },
                    appear: function() {
                        var e = this;
                        this.pageLoad = !0, this.$anime.timeline({
                            duration: 500,
                            delay: this.$anime.stagger(100),
                            opacity: [0, 1],
                            easing: "easeOutExpo",
                            begin: function() {
                                return e.$refs.header.classList.remove("invisible")
                            }
                        }).add({
                            targets: "#links a",
                            translateY: [-200, 0]
                        }, 0).add({
                            targets: this.$refs.headerLogo,
                            translateX: [-400, 0]
                        }, 0).add({
                            targets: this.$refs.hamburger,
                            translateX: [100, 0]
                        }, 0)
                    }
                },
                mounted: function() {
                    var e = this;
                    this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
                    var r = setInterval((function() {
                        e.yqHaKiGCKl && (e.cLEszRMQAH--, 0 === e.cLEszRMQAH && clearInterval(r))
                    }), 1e3);
                    this.$auth.loggedIn && this.$axios("/v2/credits/".concat(this.$auth.user.id)).then((function(r) {
                        var data = r.data;
                        if (data.userId) {
                            -1 !== ["606270745299124235", "493135149274365975", "691382096878370837", "673681900476432387", "673682511288598575", "616646805907832833", "691393583189721088", "691396820236107837", "691386502566903850", "548518356324581377", "673683121971134505", "691384256672563332", "514546359865442304", "526734093560315925", "566417964820070421", "630445337143935009"].indexOf(data.roleId) ? e.isStaff = !0 : e.isStaff = !1
                        }
                    })).catch((function() {}))
                }
            },
            n = (t(244), t(9)),
            component = Object(n.a)(o, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("transition", {
                    attrs: {
                        appear: ""
                    },
                    on: {
                        "after-appear": e.appear
                    }
                }, [t("div", [t("div", {
                    ref: "header",
                    staticClass: "navbar",
                    class: e.pageLoad ? null : "invisible"
                }, [t("div", {
                    ref: "headerLogo",
                    staticClass: "logoWrapper"
                }, [t("nuxt-link", {
                    attrs: {
                        to: "/",
                        tag: "h1"
                    }
                }, [e._v("PreMiD")]), e._v(" "), t("transition", {
                    attrs: {
                        name: "pop"
                    }
                }, [e.isMobile || e.$store.state.extension.extensionInstalled ? e._e() : t("div", {
                    directives: [{
                        name: "tippy",
                        rawName: "v-tippy",
                        value: {
                            content: e.$t("store.message.error")
                        },
                        expression: "{\n\t\t\t\t\t\t\tcontent: $t('store.message.error')\n\t\t\t\t\t\t}"
                    }],
                    staticClass: "status"
                }, [t("i", {
                    staticClass: "fa-exclamation fas",
                    on: {
                        click: function(r) {
                            return e.$router.push("/downloads#ext-downloads")
                        }
                    }
                })])])], 1), e._v(" "), e.noLinks ? e._e() : t("div", {
                    staticClass: "links"
                }, e._l(e.categories, (function(r) {
                    return t("nuxt-link", {
                        key: r.route,
                        ref: "headerLink",
                        refInFor: !0,
                        attrs: {
                            to: "/" + r.route
                        }
                    }, [t("span", {
                        staticClass: "round-icon"
                    }, [t("i", {
                        class: "fa-" + r.logo + " fas"
                    })]), e._v(" "), t("p", [e._v(e._s(e.$t(r.string)))])])
                })), 1), e._v(" "), e.yqHaKiGCKl ? t("div", {
                    staticClass: "links"
                }, [0 === e.cLEszRMQAH ? t("a", {
                    staticClass: "navbar__item",
                    on: {
                        click: function(r) {
                            return e.$nuxt.setLayout("default")
                        }
                    }
                }, [t("span", {
                    staticClass: "round-icon"
                }, [t("i", {
                    class: "fa-backward fas"
                })]), e._v(" "), t("p", [e._v(e._s(e.$t("downloads.button.back")))])]) : e._e(), e._v(" "), t("a", {
                    staticClass: "navbar__item",
                    on: {
                        click: function(r) {
                            0 === e.cLEszRMQAH && e.open(e.$props.href)
                        }
                    }
                }, [t("span", {
                    staticClass: "round-icon"
                }, [t("i", {
                    class: "fa-forward fas"
                })]), e._v(" "), t("p", {
                    domProps: {
                        textContent: e._s(0 === e.cLEszRMQAH ? e.$t("downloads.button.skip") : e.cLEszRMQAH)
                    }
                })])]) : e._e(), e._v(" "), t("div", {
                    ref: "hamburger",
                    staticClass: "hamburger",
                    on: {
                        click: function(r) {
                            e.mobileMenuActive = !e.mobileMenuActive
                        }
                    }
                }, [e.mobileMenuActive ? t("i", {
                    staticClass: "fa-times fas"
                }) : t("i", {
                    staticClass: "fa-bars fas"
                })])]), e._v(" "), t("transition", {
                    attrs: {
                        name: "slide-down"
                    }
                }, [e.mobileMenuActive ? t("div", {
                    staticClass: "mobileLinks",
                    on: {
                        click: function(r) {
                            e.mobileMenuActive = !e.mobileMenuActive
                        }
                    }
                }, e._l(e.categories, (function(r) {
                    return t("nuxt-link", {
                        key: r.route,
                        attrs: {
                            "active-class": "mobile-active",
                            to: "/" + r.route
                        }
                    }, [t("span", [t("i", {
                        class: "fas fa-" + r.logo
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("header." + r.route)) + "\n\t\t\t\t\t")])])
                })), 1) : e._e()])], 1)])
            }), [], !1, null, "3726ca2b", null);
        r.default = component.exports
    }, , function(e, r, t) {
        "use strict";
        t.r(r);
        var o = t(2),
            n = (t(33), t(7), t(55), t(15), t(54), t(60), {
                data: function() {
                    return {
                        extensionInstalled: !0
                    }
                },
                mounted: function() {
                    var e = this;
                    return Object(o.a)(regeneratorRuntime.mark((function r() {
                        var t;
                        return regeneratorRuntime.wrap((function(r) {
                            for (;;) switch (r.prev = r.next) {
                                case 0:
                                    return e.$store.commit("presences/initializeLikedPresences", localStorage), t = new Promise((function(e, r) {
                                        setTimeout((function() {
                                            e("true" == document.getElementById("app").getAttribute("extension-ready"))
                                        }), 500)
                                    })), r.next = 4, t.then((function(r) {
                                        r ? e.$store.commit("extension/setInstalled", !0) : e.$store.commit("extension/setInstalled", !1)
                                    }));
                                case 4:
                                    e.$store.state.extension.extensionInstalled ? (e.extensionInstalled = !0, e.debugMessage("Extension installed, unlocking functions...")) : (e.extensionInstalled = !1, e.errorMessage("Extension not found, locking functions...")), window.addEventListener("PreMiD_GetWebisteFallback", (function(data) {
                                        e.$store.commit("presences/set", data.detail.toString().split(",")), e.debugMessage("Recieved information from Extension!")
                                    })), window.dispatchEvent(new CustomEvent("PreMiD_GetPresenceList", {}));
                                case 7:
                                case "end":
                                    return r.stop()
                            }
                        }), r)
                    })))()
                }
            });
        r.default = n
    }, function(e, r, t) {
        "use strict";
        t.r(r);
        var o = "font-weight: 800; padding: 2px 5px; color: white;",
            n = "PreMiD Website";
        r.default = {
            methods: {
                debugMessage: function(e) {
                    return console.log("%c".concat(n, "%cINFO%c ").concat(e), o + "border-radius: 25px 0 0 25px; background: #596cae;", o + "border-radius: 0 25px 25px 0; background: #5050ff;", "color: unset;")
                },
                errorMessage: function(e) {
                    return console.log("%c".concat(n, "%cERROR%c ").concat(e), o + "border-radius: 25px 0 0 25px; background: #596cae;", o + "border-radius: 0 25px 25px 0; background: #ff5050;", "color: unset;")
                },
                successMessage: function(e) {
                    return console.log("%c".concat(n, "%cSUCCESS%c ").concat(e), o + "border-radius: 25px 0 0 25px; background: #596cae;", o + "border-radius: 0 25px 25px 0; background: #50ff50; color: black;", "color: unset;")
                }
            }
        }
    }, function(e, r, t) {
        "use strict";
        t.r(r);
        t(15), t(54);
        var o = t(184),
            n = t.n(o),
            l = {
                name: "Loader",
                data: function() {
                    return {
                        loading: !1,
                        Logo: n.a
                    }
                },
                mounted: function() {},
                methods: {
                    start: function() {
                        this.loading = !0
                    },
                    finish: function() {
                        this.loading = !1
                    },
                    randomLoadingString: function() {
                        var e = this.$t("header.loader.phrases").split(";");
                        return e[Math.floor(Math.random() * e.length)]
                    }
                }
            },
            d = t(9),
            component = Object(d.a)(l, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("transition", {
                    attrs: {
                        name: "loader"
                    }
                }, [e.loading ? t("div", {
                    staticClass: "loader-container"
                }, [t("div", {
                    staticClass: "loader"
                }, [t("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": e.Logo
                    }
                }), e._v(" "), t("p", [e._v(e._s(e.randomLoadingString()))])])]) : e._e()])
            }), [], !1, null, null, null);
        r.default = component.exports
    }, function(e, r, t) {
        "use strict";
        t.r(r);
        var o = {
                name: "LanguageNotification",
                data: function() {
                    return {
                        declined: !1
                    }
                },
                created: function() {
                    "false" !== localStorage.declined && (this.declined = localStorage.declined)
                },
                methods: {
                    declineNotify: function() {
                        localStorage.declined = !0, this.declined = localStorage.declined
                    }
                }
            },
            n = t(9),
            component = Object(n.a)(o, (function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("div", e._l(e.$root.$data.i18nLanguageList, (function(r) {
                    return t("div", {
                        key: r
                    }, [e.declined || e.getBrowserLanguage() !== r || e.getCurrentLanguage() === r ? e._e() : t("div", {
                        staticClass: "language-notify__wrapper"
                    }, [t("div", {
                        staticClass: "language-notify"
                    }, [t("div", {
                        staticClass: "language-notify__content"
                    }, [t("h2", [e._v(e._s(e.$t("header.languageNotification.title", r)))]), e._v(" "), t("p", [e._v(e._s(e.$t("header.languageNotification.text", r)))])]), e._v(" "), t("div", {
                        staticClass: "language-notify__buttons"
                    }, [t("a", {
                        staticClass: "button button--sm",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(t) {
                                return e.setLanguage(r)
                            }
                        }
                    }, [e._v(e._s(e.$t("header.languageNotification.btnAccept", r)))]), e._v(" "), t("a", {
                        staticClass: "button button--sm",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(r) {
                                return e.declineNotify()
                            }
                        }
                    }, [e._v(e._s(e.$t("header.languageNotification.btnDecline", r)))])])])])])
                })), 0)
            }), [], !1, null, null, null);
        r.default = component.exports
    }, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        var content = t(245);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, t(74).default)("50924c48", content, !0, {
            sourceMap: !1
        })
    }, function(e, r, t) {
        var content = t(249);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, t(74).default)("0c925f7c", content, !0, {
            sourceMap: !1
        })
    }, function(e, r, t) {
        var content = t(251);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, t(74).default)("ade0ee42", content, !0, {
            sourceMap: !1
        })
    }, , , , , , , , , , , , function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSLQodC70L7QuV8xIiBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjtmaWxsLXJ1bGU6ZXZlbm9kZH08L3N0eWxlPjwvZGVmcz48dGl0bGU+cG1kX2xvZ29fMTwvdGl0bGU+PHBhdGggZD0iTTQ1OS4xNywxMDVINTIuODNhMzAuMzUsMzAuMzUsMCwwLDAtMzAuMzQsMzAuMzRWMzc2LjY2QTMwLjM1LDMwLjM1LDAsMCwwLDUyLjgzLDQwN0g0NTkuMTdhMzAuMzUsMzAuMzUsMCwwLDAsMzAuMzQtMzAuMzRWMTM1LjM0QTMwLjM1LDMwLjM1LDAsMCwwLDQ1OS4xNywxMDVabS0xODUsOTQuNGExMy45MywxMy45MywwLDAsMSw5LjktNC4xMWg5MC4yOWExNCwxNCwwLDAsMSwwLDI4SDI4NGExNCwxNCwwLDAsMS05LjktMjMuOTFabS02My42NCw2My4xMUw5Mi4xNCwzMzAuODNhNy41MSw3LjUxLDAsMCwxLTExLjI3LTYuNTFWMTg3LjY4YTcuNTEsNy41MSwwLDAsMSwxMS4yNy02LjUxbDExOC4zNCw2OC4zMkE3LjUyLDcuNTIsMCwwLDEsMjEwLjQ4LDI2Mi41MVpNNDQxLjgxLDMxMi42YTEzLjkzLDEzLjkzLDAsMCwxLTkuOSw0LjExSDI4NGExNCwxNCwwLDAsMSwwLTI4SDQzMS45MWExNCwxNCwwLDAsMSw5LjksMjMuOTFabTAtNDYuN2ExMy45MywxMy45MywwLDAsMS05LjksNC4xMUgyODRhMTQsMTQsMCwwLDEsMC0yOEg0MzEuOTFhMTQsMTQsMCwwLDEsOS45LDIzLjkxWiIgY2xhc3M9ImNscy0xIi8+PC9zdmc+"
    }, , , , , , , , , function(e, r, t) {
        "use strict";
        var o = t(2),
            n = (t(33), t(7), t(55), t(0)),
            l = t(1),
            d = window.__NUXT__;

        function c() {
            if (!this._hydrated) return this.$fetch()
        }

        function m() {
            if ((e = this).$vnode && e.$vnode.elm && e.$vnode.elm.dataset && e.$vnode.elm.dataset.fetchKey) {
                var e;
                this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                var data = d.fetch[this._fetchKey];
                if (data && data._error) this.$fetchState.error = data._error;
                else
                    for (var r in data) n.a.set(this.$data, r, data[r])
            }
        }

        function h() {
            var e = this;
            return this._fetchPromise || (this._fetchPromise = f.call(this).then((function() {
                delete e._fetchPromise
            }))), this._fetchPromise
        }

        function f() {
            return y.apply(this, arguments)
        }

        function y() {
            return (y = Object(o.a)(regeneratorRuntime.mark((function e() {
                var r, t, o, n = this;
                return regeneratorRuntime.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, r = null, t = Date.now(), e.prev = 6, e.next = 9, this.$options.fetch.call(this);
                        case 9:
                            e.next = 15;
                            break;
                        case 11:
                            e.prev = 11, e.t0 = e.catch(6), r = Object(l.p)(e.t0);
                        case 15:
                            if (!((o = this._fetchDelay - (Date.now() - t)) > 0)) {
                                e.next = 19;
                                break
                            }
                            return e.next = 19, new Promise((function(e) {
                                return setTimeout(e, o)
                            }));
                        case 19:
                            this.$fetchState.error = r, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                return n.$nuxt.nbFetching--
                            }));
                        case 23:
                        case "end":
                            return e.stop()
                    }
                }), e, this, [
                    [6, 11]
                ])
            })))).apply(this, arguments)
        }
        r.a = {
            beforeCreate: function() {
                Object(l.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, n.a.util.defineReactive(this, "$fetchState", {
                    pending: !1,
                    error: null,
                    timestamp: Date.now()
                }), this.$fetch = h.bind(this), Object(l.a)(this, "created", m), Object(l.a)(this, "beforeMount", c))
            }
        }
    }, , , , , , function(e, r, t) {
        e.exports = t.p + "img/pattern.3daab6e.png"
    }, function(e, r, t) {
        "use strict";
        t.r(r);
        t(15), t(43), t(7), t(60);
        var o = {
                data: function() {
                    return {
                        installStats: null,
                        twitterLocale: {
                            tr: "PreMiDapp_tr",
                            az: "PreMiDapp_tr",
                            de: "PreMiDapp_de",
                            nl: "PreMiDapp_nl",
                            pt: "PreMiDapp_pt",
                            pt_BR: "PreMiDapp_pt"
                        }
                    }
                },
                mounted: function() {
                    var e = this;
                    this.$graphql("\n\t\t\t{\n\t\t\tscience {\n\t\t\t\tusers\n\t\t\t}\n\t\t}").then((function(data) {
                        e.installStats = data.science.users.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                    })).catch((function() {
                        return e.installStats = 0
                    }))
                }
            },
            n = (t(248), t(9)),
            component = Object(n.a)(o, (function() {
                var e = this,
                    r = e.$createElement,
                    o = e._self._c || r;
                return o("div", {
                    staticClass: "footer"
                }, [o("div", {
                    staticClass: "footer-grid"
                }, [o("div", {
                    staticClass: "grid__section"
                }, [o("p", {
                    staticClass: "section__title",
                    domProps: {
                        textContent: e._s(e.$t("footer.usercount.heading"))
                    }
                }), e._v(" "), o("div", {
                    staticClass: "section__promo"
                }, [o("p", {
                    domProps: {
                        textContent: e._s(e.$t("footer.usercount.message", [null !== e.installStats ? e.installStats : "..."]))
                    }
                }), e._v(" "), o("nuxt-link", {
                    staticClass: "button",
                    attrs: {
                        replace: "",
                        to: "/downloads"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.usercount.button"))
                    }
                })], 1)]), e._v(" "), o("div", {
                    staticClass: "grid__section"
                }, [o("p", {
                    staticClass: "section__title"
                }, [e._v("\n\t\t\t\t" + e._s(e.$t("footer.partners.heading")) + "\n\t\t\t\t"), o("i", {
                    directives: [{
                        name: "tippy",
                        rawName: "v-tippy",
                        value: {
                            content: e.$t("footer.partners.more")
                        },
                        expression: "{ content: $t('footer.partners.more') }"
                    }],
                    staticClass: "fas fa-external-link-square-alt partner-more",
                    on: {
                        click: function(r) {
                            return e.$router.push("/partners")
                        }
                    }
                })]), e._v(" "), o("div", {
                    staticClass: "section__promo"
                }, [o("a", {
                    staticClass: "partner-logo",
                    attrs: {
                        href: "https://installbuilder.bitrock.com/"
                    }
                }, [o("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": t(246)
                    }
                })]), e._v(" "), o("a", {
                    staticClass: "partner-logo",
                    attrs: {
                        href: "https://statuspage.io/"
                    }
                }, [o("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": t(247)
                    }
                })]), e._v(" "), o("a", {
                    staticClass: "partner-logo",
                    attrs: {
                        href: "https://www.crowdin.com/"
                    }
                }, [o("img", {
                    directives: [{
                        name: "lazy-load",
                        rawName: "v-lazy-load"
                    }],
                    attrs: {
                        "data-src": t(201)
                    }
                })])])]), e._v(" "), o("div", {
                    staticClass: "grid__section friendly"
                }, [o("p", {
                    staticClass: "section__title"
                }, [e._v(e._s(e.$t("footer.followUs.heading")))]), e._v(" "), o("div", {
                    staticClass: "section__promo"
                }, [o("a", {
                    staticClass: "socials",
                    attrs: {
                        href: "https://twitter.com/" + (e.twitterLocale[e._i18n.locale] || "PreMiDapp"),
                        target: "_blank"
                    }
                }, [o("i", {
                    staticClass: "fab fa-twitter"
                }), e._v(" Twitter\n\t\t\t\t")]), e._v(" "), e._m(0), e._v(" "), e._m(1)])]), e._v(" "), o("div", {
                    staticClass: "grid__section"
                }, [o("p", {
                    staticClass: "section__title",
                    domProps: {
                        textContent: e._s(e.$t("footer.supportus.heading"))
                    }
                }), e._v(" "), o("div", [o("a", {
                    attrs: {
                        href: "https://patreon.com/timeraa/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.supportus.donate"))
                    }
                }), e._v(" "), o("a", {
                    attrs: {
                        href: "https://github.com/PreMiD/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.supportus.contribute"))
                    }
                }), e._v(" "), o("a", {
                    attrs: {
                        href: "https://translate.premid.app/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.supportus.translate"))
                    }
                }), e._v(" "), o("a", {
                    attrs: {
                        href: "/jobs"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.supportus.jobs"))
                    }
                })])]), e._v(" "), o("div", {
                    staticClass: "grid__section friendly"
                }, [o("p", {
                    staticClass: "section__title",
                    domProps: {
                        textContent: e._s(e.$t("footer.help.information"))
                    }
                }), e._v(" "), o("div", [o("a", {
                    attrs: {
                        href: "https://github.com/PreMiD/"
                    }
                }, [e._v("GitHub")]), e._v(" "), o("nuxt-link", {
                    attrs: {
                        to: "/cookies"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.help.information.cookies"))
                    }
                }), e._v(" "), o("nuxt-link", {
                    attrs: {
                        to: "/privacy"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.help.information.privacy"))
                    }
                }), e._v(" "), o("nuxt-link", {
                    attrs: {
                        to: "/tos"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.help.information.terms"))
                    }
                })], 1)]), e._v(" "), o("div", {
                    staticClass: "grid__section"
                }, [o("p", {
                    staticClass: "section__title",
                    domProps: {
                        textContent: e._s(e.$t("footer.more.heading"))
                    }
                }), e._v(" "), o("div", [o("a", {
                    attrs: {
                        href: "https://discord.premid.app"
                    }
                }, [e._v("Discord")]), e._v(" "), o("a", {
                    attrs: {
                        href: "https://docs.premid.app/troubleshooting/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.help.troubleshooting"))
                    }
                }), e._v(" "), o("a", {
                    attrs: {
                        href: "https://docs.premid.app/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.developers.documentation"))
                    }
                }), e._v(" "), o("a", {
                    attrs: {
                        href: "https://status.premid.app/"
                    },
                    domProps: {
                        textContent: e._s(e.$t("footer.more.status"))
                    }
                })])])]), e._v(" "), o("div", {
                    staticClass: "footer-copyright"
                }, [o("p", {
                    domProps: {
                        innerHTML: e._s(e.$t("footer.copyright.line1", {
                            0: "<i class='far fa-copyright'></i> " + (new Date).getFullYear() + "  PreMiD",
                            1: "<a class='hover-effect' href='https://github.com/Timeraa/' target='_blank'>Timeraa</a>"
                        }))
                    }
                }), e._v(" "), o("p", {
                    domProps: {
                        innerHTML: e._s(e.$t("footer.copyright.line2", {
                            0: "\n\t\t\t<a class='hover-effect' href='https://eggsy.xyz/' target='_blank'>EGGSY</a> &\n\t\t\t<a class='hover-effect' href='https://github.com/TheDropX/' target='_blank'>TheDrop.</a>"
                        }))
                    }
                })])])
            }), [function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("a", {
                    staticClass: "socials",
                    attrs: {
                        href: "https://facebook.com/PreMiDApp",
                        target: "_blank"
                    }
                }, [t("i", {
                    staticClass: "fab fa-facebook-square"
                }), e._v(" Facebook\n\t\t\t\t")])
            }, function() {
                var e = this,
                    r = e.$createElement,
                    t = e._self._c || r;
                return t("a", {
                    staticClass: "socials",
                    attrs: {
                        href: "https://instagram.com/PreMiDapp",
                        target: "_blank"
                    }
                }, [t("i", {
                    staticClass: "fab fa-instagram"
                }), e._v(" Instagram\n\t\t\t\t")])
            }], !1, null, "386ccbc0", null);
        r.default = component.exports
    }, function(e, r, t) {
        e.exports = t.p + "img/crowdin.70418db.png"
    }, , , , function(e, r, t) {
        t(206), e.exports = t(207)
    }, , function(e, r, t) {
        "use strict";
        t.r(r),
            function(e) {
                t(23), t(30), t(17), t(34), t(40);
                var r = t(32),
                    o = t(2),
                    n = (t(109), t(213), t(219), t(220), t(33), t(27), t(7), t(22), t(16), t(28), t(35), t(50), t(44), t(49), t(18), t(26), t(55), t(0)),
                    l = t(181),
                    d = t(69),
                    c = t(1),
                    m = t(42),
                    h = t(193),
                    f = t(93);

                function y(e, r) {
                    var t;
                    if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (t = function(e, r) {
                                if (!e) return;
                                if ("string" == typeof e) return k(e, r);
                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                "Object" === t && e.constructor && (t = e.constructor.name);
                                if ("Map" === t || "Set" === t) return Array.from(e);
                                if ("Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return k(e, r)
                            }(e)) || r && e && "number" == typeof e.length) {
                            t && (e = t);
                            var i = 0,
                                o = function() {};
                            return {
                                s: o,
                                n: function() {
                                    return i >= e.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: e[i++]
                                    }
                                },
                                e: function(e) {
                                    throw e
                                },
                                f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var n, l = !0,
                        d = !1;
                    return {
                        s: function() {
                            t = e[Symbol.iterator]()
                        },
                        n: function() {
                            var e = t.next();
                            return l = e.done, e
                        },
                        e: function(e) {
                            d = !0, n = e
                        },
                        f: function() {
                            try {
                                l || null == t.return || t.return()
                            } finally {
                                if (d) throw n
                            }
                        }
                    }
                }

                function k(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var i = 0, t = new Array(r); i < r; i++) t[i] = e[i];
                    return t
                }
                n.a.__nuxt__fetch__mixin__ || (n.a.mixin(h.a), n.a.__nuxt__fetch__mixin__ = !0), n.a.component(f.a.name, f.a), n.a.component("NLink", f.a), e.fetch || (e.fetch = l.a);
                var w, v, j = [],
                    x = window.__NUXT__ || {},
                    P = x.config || {};
                P._app && (t.p = Object(c.v)(P._app.cdnURL, P._app.assetsPath)), Object.assign(n.a.config, {
                    silent: !0,
                    performance: !1
                });
                var _ = n.a.config.errorHandler || console.error;

                function D(e, r, t) {
                    for (var o = function(component) {
                            var e = function(component, e) {
                                if (!component || !component.options || !component.options[e]) return {};
                                var option = component.options[e];
                                if ("function" == typeof option) {
                                    for (var r = arguments.length, t = new Array(r > 2 ? r - 2 : 0), o = 2; o < r; o++) t[o - 2] = arguments[o];
                                    return option.apply(void 0, t)
                                }
                                return option
                            }(component, "transition", r, t) || {};
                            return "string" == typeof e ? {
                                name: e
                            } : e
                        }, n = t ? Object(c.g)(t) : [], l = Math.max(e.length, n.length), d = [], m = function(i) {
                            var r = Object.assign({}, o(e[i])),
                                t = Object.assign({}, o(n[i]));
                            Object.keys(r).filter((function(e) {
                                return void 0 !== r[e] && !e.toLowerCase().includes("leave")
                            })).forEach((function(e) {
                                t[e] = r[e]
                            })), d.push(t)
                        }, i = 0; i < l; i++) m(i);
                    return d
                }

                function z(e, r, t) {
                    return M.apply(this, arguments)
                }

                function M() {
                    return (M = Object(o.a)(regeneratorRuntime.mark((function e(r, t, o) {
                        var n, l, d, m, h = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (this._routeChanged = Boolean(w.nuxt.err) || t.name !== r.name, this._paramChanged = !this._routeChanged && t.path !== r.path, this._queryChanged = !this._paramChanged && t.fullPath !== r.fullPath, this._diffQuery = this._queryChanged ? Object(c.i)(r.query, t.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), e.prev = 5, !this._queryChanged) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 9, Object(c.r)(r, (function(e, r) {
                                        return {
                                            Component: e,
                                            instance: r
                                        }
                                    }));
                                case 9:
                                    n = e.sent, n.some((function(e) {
                                        var o = e.Component,
                                            n = e.instance,
                                            l = o.options.watchQuery;
                                        return !0 === l || (Array.isArray(l) ? l.some((function(e) {
                                            return h._diffQuery[e]
                                        })) : "function" == typeof l && l.apply(n, [r.query, t.query]))
                                    })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                case 12:
                                    o(), e.next = 26;
                                    break;
                                case 15:
                                    if (e.prev = 15, e.t0 = e.catch(5), l = e.t0 || {}, d = l.statusCode || l.status || l.response && l.response.status || 500, m = l.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(m)) {
                                        e.next = 23;
                                        break
                                    }
                                    return window.location.reload(!0), e.abrupt("return");
                                case 23:
                                    this.error({
                                        statusCode: d,
                                        message: m
                                    }), this.$nuxt.$emit("routeChanged", r, t, l), o();
                                case 26:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [5, 15]
                        ])
                    })))).apply(this, arguments)
                }

                function S(e, r) {
                    return x.serverRendered && r && Object(c.b)(e, r), e._Ctor = e, e
                }

                function L(e) {
                    return Object(c.d)(e, function() {
                        var e = Object(o.a)(regeneratorRuntime.mark((function e(r, t, o, n, l) {
                            var d;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if ("function" != typeof r || r.options) {
                                            e.next = 4;
                                            break
                                        }
                                        return e.next = 3, r();
                                    case 3:
                                        r = e.sent;
                                    case 4:
                                        return d = S(Object(c.s)(r), x.data ? x.data[l] : null), o.components[n] = d, e.abrupt("return", d);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r, t, o, n, l) {
                            return e.apply(this, arguments)
                        }
                    }())
                }

                function A(e, r, t) {
                    var o = this,
                        n = [],
                        l = !1;
                    if (void 0 !== t && (n = [], (t = Object(c.s)(t)).options.middleware && (n = n.concat(t.options.middleware)), e.forEach((function(e) {
                            e.options.middleware && (n = n.concat(e.options.middleware))
                        }))), n = n.map((function(e) {
                            return "function" == typeof e ? e : ("function" != typeof d.a[e] && (l = !0, o.error({
                                statusCode: 500,
                                message: "Unknown middleware " + e
                            })), d.a[e])
                        })), !l) return Object(c.o)(n, r)
                }

                function I(e, r, t) {
                    return C.apply(this, arguments)
                }

                function C() {
                    return (C = Object(o.a)(regeneratorRuntime.mark((function e(r, t, n) {
                        var l, d, h, f, k, v, x, P, _, z, M, S, L, I, C, N = this;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 2:
                                    return !1, r === t ? (j = [], !0) : (l = [], j = Object(c.g)(t, l).map((function(e, i) {
                                        return Object(c.c)(t.matched[l[i]].path)(t.params)
                                    }))), d = !1, h = function(path) {
                                        t.path === path.path && N.$loading.finish && N.$loading.finish(), t.path !== path.path && N.$loading.pause && N.$loading.pause(), d || (d = !0, n(path))
                                    }, e.next = 8, Object(c.t)(w, {
                                        route: r,
                                        from: t,
                                        next: h.bind(this)
                                    });
                                case 8:
                                    if (this._dateLastError = w.nuxt.dateErr, this._hadError = Boolean(w.nuxt.err), f = [], (k = Object(c.g)(r, f)).length) {
                                        e.next = 27;
                                        break
                                    }
                                    return e.next = 15, A.call(this, k, w.context);
                                case 15:
                                    if (!d) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 17:
                                    return v = (m.a.options || m.a).layout, e.next = 20, this.loadLayout("function" == typeof v ? v.call(m.a, w.context) : v);
                                case 20:
                                    return x = e.sent, e.next = 23, A.call(this, k, w.context, x);
                                case 23:
                                    if (!d) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 25:
                                    return w.context.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", n());
                                case 27:
                                    return k.forEach((function(e) {
                                        e._Ctor && e._Ctor.options && (e.options.asyncData = e._Ctor.options.asyncData, e.options.fetch = e._Ctor.options.fetch)
                                    })), this.setTransitions(D(k, r, t)), e.prev = 29, e.next = 32, A.call(this, k, w.context);
                                case 32:
                                    if (!d) {
                                        e.next = 34;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 34:
                                    if (!w.context._errored) {
                                        e.next = 36;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 36:
                                    return "function" == typeof(P = k[0].options.layout) && (P = P(w.context)), e.next = 40, this.loadLayout(P);
                                case 40:
                                    return P = e.sent, e.next = 43, A.call(this, k, w.context, P);
                                case 43:
                                    if (!d) {
                                        e.next = 45;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 45:
                                    if (!w.context._errored) {
                                        e.next = 47;
                                        break
                                    }
                                    return e.abrupt("return", n());
                                case 47:
                                    _ = !0, e.prev = 48, z = y(k), e.prev = 50, z.s();
                                case 52:
                                    if ((M = z.n()).done) {
                                        e.next = 63;
                                        break
                                    }
                                    if ("function" == typeof(S = M.value).options.validate) {
                                        e.next = 56;
                                        break
                                    }
                                    return e.abrupt("continue", 61);
                                case 56:
                                    return e.next = 58, S.options.validate(w.context);
                                case 58:
                                    if (_ = e.sent) {
                                        e.next = 61;
                                        break
                                    }
                                    return e.abrupt("break", 63);
                                case 61:
                                    e.next = 52;
                                    break;
                                case 63:
                                    e.next = 68;
                                    break;
                                case 65:
                                    e.prev = 65, e.t0 = e.catch(50), z.e(e.t0);
                                case 68:
                                    return e.prev = 68, z.f(), e.finish(68);
                                case 71:
                                    e.next = 77;
                                    break;
                                case 73:
                                    return e.prev = 73, e.t1 = e.catch(48), this.error({
                                        statusCode: e.t1.statusCode || "500",
                                        message: e.t1.message
                                    }), e.abrupt("return", n());
                                case 77:
                                    if (_) {
                                        e.next = 80;
                                        break
                                    }
                                    return this.error({
                                        statusCode: 404,
                                        message: "This page could not be found"
                                    }), e.abrupt("return", n());
                                case 80:
                                    return e.next = 82, Promise.all(k.map(function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e(o, i) {
                                            var n, l, d, m, h, y, k, v, p;
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (o._path = Object(c.c)(r.matched[f[i]].path)(r.params), o._dataRefresh = !1, n = o._path !== j[i], N._routeChanged && n ? o._dataRefresh = !0 : N._paramChanged && n ? (l = o.options.watchParam, o._dataRefresh = !1 !== l) : N._queryChanged && (!0 === (d = o.options.watchQuery) ? o._dataRefresh = !0 : Array.isArray(d) ? o._dataRefresh = d.some((function(e) {
                                                                return N._diffQuery[e]
                                                            })) : "function" == typeof d && (L || (L = Object(c.h)(r)), o._dataRefresh = d.apply(L[i], [r.query, t.query]))), N._hadError || !N._isMounted || o._dataRefresh) {
                                                            e.next = 6;
                                                            break
                                                        }
                                                        return e.abrupt("return");
                                                    case 6:
                                                        return m = [], h = o.options.asyncData && "function" == typeof o.options.asyncData, y = Boolean(o.options.fetch) && o.options.fetch.length, k = h && y ? 30 : 45, h && ((v = Object(c.q)(o.options.asyncData, w.context)).then((function(e) {
                                                            Object(c.b)(o, e), N.$loading.increase && N.$loading.increase(k)
                                                        })), m.push(v)), N.$loading.manual = !1 === o.options.loading, y && ((p = o.options.fetch(w.context)) && (p instanceof Promise || "function" == typeof p.then) || (p = Promise.resolve(p)), p.then((function(e) {
                                                            N.$loading.increase && N.$loading.increase(k)
                                                        })), m.push(p)), e.abrupt("return", Promise.all(m));
                                                    case 14:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(r, t) {
                                            return e.apply(this, arguments)
                                        }
                                    }()));
                                case 82:
                                    d || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), n()), e.next = 99;
                                    break;
                                case 85:
                                    if (e.prev = 85, e.t2 = e.catch(29), "ERR_REDIRECT" !== (I = e.t2 || {}).message) {
                                        e.next = 90;
                                        break
                                    }
                                    return e.abrupt("return", this.$nuxt.$emit("routeChanged", r, t, I));
                                case 90:
                                    return j = [], Object(c.k)(I), "function" == typeof(C = (m.a.options || m.a).layout) && (C = C(w.context)), e.next = 96, this.loadLayout(C);
                                case 96:
                                    this.error(I), this.$nuxt.$emit("routeChanged", r, t, I), n();
                                case 99:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this, [
                            [29, 85],
                            [48, 73],
                            [50, 65, 68, 71]
                        ])
                    })))).apply(this, arguments)
                }

                function N(e, t) {
                    Object(c.d)(e, (function(e, t, o, l) {
                        return "object" !== Object(r.a)(e) || e.options || ((e = n.a.extend(e))._Ctor = e, o.components[l] = e), e
                    }))
                }

                function T(e) {
                    var r = Boolean(this.$options.nuxt.err);
                    this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (r = !1);
                    var t = r ? (m.a.options || m.a).layout : e.matched[0].components.default.options.layout;
                    "function" == typeof t && (t = t(w.context)), this.setLayout(t)
                }

                function O(e) {
                    e._hadError && e._dateLastError === e.$options.nuxt.dateErr && e.error()
                }

                function B(e, r) {
                    var t = this;
                    if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                        var o = Object(c.h)(e),
                            l = Object(c.g)(e),
                            d = !1;
                        n.a.nextTick((function() {
                            o.forEach((function(e, i) {
                                if (e && !e._isDestroyed && e.constructor._dataRefresh && l[i] === e.constructor && !0 !== e.$vnode.data.keepAlive && "function" == typeof e.constructor.options.data) {
                                    var r = e.constructor.options.data.call(e);
                                    for (var t in r) n.a.set(e.$data, t, r[t]);
                                    d = !0
                                }
                            })), d && window.$nuxt.$nextTick((function() {
                                window.$nuxt.$emit("triggerScroll")
                            })), O(t)
                        }))
                    }
                }

                function E(e) {
                    window.onNuxtReadyCbs.forEach((function(r) {
                        "function" == typeof r && r(e)
                    })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(e), v.afterEach((function(r, t) {
                        n.a.nextTick((function() {
                            return e.$nuxt.$emit("routeChanged", r, t)
                        }))
                    }))
                }

                function R() {
                    return (R = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                        var t, o, l, d, m;
                        return regeneratorRuntime.wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return w = r.app, v = r.router, r.store, t = new n.a(w), o = x.layout || "default", e.next = 7, t.loadLayout(o);
                                case 7:
                                    return t.setLayout(o), l = function() {
                                        t.$mount("#__nuxt"), v.afterEach(N), v.afterEach(T.bind(t)), v.afterEach(B.bind(t)), n.a.nextTick((function() {
                                            E(t)
                                        }))
                                    }, e.next = 11, Promise.all(L(w.context.route));
                                case 11:
                                    if (d = e.sent, t.setTransitions = t.$options.nuxt.setTransitions.bind(t), d.length && (t.setTransitions(D(d, v.currentRoute)), j = v.currentRoute.matched.map((function(e) {
                                            return Object(c.c)(e.path)(v.currentRoute.params)
                                        }))), t.$loading = {}, x.error && t.error(x.error), v.beforeEach(z.bind(t)), v.beforeEach(I.bind(t)), !x.serverRendered || !Object(c.n)(x.routePath, t.context.route.path)) {
                                        e.next = 20;
                                        break
                                    }
                                    return e.abrupt("return", l());
                                case 20:
                                    return m = function() {
                                        N(v.currentRoute, v.currentRoute), T.call(t, v.currentRoute), O(t), l()
                                    }, e.next = 23, new Promise((function(e) {
                                        return setTimeout(e, 0)
                                    }));
                                case 23:
                                    I.call(t, v.currentRoute, v.currentRoute, (function(path) {
                                        if (path) {
                                            var e = v.afterEach((function(r, t) {
                                                e(), m()
                                            }));
                                            v.push(path, void 0, (function(e) {
                                                e && _(e)
                                            }))
                                        } else m()
                                    }));
                                case 24:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }
                Object(m.b)(null, x.config).then((function(e) {
                    return R.apply(this, arguments)
                })).catch(_)
            }.call(this, t(36))
    }, , , , , , , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        var content = t(234);
        content.__esModule && (content = content.default), "string" == typeof content && (content = [
            [e.i, content, ""]
        ]), content.locals && (e.exports = content.locals);
        (0, t(74).default)("7cc224cd", content, !0, {
            sourceMap: !1
        })
    }, function(e, r, t) {
        var o = t(73),
            n = t(198),
            l = t(235),
            d = t(236),
            c = t(237),
            m = t(238),
            h = t(239),
            f = t(240),
            y = t(241),
            k = t(242),
            w = t(243),
            v = t(199),
            j = o(!1),
            x = n(l),
            P = n(d),
            _ = n(c),
            D = n(m),
            z = n(h),
            M = n(f),
            S = n(y),
            L = n(k),
            A = n(w),
            I = n(v);
        j.push([e.i, '@font-face{font-family:"Discord Font";font-weight:900;src:url(' + x + ') format("woff2");font-style:normal}body,html{height:100%;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;scroll-behavior:smooth;quotes:"“" "”";font-weight:500;scrollbar-color:#111218 #191b24;scrollbar-width:thin;font-family:Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}:focus{outline:none}#app{overflow:-webkit-paged-x}.app-wrapper{display:flex;flex-direction:column;height:100%}body{padding:0;margin:0;background:#111218;color:#99aab5}.text-highlight{color:#b3aeff;background:linear-gradient(30deg,#7289da,#b3aeff);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.userpage__presences>.heading>div.contributes,.userpage__presences>.heading>div.noContributes{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.userpage__presences>.heading>div.contributes{cursor:pointer}header{z-index:10000;width:100%}.content{min-height:calc(100vh - 150px);flex:1 0 auto}h3{font-weight:600}a{position:relative;text-decoration:none;color:#7289da;cursor:pointer}::-webkit-scrollbar{width:12px}::-webkit-scrollbar-track{background:#191b24;border:none}::-webkit-scrollbar-thumb{border:4px solid #191b24;border-radius:20px;background:#111218}::-webkit-scrollbar-thumb:hover{background:#1b1e27}::-webkit-scrollbar-corner{background:transparent}footer{width:100%;position:absolute;bottom:0}img{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.hidden{visibility:hidden}.tippy-tooltip.discord-theme{background-color:#000;box-shadow:0 2px 16px 0 rgba(0,0,0,.5)}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.175,.885,.32,1.275)}.tippy-popper[x-placement^=top] .tippy-tooltip[data-animation=discord-anim]{transform-origin:center!important}.tippy-popper[x-placement^=top] .tippy-tooltip[data-animation=discord-anim][data-state=hidden]{opacity:0;transform:scale(.9) translateY(-11px)}.tippy-popper[x-placement^=top] .tippy-tooltip[data-animation=discord-anim][data-state=visible]{transform:scale(1) translateY(-11px)}.tippy-popper[x-placement^=bottom] .tippy-tooltip[data-animation=discord-anim][data-state=hidden]{opacity:0;transform:scale(.9) translateY(11px)}.tippy-popper[x-placement^=bottom] .tippy-tooltip[data-animation=discord-anim][data-state=visible]{transform:scale(1) translateY(11px)}.tippy-popper[x-placement^=top] .tippy-tooltip.discord-theme .tippy-arrow{border-top-color:#000;filter:drop-shadow(0 2px 16px 0 rgba(0,0,0,.5))}.tippy-popper[x-placement^=bottom] .tippy-tooltip.discord-theme .tippy-arrow{border-bottom-color:#000;filter:drop-shadow(0 2px 16px 0 rgba(0,0,0,.5))}.tippy-tooltip.discord-theme .tippy-content{padding:3px 5px;color:hsla(0,0%,100%,.95);font-weight:500;letter-spacing:.4px;font-size:.965em}.tippy-tooltip.discord-theme .tippy-content h2{margin:0 0 8px}.partners .carousel-3d-container .carousel-3d-slide{cursor:pointer}.page-enter-active,.page-leave-active{transition:opacity .25s}.page-enter,.page-leave-to{opacity:0}.loader-active,.loader-enter,.loader-enter-to,.loader-leave,.loader-leave-active,.loader-leave-to{z-index:999;position:fixed}.loader-enter-active,.loader-leave-active{transition:opacity .2s ease-in-out}.loader-enter,.loader-leave-to{opacity:0}.route-animation-enter-active,.route-animation-leave-active{transition:opacity .2s ease-in-out}.route-animation-enter,.route-animation-leave-to{opacity:0}.card-animation-enter-active{transition:all .2s cubic-bezier(.26,.08,0,.97)}.card-animation-leave-active{transition:all 0ms ease}.card-animation-enter,.card-animation-leave-to{transform:translateY(25%) scaleY(.85);opacity:0!important}.btn-animation-enter-active,.btn-animation-leave-active{transition:all .2s ease}.btn-animation-enter,.btn-animation-leave-to{transform:scale(0);will-change:transform}.slide-down-enter-active{position:absolute;transition:opacity .2s ease,transform .5s ease}.slide-down-leave-active{transition:opacity .3s ease,transform .5s cubic-bezier(1,.5,.8,1)}.slide-down-enter,.slide-down-leave-to{transform:translateY(-20px);opacity:0}.slide-left-enter-active{position:absolute;transition:opacity .2s ease,transform .5s ease}.slide-left-leave-active{transition:opacity .3s ease,transform .5s cubic-bezier(1,.5,.8,1)}.slide-left-enter,.slide-left-leave-to{transform:translateX(20px);opacity:0}.slide-right-enter-active{position:absolute;transition:opacity .2s ease,transform .5s ease}.slide-right-leave-active{transition:opacity .3s ease,transform .5s cubic-bezier(1,.5,.8,1)}.slide-right-enter,.slide-right-leave-to{transform:translateX(-20px);opacity:0}.fade-enter-active{position:absolute;transition:opacity .2s ease-in}.fade-leave-active{transition:opacity .3s ease-out}.fade-enter,.fade-leave-to{transition:opacity .2s ease-out;opacity:0}.pop-enter-active,.pop-leave-active{transition:all .15s;transform:scale(1)}.pop-enter,.pop-leave-to{transform:scale(0)}@-webkit-keyframes waveAnimation{0%{d:path("M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z")}50%{d:path("M655.558582,28.4898877 C500.191373,61.6062216 422.833785,83.5422763 266.940085,49.8995879 C112.480383,16.5663637 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,49.8995879 C1580.91676,-34.8808285 1438.10804,73.6768193 1148.0266,38.0019829 C857.945166,2.32714659 810.925791,-4.62644617 655.558582,28.4898877 Z")}to{d:path("M842.322034,38.0019829 C686.954825,71.1183168 623.386282,53.08497 467.492582,19.4422816 C313.032879,-13.8909426 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,76.8685643 C1512.23604,-35.3595639 1568.70222,67.4289432 1278.62078,31.7541069 C988.539347,-3.92072949 997.689243,4.88564905 842.322034,38.0019829 Z")}}@keyframes waveAnimation{0%{d:path("M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z")}50%{d:path("M655.558582,28.4898877 C500.191373,61.6062216 422.833785,83.5422763 266.940085,49.8995879 C112.480383,16.5663637 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,49.8995879 C1580.91676,-34.8808285 1438.10804,73.6768193 1148.0266,38.0019829 C857.945166,2.32714659 810.925791,-4.62644617 655.558582,28.4898877 Z")}to{d:path("M842.322034,38.0019829 C686.954825,71.1183168 623.386282,53.08497 467.492582,19.4422816 C313.032879,-13.8909426 84.0992497,8.02840272 0,44.7243294 L0,150.727527 L1920,150.727527 L1920,76.8685643 C1512.23604,-35.3595639 1568.70222,67.4289432 1278.62078,31.7541069 C988.539347,-3.92072949 997.689243,4.88564905 842.322034,38.0019829 Z")}}@-webkit-keyframes loaderAnimation{50%{transform:translateX(-10px)}to{transform:translateX(10px)}}@keyframes loaderAnimation{50%{transform:translateX(-10px)}to{transform:translateX(10px)}}[data-aos=sliding-down]{transform:translateY(-30px);opacity:0;transition-property:transform,opacity}[data-aos=sliding-down].aos-animate{transform:translateY(0);opacity:1}[data-aos=sliding-left]{transform:translateX(-60px) scale(1.1);opacity:0;transition-property:transform,opacity}[data-aos=sliding-left].aos-animate{transform:translateX(0) scale(1);opacity:1}[data-aos=sliding-left-2]{transform:translateX(-180px) scale(1);opacity:0;transition-property:transform,opacity}[data-aos=sliding-left-2].aos-animate{transform:translateX(0) scale(1);opacity:1}[data-aos=sliding-right]{transform:translateX(60px) scale(1.1);opacity:0;transition-property:transform,opacity}[data-aos=sliding-right].aos-animate{transform:translateX(0) scale(1);opacity:1}[data-aos=sliding-up]{transform:translateY(30px);opacity:0;transition-property:transform,opacity}[data-aos=sliding-up].aos-animate{transform:translateY(0);opacity:1}@keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@-webkit-keyframes bounce{0%,20%,50%,80%,to{transform:translateY(0)}40%{transform:translateY(-30px)}60%{transform:translateY(-15px)}}@keyframes pulseWarn{0%{box-shadow:0 0 0 0 rgba(255,255,0,.8)}70%{box-shadow:0 0 0 5px transparent}to{box-shadow:0 0 0 0 transparent}}@-webkit-keyframes pulseWarn{0%{box-shadow:0 0 0 0 rgba(255,255,0,.8)}70%{box-shadow:0 0 0 5px transparent}to{box-shadow:0 0 0 0 transparent}}.button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;padding:.8rem 3rem;border-radius:55rem;font-size:1.05em;font-weight:700;letter-spacing:.05em;background:#7289da;color:#fdfcff;cursor:pointer;display:inline-block;margin-right:.7rem;transition:all .1s cubic-bezier(.25,.46,.45,.94);box-shadow:0 3px 16px -7px rgba(17,18,24,.7);text-align:center;font-family:inherit}.button i{margin-right:2px}.button:hover{box-shadow:0 3px 22px -7px rgba(122,144,220,.7);background:#869adf}.button:active{background:#5e78d5;box-shadow:none;transition:all .1s cubic-bezier(.25,.46,.45,.94)}.button:focus{outline:none;cursor:pointer}.button--gray{background:#2a2e3c}.button--gray:hover{box-shadow:0 3px 22px -7px rgba(46,50,66,.7);background:#2e3242}.button--gray:active{box-shadow:none;background:#262936}.button--black{background:#212530}.button--black:hover{box-shadow:0 3px 22px -7px rgba(38,41,54,.7);background:#262936}.button--black:active{box-shadow:none;background:#1d202a}.button--red{background:#ff3c3c}.button--red:hover{box-shadow:0 3px 22px -7px rgba(255,70,70,.7);background:#ff4646}.button--red:active{box-shadow:none;background:#ff3232}.button--white{background:#fff}.button--white:hover{box-shadow:0 3px 22px -7px hsla(0,0%,100%,.7);background:#fff}.button--white:active{box-shadow:none;background:#fafafa}.button.button--sm{padding:.53333rem 1.86667rem;font-size:1rem}.button.button--lg{padding:1.04rem 3.64rem;font-size:1.3rem}.floating-button{position:fixed;bottom:1em;right:.5em;z-index:666}.card--feature{padding:0 2em;display:flex;min-height:800px;justify-content:space-around;align-items:center}.card--feature--beta{min-height:500px!important}.card--feature--reverse{flex-flow:row-reverse}.card--feature--alt{flex-flow:column;flex-wrap:wrap;justify-content:center}.card--feature--alt .section-container__details{width:80%}.card--feature__details{color:#c4c4c4;width:45%;margin:0 1em}.card--feature__details h1{font-size:3.5em;color:#fff}.card--feature__details p{font-size:1.7em}.card--feature__details ul{margin:0;padding:0 1.2em}.card--feature__details ul li p{font-size:1.2em;margin:.2em 0}.card--feature__promo img,.card--feature__promo video{max-width:720px;border-radius:.5em}.card--feature__promo--image1{position:relative}.vm--overlay{background-color:#000!important;opacity:.85!important}.modal{background-color:#111218!important;padding:1em}.modal .title{text-transform:uppercase}.modal .buttons{float:right}.modal .buttons .container{display:flex}.modal .buttons .btn{padding:.3rem 1rem;border-radius:.5em;font-size:14px}.modal .buttons .btn.cancel{background:rgba(36,39,45,.85)}.modal .buttons .btn.cancel:hover{background:#24272d}.modal .buttons .btn.accept{background:rgba(114,137,218,.85);margin-right:0}.modal .buttons .btn.accept:hover{background:#7289da}.store-card{width:380px;height:150px;position:relative;background:#151719;background-size:cover;box-shadow:0 4px 32px 0 rgba(9,10,10,.2);border-radius:.5rem;overflow:hidden;margin:.6em;padding:.5rem;display:flex;justify-content:flex-start;align-items:center;z-index:1;transform:translateY(0);transition:all .2s cubic-bezier(.175,.885,.32,1.275);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.store-card:hover{z-index:2}.store-card.hovered .store-card__background{transform:rotate(-10deg) scale(1.25)}.store-card .store-card__background{left:0;transition:transform .2s cubic-bezier(.175,.885,.32,1.275);position:absolute;width:100%;z-index:-1;transform:scale(1.05)}.store-card .store-card__gradient{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#002f4b,#dc4225);opacity:.85;z-index:1}.store-card .store-card__overlay{position:absolute;top:8px;right:0;bottom:0;z-index:111}.store-card .store-card__service-logo{padding:0 1em;margin:auto 0;z-index:2}.store-card .store-card__service-logo img{max-width:64px;max-height:64px;border-radius:5px;filter:drop-shadow(0 4px .75rem rgba(0,0,0,.2))}.store-card .store-card__service-info{filter:drop-shadow(0 4px .75rem rgba(0,0,0,.4));z-index:2;color:#fff;margin:auto auto auto 0;padding:0 1em}.store-card .store-card__service-info a{color:#fff}.store-card .store-card__service-info h2{font-size:1.3em;margin:0;text-overflow:ellipsis;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;display:-webkit-box}.store-card .store-card__service-info h2 .fa-stack{font-size:.45em}.store-card .store-card__service-info p{font-size:12px;color:hsla(0,0%,100%,.8);margin:0;font-weight:500}.store-card .store-card__service-info .store-card__desc{opacity:1;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical;display:-webkit-box;-webkit-line-clamp:2;margin-top:8px;font-size:12px;color:hsla(0,0%,100%,.8);transition:all .2s ease}.store-card .store-card__service-info .store-card__buttons{margin-top:10px;display:inline-flex}.store-card .store-card__service-info .store-card__buttons .button{width:15em;font-size:12px;white-space:nowrap;padding:.8rem 0}.store-card .store-card__service-info .store-card__buttons .button i{margin-right:unset}.store-card .store-card__service-info .store-card__buttons .button.button--like{width:unset;padding:1em 1.5em}.store-card .store-card__service-info .store-card__warning{font-weight:600;font-size:12px;color:hsla(0,0%,100%,.8);margin:10px 0;border-radius:4px;padding:10px;box-shadow:0 3px 26px -5px rgba(0,0,0,.5);background:rgba(0,0,0,.6)}.dl-container__cards{display:flex;max-width:1600px;margin:0 auto;justify-content:center;align-items:normal;position:relative}.dl-container__cards .cards__card{margin:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;z-index:1;position:relative;width:180px;overflow:hidden;text-align:center;background:#383d42;color:#fff;border-radius:6px;padding:10px 26px;transition:all .2s ease;cursor:pointer;justify-content:space-between;align-content:center;align-items:center}.dl-container__cards .cards__card .card__content h3{font-size:1.2em;font-weight:700}.dl-container__cards .cards__card .card__content .platform-warning{color:#ed6347;text-shadow:0 0 12px rgba(237,99,71,.5);margin-left:3px;font-size:17px;transition:all .2s ease}.dl-container__cards .cards__card .card__content .platform-warning.linux{color:#f1c40f;text-shadow:0 0 12px rgba(241,196,15,.5)}.dl-container__cards .cards__card .card__icon{font-size:2.5em;vertical-align:middle}.dl-container__cards .cards__card.card_clickable{cursor:pointer}.dl-container__cards .cards__card.current-platform{box-shadow:0 4px 40px 0 rgba(114,137,218,.2)}.dl-container__cards .cards__card.current-platform,.dl-container__cards .cards__card:hover{background:#7289da}.dl-container__cards .cards__card.current-platform .platform-warning,.dl-container__cards .cards__card.current-platform .platform-warning.linux,.dl-container__cards .cards__card:hover .platform-warning,.dl-container__cards .cards__card:hover .platform-warning.linux{color:#fff}.dl-container__cards .cards__card:hover{box-shadow:0 4px 70px 0 rgba(114,137,218,.4)}.discord-usercard{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:1em 0;border-radius:8px;position:relative;width:550px;background:#7289da}.discord-usercard *{margin:0;padding:0}.discord-usercard .usercard__header{padding:20px;display:flex;align-items:center}.discord-usercard .usercard__header .header__avatar{margin-right:20px;width:90px;height:90px;border-radius:50%;position:relative;flex-shrink:0;background-clip:padding-box;background-color:none;background-position:50%;background-size:100%}.discord-usercard .usercard__header .header__info{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.discord-usercard .usercard__header .header__info .info__nameTag{vertical-align:middle;padding-right:20px;line-height:20px;flex-wrap:wrap;display:-webkit-box}.discord-usercard .usercard__header .header__info .info__nameTag span.username{font-size:18px;font-weight:600;color:#fff}.discord-usercard .usercard__header .header__info .info__nameTag span.discriminator{font-size:14px;color:hsla(0,0%,100%,.6)}.discord-usercard .usercard__header .header__info .info__badges{margin-top:8px;flex-direction:row;flex-wrap:nowrap;justify-content:flex-start;align-items:stretch;display:flex}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper{outline:0;margin-right:6px}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge{background-repeat:no-repeat;background-size:contain;background-position:50%;cursor:pointer;width:24px;height:24px}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_hypesquad{background-image:url(' + P + ")}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_nitro{background-image:url(" + _ + ");width:28px}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_early{background-image:url(" + D + ");width:28px}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_bravery{background-image:url(" + z + ")}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_brilliance{background-image:url(" + M + ")}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_balance{background-image:url(" + S + ")}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_boost-lvl1{background-image:url(" + L + ')}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_boost-lvl2{background-image:require("../../assets/images/boost-lvl2.svg")}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_boost-lvl3{background-image:require("../../assets/images/boost-lvl3.svg")}.discord-usercard .usercard__header .header__info .info__badges .badge-wrapper .badge_boost-lvl4{background-image:require("../../assets/images/boost-lvl4.svg")}.discord-usercard .usercard__activity{background-color:rgba(0,0,0,.05)}.discord-usercard .usercard__activity .activity__info{padding:20px}.discord-usercard .usercard__activity .activity__info .info__header{color:#fff;text-transform:uppercase;margin-bottom:8px;line-height:16px;font-size:12px;font-weight:800}.discord-usercard .usercard__activity .activity__info .info__game{display:flex;align-items:flex-start}.discord-usercard .usercard__activity .activity__info .info__game .game__icon{position:relative}.discord-usercard .usercard__activity .activity__info .info__game .game__icon img.game{text-indent:-9999px;width:90px;height:90px;border-radius:4px;display:block;-o-object-fit:cover;object-fit:cover;-webkit-user-drag:none;-webkit-mask:url(' + A + ");mask:url(" + A + ")}.discord-usercard .usercard__activity .activity__info .info__game .game__icon img.status-icon{width:30px;height:30px;border-radius:50%;position:absolute;bottom:-4px;right:-4px;-webkit-user-drag:none}.discord-usercard .usercard__activity .activity__info .info__game .game__content{flex:1 1 auto;color:hsla(0,0%,100%,.8);margin-left:20px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:13px;line-height:16px;font-weight:400}.discord-usercard .usercard__activity .activity__info .info__game .game__content .game__title{font-weight:600}.discord-usercard .usercard__activity .activity__info .info__game .game__content .game__title span{color:hsla(0,0%,100%,.8)}.discord-usercard .usercard__activity .activity__info .info__game .game__content .text-row{display:block;margin-bottom:4px}.discord-usercard .usercard__activity .activity__info .info__game .game__content .game__nd-line,.discord-usercard .usercard__activity .activity__info .info__game .game__content .game__st-line{color:hsla(0,0%,100%,.8)}.credit-card{margin:10px 5px;position:relative;width:250px;height:50px;border-radius:6px;padding:10px;background:#292d33;display:flex;justify-content:space-between;align-items:center;transition:all .15s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.credit-card__user{flex:.9;overflow:hidden}.credit-card__user h1,.credit-card__user h2{margin:0 0 0 5px}.credit-card__user h1{font-size:1.1rem;color:#fff;font-weight:400;-webkit-box-orient:vertical;font-weight:800}.credit-card__user h1,.credit-card__user h2{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.credit-card__user h2{width:98%;font-size:14px;color:hsla(0,0%,100%,.7);font-weight:700;display:inline-block}.credit-card__avatar img{height:40px;border-radius:50%;margin-right:5px}.credit-card__avatar span{z-index:1;position:absolute;bottom:14px;right:14px;display:block;width:9px;height:9px;border:2px solid #2c2f33;border-radius:100%}.credit-card__avatar span.online{background:#43b581}.credit-card__avatar span.dnd{background:#f04747}.credit-card__avatar span.idle{background:#faa61a}.credit-card__avatar span.offline{background:#747f8d}.credit-card:hover{transform:translateY(-6px);z-index:6;box-shadow:0 2px 74px 0 rgba(0,0,0,.5)}.category-card{width:495px;height:170px;position:relative;background:#151719;background-size:cover;box-shadow:0 4px 32px 0 rgba(9,10,10,.2);border-radius:.5rem;overflow:hidden;margin:.6em;padding:.5rem;display:flex;justify-content:flex-start;align-items:center;z-index:1;transform:translateY(0);transition:all .2s ease-in-out;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#fff}.category-card:hover{transform:translateY(-6px);box-shadow:0 4px 42px 0 rgba(9,10,10,.4)}.category-card .category__icon{font-size:2em;padding:.5em}.category-card .category__data h2{margin:4px 0}.category-card .category__data p{margin:4px 0;max-width:330px;font-size:.9em}@media only screen and (max-width:600px){.credit-card{width:85vw}.card--feature{padding:0 1em;display:block;margin-top:48px;min-height:0;justify-content:space-around;align-items:center}.card--feature--reverse{flex-flow:row-reverse}.card--feature--alt{flex-flow:column;flex-wrap:wrap;justify-content:center}.card--feature--alt .section-container__details{width:80%}.card--feature__details{color:#c4c4c4;width:100%;margin:0 1em}.card--feature__details h1{font-size:2em;color:#fff}.card--feature__details p,.card--feature__details ul{display:none}.card--feature__promo{text-align:center}.card--feature__promo img,.card--feature__promo video{max-width:100%;border-radius:.5em}.card--feature__promo--image1{position:relative}}.pattern{background-image:url(" + I + ');background-size:300px 240px}.container{overflow:hidden}.container--width--desktop{max-width:1600px}.container--width--mobile{max-width:600px}.container--large{padding-top:3.5em;padding-bottom:3.5em;text-align:center}.container .container__heading .heading--center{text-align:center}.container .container__heading .heading--right{text-align:right}.container .container__heading .heading--subtitle{font-size:small}.container{position:relative}.container_error-page{margin-top:8em;color:#fff;height:50vh}.container_error-page h1{font-size:3em}.container_maintenance-page{margin-top:5em;color:#fff;height:50vh;align-items:center;text-align:center}.container_maintenance-page h1{font-size:3em}.container_maintenance-page .maintenance-links{margin-top:12em}.beta-join{padding-top:1em;padding-bottom:5em;text-align:center}.beta-join p{font-size:1.5em}#beta-heading{padding-bottom:0}#thankYou{text-align:center;padding:0 0 150px}#thankYou-container{align-items:normal;min-height:400px;text-align:center}#thankYou-container h1{margin-bottom:0}#thankYou-container p{font-size:1.3em}.partners .slider{width:100%;height:300px;display:inline-flex;align-items:center;margin-bottom:2em}.partners .slider .left{display:flex;align-items:center;justify-content:center;text-align:center;width:30%;height:80%;float:left;margin-right:5%;border-radius:5px;background-repeat:no-repeat;background-size:cover;background-position:50%;opacity:.5;z-index:10}.partners .slider .left .arrow{left:20px}.partners .slider .middle{display:table;height:100%;background-position:50%}.partners .slider .middle,.partners .slider .right{align-items:center;justify-content:center;text-align:center;width:30%;background-repeat:no-repeat;background-size:cover;border-radius:5px;z-index:10}.partners .slider .right{display:flex;height:80%;float:right;margin-left:5%;background-position-y:center;opacity:.5}.partners .slider .right .arrow{right:20px}.partners .slider .arrow{display:flex;align-items:center;justify-content:center;text-align:center;font-size:32px;color:grey;position:absolute;width:50px;height:50px;background:#010101;top:50%;transform:translateY(-50%);border-radius:50%;z-index:10;cursor:pointer}.partners .slider .arrow:hover{color:#fff;transition:color,.3s}.partners .requirments{display:inline-block;border-radius:5px;width:880px;height:320px;padding:3em;background-color:rgba(35,39,42,.25)}.partners .requirments .rTitle{font-size:39px;font-weight:700;color:#7289da}.partners .requirments .rText{font-size:23px;color:#fff}.partners .requirments .rDescription{font-size:15px;color:grey}.partners .why{font-size:28px;color:#fff;margin:1.5em}.partners .reason{padding:1em;width:300px;height:100px;background:#23272a;border-radius:5px;align-items:center;justify-content:center;text-align:center;margin-bottom:2em}.partners .reason h1{display:block;font-size:22px;text-transform:uppercase;color:#7289da}.partners .reason p{color:#fff;font-size:14px}.partners .random-img{opacity:.25;z-index:0}.promo-container{display:flex;position:relative;justify-content:space-between;align-content:center;max-width:1200px;margin:0 auto;padding:5em 0}.promo-container.beta{display:unset;margin-top:2em}.promo-container .promo-container__heading{margin:auto 0;text-align:center;flex-flow:column}.promo-container .promo-container__heading .heading__logo{display:inline-block;margin:1.5em 0}.promo-container .promo-container__heading .heading__logo img{width:450px}.promo-container .promo-container__heading .heading__text{display:inline-block}.promo-container .promo-container__heading .heading__text p{position:relative;left:3px;font-size:1.2em;margin:0;font-weight:500;color:hsla(0,0%,100%,.9);max-width:530px}.promo-container .promo-container__heading .heading__button-group{max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;margin:40px auto}.promo-container .promo-container__heading .heading__button-group .button{margin:.4em}.promo-container .promo-container__presences{margin-left:60px}.presence-container{max-width:1600px;margin:2em auto;display:flex;align-items:flex-start;position:relative;justify-content:center;flex-wrap:wrap}.presence-container#error{margin-top:2.7em;background-color:#191b24;border-radius:.5rem}.category-container{display:flex;position:relative;justify-content:center;flex-flow:column}.category-container .category-item{font-weight:600;font-size:.95em;padding:6px 12px;margin:4px 0;border-radius:2px;border:1px solid #242733;color:#626c8d;transition:all .2s ease}.category-container .category-item:hover{border:1px solid #2e3242;color:#626c8d;background-color:rgba(98,108,141,.05)}.category-container .category-item.nuxt-link-exact-active,.category-container .category-item.router-link-exact-active{border:1px solid #7289da;background-color:#7289da;color:#fdfcff}.section-heading{max-width:1100px;margin:0 auto;padding-top:3.5em;padding-bottom:3.5em;text-align:center}.section-heading .section-heading__title{color:#fff;font-size:4em;font-weight:700;margin:.1em}.section-heading .section-heading__subtitle{color:#fff;opacity:.8;font-size:1.2em;font-weight:500}.dl-container{color:#fff;position:relative}.dl-container__mobile-warning{background-color:red;border-radius:4px;margin:2em 2em 0;padding:1em!important}.dl-container__showDownloads{margin-top:1em;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer}.dl-container .dl-container__section{position:relative;padding:0 2rem}.dl-container .dl-container__section_header{position:relative;margin:0 auto;z-index:1;padding-top:6em;padding-bottom:12em}.dl-container .dl-container__section_downloads{padding-top:1em;padding-bottom:2em}.dl-container .dl-container__section_downloads .bounce{-webkit-animation:bounce 1s normal;animation:bounce 1s normal}.dl-container .dl-container__section h1.section-header{text-align:center;font-weight:800;font-size:52px;letter-spacing:-1px;background:linear-gradient(30deg,#7289da,#b3aeff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:none}.dl-container .dl-container__section h1.section-header:after{top:0;transition:opacity .15s ease-out;position:absolute;content:"";background:rgba(114,137,218,.25)!important;width:100%;height:100%;display:inline-block;left:0;margin-top:-15px;z-index:-1;opacity:0}.dl-container .dl-container__header{display:flex;max-width:1600px;margin:0 auto;justify-content:space-between;align-items:flex-start}.dl-container .dl-container__header .header__content{width:55%}.dl-container .dl-container__header .header__content h1{font-weight:800;line-height:1.1;font-size:3.8em;letter-spacing:-3px;background:linear-gradient(30deg,#7289da,#b3aeff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:none;max-width:600px}.dl-container .dl-container__header .header__content p{font-weight:500;line-height:1.1;font-size:1.5em;max-width:800px}.dl-container .dl-container__header .header__steps{width:35%}[dir=ltr] .dl-container .dl-container__header .header__steps h2{margin-left:0}[dir=ltr] .dl-container .dl-container__header .header__steps h2,[dir=rtl] .dl-container .dl-container__header .header__steps h2{margin-right:0}[dir=rtl] .dl-container .dl-container__header .header__steps h2{margin-left:0}.dl-container .dl-container__header .header__steps h2{margin-top:.67em;margin-bottom:.67em}.dl-container .dl-container__header .header__steps ol{counter-reset:myCounter;margin:0;padding:0}.dl-container .dl-container__header .header__steps ol li{display:flex;list-style:none;align-items:center}.dl-container .dl-container__header .header__steps ol li p{font-weight:500;margin:12px 38px}.dl-container .dl-container__header .header__steps ol li:before{counter-increment:myCounter;content:counter(myCounter);line-height:1;text-align:center;width:16px;height:16px;padding:5px;margin-right:12px;font-weight:700;position:absolute;display:inline-block;border-radius:50rem;background:linear-gradient(30deg,#7289da,#b3aeff)}.container__header{margin:0 .5em;padding:0;color:#b3aeff;background:linear-gradient(30deg,#7289da,#b3aeff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-transform:uppercase;font-size:3rem;font-weight:800;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.container__header span.header__step{font-weight:900;letter-spacing:6px;vertical-align:bottom}.language-notify{max-width:1600px;margin:0 auto;display:flex;align-items:center;position:relative}.language-notify .language-notify__content{margin-right:2rem}.language-notify .language-notify__buttons{margin-left:auto}.language-notify h2{color:#fff;font-weight:700;margin:0 0 .4rem}.language-notify p{color:hsla(0,0%,100%,.8);font-weight:500;margin:0}.language-notify__wrapper{background:#191b24;border-bottom:1px solid hsla(0,0%,100%,.1);padding:2rem}.languages-container{width:100%;height:100%;position:fixed;background:rgba(0,0,0,.85);z-index:1000;display:flex;justify-content:center;align-items:center}.languages-container a.languages-container__close{position:absolute;top:.5em;right:1em;font-size:2rem;color:hsla(0,0%,100%,.5);transition:all .2s ease;z-index:4}.languages-container a.languages-container__close:hover{color:#fff}.languages-container .languages-list{max-height:100%;max-width:100%;position:relative;z-index:999;display:flex;flex-wrap:wrap;max-width:800px;margin:0 auto}.languages-container .languages-list .languages-list__item{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:1.2rem;margin:12px;font-weight:700;color:hsla(0,0%,100%,.5);display:inline-block;transition:all .2s ease;border:none;background:none;cursor:pointer;outline:none}.languages-container .languages-list .languages-list__item.active,.languages-container .languages-list .languages-list__item:hover{color:#fff;transform:scale(1.1)}.contributor-container{padding-left:25px;padding-top:25px;max-width:1400px;margin:0 auto}.contributor-container .contributor-inner{display:flex;flex-wrap:wrap;justify-content:flex-start}.fullpresence-container{max-width:1200px;margin:0 auto;padding:0 2rem}.fullpresence-container .fullpresence__header{overflow:hidden;position:relative;padding:4rem;border-radius:.5rem;margin:2rem 0;background-position:50%;background-size:cover;display:flex;flex-wrap:wrap;box-shadow:0 4px 32px 0 rgba(9,10,10,.2);align-items:center}.fullpresence-container .fullpresence__header .fullpresence__overlay{opacity:.85}.fullpresence-container .fullpresence__header .header__title{max-width:50%}.fullpresence-container .fullpresence__header .header__title h1{position:relative;color:#fff;font-size:48px;font-weight:800;z-index:2;margin:0;cursor:default;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-select:none;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fullpresence-container .fullpresence__header .header__title .section{display:flex;color:#fff;z-index:3}.fullpresence-container .fullpresence__header .header__title .section span{font-size:1rem;text-align:center;cursor:pointer;margin:1em .5em}.fullpresence-container .fullpresence__header .header__title p{position:relative;color:hsla(0,0%,100%,.8);z-index:2;font-weight:700;margin:0}.fullpresence-container .fullpresence__header .header__title p a{color:#fff}.fullpresence-container .fullpresence__header .header__buttons{z-index:2;margin-left:auto}.fullpresence-container .fullpresence__header .header__buttons .button{padding:14px 30px;line-height:1}.fullpresence-container .fullpresence__header .header__buttons .button--like{padding:12px 20px}.fullpresence-container .fullpresence__header .header__buttons .button--like i{margin-right:0}.fullpresence-container .fullpresence__header hr{flex-basis:100%;height:0;margin:0;border:0}.fullpresence-container .fullpresence__header .header__warning{box-shadow:0 3px 26px -5px rgba(0,0,0,.5);background:rgba(0,0,0,.75);margin:10px 0;border-radius:4px;padding:10px;position:relative;color:hsla(0,0%,100%,.8);z-index:2;font-weight:700}.fullpresence-container .fullpresence__header .fullpresence__gradient{background-size:cover!important;filter:blur(.75px);content:"";position:absolute;top:0;right:0;bottom:0;left:0;background-image:linear-gradient(to bottom right,#002f4b,#dc4225);opacity:1;z-index:1}.fullpresence-container .fullpresence__content{display:flex;align-items:flex-start;color:#fff}.fullpresence-container .fullpresence__content>div{background:#2f3136;padding:1.5em;margin:1em 0;border-radius:.5rem;box-shadow:0 4px 32px 0 rgba(9,10,10,.2)}.fullpresence-container .fullpresence__content h2.content__title{color:#fff;font-size:28px;font-weight:700;margin:0 0 1rem}.fullpresence-container .fullpresence__content .content__description{flex:.7;margin-right:1em}.fullpresence-container .fullpresence__content .content__description .description-container{font-size:16px;color:#c7cfd6}.fullpresence-container .fullpresence__content .content__info{flex:.3;margin-left:1em}.fullpresence-container .fullpresence__content .content__info ul.info__sections{list-style:none;margin:0;padding:0;color:#c7cfd6;font-weight:500;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.fullpresence-container .fullpresence__content .content__info ul.info__sections p{margin:0}.fullpresence-container .fullpresence__content .content__info ul.info__sections li{margin:12px 0}.fullpresence-container .fullpresence__content .content__info ul.info__sections .presence-version{color:#fff}.fullpresence-container .fullpresence__content .content__info ul.info__sections .presence-tags{padding-left:15px;margin:15px 0;display:flex;flex-wrap:wrap}.fullpresence-container .fullpresence__content .content__info ul.info__sections .presence-tags .label_tag{font-weight:500;margin:2px;padding:3px 8px;border-radius:50px}.fullpresence-container .fullpresence__content .content__info ul.info__sections .presence-urls{font-weight:700;list-style-type:circle;list-style-position:outside}.fullpresence-container .fullpresence__content .content__info ul.info__sections .presence-urls a{color:#fff}.fullpresence-container .fullpresence__content .content__info ul.info__sections .author-name{font-weight:700;margin-left:2px}.fullpresence-container .fullpresence__content .content__info ul.info__sections .author-avatar{bottom:-6px;width:24px;display:inline-block;vertical-align:baseline;position:relative;border-radius:100%}.loader-container{position:fixed;top:0;right:0;left:0;bottom:0;overflow:hidden;display:flex;z-index:9999;background:#191b24;text-align:center;justify-content:center;align-items:center}.loader-container .loader img{width:150px;height:150px;position:relative;transform:translateX(10px);-webkit-animation:loaderAnimation .5s ease-out infinite;animation:loaderAnimation .5s ease-out infinite}.loader-container .loader p{color:#fff;font-size:1.4em;font-weight:700}.userpage-container{max-width:1200px;margin:0 auto;padding:2em}.userpage-container .userpage__header{display:flex;justify-content:center;align-items:center}.userpage-container .userpage__header>div{margin:0 6px}.userpage-container .userpage__header .roles{display:flex}.userpage-container .userpage__header .roles i{margin:0 5px;transition:opacity .2s ease-in-out}.userpage-container .userpage__header .roles i:hover{opacity:.75}.userpage-container .userpage__header .user-avatar img{border-radius:100%;width:128px;height:128px}.userpage-container .userpage__header .user-data{color:#fff}.userpage-container .userpage__header .user-data .label{margin-top:5px}.userpage-container .userpage__header .user-data p{margin:0}.userpage-container .userpage__header .user-data .username{font-size:32px;font-weight:700;margin-left:4px}.userpage-container .userpage__header .user-data .username .tag{color:hsla(0,0%,100%,.3);font-size:24px}.userpage-container .userpage__header .user-data .userrole{font-size:22px}.userpage-container .userpage__presences{margin-top:3em}.userpage-container .userpage__presences h1{font-weight:700;font-size:36px;text-align:center}.pagination-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:2em;display:flex;justify-content:center;align-items:center}.pagination-container .hidden{display:none!important}.pagination-container .button--pagination{transition:background-color .15s ease-out;display:inline-flex;justify-content:center;align-items:center;min-width:50px;min-height:50px;color:#fff;background-color:#2e3242;font-weight:700;font-size:20px;border-radius:50%;margin:0 5px}.pagination-container .button--pagination.active{background-color:#7289da}.pagination-container .button--pagination:hover{background-color:#383e51}.error-container{max-width:800px;background-color:#191b24;padding:3em;border-radius:.4em;margin:4em auto}.error-container h1{margin:0 0 .6em;font-weight:800;line-height:1.1;font-size:3.8em;letter-spacing:-3px;background:linear-gradient(30deg,#7289da,#b3aeff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:none;max-width:600px}.error-container .error-container--btns{margin-top:2em}.error-container .error-textarea p{margin:.5em 0;font-family:monospace}.modal-mask{position:fixed;z-index:9999;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);display:table}.modal-mask .modal-wrapper{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);display:flex;overflow:hidden;justify-content:center}.modal-mask .limage{display:flex;flex-direction:column;vertical-align:middle;align-items:center;align-self:center;text-align:center;justify-content:center;background-color:#151518;width:15vw;height:80vh;padding:20px 30px}.modal-mask .limage img{max-width:100%;align-self:center;-o-object-fit:contain;object-fit:contain;margin-top:auto}.modal-mask .limage h1{color:#fff;font-size:3rem;line-height:0}.modal-mask .limage .bottomText{margin-top:auto;color:#fff}.modal-mask .limage .bottomText p{margin:0;font-size:1rem}.modal-mask .limage .bottomText .steps{font-size:1rem;margin-top:1rem;color:grey;text-transform:uppercase}.modal-mask .limage.small{max-height:340px}.modal-mask .modal-container{width:35vw;height:80vh;padding:20px 30px;background-color:#23272a;border-radius:2px;box-shadow:0 2px 15px rgba(0,0,0,.5);position:relative}.modal-mask .modal-container .error{color:red;line-height:0}.modal-mask .modal-container .tasks{text-align:left;margin:0}.modal-mask .modal-container .tasks h1{text-transform:uppercase;font-size:1.75em}.modal-mask .modal-container .tasks p{color:#888!important;margin:0 0 0 .5em}.modal-mask .modal-container #particles-js{background-size:cover;position:absolute;top:0;left:0;width:100%;height:100%}.modal-mask .modal-container p label{color:#fff;font-size:.75rem;float:left;text-align:left;margin-bottom:.25em;text-transform:uppercase;width:100%}.modal-mask .modal-container input{transition:all .15s ease-out;font-family:"Inter";color:#fff;display:block;border-radius:4px;width:100%;width:-webkit-fill-available;width:-moz-available;margin-bottom:.75em;padding:.75em;box-sizing:border-box;border:1px solid transparent;background-color:#1f1f20}.modal-mask .modal-container input:focus{border:1px solid #7289da}.modal-mask .modal-container input::-moz-placeholder{color:#888}.modal-mask .modal-container input:-ms-input-placeholder{color:#888}.modal-mask .modal-container input::placeholder{color:#888}.modal-mask .modal-container select{font-family:"Inter";background-color:#151518;color:#fff;display:block;border-radius:4px;width:60%;margin-bottom:1em;padding:.5em;border:1px solid #7289da;transition:all .6s ease}.modal-mask .modal-container select option{color:#fff}.modal-mask .modal-container textarea{font-family:"Inter"}.modal-mask .modal-container .recaptcha{margin-top:1em}.modal-mask .modal-container.small{max-height:340px}.modal-mask .modal-header{margin-bottom:1em}.modal-mask .modal-header h1{color:#fff;font-size:2em;font-weight:500;margin:0;text-align:center}.modal-mask .modal-footer{margin-top:1em}.modal-mask .modal-footer .buttons{position:absolute;right:1em;bottom:1em}.modal-mask .modal-footer .button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:none;padding:.5rem 1.5rem;border-radius:55rem;font-size:.85em;font-weight:700;background:#7289da;color:#fdfcff;cursor:pointer;display:block;margin-right:.7rem;transition:all .1s cubic-bezier(.25,.46,.45,.94);box-shadow:0 3px 16px -7px rgba(17,18,24,.7);text-align:center;font-family:inherit;float:right}.modal-mask .modal-body{margin:20px 0}.modal-mask .modal-body .jobCheckbox{display:flex;text-align:left;align-items:center;padding:.5em;font-size:.8em;background-color:#151518;border-radius:5px}.modal-mask .modal-body .jobCheckbox .checkbox-switcher label span{flex-shrink:0}.modal-mask .modal-body .jobCheckbox input[type=checkbox]{margin:1em;width:auto}.modal-mask .modal-default-button{float:right}.no-scroll{overflow:hidden}.partners{display:block;text-align:-webkit-center}.partners .carousel-3d-container .carousel-3d-slide{background-color:transparent;border-style:none}.partners .carousel-3d-container figure{margin:0}.partners .carousel-3d-container figure img{background-repeat:no-repeat;background-size:cover;background-position:50%}.partners .carousel-3d-container figcaption{position:absolute;background-color:rgba(0,0,0,.5);color:#fff;bottom:0;padding:15px;font-size:12px;min-width:100%;height:100%;box-sizing:border-box;display:flex;text-align:center;align-items:center;justify-content:center;-ms-user-select:none;user-select:none;-moz-user-select:none;-webkit-user-select:none}.partners .carousel-3d-container figcaption h1{font-size:3em;line-height:.3}.partners .carousel-3d-container figcaption p{font-size:1.1em}.partners .main{padding-top:50px;padding-bottom:50px;margin:0 auto}.partners .title{font-size:46px;color:#7289da;padding-bottom:50px;font-weight:700}.partners .slideshow-title{font-size:25px;color:#fff;padding-bottom:.75em}.partners .description{font-size:15px;color:#fff;padding-bottom:1em}.partners .button-container{padding-top:30px;padding-bottom:50px}.partners .jobs{font-size:20px;font-weight:700;color:grey;max-width:725px;padding-bottom:50px}.partners .sponsor-title{font-size:46px;font-weight:700}.partners .text{display:table-cell;width:100%;height:100%;color:#fff;z-index:10;text-align:center;vertical-align:middle;justify-content:center;background-color:rgba(0,0,0,.4)}.partners .sponsor-cards{display:inline-flex;max-width:1200px;overflow-x:scroll}.partners .applyText{font-size:20px;color:#fff;margin-bottom:0;margin-top:4em;line-height:0}.partners .random-img{width:125px;height:125px;position:absolute;opacity:.6;z-index:-1;border-radius:100%}.staff-container{width:1275px;margin-left:1em;height:625px;overflow-y:auto}@media only screen and (max-width:600px){.fullpresence-container .fullpresence__header .header__title .section span{padding:unset}.fullpresence-container .fullpresence__content .content__description,.fullpresence-container .fullpresence__content .content__info{max-width:70vw}.userpage__header{display:block!important;text-align:center}.userpage__header .roles{align-content:center;justify-content:center;place-content:center}.modal-mask{overflow-y:scroll}.modal-mask .modal-container{overflow-y:scroll;width:100vw;font-size:.85em}.modal-mask .modal-container .modal-header h1{font-size:1.5em}.modal-mask .modal-body h1{font-size:1.5em!important}.modal-mask .modal-footer .buttons{position:relative}.jobs-container{padding:25px 0 75px}.jobs-container .jobs-heading h1{margin-bottom:.5em;font-size:2em}.jobs-container .jobs-heading h1 p{padding:0 .5em}.benefits h1{font-size:1.75em}.benefits .benefit p{padding:unset}.fullpresence-container .fullpresence__header .header__buttons .button{margin-right:0;padding:10px 15px}.fullpresence-container .fullpresence__header .header__buttons .button .icon i{margin-right:0}.limage{display:none!important}.modal-container{width:unset!important;max-width:90vw!important}.sponsor-cards{max-width:100%!important;margin:0!important}#thankYou-container .card--feature__details p{display:block}.partners .requirments{height:auto;max-width:100%;margin:0;padding:0;background-color:#23272a}.partners .requirments--content{padding:2em}.partners p{padding:0 1em}.partners .sponsor-info p{padding:0!important}.beta-join{padding-bottom:1em}.beta-join p{padding:0 1em}.contributor-container{padding-top:25px;padding-left:0;max-width:100%;margin:0 auto}.contributor-container h1.heading{text-align:center}.contributor-container .contributor-inner{display:flex;flex-wrap:wrap;justify-content:center}.languages-container{overflow:scroll}.dl-container .dl-container__section_header{padding-bottom:3em}.promo-container .heading__logo img{width:80vw!important;max-width:100%}.promo-container .heading__text p{padding:.5em}}.waves-divider{width:100%;max-height:120px;left:0;z-index:-1;position:absolute}.waves-divider_top{transform:scaleX(1.5) rotate(180deg);top:-1px}.waves-divider_top .wave-animation{-webkit-animation:waveAnimation 25s linear infinite alternate;animation:waveAnimation 25s linear infinite alternate}.waves-divider_bottom{bottom:-1px}.waves-divider_bottom .wave-animation{-webkit-animation:waveAnimation 35s linear infinite alternate;animation:waveAnimation 35s linear infinite alternate}.waves-divider svg.wave{display:block;overflow:hidden;transform-origin:0 0;color:#111218}.store-grid{display:flex;color:#7e86a5;flex-wrap:nowrap;flex-flow:row;align-items:flex-start;max-width:1600px;margin:0 auto}.store-grid__sidebar{margin:2.6em 1em;background:#191b24;width:15%;padding:1.2em;border-radius:.5rem;overflow:hidden;font-weight:600;position:sticky;top:1em}.store-grid__sidebar .sidebar__header{padding-bottom:.5em;color:#627e93;text-transform:uppercase;margin:0 0 .5em;font-size:1.4em;font-weight:800}.store-grid__sidebar .sidebar__subheader{color:#7289da;font-size:1.1em;font-weight:800;margin:1em 0 .5em}.store-grid__sidebar .sidebar__subheader:first-child{margin-top:.5em}.store-grid__sidebar .sidebar__search{flex:1 1 auto;display:flex;align-items:center;position:relative;max-width:700px;margin:0 auto;padding:20px;width:1%}.store-grid__sidebar .sidebar__search input{width:-webkit-fill-available;width:-moz-available;width:stretch;border-radius:99em}.store-grid__sidebar .sidebar__search .sidebar__search{margin:0 2em}.store-grid__content{margin:0 1em;flex:55%}.store-grid__content .heading{margin:1.6em 0}@media only screen and (max-width:600px){.store-grid__sidebar{width:80%!important;margin:0 auto}.store-grid__content{align-self:center;margin:0 1em;flex:55%}}input[type=text]{height:1.8rem;padding:0 10px;font-size:14px;transition:all .3s ease;border:none;background:#212530;color:#6f789b;line-height:25px;font-weight:700;width:100%;border-radius:2px}input[type=text]:focus{background:#282c39;outline:none}input[type=text] *{margin-left:-17.5rem}input[type=text]::-moz-placeholder{color:#7e86a5}input[type=text]:-ms-input-placeholder{color:#7e86a5}input[type=text]::placeholder{color:#7e86a5}.searchbar::-moz-placeholder{color:#74787c}.searchbar:-ms-input-placeholder{color:#74787c}.searchbar::placeholder{color:#74787c}.label{background:#111218;color:hsla(0,0%,100%,.9);padding:6px 20px;font-size:12px;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-weight:400;border-radius:50rem}.label_language-switcher{margin-bottom:16px}.label_language-switcher a{font-weight:700}.label_downloads-version{position:relative;font-weight:600;background:#7289da;color:#fdfcff;-webkit-text-fill-color:#fdfcff;top:0;vertical-align:middle;padding:4px 10px;font-size:medium}.label_downloads-version.linux{background:#f1c40f;-webkit-animation:pulseWarn 2s infinite;animation:pulseWarn 2s infinite}.label_role{margin:2px 0;text-align:center;padding:4px 14px;width:-webkit-fill-available;font-size:12px}.label_tag{padding:4px 10px;margin-right:5px;margin-bottom:5px}.section{position:relative;overflow:hidden}.section__legal-section{margin:1.5em}.section__heading{font-size:1.8em;padding:0 4em}.section__heading--center{text-align:center}.section__heading--right{text-align:right}.section__heading h1{color:#f8f9fd;font-weight:700}.section__heading .section__subheading{font-size:.8em;color:rgba(248,249,253,.7);font-weight:700}.section--features{position:relative;z-index:1;overflow:hidden;padding:120px 0 150px}.section--features--beta-register{padding:2em 0 150px}@media only screen and (max-width:600px){.section{position:relative;overflow:hidden}.section__heading{font-size:1em;padding:0}.section__heading--center{text-align:center}.section__heading--right{text-align:right}.section__heading h1{color:#f8f9fd;font-weight:700}.section__heading .section__subheading{font-size:.8em;color:rgba(248,249,253,.7);font-weight:700}.section--features{position:relative;z-index:1;overflow:hidden;padding:48px 0 0;background-image:linear-gradient(125deg,#191b24,#111218)}}.m-rl--auto{margin:0 auto}.m-tb--auto{margin:auto 0}.m--auto{margin:auto}.m-r--1{margin-right:1rem}.m-t--1{margin-top:1rem}.m-b--1{margin-bottom:1rem}.m-l--1{margin-left:1rem}.m-r--2{margin-right:2rem}.m-t--2{margin-top:2rem}.m-b--2{margin-bottom:2rem}.m-l--2{margin-left:2rem}.m-r--4{margin-right:4rem}.m-t--4{margin-top:4rem}.m-b--4{margin-bottom:4rem}.m-l--4{margin-left:4rem}.m-r--5{margin-right:5rem}.m-t--5{margin-top:5rem}.m-b--5{margin-bottom:5rem}.m-l--5{margin-left:5rem}.p-r--1{padding-right:1rem}.p-t--1{padding-top:1rem}.p-b--1{padding-bottom:1rem}.p-l--1{padding-left:1rem}.p-r--2{padding-right:2rem}.p-t--2{padding-top:2rem}.p-b--2{padding-bottom:2rem}.p-l--2{padding-left:2rem}.p-r--4{padding-right:4rem}.p-t--4{padding-top:4rem}.p-b--4{padding-bottom:4rem}.p-l--4{padding-left:4rem}.p-r--5{padding-right:5rem}.p-t--5{padding-top:5rem}.p-b--5{padding-bottom:5rem}.p-l--5{padding-left:5rem}.checkbox-switcher{display:inline-block;cursor:pointer}.checkbox-switcher,.checkbox-switcher span{transition:all .2s cubic-bezier(.26,.08,0,.97)}.checkbox-switcher span.title{font-size:.9em;margin-left:.5em}.checkbox-switcher label{display:flex;cursor:pointer;align-items:center}.checkbox-switcher label p{margin:6px 12px;font-size:.9em}.checkbox-switcher input[type=checkbox]{opacity:1;width:0;height:0}.checkbox-switcher [type=checkbox]:checked,.checkbox-switcher [type=checkbox]:not(:checked){position:absolute;opacity:0;pointer-events:none}.checkbox-switcher input[type=checkbox]:checked+.checkbox-container{background-color:#7289da;border:1px solid #7289da}.checkbox-switcher input[type=checkbox]:checked+.checkbox-container:after{position:absolute;top:0;left:0;padding:2px 2.5px;content:"";font-family:"Font Awesome 5 Free";color:#fdfcff}.checkbox-switcher .checkbox-container{position:relative;display:inline-block;width:19px;height:19px;border:1px solid #2e3242;border-radius:2px;overflow:hidden;cursor:pointer;margin:4px 0;transition:all .2s cubic-bezier(.26,.08,0,.97)}.checkbox-switcher .checkbox-container:hover{border:1px solid #7289da}.checkbox-switcher .checkbox-container:after{color:#7289da;font-size:.9em;width:20px;height:20px;transition:all .2s cubic-bezier(.26,.08,0,.97)}.text--uppercase{text-transform:uppercase}.text-align--center{text-align:center}#noty_layout__bottom,#noty_layout__bottomCenter,#noty_layout__bottomLeft,#noty_layout__bottomRight,#noty_layout__center,#noty_layout__centerLeft,#noty_layout__centerRight,#noty_layout__top,#noty_layout__topCenter,#noty_layout__topLeft,#noty_layout__topRight,.noty_layout_mixin{position:fixed;margin:0;padding:0;z-index:9999999;transform:translateZ(0) scale(1);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-font-smoothing:subpixel-antialiased;filter:blur(0);-webkit-filter:blur(0);max-width:100%}#noty_layout__top{top:0;left:5%;width:90%}#noty_layout__topLeft{top:20px;left:20px;width:325px}#noty_layout__topCenter{top:0;left:0;right:0}#noty_layout__topRight{top:20px;right:20px;width:325px}#noty_layout__bottom{bottom:0;left:5%;width:90%}#noty_layout__bottomLeft{bottom:20px;left:20px;width:325px}#noty_layout__bottomCenter{bottom:5%;left:50%;width:325px;transform:translate(calc(-50% - .5px)) translateZ(0) scale(1)}#noty_layout__bottomRight{bottom:20px;right:20px;width:325px}#noty_layout__center{top:50%;left:50%;width:325px;transform:translate(calc(-50% - .5px),calc(-50% - .5px)) translateZ(0) scale(1)}#noty_layout__centerLeft{left:20px}#noty_layout__centerLeft,#noty_layout__centerRight{top:50%;width:325px;transform:translateY(calc(-50% - .5px)) translateZ(0) scale(1)}#noty_layout__centerRight{right:20px}.noty_progressbar{display:none}.noty_has_timeout .noty_progressbar{display:block;position:absolute;left:0;bottom:0;height:3px;width:100%;background-color:#646464;opacity:.2;filter:alpha(opacity=10)}.noty_bar{-webkit-backface-visibility:hidden;transform:translate(0) scale(1);-webkit-font-smoothing:subpixel-antialiased;overflow:hidden}.noty_effects_open{opacity:0;transform:translateY(-50%);-webkit-animation:noty_anim_in .5s ease-in;animation:noty_anim_in .5s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.noty_effects_close{-webkit-animation:noty_anim_out .5s ease-in;animation:noty_anim_out .5s ease-in;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.noty_fix_effects_height{-webkit-animation:noty_anim_height 75ms ease-out;animation:noty_anim_height 75ms ease-out}.noty_close_with_click{cursor:pointer}.noty_close_button{position:absolute;top:2px;right:2px;font-weight:700;width:20px;height:20px;text-align:center;line-height:20px;background-color:rgba(0,0,0,.05);border-radius:2px;cursor:pointer;transition:all .2s ease-out}.noty_close_button:hover{background-color:rgba(0,0,0,.1)}.noty_modal{position:fixed;width:100%;height:100%;background-color:#000;z-index:10000;opacity:.3;left:0;top:0}.noty_modal.noty_modal_open{opacity:0;-webkit-animation:noty_modal_in .3s ease-out;animation:noty_modal_in .3s ease-out}.noty_modal.noty_modal_close{-webkit-animation:noty_modal_out .3s ease-out;animation:noty_modal_out .3s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes noty_modal_in{to{opacity:.3}}@keyframes noty_modal_in{to{opacity:.3}}@-webkit-keyframes noty_modal_out{to{opacity:0}}@keyframes noty_modal_out{to{opacity:0}}@-webkit-keyframes noty_anim_in{to{transform:translate(0);opacity:1}}@keyframes noty_anim_in{to{transform:translate(0);opacity:1}}@-webkit-keyframes noty_anim_out{to{transform:translateY(-50%);opacity:0}}@keyframes noty_anim_out{to{transform:translateY(-50%);opacity:0}}@-webkit-keyframes noty_anim_height{to{height:0}}@keyframes noty_anim_height{to{height:0}}.noty_theme__relax.noty_bar{margin:4px 0;overflow:hidden;border-radius:2px;position:relative}.noty_theme__relax.noty_bar .noty_body{padding:10px}.noty_theme__relax.noty_bar .noty_buttons{border-top:1px solid #e7e7e7;padding:5px 10px}.noty_theme__relax.noty_type__alert,.noty_theme__relax.noty_type__notification{background-color:#fff;border:1px solid #dedede;color:#444}.noty_theme__relax.noty_type__warning{background-color:#ffeaa8;border:1px solid #ffc237;color:#826200}.noty_theme__relax.noty_type__warning .noty_buttons{border-color:#dfaa30}.noty_theme__relax.noty_type__error{background-color:#ff8181;border:1px solid #e25353;color:#fff}.noty_theme__relax.noty_type__error .noty_buttons{border-color:#8b0000}.noty_theme__relax.noty_type__info,.noty_theme__relax.noty_type__information{background-color:#78c5e7;border:1px solid #3badd6;color:#fff}.noty_theme__relax.noty_type__info .noty_buttons,.noty_theme__relax.noty_type__information .noty_buttons{border-color:#0b90c4}.noty_theme__relax.noty_type__success{background-color:#bcf5bc;border:1px solid #7cdd77;color:#006400}.noty_theme__relax.noty_type__success .noty_buttons{border-color:#50c24e}.noty_theme__metroui.noty_bar{margin:4px 0;overflow:hidden;position:relative;box-shadow:0 0 5px 0 rgba(0,0,0,.298039)}.noty_theme__metroui.noty_bar .noty_progressbar{position:absolute;left:0;bottom:0;height:3px;width:100%;background-color:#000;opacity:.2;filter:alpha(opacity=20)}.noty_theme__metroui.noty_bar .noty_body{padding:1.25em;font-size:14px}.noty_theme__metroui.noty_bar .noty_buttons{padding:0 10px .5em}.noty_theme__metroui.noty_type__alert,.noty_theme__metroui.noty_type__notification{background-color:#fff;color:#1d1d1d}.noty_theme__metroui.noty_type__warning{background-color:#fa6800;color:#fff}.noty_theme__metroui.noty_type__error{background-color:#ce352c;color:#fff}.noty_theme__metroui.noty_type__info,.noty_theme__metroui.noty_type__information{background-color:#1ba1e2;color:#fff}.noty_theme__metroui.noty_type__success{background-color:#60a917;color:#fff}.noty_theme__mint.noty_bar{margin:4px 0;overflow:hidden;border-radius:2px;position:relative}.noty_theme__mint.noty_bar .noty_body{padding:10px;font-size:14px}.noty_theme__mint.noty_bar .noty_buttons{padding:10px}.noty_theme__mint.noty_type__alert,.noty_theme__mint.noty_type__notification{background-color:#fff;border-bottom:1px solid #d1d1d1;color:#2f2f2f}.noty_theme__mint.noty_type__warning{background-color:#ffae42;border-bottom:1px solid #e89f3c;color:#fff}.noty_theme__mint.noty_type__error{background-color:#de636f;border-bottom:1px solid #ca5a65;color:#fff}.noty_theme__mint.noty_type__info,.noty_theme__mint.noty_type__information{background-color:#7f7eff;border-bottom:1px solid #7473e8;color:#fff}.noty_theme__mint.noty_type__success{background-color:#afc765;border-bottom:1px solid #a0b55c;color:#fff}.noty_theme__sunset.noty_bar{margin:4px 0;overflow:hidden;border-radius:2px;position:relative}.noty_theme__sunset.noty_bar .noty_body{padding:10px;font-size:14px;text-shadow:1px 1px 1px rgba(0,0,0,.1)}.noty_theme__sunset.noty_bar .noty_buttons{padding:10px}.noty_theme__sunset.noty_type__alert,.noty_theme__sunset.noty_type__notification{background-color:#073b4c;color:#fff}.noty_theme__sunset.noty_type__alert .noty_progressbar,.noty_theme__sunset.noty_type__notification .noty_progressbar{background-color:#fff}.noty_theme__sunset.noty_type__warning{background-color:#ffd166;color:#fff}.noty_theme__sunset.noty_type__error{background-color:#ef476f;color:#fff}.noty_theme__sunset.noty_type__error .noty_progressbar{opacity:.4}.noty_theme__sunset.noty_type__info,.noty_theme__sunset.noty_type__information{background-color:#118ab2;color:#fff}.noty_theme__sunset.noty_type__info .noty_progressbar,.noty_theme__sunset.noty_type__information .noty_progressbar{opacity:.6}.noty_theme__sunset.noty_type__success{background-color:#06d6a0;color:#fff}.noty_theme__bootstrap-v3.noty_bar{margin:4px 0;overflow:hidden;position:relative;border:1px solid transparent;border-radius:4px}.noty_theme__bootstrap-v3.noty_bar .noty_body{padding:15px}.noty_theme__bootstrap-v3.noty_bar .noty_buttons{padding:10px}.noty_theme__bootstrap-v3.noty_bar .noty_close_button{font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2;background:transparent}.noty_theme__bootstrap-v3.noty_bar .noty_close_button:hover{background:transparent;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}.noty_theme__bootstrap-v3.noty_type__alert,.noty_theme__bootstrap-v3.noty_type__notification{background-color:#fff;color:inherit}.noty_theme__bootstrap-v3.noty_type__warning{background-color:#fcf8e3;color:#8a6d3b;border-color:#faebcc}.noty_theme__bootstrap-v3.noty_type__error{background-color:#f2dede;color:#a94442;border-color:#ebccd1}.noty_theme__bootstrap-v3.noty_type__info,.noty_theme__bootstrap-v3.noty_type__information{background-color:#d9edf7;color:#31708f;border-color:#bce8f1}.noty_theme__bootstrap-v3.noty_type__success{background-color:#dff0d8;color:#3c763d;border-color:#d6e9c6}.noty_theme__bootstrap-v4.noty_bar{margin:4px 0;overflow:hidden;position:relative;border:1px solid transparent;border-radius:.25rem}.noty_theme__bootstrap-v4.noty_bar .noty_body{padding:.75rem 1.25rem}.noty_theme__bootstrap-v4.noty_bar .noty_buttons{padding:10px}.noty_theme__bootstrap-v4.noty_bar .noty_close_button{font-size:1.5rem;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.5;background:transparent}.noty_theme__bootstrap-v4.noty_bar .noty_close_button:hover{background:transparent;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.75}.noty_theme__bootstrap-v4.noty_type__alert,.noty_theme__bootstrap-v4.noty_type__notification{background-color:#fff;color:inherit}.noty_theme__bootstrap-v4.noty_type__warning{background-color:#fcf8e3;color:#8a6d3b;border-color:#faebcc}.noty_theme__bootstrap-v4.noty_type__error{background-color:#f2dede;color:#a94442;border-color:#ebccd1}.noty_theme__bootstrap-v4.noty_type__info,.noty_theme__bootstrap-v4.noty_type__information{background-color:#d9edf7;color:#31708f;border-color:#bce8f1}.noty_theme__bootstrap-v4.noty_type__success{background-color:#dff0d8;color:#3c763d;border-color:#d6e9c6}.noty_theme__semanticui.noty_bar{margin:4px 0;overflow:hidden;position:relative;border:1px solid transparent;font-size:1em;border-radius:.28571429rem;box-shadow:inset 0 0 0 1px rgba(34,36,38,.22),0 0 0 0 transparent}.noty_theme__semanticui.noty_bar .noty_body{padding:1em 1.5em;line-height:1.4285em}.noty_theme__semanticui.noty_bar .noty_buttons{padding:10px}.noty_theme__semanticui.noty_type__alert,.noty_theme__semanticui.noty_type__notification{background-color:#f8f8f9;color:rgba(0,0,0,.87)}.noty_theme__semanticui.noty_type__warning{background-color:#fffaf3;color:#573a08;box-shadow:inset 0 0 0 1px #c9ba9b,0 0 0 0 transparent}.noty_theme__semanticui.noty_type__error{background-color:#fff6f6;color:#9f3a38;box-shadow:inset 0 0 0 1px #e0b4b4,0 0 0 0 transparent}.noty_theme__semanticui.noty_type__info,.noty_theme__semanticui.noty_type__information{background-color:#f8ffff;color:#276f86;box-shadow:inset 0 0 0 1px #a9d5de,0 0 0 0 transparent}.noty_theme__semanticui.noty_type__success{background-color:#fcfff5;color:#2c662d;box-shadow:inset 0 0 0 1px #a3c293,0 0 0 0 transparent}.noty_theme__nest.noty_bar{margin:0 0 15px;overflow:hidden;border-radius:2px;position:relative;box-shadow:5px 4px 10px 0 rgba(0,0,0,.098039)}.noty_theme__nest.noty_bar .noty_body{padding:10px;font-size:14px;text-shadow:1px 1px 1px rgba(0,0,0,.1)}.noty_theme__nest.noty_bar .noty_buttons{padding:10px}.noty_layout .noty_theme__nest.noty_bar{z-index:5}.noty_layout .noty_theme__nest.noty_bar:nth-child(2){position:absolute;top:0;margin-top:4px;margin-right:-4px;margin-left:4px;z-index:4;width:100%}.noty_layout .noty_theme__nest.noty_bar:nth-child(3){position:absolute;top:0;margin-top:8px;margin-right:-8px;margin-left:8px;z-index:3;width:100%}.noty_layout .noty_theme__nest.noty_bar:nth-child(4){position:absolute;top:0;margin-top:12px;margin-right:-12px;margin-left:12px;z-index:2;width:100%}.noty_layout .noty_theme__nest.noty_bar:nth-child(5){position:absolute;top:0;margin-top:16px;margin-right:-16px;margin-left:16px;z-index:1;width:100%}.noty_layout .noty_theme__nest.noty_bar:nth-child(n+6){position:absolute;top:0;margin-top:20px;margin-right:-20px;margin-left:20px;z-index:-1;width:100%}#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(2),#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(2){margin-top:4px;margin-left:-4px;margin-right:4px}#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(3),#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(3){margin-top:8px;margin-left:-8px;margin-right:8px}#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(4),#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(4){margin-top:12px;margin-left:-12px;margin-right:12px}#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(5),#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(5){margin-top:16px;margin-left:-16px;margin-right:16px}#noty_layout__bottomLeft .noty_theme__nest.noty_bar:nth-child(n+6),#noty_layout__topLeft .noty_theme__nest.noty_bar:nth-child(n+6){margin-top:20px;margin-left:-20px;margin-right:20px}.noty_theme__nest.noty_type__alert,.noty_theme__nest.noty_type__notification{background-color:#073b4c;color:#fff}.noty_theme__nest.noty_type__alert .noty_progressbar,.noty_theme__nest.noty_type__notification .noty_progressbar{background-color:#fff}.noty_theme__nest.noty_type__warning{background-color:#ffd166;color:#fff}.noty_theme__nest.noty_type__error{background-color:#ef476f;color:#fff}.noty_theme__nest.noty_type__error .noty_progressbar{opacity:.4}.noty_theme__nest.noty_type__info,.noty_theme__nest.noty_type__information{background-color:#118ab2;color:#fff}.noty_theme__nest.noty_type__info .noty_progressbar,.noty_theme__nest.noty_type__information .noty_progressbar{opacity:.6}.noty_theme__nest.noty_type__success{background-color:#06d6a0;color:#fff}.noty_theme__premid.noty_bar{font-weight:400;text-align:center;font-size:.9em}.noty_theme__premid.noty_bar .noty_body{padding:20px}.noty_theme__premid.noty_type__error{background-color:#f54343;color:#fff;box-shadow:0 2px 16px 0 rgba(245,73,67,.1)}.noty_theme__premid.noty_type__error .noty_buttons{border-color:#8b0000}.noty_theme__premid.noty_type__info,.noty_theme__premid.noty_type__information{background-color:#78c5e7;border:1px solid #3badd6;color:#fff}.noty_theme__premid.noty_type__info .noty_buttons,.noty_theme__premid.noty_type__information .noty_buttons{border-color:#0b90c4}.noty_theme__premid.noty_type__success{background-color:#7289da;color:#fff;box-shadow:0 2px 16px 0 rgba(114,137,218,.2)}.noty_theme__premid.noty_type__success .noty_buttons{border-color:#50c24e}.noty_theme__premid.noty_bar{margin:0;padding:12px 0;overflow:hidden;border-radius:0;position:relative}.noty_theme__premid.noty_bar .noty_body{padding:10px}.noty_theme__premid.noty_bar .noty_buttons{border-top:1px solid #e7e7e7;padding:5px 10px}.noty_theme__premid.noty_type__alert,.noty_theme__premid.noty_type__notification{background-color:#fff;border:1px solid #dedede;color:#444}.noty_theme__premid.noty_type__warning{background-color:#ffeaa8;border:1px solid #ffc237;color:#826200}.noty_theme__premid.noty_type__warning .noty_buttons{border-color:#dfaa30}@media only screen and (max-width:1200px){body .on-desktop{display:none!important}body .store-grid{flex-direction:column}body .store-grid .store-grid__sidebar{width:90%;max-height:160px;overflow-y:scroll;z-index:999;margin:0 auto;box-shadow:0 2px 32px 0 #111218}body .pagination-container{margin:0}body .pagination-container .button.button--pagination.hidden{width:0;height:0}body .feature-cards{flex-wrap:wrap;flex-flow:wrap}body .feature-cards .feature-cards__card{width:250px}body .store-card{width:330px}body .store-card .store-card__service-info h2{font-size:1.2em}body .store-card .store-card__verified{position:relative;bottom:-2px}body .promo-container{flex-wrap:wrap;flex-flow:wrap;justify-content:center}body .promo-container .promo-container__presences{margin-left:0}body .promo-container .promo-container__heading{margin-right:0}body .footer-grid .grid__section .section__title{font-size:1.3em;margin:20px auto}body .footer-grid{flex-wrap:wrap}body a.button,body button{padding:10px 15px;font-size:16px}body .presence{width:auto;margin:20px}.language-notify__wrapper{padding:1.4rem}.language-notify__wrapper .language-notify{flex-wrap:wrap}.language-notify__wrapper .language-notify .language-notify__content{flex:1 1 0;margin:0}.language-notify__wrapper .language-notify .language-notify__buttons{margin:1rem auto}.dl-container .dl-container__section_header{padding-top:1em}.section-heading .section-heading__title{font-size:2.5rem}.section-heading .section-heading__subtitle{font-size:1rem}.dl-container .dl-container__header{flex-wrap:wrap}.dl-container .dl-container__header>div{margin-bottom:1em}.dl-container .dl-container__header .header__content{width:100%}.dl-container .dl-container__header .header__content h1{font-size:46px}.dl-container .dl-container__header .header__content p{font-size:18px}.dl-container .dl-container__header .header__steps{width:100%}.dl-container__cards{flex-wrap:wrap}.section-container{min-height:600px}.section-container .section-container__details{font-size:.7em}.section-container .section-container__promo .section-container__promo--image1{max-width:400px}.button.button--lg{padding:10px 20px;font-size:1em}.container_maintenance-page{color:#fff;align-items:center;text-align:center}.container_maintenance-page .maintenance-links{margin-top:3em}.container_maintenance-page .logo{width:300px}}@media only screen and (max-width:580px){.promo-container .promo-container__heading .heading__logo{display:flex}.promo-container .promo-container__heading .heading__logo img{margin:0 auto}.promo-container .promo-container__heading .heading__text{margin-left:0;display:block}.promo-container .promo-container__heading .heading__text h1{text-align:center}.promo-container .promo-container__heading .heading__text p{left:0;text-align:center;margin:0 auto}.promo-container .promo-container__presences{width:-webkit-fill-available;width:-moz-available;width:stretch}.discord-usercard{width:auto;margin:1em}.fullpresence-container .fullpresence__content h2.content__title{font-size:22px}.fullpresence-container .fullpresence__header{padding:2em;margin:1rem 0}.fullpresence-container .fullpresence__header .header__title h1{font-size:24px}.fullpresence-container .fullpresence__header .fullpresence__verified{height:16px;width:16px}.fullpresence-container .fullpresence__content{flex-wrap:wrap;justify-content:center}.fullpresence-container .fullpresence__content .content__description,.fullpresence-container .fullpresence__content .content__info{flex:1;margin:.5em 0}.fullpresence-container .fullpresence__content .content__description{margin-right:0}.fullpresence-container .fullpresence__content .content__info{margin-left:0}body .store-card{width:280px;height:120px}body .store-card .store-card__service-logo img{max-width:50px}body .store-card .store-card__service-info h2{font-size:1.1em}.heading__button-group a.button,.heading__button-group button{width:-webkit-fill-available;width:-moz-available;width:stretch;margin:5px 1em}.section-heading .section-heading__title{font-size:2em}.features-container{padding:0}.section-container{min-height:600px;flex-flow:column-reverse;flex-wrap:wrap;justify-content:center}.section-container_reverse{flex-flow:column}.section-container .section-container__details{width:100%;font-size:.6em;margin-bottom:3em}.section-container .section-container__promo .section-container__promo--image1,.section-container .section-container__promo video{max-width:300px}.container_maintenance-page{margin-top:3em;color:#fff;font-size:12px;align-items:center;text-align:center}.container_maintenance-page .maintenance-links{margin-top:4em}.container_maintenance-page .logo{width:150px}}@media(min-width:1200px){.on-mobile{display:none!important}.container_maintenance-page{margin-top:1em;color:#fff;height:50vh;align-items:center;text-align:center}.container_maintenance-page h1{font-size:3em}.container_maintenance-page .maintenance-links{margin-top:12em}.container_maintenance-page .logo{width:300px}}@media only screen and (max-width:600px){.fullpresence-container .fullpresence__header .header__title h1{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:39vw}}@media only screen and (min-width:1300px)and (max-width:1800px){.container_maintenance-page{margin-top:1em;color:#fff;height:50vh;align-items:center;text-align:center}.container_maintenance-page h1{font-size:3em}.container_maintenance-page .maintenance-links{margin-top:6em}.container_maintenance-page .logo{width:250px}}.invisible{opacity:0}', ""]), e.exports = j
    }, function(e, r, t) {
        e.exports = t.p + "fonts/DiscordFontBlack.6e3c05e.woff2"
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48dGl0bGU+aHlwZXNxdWFkLWV2ZW50LWF0dGVuZGVlPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzEuNDMsOC43OSwxOC43NywxNy4xYTEuNDcsMS40NywwLDAsMC0uNTEuNTdsLTEuOTMsMy44N2EuMzYuMzYsMCwwLDEtLjY2LDBsLTEuOTMtMy44N2ExLjQ3LDEuNDcsMCwwLDAtLjUxLS41N0wuNTcsOC43OUEuMzcuMzcsMCwwLDAsMCw5LjI3TDUuMjksMTkuNTZBLjM4LjM4LDAsMCwxLDUsMjAuMUgxLjgyYS4zNy4zNywwLDAsMC0uMjIuNjdMMTUuNzgsMzAuOTNhLjM5LjM5LDAsMCwwLC40NCwwTDMwLjQsMjAuNzdhLjM3LjM3LDAsMCwwLS4yMi0uNjdIMjdhLjM4LjM4LDAsMCwxLS4zMy0uNTRMMzIsOS4yN0EuMzcuMzcsMCwwLDAsMzEuNDMsOC43OVoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYuMjgsMS4xN2wxLjMsMi42NWEuMzMuMzMsMCwwLDAsLjIzLjE3bDIuOTMuNDJhLjMxLjMxLDAsMCwxLC4xNy41M0wxOC43OSw3YS4zMy4zMywwLDAsMC0uMDkuMjdsLjUsMi45MWEuMy4zLDAsMCwxLS40NC4zMkwxNi4xNCw5LjEzYS4yOC4yOCwwLDAsMC0uMjgsMEwxMy4yNCwxMC41YS4zLjMsMCwwLDEtLjQ0LS4zMmwuNS0yLjkxQS4zMy4zMywwLDAsMCwxMy4yMSw3TDExLjA5LDQuOTRhLjMxLjMxLDAsMCwxLC4xNy0uNTNMMTQuMTksNGEuMzMuMzMsMCwwLDAsLjIzLS4xN2wxLjMtMi42NUEuMzEuMzEsMCwwLDEsMTYuMjgsMS4xN1oiLz48L3N2Zz4="
    }, function(e, r, t) {
        e.exports = t.p + "img/nitro.a929d67.svg"
    }, function(e, r, t) {
        e.exports = t.p + "img/early.a7eb2a4.svg"
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMwIDMyIj48dGl0bGU+SHlwZVNxdWFkIEJhZGdlOiBIb3VzZSBvZiBCcmF2ZXJ5PC90aXRsZT48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjkuMDkuMjVILjY0QS40NC40NCwwLDAsMCwuMi42OWgwVjIwLjM0YS40Ni40NiwwLDAsMCwuMTYuMzRsMTQuMjMsMTFhLjQ0LjQ0LDAsMCwwLC41NSwwbDE0LjIyLTExYS40NC40NCwwLDAsMCwuMTctLjM0Vi42OWEuNDQuNDQsMCwwLDAtLjQ0LS40NFptLTQsOC45M0wyMS43NSwxNS44YS4yNC4yNCwwLDAsMCwuMDkuMzJoMi4xYS4yMS4yMSwwLDAsMSwuMjcuMTNoMGEuMjMuMjMsMCwwLDEtLjEzLjI5TDE1LDIzLjExYS4yNC4yNCwwLDAsMS0uMjgsMEw1LjUzLDE2LjU4YS4yMi4yMiwwLDAsMS0uMTQtLjI4aDBhLjIxLjIxLDAsMCwxLC4yNy0uMTRoMmEuMjUuMjUsMCwwLDAsLjIzLS4yNS4yLjIsMCwwLDAsMC0uMTFMNC42LDkuMThhLjIzLjIzLDAsMCwxLC4xLS4yOS4yNC4yNCwwLDAsMSwuMjYsMGw4LjEyLDUuMzNhMS4xMiwxLjEyLDAsMCwxLC4zNC4zOGwxLjIzLDIuNDlhLjI1LjI1LDAsMCwwLC4zNS4wOGgwYS4zLjMsMCwwLDAsLjA4LS4wOGwxLjIzLTIuNDlhMS4xLDEuMSwwLDAsMSwuMzMtLjM4bDguMTMtNS4zM2EuMjUuMjUsMCwwLDEsLjM0LDAsLjI4LjI4LDAsMCwxLDAsLjI1WiIvPjwvc3ZnPg=="
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48dGl0bGU+SHlwZVNxdWFkIEJhZGdlOiBIb3VzZSBvZiBCcmlsbGlhbmNlPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTYsLjI1QTE1LjY2LDE1LjY2LDAsMCwwLC4yNSwxNS44MlYxNkExNS43NSwxNS43NSwwLDEsMCwxNi4xOC4yNVpNMjYuMTYsMTAsMjIuNzcsMTYuNGMwLC4yLDAsLjIuMi4zOWgyYy4yMSwwLC4yMSwwLC4yMS4yMWgwdi4ybC05LDYuMzhIMTZMNi44NSwxNy4ydi0uNDFoMi4yYS4xOC4xOCwwLDAsMCwuMi0uMThoMEw1Ljg0LDEwdi0uNGguNDFsOCw1LjE4Yy4yLDAsLjIuMi40MS40MWwxLjE5LDIuNTljLjIsMCwuMi4xOS40LDBsLjItLjIsMS4yLTIuMzljMC0uMjEuMi0uMjEuMzktLjQxbDgtNS4zN2MuMiwwLC4yLDAsLjIuMTloMFYxMFoiLz48L3N2Zz4="
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48dGl0bGU+SHlwZVNxdWFkIEJhZGdlOiBIb3VzZSBvZiBCYWxhbmNlPC90aXRsZT48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMzEuNjMsMTUuNzMsMTYuMjcuMzdhLjM3LjM3LDAsMCwwLS41MiwwaDBMLjM3LDE1LjczYS4zNy4zNywwLDAsMCwwLC41MmgwTDE1LjczLDMxLjYzYS4zNy4zNywwLDAsMCwuNTIsMGgwTDMxLjYzLDE2LjI3YS4zNy4zNywwLDAsMCwwLS41MlpNMjUsMTIuMjlsLTMsNS43OWEuMjIuMjIsMCwwLDAsLjEyLjI4aDEuODlhLjIuMiwwLDAsMSwuMTguMjMuMTcuMTcsMCwwLDEtLjA3LjE0bC03LjkyLDUuNzJhLjI2LjI2LDAsMCwxLS4yNCwwTDgsMTguNzRhLjIyLjIyLDAsMCwxLDAtLjNIOGEuMjQuMjQsMCwwLDEsLjEzLS4wN0g5LjlhLjIyLjIyLDAsMCwwLC4yMi0uMjJoMHYtLjA3bC0zLTUuNzlBLjIyLjIyLDAsMCwxLDcuMjIsMTJhLjE3LjE3LDAsMCwxLC4xNCwwbDcuMTIsNC42N2EuNjUuNjUsMCwwLDEsLjI5LjMybDEuMDksMi4xOGEuMTkuMTksMCwwLDAsLjI2LjA5LjIyLjIyLDAsMCwwLC4xLS4wOUwxNy4yNywxN2ExLDEsMCwwLDEsLjI5LS4zMkwyNC42OCwxMmEuMjEuMjEsMCwwLDEsLjI4LjFoMEEuMi4yLDAsMCwxLDI1LDEyLjI5WiIvPjwvc3ZnPg=="
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9Ii41IiBkPSJNMTIgNEwyIDIwSDIyTDEyIDRaTTEyIDkuN0wxNi42IDE3SDcuNEwxMiA5LjdaIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTkuMjAwMDEgMTZMMTIgMTEuNUwxNC44IDE2SDkuMjAwMDFaIi8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTEyIDRWOS43TDE2LjYgMTdMMjIgMjBMMTIgNFoiLz48L3N2Zz4="
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5MCIgaGVpZ2h0PSI5MCIgdmlld0JveD0iMCAwIDkwIDkwIj48cGF0aCBkPSJNOTAsNjQuNzUxMDk1NSBMOTAsNSBDOTAsMi4yMzg1NzYyNSA4Ny43NjE0MjM3LC01LjA3MjY1MzEzZS0xNiA4NSwwIEw1LDAgTDUsMCBDMi4yMzg1NzYyNSw1LjA3MjY1MzEzZS0xNiAtMy4zODE3Njg3NmUtMTYsMi4yMzg1NzYyNSAwLDUgTDAsNSBMMCw4NSBDMy4zODE3Njg3NmUtMTYsODcuNzYxNDIzNyAyLjIzODU3NjI1LDkwIDUsOTAgTDY0Ljc1MTA5NTUsOTAgQzYyLjM5OTMzNiw4Ni45NTgxMDc1IDYxLDgzLjE0MjQ3IDYxLDc5IEM2MSw2OS4wNTg4NzQ1IDY5LjA1ODg3NDUsNjEgNzksNjEgQzgzLjE0MjQ3LDYxIDg2Ljk1ODEwNzUsNjIuMzk5MzM2IDkwLDY0Ljc1MTA5NTUgWiIvPjwvc3ZnPg=="
    }, function(e, r, t) {
        "use strict";
        t(170)
    }, function(e, r, t) {
        var o = t(73)(!1);
        o.push([e.i, '.navbar[data-v-3726ca2b]{background-color:#111218;position:relative;height:75px;margin:0 15px;justify-content:space-between}.navbar[data-v-3726ca2b],.navbar .logoWrapper[data-v-3726ca2b]{display:grid;grid-template-columns:-webkit-min-content -webkit-min-content;grid-template-columns:min-content min-content;align-items:center}.navbar .logoWrapper[data-v-3726ca2b]{cursor:pointer;height:40px}.navbar .logoWrapper h1[data-v-3726ca2b]{margin:0;font-family:"Discord Font","Segoe UI",Tahoma,Geneva,Verdana,sans-serif}.navbar .logoWrapper .status[data-v-3726ca2b]{display:flex;align-items:center;font-size:small;width:25px;height:25px;border-radius:100%;margin-left:.6em;-webkit-animation:pulseWarn 2s infinite;animation:pulseWarn 2s infinite;background-color:#ff0;color:#000;cursor:pointer;justify-content:center}.navbar .links[data-v-3726ca2b]{display:flex;font-size:1.1rem;font-weight:800;text-transform:uppercase}.navbar .links a[data-v-3726ca2b]{transition:margin .25s ease-out;white-space:nowrap;display:grid;grid-template-columns:-webkit-min-content -webkit-min-content;grid-template-columns:min-content min-content;align-items:center;margin:0 1.3em;color:#6f789b}.navbar .links a[data-v-3726ca2b]:hover{color:#7289da}.navbar .links a:hover .round-icon[data-v-3726ca2b]{background-color:#7289da}.navbar .links a:hover .round-icon i[data-v-3726ca2b]{color:#fff}.navbar .links a .round-icon[data-v-3726ca2b],.navbar .links a img[data-v-3726ca2b]{transition:background-color .15s ease-out;align-items:center;display:flex;width:30px;height:30px;border-radius:100em;background-color:#323748;margin-right:.5em;justify-content:center}.navbar .links a .round-icon i[data-v-3726ca2b],.navbar .links a img i[data-v-3726ca2b]{transition:color .15s ease-out!important;font-size:.8em}.navbar .links a img[data-v-3726ca2b]{height:45px}.navbar .links .user-link[data-v-3726ca2b]{color:#646e90;display:inline;position:relative;white-space:nowrap}.navbar .links .loggedin[data-v-3726ca2b]{display:inline-block;white-space:nowrap;font-size:1rem;background:linear-gradient(30deg,#7289da,#b3aeff);background-clip:text;-webkit-background-clip:text;-webkit-text-fill-color:transparent}.navbar .links .user-info[data-v-3726ca2b]{z-index:999;width:auto;display:flex;justify-content:space-between;-ms-user-select:none;user-select:none;-webkit-user-select:none;-moz-user-select:none}.navbar .links .user-info img[data-v-3726ca2b]{align-self:center;justify-self:center;place-self:center;width:50px;height:50px;border-radius:100%;margin-right:8px}.navbar .links .username[data-v-3726ca2b]{display:flex;color:#fff;font-size:1.1rem;white-space:nowrap;vertical-align:bottom}.navbar .links .tag[data-v-3726ca2b]{display:flex;font-size:.8rem;color:#99aab5;align-self:flex-end}.navbar .hamburger[data-v-3726ca2b]{font-size:1.5em;display:none;width:25px;height:25px;text-align:center}.navbar .dropdown-container[data-v-3726ca2b]{position:absolute;right:0;padding-top:.75em}.navbar .dropdown-container .dropdown-content a[data-v-3726ca2b]{margin:unset!important}.navbar .dropdown[data-v-3726ca2b]{position:relative;display:inline-block;align-self:center;justify-self:center;place-self:center}.navbar .dropdown-content[data-v-3726ca2b]{position:absolute;right:0;background-color:#191b24;border-radius:10px;width:inherit;box-shadow:0 8px 16px 0 rgba(0,0,0,.2)}.navbar .dropdown-content a[data-v-3726ca2b]{color:#000;padding:10px 1.3em;text-decoration:none;width:inherit}.navbar .dropdown-content a[data-v-3726ca2b]:hover{background-color:#111218}.mobileLinks[data-v-3726ca2b]{position:absolute;top:75px;z-index:99999;background:#111218;display:grid;grid-gap:10px;padding-bottom:10px}.mobileLinks .mobile-active[data-v-3726ca2b]{background-color:#7289da;color:#fff}.mobileLinks a[data-v-3726ca2b]{display:grid;grid-template-columns:auto -webkit-min-content auto;grid-template-columns:auto min-content auto;align-items:center;width:100vw;height:35px;font-size:20px;font-weight:800;text-transform:uppercase}.mobileLinks a span[data-v-3726ca2b]{grid-area:1/3;width:-webkit-max-content;width:-moz-max-content;width:max-content}.nuxt-link-active[data-v-3726ca2b]{color:#7289da!important}.nuxt-link-active span[data-v-3726ca2b]{background-color:#7289da!important}.nuxt-link-active span i[data-v-3726ca2b]{color:#fff}@media only screen and (max-width:900px){.links a[data-v-3726ca2b]{margin:0 .5em!important}}@media only screen and (max-width:715px){.links[data-v-3726ca2b]{display:none!important}.hamburger[data-v-3726ca2b]{display:block!important}}', ""]), e.exports = o
    }, function(e, r, t) {
        e.exports = t.p + "img/bitrock_installbuilder.05dcf95.png"
    }, function(e, r) {
        e.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNzUgNTkiPjxkZWZzPjxzdHlsZT4uY2xzLTJ7ZmlsbDp1cmwoI2xpbmVhci1ncmFkaWVudCl9LmNscy0ze2ZpbGw6IzI2ODRmZn08L3N0eWxlPjxsaW5lYXJHcmFkaWVudCBpZD0ibGluZWFyLWdyYWRpZW50IiB4MT0iMzcuMzEiIHgyPSIzNy4zMSIgeTE9IjUyLjY3IiB5Mj0iMjEuNzIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMyNjg0ZmYiLz48c3RvcCBvZmZzZXQ9Ii44MiIgc3RvcC1jb2xvcj0iIzAwNTJjYyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjx0aXRsZT5TdGF0dXNwYWdlLWJsdWU8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJCbHVlIj48Y2lyY2xlIGN4PSIzNy4zMSIgY3k9IjQxLjIxIiByPSIxNy40NyIgY2xhc3M9ImNscy0yIi8+PHBhdGggZD0iTS40NywyMSw5Ljg1LDMyLjExYTIsMiwwLDAsMCwyLjg0LjIxYzE1LjE5LTEzLjYyLDM0LTEzLjYyLDQ5LjIzLDBhMiwyLDAsMCwwLDIuODQtLjIxTDc0LjE1LDIxYTIsMiwwLDAsMC0uMjMtMi44MUM1MS44Ny0xLjEsMjIuNzQtMS4xLjcsMTguMTlBMiwyLDAsMCwwLC40NywyMVoiIGNsYXNzPSJjbHMtMyIvPjwvZz48L2c+PC9zdmc+"
    }, function(e, r, t) {
        "use strict";
        t(171)
    }, function(e, r, t) {
        var o = t(73)(!1);
        o.push([e.i, ".footer[data-v-386ccbc0]{flex:0 0 auto;background:transparent;color:#fff;padding:3.5em 20px 20px}.footer .socials i[data-v-386ccbc0]{width:1em}.footer .partner-logo[data-v-386ccbc0]{display:inline-block}.footer .partner-logo img[data-v-386ccbc0]{width:42px;margin:2px;vertical-align:middle;transition:all .2s ease;filter:grayscale(100%);opacity:.5}.footer .partner-logo:hover img[data-v-386ccbc0]{filter:grayscale(0);opacity:1}.footer .partner-more[data-v-386ccbc0]{font-size:small;vertical-align:middle;transition:all .2s ease;opacity:.5;cursor:pointer}.footer .partner-more[data-v-386ccbc0]:hover{opacity:1}.footer-copyright[data-v-386ccbc0]{text-align:center;font-size:14px;font-weight:700;color:#2e3242}.footer-copyright p[data-v-386ccbc0]{margin:3px}.footer-copyright .footer__language-switcher[data-v-386ccbc0]{color:#99aab5;margin-top:2em}.footer-grid[data-v-386ccbc0]{max-width:1600px;margin:0 auto;display:flex;position:relative;justify-content:space-between;align-content:center}.footer-grid .grid__section[data-v-386ccbc0]{margin:1em}.footer-grid .grid__section .section__title[data-v-386ccbc0]{font-weight:700;margin:7px auto;font-size:18px;color:#fff}.footer-grid .grid__section div p[data-v-386ccbc0]{color:#58607e;margin:7px auto;font-weight:600}.footer-grid .grid__section div a[data-v-386ccbc0]:not(.partner-logo){font-weight:600;display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin:2px 0}.footer-grid .grid__section div a[data-v-386ccbc0]:not(.partner-logo):not(.button){color:#58607e;transition:color .2s ease}.footer-grid .grid__section div a[data-v-386ccbc0]:not(.partner-logo):not(.button):hover{color:#646e90;transition:color 0s ease}@media only screen and (max-width:600px){#footer .grid__section[data-v-386ccbc0]:first-child{margin:auto}.footer-copyright[data-v-386ccbc0]{margin-top:24px}}@media only screen and (max-width:600px){.friendly[data-v-386ccbc0]{text-align:right;text-align:-webkit-right}}", ""]), e.exports = o
    }, function(e, r, t) {
        "use strict";
        t(172)
    }, function(e, r, t) {
        var o = t(73)(!1);
        o.push([e.i, ".adswrapper[data-v-4cff79de]{justify-content:space-between;display:flex;padding:0 1em;height:85vh}.skip-anyway[data-v-4cff79de]{font-size:1rem;position:absolute;bottom:-1.5em;left:0;width:100%;transition:opacity .2s ease-in-out}.skip-anyway[data-v-4cff79de]:hover{opacity:.75}.space .left[data-v-4cff79de],.space .right[data-v-4cff79de]{width:250px;height:85vh}.space.bottom[data-v-4cff79de]{text-align:-webkit-center;text-align:-moz-center;width:100%;height:250px}.note[data-v-4cff79de]{position:absolute;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);box-shadow:0 10px 20px -2px rgba(27,33,58,.4);background-color:#191b24;font-size:25px;width:350px;padding:15px;border-radius:10px}.note.smol[data-v-4cff79de]{width:400px;padding:1em}.note.smol img[data-v-4cff79de]{height:128px}.note.smol .controls[data-v-4cff79de]{position:absolute;right:0;bottom:0;padding:.75em}.note.smol .controls .button[data-v-4cff79de]{margin-right:unset;padding:.5em 1em;font-size:large}.note .title[data-v-4cff79de]{margin:0;font-size:large;color:#7289da;text-transform:uppercase}.note .disable[data-v-4cff79de]{display:flex}.note .disable p[data-v-4cff79de]{height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:0;margin:0 0 0 4px;font-size:large;text-overflow:ellipsis;overflow:hidden}.note .description[data-v-4cff79de]{margin:0;font-size:large}@media only screen and (max-width:600px){.adswrapper[data-v-4cff79de]{display:unset}.note[data-v-4cff79de]{position:relative;left:0;transform:unset;margin-bottom:unset;width:unset}.note.smol[data-v-4cff79de]{margin-bottom:1em;width:unset}.note .mobile[data-v-4cff79de]{font-size:medium;text-align:center;padding-top:1em}.note .mobile .disabled[data-v-4cff79de]{filter:grayscale(1);transition:filter .1s cubic-bezier(.25,.46,.45,.94)}.space[data-v-4cff79de]{width:250px;height:600px}.space.bottom[data-v-4cff79de]{position:absolute;bottom:0}}", ""]), e.exports = o
    }, function(e, r, t) {
        "use strict";
        t.r(r), t.d(r, "state", (function() {
            return o
        })), t.d(r, "mutations", (function() {
            return n
        }));
        var o = function() {
                return {
                    platform: "",
                    type: ""
                }
            },
            n = {
                setDL: function(e, r) {
                    e.platform = r.platform, e.type = r.type
                }
            }
    }, function(e, r, t) {
        "use strict";
        t.r(r), t.d(r, "state", (function() {
            return o
        })), t.d(r, "getters", (function() {
            return n
        })), t.d(r, "mutations", (function() {
            return l
        }));
        var o = function() {
                return {
                    extensionInstalled: !1
                }
            },
            n = {
                userHasExtension: function(e) {
                    return e.extensionInstalled
                }
            },
            l = {
                setInstalled: function(e, r) {
                    e.extensionInstalled = r
                }
            }
    }, function(e, r, t) {
        "use strict";
        t.r(r), t.d(r, "state", (function() {
            return o
        })), t.d(r, "getters", (function() {
            return n
        })), t.d(r, "actions", (function() {
            return l
        })), t.d(r, "mutations", (function() {
            return d
        }));
        t(7), t(55), t(15), t(54), t(35), t(50), t(16);
        var o = function() {
                return {
                    addedPresences: [],
                    likedPresences: []
                }
            },
            n = {
                presenceList: function(e) {
                    return e.addedPresences
                }
            },
            l = {
                getPresences: function(e) {
                    return new Promise((function(r, t) {
                        setTimeout((function() {
                            r(e.state.addedPresences)
                        }), 100)
                    }))
                }
            },
            d = {
                set: function(e, r) {
                    e.addedPresences = r
                },
                add: function(e, r) {
                    e.addedPresences.push(r)
                },
                remove: function(e, r) {
                    e.addedPresences.pop(r)
                },
                initializeLikedPresences: function(e, r) {
                    var t = r.getItem("likedPresences");
                    t && t && t.split(",").length > 0 && (e.likedPresences = t.split(","))
                },
                like: function(e, r) {
                    e.likedPresences.includes(r) ? e.likedPresences = e.likedPresences.filter((function(i) {
                        return i !== r
                    })) : e.likedPresences.push(r)
                }
            }
    }, , , , , , , , , , , , , , , , , , , , , function(e, r, t) {
        var map = {
            "./ar_SA.json": 276,
            "./az.json": 277,
            "./bg.json": 278,
            "./bn_BD.json": 279,
            "./bs_BA.json": 280,
            "./cs_CZ.json": 281,
            "./cy_GB.json": 282,
            "./da_DK.json": 283,
            "./de.json": 284,
            "./el_GR.json": 285,
            "./en.json": 286,
            "./es.json": 287,
            "./es_MX.json": 288,
            "./et_EE.json": 289,
            "./fa_IR.json": 290,
            "./fi.json": 291,
            "./fr.json": 292,
            "./ga_IE.json": 293,
            "./he_IL.json": 294,
            "./hi_IN.json": 295,
            "./hr.json": 296,
            "./hu.json": 297,
            "./id.json": 298,
            "./is.json": 299,
            "./it.json": 300,
            "./ja_JP.json": 301,
            "./ko_KR.json": 302,
            "./lt.json": 303,
            "./lv.json": 304,
            "./ms_MY.json": 305,
            "./nl.json": 306,
            "./no.json": 307,
            "./pl.json": 308,
            "./pt.json": 309,
            "./pt_BR.json": 310,
            "./ro.json": 311,
            "./ru.json": 312,
            "./sk.json": 313,
            "./sl_SI.json": 314,
            "./sv_SE.json": 315,
            "./th.json": 316,
            "./tr.json": 317,
            "./uk_UA.json": 318,
            "./uz.json": 319,
            "./vi_VN.json": 320,
            "./zh_CN.json": 321,
            "./zh_TW.json": 322
        };

        function o(e) {
            var r = n(e);
            return t(r)
        }

        function n(e) {
            if (!t.o(map, e)) {
                var r = new Error("Cannot find module '" + e + "'");
                throw r.code = "MODULE_NOT_FOUND", r
            }
            return map[e]
        }
        o.keys = function() {
            return Object.keys(map)
        }, o.resolve = n, e.exports = o, o.id = 275
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"هل تريد مزايا جديدة؟","beta.description.1":"**PreMiD Beta** متوفر الآن للجميع!","beta.description.2":"على ماذا ستحصل إذا قمت بالتسجيل؟","beta.features.1":"آخر المميزات","beta.features.2":"الوصول إلى قنوات PreMiD للرسائل السرية","beta.features.3":"رول مميز على سيرفرنا في ديسكورد","beta.register.text":"مستعد لذلك؟ انضم إلى {0} من مجربين بيتا أخرين!","beta.register.button":"قم بالتسجيل الآن!","thankyou.title":"رائع! أنت الآن مستخدم بيتا!","thankyou.description":"يعمل الفريق الخفي على إدخالك في برنامجنا التجريبي بأسرع ما يمكن. شكرا لك على التسجيل!","error.noslots":"يبدو أننا لا نملك أي فتحات بيتا أخرى متاحة.","contributors.headings.staff":"الطاقم","contributors.headings.supporters":"الداعمين","contributors.headings.translators":"المترجمين","contributors.roles.projectLeader":"قائد المشروع","contributors.roles.staffCoordinator":"منسق شؤون الطاقم","contributors.roles.marketingDirector":"مدير التسويق","contributors.roles.administrator":"المسؤول","contributors.roles.reviewer":"مراجع","contributors.roles.localizationManager":"مدير الشؤون المحلية","contributors.roles.developer":"مطور","contributors.roles.designer":"مصمم","contributors.roles.moderator":"مشرف","contributors.roles.supportAgent":"عميل الدعم","contributors.roles.representative":"ممثل","contributors.roles.proofreader":"مدقق لغوي","contributors.roles.donator":"متبرع","contributors.roles.booster":"داعم","contributors.roles.translator":"مترجم","contributors.cards.copyUserId":"انقر لنسخ أيدي المستخدم.","contributors.cards.userIdCopied":"تم نسخ أيدي المستخدم!","downloads.header.title":"حان الوقت الإظهار.","downloads.header.subtitle":"استخدم PreMiD الآن وأظهر لأصدقائك ما تفعله ، ربما تجد شخصًا لديه نفس الاهتمامات.","downloads.instructions.heading":"إبدء الان","downloads.instructions.step.1":"تحميل PreMiD","downloads.instructions.step.2":"قم بتثبيت تطبيقنا","downloads.instructions.step.3":"أضف ملحقنا إلى متصفحك","downloads.instructions.step.4":"أعد تحميل هذا الموقع وتحقق مما إذا كان الملحق متصل","downloads.instructions.footer":"هل لا تزال تواجه مشاكل؟ {0}","downloads.instructions.footer.link":"نحن هنا للمساعدة!","downloads.appdownloading.header":"التطبيق","downloads.extdownloading.header":"الملحق","downloads.tooltips.os.not.supported.part1":"تحذير:","downloads.tooltips.os.not.supported.part2":".{0} هذا النظام ليس مدعما بشكل رسمي، البرنامج قد لا يشتغل بطريقة كاملة","downloads.mobile.errorMessage":"يرجى العلم بأن PreMiD غير مدعوم على الهواتف المحمولة.","downloads.mobile.showDownloads":"إظهار التنزيلات","downloads.mobile.hideDownloads":"إخفاء التنزيلات","downloads.warning.differentVersion":"الإصدار الحالي من هذا النظام هو {0} (هذا الإصدار خاص بنظام لينكس ولا ينطبق على الأنظمة الأخرى).","downloads.warning.differentVersion2":"هذا الإصدار خاص بـلينكس، ولا ينطبق على أنظمة أخرى. الإصدار الرئيسي للتطبيق هو {0}","downloads.error.login":"يرجى تسجيل الدخول لرؤية هذه التنزيلات.","downloads.error.noaccess.title":"عذرًا ، يبدو أنه ليس لديك إمكانية الوصول لخاصية ألفا / بيتا :(","downloads.error.noaccess.description":"يمكنك الانضمام إلى برنامجنا التجريبي **هنا** مجانًا. إستعجل! لدينا فقط {0} أماكن متاحة","downloads.latest.header":"الإصدارات المبكرة","downloads.warning.title":"تحذير","downloads.warning.message.opera":"يجب تثبيت **هذا** الملحق من أجل تحميل PreMiD من متجر كروم.","downloads.button.skip":"تخطي","downloads.button.back":"رجوع","downloads.button.cancel":"إلغاء","downloads.button.okay":"حسنا","downloads.button.done":"تم الإنجاز","downloads.button.login":"تسجيل الدخول","downloads.button.skipanyway":"تخطي على أي حال","downloads.adsbox.thankyou.title":"شكرا لك!","downloads.adsbox.thankyou.message":"نحن نستخدم الإعلانات لدعم فريقنا والحفاظ على خوادمنا لتوفر لك أفضل تجربة مستخدم!","downloads.adsbox.disableAdblock":"الرجاء تعطيل مانع الإعلانات الخاص بك","downloads.showbeta.message":"إظهار التنزيلات التجريبية","downloads.showbeta.small":"(غير ضروري إذا كنت هنا فقط لتنزيل التطبيق العادي)","downloads.skipanyway.message1":"لا أريد أن أدعم.","downloads.skipanyway.message2":"هل أنت متأكد؟","downloads.skipanyway.message3":"حقا؟","downloads.skipanyway.message4":"الر الرجاء الدعم :(","downloads.skipanyway.message5":"أحتاج إليك :<","downloads.skipanyway.message6":"حسنًا، حسناً...","store.search.notFound":"لم نتمكن من العثور على هذا الpresence...","error.code.404":"عذراً، لا يمكننا العثور على هذه الصفحة.","error.code.4":"انت تبحث على presence غير موجود او محذوف.","error.code.500":"حدث خطأ داخلي في الخادم.","error.page.details":"التفاصيل","error.page.button":"الذهاب الي الصفحة الرئسية","user.notFound.heading":"لم يتم العثور على هذا المستخدم، تأكد من","user.notFound.message1":"أن أيدي المطور الذي تبحث عنه صحيح.","user.notFound.message2":"أن المستخدم قد أنشأ ما يكفي من الpresences ولديه رول Presence Developer في سيرفر ديسكورد لدينا.","user.notFound.message3":"إذا كان الآخرون يواجهون نفس المشكلة على سيرفر ديسكورد الخاص بنا.","user.notFound.message4":"إذا كنت تعتقد أن هذا خطأ، يرجى التواصل معنا على [سيرفر الديسكورد].","footer.language":"اللغة","footer.usercount.heading":"مستعد لاستخدام PreMiD؟","footer.usercount.message":"!انضم لأكثر من {0} مستخدم اليوم","footer.usercount.button":"تحميل","footer.partners.heading":"الشركاء","footer.followUs.heading":"تابعنا","footer.developers.heading":"المطورون","footer.developers.documentation":"الوثائق","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"ادعمنا","footer.supportus.donate":"تبرع","footer.supportus.contribute":"ساهم","footer.supportus.translate":"الترجمة","footer.supportus.jobs":"إعمل معنا!","footer.help.heading":"المساعدة","footer.help.troubleshooting":"استكشاف الأخطاء وإصلاحها\\n \\n ","footer.help.getsupport":"احصل على المساعدة","footer.help.information":"معلومات","footer.help.information.cookies":"كوكيز","footer.help.information.privacy":"الخصوصية","footer.help.information.terms":"الشروط","footer.more.heading":"المزيد","footer.more.status":"الحالة","footer.more.wiki":"الويكي","footer.copyright.line1":"{1} من طرف {0}","footer.copyright.line2":"صيانة الموقع من طرف {0}","footer.partners.more":"انقر هنا لرؤية بقية شركائنا و الراعيين.","header.language":"العربية","header.languageNotification.title":"نحن ندعم لغتك، هل تريد التغيير؟","header.languageNotification.text":"لقد تمت ترجمة موقعنا إلى لغتك. قد يساعدك ذلك إذا كنت لا تتحدث الإنجليزية جيدًا.","header.languageNotification.btnDecline":"لا، شكرا","header.languageNotification.btnAccept":"تغيير اللغة","header.loader.phrases":"طبخ الفطائر...;وضع الأوعية...;تحليل عنوان IP الخاص بك...;UwU;كسر القواعد...","header.store":"المتجر","header.downloads":"التنزيلات","header.contributors":"المساهمون","header.login":"تسجيل الدخول","header.lia":"تم تسجيل الدخول كـ","header.rab":"الإبلاغ عن خطأ","header.staff":"لوحة التحكم","header.logout":"تسجيل الخروج","home.introduction.paragraph":"**PreMiD** ، عبارة عن اداة بسيطة قابلة للتعديل تسمح لك بإظهار ما تفعله على الويب على ديسكورد.","home.introduction.button.features":"الميزات","home.introduction.button.downloads":"التنزيلات","home.examples.playingagame":"جاري لعب لعبة","home.examples.timestamp":"متبقي {0}","home.examples.timestamp2":"{0} مضت","home.examples.status.playing":"يعيد تشغيل","home.examples.status.live":"مباشر","home.examples.status.browsing":"يتصفح...","home.features.heading":"سوف تحب هذه الميزات!","home.features.presencesystem.heading":"اعثر على الpresence **الخاص بك**","home.features.presencesystem.description":"لقد أنشأنا ملحقنا بطريقة تسمح لك بإضافة واستخدام الpresences التي انشأها الآخرون وإدارتها في ملحقنا!","home.features.presencesystem.button":"زيارة المتجر","home.features.simpleInterface.heading":"واجهة مستخدم بسيطة","home.features.simpleInterface.description":"تعبت من واجهات المستخدم المعقدة؟ لهذا السبب قمنا بإنشاء ونحاول الحفاظ على واجهة المستخدم الخاصة بنا بأكبر قدر ممكن من البساطة والإفادة مع ميزات هامة مثل:","home.features.simpleInterface.description.1":"إعدادات التطبيق والملحق","home.features.simpleInterface.description.2":"إدارة الpresences","home.features.simpleInterface.description.3":"الترتيب حسب الفئة","home.features.quickSupport.heading":"دعم سريع","home.features.quickSupport.description":"شيء معطل، يرسل لك أطنان من الأخطاء أو ببساطة لا يعمل؟ سوف نساعدك على التخلص من هذه المشكلات على سيرفر ديسكورد الخاص بنا، كما أننا أنشأنا نظام الدعم الخاص بنا والذي سيتأكد من حل مشكلتك بأسرع ما يمكن.","home.features.quickSupport.button":"انضم إلى Discord الخاص بنا","home.languageSelector.tippy":"لغة الموقع","jobs.modal.title":"تقديم لـ {0}","jobs.modal.step":"الخطوة {0} من 2","jobs.modal.buttons.next":"التالي","jobs.modal.buttons.join":"إنضم","jobs.modal.buttons.cancel":"إلغاء","jobs.modal.error":"يُرجى إكمال كافة الحقول","jobs.modal.notice":"PreMiD هو مشروع مفتوح المصدر، مما يعني أننا فريق غير هادف للربح، كل تبرع أو مال ربحي يعود إلى المنتج. من خلال التقدم للحصول على وظيفة في PreMiD، فإنك تقر بأنك تتطوع في الفريق، ولن يتم الدفع لك مقابل عملك.","jobs.guild.required":"انضم إلى الديسكورد الخاص بنا","jobs.guild.explanation":"لتتمكن من التقديم يجب عليك الانضمام إلى سيرفر الديسكورد الخاص بنا. وإلا فلن نتمكن من التواصل بك إذا تم اختيارك في النهاية!","jobs.header.title":"العمل لحساب PreMiD","jobs.header.description":"هل انت مستعد لمساعدة اكبر برنامج Rich-Presence؟","jobs.openings.title":"الوظائف الشاغرة","jobs.benefits.title":"الفوائد العالية","jobs.benefit1.title":"قابلنا","jobs.benefit1.description":"تواصل مع الأشخاص وراء PreMiD.","jobs.benefit2.title":"نظرة خاطفة","jobs.benefit2.description":"ألقي نظرة على البرمجة والتسويق لدينا.","jobs.benefit3.title":"الشرف","jobs.benefit3.description":"أذونات ديسكورد قوية ورول ملون.","jobs.benefit4.title":"إدعم PreMiD","jobs.benefit4.description":"مع مساعدتك يمكنك تشغيل هذا المشروع.","jobs.benefit5.title":"انتهاء المهلة","jobs.benefit5.description":"خذ وقتك. هذا العمل تطوعي.","jobs.benefit6.title":"الوصول المبكر","jobs.benefit6.description":"اختبر الميزات الجديدة قبل أي شخص اخر.","jobs.success.applied":"شكرًا لك على تقديم الطلب!","jobs.errors.alreadyApplied":"لقد سبق لك أن قدمت طلب!","maintenance.big":"أوه لا!","maintenance.heading":"للأسف نحن نواجه بعض الصعوبات التقنية. سنعود قريبا. نعتذر للإزعاج.","maintenance.heading2":"يرجى العودة لاحقًا لمزيد من المعلومات.","maintenance.message":"حتى يقوم المطورون الخاصون بإصلاح هذا الأمر، لا تتردد في إلقاء نظرة هنا!","maintenance.statuspage":"صفحة الحالة","maintenance.discordserver":"سيرفر الديسكورد","merch.title":"مرحبًا بكم في متجر سلع **PreMiD** الرسمي!","merch.swag":"ابحث عن **الغنيمه**","merch.fit":"** اختر ما يناسبك **\\n ","merch.cart":"اضف الى العربة","merch.help":"هل تواجه مشاكل مع متجرنا أو طلب ما؟\\nتواصل مع {0}دعم العملاء{1}","merch.item.added":"{0} أضيف إلى سلة التسوق الخاصة بك","merch.error.noitem":"لا يوجد عنصر لإضافته إلى سلة التسوق ","partners.header.title":"الشركاء","partners.header.description":"إنضم إلى العائلة واحصل على بعض الفوائد الخاصة بالشركاء لإظهار كم من المقدار لديك.","partners.slideshow.description":"هذه بالفعل ملك لنا","partners.why.title":"ماذا عن الذهاب إلى الجنة بدلا من الجحيم؟","partners.why.benefit1.title":"الpresence المجاني الخاص بك","partners.why.benefit1.description":"سيوفر لك فريقنا Presence لخدمتك.","partners.why.benefit2.title":"كن مُحققًا","partners.why.benefit2.description":"سيتم إعطاء رول خاص وشرف عظيم لك في سيرفر ديسكورد الخاص بنا.","partners.why.benefit3.title":"تكامل الوسوم الوصفية","partners.why.benefit3.description":"يستخدم الpresence الخاص بك تلقائيًا عندما يقوم شخص ما بزيارة موقع الويب الخاص بك.","partners.why.benefit4.title":"كن خالدا","partners.why.benefit4.description":"مكان في صفحة شركائنا.","partners.why.benefit5.title":"كن مشهور","partners.why.benefit5.description":"مميز على وسائل التواصل الاجتماعي الخاصة بنا.","partners.requirements.title":"المتطلبات","partners.requirements.first.title":"ما الذي نبحث عنه؟","partners.requirements.first.description":"نحن نضع في أنظارنا المجتمعات النامية والأشياء المثيرة حول الإنترنت. TL;DR يجب أن تستخدم PreMiD بالفعل وأن تكون مستعدا لنشره على المزيد من الحزم عبر الإنترنت. والقبول في البرنامج هو أمر نوعي للغاية وسيتفاوت من مرشح إلى آخر.","partners.requirements.second.title":"جدار الحماية لدينا","partners.requirements.second.description":"نحن حاليا نقبل أنواعا مختلفة من الجهد في برنامجنا للشراكة. أي شخص ينبغي أن تتاح له الفرصة لأن يلاحظ. يجب أن يكون لمذيعي تويتش 500 تابع على الأقل و 10 مشاهدين متزامنين على الأقل. يجب أن تبث مرة واحدة على الأقل في الأسبوع.","partners.apply.button":"قدم الآن!","partners.apply.disclaimer":"دعنا نذهب إلى السماء معاً!","partners.apply.jobs":"إذا كنت ترغب في الحصول على وظيفة مباشرة في PreMiD، فقم بإلقاء نظرة على **إعلانات الوظائف الخاصة بنا**.","partners.sponsors.title":"الرعاة","partners.sponsors.description":"PreMiD لن يكون ممكناً، بدون هؤلاء الناس المذهلين.","partners.partner.aniFlix":"هذه هي الطريقة التي تشاهد بها الانيمي.","partners.partner.arenaOfKings":"ساحة الملوك هي لعبة ساحة سريعة الوتيرة من الجيل القادم التي تلعب في المتصفح.","partners.partner.upBeat":"UpBeat إذاعة دولية لا تستهدف الربح وتسعى جاهدة إلى توفير إذاعة, تسلية و أخبار جيدة النوعية دون توقف.","partners.partner.simLiveRadio":"SimLiveRadio هو أنجح راديو معلوماتي ترفيهي لألعاب المحاكاة في ألمانيا، النمسا وسويسرا!","partners.partner.discordTemplates":"باشر بإنشاء مجتمعك الخاص مع نماذجنا المذهلة. ابني مملكتك الخاصة.","partners.partner.taigaBot":"تايغا هو بوت ديسكورد يحاول تقديم جميع الميزات التي قد تحتاجها في وقت واحد!","partners.partner.bitRock":"أداة إنشاء تثبيت منصة قوية وسهلة الاستخدام.","partners.partner.statusPage":"قم بإيصال الحالة في الوقت الحالي بسهولة إلى مستخدميك.","partners.partner.erisly":"آلهة تلعب دور بوت ديسكورد ممتع!","partners.partner.reyfm":"REYFM تمكنك من الإستماع إلى اكثر من 15+ بث موسيقي مجاناً - بدون توقف. مع أفضل و أحدث الموسيقى لك فقط!","partners.partner.crowdin":"مكان رشيق لشركات التكنولوجيا.","partners.partner.wikijs":"برنامج ويكي مفتوح المصدر الأقوى والأكثر قابلية للتوسيع.","partners.partner.packageCloud":"واجهة موحدة, سهلة الاستخدام للمطورين لكل أدواتك.","partners.partner.fastly":"وراء أفضل في الويب.","partners.partner.onlyhit":"OnlyHit هي محطة الإذاعة الموسيقى الخاصة بك على الانترنت والتي تم صناعتها لتشغيل افضل الأغاني على مدار الساعة 24/7 ولجعلك تكتشف أفضل الأغاني أولاً.","partners.apply.title":"تقدم بطلب الشريك","partners.apply.loggedUser":"تم تسجيل الدخول كـ {0}","partners.apply.notYou":"ليس أنت؟","partners.apply.select.default":"يرجى اختيار واحد","partners.apply.select.website":"الموقع","partners.apply.select.other":"آخر","partners.apply.form.name":"الاسم","partners.apply.form.name.placeholder":"مثال: PreMiD","partners.apply.form.link":"الرابط","partners.apply.form.link.placeholder":"مثال: https://premid.app","partners.apply.form.description":"الوصف: (150 رمزاً كحد أقصى)","partners.apply.form.description.placeholder":"وصف المميز","partners.apply.form.imageLink":"رابط الصورة: (550x300, PNG فقط)","partners.apply.form.imageLink.placeholder":"مثال: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"غلق","partners.apply.form.button.apply":"تقديم","partners.apply.success":"شكرًا لك على تقديم الطلب!","partners.apply.error1":"يُرجى إكمال كافة الحقول.","partners.apply.error2":"الحد الأقصى للوصف 150 رمزا.","partners.apply.error3":"الرجاء إضافة رابط (يجب أن يبدأ ب https:// و ينتهي ب .png)","partners.apply.error4":"لقد سبق لك أن قدمت طلب.","presence.page.buttons.sourceCode":"الكود المصدري","presence.sections.description.title":"الوصف","presence.sections.changelog.title":"سجل التغييرات","presence.sections.information.title":"المعلومات","presence.sections.information.author":"المطور","presence.sections.information.version":"الإصدار","presence.sections.information.likes":"الإعجابات","presence.sections.information.users":"المستخدمين","presence.sections.information.tags":"التصنيفات","presence.sections.information.supportedurls":"المواقع المدعومة","presence.sections.information.contributors":"المساهمون","report.title":"الإبلاغ عن خطأ","report.bugcount":"{count}/3 أخطاء متبقية","report.info":"الإبلاغ عن الأخطاء هو للأخطاء الموجودة داخل موقع PreMiD وسيرفر ديسكورد PreMiD. يجب الإبلاغ عن الأخطاء الخاصة بالpresence لصانع الpresence. إبلاغ الأخطاء باللغة الإنجليزية فقط.","report.overview":"قدم وصف واضح و موجز لما هو الخطأ.","report.os":"حدد نظام التشغيل الخاص بك والإصدار","report.browser":"حدد متصفحك وإصدارك - يمكنك الحصول على الإصدار بواسطة زيارة about:support على Firefox أو chrome://help","report.description":"قم بتقديم رابط لمثال حي أو مجموعة خطوات لا لبس فيها لإعادة إنتاج هذا الخطأ.","report.button":"إبلاغ","report.toomany":"لديك الكثير من الأخطاء النشطة. انتظر مراجعة الأخطاء التي أرسلتها. يتم التحقق من الأخطاء إسبوعياً، كن صبورًا.","report.toomany.alert":"لديك الكثير من الأخطاء النشطة.","report.success":"تم إرسال الخطأ","report.error":"مطلوب المزيد من المعلومات","report.error.unauth":"الرجاء تحقيق حسابك في الديسكورد","report.activebugs":"الأخطاء النشطة","store.message.error":"الملحق غير متصل.","store.cards.creator":"المطور","store.cards.popular":"هذا الpresence مشهور جدا بين المستخدمين.","store.cards.partner":"Presence شريك","store.cards.extraStepsRequired":"يتطلب هذا الpresence خطوات إضافية للعمل، يرجى التحقق من صفحته للحصول على مزيد من المعلومات.","store.header.search":"البحث على presence","store.card.presence.add":"اضافة presence","store.card.presence.remove":"إزالة presence","store.card.presence.included":"يتم تشغيل هذا الpresence تلقائياً عند زيارة موقعه.","store.category.filters.heading":"تصفيه","store.category.filters.mostUsed":"الأكثر استخداما أولا","store.category.filters.allowAdult":"عرض المحتوى الغير لائق","store.category.filters.likedOnly":"فقط الpresences المعجبة","store.filters.added":"اظهار الpresences المضافة","store.category.heading":"الفئات","store.category.all":"الكل","store.category.games":"ألعاب","store.category.music":"موسيقى","store.category.socials":"التواصل","store.category.videos":"فيديوات","store.category.other":"آخرى","store.search":"إبحث","store.search.filters":"ادخال","store.search.removeFilter":"اضغط لازالة التصفيه","user.roles.presenceDeveloper":"مطور presence","user.roles.presenceVerifier":"مدقق presence","user.importantPresenceDev.message1":"مطور presence متميز","user.importantPresenceDev.message2":"طور {0} presences.","user.geniusPresenceDev.message1":"مطور presence عبقري","user.geniusPresenceDev.message2":"أنشئ أكثر من 100 presences!","user.switch.contributed":"[presences/مساهمات] المستخدم","user.presences.created":"اضغط هنا لاظهار الpresences التي انشائها هذا المستخدم.","user.presences.contributed":"انقر هنا لإظهار الpresence التي ساهم بها هذا المستخدم."}')
    }, function(e) {
        e.exports = JSON.parse('{"404.heading":"Ou! Bu da olmalıdır?","404.message":"Bağışlayın, görmək istədiyiniz səhifə köçürüldü və ya silindi və ya bəlkə də heç mövcud deyildi?","contributors.headings.staff":"Heyət","contributors.headings.supporters":"Dəstəkləyənlər","contributors.headings.translators":"Tərcüməçilər","downloads.header.title":"Özünüzü hər kəsə göstərməyin vaxtı gəldi.","downloads.header.subtitle":"PreMiD istifadə etməyə başla və insanlara nə etdiyini göstər, bəlkə eyni maraqları olan birini taparsınız.","downloads.instructions.heading":"Başlat","downloads.instructions.step.1":"PreMiD yüklə.","downloads.instructions.step.2":"PreMiD applikasiyasını yüklə.","downloads.instructions.step.3":"Brauzer üçün əlavəni yüklə.","downloads.instructions.step.4":"{0} səhifəsini ziyarət et və əlavənin qoşulu olub-olmadığını yoxla.","downloads.instructions.step.4.store":"mağaza","downloads.appdownloading.header":"Applikasiya","downloads.extdownloading.header":"Əlavə","downloads.tooltips.os.not.supported.part1":"XƏBƏRDARLIQ:","downloads.tooltips.os.not.supported.part2":"{0} Bu əməliyyat sistemi üçün quraşdırıcı yoxdur. Bu o deməkdir ki, bunun üçün peşəkar dəstək yoxdur.","footer.language":"Dil","footer.usercount.heading":"PreMiD-i yoxlamağa hazırsan?","footer.usercount.message":"{0} istifadəçiyə qoşulun!","footer.usercount.button":"Yüklə","footer.partners.heading":"Partnerlər","footer.developers.heading":"İnkişaf etdiricilər","footer.developers.documentation":"Sənədləşdirmə","footer.developers.richpresence":"Discord statusu","footer.supportus.heading":"Bizi dəstəklə","footer.supportus.donate":"İanə et","footer.supportus.contribute":"Töhfə ver","footer.supportus.design":"Dizayn","footer.supportus.translate":"Tərcümə et","footer.help.heading":"Kömək","footer.help.troubleshooting":"Həll et","footer.help.getsupport":"Kömək al","footer.help.information":"Məlumat","footer.help.information.cookies":"Çərəzlər","footer.help.information.privacy":"Gizlilik","footer.help.information.terms":"Şərtlər","footer.more.heading":"Daha çox","footer.more.status":"Status","footer.more.wiki":"Viki","footer.copyright.line1":"{1} adlı istifadəçidən {0}","footer.copyright.line2":"Veb sayt {0} tərəfindən idarə olunur","header.language":"Azərbaycanca","header.languageNotification.title":"Dilinizi dəstəkləyirik, dəyişmək istəyirsiniz?","header.languageNotification.text":"Veb saytımız sizin dilinizə tərcümə edildi. İngilis dilini yaxşı bilməsəniz bu kömək edə bilər.","header.languageNotification.btnDecline":"Xeyr, təşəkkürlər","header.languageNotification.btnAccept":"Dili dəyiş","header.loader.phrases":"Keksləri bişirmək...; Qabların yerləşdirilməsi...; IP ünvanınızın araşdırılması...; UwU; Qaydaların pozulması...","header.store":"Mağaza","header.downloads":"Yükləmələr","header.contributors":"Töhfə verənlər","home.introduction.catchphrase":"Nə etdiyinizi hamıya göstərin!","home.introduction.button.features":"Bizim xüsusiyyətlərimiz","home.introduction.button.downloads":"Yükləmələr","home.examples.playingagame":"Oyun oynayır","home.examples.timestamp":"{0} qaldı","home.features.heading":"Bu xüsusiyyətləri sevəcəksiniz!","home.features.presencesystem.heading":"**Öz** statusunuzu tapın.","home.features.presencesystem.description":"Əlavəmizi digər istifadəçilərin yaratdığı statusları əlavə edib istifadə və idarə etməyə imkan verən bir şəkildə inkişaf etdirdik!","home.features.presencesystem.button":"Mağazanı aç","home.features.simpleInterface.heading":"Sadə istifadəçi interfeysi.","home.features.simpleInterface.description":"Mürəkkəb istifadəçi interfeyslərindən bezmisiniz? Buna görə yalnız vacib funksiyalar olan sadə və faydalı bir interfeys yaratdıq:","home.features.simpleInterface.description.1":"Proqram və əlavə parametrləri.","home.features.simpleInterface.description.2":"Status idarəsi.","home.features.simpleInterface.description.3":"Kateqoriyaya görə sırala.","home.features.quickSupport.heading":"Tez dəstək.","home.features.quickSupport.description":"Bir şey qarmaqarışıqdır və ya xeyli səhv göndərir? Bundan imtina etməyinizə kömək edəcəyik, Discord serverimizdə də həyatınızı asanlaşdıracaq bir dəstək sistemi hazırladıq.","home.features.quickSupport.button":"Serverimizi ziyarət et","maintenance.big":"Təmir","maintenance.heading":"Təəssüf ki, texniki çətinliklər yaşayırıq. Qısa müddətdə qayıdacağıq. Narahatçılığa görə üzr istəyirik.","maintenance.heading2":"Daha çox məlumat üçün daha sonra geri qayıdın.","maintenance.message":"Xüsusi inkişaf etdiricilərimiz bunu düzəldənə qədər, buraya nəzər yetirin!","maintenance.statuspage":"Status səhifəsi","maintenance.discordserver":"Discord serveri","presence.sections.description.title":"İzah","presence.sections.information.title":"Məlumat","presence.sections.information.author":"Müəllif","presence.sections.information.version":"Versiya","presence.sections.information.tags":"Etiketlər","presence.sections.information.supportedurls":"Dəstəklənən URL-lər","store.message.error":"Əlavə tapılmadı, funksiyalar kilidlənir...","store.message.success":"Əlavə tapıldı, funksiyalar açılır...","store.cards.creator":"Yaradıcı","store.cards.verified":"Bu status təsdiqlənmiş inkişaf etdirici tərəfindən qəbul edildi","store.header.search":"Axtar","store.card.presence.add":"Status əlavə et","store.card.presence.remove":"Status sil","store.card.presence.included":"Bu status lazım olduqda avtomatik istifadə olunur, əlavə etmək lazım deyil.","store.category.all":"Hamısı","store.category.games":"Oyunlar","store.category.music":"Musiqi","store.category.socials":"Sosial","store.category.videos":"Videolar & Yayımlar","store.category.other":"Digər","store.search":"Axtar","store.userpage.userPresences":"İstifadəçi statusları","store.userpage.error1":"İstifadəçi statusları"}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Персонал","contributors.headings.supporters":"Поддръжници","contributors.headings.translators":"преводачи","contributors.roles.projectLeader":"Глава на проекта","contributors.roles.staffCoordinator":"Управител на екипа","contributors.roles.marketingDirector":"Маркетинг директор","contributors.roles.administrator":"администратор","contributors.roles.reviewer":"Рецензент","contributors.roles.developer":"Разработчик","contributors.roles.designer":"Дизайнер","contributors.roles.moderator":"забавител","contributors.roles.supportAgent":"Агент на поддръжките","contributors.roles.representative":"Представител","contributors.roles.proofreader":"Коректор","contributors.roles.donator":"Дарител","contributors.roles.booster":"Бустер","contributors.roles.translator":"Преводач","contributors.cards.copyUserId":"Щракване за копиране на потребителския идент. №.","contributors.cards.userIdCopied":"Потребителското ID бе копирано!","downloads.instructions.heading":"Първи стъпки","downloads.instructions.step.1":"Изтеглете PreMiD","downloads.appdownloading.header":"Приложение","downloads.extdownloading.header":"разширение","downloads.tooltips.os.not.supported.part2":"{0} Няма инсталатор за тази операционна система. Това означава, че няма професионална подкрепа за това.","downloads.button.done":"Свършен","downloads.adsbox.thankyou.title":"Благодаря ти!","downloads.adsbox.disableAdblock":"Моля изключете вашият AdBlock-ър","downloads.skipanyway.message1":"Не искам да подкрепя.","downloads.skipanyway.message2":"Сигурни ли сте?","downloads.skipanyway.message3":"Наистина?","downloads.skipanyway.message4":"М-моля подкрепете ни :(","downloads.skipanyway.message5":"Трябваш ми :<","downloads.skipanyway.message6":"Добре, добре...","error.page.details":"детайли","user.notFound.heading":"Този потребител не може да бъде намерен. Опитайте да се уверите","footer.language":"език","footer.usercount.button":"Инсталирай","footer.partners.heading":"Партньори","footer.developers.heading":"разработчиците","footer.developers.documentation":"документация","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Подкрепи ни","footer.supportus.donate":"Дарете","footer.supportus.contribute":"Принос","footer.supportus.translate":"Превеждам","footer.help.heading":"Помогне","footer.help.troubleshooting":"Отстраняване на неизправности","footer.help.getsupport":"Потърси помощ","footer.help.information":"Информация","footer.help.information.cookies":"Бисквитки","footer.help.information.privacy":"поверителност","footer.help.information.terms":"условия","footer.more.heading":"повече","footer.more.status":"Статус","footer.more.wiki":"Wiki","footer.copyright.line1":"\\n{0} от {1}","footer.copyright.line2":"Уебсайт, поддържан от {0}","header.language":"Български","header.languageNotification.title":"Поддържаме вашия език, искате да превключите?","header.languageNotification.text":"Нашият уебсайт е преведен на вашия език. Това може да помогне в случай, че не говорите толкова добре английски.","header.languageNotification.btnDecline":"Не благодаря","header.languageNotification.btnAccept":"Превключване на език","header.loader.phrases":"Печене на палачинки ...; Поставяне на контейнери ...; Разбиране на вашия IP адрес ...; UwU; Нарушаване на правилата ...","header.store":"магазин","header.downloads":"Downloads","header.contributors":"Сътрудници","home.introduction.paragraph":"** PreMiD ** е проста, конфигурируема програма, която ви позволява да показвате какво правите в мрежата в състоянието си на игра Discord сега.","home.introduction.button.downloads":"Изтегления","home.examples.playingagame":"Играя игра","home.examples.timestamp":"{0} остават","home.examples.status.playing":"Възпроизвеждане назад","home.examples.status.live":"Live\\n","home.examples.status.browsing":"Сърфирането ...","home.features.heading":"Ще харесате тези функции!","home.features.presencesystem.heading":"Намерете ** вашето ** присъствие","home.features.simpleInterface.description.1":"Настройки за приложения и разширения","home.features.quickSupport.heading":"Бърза поддръжка","maintenance.big":"О, не!","maintenance.message":"Докато нашите специални разработчици не поправят това, не се колебайте да разгледате тук!","maintenance.statuspage":"Страница на състоянието","maintenance.discordserver":"Discord Сървър","merch.title":"Добре дошли в официалния **PreMiD** магазин за стока!","merch.swag":"Намерете вашата **Дриперия**","merch.fit":"**Изберете своите подходящи**","merch.cart":"Добави в количката","merch.help":"Изпитвате проблеми с нашия магазин или покупка? Свържете се с нашата {0}клиентска поддръжка{1}","merch.item.added":"{0} добавени в количката","merch.error.noitem":"Няма предмети добавени в количката","partners.header.title":"Партньори","partners.header.description":"Присъедини се в семейството и получи някои бонуси специално за партньори и покажи колко си готин.","partners.requirements.title":"Изисквания","partners.apply.select.other":"друг","partners.apply.form.name":"Име","presence.page.buttons.sourceCode":"Програмен код","presence.sections.description.title":"описание","presence.sections.changelog.title":"Дневник на промените","presence.sections.information.title":"Информация","presence.sections.information.author":"автор","presence.sections.information.version":"версия","presence.sections.information.tags":"маркирам","presence.sections.information.supportedurls":"Поддържани URL адреси","presence.sections.information.contributors":"Сътрудници","store.cards.creator":"автор","store.category.heading":"Категории","store.category.all":"всичко\\n","store.category.games":"Игри","store.category.music":"музика\\n","store.category.socials":"вечеринка","store.category.videos":"Видеоклипове и потоци","store.category.other":"друг","store.search":"Търсене","user.roles.presenceDeveloper":"присъствие разработчик","user.roles.presenceVerifier":"Проверка на присъствието","user.importantPresenceDev.message1":"Важен разработчик на присъствие","user.importantPresenceDev.message2":"Създадени {0} присъствия.","user.presences.contributed":"Кликнете тук, за да покажете присъстващите, които този потребител е създал."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"নতুন ফিচার চাও?","beta.description.1":"**PreMiD বেটা** এখন সবার জন্য আছে!","beta.description.2":"তুমি কী পাবে যদি তুমি সাইন আপ করো?","beta.features.1":"লেটেস্ট ফিচারস","beta.features.2":"PreMiD - এর অতীব গোপন টেক্সট চ্যানেলগুলোতে অ্যাক্সেস","beta.features.3":"আমাদের Discord সার্ভারে একটি স্পেশাল রোল","beta.register.text":"তৈরি এটার জন্যে? জয়েন করো অন্য {0} বেটা টেস্টারদের সাথে!","beta.register.button":"সাইন আপ করো এখনই!","thankyou.title":"দারুণ! এখন তুমি একজন বেটা ইউজার!","thankyou.description":"আমাদের বানরগুলো কাজ করছে আমাদের বেটা প্রোগ্রামে যত দ্রুত সম্ভব ঢোকানোর। ধন্যবাদ রেজিস্টার করার জন্যে!","error.noslots":"দেখে মনে হচ্ছে আমাদের কাছে আর কোনো ফাঁকা স্লট নেই।","contributors.headings.staff":"স্টাফ","contributors.headings.supporters":"সাপোর্টারস","contributors.headings.translators":"অনুবাদকগণ","contributors.roles.projectLeader":"প্রোজেক্ট লিডার","contributors.roles.staffCoordinator":"স্টাফ কো-অর্ডিনেটর","contributors.roles.marketingDirector":"মার্কেটিং পরিচালক","contributors.roles.administrator":"অ্যাডমিন","contributors.roles.reviewer":"রিভিউয়ার","contributors.roles.localizationManager":"স্থানীয়করণ ম্যানেজার","contributors.roles.developer":"ডেভেলপার","contributors.roles.designer":"ডিজাইনার","contributors.roles.moderator":"মডারেটর","contributors.roles.supportAgent":"সাপোর্ট এজেন্ট","contributors.roles.representative":"রিপ্রেসেনটেটিভ","contributors.roles.proofreader":"প্রুফরিডার","contributors.roles.donator":"অর্থ সাহায্যকারী","contributors.roles.booster":"বুস্টার","contributors.roles.translator":"অনুবাদক","contributors.cards.copyUserId":"ক্লিক করো ইউজার এর আইডি কপি করতে।","contributors.cards.userIdCopied":"ইউজার আইডি কপি করা হয়েছে!","downloads.header.title":"সময় এখন দেখানোর।","downloads.header.subtitle":"এখনই ব্যবহার করো PreMiD এবং দেখাও তোমার বন্ধুদের তুমি কী করছ, হয়তো তুমি কাওকে পেয়ে যাবে একই ইন্টারেস্ট এর।","downloads.instructions.heading":"শুরু করা যাক","downloads.instructions.step.1":"ডাউনলোড করো PreMiD","downloads.instructions.step.2":"ইন্সটল করো আমাদের অ্যাপ্লিকেশান","downloads.instructions.step.3":"অ্যাড করো আমাদের এক্সটেনশন তোমার ব্রাউজারে","downloads.instructions.step.4":"এই ওয়েবসাইটটি রিলোড করো এবং দেখো এক্সটেনশনটি কানেক্টেড আছে কিনা","downloads.instructions.footer":"এখনও সমস্যা আছে? {0}","downloads.instructions.footer.link":"আমরা এখানে আছি সাহায্য করতে!","downloads.appdownloading.header":"অ্যাপ্লিকেশান","downloads.extdownloading.header":"এক্সটেনশন","downloads.tooltips.os.not.supported.part1":"সতর্কতা:","downloads.tooltips.os.not.supported.part2":"{0} কোনো ইন্সটলার নেই এই অপারেটিং সিস্টেম এর জন্য। তার মানে এটার জন্য কোনো সাপোর্ট নেই।","downloads.mobile.errorMessage":"জেনে রাখো যে PreMiD মোবাইল ফোনে সাপোর্টেড নয়।","downloads.mobile.showDownloads":"ডাউনলোডগুলো দেখাও","downloads.mobile.hideDownloads":"ডাউনলোডগুলো হাইড করাও","downloads.warning.differentVersion":"এই প্ল্যাটফর্ম এর বর্তমান ভার্সন হচ্ছে {0} (এই ভার্সনটি লিনাক্স এর জন্য নির্দিষ্ট, এবং অন্যসব প্ল্যাটফর্মে নয়)।","downloads.warning.differentVersion2":"এই ভার্সনটি লিনাক্স এর জন্য নির্দিষ্ট, এবং অন্যসব সিস্টেম এর জন্য নয়। অ্যাপ্লিকেশান এর মেইন ভার্সন হচ্ছে {0}","downloads.error.login":"লগইন করো ডাউনলোডগুলো দেখার জন্যে।","downloads.error.noaccess.title":"দেখে মনে হচ্ছে তোমার কাছে অ্যালফা/বেটা অ্যাক্সেস নেই :(","downloads.error.noaccess.description":"তুমি আমাদের বেটা প্রোগ্রাম জয়েন করতে পারো **এখানে** ফ্রিতে। তাড়াতাড়ি করো! আমাদের কাছে আরো শুধু {0} স্লট ফাঁকা পড়ে আছে","downloads.latest.header":"আর্লি রিলিজেস","downloads.warning.title":"সতর্কতা","downloads.warning.message.opera":"তোমাকে **এই** এক্সটেনশনটি ইন্সটল করতে হবে, তারপর PreMiD ইন্সটল করতে হবে Chrome Webstore থেকে।","downloads.button.skip":"স্কিপ","downloads.button.back":"ব্যাক","downloads.button.cancel":"বাতিল করো","downloads.button.okay":"ঠিক আছে","downloads.button.done":"সম্পন্ন","downloads.button.login":"লগইন","downloads.button.skipanyway":"যাইহোক স্কিপ করো","downloads.adsbox.thankyou.title":"ধন্যবাদ!","downloads.adsbox.thankyou.message":"আমরা Ad ব্যবহার করি আমাদের টিমকে সাপোর্ট করতে এবং আমাদের সার্ভারকে মেইনটেইন করতে, তোমাকে সেরা ইউজার এক্সপেরিয়েন্স দেওয়ার জন্যে!","downloads.adsbox.disableAdblock":"দয়া করে তোমার Adblocker - টি বন্ধ করো","downloads.showbeta.message":"আর্লি রিলিজেস দেখাও","downloads.showbeta.small":"(প্রয়োজন নেই যদি তুমি এখানে শুধু এসেছ নরমাল অ্যাপ্লিকেশানটা ডাউনলোড করতে)","downloads.skipanyway.message1":"আমি সাপোর্ট করতে চাই না।","downloads.skipanyway.message2":"তুমি নিশ্চিত তো?","downloads.skipanyway.message3":"সত্যি?","downloads.skipanyway.message4":"দ-দয়া করে সাপোর্ট করো :( ","downloads.skipanyway.message5":"আমাদের তোমার প্রয়োজন :<","downloads.skipanyway.message6":"ঠিক আছে, ঠিক আছে...","store.search.notFound":"আমরা সেই Presence টা খুঁজে পাইনি...","error.code.404":"দুঃখিত, আমরা সেই পেজটি খুঁজে পাইনি।","error.code.4":"তুমি এমন একটি Presence খুঁজছ যেটি নেই কিংবা ডিলিট করা হয়েছে।","error.code.500":"ইন্টারনাল সার্ভারে ত্রুটি ঘটেছে।","error.page.details":"বিস্তারিত","error.page.button":"হোমপেজে ব্যাক করো","user.notFound.heading":"সেই ইউজারকে পাওয়া যায়নি। নিশ্চিত করার চেষ্টা করো","user.notFound.message1":"যে তুমি যে ইউজার এর আইডি খুঁজছ সেটি ঠিক আছে।","user.notFound.message2":"ইউজারটি যথেষ্ট Presences তৈরি করেছে এবং আমাদের Discord সার্ভারে Presence Developer রোল আছে।","user.notFound.message3":"যদি অন্যরাও একইরকম সমস্যা দেখতে পাচ্ছে আমাদের Discord সার্ভারে।","user.notFound.message4":"যদি তুমি মনে করো এটি একটি ভুল ছিল, আমাদের সাথে যোগাযোগ করো [আমাদের Discord সার্ভারে]।","footer.language":"ভাষা","footer.usercount.heading":"PreMiD ব্যবহার করার জন্য প্রস্তুত?","footer.usercount.message":"জয়েন করো {0} ইউজারের সাথে আজকে!","footer.usercount.button":"ইনস্টল","footer.partners.heading":"পার্টনার","footer.followUs.heading":"ফলো করো আমাদের","footer.developers.heading":"ডেভেলপার","footer.developers.documentation":"ডকুমেন্টেশন","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"সহযোগিতা করো আমাদের","footer.supportus.donate":"দান করো","footer.supportus.contribute":"কনট্রিবিউট করো","footer.supportus.translate":"অনুবাদ করো","footer.supportus.jobs":"কাজ করো আমাদের সাথে!","footer.help.heading":"সাহায্য","footer.help.troubleshooting":"সমস্যা সমাধান","footer.help.getsupport":"সাহায্য নাও","footer.help.information":"তথ্য","footer.help.information.cookies":"কুকি","footer.help.information.privacy":"গোপনীয়তা","footer.help.information.terms":"শর্তাবলী","footer.more.heading":"আরো","footer.more.status":"স্ট্যাটাস","footer.more.wiki":"উইকি","footer.copyright.line1":"{0} {1} দ্বারা","footer.copyright.line2":"ওয়েবসাইটটি মেইনটেইন করা হচ্ছে {0} দ্বারা","footer.partners.more":"এখানে ক্লিক করো আমাদের বাকি পার্টনার এবং স্পন্সরদের দেখতে।","header.language":"বাংলা","header.languageNotification.title":"আমাদের কাছে তোমার ভাষা আছে, চেঞ্জ করতে চাও?","header.languageNotification.text":"আমাদের ওয়েবসাইট তোমার ভাষায় অনুবাদ করা হয়েছে। এটা সাহায্য করবে যদি তুমি ইংরেজি ভালো না পারো।","header.languageNotification.btnDecline":"না, ধন্যবাদ","header.languageNotification.btnAccept":"ভাষা চেঞ্জ","header.loader.phrases":"পিঠা গরম করছি...;কনটেইনারগুলো রাখছি...;তোমার আইপি অ্যাড্রেস খুটে খুটে দেখছি...;UwU;নিয়ম ভাঙছি...","header.store":"স্টোর","header.downloads":"ডাউনলোড","header.contributors":"কন্ট্রিবিউটরস","header.login":"লগইন","header.lia":"লগইন করা অ্যাকাউন্ট:","header.rab":"একটি বাগ রিপোর্ট করো","header.staff":"ড্যাশবোর্ড","header.logout":"লগআউট","home.introduction.paragraph":"**PreMiD** হচ্ছে একটি সহজ, কনফিগারযোগ্য ইউটিলিটি যা দেখায় তুমি কী করছ ইন্টারনেটে তোমার Discord - এর প্লেয়িং স্ট্যাটাসে।","home.introduction.button.features":"ফিচার","home.introduction.button.downloads":"ডাউনলোড","home.examples.playingagame":"একটি গেম খেলছে","home.examples.timestamp":"{0} বাকি","home.examples.timestamp2":"{0} পেরিয়েছে","home.examples.status.playing":"প্লেয়িং ব্যাক","home.examples.status.live":"লাইভ","home.examples.status.browsing":"ব্রাউজ করছে...","home.features.heading":"তুমি এইসব ফিচারগুলোকে পছন্দ করবে!","home.features.presencesystem.heading":"খোঁজ **তোমার** Presence","home.features.presencesystem.description":"আমরা আমাদের এক্সটেনশন এমনভাবে তৈরি করেছি যা তোমাকে অন্যদের তৈরি Presences অ্যাড ও ব্যবহার করতে দেবে এবং ম্যানেজ করতে দেবে আমাদের এক্সটেনশনেই!","home.features.presencesystem.button":"স্টোরে যাও","home.features.simpleInterface.heading":"সহজ সরল ইউজার ইন্টারফেস","home.features.simpleInterface.description":"ক্লান্ত জটিল ইউজার ইন্টারফেস এর জন্য? তাই তো আমরা তৈরি করেছি এবং চেষ্টা করছি আমাদের UI - কে যতটা সম্ভব সহজ এবং কার্যকরী রাখার জন্যে জরুরি ফিচারস এর সাথে যেমন:","home.features.simpleInterface.description.1":"অ্যাপ এবং এক্সটেনশন সেটিংস","home.features.simpleInterface.description.2":"Presence ম্যানেজমেন্ট","home.features.simpleInterface.description.3":"ক্যাটাগরিতে সাজানো","home.features.quickSupport.heading":"দ্রুত সাপোর্ট","home.features.quickSupport.description":"কোনো কিছুর গ্লিচ হয়েছে, অনেকগুলো ত্রুটি দিচ্ছে অথবা সহজ কথায় কাজ করছে না? আমরা সাহায্য করব তোমাকে আমাদের Discord সার্ভারে, আমরা তৈরিও করেছি আমাদের নিজস্ব সাপোর্ট সিস্টেম যা নিশ্চিত করবে তোমার সমস্যা যত দ্রুত সম্ভব সমাধান করা হয়।","home.features.quickSupport.button":"জয়েন করো আমাদের Discord","home.languageSelector.tippy":"ওয়েবসাইটের ভাষা","jobs.modal.title":"{0} এর জন্য অ্যাপ্লাই করো","jobs.modal.step":"ধাপ {0}/2","jobs.modal.buttons.next":"পরবর্তী","jobs.modal.buttons.join":"জয়েন","jobs.modal.buttons.cancel":"বাতিল করো","jobs.modal.error":"সকল স্থান পূরণ করো","jobs.modal.notice":"PreMiD হচ্ছে একটি ওপেন সোর্স প্রোজেক্ট, যার মানে আমরা একটি অলাভজনক টিম, প্রত্যেকটা \\nঅর্থ সাহায্য ও প্যাটরিয়ন এর টাকা আমাদের প্রোডাক্ট এর পিছনে ব্যয় হয়। PreMiD তে কাজের আবেদন করার মাধ্যমে তুমি স্বীকার করো যে তুমি টিমে একজন স্বেচ্ছাকর্মী হিসেবে কাজ করছ, তোমার কাজের জন্য তোমাকে টাকা দেওয়া হবে না।","jobs.guild.required":"জয়েন করো আমাদের Discord","jobs.guild.explanation":"অ্যাপ্লাই করার জন্যে তোমাকে আমাদের Discord সার্ভারে থাকতেই হবে। তা না হলে আমরা তোমার সাথে যোগাযোগ করতে পারব না যদি তুমি সিলেক্টেড হয়ে যাও!","jobs.header.title":"PreMiD - এর জন্যে কাজ করো","jobs.header.description":"তৈরি তো সবচেয়ে বড় Rich-Presence প্রোগ্রামকে সাহায্য করতে?","jobs.openings.title":"কাজের সুযোগগুলো","jobs.benefits.title":"বড় সুবিধাগুলো","jobs.benefit1.title":"আমাদের সাথে দেখা করা","jobs.benefit1.description":"PreMiD - এর পিছনে থাকা মানুষদের সাথে কথা বলো।","jobs.benefit2.title":"কিছু ঝলক দেখা","jobs.benefit2.description":"আমাদের ডেভেলপমেন্ট এবং মার্কেটিং দেখো।","jobs.benefit3.title":"সম্মান","jobs.benefit3.description":"পাওয়ারফুল Discord পারমিশন এবং একটি রঙিন রোল।","jobs.benefit4.title":"PreMiD কে সাপোর্ট","jobs.benefit4.description":"তোমার কন্ট্রিবিউশন এর মাধ্যমে এই প্রোজেক্টকে চালানো সম্ভব।","jobs.benefit5.title":"বিরতি","jobs.benefit5.description":"নিজের সময় নাও। এটি একটি স্বেচ্ছাকৃত কাজ।","jobs.benefit6.title":"আর্লি-অ্যাক্সেস","jobs.benefit6.description":"নতুন ফিচারগুলো টেস্ট করো অন্য কারোর আগে।","jobs.success.applied":"ধন্যবাদ অ্যাপ্লাই করার জন্য!","jobs.errors.alreadyApplied":"তুমি এর আগেও অ্যাপ্লাই করেছ!","maintenance.big":"আরে না!","maintenance.heading":"দুর্ভাগ্যবশত আমরা কিছু প্রযুক্তিগত সমস্যা ভোগ করছি। আমরা শীঘ্রই ফিরে আসব। \\nঅসুবিধার জন্য দুঃখিত।","maintenance.heading2":"পরে ফিরে এসো আরো তথ্যের জন্যে।","maintenance.message":"যতক্ষণ পর্যন্ত না আমাদের বিশেষ ডেভেলপাররা এটাকে ঠিক করছে, এখানে একবার নির্দ্বিধায় দেখো!","maintenance.statuspage":"স্ট্যাটাস পেজ","maintenance.discordserver":"Discord সার্ভার","merch.title":"স্বাগতম অফিসিয়াল **PreMiD** মার্চেন্ডাইজ স্টোরে!","merch.swag":"খোঁজ তোমার **স্টাইল**","merch.fit":"**তোমার ফিট বাছাই করো**","merch.cart":"কার্ট এ যোগ করো","merch.help":"কোনো সমস্যা দেখছ আমাদের স্টোরে অথবা একটা অর্ডারে? যোগাযোগ করো {0}কাস্টমার সাপোর্টে{1}","merch.item.added":"{0} যোগ করা হয়েছে তোমার কার্টে","merch.error.noitem":"তোমার কার্টে যোগ করার জন্য কোনো আইটেম নেই","partners.header.title":"পার্টনার","partners.header.description":"এই পরিবারের একজন সদস্য হও এবং কিছু পার্টনার বিশিষ্ট সুবিধা নাও।","partners.slideshow.description":"এগুলো আমাদেরই","partners.why.title":"কেমন হয় নরকের বদলে স্বর্গে যাওয়া?","partners.why.benefit1.title":"তোমার ফ্রি Presence","partners.why.benefit1.description":"আমাদের টিম তোমাকে দেবে তোমার সার্ভিসের একটি Presence।","partners.why.benefit2.title":"ভেরিফাইড হয়ে যাও","partners.why.benefit2.description":"আমাদের Discord সার্ভারে তোমাকে দেওয়া হবে একটি স্পেশাল রোল এবং বড় সম্মান।","partners.why.benefit3.title":"মেটা-ট্যাগ ইন্টেগ্রেশন","partners.why.benefit3.description":"অটোমেটিকভাবে তোমার Presence ব্যবহার করে যখন কেউ তোমার ওয়েবসাইটে যায়।","partners.why.benefit4.title":"অমর হয়ে যাও","partners.why.benefit4.description":"আমাদের পার্টনার পেজে একটি স্থান।","partners.why.benefit5.title":"বিখ্যাত হও","partners.why.benefit5.description":"আমাদের সোশ্যাল মিডিয়ায় আসো।","partners.requirements.title":"যা প্রয়োজন","partners.requirements.first.title":"আমরা কিসের খোঁজ করছি?","partners.requirements.first.description":"আমরা ইন্টারনেটে চোখ রাখি বড় হওয়া কমিউনিটি এবং মজার জিনিসগুলোর প্রতি। ছোট কথায় তোমার এখনই PreMiD ব্যবহার করা উচিত এবং তৈরি হওয়া উচিত এটাকে আরো ইন্টারনেট আসক্তদের কাছে ছড়ানো। প্রোগ্রামটিতে গ্রহণযোগ্যতা অত্যন্ত গুণগত এবং এক প্রার্থী থেকে পরবর্তী প্রার্থীর মধ্যে পরিবর্তিত হবে।","partners.requirements.second.title":"যা থাকা প্রয়োজন","partners.requirements.second.description":"আমরা বর্তমানে বিভিন্ন ধরণের কমিউনিটিদের নিচ্ছি আমাদের পার্টনার প্রোগ্রামে। যে কারোরই নজরে আসার সুযোগ থাকা উচিত। Twitch স্ট্রিমারদের কমপক্ষে 500 জন ফলোয়ার এবং কমপক্ষে 10 জন ভিউয়ার থাকতে হবে প্রত্যেক স্ট্রিমে। তোমার অবশ্যই প্রতি সপ্তাহে কমপক্ষে একবার স্ট্রিমিং করা উচিত।","partners.apply.button":"অ্যাপ্লাই করো এখনই!","partners.apply.disclaimer":"চলো আমরা একসাথে স্বর্গে যাই!","partners.apply.jobs":"তুমি যদি বরং আগ্রহী হও PreMiD তে সরাসরি কাজের, তাহলে দেখতে পারো আমাদের **কাজের বিজ্ঞপ্তি**।","partners.sponsors.title":"স্পন্সর","partners.sponsors.description":"PreMiD সম্ভব হতো না, এইসব অসাধারণ মানুষ ছাড়া।","partners.partner.aniFlix":"এইভাবে অ্যানিমে দেখতে হয়।","partners.partner.arenaOfKings":"Arena of Kings হচ্ছে একটি পরবর্তী প্রজন্মের PvP এরিনা গেম যা ব্রাউজারে খেলা হয়।","partners.partner.upBeat":"UpBeat হচ্ছে একটি অলাভজনক আন্তর্জাতিক রেডিও যা চেষ্টা করে বিরামহীন, ভালো কোয়ালিটির রেডিও এবং সংবাদ বিনোদন দিতে।","partners.partner.simLiveRadio":"SimLiveRadio হচ্ছে জার্মানি, অস্ট্রিয়া এবং সুইজারল্যান্ডে সিমুলেশন গেমগুলোর জন্য সবচেয়ে সফল বিনোদন এবং খবরের রেডিও!","partners.partner.discordTemplates":"তৈরি করা শুরু করো তোমার নিজস্ব কমিউনিটি আমাদের দারুণ সব টেম্পলেট দিয়ে। তৈরি করো তোমার নিজের রাজ্য।","partners.partner.taigaBot":"taiga হচ্ছে একটি Discord বট চেষ্টা করছে সমস্ত ফিচারগুলো একবারে দিতে যা প্রয়োজন হতে পারে!","partners.partner.bitRock":"সকল প্ল্যাটফর্মের ইন্সটলার তৈরিকারক টুল যা শক্তিশালী এবং সহজে ব্যবহার করা যায়।","partners.partner.statusPage":"সহজে তোমার ইউজারদের দাও রিয়েল-টাইম স্ট্যাটাস।","partners.partner.erisly":"একজন দেবী যিনি মজার Discord বট এর মতো খেলেন!","partners.partner.reyfm":"REYFM শুনতে দেয় তোমাকে 15+ মিউজিক স্ট্রিমগুলো ফ্রিতে - ননস্টপ। সেরা এবং লেটেস্ট গান শুধু তোমার জন্যে!","partners.partner.crowdin":"টেক কোম্পানিগুলোর জন্য দ্রুত স্থানীয়করণ।","partners.partner.wikijs":"সবচেয়ে শক্তিশালী এবং প্রসারণসাধ্য একটি ওপেন সোর্স উইকি সফটওয়্যার।","partners.partner.packageCloud":"একটি সমন্বিত, সহজে ব্যবহার করা যায় এমন একটি ইন্টারফেস তোমার কাজের জন্য।","partners.partner.fastly":"ওয়েবের সেরার পিছনে।","partners.partner.onlyhit":"OnlyHit হচ্ছে তোমার অনলাইন মিউজিক রেডিও স্টেশন যা বাজায় সেরা গানগুলো 24/7 এবং আবিষ্কার করায় ভবিষ্যতের গানগুলো প্রথমে।","partners.partner.atomicradio":"গানের দুনিয়া থেকে শোনো লেটেস্ট এবং সেরা মিক্স বিরামহীনভাবে আমাদের সব স্টেশনে, বাছাই করো কোনটি তুমি সবচেয়ে বেশি পছন্দ করো এবং সেখানে উপস্থিত থাকো যখন চার্টের শীর্ষ গানগুলো লড়াই করে নতুন গানগুলোর সাথে শীর্ষস্থানের জন্য!","partners.apply.title":"পার্টনারের জন্য অ্যাপ্লাই করো","partners.apply.loggedUser":"{0} হিসেবে লগইন করা হয়েছে","partners.apply.notYou":"তুমি না?","partners.apply.select.default":"একটা সিলেক্ট করো","partners.apply.select.website":"ওয়েবসাইট","partners.apply.select.other":"অন্যান্য","partners.apply.form.name":"নাম","partners.apply.form.name.placeholder":"উদাহরণ: PreMiD","partners.apply.form.link":"লিংক","partners.apply.form.link.placeholder":"যেমন: https://premid.app","partners.apply.form.description":"ডিসক্রিপশন: (সর্বোচ্চ 150 অক্ষর)","partners.apply.form.description.placeholder":"বৈশিষ্ট্যযুক্ত বর্ণনা লেখ","partners.apply.form.imageLink":"ছবির লিংক: (550x300, শুধুমাত্র PNG)","partners.apply.form.imageLink.placeholder":"উদাহরণ: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"বন্ধ করো","partners.apply.form.button.apply":"অ্যাপ্লাই","partners.apply.success":"ধন্যবাদ অ্যাপ্লাই করার জন্য!","partners.apply.error1":"সকল স্থান পূরণ করো।","partners.apply.error2":"সর্বোচ্চ 150 অক্ষর হতে হবে।","partners.apply.error3":"একটি লিংক অ্যাড করো (শুরু হতে হবে https:// দিয়ে এবং শেষ হবে .png দিয়ে)","partners.apply.error4":"তুমি ইতিমধ্যেই অ্যাপ্লাই করেছ পার্টনারের জন্য।","presence.page.buttons.sourceCode":"সোর্স কোড","presence.sections.description.title":"ডিসক্রিপশন","presence.sections.changelog.title":"পরিবর্তন লগ","presence.sections.information.title":"তথ্য","presence.sections.information.author":"তৈরিকারক","presence.sections.information.version":"ভার্সন","presence.sections.information.likes":"লাইক","presence.sections.information.users":"ইউজার","presence.sections.information.tags":"ট্যাগ","presence.sections.information.supportedurls":"সাপোর্টেড URLs","presence.sections.information.contributors":"কন্ট্রিবিউটর","report.title":"একটি বাগ রিপোর্ট করো","report.bugcount":"{count}/3 রিপোর্ট বাকি","report.info":"বাগ রিপোর্ট করা হচ্ছে সেইসব বাগের জন্য যা PreMiD এর ওয়েবসাইট এবং PreMiD এর Discord সার্ভারের মধ্যে। একটি Presence এর বাগ সেই Presence এর তৈরিকারক এর কাছে রিপোর্ট করতে হবে। বাগ শুধুমাত্র ইংরেজিতেই রিপোর্ট করতে হবে।","report.overview":"বাগটা কী তার একটি পরিষ্কার এবং সংক্ষিপ্ত বিবরণ দাও।","report.os":"তোমার অপারেটিং সিস্টেম এবং ভার্সন সিলেক্ট করো","report.browser":"তোমার ব্রাউজার এবং ভার্সন সিলেক্ট করো - তুমি তোমার ভার্সন পাবে ফায়ারফক্সে about:support গিয়ে অথবা ক্রোমে chrome://help গিয়ে","report.description":"একটি ভিডিও এর লিংক দাও অথবা পরিষ্কারভাবে ধাপগুলো লেখ যে কীভাবে বাগটি তুমি তৈরি করেছ।","report.button":"রিপোর্ট","report.toomany":"তোমার অনেকগুলো চলমান রিপোর্ট রয়েছে। তোমার সাবমিট করা রিপোর্টগুলো রিভিও হওয়ার জন্য অপেক্ষা করো। রিপোর্টগুলো সাপ্তাহিক ভিত্তিতে চেক করা হয়, ধৈর্য ধরো।","report.toomany.alert":"তোমার অনেকগুলো চলমান রিপোর্ট রয়েছে।","report.success":"বাগ সাবমিট করা হয়েছে","report.error":"আরো তথ্য প্রয়োজন","report.error.unauth":"Discord অ্যাকাউন্ট ভেরিফাইড হতে হবে","report.activebugs":"চলমান বাগ","store.message.error":"এক্সটেনশন কানেক্টেড নেই।","store.cards.creator":"তৈরিকারক","store.cards.popular":"এই Presence টি ইউজারদের মাঝে বেশ জনপ্রিয়।","store.cards.partner":"পার্টনার করা Presence","store.cards.extraStepsRequired":"এই Presence টির জন্য অতিরিক্ত স্টেপ প্রয়োজন, এটার পেজ চেক করো আরো তথ্যের জন্য।","store.header.search":"Presence সার্চ করো","store.card.presence.add":"Presence অ্যাড করো","store.card.presence.remove":"Presence রিমুভ করো","store.card.presence.included":"এই Presence টি অটোমেটিকভাবে অন হয়ে যায় এর ওয়েবসাইটে গেলেই।","store.category.filters.heading":"ফিল্টার","store.category.filters.mostUsed":"সবচেয়ে বেশি ব্যবহৃত শুরুতে","store.category.filters.allowAdult":"NSFW (18+) দেখাও","store.category.filters.likedOnly":"শুধু লাইক করা Presences","store.filters.added":"অ্যাড করা Presences দেখাও","store.category.heading":"ক্যাটাগরি","store.category.all":"সব","store.category.games":"গেমস","store.category.music":"মিউজিক","store.category.socials":"সোশ্যাল","store.category.videos":"ভিডিও & স্ট্রিম","store.category.other":"অন্যান্য","store.search":"সার্চ","store.search.filters":"এন্টার","store.search.removeFilter":"ক্লিক করো ফিল্টার সরাতে","user.roles.presenceDeveloper":"Presence ডেভেলপার","user.roles.presenceVerifier":"Presence ভেরিফায়ার","user.importantPresenceDev.message1":"গুরুত্বপূর্ণ Presence ডেভেলপার","user.importantPresenceDev.message2":"{0} টি Presences তৈরি করেছে।","user.geniusPresenceDev.message1":"জিনিয়াস Presence ডেভেলপার","user.geniusPresenceDev.message2":"১০০ টিরও উপরে Presences তৈরি করেছে!","user.switch.contributed":"ইউজার [Presences/কন্ট্রিবিউশনস]","user.presences.created":"এখানে ক্লিক করো ইউজারটির তৈরি করা Presences গুলো দেখতে।","user.presences.contributed":"এখানে ক্লিক করো ইউজারটির কন্ট্রিবিউট করা Presences গুলো দেখতে।"}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Osoblje","contributors.headings.supporters":"Podržavaoci","contributors.headings.translators":"Prevoditelji","downloads.header.title":"Vrjeme je da se pokazete svakome.","downloads.header.subtitle":"Počni koristiti PreMiD sada i pokži drugima šta radiš, možda ćes i ti naći nekoga sa istim intersovanjima.","downloads.instructions.heading":"Prvi koraci","downloads.instructions.step.1":"Preuzmi PreMiD.","downloads.instructions.step.2":"Instaliraj PreMiD aplikaciju.","downloads.instructions.step.3":"Instaliraj ekstenyiju za tvoj browser.","downloads.instructions.step.4":"Podsjeti {0} stranicu i provjeri dali je ekstenyija kontektovana.","downloads.instructions.step.4.store":"prodavnica","downloads.tooltips.os.not.supported.part1":"UPOZORENJE:","downloads.tooltips.os.not.supported.part2":"{0} nema instalacija za taj sistem. to znači da nema profesonalne podrške ta to.","footer.language":"Jezik","footer.usercount.heading":"Spremni da probate PreMiD?","footer.usercount.message":"Pridruži se preko {0} korisnika!","footer.usercount.button":"Instaliraj","footer.partners.heading":"Partneri","footer.developers.heading":"Programeri","footer.developers.documentation":"Dokumentacija","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Podržite nas","footer.supportus.donate":"Doniraj","footer.supportus.contribute":"Doprinesite","footer.supportus.design":"Dizajn","footer.supportus.translate":"Prevoditelji","footer.help.heading":"Pomoć","footer.help.troubleshooting":"Rešavanje problema","footer.help.getsupport":"Dobijanje pomoći","footer.help.information":"Informacija","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privatnost","footer.help.information.terms":"Uvjeti","footer.more.heading":"Više","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} do{1}","footer.copyright.line2":"Stranica održavana od {0}","header.language":"Bosanski","header.languageNotification.title":"Mi podržavamo vaš jezik, želite prebaciti?","header.languageNotification.text":"Naša stranica je prevedena na vaš jezik. Ovo će možda pomoći u slučaju ako nepričate engleski.","header.languageNotification.btnDecline":"Ne, hvala","header.languageNotification.btnAccept":"Zamijeni jezik","header.loader.phrases":"Kopiranje vaše IP adrese...;hakovanje sistema...;OwO;sušenje pravila...","header.store":"Prodavnica","header.downloads":"Preuzimanja","header.contributors":"Saradnici","home.introduction.catchphrase":"Neka svi saznaju šta vi radite!","home.introduction.button.downloads":"Preuzimanja","home.examples.playingagame":"Igrati igru","home.examples.timestamp":"{0} preostalo","presence.sections.description.title":"Deskripcija","presence.sections.information.title":"Informacija","presence.sections.information.author":"Autor","presence.sections.information.version":"Verzija","presence.sections.information.tags":"Tagovi","presence.sections.information.supportedurls":"Podržani URLs","store.message.error":"Ekstenzija nije pronađena, zaključavanje funkcije...","store.message.success":"Ekstenzija pronađena, odključavanje funkcije...","store.cards.creator":"Kreator","store.cards.verified":"Ovo prisustvo je odobrenjeno od verifikovano programera","store.header.search":"Pretraga","store.card.presence.add":"Dodaj prisustvo","store.card.presence.remove":"Ukloni prisustvo","store.card.presence.included":"Ovo prisustvo je automatski koristen kada yatreba, nema potrebe dodavati ga.","store.category.all":"Sve","store.category.games":"Igre","store.category.music":"Muzika","store.category.socials":"Društveno","store.category.videos":"Videa i Stimovi","store.category.other":"Ostalo","store.search":"Pretraga","store.userpage.userPresences":"Prisutnosti korisnika","store.userpage.error1":"Prisutnosti korisnika"}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Tým","contributors.headings.supporters":"Podporovatelé","contributors.headings.translators":"Překladatelé","contributors.roles.administrator":"Administrátor","contributors.roles.moderator":"Moderátor","contributors.roles.donator":"Dárce","contributors.roles.booster":"Booster","contributors.roles.translator":"Překladatel","contributors.cards.copyUserId":"Kliknutím zkopíruješ ID uživatele.","downloads.instructions.heading":"Jak Začít","downloads.appdownloading.header":"Aplikace","downloads.extdownloading.header":"Rozšíření","downloads.tooltips.os.not.supported.part2":"{0} Není zde žádný instalační soubor pro tenhle operační systém. To znamená, že pro něj není žádná profesionální podpora.","downloads.button.cancel":"Zrušit","downloads.button.done":"Hotovo","downloads.adsbox.thankyou.title":"Děkujeme!","downloads.adsbox.disableAdblock":"Prosím, vypni svůj blokátor reklam","downloads.skipanyway.message1":"Nechci podporovat.","downloads.skipanyway.message2":"Jsi si jist?","downloads.skipanyway.message3":"Opravdu?","downloads.skipanyway.message4":"P-prosím podpora :(","downloads.skipanyway.message5":"Potřebuji tě :<","downloads.skipanyway.message6":"Dobře, v pořádku...","user.notFound.heading":"Tohoto uživatele se nepodařilo najít. Ujistěte se že","footer.language":"Jazyk","footer.usercount.message":"Připojte se k {0} uživatelům již dnes!","footer.usercount.button":"Instalovat","footer.partners.heading":"Partneři","footer.developers.heading":"Vývojáři","footer.developers.documentation":"Dokumentace","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Podpoř nás","footer.supportus.donate":"Přispět","footer.supportus.contribute":"Přispět","footer.supportus.translate":"Přeložit","footer.supportus.jobs":"Pracuj s námi!","footer.help.heading":"Pomoc","footer.help.troubleshooting":"Řešit Problémy","footer.help.getsupport":"Získat Pomoc","footer.help.information":"Informace","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Ochrana soukromí","footer.help.information.terms":"Podmínky","footer.more.heading":"Více","footer.more.status":"Stav","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} od {1}","footer.copyright.line2":"Web spravuje {0}","header.language":"Čeština","header.languageNotification.title":"Podporujeme tvůj jazyk, chceš si ho přepnout?","header.languageNotification.text":"Naše webová stránka byla přeložena do tvého jazyka. Může se ti to hodit v případě že nemluvíš dobře Anglicky.","header.languageNotification.btnDecline":"Ne, děkuji","header.languageNotification.btnAccept":"Změnit jazyk","header.loader.phrases":"Peču palačinky...;Umísťuji kontejnery...;Analyzuji tvojí IP adresu...;UwU;Porušuji pravidla...","header.store":"Obchod","header.downloads":"Stáhnout","header.contributors":"Přispěvatelé","home.introduction.paragraph":"**PreMiD** je jednoduchý, konfigurovatelný nástroj, který ti umožní ukázat, co děláš na webu ve tvém \\"Právě Hraješ\\" statusu na Discordu.","home.introduction.button.features":"Funkce","home.introduction.button.downloads":"Stáhnout","home.examples.playingagame":"Hraje hru","home.examples.timestamp":"zbývá {0}","home.examples.timestamp2":"{0} uplynulo","home.examples.status.playing":"Přehrává","home.examples.status.live":"Živě","home.examples.status.browsing":"Prochází...","home.features.heading":"Tyto funkce se ti budou líbit!","home.features.presencesystem.heading":"Najdi **svou** presence","home.features.presencesystem.description":"Naše rozšíření jsme vyvinuli způsobem který ti umožňuje přidávat a používat presence vytvořené jinými uživateli a spravovat je v našem rozšíření!","home.features.presencesystem.button":"Navštívit obchod","home.features.simpleInterface.heading":"Jednoduché uživatelské rozhraní","home.features.simpleInterface.description.1":"Nastavení Aplikace a Rozšíření","home.features.simpleInterface.description.2":"Spravování presence","home.features.simpleInterface.description.3":"Seřadit podle kategorie","home.features.quickSupport.heading":"Rychlá podpora","home.languageSelector.tippy":"Jazyk webové stránky","jobs.modal.step":"Krok {0} ze 2","jobs.modal.buttons.next":"Další","jobs.modal.buttons.join":"Připojit","jobs.modal.buttons.cancel":"Zrušit","jobs.modal.error":"Vyplň prosím všechna pole","jobs.header.title":"Práce pro PreMiD","jobs.openings.title":"Volná pracovní místa","jobs.benefits.title":"Vysoké výhody","jobs.benefit2.title":"Nakouknutí","jobs.benefit3.title":"Ucta","jobs.benefit4.title":"Podpořit PreMiD","jobs.benefit5.title":"Čas vypršel","maintenance.big":"Ale ne!","maintenance.message":"Dokud toto naši speciální vývojáři opravují, svobodně se sem podívej!","maintenance.statuspage":"Stav","maintenance.discordserver":"Discord Server","merch.swag":"Najdi svůj **Swag**","merch.cart":"Přidat do košíku","merch.help":"Máte problémy s naším obchodem nebo objednávkou? Kontaktujte naši {0}zákaznickou podporu{1}","merch.item.added":"{0} bylo přidáno do vašeho košíku","merch.error.noitem":"Nic nebylo přidáno do vašeho košíku","partners.header.title":"Partneři","partners.header.description":"Připoj se ke skupině a získej některé výhody pouze pro partnery, abys ukázali, kolik swagu máš.","partners.slideshow.description":"Tyhle nám již patří","partners.why.title":"A co třeba jít do nebe místo pekla?","partners.why.benefit2.title":"Staňte se ověřený","partners.why.benefit2.description":"Speciální role a vyznamenání ti bude přiděleno na našem Discord serveru.","partners.why.benefit3.title":"Integrace meta-tagu","partners.why.benefit4.title":"Buď nesmrtelný","partners.why.benefit4.description":"Nepříjemné místo na naší partnerské stránce.","partners.why.benefit5.title":"Buď slavný","partners.requirements.title":"Požadavky","partners.requirements.first.title":"Co přesně hledáme?","partners.requirements.second.title":"Naše firewall","partners.requirements.second.description":"V současné době přijímáme různé druhy úsilí do našeho programu partnerství. Každý by měl mít šanci se projevit. Vysílátelé na Twitchi by měli mít alespoň 500 sledujících a alespoň 10 aktivní diváky. Musíš streamovat alespoň 1 krát týdně.","partners.apply.button":"Podejte žádost nyní!","partners.apply.disclaimer":"Pojďme společně do nebe!","partners.sponsors.description":"PreMiD by nebyl možný, bez těchto úžasných lidí.","partners.partner.aniFlix":"Takhle sleduješ anime.","partners.partner.arenaOfKings":"Arena of Kings je next-gen rychlá Pvp arénní hra hraná v prohlížeči.","partners.partner.bitRock":"Významný a snadno použivatelný nástroj pro vytváření více platforem.","partners.partner.statusPage":"Lehce zdělte status v reálném čase pro tvé uživatele.","partners.partner.crowdin":"Agile lokalizace pro technologické společnosti.","partners.partner.wikijs":"Nejvýkonnější a nejrozšířenější open source Wiki software.","partners.partner.packageCloud":"Propojené, vývojářům otevřené rozhraní pro všechny vaše výtvory.","partners.partner.fastly":"Za tím nejlepším z webu.","partners.apply.title":"Požádat o partnera","partners.apply.loggedUser":"Přihlášen jako {0}","partners.apply.notYou":"Nejsi to ty?","partners.apply.select.default":"Vyberte prosím jednu","partners.apply.select.website":"Webová stránka","partners.apply.select.other":"Ostatní","partners.apply.form.name":"Jméno","partners.apply.form.name.placeholder":"Příklad: PreMiD","partners.apply.form.link":"Odkaz","partners.apply.form.link.placeholder":"Příklad: https://premid.app","partners.apply.form.description":"Popis: (maximálně 150 znaků)","partners.apply.form.description.placeholder":"Popis pro doporučené","partners.apply.form.imageLink":"Odkaz na obrázek: (550x300, jen PNG)","partners.apply.form.imageLink.placeholder":"Příklad: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Zavřít","partners.apply.form.button.apply":"Aplikovat","partners.apply.success":"Děkujeme ti za přihlášku!","partners.apply.error1":"Vyplň prosím všechna pole.","partners.apply.error2":"Maximálně 150 znaků popisu.","partners.apply.error3":"Přidej prosím odkaz (musí začínat https://// a končit .png)","partners.apply.error4":"O partnera jste již požádali.","presence.sections.description.title":"Popis","presence.sections.changelog.title":"Seznam změn","presence.sections.information.title":"Informace","presence.sections.information.author":"Autor","presence.sections.information.version":"Verze","presence.sections.information.tags":"Štítky","presence.sections.information.supportedurls":"Podporované URL stránky","presence.sections.information.contributors":"Přispěvatelé","store.cards.creator":"Autor","store.category.heading":"Kategorie","store.category.all":"Vše","store.category.games":"Hry","store.category.music":"Hudba","store.category.socials":"Sociální sítě","store.category.videos":"Videa & Streamy","store.category.other":"Ostatní","user.roles.presenceDeveloper":"Vývojář přítomnosti","user.roles.presenceVerifier":"Ověřovatel přítomnosti","user.importantPresenceDev.message1":"Důležitý vývojář přítomnosti","user.importantPresenceDev.message2":"Vytvořeno {0} přítomností."}')
    }, function(e) {
        e.exports = JSON.parse('{"header.language":"Cymraeg","partners.apply.select.other":"Arall","store.message.error":"Estyniad heb ei gysylltu.","store.cards.creator":"Awdur","store.cards.popular":"Maer presenoldeb hwn yn boblogaidd iawn ymhlith defnyddwyr.","store.cards.partner":"Presenoldeb mewn Partneriaeth","store.cards.extraStepsRequired":"Maer presenoldeb hwn yn gofyn am gâmau ychwanegol, gweler eu tudalen i gael mwy o wybodaeth.","store.header.search":"Chwilio Presenoldebau","store.card.presence.included":"Mae\'r presenoldeb hwn yn cael ei alluogi\'n awtomatig pan ymwelwch â\'ch gwefan.","store.category.filters.mostUsed":"Defnyddir fwyaf yn gyntaf","store.category.all":"Holl catagoriau","store.category.games":"Gêmmau","store.category.music":"Cerddoriaeth","store.category.socials":"Cymdeithaseg","store.category.videos":"Fideos a Ffrydiau","store.category.other":"Arall","store.search":"Chwilio"}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Personale","contributors.headings.supporters":"Supportere","contributors.headings.translators":"Oversættere","downloads.instructions.heading":"Kom i gang","downloads.instructions.step.1":"Installér PreMiD","downloads.appdownloading.header":"Applikationen Download","downloads.extdownloading.header":"Extension downloads","downloads.tooltips.os.not.supported.part2":"{0} Der er ikke noget installationsprogram til dette operativsystem. Det betyder, at der ikke er nogen professionel support til det.","downloads.button.done":"Færdig","downloads.adsbox.thankyou.title":"Tak!","footer.language":"Sprog","footer.usercount.message":"Tilslut over {0} personer i dag!","footer.usercount.button":"Installér","footer.partners.heading":"Partnere","footer.developers.heading":"Udviklere","footer.developers.documentation":"Dokumentation","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Støt os","footer.supportus.donate":"Doner","footer.supportus.contribute":"Giv os en hjælpende hånd","footer.supportus.translate":"Oversæt","footer.help.heading":"Hjælp","footer.help.troubleshooting":"Fejlfinding","footer.help.getsupport":"Få hjælp","footer.help.information":"Information","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Beskyttelse af personlige oplysninger","footer.help.information.terms":"Vilkår","footer.more.heading":"Mere","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} af {1}","footer.copyright.line2":"Hjemmeside opholdt af {0}","header.language":"Dansk","header.languageNotification.title":"Vi understytter dit sprog. Vil du skifte?","header.languageNotification.text":"Vores hjemmeside er blevet oversat til dit sprog. Det her kan meget vel hjælpe dig, i tilfælde af at du ikke snakker engelsk særligt godt.","header.languageNotification.btnDecline":"Nej tak","header.languageNotification.btnAccept":"Skift sprog","header.loader.phrases":"Bager pandekager...;Kigger på Beholdere...;Analyserer din IP adresse...;UwU;Bryder regler...","header.store":"Butik","header.downloads":"Installationer","header.contributors":"Bidragere","home.introduction.button.downloads":"Installationer","home.examples.playingagame":"Spiller et spil","home.examples.timestamp":"{0} tilbage","home.examples.status.playing":"Afspilning","home.examples.status.live":"Live","home.examples.status.browsing":"Søger...","home.features.heading":"Du vil elske disse funktioner!","home.features.presencesystem.heading":"Find **din** presence","home.features.simpleInterface.heading":"Enkel brugergrænseflade","home.features.simpleInterface.description.1":"App og udvidelsesindstillinger","home.features.simpleInterface.description.2":"Presence Administration","home.features.quickSupport.heading":"Hurtig support","maintenance.big":"Åh nej!","maintenance.message":"Indtil vores specielle udviklere løser dette, er du velkommen til at tage et kig her!","maintenance.statuspage":"Status side","maintenance.discordserver":"Discord server","partners.header.title":"Partnere","partners.apply.select.other":"Andet","presence.sections.description.title":"Beskrivelse","presence.sections.changelog.title":"Ændringslog","presence.sections.information.title":"Information","presence.sections.information.author":"Forfatter","presence.sections.information.version":"Version","presence.sections.information.tags":"Mærker","presence.sections.information.supportedurls":"Understyttede URLs","presence.sections.information.contributors":"Bidragere","store.cards.creator":"Forfatter","store.category.all":"Alle","store.category.games":"Spil","store.category.music":"Musik","store.category.socials":"Sociale Apps","store.category.videos":"Video & Streaming","store.category.other":"Andet"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Willst du neue Funktionen?","beta.description.1":"**PreMiD Beta** ist jetzt für alle verfügbar!","beta.description.2":"Was bekommst du, wenn du dich registrierst?","beta.features.1":"Neueste Funktionen","beta.features.2":"Zugriff auf PreMiD\'s supergeheime Textkanäle","beta.features.3":"Eine besondere Rolle auf unserem Discord Server","beta.register.text":"Bereit dafür? Trete {0} anderen Betatestern bei!","beta.register.button":"Jetzt registrieren!","thankyou.title":"Cool! Du bist jetzt Beta-Benutzer!","thankyou.description":"Unsere Affen arbeiten daran, dich so schnell wie möglich in unser Beta-Programm zu bringen. Vielen Dank für deine Registrierung!","error.noslots":"Es sieht so aus, als ob wir keine Beta-Slots mehr zur Verfügung haben.","contributors.headings.staff":"Team","contributors.headings.supporters":"Unterstützer*in","contributors.headings.translators":"Übersetzer*in","contributors.roles.projectLeader":"Projektleiter*in","contributors.roles.staffCoordinator":"Personal Manager*in","contributors.roles.marketingDirector":"Marketing Direktor*in","contributors.roles.administrator":"Administrator*in","contributors.roles.reviewer":"Prüfer*in","contributors.roles.localizationManager":"Lokalisierungs Manager","contributors.roles.developer":"Entwickler*in","contributors.roles.designer":"Designer*in","contributors.roles.moderator":"Moderator*in","contributors.roles.supportAgent":"Support-Agent*in","contributors.roles.representative":"Repräsentant*in","contributors.roles.proofreader":"Korrekturleser*in","contributors.roles.donator":"Spender*in","contributors.roles.booster":"Booster","contributors.roles.translator":"Übersetzer*in","contributors.cards.copyUserId":"Klicken, um Benutzer-ID zu kopieren.","contributors.cards.userIdCopied":"Nutzer ID kopiert!","downloads.header.title":"Zeit anzugeben.","downloads.header.subtitle":"Beginne mit der Nutzung von PreMiD und zeige anderen, was du machst, vielleicht findest du jemanden mit den gleichen Interessen.","downloads.instructions.heading":"Erste Schritte","downloads.instructions.step.1":"PreMiD herunterladen","downloads.instructions.step.2":"Unsere App installieren","downloads.instructions.step.3":"Unsere Erweiterung zu deinem Browser hinzufügen","downloads.instructions.step.4":"Lade diese Seite neu und prüfe, ob die Erweiterung verbunden ist","downloads.instructions.footer":"Hast du immer noch Probleme? {0}","downloads.instructions.footer.link":"Wir sind hier um zu helfen!","downloads.appdownloading.header":"Programm","downloads.extdownloading.header":"Browsererweiterung","downloads.tooltips.os.not.supported.part1":"Warnung:","downloads.tooltips.os.not.supported.part2":"{0} Es gibt keinen Installer für dieses Betriebssystem. Das bedeutet, dass es keine professionelle Unterstützung dafür gibt.","downloads.mobile.errorMessage":"Beachte, dass PreMiD aktuell nicht auf Mobilgeräten unterstützt wird.","downloads.mobile.showDownloads":"Downloads anzeigen","downloads.mobile.hideDownloads":"Downloads ausblenden","downloads.warning.differentVersion":"Aktuelle Version dieser Plattform ist {0} (diese Version ist speziell für Linux und gilt nicht für andere Systeme).","downloads.warning.differentVersion2":"Diese Version ist speziell für Linux und gilt nicht für andere Systeme. Die Hauptversion der Anwendung ist {0}","downloads.error.login":"Bitte einloggen, um diese Downloads zu sehen.","downloads.error.noaccess.title":"Oh oh, es sieht so aus, als hättest du keinen Alpha/Beta-Zugang :(","downloads.error.noaccess.description":"Du kannst unserem Beta-Programm **hier** kostenlos beitreten. Beeile dich! Wir haben nur noch {0} Plätze frei","downloads.latest.header":"Vorzeitige Veröffentlichungen","downloads.warning.title":"Warnung","downloads.warning.message.opera":"Du musst die **diese** Erweiterung installieren, um PreMiD aus dem Chrome Webstore zu installieren.","downloads.button.skip":"Überspringen","downloads.button.back":"Zurück","downloads.button.cancel":"Abbrechen","downloads.button.okay":"Okay","downloads.button.done":"Erledigt","downloads.button.login":"Login","downloads.button.skipanyway":"Trotzdem überspringen","downloads.adsbox.thankyou.title":"Vielen Dank!","downloads.adsbox.thankyou.message":"Wir nutzen Werbung, um unser Team zu unterstützen und unsere Server zu verwalten, um dir das beste Nutzererlebnis zu bieten!","downloads.adsbox.disableAdblock":"Bitte deaktiviere deinen Ad-Blocker","downloads.showbeta.message":"Beta-Downloads anzeigen","downloads.showbeta.small":"(nicht notwendig, wenn du nur die normale Anwendung runterladen möchtest)","downloads.skipanyway.message1":"Ich will nicht unterstützen.","downloads.skipanyway.message2":"Bist du sicher?","downloads.skipanyway.message3":"Wirklich?","downloads.skipanyway.message4":"B-bitte unterstützen Sie uns :(","downloads.skipanyway.message5":"Ich brauche dich :<","downloads.skipanyway.message6":"Okay, okay...","store.search.notFound":"Wir konnten diese Presence nicht finden...","error.code.404":"Entschuldige, wir konnten diese Seite nicht finden.","error.code.4":"Du suchst eine nicht existierende oder gelöschte Presence.","error.code.500":"Interner Serverfehler ist aufgetreten.","error.page.details":"Details","error.page.button":"Zurück zur Startseite","user.notFound.heading":"Dieser Benutzer konnte nicht gefunden werden. Bitte stelle sicher","user.notFound.message1":", dass die ID des Benutzers, den du suchst, korrekt ist.","user.notFound.message2":", dass der Benutzer genug Presences erstellt - und die Presence Entwickler Rolle in unserem Discord-Server hat.","user.notFound.message3":"wenn andere das gleiche Problem auf unserem Discord-Server haben.","user.notFound.message4":"Wenn du glaubst, dass dies ein Fehler war, kontaktiere uns bitte auf [unserem Discord-Server].","footer.language":"Sprache","footer.usercount.heading":"Bereit, PreMiD zu benutzen?","footer.usercount.message":"Trete über {0} Nutzern bei!","footer.usercount.button":"Installieren","footer.partners.heading":"Partner","footer.followUs.heading":"Folge uns","footer.developers.heading":"Entwickler","footer.developers.documentation":"Dokumentation","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Unterstütze uns","footer.supportus.donate":"Spenden","footer.supportus.contribute":"Mitwirken","footer.supportus.translate":"Übersetzen","footer.supportus.jobs":"Arbeite mit uns!","footer.help.heading":"Hilfe","footer.help.troubleshooting":"Fehlerbehebung","footer.help.getsupport":"Hilfe erhalten","footer.help.information":"Informationen","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Datenschutz","footer.help.information.terms":"Nutzungsbedingungen","footer.more.heading":"Mehr","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} von {1}","footer.copyright.line2":"Website betreut von {0}","footer.partners.more":"Klicke hier, um die restlichen Partner & Sponsoren zu sehen.","header.language":"Deutsch","header.languageNotification.title":"Wir unterstützen deine Sprache, möchtest du wechseln?","header.languageNotification.text":"Unsere Website wurde in deine Sprache übersetzt. Dies könnte helfen, falls du nicht so gut Englisch sprichst.","header.languageNotification.btnDecline":"Nein, danke","header.languageNotification.btnAccept":"Sprache wechseln","header.loader.phrases":"Pfannkuchen backen...;Container platzieren...;Deine IP-Adresse lesen...;UwU;Die Regeln brechen...;Hasen fangen...;Discord anrufen...","header.store":"Store","header.downloads":"Downloads","header.contributors":"Mitwirkende","header.login":"Anmelden","header.lia":"Eingeloggt als","header.rab":"Melde einen Fehler","header.staff":"Dashboard","header.logout":"Ausloggen","home.introduction.paragraph":"**PreMiD** ist eine einfache, konfigurierbare Software, die dir erlaubt in deinem Discord-Status zu zeigen, was du im Web tust.","home.introduction.button.features":"Funktionen","home.introduction.button.downloads":"Downloads","home.examples.playingagame":"Spielt ein Spiel","home.examples.timestamp":"{0} verbleibend","home.examples.timestamp2":"{0} verstrichen","home.examples.status.playing":"Wiedergabe","home.examples.status.live":"Live","home.examples.status.browsing":"Durchstöbert...","home.features.heading":"Du wirst diese Funktionen lieben!","home.features.presencesystem.heading":"Finde **deine** Presence","home.features.presencesystem.description":"Wir haben unsere Erweiterung so programmiert, dass du einfach Presences von anderen Benutzern hinzufügen und in unserer Erweiterung verwalten kannst!","home.features.presencesystem.button":"Store besuchen","home.features.simpleInterface.heading":"Einfache Benutzeroberfläche","home.features.simpleInterface.description":"Müde von komplizierten Benutzeroberflächen? Deshalb haben wir unsere Benutzeroberfläche so einfach und nützlich wie möglich gehalten, mit wichtigen Funktionen wie:","home.features.simpleInterface.description.1":"App- und Erweiterungseinstellungen","home.features.simpleInterface.description.2":"Presence-Verwaltung","home.features.simpleInterface.description.3":"Nach Kategorie sortieren","home.features.quickSupport.heading":"Schneller Support","home.features.quickSupport.description":"Irgendwas ist fehlerhaft, gibt dir tonnenweise Fehlermeldungen oder funktioniert nicht? Wir helfen dir auf unserem Discord-Server, diese Probleme zu beseitigen. Wir haben auch unser eigenes Supportsystem erstellt, um sicher zu stellen, dass dein Problem schnellstmöglich behoben wird.","home.features.quickSupport.button":"Trete unserem Discord-Server bei","home.languageSelector.tippy":"Website-Sprache","jobs.modal.title":"Als {0} bewerben","jobs.modal.step":"Schritt {0} von 2","jobs.modal.buttons.next":"Weiter","jobs.modal.buttons.join":"Beitreten","jobs.modal.buttons.cancel":"Abbrechen","jobs.modal.error":"Fülle bitte alle Felder aus","jobs.modal.notice":"PreMiD ist ein Open-Source-Projekt. Das bedeutet, dass wir sind ein gemeinnütziges Team sind. Jede Spende oder Patreon-Spende fließt zurück in PreMiD. Wenn du dich bei PreMiD bewirbst, stimmst du zu, nicht für deine Arbeit bezahlt zu werden.","jobs.guild.required":"Trete unserem Discord-Server bei","jobs.guild.explanation":"Um dich bewerben zu können, musst du unserem Discord-Server beigetreten sein. Sonst könnten wir dich nicht kontaktieren, falls du am Ende ausgewählt wirst!","jobs.header.title":"Arbeite für PreMiD","jobs.header.description":"Bist du bereit, dem größtem Rich-Presence Programm zu helfen?","jobs.openings.title":"Stellenangebote","jobs.benefits.title":"High-End Vorteile","jobs.benefit1.title":"Treffe uns","jobs.benefit1.description":"Nehme Kontakt mit den Menschen hinter PreMiD auf.","jobs.benefit2.title":"Sneak Peaks","jobs.benefit2.description":"Werfe einen Blick auf unsere Entwicklung und unser Marketing.","jobs.benefit3.title":"Ehre","jobs.benefit3.description":"Mächtige Discord-Berechtigungen und eine farbenfrohe Rolle.","jobs.benefit4.title":"Unterstütze PreMiD","jobs.benefit4.description":"Dank deiner Hilfe ist es möglich, dieses Projekt zu führen.","jobs.benefit5.title":"Auszeit","jobs.benefit5.description":"Nimm dir Zeit, dies ist ehrenamtliche Arbeit.","jobs.benefit6.title":"Early-Access","jobs.benefit6.description":"Probiere neue Funktionen vor allen anderen aus.","jobs.success.applied":"Vielen Dank für deine Bewerbung!","jobs.errors.alreadyApplied":"Du hast dich bereits beworben!","maintenance.big":"Oh nein!","maintenance.heading":"Leider haben wir ein paar technische Schwierigkeiten. Wir werden in Kürze zurück sein. Entschuldigung für die Unannehmlichkeiten.","maintenance.heading2":"Bitte komme später wieder für weitere Informationen.","maintenance.message":"Bis unsere speziellen Entwickler das beheben, kannst du dich hier umschauen!","maintenance.statuspage":"Statusseite","maintenance.discordserver":"Discord-Server","merch.title":"Willkommen im offiziellem **PreMiD**-Merchandise Shop!","merch.swag":"Finde deinen **Swag**","merch.fit":"**Wähle deine Größe**","merch.cart":"In den Warenkorb","merch.help":"Probleme mit unserem Store oder einer Bestellung? Kontaktiere unseren {0}Kundensupport{1}","merch.item.added":"{0} wurde zu deinem Warenkorb hinzugefügt","merch.error.noitem":"Es befindet sich kein Artikel in deinem Warenkorb","partners.header.title":"Partner","partners.header.description":"Schließe Dich der Familie an und erhalte einige exklusive Partnervorteile, um allen zu zeigen, wie viel Swag Du hast.","partners.slideshow.description":"Diese gehören schon zu uns","partners.why.title":"Wie wäre es, in den Himmel, anstatt in die Hölle zu gehen?","partners.why.benefit1.title":"Deine kostenlose Presence","partners.why.benefit1.description":"Unser Team wird dir eine Presence von deinem Webservice bereitstellen.","partners.why.benefit2.title":"Werde verifiziert","partners.why.benefit2.description":"Eine besondere Rolle und große Ehre wird dir auf unserem Discord-Server zuteil werden.","partners.why.benefit3.title":"Meta-tag-Integration","partners.why.benefit3.description":"Aktiviert deine Presence automatisch, wenn jemand deine Website besucht.","partners.why.benefit4.title":"Werde verewigt","partners.why.benefit4.description":"Ein krasser Platz auf unserer Partner-Seite.","partners.why.benefit5.title":"Sei berühmt","partners.why.benefit5.description":"In sozialen Netzwerken bei uns vorgestellt werden.","partners.requirements.title":"Anforderungen","partners.requirements.first.title":"Wonach suchen wir?","partners.requirements.first.description":"Wir halten Ausschau nach wachsenden Communities und aufregenden Dingen im Internet. TL; DR Sie sollten PreMiD bereits verwenden und bereit sein, es an noch mehr Internetfreaks weiterzugeben. Die Aufnahme in das Programm ist äußerst qualitativ und variiert von Kandidat zu Kandidat.","partners.requirements.second.title":"Unsere Firewall","partners.requirements.second.description":"Wir nehmen zur Zeit verschiedene Anstrengungen in unser Partnerprogramm auf. Jeder sollte die Möglichkeit haben, beachtet zu werden. Twitch-Streamer sollten mindestens 500 Follower und mindestens 10 gleichzeitige Zuschauer haben. Du musst mindestens 1 Mal pro Woche streamen.","partners.apply.button":"Jetzt bewerben!","partners.apply.disclaimer":"Lass uns gemeinsam in den Himmel gehen!","partners.apply.jobs":"Wenn Du eher an einem direkten Job bei PreMiD interessiert bist, schau dir unsere **Stellenanzeige** an.","partners.sponsors.title":"Sponsoren","partners.sponsors.description":"Ohne diese erstaunlichen Leute wäre PreMiD nicht möglich.","partners.partner.aniFlix":"So schaut man Anime.","partners.partner.arenaOfKings":"Arena of Kings ist ein rasantes im Browser gespieltes next-gen PvP-Arenaspiel.","partners.partner.upBeat":"UpBeat ist ein gemeinnütziges internationales Radio, das sich um qualitativ hochwertige Radio- und Nachrichtenunterhaltung bemüht.","partners.partner.simLiveRadio":"SimLiveRadio ist das erfolgreichste Infotainment-Radio für Simulationsspiele in Deutschland, Österreich und der Schweiz!","partners.partner.discordTemplates":"Beginne deine eigene Community mit unseren tollen Vorlagen zu erstellen. Baue dein eigenes Königreich.","partners.partner.taigaBot":"taiga ist ein Discord Bot mit dem Ziel, alle Funktionen die du gebrauchen kannst in einem Bot anzubieten!","partners.partner.bitRock":"Ein leistungsstarkes und einfach zu bedienendes plattformübergreifendes Installations-Erstellungswerkzeug.","partners.partner.statusPage":"Kommuniziere dein Echtzeit-Status mit deinen Benutzern.","partners.partner.erisly":"Eine Göttin, die als lustiger Discord-Bot spielt!","partners.partner.reyfm":"Mit REYFM kannst du über 15+ Musikstreams kostenlos anhören - nonstop. Mit der besten und neuesten Musik nur für Dich!","partners.partner.crowdin":"Flexible Übersetzungslösung für Technologieunternehmen.","partners.partner.wikijs":"Die leistungsstärkste und erweiterbarste Open-Source-Wiki-Software.","partners.partner.packageCloud":"Eine einheitliche, entwicklerfreundliche Oberfläche für alle deine Artefakte.","partners.partner.fastly":"Hinter dem besten des Webs.","partners.partner.onlyhit":"OnlyHit ist dein Online-Musik-Radiosender gemacht, um deine besten Hits 24/7 abzuspielen und dir deine zukünftigen Hits zuerst entdecken zu lassen.","partners.partner.atomicradio":"Erlebe den neuesten und besten Mix aus der Musikwelt nonstop auf all unseren Sendern, wähle aus was dir am besten gefällt und sei live dabei, wenn sich Chart-Legenden mit Newcomern um den ersten Platz batteln!","partners.apply.title":"Partnerschaft anfragen","partners.apply.loggedUser":"Angemeldet als {0}","partners.apply.notYou":"Nicht du?","partners.apply.select.default":"Bitte eins auswählen","partners.apply.select.website":"Webseite","partners.apply.select.other":"Anderes","partners.apply.form.name":"Name","partners.apply.form.name.placeholder":"Bsp: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Bsp: https://premid.app","partners.apply.form.description":"Beschreibung: (Maximal 150 Zeichen)","partners.apply.form.description.placeholder":"Beschreibung für vorgestellt","partners.apply.form.imageLink":"Bildlink: (550x300, nur PNG)","partners.apply.form.imageLink.placeholder":"Bsp: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Schließen","partners.apply.form.button.apply":"Bewerben","partners.apply.success":"Vielen Dank für deine Bewerbung!","partners.apply.error1":"Bitte alle Felder ausfüllen.","partners.apply.error2":"Maximal 150 Zeichen lange Beschreibung.","partners.apply.error3":"Bitte einen Link hinzufügen (muss mit https:// starten und mit .png enden)","partners.apply.error4":"Du hast dich schon als Partner beworben.","presence.page.buttons.sourceCode":"Quellcode","presence.sections.description.title":"Beschreibung","presence.sections.changelog.title":"Changelog","presence.sections.information.title":"Information","presence.sections.information.author":"Autor","presence.sections.information.version":"Version","presence.sections.information.likes":"Likes","presence.sections.information.users":"Benutzer","presence.sections.information.tags":"Schlagwörter","presence.sections.information.supportedurls":"Unterstützte URLs","presence.sections.information.contributors":"Mitwirkende","report.title":"Melde einen Fehler","report.bugcount":"{count}/3 Fehlermeldungen übrig","report.info":"Melde Fehler innerhalb der PreMiD-Website und des PreMiD Discord-Servers. Fehler für eine Presence sollten an den Ersteller der jeweiligen Presence gemeldet werden. Bitte melde Bugs nur auf Englisch.","report.overview":"Gebe uns eine klare und präzise Beschreibung des Fehlers.","report.os":"Wähle dein Betriebssystem und die Version aus","report.browser":"Wähle deinen Browser und die Version aus - Du kannst die Version herausfinden indem du about:support in Firefox oder chrome://help in Chromium öffnest","report.description":"Gebe uns einen Link zu einem Live-Beispiel oder eine Schritt-für-Schritt Erklärung, wie man diesen Fehler reproduzieren kann.","report.button":"Melden","report.toomany":"Du hast zu viele aktive Berichte. Warte, bis deine eingereichten Berichte überprüft werden. Berichte werden wöchentlich überprüft, bitte habe Geduld.","report.toomany.alert":"Du hast zu viele aktive Meldungen.","report.success":"Fehler gemeldet","report.error":"Weitere Informationen benötigt","report.error.unauth":"Dein Discord-Konto muss verifiziert sein","report.activebugs":"Aktive Fehler","store.message.error":"Erweiterung ist nicht verbunden.","store.cards.creator":"Autor","store.cards.popular":"Diese Presence ist sehr beliebt bei Benutzern.","store.cards.partner":"Partner-Presence","store.cards.extraStepsRequired":"Diese Presence erfordert zusätzliche Schritte um zu funktionieren, bitte lese die Beschreibung für weitere Informationen.","store.header.search":"Presence suchen","store.card.presence.add":"Presence hinzufügen","store.card.presence.remove":"Presence entfernen","store.card.presence.included":"Diese Presence wird automatisch aktiviert, wenn du ihre Website besuchst.","store.category.filters.heading":"Filter","store.category.filters.mostUsed":"Meist verwendete zuerst","store.category.filters.allowAdult":"NSFW anzeigen","store.category.filters.likedOnly":"Nur gemochte Presences","store.filters.added":"Hinzugefügte Presences anzeigen","store.category.heading":"Kategorien","store.category.all":"Alle","store.category.games":"Spiele","store.category.music":"Musik","store.category.socials":"Soziale Netzwerke","store.category.videos":"Videos & Livestreams","store.category.other":"Sonstige","store.search":"Suchen","store.search.filters":"Enter","store.search.removeFilter":"Klicke, um den Filter zu entfernen","user.roles.presenceDeveloper":"Presence-Entwickler","user.roles.presenceVerifier":"Presence-Verifizierer","user.importantPresenceDev.message1":"Wichtiger Presence-Entwickler","user.importantPresenceDev.message2":"{0} Presences erstellt.","user.geniusPresenceDev.message1":"Presence-Entwickler-Genie","user.geniusPresenceDev.message2":"Über 100 Presences erstellt!","user.switch.contributed":"Benutzer [Presences/Beiträge]","user.presences.created":"Klicke hier, um die Presences anzuzeigen, die dieser Benutzer erstellt hat.","user.presences.contributed":"Klicken Sie hier, um die Presences anzuzeigen, zu denen dieser Benutzer beigetragen hat."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Θέλετε νέα χαρακτηριστικά;","beta.description.1":"Το **PreMiD Beta** είναι τώρα διαθέσιμο για όλους!","beta.description.2":"Τι θα πάρετε αν εγγραφείτε;","beta.features.1":"Τα πιο πρόσφατα χαρακτηριστικά","beta.features.2":"Πρόσβαση στα σούπερ μυστικά κανάλια στο Discord του PreMiD","beta.features.3":"Ένας ειδικός ρόλος στον Discord server μας","beta.register.text":"Είσαστε έτοιμοι; Εισέλθετε στην ομάδα με άλλους {0} δοκιμαστές Beta!","beta.register.button":"Εγγραφείτε τώρα!","thankyou.title":"Ωραία! Είστε τώρα ένας χρήστης beta!","thankyou.description":"Οι πιθήκοι μας εργάζονται για να σας βάλουν στο πρόγραμμα beta μας το συντομότερο δυνατόν. Σας ευχαριστούμε για την εγγραφή!","error.noslots":"Φαίνεται ότι δεν έχουμε άλλες beta υποδοχές διαθέσιμες.","contributors.headings.staff":"Προσωπικό","contributors.headings.supporters":"Υποστηρικτές","contributors.headings.translators":"Μεταφραστές","contributors.roles.projectLeader":"Επικεφαλής Έργου","contributors.roles.staffCoordinator":"Συντονιστής Προσωπικού","contributors.roles.marketingDirector":"Διευθυντής Μάρκετινγκ","contributors.roles.administrator":"Διαχειριστής","contributors.roles.reviewer":"Ελεγκτής","contributors.roles.developer":"Προγραμματιστής","contributors.roles.designer":"Σχεδιαστής","contributors.roles.moderator":"Επόπτης","contributors.roles.supportAgent":"Αντιπρόσωπος Υποστήριξης","contributors.roles.representative":"Εκπρόσωπος","contributors.roles.proofreader":"Επιμελητής","contributors.roles.donator":"Δωρητής","contributors.roles.booster":"Ενισχυτής","contributors.roles.translator":"Μεταφραστής","contributors.cards.copyUserId":"Κάντε κλικ για να αντιγράψετε το ID του χρήστη.","contributors.cards.userIdCopied":"Το ID χρήστη αντιγράφηκε!","downloads.header.title":"Ώρα για εμφάνιση.","downloads.header.subtitle":"Χρησιμοποιήστε το PreMiD τώρα και δείξτε στους φίλους σας τι κάνετε, ίσως βρείτε κάποιον με τα ίδια ενδιαφέροντα.","downloads.instructions.heading":"Ας Ξεκινήσουμε","downloads.instructions.step.1":"Κατεβάστε το PreMiD","downloads.instructions.step.2":"Εγκαταστήστε την εφαρμογή μας","downloads.instructions.step.3":"Προσθέστε την επέκτασή μας στο πρόγραμμα περιήγησης","downloads.instructions.step.4":"Επαναφορτώστε αυτή την σελίδα και ελέγχξτε εάν η επέκταση είναι συνδεδεμένη","downloads.instructions.footer":"Εξακολουθείτε να έχετε προβλήματα; {0}","downloads.instructions.footer.link":"Είμαστε εδώ για να σας βοηθήσουμε!","downloads.appdownloading.header":"Αίτηση","downloads.extdownloading.header":"Επέκταση","downloads.tooltips.os.not.supported.part1":"Προειδοποίηση:","downloads.tooltips.os.not.supported.part2":"{0} Δεν υπάρχει πρόγραμμα εγκατάστασης για αυτό το λειτουργικό σύστημα. Αυτό σημαίνει ότι δεν υπάρχει επαγγελματική υποστήριξη.","downloads.mobile.errorMessage":"Το PreMiD δεν υποστηρίζεται από κινητά τηλέφωνα.","downloads.mobile.showDownloads":"Προβολή Λήψεων","downloads.mobile.hideDownloads":"Απόκρυψη Λήψεων","downloads.warning.differentVersion2":"Η έκδοση αυτή απευθύνεται στο Linux, και δεν ισχύει για άλλες πλατφόρμες. Η κύρια έκδοση της εφαρμογής είναι {0}","downloads.error.login":"Παρακαλώ συνδεθείτε για να δείτε αυτές τις λήψεις.","downloads.error.noaccess.title":"Ωχ, φαίνεται ότι δεν έχετε πρόσβαση στα alpha ή beta :(","downloads.error.noaccess.description":"Μπορείτε να συμμετάσχετε στο πρόγραμμα beta μας από **εδώ** δωρεάν. Γρήγορα! Έχουνε μείνει μόνο {0} θέσεις!","downloads.latest.header":"Πρώιμες Κυκλοφορίες","downloads.warning.title":"Προσοχή","downloads.warning.message.opera":"Πρέπει να εγκαταστήσετε **αυτήν** την επέκταση για να εγκαταστήσετε το PreMiD από το ηλεκτρονικό κατάστημα του Chrome.","downloads.button.skip":"Παράβλεψη","downloads.button.back":"Επιστροφή","downloads.button.okay":"Ok","downloads.button.done":"Ολοκληρώθηκε","downloads.button.login":"Σύνδεση","downloads.adsbox.thankyou.title":"Ευχαριστούμε!","downloads.adsbox.thankyou.message":"Χρησιμοποιούμε διαφημίσεις για να υποστηρίξουμε την ομάδα μας και να διατηρήσουμε τους διακομιστές μας για να σας προσφέρουμε την καλύτερη εμπειρία!","downloads.adsbox.disableAdblock":"Παρακαλούμε απενεργοποιήστε το adblock σας","downloads.showbeta.small":"(δεν χρειάζεται αν είστε εδώ για να κατεβάσετε μόνο την κανονική εφαρμογή)","downloads.skipanyway.message1":"Δεν θέλω να σας υποστηρίξω.","downloads.skipanyway.message2":"Είσαι σίγουρος;","downloads.skipanyway.message3":"Σοβαρά τώρα;","downloads.skipanyway.message4":"Έλα ρε μπρο πλιζ :(","downloads.skipanyway.message5":"Πλιζ σε χρειάζομαι :<","downloads.skipanyway.message6":"Καλά, καλά...","store.search.notFound":"Δεν μπορέσαμε να βρούμε αυτό το \\"Presence\\"...","error.code.404":"Συγνώμη, δεν μπορέσαμε να βρούμε αυτή τη σελίδα.","error.code.4":"Ψάχνετε για ένα ανύπαρκτο ή διαγεγραμμένο Presence.","error.code.500":"Παρουσιάστηκε εσωτερικό σφάλμα διακομιστή.","error.page.details":"Λεπτομέρειες","error.page.button":"Επιστροφή στην αρχική σελίδα","user.notFound.heading":"Αυτός ο χρήστης δεν βρέθηκε. Προσπαθήστε να βεβαιωθείτε","user.notFound.message1":"ότι το ID του Χρήστη που αναζητάτε είναι σωστό.","user.notFound.message2":"ότι ο χρήστης έχει δημιουργήσει αρκετά Presences και έχει τον ρόλο \\"Presence Developer\\" στον διακομιστή μας στο Discord.","user.notFound.message3":"αν άλλοι έχουν το ίδιο πρόβλημα στον διακομιστή μας στο Discord.","user.notFound.message4":"Αν πιστεύετε ότι έγινε λάθος, παρακαλούμε επικοινωνήστε μαζί μας στον [Discord διακομιστή μας].","footer.language":"Γλώσσα","footer.usercount.heading":"Είσαστε έτοιμοι για να χρησιμοποιήσεται το PreMiD;","footer.usercount.message":"Γίνετε μέλος μαζί με άλλους {0} χρήστες!","footer.usercount.button":"Εγκατάσταση","footer.partners.heading":"Συνεργάτες","footer.followUs.heading":"Ακολουθήστε μας","footer.developers.heading":"Προγραμματιστές","footer.developers.documentation":"Τεκμηρίωση","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Υποστηρίξτε μας","footer.supportus.donate":"Δωρήστε","footer.supportus.contribute":"Συμβάλλετε","footer.supportus.translate":"Μεταφράστε","footer.supportus.jobs":"Εργαστείτε μαζί μας!","footer.help.heading":"Βοήθεια","footer.help.getsupport":"Λήψη βοήθειας","footer.help.information":"Πληροφορίες","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Απόρρητο","footer.help.information.terms":"Όροι","footer.more.heading":"Περισσότερα","footer.more.status":"Κατάσταση","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} by {1}","footer.copyright.line2":"Η ιστοσελίδα διατηρείται από {0}","footer.partners.more":"Κάντε κλικ εδώ για να δείτε τους υπόλοιπους συνεργάτες και χορηγούς μας.","header.language":"Ελληνικά","header.languageNotification.title":"Θα θέλατε να αλλάξετε γλώσσα;","header.languageNotification.text":"Η ιστοσελίδα μας έχει μεταφραστεί στη γλώσσα σας. Αυτό μπορεί να σας βοηθήσει σε περίπτωση που δεν τα πάτε πολύ καλά με τα Αγγλικά.","header.languageNotification.btnDecline":"Όχι, ευχαριστώ","header.languageNotification.btnAccept":"Αλλαγή γλώσσας","header.loader.phrases":"Σκουπίζω και σφουγγαρίζω...;Παραγγέλνω κρέπα...;Χορεύω συρτάκι...;UwU;Τρώω παντόφλα...","header.store":"Κατάστημα","header.downloads":"Λήψεις","header.contributors":"Συνεισφέροντες","header.login":"Σύνδεση","header.lia":"Συνδεδεμένος ως","header.rab":"Αναφέρετε ένα bug","header.staff":"Πίνακας Ελέγχου","header.logout":"Αποσύνδεση","home.introduction.paragraph":"**Το PreMiD** είναι ένα απλό, ευέλικτο βοηθητικό πρόγραμμα που σας επιτρέπει να δείξετε τι κάνετε στο διαδίκτυο στην κατάσταση αναπαραγωγής (status) στο Discord σας.","home.introduction.button.features":"Λειτουργίες","home.introduction.button.downloads":"Λήψεις","home.examples.playingagame":"Παίζει ένα παιχνίδι","home.examples.timestamp":"{0} έμειναν","home.examples.timestamp2":"{0} πέρασαν","home.examples.status.playing":"Αναπαραγωγή","home.examples.status.live":"Ζωντανό","home.examples.status.browsing":"Αναζήτηση...","home.features.heading":"Θα το λατρέψετε!","home.features.presencesystem.heading":"Βρείτε **το δικό σας** presence","home.features.presencesystem.description":"Δημιουργήσαμε την επέκτασή μας ώστε να σας επιτρέπει να προσθέσετε και να χρησιμοποιήσετε Presences που έχουν δημιουργηθεί από άλλους και να τις διαχειριστείτε στην επέκτασή μας!","home.features.presencesystem.button":"Επισκευτείτε το κατάστημα","home.features.simpleInterface.heading":"Απλό περιβάλλον χρήστη","home.features.simpleInterface.description":"Κουρασμένος από περίπλοκες διεπαφές χρήστη; Γι \'αυτό δημιουργήσαμε και προσπαθούμε να κρατήσουμε το UI μας όσο το δυνατόν πιο απλό και χρήσιμο με σημαντικά χαρακτηριστικά όπως:","home.features.simpleInterface.description.1":"Ρυθμίσεις εφαρμογής και επέκτασης","home.features.simpleInterface.description.2":"Διαχείριση των Presence","home.features.simpleInterface.description.3":"Ταξινόμηση ανά κατηγορία","home.features.quickSupport.heading":"Γρήγορη υποστήριξη","home.features.quickSupport.description":"Κάτι είναι χαλασμένο, κολλημένο, στέλνοντας σας τόνους σφαλμάτων ή απλά δεν λειτουργεί; Θα σας βοηθήσουμε να απαλλαγείτε από αυτά τα προβλήματα στον Discord server μας, δημιουργήσαμε επίσης το δικό μας σύστημα υποστήριξης που θα διασφαλίσει την επίλυση των προβλημάτων σας το συντομότερο δυνατόν.","home.languageSelector.tippy":"Γλώσσα ιστοσελίδας","maintenance.big":"Ωχ όχι!","partners.header.title":"Συνεργάτες","partners.partner.atomicradio":"Ζήστε την εμπειρία των τελευταίων και καλύτερων mix από τον κόσμο της μουσικής non-stop επί όλοι οι σταθμοί μας, επιλέξτε ποιο σας αρέσει το πιο και να είστε εκεί ζωντανά όταν θρύλοι διαγραμμάτων μάχη μεταξύ τους με νεοεισερχόμενους για το κορυφή τη θέση!","partners.apply.select.other":"Άλλα","presence.page.buttons.sourceCode":"Κώδικας Πηγής","presence.sections.description.title":"Περιγραφή","presence.sections.information.title":"Πληροφορίες","presence.sections.information.author":"Συγγραφέας","presence.sections.information.version":"Έκδοση","presence.sections.information.likes":"Μου αρέσει","presence.sections.information.users":"Χρήστες","presence.sections.information.tags":"Ετικέτες","presence.sections.information.supportedurls":"Υποστηριζόμενα URL","presence.sections.information.contributors":"Συνεισφέροντες","store.message.error":"Η επέκταση δεν συνδέθηκε.","store.cards.creator":"Συγγραφέας","store.cards.popular":"Αυτό το Presence είναι πολύ δημοφιλές.","store.cards.partner":"Συνεργαζόμενο Presence","store.cards.extraStepsRequired":"Αυτό το presence απαιτεί πρόσθετα βήματα, παρακαλώ ελέγξτε τη σελίδα της για περισσότερες πληροφορίες.","store.header.search":"Αναζήτηση Presence","store.card.presence.add":"Προσθήκη Presence","store.card.presence.remove":"Αφαίρεση Presence","store.card.presence.included":"Αυτό το Presence ενεργοποιείται αυτόματα κατα την επίσκεψη στην ιστοσελίδα.","store.category.filters.heading":"Φίλτρα","store.category.filters.mostUsed":"Πρώτα τα πιο συχνά χρησιμοποιούμενα","store.category.filters.allowAdult":"Εμφάνιση ακατάλληλου περιεχομένου (NSFW)","store.category.filters.likedOnly":"Μόνο Presences που μου αρέσουν","store.filters.added":"Εμφάνιση πρόσθετων Presences","store.category.heading":"Κατηγορίες","store.category.all":"Όλα","store.category.games":"Παιχνίδια","store.category.music":"Μουσική","store.category.socials":"Κοινωνικά Δίκτυα","store.category.videos":"Βίντεο & Μεταδόσεις","store.category.other":"Άλλα","store.search":"Αναζήτηση","store.search.filters":"Εισαγωγή","store.search.removeFilter":"Κάντε κλικ για να αφαιρέσετε το φίλτρο","user.roles.presenceDeveloper":"Προγραμματιστής των Presence","user.roles.presenceVerifier":"Επαληθευτής των Presence","user.importantPresenceDev.message1":"Σημαντικός Προγραμματιστής των Presence","user.importantPresenceDev.message2":"Έχει δημιουργήσει {0} presences.","user.geniusPresenceDev.message1":"Ιδιοφυές Προγραμματιστής των Presence","user.geniusPresenceDev.message2":"Έχει δημιουργήσει πάνω από {0} Presences!","user.switch.contributed":"Χρήστης [Presences/contributions]","user.presences.created":"Κάντε κλικ εδώ για να εμφανίσετε τα Presences που έχει δημιουργήσει αυτός ο χρήστης.","user.presences.contributed":"Κάντε κλικ εδώ για να εμφανίσετε τα presences στα οποία συνέβαλε αυτός ο χρήστης."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Want new features?","beta.description.1":"**PreMiD Beta** is now available for everyone!","beta.description.2":"What will you get if you sign up?","beta.features.1":"Latest features","beta.features.2":"Access to PreMiD\'s super secret text channels","beta.features.3":"A special role on our Discord server","beta.register.text":"Ready for it? Join {0} other Beta Testers!","beta.register.button":"Sign up now!","thankyou.title":"Cool! You are now a beta user!","thankyou.description":"Our monkeys are working on getting you into our beta program as fast as possible. Thank you for registering!","error.noslots":"Looks like we don\'t have any more beta slots available.","contributors.headings.staff":"Staff","contributors.headings.supporters":"Supporters","contributors.headings.translators":"Translators","contributors.roles.projectLeader":"Project Leader","contributors.roles.staffCoordinator":"Staff Coordinator","contributors.roles.marketingDirector":"Marketing Director","contributors.roles.administrator":"Administrator","contributors.roles.reviewer":"Reviewer","contributors.roles.localizationManager":"Localization Manager","contributors.roles.developer":"Developer","contributors.roles.designer":"Designer","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Support Agent","contributors.roles.representative":"Representative","contributors.roles.proofreader":"Proofreader","contributors.roles.donator":"Donator","contributors.roles.booster":"Booster","contributors.roles.translator":"Translator","contributors.cards.copyUserId":"Click to copy user\'s ID.","contributors.cards.userIdCopied":"User ID copied!","downloads.header.title":"Time to show off.","downloads.header.subtitle":"Use PreMiD now and show off to your friends what you\'re doing, maybe you find someone with the same interests.","downloads.instructions.heading":"Get Started","downloads.instructions.step.1":"Download PreMiD","downloads.instructions.step.2":"Install our application","downloads.instructions.step.3":"Add our Extension to your browser","downloads.instructions.step.4":"Reload this site and check if the extension is connected","downloads.instructions.footer":"Still having issues? {0}","downloads.instructions.footer.link":"We\'re here to help!","downloads.appdownloading.header":"Application","downloads.extdownloading.header":"Extension","downloads.tooltips.os.not.supported.part1":"Warning:","downloads.tooltips.os.not.supported.part2":"{0} There is no installer for this operating system. This means that there\'s no professional support for it.","downloads.mobile.errorMessage":"Please be aware that PreMiD is not supported on mobile phones.","downloads.mobile.showDownloads":"Show Downloads","downloads.mobile.hideDownloads":"Hide Downloads","downloads.warning.differentVersion":"Current version of this platform is {0} (this version is specific to Linux and doesn\'t apply to other platforms).","downloads.warning.differentVersion2":"This version is specific to Linux, and doesn\'t apply to other systems. Application\'s main version is {0}","downloads.error.login":"Please login in order to see these downloads.","downloads.error.noaccess.title":"Uh oh, it looks like you do not have alpha/beta access :(","downloads.error.noaccess.description":"You can join our beta program **here** for free. Hurry up! We only have {0} more slots available","downloads.latest.header":"Early Releases","downloads.warning.title":"Warning","downloads.warning.message.opera":"You have to install **this** extension in order install PreMiD from Chrome Webstore.","downloads.button.skip":"Skip","downloads.button.back":"Back","downloads.button.cancel":"Cancel","downloads.button.okay":"Okay","downloads.button.done":"Done","downloads.button.login":"Login","downloads.button.skipanyway":"Skip Anyway","downloads.adsbox.thankyou.title":"Thank you!","downloads.adsbox.thankyou.message":"We use ads to support our team and maintain our servers to offer you the best user experience!","downloads.adsbox.disableAdblock":"Please disable your adblock","downloads.showbeta.message":"Show early releases","downloads.showbeta.small":"(not needed if you are only here to download the normal application)","downloads.skipanyway.message1":"I don\'t want to support.","downloads.skipanyway.message2":"Are you sure?","downloads.skipanyway.message3":"Really?","downloads.skipanyway.message4":"P-please support :(","downloads.skipanyway.message5":"I need you :<","downloads.skipanyway.message6":"Okay, okay...","store.search.notFound":"We couldn\'t find that Presence...","error.code.404":"Sorry, we couldn\'t find that page.","error.code.4":"You\'re looking for a non-existent or deleted Presence.","error.code.500":"Internal Server error has occurred.","error.page.details":"Details","error.page.button":"Back to homepage","user.notFound.heading":"That user couldn\'t be found. Try to make sure","user.notFound.message1":"that the User\'s ID you\'re looking for is correct.","user.notFound.message2":"that the user has created enough Presences and has the Presence Developer role in our Discord server.","user.notFound.message3":"if others are experiencing the same issue on our Discord server.","user.notFound.message4":"If you believe this was a mistake, please contact us at [our Discord server].","footer.language":"Language","footer.usercount.heading":"Ready to use PreMiD?","footer.usercount.message":"Join {0} users today!","footer.usercount.button":"Install","footer.partners.heading":"Partners","footer.followUs.heading":"Follow Us","footer.developers.heading":"Developers","footer.developers.documentation":"Documentation","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Support us","footer.supportus.donate":"Donate","footer.supportus.contribute":"Contribute","footer.supportus.translate":"Translate","footer.supportus.jobs":"Work with us!","footer.help.heading":"Help","footer.help.troubleshooting":"Troubleshooting","footer.help.getsupport":"Get Help","footer.help.information":"Information","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privacy","footer.help.information.terms":"Terms","footer.more.heading":"More","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} by {1}","footer.copyright.line2":"Website maintained by {0}","footer.partners.more":"Click here to see the rest of our partners & sponsors.","header.language":"English","header.languageNotification.title":"We support your language, wanna switch?","header.languageNotification.text":"Our website has been translated into your language. This may help in case you don\'t speak English that well.","header.languageNotification.btnDecline":"No, thanks","header.languageNotification.btnAccept":"Switch language","header.loader.phrases":"Baking pancakes...;Placing containers...;Parsing your IP address...;UwU;Breaking rules...","header.store":"Store","header.downloads":"Downloads","header.contributors":"Contributors","header.login":"Login","header.lia":"Logged in as","header.rab":"Report a bug","header.staff":"Dashboard","header.logout":"Logout","home.introduction.paragraph":"**PreMiD** is a simple, configurable utility that allows you to show what you\'re doing on the web in your Discord now playing status.","home.introduction.button.features":"Features","home.introduction.button.downloads":"Downloads","home.examples.playingagame":"Playing a game","home.examples.timestamp":"{0} left","home.examples.timestamp2":"{0} elapsed","home.examples.status.playing":"Playing back","home.examples.status.live":"Live","home.examples.status.browsing":"Browsing...","home.features.heading":"You will love these features!","home.features.presencesystem.heading":"Find **your** presence","home.features.presencesystem.description":"We created our extension in a way that lets you add and use Presences created by others and manage them in our extension!","home.features.presencesystem.button":"Visit store","home.features.simpleInterface.heading":"Simple user interface","home.features.simpleInterface.description":"Tired of complicated user interfaces? That\'s why we created and try to keep our UI as simple and useful as possible with important features like:","home.features.simpleInterface.description.1":"App and Extension settings","home.features.simpleInterface.description.2":"Presence management","home.features.simpleInterface.description.3":"Sort by category","home.features.quickSupport.heading":"Quick support","home.features.quickSupport.description":"Something is glitched, sending you tons of errors or simply not working? We will help you get rid of those issues on our Discord server. We also created our very own support system that will make sure your issue gets resolved as soon as possible.","home.features.quickSupport.button":"Join our Discord","home.languageSelector.tippy":"Website language","jobs.modal.title":"Apply for {0}","jobs.modal.step":"Step {0} of 2","jobs.modal.buttons.next":"Next","jobs.modal.buttons.join":"Join","jobs.modal.buttons.cancel":"Cancel","jobs.modal.error":"Please complete all fields","jobs.modal.notice":"PreMiD is an open-source project, meaning we are a non-profit team, every donation or patreon money goes back into the product. By applying for a job position at PreMiD you acknowledge that you are volunteering in the team, you will not be paid for your work.","jobs.guild.required":"Join our Discord","jobs.guild.explanation":"To be able to apply you must have joined our Discord server. Otherwise we won\'t be able to contact you if you end up being selected!","jobs.header.title":"Work for PreMiD","jobs.header.description":"Are you ready to help out the biggest Rich-Presence program?","jobs.openings.title":"Job Openings","jobs.benefits.title":"High-End Benefits","jobs.benefit1.title":"Meet us","jobs.benefit1.description":"Get in touch with the people behind PreMiD.","jobs.benefit2.title":"Sneak Peeks","jobs.benefit2.description":"Have a look into our Development and Marketing.","jobs.benefit3.title":"Honor","jobs.benefit3.description":"Powerful Discord permissions and a colorful role.","jobs.benefit4.title":"Support PreMiD","jobs.benefit4.description":"With your contribution it\'s possible to run this project.","jobs.benefit5.title":"Time-out","jobs.benefit5.description":"Take your time. This is voluntary work.","jobs.benefit6.title":"Early-Access","jobs.benefit6.description":"Test new features before anyone else.","jobs.success.applied":"Thank you for applying!","jobs.errors.alreadyApplied":"You already applied before!","maintenance.big":"Oh noes!","maintenance.heading":"Unfortunately we are experiencing some technical difficulties. We will return shortly. Sorry for the inconvenience.","maintenance.heading2":"Please come back later for more information.","maintenance.message":"Until our special developers fix this, feel free to take a look here!","maintenance.statuspage":"Status Page","maintenance.discordserver":"Discord Server","merch.title":"Welcome to the official **PreMiD** Merchandise store!","merch.swag":"Find your **Swag**","merch.fit":"**Choose your fit**","merch.cart":"Add to cart","merch.help":"Experiencing problems with our store or an order? Contact our {0}customer support{1}","merch.item.added":"{0} added to your cart","merch.error.noitem":"No Item to add to your cart","partners.header.title":"Partners","partners.header.description":"Join the fam and get some partner-only benefits to show off how much swag you have.","partners.slideshow.description":"These already belong to us","partners.why.title":"How about going to heaven instead of hell?","partners.why.benefit1.title":"Your free Presence","partners.why.benefit1.description":"Our team will provide you with a Presence of your service.","partners.why.benefit2.title":"Become verified","partners.why.benefit2.description":"A special role and great honor will be given to you in our Discord server.","partners.why.benefit3.title":"Meta-tag integration","partners.why.benefit3.description":"Automatically uses your Presence when someone is visiting your Website.","partners.why.benefit4.title":"Get immortalized","partners.why.benefit4.description":"A nasty place on our partner page.","partners.why.benefit5.title":"Be famous","partners.why.benefit5.description":"Featured on our social media.","partners.requirements.title":"Requirements","partners.requirements.first.title":"What are we looking for?","partners.requirements.first.description":"We keep an eye out for growing communities and exciting things around the internet. TL;DR you should already be using PreMiD and be ready to spread it to even more internet freaks. Acceptance into the program is extremely qualitative and will vary from one candidate to the next.","partners.requirements.second.title":"Our firewall","partners.requirements.second.description":"We are currently accepting various kinds of effort into our partnership program. Anyone should have the chance to be noticed. Twitch broadcasters should have at least 500 followers and at least 10 concurrent viewers. You must be streaming at least 1 time per week.","partners.apply.button":"Apply now!","partners.apply.disclaimer":"Let\'s go to heaven together!","partners.apply.jobs":"If you are rather interesed in a direct job at PreMiD, then take a look at our **job advertisements**.","partners.sponsors.title":"Sponsors","partners.sponsors.description":"PreMiD wouldn\'t be possible, without these amazing people.","partners.partner.aniFlix":"That\'s how you watch anime.","partners.partner.arenaOfKings":"Arena of Kings is a next-gen fast-paced PvP Arena Game played in the browser.","partners.partner.upBeat":"UpBeat is a non-profit international radio which strives to provide non-stop, quality radio and news entertainment.","partners.partner.simLiveRadio":"SimLiveRadio is the most successful infotainment radio for simulation games in Germany, Austria and Switzerland!","partners.partner.discordTemplates":"Start creating your own community with our awesome templates. Build your own kingdom.","partners.partner.taigaBot":"taiga is a Discord Bot trying to offer all the features you may need at once!","partners.partner.bitRock":"A powerful and easy to use cross platform installer creation tool.","partners.partner.statusPage":"Easily communicate real-time status to your users.","partners.partner.erisly":"A goddess who plays as a fun Discord Bot!","partners.partner.reyfm":"REYFM let\'s you listen to 15+ music streams for free - nonstop. With the best and latest music only for you!","partners.partner.crowdin":"Agile localization for tech companies.","partners.partner.wikijs":"The most powerful and extensible open source Wiki software.","partners.partner.packageCloud":"A unified, developer friendly interface for all of your artifacts.","partners.partner.fastly":"Behind the best of the web.","partners.partner.onlyhit":"OnlyHit is your online music radio station made to play your best hits 24/7 and to make you discover your future hits first.","partners.partner.atomicradio":"Experience the latest and best mixes from the music world non-stop on all our stations, choose which one you like the most and be there live when chart legends battle each other with newcomers for the top spot!","partners.apply.title":"Apply for partner","partners.apply.loggedUser":"Logged in as {0}","partners.apply.notYou":"Not you?","partners.apply.select.default":"Please select one","partners.apply.select.website":"Website","partners.apply.select.other":"Other","partners.apply.form.name":"Name","partners.apply.form.name.placeholder":"Ex: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Ex: https://premid.app","partners.apply.form.description":"Description: (Maximum 150 characters)","partners.apply.form.description.placeholder":"Description for featured","partners.apply.form.imageLink":"Image link: (550x300, PNG only)","partners.apply.form.imageLink.placeholder":"Ex: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Close","partners.apply.form.button.apply":"Apply","partners.apply.success":"Thank you for applying!","partners.apply.error1":"Please complete all the fields.","partners.apply.error2":"Maximum 150 characters description.","partners.apply.error3":"Please add a link (has to start with https:// and end with .png)","partners.apply.error4":"You already applied for partner.","presence.page.buttons.sourceCode":"Source Code","presence.sections.description.title":"Description","presence.sections.changelog.title":"Changelog","presence.sections.information.title":"Information","presence.sections.information.author":"Author","presence.sections.information.version":"Version","presence.sections.information.likes":"Likes","presence.sections.information.users":"Users","presence.sections.information.tags":"Tags","presence.sections.information.supportedurls":"Supported URLs","presence.sections.information.contributors":"Contributors","report.title":"Report A Bug","report.bugcount":"{count}/3 Reports left","report.info":"Reporting bugs are for bugs within the PreMiD site and the PreMiD Discord Server. Bugs for a presence are to be reported to the creator of the presence. Only report bugs in English.","report.overview":"Provide a clear and concise description of what the bug is.","report.os":"Select your Operating System and Version","report.browser":"Select your Browser and Version - You can get the version by visiting about:support on Firefox or chrome://help","report.description":"Provide a link to a live example or an unambiguous set of steps to reproduce this bug.","report.button":"Report","report.toomany":"You have too many active reports. Wait for your submitted reports to be reviewed. Reports are checked on a weekly basis, be patient.","report.toomany.alert":"You have too many active reports.","report.success":"Bug Submitted","report.error":"More information required","report.error.unauth":"Discord account needs to be verified","report.activebugs":"Active Bugs","store.message.error":"Extension not connected.","store.cards.creator":"Author","store.cards.popular":"This Presence is very popular around users.","store.cards.partner":"Partnered Presence","store.cards.extraStepsRequired":"This presence requires additional steps, please check its page for more information.","store.header.search":"Search Presence","store.card.presence.add":"Add Presence","store.card.presence.remove":"Remove Presence","store.card.presence.included":"This Presence is automatically enabled upon visiting its site.","store.category.filters.heading":"Filters","store.category.filters.mostUsed":"Most used first","store.category.filters.allowAdult":"Show NSFW","store.category.filters.likedOnly":"Only liked Presences","store.filters.added":"Show added Presences","store.category.heading":"Categories","store.category.all":"All","store.category.games":"Games","store.category.music":"Music","store.category.socials":"Socials","store.category.videos":"Videos & Streams","store.category.other":"Other","store.search":"Search","store.search.filters":"Enter","store.search.removeFilter":"Click to remove filter","user.roles.presenceDeveloper":"Presence Developer","user.roles.presenceVerifier":"Presence Verifier","user.importantPresenceDev.message1":"Important Presence Developer","user.importantPresenceDev.message2":"Created {0} presences.","user.geniusPresenceDev.message1":"Genius Presence Developer","user.geniusPresenceDev.message2":"Created over 100 Presences!","user.switch.contributed":"User [Presences/contributions]","user.presences.created":"Click here to show the Presences this user has created.","user.presences.contributed":"Click here to show the presences this user has contributed to."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"¿Quieres nuevas funciones?","beta.description.1":"¡**PreMiD Beta** ya está disponible para todos!","beta.description.2":"¿Qué obtendrás si te registras?","beta.features.1":"Las funciones más nuevas","beta.features.2":"Acceso a los canales de texto súper secretos de PreMiD","beta.features.3":"Un rol especial en nuestro servidor de Discord","beta.register.text":"¿Estás preparado? ¡Únete a otros {0} beta testers!","beta.register.button":"¡Regístrate ahora!","thankyou.title":"¡Bien, ahora eres un usuario beta!","thankyou.description":"Nuestros Monos están trabajando para registrarte en nuestra beta lo mas rápido posible. ¡Gracias por registrarte!","error.noslots":"Parece que no tenemos más ranuras beta disponibles.","contributors.headings.staff":"Personal","contributors.headings.supporters":"Donadores","contributors.headings.translators":"Traductores","contributors.roles.projectLeader":"Líder del proyecto","contributors.roles.staffCoordinator":"Coordinador de personal","contributors.roles.marketingDirector":"Director de marketing","contributors.roles.administrator":"Administrador","contributors.roles.reviewer":"Verificador","contributors.roles.localizationManager":"Administrador de idiomas","contributors.roles.developer":"Desarrollador","contributors.roles.designer":"Diseñador","contributors.roles.moderator":"Moderador","contributors.roles.supportAgent":"Agente de Soporte","contributors.roles.representative":"Representante","contributors.roles.proofreader":"Revisor de traducciones","contributors.roles.donator":"Donador","contributors.roles.booster":"Booster","contributors.roles.translator":"Traductor","contributors.cards.copyUserId":"Haz clic para copiar la ID del usuario.","contributors.cards.userIdCopied":"¡ID de usuario copiado!","downloads.header.title":"Hora de presumir.","downloads.header.subtitle":"Utiliza ahora PreMiD y presume a tus amigos de lo que haces, quizá encuentres a alguien con tu mismos intereses.","downloads.instructions.heading":"Empecemos","downloads.instructions.step.1":"Descarga PreMiD","downloads.instructions.step.2":"Instala nuestra aplicación","downloads.instructions.step.3":"Agrega nuestra Extensión a tu navegador","downloads.instructions.step.4":"Recarga esta web y verifica si la extensión está conectada","downloads.instructions.footer":"¿Sigues teniendo problemas? {0}","downloads.instructions.footer.link":"¡Estamos aquí para ayudarte!","downloads.appdownloading.header":"Aplicación","downloads.extdownloading.header":"Extensión","downloads.tooltips.os.not.supported.part1":"Advertencia:","downloads.tooltips.os.not.supported.part2":"{0} No hay instalador para este sistema operativo. Esto quiere decir que no hay soporte profesional para él.","downloads.mobile.errorMessage":"Por favor, ten en cuenta que PreMiD no es compatible con teléfonos móviles.","downloads.mobile.showDownloads":"Mostrar Descargas","downloads.mobile.hideDownloads":"Ocultar Descargas","downloads.warning.differentVersion":"La versión actual de esta plataforma es {0} (esta versión es específica de Linux y no se aplica a otras plataformas).","downloads.warning.differentVersion2":"Esta versión es específica de Linux y no se aplica a otros sistemas. La versión principal de la aplicación es {0}","downloads.error.login":"Por favor, inicia sesión para ver estas descargas.","downloads.error.noaccess.title":"Oh, parece que no tienes acceso a alfa/beta :(","downloads.error.noaccess.description":"Puedes unirte a nuestro programa beta gratis **aquí**. ¡Date prisa! Solo quedan {0} plazas","downloads.latest.header":"Versiones Preliminares","downloads.warning.title":"Advertencia","downloads.warning.message.opera":"Debes instalar **esta** extensión para ser capaz de instalar PreMiD desde la Chrome Webstore.","downloads.button.skip":"Omitir","downloads.button.back":"Atrás","downloads.button.cancel":"Cancelar","downloads.button.okay":"Aceptar","downloads.button.done":"Hecho","downloads.button.login":"Iniciar sesión","downloads.button.skipanyway":"Saltar de todos modos","downloads.adsbox.thankyou.title":"¡Gracias!","downloads.adsbox.thankyou.message":"¡Utilizamos anuncios para apoyar a nuestro equipo y mantener nuestros servidores para ofrecer la mejor experiencia de usuario!","downloads.adsbox.disableAdblock":"Por favor, deshabilita adblock","downloads.showbeta.message":"Mostrar versiones preliminares","downloads.showbeta.small":"(no necesario si únicamente deseas descargar la versión normal)","downloads.skipanyway.message1":"No quiero apoyar.","downloads.skipanyway.message2":"¿Estás seguro?","downloads.skipanyway.message3":"¿En serio?","downloads.skipanyway.message4":"Porfi, porfi, porfiiii ayúdanos :\'(","downloads.skipanyway.message5":"Te necesito :<","downloads.skipanyway.message6":"Vale, vale...","store.search.notFound":"No pudimos encontrar esa presence...","error.code.404":"Lo sentimos, no encontramos la página que buscas.","error.code.4":"Estás buscando una Presence inexistente o eliminada.","error.code.500":"Se ha producido un error interno.","error.page.details":"Detalles","error.page.button":"Volver a la página principal","user.notFound.heading":"No se ha podido encontrar ese usuario. Intenta asegurarte","user.notFound.message1":"el ID del usuario que estás buscando es correcto.","user.notFound.message2":"el usuario ha creado suficientes Presences y tiene el rol \\"Presence Developer\\" en nuestro servidor de Discord.","user.notFound.message3":"compruebe si otros están experimentando el mismo problema en nuestro servidor de Discord.","user.notFound.message4":"Si crees que esto fue un error, por favor contáctanos desde [nuestro servidor de Discord].","footer.language":"Idioma","footer.usercount.heading":"¿Listo para usar PreMiD?","footer.usercount.message":"¡Únete a {0} usuarios hoy!","footer.usercount.button":"Instalar","footer.partners.heading":"Socios","footer.followUs.heading":"Síguenos","footer.developers.heading":"Desarrolladores","footer.developers.documentation":"Documentación","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Apóyanos","footer.supportus.donate":"Donar","footer.supportus.contribute":"Contribuir","footer.supportus.translate":"Traducir","footer.supportus.jobs":"¡Trabaja con nosotros!","footer.help.heading":"Ayuda","footer.help.troubleshooting":"Solución de problemas","footer.help.getsupport":"Obténer ayuda","footer.help.information":"Información","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privacidad","footer.help.information.terms":"Condiciones","footer.more.heading":"Más","footer.more.status":"Estado","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} por {1}","footer.copyright.line2":"Sitio web mantenido por {0}","footer.partners.more":"Haz clic aquí para ver el resto de socios y patrocinadores.","header.language":"Español","header.languageNotification.title":"Soportamos tu idioma, ¿quieres cambiarlo?","header.languageNotification.text":"Nuestro sitio web ha sido traducido a tu idioma. Esto puede ayudarte en caso de que no hables inglés muy bien.","header.languageNotification.btnDecline":"No, gracias","header.languageNotification.btnAccept":"Cambiar idioma\\n","header.loader.phrases":"Cocinando tortitas...;Colocando contenedores...;Analizando tú dirección IP...;UwU;Rompiendo las reglas...","header.store":"Tienda","header.downloads":"Descargas","header.contributors":"Contribuidores","header.login":"Iniciar sesión","header.lia":"Conectado como","header.rab":"Reportar un error","header.staff":"Panel de control","header.logout":"Cerrar sesión","home.introduction.paragraph":"**PreMiD** es una utilidad simple y configurable que te permite mostrar lo que estás haciendo en la web como estado en tu Discord.","home.introduction.button.features":"Características","home.introduction.button.downloads":"Descargas","home.examples.playingagame":"Jugando a un juego","home.examples.timestamp":"{0} restante","home.examples.timestamp2":"{0} transcurrido","home.examples.status.playing":"Reproduciendose","home.examples.status.live":"En vivo","home.examples.status.browsing":"Navegando...","home.features.heading":"¡Te encantarán estas características!","home.features.presencesystem.heading":"Encuentra **tu** presence","home.features.presencesystem.description":"¡Desarrollamos nuestra extensión de forma que te permita añadir y usar Presences creadas por otros usuarios y gestionarlas en nuestra extensión!","home.features.presencesystem.button":"Visitar la tienda","home.features.simpleInterface.heading":"Interfaz de usuario simple","home.features.simpleInterface.description":"¿Cansado de las complicadas interfaces de usuario? Es por eso que hemos creado e intentado de mantener nuestra IU simple y lo más útil posible con características importantes como:","home.features.simpleInterface.description.1":"Ajustes de Aplicación y Extensión","home.features.simpleInterface.description.2":"Gestión de Presences","home.features.simpleInterface.description.3":"Ordenar por categorias","home.features.quickSupport.heading":"Soporte rápido","home.features.quickSupport.description":"¿Algo está mal, mostrándote montón de errores o simplemente no funciona? Te ayudaremos a deshacerte de esos errores en nuestro servidor de Discord donde hemos creado nuestro propio sistema de soporte que asegurará que tu problema sea resuelto lo más pronto posible.","home.features.quickSupport.button":"Únete a nuestro Discord","home.languageSelector.tippy":"Idioma del sitio web","jobs.modal.title":"Aplicar para {0}","jobs.modal.step":"Paso {0} de 2","jobs.modal.buttons.next":"Siguiente","jobs.modal.buttons.join":"Unirse","jobs.modal.buttons.cancel":"Cancelar","jobs.modal.error":"Por favor, completa todos los campos","jobs.modal.notice":"PreMiD es un proyecto de código abierto, lo que significa que somos un equipo sin ánimo de lucro, cada donativo o patreon vuelve al producto. Al solicitar un puesto de trabajo en PreMiD reconoces ser voluntario en el equipo, no se te pagará por tu trabajo.","jobs.guild.required":"Únete a nuestro Discord","jobs.guild.explanation":"Para poder aplicar debes haber entrado a nuestro servidor Discord. De lo contrario, ¡no podremos contactar contigo si terminas siendo seleccionado!","jobs.header.title":"Trabaja para PreMiD","jobs.header.description":"¿Estás listo para ayudarnos con el programa de Rich-Presences más grande?","jobs.openings.title":"Puestos de Trabajo","jobs.benefits.title":"Beneficios de Alta Gama","jobs.benefit1.title":"Conócenos","jobs.benefit1.description":"Ponte en contacto con las personas detrás de PreMiD.","jobs.benefit2.title":"Vistazos","jobs.benefit2.description":"Echa un vistazo a nuestro desarrollo y marketing.","jobs.benefit3.title":"Honor","jobs.benefit3.description":"Potentes permisos de Discord y un colorido rol.","jobs.benefit4.title":"Apoya a PreMiD","jobs.benefit4.description":"Con tu contribución es posible continuar este proyecto.","jobs.benefit5.title":"Tiempo de espera","jobs.benefit5.description":"Tómate tu tiempo. Este es un trabajo voluntario.","jobs.benefit6.title":"Acceso Anticipado","jobs.benefit6.description":"Prueba nuevas funciones antes que nadie.","jobs.success.applied":"¡Gracias por aplicar!","jobs.errors.alreadyApplied":"¡Ya has aplicado antes!","maintenance.big":"¡Oh no!","maintenance.heading":"Desafortunadamente estamos experimentando algunas dificultades técnicas. Regresaremos en breve. Sentimos las molestias.","maintenance.heading2":"Por favor, vuelve más tarde para más información.","maintenance.message":"Hasta que nuestros desarrolladores lo resuelvan, ¡siéntete libre de echar un vistazo aquí!","maintenance.statuspage":"Página de estado","maintenance.discordserver":"Servidor de Discord","merch.title":"¡Bienvenidos a la tienda oficial de **PreMiD**!","merch.swag":"Encuentra tu **Swag**","merch.fit":"**Escoge tu talla**","merch.cart":"Agregar al carrito","merch.help":"¿Experimentando problemas con nuestra tienda o un pedido? Póngase en contacto con nuestro {0}servicio de atención al cliente{1}","merch.item.added":"{0} agregado a tu carrito","merch.error.noitem":"Ningún artículo para agregar a su carrito","partners.header.title":"Socios","partners.header.description":"Únete y obtén algunos beneficios exclusivos de los socios para demostrar cuánto swag tienes.","partners.slideshow.description":"Estos ya están con nosotros","partners.why.title":"¿Qué tal ir al cielo en lugar del infierno?","partners.why.benefit1.title":"Tu presence gratuita","partners.why.benefit1.description":"Nuestro equipo le proporcionará una presence para su servicio web.","partners.why.benefit2.title":"Sé verificado","partners.why.benefit2.description":"Se te otorgará honor y un rol especial en nuestro servidor de Discord.","partners.why.benefit3.title":"Integración de etiquetas meta","partners.why.benefit3.description":"Activa automáticamente tu Presence cuando alguien visita tu Sitio Web.","partners.why.benefit4.title":"Sé inmortalizado","partners.why.benefit4.description":"Un lugar desagradable en nuestra página de socios.","partners.why.benefit5.title":"Sé famoso","partners.why.benefit5.description":"Destacado en nuestras redes sociales.","partners.requirements.title":"Requisitos","partners.requirements.first.title":"¿Qué estamos buscando?","partners.requirements.first.description":"Estamos atentos a las comunidades en crecimiento y las cosas interesantes en Internet. TL;DR deberías estar usando PreMiD y listo para difundirlo a más fanáticos de Internet. La aceptación en el programa es extremadamente cualitativo y variará de un candidato a otro.","partners.requirements.second.title":"Nuestro firewall","partners.requirements.second.description":"Actualmente estamos aceptando varios tipos de asociados. Cualquiera debería tener la oportunidad de serlo. Los streamers de Twitch deben tener al menos 500 seguidores y 10 espectadores concurrentes. Debe transmitir al menos 1 vez por semana.","partners.apply.button":"¡Solicitar ahora!","partners.apply.disclaimer":"¡Vayamos al cielo juntos!","partners.apply.jobs":"Si estas interesado en trabajar en PreMiD, echa un vistazo a nuestro **anuncio de trabajo**.","partners.sponsors.title":"Patrocinadores","partners.sponsors.description":"PreMiD no sería posible sin esta gente asombrosa.","partners.partner.aniFlix":"Así es como ves anime.","partners.partner.arenaOfKings":"Arena of Kings es un Juego Arena PvP de última generación que se juega desde el navegador.","partners.partner.upBeat":"UpBeat es una radio internacional sin ánimo de lucro que se esfuerza por proporcionar una radio sin fin de calidad y noticias.","partners.partner.simLiveRadio":"SimLiveRadio es la radio de información más exitosa para juegos de simulación en Alemania, Austria y Suiza!","partners.partner.discordTemplates":"Empieza a crear tu propia comunidad con nuestras impresionantes plantillas. Construye tu propio reino.","partners.partner.taigaBot":"¡taiga es un Bot de Discord que procura ofrecer todas características que puedas necesitar a la vez!","partners.partner.bitRock":"Una herramienta de creación de instaladores multiplataforma potente y fácil de usar.","partners.partner.statusPage":"Comunica fácilmente tu estado en tiempo real a tus usuarios.","partners.partner.erisly":"¡Una diosa que juega como un Bot de Discord!","partners.partner.reyfm":"REYFM te permite escuchar +15 streams de música gratis y sin parar. ¡Con la mejor y más reciente música solo para ti!","partners.partner.crowdin":"La solución de localización ágil para empresas de tecnología.","partners.partner.wikijs":"El software Wiki más potente y extensible de código abierto.","partners.partner.packageCloud":"Una interfaz unificada y amigable para desarrolladores para todos tus artefactos.","partners.partner.fastly":"Conozca lo mejor de la web.","partners.partner.onlyhit":"OnlyHit es tu emisora de radio de música online hecha para reproducir los mejores éxitos 24/7 y hacerte descubrir tus futuros éxitos primero.","partners.partner.atomicradio":"Experimenta los mejores y mas recientes mezclas de música sin pausa en todas nuestras estaciones, escoge la que más te guste y ¡mantente escuchando en directo mientras los nuevos temas luchan por el top!","partners.apply.title":"Solicitar la colaboración","partners.apply.loggedUser":"Conectado como {0}","partners.apply.notYou":"¿No eres tú?","partners.apply.select.default":"Por favor, selecciona una","partners.apply.select.website":"Sitio Web","partners.apply.select.other":"Otro","partners.apply.form.name":"Nombre","partners.apply.form.name.placeholder":"Ej: PreMiD","partners.apply.form.link":"Enlace","partners.apply.form.link.placeholder":"Ej: https://premid.app","partners.apply.form.description":"Descripción: (máximo 150 caracteres)","partners.apply.form.description.placeholder":"Descripción para destacados","partners.apply.form.imageLink":"Enlace de imagen: (550x300, solo PNG)","partners.apply.form.imageLink.placeholder":"Ej: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Cerrar","partners.apply.form.button.apply":"Aplicar","partners.apply.success":"¡Gracias por aplicar!","partners.apply.error1":"Por favor, completa todos los campos.","partners.apply.error2":"Máximo 150 caracteres descripción.","partners.apply.error3":"Por favor agregue un enlace (tiene que empezar con https:// y terminar con .png)","partners.apply.error4":"Ya has solicitado ser partner.","presence.page.buttons.sourceCode":"Código fuente","presence.sections.description.title":"Descripción","presence.sections.changelog.title":"Historial de cambios","presence.sections.information.title":"Información","presence.sections.information.author":"Autor","presence.sections.information.version":"Versión","presence.sections.information.likes":"Likes","presence.sections.information.users":"Usuarios","presence.sections.information.tags":"Etiquetas","presence.sections.information.supportedurls":"URL soportadas","presence.sections.information.contributors":"Contribuidores","report.title":"Informar de un error","report.bugcount":"{count}/3 Informes restantes","report.info":"Los reportes de errores son para errores dentro del sitio PreMiD y el Servidor PreMiD de Discord. Los bugs para una presence deberán ser reportados al creador de la presence. Sólo reportar errores en inglés.","report.overview":"Proporciona una descripción clara y concisa de lo que es el error.","report.os":"Selecciona tu sistema operativo y versión","report.browser":"Selecciona tu navegador y versión - Puedes saber que versión tienes visitando about:support en Firefox o chrome://help","report.description":"Proporciona un enlace a un ejemplo o un claro conjunto de pasos para reproducir este error.","report.button":"Reportar","report.toomany":"Tiene demasiados reportes activos. Espere a que sus reportes presentados sean revisados. Los reportes se revisan semanalmente, sea paciente.","report.toomany.alert":"Tienes demasiados reportes activos.","report.success":"Error enviado","report.error":"Se requiere más información","report.error.unauth":"La cuenta de Discord necesita estar verificada","report.activebugs":"Errores activos","store.message.error":"La extensión no está conectada.","store.cards.creator":"Autor","store.cards.popular":"Esta presence es muy popular entre los usuarios.","store.cards.partner":"Presence asociada","store.cards.extraStepsRequired":"Esta presence requiere pasos adicionales para funcionar, consulte su página para obtener más información.","store.header.search":"Buscar presence","store.card.presence.add":"Agregar presence","store.card.presence.remove":"Eliminar presence","store.card.presence.included":"Esta presence se activa automáticamente al visitar su sitio.","store.category.filters.heading":"Filtros","store.category.filters.mostUsed":"Más usadas primero","store.category.filters.allowAdult":"Mostrar NSFW","store.category.filters.likedOnly":"Sólo las Presences gustadas","store.filters.added":"Mostrar Presences añadidas","store.category.heading":"Categorías","store.category.all":"Todo","store.category.games":"Juegos","store.category.music":"Música","store.category.socials":"Social","store.category.videos":"Vídeos y Directos","store.category.other":"Otros","store.search":"Buscar","store.search.filters":"Introducir","store.search.removeFilter":"Pulse para eliminar el filtro","user.roles.presenceDeveloper":"Desarrollador de Presences","user.roles.presenceVerifier":"Verificador de Presences","user.importantPresenceDev.message1":"Desarrollador de Presences Importante","user.importantPresenceDev.message2":"Ha creado {0} presences.","user.geniusPresenceDev.message1":"Desarrollador de Presences único","user.geniusPresenceDev.message2":"¡Ha creado más de 100 Presences!","user.switch.contributed":"[Presences/Contribuciones] del usuario","user.presences.created":"Click aquí para mostrar las Presences que ha creado este usuario.","user.presences.contributed":"Haga clic aquí para mostrar las presences a las que ha contribuido este usuario."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"¿Quieres nuevas funciones?","beta.description.1":"¡**PreMiD Beta** ya está disponible para todos!","beta.description.2":"¿Qué obtendrás si te registras?","beta.features.1":"Las funciones más nuevas","beta.features.2":"Acceso a los canales de texto súper secretos de PreMiD","beta.features.3":"Un rol especial en nuestro servidor de Discord","beta.register.text":"¿Estás listo? ¡Únete a otros {0} beta testers!","beta.register.button":"¡Regístrate ahora!","thankyou.title":"¡Genial, ahora eres un usuario beta!","thankyou.description":"Nuestros Monos están trabajando para registrarte en nuestra programa beta lo mas rápido posible. ¡Gracias por registrarte!","error.noslots":"Parece que no tenemos más espacios beta disponibles.","contributors.headings.staff":"Personal","contributors.headings.supporters":"Donadores","contributors.headings.translators":"Traductores","contributors.roles.projectLeader":"Líder del proyecto","contributors.roles.staffCoordinator":"Coordinador del personal","contributors.roles.marketingDirector":"Director de marketing","contributors.roles.administrator":"Administrador","contributors.roles.reviewer":"Verificador","contributors.roles.localizationManager":"Administrador de traducciones","contributors.roles.developer":"Desarrollador","contributors.roles.designer":"Diseñador","contributors.roles.moderator":"Moderador","contributors.roles.supportAgent":"Agente de Soporte","contributors.roles.representative":"Representante","contributors.roles.proofreader":"Revisor de traducciones","contributors.roles.donator":"Donador","contributors.roles.booster":"Booster","contributors.roles.translator":"Traductor","contributors.cards.copyUserId":"Haz clic para copiar la ID del usuario.","contributors.cards.userIdCopied":"¡ID de usuario copiada!","downloads.header.title":"Hora de presumir.","downloads.header.subtitle":"Empieza a usar PreMiD ahora mismo y presúmele a tus amigos que estás haciendo, tal vez encuentres a alguien con tus mismos intereses.","downloads.instructions.heading":"Empecemos","downloads.instructions.step.1":"Descarga PreMiD","downloads.instructions.step.2":"Instala nuestra aplicación","downloads.instructions.step.3":"Añade nuestra extensión a tu navegador","downloads.instructions.step.4":"Recarga el sitio y verifica que la extensión este conectada","downloads.instructions.footer":"¿Sigues teniendo problemas? {0}","downloads.instructions.footer.link":"¡Estamos aquí para ayudarte!","downloads.appdownloading.header":"Aplicación","downloads.extdownloading.header":"Extensión","downloads.tooltips.os.not.supported.part1":"Advertencia:","downloads.tooltips.os.not.supported.part2":"{0} No hay instalador para este sistema operativo, esto quiere decir que no hay soporte profesional para él.","downloads.mobile.errorMessage":"Por favor, ten en cuenta que PreMiD no es compatible con teléfonos móviles.","downloads.mobile.showDownloads":"Mostrar descargas","downloads.mobile.hideDownloads":"Ocultar descargas","downloads.warning.differentVersion":"La versión actual de esta plataforma es {0} (esta versión es específica de Linux y no se aplica en otras plataformas).","downloads.warning.differentVersion2":"Esta versión es específica de Linux y no se aplica a otros sistemas. La versión principal de la aplicación es {0}","downloads.error.login":"Por favor, inicie sesión para ver las descargas.","downloads.error.noaccess.title":"Oh, parece que no tienes acceso a alfa/beta :(","downloads.error.noaccess.description":"Puedes unirte a nuestro programa beta gratis **aquí**. ¡Apúrate! Solo tenemos {0} espacios disponibles","downloads.latest.header":"Últimas versiones","downloads.warning.title":"Advertencia","downloads.warning.message.opera":"Debes instalar **esta** extensión para poder instalar PreMiD desde la Webstore.","downloads.button.skip":"Saltar","downloads.button.back":"Atrás","downloads.button.cancel":"Cancelar","downloads.button.okay":"Aceptar","downloads.button.done":"Listo","downloads.button.login":"Iniciar sesión","downloads.button.skipanyway":"Saltar de todas formas","downloads.adsbox.thankyou.title":"¡Gracias!","downloads.adsbox.thankyou.message":"¡Utilizamos anuncios para apoyar a nuestro equipo y mantener nuestros servidores, para ofrecer la mejor experiencia de usuario!","downloads.adsbox.disableAdblock":"Por favor, deshabilita tu bloqueador de anuncios","downloads.showbeta.message":"Mostrar versiones de acceso temprano","downloads.showbeta.small":"(no necesario si únicamente deseas descargar la versión normal)","downloads.skipanyway.message1":"No quiero apoyar.","downloads.skipanyway.message2":"¿Estás seguro?","downloads.skipanyway.message3":"¿En serio?","downloads.skipanyway.message4":"P-por favor, te lo ruego :(","downloads.skipanyway.message5":"Te necesito :(((","downloads.skipanyway.message6":"Esta bien, esta bien...","store.search.notFound":"No pudimos encontrar esa presence...","error.code.404":"Lo sentimos, no encontramos la página que buscas.","error.code.4":"Estás buscando una presence que no existe o que ha sido eliminada.","error.code.500":"Se ha producido un error interno del servidor.","error.page.details":"Detalles","error.page.button":"Regresar a la página principal","user.notFound.heading":"No se ha podido encontrar a ese usuario. Intenta asegurarte","user.notFound.message1":"de que el ID del usuario que estás buscando es correcto.","user.notFound.message2":"de que el usuario ha creado suficientes presences y tiene el rol \\"Presence Developer\\" en nuestro servidor de Discord.","user.notFound.message3":"si otros están experimentando el mismo problema en nuestro servidor de Discord.","user.notFound.message4":"Si crees que esto fue un error, por favor contáctanos desde [nuestro servidor de Discord].","footer.language":"Idioma","footer.usercount.heading":"¿Listo para usar PreMiD?","footer.usercount.message":"¡Únete a {0} usuarios hoy mismo!","footer.usercount.button":"Instalar","footer.partners.heading":"Socios","footer.followUs.heading":"Síguenos","footer.developers.heading":"Desarrolladores","footer.developers.documentation":"Documentación","footer.developers.richpresence":"Rich presence","footer.supportus.heading":"Apóyanos","footer.supportus.donate":"Donar","footer.supportus.contribute":"Contribuir","footer.supportus.translate":"Traducir","footer.supportus.jobs":"¡Trabaja con nosotros!","footer.help.heading":"Ayuda","footer.help.troubleshooting":"Solución de problemas","footer.help.getsupport":"Obtener ayuda","footer.help.information":"Información","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privacidad","footer.help.information.terms":"Términos","footer.more.heading":"Más","footer.more.status":"Estado","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} por {1}","footer.copyright.line2":"Sitio web mantenido por {0}","footer.partners.more":"Haz clic aquí para ver a los demás socios y patrocinadores.","header.language":"Español Latinoamericano","header.languageNotification.title":"Hablamos tu idioma, ¿quieres cambiarlo?","header.languageNotification.text":"Nuestro sitio web ha sido traducido a tu idioma. Esto puede ayudarte en caso de que no sepas inglés muy bien.","header.languageNotification.btnDecline":"No, gracias","header.languageNotification.btnAccept":"Cambiar idioma\\n","header.loader.phrases":"Haciendo panqueques...;Colocando contenedores...;Analizando tu dirección IP...;UwU;Rompiendo las reglas...","header.store":"Tienda","header.downloads":"Descargas","header.contributors":"Contribuidores","header.login":"Iniciar sesión","header.lia":"Sesión iniciada como","header.rab":"Reportar un error","header.staff":"Panel de control","header.logout":"Cerrar sesión","home.introduction.paragraph":"**PreMiD** es una herramienta simple y configurable que te permite mostrar lo que estás haciendo en la web como tu estado en Discord.","home.introduction.button.features":"Características","home.introduction.button.downloads":"Descargas","home.examples.playingagame":"Jugando","home.examples.timestamp":"Tiempo restante: {0}","home.examples.timestamp2":"Tiempo transcurrido: {0}","home.examples.status.playing":"Reproduciendo","home.examples.status.live":"En vivo","home.examples.status.browsing":"Buscando...","home.features.heading":"¡Te encantarán estas características!","home.features.presencesystem.heading":"Encuentra **tu** presence","home.features.presencesystem.description":"¡Desarrollamos nuestra extensión de forma que te permita añadir y usar presences creadas por otros usuarios y gestionarlas en nuestra extensión!","home.features.presencesystem.button":"Visitar la tienda","home.features.simpleInterface.heading":"Interfaz de usuario simple","home.features.simpleInterface.description":"¿Cansado de las complicadas interfaces de usuario? Es por eso que hemos creado e intentado de mantener nuestra IU simple y lo más útil posible con características importantes como:","home.features.simpleInterface.description.1":"Configuración de aplicación y extensión","home.features.simpleInterface.description.2":"Gestión de presences","home.features.simpleInterface.description.3":"Ordenar por categorías","home.features.quickSupport.heading":"Soporte rápido","home.features.quickSupport.description":"¿Algo está mal, mostrándote un montón de errores o simplemente no funciona? Te ayudaremos a deshacerte de todos esos errores en nuestro servidor de Discord donde hemos creado nuestro propio sistema de soporte que asegurará que tu problema sea resuelto lo más rápido posible.","home.features.quickSupport.button":"Únete a nuestro Discord","home.languageSelector.tippy":"Idioma del sitio web","jobs.modal.title":"Aplicar para {0}","jobs.modal.step":"Paso {0} de 2","jobs.modal.buttons.next":"Siguiente","jobs.modal.buttons.join":"Unirse","jobs.modal.buttons.cancel":"Cancelar","jobs.modal.error":"Por favor, completa todos los espacios","jobs.modal.notice":"PreMiD es un proyecto de código abierto, lo que significa que somos un equipo sin ánimo de lucro, cada donativo o patreon vuelve al producto. Al solicitar un puesto de trabajo en PreMiD reconoces ser voluntario en el equipo, no se te pagará por tu trabajo.","jobs.guild.required":"Únete a nuestro Discord","jobs.guild.explanation":"Para poder aplicar debes haber entrado a nuestro servidor de Discord. De lo contrario, ¡no podremos contactar contigo si terminas siendo seleccionado!","jobs.header.title":"Trabaja para PreMiD","jobs.header.description":"¿Estás listo para ayudarnos con el programa de Rich-presences más grande?","jobs.openings.title":"Puestos de Trabajo","jobs.benefits.title":"Beneficios de Alta Gama","jobs.benefit1.title":"Conócenos","jobs.benefit1.description":"Ponte en contacto con las personas detrás de PreMiD.","jobs.benefit2.title":"Vistazos","jobs.benefit2.description":"Echa un vistazo a nuestro desarrollo y marketing.","jobs.benefit3.title":"Honor","jobs.benefit3.description":"Potentes permisos de Discord y un colorido rol.","jobs.benefit4.title":"Apoya a PreMiD","jobs.benefit4.description":"Con tu contribución es posible continuar con este proyecto.","jobs.benefit5.title":"Tiempo de espera","jobs.benefit5.description":"Tómate tu tiempo. Este es un trabajo voluntario.","jobs.benefit6.title":"Acceso Anticipado","jobs.benefit6.description":"Prueba nuevas funciones antes que nadie.","jobs.success.applied":"¡Gracias por aplicar!","jobs.errors.alreadyApplied":"¡Ya has aplicado antes!","maintenance.big":"¡Oh no!","maintenance.heading":"Desafortunadamente estamos experimentando algunas dificultades técnicas. Regresaremos en breve. Sentimos las molestias.","maintenance.heading2":"Por favor, vuelve más tarde para más información.","maintenance.message":"Hasta que nuestros desarrolladores lo resuelvan, ¡siéntete libre de echar un vistazo aquí!","maintenance.statuspage":"Página de estado","maintenance.discordserver":"Servidor de Discord","merch.title":"¡Bienvenidos a la tienda oficial de **PreMiD**!","merch.swag":"Encuentra tu **Swag**","merch.fit":"**Escoge tu talla**","merch.cart":"Añadir al carrito","merch.help":"¿Experimentando problemas con nuestra tienda o un pedido? Póngase en contacto con nuestro {0}servicio de atención al cliente{1}","merch.item.added":"{0} agregado a tu carrito","merch.error.noitem":"Ningún artículo para agregar a su carrito","partners.header.title":"Socios","partners.header.description":"Únete y obtén algunos beneficios exclusivos de los socios para demostrar cuánto swag tienes.","partners.slideshow.description":"Estos ya están con nosotros","partners.why.title":"¿Qué tal ir al cielo en lugar del infierno?","partners.why.benefit1.title":"Tu presence gratuita","partners.why.benefit1.description":"Nuestro equipo le proporcionará una presence para su servicio web.","partners.why.benefit2.title":"Vuélvete verificado","partners.why.benefit2.description":"Se te otorgará honor y un rol especial en nuestro servidor de Discord.","partners.why.benefit3.title":"Integración de Meta-tag","partners.why.benefit3.description":"Activa automáticamente tu presence cuando alguien visita tu Sitio Web.","partners.why.benefit4.title":"Vuélvete inmortalizado","partners.why.benefit4.description":"Un lugar desagradable en nuestra página de socios.","partners.why.benefit5.title":"Vuélvete famoso","partners.why.benefit5.description":"Destacado en nuestras redes sociales.","partners.requirements.title":"Requisitos","partners.requirements.first.title":"¿Qué estamos buscando?","partners.requirements.first.description":"Estamos atentos a las comunidades en crecimiento y las cosas interesantes en Internet. TL;DR deberías estar usando PreMiD y listo para difundirlo a más fanáticos de Internet. La aceptación en el programa es extremadamente cualitativo y variará de un candidato a otro.","partners.requirements.second.title":"Nuestro firewall","partners.requirements.second.description":"Actualmente estamos aceptando varios tipos de asociados. Cualquiera debería tener la oportunidad de serlo. Los streamers de Twitch deben tener al menos 500 seguidores y 10 espectadores concurrentes. Debe transmitir al menos 1 vez por semana.","partners.apply.button":"¡Solicitar ahora!","partners.apply.disclaimer":"¡Vayamos al cielo juntos!","partners.apply.jobs":"Si estas interesado en trabajar en PreMiD, echa un vistazo a nuestro **anuncio de trabajo**.","partners.sponsors.title":"Patrocinadores","partners.sponsors.description":"PreMiD no sería posible sin esta gente asombrosa.","partners.partner.aniFlix":"Así es como ves anime.","partners.partner.arenaOfKings":"Arena of Kings es un Juego Arena PvP de última generación que se juega desde el navegador.","partners.partner.upBeat":"UpBeat es una radio internacional sin ánimo de lucro que se esfuerza por proporcionar una radio sin fin de calidad y noticias.","partners.partner.simLiveRadio":"SimLiveRadio es la radio de información más exitosa para juegos de simulación en Alemania, Austria y Suiza!","partners.partner.discordTemplates":"Empieza a crear tu propia comunidad con nuestras impresionantes plantillas. Construye tu propio reino.","partners.partner.taigaBot":"¡taiga es un Bot de Discord que procura ofrecer todas características que puedas necesitar a la vez!","partners.partner.bitRock":"Una herramienta de creación de instaladores multiplataforma potente y fácil de usar.","partners.partner.statusPage":"Comunica fácilmente tu estado en tiempo real a tus usuarios.","partners.partner.erisly":"¡Una diosa que juega como un Bot de Discord!","partners.partner.reyfm":"REYFM te permite escuchar +15 streams de música gratis y sin parar. ¡Con la mejor y más reciente música solo para ti!","partners.partner.crowdin":"La solución de localización ágil para empresas de tecnología.","partners.partner.wikijs":"El software Wiki más potente y extensible de código abierto.","partners.partner.packageCloud":"Una interfaz unificada y amigable para desarrolladores para todos tus artefactos.","partners.partner.fastly":"Conozca lo mejor de la web.","partners.partner.onlyhit":"OnlyHit es tu emisora de radio de música online hecha para reproducir los mejores éxitos 24/7 y hacerte descubrir tus futuros éxitos primero.","partners.partner.atomicradio":"¡Experimente la última y mejor mezcla del mundo de la música sin parar en todas nuestras estaciones, elija cuál le gusta más y esté allí en vivo cuando las leyendas de las listas luchen entre sí con los recién llegados por el primer lugar!","partners.apply.title":"Solicitar la colaboración","partners.apply.loggedUser":"Conectado como {0}","partners.apply.notYou":"¿No eres tú?","partners.apply.select.default":"Por favor, selecciona una","partners.apply.select.website":"Sitio Web","partners.apply.select.other":"Otro","partners.apply.form.name":"Nombre","partners.apply.form.name.placeholder":"Ejm: PreMiD","partners.apply.form.link":"Enlace","partners.apply.form.link.placeholder":"Ejm: https://premid.app","partners.apply.form.description":"Descripción: (Máximo de 150 caracteres)","partners.apply.form.description.placeholder":"Descripción para destacados","partners.apply.form.imageLink":"Enlace de imagen: (550x300, solo PNG)","partners.apply.form.imageLink.placeholder":"Ejm: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Cerrar","partners.apply.form.button.apply":"Aplicar","partners.apply.success":"¡Gracias por aplicar!","partners.apply.error1":"Por favor, completa todos los campos.","partners.apply.error2":"Máximo 150 caracteres descripción.","partners.apply.error3":"Por favor agregue un enlace (tiene que empezar con https:// y terminar con .png)","partners.apply.error4":"Ya has solicitado ser socio.","presence.page.buttons.sourceCode":"Código Fuente","presence.sections.description.title":"Descripción","presence.sections.changelog.title":"Historial de cambios","presence.sections.information.title":"Información","presence.sections.information.author":"Autor","presence.sections.information.version":"Versión","presence.sections.information.likes":"Likes","presence.sections.information.users":"Usuarios","presence.sections.information.tags":"Etiquetas","presence.sections.information.supportedurls":"URLs Soportadas","presence.sections.information.contributors":"Contribuidores","report.title":"Reportar un error","report.bugcount":"{count}/3 Reportes restantes","report.info":"Los reportes de errores son para errores dentro del sitio PreMiD y el Servidor PreMiD de Discord. Los errores de una presence deberán ser reportados al creador de la presence. Sólo reportar errores en inglés.","report.overview":"Proporciona una descripción clara y concisa de lo que es el error.","report.os":"Selecciona tu sistema operativo y versión","report.browser":"Selecciona tu navegador y versión - Puedes saber que versión tienes visitando about:support en Firefox o en chrome://help","report.description":"Proporciona un enlace a un ejemplo o un claro conjunto de pasos para reproducir este error.","report.button":"Reportar","report.toomany":"Tiene demasiados reportes activos. Espere a que sus reportes presentados sean revisados. Los reportes se revisan semanalmente, sea paciente.","report.toomany.alert":"Tienes demasiados reportes activos.","report.success":"Error enviado","report.error":"Se necesita más información","report.error.unauth":"La cuenta de Discord necesita estar verificada","report.activebugs":"Errores activos","store.message.error":"La extensión no está conectada.","store.cards.creator":"Autor","store.cards.popular":"Esta presence es muy popular entre los usuarios.","store.cards.partner":"presence asociada","store.cards.extraStepsRequired":"Esta presence requiere pasos adicionales para que funcioné, consulte su página para obtener más información.","store.header.search":"Buscar presence","store.card.presence.add":"Agregar presence","store.card.presence.remove":"Eliminar presence","store.card.presence.included":"Esta presence se activa automáticamente al momento de visitar su sitio.","store.category.filters.heading":"Filtros","store.category.filters.mostUsed":"Más utilizadas primero","store.category.filters.allowAdult":"Mostrar NSFW","store.category.filters.likedOnly":"Sólo las presences que me gustan","store.filters.added":"Mostrar presences añadidas","store.category.heading":"Categorías","store.category.all":"Todo","store.category.games":"Juegos","store.category.music":"Música","store.category.socials":"Sociales","store.category.videos":"Videos y Streams","store.category.other":"Otros","store.search":"Buscar","store.search.filters":"Ingresar","store.search.removeFilter":"Haga clic para eliminar el filtro","user.roles.presenceDeveloper":"Desarrollador de presences","user.roles.presenceVerifier":"Verificador de presences","user.importantPresenceDev.message1":"Desarrollador de presences Importante","user.importantPresenceDev.message2":"Ha creado {0} presences.","user.geniusPresenceDev.message1":"Desarrollador de presences único","user.geniusPresenceDev.message2":"¡Ha creado más de 100 presences!","user.switch.contributed":"[presences/contribuciones] del usuario","user.presences.created":"Clic aquí para mostrar las presences que ha creado este usuario.","user.presences.contributed":"Haga clic aquí para mostrar las presences a las que ha contribuido este usuario."}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Meeskond","contributors.headings.supporters":"Toetajad","contributors.headings.translators":"Tõlkijad","downloads.instructions.heading":"Alusta","downloads.instructions.step.1":"Lae PreMiD","downloads.appdownloading.header":"Rakendus","downloads.extdownloading.header":"Lisa","downloads.tooltips.os.not.supported.part2":"{0} Selle operatsioonisüsteemi jaoks pole installerit. See tähendab seda, et siin pole professionaalset tuge selle jaoks.","downloads.button.done":"Valmis","downloads.adsbox.thankyou.title":"Tänan!","downloads.adsbox.disableAdblock":"Keelake oma reklaami blokeerimine","downloads.skipanyway.message1":"Ma ei taha toetada.","downloads.skipanyway.message2":"Olete kindel?","downloads.skipanyway.message3":"Päriselt?","downloads.skipanyway.message4":"P-palun toeta :(","downloads.skipanyway.message5":"Ma vajan sind :<","downloads.skipanyway.message6":"Ok, ok...","user.notFound.heading":"Seda kasutajat ei leitud. Ole kindel, et","footer.language":"Keel","footer.usercount.message":"Liitu üle {0} kasutajaga täna!","footer.usercount.button":"Lae alla","footer.partners.heading":"Partnerid","footer.developers.heading":"Arendajad","footer.developers.documentation":"Dokumendid","footer.developers.richpresence":"Staatus","footer.supportus.heading":"Toeta meid","footer.supportus.contribute":"Aita kaasa","footer.supportus.translate":"Tõlgi","footer.help.heading":"Abi","footer.help.troubleshooting":"Veaotsimine","footer.help.getsupport":"Saa abi","footer.help.information":"Informatsioon","footer.help.information.privacy":"Privaatsus","footer.help.information.terms":"Tingimused","footer.more.heading":"Veel","footer.more.status":"Staatus","footer.copyright.line1":"{0}, {1}","footer.copyright.line2":"Veebisait tehtud {0} il","header.language":"Eesti keel","header.languageNotification.title":"Me toetame su keelt, soovid vahetada?","header.languageNotification.text":"Meie veebisait on tõlgitud eesti keelde. See võib aidata, kui sa ei räägi/saa aru inglise keelest väga hästi.","header.languageNotification.btnDecline":"Ei, tänan","header.languageNotification.btnAccept":"Vaheta keel","header.loader.phrases":"Küpsetan pannkooke...;Lisan konteinerisse...;Vaatan su IP addressi üle...;UwU;Rikun reegleid...","header.store":"Pood","header.downloads":"Allalaadimised","header.contributors":"Abilised","home.introduction.button.downloads":"Allalaadimised","home.examples.playingagame":"Mängu mängimine","home.examples.timestamp":"{0} jäänud","home.examples.status.playing":"Mängib tagasi","home.examples.status.live":"Otse","home.examples.status.browsing":"Otsib...","home.features.heading":"Sulle meeldivad need võimalused!","home.features.presencesystem.heading":"Otsi **oma** lisa","home.features.simpleInterface.heading":"Lihtne kasutaja sait","home.features.simpleInterface.description.1":"Rakenduse ja lisa sätted","home.features.simpleInterface.description.2":"Staatuse haldamine","home.features.quickSupport.heading":"Kiire tugi","maintenance.message":"Kuni meie spetsiaalsed arendajad fikseerivad seda, vaata aga siia!","maintenance.statuspage":"Staatuse lehekülg","maintenance.discordserver":"Discordi server","partners.header.title":"Partnerid","presence.sections.description.title":"Kirjeldus","presence.sections.changelog.title":"Uue versiooni lisad","presence.sections.information.title":"Informatsioon","presence.sections.information.author":"Autor","presence.sections.information.version":"Versioon","presence.sections.information.tags":"Märkmed","presence.sections.information.supportedurls":"Toetatud saidid","presence.sections.information.contributors":"Abilised","store.cards.creator":"Autor","store.category.all":"Kõik"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"ویژگی های جدید می خواهید?","beta.description.1":"**PreMiD بتا** هم اکنون برای همه دردسترس می باشد!","beta.description.2":"چه چیز هایی را در صورت ثبت نام به دست می آورید?","beta.features.1":"آخرین ویژگی‌ها","beta.features.2":"دسترسی به چنل های نوشتاری مخفی PreMiD","beta.features.3":"نقش ویژه در سرور دیسکوردمان","beta.register.text":"برایش آماده هستید؟ به {0} افراد تست کننده بتا بپیوندید!","beta.register.button":"هم اکنون ثبت نام کنید!","thankyou.title":"ایول! شما الان کاربر بتا هستید!","thankyou.description":"میمون های ما دارن روی ورود شما به برنامه بتا در سریع ترین زمان ممکن کار می کنند. از ثبت نام شما بسیار سپاس گذاریم!","error.noslots":"به نظر میاد که جای خالی دیگری برای بتا باقی نمانده.","contributors.headings.staff":"کارکنان","contributors.headings.supporters":"پشتیبانان","contributors.headings.translators":"مترجمان","contributors.roles.projectLeader":"مدیر پروژه","contributors.roles.marketingDirector":"رئیاست بازاریابی","contributors.roles.administrator":"مدیر","contributors.roles.reviewer":"بازبین","contributors.roles.developer":"توسعه‌دهنده","contributors.roles.designer":"طراح","contributors.roles.moderator":"ناظر","contributors.roles.supportAgent":"نماینده پشتیبانی","contributors.roles.representative":"نماینده","contributors.roles.proofreader":"ویراستار","contributors.roles.donator":"حامیان","contributors.roles.booster":"تقویت کنندگان","contributors.roles.translator":"مترجم","contributors.cards.copyUserId":"کلیک کنید تا ID شخص مورد نظر کپی شود.","contributors.cards.userIdCopied":"ID شخص کپی شد!","downloads.header.title":"وقت نمایشه.","downloads.header.subtitle":"از PreMiD استفاده کنید و به دوستانتان نشان دهید که دارید چه می کنید، شاید شما هم کسی را با علایق مشابه پیدا کردید.","downloads.instructions.heading":"شروع کنید","downloads.instructions.step.1":"PreMiD را دانلود کنید","downloads.instructions.step.2":"برنامه ما را نصب کنید","downloads.instructions.step.3":"افزونه ما را به مرورگر خود اضافه کنید","downloads.instructions.step.4":"این سایت را دوباره باز کنید و چک کنید که افزونه متصل شده باشد","downloads.instructions.footer":"هنوز هم مشکل دارید؟ {0}","downloads.instructions.footer.link":"ما برای کمک اینجاییم!","downloads.appdownloading.header":"برنامه","downloads.extdownloading.header":"افزونه","downloads.tooltips.os.not.supported.part1":"هشدار:","downloads.tooltips.os.not.supported.part2":"{0} هیچ بسته نصبی برا این سیستم عامل وجود ندارد. این بدین معناست که پشتیبانی تخصصی در این موضوع در کار نیست.","downloads.mobile.errorMessage":"لطفا دقت کنید که PreMiD از موبایل ها پشتیبانی نمی کند.","downloads.mobile.showDownloads":"نشان دادن دانلود ها","downloads.mobile.hideDownloads":"مخفی کردن دانلود ها","downloads.warning.differentVersion":"نسخه فعلی برای این پلتفرم {0} می باشد (این نسخه مخصوصا برای لینوکس می باشد، و همچنین تاثیری بر روی دیگر پلتفرم ها ندارد).","downloads.warning.differentVersion2":"این نسخه مختص به لینوکس می باشد و شامل دیگر سیستم عامل ها نمی شود. نسخه اصلی برنامه {0} است","downloads.error.login":"لطفا وارد شوید تا بتوانید این دانلود ها را ببینید.","downloads.error.noaccess.title":"اوه، به نظر میاد که شما دسترسی نسخه بتا/آلفا را ندارید :(","downloads.error.noaccess.description":"شما می توانید به نسخه بتای برنامه بپیوندید از طریق **اینجا** اونم مجانی. بجنبید! ما فقط {0} جای خالی دیگر دردسترس داریم","downloads.latest.header":"دسترسی زودرس","downloads.warning.title":"هشدار","downloads.warning.message.opera":"شما باید **این** افزونه را نصب کنید تا بتوانید PreMiD را از Chrome Webstore نصب کنید.","downloads.button.skip":"رد شدن","downloads.button.back":"بازگشت","downloads.button.cancel":"لغو","downloads.button.okay":"باشه","downloads.button.done":"انجام شد","downloads.button.login":"ورود","downloads.button.skipanyway":"درهرصورت بگذر","downloads.adsbox.thankyou.title":"از شما متشكريم!","downloads.adsbox.thankyou.message":"ما از تبلیغات برای پشتیبانی از تیم و برپادارنده سرورمان استفاده می کنیم تا بهترین تجربه را به شما ارائه بدیم!","downloads.adsbox.disableAdblock":"لطفا مسدود کننده تبلیغ خود را غیر فعال کنید","downloads.showbeta.message":"نسخه های زودهنگام را نمایش بده","downloads.showbeta.small":"(لازم نیست اگر شما فقط برای دانلود نسخه عادی برنامه اینجا آمده اید)","downloads.skipanyway.message1":"من پشتیبانی نمی خوام.","downloads.skipanyway.message2":"آیا مطمئن هستید?","downloads.skipanyway.message3":"واقعا?","downloads.skipanyway.message4":"پشتیبانی ل-لطفا :(","downloads.skipanyway.message5":"من بهتون نیاز دارم :<","downloads.skipanyway.message6":"خیل خب، باشه...","footer.language":"زبان","footer.usercount.heading":"آماده استفاده از PreMiD هستید?","footer.usercount.message":"به {0} کاربر ما بپیوندید!","footer.usercount.button":"نصب","footer.partners.heading":"همکاران","footer.followUs.heading":"ﻣﺎ ﺭﺍ ﺩﻧﺒﺎﻝ ﮐﻨﻴﺪ","footer.developers.heading":"توسعه دهندگان","footer.developers.documentation":"مستندات","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"از ما حمایت کنید","footer.supportus.donate":"حمایت","footer.supportus.contribute":"مشارکت","footer.supportus.translate":"ترجمه","footer.supportus.jobs":"با ما کار کنید!","footer.help.heading":"راهنما","footer.help.troubleshooting":"اشکال‌زدایی","footer.help.getsupport":"کمک گرفتن","footer.help.information":"اطلاعات","footer.help.information.cookies":"کوکی ها","footer.help.information.privacy":"حریم خصوصی","footer.help.information.terms":"شرایط استفاده","footer.more.heading":"بيشتر","footer.more.status":"وضعیت","footer.more.wiki":"ویکی","footer.copyright.line1":"{0} توسط {1}","footer.copyright.line2":"سایت برپا شده توسط {0}","footer.partners.more":"اینجا را کلیک کنید تا همه همکاران و حامیان ما را ببینید.","header.language":"فارسى","header.languageNotification.title":"ما از زبان شما پشتیبانی می کنیم، می خواهید که تغییرش دهید?","header.languageNotification.text":"سایت ما به زبان شما ترجمه شده است. این می تونه کمکتون کنه اگر خوب انگلیسی نمی توانید صحبت کنید.","header.languageNotification.btnDecline":"نه، متشکرم","header.languageNotification.btnAccept":"تغییر زبان","header.loader.phrases":"پختن پنکیک...;چیدن ظرف ها...;گرفتن آدرس اینترنت شما...;UwU;قانون شکنی کردن...","header.store":"فروشگاه","header.downloads":"دانلود ها","header.contributors":"مشارکت‌کنندگان","header.login":"ورود","header.lia":"وارد شده به عنوان","header.rab":"گزارش مشکل","header.staff":"پیشخوان","header.logout":"خروج از حساب","home.introduction.paragraph":"**PreMiD** یک ابزار ساده و قابل تنظیم است که به شما اجازه می دهد تا به دیگران به عنوان وضعیت دیسکورد نشان دهید که در اینترنت چه می کنید.","home.introduction.button.features":"ویژگی‌ها","home.introduction.button.downloads":"دانلود","home.examples.playingagame":"درحال بازی کردن","home.examples.timestamp":"{0} باقی مانده","home.examples.timestamp2":"{0} سپری شده","home.examples.status.playing":"در حال پخش","home.examples.status.live":"زنده","home.examples.status.browsing":"مرور کردن...","home.features.heading":"شما عاشق این ویژگی ها خواهید شد!","home.features.presencesystem.heading":"Presence **خود** را پیدا کنید","home.features.presencesystem.description":"ما افزونه خود را به گونه ای ایجاد کردیم که به شما امکان می دهد Presence های ایجاد شده توسط دیگران را اضافه و استفاده کنید و آنها را افزونه ما مدیریت کنید!","home.features.presencesystem.button":"بازدید از فروشگاه","home.features.simpleInterface.heading":"رابط کاربری ساده","home.features.simpleInterface.description":"از رابط های کاربری پیچیده خسته شده اید؟ این همون دلیلی هست که ما رابط کاربری مان را تا جای ممکن ساده و در عین حال کابردی با ویژگی های مهمی ساخته ایم مثل:","home.features.simpleInterface.description.1":"تنظیمات برنامه و افزونه","home.features.simpleInterface.description.2":"مدیریت Presence","home.features.simpleInterface.description.3":"مرتب بر اساس دسته بندی","home.features.quickSupport.heading":"پشتیبانی سریع","home.features.quickSupport.description":"مشکلی وجود دارد، به شما تعداد زیادی خطا ارسال می کند یا به سادگی کار نمی کند؟ ما به شما در سرور دیسکورد خود کمک خواهیم کرد تا از این مشکلات خلاص شوید ، همچنین سیستم پشتیبانی بسیار مختص خود را ایجاد کرده ایم که اطمینان حاصل می کند که مشکل شما در اسرع وقت برطرف خواهد شد.","home.features.quickSupport.button":"به سرور دیسکورد ما بپیوندید","home.languageSelector.tippy":"زبان وب‌سایت","jobs.modal.buttons.cancel":"لغو","jobs.guild.required":"به سرور دیسکورد ما بپیوندید","maintenance.big":"اوه نه!","maintenance.heading":"متاسفانه ما به مشکلات فنی برخورده‎ایم. به زودی بازخواهیم گشت. بابت آزرده خواهی شما معذرت می خواهیم.","maintenance.heading2":"لطفا برای اطلاعات بیشتر بعداً دوباره بازگردید.","maintenance.message":"تا زمانی که توسعه دهندگان ویژه‌مان این مشکل را رفع کنند، می توانید به اینجا نگاهی بیاندازید!","maintenance.statuspage":"صفحه وضعیت","maintenance.discordserver":"سرور دیسکورد","merch.title":"به فروشگاه کالا های رسمی **PreMiD** خوش آمدید!","merch.swag":"**کوله پشتی** خود را پیدا کنید","merch.fit":"**اندازه خود را پیدا کنید**","merch.cart":"افزودن به سبد خرید","merch.help":"مشکلاتی را با فروشگاه یا سفارشات دارید؟ با {0}خدمات مشتری{1} ما تماس بگیرید","merch.item.added":"{0} به سبد خرید شما افزوده شد","merch.error.noitem":"هیچ چیزی به سبد خرید شما افزوده نشده","partners.header.title":"همکاران","partners.apply.select.other":"ديگر","partners.apply.form.name":"نام","presence.page.buttons.sourceCode":"سورس کد","presence.sections.description.title":"شرح","presence.sections.changelog.title":"گزارش تغییرات","presence.sections.information.title":"اطلاعات","presence.sections.information.author":"سازنده","presence.sections.information.version":"نسخه","presence.sections.information.likes":"پسندیده ها","presence.sections.information.users":"کاربران","presence.sections.information.tags":"تگ‌ها","presence.sections.information.supportedurls":"URL های پشتیبانی","presence.sections.information.contributors":"مشارکت کننده‌ها","store.message.error":"افزونه متصل نشده.","store.cards.creator":"سازنده","store.cards.popular":"این Presence درمیان کاربران خیلی محبوب است.","store.cards.extraStepsRequired":"این Presence چند گام اضافه نیاز دارد، لطفا صفحه آن را برای اطلاعات بیشتر چک کیند.","store.header.search":"جستجوی Presence","store.card.presence.add":"اضافه کردن Presence","store.card.presence.remove":"حذف کردن Presence","store.card.presence.included":"این Presence خودکار با بازدید از این سایت فعال شده.","store.category.filters.heading":"فیلتر ها","store.category.filters.mostUsed":"بیشترین استفاده شده ها از اول","store.category.filters.allowAdult":"نشان دادن محتوای نامشروع","store.category.filters.likedOnly":"فقط Presence های محبوب","store.filters.added":"Presence های اضافه شده را نشان بده","store.category.heading":"دسته‌‎بندی‎ها","store.category.all":"همه","store.category.games":"بازی ها","store.category.music":"موسیقی","store.category.socials":"شبکه های اجتماعی","store.category.videos":"ویدیو ها و پخش های زنده","store.category.other":"ديگر","store.search":"جستجو","store.search.filters":"وارد کردن","store.search.removeFilter":"برای حذف فیلتر کلیک کنید","user.roles.presenceDeveloper":"توسعه دهنده Presence","user.roles.presenceVerifier":"تائید کننده Presence","user.importantPresenceDev.message1":"توسعه دهندگان مهم Presence","user.importantPresenceDev.message2":"{0} Presence ساخته شده.","user.geniusPresenceDev.message1":"توسعه دهندگان نابغه Presence","user.geniusPresenceDev.message2":"بیش از 100 Presence ساخته شده!","user.switch.contributed":"کاربر [Presence ها/مشارکت ها]","user.presences.created":"اینجا را برای نشان دادن Presence هایی که این کاربر ساخته کلیک کنید.","user.presences.contributed":"اینجا را برای نشان دادن Presence هایی که این کاربر مشارکت داشته کلیک کنید."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Haluatko uusia ominaisuuksia?","beta.description.1":"**PreMiD Beta** on nyt saatavilla kaikille!","beta.description.2":"Mitä saat kun rekisteröidyt?","beta.features.1":"Uusimmat ominaisuudet","beta.features.2":"Pääsyn PreMiDin erittäin salaisiin tekstikanaviin","beta.features.3":"Erityisen roolin Discord-palvelimellamme","beta.register.text":"Oletko valmis? Liity {0} muihin Beta testaajiin!","beta.register.button":"Rekisteröidy nyt!","thankyou.title":"Hienoa! Olet nyt beta-käyttäjä!","error.noslots":"Näyttää siltä, että meillä ei ole enää beta-paikkoja saatavilla.","contributors.headings.staff":"Henkilökunta","contributors.headings.supporters":"Tukijat","contributors.headings.translators":"Kääntäjät","contributors.roles.administrator":"Ylläpitäjä","contributors.roles.reviewer":"Tarkistaja","contributors.roles.developer":"Kehittäjä","contributors.roles.designer":"Suunnittelija","contributors.roles.moderator":"Moderaattori","contributors.roles.representative":"Edustaja","contributors.roles.proofreader":"Oikolukija","contributors.roles.donator":"Lahjoittaja","contributors.roles.booster":"Boosteri","contributors.roles.translator":"Kääntäjä","contributors.cards.copyUserId":"Kopioi käyttäjän ID klikkaamalla.","contributors.cards.userIdCopied":"Käyttäjän ID kopioitu!","downloads.header.title":"Aika näyttää.","downloads.instructions.heading":"Aloita tästä","downloads.instructions.step.1":"Lataa PreMiD","downloads.instructions.step.4":"Päivitä tämä sivu ja tarkista onko laajennus yhdistetty","downloads.instructions.footer":"Onko vielä ongelmia? {0}","downloads.instructions.footer.link":"Olemme täällä auttamassa!","downloads.appdownloading.header":"Sovellus","downloads.extdownloading.header":"Selainlaajennus","downloads.tooltips.os.not.supported.part1":"Varoitus:","downloads.tooltips.os.not.supported.part2":"{0} Sovelluksella ei ole asentajaa tälle käyttöjärjestemälle\\nSe tarkoittaa sitä että sille ei ole tukea tällä hetkellä.","downloads.mobile.showDownloads":"Näytä lataukset","downloads.mobile.hideDownloads":"Piilota lataukset","downloads.error.login":"Kirjaudu sisään nähdäksesi nämä lataukset.","downloads.error.noaccess.title":"Voi ei, näyttää siltä että sinulla ei ole alfa/beta-oikeutta :(","downloads.error.noaccess.description":"Voit liittyä beta-ohjelmaamme ilmaiseksi **täältä**. Kiirehdi! Meillä on vain {0} paikkaa saatavilla","downloads.warning.title":"Varoitus","downloads.warning.message.opera":"Sinun täytyy asentaa **tämä** laajennus voidaksesi asentaa PreMiDin Chrome Webstoresta.","downloads.button.skip":"Ohita","downloads.button.back":"Takaisin","downloads.button.cancel":"Peruuta","downloads.button.okay":"Selvä","downloads.button.done":"Valmis","downloads.button.login":"Kirjaudu sisään","downloads.adsbox.thankyou.title":"Kiitos!","downloads.adsbox.thankyou.message":"Käytämme mainoksia tukeaksemme tiimiämme ja ylläpitääksemme palvelimiamme tarjotaksemme sinulle parhaan käyttäjäkokemuksen!","downloads.adsbox.disableAdblock":"Ole hyvä, ja poista mainoksenesto-ohjelmasi käytöstä","downloads.skipanyway.message1":"En halua tukea.","downloads.skipanyway.message2":"Oletko varma?","downloads.skipanyway.message3":"Oikeastiko?","downloads.skipanyway.message4":"O-ole hyvä ja tue :(","downloads.skipanyway.message5":"Tarvitsen sinua :<","downloads.skipanyway.message6":"Okei, okei...","store.search.notFound":"Emme löytäneet tuota presenceä...","error.code.404":"Valitettavasti emme löytäneet tuota sivua.","error.code.500":"Sisäinen palvelinvirhe tapahtui.","error.page.details":"Tiedot","error.page.button":"Takaisin etusivulle","user.notFound.message4":"Jos uskot, että tämä oli virhe, ota meihin yhteyttä [Discord-palvelimellamme].","footer.language":"Kieli","footer.usercount.heading":"Valmis käyttämään PreMiDiä?","footer.usercount.message":"Liity {0} käyttäjän joukkoon tänään!","footer.usercount.button":"Asenna","footer.partners.heading":"Yhteistyökumppanit","footer.followUs.heading":"Seuraa meitä","footer.developers.heading":"Kehittäjät","footer.developers.documentation":"Ohjeet","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Tue meitä","footer.supportus.donate":"Lahjoita","footer.supportus.contribute":"Osallistu","footer.supportus.translate":"Käännä","footer.supportus.jobs":"Työskentele kanssamme!","footer.help.heading":"Apua","footer.help.troubleshooting":"Vianetsintä","footer.help.getsupport":"Saa apua","footer.help.information":"Tietoja","footer.help.information.cookies":"Evästeet","footer.help.information.privacy":"Yksityisyys","footer.help.information.terms":"Ehdot","footer.more.heading":"Lisää","footer.more.status":"Tila","footer.more.wiki":"Wiki","footer.copyright.line1":"{1} {0}","footer.copyright.line2":"Verkkosivua ylläpitävät {0}","footer.partners.more":"Klikkaa tästä nähdäksesi loput yhteistyökumppaneistamme ja sponsoreistamme.","header.language":"Suomi","header.languageNotification.title":"Tuemme kieltäsi, haluatko vaihtaa?","header.languageNotification.text":"Sivustomme on käännetty kielellesi. Siitä saattaa olla sinulle hyötyä, mikäli et puhu englantia tarpeeksi hyvin.","header.languageNotification.btnDecline":"Ei kiitos","header.languageNotification.btnAccept":"Vaihda kieltä","header.loader.phrases":"Leivotaan pannukakkuja...;Järjestellään laatikoita...;\'Jäljitetään IP-osoitetta...;UwU;Rikotaan sääntöjä...","header.store":"Kauppa","header.downloads":"Lataukset","header.contributors":"Osallistujat","header.login":"Kirjaudu sisään","header.lia":"Kirjauduttu nimellä","header.rab":"Ilmoita virheestä","header.logout":"Kirjaudu ulos","home.introduction.button.features":"Ominaisuudet","home.introduction.button.downloads":"Lataukset","home.examples.playingagame":"Pelaa peliä","home.examples.timestamp":"{0} jäljellä","home.examples.timestamp2":"{0} kulunut","home.examples.status.playing":"Toistaa","home.examples.status.live":"Suora","home.examples.status.browsing":"Selaa...","home.features.presencesystem.heading":"Löydä **oma** presencesi","home.features.presencesystem.button":"Vieraile kaupassa","home.features.simpleInterface.heading":"Yksinkertainen käyttöliittymä","home.features.simpleInterface.description.1":"Sovellus- ja laajennusasetukset","home.features.simpleInterface.description.2":"Presencen hallinta","home.features.simpleInterface.description.3":"Lajittele luokan mukaan","home.features.quickSupport.heading":"Nopea tuki","home.features.quickSupport.button":"Liity Discordiimme","home.languageSelector.tippy":"Sivuston kieli","jobs.modal.buttons.next":"Seuraava","jobs.modal.buttons.join":"Liity","jobs.modal.buttons.cancel":"Peruuta","jobs.modal.error":"Täytä kaikki kentät","jobs.guild.required":"Liity Discordiimme","jobs.benefit4.title":"Tue PreMiDiä","jobs.benefit6.description":"Testaa uusia ominaisuuksia ennen muita.","maintenance.big":"Voi ei!","maintenance.heading2":"Palaa myöhemmin takaisin saadaksesi lisätietoja.","maintenance.statuspage":"Tilasivu","maintenance.discordserver":"Discord-palvelin","merch.swag":"Etsi sinun **tyylisi**","merch.fit":"**Valitse kokosi**","merch.cart":"Lisää ostoskoriin","merch.item.added":"{0} lisättiin ostoskoriisi","partners.header.title":"Yhteistyökumppanit","partners.apply.disclaimer":"Mennään taivaaseen yhdessä!","partners.sponsors.title":"Sponsorit","partners.apply.form.button.close":"Sulje","partners.apply.error1":"Ole hyvä, ja täytä kaikki kentät.","presence.page.buttons.sourceCode":"Lähdekoodi","presence.sections.description.title":"Kuvaus","presence.sections.changelog.title":"Muutokset","presence.sections.information.title":"Tiedot","presence.sections.information.author":"Tekijä","presence.sections.information.version":"Versio","presence.sections.information.likes":"Tykkäykset","presence.sections.information.users":"Käyttäjät","presence.sections.information.supportedurls":"Tuetut URL-osoitteet","presence.sections.information.contributors":"Osallistujat","report.title":"Ilmoita virheestä","report.error":"Lisätietoja tarvitaan","report.error.unauth":"Discord-tili on vahvistettava","store.message.error":"Laajennusta ei ole yhdistetty.","store.cards.creator":"Tekijä","store.cards.popular":"Tämä presence on erittäin suosittu käyttäjien keskuudessa.","store.cards.partner":"Yhteistyökumppanin presence","store.cards.extraStepsRequired":"Tämä presence vaatii lisävaiheita, tarkista sen sivulta lisätietoja.","store.header.search":"Etsi presenceä","store.card.presence.add":"Lisää presence","store.card.presence.remove":"Poista presence","store.card.presence.included":"Tämä presence on automaattisesti käytössä vierailtaessa sen sivustolla.","store.category.filters.heading":"Suodattimet","store.category.filters.mostUsed":"Eniten käytetyt ensin","store.category.filters.allowAdult":"Näytä NSFW","store.category.filters.likedOnly":"Vain tykätyt presencet","store.filters.added":"Näytä lisätyt presencet","store.category.heading":"Kategoriat","store.category.all":"Kaikki","store.category.games":"Pelit","store.category.music":"Musiikki","store.category.socials":"Sosiaaliset","store.category.videos":"Videot & Striimit","store.search":"Etsi","store.search.filters":"Lisää","user.importantPresenceDev.message2":"Luonut {0} presenceä.","user.geniusPresenceDev.message2":"Luonut yli 100 presenceä!"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Voulez-vous de nouvelles fonctionnalités ?","beta.description.1":"La **bêta PreMiD** est maintenant disponible pour tout le monde !","beta.description.2":"Qu\'obtiendrez-vous si vous vous inscrivez ?","beta.features.1":"Dernières fonctionnalités","beta.features.2":"Accès aux salons textuels super secrets de PreMiD","beta.features.3":"Un rôle spécial sur notre serveur Discord","beta.register.text":"Prêt pour cela ? Rejoignez {0} autres bêta-testeurs !","beta.register.button":"Inscrivez-vous dès maintenant !","thankyou.title":"Cool! Vous êtes désormais un utilisateur bêta!","thankyou.description":"Nos singes travaillent à vous faire entrer dans notre programme bêta aussi vite que possible. Merci de vous être inscrit !","error.noslots":"On dirait que nous n\'avons plus de places disponibles pour la bêta.","contributors.headings.staff":"Équipe","contributors.headings.supporters":"Supporteurs","contributors.headings.translators":"Traducteurs","contributors.roles.projectLeader":"Chef de projet","contributors.roles.staffCoordinator":"Responsable du personnel","contributors.roles.marketingDirector":"Directeur commercial","contributors.roles.administrator":"Administrateur","contributors.roles.reviewer":"Examinateur","contributors.roles.localizationManager":"Responsable des localisations","contributors.roles.developer":"Développeur","contributors.roles.designer":"Concepteur","contributors.roles.moderator":"Modérateur","contributors.roles.supportAgent":"Agent d\'Assistance","contributors.roles.representative":"Représentant","contributors.roles.proofreader":"Réviseur","contributors.roles.donator":"Donateur","contributors.roles.booster":"Booster","contributors.roles.translator":"Traducteur","contributors.cards.copyUserId":"Cliquer pour copier l’identifiant de l’utilisateur.","contributors.cards.userIdCopied":"ID de l\'utilisateur copié !","downloads.header.title":"C\'est l\'heure du show.","downloads.header.subtitle":"Commencez à utiliser PreMiD dès maintenant et montrez à vos amis ce que vous êtes en train de faire, peut-être vous trouverez quelqu\'un avec les mêmes centres d\'intérêts.","downloads.instructions.heading":"Commencer","downloads.instructions.step.1":"Télécharger PreMiD","downloads.instructions.step.2":"Installer l\'application","downloads.instructions.step.3":"Ajouter l\'extension à votre navigateur","downloads.instructions.step.4":"Rechargez le site et vérifiez que l\'extension est connectée","downloads.instructions.footer":"Vous avez encore des problèmes ? {0}","downloads.instructions.footer.link":"Nous sommes là pour vous aider !","downloads.appdownloading.header":"Application","downloads.extdownloading.header":"Extension","downloads.tooltips.os.not.supported.part1":"Avertissement :","downloads.tooltips.os.not.supported.part2":"{0} Il n\'y a pas d\'installateur pour ce système d\'exploitation. Cela signifie qu\'il n\'y a pas de support professionnel pour lui.","downloads.mobile.errorMessage":"Veuillez noter que PreMiD n\'est pas pris en charge sur mobile.","downloads.mobile.showDownloads":"Voir les téléchargements","downloads.mobile.hideDownloads":"Cacher les téléchargements","downloads.warning.differentVersion":"La version actuel pour cette platform est {0} (cette version est spécifique à Linux et ne s\'applique pas aux autres plateformes).","downloads.warning.differentVersion2":"Cette version est spécifique à Linux et ne s\'applique pas aux autres systèmes. La version principale de l\'application est {0}","downloads.error.login":"Veuillez vous connecter afin de voir les téléchargements.","downloads.error.noaccess.title":"Oh oh, il semble que vous n\'avez pas accès à la alpha/bêta :(","downloads.error.noaccess.description":"Vous pouvez rejoindre notre programme bêta gratuitement **ici**. Dépêchez-vous ! Nous n\'avons plus que {0} places disponibles","downloads.latest.header":"Versions anticipées","downloads.warning.title":"Attention","downloads.warning.message.opera":"Vous devez installer **cette** extension pour installer PreMiD depuis Chrome Webstore.","downloads.button.skip":"Suivant","downloads.button.back":"Précédent","downloads.button.cancel":"Annuler","downloads.button.okay":"D\'accord","downloads.button.done":"Terminé","downloads.button.login":"Se connecter","downloads.button.skipanyway":"Passer quand même","downloads.adsbox.thankyou.title":"Merci!","downloads.adsbox.thankyou.message":"Nous utilisons des publicités pour soutenir notre équipe et maintenir nos serveurs pour vous offrir la meilleure expérience utilisateur !","downloads.adsbox.disableAdblock":"Veuillez désactiver votre bloqueur de publicités","downloads.showbeta.message":"Afficher les versions bêta","downloads.showbeta.small":"(pas nécessaire si vous êtes seulement ici pour télécharger l\'application normale)","downloads.skipanyway.message1":"Je ne veux pas soutenir.","downloads.skipanyway.message2":"Êtes-vous sûr(e) ?","downloads.skipanyway.message3":"Etes-vous sûr de vouloir continuer ?","downloads.skipanyway.message4":"S-support s\'il vous plaît :(","downloads.skipanyway.message5":"J\'ai besoin de vous :<","downloads.skipanyway.message6":"D\'accord, d\'accord ...","store.search.notFound":"Nous n\'avons pas pu trouver cette Presence...","error.code.404":"Désolé, cette page est introuvable.","error.code.4":"La Presence que vous cherchez n\'existe pas ou a été supprimée.","error.code.500":"Une erreur interne s\'est produite.","error.page.details":"Détails du produit","error.page.button":"Retour à la page d’accueil","user.notFound.heading":"Cet utilisateur n\'a pas pu être trouvé. Essayez de vérifier","user.notFound.message1":"que l\'identifiant de l\'utilisateur que vous recherchez est correct.","user.notFound.message2":"que l\'utilisateur a créé suffisamment de Presences et a le rôle « Presence Developer » sur notre serveur Discord.","user.notFound.message3":"si d\'autres personnes rencontrent le même problème sur notre serveur Discord.","user.notFound.message4":"Si vous pensez que c\'est une erreur, veuillez nous contacter sur [notre serveur Discord].","footer.language":"Langue","footer.usercount.heading":"Prêt à utiliser PreMiD ?","footer.usercount.message":"Rejoignez les {0} utilisateurs dès aujourd\'hui!","footer.usercount.button":"Installer","footer.partners.heading":"Partenaires","footer.followUs.heading":"Suivez-nous","footer.developers.heading":"Développeurs","footer.developers.documentation":"Documentation","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Aidez-nous","footer.supportus.donate":"Faire un don","footer.supportus.contribute":"Contribuer","footer.supportus.translate":"Traduire","footer.supportus.jobs":"Travaillez avec nous !","footer.help.heading":"Aide","footer.help.troubleshooting":"Dépannage","footer.help.getsupport":"Avoir de l\'aide","footer.help.information":"Information","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Confidentialité","footer.help.information.terms":"Termes","footer.more.heading":"Plus","footer.more.status":"État","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} par {1}","footer.copyright.line2":"Site web entretenu par {0}","footer.partners.more":"Cliquez ici pour voir le reste de nos partenaires & sponsors.","header.language":"Français","header.languageNotification.title":"Nous supportons votre langue, voulez-vous la changer?","header.languageNotification.text":"Notre site web a été traduit dans votre langue. Ça pourrait vous aider au cas où vous ne parlez pas très bien l\'Anglais.","header.languageNotification.btnDecline":"Non, merci","header.languageNotification.btnAccept":"Changer de langue","header.loader.phrases":"En train de faire des pancakes...;En train de placer des conteneurs...;En train d\'analyser votre adresse IP...;UwU;En train d\'enfreindre des règles...","header.store":"Boutique","header.downloads":"Téléchargements","header.contributors":"Contributeurs","header.login":"Connexion","header.lia":"Connecté(e) en tant que","header.rab":"Signaler un bug","header.staff":"Tableau de bord","header.logout":"Se déconnecter","home.introduction.paragraph":"**PreMiD** est un utilitaire simple et configurable qui vous permet de montrer ce que vous faites sur le web dans votre statut Discord.","home.introduction.button.features":"Fonctionnalités","home.introduction.button.downloads":"Téléchargements","home.examples.playingagame":"Joue à","home.examples.timestamp":"{0} restantes","home.examples.timestamp2":"{0} écoulées","home.examples.status.playing":"Repasser","home.examples.status.live":"Live","home.examples.status.browsing":"Navigue...","home.features.heading":"Vous aimerez ces fonctionnalités!","home.features.presencesystem.heading":"Trouvez **votre** présence","home.features.presencesystem.description":"Nous avons créé notre extension de manière à vous laisser ajouter, utiliser des Presences créées par d\'autres utilisateurs et les gérer dans notre extension !","home.features.presencesystem.button":"Visiter la boutique","home.features.simpleInterface.heading":"Interface utilisateur simple","home.features.simpleInterface.description":"Fatigué des interfaces utilisateur compliquées ? C\'est pourquoi nous avons créé et essayons de garder notre interface utilisateur aussi simple et utile que possible avec des fonctionnalités importantes comme :","home.features.simpleInterface.description.1":"Paramètres de l’application et de l’extension","home.features.simpleInterface.description.2":"Gestion de présences","home.features.simpleInterface.description.3":"Tri par catégories","home.features.quickSupport.heading":"Support rapide","home.features.quickSupport.description":"Vous rencontrez un problème, vous avez des tonnes d\'erreurs ou tout simplement ça ne fonctionne pas ? Nous vous aiderons à vous débarrasser de ces problèmes sur notre serveur Discord, nous avons également créé notre propre système de support qui permettra de résoudre votre problème dès que possible.","home.features.quickSupport.button":"Rejoignez notre Discord","home.languageSelector.tippy":"Langue du site web","jobs.modal.title":"Postuler pour {0}","jobs.modal.step":"Étape {0} sur 2","jobs.modal.buttons.next":"Suivant","jobs.modal.buttons.join":"Rejoindre","jobs.modal.buttons.cancel":"Retour","jobs.modal.error":"Veuillez remplir tous les champs","jobs.modal.notice":"PreMiD est un projet open-source, ce qui signifie que nous sommes une équipe à but non lucratif, chaque don ou patreon est retourné dans le produit. En posant votre candidature à un poste chez PreMiD, vous reconnaissez que vous êtes bénévole au sein de l\'équipe, vous ne serez pas payé pour votre travail.","jobs.guild.required":"Rejoignez notre Discord","jobs.guild.explanation":"Pour pouvoir postuler, vous devez avoir rejoint notre serveur Discord. Sinon, nous ne serons pas en mesure de vous contacter si vous finissez par être sélectionné !","jobs.header.title":"Travailler pour PreMiD","jobs.header.description":"Êtes-vous prêts à aider le plus gros programme de Rich-Presence ?","jobs.openings.title":"Offres d\'emploi","jobs.benefits.title":"Avantages de haut niveau","jobs.benefit1.title":"Rencontrez-nous","jobs.benefit1.description":"Prenez contact avec les personnes qui sont derrière PreMiD.","jobs.benefit2.title":"Aperçu","jobs.benefit2.description":"Jetez un coup d\'oeil sur notre développement et notre marketing.","jobs.benefit3.title":"Honneur","jobs.benefit3.description":"Autorisations Discord puissantes et un rôle coloré.","jobs.benefit4.title":"Soutenir PreMiD","jobs.benefit4.description":"Avec votre contribution, il est possible de réaliser ce projet.","jobs.benefit5.title":"Délai d\'attente","jobs.benefit5.description":"Prenez votre temps, c\'est du bénévolat.","jobs.benefit6.title":"Accès anticipé","jobs.benefit6.description":"Testez les nouvelles fonctionnalités avant tout le monde.","jobs.success.applied":"Merci d\'avoir postulé !","jobs.errors.alreadyApplied":"Vous avez déjà postulé !","maintenance.big":"Oh non!","maintenance.heading":"Malheureusement, nous rencontrons des difficultés techniques. Nous reviendrons bientôt. Désolé pour le désagrément.","maintenance.heading2":"Veuillez revenir plus tard pour plus d\'informations.","maintenance.message":"Tant que nos développeurs spéciaux ne le corrigent pas, n\'hésitez pas à jeter un coup d’œil ici!","maintenance.statuspage":"État des services","maintenance.discordserver":"Serveur Discord","merch.title":"Bienvenue dans la boutique officielle de **PreMiD** !","merch.swag":"Trouvez votre **Style**","merch.fit":"**Choisissez votre ajustement**","merch.cart":"Ajouter au panier","merch.help":"Vous rencontrez des problèmes avec notre boutique ou une commande ? Contactez notre {0}support client{1}","merch.item.added":"{0} ajouté à votre panier","merch.error.noitem":"Aucun article à ajouter à votre panier","partners.header.title":"Partenaires","partners.header.description":"Rejoignez la famille et bénéficiez d\'avantages réservés aux partenaires pour montrer combien vous avez du swag.","partners.slideshow.description":"Ceux-ci nous appartiennent déjà","partners.why.title":"Que diriez-vous d\'aller au paradis au lieu de l\'enfer ?","partners.why.benefit1.title":"Votre Presence gratuite","partners.why.benefit1.description":"Notre équipe vous fournira une Presence pour votre site Web.","partners.why.benefit2.title":"Devenez vérifié","partners.why.benefit2.description":"Un rôle spécial et un grand honneur vous seront donnés sur notre serveur Discord.","partners.why.benefit3.title":"Intégration des méta-tags","partners.why.benefit3.description":"Utilise automatiquement votre Presence lorsque quelqu\'un visite votre site Web.","partners.why.benefit4.title":"Soyez immortalisé","partners.why.benefit4.description":"Un mauvais endroit sur notre page partenaire.","partners.why.benefit5.title":"Soyez célèbre","partners.why.benefit5.description":"Présenté sur nos réseaux sociaux.","partners.requirements.title":"Prérequis","partners.requirements.first.title":"Qui recherchons-nous ?","partners.requirements.first.description":"Nous veillons à ce que les communautés grandissantes et les choses passionnantes sur Internet. TLDR vous devriez déjà utiliser PreMiD et être prêt à le diffuser à encore plus de fans d\'Internet. L\'acceptation du programme est extrêmement qualitative et variera d\'un candidat à l\'autre.","partners.requirements.second.title":"Notre pare-feu","partners.requirements.second.description":"Nous acceptons actuellement divers types d\'efforts dans notre programme de partenariat. N\'importe qui devrait avoir la possibilité d\'être remarqué. Les diffuseurs Twitch devraient avoir au moins 500 abonnés et au moins 10 téléspectateurs simultanés. Vous devez diffuser au moins une fois par semaine.","partners.apply.button":"Postulez dès maintenant !","partners.apply.disclaimer":"Allons au paradis ensemble!","partners.apply.jobs":"Si vous êtes plutôt intéressé par un emploi direct chez PreMiD, jetez un œil à nos **offres d\'emploi**.","partners.sponsors.title":"Sponsors","partners.sponsors.description":"PreMiD ne serait pas possible sans ces gens incroyables.","partners.partner.aniFlix":"Voici comment vous regardez l\'anime.","partners.partner.arenaOfKings":"Arena of Kings est un jeu d\'arène JcJ a évolution rapide de nouvelle génération, jouable dans le navigateur.","partners.partner.upBeat":"UpBeat est une radio internationale à but non lucratif qui s\'efforce de fournir des services de radio et de divertissement de qualité sans escale.","partners.partner.simLiveRadio":"SimLiveRadio est la radio d\'infotainment la plus réussie pour les jeux de simulation en Allemagne, en Autriche et en Suisse!","partners.partner.discordTemplates":"Commencez à créer votre propre communauté avec nos superbes modèles. Construisez votre propre royaume.","partners.partner.taigaBot":"taiga est un bot Discord qui essaie d\'offrir toutes les fonctionnalités dont vous pourriez avoir besoin en même temps !","partners.partner.bitRock":"Un outil puissant et facile à utiliser de l\'installateur multi-plateforme.","partners.partner.statusPage":"Communiquez facilement le statut en temps réel à vos utilisateurs.","partners.partner.erisly":"Une déesse qui joue le rôle d\'un drôle de bot Discord !","partners.partner.reyfm":"REYFM vous permet d\'écouter plus de 15 flux de musique gratuitement - sans interruption. Avec la meilleure et la dernière musique rien que pour vous !","partners.partner.crowdin":"Localisation agile pour les entreprises technologiques.","partners.partner.wikijs":"Le logiciel Wiki open source le plus puissant et extensible.","partners.partner.packageCloud":"Une interface unifiée et conviviale pour les développeurs pour tous vos artefacts.","partners.partner.fastly":"Derrière le meilleur du web.","partners.partner.onlyhit":"OnlyHit est votre station de radio de musique en ligne conçue pour jouer vos meilleurs résultats 24/7 et pour vous faire découvrir vos futurs tubes en premier.","partners.partner.atomicradio":"Découvrez le dernier et meilleur mix du monde de la musique en non-stop sur toutes nos stations, choisissez celle que vous préférez et assistez en direct au concours entre les légendes du classement et les nouvelles recrues qui visent la première place !","partners.apply.title":"Faites une demande de partenariat","partners.apply.loggedUser":"Connecté(e) en tant que {0}","partners.apply.notYou":"Ce n\'est pas vous ?","partners.apply.select.default":"Veuillez en choisir un","partners.apply.select.website":"Site Internet","partners.apply.select.other":"Autre","partners.apply.form.name":"Nom","partners.apply.form.name.placeholder":"Exemple : PreMiD","partners.apply.form.link":"Lien","partners.apply.form.link.placeholder":"Exemple : https://premid.app","partners.apply.form.description":"Description : (150 caractères maximum)","partners.apply.form.description.placeholder":"Description pour les vedettes","partners.apply.form.imageLink":"Lien de l\'image: (550x300, PNG uniquement)","partners.apply.form.imageLink.placeholder":"Exemple : https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Fermer","partners.apply.form.button.apply":"Appliquer","partners.apply.success":"Merci d\'avoir postulé !","partners.apply.error1":"Veuillez remplir tous les champs.","partners.apply.error2":"Description de 150 caractères maximum.","partners.apply.error3":"Veuillez ajouter un lien (doit commencer par https:// et finir par .png)","partners.apply.error4":"Vous avez déjà postulé pour un partenaire.","presence.page.buttons.sourceCode":"Code source","presence.sections.description.title":"Description","presence.sections.changelog.title":"Journal de modifications","presence.sections.information.title":"Information","presence.sections.information.author":"Auteur","presence.sections.information.version":"Version","presence.sections.information.likes":"J\'aimes","presence.sections.information.users":"Utilisateurs","presence.sections.information.tags":"Tags","presence.sections.information.supportedurls":"URL supportées","presence.sections.information.contributors":"Contributeurs","report.title":"Signaler un bug","report.bugcount":"{count}/3 signalements restants","report.info":"Les rapports de bugs concernent les bugs du site PreMiD et du serveur PreMiD Discord. Les bugs de présence doivent être signalés au créateur de la présence. Ne signalez les bugs qu\'en anglais.","report.overview":"Fournissez une description claire et concise du bug.","report.os":"Sélectionnez votre système d\'exploitation et la version","report.browser":"Sélectionnez votre navigateur et votre version - Vous pouvez obtenir la version en visitant about:support sur Firefox ou chrome://help","report.description":"Fournissez un lien vers un exemple en direct ou un ensemble d\'étapes sans ambiguïté pour reproduire ce bug.","report.button":"Signaler","report.toomany":"Vous avez trop de rapports actifs. Attendez que vos rapports soumis soient examinés. Les rapports sont vérifiés chaque semaine, soyez patient.","report.toomany.alert":"Vous avez trop de rapports actifs.","report.success":"Bug Envoyé","report.error":"Informations complémentaires requises","report.error.unauth":"Votre compte Discord doit être vérifié","report.activebugs":"Bugs Actifs","store.message.error":"L\'extension n\'est pas connectée.","store.cards.creator":"Auteur","store.cards.popular":"Cette Presence est très populaire auprès des utilisateurs.","store.cards.partner":"Presence Partenaire","store.cards.extraStepsRequired":"Cette Presence nécessite des étapes supplémentaires pour fonctionner, veuillez consulter sa page pour plus d\'informations.","store.header.search":"Rechercher une Presence","store.card.presence.add":"Ajouter la Presence","store.card.presence.remove":"Supprimer la Presence","store.card.presence.included":"Cette Presence est automatiquement activée lors de la visite de son site.","store.category.filters.heading":"Filtres","store.category.filters.mostUsed":"Les plus utilisées","store.category.filters.allowAdult":"Afficher le NSFW","store.category.filters.likedOnly":"Seulement les Presences aimées","store.filters.added":"Montrer les Presences ajoutées","store.category.heading":"Catégories","store.category.all":"Tout","store.category.games":"Jeux","store.category.music":"Musique","store.category.socials":"Réseaux sociaux","store.category.videos":"Vidéos et Streams","store.category.other":"Autres","store.search":"Rechercher","store.search.filters":"Entrée","store.search.removeFilter":"Cliquer pour enlever le filtre","user.roles.presenceDeveloper":"Développeur de Présences","user.roles.presenceVerifier":"Vérificateur de Présences","user.importantPresenceDev.message1":"Développeur important de Présences","user.importantPresenceDev.message2":"{0} présences créées.","user.geniusPresenceDev.message1":"Développeur Genius Presence","user.geniusPresenceDev.message2":"Crée plus de 100 présences !","user.switch.contributed":"Utilisateur [Presences/contributions]","user.presences.created":"Cliquez ici pour afficher les Presences créées par cet utilisateur.","user.presences.contributed":"Cliquez ici pour afficher les présences auxquelles cet utilisateur a contribué."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Ag iarraidh gnéithe nua?","beta.description.1":"Tá ** Béite PreMiD ** ar fáil anois do gach duine!","beta.description.2":"Cad a gheobhaidh tú má chláraíonn tú?","beta.features.1":"Gnéithe is déanaí","beta.features.2":"Rochtain ar bhealaí téacs rúnda Super PreMiD","beta.features.3":"Ról speisialta ar ár bhfreastalaí Discord","beta.register.text":"Réidh dó? Bí le {0} Testers Béite eile!","beta.register.button":"Cláraigh anois!","thankyou.title":"Cool! Is úsáideoir béite tú anois!","thankyou.description":"Tá ár mhoncaí ag obair chun tú a chur isteach inár gclár béite chomh tapa agus is féidir. Go raibh maith agat as clárú!","error.noslots":"Is cosúil nach bhfuil níos mó sliotán béite ar fáil againn.","contributors.headings.staff":"Foireann","contributors.headings.supporters":"Lucht tacaíochta","contributors.headings.translators":"Aistritheoirí","contributors.roles.projectLeader":"Ceannaire Tionscadail","contributors.roles.staffCoordinator":"Comhordaitheoir Foirne","contributors.roles.marketingDirector":"Stiúrthóir Margaíochta","contributors.roles.administrator":"Riarthóir","contributors.roles.reviewer":"Athbhreithneoir","contributors.roles.localizationManager":"Bainisteoir Logánú","contributors.roles.developer":"Forbróir","contributors.roles.designer":"Dearthóir","contributors.roles.moderator":"Modhnóir","contributors.roles.supportAgent":"Gníomhaire Tacaíochta","contributors.roles.representative":"Ionadaí","contributors.roles.proofreader":"Léitheoir profaí","contributors.roles.donator":"Deontóir","contributors.roles.booster":"Teanndáileog","contributors.roles.translator":"Aistritheoir","contributors.cards.copyUserId":"Cliceáil chun ID an úsáideora a chóipeáil.","contributors.cards.userIdCopied":"Cóipeáladh ID an Úsáideora!","downloads.header.title":"Am le thaispeáint as.","downloads.header.subtitle":"Úsáid PreMiD anois agus taispeáin do do chairde an méid atá á dhéanamh agat, b’fhéidir go bhfaighidh tú duine leis na leasanna céanna.","downloads.instructions.heading":"Tosaigh Anois","downloads.instructions.step.1":"Íoslódáil PreMiD","downloads.instructions.step.2":"Suiteáil ár bhfeidhmchlár","downloads.instructions.step.3":"Cuir ár Síneadh le do bhrabhsálaí","downloads.instructions.step.4":"Athlódáil an suíomh seo agus seiceáil an bhfuil an síneadh ceangailte","downloads.instructions.footer":"Fós ag saincheisteanna? {0}","downloads.instructions.footer.link":"Táimid anseo chun cabhrú!","downloads.appdownloading.header":"Feidhmchlá","downloads.extdownloading.header":"Síneadh","downloads.tooltips.os.not.supported.part1":"Rabhadh:","downloads.tooltips.os.not.supported.part2":"{0} Níl aon suiteálaí ann don chóras oibriúcháin seo. Ciallaíonn sé seo nach bhfuil aon tacaíocht ghairmiúil ann dó.","downloads.mobile.errorMessage":"Tabhair faoi deara le do thoil nach dtacaítear le PreMiD ar fhóin phóca.","downloads.mobile.showDownloads":"Taispeáin Íoslódálacha","downloads.mobile.hideDownloads":"Folaigh Íoslódálacha","downloads.warning.differentVersion":"Is é {0} leagan reatha an ardáin seo (tá an leagan seo sainiúil do Linux agus ní bhaineann sé le hardáin eile).","downloads.warning.differentVersion2":"Baineann an leagan seo go sonrach le Linux, agus ní bhaineann sé le córais eile. Is é príomhleagan an fheidhmchláir {0}","downloads.error.login":"Logáil isteach le do thoil chun na híoslódálacha seo a fheiceáil.","downloads.error.noaccess.title":"Uh oh, tá an chuma air nach bhfuil rochtain alfa/béite agat :(","downloads.error.noaccess.description":"Is féidir leat a bheith inár gclár béite **anseo** saor in aisce. Déan deifir! Níl ach {0} níos mó sliotán againn","downloads.latest.header":"Scaoilanna Luath","downloads.warning.title":"Rabhadh","downloads.warning.message.opera":"Ní mór duit an síneadh **seo** a shuiteáil d’fhonn PreMiD a shuiteáil ón Chrome Webstore.","downloads.button.skip":"Scipeáil","downloads.button.back":"Ar ais","downloads.button.cancel":"Cealaigh","downloads.button.okay":"Ceart go leor","downloads.button.done":"Críochnaithe","downloads.button.login":"Logáil isteach","downloads.button.skipanyway":"Scipeáil ar aon nós","downloads.adsbox.thankyou.title":"Go raibh maith agat!","downloads.adsbox.thankyou.message":"Úsáidimid fógraí chun tacú lenár bhfoireann agus chun ár bhfreastalaithe a chothabháil chun an t-eispéireas úsáideora is fearr a thairiscint duit!","downloads.adsbox.disableAdblock":"Díchumasaigh do adblock le do thoil","downloads.showbeta.message":"Taispeáin scaoilanna luatha","downloads.showbeta.small":"(níl gá leis mura bhfuil tú anseo ach chun an gnáthfheidhmchlár a íoslódáil)","downloads.skipanyway.message1":"Níl mé ag iarraidh tacaíocht a thabhairt.","downloads.skipanyway.message2":"An bhfuil tú cinnte?","downloads.skipanyway.message3":"I ndáiríre?","downloads.skipanyway.message4":"Tacaigh le do thoil :(","downloads.skipanyway.message5":"Teastaíonn uaim tú: <","downloads.skipanyway.message6":"Ceart go leor, ceart go leor...","store.search.notFound":"Ní raibh muid in ann teacht ar an Presence sin...","error.code.404":"Tá brón orm, ní raibh muid in ann teacht ar an leathanach sin.","error.code.4":"Tá tú ag lorg Presence nach bhfuil ann nó a scriosadh.","error.code.500":"Tharla earráid Freastalaí Inmheánach.","error.page.details":"Sonraí","error.page.button":"Siar chuig an leathanach baile","user.notFound.heading":"Ní raibh an t-úsáideoir sin le fáil. Déan iarracht a dhéanamh cinnte","user.notFound.message1":"go bhfuil Aitheantas an Úsáideora atá á lorg agat ceart.","user.notFound.message2":"gur chruthaigh an t-úsáideoir dóthain Presences agus go bhfuil ról an Fhorbróra Presences aige inár bhfreastalaí Discord.","user.notFound.message3":"má tá an cheist chéanna ag daoine eile ar ár bhfreastalaí Discord.","user.notFound.message4":"Má chreideann tú gur botún a bhí anseo, déan teagmháil linn ag [ár bhfreastalaí Discord].","footer.language":"Teanga","footer.usercount.heading":"Réidh le PreMiD a úsáid?","footer.usercount.message":"Bí le {0} úsáideoir inniu!","footer.usercount.button":"Suiteáil","footer.partners.heading":"Comhpháirtithe","footer.followUs.heading":"Lean orainn","footer.developers.heading":"Forbróirí","footer.developers.documentation":"Doiciméadú","footer.developers.richpresence":"Láithreacht Shaibhir","footer.supportus.heading":"Tacaigh linn","footer.supportus.donate":"Síntiús","footer.supportus.contribute":"Cur","footer.supportus.translate":"Aistrigh","footer.supportus.jobs":"Oibrigh linn!","footer.help.heading":"Cabhrú","footer.help.troubleshooting":"Fabhtcheartú","footer.help.getsupport":"Faigh Cabhair","footer.help.information":"Eolas","footer.help.information.cookies":"Fianáin","footer.help.information.privacy":"Príobháideacht","footer.help.information.terms":"Téarmaí","footer.more.heading":"Níos mó","footer.more.status":"Stádas","footer.more.wiki":"Vici","footer.copyright.line1":"{0} le {1}","footer.copyright.line2":"Suíomh Gréasáin á chothabháil ag {0}","footer.partners.more":"Cliceáil anseo chun an chuid eile dár gcomhpháirtithe & urraitheoirí a fheiceáil.","header.language":"Gaeilge","header.languageNotification.title":"Tacaímid le do theanga, ar mhaith leat athrú?","header.languageNotification.text":"Aistríodh ár suíomh gréasáin go dtí do theanga, d’fhéadfadh sé seo a bheith cabhrach mura dtuigeann tú Béarla go maith.","header.languageNotification.btnDecline":"Níl sé uaim go raibh maith agat","header.languageNotification.btnAccept":"Athraigh an teanga","header.loader.phrases":"Pancóga bácála...;Coimeádáin a chur...;Ag seoladh do sheoladh IP...;UwU;Rialacha a bhriseadh...","header.store":"Stór","header.downloads":"Íoslódálacha","header.contributors":"Rannpháirtithe","header.login":"Logáil isteach","header.lia":"Logáilte isteach mar","header.rab":"Tuairisc ar fhabht","header.staff":"Painéal na nIonstraimí","header.logout":"Logáil Amach","home.introduction.paragraph":"Is fóntais shimplí, chumraithe é **PreMiD** a ligeann duit a bhfuil á dhéanamh agat ar an ngréasán a thaispeáint i do Discord anois ag imirt stádais.","home.introduction.button.features":"Gnéithe","home.introduction.button.downloads":"Íoslódálacha","home.examples.playingagame":"Ag imirt cluiche","home.examples.timestamp":"{0} fágtha","home.examples.timestamp2":"{0} caite","home.examples.status.playing":"Ag imirt ar ais","home.examples.status.live":"Beo","home.examples.status.browsing":"Ag brabhsáil...","home.features.heading":"Beidh grá agat ar na gnéithe seo!","home.features.presencesystem.heading":"Faigh **do** presence","home.features.presencesystem.description":"Chruthaíomar ár síneadh ar bhealach a ligeann duit Presences a chruthaigh daoine eile a chur leis agus a úsáid agus iad a bhainistiú inár síneadh!","home.features.presencesystem.button":"Tabhair cuairt ar an siopa","home.features.simpleInterface.heading":"Comhéadan úsáideora simplí","home.features.simpleInterface.description":"Tuirseach de chomhéadain úsáideora casta? Sin an fáth gur chruthaíomar agus a dhéanaimid iarracht ár Chomhéadain a choinneáil chomh simplí agus chomh húsáideach agus is féidir le gnéithe tábhachtacha mar:","home.features.simpleInterface.description.1":"Socruithe Feidhmchláir agus Síneadh","home.features.simpleInterface.description.2":"Bainistíocht Presence","home.features.simpleInterface.description.3":"Sórtáil de réir catagóire","home.features.quickSupport.heading":"Tacaíocht thapa","home.features.quickSupport.description":"Tá rud éigin briste, ag cur tonna earráidí chugat nó gan a bheith ag obair? Cabhróimid leat fáil réidh leis na saincheisteanna sin ar ár bhfreastalaí Discord, chruthaíomar ár gcóras tacaíochta féin freisin a chinnteoidh go réiteofar do shaincheist a luaithe is féidir.","home.features.quickSupport.button":"Tar isteach inár Discord","home.languageSelector.tippy":"Teanga an láithreáin ghréasáin","jobs.modal.title":"Déan iarratas ar {0}","jobs.modal.step":"Céim {0} de 2","jobs.modal.buttons.next":"Ar Aghaidh","jobs.modal.buttons.join":"Bí páirteach","jobs.modal.buttons.cancel":"Cealaigh","jobs.modal.error":"Comhlánaigh gach réimse le do thoil","jobs.modal.notice":"Is tionscadal foinse oscailte é PreMiD, rud a chiallaíonn gur foireann neamhbhrabúis muid, téann gach síntiús nó airgead pátrún ar ais isteach sa táirge. Trí iarratas a dhéanamh ar phost i PreMiD, admhaíonn tú go bhfuil tú ag obair go deonach san fhoireann, ní íocfar tú as do chuid oibre.","jobs.guild.required":"Tar isteach inár Discord","jobs.guild.explanation":"Le go mbeidh tú in ann iarratas a dhéanamh caithfidh tú a bheith inár bhfreastalaí Discord. Seachas sin ní bheimid in ann teagmháil a dhéanamh leat má roghnaítear thú!","jobs.header.title":"Obair do PreMiD","jobs.header.description":"An bhfuil tú réidh le cuidiú leis an gclár Láithreacht-Shaibhir is mó?","jobs.openings.title":"Oscailtí Poist","jobs.benefits.title":"Sochair Ard-Dheiridh","jobs.benefit1.title":"Buail linn","jobs.benefit1.description":"Téigh i dteagmháil leis na daoine taobh thiar de PreMiD.","jobs.benefit2.description":"Féach ar ár bhForbairt agus Margaíocht.","jobs.benefit3.title":"Onóir","jobs.benefit3.description":"Ceadanna Discord Cumhachtacha agus ról ildaite.","jobs.benefit4.title":"Tacaigh le PreMiD","jobs.benefit4.description":"Le do chuidiú is féidir an tionscadal seo a reáchtáil.","jobs.benefit5.title":"Sos","jobs.benefit5.description":"Tóg do chuid ama. Is obair dheonach í seo.","jobs.benefit6.title":"Rochtain-Luath","jobs.benefit6.description":"Déan tástáil ar ghnéithe nua roimh aon duine eile.","jobs.success.applied":"Go raibh maith agat as iarratas a dhéanamh!","jobs.errors.alreadyApplied":"Chuir tú isteach cheana cheana!","maintenance.big":"Ó níl!","maintenance.heading":"Ar an drochuair tá roinnt deacrachtaí teicniúla againn. Fillfimid go gairid. Leithscéal as an míchaoithiúlacht.","maintenance.heading2":"Tar ar ais níos déanaí le haghaidh tuilleadh faisnéise.","maintenance.message":"Go dtí go socraíonn ár bhforbróirí speisialta é seo, is féidir leat breathnú anseo!","maintenance.statuspage":"Leathanach Stádas","maintenance.discordserver":"Freastalaí discord","merch.title":"Fáilte go dtí an siopa earraí oifigiúil **PreMiD**!","merch.swag":"Faigh do **Swag**","merch.fit":"**Roghnaigh do chuid oiriúnach**","merch.cart":"Cuir le cart","merch.help":"An bhfuil fadhbanna agat lenár stór nó le hordú? Téigh i dteagmháil lenár {0}tacaíocht do chustaiméirí{1}","merch.item.added":"{0} curtha le do cart","merch.error.noitem":"Gan Mír le cur le do cart","partners.header.title":"Comhpháirtithe","partners.header.description":"Bí ar an gort agus faigh roinnt sochar comhpháirtíochta amháin chun a thaispeáint cé mhéad swag atá agat.","partners.slideshow.description":"Baineann siad seo linn cheana féin","partners.why.title":"Cad faoi dul chun na bhflaitheas in ionad ifreann?","partners.why.benefit1.title":"Do Presence saor in aisce","partners.why.benefit1.description":"Cuirfidh ár bhfoireann Presence ar do sheirbhís ar fáil duit.","partners.why.benefit2.title":"Bí fíoraithe","partners.why.benefit2.description":"Tabharfar ról speisialta agus onóir mhór duit inár bhfreastalaí Discord.","partners.why.benefit3.title":"Comhtháthú meta-chlib","partners.why.benefit3.description":"Úsáideann do Presence go huathoibríoch nuair a bhíonn duine ag tabhairt cuairte ar do Presence Gréasáin.","partners.why.benefit4.title":"Faigh bás a fháil","partners.why.benefit4.description":"Áit dána ar ár leathanach comhpháirtíochta.","partners.why.benefit5.title":"Bí cáiliúil","partners.why.benefit5.description":"Le feiceáil ar ár meáin shóisialta.","partners.requirements.title":"Riachtanais","partners.requirements.first.title":"Cad atá á lorg againn?","partners.requirements.first.description":"Coinnímid súil amach do phobail atá ag fás agus rudaí spreagúla ar fud an idirlín. TL;DR ba chóir duit a bheith ag baint úsáide as PreMiD cheana féin agus a bheith réidh chun é a scaipeadh ar níos mó freaks idirlín. Tá glacadh an-cháilíochtúil leis an gclár agus beidh sé éagsúil ó iarrthóir amháin go hiarrthóir eile.","partners.requirements.second.title":"Ár mballa dóiteáin","partners.requirements.second.description":"Táimid ag glacadh le cineálacha éagsúla iarrachtaí inár gclár comhpháirtíochta faoi láthair. Ba chóir go mbeadh seans ag duine ar bith a bheith faoi deara. Ba cheart go mbeadh 500 leantóir ar a laghad agus 10 lucht féachana comhthráthacha ag craoltóirí Twitch. Caithfidh tú a bheith ag sruthú 1 uair sa tseachtain ar a laghad.","partners.apply.button":"Déan iarratas anois!","partners.apply.disclaimer":"Téimid ar neamh le chéile!","partners.apply.jobs":"Más spéis leat post díreach ag PreMiD, féach ar ár **bhfógraí poist**.","partners.sponsors.title":"Urraitheoirí","partners.sponsors.description":"Ní bheifí in ann PreMiD a dhéanamh, gan na daoine iontacha seo.","partners.partner.aniFlix":"Sin mar a fhéachann tú ar anime.","partners.partner.arenaOfKings":"Is é Arena of Kings Cluiche Arena PvP luas tapa eile a imrítear sa bhrabhsálaí.","partners.partner.upBeat":"Is raidió idirnáisiúnta neamhbhrabúis é UpBeat a dhéanann a dhícheall siamsaíocht gan stad agus raidió agus nuachta ar ardchaighdeán a sholáthar.","partners.partner.simLiveRadio":"Is é SimLiveRadio an raidió infotainment is rathúla do chluichí insamhalta sa Ghearmáin, san Ostair agus san Eilvéis!","partners.partner.discordTemplates":"Tosaigh ag cruthú do phobail féin lenár dteimpléid uamhnach. Tóg do ríocht féin.","partners.partner.taigaBot":"Is Discord Bot é taiga ag iarraidh na gnéithe go léir a theastaíonn uait a thairiscint ag an am céanna!","partners.partner.bitRock":"Uirlis chruthaithe suiteálaí tras-ardán cumhachtach agus éasca le húsáid.","partners.partner.statusPage":"Stádas fíor-ama a chur in iúl go héasca d’úsáideoirí.","partners.partner.erisly":"Bandia a imríonn mar Discord Bot spraoi!","partners.partner.reyfm":"Ligeann REYFM duit éisteacht le 15+ sruth ceoil saor in aisce - gan stad. Leis an gceol is fearr agus is déanaí duit féin amháin!","partners.partner.crowdin":"Logánú lúfar do chuideachtaí ardteicneolaíochta.","partners.partner.wikijs":"Na bogearraí Wiki foinse oscailte is cumhachtaí agus is fairsinge.","partners.partner.packageCloud":"Comhéadan aontaithe, cairdiúil don fhorbróir do gach déantúsán atá agat.","partners.partner.fastly":"Taobh thiar den chuid is fearr den ngréasán.","partners.partner.onlyhit":"Is é OnlyHit do stáisiún raidió ceoil ar líne a dhéantar chun do chuid amas is fearr a imirt 24/7 agus chun go bhfaighidh tú amach do chuid amas amach anseo ar dtús.","partners.partner.atomicradio":"Faigh taithí ar an meascán is déanaí agus is fearr ó shaol an cheoil gan stad ar ár stáisiúin go léir, roghnaigh cén ceann is fearr leat agus bí ann beo nuair a théann finscéalta cairte in aghaidh a chéile le daoine nua don láthair is fearr!","partners.apply.title":"Déan iarratas ar pháirtí","partners.apply.loggedUser":"Logáilte isteach mar {0}","partners.apply.notYou":"Ní tusa?","partners.apply.select.default":"Roghnaigh ceann le do thoil","partners.apply.select.website":"Láithreáin ghréasáin","partners.apply.select.other":"Eile","partners.apply.form.name":"Ainm","partners.apply.form.name.placeholder":"Ex: PreMiD","partners.apply.form.link":"Nasc","partners.apply.form.link.placeholder":"Ex: https://premid.app","partners.apply.form.description":"Cur síos: (150 carachtar ar a mhéad)","partners.apply.form.description.placeholder":"Cur síos le feiceáil","partners.apply.form.imageLink":"Nasc íomhá: (550x300, PNG amháin)","partners.apply.form.imageLink.placeholder":"Ex: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Dún","partners.apply.form.button.apply":"Cuir iarratas isteach","partners.apply.success":"Go raibh maith agat as iarratas a dhéanamh!","partners.apply.error1":"Comhlánaigh na réimsí go léir le do thoil.","partners.apply.error2":"Tuairisc uasta 150 carachtar.","partners.apply.error3":"Cuir nasc leis le do thoil (caithfear tosú le https:// agus críochnaigh le .png)","partners.apply.error4":"Chuir tú isteach ar pháirtí cheana féin.","presence.page.buttons.sourceCode":"Cód Foinse","presence.sections.description.title":"Cur síos","presence.sections.changelog.title":"Athruite logail","presence.sections.information.title":"Eolas","presence.sections.information.author":"Údar","presence.sections.information.version":"Leagan","presence.sections.information.likes":"Is maith","presence.sections.information.users":"Úsáideoirí","presence.sections.information.tags":"Clibeanna","presence.sections.information.supportedurls":"URLanna tacaithe","presence.sections.information.contributors":"Rannpháirtithe","report.title":"Tuairisc a thabhairt ar fhabht","report.bugcount":"{count}/3 Tuarascálacha fágtha","report.info":"Tá fabhtanna tuairiscithe le haghaidh fabhtanna laistigh den láithreán PreMiD agus an Freastalaí Discord PreMiD. Tá fabhtanna le haghaidh presence le tuairisciú do chruthaitheoir na presence. Ná tuairisc ach fabhtanna i mBéarla.","report.overview":"Tabhair tuairisc shoiléir bheacht ar cad é an fabht.","report.os":"Roghnaigh do Chóras Oibriúcháin agus Leagan","report.browser":"Roghnaigh do Bhrabhsálaí agus Leagan - Is féidir leat an leagan a fháil trí chuairt a thabhairt about:support ar Firefox nó chrome://help","report.description":"Cuir nasc ar fáil le sampla beo nó le sraith céimeanna gan athbhrí chun an fabht seo a atáirgeadh.","report.button":"Tuarascáil","report.toomany":"Tá an iomarca tuairiscí gníomhacha agat. Fan go ndéanfar athbhreithniú ar do thuairiscí a cuireadh isteach. Seiceáiltear tuairiscí ar bhonn seachtainiúil, bí foighneach.","report.toomany.alert":"Tá an iomarca tuairiscí gníomhacha agat.","report.success":"Fabht Curtha isteach","report.error":"Tuilleadh faisnéise ag teastáil","report.error.unauth":"Is gá cuntas neamhord a fhíorú","report.activebugs":"Fabhtanna Gníomhacha","store.message.error":"Níl an síneadh ceangailte.","store.cards.creator":"Údar","store.cards.popular":"Tá an-tóir ar an Presence seo i measc úsáideoirí.","store.cards.partner":"Presence Chomhpháirtithe","store.cards.extraStepsRequired":"Teastaíonn céimeanna breise ón presence seo, féach ar a leathanach le haghaidh tuilleadh faisnéise.","store.header.search":"Presence Cuardaigh","store.card.presence.add":"Cuir Presence leis","store.card.presence.remove":"Bain Presence","store.card.presence.included":"Cumasaítear an Presence seo go huathoibríoch nuair a thugann sé cuairt ar a láithreán.","store.category.filters.heading":"Scagairí","store.category.filters.mostUsed":"An chuid is mó a úsáidtear ar dtús","store.category.filters.allowAdult":"Taispeáin NSFW","store.category.filters.likedOnly":"Níor thaitin ach Presences","store.filters.added":"Taispeáin curtha Presences leis","store.category.heading":"Catagóirí","store.category.all":"Gach","store.category.games":"Cluichí","store.category.music":"Ceol","store.category.socials":"Sóisialta","store.category.videos":"Físeáin agus Sruthanna","store.category.other":"Eile","store.search":"Cuardaigh","store.search.filters":"Iontráil","store.search.removeFilter":"Cliceáil chun scagaire a bhaint","user.roles.presenceDeveloper":"Forbróir Presence","user.roles.presenceVerifier":"Fíoraitheoir Presence","user.importantPresenceDev.message1":"Forbróir Presence Tábhachtach","user.importantPresenceDev.message2":"Cruthaithe {0} presences.","user.geniusPresenceDev.message1":"Forbróir Presence Duine cliste","user.geniusPresenceDev.message2":"Cruthaithe os cionn 100 Presences!","user.switch.contributed":"Úsáideoir [Presences/ranníocaíochtaí]","user.presences.created":"Cliceáil anseo chun na Presences a chruthaigh an t-úsáideoir seo a thaispeáint.","user.presences.contributed":"Cliceáil anseo chun na presences a chuidigh an t-úsáideoir seo leo a thaispeáint."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"רוצה תכונות חדשות?","beta.description.1":"**PreMiD Beta** עכשיו זמינה עבור כולם!","beta.description.2":"מה תקבל אם אתה תירשם?","beta.features.1":"תכונות אחרונות","beta.features.2":"גישה לערוצי הטקסט הסופר סודיים של PreMiD","beta.features.3":"רול מיוחד בשרת הדיסקורד שלנו","beta.register.text":"מוכן לזה? הצטרף ל {0} בטא טסטרים אחרים!","beta.register.button":"הירשם עכשיו!","thankyou.title":"קול! אתה עכשיו משתמש בטא!","thankyou.description":"הקופים שלנו עובדים על להכניס אותך לתוכנית הבטא שלנו בהקדם האפשרי. תודה על שנרשמת!","contributors.headings.staff":"צוות","contributors.headings.supporters":"תומכים","contributors.headings.translators":"מתרגמים","contributors.roles.moderator":"מנחה","contributors.roles.donator":"תורם","contributors.roles.booster":"מאיץ","contributors.roles.translator":"מתרגם","contributors.cards.copyUserId":"תלחץ כאן בשביל להעתיק את הID של האיש.","downloads.instructions.heading":"התחל","downloads.instructions.step.1":"הורד את PreMiD","downloads.appdownloading.header":"יישום","downloads.extdownloading.header":"תוסף","downloads.tooltips.os.not.supported.part2":"{0} אין התקנה עבור מערכת ההפעלה שלך. זה אומר שאין שום תמיכה מקצועית בשביל זה.","downloads.button.done":"בוצע","downloads.adsbox.thankyou.title":"תודה רבה!","downloads.adsbox.disableAdblock":"אנא השבת את חסימת המודעות שלך","downloads.skipanyway.message1":"אני לא מעוניין לתמוך.","downloads.skipanyway.message2":"האם אתה בטוח?","downloads.skipanyway.message3":"באמת?","downloads.skipanyway.message4":"ב-בבקשה תמוך :(","downloads.skipanyway.message5":"אני צריך אותך :<","downloads.skipanyway.message6":"בסדר, בסדר...","user.notFound.heading":"המשתמש הזה לא נמצא. נסה לוודא","footer.language":"שפה","footer.usercount.message":"הצטרף ל{0} משתמשים כבר היום!","footer.usercount.button":"התקן","footer.partners.heading":"שותפים","footer.developers.heading":"מפתחים","footer.developers.documentation":"תיעוד","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"תמוך בנו","footer.supportus.donate":"תרום","footer.supportus.contribute":"תרום","footer.supportus.translate":"תרגם","footer.help.heading":"עזרה","footer.help.troubleshooting":"פתרון תקלות","footer.help.getsupport":"קבל עזרה","footer.help.information":"מידע","footer.help.information.cookies":"עוגיות","footer.help.information.privacy":"פרטיות","footer.help.information.terms":"תנאי שימוש","footer.more.heading":"עוד","footer.more.status":"סטטוס","footer.more.wiki":"וויקי","footer.copyright.line1":"{0} על ידי {1}","footer.copyright.line2":"אתר מתוחזק על ידי{0}","header.language":"עברית","header.languageNotification.title":"אנחנו תומכים בשפה שלך, רוצה להחליף שפה?","header.languageNotification.text":"האתר שלנו תורגם לשפה שלך. זה יכול לעזור במקרה שאתה לא דובר אנגלית כל כך טוב.","header.languageNotification.btnDecline":"לא, תודה","header.languageNotification.btnAccept":"שנה שפה","header.loader.phrases":"אופה פנקייקים...;ממקם מכולות...;סורק את האייפי שלך...;UwU;עובר על החוקים...","header.store":"חנות","header.downloads":"הורדות","header.contributors":"תורמים","home.introduction.button.downloads":"הורדות","home.examples.playingagame":"משחק במשחק","home.examples.timestamp":"{0} נשאר","home.examples.status.playing":"מופעל מחדש","home.examples.status.live":"שידור חי","home.examples.status.browsing":"גולש...","home.features.heading":"אתה תאהב את התכונות האלה!","home.features.simpleInterface.heading":"ממשק משתמש פשוט","home.features.simpleInterface.description.1":"הגדרות תוכנה ותוסף","home.features.simpleInterface.description.2":"ניהול Presence","home.features.quickSupport.heading":"תמיכה מהירה","maintenance.big":"או לא!","maintenance.message":"עד שהמפתחים המיוחדים שלנו יסדרו את זה, תרגיש חופשי להסתכל פה!","maintenance.statuspage":"דף סטטוס","maintenance.discordserver":"שרת הדיסקורד","partners.header.title":"שותפים","partners.apply.select.other":"אחר","presence.sections.description.title":"תיאור","presence.sections.changelog.title":"יומן שינויים","presence.sections.information.title":"מידע","presence.sections.information.author":"מחבר","presence.sections.information.version":"גרסה","presence.sections.information.tags":"תגים","presence.sections.information.supportedurls":"כתובות נתמכות","presence.sections.information.contributors":"תורמים","store.cards.creator":"מחבר","store.category.heading":"קטגוריות","store.category.all":"הכל","store.category.games":"משחקים","store.category.music":"מוזיקה","store.category.socials":"חברתי","store.category.videos":"סרטונים & שידורים","store.category.other":"אחר","user.roles.presenceDeveloper":"מפתח Presence","user.roles.presenceVerifier":"מאמת Presence","user.importantPresenceDev.message1":"מפתח Presence חשוב","user.importantPresenceDev.message2":"נוצרו {0} presences."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"नई सुविधाएँ चाहते हैं?","beta.description.1":"** PreMiD बीटा ** अब सभी के लिए उपलब्ध है!","beta.description.2":"यदि आप साइन अप करते हैं तो आपको क्या मिलेगा?","beta.features.1":"नवीनतम सुविधाएँ","beta.features.2":"PreMiD के सुपर सीक्रेट टेक्स्ट चैनलों तक पहुंच","beta.features.3":"हमारे Discord सर्वर पर एक विशेष भूमिका","beta.register.text":"इसके लिए तैयार हैं? {0} अन्य बीटा परीक्षकों में शामिल हों!","beta.register.button":"अभी साइनअप करें!","thankyou.title":"बहुत बढ़िया! अब आप एक बीटा उपयोगकर्ता हैं!","thankyou.description":"हमारे बंदर आपको हमारे बीटा कार्यक्रम में जितनी जल्दी हो सके काम कर रहे हैं। पंजीकृत करने के लिए आपका धन्यवाद!","error.noslots":"ऐसा लगता है कि हमारे पास कोई और बीटा स्लॉट उपलब्ध नहीं है।","contributors.headings.staff":"कर्मचारी","contributors.headings.supporters":"समर्थकों","contributors.headings.translators":"अनुवादकों","contributors.roles.projectLeader":"परियोजना का मुखिया","contributors.roles.staffCoordinator":"स्टाफ कोऑर्डिनेटर","contributors.roles.marketingDirector":"विपणन निदेशक","contributors.roles.administrator":"प्रशासक","contributors.roles.reviewer":"आलोचक","contributors.roles.localizationManager":"स्थानीयकरण प्रबंधक","contributors.roles.developer":"डेवलपर","contributors.roles.designer":"डिजाइनर","contributors.roles.moderator":"मध्यस्थ","contributors.roles.supportAgent":"समर्थन एजेंट","contributors.roles.representative":"प्रतिनिधि","contributors.roles.proofreader":"शुद्धिकारक","contributors.roles.donator":"दानी","contributors.roles.booster":"बूस्टर","contributors.roles.translator":"अनुवादक","contributors.cards.copyUserId":"उपयोगकर्ता की आईडी कॉपी करने के लिए क्लिक करें","contributors.cards.userIdCopied":"उपयोगकर्ता आईडी की प्रतिलिपि बनाई गई!","downloads.header.title":"दिखावा करने का समय","downloads.header.subtitle":"अब PreMiD का उपयोग करें और अपने दोस्तों को दिखाएं कि आप क्या कर रहे हैं, हो सकता है कि आप किसी को समान रुचियों वाला पाते हों","downloads.instructions.heading":"Get Started","downloads.instructions.step.1":"PreMiD डाउनलोड करें","downloads.instructions.step.2":"हमारे आवेदन स्थापित करें","downloads.instructions.step.3":"हमारे एक्सटेंशन को अपने ब्राउज़र में जोड़ें","downloads.instructions.step.4":"इस साइट को पुनः लोड करें और जांचें कि क्या एक्सटेंशन जुड़ा हुआ है","downloads.instructions.footer":"अभी भी मुद्दे हैं? {0}","downloads.instructions.footer.link":"हमलोग यहां सहायता करने के लिए हैं!","downloads.appdownloading.header":"एप्लिकेशन","downloads.extdownloading.header":"एक्सटेंशन","downloads.tooltips.os.not.supported.part1":"चेतावनी:","downloads.tooltips.os.not.supported.part2":"{0} इस ऑपरेटिंग सिस्टम के लिए कोई इंस्टॉलर नहीं है। इसका मतलब है कि इसके लिए कोई पेशेवर समर्थन नहीं है","downloads.mobile.errorMessage":"कृपया ध्यान रखें कि PreMiD मोबाइल फोन पर समर्थित नहीं है।","downloads.mobile.showDownloads":"डाउनलोड दिखाओ","downloads.mobile.hideDownloads":"डाउनलोड छिपाएँ","downloads.warning.differentVersion":"इस मंच का वर्तमान संस्करण {0} है (यह संस्करण Linux के लिए विशिष्ट है और अन्य प्लेटफार्मों पर लागू नहीं होता है)।","downloads.warning.differentVersion2":"यह संस्करण Linux के लिए विशिष्ट है, और अन्य प्रणालियों पर लागू नहीं होता है। अनुप्रयोग का मुख्य संस्करण {0} है","downloads.error.login":"कृपया इन डाउनलोडों को देखने के लिए लॉगिन करें","downloads.error.noaccess.title":"उह, ऐसा लगता है कि आपके पास अल्फा / बीटा एक्सेस नहीं है :(","downloads.error.noaccess.description":"आप हमारे बीटा प्रोग्राम में शामिल हो सकते हैं ** यहाँ ** मुफ्त में। जल्दी करो! हमारे पास केवल {0} अधिक स्लॉट उपलब्ध हैं\\nसंपर्क करें","downloads.latest.header":"प्रारंभिक विज्ञप्ति","downloads.warning.title":"चेतावनी","downloads.warning.message.opera":"आपको Chrome वेबस्टोर से PreMiD स्थापित करने के लिए ** इस ** एक्सटेंशन को स्थापित करना होगा।","downloads.button.skip":"स्किप","downloads.button.back":"वापस","downloads.button.cancel":"रद्द करना","downloads.button.okay":"ठीक है","downloads.button.done":"किया हुआ","downloads.button.login":"लॉग इन करें","downloads.button.skipanyway":"वैसे भी छोड़ें","downloads.adsbox.thankyou.title":"धन्यवाद!","downloads.adsbox.thankyou.message":"हम हमारी टीम का समर्थन करने और आपको सर्वश्रेष्ठ उपयोगकर्ता अनुभव प्रदान करने के लिए हमारे सर्वर को बनाए रखने के लिए विज्ञापनों का उपयोग करते हैं","downloads.adsbox.disableAdblock":"कृपया अपने एडब्लॉक को अक्षम करें","downloads.showbeta.message":"बीटा डाउनलोड दिखाएं","downloads.showbeta.small":"(जरूरत नहीं है अगर आप केवल सामान्य आवेदन पत्र डाउनलोड करने के लिए यहां हैं)","downloads.skipanyway.message1":"मैं समर्थन नहीं करना चाहता","downloads.skipanyway.message2":"क्या आपको यकीन है?","downloads.skipanyway.message3":"सचमुच","downloads.skipanyway.message4":"P- कृपया समर्थन करें :(","downloads.skipanyway.message5":"मुझे आपकी आवश्यकता है :<","downloads.skipanyway.message6":"ठीक है ठीक है...","store.search.notFound":"इस उपयोगकर्ता द्वारा बनाई गई Presence दिखाने के लिए यहां क्लिक करें।","error.code.404":"क्षमा करें, लेकिन हम इस पृष्ठ नहीं मिल सकता है","error.code.4":"आप एक गैर-मौजूद या हटाए गए Presence की तलाश कर रहे हैं।","error.code.500":"आंतरिक सर्वर त्रुटि हुई है।","error.page.details":"विवरण","error.page.button":"होमपेज पर जाएँ","user.notFound.heading":"वह उपयोगकर्ता नहीं मिला। सुनिश्चित करने का प्रयास करें","user.notFound.message1":"उपयोगकर्ता की आईडी जिसे आप ढूंढ रहे हैं वह सही है।","user.notFound.message2":"उपयोगकर्ता ने पर्याप्त Presences बनाई है और हमारे Discord सर्वर में Presence डेवलपर की भूमिका है।","user.notFound.message3":"यदि अन्य लोग हमारे Discord सर्वर पर एक ही समस्या का सामना कर रहे हैं।","user.notFound.message4":"यदि आपको लगता है कि यह एक गलती थी, तो कृपया हमसे संपर्क करें [हमारे Discord सर्वर]।","footer.language":"भाषा","footer.usercount.heading":"PreMiD का उपयोग करने के लिए तैयार हैं?","footer.usercount.message":"आज ही {0} उपयोगकर्ताओं से जुड़ें!","footer.usercount.button":"संस्थापन","footer.partners.heading":"साझेदार","footer.followUs.heading":"हमें फॉलो करें","footer.developers.heading":"डिवेलपर","footer.developers.documentation":"प्रलेखन","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"हमें सहयोग दीजिये","footer.supportus.donate":"दान करें","footer.supportus.contribute":"योगदान दें","footer.supportus.translate":"अनुवाद करें","footer.supportus.jobs":"हमारे साथ कार्य करें","footer.help.heading":"सहायता","footer.help.troubleshooting":"समस्या निवारण","footer.help.getsupport":"मदद लें","footer.help.information":"जानकारी","footer.help.information.cookies":"कूकीज़","footer.help.information.privacy":"गोपनीयता","footer.help.information.terms":"शर्तें","footer.more.heading":"अतिरिक्त","footer.more.status":"स्टेटस","footer.more.wiki":"विकी","footer.copyright.line1":"{0} के द्वारा {1}","footer.copyright.line2":"वेबसाइट {0} द्वारा बनाए रखी गई","footer.partners.more":"हमारे बाकी साथी और प्रायोजक देखने के लिए यहां क्लिक करें।","header.language":"हिंदी","header.languageNotification.title":"हम आपकी भाषा का समर्थन करते हैं, स्विच करना चाहते हैं?","header.languageNotification.text":"हमारी वेबसाइट को आपकी भाषा में अनुवादित किया गया है। यदि आप अच्छी तरह से अंग्रेजी नहीं बोलते हैं तो यह मदद कर सकता है","header.languageNotification.btnDecline":"नहीं, धन्यवाद","header.languageNotification.btnAccept":"भाषा बदलें","header.loader.phrases":"पैनकेक पेनकेक्स...; कंटेनर रखने;... अपने आईपी पते को पार्स...; यूयूयू; ब्रेकिंग नियम...","header.store":"स्टोर","header.downloads":"डाउन्लोड","header.contributors":"योगदानकर्ता","header.login":"लॉग इन करें","header.lia":"के रूप में लॉग:","header.rab":"बग की रिपोर्ट करें","header.staff":"डैशबोर्ड","header.logout":"लॉग आउट करें","home.introduction.paragraph":"** PreMiD ** एक सरल, विन्यास योग्य उपयोगिता है जो आपको यह दिखाने की अनुमति देती है कि आप वेब पर जो कर रहे हैं वह आपके Discord में अब खेल रहा है।","home.introduction.button.features":"फीचर्स","home.introduction.button.downloads":"डाउन्लोड","home.examples.playingagame":"एक गेम खेलें","home.examples.timestamp":"{0} बचा है","home.examples.timestamp2":"{0} बीता हुआ","home.examples.status.playing":"वापस चलाएँ रहा है","home.examples.status.live":"लाइव","home.examples.status.browsing":"ब्राउजिंग","home.features.heading":"आप इन सुविधाओं को प्यार करेंगे!","home.features.presencesystem.heading":"**अपना** ढूँढो presence","home.features.presencesystem.description":"हमने अपना एक्सटेंशन इस तरह से बनाया है, जिससे आप दूसरों द्वारा बनाई गई Presences को जोड़ सकते हैं और उनका उपयोग कर सकते हैं और उन्हें हमारे एक्सटेंशन में प्रबंधित कर सकते हैं!","home.features.presencesystem.button":"स्टोर विजिट करे","home.features.simpleInterface.heading":"सरल उपयोगकर्ता इंटरफ़ेस","home.features.simpleInterface.description":"जटिल उपयोगकर्ता इंटरफेस से थक गए? इसलिए हमने अपने UI को महत्वपूर्ण सुविधाओं के साथ यथासंभव सरल और उपयोगी बनाए रखने की कोशिश की:","home.features.simpleInterface.description.1":"ऐप और एक्सटेंशन सेटिंग","home.features.simpleInterface.description.2":"Presence संचालन","home.features.simpleInterface.description.3":"श्रेणी के आधार पर छाँटें","home.features.quickSupport.heading":"त्वरित समर्थन","home.features.quickSupport.description":"कुछ गड़बड़ है, आप त्रुटियों के टन भेजने या बस काम नहीं कर रहा है? हम आपको अपने डिसॉर्ड सर्वर पर उन मुद्दों से छुटकारा पाने में मदद करेंगे, हमने अपनी सहायता प्रणाली भी बनाई है जो यह सुनिश्चित करेगी कि आपका मुद्दा जल्द से जल्द सुलझ जाए।","home.features.quickSupport.button":"हमारा डिसॉर्ड में शामिल हो","home.languageSelector.tippy":"वेबसाइट भाषा","jobs.modal.title":"{0} के लिए आवेदन करें","jobs.modal.step":"चरण २ के {0}","jobs.modal.buttons.next":"अगला","jobs.modal.buttons.join":"जुड़ें","jobs.modal.buttons.cancel":"रद्द करना","jobs.modal.error":"कृपया सभी फ़ील्ड्स पूर्ण करें","jobs.modal.notice":"PreMiD एक ओपन-सोर्स प्रोजेक्ट है, जिसका अर्थ है कि हम एक गैर-लाभकारी टीम हैं, प्रत्येक दान या पैटरॉन का पैसा वापस उत्पाद में चला जाता है। PreMiD में नौकरी की स्थिति के लिए आवेदन करने से आप स्वीकार करते हैं कि आप टीम में स्वेच्छा से काम कर रहे हैं, आपको अपने काम के लिए भुगतान नहीं किया जाएगा।","jobs.guild.required":"हमारा डिसॉर्ड में शामिल हो","jobs.guild.explanation":"लागू करने में सक्षम होने के लिए आप हमारे Discord सर्वर से जुड़ गए होंगे। यदि आप चयनित हो रहे हैं तो अन्यथा हम आपसे संपर्क नहीं कर पाएंगे!","jobs.header.title":"PreMiD के लिए काम करते हैं","jobs.header.description":"क्या आप सबसे बड़े रिच-प्रेजेंस प्रोग्राम में मदद के लिए तैयार हैं?","jobs.openings.title":"नौकरी की रिक्तियां","jobs.benefits.title":"उच्च वर्ग का लाभ","jobs.benefit1.title":"हमें मिलिये","jobs.benefit1.description":"PreMiD के पीछे लोगों से संपर्क करें।","jobs.benefit2.title":"झलक","jobs.benefit2.description":"हमारे विकास और विपणन पर एक नज़र है।","jobs.benefit3.title":"सम्मान","jobs.benefit3.description":"शक्तिशाली Discord अनुमति और एक रंगीन भूमिका।","jobs.benefit4.title":"समर्थन PreMiD","jobs.benefit4.description":"आपके योगदान से इस परियोजना को चलाना संभव है।","jobs.benefit5.title":"समय समाप्त","jobs.benefit5.description":"पर्याप्त समय लो। यह स्वैच्छिक कार्य है।","jobs.benefit6.title":"जल्दी पहुँच","jobs.benefit6.description":"किसी और से पहले नई सुविधाओं का परीक्षण करें।","jobs.success.applied":"आवेदन करने के लिए धन्यवाद!","jobs.errors.alreadyApplied":"आप पहले ही आवेदन कर चुके हैं!","maintenance.big":"अरे नहीं","maintenance.heading":"दुर्भाग्य से, हम कुछ तकनीकी कठिनाइयों का सामना कर रहे हैं। हम शीघ्र ही लौटेंगे। असुविधा के लिए खेद है।","maintenance.heading2":"कृपया अधिक जानकारी के लिए बाद में वापस आएं।","maintenance.message":"जब तक हमारे विशेष डेवलपर्स इसे ठीक नहीं करते, तब तक यहां एक नज़र डालें!","maintenance.statuspage":"स्टीटस पेज","maintenance.discordserver":"डिसकॉर्ड सर्वर","merch.title":"आधिकारिक **PreMiD** पण्य की दुकान में आपका स्वागत है!","merch.swag":"अपना **स्वैग** खोजें","merch.fit":"**अपना फिट चुनें**","merch.cart":"कार्ट में डालें","merch.help":"हमारे स्टोर या एक आदेश के साथ समस्याओं का अनुभव? हमारे {0} ग्राहक सहायता {1} से संपर्क करें","merch.item.added":"{0} अपनी गाड़ी में जोड़ा","merch.error.noitem":"आपकी कार्ट में जोड़ने के लिए कोई आइटम नहीं है","partners.header.title":"साझेदार","partners.header.description":"अकाल में शामिल हों और कुछ साथी को केवल यह दिखाने के लिए लाभ दें कि आपके पास कितना स्वैग है।","partners.slideshow.description":"ये पहले से ही हमारे हैं","partners.why.title":"नरक के बजाय स्वर्ग जाने के बारे में कैसे?","partners.why.benefit1.title":"आपका मुफ्त Presence","partners.why.benefit1.description":"हमारी टीम आपको आपकी सेवा की Presence प्रदान करेगी।","partners.why.benefit2.title":"सत्यापित हो गया","partners.why.benefit2.description":"एक विशेष भूमिका और महान सम्मान आपको हमारे Discord सर्वर में दिया जाएगा।","partners.why.benefit3.title":"मेटा-टैग एकीकरण","partners.why.benefit3.description":"जब कोई आपकी वेबसाइट पर आ रहा हो, तो अपने Presence टेशन का उपयोग स्वत: करता है।","partners.why.benefit4.title":"अमर हो जाओ","partners.why.benefit4.description":"हमारे साथी पृष्ठ पर एक बुरा स्थान।","partners.why.benefit5.title":"प्रसिद्ध होना","partners.why.benefit5.description":"हमारे सोशल मीडिया पर प्रदर्शित।","partners.requirements.title":"आवश्यकताएँ","partners.requirements.first.title":"हम क्या खोज कर रहे हैं?","partners.requirements.first.description":"हम बढ़ते हुए समुदायों और इंटरनेट के आसपास की रोमांचक चीजों पर नज़र रखते हैं। TL, डॉ। आप पहले से ही PreMiD का उपयोग कर रहे हैं और इसे और भी अधिक इंटरनेट शैतान तक फैलाने के लिए तैयार रहें। कार्यक्रम में स्वीकृति अत्यंत गुणात्मक है और एक उम्मीदवार से दूसरे में भिन्न होगी।","partners.requirements.second.title":"हमारे फ़ायरवॉल","partners.requirements.second.description":"वर्तमान में हम अपने साझेदारी कार्यक्रम में विभिन्न प्रकार के प्रयासों को स्वीकार कर रहे हैं। किसी को भी नोटिस करने का मौका होना चाहिए। चिकोटी प्रसारकों में कम से कम 500 अनुयायी और कम से कम 10 समवर्ती दर्शक होने चाहिए। आपको प्रति सप्ताह कम से कम 1 बार स्ट्रीमिंग करनी होगी।","partners.apply.button":"अभी आवेदन करें!","partners.apply.disclaimer":"चलो एक साथ स्वर्ग जाओ!","partners.apply.jobs":"यदि आप PreMiD में प्रत्यक्ष नौकरी में रुचि रखते हैं, तो हमारे ** नौकरी विज्ञापनों ** पर एक नज़र डालें।","partners.sponsors.title":"प्रायोजकों","partners.sponsors.description":"PreMiD संभव नहीं होगा, इन अद्भुत लोगों के बिना।","partners.partner.aniFlix":"कि आप एनीमे को कैसे देखते हैं।","partners.partner.arenaOfKings":"एरिना ऑफ किंग्स ब्राउज़र में खेला जाने वाला एक अगली-जीन फास्ट-पीवीपी एरिना गेम है।","partners.partner.upBeat":"UpBeat एक गैर-लाभकारी अंतर्राष्ट्रीय रेडियो है जो गैर-स्टॉप, गुणवत्ता वाले रेडियो और समाचार मनोरंजन प्रदान करने का प्रयास करता है।","partners.partner.simLiveRadio":"SimLiveRadio जर्मनी, ऑस्ट्रिया और स्विट्जरलैंड में सिमुलेशन गेम्स के लिए सबसे सफल इन्फोटेनमेंट रेडियो है!","partners.partner.discordTemplates":"हमारे भयानक टेम्पलेट्स के साथ अपना समुदाय बनाना शुरू करें। अपने राज्य का निर्माण करें।","partners.partner.taigaBot":"टैगा एक Discord बॉट है जो एक बार में आपके लिए आवश्यक सभी सुविधाओं की पेशकश करने की कोशिश कर रहा है!","partners.partner.bitRock":"एक शक्तिशाली और आसान उपयोग क्रॉस-प्लेटफ़ॉर्म इंस्टॉलर निर्माण उपकरण।","partners.partner.statusPage":"आसानी से अपने उपयोगकर्ताओं के लिए वास्तविक समय स्थिति संवाद।","partners.partner.erisly":"एक देवी जो एक मजेदार Discord बॉट के रूप में खेलती है!","partners.partner.reyfm":"REYFM आपको 15+ म्यूजिक स्ट्रीम मुफ्त में सुनने की सुविधा देता है - नॉनस्टॉप। केवल आपके लिए सबसे अच्छा और नवीनतम संगीत के साथ!","partners.partner.crowdin":"तकनीक कंपनियों के लिए चुस्त स्थानीयकरण।","partners.partner.wikijs":"सबसे शक्तिशाली और एक्स्टेंसिबल ओपन सोर्स विकी सॉफ्टवेयर है।","partners.partner.packageCloud":"आपकी सभी कलाकृतियों के लिए एक एकीकृत, डेवलपर-अनुकूल इंटरफ़ेस।","partners.partner.fastly":"वेब के पीछे सबसे अच्छा।","partners.partner.onlyhit":"OnlyHit आपका ऑनलाइन संगीत रेडियो स्टेशन है जो आपकी सबसे अच्छी हिट 24/7 खेलने के लिए और आपको अपने भविष्य के हिट पहले खोजने के लिए बनाया गया है।","partners.partner.atomicradio":"हमारे सभी स्टेशनों पर गैर-स्टॉप संगीत दुनिया से नवीनतम और सबसे अच्छा मिश्रण का अनुभव करें, जो आपको सबसे अधिक पसंद है, उसे चुनें और जब शीर्ष किंवदंतियों के लिए नए दिग्गजों के साथ चार्ट किंवदंतियों में एक दूसरे से लड़ाई होती है!","partners.apply.title":"पार्टनर के लिए आवेदन करें","partners.apply.loggedUser":"{0} के रूप में लॉग इन किया","partners.apply.notYou":"तुम नहीं?","partners.apply.select.default":"कृपया एक का चयन करें","partners.apply.select.website":"वेबसाइट","partners.apply.select.other":"अन्य","partners.apply.form.name":"नाम","partners.apply.form.name.placeholder":"Ex: PreMiD","partners.apply.form.link":"लिंक","partners.apply.form.link.placeholder":"Ex: https://premid.app","partners.apply.form.description":"विवरण: (अधिकतम 150 वर्ण)","partners.apply.form.description.placeholder":"चित्रित करने के लिए विवरण","partners.apply.form.imageLink":"छवि लिंक: (550x300, पीएनजी केवल)","partners.apply.form.imageLink.placeholder":"Ex: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"बंध किजिए","partners.apply.form.button.apply":"लागू","partners.apply.success":"आवेदन करने के लिए धन्यवाद!","partners.apply.error1":"कृपया सभी क्षेत्रों को पूरा करें।","partners.apply.error2":"अधिकतम 150 वर्णों का वर्णन।","partners.apply.error3":"कृपया एक लिंक जोड़ें (https: // से शुरू करें और .png के साथ समाप्त करें)","partners.apply.error4":"आपने पहले ही पार्टनर के लिए आवेदन कर दिया था।","presence.page.buttons.sourceCode":"सोर्स कोड","presence.sections.description.title":"विवरण","presence.sections.changelog.title":"परिवर्तन लॉग","presence.sections.information.title":"जानकारी","presence.sections.information.author":"लेखक","presence.sections.information.version":"संस्करण","presence.sections.information.likes":"पसंद है","presence.sections.information.users":"यूज़र","presence.sections.information.tags":"टैग","presence.sections.information.supportedurls":"समर्थित URL","presence.sections.information.contributors":"योगदानकर्ता","report.title":"गलती सूचित करें","report.bugcount":"{count} / 3 रिपोर्टें शेष हैं","report.info":"रिपोर्टिंग कीड़े PreMiD साइट और PreMiD Discord सर्वर के भीतर बग के लिए हैं। Presence के लिए कीड़े को presence के निर्माता को सूचित किया जाना है। केवल अंग्रेजी में बग रिपोर्ट करें।","report.overview":"बग क्या है इसका स्पष्ट और संक्षिप्त विवरण प्रदान करें।","report.os":"अपना ऑपरेटिंग सिस्टम और संस्करण चुनें","report.browser":"अपने ब्राउज़र और संस्करण का चयन करें - आप के बारे में पर जाकर संस्करण प्राप्त कर सकते हैं: Firefox या chrome://help","report.description":"इस बग को पुन: पेश करने के लिए एक जीवंत उदाहरण या चरणों के एक अस्पष्ट सेट के लिए एक लिंक प्रदान करें।","report.button":"रिपोर्ट","report.toomany":"आपके पास बहुत सी सक्रिय रिपोर्ट हैं। अपनी सबमिट की गई रिपोर्ट की समीक्षा करने के लिए प्रतीक्षा करें। साप्ताहिक आधार पर रिपोर्ट की जाँच की जाती है, धैर्य रखें।","report.toomany.alert":"आपके पास बहुत सी सक्रिय रिपोर्ट हैं।","report.success":"बग प्रस्तुत किया","report.error":"यह जानकारी आवश्यक है।","report.error.unauth":"Discord खाते को सत्यापित करने की आवश्यकता है","report.activebugs":"सक्रिय कीड़े","store.message.error":"एक्सटेंशन कनेक्ट नहीं है","store.cards.creator":"लेखक","store.cards.popular":"यह Presence उपयोगकर्ताओं के आसपास बहुत लोकप्रिय है।","store.cards.partner":"भागीदारी Presence","store.cards.extraStepsRequired":"इस presence के लिए अतिरिक्त चरणों की आवश्यकता होती है, कृपया अधिक जानकारी के लिए इसके पृष्ठ की जाँच करें।","store.header.search":"तलाश Presence","store.card.presence.add":"लोड Presence","store.card.presence.remove":"हटाना Presence","store.card.presence.included":"यह Presence अपनी साइट पर आने पर स्वचालित रूप से सक्षम है।","store.category.filters.heading":"फ़िल्टर","store.category.filters.mostUsed":"ज्यादातर इस्तेमाल किए जाने वाले ऐप","store.category.filters.allowAdult":"NSFW दिखाएं","store.category.filters.likedOnly":"केवल पसंद किया Presences","store.filters.added":"शो जोड़ा गया Presences","store.category.heading":"श्रेणियाँ","store.category.all":"सभी","store.category.games":"खेल","store.category.music":"संगीत","store.category.socials":"सामाजिक","store.category.videos":"वीडियो और स्ट्रीम","store.category.other":"अन्य","store.search":"तलाश","store.search.filters":"दर्ज करें","store.search.removeFilter":"फिल्टर को रिमूव के लिए क्लिक करे","user.roles.presenceDeveloper":"Presence डेवलपर","user.roles.presenceVerifier":"Presence Verifier","user.importantPresenceDev.message1":"महत्वपूर्ण Presence डेवलपर","user.importantPresenceDev.message2":"बनाया था {0} presences","user.geniusPresenceDev.message1":"प्रतिभाशाली Presence डेवलपर","user.geniusPresenceDev.message2":"100 से अधिक Presences बनाया!","user.switch.contributed":"उपयोगकर्ता [Presences/ योगदान]","user.presences.created":"इस उपयोगकर्ता द्वारा बनाई गई Presences दिखाने के लिए यहां क्लिक करें।","user.presences.contributed":"इस उपयोगकर्ता द्वारा बनाई गई Presences दिखाने के लिए यहां क्लिक करें।"}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.roles.projectLeader":"Voditelj Projekta","contributors.roles.staffCoordinator":"Koordinator Osoblja","contributors.roles.marketingDirector":"Direktor Marketinga","contributors.roles.administrator":"Administrator","contributors.roles.reviewer":"Recenzent","contributors.roles.developer":"Programer","downloads.header.title":"Vrijeme da se pokažeš.","downloads.button.done":"Gotovo","downloads.adsbox.disableAdblock":"Isključi adblock","downloads.skipanyway.message1":"Ne želim vas podržavati.","downloads.skipanyway.message2":"Jesi li siguran?","downloads.skipanyway.message3":"Stvarno?","downloads.skipanyway.message4":"M-molim te :(","downloads.skipanyway.message5":"Trebamo te :<","downloads.skipanyway.message6":"Ok, ok...","user.notFound.message2":"da je korisnik stvorio dovoljno Presence-a i ima ulogu Programera Presence-a na našem Discord serveru.","user.notFound.message3":"ako drugi imaju isti problem na našem Discord serveru.","header.language":"Hrvatski","home.introduction.paragraph":"**PreMiD** je jednostavan, podesiv alat koji ti omogućuje prikazivanje onoga što radiš na web-u u tvom Discord now playing status-u.","home.introduction.button.features":"Značajke","home.introduction.button.downloads":"Preuzimanja","home.examples.playingagame":"Igra igru","home.examples.timestamp":"{0} lijevo","home.examples.timestamp2":"{0} proteklo","home.features.heading":"Obožavati ćeš ove značajke!","home.features.presencesystem.heading":"Pronađi **svoj** presence","home.features.presencesystem.description":"Naš smo extension stvorili na način koji ti omogućava dodavanje i upotrebu Presence-a koje su stvorili drugi i upravljanje njima u našem extension-u!","home.features.presencesystem.button":"Posjeti trgovinu","home.features.simpleInterface.heading":"Jednostavno korisničko sučelje","home.features.simpleInterface.description":"Dosta ti je složenih korisničkih sučelja? Zbog toga smo stvorili i nastojimo da naš UI bude što jednostavnije i korisnije uz važne značajke poput:","home.features.simpleInterface.description.1":"Postavke Aplikacije i Extension-a","home.features.simpleInterface.description.2":"Upravljanje Presence-om","home.features.simpleInterface.description.3":"Sortiraj po kategoriji","home.features.quickSupport.heading":"Brza podrška","home.features.quickSupport.description":"Nešto se pokvarilo, šalje ti gomilu pogrešaka ili jednostavno ne radi? Pomoći ćemo ti da se riješiš tih problema na našem Discord serveru, stvorili smo i vlastiti sustav podrške koji će osigurati da se tvoj problem riješi što prije moguće.","home.languageSelector.tippy":"Jezik web-stranice"}')
    }, function(e) {
        e.exports = JSON.parse('{"thankyou.title":"Szuper! Most már béta felhasználó vagy!","contributors.headings.staff":"Csapat","contributors.headings.supporters":"Támogatók","contributors.headings.translators":"Fordítók","contributors.roles.administrator":"Adminisztrátor","contributors.roles.developer":"Fejlesztő","contributors.roles.designer":"Tervező","contributors.roles.moderator":"Moderátor","contributors.roles.donator":"Támogató","contributors.roles.booster":"Booster","contributors.roles.translator":"Fordító","contributors.cards.copyUserId":"Kattints a felhasználó azonosítójának másolásához.","contributors.cards.userIdCopied":"Felhasználó ID kimásolva!","downloads.header.title":"Ideje felvágni.","downloads.instructions.heading":"Kezdő lépések","downloads.appdownloading.header":"Alkalmazás letöltése","downloads.extdownloading.header":"Bővítmény letöltése","downloads.tooltips.os.not.supported.part1":"Figyelmeztetés:","downloads.tooltips.os.not.supported.part2":"{0} Az alkalmazásnak nincs telepítője ehhez az operációs rendszerhez. Ez azt jelenti, hogy nincs hozzá professzionális támogatás.","downloads.mobile.showDownloads":"Letöltések megjelenítése","downloads.mobile.hideDownloads":"Letöltések elrejtése","downloads.latest.header":"Korai kiadások","downloads.warning.title":"Figyelmeztetés","downloads.button.skip":"Átugrás","downloads.button.back":"Vissza","downloads.button.cancel":"Mégse","downloads.button.done":"Kész","downloads.button.login":"Bejelentkezés","downloads.adsbox.thankyou.title":"Köszönjük!","downloads.adsbox.disableAdblock":"Kérlek tiltsd le az adblock-ot","downloads.showbeta.message":"Korai kiadások megjelenítése","downloads.skipanyway.message1":"Nem adakozok.","downloads.skipanyway.message2":"Biztos vagy benne?","downloads.skipanyway.message3":"Tényleg?","downloads.skipanyway.message4":"K-kérlek támogass :(","downloads.skipanyway.message5":"Szükségem van rád :<","downloads.skipanyway.message6":"Oké, oké...","error.page.details":"Részletek","user.notFound.heading":"Ez a felhasználó nem található. Próbálj megbizonyosodni a következőkről","footer.language":"Nyelv","footer.usercount.message":"Csatlakozz még ma a {0} felhasználóhoz!","footer.usercount.button":"Telepítés","footer.partners.heading":"Partnerek","footer.followUs.heading":"Kövess minket","footer.developers.heading":"Fejlesztők","footer.developers.documentation":"Dokumentáció","footer.developers.richpresence":"Állapotüzenet","footer.supportus.heading":"Támogass minket","footer.supportus.donate":"Támogatás","footer.supportus.contribute":"Hozzájárulás","footer.supportus.translate":"Fordítás","footer.supportus.jobs":"Dolgozz velünk!","footer.help.heading":"Segítség","footer.help.troubleshooting":"Hibaelhárítás","footer.help.getsupport":"Segítség kérés","footer.help.information":"Információ","footer.help.information.cookies":"Sütik","footer.help.information.privacy":"Adatvédelem","footer.help.information.terms":"Feltételek","footer.more.heading":"Továbbiak","footer.more.status":"Állapot","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} by {1}","footer.copyright.line2":"A weboldal üzemeltetője: {0}","footer.partners.more":"Kattints ide a többi partner és szponzor megtekintéséhez.","header.language":"Magyar","header.languageNotification.title":"Ez az oldal elérhető a Te nyelveden is, váltani akarsz?","header.languageNotification.text":"Az oldal le lett fordítva a nyelvedre. Ez segíthet, ha nem beszéled jól az Angol nyelvet.","header.languageNotification.btnDecline":"Nem, kösz","header.languageNotification.btnAccept":"Nyelv váltása","header.loader.phrases":"Palacsinták megsütése...;Konténerek elhelyezése...;IP cím elemzése...;UwU;Szabályok megsértése...","header.store":"Áruház","header.downloads":"Letöltések","header.contributors":"Közreműködők","header.login":"Bejelentkezés","header.lia":"Bejelentkezve mint","header.rab":"Hiba jelentése","header.staff":"Irányítópult","header.logout":"Kijelentkezés","home.introduction.button.features":"Funkciók","home.introduction.button.downloads":"Letöltések","home.examples.playingagame":"Játékban","home.examples.timestamp":"{0} van hátra","home.examples.timestamp2":"{0} eltelt","home.examples.status.playing":"Lejátszás","home.examples.status.live":"Élő közvetítés","home.examples.status.browsing":"Böngészés...","home.features.heading":"Imádni fogod ezeket a funkciókat!","home.features.presencesystem.heading":"Találd meg **saját** állapotüzeneted","home.features.simpleInterface.heading":"Egyszerű felhasználói felület","home.features.simpleInterface.description.1":"Alkalmázás és bővítmény beállítások","home.features.simpleInterface.description.2":"Állapotüzenet kezelés","home.features.quickSupport.heading":"Gyors segítség","home.languageSelector.tippy":"Weboldal nyelve","jobs.modal.buttons.next":"Következő","jobs.modal.buttons.cancel":"Mégse","jobs.benefit6.title":"Korai hozzáférés","maintenance.message":"Amíg ügyes fejlesztőink megoldják ezt a problémát, nyugodtan látogass el ide!","maintenance.statuspage":"Állapot oldal","maintenance.discordserver":"Discord szerver","partners.header.title":"Partnerek","partners.why.benefit3.title":"Meta-tag integráció","partners.requirements.title":"Követelmények","partners.apply.button":"Jelentkezz most!","partners.sponsors.title":"Szponzorok","partners.partner.crowdin":"Agilis honosítás a tech cégek számára.","partners.apply.loggedUser":"Bejelentkezve mint {0}","partners.apply.notYou":"Nem te vagy az?","partners.apply.select.default":"Kérlek válassz egyet","partners.apply.select.website":"Weboldal","partners.apply.select.other":"Egyéb","partners.apply.form.name":"Név","partners.apply.form.link":"Link","partners.apply.form.description":"Leírás: (Maximum 150 karakter)","partners.apply.form.button.close":"Bezárás","partners.apply.error1":"Kérlek, töltsd ki az összes mezőt.","partners.apply.error4":"Már jelentkeztél a partnerre.","presence.page.buttons.sourceCode":"Forráskód","presence.sections.description.title":"Leírás","presence.sections.changelog.title":"Változási napló","presence.sections.information.title":"Információ","presence.sections.information.author":"Készítő","presence.sections.information.version":"Verzió","presence.sections.information.likes":"Tetszések","presence.sections.information.users":"Felhasználók","presence.sections.information.tags":"Címkék","presence.sections.information.supportedurls":"Kapcsolódó URL címek","presence.sections.information.contributors":"Közreműködők","store.message.error":"A bővítmény nincs csatlakoztatva.","store.cards.creator":"Készítő","store.category.filters.heading":"Szűrők","store.category.heading":"Kategóriák","store.category.all":"Minden","store.category.games":"Játék","store.category.music":"Zene","store.category.other":"Egyéb","store.search":"Keresés"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Mau fitur-fitur baru?","beta.description.1":"**PreMiD Beta** sekarang tersedia untuk semuanya!","beta.features.1":"Fitur-fitur terbaru","beta.features.3":"Role spesial pada server Discord kami","beta.register.text":"Sudah siap? Gabung {0} Beta Tester lainnya!","beta.register.button":"Daftar sekarang!","thankyou.title":"Keren! Kamu sekarang pengguna beta!","thankyou.description":"Para kera-kera kami sedang berusaha memasukkan kamu ke program beta secepatnya. Terima kasih untuk mendaftar!","contributors.headings.staff":"Pengurus","contributors.headings.supporters":"Pendukung","contributors.headings.translators":"Penerjemah","contributors.roles.projectLeader":"Pemimpin Proyek","contributors.roles.staffCoordinator":"Koordinator Staf","contributors.roles.marketingDirector":"Direktur Pemasaran","contributors.roles.administrator":"Administrator","contributors.roles.reviewer":"Peninjau","contributors.roles.localizationManager":"Manajer Lokalisasi","contributors.roles.developer":"Pengembang","contributors.roles.designer":"Desainer","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Agen Bantuan","contributors.roles.representative":"Perwakilan","contributors.roles.proofreader":"Korektor","contributors.roles.donator":"Donatur","contributors.roles.booster":"Booster","contributors.roles.translator":"Penerjemah","contributors.cards.copyUserId":"Klik untuk menyalin ID pengguna.","contributors.cards.userIdCopied":"ID pengguna disalin!","downloads.header.title":"Waktunya pamer.","downloads.header.subtitle":"Gunakan PreMiD sekarang dan pamerkan apa yang kamu lakukan, mungkin kamu akan bertemu orang dengan minat yang sama.","downloads.instructions.heading":"Mulai","downloads.instructions.step.1":"Unduh PreMiD","downloads.instructions.step.2":"Pasang aplikasi kami","downloads.instructions.step.3":"Tambahkan ekstensi kami ke browsermu","downloads.instructions.step.4":"Muat ulang situs ini dan periksa jika ekstensi telah terhubung","downloads.instructions.footer":"Masih mengalami masalah? {0}","downloads.instructions.footer.link":"Kami disini untuk membantu!","downloads.appdownloading.header":"Aplikasi","downloads.extdownloading.header":"Ekstensi","downloads.tooltips.os.not.supported.part1":"Peringatan:","downloads.tooltips.os.not.supported.part2":"{0} Tidak ada installer untuk sistem operasi ini. Ini berarti tidak ada bantuan profesional untuk ini.","downloads.mobile.errorMessage":"Perlu diketahui bahwa PreMiD tidak didukung di ponsel.","downloads.mobile.showDownloads":"Tampilkan Unduhan","downloads.mobile.hideDownloads":"Sembunyikan Unduhan","downloads.warning.differentVersion":"Versi sekarang pada platform ini adalah {0} (versi ini hanya berlaku untuk Linux dan tidak berlaku pada platform lain).","downloads.warning.differentVersion2":"Versi ini khusus untuk Linux, dan tidak berlaku untuk sistem lain. Versi utama aplikasi adalah {0}","downloads.error.login":"Silahkan login untuk melihat unduhan.","downloads.error.noaccess.title":"Uh oh, sepertinya kamu tidak memiliki akses alpha/beta :(","downloads.error.noaccess.description":"Kamu dapat mengikuti program beta **disini** secara gratis. Cepat! tersisa {0} tempat","downloads.latest.header":"Rilisan Awal","downloads.warning.title":"Peringatan","downloads.warning.message.opera":"Kamu harus menginstal ekstensi **ini** untuk menginstal PreMiD dari Chrome Webstore.","downloads.button.skip":"Lewati","downloads.button.back":"Kembali","downloads.button.cancel":"Batal","downloads.button.okay":"Oke","downloads.button.done":"Selesai","downloads.button.login":"Masuk","downloads.button.skipanyway":"Lewati Saja","downloads.adsbox.thankyou.title":"Terima Kasih!","downloads.adsbox.thankyou.message":"Kami menggunakan iklan untuk membantu tim dan membiayai server kami untuk memberikan kamu pengalaman yang terbaik!","downloads.adsbox.disableAdblock":"Harap matikan adblock","downloads.showbeta.message":"Tampilkan rilisan awal","downloads.showbeta.small":"(tidak dibutuhkan jika kamu kesini hanya untuk mengunduh aplikasi biasa)","downloads.skipanyway.message1":"Saya tidak mau membantu.","downloads.skipanyway.message2":"Apakah kamu yakin?","downloads.skipanyway.message3":"Yakin?","downloads.skipanyway.message4":"M-mohon dukungannya :(","downloads.skipanyway.message5":"Aku butuh kamu :<","downloads.skipanyway.message6":"Oke, oke...","store.search.notFound":"Kami tidak bisa menemukan Presence tersebut...","error.code.404":"Maaf, kami tidak bisa menemukan halaman tersebut.","error.code.500":"Terjadi error pada server internal.","error.page.details":"Detail","error.page.button":"Kembali ke halaman awal","user.notFound.heading":"Pengguna tersebut tidak dapat ditemukan. Coba pastikan","user.notFound.message1":"user id yang kamu cari benar.","user.notFound.message2":"pengguna telah membuat cukup banyak Presence dan mendapatkan role Pengembang Presence pada server Discord kami.","footer.language":"Bahasa","footer.usercount.heading":"Siap untuk menggunakan PreMiD?","footer.usercount.message":"Bergabung {0} pengguna sekarang!","footer.usercount.button":"Pasang","footer.partners.heading":"Mitra","footer.followUs.heading":"Ikuti Kami","footer.developers.heading":"Pengembang","footer.developers.documentation":"Dokumentasi","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Dukung Kami","footer.supportus.donate":"Donasi","footer.supportus.contribute":"Kontribusi","footer.supportus.translate":"Terjemahkan","footer.supportus.jobs":"Bekerja bersama kami!","footer.help.heading":"Bantuan","footer.help.troubleshooting":"Pemecahan Masalah","footer.help.getsupport":"Dapatkan Bantuan","footer.help.information":"Informasi","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privasi","footer.help.information.terms":"Ketentuan","footer.more.heading":"Lainnya","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} oleh {1}","footer.copyright.line2":"Website dikelola oleh {0}","footer.partners.more":"Klik di sini untuk melihat mitra dan sponsor kami lainnya.","header.language":"Bahasa Indonesia","header.languageNotification.title":"Kita mendukung bahasamu, ganti bahasa?","header.languageNotification.text":"Website kami telah diterjemahkan ke dalam bahasamu. Ini mungkin bisa membantumu jika kamu kurang paham Bahasa Inggris.","header.languageNotification.btnDecline":"Tidak, terima kasih","header.languageNotification.btnAccept":"Ganti bahasa","header.loader.phrases":"Memasak pancake...;menaruh kontainer...;Memproses alamat IP kamu...;UwU;Melanggar aturan...","header.store":"Toko","header.downloads":"Unduhan","header.contributors":"Kontributor","header.login":"Masuk","header.lia":"Masuk sebagai","header.rab":"Laporkan bug","header.staff":"Dashboard","header.logout":"Keluar","home.introduction.button.features":"Fitur-fitur","home.introduction.button.downloads":"Unduhan","home.examples.playingagame":"Bermain game","home.examples.timestamp":"{0} tersisa","home.examples.timestamp2":"{0} berlalu","home.examples.status.playing":"Memutar kembali","home.examples.status.live":"Live","home.examples.status.browsing":"Menelusuri...","home.features.heading":"Kamu akan menyukai fitur ini!","home.features.presencesystem.heading":"Temukan presence **untukmu**","home.features.presencesystem.description":"Kami membuat ekstensi sedemikian rupa agar kamu dapat menggunakan Presence yang dibuat oleh pengguna lain dan mengaturnya pada ekstensi kami!","home.features.presencesystem.button":"Kunjungi toko","home.features.simpleInterface.heading":"Tampilan pengguna yang sederhana","home.features.simpleInterface.description":"Bosan dengan tampilan yang rumit? Itu sebabnya kami membuat dan berusaha menjadikan tampilan PreMiD sederhana dan seberguna mungkin dengan fitur seperti:","home.features.simpleInterface.description.1":"Pengaturan Ekstensi dan Aplikasi","home.features.simpleInterface.description.2":"Manajemen presence","home.features.simpleInterface.description.3":"Urutkan berdasar kategori","home.features.quickSupport.heading":"Dukungan cepat","home.features.quickSupport.description":"PreMiD bermasalah, mendapat banyak error atau sama sekali tidak bekerja? Kami akan membantu untuk menyelesaikan masalah tersebut pada server Discord kami, kami juga telah membuat sistem support yang akan memastikan masalahmu terselesaikan.","home.features.quickSupport.button":"Gabung Discord kami","home.languageSelector.tippy":"Bahasa situs web","jobs.modal.title":"Melamar untuk {0}","jobs.modal.step":"Langkah {0} dari 2","jobs.modal.buttons.join":"Gabung","jobs.modal.buttons.cancel":"Batal","jobs.modal.error":"Silakan isi semua kolom","jobs.guild.required":"Bergabunglah di Discord kami","jobs.guild.explanation":"Untuk dapat melamar kamu harus sudah masuk ke Server Discord kami. Jika tidak kami tidak akan bisa menghubungi kamu jika kamu terpilih!","jobs.openings.title":"Lowongan Pekerjaan","jobs.benefit4.title":"Dukung PreMiD","jobs.benefit5.description":"Santai saja. Ini adalah pekerjaan sukarela.","jobs.success.applied":"Terima kasih telah melamar!","maintenance.big":"Oh tidak!","maintenance.heading":"Sayangnya kami sedang mengalami masalah teknis. Kami akan kembali sesaat lagi. Mohon maaf atas ketidaknyamanannya.","maintenance.heading2":"Mohon kembali sesaat lagi untuk informasi lebih lanjut.","maintenance.message":"Sambil pengembang memperbaiki ini, kamu dapat melihat ini!","maintenance.statuspage":"Halaman Status","maintenance.discordserver":"Server Discord","merch.title":"Selamat datang di Toko Merchandise Resmi **PreMiD**!","merch.swag":"Temukan **Gayamu**","merch.fit":"**Pilih ukuranmu**","merch.cart":"Tambah ke keranjang","merch.help":"Mengalami masalah dengan toko atau pesanan? Hubungi {0}customer support{1} kami","merch.item.added":"{0} telah ditambahkan ke keranjang","merch.error.noitem":"Tidak ada barang di keranjang","partners.header.title":"Mitra","partners.header.description":"Bergabunglah bersama kami dan dapatkan beberapa manfaat khusus mitra untuk menunjukkan betapa kerennya dirimu.","partners.why.benefit1.description":"Tim kami akan menyediakan presence sesuai layanan kamu.","partners.why.benefit3.title":"Integrasi meta-tag","partners.why.benefit5.description":"Ditampilkan pada sosial media kami.","partners.requirements.title":"Persyaratan","partners.requirements.first.title":"Apa yang kita cari?","partners.apply.button":"Daftar sekarang!","partners.sponsors.title":"Sponsor","partners.sponsors.description":"PreMiD tidak mungkin ada, tanpa orang-orang hebat ini.","partners.partner.taigaBot":"taiga adalah Bot Discord yang menawarkan semua fitur yang mungkin kamu butuhkan!","partners.apply.loggedUser":"Masuk sebagai {0}","partners.apply.notYou":"Bukan kamu?","partners.apply.select.website":"Situs web","partners.apply.select.other":"Lainnya","partners.apply.form.name":"Nama","partners.apply.form.name.placeholder":"Contoh: PreMiD","partners.apply.form.link":"Tautan","partners.apply.form.link.placeholder":"Contoh: https://premid.app","partners.apply.form.imageLink":"Tautan gambar: (550x300, hanya PNG)","partners.apply.form.imageLink.placeholder":"Contoh: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Tutup","partners.apply.success":"Terima kasih telah melamar!","partners.apply.error1":"Silakan lengkapi semua kolom.","partners.apply.error3":"Harap tambahkan tautan (harus dimulai dengan https:// dan akhiri dengan .png)","presence.sections.description.title":"Deskripsi","presence.sections.changelog.title":"Changelog","presence.sections.information.title":"Informasi","presence.sections.information.author":"Penulis","presence.sections.information.version":"Versi","presence.sections.information.users":"Pengguna","presence.sections.information.tags":"Tag","presence.sections.information.supportedurls":"URL Didukung","presence.sections.information.contributors":"Kontributor","report.title":"Laporkan Bug","report.bugcount":"{count}/3 Laporan tersisa","report.overview":"Memberikan penjelasan singkat dan jelas tentang bug yang terjadi.","report.os":"Pilih Sistem Operasi dan Versimu","report.description":"Berikan tautan ke contoh langsung atau langkah-langkah yang jelas untuk merekayasa bug tersebut.","report.button":"Lapor","report.toomany.alert":"Kamu memiliki laporan aktif terlalu banyak.","report.error.unauth":"Akun Discord perlu diverifikasi","store.message.error":"Ekstensi tidak terhubung.","store.cards.creator":"Pembuat","store.cards.popular":"Presence ini sangat populer di seluruh pengguna.","store.cards.partner":"Presence Bermitra","store.cards.extraStepsRequired":"Presence ini membutuhkan langkah-langkah tambahan, silahkan periksa halaman presence untuk informasi lebih lanjut.","store.header.search":"Cari Presence","store.card.presence.add":"Tambah Presence","store.card.presence.remove":"Hapus Presence","store.card.presence.included":"Presence ini otomatis nyala saat mengunjungi situs.","store.category.filters.heading":"Filter","store.category.filters.mostUsed":"Paling sering digunakan","store.category.filters.allowAdult":"Tampilkan NSFW","store.category.filters.likedOnly":"Presence yang disukai","store.filters.added":"Tampilkan Presence ditambahkan","store.category.heading":"Kategori","store.category.all":"Semua","store.category.games":"Permainan","store.category.music":"Musik","store.category.socials":"Sosial","store.category.videos":"Video dan Stream","store.category.other":"Lainnya","store.search":"Cari","store.search.removeFilter":"Klik untuk menghapus filter","user.roles.presenceDeveloper":"Pengembang Presence","user.roles.presenceVerifier":"Pemeriksa Presence","user.importantPresenceDev.message1":"Pengembang Presence Penting","user.importantPresenceDev.message2":"Membuat {0} presence.","user.presences.created":"Klik di sini untuk melihat Presence yang telah dibuat oleh pengguna ini."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Viltu nýja eiginleika?","downloads.button.cancel":"Hætta","downloads.adsbox.thankyou.title":"Takk fyrir!","store.search.notFound":"Við gátum ekki fundið þá Presence...","error.code.404":"Því miður gátum við ekki fundið þessa síðu.","error.code.4":"Þú ert að leita að Presence sem ekki er til eða var eytt.","error.code.500":"Villa kom upp við innri netþjón.","error.page.details":"Upplýsingar","error.page.button":"Til baka til heimasíðuna","user.notFound.heading":"Ekki var hægt að finna þann notanda. Reyndu að ganga úr skugga um það","user.notFound.message1":"að auðkenni notandans sem þú ert að leita að sé rétt.","user.notFound.message2":"að notandinn hafi búið til nóg af Presences og hafi Presence Developer role á Discord netþjóninum okkar.","user.notFound.message3":"ef aðrir lenda í sama vandræðum á Discord netþjóninum okkar.","user.notFound.message4":"Ef þú telur að þetta hafi verið mistök, vinsamlegast hafðu samband við okkur á [okkar Discord server].","footer.language":"Tungumál","footer.usercount.heading":"Tilbúinn að nota PreMiD?","footer.usercount.message":"Vertu með {0} notendum í dag!","footer.usercount.button":"Setja upp","footer.partners.heading":"Samstarfsaðilar","footer.followUs.heading":"Fylgdu okkur","footer.developers.heading":"Verktakar","footer.developers.documentation":"Skjal","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Sýndu okkur stuðning","footer.supportus.donate":"Styrkja","footer.supportus.contribute":"Bjóða fram","footer.supportus.translate":"Þýða","footer.supportus.jobs":"Vinnið með okkur!","footer.help.heading":"Hjálp","footer.help.troubleshooting":"Leysa vandamál","footer.help.getsupport":"Fá hjálp","footer.help.information":"Upplýsingar","footer.help.information.cookies":"Vefkökur","footer.help.information.privacy":"Persónuvernd","footer.help.information.terms":"Skilmálar","footer.more.heading":"Meira","footer.more.status":"Staða","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} eftir {1}","footer.copyright.line2":"Vefsíða viðhaldin af {0}","footer.partners.more":"Smelltu hér til að sjá restina af samstarfsaðilum okkar og styrktaraðilum.","header.language":"Íslenska","header.languageNotification.title":"Við styðjum tungumálið þitt, viltu skipta?","header.languageNotification.text":"Vefsíða okkar hefur verið þýdd á þitt tungumál. Þetta gæti hjálpað til ef þú talar ekki ensku voða vel.","header.languageNotification.btnDecline":"Nei, takk","header.languageNotification.btnAccept":"Skipta um tungumál","header.loader.phrases":"Baka pönnukökur..;Setur gáma...;Parar IP-tölu þína...;UwU;Brýtur reglur...;Þurrkar harða diskinn þinn...","header.store":"Verslun","header.downloads":"Niðurhöl","header.contributors":"Þátttakendur","header.lia":"Skráður inn sem","header.rab":"Tilkynna galla","header.staff":"Stjórnborð","header.logout":"Útskráning","home.introduction.paragraph":"**PreMiD** er einfalt, stillanlegt tól sem gerir þér kleift að sýna hvað þú ert að gera á vefnum í Discord núna að spila stöðu.","home.introduction.button.features":"Eiginleikar","home.introduction.button.downloads":"Niðurhöl","home.examples.playingagame":"Að spila leik","home.examples.timestamp":"{0} eftir","home.examples.timestamp2":"{0} liðinn","home.examples.status.playing":"Spila","home.examples.status.live":"Útsending","home.examples.status.browsing":"Skoðar...","home.features.heading":"Þú munt elska þessa eiginleika!","home.features.presencesystem.heading":"Finndu **þína** presence","home.features.presencesystem.description":"Við bjuggum til viðbótina okkar á þann hátt sem gerir þér kleift að bæta við og nota Presences búnar til af öðrum og stjórna þeim í viðbótinni okkar!","home.features.presencesystem.button":"Heimsækja verslun","home.features.simpleInterface.heading":"Einfalt notenda-viðmót","home.features.simpleInterface.description":"Þreyttur á flóknum notenda-viðmótum? Þess vegna bjuggum við til og reynum að halda UI okkar eins einfalt og gagnlegt og mögulegt er með mikilvægum eiginleikum eins og:","home.features.simpleInterface.description.1":"Stillingar forrits og viðbóta","home.features.simpleInterface.description.2":"Presence stjórnun","home.features.simpleInterface.description.3":"Raða eftir flokkum","home.features.quickSupport.heading":"Hjálp","home.features.quickSupport.description":"Eitthvað er bilað, sendir þér helling af villum eða einfaldlega virkar ekki? Við munum hjálpa þér að losa þig við þessi mál á Discord server-inum okkar, við bjuggum til okkar eigið stuðningskerfi sem mun tryggja að vandamálið þitt leysist eins fljótt og hægt er.","home.features.quickSupport.button":"Taktu þátt á Discord","home.languageSelector.tippy":"Tungumál","jobs.modal.title":"Sækja um {0}","jobs.modal.step":"Skref {0} af 2","jobs.modal.buttons.next":"Næst","jobs.modal.buttons.join":"Taka þátt","jobs.modal.buttons.cancel":"Hætta","jobs.modal.error":"Vinsamlegast fylltu alla reiti","jobs.modal.notice":"PreMiD er opið verkefni sem þýðir að við erum sjálfseignarhópur, hvert framlag eða verndarfé fer aftur í vöruna. Með því að sækja um starf hjá PreMiD viðurkennir þú að þú ert sjálfboðaliði í teyminu, þér verður ekki borgað fyrir vinnu þína.","jobs.guild.required":"Taktu þátt á Discord","jobs.guild.explanation":"Til að geta sótt um vinnu þarftu að hafa tekið þátt á Discord server-inum okkar. Annars getum við ekki haft samband við þig ef þú verður valinn!","jobs.header.title":"Vinna fyrir PreMiD","jobs.header.description":"Ertu tilbúinn til að hjálpa til við stærsta Rich-Presence forritið?","jobs.openings.title":"Atvinnu tækifæri","jobs.benefits.title":"High-End Kostir","jobs.benefit1.title":"Hittu okkur","jobs.benefit1.description":"Hafðu samband við fólkið á bak við PreMiD.","jobs.benefit2.title":"Sneak Peeks","jobs.benefit2.description":"Skoðaðu þróun okkar og markaðssetningu.","jobs.benefit3.title":"Heiður","jobs.benefit3.description":"Öflugar Discord heimildir og litríkt role.","jobs.benefit4.title":"Styðja PreMiD","jobs.benefit4.description":"Með framlagi þínu er mögulegt að keyra þetta verkefni.","jobs.benefit5.title":"Hlé","jobs.benefit5.description":"Taktu þinn tíma. Þetta er sjálfboðavinna.","jobs.benefit6.title":"Snemmur aðgangur","jobs.benefit6.description":"Prófaðu nýja eiginleika áður en einhver annar.","jobs.success.applied":"Takk fyrir að sækja um!","jobs.errors.alreadyApplied":"Þú hefur þegar sótt um áður!","maintenance.heading":"Því miður erum við í tæknilegum erfiðleikum. Við munum koma aftur innan skamms. Afsakið óþægindin.","maintenance.heading2":"Vinsamlegast komdu aftur seinna til að fá frekari upplýsingar.","maintenance.message":"Þangað til sérstakir verktakar okkar laga þetta, ekki hika við að kíkja hér!","maintenance.statuspage":"Status Page","maintenance.discordserver":"Discord Server","partners.header.title":"Samstarfsaðilar","partners.header.description":"Vertu með í frægðinni og fáðu ávinning af einni félaga til að sýna fram á hversu mikið þú hefur af þér.","partners.slideshow.description":"Þau tilheyra okkur þegar","partners.why.title":"Hvernig væri að fara til himna í stað helvítis?","partners.why.benefit1.title":"Ókeypis Presence","partners.why.benefit1.description":"Lið okkar mun veita þér Presence fyrir þjónustu þína.","partners.why.benefit2.title":"Vertu staðfestur","partners.why.benefit2.description":"Sérstakt hlutverk og mikill heiður verður þér veitt á Discord netþjóninum okkar.","partners.why.benefit3.title":"Meta-tag integration","partners.why.benefit3.description":"Notar sjálfkrafa Presence þína þegar einhver er að heimsækja vefsíðuna þína.","partners.why.benefit4.title":"Vertu ódauðlegur","partners.why.benefit4.description":"Ógeðslegur staður á félagasíðunni okkar.","partners.why.benefit5.title":"Vertu frægur","partners.why.benefit5.description":"Er á samfélagsmiðlum okkar.","partners.requirements.first.title":"Hvað erum við að leita að?","partners.apply.select.other":"Annað","partners.apply.success":"Takk fyrir að sækja um!","presence.page.buttons.sourceCode":"Upprunakóði","presence.sections.description.title":"Lýsing","presence.sections.changelog.title":"Breytingaskrá","presence.sections.information.title":"Upplýsingar","presence.sections.information.author":"Höfundur","presence.sections.information.version":"Útgáfa","presence.sections.information.users":"Notendur","presence.sections.information.tags":"Merki","presence.sections.information.supportedurls":"Studd vefslóð","presence.sections.information.contributors":"Þátttakendur","store.message.error":"Viðbygging ekki tengd.","store.cards.creator":"Höfundur","store.cards.popular":"Þessi Presence er mjög vinsæl hjá notendum.","store.cards.partner":"Samstarfsaðili Presence","store.cards.extraStepsRequired":"Þessi Presence krefst viðbótarskrefa, vinsamlegast athugaðu síðuna hennar fyrir frekari upplýsingar.","store.header.search":"Leitaðu Presence","store.card.presence.add":"Bættu Presence","store.card.presence.remove":"Fjarlægðu Presence","store.card.presence.included":"Þessi Presence er sjálfkrafa virk þegar þú heimsækir vefinn sinn.","store.category.filters.heading":"Síur","store.category.filters.mostUsed":"Mest notað fyrst","store.category.filters.allowAdult":"Sýna NSFW","store.category.filters.likedOnly":"Líkaði aðeins Presences","store.filters.added":"Sýna bættar Presences","store.category.heading":"Flokkar","store.category.games":"Leikir","store.category.socials":"Samskiptamiðlar","store.category.videos":"Myndskeið og straumar","store.category.other":"Annað","store.search":"Leita","store.search.filters":"Enter","store.search.removeFilter":"Smelltu til að fjarlægja síu","user.roles.presenceDeveloper":"Presence Hönnuður","user.roles.presenceVerifier":"Presence Verifier","user.importantPresenceDev.message1":"Mikilvægur Presence Hönnuður","user.importantPresenceDev.message2":"Bjó til {0} presences.","user.geniusPresenceDev.message1":"Snillingur Presence Hönnuður","user.geniusPresenceDev.message2":"Bjó til yfir {0} presences!","user.switch.contributed":"Notandi [Presences/þáttakandi]","user.presences.created":"Smelltu hér til að sýna Presences sem þessi notandi hefur búið til.","user.presences.contributed":"Smelltu hér til að sýna Presences sem þessi notandi hefur tekið þátt í."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Desideri nuove funzionalità?","beta.description.1":"**PreMiD Beta** è ora disponibile per tutti!","beta.description.2":"Cosa otterrai se ti iscrivi?","beta.features.1":"Ultime funzionalità","beta.features.2":"Accesso ai canali di testo super segreti di PreMiD","beta.features.3":"Un ruolo speciale nel nostro server Discord","beta.register.text":"Sei Pronto? Unisciti ad altri {0} Beta Tester!","beta.register.button":"Registrati ora!","thankyou.title":"Fantastico! Ora sei un utente beta!","thankyou.description":"Le nostre scimmie stanno lavorando per farti entrare nel nostro programma beta il più velocemente possibile. Grazie per esserti registrato!","error.noslots":"Sembra che non abbiamo più posti beta disponibili.","contributors.headings.staff":"Staff","contributors.headings.supporters":"Sostenitori","contributors.headings.translators":"Traduttori","contributors.roles.projectLeader":"Responsabile di progetto","contributors.roles.staffCoordinator":"Coordinatore Staff","contributors.roles.marketingDirector":"Direttore Del Marketing","contributors.roles.administrator":"Amministratore","contributors.roles.reviewer":"Revisore","contributors.roles.localizationManager":"Responsabile della localizzazione","contributors.roles.developer":"Sviluppatore","contributors.roles.designer":"Designer","contributors.roles.moderator":"Moderatore","contributors.roles.supportAgent":"Referente Assistenza","contributors.roles.representative":"Rappresentante","contributors.roles.proofreader":"Correttore di bozze","contributors.roles.donator":"Donatore","contributors.roles.booster":"Booster","contributors.roles.translator":"Traduttore","contributors.cards.copyUserId":"Clicca per copiare l’ID dell\'utente.","contributors.cards.userIdCopied":"ID dell\'utente copiato!","downloads.header.title":"È ora di mettersi in mostra.","downloads.header.subtitle":"Inizia ad usare ora PreMiD e mostra ai tuoi amici cosa stai facendo, forse potrai trovare qualcuno con i tuoi stessi interessi.","downloads.instructions.heading":"Inizia Ora","downloads.instructions.step.1":"Scarica PreMiD","downloads.instructions.step.2":"Installa la nostra applicazione","downloads.instructions.step.3":"Aggiungi la nostra Estensione al tuo browser","downloads.instructions.step.4":"Ricarica la pagina e controlla se l\'estensione è connessa","downloads.instructions.footer":"Incontri ancora problemi? {0}","downloads.instructions.footer.link":"Siamo qui per aiutarti!","downloads.appdownloading.header":"Applicazione","downloads.extdownloading.header":"Estensione","downloads.tooltips.os.not.supported.part1":"Attenzione:","downloads.tooltips.os.not.supported.part2":"{0} Non c\'è un installer per questo sistema operativo. Questo significa che non c\'è supporto professionale per questo sistema.","downloads.mobile.errorMessage":"Si prega di notare che PreMiD non è attualmente supportato su dispositivi mobili.","downloads.mobile.showDownloads":"Mostra i Download","downloads.mobile.hideDownloads":"Nascondi i Download","downloads.warning.differentVersion":"La versione attuale per questo sistema operativo è {0} (questa versione è specifica per Linux e non si applica ad altri sistemi operativi).","downloads.warning.differentVersion2":"Questa versione è specifica per Linux e non si applica ad altri sistemi. La versione principale dell\'applicazione è {0}","downloads.error.login":"Per favore, accedi per vedere questi download.","downloads.error.noaccess.title":"Uh oh, sembra che tu non abbia l\'accesso all\'alfa/beta :(","downloads.error.noaccess.description":"Puoi partecipare al nostro programma beta **qui** gratuitamente. Affrettati! Abbiamo solo altri {0} posti disponibili","downloads.latest.header":"Rilasci anticipati","downloads.warning.title":"Avvertenza","downloads.warning.message.opera":"Devi installare **questa** estensione dal Chrome Webstore per poter installare PreMiD.","downloads.button.skip":"Salta","downloads.button.back":"Indietro","downloads.button.cancel":"Annulla","downloads.button.okay":"Ok","downloads.button.done":"Fatto","downloads.button.login":"Accedi","downloads.button.skipanyway":"Salta comunque","downloads.adsbox.thankyou.title":"Grazie!","downloads.adsbox.thankyou.message":"Utilizziamo annunci pubblicitari per supportare il nostro team e mantenere i nostri server per offrirti la migliore esperienza utente!","downloads.adsbox.disableAdblock":"Per favore disattiva il tuo adblock","downloads.showbeta.message":"Mostra le versioni beta","downloads.showbeta.small":"(non necessario se sei qui solo per scaricare l\'applicazione standard)","downloads.skipanyway.message1":"Non voglio supportare.","downloads.skipanyway.message2":"Sei sicuro?","downloads.skipanyway.message3":"Davvero?","downloads.skipanyway.message4":"P-per favore supportaci :(","downloads.skipanyway.message5":"Ho bisogno di te :<","downloads.skipanyway.message6":"Okay, okay...","store.search.notFound":"Non siamo riusciti a trovare quella Presence...","error.code.404":"Siamo spiacenti, non abbiamo trovato quella pagina.","error.code.4":"Stai cercando una Presence inesistente o eliminata.","error.code.500":"Si è verificato un errore interno al server.","error.page.details":"Dettagli","error.page.button":"Torna alla pagina iniziale","user.notFound.heading":"Questo utente non è stato trovato. Prova ad assicurarti che","user.notFound.message1":"l\'ID dell\'utente che stai cercando è corretto.","user.notFound.message2":"l\'utente ha creato abbastanza Presence ed ha il ruolo di sviluppatore di Presence nel nostro server Discord.","user.notFound.message3":"se altri stanno riscontrando lo stesso problema sul nostro server Discord.","user.notFound.message4":"Se ritieni che fosse un errore, per favore contattaci nel [nostro server Discord].","footer.language":"Lingua","footer.usercount.heading":"Pronto a provare PreMiD?","footer.usercount.message":"Unisciti ora ad oltre {0} utenti!","footer.usercount.button":"Installa","footer.partners.heading":"Partner","footer.followUs.heading":"Seguici","footer.developers.heading":"Sviluppatori","footer.developers.documentation":"Documentazione","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Supportaci","footer.supportus.donate":"Dona","footer.supportus.contribute":"Contribuisci","footer.supportus.translate":"Traduci","footer.supportus.jobs":"Lavora con noi!","footer.help.heading":"Aiuto","footer.help.troubleshooting":"Risoluzione dei problemi","footer.help.getsupport":"Richiedi Supporto","footer.help.information":"Informazione","footer.help.information.cookies":"Cookie","footer.help.information.privacy":"Privacy","footer.help.information.terms":"Termini di Servizio","footer.more.heading":"Di più","footer.more.status":"Stato","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} creato da {1}","footer.copyright.line2":"Sito curato da {0}","footer.partners.more":"Clicca qui per vedere il resto dei nostri partner e sponsor.","header.language":"Italiano","header.languageNotification.title":"Supportiamo la tua lingua, vuoi cambiarla?","header.languageNotification.text":"Il nostro sito è stato tradotto nella tua lingua. Potrebbe aiutarti nel caso non parlassi bene l\'Inglese.","header.languageNotification.btnDecline":"No, grazie","header.languageNotification.btnAccept":"Cambia lingua","header.loader.phrases":"Cucinando pancake...;Ordinando i recipienti...;Analizzando il tuo indirizzo IP...;UwU;Infrangendo le regole...","header.store":"Store","header.downloads":"Download","header.contributors":"Collaboratori","header.login":"Accedi","header.lia":"Accesso effettuato come","header.rab":"Segnala un bug","header.staff":"Pannello di controllo","header.logout":"Disconnettiti","home.introduction.paragraph":"**PreMiD** è un\'utility semplice e configurabile che ti permette di mostrare la tua attività web direttamente nel tuo stato di Discord.","home.introduction.button.features":"Caratteristiche","home.introduction.button.downloads":"Download","home.examples.playingagame":"Giocando ad un gioco","home.examples.timestamp":"{0} rimasti","home.examples.timestamp2":"{0} trascorsi","home.examples.status.playing":"In riproduzione","home.examples.status.live":"In diretta","home.examples.status.browsing":"Navigando...","home.features.heading":"Amerai queste funzioni!","home.features.presencesystem.heading":"Cerca la **tua** presence","home.features.presencesystem.description":"Abbiamo sviluppato la nostra estensione in modo che ti permetta di aggiungere, utilizzare e gestire le Presence create da altri utenti direttamente in PreMiD!","home.features.presencesystem.button":"Visita lo store","home.features.simpleInterface.heading":"Semplice interfaccia utente","home.features.simpleInterface.description":"Stanco di complesse interfacce utenti? Per questo motivo abbiamo creato e cerchiamo di mantenere la nostra interfaccia utente il più semplice e utile possibile con caratteristiche importanti come:","home.features.simpleInterface.description.1":"Impostazioni dell\'Applicazione e dell\'Estensione","home.features.simpleInterface.description.2":"Gestione presence","home.features.simpleInterface.description.3":"Ordina per categoria","home.features.quickSupport.heading":"Supporto veloce","home.features.quickSupport.description":"C\'è qualcosa che è glitchato, ti manda tanti errori o semplicemente non funziona? Ti aiuteremo a risolvere questi problemi sul nostro server Discord, abbiamo anche creato il nostro sistema di supporto personale che assicurerà che il problema venga risolto il più presto possibile.","home.features.quickSupport.button":"Unisciti al nostro Discord","home.languageSelector.tippy":"Lingua del sito","jobs.modal.title":"Candidati per {0}","jobs.modal.step":"Passo {0} di 2","jobs.modal.buttons.next":"Prossimo","jobs.modal.buttons.join":"Entra","jobs.modal.buttons.cancel":"Cancella","jobs.modal.error":"Per favore, completa tutti i campi","jobs.modal.notice":"PreMiD è un progetto open-source, ovvero un team no-profit. Per ogni donazione o patreon il ricavato verrà investito nel prodotto. Candidandoti per una posizione di lavoro a PreMiD, acconsenti di partecipare volontariamente nel team, poiché non verrà assegnato alcun compenso per il lavoro svolto.","jobs.guild.required":"Unisciti al nostro Discord","jobs.guild.explanation":"Per essere in grado di candidarti, devi essere entrato nel nostro server Discord. Altrimenti non saremo in grado di contattarti se fossi scelto!","jobs.header.title":"Lavora per PreMiD","jobs.header.description":"Sei pronto a dare una mano al più grande programma di Rich Presence?","jobs.openings.title":"Lavori disponibili","jobs.benefits.title":"Benefici di qualità","jobs.benefit1.title":"Incontraci","jobs.benefit1.description":"Mettiti in contatto con le persone dietro PreMiD.","jobs.benefit2.title":"Anticipazioni","jobs.benefit2.description":"Dai un\'occhiata al nostro Sviluppo e Marketing.","jobs.benefit3.title":"Onore","jobs.benefit3.description":"Efficaci autorizzazioni su Discord ed un ruolo colorato.","jobs.benefit4.title":"Supporta PreMiD","jobs.benefit4.description":"Con il tuo contributo è possibile proseguire con questo progetto.","jobs.benefit5.title":"Tempo scaduto","jobs.benefit5.description":"Prenditi il tuo tempo. Si tratta di un lavoro volontario.","jobs.benefit6.title":"Accesso anticipato","jobs.benefit6.description":"Prova nuove funzioni prima di qualcun altro.","jobs.success.applied":"Grazie per esserti candidato!","jobs.errors.alreadyApplied":"Ti sei già candidato precedentemente!","maintenance.big":"Oh no!","maintenance.heading":"Sfortunatamente stiamo riscontrando problemi tecnici. Torneremo a breve. Ci scusiamo per l\'inconveniente.","maintenance.heading2":"Per favore, torna più tardi per maggiori informazioni.","maintenance.message":"Fino a quando i nostri sviluppatori speciali non risolveranno la questione sentiti libero di dare un\'occhiata qui!","maintenance.statuspage":"Pagina di Stato","maintenance.discordserver":"Server Discord","merch.title":"Benvenuto nel negozio ufficiale di **PreMiD**!","merch.swag":"Trova il tuo **Swag**","merch.fit":"**Scegli la tua taglia**","merch.cart":"Aggiungi al carrello","merch.help":"Hai problemi con il nostro negozio o con un ordine? Contatta il nostro {0}supporto clienti{1}","merch.item.added":"{0} è stato aggiunto al carrello","merch.error.noitem":"Nessun elemento da aggiungere al tuo carrello","partners.header.title":"Partner","partners.header.description":"Unisciti alla famiglia e ottieni alcuni vantaggi riservati ai partner per mostrare quanto sei swag.","partners.slideshow.description":"Questi già ci appartengono","partners.why.title":"Che ne dici di andare in paradiso invece che all\'inferno?","partners.why.benefit1.title":"La tua presenza gratuita","partners.why.benefit1.description":"Il nostro team ti fornirà una Presenza del tuo servizio web.","partners.why.benefit2.title":"Diventa verificato","partners.why.benefit2.description":"Un ruolo speciale e un grande onore ti verranno assegnati nel nostro server Discord.","partners.why.benefit3.title":"Integrazione con Meta-tag","partners.why.benefit3.description":"Attiva automaticamente la tua presenza quando qualcuno visita il tuo sito Web.","partners.why.benefit4.title":"Immortalati","partners.why.benefit4.description":"Un brutto posto sulla nostra pagina dei partner.","partners.why.benefit5.title":"Diventa famoso","partners.why.benefit5.description":"In primo piano sui nostri social.","partners.requirements.title":"Requisiti","partners.requirements.first.title":"Che cosa stiamo cercando?","partners.requirements.first.description":"Teniamo d\'occhio le comunità in crescita e le cose interessanti su Internet. TL;DR, dovresti già utilizzare PreMiD ed essere pronto a diffonderlo ad ancora più maniaci di Internet. L\'accettazione al programma è estremamente qualitativa e varierà da un candidato all\'altro.","partners.requirements.second.title":"Il nostro firewall","partners.requirements.second.description":"Stiamo attualmente accettando vari tipi di lavori nel nostro programma di partnership. Chiunque dovrebbe avere la possibilità di essere notato. Gli streamer Twitch devono avere almeno 500 follower e almeno 10 spettatori simultanei. Dovrai essere in diretta almeno 1 volta a settimana.","partners.apply.button":"Applica ora!","partners.apply.disclaimer":"Andiamo in paradiso insieme!","partners.apply.jobs":"Se sei piuttosto interessato ad un lavoro diretto presso PreMiD, dai un\'occhiata ai nostri **annuncio di lavoro**.","partners.sponsors.title":"Sponsor","partners.sponsors.description":"PreMiD non sarebbe possibile senza queste persone straordinarie.","partners.partner.aniFlix":"Ecco come guardi gli anime.","partners.partner.arenaOfKings":"Arena of Kings è un frenetico gioco PvP Arena di nuova generazione giocato nel browser.","partners.partner.upBeat":"UpBeat è una radio internazionale senza scopo di lucro che si impegna a fornire radio di qualità e intrattenimento senza sosta.","partners.partner.simLiveRadio":"SimLiveRadio è la radio di infotainment di maggior successo per i giochi di simulazione in Germania, Austria e Svizzera!","partners.partner.discordTemplates":"Inizia a creare la tua comunità con i nostri fantastici modelli. Costruisci il tuo regno.","partners.partner.taigaBot":"taiga è un bot di Discord che cerca di offrire tutte le funzionalità di cui hai bisogno in una volta!","partners.partner.bitRock":"Uno strumento di creazione di programmi di installazione multipiattaforma potente e facile da usare.","partners.partner.statusPage":"Comunica facilmente lo stato in tempo reale ai tuoi utenti.","partners.partner.erisly":"Una dea che gioca come un divertente bot di Discord!","partners.partner.reyfm":"REYFM vi permette di ascoltare 15+ stream musicali gratis - senza interruzioni. Con la migliore e più recente musica solo per te!","partners.partner.crowdin":"Localizzazione agile per aziende tecnologiche.","partners.partner.wikijs":"Il Software Wiki open source più potente ed estensivo.","partners.partner.packageCloud":"Un unica e amichevole interfaccia per tutti i tuoi artefatti.","partners.partner.fastly":"Dietro il meglio del web.","partners.partner.onlyhit":"OnlyHit è la tua stazione radio di musica online fatta per riprodurre le tue migliori canzoni 24/7 e per farti scoprire le tue canzoni future.","partners.apply.title":"Domanda per essere un partner","partners.apply.loggedUser":"Collegato come {0}","partners.apply.notYou":"Non sei tu?","partners.apply.select.default":"Seleziona","partners.apply.select.website":"Sito Web","partners.apply.select.other":"Altro","partners.apply.form.name":"Nome","partners.apply.form.name.placeholder":"Es: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Es: https://premid.app","partners.apply.form.description":"Descrizione: (Massimo 150 caratteri)","partners.apply.form.description.placeholder":"Descrizione per le presentazioni","partners.apply.form.imageLink":"Link immagine: (550x300, solo PNG)","partners.apply.form.imageLink.placeholder":"Es: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Chiudi","partners.apply.form.button.apply":"Applica","partners.apply.success":"Grazie per esserti candidato!","partners.apply.error1":"Per favore, completa tutti i campi.","partners.apply.error2":"Descrizione massima di 150 caratteri.","partners.apply.error3":"Si prega di aggiungere un link (deve iniziare con https:// e terminare con .png)","partners.apply.error4":"Hai già fatto domanda per partner.","presence.page.buttons.sourceCode":"Codice sorgente","presence.sections.description.title":"Descrizione","presence.sections.changelog.title":"Registro delle modifiche","presence.sections.information.title":"Informazioni","presence.sections.information.author":"Autore","presence.sections.information.version":"Versione","presence.sections.information.likes":"Mi piace","presence.sections.information.users":"Utenti","presence.sections.information.tags":"Tag","presence.sections.information.supportedurls":"URL supportati","presence.sections.information.contributors":"Collaboratori","store.message.error":"Estensione non connessa.","store.cards.creator":"Autore","store.cards.popular":"Questa Presence è molto popolare tra gli utenti.","store.cards.partner":"Presence Partner","store.cards.extraStepsRequired":"Questa presence richiede dei passi aggiuntivi per poter funzionare, per favore consulta la sua pagina per ulteriori informazioni.","store.header.search":"Cerca Presence","store.card.presence.add":"Aggiungi Presence","store.card.presence.remove":"Rimuovi Presence","store.card.presence.included":"Questa Presence si attiva automaticamente dopo aver visitato il proprio sito web.","store.category.filters.heading":"Filtri","store.category.filters.mostUsed":"Più utilizzate","store.category.filters.allowAdult":"Mostra NSFW","store.category.filters.likedOnly":"Solo le Presence piaciute","store.filters.added":"Mostra le Presence aggiunte","store.category.heading":"Categorie","store.category.all":"Tutto","store.category.games":"Giochi","store.category.music":"Musica","store.category.socials":"Social","store.category.videos":"Video & Dirette","store.category.other":"Altro","store.search":"Cerca","store.search.filters":"Invio","store.search.removeFilter":"Clicca per rimuovere il filtro","user.roles.presenceDeveloper":"Sviluppatore Presence","user.roles.presenceVerifier":"Esaminatore Presence","user.importantPresenceDev.message1":"Sviluppatore importante di Presence","user.importantPresenceDev.message2":"Create {0} presenze.","user.geniusPresenceDev.message1":"Sviluppatore geniale di Presence","user.geniusPresenceDev.message2":"Oltre 100 Presence create!","user.switch.contributed":"Utente [Presence/contributi]","user.presences.created":"Clicca qui per mostrare le Presence che questo utente ha creato.","user.presences.contributed":"Clicca qui per mostrare le presence a cui questo utente ha contribuito."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"新機能が欲しいかい？","beta.description.1":"**PreMiD Beta**が、誰でも使えるようになりました！","beta.description.2":"登録したら何がもらえるの？","beta.features.1":"最新の機能","beta.features.2":"PreMiDの超秘密のテキストチャンネル","beta.features.3":"Discordサーバー内での特別なロール","beta.register.text":"準備はいい？ {0}人のベータテスターに加わろう！","beta.register.button":"今すぐ登録しよう！","thankyou.title":"ベータユーザーになりました！","thankyou.description":"ベータプログラムに登録していただき、ありがとうございます！\\n承認されるまでには時間がかかる場合があります。","error.noslots":"ベータの空き枠が現在はないようです。","contributors.headings.staff":"スタッフ","contributors.headings.supporters":"サポーター","contributors.headings.translators":"翻訳者","contributors.roles.administrator":"管理者","contributors.roles.moderator":"モデレーター","contributors.roles.supportAgent":"サポートエージェント","contributors.roles.proofreader":"校正者","contributors.roles.donator":"寄付者","contributors.roles.booster":"Nitroブースター","contributors.roles.translator":"翻訳者","contributors.cards.copyUserId":"クリックでユーザー名をコピー","contributors.cards.userIdCopied":"コピーした！","downloads.header.title":"自己紹介のお時間です。","downloads.header.subtitle":"PreMiDを使って、見ているものや聞いているものを他の人に見せびらかしましょう。同じ趣味を持った人を見つけられるかも…？","downloads.instructions.heading":"はじめよう","downloads.instructions.step.1":"PreMiDをダウンロード","downloads.instructions.step.2":"アプリケーションをインストール","downloads.instructions.step.3":"ブラウザに拡張機能を追加する","downloads.instructions.step.4":"このページを再読み込み(F5)して、拡張機能が接続されているか確認する。","downloads.instructions.footer":"まだ問題が解決しませんか？{0}","downloads.instructions.footer.link":"お手伝いいたします","downloads.appdownloading.header":"アプリのダウンロード","downloads.extdownloading.header":"拡張機能のダウンロード","downloads.tooltips.os.not.supported.part1":"注意","downloads.tooltips.os.not.supported.part2":"{0}アプリにはこのOS用のインストーラーがありません。 つまりこの環境に対しての専門的なサポートはありません。","downloads.mobile.errorMessage":"PreMiDはスマートフォンには対応していません。","downloads.mobile.showDownloads":"表示する","downloads.mobile.hideDownloads":"非表示にする","downloads.warning.differentVersion":"このプラットフォームの現在のバージョンは {0} です。(このバージョンは Linux に固有で、他のプラットフォームには適用されません)","downloads.warning.differentVersion2":"このバージョンは Linux に固有で、他のシステムには適用されません。アプリケーションのメインバージョンは {0} です。","downloads.error.login":"これらのダウンロードを見るには、ログインしてください。","downloads.error.noaccess.title":"Alpha/Betaテストに参加する権限がありません。","downloads.error.noaccess.description":"ベータプログラムに **ここから** 無料で参加できます！現在、{0} 個の空き枠があります！","downloads.latest.header":"早期リリース","downloads.warning.title":"注意","downloads.warning.message.opera":"ストアからPreMiDをインストールするには、**この拡張機能**をインストールする必要があります。","downloads.button.skip":"スキップ","downloads.button.back":"戻る","downloads.button.cancel":"キャンセル","downloads.button.okay":"OK","downloads.button.done":"完了","downloads.button.login":"ログイン","downloads.adsbox.thankyou.title":"Thank you!","downloads.adsbox.thankyou.message":"私たちは広告を使用して、最高のユーザーエクスペリエンスを提供しています！\\n（ダウンロードするには、右上のスキップボタンをクリックしてください。）","downloads.adsbox.disableAdblock":"広告ブロッカーを無効にしてください。","downloads.showbeta.small":"（通常版をダウンロードするために、ここにいる必要はありません。）","downloads.skipanyway.message1":"サポートしないでダウンロードする","downloads.skipanyway.message2":"本当によろしいですか？","downloads.skipanyway.message3":"本当に？","downloads.skipanyway.message4":"お願いです…","downloads.skipanyway.message5":"あなたの力が必要なんです…","downloads.skipanyway.message6":"わかりました…","store.search.notFound":"プレゼンスが見つかりませんでした。","error.code.404":"ページが見つかりませんでした。","error.code.500":"内部サーバーでエラーが発生しました。","error.page.details":"詳細","error.page.button":"ホームページに戻る","user.notFound.heading":"ユーザーを見つけられませんでした。以下のことを確認してみてください。","user.notFound.message1":"探しているユーザーIDは合っています。","user.notFound.message2":"ユーザーが十分なプレゼンスを作成し、Discordサーバーでプレゼンス開発者の役割を持っていること。","user.notFound.message3":"PreMiDのDiscordサーバーで他の人に同じ現象が起こっているかを確認してください。","user.notFound.message4":"これがバグである場合、[PreMiDのDiscordサーバー] から報告してください","footer.language":"言語","footer.usercount.heading":"PreMiDを試してみない？","footer.usercount.message":"{0} 人の中に加わろう!","footer.usercount.button":"インストール","footer.partners.heading":"パートナー","footer.followUs.heading":"SNS","footer.developers.heading":"開発者","footer.developers.documentation":"ドキュメント","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"PreMiDを支援","footer.supportus.donate":"寄付","footer.supportus.contribute":"コントリビュート","footer.supportus.translate":"翻訳","footer.supportus.jobs":"一緒に働く","footer.help.heading":"ヘルプ","footer.help.troubleshooting":"トラブルシューティング","footer.help.getsupport":"サポート","footer.help.information":"インフォメーション","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"プライバシーポリシー","footer.help.information.terms":"利用規約","footer.more.heading":"もっと","footer.more.status":"ステータス","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} by {1}","footer.copyright.line2":"Website maintained by {0}","footer.partners.more":"他のパートナーやスポンサーを見てみる","header.language":"日本語","header.languageNotification.title":"このサイトは日本語に対応しています。切り替えますか？","header.languageNotification.text":"このウェブサイトは日本語に翻訳されています。 英語があまり得意ではない場合は役に立つでしょう。","header.languageNotification.btnDecline":"No, thanks","header.languageNotification.btnAccept":"言語を選択","header.loader.phrases":"パンケーキを焼いています…;荷物を運んでいます…;IPアドレスを解析しています…;（˘ω˘） ;ルールを破壊しています…","header.store":"ストア","header.downloads":"ダウンロード","header.contributors":"貢献者","header.login":"ログイン","home.introduction.paragraph":"**PreMiD**はブラウザ内で何をしているかをDiscordのゲームプレイステータスに表示できるようにするアプリです。","home.introduction.button.features":"機能を見る","home.introduction.button.downloads":"ダウンロードする","home.examples.playingagame":"ゲームのプレイ","home.examples.timestamp":"{0}","home.examples.timestamp2":"{0} 経過","home.examples.status.playing":"視聴中","home.examples.status.live":"ライブ","home.examples.status.browsing":"閲覧中…","home.features.heading":"こんな機能が！","home.features.presencesystem.heading":"**あなたの**プレゼンスを見つけましょう。","home.features.presencesystem.description":"この拡張機能は、自分や他の人が作ったプレゼンスを自由に追加できるようになっています！","home.features.presencesystem.button":"ストアに行く","home.features.simpleInterface.heading":"シンプルな見た目","home.features.simpleInterface.description":"設定が複雑すぎてうんざり？PreMiDならそんな事にうんざりする必要もありません。\\n必要な機能だけ入っています！","home.features.simpleInterface.description.1":"アプリと拡張機能の設定","home.features.simpleInterface.description.2":"プレゼンスの管理","home.features.simpleInterface.description.3":"カテゴリーごとの並べ替え","home.features.quickSupport.heading":"素早いサポート","home.features.quickSupport.description":"何かがバグってたり、大量のエラーが出たりしたら…？\\nDiscordサーバーで問題を解決する手助けをします。","home.features.quickSupport.button":"Discordに参加する","home.languageSelector.tippy":"ウェブサイトの言語設定","jobs.modal.title":"{0}として応募する","jobs.modal.step":"ステップ {0}/2","jobs.modal.buttons.next":"次へ","jobs.modal.buttons.join":"参加","jobs.modal.buttons.cancel":"戻る","jobs.modal.error":"すべての項目を入力してください。","jobs.modal.notice":"PreMiDは非営利のプロジェクトであり、すべての寄付やPatreonのお金はすべてPreMiDの開発やサーバー維持費に使用されます。\\nPreMiDでの求人に応募することで、ボランティアとしての活動を同意することになります。\\n給料が支払われることはありません。","jobs.guild.required":"Discordに参加する","jobs.guild.explanation":"応募するには、Discordサーバーに参加している必要があります。そうでない場合は、採用されても連絡が取れません。","jobs.header.title":"PreMiDで働く","jobs.header.description":"私達と一緒に働いてみませんか？","jobs.openings.title":"採用情報","jobs.benefits.title":"こんな特典が！","jobs.benefit1.title":"私たちに会う","jobs.benefit1.description":"PreMiDを支えてる人たちに出会う。","jobs.benefit2.title":"のぞき見","jobs.benefit2.description":"開発や、マーケティング活動をのぞき見できる。","jobs.benefit3.title":"名誉","jobs.benefit3.description":"Discordの権限と、色鮮やかな役職。","jobs.benefit4.title":"PreMiDを支援する","jobs.benefit4.description":"あなたの貢献で、このプロジェクトを運営することができます。","jobs.benefit5.title":"ノルマなし","jobs.benefit5.description":"ボランティアなので、暇な時にいつでもできます。","jobs.benefit6.title":"早期アクセス","jobs.benefit6.description":"他の人よりも先に新機能をテストする","jobs.success.applied":"応募していただき、ありがとうございます！","jobs.errors.alreadyApplied":"すでに申し込み済みです！","maintenance.big":"メンテナンス中です。","maintenance.heading":"技術的な問題が発生しており、スタッフが問題の解決に取り掛かっています。\\nご不便をおかけして申し訳ありません。","maintenance.heading2":"また後で戻って確認してください。","maintenance.message":"スタッフが問題を解決している間に、ここを見ることができます。","maintenance.statuspage":"ステータスを確認する","maintenance.discordserver":"Discordサーバーに入る","merch.title":"**PreMiD**のオフィシャルストアへようこそ！","merch.fit":"**サイズを選択**","merch.cart":"カートに追加","merch.help":"問題が発生しましたか？{0}カスタマーサポート{1}までご連絡ください。","merch.item.added":"{0}をカートに追加しました","merch.error.noitem":"カートに追加する商品が選択されていません。","partners.header.title":"パートナー","partners.header.description":"ファミリーの一員になって、パートナーだけの特典を手に入れましょう！","partners.slideshow.description":"PreMiDのパートナーはこんな人たち","partners.why.title":"私達のパートナーになってみませんか？","partners.why.benefit2.title":"パートナー専用のロールを手に入れる","partners.why.benefit2.description":"PreMiD公式Discordサーバーで、名誉あるロールをもらえる。","partners.why.benefit3.title":"サイトとの紐付け","partners.why.benefit4.title":"記念される。","partners.why.benefit4.description":"パートナーページのどっかに。","partners.why.benefit5.title":"有名になる。","partners.requirements.title":"必要条件","partners.requirements.first.title":"私達が求めているもの","partners.requirements.second.title":"私たちのファイヤウォール","partners.requirements.second.description":"現在、パートナーシッププログラムへのさまざまな取り組みを受け入れています。誰もが気付く機会を持つべきです。 もしあなたがTwitch配信者の場合は、最低500人のフォロワーと、10人以上の同時視聴者が必要で、配信を最低でも週に1回は行っている必要があります。","partners.apply.button":"今すぐ応募する","partners.apply.disclaimer":"パートナーになりましょう！","partners.apply.jobs":"直接PreMiDの仕事に関わりたい場合は、**こちらを**ご覧ください。","partners.sponsors.description":"この人達がいなければ、PreMiDは存在すらしなかったでしょう。","partners.partner.aniFlix":"aniFrixはアニメのサービスです。","partners.partner.arenaOfKings":"Arena of Kingsは、ブラウザで遊べるPvPゲームです。","partners.partner.upBeat":"UpBeatは非営利の国際ラジオです。ノンストップのエンターテイメントや、ニュースを提供しています。","partners.partner.bitRock":"強力で使いやすいクロスプラットフォームインストーラー作成ツール。","partners.partner.statusPage":"簡単にリアルタイムのステータスをユーザーに伝える。","partners.partner.crowdin":"企業のための翻訳加速装置。","partners.apply.select.other":"その他","partners.apply.form.name":"名前","partners.apply.form.link.placeholder":"例:https://premid.app","partners.apply.form.imageLink":"画像のリンク: (550x300、 PNGファイルのみ)","partners.apply.form.imageLink.placeholder":"例: https://i.imgur.com/clun1ID.png","partners.apply.form.button.apply":"申請する","partners.apply.success":"応募していただき、ありがとうございます！","partners.apply.error3":"リンクを追加してください (https:// で始まり .png で終わる必要があります。)","presence.page.buttons.sourceCode":"ソースコード","presence.sections.description.title":"概要","presence.sections.changelog.title":"更新履歴","presence.sections.information.title":"情報","presence.sections.information.author":"作者","presence.sections.information.version":"バージョン","presence.sections.information.users":"ユーザー","presence.sections.information.tags":"タグ","presence.sections.information.supportedurls":"対応したURL","presence.sections.information.contributors":"貢献者","store.message.error":"拡張機能が接続されていません。","store.cards.creator":"作者","store.cards.popular":"大人気のプレゼンス","store.cards.partner":"パートナーのプレゼンス","store.cards.extraStepsRequired":"このプレゼンスは追加の手順が必要です。詳細についてはページを確認してください。","store.header.search":"プレゼンスを探す","store.card.presence.add":"プレゼンスを追加する","store.card.presence.remove":"プレゼンスを削除","store.card.presence.included":"このプレゼンスはサイトにアクセスした際、自動的に有効になります。","store.category.filters.heading":"フィルター","store.category.filters.mostUsed":"最も使用されているもの順","store.category.filters.allowAdult":"アダルトコンテンツを表示","store.category.filters.likedOnly":"いいねしたプレゼンス","store.filters.added":"追加済のプレゼンスを表示","store.category.heading":"カテゴリー","store.category.all":"すべて","store.category.games":"ゲーム","store.category.music":"音楽","store.category.socials":"SNS","store.category.videos":"動画と配信","store.category.other":"その他","store.search":"検索","store.search.removeFilter":"クリックして絞り込みを外す。","user.roles.presenceDeveloper":"プレゼンス開発者","user.roles.presenceVerifier":"プレゼンステスター","user.importantPresenceDev.message1":"偉大なプレゼンス開発者","user.importantPresenceDev.message2":"{0}個のプレゼンスを作成済み","user.geniusPresenceDev.message1":"プレゼンス開発の天才","user.geniusPresenceDev.message2":"100個以上のプレゼンスを作った！","user.presences.contributed":"ここを押してこのユーザーが開発に関わったプレゼンスを見る"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"새로운 기능을 원하시나요?","beta.description.1":"**PreMiD 베타**는 모든 분들이 현재 사용가능합니다!","beta.description.2":"만약 가입한다면 어떤 것을 받게 될까요?","beta.features.1":"최신 기능","beta.features.2":"PreMiD 의 최고 기밀의 채팅 채널에 접근하세요.","beta.features.3":"저희의 디스코드 서버의 특별한 역할","beta.register.text":"준비 되셨나요? 다른 {0} 명의 베타 테스터들이 참여중입니다!","beta.register.button":"지금 가입하세요!","thankyou.title":"좋아요! 당신은 지금부터 베타 유저입니다!","thankyou.description":"우리 원숭이들은 최대한 빠르게 우리 베타 프로그램에 참여시키기 위해 노력하는 중입니다. 우리 서비스에 등록해주셔서 감사드립니다!","error.noslots":"음... 지금 이용 가능한 베타테스터 슬롯이 없는 것 같네요. 저희가 더 많은 베타테스터 슬롯을 준비해야겠어요!","contributors.headings.staff":"스태프","contributors.headings.supporters":"서포터","contributors.headings.translators":"번역에 도움을 주신 분들","contributors.roles.projectLeader":"프로젝트 리더","contributors.roles.staffCoordinator":"스태프 코디네이터","contributors.roles.marketingDirector":"마케팅 이사","contributors.roles.administrator":"총관리자","contributors.roles.reviewer":"검토자","contributors.roles.developer":"개발자","contributors.roles.designer":"디자이너","contributors.roles.moderator":"관리자","contributors.roles.supportAgent":"상담원","contributors.roles.representative":"대표","contributors.roles.proofreader":"교정자","contributors.roles.donator":"후원자","contributors.roles.booster":"서버 부스터","contributors.roles.translator":"번역자","contributors.cards.copyUserId":"클릭하여 유저의 ID를 복사하세요.","contributors.cards.userIdCopied":"유저 ID가 복사되었습니다!","downloads.header.title":"이제 보여줄 시간입니다.","downloads.header.subtitle":"PreMiD를 사용하여 친구들에게 무엇을 하고 있는지 보여주세요, 아마 같은 취미를 가진 사람을 찾을 지도 몰라요!","downloads.instructions.heading":"시작하기","downloads.instructions.step.1":"PreMiD 다운로드","downloads.instructions.step.2":"앱 설치하기","downloads.instructions.step.3":"저희의 익스텐션을 브라우저에 추가하세요","downloads.instructions.step.4":"익스텐션이 연결되었는지 확인하려면 이 페이지를 새로고침하세요","downloads.instructions.footer":"여전히 문제가 발생하나요? {0}","downloads.instructions.footer.link":"저희가 도와드리겠습니다!","downloads.appdownloading.header":"앱 다운로드","downloads.extdownloading.header":"확장 기능 다운로드","downloads.tooltips.os.not.supported.part1":"경고:","downloads.tooltips.os.not.supported.part2":"{0} 이 운영체제 대한 설치 프로그램이 없습니다. 이것에 대한 전문적인 도움이 없다는 것을 의미합니다.","downloads.mobile.errorMessage":"PreMiD는 현재 모바일 환경에서는 지원하지 않고 있으니 참고바랍니다!","downloads.mobile.showDownloads":"다운로드 보이기","downloads.mobile.hideDownloads":"다운로드 숨기기","downloads.warning.differentVersion":"이 플랫폼의 현재 버전은 {0} 입니다. (이 버전은 Linux에만 해당되며 다른 플랫폼에는 적용되지 않습니다.)","downloads.warning.differentVersion2":"이 버전은 Linux용으로 제작되었습니다. 이 버전은 {0} 입니다.","downloads.error.login":"다운로드를 보려면 로그인 해주세요.","downloads.error.noaccess.title":"죄송하지만, 당신은 알파/베타 버전에 엑세스할 권한이 없습니다 :(","downloads.error.noaccess.description":"**여기서** 베타 프로그램에 참가할 수 있습니다. 빨리 신청하세요! {0} 명 남았어요!","downloads.latest.header":"얼리 릴리즈","downloads.warning.title":"경고","downloads.warning.message.opera":"PreMiD를 설치하기 위해 **this** 익스텐션을 크롬 웹 스토어에서 설치해야 합니다.","downloads.button.skip":"건너뛰기","downloads.button.back":"뒤로가기","downloads.button.cancel":"취소","downloads.button.okay":"좋아요!","downloads.button.done":"완료","downloads.button.login":"로그인","downloads.button.skipanyway":"건너뛰기","downloads.adsbox.thankyou.title":"감사합니다!","downloads.adsbox.thankyou.message":"우리는 팀을 지원하고, 여러분께 최고의 경험을 제공해드릴 수 있게 서버를 유지하는데 광고를 사용합니다!","downloads.adsbox.disableAdblock":"광고 차단기를 비활성화 해주세요","downloads.showbeta.message":"베타 버전 보기","downloads.showbeta.small":"(일반 앱만을 다운로드 하신다면 이곳에 있으실 필요가 없어요)","downloads.skipanyway.message1":"지원하고 싶지 않아요.","downloads.skipanyway.message2":"확실하신가요?","downloads.skipanyway.message3":"정말요?","downloads.skipanyway.message4":"제..제발 도와주세요 :(","downloads.skipanyway.message5":"여러분이 필요해요 :<","downloads.skipanyway.message6":"네 네, 알겠어요...","store.search.notFound":"우리는 Presence를 찾지 못했습니다.","error.code.404":"앗! 그 페이지를 찾을 수 없어요.","error.code.4":"삭제된 Presence 나, 지원하지 않는 Presence를 찾고있으세요.","error.code.500":"내부 서버 오류가 발생했습니다.","error.page.details":"상세히","error.page.button":"홈페이지로 돌아가기","user.notFound.heading":"찾고 있는 유저가 조회되지 않아요. 다시 한번 확인해주세요.","user.notFound.message1":"찾고 있는 사용자 ID가 정확합니다","user.notFound.message2":"그 사용자가 충분한 Presence를 생성했으며, 우리의 Discord 서버에서 Presence 개발자 역할을 갖고 있습니다.","user.notFound.message3":"다른 사람들이 우리의 Discord 서버에서 동일한 문제를 겪고 있는지 확인해주세요.","user.notFound.message4":"만약 이것이 문제라고 생각되면, [우리의 디스코드 서버] 에 문의해주세요.","footer.language":"언어","footer.usercount.heading":"PreMiD를 사용할 준비가 되셨나요?","footer.usercount.message":"{0} 명 이상의 사용자가 사용중입니다!","footer.usercount.button":"설치","footer.partners.heading":"파트너","footer.followUs.heading":"팔로우하기","footer.developers.heading":"개발자들","footer.developers.documentation":"문서","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"지원하기","footer.supportus.donate":"후원하기","footer.supportus.contribute":"기여하기","footer.supportus.translate":"번역하기","footer.supportus.jobs":"저희와 함께 일해보세요!","footer.help.heading":"도움","footer.help.troubleshooting":"문제 해결하기","footer.help.getsupport":"도움이 필요하신가요?","footer.help.information":"정보","footer.help.information.cookies":"쿠키","footer.help.information.privacy":"개인 정보","footer.help.information.terms":"이용 약관","footer.more.heading":"더 보기","footer.more.status":"상태","footer.more.wiki":"위키","footer.copyright.line1":"{0} by {1}","footer.copyright.line2":"{0} 에 의해 웹사이트가 유지되고 있습니다.","footer.partners.more":"더 많은 파트너와 스폰서들을 볼려면 이곳을 클릭하세요.","header.language":"한국어","header.languageNotification.title":"우리는 귀하의 언어를 지원합니다. 바꾸고 싶으세요?","header.languageNotification.text":"저희 웹사이트는 귀하의 언어로 번역되어가고 있습니다. 영어 사용이 어려우신 경우 도움이 될 수 있겠네요.","header.languageNotification.btnDecline":"아뇨, 괜찮아요","header.languageNotification.btnAccept":"언어 바꾸기","header.loader.phrases":"팬케이크 굽는 중...;컨테이너 쌓는 중...;당신의 IP를 얻는 중...;UwU;규칙 어기는 중...","header.store":"상점","header.downloads":"다운로드","header.contributors":"도와주신 분들","header.login":"로그인","header.lia":"로그인 계정:","header.rab":"버그 제보하기","header.staff":"대시보드","header.logout":"로그아웃","home.introduction.paragraph":"**PreMiD**는 당신이 웹에서 무엇을 하고 있는지 디스코드 상태에 보여주는 간단하고 설정 가능한 프로그램입니다.","home.introduction.button.features":"기능","home.introduction.button.downloads":"다운로드","home.examples.playingagame":"게임 플레이 중","home.examples.timestamp":"{0} 남음","home.examples.timestamp2":"{0} 지남","home.examples.status.playing":"플레이중","home.examples.status.live":"실시간","home.examples.status.browsing":"탐색중...","home.features.heading":"당신은 아마도 이 기능들을 좋아하실 것 같아요","home.features.presencesystem.heading":"**당신의** Presence를 찾으세요","home.features.presencesystem.description":"다른 사용자가 만든 Presence를 추가 및 사용하고 저희 익스텐션에서 관리할 수 있도록 익스텐션을 만들었습니다!","home.features.presencesystem.button":"상점 방문","home.features.simpleInterface.heading":"간단한 유저 인터페이스","home.features.simpleInterface.description":"복잡한 유저 인터페이스에 지치셨나요? 이것이 우리가 PreMiD를 만든 이유입니다. 다음과 같은 중요 기능들을 통하여 최대한 유용하고, 간단한 UI를 유지하려 합니다.","home.features.simpleInterface.description.1":"앱과 익스텐션 설정","home.features.simpleInterface.description.2":"Presence 관리","home.features.simpleInterface.description.3":"카테고리별로 정렬","home.features.quickSupport.heading":"빠른 지원","home.features.quickSupport.description":"무언가 문제가 있어, 프로그램이 작동하지 않거나 많은 오류가 발생하나요? 우리의 Discord 서버에서 이런 문제를 해결할 수 있도록 도와드릴 수 있으며, 또한 문제가 최대한 빨리 해결될 수 있도록 자체 지원 시스템을 구축하였습니다.","home.features.quickSupport.button":"우리의 디스코드에 참여하세요","home.languageSelector.tippy":"웹사이트 언어","jobs.modal.title":"{0} 에 지원하기","jobs.modal.step":"{0}/2 단계","jobs.modal.buttons.next":"다음","jobs.modal.buttons.cancel":"취소","jobs.modal.error":"아래 모든 입력란에 올바르게 기재해주세요","jobs.modal.notice":"PreMiD 는 오픈 소스 프로젝트입니다. (비영리 팀임을 의미합니다) 모든 기부금 또는 후원금은 앱을 개발하는데 사용됩니다. PreMiD에 일자리를 신청함으로서 당신이 팀에서 자원하고 있음을 인정합니다.","jobs.guild.required":"우리의 디스코드에 참여하세요","jobs.guild.explanation":"신청하기 위서는 당신이 우리의 디스코드 서버에 들어오셔야만 합니다. 그렇지 않으면, 당신이 최종으로 선정이 되어도 연락을 드릴수 없습니다.","jobs.header.title":"PreMiD를 위해 일해주세요!","jobs.benefit3.title":"명예","jobs.benefit3.description":"강력한 디스코드 권한과 색깔넘치는 디스코드 역할.","jobs.benefit4.title":"PreMiD 지원하세요!","jobs.benefit4.description":"당신의 기여도 수치는 이 프로젝트를 실행하기에 적합합니다.","jobs.benefit5.title":"시간 초과","jobs.benefit5.description":"공을 들이세요. 이건 당신의 자발적인 일 입니다.","jobs.benefit6.title":"얼리 엑세스","jobs.benefit6.description":"다른 사람들보다 빠르게 새로운 기능들을 체험해보세요.","jobs.success.applied":"지원해주셔서 감사합니다!","jobs.errors.alreadyApplied":"이미 지원하셨습니다.","maintenance.big":"이런!","maintenance.heading":"안타깝게도 기술적인 문제점을 발견했습니다. 빠르게 다시 돌아오도록 하겠습니다. 불편을 끼쳐 죄송합니다.","maintenance.heading2":"더 많은 정보를 얻으시려면 다음에 다시 와주세요","maintenance.message":"저희의 특별한 개발자들이 고칠때까지, 이곳을 자유롭게 방문하세요!","maintenance.statuspage":"상태 페이지","maintenance.discordserver":"디스코드 서버","merch.title":"공식 ** PreMiD ** 상품 매장에 오신 것을 환영합니다!","merch.cart":"장바구니 담기","merch.help":"우리 매장이나 주문에 문제가 있습니까? {0}에 문의 고객 지원 {1}","merch.item.added":"{0}이 (가) 장바구니에 추가되었습니다.","merch.error.noitem":"장바구니에 추가 할 항목이 없습니다.","partners.header.title":"파트너","partners.requirements.title":"요구사항","partners.requirements.first.title":"무엇을 찾고 있나요?","partners.apply.button":"지금 신청하세요!","partners.sponsors.title":"스폰서들","partners.apply.title":"파트너에 지원하기","partners.apply.loggedUser":"{0} 로 로그인되었습니다.","partners.apply.notYou":"본인이 아니세요?","partners.apply.select.default":"한 개의 항목을 선택하십시오","partners.apply.select.website":"웹사이트","partners.apply.select.other":"기타","partners.apply.form.name":"이름","partners.apply.form.name.placeholder":"예: PreMiD","partners.apply.form.link":"링크","partners.apply.form.link.placeholder":"예: https://premid.app","partners.apply.form.description":"설명 : (최대 150글자로 서술하세요.)","partners.apply.form.description.placeholder":"기능에 대한 설명","partners.apply.form.imageLink":"이미지 링크: (550x300, PNG 파일만)","partners.apply.form.imageLink.placeholder":"예: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"닫기","partners.apply.form.button.apply":"지원하기","partners.apply.success":"지원해주셔서 감사합니다!","partners.apply.error1":"모든 입력란에 입력하세요.","partners.apply.error2":"최대 150글자로 설명하세요.","partners.apply.error3":"링크를 적어주세요. (https:// 로 시작하고, .png로 끝나야만 합니다.)","partners.apply.error4":"당신은 이미 파트너에 지원하셨습니다!","presence.page.buttons.sourceCode":"소스 코드","presence.sections.description.title":"설명","presence.sections.changelog.title":"변경된 사항","presence.sections.information.title":"정보","presence.sections.information.author":"제작자","presence.sections.information.version":"버전","presence.sections.information.likes":"좋아요","presence.sections.information.users":"사용자","presence.sections.information.tags":"태그","presence.sections.information.supportedurls":"지원하는 URL들","presence.sections.information.contributors":"기여자","report.title":"버그 신고","report.bugcount":"현재 {count}/3건의 신고가 가능합니다.","report.info":"오류 제보는 PreMiD 웹사이트 및 Discord 서버 내의 버그에 대한 것입니다.\\nPresence에서 발생한 버그는 Presence 제작자에게 제보됩니다. 작성은 영문으로만 해주십시오.","report.overview":"구체적으로 어떤 버그인지 간결하게 설명하십시오.","report.os":"당신의 운영체제와 버전을 선택하세요","report.browser":"당신의 브라우저와 버전을 선택하세요 - FireFox 브라우저는 about:support에서, 혹은 chrome://help에서 브라우저 버전을 확인하실 수 있습니다.","report.description":"해당 버그를 재현하고 테스트하기 위해 명확한 과정 또는 동영상, 링크를 서술해주십시오.","report.button":"신고","report.toomany":"현재 요청하신 신고건이 너무 많습니다. 요청한 신고건이 검토될때까지 기다려주세요. 신고는 매주 확인되니 기다려주세요.","report.toomany.alert":"현재 요청하신 신고건이 너무 많습니다.","report.success":"버그 제보가 전송되었습니다.","report.error":"정보가 부족합니다","report.error.unauth":"Discord 계정 인증이 필요합니다","report.activebugs":"검토중인 버그 신고건","store.message.error":"익스텐션이 연결되지 않았습니다.","store.cards.creator":"제작자","store.cards.popular":"이 Presence는 사용자들에게 가장 인기있는 Presence입니다.","store.cards.partner":"파트너 Presence","store.cards.extraStepsRequired":"이 Presence는 설치 후에도 추가 작업이 필요합니다. 자세한 정보는 해당 페이지에서 확인하세요.","store.header.search":"Presence 검색","store.card.presence.add":"Presence 추가","store.card.presence.remove":"Presence 제거","store.card.presence.included":"이 Presence는 해당 사이트를 방문할 때 자동으로 활성화됩니다.","store.category.filters.heading":"필터","store.category.filters.mostUsed":"인기순으로 정렬","store.category.filters.allowAdult":"NSFW 보이기","store.category.filters.likedOnly":"좋아요 표시한 Presence만 표시","store.filters.added":"추가된 Presence 보기","store.category.heading":"카테고리","store.category.all":"전체","store.category.games":"게임","store.category.music":"음악","store.category.socials":"SNS","store.category.videos":"비디오 & 스트림","store.category.other":"기타","store.search":"검색","store.search.filters":"입력","store.search.removeFilter":"클릭하여 필터 삭제","user.roles.presenceDeveloper":"Presence 개발자","user.roles.presenceVerifier":"Presence 인증인","user.importantPresenceDev.message1":"중요한 Presence 개발자","user.importantPresenceDev.message2":"{0}개의 Presence를 제작하였습니다.","user.geniusPresenceDev.message1":"똑똑한 Presence 개발자","user.geniusPresenceDev.message2":"100개 넘은 Presence를 제작함!","user.switch.contributed":"사용자 [Presence/도움주신 분들]","user.presences.created":"이 사용자가 만든 Presence 들을 확인하려면 클릭하세요.","user.presences.contributed":"이 사용자가 도움을 준 Presence 를 보려면 클릭하세요."}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Darbuotojai","contributors.headings.supporters":"Pagalbininkai","contributors.headings.translators":"Vertėjai","contributors.roles.administrator":"Administratorius","contributors.roles.supportAgent":"Pagalbos Agentas","contributors.roles.translator":"Vertėjai","contributors.cards.copyUserId":"Spauskite, jei norite nukopijuoti vartotojo ID.","contributors.cards.userIdCopied":"Vartotojo ID nukopijuotas!","downloads.header.title":"Laikas pasirodyti.","downloads.header.subtitle":"Pradėkite naudotis PreMiD dabar ir parodykite kitiems kuo užsiimate, galbūt rasite ką nors su tokiais pačiais pomėgiais.","downloads.instructions.heading":"Pradėkite","downloads.instructions.step.1":"Atsisiųskite PreMiD","downloads.instructions.step.2":"Įdiekite mūsų programą","downloads.instructions.step.3":"Įdiekite mūsų naršyklės plėtinį","downloads.instructions.step.4":"Apsilankykite {0} puslapyje ir patikrinkite, ar plėtinys prijungtas","downloads.instructions.footer":"Visdar susiduriate su problemomis? {0}","downloads.instructions.footer.link":"Mes esame čia jog padėti!","downloads.appdownloading.header":"Programa","downloads.extdownloading.header":"Plėtinys","downloads.tooltips.os.not.supported.part1":"Įspėjimai:","downloads.tooltips.os.not.supported.part2":"{0} Šiai operacinei sistemai nėra diegimo programos. Tai reiškia, kad jai nėra taikoma jokia profesionali parama.","downloads.mobile.errorMessage":"Atminkite, kad „PreMiD“ šiuo metu yra nepalaikomas mobiliuosiuose įrenginiuose.","downloads.error.login":"Prašome prisijungti norint pamatysi šiuos atsisiuntimus.","downloads.error.noaccess.title":"Uh, oh, atrodo, kad jūs neturite alpha/beta prieigos :(","downloads.error.noaccess.description":"Jūs galite prisidėti prie mūsų beta programos **čia** nemokamai. Paskubėkite! Mes turime tik {0} laisvų vietų","downloads.latest.header":"Ankstyvūs leidiniai","downloads.button.skip":"Praleisti","downloads.button.back":"Atgal","downloads.button.cancel":"Atšaukti","downloads.button.okay":"Gerai","downloads.button.done":"Baigta","downloads.button.login":"Prisijungti","downloads.adsbox.thankyou.title":"Ačiū!","downloads.adsbox.thankyou.message":"Mes naudojame reklamas, kad išlaikytume savo komandą ir serverius, jog galėtume užtikrinti geriausią vartotojo patirtį!","downloads.adsbox.disableAdblock":"Prašome išjungti savo AdBlock","downloads.skipanyway.message1":"Aš nenoriu remti.","downloads.skipanyway.message2":"Ar esate įsitikinę?","downloads.skipanyway.message3":"Ar tikrai?","downloads.skipanyway.message4":"P-prašau paremkite : C","downloads.skipanyway.message5":"Man reikia tavęs :<","downloads.skipanyway.message6":"Gerai, gerai...","user.notFound.heading":"To vartotojo nepavyko rasti. Pabandykite įsitikinti","footer.language":"Kalba","footer.usercount.message":"Prisijunkite prie {0} vartotojų jau šiandien!","footer.usercount.button":"Diegti","footer.partners.heading":"Partneriai","footer.developers.heading":"Kūrėjai","footer.developers.documentation":"Dokumentacija","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Paremkite mus","footer.supportus.donate":"Paaukoti","footer.supportus.contribute":"Prisidėkite","footer.supportus.translate":"Išversti","footer.help.heading":"Pagalba","footer.help.troubleshooting":"Nesklandumų sprendimas","footer.help.getsupport":"Kreiptis pagalbos","footer.help.information":"Informacija","footer.help.information.cookies":"Slapukų politika","footer.help.information.privacy":"Privatumas","footer.help.information.terms":"Sąlygos","footer.more.heading":"Daugiau","footer.more.status":"Statusas","footer.more.wiki":"Wikipedija","footer.copyright.line1":"{0} by {1}","footer.copyright.line2":"Svetainę išlaikoma {0}","header.language":"Lietuvių","header.languageNotification.title":"Mes palaikome jūsų kalbą, ar norite pakeisti?","header.languageNotification.text":"Mūsų svetainė yra išversta į jūsų kalbą. Tai gali padėti, jeigu sunkiai kalbate angliškai.","header.languageNotification.btnDecline":"Ne, ačiū","header.languageNotification.btnAccept":"Pakeisti kalbą","header.loader.phrases":"Kepami blynai...;Talpyklų talpinimas...;IP adreso nuskaitymas...;UwU; Pažeidžiamos taisyklės...","header.store":"Parduotuvė","header.contributors":"Pagalbininkai","header.login":"Prisijungti","home.examples.playingagame":"Žaidžia žaidimą","home.examples.timestamp":"Liko {0}","home.examples.status.playing":"Atkūrimas","home.examples.status.live":"Tiesiogiai","home.examples.status.browsing":"Naršoma...","home.features.heading":"Jums patiks šios funkcijos!","home.features.presencesystem.heading":"Raskite ** savo ** statusą","home.features.simpleInterface.heading":"Paprasta vartotojo sąsaja","home.features.simpleInterface.description.1":"Programos ir plėtinio nustatymai","home.features.simpleInterface.description.2":"Statusų valdymas","home.features.quickSupport.heading":"Greita pagalba","maintenance.message":"Kol mūsų specialieji darbuotojai to neištaisys, apsižvalgykite čia!","maintenance.statuspage":"Būsenos puslapis","maintenance.discordserver":"Discord Serveris","merch.title":"Sveiki atvykę į oficialų **PreMiD** prekių parduotuvę!","merch.swag":"Raskite savo **Swag**","merch.fit":"**Pasirinkite savo dydį**","merch.cart":"Įdėti į krepšelį","merch.help":"Susidūrete su problemomis mūsų svetainėje arba užsakyme? Susisiekite su mūsų {0}Klientų pagalba{1}","merch.item.added":"{0} buvo pridėtas į jūsų krepšelį","merch.error.noitem":"Krepšelis yra tuščias","partners.header.title":"Partneriai","partners.requirements.second.description":"Šiuo metu priimame įvairias pastangas į savo partnerystės programą. Kiekvienas turėtų turėti galimybę būti pastebėtas. „Twitch“ transliuotojai turi turėti bent 500 stebėtojų ir ne mažiau kaip 10 žiūrovus vienu metu. Turite transliuoti bent 1 kartą per savaitę.","presence.sections.description.title":"Aprašymas","presence.sections.changelog.title":"Pakeitimų žurnalas","presence.sections.information.title":"Informacija","presence.sections.information.author":"Autorius","presence.sections.information.version":"Versija","presence.sections.information.tags":"Žymos","presence.sections.information.supportedurls":"Palaikomi URLs","presence.sections.information.contributors":"Pagalbininkai","store.cards.creator":"Autorius","user.switch.contributed":"Naudotojas [presences/contributions]"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Vēlaties jaunas funkcijas?","beta.description.1":"**PreMiD Beta** tagad ir pieejama visiem!","beta.description.2":"Ko tu iegūsi reģistrējoties?","beta.features.1":"Jaunākās funkcijas","beta.features.2":"Pieeja PreMiD super slepenajiem teksta kanāliem","beta.features.3":"Speciāla loma mūsu Discord serverī","beta.register.text":"Esi tam gatavs? Pievienojies {0} citiem Beta Testētājiem!","beta.register.button":"Reģistrējies tagad!","thankyou.title":"Forši! Tagad esi beta lietotājs!","thankyou.description":"Mūsu pērtiķi strādā pie tā, lai jūs pēc iespējas ātrāk iekļūtu mūsu beta programmā. Paldies, ka reģistrējāties!","error.noslots":"Izskatās, ka mums vairs nav pieejamas beta testētāju vietas.","contributors.headings.staff":"Personāls","contributors.headings.supporters":"Atbalstītāji","contributors.headings.translators":"Tulki","contributors.roles.projectLeader":"Projekta vadītājs","contributors.roles.staffCoordinator":"Personāla Koordinators","contributors.roles.marketingDirector":"Mārketinga Direktors","contributors.roles.administrator":"Administrators","contributors.roles.reviewer":"Recenzents","contributors.roles.localizationManager":"Lokalizācijas Vadītājs","contributors.roles.developer":"Izstrādātājs","contributors.roles.designer":"Dizainers","contributors.roles.moderator":"Moderators","contributors.roles.supportAgent":"Atbalsta Aģents","contributors.roles.representative":"Pārstāvis","contributors.roles.proofreader":"Korektors","contributors.roles.donator":"Ziedotājs","contributors.roles.booster":"Atbalstītājs","contributors.roles.translator":"Tulks","contributors.cards.copyUserId":"Uzspied, lai nokopētu lietotāja ID.","contributors.cards.userIdCopied":"Lietotāja ID nokopēts!","downloads.header.title":"Laiks izrādīties.","downloads.header.subtitle":"Izmanto PreMiD tagad, lai izrādītos draugiem, ko tu dari, varbūt tu atradīsi kādu ar līdzīgām interesēm.","downloads.instructions.heading":"Sāc","downloads.instructions.step.1":"Lejupielādē PreMiD","downloads.instructions.step.2":"Uzstādi mūsu aplikāciju","downloads.instructions.step.3":"Pievieno mūsu paplašinājumu jūsu pārlūkprogrammai","downloads.instructions.step.4":"Pārlādējiet šo saiti un pārbaudiet vai paplašinājums ir savienots","downloads.instructions.footer":"Joprojām problēmas? {0}","downloads.instructions.footer.link":"Mēs esam te, lai palīdzētu!","downloads.appdownloading.header":"Aplikācija","downloads.extdownloading.header":"Paplašinājums","downloads.tooltips.os.not.supported.part1":"Uzmanību:","downloads.tooltips.os.not.supported.part2":"{0} Nav uzstādītājs priekš šīs operētājsistēmas. Tas nozīmē, ka tam nav profesionāla atbalsta.","downloads.mobile.errorMessage":"Lūdzu esi informēs, ka PreMiD nav atbalstīs uz mobilajiem telefoniem.","downloads.mobile.showDownloads":"Rādīt Lejupielādes","downloads.mobile.hideDownloads":"Slēpt Lejupielādes","downloads.warning.differentVersion":"Pašreizējā versija šai platformai ir {0} (šī versija ir konkrēti Linux un neattiecas uz citām platformām).","downloads.warning.differentVersion2":"Šī versija ir konkrēti Linux, un neattiecas uz citām sistēmām. Aplikācijas galvenā versija ir {0}","downloads.error.login":"Lūdzu pieslēdzieties, lai redzētu šīs lejupielādes.","downloads.error.noaccess.title":"Ak vai, izskatās, ka jums nav alpha/beta pieejas :(","downloads.error.noaccess.description":"Tu vari pievienoties mūsu beta programmai **šeit** bez maksas. Pasteidzies! Mums ir tikai {0} vietas pieejamas","downloads.latest.header":"Agrīnie Izlaidumi","downloads.warning.title":"Uzmanību","downloads.warning.message.opera":"Jums vajag uzstādīt **šo** paplašinājumu, lai varētu uzstādīt PreMiD no Chrome interneta veikala.","downloads.button.skip":"Izlaist","downloads.button.back":"Atpakaļ","downloads.button.cancel":"Atcelt","downloads.button.okay":"Labi","downloads.button.done":"Gatavs","downloads.button.login":"Pieslēgties","downloads.button.skipanyway":"Tomēr Izlaist","downloads.adsbox.thankyou.title":"Paldies!","downloads.adsbox.thankyou.message":"Mēs izmantojam reklāmas, lai atbalstītu savu komandu un uzturētu serverus, lai piedāvātu jums vislabāko lietotāja pieredzi!","downloads.adsbox.disableAdblock":"Lūdzu atspējojiet adblock","downloads.showbeta.message":"Parādīt beta izlaidumus","downloads.showbeta.small":"(nav nepieciešams, ja jūs esat tikai šeit, lai lejupielādētu normālo aplikāciju)","downloads.skipanyway.message1":"Es negribu atbalstīt.","downloads.skipanyway.message2":"Vai esat pārliecināts?","downloads.skipanyway.message3":"Patiešām?","downloads.skipanyway.message4":"L-lūdzu atbalsti :(","downloads.skipanyway.message5":"Man tevi vajag :<","downloads.skipanyway.message6":"Labi, labi...","store.search.notFound":"Mēs nevarējām atrast šo Presence...","error.code.404":"Atvaino, neizdevās atrast šo lapu.","error.code.4":"Jūs meklējat neesošu vai izdzēstu Presence.","error.code.500":"Radusies Iekšēja Servera kļūda.","error.page.details":"Detaļas","error.page.button":"Atpakaļ uz sākumlapu","user.notFound.heading":"Šo lietotāju nevarēja atrast. Mēģiniet pārliecināties","user.notFound.message1":", ka meklētais Lietotāja ID ir pareizs.","user.notFound.message2":", ka lietotājs ir izveidojis pietiekami Presences, un, ka tam ir Presence Izstrādātāja loma mūsu Discord serverī.","user.notFound.message3":", vai citiem lietotājiem ir tāda pati problēma mūsu Discord serverī.","user.notFound.message4":"Ja uzskatāt, ka šī ir kļūda, lūdzu, sazinieties ar mums [mūsu Discord serverī].","footer.language":"Valoda","footer.usercount.heading":"Gatavs izmantot PreMiD?","footer.usercount.message":"Pievienojies {0} lietotājiem šodien!","footer.usercount.button":"Uzstādīt","footer.partners.heading":"Partneri","footer.followUs.heading":"Sekojiet Mums","footer.developers.heading":"Izstrādātāji","footer.developers.documentation":"Dokumentācija","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Atbalsti mūs","footer.supportus.donate":"Ziedo","footer.supportus.contribute":"Dod savu ieguldījumu","footer.supportus.translate":"Tulko","footer.supportus.jobs":"Strādā ar mums!","footer.help.heading":"Palīdzība","footer.help.troubleshooting":"Problēmu novēršana","footer.help.getsupport":"Saņemt palīdzību","footer.help.information":"Informācija","footer.help.information.cookies":"Sīkdatnes","footer.help.information.privacy":"Konfidencialitāte","footer.help.information.terms":"Nosacījumi","footer.more.heading":"Vairāk","footer.more.status":"Statuss","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} {1}","footer.copyright.line2":"Mājaslapu uztur {0}","footer.partners.more":"Klikšķiniet šeit, lai redzētu mūsu pārējos partnerus & sponsorus.","header.language":"Latviešu","header.languageNotification.title":"Mēs atbalstam tavu valodu, gribi nomainīt?","header.languageNotification.text":"Mūsu mājaslapa ir pārtulkota jūsu valodā. Tas var palīdzēt jums, ja jūs nerunājat Angļu valodu tik labi.","header.languageNotification.btnDecline":"Nē, paldies","header.languageNotification.btnAccept":"Mainīt valodu","header.loader.phrases":"Cepam pankūkas...;Novietojam konteinerus...;Parsējam jūsu IP adresi...;UwU;Pārkāpjam noteikumus...","header.store":"Veikals","header.downloads":"Lejupielādes","header.contributors":"Ieguldītāji","header.login":"Pieslēgties","header.lia":"Pieslēdzies kā","header.rab":"Ziņot par kļūdu","header.staff":"Info panelis","header.logout":"Izlogoties","home.introduction.paragraph":"**PreMiD** ir vienkārša, konfigurējama lietotne, kas ļauj jums redzēt, ko jūs darāt internetā, jūsu Discord tagad spēlējiet statusā.","home.introduction.button.features":"Funkcijas","home.introduction.button.downloads":"Lejupielādes","home.examples.playingagame":"Spēlē spēli","home.examples.timestamp":"{0} atlicis","home.examples.timestamp2":"{0} pagājis","home.examples.status.playing":"Atskaņo","home.examples.status.live":"Tiešraide","home.examples.status.browsing":"Pārlūko...","home.features.heading":"Tu mīlēsi šīs funkcijas!","home.features.presencesystem.heading":"Atrodi **savu** presence","home.features.presencesystem.description":"Mēs izveidojām mūsu paplašinājumu tādā veidā, ka tas atļauj jums pievienot un izmantot Presences, kuras ir izveidojuši citi un pārvaldīt tās mūsu paplašinājumā!","home.features.presencesystem.button":"Apmeklēt veikalu","home.features.simpleInterface.heading":"Vienkāršs lietotāja interfeiss","home.features.simpleInterface.description":"Vai esat noguris no sarežģītiem lietotāju interfeisiem? Tas ir kādēļ mēs izveidojām un mēģinām saglabāt mūsu UI vienkāršu un noderīgu, cik iespējams, ar šādām svarīgām funkcijām:","home.features.simpleInterface.description.1":"Lietotnes un Paplašinājuma iestatījumi","home.features.simpleInterface.description.2":"Presence pārvaldīšana","home.features.simpleInterface.description.3":"Kārtot pēc kategorijas","home.features.quickSupport.heading":"Ātrais atbalsts","home.features.quickSupport.description":"Kaut kas nepareizi darbojas, sūta tev daudz kļūdas vai vienkārši neiet? Mēs tev palīdzēsim atbrīvoties no šīm problēmām mūsu Discord serverī, mēs arī izveidojām mūsu pašu atbalsta sistēmu, kas pārliecināsies, ka tava problēma tiks atrisināta cik ātri iespējams.","home.features.quickSupport.button":"Pievienojies mūsu Discord","home.languageSelector.tippy":"Tīmekļa vietnes valoda","jobs.modal.title":"Pieteikties par {0}","jobs.modal.step":"Solis {0} no 2","jobs.modal.buttons.next":"Nākamais","jobs.modal.buttons.join":"Pievienojies","jobs.modal.buttons.cancel":"Atcelt","jobs.modal.error":"Lūdzu aizpildiet visus laukus","jobs.modal.notice":"PreMiD ir atvērtā avota tipa projekts, kas nozīmē ka mēs negūstam peļņu. Katrs ziedojums nokļūst atpakaļ produktā. Piesakoties darbā PreMiD, Tu apzinies, ka esi brīvprātīgais un nesaņemsi atalgojumu.","jobs.guild.required":"Pievienojies mūsu Discord serverim","jobs.guild.explanation":"Lai pievienotos, Tev jābūt mūsu Discord serverī. Savādāk nevarēsim ar Tevi sazināties, ja tiksi izvēlēts!","jobs.header.title":"Strādāt PreMiD","jobs.header.description":"Vai esat gatavs palīdzēt lielākajai Rich-Presence programmai?","jobs.openings.title":"Vakances","jobs.benefits.title":"Augstas klases Priekšrocības","jobs.benefit1.title":"Satiec mūs","jobs.benefit1.description":"Sazinies ar cilvēkiem, kas strādā PreMiD.","jobs.benefit2.title":"Ieskati","jobs.benefit2.description":"Ieskaties mūsu Izstrādāšanā un Mārketingā.","jobs.benefit3.title":"Cieņa","jobs.benefit3.description":"Spēcīgas Discord atļaujas un krāsaina loma.","jobs.benefit4.title":"Atbalsti PreMiD","jobs.benefit4.description":"Ar tavu palīdzību, ir iespējams uzturēt šo projektu.","jobs.benefit5.title":"Pārtraukumi","jobs.benefit5.description":"Nesteidzies! Šis ir brīvprātīgs darbs.","jobs.benefit6.title":"Priekšlaicīgā piekļuve","jobs.benefit6.description":"Izmēģini jaunās funkcijas viens no pirmajiem.","jobs.success.applied":"Paldies par pieteikšanos!","jobs.errors.alreadyApplied":"Jau esiet pieteicies!","maintenance.big":"Ak vai!","maintenance.heading":"Diemžēl mums ir dažas tehniskas grūtības. Mēs drīz atgriezīsimies. Atvainojamies par sagādātajām neērtībām.","maintenance.heading2":"Lūdzu, atgriezieties vēlāk, lai iegūtu vairāk informāciju.","maintenance.message":"Kamēr mūsu īpašie izstrādātāji to nenovērsīs, droši ieskatieties šeit!","maintenance.statuspage":"Statusa Lapa","maintenance.discordserver":"Discord Serveris","merch.title":"Laipni lūdzam oficiālajā **PreMiD** preču veikalā!","merch.swag":"Atrodi savu **preci**","merch.fit":"** Izvēlieties savu izmēru**","merch.cart":"Ielikt iepirkumu grozā","merch.help":"Vai rodas problēmas ar mūsu veikalu vai pasūtījumu? Sazinieties ar mūsu {0} klientu atbalstu {1}","merch.item.added":"{0} tika pievienots jūsu grozam","merch.error.noitem":"Nav Prece, ko pievienot grozam","partners.header.title":"Partneri","partners.header.description":"Pievienojies ģimenei un iegūsti tikai partneriem paredzētas priekšrocības, lai parādītu cik daudz preces tev ir.","partners.slideshow.description":"Šie jau pieder mums","partners.why.title":"Kā būtu ar došanos debesīs elles vietā?","partners.why.benefit1.title":"Tava bezmaksas Presence","partners.why.benefit1.description":"Mūsu komanda nodrošinās jūsu pakalpojuma Presence.","partners.why.benefit2.title":"Kļūstiet verificēts","partners.why.benefit2.description":"Īpaša loma un liels gods jums tiks piešķirts mūsu Discord serverī.","partners.why.benefit3.title":"Meta-tag integrācija","partners.why.benefit3.description":"Automātiski izmanto jūsu Presence, kad kāds apmeklē jūsu Vietni.","partners.why.benefit4.title":"Tiec iemūžināts","partners.why.benefit4.description":"Šķebinoša vieta mūsu partneru lapā.","partners.why.benefit5.title":"Esi slavens","partners.why.benefit5.description":"Piedāvāts mūsu sociālajos mēdijos.","partners.requirements.title":"Prasības","partners.requirements.first.title":"Ko mēs meklējam?","partners.requirements.first.description":"Mēs sekojam līdzi augošajām kopienām un aizraujošajām lietām internetā. TL;DR jums jau vajadzētu izmantot PreMiD un būt gatavam to izplatīt vēl vairāk interneta ķēmiem. Pieņemšana programma ir ārkārtīgi kvalitatīva, un ta katram kandidātam būs atšķirīga.","partners.requirements.second.title":"Mūsu ugunsmūris","partners.requirements.second.description":"Pašlaik mēs pieņemam dažāda veida centienus mūsu partnerības programmā. Ikvienam vajadzētu būt iespējai tikt pamanītam. Twitch raidītājiem vajadzētu būt vismaz 500 sekotāju un vismaz 10 skatītāju vienlaikus. Jums jāstraumē vismaz 1 reizi nedēļā.","partners.apply.button":"Piesakies tagad!","partners.apply.disclaimer":"Ejam kopā uz debesīm!","partners.apply.jobs":"Ja jūs drīzāk interesē tiešs darbs PreMiD, ieskatieties mūsu **darba sludinājumos**.","partners.sponsors.title":"Sponsori","partners.sponsors.description":"PreMiD nebūtu iespējams bez šiem apbrīnojamajiem cilvēkiem.","partners.partner.aniFlix":"Tā jūs skatāties anime.","partners.partner.arenaOfKings":"Arena of Kings ir nākamās paaudzes ātrā PvP Arena spēle, kas tiek spēlēta pārlūkprogrammā.","partners.partner.upBeat":"UpBeat ir bezpeļņas starptautisks radio, kas cenšas nodrošināt nepārtrauktu, kvalitatīvu radio un ziņu izklaidi.","partners.partner.simLiveRadio":"SimLiveRadio ir visveiksmīgākais informācijas un izklaides radio simulācijas spēlēm Vācijā, Austrijā un Šveicē!","partners.partner.discordTemplates":"Sāciet veidot savu kopienu, izmantojot mūsu lieliskās veidnes. Veidojiet savu valstību.","partners.partner.taigaBot":"taiga ir Discord Robots, kas cenšas piedāvāt visas funkcijas, kuras jums nepieciešamas vienlaicīgi!","partners.partner.bitRock":"Spēcīgs un viegli lietojams starpplatformu instalēšanas rīku izveides rīks.","partners.partner.statusPage":"Viegli paziņojiet lietotājiem reāllaika statusu.","partners.partner.erisly":"Dieviete, kas spēlējas, kā Discord Robots!","partners.partner.reyfm":"REYFM ļauj jums klausīties 15+ mūzikas straumes bez maksas - bez apstājas. Ar labāko un jaunāko mūziku tikai jums!","partners.partner.crowdin":"Veikla lokalizācija priekš tehnoloģiju uzņēmumiem.","partners.partner.wikijs":"Visjaudīgākā un paplašināmā atvērtā koda Wiki programmatūra.","partners.partner.packageCloud":"Vienots, izstrādātājiem draudzīgs interfeiss visiem jūsu artefaktiem.","partners.partner.fastly":"Aiz labākajām tīmekļa vietnēm.","partners.partner.onlyhit":"OnlyHit ir jūsu tiešsaistes mūzikas radiostacija, kas izveidota, lai atskaņotu jūsu labākos hitus visu diennakti un lai jūs pirmais atklātu savus nākotnes hitus.","partners.apply.title":"Piesakies par partneri","partners.apply.loggedUser":"Pieslēdzies kā {0}","partners.apply.notYou":"Ne Jūs?","partners.apply.select.default":"Lūdzu izvēlieties vienu","partners.apply.select.website":"Mājaslapa","partners.apply.select.other":"Cits","partners.apply.form.name":"Vārds","partners.apply.form.name.placeholder":"Piemēram: PreMiD","partners.apply.form.link":"Saite","partners.apply.form.link.placeholder":"Piemēram: https://premid.app","partners.apply.form.description":"Apraksts: (Maksimums 100 rakstzīmes)","partners.apply.form.description.placeholder":"Piedāvātā apraksts","partners.apply.form.imageLink":"Attēla saite: (550x300, tikai PNG)","partners.apply.form.imageLink.placeholder":"Piemēram: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Aizvērt","partners.apply.form.button.apply":"Pieteikties","partners.apply.success":"Paldies par pieteikšanos!","partners.apply.error1":"Lūdzu aizpildiet visus laukus.","partners.apply.error2":"Maksimums 150 rakstzīmju apraksts.","partners.apply.error3":"Lūdzu, pievienojiet saiti (jāsākas ar https: // un jābeidzas ar .png)","partners.apply.error4":"Jau esiet pieteicies par partneri.","presence.page.buttons.sourceCode":"Avota Kods","presence.sections.description.title":"Apraksts","presence.sections.changelog.title":"Izmaiņu žurnāls","presence.sections.information.title":"Informācija","presence.sections.information.author":"Autors","presence.sections.information.version":"Versija","presence.sections.information.likes":"Patīk","presence.sections.information.users":"Lietotāji","presence.sections.information.tags":"Atzīmes","presence.sections.information.supportedurls":"Atbalstītie URL","presence.sections.information.contributors":"Ieguldītāji","report.title":"Ziņot Par Kļūdu","report.bugcount":"{count}/3 Ziņojumi atlikuši","report.info":"Ziņošana par kļūdām ir paredzēta kļūdām PreMiD vietnē un PreMiD Discord Serverī. Par presence kļūdām jāziņo presence veidotājam. Ziņojiet par kļūdām tikai angļu valodā.","report.overview":"Norādiet skaidru un precīzu kļūdas aprakstu.","report.os":"Atlasiet Operētājsistēmu un Versiju","report.browser":"Atlasiet savu Pārlūkprogrammu un Versiju - Versiju varat iegūt, apmeklējot vietni about:support Firefox vai chrome://help","report.description":"Norādiet saiti uz aktīvu piemēru vai nepārprotamu darbību kopu, lai reproducētu šo kļūdu.","report.button":"Ziņot","report.toomany":"Jums ir pārāk daudz aktīvu ziņojumu. Pagaidiet, līdz jūsu iesniegtie ziņojumi tiks pārskatīti. Ziņojumi tiek pārbaudīti katru nedēļu, esiet pacietīgs.","report.toomany.alert":"Jums ir pārāk daudz aktīvu ziņojumu.","report.success":"Kļūda Iesniegta","report.error":"Nepieciešama vairāk informācija","report.error.unauth":"Discord kontam jābūt verificētam","report.activebugs":"Aktīvās Kļūdas","store.message.error":"Paplašinājums nav savienots.","store.cards.creator":"Autors","store.cards.popular":"Šī Presence ir ļoti populāra starp lietotājiem.","store.cards.partner":"Partneru Presence","store.cards.extraStepsRequired":"Šim presence ir nepieciešamas papildu darbības. Lūdzu pārbaudiet tās lapu, lai iegūtu vairāk informācijas.","store.header.search":"Meklēt Presence","store.card.presence.add":"Pievienot Presence","store.card.presence.remove":"Noņemt Presence","store.card.presence.included":"Šī Presence tiek automātiski iespējota, kad apmeklējat tās vietni.","store.category.filters.heading":"Filtri","store.category.filters.mostUsed":"Visbiežāk izmantotie pirmie","store.category.filters.allowAdult":"Rādīt NSFW","store.category.filters.likedOnly":"Rādīt Presences, kuras patīk","store.filters.added":"Rādīt pievienotās Presences","store.category.heading":"Kategorijas","store.category.all":"Viss","store.category.games":"Spēles","store.category.music":"Mūzika","store.category.socials":"Sociālie tīkli","store.category.videos":"Video & Straumēšana","store.category.other":"Cits","store.search":"Meklēt","store.search.filters":"Aizpildīt","store.search.removeFilter":"Uzspied, lai noņemtu filtru","user.roles.presenceDeveloper":"Presence Izstrādātājs","user.roles.presenceVerifier":"Presence verificētājs","user.importantPresenceDev.message1":"Svarīgs Presence Izstrādātājs","user.importantPresenceDev.message2":"Izveidotas {0} presences.","user.geniusPresenceDev.message1":"Presence Ģēnijs izstrādātājs","user.geniusPresenceDev.message2":"Izveidotas pāri 100 Presences!","user.switch.contributed":"Lietotājs [Presences/ieguldījumi]","user.presences.created":"Spied šeit, lai parādītu šī lietotāja izveidotās Presences.","user.presences.contributed":"Spied šeit, lai parādītu presences, kurās šis lietotājs ir ieguldījis darbu."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Mahukan lebih banyak ciri?","beta.description.1":"**PreMiD Beta** kini tersedia untuk semua orang!","beta.description.2":"Apa yang anda akan dapat jika anda daftar?","beta.features.1":"Ciri-ciri terbaru","beta.features.2":"Capaian ke saluran sembang super rahsia PreMiD","beta.features.3":"Peranan istimewa di pelayan Discord kami","beta.register.text":"Anda bersedia? Sertai {0} Penguji Beta yang lain!","beta.register.button":"Daftarlah!","thankyou.title":"Terbaik! Anda kini pengguna beta!","thankyou.description":"Monyet kami sedang berusaha memasukkan anda ke dalam program beta kami secepat mungkin. Terima kasih kerana mendaftar!","error.noslots":"Nampaknya kami sudah tiada slot beta yang lain.","contributors.headings.staff":"Kakitangan","contributors.headings.supporters":"Penyokong","contributors.headings.translators":"Penterjemah","contributors.roles.projectLeader":"Ketua Projek","contributors.roles.staffCoordinator":"Penyelaras Kakitangan","contributors.roles.marketingDirector":"Pengarah Pemasaran","contributors.roles.administrator":"Pentadbir","contributors.roles.reviewer":"Pengulas","contributors.roles.localizationManager":"Pengurus Penyetempatan","contributors.roles.developer":"Pembangun","contributors.roles.designer":"Pereka","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Ejen Penyokong","contributors.roles.representative":"Wakil","contributors.roles.proofreader":"Pembaca Pruf","contributors.roles.donator":"Penderma","contributors.roles.booster":"Penggalak Nitro","contributors.roles.translator":"Penterjemah","contributors.cards.copyUserId":"Klik untuk salin ID pengguna.","contributors.cards.userIdCopied":"ID pengguna disalin!","downloads.header.title":"Masa untuk bermegah.","downloads.header.subtitle":"Gunakan PreMiD sekarang dan tunjukkan kepada rakan apa yang anda lakukan, mungkin anda akan jumpa seseorang dengan minat yang sama.","downloads.instructions.heading":"Mulakan","downloads.instructions.step.1":"Muat Turun PreMiD","downloads.instructions.step.2":"Pasangkan aplikasi kami","downloads.instructions.step.3":"Tambah Sambungan kami ke pelayar anda","downloads.instructions.step.4":"Muat semula laman ini dan periksa jika sambungan disambung","downloads.instructions.footer":"Masih mengalami isu? {0}","downloads.instructions.footer.link":"Kami sedia untuk membantu!","downloads.appdownloading.header":"Aplikasi","downloads.extdownloading.header":"Sambungan","downloads.tooltips.os.not.supported.part1":"Amaran:","downloads.tooltips.os.not.supported.part2":"{0} Tiada pemasang untuk sistem pengoperasian ini. Maknanya tiada sokongan profesional untuknya.","downloads.mobile.errorMessage":"Sila ambil maklum bahawa PreMiD tidak disokong di telefon mudah alih.","downloads.mobile.showDownloads":"Tunjukkan Muat Turun","downloads.mobile.hideDownloads":"Sembunyikan Muat Turun","downloads.warning.differentVersion":"Versi terkini platform ini ialah {0} (versi ini khusus untuk Linux dan tidak berkait dengan platform lain).","downloads.warning.differentVersion2":"Versi ini khusus untuk Linux, dan tidak berkait dengan sistem lain. Versi utama aplikasi ialah {0}","downloads.error.login":"Sila log masuk untuk melihat muat turun ini.","downloads.error.noaccess.title":"Alamak, nampaknya anda tiada capaian alfa/beta :(","downloads.error.noaccess.description":"Anda boleh sertai program beta kami **di sini** secara percuma. Cepat! Kami hanya tinggal {0} slot sahaja","downloads.latest.header":"Terbitan Awal","downloads.warning.title":"Amaran","downloads.warning.message.opera":"Anda perlu pasang sambungan **ini** untuk memasang PreMiD dari Kedai Web Chrome.","downloads.button.skip":"Langkau","downloads.button.back":"Kembali","downloads.button.cancel":"Batal","downloads.button.okay":"Okey","downloads.button.done":"Selesai","downloads.button.login":"Log masuk","downloads.button.skipanyway":"Langkau Juga","downloads.adsbox.thankyou.title":"Terima kasih!","downloads.adsbox.thankyou.message":"Kami guna iklan untuk menyokong pasukan kami dan menyelenggara pelayan kami untuk berikan pengalaman terbaik kepada anda!","downloads.adsbox.disableAdblock":"Sila lumpuhkan penyekat iklan anda","downloads.showbeta.message":"Tunjuk terbitan awal","downloads.showbeta.small":"(tidak diperlukan jika anda berada di sini hanya untuk muat turun aplikasi biasa)","downloads.skipanyway.message1":"Saya tak nak sokong.","downloads.skipanyway.message2":"Anda pasti?","downloads.skipanyway.message3":"Betul ni?","downloads.skipanyway.message4":"T-tolonglah sokong :(","downloads.skipanyway.message5":"Saya perlukan awak :<","downloads.skipanyway.message6":"Baik, baik...","store.search.notFound":"Kami tidak jumpa Presence tersebut...","error.code.404":"Maaf, kami tidak jumpa halaman tersebut.","error.code.4":"Anda mencari Presence yang tidak wujud atau telah dipadam.","error.code.500":"Telah berlakunya ralat Pelayan Dalaman.","error.page.details":"Maklumat lanjut","error.page.button":"Ke laman utama","user.notFound.heading":"Pengguna tersebut tidak dijumpai. Sila pastikan","user.notFound.message1":"ID pengguna yang anda cari adalah tepat.","user.notFound.message2":"pengguna tersebut telah mencipta Presence yang mencukupi dan mempunyai peranan \\"Presence Developer\\" di pelayan Discord kami.","user.notFound.message3":"pengguna lain juga mengalami isu yang sama di pelayan Discord kami.","user.notFound.message4":"Jika anda rasa ini suatu kesilapan, sila hubungi kami di [pelayan Discord kami].","footer.language":"Bahasa","footer.usercount.heading":"Sedia untuk gunakan PreMiD?","footer.usercount.message":"Sertai {0} pengguna hari ini!","footer.usercount.button":"Pasang","footer.partners.heading":"Rakan Kongsi","footer.followUs.heading":"Ikuti Kami","footer.developers.heading":"Para Pembangun","footer.developers.documentation":"Pendokumenan","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Sokong kami","footer.supportus.donate":"Derma","footer.supportus.contribute":"Sumbang","footer.supportus.translate":"Terjemah","footer.supportus.jobs":"Kerja dengan kami!","footer.help.heading":"Bantuan","footer.help.troubleshooting":"Selesaikan masalah","footer.help.getsupport":"Dapatkan Bantuan","footer.help.information":"Maklumat","footer.help.information.cookies":"Kuki","footer.help.information.privacy":"Privasi","footer.help.information.terms":"Terma-terma","footer.more.heading":"Lebih lagi","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} oleh {1}","footer.copyright.line2":"Laman sesawang diselenggara oleh {0}","footer.partners.more":"Klik sini untuk melihat rakan kongsi & penaja kami yang lainnya.","header.language":"Bahasa Melayu","header.languageNotification.title":"Kami menyokong bahasa anda, nak tukar?","header.languageNotification.text":"Laman sesawang kami telah diterjemah ke bahasa anda. Mungkin ia dapat membantu sekiranya anda tidak begitu memahami bahasa Inggeris.","header.languageNotification.btnDecline":"Tidak mengapalah","header.languageNotification.btnAccept":"Tukar bahasa","header.loader.phrases":"Membakar lempeng...;Meletakkan bekas...;Menghuraikan alamat IP anda...;UwU;Melanggar peraturan...","header.store":"Kedai","header.downloads":"Muat Turun","header.contributors":"Penyumbang","header.login":"Log masuk","header.lia":"Log masuk sebagai","header.rab":"Laporkan pepijat","header.staff":"Papan Pemuka","header.logout":"Log Keluar","home.introduction.paragraph":"**PreMiD** ialah utiliti yang mudah, mampu ditatarajah yang membolehkan anda menunjukkan apa anda buat di sesawang ke dalam status main di Discord anda.","home.introduction.button.features":"Ciri-ciri","home.introduction.button.downloads":"Muat Turun","home.examples.playingagame":"Bermain permainan","home.examples.timestamp":"Tinggal {0}","home.examples.timestamp2":"{0} berlalu","home.examples.status.playing":"Memainkan","home.examples.status.live":"Langsung","home.examples.status.browsing":"Melayari...","home.features.heading":"Anda akan suka ciri ini!","home.features.presencesystem.heading":"Cari Presence yang **anda** inginkan","home.features.presencesystem.description":"Kami telah mencipta sambungan kami dalam cara yang membolehkan anda tambah dan guna Presence yang dicipta oleh orang lain dan uruskannya dalam sambungan kami!","home.features.presencesystem.button":"Lawati kedai","home.features.simpleInterface.heading":"Antara muka pengguna yang ringkas","home.features.simpleInterface.description":"Penat dengan antara muka yang rumit? Sebab itulah kami cipta dan cuba untuk kekalkan UI kami seringkas mungkin sambil kekalkan kebergunaannya dengan ciri penting seperti:","home.features.simpleInterface.description.1":"Tetapan Aplikasi dan Sambungan","home.features.simpleInterface.description.2":"Pengurusan Presence","home.features.simpleInterface.description.3":"Isih ikut kategori","home.features.quickSupport.heading":"Sokongan pantas","home.features.quickSupport.description":"Ada sesuatu terglic, memberikan banyak ralat atau langsung tidak berfungsi? Kami akan bantu anda hapuskan isu tersebut di pelayan Discord kami, kami juga cipta sistem sokongan kami sendiri yang akan pastikan isu anda diselesaikan secepat mungkin.","home.features.quickSupport.button":"Sertai Discord kami","home.languageSelector.tippy":"Bahasa laman sesawang","jobs.modal.title":"Mohon untuk {0}","jobs.modal.step":"Langkah {0} dari 2","jobs.modal.buttons.next":"Seterusnya","jobs.modal.buttons.join":"Sertai","jobs.modal.buttons.cancel":"Batal","jobs.modal.error":"Sila lengkapkan kesemua medan","jobs.modal.notice":"PreMiD ialah projek bersumber terbuka, maksudnya kami pasukan bukan untung, setiap derma atau wang Patreon kembali semula kepada produk kami. Dengan memohon jawatan pekerjaan di PreMiD anda memperakui bahawa anda akan bersukarela dalam pasukan, anda tidak akan dibayar untuk kerja anda.","jobs.guild.required":"Sertai Discord kami","jobs.guild.explanation":"Untuk membolehkan penyertaan anda mestilah sertai pelayan Discord kami. Jika tidak kami tidak mampu menghubungi anda jika anda dipilih!","jobs.header.title":"Kerja untuk PreMiD","jobs.header.description":"Adakah anda bersedia untuk membantu atur cara Rich-Presence terbesar?","jobs.openings.title":"Kerja Kosong","jobs.benefits.title":"Faedah Atasan","jobs.benefit1.title":"Jumpa kami","jobs.benefit1.description":"Hubungi orang di sebalik PreMiD.","jobs.benefit2.title":"Intaian Susup","jobs.benefit2.description":"Tengoklah bahagian Pembangunan dan Pemasaran kami.","jobs.benefit3.title":"Penghargaan Tinggi","jobs.benefit3.description":"Kebenaran Discord yang berkuasa dan peranan yang berwarna-warni.","jobs.benefit4.title":"Sokong PreMiD","jobs.benefit4.description":"Projek ini mampu dijalankan hanya kerana sumbangan daripada anda.","jobs.benefit5.title":"Masa Rehat","jobs.benefit5.description":"Ikut masa sendiri. Ini kerja sukarela.","jobs.benefit6.title":"Capaian Awal","jobs.benefit6.description":"Cuba ciri baharu sebelum orang lain.","jobs.success.applied":"Terima kasih kerana memohon!","jobs.errors.alreadyApplied":"Anda sudah pun memohon sebelum ini!","maintenance.big":"Oh tidak!","maintenance.heading":"Malangnya kami mengalami kesukaran teknikal. Kami akan kembali sebentar lagi. Kami memohon maaf atas segala kesulitan yang berlaku.","maintenance.heading2":"Sila kembali semula sebentar lagi untuk maklumat lanjut.","maintenance.message":"Sementara pembangun istimewa kami membaiki masalah ini, silalah lihat di sini dahulu!","maintenance.statuspage":"Halaman Status","maintenance.discordserver":"Pelayan Discord","merch.title":"Selamat datang ke kedai Barangan **PreMiD** rasmi!","merch.swag":"Cari **Barangan Hebat** anda","merch.fit":"**Pilih apa yang sesuai**","merch.cart":"Tambah ke troli","merch.help":"Mengalami masalah dengan kedai kami atau sesuatu pesanan? Hubungi {0}sokongan pelanggan{1} kami","merch.item.added":"{0} item dalam troli anda","merch.error.noitem":"Tiada item dalam troli anda","partners.header.title":"Rakan Kongsi","partners.header.description":"Sertai keluarga kami dan dapatkan faedah khusus rakan kongsi untuk menunjukkan betapa hebatnya anda.","partners.slideshow.description":"Mereka semua milik kami","partners.why.title":"Apa kata anda ikut kami naik ke atas dan bukan tinggal di bawah?","partners.why.benefit1.title":"Presence percuma anda","partners.why.benefit1.description":"Pasukan kami akan sediakan untuk anda Presence perkhidmatan anda.","partners.why.benefit2.title":"Jadilah mereka yang disahkan","partners.why.benefit2.description":"Peranan istimewa dan penghargaan tinggi akan diberikan kepada anda di pelayan Discord kami.","partners.why.benefit3.title":"Penyepaduan metatag","partners.why.benefit3.description":"Gunakan Presence anda secara automatiknya apabila seseorang melawat Laman Sesawang anda.","partners.why.benefit4.title":"Diabadikan selamanya","partners.why.benefit4.description":"Tempat terbaik di halaman rakan kongsi kami.","partners.why.benefit5.title":"Jadi terkenal","partners.why.benefit5.description":"Dipaparkan di media sosial kami.","partners.requirements.title":"Keperluan","partners.requirements.first.title":"Apa yang kami cari?","partners.requirements.first.description":"Kami memantau komuniti yang mengembang dan perkara menyeronokkan di internet. Rumusannya, anda mestilah sudah pun dan masih menggunakan PreMiD dan bersedia untuk menyebarkannya kepada ramai lagi di internet. Penerimaan ke dalam program amatlah kualitatif dan akan berbeza dari satu calon ke calon yang lain.","partners.requirements.second.title":"Tembok api kami","partners.requirements.second.description":"Kami kini menerima pelbagai jenis perusahaan ke dalam program rakan kongsi kami. Sesiapa pun ada peluang untuk diperasan. Penyiar Twitch mestilah mempunyai sekurang-kurangnya 500 pengikut dan 10 penonton serempak pada sesuatu masa. Anda juga mesti menstrim sekurang-kurangnya satu kali setiap minggu.","partners.apply.button":"Mohonlah!","partners.apply.disclaimer":"Marilah naik ke atas bersama-sama!","partners.apply.jobs":"Jika anda lebih berminat untuk pekerjaan langsung di PreMiD, sila lihat **iklan pekerjaan** kami.","partners.sponsors.title":"Para Penaja","partners.sponsors.description":"PreMiD tidak akan berjaya, tanpa kesemua insan yang hebat ini.","partners.partner.aniFlix":"Itulah cara anda tonton anime.","partners.partner.arenaOfKings":"Arena of Kings ialah Permainan Arena PvP berkelajuan tinggi generasi seterusnya yang dimainkan dalam pelayar.","partners.partner.upBeat":"UpBeat ialah radio antarabangsa bukan untung yang berusaha untuk menyediakan hiburan radio dan berita yang berkualiti.","partners.partner.simLiveRadio":"SimLiveRadio ialah radio maklumat hibur paling berjaya untuk permainan penyelakuan di Jerman, Austria dan Switzerland!","partners.partner.discordTemplates":"Mula cipta komuniti anda sendiri dengan templat kami yang hebat ini. Bina kerajaan anda sendiri.","partners.partner.taigaBot":"taiga ialah Bot Discord yang cuba untuk menyediakan segala ciri yang anda mungkin perlukan sekaligus!","partners.partner.bitRock":"Alatan penciptaan pemasangan silang platform yang berkuasa dan mudah untuk digunakan.","partners.partner.statusPage":"Hubungkan status masa nyata dengan mudahnya kepada pengguna anda.","partners.partner.erisly":"Dewi yang bermain sebagai Bot Discord yang menyeronokkan!","partners.partner.reyfm":"REYFM membolehkan anda mendengar 15+ strim muzik secara percuma - tanpa henti. Dengan muzik terbaik dan terbaru hanya untuk anda!","partners.partner.crowdin":"Penyetempatan yang agil untuk syarikat teknologi.","partners.partner.wikijs":"Perisian Wiki bersumber terbuka yang paling berkuasa dan diperluas.","partners.partner.packageCloud":"Antara muka mesra pembangun yang bersepadu untuk segala artifak anda.","partners.partner.fastly":"Di sebalik segalanya yang terbaik di jaringan.","partners.partner.onlyhit":"OnlyHit ialah stesen radio muzik dalam talian yang dicipta untuk memainkan lagu hit terbaik anda 24/7 dan untuk membuatkan anda menerokai lagu hit yang anda mungkin suka.","partners.partner.atomicradio":"Rasai campuran terbaik dan terbaharu dari dunia muzik tanpa henti di kesemua stesen kami, pilih yang mana anda paling suka dan hadirlah secara langsung apabila legenda carta berentap antara mereka dan lagu baharu untuk tempat teratas!","partners.apply.title":"Mohon menjadi rakan kongsi","partners.apply.loggedUser":"Log masuk sebagai {0}","partners.apply.notYou":"Bukan anda?","partners.apply.select.default":"Sila pilih salah satu","partners.apply.select.website":"Laman sesawang","partners.apply.select.other":"Lain-lain","partners.apply.form.name":"Nama","partners.apply.form.name.placeholder":"Cth: PreMiD","partners.apply.form.link":"Pautan","partners.apply.form.link.placeholder":"Cth: https://premid.app","partners.apply.form.description":"Keterangan: (Maksimum 150 aksara)","partners.apply.form.description.placeholder":"Keterangan untuk dipaparkan","partners.apply.form.imageLink":"Pautan imej: (550x300, PNG sahaja)","partners.apply.form.imageLink.placeholder":"Cth: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Tutup","partners.apply.form.button.apply":"Mohon","partners.apply.success":"Terima kasih kerana memohon!","partners.apply.error1":"Sila lengkapkan kesemua medan.","partners.apply.error2":"Maksimum keterangan 150 aksara.","partners.apply.error3":"Sila tambah pautan (mesti bermula dengan https:// dan berakhir dengan .png)","partners.apply.error4":"Anda sudah memohon untuk menjadi rakan kongsi.","presence.page.buttons.sourceCode":"Kod Sumber","presence.sections.description.title":"Keterangan","presence.sections.changelog.title":"Log perubahan","presence.sections.information.title":"Maklumat","presence.sections.information.author":"Penulis","presence.sections.information.version":"Versi","presence.sections.information.likes":"Suka","presence.sections.information.users":"Pengguna","presence.sections.information.tags":"Tag","presence.sections.information.supportedurls":"URL disokong","presence.sections.information.contributors":"Penyumbang","report.title":"Laporkan Pepijat","report.bugcount":"Tinggal {count}/3 Laporan","report.info":"Pelaporan pepijat hanyalah untuk pepijat di dalam laman PreMiD dan Pelayan Discord PreMiD. Pepijat untuk Presence perlu dilaporkan kepada pencipta Presence tersebut. Laporkan pepijat dalam bahasa Inggeris sahaja.","report.overview":"Sertakan keterangan yang jelas dan tepat mengenai pepijat tersebut.","report.os":"Pilih Sistem Pengoperasian anda dan Versi berkaitan","report.browser":"Pilih Pelayar anda dan Versi berkaitan - Anda boleh dapatkan versi dengan melawat about:support di Firefox atau chrome://help","report.description":"Sediakan pautan ke contoh langsung atau set langkah yang jelas untuk menghasilkan semula pepijat ini.","report.button":"Lapor","report.toomany":"Anda mempunyai terlalu banyak laporan aktif. Sila tunggu laporan yang anda hantar untuk disemak dahulu. Laporan disemak secara mingguan, sila bersabar.","report.toomany.alert":"Anda mempunyai terlalu banyak laporan aktif.","report.success":"Laporan Pepijat Dihantar","report.error":"Lebih banyak maklumat diperlukan","report.error.unauth":"Akaun Discord perlu disahkan","report.activebugs":"Pepijat Aktif","store.message.error":"Sambungan tidak disambung.","store.cards.creator":"Penulis","store.cards.popular":"Presence ini amat terkenal di kalangan pengguna.","store.cards.partner":"Presence Rakan Kongsi","store.cards.extraStepsRequired":"Presence ini memerlukan langkah tambahan, sila periksa halamannya untuk maklumat lanjut.","store.header.search":"Cari Presence","store.card.presence.add":"Tambah Presence","store.card.presence.remove":"Buang Presence","store.card.presence.included":"Presence ini dibolehkan secara automatik apabila anda melawat lamannya.","store.category.filters.heading":"Tapis","store.category.filters.mostUsed":"Utamakan yang paling kerap digunakan","store.category.filters.allowAdult":"Tunjuk kandungan dewasa (NSFW 18+)","store.category.filters.likedOnly":"Hanya tunjuk Presence yang disukai","store.filters.added":"Juga tunjuk Presence yang ditambah","store.category.heading":"Kategori","store.category.all":"Semua","store.category.games":"Permainan","store.category.music":"Muzik","store.category.socials":"Sosial","store.category.videos":"Video & Strim","store.category.other":"Lain-lain","store.search":"Cari","store.search.filters":"Pilih","store.search.removeFilter":"Klik untuk buang tapis","user.roles.presenceDeveloper":"Pembangun Presence","user.roles.presenceVerifier":"Penyemak Presence","user.importantPresenceDev.message1":"Pembangun Presence Penting","user.importantPresenceDev.message2":"Telah cipta {0} Presence.","user.geniusPresenceDev.message1":"Pembangun Presence Pintar","user.geniusPresenceDev.message2":"Lebih 100 Presence telah dicipta!","user.switch.contributed":"[Presence/Sumbangan] Pengguna","user.presences.created":"Klik sini untuk tunjukkan Presence yang pengguna ini ciptakan.","user.presences.contributed":"Klik sini untuk tunjukkan Presence yang pengguna ini sumbangkan."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Wil je nieuwe functies?","beta.description.1":"**PreMiD Beta** is nu beschikbaar voor iedereen!","beta.description.2":"Wat krijg je als je je aanmeldt?","beta.features.1":"Nieuwste functies","beta.features.2":"Toegang tot PreMiDs supergeheime tekstkanalen","beta.features.3":"Een speciale rol op onze Discord server","beta.register.text":"Klaar ervoor? Sluit je aan bij {0} andere Beta Testers!","beta.register.button":"Nu aanmelden!","thankyou.title":"Cool! Je bent nu een beta-gebruiker!","thankyou.description":"Onze apen proberen je zo snel mogelijk in ons beta-programma te krijgen. Bedankt voor het registreren!","error.noslots":"Het lijkt erop dat we geen bèta-plaatsen meer hebben.","contributors.headings.staff":"Medewerkers","contributors.headings.supporters":"Supporters","contributors.headings.translators":"Vertalers","contributors.roles.projectLeader":"Projectleider","contributors.roles.staffCoordinator":"Personeelscoördinator","contributors.roles.marketingDirector":"Marketingdirecteur","contributors.roles.administrator":"Administrator","contributors.roles.reviewer":"Controleur","contributors.roles.localizationManager":"Lokalisatiebeheerder","contributors.roles.developer":"Ontwikkelaar","contributors.roles.designer":"Ontwerper","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Ondersteuningsmedewerker","contributors.roles.representative":"Vertegenwoordiger","contributors.roles.proofreader":"Proeflezer","contributors.roles.donator":"Donateur","contributors.roles.booster":"Booster","contributors.roles.translator":"Vertaler","contributors.cards.copyUserId":"Klik om gebruikers-ID te kopiëren.","contributors.cards.userIdCopied":"Gebruikers-ID gekopieerd!","downloads.header.title":"Tijd om te stralen.","downloads.header.subtitle":"Gebruik PreMiD nu en laat aan je vrienden zien wat je aan het doen bent, misschien vind je iemand met dezelfde interesses.","downloads.instructions.heading":"Aan de slag","downloads.instructions.step.1":"Download PreMiD","downloads.instructions.step.2":"Installeer onze applicatie","downloads.instructions.step.3":"Voeg onze extensie toe aan je browser","downloads.instructions.step.4":"Herlaad deze site en controleer of de extensie is aangesloten","downloads.instructions.footer":"Nog steeds problemen? {0}","downloads.instructions.footer.link":"We zijn er om je te helpen!","downloads.appdownloading.header":"Applicatie","downloads.extdownloading.header":"Extensie","downloads.tooltips.os.not.supported.part1":"Waarschuwing:","downloads.tooltips.os.not.supported.part2":"{0} Er is geen installatieprogramma voor dit besturingssysteem. Dit betekent dat er geen professionele ondersteuning voor is.","downloads.mobile.errorMessage":"Wees er alstublieft van bewust dat PreMiD niet wordt ondersteund op mobiele apparaten.","downloads.mobile.showDownloads":"Downloads tonen","downloads.mobile.hideDownloads":"Downloads verbergen","downloads.warning.differentVersion":"Huidige versie van dit platform is {0} (deze versie is specifiek voor Linux en is niet van toepassing op andere platformen).","downloads.warning.differentVersion2":"Deze versie is specifiek voor Linux en is niet van toepassing op andere systemen. De hoofdversie van de applicatie is {0}","downloads.error.login":"Log in om de downloads te kunnen zien.","downloads.error.noaccess.title":"Oh oh, het lijkt erop dat je geen alpha/beta-toegang hebt :(","downloads.error.noaccess.description":"Je kunt **hier** gratis deelnemen aan ons bèta-programma. Schiet op! We hebben nog maar {0} slots beschikbaar","downloads.latest.header":"Vroege versies","downloads.warning.title":"Waarschuwing","downloads.warning.message.opera":"Je moet **deze** extensie ook installeren voor je PreMiD kunt installeren via de Chrome Webstore.","downloads.button.skip":"Overslaan","downloads.button.back":"Terug","downloads.button.cancel":"Annuleren","downloads.button.okay":"Oké","downloads.button.done":"Klaar","downloads.button.login":"Login","downloads.button.skipanyway":"Toch overslaan","downloads.adsbox.thankyou.title":"Bedankt!","downloads.adsbox.thankyou.message":"Advertenties helpen ons team en zorgen ervoor dat onze servers soepel blijven draaien, zodat jij de beste gebruikerservaring krijgt!","downloads.adsbox.disableAdblock":"Schakel je adblock alstublieft uit","downloads.showbeta.message":"Vroege versies tonen","downloads.showbeta.small":"(niet nodig als je hier bent om de normale applicatie te downloaden)","downloads.skipanyway.message1":"Ik wil geen steun geven.","downloads.skipanyway.message2":"Weet u het zeker?","downloads.skipanyway.message3":"Echt?","downloads.skipanyway.message4":"P-Please steun ons :(","downloads.skipanyway.message5":"Ik heb je nodig :<","downloads.skipanyway.message6":"Oké, oké...","store.search.notFound":"We konden die presence niet vinden...","error.code.404":"Sorry, we konden deze pagina niet vinden.","error.code.4":"Je zoekt naar een niet bestaande of verwijderde presence.","error.code.500":"Interne serverfout is opgetreden.","error.page.details":"Foutbeschrijving","error.page.button":"Terug naar startpagina","user.notFound.heading":"Deze gebruiker kon niet worden gevonden. Controleer","user.notFound.message1":"dat de gebruiker waar je naar op zoek bent juist is.","user.notFound.message2":"dat de gebruiker heeft genoeg presences gemaakt en heeft de presence developer rol in onze Discord server.","user.notFound.message3":"of anderen hetzelfde probleem ondervinden op onze Discord server.","user.notFound.message4":"Als je denkt dat dit een fout was, neem dan contact met ons op in [onze Discord server].","footer.language":"Taal","footer.usercount.heading":"Klaar om PreMiD te gebruiken?","footer.usercount.message":"Doe mee met {0} andere gebruikers!","footer.usercount.button":"Installeren","footer.partners.heading":"Partners","footer.followUs.heading":"Volg ons","footer.developers.heading":"Ontwikkelaars","footer.developers.documentation":"Documentatie","footer.developers.richpresence":"Rich presence","footer.supportus.heading":"Steun ons","footer.supportus.donate":"Doneren","footer.supportus.contribute":"Bijdragen","footer.supportus.translate":"Vertalen","footer.supportus.jobs":"Met ons samenwerken!","footer.help.heading":"Help","footer.help.troubleshooting":"Probleemoplossing","footer.help.getsupport":"Krijg Hulp","footer.help.information":"Informatie","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privacy","footer.help.information.terms":"Voorwaarden","footer.more.heading":"Meer","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} door {1}","footer.copyright.line2":"Website wordt onderhouden door {0}","footer.partners.more":"Klik hier om de rest van de partners en sponsoren te zien.","header.language":"Nederlands","header.languageNotification.title":"Wij ondersteunen jouw taal, wil je overschakelen?","header.languageNotification.text":"Onze website is vertaald in jouw taal. Dit kan helpen als je niet goed Engels spreekt.","header.languageNotification.btnDecline":"Nee, bedankt","header.languageNotification.btnAccept":"Verwissel van taal","header.loader.phrases":"Pannenkoeken bakken...;Containers plaatsen...;Je IP-adres parseren...;UwU;Regels overtreden...","header.store":"Bibliotheek","header.downloads":"Downloads","header.contributors":"Bijdragers","header.login":"Login","header.lia":"Aangemeld als","header.rab":"Rapporteer een bug","header.staff":"Dashboard","header.logout":"Log Uit","home.introduction.paragraph":"**PreMiD** is een eenvoudig, configureerbaar hulpmiddel waarmee je kunt laten zien wat je op het internet aan het doen bent in je Discord status.","home.introduction.button.features":"Functies","home.introduction.button.downloads":"Downloads","home.examples.playingagame":"Speelt een spel","home.examples.timestamp":"{0} over","home.examples.timestamp2":"{0} verstreken","home.examples.status.playing":"Wordt afgespeeld","home.examples.status.live":"Live","home.examples.status.browsing":"Bladeren...","home.features.heading":"Je houdt van deze functies!","home.features.presencesystem.heading":"Vind **je** presence","home.features.presencesystem.description":"Door de manier waarop we onze extensie gemaakt hebben, kun je presences van anderen toevoegen, gebruiken en beheren in onze extensie!","home.features.presencesystem.button":"Naar bibliotheek","home.features.simpleInterface.heading":"Eenvoudige gebruikersinterface","home.features.simpleInterface.description":"Moe van ingewikkelde gebruikersinterfaces? Wij houden onze UI zo eenvoudig en nuttig mogelijk, met belangrijke functies zoals:","home.features.simpleInterface.description.1":"App- en extensie-instellingen","home.features.simpleInterface.description.2":"Presence beheer","home.features.simpleInterface.description.3":"Sorteer op categorie","home.features.quickSupport.heading":"Snelle ondersteuning","home.features.quickSupport.description":"Is er iets kapot, krijg je een heleboel foutmeldingen of werkt het gewoon niet? We verhelpen deze problemen graag in onze Discord-server. We hebben daar ons eigen ondersteuningssysteem dat ervoor zorgt dat je probleem zo snel mogelijk opgelost wordt.","home.features.quickSupport.button":"Word lid van onze Discord","home.languageSelector.tippy":"Websitetaal","jobs.modal.title":"Solliciteer voor {0}","jobs.modal.step":"Stap {0} van 2","jobs.modal.buttons.next":"Volgende","jobs.modal.buttons.join":"Word lid","jobs.modal.buttons.cancel":"Annuleren","jobs.modal.error":"Vul alle velden in","jobs.modal.notice":"PreMiD is een open-source project, wat betekent dat we een team zonder winstoogmerk zijn. Alle donaties en patreon-inkomsten gaan terug naar het product. Door te solliciteren bij PreMiD, erken je dat je vrijwilliger zult zijn in het team en je niet zult worden betaald voor je werk.","jobs.guild.required":"Word lid van onze Discord","jobs.guild.explanation":"Om te kunnen solliciteren moet je je hebben aangesloten bij onze Discord-server. Anders kunnen we geen contact met je opnemen als je wordt geselecteerd!","jobs.header.title":"Werk voor PreMiD","jobs.header.description":"Ben je klaar om het grootste Rich-Presence-programma te helpen?","jobs.openings.title":"Vacatures","jobs.benefits.title":"Hoge voordelen","jobs.benefit1.title":"Ontmoet ons","jobs.benefit1.description":"Kom in contact met de mensen achter PreMiD.","jobs.benefit2.title":"Sneak Peeks","jobs.benefit2.description":"Kijk eens naar onze ontwikkeling en marketing.","jobs.benefit3.title":"Eer","jobs.benefit3.description":"Krachtige Discord-rechten en een kleurrijke rol.","jobs.benefit4.title":"Steun PreMiD","jobs.benefit4.description":"Met jouw bijdrage is het mogelijk om dit project uit te voeren.","jobs.benefit5.title":"Time-out","jobs.benefit5.description":"Neem je tijd, dit is vrijwillig werk.","jobs.benefit6.title":"Vroege toegang","jobs.benefit6.description":"Test nieuwe functies voordat ze uit komen.","jobs.success.applied":"Bedankt voor het solliciteren!","jobs.errors.alreadyApplied":"Je hebt al eerder gesolliciteerd!","maintenance.big":"Oei!","maintenance.heading":"Helaas ondervinden we wat technische problemen. We zullen binnenkort terugkeren. Sorry voor het ongemak.","maintenance.heading2":"Kom later terug voor meer informatie.","maintenance.message":"Tot onze speciale ontwikkelaars dit repareren, voel je vrij om hier te kijken!","maintenance.statuspage":"Statuspagina","maintenance.discordserver":"Discord server","merch.title":"Welkom bij de officiële merchandisewinkel van**PreMiD**!","merch.swag":"Vind jouw **Swag**","merch.fit":"**Kies je maat**","merch.cart":"Voeg toe aan winkelwagen","merch.help":"Heb je problemen met onze bibliotheek of een bestelling? Neem contact op met {0}ondersteuning{1}","merch.item.added":"{0} toegevoegd aan uw winkelwagen","merch.error.noitem":"Geen item om toe te voegen aan uw winkelwagen","partners.header.title":"Partners","partners.header.description":"Word lid van de familie en krijg exclusieve partnervoordelen om te laten zien hoeveel swag je hebt.","partners.slideshow.description":"Deze horen al bij ons","partners.why.title":"Zullen we in de hemel gaan in plaats van de hel?","partners.why.benefit1.title":"Jouw gratis presence","partners.why.benefit1.description":"Ons team zal je voorzien van een presence van je service.","partners.why.benefit2.title":"Word geverifieerd","partners.why.benefit2.description":"Een speciale rol en een grote eer zullen aan u worden gegeven in onze Discord server.","partners.why.benefit3.title":"Meta-tag integratie","partners.why.benefit3.description":"Zet je presence automatisch aan wanneer iemand je website bezoekt.","partners.why.benefit4.title":"Word onsterfelijk","partners.why.benefit4.description":"Een vervelende plek op onze partnerpagina.","partners.why.benefit5.title":"Wees beroemd","partners.why.benefit5.description":"Aanbevolen op onze sociale media.","partners.requirements.title":"Vereisten","partners.requirements.first.title":"Waar zijn wij naar opzoek?","partners.requirements.first.description":"We houden oog voor groeiende communities en opwindende dingen op internet. TL;DR je zou PreMiD al moeten gebruiken en klaar zijn om het te verspreiden naar nog meer internetfreaks. Acceptatie in het programma is uiterst kwalitatief en varieert van kandidaat tot kandidaat.","partners.requirements.second.title":"Onze firewall","partners.requirements.second.description":"We accepteren momenteel verschillende soorten inspanningen in ons partnerschapsprogramma. Iedereen moet de kans krijgen om opgemerkt te worden. Twitch-broadcasts moeten ten minste 500 volgers en ten minste 10 kijkers hebben. Je moet ten minste 1 keer per week streamen.","partners.apply.button":"Nu solliciteren!","partners.apply.disclaimer":"Laten we samen naar de hemel gaan!","partners.apply.jobs":"Als u eerder geïnteresseerd bent in een directe baan bij PreMiD, neem dan een kijkje op onze **vacatureadvertentie**.","partners.sponsors.title":"Sponsoren","partners.sponsors.description":"PreMiD zou niet mogelijk zijn, zonder deze geweldige mensen.","partners.partner.aniFlix":"Zo kijk je naar anime.","partners.partner.arenaOfKings":"Arena of Kings is een next-gen, snelle PvP Arena Game gespeeld in de browser.","partners.partner.upBeat":"UpBeat is een non-profitinternationale radio die ernaar streeft om te zorgen voor radio- en nieuwsvermaak van hoge kwaliteit.","partners.partner.simLiveRadio":"SimLiveRadio is de meest succesvolle infotainment-radio voor simulatiespelletjes in Duitsland, Oostenrijk en Zwitserland!","partners.partner.discordTemplates":"Begin je eigen community met onze geweldige templates. Bouw je eigen koninkrijk.","partners.partner.taigaBot":"taiga is een Discord Bot die probeert alle functies aan te bieden die je mogelijk in één keer nodig hebt!","partners.partner.bitRock":"Een krachtig en eenvoudig te gebruiken platform installatietool voor de creatie van platformen.","partners.partner.statusPage":"Eenvoudig real-time status te communiceren aan je gebruikers.","partners.partner.erisly":"Een godin die als een leuke Discord bot speelt!","partners.partner.reyfm":"REYFM laat je gratis naar 15+ muziek streams luisteren - non-stop. Met de beste en nieuwste muziek alleen voor jou!","partners.partner.crowdin":"Agile lokalisatie voor technologiebedrijven.","partners.partner.wikijs":"De krachtigste en uitbreidbare open source Wiki software.","partners.partner.packageCloud":"Een verenigde, ontwikkelaarsvriendelijke interface voor al je artefacten.","partners.partner.fastly":"Achter het beste van het web.","partners.partner.onlyhit":"OnlyHot is jouw online muziek radiostation, gemaakt om je de beste hits 24/7 af te spelen en om je als eerste de toekomstige hits te laten ontdekken.","partners.partner.atomicradio":"Ervaar de nieuwste en beste mix van de muziekwereld non-stop op al onze stations. Kies je favoriet en wees erbij wanneer de lijstlegendes en de nieuwkomers tegen elkaar strijden voor nummer één!","partners.apply.title":"Solliciteer voor partner","partners.apply.loggedUser":"Aangemeld als {0}","partners.apply.notYou":"Ben jij dit niet?","partners.apply.select.default":"Selecteer a. u. b. één","partners.apply.select.website":"Website","partners.apply.select.other":"Overige","partners.apply.form.name":"Naam","partners.apply.form.name.placeholder":"Bijv.: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Bijv.: https://premid.app","partners.apply.form.description":"Beschrijving: (maximaal 150 tekens)","partners.apply.form.description.placeholder":"Beschrijving voor featured","partners.apply.form.imageLink":"Afbeeldingslink: (550x300, alleen PNG)","partners.apply.form.imageLink.placeholder":"Bijv.: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Sluit","partners.apply.form.button.apply":"Solliciteren","partners.apply.success":"Bedankt voor je aanvraag!","partners.apply.error1":"Vul alstublieft alle velden in.","partners.apply.error2":"Maximaal 150 tekens beschrijving.","partners.apply.error3":"Voeg een link toe (moet beginnen met https:// en eindigen met .png)","partners.apply.error4":"Je hebt al een verzoek ingediend voor partner.","presence.page.buttons.sourceCode":"Broncode","presence.sections.description.title":"Beschrijving","presence.sections.changelog.title":"Veranderingslogboek","presence.sections.information.title":"Informatie","presence.sections.information.author":"Auteur","presence.sections.information.version":"Versie","presence.sections.information.likes":"Favorieten","presence.sections.information.users":"Gebruikers","presence.sections.information.tags":"Tags","presence.sections.information.supportedurls":"Ondersteunde URL\'s","presence.sections.information.contributors":"Bijdragers","report.title":"Rapporteer Een Bug","report.bugcount":"{count}/3 rapporten over","report.info":"Bugs rapporteren is voor bugs op de PreMiD website en de PreMiD Discord Server. Voor bugs in presences rapporteer het aan de maker van de presence. Meld bugs alleen in Engels.","report.overview":"Geef een duidelijke en beknopte beschrijving van wat de bug is.","report.os":"Selecteer je besturingssysteem en versie","report.browser":"Selecteer je browser en versie - Je kunt de versie verkrijgen door about:support te bezoeken op Firefox of chrome://help","report.description":"Geef een link naar een levend voorbeeld of een reeks ondubbelzinnige stappen om deze bug te reproduceren.","report.button":"Rapporteer","report.toomany":"Je hebt te veel actieve rapporten. Wacht tot je ingediende rapporten zijn beoordeeld. Rapporten worden op wekelijkse basis gecontroleerd, heb A.U.B. geduld.","report.toomany.alert":"Je hebt te veel actieve rapporten.","report.success":"Bug Ingezonden","report.error":"Meer informatie vereist","report.error.unauth":"Discord account moet geverifieerd worden","report.activebugs":"Actieve bugs","store.message.error":"Extensie is niet verbonden.","store.cards.creator":"Auteur","store.cards.popular":"Deze presence is erg populair rond gebruikers.","store.cards.partner":"Partner presence","store.cards.extraStepsRequired":"Deze presence vereist extra stappen om te kunnen werken. Controleer de pagina voor meer informatie.","store.header.search":"Zoeken naar presence","store.card.presence.add":"Presence toevoegen","store.card.presence.remove":"Presence verwijderen","store.card.presence.included":"Deze presence wordt automatisch weergegeven als je de site bezoekt.","store.category.filters.heading":"Filters","store.category.filters.mostUsed":"Populairste eerst tonen","store.category.filters.allowAdult":"NSFW tonen","store.category.filters.likedOnly":"Alleen favorieten tonen","store.filters.added":"Toegevoegde presences tonen","store.category.heading":"Categorieën","store.category.all":"Alle","store.category.games":"Spellen","store.category.music":"Muziek","store.category.socials":"Sociaal","store.category.videos":"Video\'s & Streams","store.category.other":"Overige","store.search":"Zoeken","store.search.filters":"Enter","store.search.removeFilter":"Klik om filter te verwijderen","user.roles.presenceDeveloper":"Presenceontwikkelaar","user.roles.presenceVerifier":"Presence Verificator","user.importantPresenceDev.message1":"Belangrijke presenceontwikkelaar","user.importantPresenceDev.message2":"{0} presences gemaakt.","user.geniusPresenceDev.message1":"Geniale presenceontwikkelaar","user.geniusPresenceDev.message2":"Meer dan 100 presences gemaakt!","user.switch.contributed":"[Presences/Bijadragen] van gebruiker","user.presences.created":"Klik hier om de presences te tonen die deze gebruiker heeft gemaakt.","user.presences.contributed":"Klik hier om de presences te tonen waaraan de gebruiker heeft bijgedragen."}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Ansatte","contributors.headings.supporters":"Støttere","contributors.headings.translators":"Oversettere/Tolkere","contributors.roles.projectLeader":"Prosjekt Leder","contributors.roles.administrator":"Administrator","contributors.roles.reviewer":"Anmelder","contributors.roles.booster":"Booster","contributors.cards.copyUserId":"Klikk for å kopiere brukeren sin ID.","downloads.header.title":"På tide å vise seg.","downloads.header.subtitle":"Bruk PreMid nå og vis vennene dine hva du gjør, kanskje du finner noen med samme interesser.","downloads.instructions.heading":"Kom i gang!","downloads.instructions.step.1":"Last ned PreMiD","downloads.instructions.step.2":"Last ned vår applikasjon","downloads.instructions.step.3":"Legg til vår utvidelse til din nettleser","downloads.instructions.step.4":"Last inn denne siden på nytt og sjekk om utvidelsen er koblet til","downloads.instructions.footer":"Har du forsatt problemer? {0}","downloads.instructions.footer.link":"Vi er her for å hjelpe deg!","downloads.appdownloading.header":"Applikasjon","downloads.extdownloading.header":"Utvidelse/Tillegg","downloads.tooltips.os.not.supported.part1":"Advarsel:","downloads.tooltips.os.not.supported.part2":"{0} Det er ingen installer for dette operasjon systemet! Dette betyr at det er ingen profesjonell support for det.","downloads.mobile.errorMessage":"Vær oppmerksom på at PreMiD ikke er støttet på mobilenheter.","downloads.mobile.showDownloads":"Vis nedlastinger","downloads.mobile.hideDownloads":"Skjul nedlastinger","downloads.warning.differentVersion":"Nåværende versjon av denne platformen er {0} (denne versjonen er bare for Linux og gjelder ikke på andre platformer).","downloads.warning.differentVersion2":"Denne versjonen er kun for Linux, og gjelder ikke for andre systemer. Hovedversjonen er: {0}","downloads.error.login":"Vennligst logg inn for å se disse nedlastingene.","downloads.error.noaccess.title":"Uff da, ser ut til at du ikke har alpha/beta tilgang :(","downloads.error.noaccess.description":"Du kan bli med i vårt beta program **her** gratis. Skynd deg! Vi har bare {0} plasser igjen","downloads.latest.header":"Tidligere versjoner","downloads.warning.title":"Advarsel","downloads.warning.message.opera":"Du må installere **denne** utvidelsen for å kunne klare å installere PreMiD fra Chrome Webstore.","downloads.button.skip":"Hopp Over","downloads.button.back":"Tilbake","downloads.button.cancel":"Avbryt","downloads.button.okay":"Ok","downloads.button.done":"Ferdig","downloads.button.login":"Logg inn","downloads.button.skipanyway":"Hopp over uansett","downloads.adsbox.thankyou.title":"Takk!","downloads.adsbox.thankyou.message":"We bruker annonser som støtte for vårt lag og for å opprettholde våre servere for å tilby deg den beste brukeropplevelsen!","downloads.adsbox.disableAdblock":"Vennligst deaktiver adblock","downloads.showbeta.small":"(ikke nødvendig dersom du kun er her for å laste ned normal applikasjon)","downloads.skipanyway.message1":"Jeg ønsker ikke å være støtte.","downloads.skipanyway.message2":"Er du sikker?","downloads.skipanyway.message3":"Virkelig?","downloads.skipanyway.message4":"V-Vennligst hjelp :(","downloads.skipanyway.message5":"Jeg trenger deg :<","downloads.skipanyway.message6":"Okei, okei...","user.notFound.heading":"Den brukeren kunne ikke bli funnet. Prøv å være sikker på at","footer.language":"Språk","footer.usercount.heading":"Klar for å bruke PreMiD?","footer.usercount.message":"Bli med over {0} brukere nå!","footer.usercount.button":"Installer","footer.partners.heading":"Partnere","footer.followUs.heading":"Følg Oss","footer.developers.heading":"Utviklere","footer.developers.documentation":"Dokumentasjon","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Støtt oss","footer.supportus.donate":"Doner","footer.supportus.contribute":"Bidra","footer.supportus.translate":"Oversett","footer.supportus.jobs":"Jobb med oss!","footer.help.heading":"Hjelp","footer.help.troubleshooting":"Feilsøking","footer.help.getsupport":"Få hjelp","footer.help.information":"Informasjon","footer.help.information.cookies":"Informasjonskapsler","footer.help.information.privacy":"Personvern","footer.help.information.terms":"Vilkår","footer.more.heading":"Mer","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} av {1}","footer.copyright.line2":"Nettside operert av {0}","footer.partners.more":"Klikk her for å se resten av våre partnere og sponsorer.","header.language":"Norsk","header.languageNotification.title":"Vi støtter språket ditt, vil du skifte siden til å vise i ditt språk?","header.languageNotification.text":"Vår nettside har blitt oversatt til språket ditt. Dette hjelper kanskje i tilfelle du ikke kan Engelsk så bra.","header.languageNotification.btnDecline":"Nei takk","header.languageNotification.btnAccept":"Bytt Språk","header.loader.phrases":"Baker pannekaker...;Plasserer containere...;Sjekker IP\'en din...;UwU;Bryter Regler...","header.store":"Butikk","header.downloads":"Nedlastinger","header.contributors":"Bidragsytere","header.login":"Logg inn","header.lia":"Logget inn som","header.rab":"Rapporter en feil","header.staff":"Skrivebord","header.logout":"Logg ut","home.introduction.paragraph":"**PreMiD** er et simpelt og konfigurerbart program som lar deg vise hva du gjør på internett via din Discord \\"spiller nå\\" status.","home.introduction.button.downloads":"Nedlastinger","home.examples.timestamp2":"{0} brukt","home.examples.status.playing":"Spiller av","home.examples.status.live":"Direkte","home.examples.status.browsing":"Surfer igjennom...","home.features.presencesystem.description":"Vi utviklet vår ekstensjon som lar deg legge til og bruke Presencess laget av andre!","home.features.presencesystem.button":"Se hva slags ekstensjoner vi har tilgjengelig","home.features.simpleInterface.description":"Lei av kompliserte user interface? Dette er hvorfor vi har lagt dette og prøver vår beste ved å holde UI vårt enkelt, brukfull mest som mulig og med viktige funksjoner som:","home.features.simpleInterface.description.3":"Sorter etter kategori","home.features.quickSupport.button":"Bli med i vår Discord","home.languageSelector.tippy":"Nettsted språk","jobs.modal.title":"Søk etter {0}","jobs.modal.step":"Steg {0} ut av 2","jobs.modal.buttons.next":"Neste","jobs.modal.buttons.join":"Bli med","jobs.modal.buttons.cancel":"Avbryt","jobs.modal.error":"Vennlights fyll ut alle obligatoriske felt","jobs.modal.notice":"PreMiD er ett prosjekt med åpen kildekode, som betyr at vi er ett ideelt lag, vær donasjon går tilbake til produktet. Ved å søke etter en jobb posisjon hos PreMiD erkjenner du at du skal være frivillig med i laget, du vil ikke få betalt for jobben du gjør.","jobs.guild.required":"Bli med i vår Discord","jobs.guild.explanation":"For å kunne søke må du ha blitt med i vår Discord server. Ellers vil vi ikke kunne kontakte deg dersom du ender opp med å bli valgt!","jobs.header.title":"Jobb for PreMiD","jobs.header.description":"Er du klar for å hjelpe den største Rich-Presence programmet på Discord?","jobs.openings.title":"Ledige Stillinger","jobs.benefits.title":"Luksus Fordeler","jobs.benefit1.title":"Møt oss","jobs.benefit1.description":"Få kontakt med folkene back PreMiD.","jobs.benefit2.title":"Snik Titt","jobs.benefit2.description":"Ta en titt på får utvikling og markedsføring.","jobs.benefit3.title":"Ære","jobs.benefit3.description":"Kraftig Discord-tillatelser og en fargerik rolle.","jobs.benefit4.title":"Støtt PreMiD","jobs.benefit4.description":"Med din hjelp er det mulig å holde prosjektet gående.","jobs.benefit5.title":"Pause","jobs.benefit5.description":"Ta den tiden du trenger. Dette er frivillig arbeid.","jobs.benefit6.title":"Tidlig tilgang","jobs.benefit6.description":"Test nye funskjoner før noen andre.","jobs.success.applied":"Takk for at du sendte inn din søknad!","jobs.errors.alreadyApplied":"Du har allerede søkt om en stilling!","maintenance.heading":"Desverre så opplever vi noen tekniske problemer. Vi jobber med å fikse dette, vi beklager for ulempen.","maintenance.heading2":"Vennligst kom tilbake senere for mer informasjon.","maintenance.message":"Inntil utviklerene våre fikser dette så kan du ta en titt under!","maintenance.discordserver":"Discord Server","partners.header.title":"Partnere","partners.header.description":"Bli med i familien og få noen partne fordeler som viser hvor mye swag du har.","partners.slideshow.description":"Disse tilhører oss allerede","partners.why.title":"Hva med å gå til himmelen istedenfor helvete?","partners.why.benefit1.title":"Din gratise utvidelse","partners.why.benefit1.description":"Vårt lag vil tilby deg en utvidelse til tjenesten du bruker.","partners.why.benefit2.title":"Bli verifisert","partners.why.benefit2.description":"En spesiell rolle og stor ære vil blir gitt til deg i vår Discord server.","partners.why.benefit3.title":"Meta-tag integrasjon","partners.why.benefit3.description":"Automatisk bruker den utvidelsen når noen besøker nettsiden din.","partners.why.benefit4.title":"Bli udødelig","partners.why.benefit4.description":"Ett fint sted for deg på vår partner side.","partners.why.benefit5.title":"Bli berømt","partners.why.benefit5.description":"Bli fremhevet på våre sosiale medier.","partners.requirements.title":"Krav","partners.requirements.first.title":"Hva ser vi etter?","partners.requirements.first.description":"Vi holder utkikk for voksende samfunn og spennende ting rundt om internett. TL;DR du burde allerede bruke PreMiD og være klar til å spre det til flere internett brukere. Aksepterende program er ekstrem kvalitet og vil variere fra en kanditat til en annen.","partners.requirements.second.title":"Vår brannmur","partners.requirements.second.description":"Vi tar for tiden in flere type søkere for vårt partnerprogram. Alle burde ha en sjanse til å bli sett. Twitch streamere burde ihvertfall ha 500 følgere og minst 10 seere. Du må streame minst 1 gang i uken.","partners.apply.button":"Søk nå!","partners.apply.disclaimer":"La oss dra til himmelen sammen!","partners.apply.jobs":"Hvis du er mer interessert i en direkte jobb hos PreMiD, se på våre **jobbannonser**.","partners.sponsors.title":"Sponsorer","partners.sponsors.description":"PreMiD ville ikke vært mulig uten disse fantastiske personene.","partners.partner.aniFlix":"Det er sånn du ser Anime.","partners.partner.arenaOfKings":"Arena of Kings er en next-generasjon fort-kjørende PvP Arena spill som du spiller i din nettleser.","partners.partner.upBeat":"UpBeat er en frivillig internasjon radio som kjører non-stop kvalitet radio og nyhetsunderholdning.","partners.partner.wikijs":"Den kraftigste og mest utvidbare Wiki-programvaren med åpen kildekode.","partners.partner.fastly":"Bak det beste av nettet.","partners.apply.loggedUser":"Logget inn som {0}","partners.apply.notYou":"Ikke deg?","partners.apply.select.default":"Vennligst velg en","partners.apply.form.button.close":"Lukk","partners.apply.form.button.apply":"Søk","partners.apply.success":"Takk for din søknad!","partners.apply.error1":"Vennligst fyll ut alle feltene.","partners.apply.error2":"Beskrivelsen kan bare være maksimalt 150 tegn.","partners.apply.error3":"Vennligst legg til en lenke (må starte med https:// og slutte med .png)","partners.apply.error4":"Du har allerede søkt om å bli en partner.","presence.page.buttons.sourceCode":"Kildekode","presence.sections.description.title":"Beskrivelse","presence.sections.changelog.title":"Endringslogg","presence.sections.information.title":"Informasjon","presence.sections.information.author":"Forfatter","presence.sections.information.version":"Versjon","presence.sections.information.likes":"Antall som liker","presence.sections.information.users":"Brukere","presence.sections.information.tags":"Tags","presence.sections.information.supportedurls":"Støttet URLs","presence.sections.information.contributors":"Bidragsytere","store.cards.creator":"Forfatter","user.roles.presenceDeveloper":"Utvidelse Utvikleren","user.roles.presenceVerifier":"Utvidelsen\'s verifiserer","user.importantPresenceDev.message1":"Viktig Utvidelses Utvikler","user.importantPresenceDev.message2":"Lagde {0} presences.","user.geniusPresenceDev.message1":"Smarteste utvidelse utvikler","user.geniusPresenceDev.message2":"Lagde over 100 presences!","user.switch.contributed":"Bruker (utvidelse/hjelp)","user.presences.created":"Klikk her for å vise utvidelsen denne brukeren har lagd.","user.presences.contributed":"Klikk her for å se utvidelser denne brukeren har hjulpet med å lage."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Chcesz nowych funkcji?","beta.description.1":"**PreMiD Beta** jest teraz dostępna dla wszystkich!","beta.description.2":"Co dostaniesz kiedy się zarejestrujesz?","beta.features.1":"Najnowsze funkcje","beta.features.2":"Dostęp do super sekretnych kanałów na serwerze Discord","beta.features.3":"Specjalną role na naszym serwerze Discord","beta.register.text":"Gotowy? Dołącz do {0} beta testerów!","beta.register.button":"Zarejestruj się teraz!","thankyou.title":"Super! Jesteś teraz użytkownikiem beta!","thankyou.description":"Nasze małpki pracują nad tym aby dodać Cię do naszego beta programu tak szybko jak to możliwe. Dziękujemy za rejestrację!","error.noslots":"Wygląda na to, że nie mamy już dostępnych miejsc dla beta testerów.","contributors.headings.staff":"Administracja","contributors.headings.supporters":"Wspierający","contributors.headings.translators":"Tłumacze","contributors.roles.projectLeader":"Lider projektu","contributors.roles.staffCoordinator":"Koordynator Zespołu","contributors.roles.marketingDirector":"Dyrektor Marketingu","contributors.roles.administrator":"Administrator","contributors.roles.reviewer":"Recenzenci","contributors.roles.developer":"Developer","contributors.roles.designer":"Grafik","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Wsparcie","contributors.roles.representative":"Przedstawiciel","contributors.roles.proofreader":"Korektor","contributors.roles.donator":"Donator","contributors.roles.booster":"Booster","contributors.roles.translator":"Tłumacz","contributors.cards.copyUserId":"Kliknij, aby skopiować ID użytkownika.","contributors.cards.userIdCopied":"Skopiowano ID użytkownika!","downloads.header.title":"Czas się pochwalić.","downloads.header.subtitle":"Użyj PreMiD teraz i zacznij się chwalić znajomym, co robisz, być może znajdziesz kogoś o takich samych zainteresowaniach.","downloads.instructions.heading":"Jak rozpocząć","downloads.instructions.step.1":"Pobierz PreMiD","downloads.instructions.step.2":"Zainstaluj naszą aplikację","downloads.instructions.step.3":"Pobierz nasze rozszerzenie dla twojej przeglądarki","downloads.instructions.step.4":"Odśwież stronę i sprawdź, czy rozszerzenie jest połączone","downloads.instructions.footer":"Nadal masz problemy? {0}","downloads.instructions.footer.link":"Jesteśmy tutaj, aby Ci pomóc!","downloads.appdownloading.header":"Aplikacja","downloads.extdownloading.header":"Rozszerzenie","downloads.tooltips.os.not.supported.part1":"Ostrzeżenie:","downloads.tooltips.os.not.supported.part2":"{0} Nie posiadamy instalatora dla tego systemu operacyjnego. To oznacza, że nie mamy pod to profesjonalnego wsparcia.","downloads.mobile.errorMessage":"Pamiętaj, że PreMiD nie jest obsługiwany na telefonach komórkowych.","downloads.mobile.showDownloads":"Pokaż pliki do pobrania","downloads.mobile.hideDownloads":"Ukryj pliki do pobrania","downloads.warning.differentVersion2":"Ta wersja jest specyficzna dla Linux\'a i nie ma zastosowania do innych systemów. Główna wersja aplikacji to {0}","downloads.error.login":"Zaloguj się, aby zobaczyć zawartość do pobrania.","downloads.error.noaccess.title":"O nie, wygląda na to, że nie masz dostępu do alpha/beta :(","downloads.error.noaccess.description":"Możesz dołączyć do naszego programu beta **tutaj** za darmo. Pośpiesz się! Mamy tylko {0} dostępnych miejsc","downloads.latest.header":"Wczesne wydania","downloads.warning.title":"Ostrzeżenie","downloads.warning.message.opera":"Musisz zainstalować **to** rozszerzenie, aby zainstalować PreMiD z Chrome Webstore.","downloads.button.skip":"Pomiń","downloads.button.back":"Wstecz","downloads.button.okay":"Okej","downloads.button.done":"Gotowe","downloads.button.login":"Zaloguj","downloads.adsbox.thankyou.title":"Dziękujemy!","downloads.adsbox.thankyou.message":"Używamy reklam, aby wspierać nasz zespół i utrzymywać nasze serwery oraz aby zaoferować najlepszą jakość obsługi!","downloads.adsbox.disableAdblock":"Wyłącz adblocka, bardzo prosimy","downloads.showbeta.small":"(niepotrzebne jeśli jesteś tutaj pobrać podstawową aplikacje)","downloads.skipanyway.message1":"Nie chcę wspierać.","downloads.skipanyway.message2":"Czy jesteś pewien?","downloads.skipanyway.message3":"Na pewno?","downloads.skipanyway.message4":"P-proszę wesprzyj nas :(","downloads.skipanyway.message5":"Potrzebujemy cię :<","downloads.skipanyway.message6":"Okej, okej...","store.search.notFound":"Nie możemy znaleźć tego Presence...","error.code.404":"Przepraszamy, nie mogliśmy znaleźć tej strony.","error.code.4":"Szukasz nieistniejącego lub usuniętego Presence.","error.code.500":"Wystąpił wewnętrzny błąd serwera.","error.page.details":"Szczegóły","error.page.button":"Powrót do strony głównej","user.notFound.heading":"Ten użytkownik nie został znaleziony. Spróbuj upewnić się czy","user.notFound.message1":"że szukany identyfikator użytkownika jest poprawny.","user.notFound.message2":"że użytkownik utworzył wystarczającą liczbę Presence i ma rolę Presence Developera na naszym serwerze Discord.","user.notFound.message3":"jeśli inni mają ten sam problem na naszym serwerze Discord.","user.notFound.message4":"Jeśli uważasz, że to błąd, skontaktuj się z nami na [naszym serwerze Discord].","footer.language":"Język","footer.usercount.heading":"Gotowy do używania PreMiD?","footer.usercount.message":"Dołącz do {0} użytkowników już teraz!","footer.usercount.button":"Zainstaluj","footer.partners.heading":"Partnerzy","footer.followUs.heading":"Śledź nas","footer.developers.heading":"Deweloperzy","footer.developers.documentation":"Dokumentacja","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Wesprzyj nas","footer.supportus.donate":"Wesprzyj","footer.supportus.contribute":"Przyczyń się","footer.supportus.translate":"Przetłumacz","footer.supportus.jobs":"Pracuj z nami!","footer.help.heading":"Pomoc","footer.help.troubleshooting":"Rozwiązywanie problemów","footer.help.getsupport":"Wsparcie","footer.help.information":"Informacje","footer.help.information.cookies":"Pliki Cookies","footer.help.information.privacy":"Polityka prywatności","footer.help.information.terms":"Warunki Użytkowania","footer.more.heading":"Więcej","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} przez {1}","footer.copyright.line2":"Stroną zarządza {0}","footer.partners.more":"Kliknij tutaj, aby zobaczyć naszych pozostałych partnerów i sponsorów.","header.language":"Polski","header.languageNotification.title":"Nasza strona została przetłumaczona na twój język, czy chcesz zmienić język strony?","header.languageNotification.text":"Nasza strona internetowa została przetłumaczona na Twój język. Może ci pomóc, jeśli znasz angielskiego.","header.languageNotification.btnDecline":"Nie, dzięki","header.languageNotification.btnAccept":"Zmień Język","header.loader.phrases":"Pieczenie naleśników...;Przenoszenie pudeł...;Przetwarzanie twojego adresu IP...;UwU;Łamanie zasad...","header.store":"Sklep","header.downloads":"Pobieranie","header.contributors":"Współtwórcy","header.login":"Zaloguj","header.lia":"Zalogowano jako","header.rab":"Zgłoś błąd","header.staff":"Panel","header.logout":"Wyloguj się","home.introduction.paragraph":"**PreMiD** to proste, konfigurowalne narzędzie pozwalające pokazać, co teraz robisz w sieci na twoim statusie w Discordzie.","home.introduction.button.features":"Funkcje","home.introduction.button.downloads":"Pobierz","home.examples.playingagame":"W grze","home.examples.timestamp":"Pozostało {0}","home.examples.timestamp2":"Upłynęło {0}","home.examples.status.playing":"Odtwarzanie","home.examples.status.live":"Na żywo","home.examples.status.browsing":"Przeglądanie...","home.features.heading":"Pokochasz te funkcje!","home.features.presencesystem.heading":"Znajdź **swoją** aktywność","home.features.presencesystem.description":"Stworzyliśmy nasze rozszerzenie, które pozwala ci na używanie presences stworzonych przez innych użytkowników i zarządzania nimi w naszej aplikacji!","home.features.presencesystem.button":"Odwiedź sklep","home.features.simpleInterface.heading":"Prosty interfejs","home.features.simpleInterface.description":"Masz dość skomplikowanych interfejsów? Dlatego stworzyliśmy i staramy się, aby nasz interfejs był tak prosty i użyteczny, jak to możliwe, dzięki ważnym funkcjom, takim jak:","home.features.simpleInterface.description.1":"Ustawienia Aplikacji i Dodatku","home.features.simpleInterface.description.2":"Zarządzanie aktywnością","home.features.simpleInterface.description.3":"Sortuj według kategorii","home.features.quickSupport.heading":"Szybkie wsparcie","home.features.quickSupport.description":"Coś jest zepsute, wysyłając mnóstwo błędów lub po prostu nie działa? Pomożemy Ci pozbyć się tych problemów na naszym serwerze Discord, stworzyliśmy również nasz własny system wsparcia, który zapewni, że problem zostanie rozwiązany tak szybko, jak to możliwe.","home.languageSelector.tippy":"Język strony","maintenance.big":"O nie!","maintenance.heading":"Niestety aktualnie mamy problemy techniczne. Wkrótce wrócimy. Przepraszamy za kłopot.","maintenance.heading2":"Proszę wróć wkrótce po więcej informacji.","maintenance.message":"Dopóki developerzy tego nie naprawią, nie krępuj się tu zajrzeć!","maintenance.statuspage":"Status","maintenance.discordserver":"Serwer Discord","merch.title":"Witaj w oficjalnym sklepie **PreMiD**!","merch.swag":"Znajdź swój **Swag**","merch.fit":"**Wybierz coś dla siebie**","merch.cart":"Dodaj do koszyka","merch.help":"Masz problemy z naszym sklepem lub zamówieniem? Skontaktuj się z {0}obsługą klienta{1}","merch.item.added":"{0} został dodany do koszyka","merch.error.noitem":"Brak produktów do dodania do koszyka","partners.header.title":"Partnerzy","partners.requirements.title":"Wymaganie","partners.requirements.second.description":"Obecnie podejmujemy różne wysiłki w naszym programie partnerskim. Każdy powinien mieć szansę zostać zauważonym. Twórcy Twitcha powinni mieć co najmniej 500 obserwujących i co najmniej 10 równoczesnych widzów. Musisz przesyłać strumieniowo co najmniej 1 raz w tygodniu.","partners.apply.select.other":"Inne","presence.sections.description.title":"Opis","presence.sections.changelog.title":"Lista zmian","presence.sections.information.title":"Informacje","presence.sections.information.author":"Autor","presence.sections.information.version":"Wersja","presence.sections.information.tags":"Tagi","presence.sections.information.supportedurls":"Wspierane adresy URL","presence.sections.information.contributors":"Współtwórcy","store.cards.creator":"Autor","store.category.heading":"Kategorie","store.category.all":"Wszystkie","store.category.games":"Gry","store.category.music":"Muzyka","store.category.socials":"Media Społecznościowe","store.category.videos":"Filmy i transmisje","store.category.other":"Inne","user.roles.presenceDeveloper":"Twórca Presences","user.roles.presenceVerifier":"Weryfikator Presences","user.importantPresenceDev.message1":"Ważny Twórca Presences","user.importantPresenceDev.message2":"Stworzył {0} presences."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Queres novas funcionalidades?","beta.description.1":"O **PreMiD Beta** está agora disponível para todos!","beta.description.2":"O que é que irás receber se te inscreveres?","beta.features.1":"Últimas funcionalidades","beta.features.2":"Acesso aos canais de texto super secretos do PreMiD","beta.features.3":"Um cargo especial no nosso servidor Discord","beta.register.text":"Pronto para isto? Junta-te a outros {0} Testadores Beta!","beta.register.button":"Registe-se agora!","thankyou.title":"Fixe! Agora és um utilizador beta!","thankyou.description":"Os nossos macacos estão a trabalhar para te colocar no nosso programa beta o mais rápido possível. Obrigado por se registar!","error.noslots":"Parece que a versão beta está cheia.","contributors.headings.staff":"Staff","contributors.headings.supporters":"Contribuidores","contributors.headings.translators":"Tradutores","contributors.roles.projectLeader":"Líder do projeto","contributors.roles.staffCoordinator":"Coordenador da Staff","contributors.roles.marketingDirector":"Diretor de Marketing","contributors.roles.administrator":"Administrador","contributors.roles.reviewer":"Revisor do GitHub","contributors.roles.localizationManager":"Gestor de localização","contributors.roles.developer":"Programador","contributors.roles.designer":"Designer","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Agente de Suporte","contributors.roles.representative":"Representante","contributors.roles.proofreader":"Revisor","contributors.roles.donator":"Doador","contributors.roles.booster":"Impulsionador","contributors.roles.translator":"Tradutor","contributors.cards.copyUserId":"Clica para copiar o ID do utilizador.","contributors.cards.userIdCopied":"ID de utilizador copiado!","downloads.header.title":"Hora de te exibires.","downloads.header.subtitle":"Usa o PreMiD agora e mostra aos teus amigos o que estás a fazer. Pode ser que encontres alguém com os mesmos interesses.","downloads.instructions.heading":"Começa já","downloads.instructions.step.1":"Transfere o PreMiD","downloads.instructions.step.2":"Instala a nossa aplicação","downloads.instructions.step.3":"Adiciona a nossa extensão ao teu navegador","downloads.instructions.step.4":"Recarrega este site e verifica se a extensão está conectada","downloads.instructions.footer":"Ainda estás com problemas? {0}","downloads.instructions.footer.link":"Estamos aqui para ajudar!","downloads.appdownloading.header":"Aplicação","downloads.extdownloading.header":"Extensão","downloads.tooltips.os.not.supported.part1":"Aviso:","downloads.tooltips.os.not.supported.part2":"{0} A aplicação não tem um instalador para este sistema operativo. Isto significa que não há suporte oficial para o mesmo.","downloads.mobile.errorMessage":"Atenção: o PreMiD não é suportado em telemóveis.","downloads.mobile.showDownloads":"Mostrar versões","downloads.mobile.hideDownloads":"Esconder versões","downloads.warning.differentVersion":"A versão atual desta plataforma é {0} (esta versão é específica para Linux e não aplica-se a outras plataformas).","downloads.warning.differentVersion2":"Esta versão é específica do Linux e não se aplica a outros sistemas. A versão da aplicação principal é {0}","downloads.error.login":"Inicia sessão para veres estes downloads.","downloads.error.noaccess.title":"Uh oh, parece que não tens acesso à versão alfa/beta :(","downloads.error.noaccess.description":"Pode juntar-se ao nosso programa beta **aqui** de graça. Despacha-te! Só temos mais {0} vagas disponíveis","downloads.latest.header":"Versões de teste","downloads.warning.title":"Aviso","downloads.warning.message.opera":"Tens que instalar **esta** extensão para poder instalar PreMiD pelo Chrome Webstore.","downloads.button.skip":"Avançar","downloads.button.back":"Voltar","downloads.button.cancel":"Cancelar","downloads.button.okay":"Ok","downloads.button.done":"Concluído","downloads.button.login":"Iniciar sessão","downloads.button.skipanyway":"Ignorar mesmo assim","downloads.adsbox.thankyou.title":"Obrigado!","downloads.adsbox.thankyou.message":"Usamos anúncios para apoiar a nossa equipa e manter os nossos servidores para te oferecer a melhor experiência!","downloads.adsbox.disableAdblock":"Desativa o teu bloqueador de anúncios","downloads.showbeta.message":"Mostrar versões de teste","downloads.showbeta.small":"(não é necessário se apenas quiseres descarregar a aplicação normal)","downloads.skipanyway.message1":"Não quero apoiar.","downloads.skipanyway.message2":"Tens a certeza?","downloads.skipanyway.message3":"A sério?","downloads.skipanyway.message4":"P-por favor apoia :(","downloads.skipanyway.message5":"Preciso de ti :<","downloads.skipanyway.message6":"Ok, ok...","store.search.notFound":"Não conseguimos encontrar essa presence...","error.code.404":"Não foi possível encontrar essa página.","error.code.4":"Estás à procura de uma presence que não existe ou foi removida.","error.code.500":"Ocorreu um erro interno no servidor.","error.page.details":"Detalhes","error.page.button":"Voltar à página inicial","user.notFound.heading":"Esse utilizador não foi encontrado. Verifica se","user.notFound.message1":"o ID do Utilizador de que estás à procura está correto.","user.notFound.message2":"esse utilizador criou presences suficientes e tem o cargo de Presence Developer no nosso servidor de Discord.","user.notFound.message3":"outros estão com o mesmo problema no nosso servidor de Discord.","user.notFound.message4":"Se achas que isto foi um erro, entra em contacto connosco no nosso [servidor de Discord].","footer.language":"Idioma","footer.usercount.heading":"Pronto para usar o PreMiD?","footer.usercount.message":"Junta-te a {0} utilizadores hoje!","footer.usercount.button":"Instalar","footer.partners.heading":"Parceiros","footer.followUs.heading":"Segue-nos","footer.developers.heading":"Programadores","footer.developers.documentation":"Documentação","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Apoia-nos","footer.supportus.donate":"Doar","footer.supportus.contribute":"Contribuir","footer.supportus.translate":"Traduzir","footer.supportus.jobs":"Trabalha connosco!","footer.help.heading":"Ajuda","footer.help.troubleshooting":"Solução de problemas","footer.help.getsupport":"Obter ajuda","footer.help.information":"Informação","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privacidade","footer.help.information.terms":"Termos","footer.more.heading":"Mais","footer.more.status":"Estado do serviço","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} por {1}","footer.copyright.line2":"Website mantido por {0}","footer.partners.more":"Clica aqui para veres o resto dos nossos parceiros e patrocinadores.","header.language":"Português","header.languageNotification.title":"O teu idioma está disponível, queres trocar?","header.languageNotification.text":"O nosso site foi traduzido para o teu idioma. Pode vir a ser útil se não perceberes inglês muito bem.","header.languageNotification.btnDecline":"Não, obrigado","header.languageNotification.btnAccept":"Trocar de idioma","header.loader.phrases":"A cozinhar panquecas...;A colocar recipientes...;A analisar o teu endereço IP...;UwU;A violar regras...","header.store":"Loja","header.downloads":"Downloads","header.contributors":"Contribuidores","header.login":"Entrar","header.lia":"Sessão iniciada como","header.rab":"Reportar um erro","header.staff":"Painel de controlo","header.logout":"Terminar Sessão","home.introduction.paragraph":"O **PreMiD** é uma ferramenta simples e configurável que te permite mostrar o que estás a fazer na internet no teu estado do Discord.","home.introduction.button.features":"Funcionalidades","home.introduction.button.downloads":"Downloads","home.examples.playingagame":"Jogando","home.examples.timestamp":"faltam {0}","home.examples.timestamp2":"faltam {0}","home.examples.status.playing":"A ver","home.examples.status.live":"Ao vivo","home.examples.status.browsing":"A navegar...","home.features.heading":"Vais adorar estas funcionalidades!","home.features.presencesystem.heading":"Encontra **a tua** presence","home.features.presencesystem.description":"Criamos a nossa extensão de uma maneira que te permite adicionar e usar presences criadas por outros e geri-las na nossa extensão!","home.features.presencesystem.button":"Visita a loja","home.features.simpleInterface.heading":"Interface de utilizador simples","home.features.simpleInterface.description":"Cansado de interfaces complicadas? É por isso é que criamos e tentamos manter a nossa extensão o mais simples e útil possível com funcionalidades importantes como:","home.features.simpleInterface.description.1":"Definições para a aplicação e a extensão","home.features.simpleInterface.description.2":"Gerenciamento de presence","home.features.simpleInterface.description.3":"Ordenar por categoria","home.features.quickSupport.heading":"Suporte rápido","home.features.quickSupport.description":"Algo não está a funcionar, a mandar-te imensos erros ou simplesmente não funciona? Podemos ajudar-te a livrares-te desses problemas no nosso servidor de Discord. Também criamos o nosso próprio sistema de suporte que irá garantir que o teu problema fica resolvido o mais rápido possível.","home.features.quickSupport.button":"Entra no nosso discord","home.languageSelector.tippy":"Idioma do site","jobs.modal.title":"Candidatar a {0}","jobs.modal.step":"Passo {0} de 2","jobs.modal.buttons.next":"Próximo","jobs.modal.buttons.join":"Entrar","jobs.modal.buttons.cancel":"Cancelar","jobs.modal.error":"Preenche todos os campos","jobs.modal.notice":"O PreMiD é um projeto de código aberto, o que significa que somos uma equipa sem fins lucrativos. Cada doação ou dinheiro patrono será investido no produto. Ao te candidatares a um emprego no PreMiD reconheces que te estás a voluntariar para equipa e não serás pago pelo teu trabalho.","jobs.guild.required":"Entra no nosso servidor de Discord","jobs.guild.explanation":"Para te poderes candidatar tens que estar no nosso servidor de Discord, caso contrário, não poderemos entrar em contacto contigo se fores selecionado!","jobs.header.title":"Trabalhar para o PreMiD","jobs.header.description":"Estás pronto para ajudar o maior programa de Rich Presence?","jobs.openings.title":"Vagas de Emprego","jobs.benefits.title":"Benefícios de alta qualidade","jobs.benefit1.title":"Conhece-nos","jobs.benefit1.description":"Entra em contacto com as pessoas por detrás do PreMiD.","jobs.benefit2.title":"Informação Privilegiada","jobs.benefit2.description":"Dá uma olhadela no nosso desenvolvimento e marketing.","jobs.benefit3.title":"Honra","jobs.benefit3.description":"Permissões poderosas no Discord e um cargo colorido.","jobs.benefit4.title":"Ajuda o PreMiD","jobs.benefit4.description":"Com a tua contribuição é possível continuar este projeto.","jobs.benefit5.title":"Tempo fora","jobs.benefit5.description":"Demora o teu tempo. Isto é um trabalho voluntário.","jobs.benefit6.title":"Acesso antecipado","jobs.benefit6.description":"Testa novos recursos antes de qualquer outra pessoa.","jobs.success.applied":"Obrigado por te teres candidatado!","jobs.errors.alreadyApplied":"Já te candidataste antes!","maintenance.big":"Oh não!","maintenance.heading":"Infelizmente estamos a ter dificuldades técnicas mas voltaremos em breve. Pedimos desculpa pelo incómodo.","maintenance.heading2":"Volta mais tarde para mais informações.","maintenance.message":"Até que nossos programadores especiais consertem isso, sinta-se livre para dar uma olhada aqui!","maintenance.statuspage":"Página de Status","maintenance.discordserver":"Servidor do Discord","merch.title":"Bem-vindo à loja oficial **PreMiD** Merchandise!","merch.swag":"Encontre o seu **Swag**","merch.fit":"**Escolha o seu jeito**","merch.cart":"Adicionar ao carrinho","merch.help":"Estás a ter problemas com a nossa loja ou um pedido? Entra em contato com o nosso {0}suporte ao cliente{1}","merch.item.added":"{0} adicionado ao carrinho","merch.error.noitem":"Nenhum item para adicionar ao seu carrinho","partners.header.title":"Parceiros","partners.header.description":"Junte-se ao pessoal e obtenha alguns benefícios exclusivos de parceiros para mostrar quanto swag tem.","partners.slideshow.description":"Estes já nos pertencem","partners.why.title":"Que tal irmos para o céu em vez do inferno?","partners.why.benefit1.title":"A tua Presence gratuita","partners.why.benefit1.description":"A nossa equipa irá oferecer-te uma presence para o teu serviço.","partners.why.benefit2.title":"Torna-te verificado","partners.why.benefit2.description":"Um cargo especial e uma grande honra ser-te-ão dados no nosso servidor de Discord.","partners.why.benefit3.title":"Integração Meta-tag","partners.why.benefit3.description":"A tua presence será automaticamente ativada quando alguém visitar o teu site.","partners.why.benefit4.title":"Seja imortalizado","partners.why.benefit4.description":"Um lugar maroto na nossa página de parceiros.","partners.why.benefit5.title":"Seja famoso","partners.why.benefit5.description":"Destacado em nossas redes sociais.","partners.requirements.title":"Requisitos","partners.requirements.first.title":"O que estamos a procurar?","partners.requirements.first.description":"Estamos atentos a comunidades em crescimento e coisas empolgantes pela internet. Resumidamente, já deves estar usar o PreMiD e estar pronto para o promover para mais amantes da internet. A aceitação neste programa é extremamente qualitativa e irá variar de um candidato para o outro.","partners.requirements.second.title":"Os nossos requisitos","partners.requirements.second.description":"De momento, aceitamos vários tipos de esforço no nosso programa de parceria. Qualquer um deve ter a oportunidade de ser notado. Os transmissores da Twitch devem ter pelo menos 500 seguidores e pelo menos 10 espetadores simultâneos. Você deve transmitir pelo menos 1 vez por semana.","partners.apply.button":"Candidata-te já!","partners.apply.disclaimer":"Vamos para o céu juntos!","partners.apply.jobs":"Se estiveres interessado num emprego no PreMiD, vê as nossas **vagas de emprego**.","partners.sponsors.title":"Patrocinadores","partners.sponsors.description":"O PreMiD não seria possível, sem estas pessoas incríveis.","partners.partner.aniFlix":"É assim que se vê anime.","partners.partner.arenaOfKings":"Arena of Kings é um jogo de arena PvP em ritmo rápido de nova geração que pode ser jogado no navegador.","partners.partner.upBeat":"O UpBeat é uma rádio internacional sem fins lucrativos que se esforça para fornecer rádio, entretenimento e notícias de qualidade.","partners.partner.simLiveRadio":"SimLiveRadio é a rádio de infotainment mais bem-sucedida para jogos de simulação na Alemanha, Áustria e Suíça!","partners.partner.discordTemplates":"Começa a criar a tua própria comunidade com os nossos incríveis modelos. Constrói o teu próprio reino.","partners.partner.taigaBot":"O taiga é um Bot do Discord que te tenta oferecer todos os recursos de que podes precisar!","partners.partner.bitRock":"Uma ferramenta poderosa e fácil de utilizar na criação de instaladores entre plataformas.","partners.partner.statusPage":"Comunica facilmente com os teus utilizadores em tempo real.","partners.partner.erisly":"Uma deusa que joga como um divertido Bot do Discord!","partners.partner.reyfm":"O REYFM permite-te ouvir mais de 15 categorias de música grátis e sem parar. Com a melhor e mais recente música só para ti!","partners.partner.crowdin":"Solução de localização ágil para empresas de tecnologia.","partners.partner.wikijs":"O mais poderoso e expansível software de Wiki de código aberto.","partners.partner.packageCloud":"Uma interface para programadores unificada e amigável para todos os teus artefactos.","partners.partner.fastly":"Por trás do melhor da internet.","partners.partner.onlyhit":"O OnlyHit é a tua estação de rádio online feita para tocar os melhores sons 24 por dia e fazer com que descubras os teus próximos sons favoritos.","partners.partner.atomicradio":"Sente os mais recentes e melhores sons do mundo da música sem pausas em todas as nossas estações. Escolhe qual gostas mais e ouve em direto enquanto as novas músicas lutam por um lugar no pódio!","partners.apply.title":"Candidatura a parceiro","partners.apply.loggedUser":"Sessão iniciada como {0}","partners.apply.notYou":"Não és tu?","partners.apply.select.default":"Seleciona um","partners.apply.select.website":"Site","partners.apply.select.other":"Outro","partners.apply.form.name":"Nome","partners.apply.form.name.placeholder":"Ex: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Ex: https://premid.app","partners.apply.form.description":"Descrição: (Máximo de 150 caracteres)","partners.apply.form.description.placeholder":"Descrição para destaque","partners.apply.form.imageLink":"Link da imagem: (550x300, apenas PNG)","partners.apply.form.imageLink.placeholder":"Ex: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Fechar","partners.apply.form.button.apply":"Candidatar","partners.apply.success":"Obrigado por te candidatares!","partners.apply.error1":"Por favor preenche todos os campos.","partners.apply.error2":"Descrição máxima de 150 caracteres.","partners.apply.error3":"Adiciona um link (deve começar com https:// e terminar com .png)","partners.apply.error4":"Já te candidataste a parceiro.","presence.page.buttons.sourceCode":"Código fonte","presence.sections.description.title":"Descrição","presence.sections.changelog.title":"Registo de alterações","presence.sections.information.title":"Informação","presence.sections.information.author":"Autor","presence.sections.information.version":"Versão","presence.sections.information.likes":"Gostos","presence.sections.information.users":"Utilizadores","presence.sections.information.tags":"Etiquetas","presence.sections.information.supportedurls":"URLs Suportados","presence.sections.information.contributors":"Contribuidores","report.title":"Reportar um erro","report.bugcount":"{count}/3 relatórios restantes","report.info":"A função de reportar erros é para erros no site do PreMiD e no servidor de Discord. Bugs de Presences devem ser reportados ao criador da presence. Bugs devem ser reportados em inglês.","report.overview":"Descreve clara e precisamente o erro.","report.os":"Seleciona o teu sistema operativo e a versão","report.browser":"Seleciona o teu navegador e a tua versão - Podes obter a versão acedendo a about:support no Firefox ou chrome://help","report.description":"Adiciona um link para um exemplo ou um conjunto inequívoco de passos para reproduzir este erro.","report.button":"Reportar","report.toomany":"Tens muitos relatórios ativos. Espera que os teus relatórios anteriores sejam revistos. Os relatórios são vistos semanalmente, por isso, sê paciente.","report.toomany.alert":"Tens demasiados relatórios ativos.","report.success":"Erro enviado","report.error":"Requer mais informação","report.error.unauth":"A conta do Discord precisa de ser verificada","report.activebugs":"Erros ativos","store.message.error":"A extensão não está conectada.","store.cards.creator":"Autor","store.cards.popular":"Esta presence é muito popular.","store.cards.partner":"Presence parceira","store.cards.extraStepsRequired":"Esta presence requer passos adicionais para funcionar. Vê a sua página para saberes mais.","store.header.search":"Pesquisar presence","store.card.presence.add":"Adicionar presence","store.card.presence.remove":"Remover Presence","store.card.presence.included":"Esta presence é ativada automaticamente ao visitar o seu site.","store.category.filters.heading":"Filtros","store.category.filters.mostUsed":"Mais usadas primeiro","store.category.filters.allowAdult":"Mostrar conteúdo adulto","store.category.filters.likedOnly":"Apenas presences gostadas","store.filters.added":"Mostrar presences adicionadas","store.category.heading":"Categorias","store.category.all":"Todas","store.category.games":"Jogos","store.category.music":"Música","store.category.socials":"Sociais","store.category.videos":"Vídeos e transmissões","store.category.other":"Outros","store.search":"Pesquisar","store.search.filters":"Entrar","store.search.removeFilter":"Clica para remover o filtro","user.roles.presenceDeveloper":"Programador de Presences","user.roles.presenceVerifier":"Verificador de Presences","user.importantPresenceDev.message1":"Programador importante de presences","user.importantPresenceDev.message2":"Criou {0} presences.","user.geniusPresenceDev.message1":"Programador de Presences Génio","user.geniusPresenceDev.message2":"Criou mais de 100 Presences!","user.switch.contributed":"[Presences/Contribuições] do utilizador","user.presences.created":"Clica aqui para mostrar as presences que este utilizador criou.","user.presences.contributed":"Clica aqui para mostrar as presences para as quais este utilizador contribuiu."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Quer novas funcionalidades?","beta.description.1":"**PreMiD Beta** agora está disponível para todo mundo!","beta.description.2":"O que você vai obter se você se inscrever?","beta.features.1":"Últimas funções","beta.features.2":"Acesso aos canais de texto super secretos do PreMiD","beta.features.3":"Um cargo especial em nosso servidor do Discord","beta.register.text":"Pronto para isso? Junte-se à outros {0} Beta Testers!","beta.register.button":"Inscreva-se agora!","thankyou.title":"Legal! Você agora é um usuário beta!","thankyou.description":"Nossos macacos estão trabalhando para lhe colocar em nosso programa beta o mais rápido possível. Obrigado por se registrar!","error.noslots":"Parece que não temos mais nenhuma vaga disponível.","contributors.headings.staff":"Equipe","contributors.headings.supporters":"Apoiadores","contributors.headings.translators":"Tradutores","contributors.roles.projectLeader":"Líder do Projeto","contributors.roles.staffCoordinator":"Coordenador de equipe","contributors.roles.marketingDirector":"Diretor de marketing","contributors.roles.administrator":"Administrador","contributors.roles.reviewer":"Revisor","contributors.roles.localizationManager":"Gerente de localização","contributors.roles.developer":"Desenvolvedor","contributors.roles.designer":"Designer","contributors.roles.moderator":"Moderador","contributors.roles.supportAgent":"Agente de Suporte","contributors.roles.representative":"Representante","contributors.roles.proofreader":"Revisor","contributors.roles.donator":"Doador","contributors.roles.booster":"Booster","contributors.roles.translator":"Tradutor","contributors.cards.copyUserId":"Clique para copiar o ID do usuário.","contributors.cards.userIdCopied":"ID de usuário copiado!","downloads.header.title":"Hora de se exibir.","downloads.header.subtitle":"Use o PreMiD agora e mostre para seus amigos o que você está fazendo, talvez você encontre alguém com os mesmos interesses.","downloads.instructions.heading":"Comece já","downloads.instructions.step.1":"Baixe o PreMiD","downloads.instructions.step.2":"Instale nosso aplicativo","downloads.instructions.step.3":"Adicione nossa extensão em seu navegador","downloads.instructions.step.4":"Recarregue este site e verifique se a extensão está conectada","downloads.instructions.footer":"Ainda tendo problemas? {0}","downloads.instructions.footer.link":"Estamos aqui para ajudar!","downloads.appdownloading.header":"Aplicativo","downloads.extdownloading.header":"Extensão","downloads.tooltips.os.not.supported.part1":"Atenção:","downloads.tooltips.os.not.supported.part2":"{0} Não há instalador para este sistema operacional. Isso significa que não há suporte profissional para ele.","downloads.mobile.errorMessage":"Por favor, esteja ciente de que o PreMiD não é suportado em dispositivos móveis.","downloads.mobile.showDownloads":"Mostrar Downloads","downloads.mobile.hideDownloads":"Esconder Downloads","downloads.warning.differentVersion":"A versão atual desta plataforma é {0} (esta versão é específica para Linux e não se aplica a outras plataformas).","downloads.warning.differentVersion2":"Esta versão é específica para Linux e não se aplica para outros sistemas. A versão principal da aplicação é {0}","downloads.error.login":"Por favor faça login em ordem para ver estes downloads.","downloads.error.noaccess.title":"Uh oh, parece que você não tem acesso ao alpha/beta :(","downloads.error.noaccess.description":"Você pode participar do nosso programa beta **aqui** de graça. Se apresse! Nós temos apenas mais {0} slots disponíveis","downloads.latest.header":"Lançamentos Antecipados","downloads.warning.title":"Atenção","downloads.warning.message.opera":"Você precisa instalar **esta extensão** para instalar o PreMiD da Chrome Webstore.","downloads.button.skip":"Pular","downloads.button.back":"Voltar","downloads.button.cancel":"Cancelar","downloads.button.okay":"Okay","downloads.button.done":"Concluído","downloads.button.login":"Login","downloads.button.skipanyway":"Pular assim mesmo","downloads.adsbox.thankyou.title":"Obrigado!","downloads.adsbox.thankyou.message":"Nós usamos anúncios para dar suporte à nossa equipe e manter nossos servidores para oferecer a você a melhor experiência de usuário!","downloads.adsbox.disableAdblock":"Por favor, desative seu adblock","downloads.showbeta.message":"Exibir downloads beta","downloads.showbeta.small":"(não é necessário se você só está aqui para baixar o aplicativo normal)","downloads.skipanyway.message1":"Eu não quero ajudar.","downloads.skipanyway.message2":"Você tem certeza?","downloads.skipanyway.message3":"Tem certeza?","downloads.skipanyway.message4":"P-por favor me ajude :(","downloads.skipanyway.message5":"Eu preciso de você :<","downloads.skipanyway.message6":"Okay, okay...","store.search.notFound":"Nós não conseguimos achar essa presence...","error.code.404":"Desculpe, não foi possível encontrar esta página.","error.code.4":"Você está a procura de uma presence não existente ou removida.","error.code.500":"Ocorreu um erro interno no servidor.","error.page.details":"Detalhes","error.page.button":"Voltar à página inicial","user.notFound.heading":"Esse usuário não pôde ser encontrado. Tente se certificar","user.notFound.message1":"que o ID do usuário que você está procurando está correto.","user.notFound.message2":"que o usuário criou presences suficientes e tem o cargo Presence Developer em nosso servidor do Discord.","user.notFound.message3":"se outros estiverem enfrentando o mesmo problema em nosso servidor de Discord.","user.notFound.message4":"Se você acha que isso foi um erro, por favor, entre em contato conosco pelo [nosso servidor do Discord].","footer.language":"Idioma","footer.usercount.heading":"Pronto para usar o PreMiD?","footer.usercount.message":"Junte-se a {0} usuários hoje!","footer.usercount.button":"Instalar","footer.partners.heading":"Parceiros","footer.followUs.heading":"Siga-nos","footer.developers.heading":"Desenvolvedores","footer.developers.documentation":"Documentação","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Nos ajude","footer.supportus.donate":"Doar","footer.supportus.contribute":"Contribua","footer.supportus.translate":"Traduzir","footer.supportus.jobs":"Trabalhe conosco!","footer.help.heading":"Ajuda","footer.help.troubleshooting":"Solução de Problemas","footer.help.getsupport":"Consiga ajuda","footer.help.information":"Informações","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Privacidade","footer.help.information.terms":"Termos","footer.more.heading":"Mais","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} por {1}","footer.copyright.line2":"Website mantido por {0}","footer.partners.more":"Clique aqui para ver o resto de nossos parceiros e patrocinadores.","header.language":"Português (Brasil)","header.languageNotification.title":"Nós suportamos seu idioma, deseja alterar?","header.languageNotification.text":"Nosso website foi traduzido para o seu idioma. Isso pode lhe ajudar caso você não fale Inglês tão bem.","header.languageNotification.btnDecline":"Não, obrigado","header.languageNotification.btnAccept":"Mudar de idioma","header.loader.phrases":"Cozinhando panquecas...;Colocando containers...;Analisando seu IP...;UwU;Quebrando regras...;Hackeando bicicletas...;Teletransportando-se para um outro mundo...;Consertando bugs","header.store":"Loja","header.downloads":"Baixar","header.contributors":"Contribuidores","header.login":"Entrar","header.lia":"Logado como","header.rab":"Reportar um bug","header.staff":"Dashboard","header.logout":"Logout","home.introduction.paragraph":"**PreMiD** é um utilitário simples e configurável que permite mostrar o que você está assistindo/ouvindo em seu status de \\"jogando agora\\" no Discord.","home.introduction.button.features":"Recursos","home.introduction.button.downloads":"Downloads","home.examples.playingagame":"Jogando","home.examples.timestamp":"{0} restantes","home.examples.timestamp2":"{0} decorridos","home.examples.status.playing":"Reproduzindo de volta","home.examples.status.live":"Ao vivo","home.examples.status.browsing":"Navegando...","home.features.heading":"Você irá amar esses recursos!","home.features.presencesystem.heading":"Encontre **sua** presence","home.features.presencesystem.description":"Nós criamos nossa extensão de uma maneira que permite você adicionar e usar Presences criadas por outras pessoas e gerenciá-las em nossa extensão!","home.features.presencesystem.button":"Visitar loja","home.features.simpleInterface.heading":"Simples interface de usuário","home.features.simpleInterface.description":"Cansado de interfaces de usuário complicadas? Por isso, criamos e tentamos manter nossa interface do usuário o mais simples e útil possível, com recursos importantes como:","home.features.simpleInterface.description.1":"Configurações do App e Extensão","home.features.simpleInterface.description.2":"Gerenciamento de presences","home.features.simpleInterface.description.3":"Ordenar por categoria","home.features.quickSupport.heading":"Suporte rápido","home.features.quickSupport.description":"Algo está falhando, enviando toneladas de erros ou simplesmente não está funcionando? Ajudaremos você a se livrar destes problemas em nosso servidor do Discord, também criamos nosso próprio sistema de suporte que garantirá que o problema seja resolvido o mais rápido possível.","home.features.quickSupport.button":"Entre em nosso Discord","home.languageSelector.tippy":"Idioma do website","jobs.modal.title":"Aplicar para {0}","jobs.modal.step":"Passo {0} de 2","jobs.modal.buttons.next":"Próximo","jobs.modal.buttons.join":"Juntar-se","jobs.modal.buttons.cancel":"Cancelar","jobs.modal.error":"Por favor preencha todos os campos","jobs.modal.notice":"PreMiD é um projeto open-source, o que significa que somos um time sem fins lucrativos, toda doação ou dinheiro dado com o Patreon irá voltar para o produto. Ao se candidatar a uma posição no PreMiD, você reconhece que estará se voluntariando na equipe, você não será pago pelo seu trabalho.","jobs.guild.required":"Junte-se ao nosso Discord","jobs.guild.explanation":"Para poder se candidatar, você deve entrar em nosso servidor do Discord. Caso contrário, não poderemos te contatar caso você seja selecionado!","jobs.header.title":"Trabalhe para o PreMiD","jobs.header.description":"Você está pronto para ajudar o maior programa de Rich Presence?","jobs.openings.title":"Vagas de Emprego","jobs.benefits.title":"Benefícios de alta qualidade","jobs.benefit1.title":"Nos conheça","jobs.benefit1.description":"Entre em contato com as pessoas por trás do PreMiD.","jobs.benefit2.title":"Testador Beta","jobs.benefit2.description":"Confira nosso Desenvolvimento e Marketing.","jobs.benefit3.title":"Honra","jobs.benefit3.description":"Permissões poderosas no Discord e um cargo colorido.","jobs.benefit4.title":"Apoie o PreMiD","jobs.benefit4.description":"Com a sua contribuição é possível executar este projeto.","jobs.benefit5.title":"Intervalos","jobs.benefit5.description":"Demore o tempo que quiser. Isso é um trabalho voluntário.","jobs.benefit6.title":"Acesso Antecipado","jobs.benefit6.description":"Teste novas funcionalidades antes de todos.","jobs.success.applied":"Obrigado por se inscrever!","jobs.errors.alreadyApplied":"Você já se inscreveu antes!","maintenance.big":"Oh não!","maintenance.heading":"Infelizmente estamos com alguns problemas técnicos. Nós voltaremos em breve. Desculpe-nos pela inconveniência.","maintenance.heading2":"Por favor, volte mais tarde para mais informações.","maintenance.message":"Até nossos desenvolvedores especiais consertarem isso, sinta-se livre para dar uma olhada aqui!","maintenance.statuspage":"Página de Status","maintenance.discordserver":"Servidor do Discord","merch.title":"Bem-vindo à loja oficial de mercadorias do PreMiD!","merch.swag":"Encontre seu **Swag**","merch.fit":"** Escolha seu ajuste**","merch.cart":"Adicionar ao carrinho","merch.help":"Tendo problemas com nossa loja ou pedido? Contate nosso {0}serviço de atendimento ao cliente{1}","merch.item.added":"{0} adicionado ao seu carrinho","merch.error.noitem":"Nenhum item para adicionar ao seu carrinho","partners.header.title":"Parceiros","partners.header.description":"Junte-se ao pessoal e obtenha alguns benefícios exclusivos de parceiros para mostrar o quanto de swag você tem.","partners.slideshow.description":"Esses aqui já são nossos","partners.why.title":"Que tal ir para o céu em vez do inferno?","partners.why.benefit1.title":"Sua presence gratuita","partners.why.benefit1.description":"Nossa equipe lhe fornecerá uma presence do seu serviço.","partners.why.benefit2.title":"Torne-se verificado","partners.why.benefit2.description":"Um cargo especial e uma grande honra serão dados a você em nosso servidor de Discord.","partners.why.benefit3.title":"Integração meta-tag","partners.why.benefit3.description":"Sua presence será automaticamente usada quando alguém visitar seu site.","partners.why.benefit4.title":"Seja imortalizado","partners.why.benefit4.description":"Um lugar desagradável na página do nosso parceiro.","partners.why.benefit5.title":"Seja famoso","partners.why.benefit5.description":"Destaque em nossas redes sociais.","partners.requirements.title":"Requisitos","partners.requirements.first.title":"O que estamos procurando?","partners.requirements.first.description":"Mantemos um olho atento às comunidades em crescimento e coisas interessantes pela Internet. Resumindo: você já deve usar o PreMiD e estar pronto para espalhá-lo para ainda mais malucos na Internet. A aceitação no programa é extremamente qualitativa e varia de um candidato para o outro.","partners.requirements.second.title":"Nosso firewall","partners.requirements.second.description":"No momento, estamos aceitando vários tipos de esforços em nosso programa de parceria. Qualquer pessoa deve ter a chance de ser notada. Os streamers do Twitch devem ter pelo menos 500 seguidores e pelo menos 10 espectadores simultâneos. Você deve transmitir pelo menos 1 vez por semana.","partners.apply.button":"Inscreva-se já!","partners.apply.disclaimer":"Vamos juntos para o céu!","partners.apply.jobs":"Se você está interessado em trabalhar diretamente no PreMiD, dê uma olhada nos nossos **anúncios de emprego **.","partners.sponsors.title":"Patrocinadores","partners.sponsors.description":"O PreMiD não seria possível sem essas pessoas incríveis.","partners.partner.aniFlix":"É assim que você assiste a anime.","partners.partner.arenaOfKings":"Arena of Kings é um jogo PvP Arena de última geração, jogado no navegador.","partners.partner.upBeat":"O UpBeat é um rádio internacional sem fins lucrativos que se esforça para fornecer rádio de qualidade sem parar e entretenimento de notícias.","partners.partner.simLiveRadio":"SimLiveRadio é a rádio de info entretenimento mais bem sucedida para jogos de simulação na Alemanha, Áustria e Suíça!","partners.partner.discordTemplates":"Comece a criar sua própria comunidade com nossos incríveis modelos. Construa o seu próprio reino.","partners.partner.taigaBot":"taiga é um Bot do Discord tentando oferecer todos os recursos que você pode precisar de uma só vez!","partners.partner.bitRock":"Uma ferramenta de criação de instaladores de plataforma cruzada poderosa e fácil de usar.","partners.partner.statusPage":"Comunique facilmente o status em tempo real aos seus usuários.","partners.partner.erisly":"Uma deusa que joga com um divertido bot do discord!","partners.partner.reyfm":"REYFM te permite ouvir mais de 15+ rádios de graça - sem parar. Com a melhor e mais recente música apenas para você!","partners.partner.crowdin":"Localização ágil para empresas de tecnologia.","partners.partner.wikijs":"O software Wiki de código aberto mais poderoso e extensível.","partners.partner.packageCloud":"Uma interface unificada e amigável para todos os seus artefatos.","partners.partner.fastly":"Por trás do melhor da web.","partners.partner.onlyhit":"OnlyHit é sua estação de rádio musical online feita para reproduzir os melhores sucessos 24/7 e para fazer você descobrir os futuros sucessos primeiro.","partners.apply.title":"Inscreva-se para parceiro","partners.apply.loggedUser":"Conectado como {0}","partners.apply.notYou":"Não é você?","partners.apply.select.default":"Por favor selecione um","partners.apply.select.website":"Site","partners.apply.select.other":"Outros","partners.apply.form.name":"Nome","partners.apply.form.name.placeholder":"Ex: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Ex.: https://premid.app","partners.apply.form.description":"Descrição: (máximo de 150 caracteres)","partners.apply.form.description.placeholder":"Descrição para destaque","partners.apply.form.imageLink":"Link da imagem: (550x300, apenas PNG)","partners.apply.form.imageLink.placeholder":"Ex.: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Fechar","partners.apply.form.button.apply":"Aplicar","partners.apply.success":"Obrigado por se aplicar!","partners.apply.error1":"Por favor, complete todos os campos.","partners.apply.error2":"Descrição máxima de 150 caracteres.","partners.apply.error3":"Adicione um link (deve começar com https:// e terminar com .png)","partners.apply.error4":"Você já se inscreveu para parceiro.","presence.page.buttons.sourceCode":"Código fonte","presence.sections.description.title":"Descrição","presence.sections.changelog.title":"Changelog","presence.sections.information.title":"Informação","presence.sections.information.author":"Autor","presence.sections.information.version":"Versão","presence.sections.information.likes":"Curtidas","presence.sections.information.users":"Usuários","presence.sections.information.tags":"Tags","presence.sections.information.supportedurls":"URLs Suportadas","presence.sections.information.contributors":"Colaboradores","report.title":"Reportar um Bug","report.bugcount":"{count}/3 Reportes restantes","report.info":"Reportes de bugs são para bugs dentro do site PreMiD e do Servidor Discord PreMiD. Bugs de presences devem ser reportadas ao criador da presence. Somente reporte bugs em Inglês.","report.overview":"Breve Visão Geral - Forneça uma descrição clara e concisa do que é o bug.","report.os":"Selecione seu Sistema Operacional e Versão","report.browser":"Selecione seu Navegador e Versão - Você pode obter a versão visitando about:support no Firefox ou chrome://help","report.description":"Forneça um link para um exemplo vivo ou um conjunto de passos exatos para reproduzir este bug.","report.button":"Reportar","report.toomany":"Você tem muitos reportes ativos. Aguarde que seus reportes enviados sejam revisados. Reportes são verificados semanalmente, seja paciente.","report.toomany.alert":"Você tem muitos reportes ativos.","report.success":"Bug Enviado","report.error":"Mais informações requeridas","report.error.unauth":"Conta Discord precisa ser verificada","report.activebugs":"Bugs Ativos","store.message.error":"Extensão não conectada.","store.cards.creator":"Autor","store.cards.popular":"Esta presence é muito popular entre os usuários.","store.cards.partner":"Presence parceira","store.cards.extraStepsRequired":"Esta presence requer passos adicionais para funcionar, por favor, verifique sua página para mais informações.","store.header.search":"Pesquisar presence","store.card.presence.add":"Adicionar presence","store.card.presence.remove":"Remover presence","store.card.presence.included":"Esta Presence é automaticamente habilitada ao visitar o site.","store.category.filters.heading":"Filtros","store.category.filters.mostUsed":"Mais usadas primeiro","store.category.filters.allowAdult":"Mostrar NSFW","store.category.filters.likedOnly":"Apenas presences curtidas","store.filters.added":"Mostrar presences adicionadas","store.category.heading":"Categorias","store.category.all":"Todos","store.category.games":"Jogos","store.category.music":"Música","store.category.socials":"Redes Sociais","store.category.videos":"Vídeos e Streams","store.category.other":"Outros","store.search":"Pesquisar","store.search.filters":"Enter","store.search.removeFilter":"Clique para remover o filtro","user.roles.presenceDeveloper":"Desenvolvedor de Presences","user.roles.presenceVerifier":"Verificador de Presences","user.importantPresenceDev.message1":"Desenvolvedor Importante de Presences","user.importantPresenceDev.message2":"Criou {0} presences.","user.geniusPresenceDev.message1":"Desenvolvedor Gênio de Presences","user.geniusPresenceDev.message2":"Mais de 100 presences criadas!","user.switch.contributed":"[Presences/Contribuições] do usuário","user.presences.created":"Clique aqui para mostrar as presences que este usuário criou.","user.presences.contributed":"Clique aqui para mostrar as presences que este usuário contribuiu."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Vrei funcționalități noi?","beta.description.1":"**PreMiD Beta** este acum disponibil pentru toată lumea!","beta.description.2":"Ce vei obține dacă te înscrii?","beta.features.1":"Ultimele funcționalități","beta.features.2":"Acces la canalele text super secrete ale PreMiD","beta.features.3":"Un rol special pe serverul nostru de Discord","beta.register.text":"Ești pregătit? Alătură-te celorlalți {0} Beta Testeri!","beta.register.button":"Inregistrează-te acum!","thankyou.title":"Super! Ești utilizator beta!","thankyou.description":"Maimuțele noastre lucrează ca tu să intrii în programul nostru cât mai repede posibil. Îți mulțumim pentru înregistrare!","contributors.headings.staff":"Staff","contributors.headings.supporters":"Suporteri","contributors.headings.translators":"Traducători","contributors.roles.administrator":"Administrator","contributors.roles.moderator":"Moderator","contributors.roles.donator":"Donator","contributors.roles.booster":"Booster","contributors.roles.translator":"Traducător","contributors.cards.copyUserId":"Apăsați pentru a copia ID-ul utilizatorului.","contributors.cards.userIdCopied":"ID-ul utilizatorului a fost copiat!","downloads.instructions.heading":"Începe","downloads.instructions.step.1":"Descarcă PreMiD","downloads.instructions.step.2":"Instalează aplicația noastră","downloads.instructions.step.3":"Instalează extensia pentru browser-ul tău","downloads.instructions.step.4":"Reîncărcați pagina și verificați dacă extensia este conectată","downloads.instructions.footer.link":"Suntem aici să te ajutăm!","downloads.appdownloading.header":"Aplicație","downloads.extdownloading.header":"Extensie","downloads.tooltips.os.not.supported.part1":"Atenție:","downloads.tooltips.os.not.supported.part2":"{0} Aplicația nu are instalator pentru acest sistem de operare. Aceasta înseamnă că nu există nici un sprijin profesional pentru aceasta.","downloads.mobile.errorMessage":"Vă rugăm să rețineți că PreMiD nu este compatibil cu telefoane mobile.","downloads.mobile.showDownloads":"Arată descărcările","downloads.mobile.hideDownloads":"Ascunde descărcările","downloads.warning.differentVersion2":"Această versiune este specifică pentru Linux și nu se aplică altor sisteme. Versiunea principală a aplicației este {0}","downloads.error.login":"Vă rugăm să vă autentificați pentru a vedea aceste descărcări.","downloads.error.noaccess.title":"Uh oh, se pare că nu ai acces la alpha/beta :(","downloads.warning.title":"Atenție","downloads.button.skip":"Omiteți","downloads.button.back":"Înapoi","downloads.button.cancel":"Anulează","downloads.button.done":"Terminat","downloads.adsbox.thankyou.title":"Mulțumim!","downloads.adsbox.disableAdblock":"Vă rugăm să vă dezactivaţi adblock-ul","downloads.skipanyway.message2":"Ești sigur?","downloads.skipanyway.message3":"Serios?","downloads.skipanyway.message5":"Am nevoie de tine :<","downloads.skipanyway.message6":"Ok, bine...","error.page.details":"Detalii","user.notFound.heading":"Acest user nu a fost găsit. Incearcă","footer.language":"Limbă","footer.usercount.heading":"Ești pregătit să încerci PreMiD?","footer.usercount.message":"Alătură-te de peste {0} utilizatori astăzi!","footer.usercount.button":"Instalează","footer.partners.heading":"Parteneri","footer.followUs.heading":"Urmărește-ne","footer.developers.heading":"Developeri","footer.developers.documentation":"Documentație","footer.developers.richpresence":"Prezență bogată","footer.supportus.heading":"Susține-ne","footer.supportus.donate":"Donează ","footer.supportus.contribute":"Contribuie","footer.supportus.translate":"Tradu","footer.supportus.jobs":"Lucrează cu noi!","footer.help.heading":"Ajutor","footer.help.troubleshooting":"Depanare","footer.help.getsupport":"Primește ajutor","footer.help.information":"Informații","footer.help.information.cookies":"Fursecuri","footer.help.information.privacy":"Intimitate","footer.help.information.terms":"Termeni","footer.more.heading":"Mai multe","footer.more.status":"Statut","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} de {1}","footer.copyright.line2":"Site întreținut de {0}","footer.partners.more":"Apasă aici pentru a vedea restul partenerilor și sponsorilor noștri.","header.language":"Română","header.languageNotification.title":"Avem limbajul tău, dorești să îl schimbi?","header.languageNotification.text":"Website-ul nostru a fost tradus în limba ta, te poate ajuta în cazul că nu știi engleza foarte bine.","header.languageNotification.btnDecline":"Nu, mulțumesc","header.languageNotification.btnAccept":"Schimbă limba","header.loader.phrases":"Cocând clătite...;Plasând containere...;Analizând adresa ta IP...;UwU;Încălcând regulile...","header.store":"Magazin","header.downloads":"Descărcări","header.contributors":"Contribuitori","home.introduction.button.downloads":"Descărcări","home.examples.playingagame":"Jucându-se un joc","home.examples.timestamp":"{0} timp rămas","home.examples.status.playing":"Redare","home.examples.status.live":"În direct","home.examples.status.browsing":"Navigare...","home.features.heading":"Veți iubi aceste funcții!","home.features.presencesystem.heading":"Găsește-ți **prezența** ta","home.features.simpleInterface.heading":"Interfață simplă","home.features.simpleInterface.description.1":"Setări pentru aplicație și extensie","home.features.simpleInterface.description.2":"Managementul prezenței","home.features.quickSupport.heading":"Suport rapid","home.features.quickSupport.button":"Intrați pe serverul nostru de Discord","jobs.modal.title":"Aplică pentru {0}","jobs.modal.step":"Pasul {0} din 2","jobs.modal.buttons.next":"Mai departe","jobs.modal.buttons.join":"Alăturaţi-vă","jobs.modal.buttons.cancel":"Anulează","jobs.modal.error":"Vă rugăm să completaţi toate câmpurile","jobs.guild.required":"Intrați pe serverul nostru de Discord","jobs.header.title":"Lucrează pentru PreMiD","jobs.openings.title":"Posturi disponibile","maintenance.big":"Oh nu!","maintenance.message":"Până când creatorii noștri speciali rezolvă problema, trage o privire aici!","maintenance.statuspage":"Pagina de status","maintenance.discordserver":"Serverul de Discord","partners.header.title":"Parteneri","partners.apply.select.other":"Altele","presence.page.buttons.sourceCode":"Cod sursă","presence.sections.description.title":"Descriere","presence.sections.changelog.title":"Schimbări","presence.sections.information.title":"Informație","presence.sections.information.author":"Autor","presence.sections.information.version":"Versiune","presence.sections.information.users":"Utilizatori","presence.sections.information.tags":"Etichete","presence.sections.information.supportedurls":"URL-uri suportate","presence.sections.information.contributors":"Contribuitori","store.cards.creator":"Autor","store.category.heading":"Categorii","store.category.all":"Toate","store.category.games":"Jocuri","store.category.music":"Muzică","store.category.socials":"Sociale","store.category.videos":"Video & Stream-uri","store.category.other":"Altele","store.search":"Caută"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Хотите новых функций?","beta.description.1":"**PreMiD Beta** теперь доступен для всех!","beta.description.2":"Что вы получите, если зарегистрируетесь?","beta.features.1":"Последние функции","beta.features.2":"Доступ к секретным текстовым каналам PreMiD","beta.features.3":"Особая роль на нашем сервере Discord","beta.register.text":"Готовы? Присоединитесь к {0} другим бета-тестерам!","beta.register.button":"Зарегистрируйтесь!","thankyou.title":"Отлично! Теперь вы бета-пользователь!","thankyou.description":"Наши обезьяны работают над тем, чтобы как можно быстрее попасть в нашу бета-программу. Благодарим за регистрацию!","error.noslots":"Похоже, у нас нет больше слотов для бета-пользователя.","contributors.headings.staff":"Сотрудник","contributors.headings.supporters":"Поддержавшие","contributors.headings.translators":"Переводчики","contributors.roles.projectLeader":"Лидер проекта","contributors.roles.staffCoordinator":"Координатор персонала","contributors.roles.marketingDirector":"Директор по маркетингу","contributors.roles.administrator":"Администратор","contributors.roles.reviewer":"Рецензент","contributors.roles.localizationManager":"Менеджер по переводу","contributors.roles.developer":"Разработчик","contributors.roles.designer":"Дизайнер","contributors.roles.moderator":"Модератор","contributors.roles.supportAgent":"Агент поддержки","contributors.roles.representative":"Представитель","contributors.roles.proofreader":"Корректор","contributors.roles.donator":"Донатер","contributors.roles.booster":"Бустер","contributors.roles.translator":"Переводчик","contributors.cards.copyUserId":"Нажмите, чтобы скопировать ID пользователя.","contributors.cards.userIdCopied":"ID пользователя скопировано!","downloads.header.title":"Время шоу.","downloads.header.subtitle":"Используйте PreMiD сейчас и покажите своим друзьям, что вы смотрите или слушаете, может быть вы найдете кого-нибудь со схожими интересами.","downloads.instructions.heading":"Начало работы","downloads.instructions.step.1":"Скачать PreMiD","downloads.instructions.step.2":"Установить приложение","downloads.instructions.step.3":"Добавить расширение в Вашего браузера","downloads.instructions.step.4":"Перезагрузите сайт и проверьте, подключено ли расширение","downloads.instructions.footer":"У вас остались проблемы? {0}","downloads.instructions.footer.link":"Мы здесь, чтобы Вам помочь!","downloads.appdownloading.header":"Скачать приложение","downloads.extdownloading.header":"Установить расширение","downloads.tooltips.os.not.supported.part1":"Предупреждение:","downloads.tooltips.os.not.supported.part2":"{0} Приложение не имеет установщика для этой операционной системы. Это означает, что для неё не будет квалифицированной поддержки.","downloads.mobile.errorMessage":"Обратите внимание, PreMiD не поддерживается на мобильных телефонах.","downloads.mobile.showDownloads":"Показать загрузки","downloads.mobile.hideDownloads":"Спрятать загрузки","downloads.warning.differentVersion":"Текущая версия этой платформы {0} (эта версия только Linux, не применяется к другим платформам).","downloads.warning.differentVersion2":"Эта версия специфична для Linux и не относится к другим системам. Основная версия приложения {0}","downloads.error.login":"Войдите в систему, чтобы увидеть эти загрузки.","downloads.error.noaccess.title":"Кажется, у вас нет доступа к альфа/бета версии :(","downloads.error.noaccess.description":"Вы можете присоединиться к бета-программе **здесь** бесплатно. Поспешите! У нас есть еще {0} слотов","downloads.latest.header":"Ранние выпуски","downloads.warning.title":"Внимание","downloads.warning.message.opera":"Вы должны установить **это** расширение для установки PreMiD с веб-магазина Chrome.","downloads.button.skip":"Пропустить","downloads.button.back":"Назад","downloads.button.cancel":"Отменить","downloads.button.okay":"Хорошо","downloads.button.done":"Готово","downloads.button.login":"Войти","downloads.button.skipanyway":"Все равно пропустить","downloads.adsbox.thankyou.title":"Благодарим вас!","downloads.adsbox.thankyou.message":"Мы используем рекламу для поддержки нашей команды и поддержки наших серверов, чтобы предложить вам наилучший пользовательский опыт!","downloads.adsbox.disableAdblock":"Пожалуйста, отключите блокировщик рекламы","downloads.showbeta.message":"Показать бета-загрузки","downloads.showbeta.small":"(не нужно, если вы здесь только для загрузки обычного приложения)","downloads.skipanyway.message1":"Я не хочу поддержать.","downloads.skipanyway.message2":"Вы уверены?","downloads.skipanyway.message3":"Точно?","downloads.skipanyway.message4":"П-пожалуйста, поддержите :(","downloads.skipanyway.message5":"Я нуждаюсь в вас :<","downloads.skipanyway.message6":"Хорошо, хорошо...","store.search.notFound":"Мы не смогли найти это присутствие...","error.code.404":"Извините, нам не удалось найти такую страницу.","error.code.4":"Вы ищете несуществующее или удаленное присутствие.","error.code.500":"Произошла внутренняя ошибка сервера.","error.page.details":"Подробности","error.page.button":"Вернуться на главную","user.notFound.heading":"Этот пользователь не найден. Попробуйте убедиться","user.notFound.message1":"ID пользователя корректен.","user.notFound.message2":"пользователь создал достаточное количество Presences и обладает ролью Presence-разработчика на нашем Discord сервере.","user.notFound.message3":"если другие столкнулись с такой же проблемой на нашем сервере Discord.","user.notFound.message4":"Если вы считаете, что это ошибка, пожалуйста, свяжитесь с нами на [нашем сервере Discord].","footer.language":"Язык","footer.usercount.heading":"Готовы опробовать PreMiD?","footer.usercount.message":"Присоединиться {0} пользователи сегодня!\\n","footer.usercount.button":"Установить","footer.partners.heading":"Партнеры","footer.followUs.heading":"Подпишитесь","footer.developers.heading":"Разработчикам","footer.developers.documentation":"Документация","footer.developers.richpresence":"Расширенные статусы","footer.supportus.heading":"Поддержите нас","footer.supportus.donate":"Пожертвовать","footer.supportus.contribute":"Внесите вклад","footer.supportus.translate":"Переведите","footer.supportus.jobs":"Работайте с нами!","footer.help.heading":"Помощь","footer.help.troubleshooting":"Поиск проблемы","footer.help.getsupport":"Получить помощь","footer.help.information":"Информация","footer.help.information.cookies":"Файлы cookies","footer.help.information.privacy":"Конфиденциальность","footer.help.information.terms":"Условия","footer.more.heading":"Больше","footer.more.status":"Состояние","footer.more.wiki":"Вики","footer.copyright.line1":"{0} с {1}","footer.copyright.line2":"Сайт разрабатывает {0}","footer.partners.more":"Нажмите здесь, чтобы увидеть других наших партнёров и спонсоров.","header.language":"Русский","header.languageNotification.title":"Мы поддерживаем ваш язык, использовать его?","header.languageNotification.text":"Наш веб-сайт был переведён на ваш язык. Это может вам помочь, если вы не очень хорошо знаете английский язык.","header.languageNotification.btnDecline":"Нет, спасибо","header.languageNotification.btnAccept":"Поменять язык","header.loader.phrases":"Готовим блинчики...;Устанавливаем контейнеры...;Парсим твой IP адрес...;UwU;Нарушаем правила...","header.store":"Магазин","header.downloads":"Загрузки ","header.contributors":"Участники","header.login":"Войти","header.lia":"Вы вошли как","header.rab":"Сообщить об ошибке","header.staff":"Обзор","header.logout":"Выйти","home.introduction.paragraph":"**PreMiD** — это простая, настраиваемая утилита, позволяющая вам показать, что вы делаете в сети в вашем статусе Discord.","home.introduction.button.features":"Возможности","home.introduction.button.downloads":"Загрузки ","home.examples.playingagame":"Играет в игру","home.examples.timestamp":"Осталось {0}","home.examples.timestamp2":"Прошло {0}","home.examples.status.playing":"Воспроизведение","home.examples.status.live":"Прямой эфир","home.examples.status.browsing":"Смотрит...","home.features.heading":"Вы полюбите эти функции!","home.features.presencesystem.heading":"Найдите **свой** статус","home.features.presencesystem.description":"Мы разработали расширение таким образом, чтобы вы могли добавлять, использовать и управлять Presences в том числе от других пользователей!","home.features.presencesystem.button":"Посетить магазин","home.features.simpleInterface.heading":"Простой интерфейс для пользователей","home.features.simpleInterface.description":"Устали от сложных пользовательских интерфейсов? Мы разработали и стараемся сохранить наш интерфейс как можно более простым и полезным включив такие важные функции как:","home.features.simpleInterface.description.1":"Настройки приложения и расширения","home.features.simpleInterface.description.2":"Управление статусами","home.features.simpleInterface.description.3":"Сортировка по категории","home.features.quickSupport.heading":"Быстрая поддержка","home.features.quickSupport.description":"Что-то зависает, отправляя тонну ошибок или просто не работает? Мы поможем избавиться от этих проблем на нашем Discord сервере. Кроме того, создана система поддержки, которая позволит решить вашу проблему как можно скорее.","home.features.quickSupport.button":"Присоединяйтесь к нашему Discord серверу","home.languageSelector.tippy":"Язык","jobs.modal.title":"Подать заявку на {0}","jobs.modal.step":"Шаг {0} из 2","jobs.modal.buttons.next":"Следующий","jobs.modal.buttons.join":"Присоединиться","jobs.modal.buttons.cancel":"Отменить","jobs.modal.error":"Пожалуйста, заполните все поля","jobs.modal.notice":"PreMiD является проектом с открытым исходным кодом, то есть мы являемся некоммерческой командой, каждая денежная сумма пойдут на проект. Запрашивая вакансию в PreMiD вы подтверждаете, что вы добровольно работаете в команде, вы не будете выплачивать вам вознаграждение за работу.","jobs.guild.required":"Присоединяйтесь к нашему Discord серверу","jobs.guild.explanation":"Чтобы подать заявку, Вы должны вступить на наш сервер Discord. Иначе мы не сможем связаться с вами, если Вы были выбраны!","jobs.header.title":"Работа для PreMiD","jobs.header.description":"Готовы ли Вы помочь крупнейшей программе Rich-Presence?","jobs.openings.title":"Вакансии","jobs.benefits.title":"Высокие преимущества","jobs.benefit1.title":"Встречайте нас","jobs.benefit1.description":"Свяжитесь с людьми за PreMiD.","jobs.benefit2.title":"Крайние пики","jobs.benefit2.description":"Ознакомьтесь с нашим маркетингом и разработкой.","jobs.benefit3.title":"Честь","jobs.benefit3.description":"Мощные права на Discord и цветная роль.","jobs.benefit4.title":"Поддержка PreMiD","jobs.benefit4.description":"Благодаря вашему вкладу можно запустить этот проект.","jobs.benefit5.title":"Тайм-аут","jobs.benefit5.description":"Займите свое время, это добровольная работа.","jobs.benefit6.title":"Ранний доступ","jobs.benefit6.description":"Протестируйте новые функции что-нибудь.","jobs.success.applied":"Спасибо, что подали заявку!","jobs.errors.alreadyApplied":"Вы уже подали заявку ранее!","maintenance.big":"О нет!","maintenance.heading":"К сожалению, у нас случились технические неполадки. Мы вскоре вернёмся. Заранее извиняемся за неудобства.","maintenance.heading2":"Пожалуйста, вернитесь попозже если вы хотите узнать больше подробностей.","maintenance.message":"Пока наши разработчики ещё это не починили, вы можете заглянуть сюда!","maintenance.statuspage":"Страница статуса","maintenance.discordserver":"Сервер в Discord","merch.title":"Добро пожаловать в официальный **PreMiD** магазин товаров!","merch.swag":"Найдите свой сваг **","merch.fit":"**Выберите свою форму**","merch.cart":"Добавьте в корзину","merch.help":"Проблемы с нашим магазином или заказом? Обратитесь в службу поддержки {0}{1}","merch.item.added":"{0} добавлен в вашу корзину","merch.error.noitem":"Нет товара для добавления в корзину","partners.header.title":"Партнеры","partners.header.description":"Присоединяйтесь к фаму и получите некоторые преимущества только для партнеров, чтобы показать сколько у вас хватает.","partners.slideshow.description":"Они уже принадлежат нам","partners.why.title":"Как насчет того, чтобы пойти на небо вместо ад?","partners.why.benefit1.title":"Ваши бесплатные Присутствия","partners.why.benefit1.description":"Наша команда предоставит Вам Присутствия Вашего сервиса.","partners.why.benefit2.title":"Получите верификацию","partners.why.benefit2.description":"Особая роль и большая честь будут предоставлены Вам на нашем сервере Discord.","partners.why.benefit3.title":"Интеграция с Meta-тегами","partners.why.benefit3.description":"Автоматически использует ваше присутствие при посещении вашего сайта.","partners.why.benefit4.title":"Получить увековеченный","partners.why.benefit4.description":"Неприятное место на нашей партнерской странице.","partners.why.benefit5.title":"Будьте известными","partners.why.benefit5.description":"Избранные на наших социальных сетях.","partners.requirements.title":"Требования","partners.requirements.first.title":"Что вы ищете?","partners.requirements.first.description":"Мы следим за растущими сообществами и интересными вещами в интернете. TL;DR вы уже должны использовать PreMiD и быть готовы распространить его на еще большее количество интернет-фриков. Прием в программу исключительно качественный и будет варьироваться от одного кандидата к другому.","partners.requirements.second.title":"Наш брандмауэр","partners.requirements.second.description":"В настоящее время мы принимаем различные виды усилий в нашу партнерскую программу. У каждого должен быть шанс быть замеченным. Вещатели Twitch должны иметь не менее 500 подписчиков и не менее 10 одновременных зрителей. Вы должны вести потоковую передачу не реже 1 раза в неделю.","partners.apply.button":"Подайте заявку прямо сейчас!","partners.apply.disclaimer":"Давай вместе отправимся на небеса!","partners.apply.jobs":"Если Вас интересует непосредственная работа в PreMiD, то ознакомьтесь с нашими **объявлениями о работе**.","partners.sponsors.title":"Спонсоры","partners.sponsors.description":"PreMiD был бы невозможен без этих удивительных людей.","partners.partner.aniFlix":"Вот как вы смотрите аниме.","partners.partner.arenaOfKings":"Arena of Kings-это быстро развивающаяся PvP-арена следующего поколения, в которую можно играть в браузере.","partners.partner.upBeat":"UpBeat-это некоммерческое Международное радио, которое стремится обеспечить непрерывное, качественное радио и новостные развлечения.","partners.partner.simLiveRadio":"SimLiveRadio - это самое успешное информационно-развлекательное радио для симуляторов игр в Германии, Австрии и Швейцарии!","partners.partner.discordTemplates":"Начните создавать свое собственное сообщество с нашими замечательными шаблонами. Постройте свое собственное королевство.","partners.partner.taigaBot":"taiga — это бот Discord, который пытается предложить все функции, которые вам могут понадобиться сразу!","partners.partner.bitRock":"Мощный и простой в использовании кросс-платформенный инструмент для создания установщика.","partners.partner.statusPage":"Легко сообщать своим пользователям о состоянии в реальном времени.","partners.partner.erisly":"Богиня, которая играет в качестве веселого бота Discord!","partners.partner.reyfm":"REYFM - это платформа, которая транслирует для вас лучшую и новейшую музыку, где вы можете слушать более 15 музыкальных потоков бесплатно и без перерыва!","partners.partner.crowdin":"Гибкая локализация для технологических компаний.","partners.partner.wikijs":"Самое мощное и расширяемое программное обеспечение с открытым исходным кодом Вики.","partners.partner.packageCloud":"Единый, дружественный для разработчиков интерфейс для всех ваших артефактов.","partners.partner.fastly":"За лучшим в сети.","partners.partner.onlyhit":"OnlyHit- это ваша онлайн-музыкальная радиостанция, созданная для воспроизведения ваших лучших песен 24/7 и для того, чтобы вы сначала открыли свои будущие хиты.","partners.partner.atomicradio":"Испытайте новейшее и лучшее сочетание музыкального мира на всех наших станциях, Выберите, какой вам нравится больше всего и быть там живым, когда на графике легенды сражаются друг с другом с новичками в топ-месте!","partners.apply.title":"Подать заявку на партнерство","partners.apply.loggedUser":"Вы вошли как {0}","partners.apply.notYou":"Это не вы?","partners.apply.select.default":"Пожалуйста, выберите один из","partners.apply.select.website":"Сайт","partners.apply.select.other":"Прочее","partners.apply.form.name":"Имя","partners.apply.form.name.placeholder":"Старый: PreMiD","partners.apply.form.link":"Ссылка","partners.apply.form.link.placeholder":"Старый: https://premid.app","partners.apply.form.description":"Описание: (максимум 150 символов)","partners.apply.form.description.placeholder":"Описание избранного","partners.apply.form.imageLink":"Ссылка на изображение: (только 550x300, PNG)","partners.apply.form.imageLink.placeholder":"Старый: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Закрыть","partners.apply.form.button.apply":"Применить","partners.apply.success":"Спасибо, что подали заявку!","partners.apply.error1":"Пожалуйста, заполните все поля.","partners.apply.error2":"В описании максимум 150 символов.","partners.apply.error3":"Пожалуйста, добавьте ссылку (должна начинаться с https:// и заканчиваться .png)","partners.apply.error4":"Вы уже подали заявку на партнерство.","presence.page.buttons.sourceCode":"Исходный код","presence.sections.description.title":"Описание","presence.sections.changelog.title":"Изменение","presence.sections.information.title":"Информация","presence.sections.information.author":"Автор","presence.sections.information.version":"Версия","presence.sections.information.likes":"Лайки","presence.sections.information.users":"Пользователи","presence.sections.information.tags":"Метки","presence.sections.information.supportedurls":"Поддерживаемые ссылки","presence.sections.information.contributors":"Участники","report.title":"Сообщить об ошибке","report.bugcount":"Осталось {count}/3 отчёта","report.info":"Сообщить об ошибках можно на сайте PreMiD и на сервере Discord PreMiD. Об ошибках в присутствии сообщается создателю присутствия. Сообщите об ошибках только на английском языке.","report.overview":"Предоставьте ясное и краткое описание того, что является ошибкой.","report.os":"Выберите вашу операционную систему и версию","report.browser":"Выберите ваш браузер и версию - Вы можете получить версию, посетив поддержку:Firefox или chrome://help","report.description":"Предоставьте ссылку на живой пример или недвусмысленный набор шагов для воспроизведения этой ошибки.","report.button":"Отчет","report.toomany":"У вас слишком много активных отчетов. Дождитесь рассмотрения отправленных отчетов. Еженедельная проверка отчетов, будьте терпеливы.","report.toomany.alert":"У вас слишком много активных отчетов.","report.success":"Ошибка отправлена","report.error":"Требуется больше информации","report.error.unauth":"Учетная запись Discord должна быть подтверждена","report.activebugs":"Активные ошибки","store.message.error":"Расширение не подключено.","store.cards.creator":"Автор","store.cards.popular":"Этот Присутствия очень популярен среди пользователей.","store.cards.partner":"Партнерское Присутствие","store.cards.extraStepsRequired":"Этот Присутствия требует дополнительной настройки. Пожалуйста, перейдите на страницу для получения информации.","store.header.search":"Поиск Присутствия","store.card.presence.add":"Добавить присутствие","store.card.presence.remove":"Удалить присутствие","store.card.presence.included":"Автоматически включается при посещении сайта.","store.category.filters.heading":"Фильтры","store.category.filters.mostUsed":"Наиболее используемые","store.category.filters.allowAdult":"Показать NSFW","store.category.filters.likedOnly":"Только понравившиеся Присутствия","store.filters.added":"Показать добавленные Присутствия","store.category.heading":"Категории","store.category.all":"Всё","store.category.games":"Игры","store.category.music":"Музыка","store.category.socials":"Соц. сети","store.category.videos":"Видео и Стримы","store.category.other":"Прочее","store.search":"Искать","store.search.filters":"Введите","store.search.removeFilter":"Нажмите, чтобы удалить фильтр","user.roles.presenceDeveloper":"Разработчик Присутствия","user.roles.presenceVerifier":"Верификатор присутствия","user.importantPresenceDev.message1":"Важный разработчик присутствия","user.importantPresenceDev.message2":"Создано {0} присутствий.","user.geniusPresenceDev.message1":"Гениальный разработчик присутствия","user.geniusPresenceDev.message2":"Создано более 100 Присутствий!","user.switch.contributed":"Пользователь [Присутствия/Взносы]","user.presences.created":"Нажмите здесь, чтобы показать Присутствия, которые этот пользователь создал.","user.presences.contributed":"Нажмите здесь, чтобы показать присутствия, к которым присоединился пользователь."}')
    }, function(e) {
        e.exports = JSON.parse('{"contributors.headings.staff":"Jadro týmu","contributors.headings.supporters":"Podporovatelia","contributors.headings.translators":"Prekladatelia","contributors.roles.moderator":"Moderátor","contributors.roles.donator":"Darca","contributors.roles.booster":"Booster","contributors.roles.translator":"Prekladateľ","downloads.instructions.heading":"Ako Začať","downloads.instructions.step.1":"Stiahnite si PreMiD","downloads.appdownloading.header":"Aplikácia","downloads.extdownloading.header":"Rozšírenie","downloads.tooltips.os.not.supported.part2":"{0} Nie je žiadny inštalátor pre tento operačný systém. To znamená, že nebude žiadna odborná podpora.","downloads.button.done":"Hotovo","downloads.adsbox.thankyou.title":"Ďakujeme!","user.notFound.heading":"Tohto užívateľa sa nepodarilo nájsť. Uistite sa že","footer.language":"Jazyk","footer.usercount.message":"Pripoj sa cez {0} užívateľmi dnes! ","footer.usercount.button":"Inštalovať","footer.partners.heading":"Partneri","footer.followUs.heading":"Sleduj nás","footer.developers.heading":"Vývojári","footer.developers.documentation":"Dokumenty","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Podpor nás","footer.supportus.donate":"Prispieť","footer.supportus.contribute":"Prispieť","footer.supportus.translate":"Preložiť","footer.supportus.jobs":"Pracuj s nami!","footer.help.heading":"Pomoc","footer.help.troubleshooting":"Riešenie problémov","footer.help.getsupport":"Získať Pomoc","footer.help.information":"Informácie","footer.help.information.cookies":"Súbory Cookies","footer.help.information.privacy":"Osobné údaje","footer.help.information.terms":"Podmienky","footer.more.heading":"Viac","footer.more.status":"Stav","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} od {1}","footer.copyright.line2":"Web spravuje {0}","header.language":"Slovenčina","header.languageNotification.title":"Podporujeme váš jazyk, chceš si ho zmeniť?","header.languageNotification.text":"Naša webová stránka bola preložená do vášho jazyka. Môže vám to pomôcť v prípade že dobre nehovoríte po Anglicky.","header.languageNotification.btnDecline":"Nie, ďakujem","header.languageNotification.btnAccept":"Zmeniť teraz","header.loader.phrases":"Pečiem palacinky...;Umiestňujem kontajnery...; Analyzujem tvoju IP adresu...;UwU;Porušujem pravidlá...","header.store":"Obchod","header.downloads":"Stiahnuť ","header.contributors":"Prispievatelia","home.introduction.button.downloads":"Stiahnuť ","home.examples.playingagame":"Hrá hru","home.examples.timestamp":"ostáva {0}","home.examples.status.playing":"Prehráva","home.examples.status.live":"Naživo","home.examples.status.browsing":"Prehľadáva...","home.features.heading":"Tieto funkcie sa ti budú páčiť!","home.features.presencesystem.heading":"Nájdite **svoju** prítomnosť","home.features.simpleInterface.heading":"Jednoduché užívateľské rozhranie","home.features.simpleInterface.description.1":"Nastavenia Aplikácií a Rozšírení","home.features.simpleInterface.description.2":"Spravovanie prítomnosti","home.features.quickSupport.heading":"Rýchla podpora","maintenance.big":"Ale nie!","maintenance.message":"Kým to naši špeciálni vývojári riešia, neváhajte sa pozrieť tu!","maintenance.statuspage":"Stav","maintenance.discordserver":"Discord Server","partners.header.title":"Partneri","partners.why.benefit5.title":"Buď slavný","partners.requirements.title":"Požiadavky","partners.apply.select.other":"Ostatné","partners.apply.form.name":"Názov","presence.sections.description.title":"Popis","presence.sections.changelog.title":"Zoznam zmien","presence.sections.information.title":"Informácie","presence.sections.information.author":"Autor","presence.sections.information.version":"Verzia","presence.sections.information.tags":"Štítky","presence.sections.information.supportedurls":"Podporené URL stránky","presence.sections.information.contributors":"Prispievatelia","store.cards.creator":"Autor","store.category.heading":"Kategórie","store.category.all":"Všetko","store.category.games":"Hry","store.category.music":"Hudba","store.category.socials":"Sociálne siete","store.category.videos":"Videá & Streamy","store.category.other":"Ostatné","user.roles.presenceDeveloper":"Vývojár prítomností","user.roles.presenceVerifier":"Overovateľ prítomností","user.importantPresenceDev.message1":"Dôležitý vývojár prítomností","user.importantPresenceDev.message2":"Vytvorené {0} prítomnosťou."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Želite nove posebnosti?","beta.description.1":"**PreMiD Beta** je zdaj na voljo vsem!","beta.description.2":"Kaj boš pridobil/a, če se registriraš?","beta.features.1":"Najnovejše posebnosti","beta.features.2":"Dostop do PreMiD super skrivnostnih besedilnih kanalov","beta.features.3":"Posebno vlogo na našem Discord strežniku","beta.register.text":"Si pripravljen/a? Pridruži se {0} ostalim Beta testerjem!","beta.register.button":"Registriraj se zdaj!","thankyou.title":"Odlično! Zdaj si beta uporabnik!","thankyou.description":"Naše opice delajo na tem, da te sprejmejo v naš beta program kolikor hitro lahko! Hvala za registracijo!","error.noslots":"Videti je, da nimamo več beta različic na voljo.","contributors.headings.staff":"Osebje","contributors.headings.supporters":"Donatorji / Podporniki","contributors.headings.translators":"Prevajalci","contributors.roles.designer":"Oblikovalec","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Podporni Agent","contributors.roles.proofreader":"Pregled prevodov","contributors.roles.donator":"Donator","contributors.roles.booster":"Podpornik strežnika","contributors.roles.translator":"Prevajalec","contributors.cards.copyUserId":"Klikni za kopiranje ID uporabnika.","contributors.cards.userIdCopied":"Uporabniški ID je kopiran!","downloads.header.title":"Čas je, da se pokažeš.","downloads.header.subtitle":"Začnite uporabljati PreMiD zdaj in pokažite ljudem kaj delate, mogoče boste tudi našli nekoga z enakimi interesi.","downloads.instructions.heading":"Začnite uporabljati","downloads.instructions.step.1":"Prenesi PreMiD","downloads.instructions.step.2":"Namesti našo aplikacijo","downloads.instructions.step.3":"Dodaj našo Razširitev na vaš brskalnik","downloads.instructions.step.4":"Ponovno naložite stran in poglejte če je razširitev povezana","downloads.instructions.footer":"Še vedno imate težave? {0}","downloads.instructions.footer.link":"Tukaj smo, da vam pomagamo!","downloads.appdownloading.header":"Aplikacija","downloads.extdownloading.header":"Razširitev","downloads.tooltips.os.not.supported.part1":"Opozorilo:","downloads.tooltips.os.not.supported.part2":"{0} Za ta operacijski sistem ni namestitvenega programa. To pomeni da ni profesionalne podpore za to.","downloads.mobile.errorMessage":"Prosim zavedajte se, da PreMiD ni podpiran na mobilnih telefonih.","downloads.mobile.showDownloads":"Pokaži Prenose","downloads.mobile.hideDownloads":"Skrij Prenose","downloads.warning.differentVersion2":"Ta verzija je specifična za Linux, in se ne velja za druge sisteme. Aplikacijska glavna verzija je {0}","downloads.error.login":"Prosim vpišite se, če hočete videti prenose.","downloads.error.noaccess.title":"Oh ne, zgleda da nimate dostopa do alpha/beta verzije :(","downloads.error.noaccess.description":"Lahko se pridružiš beta programu **tukaj** zastonj. Pohiti! Imamo še samo {0} slotov na voljo","downloads.latest.header":"Zgodnje Izdaje","downloads.warning.title":"Opozorilo","downloads.warning.message.opera":"Rabite namestiti **to** razširitev, da lahko namestite PreMiD iz Chrome Spletne Trgovine.","downloads.button.skip":"Preskoči","downloads.button.back":"Nazaj","downloads.button.cancel":"Prekliči","downloads.button.okay":"V redu","downloads.button.done":"Končano","downloads.button.login":"Vpis","downloads.adsbox.thankyou.title":"Hvala vam!","downloads.adsbox.thankyou.message":"Mi uporabljamo oglase, da podpiramo našo ekipo in vzdržujemo naše strežnike, da vam prinašajo najboljše uporabniške izkušnje!","downloads.adsbox.disableAdblock":"Prosim onemogočite vaš adblock","downloads.showbeta.small":"(ni potrebe če ste tukaj samo za prenesitev normalne aplikacije)","downloads.skipanyway.message1":"Nočem podpirati.","downloads.skipanyway.message2":"Ste prepričani?","downloads.skipanyway.message3":"Res?","downloads.skipanyway.message4":"P-prosim podpirajte nas :(","downloads.skipanyway.message5":"Rabimo te :<","downloads.skipanyway.message6":"V redu, V redu...","store.search.notFound":"To razširitev nismo našli...","error.code.404":"Se opravičujemo, to stran nismo našli.","error.code.4":"Vi iščete za razširitev, ki je bila odstranjena ali ki ne obstaja več.","error.code.500":"Prišlo je do notranje napake strežnika.","error.page.details":"Podrobnosti","error.page.button":"Nazaj na domačo stran","user.notFound.heading":"Tega uporabnika nismo našli. Poskusite se prepričati","user.notFound.message1":"da je uporabniški ID, ki ga iščete, pravilni.","user.notFound.message2":"da je uporabnik naredil dovolj Razširitev in ima Razvijalec Razširitev vlogo na našem Discord strežniku.","user.notFound.message3":"če drugi imajo enako težavo v našem Discord strežniku.","user.notFound.message4":"Če mislite, da je to bila napaka, prosim kontaktirajte nas na [našem Discord strežniku].","footer.language":"Jezik","footer.usercount.heading":"Ste pripravljeni uporabljati PreMiD?","footer.usercount.message":"Pridruži se z več kot {0} uporabnikov danes!","footer.usercount.button":"Namestitev","footer.partners.heading":"Partnerji","footer.followUs.heading":"Sledite Nam","footer.developers.heading":"Razvijalci","footer.developers.documentation":"Dokumentacija","footer.developers.richpresence":"Bogati Dodatek","footer.supportus.heading":"Podprite nas","footer.supportus.donate":"Donirajte","footer.supportus.contribute":"Prispevajte","footer.supportus.translate":"Prevajajte","footer.supportus.jobs":"Delaj z nami!","footer.help.heading":"Pomoč","footer.help.troubleshooting":"Odpravljanje napak","footer.help.getsupport":"Najdi Pomoč","footer.help.information":"Informacije","footer.help.information.cookies":"Piškotki","footer.help.information.privacy":"Zasebnost","footer.help.information.terms":"Pogoji uporabe","footer.more.heading":"Več","footer.more.status":"Status","footer.more.wiki":"Wikipedija","footer.copyright.line1":"{0} od {1}","footer.copyright.line2":"Spletna stran vzdrževana od {0}","footer.partners.more":"Klikni tukaj, da vidiš ostale partnerje & sponzorje.","header.language":"Slovenščina","header.languageNotification.title":"Mi podpiramo vaš jezik, bi spremenili na slovenščino?","header.languageNotification.text":"Naša stran je zdaj prevedena v vaš jezik. To vam lahko pomaga če ne znate Angleščino tako dobro.","header.languageNotification.btnDecline":"Ne, hvala","header.languageNotification.btnAccept":"Spremeni jezik","header.loader.phrases":"Pečenje palačink...;Postavljanje zabojnikov...;Razčlenjevanje vašega IP naslova...;UwU;Kršenje pravila...","header.store":"Trgovina","header.downloads":"Prenosi","header.contributors":"Sodelavci","header.login":"Vpis","header.lia":"Prijavljen(a) kot","header.rab":"Prijavite napako","header.staff":"Nadzorna plošča","header.logout":"Odjava","home.introduction.paragraph":"**PreMiD** je preprost, nastavljiv pripomoček, ki ostalim pokaže kaj delate na spletu v programu Discord.","home.introduction.button.features":"Funkcije","home.introduction.button.downloads":"Prenosi","home.examples.playingagame":"Igranje iger","home.examples.timestamp":"{0} Preostali čas","home.examples.timestamp2":"{0} preteklo","home.examples.status.playing":"Predvajanje","home.examples.status.live":"V živo","home.examples.status.browsing":"Brskanje...","home.features.heading":"Te funkcije vam bodo všeč!","home.features.presencesystem.heading":"Poišči **svoj** dodatek","home.features.presencesystem.description":"Mi smo razvili našo razširitev tako, da lahko dodajate in uporabljate dodatke narejene od drugih uporabnikov in jih lahko upravljate v naši razširitvi!","home.features.presencesystem.button":"Obišči trgovino","home.features.simpleInterface.heading":"Preprosti UI (Uporabniški Vmesnik)","home.features.simpleInterface.description":"Ste naveličani od zapletenih uporabniških vmesnikih? Zato smo ustvarili svoj Uporabniški Vmesnik, ki deluje preprosto in uporabno z pomembnih lastnostih, kot so:","home.features.simpleInterface.description.1":"Aplikacijske in Razširitvene nastavitve","home.features.simpleInterface.description.2":"Upravljanje z dodatki","home.features.simpleInterface.description.3":"Razvrsti po kategorijah","home.features.quickSupport.heading":"Hitra pomoč","home.features.quickSupport.description":"Ali imate napake in vam nekaj ne dela? Mi vam bomo pomagali odstraniti te napake na našem Discord strežniku, mi smo tudi ustvarili našo podporno ekipo, ki vam bo odstranila napake takoj, ko bo možno.","home.features.quickSupport.button":"Pridružite se našemu Discord-u","home.languageSelector.tippy":"Jezik spletne strani","jobs.modal.title":"Vpiši se za {0}","jobs.modal.step":"Korak {0} od 2","jobs.modal.buttons.next":"Naprej","jobs.modal.buttons.join":"Pridruži se","jobs.modal.buttons.cancel":"Prekliči","jobs.modal.error":"Prosimo da, izpolnite vsa polja","jobs.modal.notice":"PreMiD je odprto-kodni projekt, ki pomeni da smo ne-profitna ekipa, vsaka donacija ali patreon denar gre v razvijanje produkta. Če se mislite prijaviti za pozicijo k PreMiD-u, vi priznate da pridete v ekipo prostovoljno, kar pomeni, da ne boste bili plačani za vaše delo.","jobs.guild.required":"Pridružite se našemu Discord-u","jobs.guild.explanation":"Če se mislite prijaviti za službo, se morate pridružiti našemu Discord strežniku. Drugače vas ne moremo kontaktirati če vas izberemo!","jobs.header.title":"Delaj za PreMiD","jobs.header.description":"Ste pripravljeni pomagati največjem Rich-Presence programu?","jobs.openings.title":"Odprta Delovna Mesta","jobs.benefits.title":"Velike Koristi","jobs.benefit1.title":"Spoznajte nas","jobs.benefit1.description":"Spoznajte ljudi, ki delajo za PreMiD.","jobs.benefit2.title":"Pokukaj","jobs.benefit2.description":"Poglejte v naše Razvijanje in Trženje.","jobs.benefit3.title":"Čast","jobs.benefit3.description":"Močna Discord dovoljenja in barvita vloga.","jobs.benefit4.title":"Podpiraj PreMiD","jobs.benefit4.description":"S tvojim prispevkom je mogoče vzdrževati ta projekt.","jobs.benefit5.title":"Časovna omejitev","jobs.benefit5.description":"Vzemi si čas, To je prostovoljna služba.","jobs.benefit6.title":"Zgodnji-Dostop","jobs.benefit6.description":"Testiraj nove funkcije pred vsem drugim.","jobs.success.applied":"Hvala vam za prijavo!","jobs.errors.alreadyApplied":"Vi ste se že prijavili!","maintenance.big":"Oh ne!","maintenance.heading":"Na žalost imamo tehnične napake. Vrnemo se kmalu. Se opravičujemo za težavo.","maintenance.heading2":"Prosimo pridite pozneje za več informacij.","maintenance.message":"Dokler naši razvijalci tega ne odpravijo, ste dobrodošli da pogledate tukaj!","maintenance.statuspage":"Status Strežnikov","maintenance.discordserver":"Discord Strežnik","merch.title":"Dobrodošli k uradni **PreMiD** Blagovski trgovini!","merch.swag":"Poišči svoj **Swag**","merch.fit":"**Izberite svojo številko / črko**","merch.cart":"Dodaj v košarico","merch.help":"Imate probleme z našo trgovino? Kontaktirajte našo {0}podporo strankam{1}","merch.item.added":"{0} Dodano v vašo košarico","merch.error.noitem":"Ni Izdelka, ki ga hočete dodati v košarico","partners.header.title":"Partnerji","partners.header.description":"Pridruži se familiji in pridobi partnerske koristi, da se lahko pokažeš drugim koliko swag si.","partners.slideshow.description":"Te že pripadajo k nam","partners.why.title":"Kaj pa če greš v nebesa namesto pekla?","partners.why.benefit1.title":"Tvoj zastonj Dodatek","partners.why.benefit1.description":"Naša ekipa bo zagotovila dodatek po vaših pravilih.","partners.why.benefit2.title":"Postani preverjen","partners.why.benefit2.description":"Dobili boste posebno vlogo in čast na našem Discord strežniku.","partners.why.benefit3.title":"Meta-oznak integracija","partners.why.benefit3.description":"Samodejno izbere tvoj Dodatek ko nekdo je na vaši spletni strani.","partners.why.benefit4.title":"Postanite ovekovečeni","partners.why.benefit4.description":"Posebno mesto na naši spletni strani.","partners.why.benefit5.title":"Postani slaven","partners.why.benefit5.description":"Omenjeni boste na naših družbenih medijah.","partners.requirements.title":"Zahteve","partners.requirements.first.title":"Kaj pa mi iščemo?","partners.requirements.first.description":"Pazimo na naraščajoče skupnosti in zanimive stvari po internetu. TL; DR, morali bi že uporabljati PreMiD in ga razširiti do več internetnih čudakov. Sprejem v program je izredno kvaliteten in bo od kandidata do kandidata drugačen.","partners.requirements.second.title":"Naš požarni zid","partners.requirements.second.description":"Mi za zdaj sprejemamo različne spretnosti na naš partnerski program. Vsak ima priložnost biti opažen. Twitch streamerji morajo imeti vsaj 500 sledilcev in vsaj 10 non-stop gledalcev in morajo streamati vsaj enkrat na teden.","partners.apply.button":"Prijavi se zdaj!","partners.apply.disclaimer":"Gremo skupaj v nebesa!","partners.apply.jobs":"Če ste raje zainteresirani na direktno službo pri PreMiD, potem pridite pogledati na naše **službene oglase**.","partners.sponsors.title":"Sponzorji","partners.sponsors.description":"PreMiD ne bi bil mogočen, brez teh odličnih ljudeh.","partners.partner.aniFlix":"Tako gledaš anime.","partners.partner.arenaOfKings":"Arena of Kings je nova generacija, hitri-tempo PvP Arena Igra, ki se ga igra v brskalniku.","partners.partner.upBeat":"UpBeat je neprofitna globalna radio postaja, kjer lahko poslušate non-stop kakovostne radio postaje in novice.","partners.partner.simLiveRadio":"SimLiveRadio je najbolj uspešna informativna radio postaja za simulacijske igre v Nemčiji, Avstriji in Švici!","partners.partner.discordTemplates":"Začni zgraditi svojo skupnost z našim odličnih predlogah. Zgradi svoje kraljestvo.","partners.partner.taigaBot":"taiga je Discord Bot, ki ponuja vse funkcije ki jih rabite, vse v eno!","partners.partner.bitRock":"Močen in enostavno uporabljen cross-platform inštalacija orodje za ustvarjanje.","partners.partner.statusPage":"Enostavno komunicirajte v realnem času svoj status svojim uporabnikom.","partners.partner.erisly":"Boginja ki igra kot zabaven Discord Bot!","partners.partner.crowdin":"Agilna lokalizacija za tehnološka podjetja.","partners.partner.wikijs":"Najmočnejši in razširjeni odprto-kodni Wiki program.","partners.partner.packageCloud":"Poenotena, razvijalcu prijazen vmesnik za vse vaše artifakte.","partners.partner.fastly":"Za najboljšimi v spletu.","partners.apply.title":"Vpiši se za partnerja","partners.apply.loggedUser":"Prijavljen(a) kot {0}","partners.apply.notYou":"Niste vi?","partners.apply.select.default":"Prosimo izberite eno","partners.apply.select.website":"Spletna stran","partners.apply.select.other":"Drugo","partners.apply.form.name":"Ime","partners.apply.form.name.placeholder":"Npr: PreMiD","partners.apply.form.link":"Link / Povezava","partners.apply.form.link.placeholder":"Npr: https://premid.app","partners.apply.form.description":"Opis: (Največ do 150 črk)","partners.apply.form.description.placeholder":"Opis za predstavo","partners.apply.form.imageLink":"Slika linka / povezave: (550x300, samo PNG)","partners.apply.form.imageLink.placeholder":"Npr: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Zapri","partners.apply.form.button.apply":"Prijava","partners.apply.success":"Hvala vam za prijavo!","partners.apply.error1":"Prosimo da, izpolnite vsa polja.","partners.apply.error2":"Maksimalno 150 črk opisa.","partners.apply.error3":"Prosimo dodajte link / povezavo (se mora začeti z https:// in končati z .png)","partners.apply.error4":"Vi ste se že prijavili za partnerja.","presence.page.buttons.sourceCode":"Izvorna Koda","presence.sections.description.title":"Opis","presence.sections.changelog.title":"Seznam Sprememb","presence.sections.information.title":"Informacije","presence.sections.information.author":"Avtor","presence.sections.information.version":"Verzija / Različica","presence.sections.information.likes":"Všečki","presence.sections.information.users":"Uporabniki","presence.sections.information.tags":"Oznaki","presence.sections.information.supportedurls":"Podprti URL-ji","presence.sections.information.contributors":"Sodelavci","report.title":"Prijavi Napako","report.bugcount":"{count}/3 Poslanih Prijav","report.info":"Prijavljanje napak so za napake, ki so v PreMiD spletni strani in v PreMiD Discord Strežniku. Napake ki so namenjene za dodatke, se rabite prijaviti k avtorju. Prijavljanje je samo v Angleščini.","report.overview":"Prijavi kakšno napako imate.","report.os":"Izberi svoj Operacijski Sistem in Verzijo","report.browser":"Izberi svoj Brskalnik in Verzijo - Če imate Chrome, vtipkajte chrome://help, Če imate Firefox, vtipkajte about:support za vašo verzijo","report.description":"Prosimo vtipkajte link ali korake, kako ste to napako naredili.","report.button":"Prijavi","report.toomany":"Vi imate preveliko aktivnih prijav. Prosimo počakajte da ekipa pogleda vaše prijave. Prijave so pregledane vsak teden, bodite potrpežljivi.","report.toomany.alert":"Vi imate preveliko aktivnih prijav.","report.success":"Prijava Poslana","report.error":"Več informacij zahtevanih","report.error.unauth":"Discord račun mora biti preverjen","report.activebugs":"Aktivne Prijave / Napake","store.message.error":"Razširitev ni povezana.","store.cards.creator":"Avtor","store.cards.popular":"Ta Dodatek je zelo popularen med uporabnikih.","store.cards.partner":"Partnerski Dodatek","store.cards.extraStepsRequired":"Ta dodatek zahteva več korakov, prosimo preverite njegovo stran za več informacij.","store.header.search":"Išči Dodatek","store.card.presence.add":"Dodaj Dodatek","store.card.presence.remove":"Odstrani Dodatek","store.card.presence.included":"Ta Dodatek se samodejno vklopi, ko obiščite njegovo stran.","store.category.filters.heading":"Filtri","store.category.filters.mostUsed":"Najbolj uporabno prvo","store.category.filters.allowAdult":"Prikaži NSFW (R18)","store.category.filters.likedOnly":"Samo všečkani Dodatki","store.filters.added":"Pokaži dodane Dodatke","store.category.heading":"Kategorije","store.category.all":"Vse","store.category.games":"Igre","store.category.music":"Glasba","store.category.socials":"Družabno","store.category.videos":"Videoposnetki in prenosi v živo","store.category.other":"Drugo","store.search":"Išči","store.search.filters":"Vnesi","store.search.removeFilter":"Kliknite, če želite odstraniti filter","user.roles.presenceDeveloper":"Razvijalec Dodatkov","user.roles.presenceVerifier":"Nadzornik Dodatkov","user.importantPresenceDev.message1":"Pomemben Razvijalec Dodatkov","user.importantPresenceDev.message2":"Narejenih {0} dodatkov.","user.geniusPresenceDev.message1":"Pameten Razvijalec Dodatkov","user.geniusPresenceDev.message2":"Narejenih več kot 100 Dodatkov!","user.switch.contributed":"Uporabniške [Dodatke/Prispevke]","user.presences.created":"Klikni tukaj, da pokažeš dodatke, ki jih je ta uporabnik naredil.","user.presences.contributed":"Klikni tukaj, da pokažeš dodatke, ki jih je ta uporabnik prispeval k."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Vill du se funktioner?","beta.description.1":"**PreMiD Beta** finns nu tillgängligt för alla!","beta.description.2":"Vad får du om du anmäler dig?","beta.features.1":"De senaste funktionerna","beta.features.2":"Tillgång till PreMiDs superhemliga textkanaler","beta.features.3":"En särskild roll på vår Discord-server","beta.register.text":"Känner du dig redo? Gå med i {0} andra Beta-testare!","beta.register.button":"Registrera dig nu!","thankyou.title":"Coolt! Du är nu en beta-användare!","thankyou.description":"Våra apor arbetar på att få dig in i vårt beta-program så fort som möjligt. Tack för att du registrerar dig!","error.noslots":"Det verkar som att vi inte har några fler beta platser tillgängliga.","contributors.headings.staff":"Personal","contributors.headings.supporters":"Supportrar","contributors.headings.translators":"Översättare","contributors.roles.projectLeader":"Projektledare","contributors.roles.staffCoordinator":"Personalkoordinator","contributors.roles.marketingDirector":"Marknadsföringschef","contributors.roles.administrator":"Administratör","contributors.roles.reviewer":"Granskare","contributors.roles.localizationManager":"Lokaliseringshanterare","contributors.roles.developer":"Utvecklare","contributors.roles.designer":"Designer","contributors.roles.moderator":"Moderator","contributors.roles.supportAgent":"Supportagent","contributors.roles.representative":"Representant","contributors.roles.proofreader":"Korrekturläsare","contributors.roles.donator":"Donator","contributors.roles.booster":"Booster","contributors.roles.translator":"Översättare","contributors.cards.copyUserId":"Klicka för att kopiera användarens ID.","contributors.cards.userIdCopied":"Användar-ID kopierat!","downloads.header.title":"Dags att visa upp.","downloads.header.subtitle":"Använd PreMiD nu och visa dina vänner vad du gör, du kanske hittar någon med samma intressen.","downloads.instructions.heading":"Kom igång","downloads.instructions.step.1":"Ladda ner PreMiD","downloads.instructions.step.2":"Installera vårt program","downloads.instructions.step.3":"Lägg till vårt Tillägg i din webbläsare","downloads.instructions.step.4":"Ladda om den här sidan och kolla om tillägget är anslutet","downloads.instructions.footer":"Har du fortfarande problem? {0}","downloads.instructions.footer.link":"Vi är här för att hjälpa dig!","downloads.appdownloading.header":"Program","downloads.extdownloading.header":"Tillägg","downloads.tooltips.os.not.supported.part1":"Varning:","downloads.tooltips.os.not.supported.part2":"{0} Det finns ingen installerare för ditt operativsystem. Detta betyder att det finns ingen officiellt stöd för det.","downloads.mobile.errorMessage":"Vänligen observera att PreMiD inte stöds på mobiltelefoner.","downloads.mobile.showDownloads":"Visa nedladdningar","downloads.mobile.hideDownloads":"Göm nedladdningar","downloads.warning.differentVersion":"Nuvarande version för detta system är {0} (denna version är specifik för Linux, och gäller inte för andra operativsystem).","downloads.warning.differentVersion2":"Denna version är specifik för Linux, och gäller inte för andra system. Programmets huvudversion är {0}","downloads.error.login":"Logga in för att se dessa nedladdningar.","downloads.error.noaccess.title":"Oj, det verkar som att du inte har tillgång till alpha/beta :(","downloads.error.noaccess.description":"Du kan gå med i vårt betaprogram **här** gratis. Skynda dig! Vi har bara {0} platser tillgängliga","downloads.latest.header":"Tidiga Utgåvor","downloads.warning.title":"Varning","downloads.warning.message.opera":"Du måste installera **det här** tillägget för att installera PreMiD från Chrome Webstore.","downloads.button.skip":"Hoppa över","downloads.button.back":"Tillbaka","downloads.button.cancel":"Avbryt","downloads.button.okay":"Okej","downloads.button.done":"Klar","downloads.button.login":"Logga in","downloads.button.skipanyway":"Hoppa över ändå","downloads.adsbox.thankyou.title":"Tack!","downloads.adsbox.thankyou.message":"Vi använder annonser för att stödja vårt team och upprätthålla våra servrar för att erbjuda dig den bästa användarupplevelsen!","downloads.adsbox.disableAdblock":"Vänligen inaktivera din adblocker","downloads.showbeta.message":"Visa tidiga utgåvor","downloads.showbeta.small":"(behövs inte om du bara är här för att ladda ner det vanliga programmet)","downloads.skipanyway.message1":"Jag vill inte stödja.","downloads.skipanyway.message2":"Är du säker?","downloads.skipanyway.message3":"Verkligen?","downloads.skipanyway.message4":"S-snälla stöd oss :(","downloads.skipanyway.message5":"Jag behöver dig :<","downloads.skipanyway.message6":"Okej, okej...","store.search.notFound":"Vi kunde inte hitta den Presencen...","error.code.404":"Tyvärr, vi kunde inte hitta den sidan.","error.code.4":"Du letar efter en oexisterande eller raderad Presence.","error.code.500":"Ett internt serverfel har uppstått.","error.page.details":"Detaljer","error.page.button":"Tillbaka till hemsidan","user.notFound.heading":"Den användaren kunde inte hittas. Försök att vara säker på","user.notFound.message1":"att det användar-ID som du letar efter är korrekt.","user.notFound.message2":"att användaren har skapat tillräckligt många Precenses och har Precense Developer rollen i vår Discord server.","user.notFound.message3":"om andra har samma problem på vår Discord server.","user.notFound.message4":"Om du tror att det här var ett misstag, kontakta oss på [vår Discord server].","footer.language":"Språk","footer.usercount.heading":"Redo att använda PreMiD?","footer.usercount.message":"Gå med {0} användare idag!","footer.usercount.button":"Installera","footer.partners.heading":"Partners","footer.followUs.heading":"Följ Oss","footer.developers.heading":"Utvecklare","footer.developers.documentation":"Dokumentation","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Stöd oss","footer.supportus.donate":"Donera","footer.supportus.contribute":"Bidra","footer.supportus.translate":"Översätt","footer.supportus.jobs":"Jobba med oss!","footer.help.heading":"Hjälp","footer.help.troubleshooting":"Felsökning","footer.help.getsupport":"Få hjälp","footer.help.information":"Information","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Sekretess","footer.help.information.terms":"Villkor","footer.more.heading":"Mer","footer.more.status":"Status","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} av {1}","footer.copyright.line2":"Hemsidan sköts av {0}","footer.partners.more":"Klicka här för att se resten av våra partners & sponsorer.","header.language":"Svenska","header.languageNotification.title":"Vi stödjer ditt språk, vill du byta?","header.languageNotification.text":"Vår hemsida har blivit översatt till ditt språk. Detta kan hjälpa dig ifall du inte talar så bra Engelska.","header.languageNotification.btnDecline":"Nej, tack","header.languageNotification.btnAccept":"Ändra språk","header.loader.phrases":"Bakar pannkakor...;Placerar behållare...;Tolkar din IP...;UwU;Bryter mot regler...","header.store":"Butik","header.downloads":"Hämtningar","header.contributors":"Medverkande","header.login":"Logga in","header.lia":"Inloggad som","header.rab":"Rapportera en bug","header.staff":"Panel","header.logout":"Logga ut","home.introduction.paragraph":"**PreMiD** är ett enkelt, konfigurerbart verktyg som låter dig visa vad du gör på webben i din Discords spelstatus.","home.introduction.button.features":"Funktioner","home.introduction.button.downloads":"Nedladdningar","home.examples.playingagame":"Spela ett spel","home.examples.timestamp":"{0} kvar","home.examples.timestamp2":"{0} förflutit","home.examples.status.playing":"Spelar upp","home.examples.status.live":"Live","home.examples.status.browsing":"Bläddrar...","home.features.heading":"Du kommer älska våra funktioner!","home.features.presencesystem.heading":"Hitta **din** presence","home.features.presencesystem.description":"Vi skapade vårat tillägg på ett sätt som låter dig lägga till och använda Presencer skapade av andra och hantera de i vårat tillägg!","home.features.presencesystem.button":"Besök butiken","home.features.simpleInterface.heading":"Enkelt gränssnitt","home.features.simpleInterface.description":"Trött på komplicerade användargränssnitt? Det är därför vi skapade och försöker hålla våran UI så enkel som möjlig med viktiga funktioner som:","home.features.simpleInterface.description.1":"Program och tilläggs inställningar","home.features.simpleInterface.description.2":"Presence hantering","home.features.simpleInterface.description.3":"Sortera efter kategori","home.features.quickSupport.heading":"Support","home.features.quickSupport.description":"Något är buggat, ger dig massor av fel eller helt enkelt fungerar inter? Vi hjälper dig att bli av med dessa problem i vår Discord-server, vi skapade också vårt eget supportsystem som ser till att ditt problem blir löst så snabbt som möjligt.","home.features.quickSupport.button":"Gå med i vår Discord","home.languageSelector.tippy":"Webbplatsspråk","jobs.modal.title":"Ansök till {0}","jobs.modal.step":"Steg {0} av 2","jobs.modal.buttons.next":"Nästa","jobs.modal.buttons.join":"Gå med","jobs.modal.buttons.cancel":"Avbryt","jobs.modal.error":"Var vänlig fyll i alla fält","jobs.modal.notice":"PreMiD är ett projekt med öppen källkod, vilket innebär att vi är ett ideellt team, varje donation eller patreonpengar går tillbaka till produkten. Genom att ansöka om en anställning hos PreMiD bekräftar du att du är volontär i teamet kommer du inte att få betalt för ditt arbete.","jobs.guild.required":"Gå med i vår Discord","jobs.guild.explanation":"För att kunna ansöka så måste du gå med i vår Discord-server. Annars kan vi inte kontakta dig ifall du blir utvald!","jobs.header.title":"Arbeta för PreMiD","jobs.header.description":"Är du redo att hjälpa det största Rich-Presence programmet?","jobs.openings.title":"Lediga jobb","jobs.benefits.title":"Föredelar","jobs.benefit1.title":"Möt oss","jobs.benefit1.description":"Ta kontakt med människorna bakom PreMiD.","jobs.benefit2.title":"Smygtitta","jobs.benefit2.description":"Ta en titt på vår utveckling och marknadsföring.","jobs.benefit3.title":"Ära","jobs.benefit3.description":"Kraftfulla Discord-behörigheter och en färgstark roll.","jobs.benefit4.title":"Stötta PreMiD","jobs.benefit4.description":"Med din hjälp är det möjligt att driva det här projektet.","jobs.benefit5.title":"Timeout","jobs.benefit5.description":"Ta dig tid och det är frivilligt arbete.","jobs.benefit6.title":"Förhandstillgång","jobs.benefit6.description":"Testa nya funktioner före alla andra.","jobs.success.applied":"Tack för din ansökan!","jobs.errors.alreadyApplied":"Du har redan ansökt!","maintenance.big":"Åh nej!","maintenance.heading":"Tyvärr har vi just nu lite problem. Vi är tillbaka snart. Ursäkta besväret.","maintenance.heading2":"Kom tillbaka senare för mer information.","maintenance.message":"Tills våra utvecklare fixar detta, kolla här!","maintenance.statuspage":"Statussida","maintenance.discordserver":"Discord Server","merch.title":"Välkommen till den officiella **PreMiD** butiken!","merch.swag":"Hitta din **Swag**","merch.fit":"**Välj din stil**","merch.cart":"Lägg till i kundvagnen","merch.help":"Upplever du problem med vår butik eller en order? Kontakta vår {0}kundsupport{1}","merch.item.added":"{0} har lagts till i din kundvagn","merch.error.noitem":"Det finns ingen vald vara att lägga till din kundvagn","partners.header.title":"Partners","partners.header.description":"Gå med i familjen och få några partner-exklusiva fördelar för att visa upp hur mycket swag du har.","partners.slideshow.description":"Dessa hör redan till oss","partners.why.title":"Vad sägs om att gå till himlen istället för helvetet?","partners.why.benefit1.title":"Din gratis Presence","partners.why.benefit1.description":"Vårt team kommer att ge dig en Presence för din webbplats.","partners.why.benefit2.title":"Bli verifierad","partners.why.benefit2.description":"En särskild roll och stor ära kommer att ges till dig i vår Discord-server.","partners.why.benefit3.title":"Meta-tag integration","partners.why.benefit3.description":"Använder automatiskt din Presence när någon besöker din webbplats.","partners.why.benefit4.title":"Bli förevigad","partners.why.benefit4.description":"En otäck plats på vår partnersida.","partners.why.benefit5.title":"Bli känd","partners.why.benefit5.description":"Visas på våra sociala medier.","partners.requirements.title":"Krav","partners.requirements.first.title":"Vad letar vi efter?","partners.requirements.first.description":"Vi håller utkik efter växande samhällen och spännande saker runt om på internet. TL;DR du bör redan använda PreMiD och vara redo att sprida den till ännu fler internet freaks. Antagningen i programmet är extremt kvalitativ och kommer att variera från en kandidat till en annan.","partners.requirements.second.title":"Vår brandvägg","partners.requirements.second.description":"Vi accepterar för närvarande olika typer av folk i vårt partnerprogram. Vem som helst bör ha chansen att bli uppmärksammad. Twitch-streamers bör ha minst 500 följare och minst 10 tittare samtidigt. Du måste streama minst 1 gång per vecka.","partners.apply.button":"Ansök nu!","partners.apply.disclaimer":"Nu drar vi till himlen tillsammans!","partners.apply.jobs":"Om du är intresserad kring ett direktjobb hos PreMiD, ta en titt på våra **jobbannonser**.","partners.sponsors.title":"Sponsorer","partners.sponsors.description":"PreMiD vore inte möjligt utan dessa fantastiska människor.","partners.partner.aniFlix":"Det är så du tittar på anime.","partners.partner.arenaOfKings":"Arena of Kings är en ny generation av fartfylld PvP Arena Game spelas i webbläsaren.","partners.partner.upBeat":"UpBeat är en ideell internationell radio som strävar efter att erbjuda en non-stop, kvalitativ radio och nyhetsupplevelse.","partners.partner.simLiveRadio":"SimLiveRadio är den mest lyckad infotainment radion fär simuleringsspel i Tyskland, Österrike och Schweiz!","partners.partner.discordTemplates":"Börja skapa din egen gemenskap med våra fantastiska mallar. Bygg ditt eget kungarike.","partners.partner.taigaBot":"taiga är en Discord Bot som försöker erbjuda alla funktioner du kan behöva på en gång!","partners.partner.bitRock":"Ett kraftfullt och lättanvänt verktyg för att skapa plattformsoberoende installationsprogram.","partners.partner.statusPage":"Kommunicera enkelt realtidsstatus till dina användare.","partners.partner.erisly":"En gudinna som spelar som en rolig Discord Bot!","partners.partner.reyfm":"REYFM låter dig lyssna på 15 + musikstreamingtjänster gratis - nonstop. Med den bästa och senaste musiken, bara för dig!","partners.partner.crowdin":"Smidig översättningslösning för teknikföretag.","partners.partner.wikijs":"Den mest kraftfulla och utbyggbara Wiki programvara med öppen källkod.","partners.partner.packageCloud":"En förenad, utvecklarvänlig interface för alla dina artefakter.","partners.partner.fastly":"Bakom det bästa av nätet.","partners.partner.onlyhit":"OnlyHit är din online musik radiostation gjord för att spela dina bästa hits 24/7 och för att få dig att upptäcka dina framtida hits först.","partners.partner.atomicradio":"Upplev de senaste och bästa mixarna från musikvärlden nonstop på alla våra stationer, välj vilken du gillar mest och va där live när topplisto legenderna slåss mot nykommarna för platsen på toppen!","partners.apply.title":"Ansök om partnerskap","partners.apply.loggedUser":"Inloggad som {0}","partners.apply.notYou":"Inte du?","partners.apply.select.default":"Vänligen välj en","partners.apply.select.website":"Webbplats","partners.apply.select.other":"Annat","partners.apply.form.name":"Namn","partners.apply.form.name.placeholder":"Ex: PreMiD","partners.apply.form.link":"Länk","partners.apply.form.link.placeholder":"Ex: https://premid.app","partners.apply.form.description":"Beskrivning: (Max 150 tecken)","partners.apply.form.description.placeholder":"Beskrivning för utvalda","partners.apply.form.imageLink":"Bildlänk: (550x300, endast PNG)","partners.apply.form.imageLink.placeholder":"Ex: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Stäng","partners.apply.form.button.apply":"Verkställ","partners.apply.success":"Tack för din ansökan!","partners.apply.error1":"Var vänlig fyll i alla fält.","partners.apply.error2":"Maximalt 150 tecken i beskrivningen.","partners.apply.error3":"Lägg till en länk (måste börja med https:// och avsluta med .png)","partners.apply.error4":"Du har redan ansökt om partnerskap.","presence.page.buttons.sourceCode":"Källkod","presence.sections.description.title":"Beskrivning","presence.sections.changelog.title":"Ändringslogg","presence.sections.information.title":"Information","presence.sections.information.author":"Skapare","presence.sections.information.version":"Version","presence.sections.information.likes":"Likes","presence.sections.information.users":"Användare","presence.sections.information.tags":"Taggar","presence.sections.information.supportedurls":"Stöda URLs","presence.sections.information.contributors":"Medverkande","report.title":"Rapportera Ett Fel","report.bugcount":"{count}/3 Rapporter kvar","report.info":"Rapportering av fel är för buggar inom PreMiD webbsidan och PreMiD Discord servern. Fel inom presencer ska rapporteras till skaparen av presencen. Rapportera endast fel på Engelska.","report.overview":"Ge en tydlig och kortfattad beskrivning av vad felet är.","report.os":"Välj ditt operativsystem och version","report.browser":"Välj din webbläsare och version - Du kan hitta din version genom att besöka about:support i Firefox eller chrome://help i Google Chrome","report.description":"Ge en länk till ett exempel eller en tydlig uppsättning av steg för att återskapa felet.","report.button":"Rapportera","report.toomany":"Du har för många aktiva rapporter. Vänta på att dina redan aktiva rapporter granskas först. Rapporter granskas varje vecka, ha tålamod.","report.toomany.alert":"Du har för många aktiva rapporter.","report.success":"Rapport Inskickad","report.error":"Mer information krävs","report.error.unauth":"Discord-kontot måste verifieras","report.activebugs":"Aktiva Fel","store.message.error":"Tillägget är inte anslutet.","store.cards.creator":"Skapare","store.cards.popular":"Den här Precensen är väldigt populär bland användare.","store.cards.partner":"Partnerad Precense","store.cards.extraStepsRequired":"Den här precensen kräver extra steg, vänligen läsa sidan för mer information.","store.header.search":"Sök Presence","store.card.presence.add":"Lägg till Presence","store.card.presence.remove":"Ta bort Presence","store.card.presence.included":"Den här Presencen aktiveras automatiskt när du besöker dess hemsida.","store.category.filters.heading":"Filter","store.category.filters.mostUsed":"Mest använda först","store.category.filters.allowAdult":"Visa NSFW","store.category.filters.likedOnly":"Bara gillade Presences","store.filters.added":"Visa tillagda Presences","store.category.heading":"Kategorier","store.category.all":"Alla","store.category.games":"Spel","store.category.music":"Musik","store.category.socials":"Socialt","store.category.videos":"Videor & Streams","store.category.other":"Annat","store.search":"Sök","store.search.filters":"Ange","store.search.removeFilter":"Klicka för att ta bort filter","user.roles.presenceDeveloper":"Presence Utvecklare","user.roles.presenceVerifier":"Verifierare av Presence","user.importantPresenceDev.message1":"Viktig Presence Utvecklare","user.importantPresenceDev.message2":"Skapat {0} presences.","user.geniusPresenceDev.message1":"Geni Presence Utvecklare","user.geniusPresenceDev.message2":"Skapat över 100 Presences!","user.switch.contributed":"Användare [Presencer/medhjälpare]","user.presences.created":"Klicka här för att visa Presencer den här användaren har skapat.","user.presences.contributed":"Klicka här för att visa de presences som användaren har bidragit till."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"อยากได้ฟีเจอร์ใหม่ๆ?","beta.description.1":"**PreMiD เบต้า** พร้อมให้ใช้งานทุกคนแล้ว!","beta.description.2":"สมัครแล้วจะได้อะไรบ้าง?","beta.features.1":"ฟีเจอร์ล่าสุด","beta.features.2":"เข้าถึงการแชท PreMiD แบบลับสุดยอด","beta.features.3":"บทบาทพิเศษในเซิร์ฟเวอร์ Discord","beta.register.text":"พร้อมที่จะเข้าหรือยัง? ตอนนี้ มีคนเข้าเบต้าอยู่ {0} คน","beta.register.button":"สมัครเดียวนี้!","thankyou.title":"สุดยอด! ตอนนี้คุณเป็นผู้ใช้เบต้าของเราแล้ว!","thankyou.description":"เรากำลังรีบลงทะเบียนให้คุณได้เข้าร่วมโปรแกรมเบต้าอย่างเร็วที่สุด ขอบคุณที่ลงทะเบียนกับเรา!","error.noslots":"เหมือนกับว่าไม่มีที่สำหรับคนเข้าร่วมเบต้าแล้ว","contributors.headings.staff":"ทีมงาน","contributors.headings.supporters":"ผู้สนับสนุน","contributors.headings.translators":"แปลภาษา","contributors.roles.projectLeader":"หัวหน้าโครงการ","contributors.roles.staffCoordinator":"เจ้าหน้าที่ประสานงาน","contributors.roles.marketingDirector":"ผู้อำนวยการฝ่ายการตลาด","contributors.roles.administrator":"ผู้ดูแล","contributors.roles.reviewer":"ผู้ตรวจทาน","contributors.roles.localizationManager":"ผู้จัดการการแปลภาษา","contributors.roles.developer":"ผู้พัฒนา","contributors.roles.designer":"ผู้ออกแบบ","contributors.roles.moderator":"ผู้ดูแล","contributors.roles.supportAgent":"ตัวแทนสนับสนุน","contributors.roles.representative":"ตัวแทน","contributors.roles.proofreader":"นักตรวจทาน","contributors.roles.donator":"ผู้บริจาค","contributors.roles.booster":"บูสเตอร์","contributors.roles.translator":"ผู้แปลภาษา","contributors.cards.copyUserId":"คลิกเพื่อคัดลอก User ID","contributors.cards.userIdCopied":"คัดลอก User ID แล้ว!","downloads.header.title":"ถึงเวลาเฉิดฉายแล้ว!","downloads.header.subtitle":"เริ่มต้นการใช้ PreMiD ตอนนี้และบอกให้คนอื่นรู้ว่าคุณกำลังดูหรือฟังอะไรอยู่ เผื่อว่าคุณอาจจะเจอที่ถูกคอกันก็ได้นะ","downloads.instructions.heading":"เริ่มใช้งาน","downloads.instructions.step.1":"ดาวน์โหลด PreMiD","downloads.instructions.step.2":"ติดตั้งแอปพลิเคชัน","downloads.instructions.step.3":"เพิ่มส่วนขยายลงในเบราว์เซอร์","downloads.instructions.step.4":"รีเฟรซหน้านี้ แล้วเช็คว่าส่วนขยายได้เชื่อมต่อกับโปรแกรมแล้ว","downloads.instructions.footer":"ยังมีปัญหาอยู่เหรอ? {0}","downloads.instructions.footer.link":"เรามาเพื่อช่วยคุณ!","downloads.appdownloading.header":"ดาวน์โหลดแอปพลิเคชัน","downloads.extdownloading.header":"ดาวน์โหลดส่วนขยาย","downloads.tooltips.os.not.supported.part1":"คำเตือน:","downloads.tooltips.os.not.supported.part2":"แอปพลิเคชันไม่มีตัวติดตั้งสำหรับระบบปฏิบัติการนี้ นั่นหมายความว่ายังไม่มีผู้เชี่ยวชาญดูแลมัน","downloads.mobile.errorMessage":"โปรดทราบว่า PreMiD ยังไม่พร้อมใช้งานบนมือถือในตอนนี้","downloads.mobile.showDownloads":"แสดงการดาวน์โหลด","downloads.mobile.hideDownloads":"ซ่อนการดาวน์โหลด","downloads.warning.differentVersion":"เวอร์ชั่นปัจจุบันบนระบบปฏิบัตินี้คือ {0} (เวอร์ชั่นนี้เป็นเวอร์ชั่นเฉพาะ Linux และไม่สามารถใช้งานกับระบบปฏิบัติการอื่นได้)","downloads.warning.differentVersion2":"เวอร์ชั่นนี้เป็นเวอร์ชั่นเฉพาะบน Linux และไม่เกี่ยวข้องกับระบบอื่น เวอร์ชั่นหลักของโปรแกรมคือเวอร์ชั่น {0}","downloads.error.login":"กรุณาเข้าสู่ระบบเพื่อดาวน์โหลด","downloads.error.noaccess.title":"ไม่นะ, ดูเหมือนว่าคุณไม่มีสิทธิ์ในการเข้าถึงแบบอัลฟ่า / เบต้า :(","downloads.error.noaccess.description":"คุณสามารถเข้าร่วมโปรแกรมเบต้าได้ฟรี **ที่นี่**. เร็วเข้าหล่ะ! พวกเรามีที่ว่างเหลืออยู่ {0} ที่เท่านั้น","downloads.latest.header":"ปล่อยตัวก่อน","downloads.warning.title":"คำเตือน","downloads.warning.message.opera":"คุณต้องติดตั้งส่วนขยาย**นี้**เพื่อติดตั้ง PreMiD จาก Chrome Webstore","downloads.button.skip":"ข้าม","downloads.button.back":"ย้อนกลับ","downloads.button.cancel":"ยกเลิก","downloads.button.okay":"ตกลง","downloads.button.done":"เสร็จสิ้น","downloads.button.login":"เข้าสู่ระบบ","downloads.button.skipanyway":"ฉันจะข้าม ^_^","downloads.adsbox.thankyou.title":"ขอบคุณ!","downloads.adsbox.thankyou.message":"เราใช้โฆษณาเพื่อสนับสนุนทีมและดูแลเซิร์ฟเวอร์ของเรา เพื่อมอบประสบการณ์การใช้งานที่ดีที่สุดแก่คุณ!","downloads.adsbox.disableAdblock":"กรุณาปิด Adblock ของคุณ","downloads.showbeta.message":"แสดงการเปิดตัวก่อนกำหนด","downloads.showbeta.small":"(ไม่ต้องการถ้าคุณเเค่ดาวน์โหลดเเอพทั่วไป)","downloads.skipanyway.message1":"ฉันไม่ต้องการความช่วยเหลือ","downloads.skipanyway.message2":"คุณแน่ใจหรอ?","downloads.skipanyway.message3":"จริงหรอ?","downloads.skipanyway.message4":"กรุณาสนับสนุน :(","downloads.skipanyway.message5":"ฉันต้องการคุณ :<","downloads.skipanyway.message6":"โอเค โอเค...","store.search.notFound":"พวกเราไม่เจอ Presence ดังกล่าว","error.code.404":"ขออภัย เราหาหน้านี้ไม่เจอ","error.code.4":"Presence ที่คุณกำลังมองหาไม่มีอยู่หรือถูกลบไปแล้ว","error.code.500":"เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์","error.page.details":"ราย​ละเอียด","error.page.button":"กลับไปยังหน้าหลัก","user.notFound.heading":"ไม่พบผู้ใช้รายนั้น โปรดตรวจสอบให้แน่ใจว่าคุณพิมถูกไหม","user.notFound.message1":"ID ของผู้ใช้ที่คุณค้นหานั้นถูกต้อง","user.notFound.message2":"ผู้ใช้นั้นได้สร้าง Presence มากพอและมีบทบาทนักพัฒนาในเซิร์ฟเวอร์ Discord ของเรา","user.notFound.message3":"คนอื่นกำลังประสบปัญหาเดียวกันในเซิร์ฟเวอร์ Discord ของเราหรือไม่","user.notFound.message4":"ถ้าคุณคิดว่ามันเป็นข้อผิดพลาด โปรดแจ้งให้เราทราบผ่าน [Discord ของพวกเรา]","footer.language":"ภาษา","footer.usercount.heading":"พร้อมที่จะใช้ PreMiD หรือยัง?","footer.usercount.message":"วันนี้ มีผู้ใช้งาน {0} คน","footer.usercount.button":"ติดตั้ง","footer.partners.heading":"ผู้ร่วมมือ","footer.followUs.heading":"ติดตามเรา","footer.developers.heading":"ผู้พัฒนา","footer.developers.documentation":"เอกสาร","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"สนับสนุนเรา","footer.supportus.donate":"บริจาค","footer.supportus.contribute":"เว็บไซต์","footer.supportus.translate":"แปลภาษา","footer.supportus.jobs":"ร่วมงานกับเรา!","footer.help.heading":"การช่วยเหลือ","footer.help.troubleshooting":"การแก้ไขปัญหา","footer.help.getsupport":"ขอความช่วยเหลือ","footer.help.information":"ข้อมูล","footer.help.information.cookies":"คุกกี้","footer.help.information.privacy":"ความเป็นส่วนตัว","footer.help.information.terms":"ข้อตกลง","footer.more.heading":"อื่น ๆ","footer.more.status":"สถานะ","footer.more.wiki":"วิกิ","footer.copyright.line1":"{0} และ {1}","footer.copyright.line2":"เว็บไซต์ดูแลโดย {0}","footer.partners.more":"คลิกที่นี่เพื่อดูรายชื่อพาร์ทเนอร์และผู้สนับสนุน","header.language":"ไทย","header.languageNotification.title":"เรารองรับภาษาของคุณนะ อยากเปลี่ยนไหม?","header.languageNotification.text":"เว็บไซต์ของเรามีภาษาอื่น ๆ ให้เลือก เผื่อคุณจะอ่านภาษาอังกฤษไม่เก่งนะ","header.languageNotification.btnDecline":"ไม่ ขอบคุณ","header.languageNotification.btnAccept":"เปลี่ยนภาษา","header.loader.phrases":"กำลังอบแพนเค้ก...;วางแพนเค้ก...;กำลังแยกแพนเค้ก...;UwU;กำลังแหกแพนเค้ก...","header.store":"ร้านค้า","header.downloads":"ดาวน์โหลด","header.contributors":"ผู้พัฒนา","header.login":"เข้าสู่ระบบ","header.lia":"เข้าสู่ระบบในชื่อ","header.rab":"รายงานข้อบกพร่อง","header.staff":"แดชบอร์ด","header.logout":"ออกจากระบบ","home.introduction.paragraph":"** PreMiD ** เป็นเครื่องมือที่ใช้งานง่ายและสามารถเเสดงค่าได้ซึ่งช่วยให้คุณแสดงสิ่งที่คุณทำบนเว็บในสถานะของ Discord ของคุณในขณะนี้ได้","home.introduction.button.features":"ฟีเจอร์","home.introduction.button.downloads":"ดาวน์โหลด","home.examples.playingagame":"กำลังเล่นเกม","home.examples.timestamp":"เหลือ {0}","home.examples.timestamp2":"{0} ผ่านไป","home.examples.status.playing":"กำลังเล่น","home.examples.status.live":"สด","home.examples.status.browsing":"กำลังค้นหา...","home.features.heading":"คุณจะต้องรักฟีเจอร์พวกนี้!","home.features.presencesystem.heading":"ตามหา**Presence**","home.features.presencesystem.description":"เราสร้างส่วนขยายนี้ขึ้นเพื่อให้คุณได้เพิ่มและใช้ Presence ที่คนอื่นๆ สร้างขึ้น และคุณยังสามารถจัดการ Presence ผ่านส่วนขยายของเรา","home.features.presencesystem.button":"เยี่ยมชมหน้าร้านค้า","home.features.simpleInterface.heading":"อินเตอร์เฟสแบบเรียบง่าย","home.features.simpleInterface.description":"รู้สึกเหนื่อยกับอินเตอร์เฟสที่ยุ่งยากเหรอ? นั่นเป็นเหตุผลที่เราสร้างและพัฒนาให้อินเตอร์เฟสของเราดูง่ายที่สุด แต่ยังมีฟีเจอร์ที่สำคัญมากมาย อย่างเช่น","home.features.simpleInterface.description.1":"การตั้งค่าแอปและส่วนขยาย","home.features.simpleInterface.description.2":"การจัดการ Presence","home.features.simpleInterface.description.3":"การเรียงตามหมวดหมู่","home.features.quickSupport.heading":"การช่วยเหลือที่รวดเร็ว","home.features.quickSupport.description":"มีบางอย่างพังเหรอ? เราจะช่วยคุณในการแก้ปัญหาเหล่านั้นผ่านทางเซิร์ฟเวอร์ Discord ของเรา นอกจากนี้ เราได้สร้างระบบรายงานปัญหาที่จะทำให้คุณมั่นใจได้ว่าปัญหาเหล่านั้นจะถูกแก้ไขอย่างรวดเร็วที่สุด","home.features.quickSupport.button":"เข้าร่วม Discord ของเรา","home.languageSelector.tippy":"ภาษาของเว็บไซต์","jobs.modal.title":"สมัครเป็น{0}","jobs.modal.step":"ขั้นตอนที่ {0} จาก 2","jobs.modal.buttons.next":"ต่อไป","jobs.modal.buttons.join":"เข้าร่วม","jobs.modal.buttons.cancel":"ยกเลิก","jobs.modal.error":"กรุณากรอกข้อมูลให้ครบ","jobs.modal.notice":"PreMiD เป็นโครงการโอเพ่นซอร์ส หมายความว่าทีมของเราไม่แสวงหาผลกำไร ทุกๆ ยอดการบริจาคจะถูกนำไปใช้พัฒนา PreMiD การสมัครทำงานกับ PreMiD คุณต้องเข้าใจว่าคุณกำลังอาสาทำงานกับทีมและจะไม่ได้รับค่าจ้าง","jobs.guild.required":"มาร่วม Discord ของเรา","jobs.guild.explanation":"คุณจะต้องเข้าร่วมเซิร์ฟเวอร์ Discord ของเรา ไม่อย่างนั้นเราจะติดต่อคุณได้ยังไงล่ะ!","jobs.header.title":"ทำงานกับ PreMiD","jobs.header.description":"คุณพร้อมที่จะร่วมมือกับโปรแกรมที่มี Presence มากที่สุดหรือยัง","jobs.openings.title":"ตำแหน่งที่ว่าง","jobs.benefits.title":"สิ่งที่คุณจะได้รับ","jobs.benefit1.title":"เจอกับพวกเรา","jobs.benefit1.description":"ได้คุยกับคนที่อยู่เบื้องหลัง PreMiD","jobs.benefit2.title":"เนื้อหาใหม่ๆลึกลับ","jobs.benefit2.description":"ได้มีโอกาสดูเกี่ยวกับการพัฒนาและการตลาดของ PreMiD","jobs.benefit3.title":"มีเกียรติ","jobs.benefit3.description":"สิทธิ์ใน Discord อันทรงพลังและสีสันอันหลากหลาย","jobs.benefit4.title":"ช่วยเหลือ PreMiD","jobs.benefit4.description":"ด้วยการสนับสนุนของคุณ ทำให้โครงการนี้ดำเนินต่อไปได้","jobs.benefit5.title":"เวลาว่าง","jobs.benefit5.description":"ให้เวลากับมันหน่อย นี่เป็นงานอาสานะ","jobs.benefit6.title":"เข้าถึงเนื้อหาใหม่ก่อนใคร","jobs.benefit6.description":"ได้ลองฟีเจอร์ใหม่ๆ ก่อนใคร","jobs.success.applied":"ขอบคุณที่มาร่วมกับเรา!","jobs.errors.alreadyApplied":"คุณเคยสมัครมาก่อนแล้ว!","maintenance.big":"โอ้ไม่!","maintenance.heading":"น่าเสียดาย ตอนนี้เรากำลังประสบปัญหาทางเทคนิค เราจะกลับมาในไม่ช้า ขออภัยในความไม่สะดวก","maintenance.heading2":"กรุณากลับมาภายหลังเพื่อรับข้อมูลเพิ่มเติม","maintenance.message":"จนกว่าผู้พัฒนาสุดพิเศษของเราจะแก้ไขสิ่งนี้, อย่าลังเลที่จะดูที่นี่!","maintenance.statuspage":"หน้าสถานะ","maintenance.discordserver":"เซิร์ฟเวอร์ดิสคอร์ด","merch.title":"ยินดีต้อนรับสู่ร้าน **PreMiD** อย่างเป็นทางการ!","merch.swag":"หาชุด Swag ที่เหมาะกับคุณ!","merch.fit":"หาไซส์ของคุณ","merch.cart":"เพิ่มใส่ตะกร้า","merch.help":"เกิดข้อผิดพลาดของร้านหรือการสั่งซื้อ? ติดต่อ {0} บริการลูกค้า {1}","merch.item.added":"ได้เพิ่ม {0} เข้าตะกร้า","merch.error.noitem":"ไม่มีของที่ใส่ในตะกร้า","partners.header.title":"พาร์ทเนอร์","partners.header.description":"เข้าร่วมกับพวกเราและรับสิทธิพิเศษเฉพาะพาร์ทเนอร์ที่เอาไว้โชว์ว่าคุณเจ๋งแค่ไหน","partners.slideshow.description":"ทีมที่ได้เข้าร่วมกับเราแล้ว","partners.why.title":"วิธีการเกี่ยวกับการไปสวรรค์นรกแทน?","partners.why.benefit1.title":"รับ Presence ฟรี","partners.why.benefit1.description":"ทีมของเราจะนำเสนอ Presence ที่เหมาะกับคุณ","partners.why.benefit2.title":"ได้รับการยืนยันแล้ว","partners.why.benefit2.description":"บทบาทพิเศษในเซิร์ฟเวอร์ Discord จะถูกมอบให้กับคุณ","partners.why.benefit3.title":"การรวบรวม Meta-Tag","partners.why.benefit3.description":"ใช้ Presence โดยอัตโนมัติเมื่อมีคนเข้าชมเว็บไซต์ของคุณ","partners.why.benefit4.title":"รู้สึกเป็นอมตะมีพลัง","partners.why.benefit4.description":"ได้รับการขึ้นเว็บไซต์บนหน้าพาร์ทเนอร์ของเรา","partners.why.benefit5.title":"กลายเป็นคนดัง","partners.why.benefit5.description":"ได้ถูกกล่าวถึงบน Social Media ของเรา","partners.requirements.title":"ความต้องการ","partners.requirements.first.title":"เราต้องการมองหาอะไร?","partners.requirements.first.description":"เรากําลังมองการเติบโตของชุมชนเเละสิ่งที่น่าตื่นเต้นบนอินเตอร์เน็ต. คุณควรใช้ PreMiD อยู่เเล้วเเละพร้อมที่จะเพยเเพร่ในอินเตอร์เน็ตมากขึ้น. การยอมรับโครงการนั้นต้องมีคุณภาพมากๆเเละจะเเตกต่างออกไปเเต่ละผู้สมัคร","partners.requirements.second.title":"ไฟล์วอลล์ของเรา","partners.requirements.second.description":"ขณะนี้เรารับหลายประเภทในระบบพาร์ทเนอร์ของเรา. ทุกคนควรมีโอกาสที่จะได้รับการยืนยัน. สตรีมเมอร์ของ Twitch ขั่นตํ่ามี 500 คนติดตาม เเละ 10 ผู้ชมเเละ ถ่ายทอดสดไม่ตํ่ากว่า 1 ครั้งต่ออาทิตย์","partners.apply.button":"สมัครตอนนี้!","partners.apply.disclaimer":"ไปสู่ความฝันด้วยกัน!","partners.apply.jobs":"ถ้าคุณสนใจในการสมัครงานโดยตรงกับ PreMiD กรุณาดูที่ **การประกาศรับสมัครงาน**.","partners.sponsors.title":"ผู้สนับสนุน","partners.sponsors.description":"PreMiD จะเกิดขึ้นไม่ได้เลย หากขาดผู้คนที่พิเศษเหล่านี้","partners.partner.aniFlix":"นี่แหละวิธีการดูอนิเมะของคุณ","partners.partner.arenaOfKings":"Arena of Kings คือ PvP Arena แห่งอนาคตที่สามารถเล่นได้ผ่านเบราว์เซอร์ของคุณ","partners.partner.upBeat":"UpBeat คือ วิทยุต่างประเทศที่ไม่แสวงหาผลกำไร ซึ่งมุ่งมั่นที่จะให้บริการอย่างไม่หยุดยั้ง, คุณภาพเสียง เเละ ข่าวบันเทิง.","partners.partner.simLiveRadio":"SimLiveRadio คือ ค่ายวิทยุเกี่ยวกับความบันเทิงประสบการณ์มากที่สุด สําหรับเกมเเนวจําลองใน เยอรมัน,ออสเตรีย, เเละสวิตเซอร์แลนด์","partners.partner.discordTemplates":"เริ่มสร้างชุมชนด้วยตนเองกับเเบบที่สุดเจ๊ง. สร้างอาณาจักรของตนเอง!","partners.partner.taigaBot":"Taiga คือ Discord Bot ที่มีฟีเจอร์บางอย่างที่คุณต้องการ!","partners.partner.bitRock":"เครื่องมือสร้างสําหรับข้ามแพลตฟอร์มเเละใช้ง่าย","partners.partner.statusPage":"การเเจ้งสเตตัสอย่างรวดเร็วให้ผู้ใช้!","partners.partner.erisly":"เทพธิดาที่เล่นเป็น Discord Bot เเบบสนุกสนาน!","partners.partner.reyfm":"REYFM มาวิทยุออนไลน์ที่มีมากกว่า 15 คลื่นในที่นี่ที่เดียวกันฟรีๆ - non-stop. กับเพลงที่มีคุณภาพและใหม่ล่าสุดเพื่อคุณโดยเฉพาะ!","partners.partner.crowdin":"การเเปลภาษาเเบบว่องไวสําหรับบริษัทเทคโนโลยี!","partners.partner.wikijs":"Open-Source Wiki ที่ดีเเละขยายได้มากที่สุด!","partners.partner.packageCloud":"นักพัฒนาเป็นหนึ่งเดียวกันเป็นมิตรกันทั้งหมด","partners.partner.fastly":"เบื้องหลังที่ดีที่สุดของเว็บไซต์","partners.partner.onlyhit":"OnlyHit คือสถานีเพลงออนไลน์ฟังตลอด 24 ชั่วโมง เเละทําให้คุณพบเพลงฮิตก่อนใคร","partners.partner.atomicradio":"สัมผัสประสบการณ์การผสมผสานล่าสุดและดีที่สุดจากโลกแห่งดนตรี แบบ non-stop ในทุกสถานีของเรา, เลือกเพลงโปรดของคุณและไป พบกับการต่อสู้ของ ตำนานกับเด็กใหม่ เพื่อแย่งชิงจุดสูงสุด!","partners.apply.title":"ลงทะเบียนเป็นพาร์ทเนอร์","partners.apply.loggedUser":"เข้าสู่ระบบในนาม {0}","partners.apply.notYou":"ไม่ใช่คุณหรอ?","partners.apply.select.default":"โปรดเลือกหนึ่งรายการ","partners.apply.select.website":"เว็บไซต์","partners.apply.select.other":"อื่นๆ","partners.apply.form.name":"ชื่อ","partners.apply.form.name.placeholder":"ตัวอย่าง: PreMiD","partners.apply.form.link":"ลิงก์","partners.apply.form.link.placeholder":"ตัวอย่าง: https://premid.app","partners.apply.form.description":"คำอธิบาย: (สูงสุดถึง 150 ตัวอักษร)","partners.apply.form.description.placeholder":"คำอธิบายของฟีเจอร์","partners.apply.form.imageLink":"ลิ้งรูปภาพ: (ขนาด 550x300, สกุลไฟล์ PNG เท่านั้น)","partners.apply.form.imageLink.placeholder":"ตัวอย่าง: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"ปิด","partners.apply.form.button.apply":"ลงทะเบียน","partners.apply.success":"ขอขอบคุณที่เข้าร่วมกับเรา!","partners.apply.error1":"กรุณากรอกข้อมูลให้ครบ","partners.apply.error2":"คำอธิบายความยาวไม่เกิน 150 ตัวอักษร","partners.apply.error3":"กรุณาเพิ่มลิ้งก์ (ต้องเริ่มด้วย https:// และลงท้ายด้วย .png)","partners.apply.error4":"คุณได้สมัครเป็นพาร์ทเนอร์กับเราแล้ว","presence.page.buttons.sourceCode":"ซอร์สโค้ด","presence.sections.description.title":"คำอธิบาย","presence.sections.changelog.title":"บันทึกการเปลี่ยนแปลง","presence.sections.information.title":"ข้อมูล","presence.sections.information.author":"ผู้เขียน","presence.sections.information.version":"เวอร์ชัน","presence.sections.information.likes":"ถูกใจ","presence.sections.information.users":"ผู้ใช้","presence.sections.information.tags":"แท็ก","presence.sections.information.supportedurls":"URLs ที่รองรับ","presence.sections.information.contributors":"ผู้พัฒนา","report.title":"รายงานข้อบกพร่อง","report.bugcount":"{count}/3 รายงาน","report.info":"รายงานข้อบกพร่องภายในเว็บไซต์ PreMiD เเละ PreMiD Discord. ข้อบกพร่องของ Presence ให้รายงานกับผู้จัดทํา Presence. ใช้ภาษาอังกฤษเท่านั้น","report.overview":"บอกสาเหตุที่เกิดข้อบกพร่องให้ชัดเจนเเละกระชับ","report.os":"เลือกระบบปฎิบัติการเเละเวอร์ชั่น","report.browser":"เลือกบราวเซอร์เเละเวอร์ชั่น - คุณสามารถดูเวอร์ชั่นได้ที่ about:support ใน Firefox หรือ chrome://help","report.description":"บอกลิงค์ที่เกิดข้อบกพร่องหรือบอกวิธีที่เกิดจุดบกพร่องนี้ให้ชัดเจน","report.button":"รายงาน","report.toomany":"คุณส่งรายงานไปหลายครั้ง! กรุณารอให้ตรวจสอบรายงานที่คุณส่งมา รายงานจะตรวจสอบทุกสัปดาห์ กรุณารอ","report.toomany.alert":"คุณส่งรายงานไปหลายครั้ง","report.success":"ส่งข้อบกพร่องแล้ว","report.error":"ต้องการข้อมูลเพิ่มเติม","report.error.unauth":"บัญชี Discord ต้องได้รับการยืนยัน","report.activebugs":"ข้อบกพร่องที่ยังมีอยู่","store.message.error":"ไม่ได้เชื่อมต่อกับส่วนขยาย","store.cards.creator":"ผู้เขียน","store.cards.popular":"Presence นี้เป็นที่นิยมมากในหมู่ผู้ใช้","store.cards.partner":"Presence ของพาร์ทเนอร์","store.cards.extraStepsRequired":"Presence นี้ต้องการขั้นตอนเพิ่มเติมในการทำงาน โปรดตรวจสอบข้อมูลเพิ่มเติม","store.header.search":"ค้นหา Presence","store.card.presence.add":"เพิ่ม Presence","store.card.presence.remove":"ลบ Presence","store.card.presence.included":"Presence นี้ได้ถูกเปิดใช้งานโดยอัตโนมัติเมื่อเข้าชมหน้านี้","store.category.filters.heading":"ตัวกรอง","store.category.filters.mostUsed":"แสดงอันที่คนใช้งานมากที่สุดก่อน","store.category.filters.allowAdult":"แสดงอันที่เป็น NSFW (18+)","store.category.filters.likedOnly":"แสดงเฉพาะ Presence ที่ชอบ","store.filters.added":"แสดง Presence ที่ติดตั้งอยู่แล้ว","store.category.heading":"หมวดหมู่","store.category.all":"ทั้งหมด","store.category.games":"เกม","store.category.music":"เพลง","store.category.socials":"โซเชียล","store.category.videos":"วีดีโอและสตรีมมิ่ง","store.category.other":"อื่นๆ","store.search":"ค้นหา","store.search.filters":"ค้นหา","store.search.removeFilter":"คลิกเพื่อลบตัวกรอง","user.roles.presenceDeveloper":"นักพัฒนา Presence","user.roles.presenceVerifier":"ผู้ตรวจสอบ Presence","user.importantPresenceDev.message1":"นักพัฒนา Presence ที่สำคัญ","user.importantPresenceDev.message2":"สร้าง Presences ไปแล้ว {0}","user.geniusPresenceDev.message1":"นักพัฒนา Presence สุดจีเนียส!","user.geniusPresenceDev.message2":"สร้าง Presences มามากกว่า 100 อัน!","user.switch.contributed":"Presence [ที่ผู้ใช้สร้างขึ้น/ที่ผู้ใช้ได้ช่วยเหลือ]","user.presences.created":"คลิกที่นี่เพื่อแสดง Presence ที่ผู้ใช้คนนี้ได้สร้างขึ้น","user.presences.contributed":"คลิกที่นี่เพื่อแสดง Presence ที่ผู้ใช้คนนี้มีส่วนร่วม"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Yeni özellikler mi istiyorsunuz?","beta.description.1":"**PreMiD Beta** artık kullanıma açık!","beta.description.2":"Kayıt olursanız ne kazanacaksınız?","beta.features.1":"En yeni özellikler","beta.features.2":"PreMiD\'in süper gizli efsanevi sohbet kanallarına erişim","beta.features.3":"Discord sunucumuzda özel bir rol","beta.register.text":"Hazır mısın? Senin gibi {0} Beta Test Edicisi mevcut, hadi onlara katıl!","beta.register.button":"Şimdi kayıt ol!","thankyou.title":"Muhteşem! Artık bir beta kullanıcısısınız!","thankyou.description":"Yazılımcı maymunlarımız sizi beta programına kaydettirebilmek için elinden gelen her şeyi yapacaktır, kayıt olduğunuz için teşekkürler!","error.noslots":"Görünüşe göre beta için daha fazla yerimiz kalmamış.","contributors.headings.staff":"Ekip","contributors.headings.supporters":"Destekçiler","contributors.headings.translators":"Çevirmenler","contributors.roles.projectLeader":"Proje Lideri","contributors.roles.staffCoordinator":"Personel Koordinatörü","contributors.roles.marketingDirector":"Pazarlama Müdürü","contributors.roles.administrator":"Yönetici","contributors.roles.reviewer":"İnceleyen","contributors.roles.localizationManager":"Yerelleştirme Yöneticisi","contributors.roles.developer":"Geliştirici","contributors.roles.designer":"Tasarımcı","contributors.roles.moderator":"Yetkili","contributors.roles.supportAgent":"Destek Ekibi Üyesi","contributors.roles.representative":"Temsilci","contributors.roles.proofreader":"Düzeltmen","contributors.roles.donator":"Bağışçı","contributors.roles.booster":"Takviyeci","contributors.roles.translator":"Çevirmen","contributors.cards.copyUserId":"ID\'yi kopyalamak için tıklayın.","contributors.cards.userIdCopied":"Kullanıcı ID\'si kopyalandı!","downloads.header.title":"Gösteri zamanı.","downloads.header.subtitle":"PreMiD kullanmaya başlayın ve diğerlerine ne yaptığınızı gösterin, belki aynı zevkleri paylaştığınız bir kaç arkadaş edinirsiniz.","downloads.instructions.heading":"Başlayın","downloads.instructions.step.1":"PreMiD\'i indirin","downloads.instructions.step.2":"Uygulamamızı yükleyin","downloads.instructions.step.3":"Tarayıcınız için uyumlu eklentiyi yükleyin","downloads.instructions.step.4":"Eklentinin bağlı olup olmadığını kontrol etmek için sayfayı yenileyin","downloads.instructions.footer":"Hala sorun mu yaşıyorsunuz? {0}","downloads.instructions.footer.link":"Yardım etmek için buradayız!","downloads.appdownloading.header":"Uygulama","downloads.extdownloading.header":"Eklenti","downloads.tooltips.os.not.supported.part1":"Dikkat:","downloads.tooltips.os.not.supported.part2":"{0} Bu işletim sistemi için bir yükleyici mevcut değil. Bu, sisteminiz için resmi bir destek olmadığı anlamına geliyor.","downloads.mobile.errorMessage":"Lütfen PreMiD\'in mobil üzerinde desteklenmediğini unutmayın.","downloads.mobile.showDownloads":"Bağlantıları Göster","downloads.mobile.hideDownloads":"Bağlantıları Gizle","downloads.warning.differentVersion":"Bu platformun şu anki sürümü {0} (bu sürüm sadece Linux için geçerli ve diğer sistemler için geçerli değildir).","downloads.warning.differentVersion2":"Bu sürüm sadece Linux için geçerlidir. Diğer işletim sistemleri için uygulamanın sürümü {0}","downloads.error.login":"İndirme linklerini görebilmek için lütfen giriş yapın.","downloads.error.noaccess.title":"Görünüşe göre alpha/beta erişimin yok :(","downloads.error.noaccess.description":"Ücretsiz beta programımıza **buraya** tıklayarak katılabilirsin. Acele et sadece {0}/ kişilik yer kaldı.","downloads.latest.header":"Erken Erişimler","downloads.warning.title":"Dikkat","downloads.warning.message.opera":"PreMiD eklentisini Chrome mağazasından indirebilmeniz için öncelikle **buradaki** eklentiyi kurmalısınız.","downloads.button.skip":"Geç","downloads.button.back":"Geri","downloads.button.cancel":"Vazgeç","downloads.button.okay":"Tamam","downloads.button.done":"Tamam","downloads.button.login":"Giriş Yap","downloads.button.skipanyway":"Yine de Geç","downloads.adsbox.thankyou.title":"Teşekkürler!","downloads.adsbox.thankyou.message":"Takımımıza destek çıkmak ve projeyi güçlendirmek için reklam kullanıyoruz. Anlayışınız için teşekkürler.","downloads.adsbox.disableAdblock":"Lütfen reklam engelleyicinizi devre dışı bırakın","downloads.showbeta.message":"Erken erişim indirmelerini göster","downloads.showbeta.small":"(sadece PreMiD\'i indirmek için buradaysanız burayı önemsemeyin)","downloads.skipanyway.message1":"Desteklemek istemiyorum.","downloads.skipanyway.message2":"Emin misin?","downloads.skipanyway.message3":"Gerçekten mi?","downloads.skipanyway.message4":"L-lütfen destekle :(","downloads.skipanyway.message5":"Sana ihtiyacım var :<","downloads.skipanyway.message6":"Tamam, tamam...","store.search.notFound":"Aradığınız servis bulunamadı...","error.code.404":"Üzgünüz, bu sayfayı bulamıyoruz.","error.code.4":"Geçersiz veya silinmiş bir servis arıyorsunuz.","error.code.500":"Sunucu taraflı bir hata oluştu.","error.page.details":"Detaylar","error.page.button":"Ana sayfaya dön","user.notFound.heading":"Aradığınız kullanıcı bulunamadı. Lütfen alttaki maddeleri inceleyin","user.notFound.message1":"Aradığınız kullanıcının ID\'sinin doğruluğundan emin olun.","user.notFound.message2":"Kullanıcının bir profile sahip olabilmesi için yeterince servis yaptığına ve Discord sunucumuzda \\"Presence Developer\\" rolüne sahip olduğuna emin olun.","user.notFound.message3":"Discord sunucumuzda diğerlerinin de bu sorunu yaşayıp yaşamadığına emin olun.","user.notFound.message4":"Eğer bunun bir hata olduğunu düşünüyorsanız, bizimle [Discord sunucumuz]dan ile tişime geçin.","footer.language":"Dil","footer.usercount.heading":"PreMiD\'i denemeye hazır mısın?","footer.usercount.message":"Diğer {0} kullanıcının arasına katıl!","footer.usercount.button":"Yükle","footer.partners.heading":"Partnerler","footer.followUs.heading":"Bizi Takip Edin","footer.developers.heading":"Geliştiriciler","footer.developers.documentation":"Dokümantasyon","footer.developers.richpresence":"Zengin İçerik","footer.supportus.heading":"Destek ol","footer.supportus.donate":"Bağış Yap","footer.supportus.contribute":"Katkıda Bulun","footer.supportus.translate":"Çeviri","footer.supportus.jobs":"Bizimle çalış!","footer.help.heading":"Yardım","footer.help.troubleshooting":"Sorun Giderme","footer.help.getsupport":"Yardım Al‮","footer.help.information":"Bilgi","footer.help.information.cookies":"Çerezler","footer.help.information.privacy":"Gizlilik","footer.help.information.terms":"Şartlar","footer.more.heading":"Dahası","footer.more.status":"PreMiD Durumu","footer.more.wiki":"Viki","footer.copyright.line1":"{1} kullanıcısından {0}","footer.copyright.line2":"Site {0} tarafından yönetilmektedir","footer.partners.more":"Ortak & partnerlerin geri kalanını görmek için tıklayın.","header.language":"Türkçe","header.languageNotification.title":"Dilinizi destekliyoruz, geçiş yapmak ister misin?","header.languageNotification.text":"İnternet sitemiz sizin dilinize çevrildi bile! İngilizceyi iyi bilmiyorsanız bu yardımcı olabilir.","header.languageNotification.btnDecline":"Hayır, teşekkürler","header.languageNotification.btnAccept":"Dili değiştir","header.loader.phrases":"Kekler pişiriliyor...;Masa hazırlanıyor...;IP adresiniz çözümleniyor...;UwU;Kurallar kırılıyor...","header.store":"Mağaza","header.downloads":"İndir","header.contributors":"Katkıda Bulunanlar","header.login":"Giriş Yap","header.lia":"Şu hesabı kullanıyorsunuz:","header.rab":"Hata bildir","header.staff":"Kontrol Paneli","header.logout":"Çıkış","home.introduction.paragraph":"**PreMiD**, Discord oynuyor yerinizde internet sitelerinde neler yaptığınızı gösterebileceğiniz ayarlanabilir bir araçtır.","home.introduction.button.features":"Özellikler","home.introduction.button.downloads":"İNDİR","home.examples.playingagame":"Bir oyun oynuyor","home.examples.timestamp":"{0} kaldı","home.examples.timestamp2":"{0} geçti","home.examples.status.playing":"Oynatılıyor","home.examples.status.live":"Canlı","home.examples.status.browsing":"Göz atıyor...","home.features.heading":"Bu özelliklere bayılacaksınız!","home.features.presencesystem.heading":"**Aradığınız** servisi bulun","home.features.presencesystem.description":"Eklentimizi, kullanıcıların kendi istedikleri servisleri ekleyebileceği ve yönetebileceği bir sistem üzerine kurduk!","home.features.presencesystem.button":"Mağazaya git","home.features.simpleInterface.heading":"Basit arayüz","home.features.simpleInterface.description":"Karmaşık kullanıcı arayüzlerinden bıktınız mı? Bu nedenle, kullanıcı arayüzümüzü aşağıdaki gibi önemli özelliklerle mümkün olduğunca basit ve kullanışlı tutmaya ve tutmaya çalıştık:","home.features.simpleInterface.description.1":"Uygulama ve Eklenti ayarları","home.features.simpleInterface.description.2":"Servis yönetimi","home.features.simpleInterface.description.3":"Kategoriye göre sırala","home.features.quickSupport.heading":"Hızlı destek","home.features.quickSupport.description":"Bir şeyler aksatılıyor, size tonlarca hata gönderiyor veya basitçe çalışmıyor mu? Discord sunucumuzda bu sorunlardan kurtulmanıza yardımcı olacağız, ayrıca sorunun en kısa sürede çözülmesini sağlayacak kendi destek sistemimizi oluşturduk.","home.features.quickSupport.button":"Discord\'umuza Katıl","home.languageSelector.tippy":"Site dili","jobs.modal.title":"{0} pozisyonuna başvur","jobs.modal.step":"Adım {0}/2","jobs.modal.buttons.next":"Sonraki","jobs.modal.buttons.join":"Katıl","jobs.modal.buttons.cancel":"Vazgeç","jobs.modal.error":"Lütfen tüm alanları doldurun","jobs.modal.notice":"PreMiD, açık-kaynak bir projedir, yani ekibimiz işini para karşılığında yapmamaktadır, Patreon üzerinden gelen tüm bağışlar direkt olarak üretime yatırılmakta ve programa katkıda bulunmaktadır. PreMiD\'e iş başvurusu yaparak, gönüllü iş yapacağınızı kabul etmiş sayılırsınız, bu iş için herhangi bir ödeme almayacaksınız.","jobs.guild.required":"Discord\'umuza Katıl","jobs.guild.explanation":"Başvurabilmek için Discord sunucumuza katılmış olmanız gerekir. Aksi takdirde, seçilmeniz durumunda sizinle iletişime geçemeyiz!","jobs.header.title":"PreMiD\'de Çalışın","jobs.header.description":"En büyük RPC kütüphanesine yardım etmeye hazır mısın?","jobs.openings.title":"İş Alımları","jobs.benefits.title":"Üst Düzey Faydalar","jobs.benefit1.title":"Bizimle tanışın","jobs.benefit1.description":"PreMiD\'in arkasındaki kişilerle iletişime geçin.","jobs.benefit2.title":"Gizli İşler","jobs.benefit2.description":"Geliştirme ve Pazarlama kısmımıza göz atın.","jobs.benefit3.title":"Onur","jobs.benefit3.description":"Özel Discord yetkileri ve renkli bir rol.","jobs.benefit4.title":"PreMiD\'i Destekle","jobs.benefit4.description":"Katkınız ile projeyi devam ettirmemiz mümkün.","jobs.benefit5.title":"Zaman aşımı","jobs.benefit5.description":"Kendini yorma. Bu bir gönüllülük işi.","jobs.benefit6.title":"Erken Erişim","jobs.benefit6.description":"Yeni özellikleri herkesten önce test et.","jobs.success.applied":"Onayladığınız için teşekkürler!","jobs.errors.alreadyApplied":"Zaten önceden onaylanmışsın!","maintenance.big":"Olamaz!","maintenance.heading":"Maalesef bazı teknik sorunlar yaşıyoruz. En kısa zamanda yeniden aktif olacağız. Verdiğimiz rahatsızlıktan dolayı özür dileriz.","maintenance.heading2":"Lütfen güncellemeler için takipte kalın.","maintenance.message":"Mükemmel geliştiricilerimizin bu durumu düzelteceğine eminiz, buraya istediğiniz zaman göz atabilirsiniz!","maintenance.statuspage":"Durum Sayfası","maintenance.discordserver":"Discord Sunucusu","merch.title":"Resmi **PreMiD** Dükkanı\'na hoş geldiniz!","merch.swag":"**Tarzınızı** bulun","merch.fit":"**Bedeninizi seçin**","merch.cart":"Sepete ekle","merch.help":"Mağazamızla veya siparişle ilgili bir sorun mu yaşıyorsunuz? {0}Müşteri desteğimize{1} başvurun","merch.item.added":"{0} sepetinize eklendi","merch.error.noitem":"Sepetinize eklenecek öğe yok","partners.header.title":"Partnerler","partners.header.description":"Partnerimiz olun ve diğerlerine ne kadar havalı ve \\"kuul\\" olduğunuzu gösterin.","partners.slideshow.description":"Bunlar hâli hazırda bizimle partner","partners.why.title":"Cehennem yerine cennete gitmeye ne dersiniz?","partners.why.benefit1.title":"Ücretsiz Servis\'iniz","partners.why.benefit1.description":"Ekibimiz sizin projenize özel bir Servis hazırlayacak.","partners.why.benefit2.title":"Onaylı olun","partners.why.benefit2.description":"Discord sunucumuzda sahip olacağınız özel bir rol ve statü.","partners.why.benefit3.title":"Meta etiket entegrasyonu","partners.why.benefit3.description":"Bir kullanıcı sizin sitenizi ziyaret ettiğinde otomatik olarak sizin servisinizi çalıştırır.","partners.why.benefit4.title":"Ölümsüz olun","partners.why.benefit4.description":"Partner sayfamızda güzel bir yere sahip olun.","partners.why.benefit5.title":"Ünlü olun","partners.why.benefit5.description":"Sosyal medya hesaplarımızda öne çıkın.","partners.requirements.title":"Gereksinimler","partners.requirements.first.title":"Neler arıyoruz?","partners.requirements.first.description":"İnternet üzerinde potansiyel gösteren topluluklar ve heyecan verici şeyleri takip ediyoruz. Kısacası, partner programı için sizin de PreMiD\'i kullanıyor olmanız ve internet üzerinde yayılmamıza yardım etmeniz gerekiyor. Program, nitelikli incelemeler ve bir çok madde onayından geçtiği için az sayıda katılımcıların bu programa katılacağını düşünüyoruz.","partners.requirements.second.title":"Güvenlik duvarımız","partners.requirements.second.description":"Partnerlik programımızda şimdilik bu şekilde belli başlı gereksinimlere bakıyoruz. Başvuru yapan herkes incelenme hakkına sahiptir. Twitch yayıncıları en az 500 takipçili olmalı ve 10 adet aktif izleyicisi olmalıdır. Bunun yanı sıra haftada en az 1 kere yayın yapmalıdırlar.","partners.apply.button":"Hemen başvurun!","partners.apply.disclaimer":"Hadi birlikte cennete gidelim!","partners.apply.jobs":"Eğer PreMiD\'de bir iş arıyorsanız, **iş sayfamıza** göz atın.","partners.sponsors.title":"Sponsorlar","partners.sponsors.description":"Bu inanılmaz kişiler olmasaydı, PreMiD\'de bugün burada olmazdı.","partners.partner.aniFlix":"Anime izlemenin yolu.","partners.partner.arenaOfKings":"Arena of Kings tarayıcınızdan oynayabileceğiniz, ileri seviye, hızlı PvP Arena Kapışması oyunudur.","partners.partner.upBeat":"UpBeat, aralıksız, kaliteli radyo hizmeti sunani kâr amacı gütmeyen bir internet radyosudur.","partners.partner.simLiveRadio":"SimLiveRadio simülasyon oyunlarında Almanya, Avusturya ve İsviçrede bulunan oyuncuların dinlediği en popüler radyolardan biridir.","partners.partner.discordTemplates":"Sitemizdeki ücretsiz şablonlarla kendi topluluğunuzu kurun ve eğlenin.","partners.partner.taigaBot":"taiga size gereken her özelliği, anında sunmaya çalışan bir Discord Botudur!","partners.partner.bitRock":"Güçlü ve kullanımı kolay, çoklu platform destekleyen yükleyici oluşturma aracıdır.","partners.partner.statusPage":"Servisinizin anlık durumunu kullanıcılara sunabileceğiniz platform.","partners.partner.erisly":"Eğlenceli bir Discord Botu olarak oynayan bir tanrıça!","partners.partner.reyfm":"REYFM, ücretsiz olarak 15\'den fazla müzik yayınını bedava ve kesintisiz dinleyebileceğiniz sizin için en iyi ve en yeni müzikleri yayınlayan bir platformdur!","partners.partner.crowdin":"Projeleriniz için çeviri sistemi oluşturma aracı.","partners.partner.wikijs":"En güçlü ve en gelişmiş Viki yazılımı.","partners.partner.packageCloud":"Tüm eserleriniz için birleşik, geliştirici dostu arayüz.","partners.partner.fastly":"İnternetin en iyilerinin arkasında.","partners.partner.onlyhit":"OnlyHit müzik ufkunuzu açan, gün boyu en sevilen şarkıları 7/24 çalan çevrimiçi bir müzik radyosudur.","partners.partner.atomicradio":"Müzik dünyasının en son ve en iyi müziklerinin karışımını tüm istasyonlarımızda kesintisiz bir şekilde deneyimleyin, en beğendiğinizi seçin ve tablo efsaneleri yeni şarkılarıyla en üst nokta için kapışırken burada olun!","partners.apply.title":"Partnerliğe başvur","partners.apply.loggedUser":"{0} olarak giriş yapıldı","partners.apply.notYou":"Sen değil misin?","partners.apply.select.default":"Lütfen birini seçin","partners.apply.select.website":"İnternet sitesi","partners.apply.select.other":"Diğer","partners.apply.form.name":"İsim","partners.apply.form.name.placeholder":"Örn: PreMiD","partners.apply.form.link":"Bağlantı","partners.apply.form.link.placeholder":"Örn: https://premid.app","partners.apply.form.description":"Açıklama: (En fazla 150 karakter)","partners.apply.form.description.placeholder":"Öne çıkarılma için açıklama","partners.apply.form.imageLink":"Resim bağlantısı: (550x300, sadece PNG)","partners.apply.form.imageLink.placeholder":"Örn: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"İptal","partners.apply.form.button.apply":"Başvur","partners.apply.success":"Başvuru yaptığınız için teşekkürler!","partners.apply.error1":"Lütfen tüm alanları doldurun.","partners.apply.error2":"Açıklama en fazla 150 karakter olabilir.","partners.apply.error3":"Lütfen \\"https://\\" ile başlayıp \\".png\\" ile biten bir bağlantı girin.","partners.apply.error4":"Zaten önceden ortaklık için onaylanmışsın.","presence.page.buttons.sourceCode":"Kaynak Kodları","presence.sections.description.title":"Açıklama","presence.sections.changelog.title":"Değişiklik Kaydı","presence.sections.information.title":"Bilgi","presence.sections.information.author":"Yapımcı","presence.sections.information.version":"Sürüm","presence.sections.information.likes":"Beğeniler","presence.sections.information.users":"Users","presence.sections.information.tags":"Etiketler","presence.sections.information.supportedurls":"Desteklenen Siteler","presence.sections.information.contributors":"K. Bulunanlar","report.title":"Hata Bildir","report.bugcount":"{count}/3 hakkınız kaldı","report.info":"Hata bildirimleri sadece PreMiD sitesi ve PreMiD Discord sunucusu içerisindeki hataları kapsamaktadır. Servis hataları için servisin yapımcısına ulaşmanız gerekmektedir. Hata bildirimleri sadece İngilizce olmalıdır.","report.overview":"Hatanın ne olduğuna dair açık ve özlü bir açıklama belirtiniz.","report.os":"İşletim sisteminizi ve sürümünü seçin","report.browser":"Tarayıcınızı ve Sürümünüzü Seçin. Firefox\'da about:support, Chrome\'da ise chrome://help sayfalarından sürümünüzü öğrenebilirsiniz.","report.description":"Hatanın canlı bir örneğine dair bir bağlantı sağlayınız veya hatanın nasıl tekrar üretilebileceğine dair kesin ve açık bir şekilde yazılmış adımlar yazınız.","report.button":"Bildir","report.toomany":"Çok fazla aktif raporunuz var. Gönderdiğiniz raporların incelenmesini bekleyin. Raporlar haftalık olarak kontrol edilir, sabırlı olun.","report.toomany.alert":"Aktif sayıda çok fazla raporunuz bulunuyor.","report.success":"Hata Bildirildi","report.error":"Daha Fazla Bilgi Gerekli","report.error.unauth":"Discord hesabınızın doğrulanmış olması gerekmektedir","report.activebugs":"Aktif Hatalar","store.message.error":"Eklenti bağlı değil.","store.cards.creator":"Yapımcı","store.cards.popular":"Bu servis kullanıcılarımız tarafından çok tutuluyor.","store.cards.partner":"Partner Servisi","store.cards.extraStepsRequired":"Bu servisin çalışabilmesi için ekstra ayarlamalar gerekmektedir, ayrıntılar için servisin sayfasını ziyaret edin.","store.header.search":"Servis ara","store.card.presence.add":"Servisi ekle","store.card.presence.remove":"Servisi kaldır","store.card.presence.included":"Bu servis, sitesini ziyaret ettikten sonra otomatik olarak etkinleştirilir.","store.category.filters.heading":"Filtreler","store.category.filters.mostUsed":"En popülerler başta","store.category.filters.allowAdult":"Yetişkin içeriklileri göster","store.category.filters.likedOnly":"Sadece beğenilen servisler","store.filters.added":"Ekli olanları göster","store.category.heading":"Kategoriler","store.category.all":"Tümü","store.category.games":"Oyun","store.category.music":"Müzik","store.category.socials":"Sosyal","store.category.videos":"Video & Yayın","store.category.other":"Diğer","store.search":"Ara","store.search.filters":"Enter","store.search.removeFilter":"Filtreyi kaldırmak için tıkla","user.roles.presenceDeveloper":"Servis Geliştiricisi","user.roles.presenceVerifier":"Servis İnceleme Yetkilisi","user.importantPresenceDev.message1":"Önemli Servis Geliştiricisi","user.importantPresenceDev.message2":"Toplamda {0} servis geliştirmiş.","user.geniusPresenceDev.message1":"Akıllı Servis Geliştiricisi","user.geniusPresenceDev.message2":"100\'ün üzerinde servis geliştirmiş!","user.switch.contributed":"Kullanıcının [Servisleri/K. Bulundukları]","user.presences.created":"Kullanıcının yaptığı servisleri görmek için buraya tıklayın.","user.presences.contributed":"Kullanıcının yapımında katkısı bulunan servisleri görmek için buraya tıklayın."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Хочете нових можливостей?","beta.description.1":"Бета-версія **PreMiD** тепер доступна для всіх!","beta.description.2":"Що ви отримаєте, якщо зареєструєтесь?","beta.features.1":"Останні можливості","beta.features.2":"Доступ до надсекретних текстових каналів PreMiD","beta.features.3":"Спеціальна роль на сервері Discord","beta.register.text":"Готові до цього? Приєднуйтесь до {0} інших тестувальників бета-версії!","beta.register.button":"Зареєструйтеся зараз!","thankyou.title":"Круто! Тепер ви бета-користувач!","thankyou.description":"Наші мавпи працюють над тим, щоб додати вас до нашої бета-програми якомога швидше. Дякуємо за реєстрацію!","error.noslots":"Схоже, ми більше не маємо доступних бета-слотів.","contributors.headings.staff":"Персонал","contributors.headings.supporters":"Прихильники","contributors.headings.translators":"Перекладачі","contributors.roles.projectLeader":"Лідер проєкту","contributors.roles.staffCoordinator":"Координатор персоналу","contributors.roles.marketingDirector":"Менеджер з маркетингу","contributors.roles.administrator":"Адміністратор","contributors.roles.reviewer":"Рецензент","contributors.roles.localizationManager":"Менеджер з локалізації","contributors.roles.developer":"Розробник","contributors.roles.designer":"Дизайнер","contributors.roles.moderator":"Модератор","contributors.roles.supportAgent":"Агент підтримки","contributors.roles.representative":"Представник","contributors.roles.proofreader":"Редактор","contributors.roles.donator":"Спонсор","contributors.roles.booster":"Прискорювач","contributors.roles.translator":"Перекладач","contributors.cards.copyUserId":"Натисніть, щоб скопіювати ідентифікатор користувача.","contributors.cards.userIdCopied":"ID користувача скопійовано!","downloads.header.title":"Час показати.","downloads.header.subtitle":"Використовуйте PreMiD зараз і покажіть вашим друзям, що ви робите, мабуть, ви знайдете когось зі схожими інтересами.","downloads.instructions.heading":"Розпочати","downloads.instructions.step.1":"Завантажити PreMiD","downloads.instructions.step.2":"Установіть наш додаток","downloads.instructions.step.3":"Додайте наше розширення до свого браузера","downloads.instructions.step.4":"Перезавантажте цей сайт і перевірте чи розширення підключене","downloads.instructions.footer":"Все ще є проблеми? {0}","downloads.instructions.footer.link":"Ми тут, щоб допомогти!","downloads.appdownloading.header":"Застосунок","downloads.extdownloading.header":"Розширення","downloads.tooltips.os.not.supported.part1":"Увага:","downloads.tooltips.os.not.supported.part2":"{0} Застосунок не має встановлювача для цієї операційної системи. Це означає, що для цієї ОС немає професійної підтримки.","downloads.mobile.errorMessage":"Будь ласка, майте на увазі, що PreMiD не підтримується на мобільних телефонах.","downloads.mobile.showDownloads":"Показати завантаження","downloads.mobile.hideDownloads":"Приховати завантаження","downloads.warning.differentVersion":"Поточна версія цієї платформи є {0} (ця версия є специфічна для Linux, і не застосовується до інших платформ).","downloads.warning.differentVersion2":"Ця версія специфічна для Linux, і не застосовується до інших систем. Основна версія застосунку: {0}","downloads.error.login":"Будь ласка, увійдіть до системи, щоб побачити ці завантаження.","downloads.error.noaccess.title":"Ой, схоже, що ви не маєте альфа/бета доступу :(","downloads.error.noaccess.description":"Ви можете приєднатися до нашої бета-програми **тут** безкоштовно. Поспішайте! Ми маємо тільки {0} доступних слотів","downloads.latest.header":"Отримувати Ранні Релізи","downloads.warning.title":"Увага","downloads.warning.message.opera":"Ви повинні встановити **це** розширення для того, щоб встановити PreMiD із Chrome Webstore.","downloads.button.skip":"Пропустити","downloads.button.back":"Назад","downloads.button.cancel":"Скасувати","downloads.button.okay":"Гаразд","downloads.button.done":"Зроблено","downloads.button.login":"Увійти","downloads.button.skipanyway":"Все одно пропустити","downloads.adsbox.thankyou.title":"Дякуємо!","downloads.adsbox.thankyou.message":"Ми використовуємо рекламу, щоб підтримати нашу команду і підтримувати наші сервери, щоб пропонувати вам сервіс!","downloads.adsbox.disableAdblock":"Будь ласка, вимкніть свій блокувач реклами","downloads.showbeta.message":"Показати ранні релізи","downloads.showbeta.small":"(не потрібен якщо ви є тільки тут щоб завантажити звичайний додаток)","downloads.skipanyway.message1":"Я не хочу підтримувати.","downloads.skipanyway.message2":"Ви впевнені?","downloads.skipanyway.message3":"Справді?","downloads.skipanyway.message4":"Б-будь-ласка підтримуйте :(","downloads.skipanyway.message5":"Мені потрібні ви :<","downloads.skipanyway.message6":"Гаразд, гаразд...","store.search.notFound":"Ми не змогли найти цей Presence...","error.code.404":"Вибачте, ми не змогли знайти таку сторінку.","error.code.4":"Ви шукаєте не існуюче або видалене Presence.","error.code.500":"Сталася внутрішня помилка сервера.","error.page.details":"Подробиці","error.page.button":"Повернутися на головну сторінку","user.notFound.heading":"Не знайдено жодного користувача. Спробуйте уточнити","user.notFound.message1":"iD користувача яке ви шукаєте є правильним.","user.notFound.message2":"користувач створив достатньо Presences та має роль розробника Presence на нашому Діскорд сервері.","user.notFound.message3":"якщо інші зіткнулись з такою самою проблемою на нашому Діскорд сервері.","user.notFound.message4":"Якщо ви вважаєте, що це була помилка, будь ласка, зв\'яжіться з нами на [нашому Діскорд сервері].","footer.language":"Мова","footer.usercount.heading":"Готові використовувати PreMiD?","footer.usercount.message":"Приєднуйтеся, вже понад {0} користувачів на сьогоднішній день!","footer.usercount.button":"Установити","footer.partners.heading":"Партнери","footer.followUs.heading":"Слідуйте за нами","footer.developers.heading":"Розробники","footer.developers.documentation":"Документація","footer.developers.richpresence":"Розширена присутність","footer.supportus.heading":"Підтримайте нас","footer.supportus.donate":"Пожертвувати","footer.supportus.contribute":"Зробіть внесок","footer.supportus.translate":"Перекладати","footer.supportus.jobs":"Працюйте з нами!","footer.help.heading":"Допомога","footer.help.troubleshooting":"Вирішення проблем","footer.help.getsupport":"Отримати допомогу","footer.help.information":"Інформація","footer.help.information.cookies":"Кукі","footer.help.information.privacy":"Політика конфіденційності","footer.help.information.terms":"Умови","footer.more.heading":"Більше","footer.more.status":"Статус","footer.more.wiki":"Вікі","footer.copyright.line1":"{0} від {1}","footer.copyright.line2":"Веб-сайт утримує {0}","footer.partners.more":"Натисніть тут, щоб побачити решта наших партнерів і спонсорів.","header.language":"Українська","header.languageNotification.title":"Ми підтримуємо вашу мову, хочете перемкнутися?","header.languageNotification.text":"Наша веб-сторінка була перекладена вашою мовою. Це допоможе у випадку, якщо ви не знаєте англійську дуже добре.","header.languageNotification.btnDecline":"Ні, дякую","header.languageNotification.btnAccept":"Змінити мову","header.loader.phrases":"Випікаємо млинці…;Ліпимо вареники…;Розміщуємо контейнери;Створюємо сай…т;Порушуємо усі можливі правила…;Надсилаємо вашу IP-адресу до СБУ…;(╯°□°）╯︵ ┻━┻;┬─┬ ノ( ゜-゜ノ);Читаємо ваші повідомлення у соц. мережах…;","header.store":"Магазин","header.downloads":"Завантаження","header.contributors":"Учасники проекту","header.login":"Увійти","header.lia":"Авторизовано як","header.rab":"Повідомити про помилку","header.staff":"Панель управління","header.logout":"Вихід","home.introduction.paragraph":"**PreMiD** - це проста і корисна рія, яка дозволяє вам відобразити, що ви робите в мережі у вашому статусі Discord.","home.introduction.button.features":"Особливості","home.introduction.button.downloads":"Завантаження","home.examples.playingagame":"Грає в гру","home.examples.timestamp":"{0} залишилось","home.examples.timestamp2":"{0} минуло","home.examples.status.playing":"Відтворюється","home.examples.status.live":"Наживо","home.examples.status.browsing":"Дивиться...","home.features.heading":"Ви полюбите ці особливості!","home.features.presencesystem.heading":"Знайдіть **свою** присутність","home.features.presencesystem.description":"Ми створили наше розширення так, що воно дозволяє додавати і використовувати Presences створені іншими людьми і керувати ними в нашому розширенні!","home.features.presencesystem.button":"Відвідати магазин","home.features.simpleInterface.heading":"Простий користувацький інтерфейс","home.features.simpleInterface.description":"Втомилися від складних користувацьких інтерфейсів? Ось чому ми створили й намагалися зберегти наш інтерфейс таким простим і корисним як можливо, з важливими функціями, як:","home.features.simpleInterface.description.1":"Налаштування додатку і розширення","home.features.simpleInterface.description.2":"Управління Присутностями","home.features.simpleInterface.description.3":"Сортувати за категорією","home.features.quickSupport.heading":"Швидка підтримка","home.features.quickSupport.description":"Щось є зламаним, надсилаючи вам тони помилок або просто не працює? Ми допоможемо вам позбутися цих помилок на нашому Discord сервері, ми також створили нашу власну систему підтримки, це дозволить вирішити вашу проблему якнайшвидше.","home.features.quickSupport.button":"Приєднуйтеся до нашого Discord","home.languageSelector.tippy":"Мова сайту","jobs.modal.title":"Подати заявку на {0}","jobs.modal.step":"Крок {0} з 2","jobs.modal.buttons.next":"Наступний","jobs.modal.buttons.join":"Приєднуйся","jobs.modal.buttons.cancel":"Скасувати","jobs.modal.error":"Будь ласка, заповніть всі поля","jobs.modal.notice":"PreMiD — це проект з відкритим вихідним кодом, а це означає, що ми некомерційна команда, кожна пожертва та гроші вкладаються в наш продукт. Погоджуючись на посаду в PreMiD, ви підтверджуєте, що ви стаєте волонтером в команді і що вам нічого не заплатять.","jobs.guild.required":"Приєднуйтеся до нашого Discord","jobs.guild.explanation":"Щоб мати можливість подати заявку, ви повинні приєднатися до нашого сервера Discord. Інакше ми не зможемо зв\'язатися з вами, якщо ви будете обрані!","jobs.header.title":"Робота в PreMiD","jobs.header.description":"Готові допомогти найбільшій Rich-Presence програмі?","jobs.openings.title":"Вакансії","jobs.benefits.title":"Переваги","jobs.benefit1.title":"Зустрічайте нас","jobs.benefit1.description":"Зв\'яжіться з людьми з PreMiD.","jobs.benefit2.title":"Попередній перегляд до офіційного випуску","jobs.benefit2.description":"Подивіться на наші Розробки і Маркетинг.","jobs.benefit3.title":"Шана","jobs.benefit3.description":"Потужні дозволи Discord і кольорова роль.","jobs.benefit4.title":"Підтримати PreMiD","jobs.benefit4.description":"Завдяки вашому внеску можна запустити цей проект.","jobs.benefit5.title":"Час вийшов","jobs.benefit5.description":"Не поспішайте. Це волонтерська робота.","jobs.benefit6.title":"Ранній доступ","jobs.benefit6.description":"Ви зможете протестувати нові функції раніше, ніж будь-хто інший.","jobs.success.applied":"Дякуємо, що подали заявку!","jobs.errors.alreadyApplied":"Ви вже подали заявку раніше!","maintenance.big":"Халепа!","maintenance.heading":"На жаль, ми зіткнулися з деякими технічними труднощами. Ми повернемося незабаром. Вибачте за незручності.","maintenance.heading2":"Будь ласка, поверніться пізніше для отримання додаткової інформації.","maintenance.message":"Поки наші спеціальні розробники не виправлять це, ви можете сміливо заглянути сюди!","maintenance.statuspage":"Сторінка стану","maintenance.discordserver":"Discord сервер","merch.title":"Ласкаво просимо до офіційного **PreMiD** магазину товарів!","merch.swag":"Знайдіть свій **Swag**","merch.fit":"**Виберіть свій розмір**","merch.cart":"Додати до кошика","merch.help":"Виникли проблеми з нашим магазином чи замовленням? Зверніться до нашої {0}служби підтримки замовника{1}","merch.item.added":"{0} додано до вашого кошика","merch.error.noitem":"Немає предмета, який ви хочете додати до кошика","partners.header.title":"Партнери","partners.header.description":"Приєднайтесь до FAM і отримуй переваги від партнера тільки для того, щоб показати скільки у вас халатів.","partners.slideshow.description":"Вони вже належать нам","partners.why.title":"Як щодо того, щоб потрапити на рай замість пекла?","partners.why.benefit1.title":"Ваш безкоштовний Presence","partners.why.benefit1.description":"Наша команда надасть вам присутність вашого веб-сервісу.","partners.why.benefit2.title":"Станьте перевіреним","partners.why.benefit2.description":"Спеціальна роль і велика честь будуть надані вам на нашому сервері Discord.","partners.why.benefit3.title":"Інтеграція з мета-тегами","partners.why.benefit3.description":"Автоматично використовує ваш Presence, коли хтось відвідує ваш веб-сайт.","partners.why.benefit4.title":"Відокремте","partners.why.benefit4.description":"На нашій сторінці партнера гарне місце.","partners.why.benefit5.title":"Будь відомим","partners.why.benefit5.description":"Рекомендовано нашими соціальними мережами.","partners.requirements.title":"Вимоги","partners.requirements.first.title":"Що ми шукаємо?","partners.requirements.first.description":"Ми спостерігаємо за спільнотами, що розвиваються, і за речами в інтернеті, що нас захоплюють. БАГАТАЛІТЄР!! Вам уже потрібно використовувати PreMiD і бути готовим до поширення на ще більше перехідних інтернет-сервісів. Прийняття до програми є надзвичайно якісним і буде відрізнятися у всіх кандидатів.","partners.requirements.second.title":"Наш брандмауер","partners.requirements.second.description":"В даний час ми приймаємо різні зусилля щодо нашої програми партнерства. Будь-хто повинен мати можливість бути помічений. Стрімери Twitch повинні мати принаймні 500 послідовників і принаймні 10-ох одночасних глядачів. Ви повинні транслювати принаймні 1 раз на тиждень.","partners.apply.button":"Подайте зараз!","partners.apply.disclaimer":"Ходімо до раю разом!","partners.apply.jobs":"Якщо ви досить зацікавлені у безпосередній роботі у PreMiD, то перегляньте **наші пропозиції про роботу**.","partners.sponsors.title":"Спонсори","partners.sponsors.description":"PreMiD не став би можливим без цих дивовижних людей.","partners.partner.aniFlix":"Ось так ви дивитеся аніме.","partners.partner.arenaOfKings":"Арена Королів — це PvP Арена в браузері наступного покоління, яка швидко набирає обертів.","partners.partner.upBeat":"UpBeat — це некомерційне міжнародне радіо, яке прагне забезпечити безупинне, якісне радіо та новини.","partners.partner.simLiveRadio":"SimLiveRadio — це найуспішніше інформаційне радіо для ігор у жанрі симуляції в Німеччині, Австрії та Швейцарії!","partners.partner.discordTemplates":"Почніть створювати власну спільноту з нашими дивовижними шаблонами. Побудуйте своє власне королівство.","partners.partner.taigaBot":"taiga - це бот Discord, який намагається запропонувати всі функції, які вам можуть знадобитися відразу!","partners.partner.bitRock":"Потужний і простий у використанні багатоплатформовий інструмент створення встановлювача.","partners.partner.statusPage":"Легко спілкуйтеся в реальному часі зі своїми користувачами.","partners.partner.erisly":"Богиня, що грає в веселому Discord Bot!","partners.partner.crowdin":"Рішення для гнучкої локалізації для технологічних компаній.","partners.partner.wikijs":"Найбільш потужне та широкомасштабне програмне забезпечення для вікі джерела.","partners.partner.packageCloud":"Єдиний, дружній інтерфейс для розробників і для всіх ваших артефактів.","partners.partner.fastly":"За найкращими веб-сторінками.","partners.apply.title":"Застосувати до партнера","partners.apply.loggedUser":"Ви увійшли як {0}","partners.apply.notYou":"Не ви?","partners.apply.select.default":"Будь ласка, оберіть одне","partners.apply.select.website":"Вебсайт","partners.apply.select.other":"Інше","partners.apply.form.name":"Ім\'я","partners.apply.form.name.placeholder":"Наприклад: PreMiD","partners.apply.form.link":"Посилання","partners.apply.form.link.placeholder":"Наприклад: https://premid.app","partners.apply.form.description":"Опис: (максимум 150 символів)","partners.apply.form.description.placeholder":"Опис для можливостей","partners.apply.form.imageLink":"Посилання на зображення: (550x300, тільки PNG)","partners.apply.form.imageLink.placeholder":"Наприклад: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Закрити","partners.apply.form.button.apply":"Застосувати","partners.apply.success":"Дякуємо, що подали заявку!","partners.apply.error1":"Будь ласка, заповніть усі поля.","partners.apply.error2":"Максимум 150 символів в описі.","partners.apply.error3":"Будь ласка, додайте посилання (має починатися з https:// і завершуватись з .png)","partners.apply.error4":"Ви вже подали заяву на партнерство.","presence.page.buttons.sourceCode":"Вихідний код","presence.sections.description.title":"Опис","presence.sections.changelog.title":"Список змін","presence.sections.information.title":"Інформація","presence.sections.information.author":"Автор","presence.sections.information.version":"Версія","presence.sections.information.likes":"Вподобання","presence.sections.information.users":"Користувачі","presence.sections.information.tags":"Теги","presence.sections.information.supportedurls":"Підтримувані URL","presence.sections.information.contributors":"Учасники проєкту","report.title":"Повідомити про помилку","report.bugcount":"Залишилось {count}/3 звітів","report.info":"Повідоми про помилки - це баґи у сайті PreMiD і сервері PreMiD у Discord. Баґи у присутностях повідомляйте розробникам цих присутностей. Про помилки повідомляйте лише англійською мовою.","report.overview":"Надайте ясний і короткий опис того, що є помилкою.","report.os":"Виберіть вашу операційну систему та версію","report.browser":"Виберіть свій браузер і версію - Ти можеш отримати версію відвідавши about:support в Firefox або chrome://help","report.description":"Надайте посилання на приклад наживо або однозначний набір кроків для відтворення цієї помилки.","report.button":"Повідомити","report.toomany":"У Вас занадто багато активних звітів. Дочекайтеся ваших поданих звітів, щоб їх переглянули. Звіти перевіряються щотижня, будьте терплячими.","report.toomany.alert":"У вас занадто багато активних звітів.","report.success":"Помилку надіслано","report.error":"Потрібно більше інформації","report.error.unauth":"Обліковий запис Discord повинен бути підтверджений","report.activebugs":"Активні помилки","store.message.error":"Розширення не під\'єднано.","store.cards.creator":"Автор","store.cards.popular":"Цей Presence є дуже популярний серед користувачів.","store.cards.partner":"Партнерський Presence","store.cards.extraStepsRequired":"Цей presence потребує додаткових кроків. Будь ласка, перевірте його сторінку, щоб отримати більшу інформацію.","store.header.search":"Шукати Presence","store.card.presence.add":"Додати Presence","store.card.presence.remove":"Видалити Presence","store.card.presence.included":"Цей Presence автоматично увімкнений після відвідування його сайту.","store.category.filters.heading":"Фільтри","store.category.filters.mostUsed":"Найбільш використовувані спочатку","store.category.filters.allowAdult":"Показувати NSFW","store.category.filters.likedOnly":"Тільки вподобані Presences","store.filters.added":"Показати додані Presences","store.category.heading":"Категорії","store.category.all":"Усе","store.category.games":"Ігри","store.category.music":"Музика","store.category.socials":"Соціальне","store.category.videos":"Відео & прямі трансляції","store.category.other":"Інше","store.search":"Пошук","store.search.filters":"Введіть","store.search.removeFilter":"Натисніть, щоб видалити фільтр","user.roles.presenceDeveloper":"Розробник присутностей","user.roles.presenceVerifier":"Перевірка присутності","user.importantPresenceDev.message1":"Важливий розробник присутностей","user.importantPresenceDev.message2":"Створено присутностей {0}.","user.geniusPresenceDev.message1":"Розробник Присутностей","user.geniusPresenceDev.message2":"Створив понад 100 Присутностей!","user.switch.contributed":"[Presences/внески] Користувача","user.presences.created":"Натисніть тут, щоб показати Presences створені цим користувачем.","user.presences.contributed":"Натисніть тут, щоб побачити присутності, у які зробив внесок цей користувач."}')
    }, function(e) {
        e.exports = JSON.parse('{"404.heading":"Oh! Bu hatto mavjud bo\'lishi kerakmi?","404.message":"Kechirasiz, siz ko\'rishni xohlagan sahifangiz ko\'chirilgan yoki yo\'q qilinganga o\'xshaydi yoki u hech qachon mavjud bo\'lmaganga o\'xshaydi?","contributors.headings.staff":"Jamoa","contributors.headings.supporters":"Qo\'llab-quvvatlovchilar","contributors.headings.translators":"Tarjimonlar","downloads.header.title":"O\'zingizni hammaga ko\'rsatish vaqti keldi.","downloads.header.subtitle":"Endi PreMiD-dan foydalanishni boshlang va nima qilayotganingizni boshqalarga ko\'rsating, ehtimol sizda xuddi shu qiziqishlarga ega bo\'lgan odam topiladi.","downloads.instructions.heading":"Boshla","downloads.instructions.step.1":"PreMiD Yuklang.","downloads.instructions.step.2":"PreMid Ilovasini yuklang.","downloads.instructions.step.3":"Brauzeringiz uchun kengaytmani yuklang.","downloads.instructions.step.4":"{0} sahifasiga tashrif buyuring va kengaytma ulanganligini tekshiring.","downloads.instructions.step.4.store":"do\'kan","downloads.appdownloading.header":"Ilova","downloads.extdownloading.header":"Kengaytma","downloads.tooltips.os.not.supported.part1":"OGOHLANTIRISH:","downloads.tooltips.os.not.supported.part2":"{0} Ushbu operatsion tizim uchun o\'rnatuvchi yo\'q. Bu shuni anglatadiki, buning uchun professional yordam yo\'q.","footer.language":"Til","footer.usercount.heading":"PreMiD\'i sinab ko\'rishga tayyormisiz?","footer.usercount.message":"Bugun {0} foydalanuvchilarga qo\'shiling!","footer.usercount.button":"Yuklang","footer.partners.heading":"Partnerlar","footer.developers.heading":"Dasturchilar","footer.developers.documentation":"Hujjat","footer.developers.richpresence":"Boy Xizmat","footer.supportus.heading":"Bizni qo\'llab-quvvatlang","footer.supportus.donate":"Xayriya qilish","footer.supportus.contribute":"Hissa Qo\'shing","footer.supportus.design":"Dizayn","footer.supportus.translate":"Tarjima Qilmoqing","footer.help.heading":"Yordam","footer.help.troubleshooting":"Muammolarni bartaraf qilish","footer.help.getsupport":"Yordam olish","footer.help.information":"Ma `lumot","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Maxfiylik","footer.help.information.terms":"Shartlar","footer.more.heading":"Ko\'proq","footer.more.status":"Holat","footer.more.wiki":"Wiki","footer.copyright.line1":"{1} foydalanuvchidan {0}","footer.copyright.line2":"Veb-sayt {0} tomonidan boshqariladi","header.language":"O\'zbekcha","header.languageNotification.title":"Biz sizning tilingizni qo\'llab-quvvatlaymiz, almashtirishni xohlaysizmi?","header.languageNotification.text":"Bizning veb-saytimiz sizning tilingizga tarjima qilindi. Agar siz ingliz tilini yaxshi bilmasangiz, bu sizga yordam berishi mumkin.","header.languageNotification.btnDecline":"Yo\'q, rahmat","header.languageNotification.btnAccept":"Tilni almashtirish","header.loader.phrases":"Krep pishiriladi ...; Jadval tayyorlandi ...; IP manzili hal qilindi ...; UwU; Qoidalar buzilgan ...","header.store":"Do\'kon","header.downloads":"Yuklashlar","header.contributors":"Hissa qo\'shganlar","home.introduction.catchphrase":"Hamma nima qilayotganingizni ko\'radi!","home.introduction.button.features":"Bizning xususiyatlarimiz","home.introduction.button.downloads":"Yuklashlar","home.examples.playingagame":"O\'yin o\'ynashing","home.examples.timestamp":"{0} qoldi","home.features.heading":"Siz ushbu xususiyatlarni seving!","home.features.presencesystem.heading":"** Sizning ** xizmatni toping.","home.features.presencesystem.description":"Foydalanuvchilarga o\'z xizmatlarini qo\'shish va boshqarish uchun biz plaginimizni maxsus ishlab chiqdik!","home.features.presencesystem.button":"Do\'koni ach","home.features.simpleInterface.heading":"Oddiy foydalanuvchi interfeysi.","home.features.simpleInterface.description":"Murakkab interfeyslardan charchadingizmi? Shuning uchun biz interfeysimizni faqat kerakli xususiyatlar bilan yaratdik:","home.features.simpleInterface.description.1":"Ilova va Kengaytma sozlamalari.","home.features.simpleInterface.description.2":"Xizmat boshqarish.","home.features.simpleInterface.description.3":"Kategoriya bo\'yicha saralash.","home.features.quickSupport.heading":"Tez yordam.","home.features.quickSupport.description":"Biror narsa sizni xursand qilyaptimi yoki sizga minglab xatolar yubormoqdami? Sizga ushbu Discord serveridan xalos bo\'lishga yordam beramiz, shuningdek, sizning hayotingizni osonlashtiradigan qo\'llab-quvvatlash tizimini ishlab chiqdik.","home.features.quickSupport.button":"Bizning serverimizga tashrif buyuring","maintenance.big":"Ta\'minot","maintenance.heading":"Afsuski, texnik qiyinchiliklarga duch kelmoqdamiz. Tez orada qaytamiz. Noqulaylik uchun uzr.","maintenance.heading2":"Qo\'shimcha ma\'lumot uchun keyinroq qaytib keling.","maintenance.message":"Bizning maxsus ishlab chiquvchilarimiz buni tuzatmaguncha, bu erda ko\'ring!","maintenance.statuspage":"Holat sahifasi","maintenance.discordserver":"Discord Serveri","presence.sections.description.title":"Tavsifi","presence.sections.information.title":"Ma `lumot","presence.sections.information.author":"Muallif","presence.sections.information.version":"Versiya","presence.sections.information.tags":"Teglar","presence.sections.information.supportedurls":"Qo\'llab-quvvatlanadigan URL-manzillari","store.message.error":"Kengaytma topilmadi, funktsiyalar qulflashing...","store.message.success":"Kengaytma topildi, funktsiyalarni qulfdan oching...","store.cards.creator":"Yaratuvchi","store.cards.verified":"Ushbu xizmat tasdiqlangan ishlab chiquvchi tomonidan tasdiqlangan","store.header.search":"Qidiruv","store.card.presence.add":"Xizmat qo\'shish","store.card.presence.remove":"Xizmatni olib tashlash","store.card.presence.included":"Ushbu mavjudlik kerak bo\'lganda avtomatik ravishda ishlatiladi, uni qo\'shishga hojat yo\'q.","store.category.all":"Hammasi","store.category.games":"O\'yinlar","store.category.music":"Musiqa","store.category.socials":"Ijtimoiy","store.category.videos":"Videolar va Nashrlar","store.category.other":"Boshqa","store.search":"Qidiruv","store.userpage.userPresences":"Foydalanuvchi xizmatlari","store.userpage.error1":"Foydalanuvchi xizmatlari"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"Bạn muốn những tính năng mới?","beta.description.1":"**PreMiD Beta** bây giờ đã có mặt cho mọi người!","beta.description.2":"Bạn sẽ được gì nếu đăng ký?","beta.features.1":"Những tính năng mới nhất","beta.features.2":"Tham gia kênh chat kín của PreMiD","beta.features.3":"Role đặc biệt trong server Discord của chúng tôi","beta.register.text":"Sẵn sàng chưa? Gia nhập cùng {0} người dùng Beta khác!","beta.register.button":"Đăng ký ngay!","thankyou.title":"Tuyệt vời! Bạn bây giờ là một người dùng Beta!","thankyou.description":"Đàn khỉ này đang cố gắng mang bản beta tới cho các bạn sớm nhất có thể. Cảm ơn vì đã đăng ký!","error.noslots":"Có vẻ như chúng tôi không còn slot beta nào nữa.","contributors.headings.staff":"Đội ngũ","contributors.headings.supporters":"Người hỗ trợ","contributors.headings.translators":"Phiên dịch viên","contributors.roles.projectLeader":"Quản lý dự án","contributors.roles.staffCoordinator":"Quản lý viên","contributors.roles.marketingDirector":"Nhân viên marketing","contributors.roles.administrator":"Quản trị viên","contributors.roles.reviewer":"Reviewer","contributors.roles.developer":"Lập trình viên","contributors.roles.designer":"Designer","contributors.roles.moderator":"Điều hành viên","contributors.roles.supportAgent":"Nhân viên hỗ trợ","contributors.roles.representative":"Người đại diện","contributors.roles.proofreader":"Người đọc thử","contributors.roles.donator":"Người ủng hộ","contributors.roles.booster":"Booster","contributors.roles.translator":"Phiên dịch viên","contributors.cards.copyUserId":"Bấm vào để copy ID.","contributors.cards.userIdCopied":"ID đã được sao chép!","downloads.header.title":"Đã đến lúc thể hiện.","downloads.header.subtitle":"Sử dụng PreMiD ngay để bạn bè của bạn biết bạn đang làm gì, nó có thể giúp bạn tìm được những người chung sở thích.","downloads.instructions.heading":"Bắt đầu","downloads.instructions.step.1":"Tải xuống PreMiD","downloads.instructions.step.2":"Cài đặt ứng dụng của chúng tôi","downloads.instructions.step.3":"Thêm Extension trình duyệt của bạn","downloads.instructions.step.4":"Tải lại trang và kiểm tra Extension đã kết nối chưa","downloads.instructions.footer":"Vẫn gặp vấn đề? {0}","downloads.instructions.footer.link":"Chúng tôi sẵn sàng hỗ trợ bạn!","downloads.appdownloading.header":"Ứng dụng","downloads.extdownloading.header":"Tiện ích mở rộng","downloads.tooltips.os.not.supported.part1":"Cảnh báo:","downloads.tooltips.os.not.supported.part2":"{0} Không có bộ cài cho hệ điều hành này. Điều đó có nghĩa hệ điều hành của bạn chưa được hỗ trợ.","downloads.mobile.errorMessage":"Lưu ý rằng PreMiD không hỗ trợ cho các thiết bị di động.","downloads.mobile.showDownloads":"Hiển thị mục tải","downloads.mobile.hideDownloads":"Ẩn mục tải","downloads.warning.differentVersion":"Phiên bản hiện tại của nền tảng này là {0} (phiên bản này là dành riêng cho Linux, không áp dụng cho các nền tảng khác).","downloads.warning.differentVersion2":"Phiên bản này là dành riêng cho Linux, không áp dụng cho các hệ điều hành khác. Phiên bản hiện tại của ứng dụng là {0}","downloads.error.login":"Vui lòng đăng nhập để có thể tải về.","downloads.error.noaccess.title":"Oops, có vẻ như bạn không có quyền truy cập alpha/beta :(","downloads.error.noaccess.description":"Bạn có thể tham gia chương trình beta của chúng tôi miễn phí **tại đây**. Nhanh chân lên! chúng tôi chỉ còn {0} vị trí trống","downloads.latest.header":"Bản phát hành sớm","downloads.warning.title":"Cảnh báo","downloads.warning.message.opera":"Bạn phải cài đặt Extension **này** để có thể cài đặt PreMiD từ Cửa hàng trực tuyến Chrome.","downloads.button.skip":"Bỏ qua","downloads.button.back":"Trở lại","downloads.button.cancel":"Hủy","downloads.button.okay":"Okay","downloads.button.done":"Xong","downloads.button.login":"Đăng nhập","downloads.button.skipanyway":"Vẫn bỏ qua","downloads.adsbox.thankyou.title":"Cảm ơn!","downloads.adsbox.thankyou.message":"Chúng tôi đặt quảng cáo để hỗ trợ nhóm có thể duy trì máy chủ và cung cấp cho bạn trải nghiệm tốt nhất!","downloads.adsbox.disableAdblock":"Vui lòng tắt trình chặn quảng cáo của bạn","downloads.showbeta.message":"Hiển thị phiên bản thử nghiệm","downloads.showbeta.small":"(không cần nếu bạn chỉ ở đây để tải xuống ứng dụng thông thường)","downloads.skipanyway.message1":"Tôi không muốn hỗ trợ.","downloads.skipanyway.message2":"Bạn chắc không?","downloads.skipanyway.message3":"Thật chứ?","downloads.skipanyway.message4":"X-xin hãy hỗ trợ :(","downloads.skipanyway.message5":"Tôi cần bạn :<","downloads.skipanyway.message6":"Okay, okay...","store.search.notFound":"Chúng tôi không thể tìm thấy Presence đó...","error.code.404":"Rất tiếc, chúng tôi không tìm thấy trang này.","error.code.4":"Bạn đang tìm kiếm một Presence không tồn tại hoặc đã bị xoá.","error.code.500":"Đã xảy ra lỗi máy chủ nội bộ.","error.page.details":"Chi tiết","error.page.button":"Trở lại trang chủ","user.notFound.heading":"Không thể tìm thấy người dùng đó. Hãy chắc chắn rằng","user.notFound.message1":"cho rằng ID mà bạn tìm kiếm không chính xác.","user.notFound.message2":"cho rằng người dùng này đã tạo đủ Presence và nhận được vai trò Presence Developer máy chủ Discord.","user.notFound.message3":"nếu những người khác đang gặp vấn đề tương tự trên máy chủ Discord của chúng tôi.","user.notFound.message4":"Nếu bạn tin rằng đây là một lỗi, hãy liên hệ chúng tôi tại [máy chủ Discord của chúng tôi].","footer.language":"Ngôn ngữ","footer.usercount.heading":"Đã sẵn sàng sử dụng PreMiD chưa?","footer.usercount.message":"Tham gia với hơn {0} người dùng hôm nay!","footer.usercount.button":"Cài đặt","footer.partners.heading":"Đối tác","footer.followUs.heading":"Theo dõi chúng tôi","footer.developers.heading":"Nhà phát triển","footer.developers.documentation":"Tài liệu","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"Hỗ trợ chúng tôi","footer.supportus.donate":"Ủng hộ","footer.supportus.contribute":"Đóng góp","footer.supportus.translate":"Dịch","footer.supportus.jobs":"Làm việc với chúng tôi!","footer.help.heading":"Trợ giúp","footer.help.troubleshooting":"Gỡ rối","footer.help.getsupport":"Nhận trợ giúp","footer.help.information":"Thông tin","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"Quyền riêng tư","footer.help.information.terms":"Điều khoản","footer.more.heading":"Thêm","footer.more.status":"Trạng thái","footer.more.wiki":"Wiki","footer.copyright.line1":"{0} bởi {1}","footer.copyright.line2":"Website được duy trì bởi {0}","footer.partners.more":"Bấm vào đây để xem tất cả những đối tác & nhà tài trợ.","header.language":"Tiếng Việt","header.languageNotification.title":"Chúng tôi hỗ trợ ngôn ngữ của bạn, có muốn đổi không?","header.languageNotification.text":"Website của chúng tôi đã được dịch sang ngôn ngữ của bạn. Điều này sẽ giúp ích nếu bạn không giỏi Tiếng Anh.","header.languageNotification.btnDecline":"Không, cảm ơn","header.languageNotification.btnAccept":"Đổi ngôn ngữ","header.loader.phrases":"Đang nướng bánh...;Đang tải trang...;Phân tích địa chỉ IP của bạn...;UwU;Phá bỏ quy tắc...","header.store":"Cửa hàng","header.downloads":"Tải về","header.contributors":"Người đóng góp","header.login":"Đăng nhập","header.lia":"Đăng nhập với","header.rab":"Báo lỗi","header.staff":"Bảng điều khiển","header.logout":"Đăng xuất","home.introduction.paragraph":"**PreMiD** là một tiện ích đơn giản, có thể tùy biến cho phép bạn hiển thị những gì bạn đang làm trên web lên trạng thái \\"đang chơi\\" của Discord.","home.introduction.button.features":"Tính năng","home.introduction.button.downloads":"Tải về","home.examples.playingagame":"Đang chơi game","home.examples.timestamp":"Còn lại {0}","home.examples.timestamp2":"{0} trôi qua","home.examples.status.playing":"Đang phát","home.examples.status.live":"Trực tiếp","home.examples.status.browsing":"Đang duyệt...","home.features.heading":"Bạn sẽ yêu thích những tính năng này!","home.features.presencesystem.heading":"Tìm **presence** của bạn","home.features.presencesystem.description":"Chúng tôi đã tạo ra một extension để bạn có thể thêm và sử dụng các Presence do người khác tạo ra và quản lý chúng trong extension của chúng tôi!","home.features.presencesystem.button":"Ghé thăm cửa hàng","home.features.simpleInterface.heading":"Giao diện đơn giản","home.features.simpleInterface.description":"Đã quả mệt mỏi vì giao diện người dùng phức tạp? Đó là lý do tại sao chúng tôi tạo ra và cố gắng giữ cho UI của chúng tôi đơn giản và hữu ích nhất với các tính năng quan trọng như:","home.features.simpleInterface.description.1":"Cài đặt ứng dụng và tiện ích mở rộng","home.features.simpleInterface.description.2":"Quản lý presence","home.features.simpleInterface.description.3":"Sắp xếp theo danh mục","home.features.quickSupport.heading":"Hỗ trợ nhanh chóng","home.features.quickSupport.description":"Có gì đó trục trặc, gửi cho bạn hàng đống lỗi hoặc đơn giản là không hoạt động? Chúng tôi sẽ giúp bạn loại bỏ những vấn đề đó trên máy chủ Discord của chúng tôi, chúng tôi cũng tạo ra hệ thống để đảm bảo vấn đề của bạn được giải quyết một cách nhanh nhất.","home.features.quickSupport.button":"Tham gia Discord của chúng tôi","home.languageSelector.tippy":"Ngôn ngữ website","jobs.modal.title":"Ứng tuyển cho {0}","jobs.modal.step":"Bước {0} trên 2","jobs.modal.buttons.next":"Tiếp theo","jobs.modal.buttons.join":"Tham gia","jobs.modal.buttons.cancel":"Hủy","jobs.modal.error":"Vui lòng điền tất cả các trường","jobs.modal.notice":"PreMiD là một dự án mã nguồn mở, nghĩa là chúng tôi là một nhóm phi lợi nhuận, mọi khoản đóng góp hoặc tiền trợ cấp đều được chi cho dự án. Bằng cách ứng tuyển vào một vị trí làm việc tại PreMiD, bạn phải biết rằng bạn đang tình nguyện tham gia đội ngũ, bạn sẽ không được trả tiền cho công việc của mình.","jobs.guild.required":"Tham gia Discord của chúng tôi","jobs.guild.explanation":"Để có thể ứng tuyển bạn phải tham gia máy chủ Discord của chúng tôi. Nếu không, chúng tôi sẽ không thể liên lạc với bạn nếu bạn được chọn!","jobs.header.title":"Làm việc tại PreMiD","jobs.header.description":"Bạn đã sẵn sàng để giúp đỡ chương trình Rich-Presence lớn nhất chưa?","jobs.openings.title":"Tuyển việc làm","jobs.benefits.title":"Nhiều lợi ích","jobs.benefit1.title":"Gặp chúng tôi","jobs.benefit1.description":"Gặp gỡ những người phía sau dự án PreMiD.","jobs.benefit2.title":"Sneak Peeks","jobs.benefit2.description":"Có cái nhìn về sự phát triển và Marketing của chúng tôi.","jobs.benefit3.title":"Vinh dự","jobs.benefit3.description":"Quyền trong Discord và role màu sặc sỡ.","jobs.benefit4.title":"Hỗ trợ PreMiD","jobs.benefit4.description":"Với sự đóng góp của bạn, chúng tôi có thể tiếp tục vận hành dự án này.","jobs.benefit5.title":"Hết giờ","jobs.benefit5.description":"Không cần vội, đây là việc tình nguyện.","jobs.benefit6.title":"Tiếp cận sớm","jobs.benefit6.description":"Kiểm tra các tính năng mới trước người khác.","jobs.success.applied":"Cảm ơn bạn đã ứng tuyển!","jobs.errors.alreadyApplied":"Bạn đã ứng tuyển rồi!","maintenance.big":"Ôi không!","maintenance.heading":"Thật đáng tiếc, chúng tôi đang gặp một số trục trặc kỹ thuật. Chúng tôi sẽ trở lại trong thời gian ngắn. Xin lỗi vì sự bất tiện này.","maintenance.heading2":"Vui lòng quay lại sau để biết thêm chi tiết.","maintenance.message":"Trong lúc đợi lập trình viên của chúng tôi sửa lỗi, đừng ngại và tham quan nơi này!","maintenance.statuspage":"Trang trạng thái","maintenance.discordserver":"Server Discord","merch.title":"Chào mừng đến với cửa hàng của **PreMiD**!","merch.fit":"**Chọn size**","merch.cart":"Thêm vào giỏ hàng","merch.help":"Có vấn đề khi đặt hàng? Liên hệ {0}chăm sóc khách hàng{1}","merch.item.added":"{0} đã được thêm vào giỏ hàng","merch.error.noitem":"Không có mặt hàng nào được thêm vào giỏ hàng","partners.header.title":"Đối tác","partners.header.description":"Tham gia và có cơ hội nhận được những lợi ích dành riêng cho đối tác để khoe bạn ngầu như thế nào.","partners.slideshow.description":"Những thứ này thuộc về chúng tôi","partners.why.benefit1.title":"Presence miễn phí của bạn","partners.why.benefit1.description":"Đội ngũ của chúng tôi sẽ cung cấp Presence dành riêng cho dịch vụ của bạn.","partners.why.benefit2.title":"Trở thành người được xác minh","partners.why.benefit2.description":"Một role đặc biệt và vinh dự sẽ được trao cho bạn trong server Discord của chúng tôi.","partners.why.benefit3.description":"Tự động hiển thị Presence khi có ai đó truy cập website của bạn.","partners.why.benefit4.description":"Một dành riêng cho các đối tác.","partners.why.benefit5.title":"Trở nên nổi tiếng","partners.why.benefit5.description":"Được giới thiệu trên phương tiện truyền thông của chúng tôi.","partners.requirements.first.title":"Chúng tôi đang tìm kiếm điều gì?","partners.requirements.second.description":"Có nhiều cách để làm đối tác với chúng tôi. Twitch streamer cần tối thiểu 500 người theo dõi và tối thiểu 10 người xem đồng thời. Bạn cần stream ít nhất 1 lần trong tuần.","partners.apply.button":"Đăng ký ngay!","partners.sponsors.title":"Các nhà tài trợ","partners.sponsors.description":"PreMiD sẽ không có thể nếu không có những con người tuyệt vời này.","partners.partner.aniFlix":"Đây là cách bạn nên xem anime.","partners.partner.upBeat":"UpBeat là một đài phát thanh quốc tế phi lợi nhuận luôn cố gắng cung cấp chương trình giải trí chất lượng nhất.","partners.partner.simLiveRadio":"SimLiveRadio là đài phát thanh thông tin giải trí thành công nhất cho các trò chơi mô phòng ở Đức, Áo và Thuỵ Sĩ!","partners.partner.discordTemplates":"Bắt đầu xây dựng cộng đồng của riêng bạn với các mẫu tuyệt vời của chúng tôi. Hãy xây dựng vương quốc riêng của bạn.","partners.partner.taigaBot":"taiga là một Discord Bot sẽ cung cấp tất cả các tính năng mà bạn có thể cần!","partners.partner.bitRock":"Một công cụ đa nền tảng mạnh mẽ giúp bạn dễ dàng tạo ra trình cài đặt.","partners.partner.statusPage":"Dễ dàng báo trạng thái trang web của bạn đến người dùng theo giời gian thực.","partners.partner.crowdin":"Dịch thuật nhanh chóng cho công ty công nghệ.","partners.partner.wikijs":"Phần mềm Wiki mã nguồn mở và có thể dễ dàng mở rộng.","partners.partner.fastly":"Đằng sau những tinh túy của trang web.","partners.apply.title":"Đăng ký cho đối tác","partners.apply.loggedUser":"Đăng nhập với {0}","partners.apply.notYou":"Không phải bạn?","partners.apply.select.default":"Xin chọn một","partners.apply.select.website":"Website","partners.apply.select.other":"Khác","partners.apply.form.name":"Tên","partners.apply.form.name.placeholder":"Ví dụ: PreMiD","partners.apply.form.link":"Link","partners.apply.form.link.placeholder":"Ví dụ: https://premid.app","partners.apply.form.description":"Mô tả: (Tối đa 150 ký tự)","partners.apply.form.description.placeholder":"Mô tả các tính chất","partners.apply.form.imageLink":"Link hình ảnh (550x300, chỉ được PNG)","partners.apply.form.imageLink.placeholder":"Ví dụ: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"Đóng","partners.apply.form.button.apply":"Đăng ký","partners.apply.success":"Cảm ơn bạn đã ứng tuyển!","partners.apply.error1":"Xin hãy điền vào các trường trống.","partners.apply.error2":"Phần miêu tả tối đa 150 ký tự.","partners.apply.error3":"Hãy thêm link (phải bắt đầu bằng https:// và kết thúc với .png)","partners.apply.error4":"Bạn đã ứng tuyển rồi.","presence.page.buttons.sourceCode":"Mã nguồn","presence.sections.description.title":"Mô tả","presence.sections.changelog.title":"Nhật ký thay đổi","presence.sections.information.title":"Thông tin","presence.sections.information.author":"Tác giả","presence.sections.information.version":"Phiên bản","presence.sections.information.likes":"Thích","presence.sections.information.users":"Người dùng","presence.sections.information.tags":"Tags","presence.sections.information.supportedurls":"URLs được hỗ trợ","presence.sections.information.contributors":"Người đóng góp","report.title":"Báo cáo lỗi","report.bugcount":"{count}/3 báo cáo còn lại","report.info":"Báo cáo lỗi là các lỗi trong trang web PreMiD và máy chủ Discord PreMiD. Lỗi của Presence sẽ được báo cáo cho người tạo ra Presence. Chỉ có thể báo lỗi bằng tiếng Anh.","report.overview":"Cung cấp một mô tả rõ ràng và súc tích về lỗi.","report.os":"Chọn hệ điều hành và phiên bản của bạn","report.browser":"Chọn trình duyệt và phiên bản của bạn - Bạn có thể tìm thấy phiên bản bằng cách truy cập about:support ở Firefox hoặc chrome://help","report.description":"Hãy cung cấp link hoặc video hoặc mô tả rõ ràng các bước để tạo ra lỗi.","report.button":"Báo cáo","report.toomany":"Bạn có quá nhiều báo cáo đang được xử lý. Vui lòng kiên nhẫn vì chúng tôi xem xét báo cáo của bạn hàng tuần.","report.toomany.alert":"Bạn có quá nhiều báo cáo đang chờ được xử lý.","report.success":"Lỗi đã được gửi","report.error":"Cần thêm thông tin","report.error.unauth":"Tài khoản Discord cần được xác minh","report.activebugs":"Lỗi đang chờ","store.message.error":"Tiện ích chưa được kết nối.","store.cards.creator":"Tác giả","store.cards.popular":"Presence này rất phổ biến với người dùng.","store.cards.partner":"Partnered Presence","store.cards.extraStepsRequired":"Presence yêu cầu các bước bổ sung, vui lòng kiểm tra trang của nó để biết thêm thông tin.","store.header.search":"Tìm kiếm Presence","store.card.presence.add":"Thêm Presence","store.card.presence.remove":"Gỡ Presence","store.card.presence.included":"Presence này tự động hoạt động khi truy cập trang web của nó.","store.category.filters.heading":"Bộ lọc","store.category.filters.mostUsed":"Được dùng nhiều trước","store.category.filters.allowAdult":"Hiển thị NSFW","store.category.filters.likedOnly":"Chỉ Presence đã thích","store.filters.added":"Hiển thị Presence đã thêm","store.category.heading":"Danh mục","store.category.all":"Tất cả","store.category.games":"Game","store.category.music":"Âm nhạc","store.category.socials":"Mạng xã hội","store.category.videos":"Video & Streams","store.category.other":"Khác","store.search":"Tìm kiếm","store.search.filters":"Nhập","store.search.removeFilter":"Ấn để gỡ bộ lọc","user.roles.presenceDeveloper":"Nhà phát triển Presence","user.roles.presenceVerifier":"Presence Verifier","user.importantPresenceDev.message1":"Lập trình viên Presence quan trọng","user.importantPresenceDev.message2":"Đã viết {0} presences.","user.geniusPresenceDev.message1":"Lập trình viên Presence tài năng","user.geniusPresenceDev.message2":"Đã viết hơn 100 Presences!","user.switch.contributed":"[Presences/Đóng góp] của họ","user.presences.created":"Ấn vào đây để hiển thị Presence mà người này đã tạo.","user.presences.contributed":"Bấm vào đây để hiện presences mà người này đã đóng góp."}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"想尝试全新功能？","beta.description.1":"**PreMiD Beta** 现已对所有人开放！","beta.description.2":"那么你会得到什么呢？","beta.features.1":"最新的功能","beta.features.2":"访问 PreMiD 最神秘的 Discord 频道","beta.features.3":"在我们 Discord 服务器上的特殊身份组","beta.register.text":"准备好了吗？和其他 {0} 位 Beta 测试者一起加入！","beta.register.button":"立即加入！","thankyou.title":"酷！你现在是 Beta 用户了！","thankyou.description":"感谢你的加入！我们正在竭尽全力的把你添加到我们的测试程序当中。","error.noslots":"看来我们没有更多的 Beta 名额了。","contributors.headings.staff":"工作人员","contributors.headings.supporters":"赞助者","contributors.headings.translators":"翻译人员","contributors.roles.projectLeader":"项目领头人","contributors.roles.staffCoordinator":"团队协调员","contributors.roles.marketingDirector":"营销总监","contributors.roles.administrator":"管理员","contributors.roles.reviewer":"审查员","contributors.roles.localizationManager":"本地化管理员","contributors.roles.developer":"开发者","contributors.roles.designer":"设计师","contributors.roles.moderator":"版主","contributors.roles.supportAgent":"客服","contributors.roles.representative":"社区代表","contributors.roles.proofreader":"校对","contributors.roles.donator":"捐助者","contributors.roles.booster":"助力者","contributors.roles.translator":"翻译","contributors.cards.copyUserId":"单击以复制用户ID。","contributors.cards.userIdCopied":"用户 ID 已复制","downloads.header.title":"是时候展现自己了！","downloads.header.subtitle":"开始使用 PreMiD，并告诉其他人你在做什么，也许你会找到一个志同道合的朋友。","downloads.instructions.heading":"开始使用吧！","downloads.instructions.step.1":"下载 PreMiD","downloads.instructions.step.2":"安装应用程序","downloads.instructions.step.3":"将我们的扩展添加到你的浏览器","downloads.instructions.step.4":"刷新网页检查是否成功连接","downloads.instructions.footer":"仍然有问题？ {0}","downloads.instructions.footer.link":"如有疑问，欢迎联络我们","downloads.appdownloading.header":"应用程序","downloads.extdownloading.header":"扩展程序","downloads.tooltips.os.not.supported.part1":"警告：","downloads.tooltips.os.not.supported.part2":"{0} 没有为该操作系统创建的安装程序，这意味着您将没有技术支持。","downloads.mobile.errorMessage":"请注意，PreMiD 当前不支持手机客户端。","downloads.mobile.showDownloads":"显示下载","downloads.mobile.hideDownloads":"隐藏下载","downloads.warning.differentVersion":"当前适用于 Linux 的 PreMiD 版本是 {0} (注意：这是 Linux 专用版本，不适用于其他系统)。","downloads.warning.differentVersion2":"此版本是 Linux 的专用版本，不适用于其他系统。应用程序的版本是 {0}","downloads.error.login":"请登录 Discord 账户来让我们确定你的测试资格","downloads.error.noaccess.title":"看上去...你并没有 Alpha/BETA 的测试权限 :(","downloads.error.noaccess.description":"你可以免费加入到我们的 **Beta 测试** 当中。时间不多了！还剩最后 {0} 个名额 ！","downloads.latest.header":"先遣测试版","downloads.warning.title":"警告","downloads.warning.message.opera":"你必须安装**本扩展程序**才能从 Chrome 网上应用店安装 PreMiD。","downloads.button.skip":"跳过","downloads.button.back":"返回","downloads.button.cancel":"取消","downloads.button.okay":"好的","downloads.button.done":"完成","downloads.button.login":"登录","downloads.button.skipanyway":"跳过","downloads.adsbox.thankyou.title":"感谢你!","downloads.adsbox.thankyou.message":"我们通过广告来维持我们的团队和服务器，以为您提供最好的用户体验！","downloads.adsbox.disableAdblock":"请暂时停用您的广告拦截程序。","downloads.showbeta.message":"显示先遣测试版本","downloads.showbeta.small":"（如果你只想下载普通版本，请无视）","downloads.skipanyway.message1":"我不想关闭广告拦截。","downloads.skipanyway.message2":"你确定吗？？？","downloads.skipanyway.message3":"真的吗？","downloads.skipanyway.message4":"求你了，关了吧 :(","downloads.skipanyway.message5":"我们需要你的援助 :<","downloads.skipanyway.message6":"好吧，好吧...我们放行","store.search.notFound":"找不到这个 Presence…","error.code.404":"抱歉，我们找不到此页面。","error.code.4":"这个 Presence 已被删除或从未存在过。","error.code.500":"内部服务器错误。","error.page.details":"详情","error.page.button":"返回主页","user.notFound.heading":"找不到该用户。","user.notFound.message1":"你正在寻找的用户 ID 是正确的。","user.notFound.message2":"该用户已经创建了足够多的 Presence，并且在我们的 Discord 服务器中具有 Presence 开发者身份组。","user.notFound.message3":"在我们的 Discord 服务器上查看其他人是否遇到相同的问题。","user.notFound.message4":"如果你坚信这是一个错误，请在 [Discord 服务器] 中联系我们。","footer.language":"语言","footer.usercount.heading":"准备好尝试 PreMiD 了吗？","footer.usercount.message":"已有 {0} 名用户加入了我们！","footer.usercount.button":"安装","footer.partners.heading":"合作伙伴","footer.followUs.heading":"关注我们","footer.developers.heading":"开发者","footer.developers.documentation":"帮助文档","footer.developers.richpresence":"Rich Presence","footer.supportus.heading":"支持我们","footer.supportus.donate":"捐赠","footer.supportus.contribute":"贡献","footer.supportus.translate":"翻译","footer.supportus.jobs":"工作机会","footer.help.heading":"帮助","footer.help.troubleshooting":"疑难解答","footer.help.getsupport":"获得帮助","footer.help.information":"信息","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"隐私政策","footer.help.information.terms":"使用条款","footer.more.heading":"更多","footer.more.status":"服务器状态","footer.more.wiki":"维基","footer.copyright.line1":"{0} 作者：{1}","footer.copyright.line2":"网站由 {0} 维护","footer.partners.more":"合作伙伴与赞助者","header.language":"简体中文","header.languageNotification.title":"我们支持你的语言，想试试吗？","header.languageNotification.text":"我们的网站已翻译成你的语言。如果你看不懂英文，这会有所帮助。","header.languageNotification.btnDecline":"不用了，谢谢","header.languageNotification.btnAccept":"切换语言","header.loader.phrases":"正在解除温度限制..;正在布下陷阱..;分析你的IP地址..;UwU;正在重构网页...;正在煎馅饼...","header.store":"Presence 市场","header.downloads":"下载","header.contributors":"贡献者","header.login":"登录","header.lia":"已登入为","header.rab":"反馈 Bug","header.staff":"主页","header.logout":"登出","home.introduction.paragraph":"**PreMiD** 是一个简单、可配置的工具，可以让你在 Discord 游戏动态 上显示你的网页状态。","home.introduction.button.features":"功能","home.introduction.button.downloads":"下载","home.examples.playingagame":"正在玩游戏","home.examples.timestamp":"还剩 {0}","home.examples.timestamp2":"已经过了 {0}","home.examples.status.playing":"正在播放","home.examples.status.live":"直播","home.examples.status.browsing":"浏览中...","home.features.heading":"你会爱上这些功能！","home.features.presencesystem.heading":"找到 **属于你的** Presence","home.features.presencesystem.description":"我们拥有超过 510 个 Presence 供你挑选，大部分来自我们的用户开发，你也可以参与其中！","home.features.presencesystem.button":"前往 Presence 市场","home.features.simpleInterface.heading":"简洁的界面","home.features.simpleInterface.description":"担心程序复杂？我们只保留了重要功能。其他的？交给我们吧！","home.features.simpleInterface.description.1":"一目了然的扩展设置","home.features.simpleInterface.description.2":"简洁实用的状态管理","home.features.simpleInterface.description.3":"以及强大的筛选功能","home.features.quickSupport.heading":"快速的客服支持","home.features.quickSupport.description":"成吨的错误向你袭来？加入我们的 Discord 服务器来取得帮助。我们还在服务器中建立了我们自己的工单系统，确保你的问题尽快得到解决！","home.features.quickSupport.button":"加入我们的 Discord 服务器","home.languageSelector.tippy":"语言","jobs.modal.title":"申请成为 {0}","jobs.modal.step":"步骤 {0} / 2","jobs.modal.buttons.next":"继续","jobs.modal.buttons.join":"加入","jobs.modal.buttons.cancel":"取消","jobs.modal.error":"请填写所有字段。","jobs.modal.notice":"PreMiD 是一个开源产品，这意味着我们是一个非营利团队，每笔捐赠都会回到产品中。 如果你在 PreMiD 申请职位，你会承认你是在团队中的志愿者，你的工作将不会得到报酬。","jobs.guild.required":"加入我们的 Discord 服务器","jobs.guild.explanation":"你必须加入我们的 Discord 服务器才可以申请。否则，如果最终被选中，我们将无法与你联系！","jobs.header.title":"为  PreMiD 工作。","jobs.header.description":"准备好帮助开发最大的 Rich-Presence 库了吗？","jobs.openings.title":"工作机会","jobs.benefits.title":"高端福利","jobs.benefit1.title":"了解我们","jobs.benefit1.description":"与 PreMiD 背后的人取得联系。","jobs.benefit2.title":"偷瞄一眼","jobs.benefit2.description":"查看我们的发展和活动。","jobs.benefit3.title":"荣誉","jobs.benefit3.description":"强大的 Discord 权限和多彩的身份组。","jobs.benefit4.title":"支援 PreMiD","jobs.benefit4.description":"你的贡献将帮助运行这个项目。","jobs.benefit5.title":"时间到！","jobs.benefit5.description":"这会花费你自己的时间。因为这是志愿工作。","jobs.benefit6.title":"抢先体验","jobs.benefit6.description":"在任何人之前体验全新功能。","jobs.success.applied":"感谢你的申请！","jobs.errors.alreadyApplied":"你之前已经申请过了！","maintenance.big":"哦，不！","maintenance.heading":"非常抱歉，我们暂时遇到了一些技术问题，很快就会恢复。给您带来的不便，请谅解。","maintenance.heading2":"请稍后再来查看。","maintenance.message":"在我们的特殊开发人员解决这个问题之前，在这里随便看看吧！","maintenance.statuspage":"状态页面","maintenance.discordserver":"Discord 服务器","merch.title":"欢迎来到 **PreMiD** 官方周边商城！","merch.swag":"找到你的 **Swag**","merch.fit":"**选择你的配件**","merch.cart":"加入购物车","merch.help":"在订单中遇到问题？联系我们的 {0}客服支持{1}，马上为你解决！","merch.item.added":"购物车 ({0}) ","merch.error.noitem":"这里什么也没有 :(","partners.header.title":"合作伙伴","partners.header.description":"加入并获得一些仅限合作伙伴才有的豪华待遇来让你出类拔萃！","partners.slideshow.description":"已有的合作伙伴，你也可以加入进来！","partners.why.title":"这里到底是第几层","partners.why.benefit1.title":"完全免费","partners.why.benefit1.description":"我们的团队将为你的服务免费开发 Presence 。","partners.why.benefit2.title":"获得验证","partners.why.benefit2.description":"在我们的 Discord 服务器上将给你一个特殊的身份组和极大的荣誉。","partners.why.benefit3.title":"自动集成","partners.why.benefit3.description":"当有人访问你的网站时，自动启用你的 Presence 。","partners.why.benefit4.title":"让人铭记","partners.why.benefit4.description":"在我们的伙伴页面上挑个地方。","partners.why.benefit5.title":"脱颖而出","partners.why.benefit5.description":"成为我们的精选应用","partners.requirements.title":"看上去不错，但是......","partners.requirements.first.title":"我们需要的是什么？","partners.requirements.first.description":"我们关注日益增长的社区，关注互联网周围令人振奋的事情。 TL;DR 你应该已经在使用 PreMiD 并准备好将它传播到更多地方。 对该计划的接受是非常定性的，并且从一个候选人到下一个候选人都会有所不同。","partners.requirements.second.title":"一点小要求","partners.requirements.second.description":"我们目前正在接受各种努力成为我们合作伙伴的方案，任何人都应该有机会被注意到。你的 Twitch 至少应该有500个关注者和至少10个实时观众，并且您每周必须至少开台一次。","partners.apply.button":"现在申请 ！","partners.apply.disclaimer":"让我们一起来到最高层！","partners.apply.jobs":"如果你对在 PreMiD 的直接作业感兴趣，请查看我们的 **工作机会**。","partners.sponsors.title":"赞助商","partners.sponsors.description":"如果没有这些惊人的事物，PreMiD 不可能存在。","partners.partner.aniFlix":"这就是你观看动画的方式。","partners.partner.arenaOfKings":"Arena of Kings 是在浏览器中游玩的一种快节奏的 PvP 竞技游戏。","partners.partner.upBeat":"UpBeat 是一家非营利性的国际电台，它努力提供不停、优质的广播和娱乐新闻。","partners.apply.title":"申请成为合作伙伴","partners.apply.loggedUser":"已登入为 {0}","partners.apply.notYou":"不是你？","partners.apply.select.default":"请选择","partners.apply.select.website":"网站","partners.apply.select.other":"其他","partners.apply.form.name.placeholder":"例子: PreMiD","partners.apply.form.link":"链接","partners.apply.form.link.placeholder":"例如：https://premid.app","partners.apply.form.description":"简介：（最多150个字符）","partners.apply.form.description.placeholder":"功能说明","partners.apply.form.imageLink":"图片链接：(550x300，仅PNG)","partners.apply.form.imageLink.placeholder":"例如：https://iimgur.com/clun1ID.png","partners.apply.form.button.close":"关闭","partners.apply.form.button.apply":"申请","partners.apply.success":"感谢你的申请！","partners.apply.error1":"请填写所有字段。","partners.apply.error2":"最多150个字符。","partners.apply.error3":"请添加一个链接（必须以 https:// 开头并以 .png 结尾）","partners.apply.error4":"你已经申请了成为合作伙伴。","presence.page.buttons.sourceCode":"查看源代码","presence.sections.description.title":"描述","presence.sections.changelog.title":"更新日志","presence.sections.information.title":"信息","presence.sections.information.author":"作者","presence.sections.information.version":"版本","presence.sections.information.likes":"喜欢","presence.sections.information.users":"下载次数","presence.sections.information.tags":"标签","presence.sections.information.supportedurls":"支持的网站","presence.sections.information.contributors":"贡献者","report.title":"反馈 Bug","report.bugcount":"剩余 {count}/3 次","report.info":"反馈 Bug 指的是是关于 PreMiD 网站和 PreMiD Discord 服务器中的存在 Bug。Presence 中的 Bug 请报告给 Presence 的作者。请使用英文进行反馈。","report.overview":"一个清晰和简洁的 Bug 描述。","report.os":"选择你的操作系统与版本","report.browser":"选择你的浏览器和版本 - 你可以通过访问 chrome://help 或 about:support 来获得版本","report.description":"一个重现此 Bug 的实时演示或一套明确的步骤。","report.button":"反馈","report.toomany":"你还有未解决的反馈，请等待你的提交被审阅。反馈会在一周内解决，请耐心等待。","report.toomany.alert":"你有过多未解决的反馈。","report.success":"Bug 已提交","report.error":"需要更多的信息","report.error.unauth":"Discord 帐户需要验证","report.activebugs":"未解决的 Bug","store.message.error":"未连接到扩展程序","store.cards.creator":"作者","store.cards.popular":"热门","store.cards.partner":"合作伙伴","store.cards.extraStepsRequired":"需要额外步骤","store.header.search":"搜索 Presence","store.card.presence.add":"添加","store.card.presence.remove":"已添加","store.card.presence.included":"这个 Presence 会被自动激活","store.category.filters.heading":"筛选","store.category.filters.mostUsed":"按热门度排序","store.category.filters.allowAdult":"限制级(R-18)","store.category.filters.likedOnly":"我的喜欢","store.filters.added":"已添加","store.category.heading":"分类","store.category.all":"全部","store.category.games":"游戏","store.category.music":"音乐","store.category.socials":"社交","store.category.videos":"视频与直播","store.category.other":"其他","store.search":"搜索","store.search.filters":"+","store.search.removeFilter":"移除过滤器","user.roles.presenceDeveloper":"Presence 开发者","user.roles.presenceVerifier":"Presence 审核人员","user.importantPresenceDev.message1":"主要 Presence 开发者","user.importantPresenceDev.message2":"已创建 {0} Presences。","user.geniusPresenceDev.message1":"Presence 活跃开发者","user.geniusPresenceDev.message2":"开发超过100个Presence！","user.switch.contributed":"用户的 [Presences/贡献]","user.presences.created":"显示该用户开发的所有 Presence","user.presences.contributed":"显示该用户参与开发的所有 Presence"}')
    }, function(e) {
        e.exports = JSON.parse('{"beta.title":"想要嘗試新功能？","beta.description.1":"現在所有人都可以使用**PreMiD Beta**","beta.description.2":"註冊後你會得到什麼呢？","beta.features.1":"最新功能","beta.features.2":"可以訪問 PreMiD 的超級秘密文字頻道","beta.features.3":"Discord服務器上的特殊身份組","beta.register.text":"準備好了嗎？成爲我們{0} 位Beta測試員中的新成員!","beta.register.button":"立刻註冊!","thankyou.title":"帥爆了！你現在是我們beta用戶的一份子。","thankyou.description":"我們的管理員正在以最快的速度審核你的注冊，使您盡快進入我們的Beta計劃。 感謝您註冊！","error.noslots":"看來我們沒有更多Beta版的名額了","contributors.headings.staff":"職員","contributors.headings.supporters":"捐贈者","contributors.headings.translators":"翻譯員","contributors.roles.projectLeader":"專案負責人","contributors.roles.staffCoordinator":"工作人員協調員","contributors.roles.marketingDirector":"市場總監","contributors.roles.administrator":"管理員","contributors.roles.reviewer":"審查員","contributors.roles.developer":"開發人員","contributors.roles.designer":"設計者","contributors.roles.moderator":"版主","contributors.roles.supportAgent":"支援代理","contributors.roles.representative":"代表","contributors.roles.proofreader":"校對員","contributors.roles.donator":"捐贈者","contributors.roles.booster":"加成者","contributors.roles.translator":"翻譯員","contributors.cards.copyUserId":"按一下來複製用戶id","contributors.cards.userIdCopied":"用戶ID已複製","downloads.header.title":"是時候展示你自己了!","downloads.header.subtitle":"現在開始使用PreMiD,向其他人展示你在做什麼,可能你會找到志同道合的朋友。 ","downloads.instructions.heading":"馬上開始","downloads.instructions.step.1":"下載PreMiD","downloads.instructions.step.2":"安裝我們的應用程式","downloads.instructions.step.3":"將我們的擴展添加到您的瀏覽器","downloads.instructions.step.4":"刷新頁面, 來檢查擴展程序是否已連接","downloads.instructions.footer":"還是有問題嗎?{0}","downloads.instructions.footer.link":"我們在此提供協助!","downloads.appdownloading.header":"應用程序","downloads.extdownloading.header":"擴展程序","downloads.tooltips.os.not.supported.part1":"警告:","downloads.tooltips.os.not.supported.part2":"{0} 該操作系統沒有安裝程序. 這就代表著沒有專業的客服能協助您.","downloads.mobile.errorMessage":"請注意, PreMiD當前不支持手機客戶端。","downloads.mobile.showDownloads":"顯示下載","downloads.mobile.hideDownloads":"隱藏下載","downloads.warning.differentVersion2":"此版本為Linux定制，不適用於其他系統。主程序的主要版本是{0}","downloads.error.login":"你需要登入才能下載","downloads.error.noaccess.title":"等等 你好像還沒有加入alpha/beta :(","downloads.error.noaccess.description":"您可以在**此處**免費加入我們的Beta版計劃. 趕快! 我們還有{0} 個名額。","downloads.latest.header":"測試版發佈","downloads.warning.title":"警告","downloads.warning.message.opera":"您必須先安裝 **此** 擴展程序，然後才能從chrome線上應用程式商店安裝PreMiD。","downloads.button.skip":"跳過","downloads.button.back":"返回","downloads.button.cancel":"取消","downloads.button.okay":"確定","downloads.button.done":"完成","downloads.button.login":"登入","downloads.adsbox.thankyou.title":"感謝您!","downloads.adsbox.thankyou.message":"我們使用廣告來支持我們的團隊並維護我們的服務器，以為您提供最佳的用戶體驗！","downloads.adsbox.disableAdblock":"請關閉廣告封鎖器","downloads.showbeta.small":"(如果只是想在這下載普通版本則不需要)","downloads.skipanyway.message1":"我不想支持.","downloads.skipanyway.message2":"你確定嗎？","downloads.skipanyway.message3":"真的?","downloads.skipanyway.message4":"拜...拜託請支持我 QAQ","downloads.skipanyway.message5":"我需要你 :<","downloads.skipanyway.message6":"好，好吧...","store.search.notFound":"我們找不到該Presence...","error.code.404":"抱歉，我們無法找到該頁面。","error.code.4":"你正在尋找著不存在或已經刪除的 Presence.","error.code.500":"發生伺服器內部錯誤","error.page.details":"詳細資料","error.page.button":"回到主頁","user.notFound.heading":"找不到這個使用者。請確認無誤並重試：","user.notFound.message1":"您正在搜尋的使用者ID是正確的。","user.notFound.message2":"這個使用者創建了足夠多的 Presence 并在我們的 Discord 伺服器中擁有 Presence 開發者身分組","user.notFound.message3":"在我們的 Discord 伺服器中確認其他人是否存在同樣的錯誤。","user.notFound.message4":"如果你堅信這是一個錯誤，請在 [Discord 伺服器] 中聯係我們。","footer.language":"語言","footer.usercount.heading":"準備好使用PreMiD?","footer.usercount.message":"加入 {0} 個用戶吧!","footer.usercount.button":"安裝","footer.partners.heading":"合作夥伴","footer.followUs.heading":"關注我們","footer.developers.heading":"開發團隊","footer.developers.documentation":"相關文章","footer.developers.richpresence":"豐富的狀態","footer.supportus.heading":"支持我們","footer.supportus.donate":"捐贈","footer.supportus.contribute":"貢獻","footer.supportus.translate":"翻譯","footer.supportus.jobs":"與我們一起工作！","footer.help.heading":"幫助","footer.help.troubleshooting":"疑難排解","footer.help.getsupport":"尋求幫助","footer.help.information":"資訊","footer.help.information.cookies":"Cookies","footer.help.information.privacy":"隱私","footer.help.information.terms":"條款","footer.more.heading":"更多","footer.more.status":"狀態","footer.more.wiki":"維基","footer.copyright.line1":"{0} 由 {1}","footer.copyright.line2":"網站由 {0} 維護","footer.partners.more":"單擊此處查看我們的合作夥伴和讚助商。","header.language":"繁體中文","header.languageNotification.title":"我們支持您的語言, 想要切換嗎?","header.languageNotification.text":"我們的網站已翻譯成您的語言. 如果您在英語方面比較弱, 這可能會有所幫助.","header.languageNotification.btnDecline":"不用了, 感謝","header.languageNotification.btnAccept":"切換語言","header.loader.phrases":"烤煎餅中...;把它放置到容器...;正在解析您的IP地址...; UwU;破壞規則中...","header.store":"商店","header.downloads":"下載","header.contributors":"貢獻者","header.login":"登入","header.lia":"登入為","header.rab":"回報錯誤","header.staff":"控制面板","header.logout":"登出","home.introduction.paragraph":"**PreMiD** 是一個簡單的可配置實用程序，可讓您以Discord遊戲動態中顯示您在瀏覽器上正在做什麼。","home.introduction.button.features":"功能","home.introduction.button.downloads":"下載","home.examples.playingagame":"正在玩遊戲","home.examples.timestamp":"還剩{0}","home.examples.timestamp2":"已經過了{0}","home.examples.status.playing":"播放中","home.examples.status.live":"直播","home.examples.status.browsing":"瀏覽中...","home.features.heading":"你會愛上這些功能的!","home.features.presencesystem.heading":"尋找 **您的** 狀態","home.features.presencesystem.description":"我們開發的擴展程序有方式允許您添加和使用其他用戶創建的狀態, 並可在擴展程序中對其進行管理","home.features.presencesystem.button":"前往店鋪","home.features.simpleInterface.heading":"簡單的用戶界面","home.features.simpleInterface.description":"對複雜的使用者介面感到厭倦? 這就是為甚麼我們嘗試讓介面能夠簡潔卻保留以下的重要功能:","home.features.simpleInterface.description.1":"應用程序和擴展程序設置","home.features.simpleInterface.description.2":"狀態管理","home.features.simpleInterface.description.3":"按類別排序","home.features.quickSupport.heading":"快速的客服","home.features.quickSupport.description":"一些奇怪的事情發生了，給你一堆錯誤信息或單純只是無法運作? 我們在Discord伺服器將給予你協助，我們同時還創立了獨特的協助系統，它將保證你的問題能盡快解決。","home.features.quickSupport.button":"加入我們的 Discord 服務器","home.languageSelector.tippy":"網頁語言","jobs.modal.title":"申請 {0}","jobs.modal.step":"步驟 {0}/2","jobs.modal.buttons.next":"下一個","jobs.modal.buttons.join":"加入","jobs.modal.buttons.cancel":"取消","jobs.modal.error":"請填寫所有的欄位","jobs.modal.notice":"PreMiD是一個開源項目，這意味著我們是一個非營利團隊，每筆捐款或贊助資金都將回饋到產品中。 通過在PreMiD申請工作職位，您承認您在團隊中擔任志願人員，因此您不會獲得工作報酬。","jobs.guild.required":"加入我們的 Discord 服務器","jobs.guild.explanation":"為了能夠申請，您必須加入我們的Discord服務器。 否則，如果您最終被選中，我們將無法與您聯絡！","jobs.header.title":"爲我們工作","jobs.header.description":"您準備好幫助最大的Rich-Presence庫嗎？","jobs.openings.title":"職位空缺","jobs.benefits.title":"高級福利","jobs.benefit1.title":"跟我們見面","jobs.benefit1.description":"與PreMiD背後的人員聯繫。","jobs.benefit2.title":"潛行看看","jobs.benefit2.description":"看看我們的開發和營銷。","jobs.benefit3.title":"榮譽","jobs.benefit3.description":"強大的Discord權限和豐富多彩的用戶組。","jobs.benefit4.title":"支持 PreMiD","jobs.benefit4.description":"通過您的貢獻，我們才可以成功經營此項目。","jobs.benefit5.title":"彈性工時","jobs.benefit5.description":"不用急. 這是自願工作.","jobs.benefit6.title":"搶先體驗","jobs.benefit6.description":"能夠在其他任何人之前測試新功能。","jobs.success.applied":"感謝您的申請!","jobs.errors.alreadyApplied":"你之前已經申請過了!","maintenance.big":"唉呀 糟糕!","maintenance.heading":"非常抱歉我們目前正遇到技術問題. 我們很快會回來. 非常抱歉帶來困擾.","maintenance.heading2":"請稍後返回以獲取更多信息.","maintenance.message":"在我們的特殊開發人員解決此問題之前, 請隨時到這裡看看！","maintenance.statuspage":"狀態頁面","maintenance.discordserver":"Discod服務器","merch.title":"歡迎來到** PreMiD **官方周邊商店！","merch.swag":"尋找你的**Swag**","merch.cart":"加入購物車","merch.help":"在訂單中遇到問題？聯絡我們的{0}客戶服務{1}","merch.item.added":"購物車 ({0})","merch.error.noitem":"購物車內沒有任何物品","partners.header.title":"合作夥伴","partners.header.description":"加入我們家族，並獲取一些只有合作夥伴才能擁有的好處，以炫耀您貢獻量。","partners.slideshow.description":"以下的人/公司為我們貢獻了很多","partners.why.title":"為我們貢獻一下 何樂而不為？","partners.why.benefit1.title":"你專屬的 presence","partners.why.benefit1.description":"我們的團隊將為您的服務創建一個 Presence","partners.why.benefit2.title":"成為已驗證的用户吧","partners.why.benefit2.description":"在我們的Discord服務器中，您將獲得特殊的用户组和榮譽。","partners.why.benefit3.title":"你將會在贊助人員榜上有名","partners.why.benefit3.description":"當有人訪問您的網站時會自動下載和​​啟用您的狀態。","partners.why.benefit4.title":"永久性","partners.why.benefit4.description":"属于我們合作夥伴的一個專屬地方","partners.why.benefit5.title":"成為大人物","partners.why.benefit5.description":"刊登在我們的社交媒體上。","partners.requirements.title":"前置需求","partners.requirements.first.title":"我們需要什麼？","partners.requirements.first.description":"我們時刻關注不斷增長的社區和互聯網上令人興奮的事物。 TL; DR，您應該使用PreMiD，並準備將其傳播到更多的互聯網狂人們。 對該計劃的接受是非常定性的，並且從一個候選人到下一個候選人都會有所不同。","partners.requirements.second.title":"我們的防火牆","partners.requirements.second.description":"我們目前正在為合作計劃作準備。任何人都有潛質。 Twitch應至少有500個關注者和至少10個觀眾。 您必須每周至少直播1次。","partners.apply.button":"立即申請吧！","partners.apply.disclaimer":"讓我們一起合作","partners.apply.jobs":"如果您對PreMiD的工作很感興趣，請查看我們的**聘請廣告**。","partners.sponsors.title":"贊助者","partners.sponsors.description":"沒有這些出色的人，PreMiD是不可能成功的。","partners.partner.aniFlix":"那就是你看動漫的方式。","partners.partner.arenaOfKings":"Arena of Kings是一款新時代，具有快節奏，以及可以在瀏覽器中遊玩的PvP競技場遊戲。","partners.partner.upBeat":"UpBeat是一家非營利性國際廣播公司，致力於提供不間斷地優質的廣播和新聞娛樂。","partners.partner.simLiveRadio":"SimLiveRadio是德國，奧地利和瑞士最成功的模擬遊戲信息的娛樂廣播！","partners.partner.discordTemplates":"使用我們超棒的模板来創建您自己的社區,建立您自己的王國.","partners.partner.taigaBot":"taiga是一個Discord 機器人,它盡量一次提供所有你可能需要的功能.","partners.partner.bitRock":"一個功能強大且易於使用的跨平台安裝程序創建工具。","partners.partner.statusPage":"輕鬆將實時狀態傳達給用戶。","partners.partner.erisly":"一個好玩的Discord Bot機器人!","partners.partner.reyfm":"REYFM讓您免費收聽高達十五種的音樂 - 不間斷。只為您提供最好的和最新的音樂!","partners.partner.crowdin":"針對科技公司實現敏捷本地化。","partners.partner.wikijs":"最強大和可擴展的開源Wiki軟件。","partners.partner.packageCloud":"為您所有的工件提供一個統一友好的界面。","partners.partner.fastly":"最棒網站的背後","partners.partner.onlyhit":"OnlyHit是您的音樂電台，24小時不間斷播放您最喜愛的歌曲，讓您第一時間發現未來的熱門歌曲。","partners.apply.title":"申請為合作夥伴","partners.apply.loggedUser":"以 {0} 登入","partners.apply.notYou":"不是你嗎？","partners.apply.select.default":"請選擇其中一個","partners.apply.select.website":"網站","partners.apply.select.other":"其它","partners.apply.form.name":"名稱","partners.apply.form.name.placeholder":"例子: PreMiD","partners.apply.form.link":"連結","partners.apply.form.link.placeholder":"例子: https://premid.app","partners.apply.form.description":"描述:(最多150個字符)","partners.apply.form.description.placeholder":"特點説明","partners.apply.form.imageLink":"圖片鏈接:(550*300, 只允許PNG)","partners.apply.form.imageLink.placeholder":"例子: https://i.imgur.com/clun1ID.png","partners.apply.form.button.close":"關閉","partners.apply.form.button.apply":"確定","partners.apply.success":"感謝您的申請!","partners.apply.error1":"請填寫所有的欄位.","partners.apply.error2":"最多150個字符的描述。","partners.apply.error3":"請添加鏈接(必須以https://開頭及以.png結尾)","partners.apply.error4":"您已經多於一次申請合作夥伴","presence.page.buttons.sourceCode":"源碼","presence.sections.description.title":"說明","presence.sections.changelog.title":"更新項目","presence.sections.information.title":"資訊","presence.sections.information.author":"作者","presence.sections.information.version":"版本","presence.sections.information.likes":"讚","presence.sections.information.users":"用戶","presence.sections.information.tags":"標籤","presence.sections.information.supportedurls":"支援的URL","presence.sections.information.contributors":"貢獻者","report.title":"報告錯誤","report.os":"選擇您操作的系統或裝置","report.button":"回報","report.error":"需要更多信息","report.error.unauth":"Discord帳號需要被驗證","report.activebugs":"已知的錯誤","store.message.error":"擴充程式尚未連接","store.cards.creator":"作者","store.cards.popular":"這個Presence非常受我們用戶歡迎","store.cards.partner":"合作的Presence","store.cards.extraStepsRequired":"這個 Presence 需要額外的步驟才能運作，請查看其頁面以獲取更多信息。","store.header.search":"搜尋 Presence","store.card.presence.add":"新增 Presence","store.card.presence.remove":"移除 Presence","store.card.presence.included":"瀏覽有關網站時，這個 Presence 會自動啟用。","store.category.filters.heading":"篩選器","store.category.filters.mostUsed":"按熱門排序","store.category.filters.allowAdult":"顯示 NSFW","store.category.filters.likedOnly":"只顯示已讚好的 Presences","store.filters.added":"顯示已新增的 Presences","store.category.heading":"類別","store.category.all":"全部","store.category.games":"遊戲","store.category.music":"音樂","store.category.socials":"社交","store.category.videos":"視訊串流","store.category.other":"其它","store.search":"搜尋","store.search.filters":"Enter","store.search.removeFilter":"點選以移除篩選器。","user.roles.presenceDeveloper":"Presence 開發者","user.roles.presenceVerifier":"Presence 審核人員","user.importantPresenceDev.message1":" Presence主要開發者","user.importantPresenceDev.message2":"已創建 {0} 個 Presence","user.geniusPresenceDev.message1":"活躍的 Presence 開發者","user.geniusPresenceDev.message2":"創建了超過100個狀態","user.presences.contributed":"按這裏顯示該用戶有參與製作的 presences"}')
    }],
    [
        [205, 50, 5, 51]
    ]
]);