(window.webpackJsonp = window.webpackJsonp || []).push([
    [38], {
        325: function(t, n, e) {
            "use strict";
            var o = e(3),
                r = e(75).find,
                l = e(127),
                d = "find",
                c = !0;
            d in [] && Array(1).find((function() {
                c = !1
            })), o({
                target: "Array",
                proto: !0,
                forced: c
            }, {
                find: function(t) {
                    return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), l(d)
        },
        554: function(t, n, e) {
            var content = e(576);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(74).default)("613b92b4", content, !0, {
                sourceMap: !1
            })
        },
        573: function(t, n, e) {
            "use strict";
            var o = e(3),
                r = e(56),
                l = e(574),
                d = e(196),
                c = e(6),
                w = 1..toFixed,
                f = Math.floor,
                _ = function(t, n, e) {
                    return 0 === n ? e : n % 2 == 1 ? _(t, n - 1, e * t) : _(t * t, n / 2, e)
                },
                h = function(data, t, n) {
                    for (var e = -1, o = n; ++e < 6;) o += t * data[e], data[e] = o % 1e7, o = f(o / 1e7)
                },
                v = function(data, t) {
                    for (var n = 6, e = 0; --n >= 0;) e += data[n], data[n] = f(e / t), e = e % t * 1e7
                },
                m = function(data) {
                    for (var t = 6, s = ""; --t >= 0;)
                        if ("" !== s || 0 === t || 0 !== data[t]) {
                            var n = String(data[t]);
                            s = "" === s ? n : s + d.call("0", 7 - n.length) + n
                        }
                    return s
                };
            o({
                target: "Number",
                proto: !0,
                forced: w && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !c((function() {
                    w.call({})
                }))
            }, {
                toFixed: function(t) {
                    var n, e, o, c, w = l(this),
                        f = r(t),
                        data = [0, 0, 0, 0, 0, 0],
                        x = "",
                        C = "0";
                    if (f < 0 || f > 20) throw RangeError("Incorrect fraction digits");
                    if (w != w) return "NaN";
                    if (w <= -1e21 || w >= 1e21) return String(w);
                    if (w < 0 && (x = "-", w = -w), w > 1e-21)
                        if (e = (n = function(t) {
                                for (var n = 0, e = t; e >= 4096;) n += 12, e /= 4096;
                                for (; e >= 2;) n += 1, e /= 2;
                                return n
                            }(w * _(2, 69, 1)) - 69) < 0 ? w * _(2, -n, 1) : w / _(2, n, 1), e *= 4503599627370496, (n = 52 - n) > 0) {
                            for (h(data, 0, e), o = f; o >= 7;) h(data, 1e7, 0), o -= 7;
                            for (h(data, _(10, o, 1), 0), o = n - 1; o >= 23;) v(data, 1 << 23), o -= 23;
                            v(data, 1 << o), h(data, 1, 1), v(data, 2), C = m(data)
                        } else h(data, 0, e), h(data, 1 << -n, 0), C = m(data) + d.call("0", f);
                    return C = f > 0 ? x + ((c = C.length) <= f ? "0." + d.call("0", f - c) + C : C.slice(0, c - f) + "." + C.slice(c - f)) : x + C
                }
            })
        },
        574: function(t, n, e) {
            var o = e(51);
            t.exports = function(t) {
                if ("number" != typeof t && "Number" != o(t)) throw TypeError("Incorrect invocation");
                return +t
            }
        },
        575: function(t, n, e) {
            "use strict";
            e(554)
        },
        576: function(t, n, e) {
            var o = e(73)(!1);
            o.push([t.i, ".highlight[data-v-df5d8454]:after{opacity:1!important}.show-beta[data-v-df5d8454]{text-align:center}.show-beta p[data-v-df5d8454]{line-height:0}.show-beta i[data-v-df5d8454]{font-size:2rem;margin-top:4px;transition:opacity .2s ease-in-out;cursor:pointer}.show-beta i[data-v-df5d8454]:hover{opacity:.75}.button-container[data-v-df5d8454]{text-align:center}.button-container p[data-v-df5d8454]{margin-top:0}.login[data-v-df5d8454]{padding:.55em 3em}#beta-downloads .nobeta[data-v-df5d8454]{flex-direction:column;text-align:center}#beta-downloads .nobeta h1[data-v-df5d8454]{margin:0}#beta-downloads .card__content h3[data-v-df5d8454]{margin-bottom:0;text-transform:capitalize}#beta-downloads .card__content p[data-v-df5d8454]{margin-top:0;color:#c3c3c3;text-transform:uppercase;font-size:.75rem}", ""]), t.exports = o
        },
        636: function(t, n, e) {
            "use strict";
            e.r(n);
            var o = e(2),
                r = (e(33), e(22), e(325), e(573), e(35), e(50), e(197), e(16), e(55), e(28), e(15), e(128), e(49), e(43), e(44), e(23), {
                    name: "Downloads",
                    auth: !1,
                    asyncData: function(t) {
                        return Object(o.a)(regeneratorRuntime.mark((function n() {
                            var e, o, r, l, d, c, data, w, f;
                            return regeneratorRuntime.wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return e = t.$auth, o = t.app, r = t.error, n.prev = 1, l = !1, d = {}, c = {}, n.next = 5, o.$graphql("\n\t\t\t\t\t{\n\t\t\t\t\t\tbetaUsers {\n\t\t\t\t\t\t\tnumber\n\t\t\t\t\t\t}\n\t\t\t\t\t\tdiscordUsers {\n\t\t\t\t\t\t\tuserId\n\t\t\t\t\t\t}\n\t\t\t\t\t\tversions {\n\t\t\t\t\t\t\tapp\n\t\t\t\t\t\t\textension\n\t\t\t\t\t\t\tlinux\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t");
                                    case 5:
                                        if (data = n.sent, !e.loggedIn) {
                                            n.next = 14;
                                            break
                                        }
                                        return n.next = 9, o.$graphql('\n\t\t\t\t\t{\n\t\t\t\t\t\tdownloads(token: "'.concat(e.$storage._state["_token.discord"], '") {\n\t\t\t\t\t\t\treleaseType\n\t\t\t\t\t\t\tappLinks\n\t\t\t\t\t\t\textLinks {\n\t\t\t\t\t\t\t\tplatform\n\t\t\t\t\t\t\t\tlink\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t'));
                                    case 9:
                                        w = n.sent, f = w.downloads, (l = f.length > 0) && f.forEach((function(t) {
                                            d[t.releaseType] = t
                                        })), c = f.find((function(t) {
                                            return "alpha" == t.releaseType
                                        })) ? f.find((function(t) {
                                            return "alpha" == t.releaseType
                                        })) : f.find((function(t) {
                                            return "beta" == t.releaseType
                                        }));
                                    case 14:
                                        return n.abrupt("return", {
                                            extVersion: data.versions.extension,
                                            appVersion: data.versions.app,
                                            linuxVersion: data.versions.linux,
                                            userAccess: l,
                                            extraDownloads: d,
                                            currentTab: c,
                                            betaUsers: data.betaUsers.number,
                                            availableSlots: (.1 * data.discordUsers.length).toFixed()
                                        });
                                    case 17:
                                        return n.prev = 17, n.t0 = n.catch(1), n.abrupt("return", r(n.t0));
                                    case 20:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [1, 17]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            skipAds: !1,
                            showBeta: !1,
                            extVersion: null,
                            appVersion: null,
                            linuxVersion: null,
                            cardHover: !1,
                            modalAvailable: !1,
                            platforms: [],
                            isChrome: !0,
                            browser: {
                                name: "Chrome",
                                key: "chrome",
                                warning: !1
                            },
                            warning: {
                                number: null,
                                messageKey: null
                            },
                            platform_order: ["windows", "apple", "linux"],
                            builds: {
                                windows: {
                                    os_name: "Windows",
                                    has_installer: !0
                                },
                                apple: {
                                    os_name: "macOS",
                                    has_installer: !0
                                },
                                linux: {
                                    os_name: "Linux",
                                    warning: !0,
                                    has_installer: !0
                                }
                            },
                            isMobile: !1,
                            showDownloads: !0
                        }
                    },
                    mounted: function() {
                        var t = this,
                            n = "";
                        this.$auth.$storage.setUniversal("redirect", "/downloads#beta-downloads"), n = navigator.userAgent, this.isChrome = !(!window.chrome || !window.chrome.webstore && !window.chrome.runtime), this.isChrome || -1 === n.indexOf("Safari") || -1 !== n.indexOf("Chrome") ? this.isChrome && -1 !== n.indexOf("Edg") ? this.browser = {
                            name: "Edge",
                            key: "edge",
                            icon: "edge",
                            warning: !1
                        } : this.isChrome && -1 !== n.indexOf("Vivaldi") ? this.browser = {
                            name: "Vivaldi",
                            key: "chrome",
                            icon: "chrome",
                            warning: !1
                        } : window.opr && opr.addons || window.opera || n.indexOf(" OPR/") >= 0 ? this.browser = {
                            name: "Opera",
                            key: "chrome",
                            icon: "opera",
                            warning: 2
                        } : "undefined" != typeof InstallTrigger ? (this.isChrome = !1, this.browser = {
                            name: "Firefox",
                            key: "firefox",
                            icon: null,
                            warning: !1
                        }) : this.browser = {
                            name: "Chrome",
                            key: "chrome",
                            icon: "chrome",
                            warning: !1
                        } : this.browser = {
                            name: "Safari",
                            key: "safari",
                            icon: "safari",
                            warning: !1
                        };
                        var e = "linux",
                            o = this.platform_order;
                        (n.includes("OS X") || n.includes("Mac")) && (e = "apple"), n.includes("Windows") && (e = "windows"), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n) && (this.isMobile = !0, this.showDownloads = !1), o.splice(o.indexOf(e), 1), o.splice(1, 0, e), ["#app-downloads", "#ext-downloads", "#beta-downloads"].includes(window.location.hash) && this.highlight("".concat(["#app-downloads", "#ext-downloads", "#beta-downloads"].filter((function(i) {
                            return i.includes(window.location.hash)
                        }))[0], " .section-header")), setTimeout((function() {
                            return t.modalAvailable = !0
                        })), this.$anime({
                            targets: "#bv",
                            scale: [1, 1.1],
                            delay: 500,
                            direction: "alternate",
                            easing: "easeInBounce",
                            loop: !0
                        })
                    },
                    methods: {
                        changeTab: function() {
                            if (this.userAccess)
                                if ("beta" == this.currentTab.releaseType) {
                                    if (!Object.keys(this.extraDownloads).find((function(t) {
                                            return "alpha" == t
                                        }))) return;
                                    this.currentTab = this.extraDownloads.alpha
                                } else this.currentTab = this.extraDownloads.beta
                        },
                        highlight: function(t) {
                            var element = document.querySelector(t);
                            element && (setTimeout((function() {
                                return element.classList.add("highlight")
                            })), setTimeout((function() {
                                return element.classList.remove("highlight")
                            }), 1e3))
                        },
                        linkify: function(t, n) {
                            return t.match(/(\*\*.*?\*\*)/g) ? t.match(/(\*\*.*?\*\*)/g).map((function(e) {
                                return t.replace(e, '<a class="text-highlight" href="'.concat(n || "/beta", '">').concat(e.slice(2, e.length - 2), "</a>"))
                            }))[0] : t
                        },
                        warn: function(t) {
                            switch (t) {
                                case 2:
                                    this.warning.messageKey = "downloads.warning.message.opera";
                                    break;
                                default:
                                    this.warning.messageKey = "Unknown error."
                            }
                            this.$modal.show("warning")
                        },
                        open: function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                            "linux" != t ? (this.$store.commit("download/setDL", {
                                platform: t,
                                type: n
                            }), this.$nuxt.setLayout("skipAds")) : this.openInNewTab("https://github.com/PreMiD/Linux/blob/master/README.md")
                        },
                        openInNewTab: function(t) {
                            window.open(t, "_blank")
                        }
                    },
                    head: {
                        title: "Downloads"
                    }
                }),
                l = (e(575), e(9)),
                component = Object(l.a)(r, (function() {
                    var t = this,
                        n = t.$createElement,
                        e = t._self._c || n;
                    return e("div", {
                        staticClass: "dl-container"
                    }, [e("div", {
                        staticClass: "dl-container__section dl-container__section_header pattern"
                    }, [e("div", {
                        staticClass: "dl-container__header"
                    }, [e("div", {
                        staticClass: "header__content"
                    }, [e("h1", [t._v(t._s(t.$t("downloads.header.title")))]), t._v(" "), e("p", [t._v(t._s(t.$t("downloads.header.subtitle")))])]), t._v(" "), e("div", {
                        staticClass: "header__steps"
                    }, [e("h2", [t._v(t._s(t.$t("downloads.instructions.heading")))]), t._v(" "), e("ol", [e("li", [e("p", [t._v("\n\t\t\t\t\t\t\t" + t._s(t.$t("downloads.instructions.step.1")) + "\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t"), e("a", {
                        attrs: {
                            href: "#app-downloads"
                        },
                        on: {
                            click: function(n) {
                                return t.highlight("#app-downloads .section-header")
                            }
                        }
                    }, [e("i", {
                        staticClass: "fa-arrow-down fas"
                    })]), t._v("\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t")])]), t._v(" "), e("li", [e("p", [t._v(t._s(t.$t("downloads.instructions.step.2")))])]), t._v(" "), e("li", [e("p", [t._v("\n\t\t\t\t\t\t\t" + t._s(t.$t("downloads.instructions.step.3")) + "\n\t\t\t\t\t\t\t[\n\t\t\t\t\t\t\t"), e("a", {
                        attrs: {
                            href: "#ext-downloads"
                        },
                        on: {
                            click: function(n) {
                                return t.highlight("#ext-downloads .section-header")
                            }
                        }
                    }, [e("i", {
                        staticClass: "fa-arrow-down fas"
                    })]), t._v("\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t")])])])])]), t._v(" "), e("div", {
                        staticClass: "waves-divider waves-divider_bottom"
                    }, [e("svg", {
                        staticClass: "wave",
                        attrs: {
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 100",
                            preserveAspectRatio: "none"
                        }
                    }, [e("path", {
                        staticClass: "wave-animation",
                        attrs: {
                            d: "M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z",
                            fill: "currentColor"
                        }
                    })])])]), t._v(" "), e("transition", {
                        attrs: {
                            name: "card-animation",
                            mode: "out-in"
                        }
                    }, [t.isMobile ? e("div", {
                        staticClass: "dl-container__section dl-container__mobile-warning waves-aligned"
                    }, [t._v("\n\t\t\t" + t._s(t.$t("downloads.mobile.errorMessage")) + "\n\t\t")]) : t._e()]), t._v(" "), e("transition", {
                        attrs: {
                            name: "card-animation",
                            mode: "out-in"
                        }
                    }, [t.showDownloads ? e("div", [e("div", {
                        staticClass: "dl-container__section dl-container__section_downloads waves-aligned",
                        attrs: {
                            id: "app-downloads"
                        }
                    }, [e("h1", {
                        staticClass: "section-header"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("downloads.appdownloading.header")) + "\n\t\t\t\t\t"), "linux" == t.platform_order[1] ? e("a", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: t.$t("downloads.warning.differentVersion2", {
                                    0: t.appVersion
                                })
                            },
                            expression: "{\n\t\t\t\t\t\t\tcontent: $t('downloads.warning.differentVersion2', {\n\t\t\t\t\t\t\t\t0: appVersion\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t}"
                        }],
                        staticClass: "label label_downloads-version linux",
                        attrs: {
                            href: "https://github.com/PreMiD/Linux/releases",
                            target: "_blank"
                        },
                        domProps: {
                            textContent: t._s(t.linuxVersion)
                        }
                    }) : e("a", {
                        staticClass: "label label_downloads-version",
                        attrs: {
                            href: "https://github.com/PreMiD/PreMiD/releases",
                            target: "_blank"
                        },
                        domProps: {
                            textContent: t._s(t.appVersion)
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "dl-container__cards"
                    }, t._l(t.platform_order, (function(n, o) {
                        return e("div", {
                            key: n
                        }, [e("div", {
                            on: {
                                click: function(e) {
                                    return t.open(n, "Application")
                                }
                            }
                        }, [e("div", {
                            staticClass: "cards__card clickable",
                            class: {
                                "current-platform": 1 == o
                            }
                        }, [e("div", {
                            staticClass: "card__icon"
                        }, [e("i", {
                            class: "fab fa-" + n
                        })]), t._v(" "), e("div", {
                            staticClass: "card__content"
                        }, [e("h3", [t._v("\n\t\t\t\t\t\t\t\t\t\t" + t._s(t.builds[n].os_name) + "\n\t\t\t\t\t\t\t\t\t\t"), t.builds[n].has_installer ? t._e() : e("i", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy"
                            }],
                            staticClass: "fa-exclamation-circle fas platform-warning",
                            attrs: {
                                content: t.$t("downloads.tooltips.os.not.supported.part2", {
                                    0: "<b>" + t.$t("downloads.tooltips.os.not.supported.part1") + "</b> "
                                })
                            }
                        }), t._v(" "), "linux" != t.platform_order[1] && "Linux" == t.builds[n].os_name && t.builds[n].warning ? e("i", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy",
                                value: {
                                    content: t.$t("downloads.warning.differentVersion", {
                                        0: t.linuxVersion
                                    })
                                },
                                expression: "{\n\t\t\t\t\t\t\t\t\t\t\t\tcontent: $t('downloads.warning.differentVersion', {\n\t\t\t\t\t\t\t\t\t\t\t\t\t0: linuxVersion\n\t\t\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t\t\t}"
                            }],
                            staticClass: "fa-question-circle fas platform-warning linux"
                        }) : t._e()])])])])])
                    })), 0)]), t._v(" "), e("div", {
                        staticClass: "dl-container__section dl-container__section_downloads",
                        attrs: {
                            id: "ext-downloads"
                        }
                    }, [e("h1", {
                        staticClass: "section-header"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("downloads.extdownloading.header")) + "\n\t\t\t\t\t"), e("a", {
                        staticClass: "label label_downloads-version",
                        attrs: {
                            href: "https://github.com/PreMiD/Extension",
                            target: "_blank"
                        },
                        domProps: {
                            textContent: t._s(t.extVersion)
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "dl-container__cards"
                    }, [e("div", {
                        staticClass: "cards__card clickable",
                        class: {
                            "current-platform": "chrome" == t.browser.key || "edge" == t.browser.key
                        },
                        on: {
                            click: function(n) {
                                t.browser.warning ? t.warn(t.browser.warning) : t.open(t.browser.key, "Extension")
                            }
                        }
                    }, [e("div", {
                        staticClass: "card__icon"
                    }, [e("i", {
                        class: "fa-" + (t.isChrome ? t.browser.icon : "chrome") + " fab"
                    })]), t._v(" "), e("div", {
                        staticClass: "card__content"
                    }, [e("h3", [t._v(t._s(t.isChrome ? t.browser.name : "Chrome"))])])]), t._v(" "), e("a", {
                        staticClass: "cards__card clickable",
                        class: {
                            "current-platform": "firefox" == t.browser.key
                        },
                        on: {
                            click: function(n) {
                                return t.open("firefox", "Extension")
                            }
                        }
                    }, [e("div", {
                        staticClass: "card__icon"
                    }, [e("i", {
                        staticClass: "fa-firefox fab"
                    })]), t._v(" "), e("div", {
                        staticClass: "card__content"
                    }, [e("h3", [t._v("Firefox")])])]), t._v(" "), e("a", {
                        staticClass: "cards__card clickable",
                        class: {
                            "current-platform": "safari" == t.browser.key
                        },
                        on: {
                            click: function(n) {
                                return t.open("safari", "Extension")
                            }
                        }
                    }, [e("div", {
                        staticClass: "card__icon"
                    }, [e("i", {
                        staticClass: "fa-safari fab"
                    })]), t._v(" "), e("div", {
                        staticClass: "card__content"
                    }, [e("h3", [t._v("Safari")])])])])]), t._v(" "), t.showBeta ? e("div", {
                        staticClass: "dl-container__section dl-container__section_downloads waves-aligned",
                        attrs: {
                            id: "beta-downloads"
                        }
                    }, [e("h1", {
                        staticClass: "section-header"
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("downloads.latest.header")) + "\n\t\t\t\t\t"), t.$auth.loggedIn && t.userAccess ? e("a", {
                        staticClass: "label label_downloads-version bv",
                        domProps: {
                            textContent: t._s(t.currentTab.releaseType)
                        },
                        on: {
                            click: t.changeTab
                        }
                    }) : t._e()]), t._v(" "), t.$auth.loggedIn ? e("div", [1 == t.userAccess ? e("div", [e("div", {
                        staticClass: "dl-container__cards"
                    }, t._l(t.currentTab.appLinks, (function(n, o) {
                        return e("div", {
                            key: n.platform.toString()
                        }, [e("div", {
                            on: {
                                click: function(e) {
                                    return t.openInNewTab(n.link)
                                }
                            }
                        }, [e("div", {
                            staticClass: "cards__card clickable",
                            class: {
                                "current-platform": 1 == o
                            }
                        }, [e("div", {
                            staticClass: "card__icon"
                        }, [e("i", {
                            class: "fab fa-" + n.platform.toLowerCase()
                        })]), t._v(" "), e("div", {
                            staticClass: "card__content"
                        }, [e("h3", {
                            domProps: {
                                textContent: t._s(n.platform)
                            }
                        }), t._v(" "), e("p", {
                            directives: [{
                                name: "t",
                                rawName: "v-t",
                                value: t.currentTab.releaseType,
                                expression: "currentTab.releaseType"
                            }]
                        })])])])])
                    })), 0), t._v(" "), e("div", {
                        staticClass: "dl-container__cards"
                    }, t._l(t.currentTab.extLinks, (function(n) {
                        return e("div", {
                            key: n.platform.toString(),
                            staticClass: "cards__card clickable",
                            class: {
                                "current-platform": t.browser.key.replace("chrome", "chromium") == n.platform.toString().toLowerCase()
                            },
                            on: {
                                click: function(e) {
                                    return t.openInNewTab(n.link)
                                }
                            }
                        }, [e("div", {
                            staticClass: "card__icon"
                        }, [e("i", {
                            class: "fab fa-" + ("Chromium" == n.platform.toString() ? "chrome" : n.platform.toString().toLowerCase())
                        })]), t._v(" "), e("div", {
                            staticClass: "card__content"
                        }, [e("h3", {
                            directives: [{
                                name: "t",
                                rawName: "v-t",
                                value: n.platform,
                                expression: "platform.platform"
                            }]
                        }), t._v(" "), e("p", {
                            directives: [{
                                name: "t",
                                rawName: "v-t",
                                value: t.currentTab.releaseType,
                                expression: "currentTab.releaseType"
                            }]
                        })])])
                    })), 0)]) : e("div", {
                        staticClass: "dl-container__cards nobeta"
                    }, [e("h1", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "downloads.error.noaccess.title",
                            expression: "'downloads.error.noaccess.title'"
                        }]
                    }), t._v(" "), t.betaUsers < t.availableSlots ? e("p", {
                        domProps: {
                            innerHTML: t._s(t.linkify(t.$t("downloads.error.noaccess.description", {
                                0: t.availableSlots - t.betaUsers
                            })))
                        }
                    }) : e("p", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "error.noslots",
                            expression: "'error.noslots'"
                        }]
                    })])]) : e("div", {
                        staticClass: "dl-container__cards"
                    }, [e("div", {
                        staticClass: "button-container"
                    }, [e("p", {
                        directives: [{
                            name: "t",
                            rawName: "v-t",
                            value: "downloads.error.login",
                            expression: "'downloads.error.login'"
                        }]
                    }), t._v(" "), e("button", {
                        staticClass: "button login",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: function(n) {
                                return t.$router.push("/login")
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t\t\t" + t._s(t.$t("downloads.button.login")) + "\n\t\t\t\t\t\t")])])])]) : e("div", {
                        staticClass: "show-beta"
                    }, [e("div", [e("p", [t._v(t._s(t.$t("downloads.showbeta.message")))]), t._v(" "), e("small", [t._v(t._s(t.$t("downloads.showbeta.small")))])]), t._v(" "), e("i", {
                        staticClass: "fas fa-chevron-down",
                        on: {
                            click: function(n) {
                                t.showBeta = !0
                            }
                        }
                    })])]) : t._e()]), t._v(" "), e("transition", {
                        attrs: {
                            name: "card-animation",
                            mode: "out-in"
                        }
                    }, [t.isMobile ? e("div", {
                        staticClass: "dl-container__showDownloads"
                    }, [e("span", {
                        on: {
                            click: function(n) {
                                t.showDownloads = !t.showDownloads
                            }
                        }
                    }, [t._v("\n\t\t\t\t" + t._s(t.showDownloads ? t.$t("downloads.mobile.hideDownloads") : t.$t("downloads.mobile.showDownloads")) + "\n\t\t\t")])]) : t._e()]), t._v(" "), t.modalAvailable ? e("modal", {
                        attrs: {
                            classes: "modal",
                            width: "400px",
                            height: "auto",
                            name: "warning"
                        }
                    }, [e("div", {
                        staticClass: "title"
                    }, [t._v(t._s(t.$t("downloads.warning.title")))]), t._v(" "), e("div", {
                        staticClass: "message"
                    }, [e("p", {
                        domProps: {
                            innerHTML: t._s(t.linkify(t.$t(t.warning.messageKey), "https://addons.opera.com/en/extensions/details/install-chrome-extensions/"))
                        }
                    })]), t._v(" "), e("div", {
                        staticClass: "buttons"
                    }, [e("div", {
                        staticClass: "container"
                    }, [e("button", {
                        staticClass: "button btn cancel",
                        on: {
                            click: function(n) {
                                return t.$modal.hide("warning")
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("downloads.button.cancel")) + "\n\t\t\t\t")]), t._v(" "), e("button", {
                        staticClass: "button btn accept",
                        on: {
                            click: function(n) {
                                return t.open("chrome", "Extension")
                            }
                        }
                    }, [t._v("\n\t\t\t\t\t" + t._s(t.$t("downloads.button.okay")) + "\n\t\t\t\t")])])])]) : t._e()], 1)
                }), [], !1, null, "df5d8454", null);
            n.default = component.exports
        }
    }
]);