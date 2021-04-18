(window.webpackJsonp = window.webpackJsonp || []).push([
    [39], {
        496: function(t, e, r) {
            t.exports = r.p + "videos/card2_video.eca5c6b.mp4"
        },
        497: function(t, e, r) {
            t.exports = r.p + "img/card2.26584f5.png"
        },
        498: function(t, e, r) {
            t.exports = r.p + "img/pmd_logo.b8ef98c.png"
        },
        614: function(t, e, r) {
            t.exports = r.p + "img/logo-wordmark-blue.dea9c6a.png"
        },
        615: function(t, e, r) {
            t.exports = r.p + "img/search.011a4d0.png"
        },
        616: function(t, e, r) {
            var n = r(10),
                o = r(19),
                c = r(94),
                l = r(95).UNSUPPORTED_Y;
            n && ("g" != /./g.flags || l) && o.f(RegExp.prototype, "flags", {
                configurable: !0,
                get: c
            })
        },
        617: function(t, e, r) {
            "use strict";
            var n = r(3),
                o = r(618).start;
            n({
                target: "String",
                proto: !0,
                forced: r(619)
            }, {
                padStart: function(t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        618: function(t, e, r) {
            var n = r(25),
                o = r(196),
                c = r(24),
                l = Math.ceil,
                d = function(t) {
                    return function(e, r, d) {
                        var m, v, _ = String(c(e)),
                            f = _.length,
                            h = void 0 === d ? " " : String(d),
                            y = n(r);
                        return y <= f || "" == h ? _ : (m = y - f, (v = o.call(h, l(m / h.length))).length > m && (v = v.slice(0, m)), t ? _ + v : v + _)
                    }
                };
            t.exports = {
                start: d(!1),
                end: d(!0)
            }
        },
        619: function(t, e, r) {
            var n = r(77);
            t.exports = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)
        },
        620: function(t, e, r) {
            t.exports = r.p + "img/twitch.a1179c1.png"
        },
        621: function(t, e, r) {
            t.exports = r.p + "img/youtube.4da94eb.png"
        },
        622: function(t, e, r) {
            t.exports = r.p + "img/soundcloud.0c6e5e6.png"
        },
        623: function(t, e, r) {
            t.exports = r.p + "img/netflix.227bf10.png"
        },
        624: function(t, e, r) {
            t.exports = r.p + "img/youtube-music.bbcfdcd.png"
        },
        625: function(t, e, r) {
            t.exports = r.p + "img/steam.20d2f61.png"
        },
        626: function(t, e, r) {
            t.exports = r.p + "img/vlive.9d311e9.png"
        },
        627: function(t, e, r) {
            t.exports = r.p + "img/card1.08f5755.png"
        },
        628: function(t, e, r) {
            t.exports = r.p + "img/card3.495d535.png"
        },
        629: function(t, e, r) {
            t.exports = r.p + "img/card4.1ef9468.png"
        },
        648: function(t, e, r) {
            "use strict";
            r.r(e);
            var n = r(92),
                o = r(2),
                c = (r(197), r(22), r(27), r(616), r(195), r(617), r(7), r(60), r(44), r(55), r(15), r(54), r(128), r(49), r(43), r(23), r(33), r(620)),
                l = r.n(c),
                d = r(621),
                m = r.n(d),
                v = r(622),
                _ = r.n(v),
                f = r(623),
                h = r.n(f),
                y = r(624),
                C = r.n(y),
                w = r(498),
                x = r.n(w),
                S = r(625),
                I = r.n(S),
                $ = r(626),
                L = r.n($),
                E = r(627),
                N = r.n(E),
                M = r(497),
                T = r.n(M),
                O = r(628),
                k = r.n(O),
                H = r(629),
                D = r.n(H),
                P = r(194),
                z = {
                    name: "Home",
                    auth: !1,
                    asyncData: function(t) {
                        return Object(o.a)(regeneratorRuntime.mark((function e() {
                            var r, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return r = t.app, e.next = 3, r.$graphql("\n\t\t\t{\n\t\t\t\tversions {\n\t\t\t\t\textension\n\t\t\t\t}\n\t\t\t\tcredits(limit:2, random:true) {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tname\n\t\t\t\t\t\ttag\n\t\t\t\t\t\tavatar\n\t\t\t\t\t\tflags\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}");
                                    case 3:
                                        return n = e.sent, e.abrupt("return", {
                                            extVersion: n.versions.extension,
                                            users: n.credits
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    data: function() {
                        return {
                            extVersion: null,
                            cardThumbnail1: N.a,
                            cardThumbnail2: T.a,
                            cardThumbnail3: k.a,
                            cardThumbnail4: D.a,
                            presences_display: [],
                            presences: [{
                                service_title: "PreMiD",
                                serviceLogo: x.a,
                                smallImage: "search",
                                data: ["Store"],
                                presence_time: "00:12",
                                seconds: "500",
                                elapsed: !0
                            }, {
                                service_title: "YouTube",
                                serviceLogo: m.a,
                                smallImage: !0,
                                data: ["Noisestorm - Crab Rave [Monstercat Release]", "Monstercat: Instinct"],
                                seconds: "300",
                                presence_time: "01:36"
                            }, {
                                service_title: "SoundCloud",
                                serviceLogo: _.a,
                                smallImage: !0,
                                data: ["Dion Timmer - Panic", "Dion Timmer"],
                                seconds: "300",
                                presence_time: "02:15"
                            }, {
                                service_title: "Netflix",
                                serviceLogo: h.a,
                                smallImage: !0,
                                data: ["Daredevil", "S1:E1 Into the Ring"],
                                seconds: "1750",
                                presence_time: "22:15"
                            }, {
                                service_title: "YouTube Music",
                                serviceLogo: C.a,
                                smallImage: !0,
                                data: ["supercombo - Piloto Automático (Clipe Oficial)", "supercombo"],
                                seconds: "200",
                                presence_time: "00:26"
                            }, {
                                service_title: "Steam",
                                serviceLogo: I.a,
                                smallImage: !1,
                                data: ["Steam Store", "F1 2019"],
                                presence_time: "03:32",
                                seconds: "650",
                                elapsed: !0
                            }, {
                                service_title: "YouTube Music",
                                serviceLogo: C.a,
                                smallImage: !0,
                                data: ["Dance Monkey", "Tones and I - The Kids Are Coming (2019)"],
                                seconds: "210",
                                presence_time: "03:12"
                            }, {
                                service_title: "Twitch",
                                serviceLogo: l.a,
                                smallImage: !0,
                                data: ["PreMiD coding stream!", "alexbcberio"],
                                seconds: "2750",
                                presence_time: "49:12"
                            }, {
                                service_title: "V LIVE",
                                serviceLogo: L.a,
                                smallImage: !0,
                                data: ["[LOONA] Orbit! Thank you ❤️", "이달의 소녀(LOONA)"],
                                seconds: "600",
                                presence_time: "09:50"
                            }]
                        }
                    },
                    beforeMount: function() {
                        var t = this,
                            e = this.presences.length;
                        this.presences_display.push(this.presences.splice(Math.random() * e | 0, 1)[0], this.presences.splice(Math.random() * (e - 1) | 0, 1)[0]), this.presences_display.forEach((function(e, r) {
                            var n = t.presences_display[r];
                            n.profile = {
                                name: t.users[r].user.name,
                                discriminator: t.users[r].user.tag,
                                flags: t.users[r].user.flags || [],
                                avatar: t.users[r].user.avatar
                            }, n.profile.avatar.endsWith(".gif") && n.profile.flags.push("NITRO"), n.seconds = Math.floor(Math.random() * n.seconds) + 1;
                            var o = Math.floor(n.seconds / 60),
                                c = n.seconds - 60 * o;
                            n.presence_time = o.toString().padStart(2, "0") + ":" + c.toString().padStart(2, "0")
                        }))
                    },
                    mounted: function() {
                        var t = this;
                        [document.querySelector("#featuresHeading")].concat(Object(n.a)(document.querySelectorAll(".card--feature"))).forEach((function(e, i) {
                            var r = !1,
                                n = Object(P.default)({
                                    targets: e,
                                    opacity: [0, 1],
                                    translateX: [i % 2 ? 100 : -100, 0],
                                    duration: 1500,
                                    autoplay: !1
                                }),
                                o = t.$scrollmagic.scene({
                                    triggerElement: e,
                                    offset: 0,
                                    duration: 1e3
                                });
                            t.$scrollmagic.addScene(o), o.on("start", (function(t) {
                                r || (n.play(), r = !0)
                            }))
                        }))
                    },
                    created: function() {
                        var t = this,
                            e = setInterval((function() {
                                var r = !1;
                                t.presences_display.forEach((function(t, i) {
                                    if ("00:00" === t.presence_time || t.live) return r ? clearInterval(e) : r = !0;
                                    var n = t.presence_time.split(":")[0],
                                        o = t.presence_time.split(":")[1];
                                    if (t.elapsed) t.presence_time = "59" === o ? (parseInt(n) + 1).toString().padStart(2, "0") + ":00" : n + ":" + (parseInt(o) + 1).toString().padStart(2, "0");
                                    else {
                                        if ("00:00" === t.presence_time) return;
                                        "00" === o ? t.presence_time = (parseInt(n) - 1).toString().padStart(2, "0") + ":59" : "0" === o.split("")[1] ? t.presence_time = n + ":" + parseInt(o.split("")[0] - 1) + "9" : t.presence_time = n + ":" + (parseInt(o) - 1).toString().padStart(2, "0")
                                    }
                                }))
                            }), 1e3)
                    },
                    methods: {
                        appear: function() {
                            var t = this;
                            this.$anime.timeline({
                                duration: 1e3,
                                easing: "easeOutExpo",
                                opacity: [0, 1],
                                begin: function() {
                                    return t.$refs.mainDiv.classList.remove("invisible")
                                }
                            }).add({
                                targets: this.$refs.promoHeading,
                                translateX: ["-100%", 0]
                            }, 0).add({
                                targets: ".promo-container__heading *",
                                delay: this.$anime.stagger(50),
                                scale: [0, 1],
                                opacity: [0, 1]
                            }, 0).add({
                                targets: ".discord-usercard",
                                translateX: ["100%", 0],
                                delay: this.$anime.stagger(50),
                                opacity: [0, 1]
                            }, 0).add({
                                duration: 500,
                                targets: ".discord-usercard *",
                                delay: this.$anime.stagger(50),
                                scale: [0, 1],
                                opacity: [0, 1]
                            }, 0)
                        },
                        openInNewTab: function(t) {
                            window.open(t, "_blank").focus()
                        },
                        markdown: function(t) {
                            return t.match(/(\*\*.*?\*\*)/g) ? t.match(/(\*\*.*?\*\*)/g).map((function(e, i) {
                                return t.replace(e, '<strong><span class="text-highlight">'.concat(e.slice(2, e.length - 2), "</span></strong>"))
                            }))[0] : t
                        }
                    },
                    head: {
                        title: "Home"
                    }
                },
                R = r(9),
                component = Object(R.a)(z, (function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", [n("transition", {
                        attrs: {
                            appear: ""
                        },
                        on: {
                            "after-appear": t.appear
                        }
                    }, [n("div", {
                        ref: "mainDiv",
                        staticClass: "invisible"
                    }, [n("div", {
                        staticClass: "promo-container"
                    }, [n("div", {
                        ref: "promoHeading",
                        staticClass: "promo-container__heading"
                    }, [n("div", {
                        staticClass: "heading__logo"
                    }, [n("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        attrs: {
                            "data-not-lazy": "",
                            "data-src": r(614)
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "heading__text"
                    }, [n("p", {
                        domProps: {
                            innerHTML: t._s(t.markdown(t.$t("home.introduction.paragraph")))
                        }
                    })]), t._v(" "), n("div", {
                        staticClass: "heading__button-group"
                    }, [n("a", {
                        staticClass: "button text--uppercase",
                        attrs: {
                            href: "#features"
                        }
                    }, [n("i", {
                        staticClass: "fa-stream fas"
                    }), t._v("\n\t\t\t\t\t\t\t" + t._s(t.$t("home.introduction.button.features")) + "\n\t\t\t\t\t\t")]), t._v(" "), n("nuxt-link", {
                        staticClass: "button button--black text--uppercase",
                        attrs: {
                            to: "/downloads"
                        }
                    }, [n("i", {
                        staticClass: "fa-file-export fas"
                    }), t._v("\n\t\t\t\t\t\t\t" + t._s(t.$t("home.introduction.button.downloads")) + "\n\t\t\t\t\t\t")])], 1)]), t._v(" "), n("div", {
                        ref: "promoPresences",
                        staticClass: "promo-container__presences"
                    }, t._l(t.presences_display, (function(e) {
                        return n("div", {
                            key: e.service,
                            staticClass: "discord-usercard",
                            attrs: {
                                "v-if": "" !== e.profile.name
                            }
                        }, [n("div", {
                            staticClass: "usercard__header"
                        }, [n("div", {
                            staticClass: "header__avatar",
                            style: "background-image: url(" + e.profile.avatar + "?size=128);"
                        }), t._v(" "), n("div", {
                            staticClass: "header__info"
                        }, [n("div", {
                            staticClass: "info__nameTag"
                        }, [n("span", {
                            staticClass: "username"
                        }, [t._v(t._s(e.profile.name))]), t._v(" "), n("span", {
                            staticClass: "discriminator"
                        }, [t._v("#" + t._s(e.profile.discriminator))])]), t._v(" "), n("div", {
                            staticClass: "info__badges"
                        }, t._l(e.profile.flags, (function(e) {
                            return n("div", {
                                key: e,
                                staticClass: "badge-wrapper"
                            }, ["HOUSE_BRILLIANCE" == e || "HOUSE_BRAVERY" == e || "HOUSE_BALANCE" == e ? n("div", {
                                directives: [{
                                    name: "tippy",
                                    rawName: "v-tippy",
                                    value: {
                                        content: "HypeSquad " + e.replace("HOUSE_", "")[0] + e.replace("HOUSE_", "").slice(1, 10).toLowerCase()
                                    },
                                    expression: "{\n\t\t\t\t\t\t\t\t\t\t\t\tcontent:\n\t\t\t\t\t\t\t\t\t\t\t\t\t'HypeSquad ' +\n\t\t\t\t\t\t\t\t\t\t\t\t\tflag.replace('HOUSE_', '')[0] +\n\t\t\t\t\t\t\t\t\t\t\t\t\tflag\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.replace('HOUSE_', '')\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.slice(1, 10)\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t.toLowerCase()\n\t\t\t\t\t\t\t\t\t\t\t}"
                                }],
                                class: "badge badge_" + e.replace("HOUSE_", "").toLowerCase()
                            }) : t._e(), t._v(" "), "EARLY_SUPPORTER" == e ? n("div", {
                                directives: [{
                                    name: "tippy",
                                    rawName: "v-tippy",
                                    value: {
                                        content: "Early Supporter"
                                    },
                                    expression: "{ content: 'Early Supporter' }"
                                }],
                                class: "badge badge_early"
                            }) : t._e(), t._v(" "), "HYPESQUAD_EVENTS" == e ? n("div", {
                                directives: [{
                                    name: "tippy",
                                    rawName: "v-tippy",
                                    value: {
                                        content: "HypeSquad Events"
                                    },
                                    expression: "{ content: 'HypeSquad Events' }"
                                }],
                                class: "badge badge_hypesquad"
                            }) : t._e(), t._v(" "), "NITRO" == e ? n("div", {
                                directives: [{
                                    name: "tippy",
                                    rawName: "v-tippy",
                                    value: {
                                        content: "Discord Nitro"
                                    },
                                    expression: "{ content: 'Discord Nitro' }"
                                }],
                                class: "badge badge_nitro"
                            }) : t._e()])
                        })), 0)])]), t._v(" "), n("div", {
                            staticClass: "usercard__activity"
                        }, [n("div", {
                            staticClass: "activity__info"
                        }, [n("div", {
                            staticClass: "info__header"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t" + t._s(t.$t("home.examples.playingagame")) + "\n\t\t\t\t\t\t\t\t")]), t._v(" "), n("div", {
                            staticClass: "info__game"
                        }, [n("div", {
                            staticClass: "game__icon"
                        }, [0 == e.smallImage ? n("img", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy",
                                value: {
                                    content: "PreMiD v" + t.extVersion
                                },
                                expression: "{ content: `PreMiD v${extVersion}` }"
                            }, {
                                name: "lazy-load",
                                rawName: "v-lazy-load"
                            }],
                            staticClass: "game",
                            staticStyle: {
                                "-webkit-mask": "none"
                            },
                            attrs: {
                                alt: "@/assets/images/logo-big.svg",
                                "data-src": e.serviceLogo
                            }
                        }) : t._e(), t._v(" "), "search" == e.smallImage ? n("img", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy",
                                value: {
                                    content: "PreMiD v" + t.extVersion
                                },
                                expression: "{ content: `PreMiD v${extVersion}` }"
                            }, {
                                name: "lazy-load",
                                rawName: "v-lazy-load"
                            }],
                            staticClass: "game",
                            attrs: {
                                alt: "@/assets/images/logo-big.svg",
                                "data-src": e.serviceLogo
                            }
                        }) : t._e(), t._v(" "), 1 == e.smallImage ? n("img", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy",
                                value: {
                                    content: "PreMiD v" + t.extVersion
                                },
                                expression: "{ content: `PreMiD v${extVersion}` }"
                            }, {
                                name: "lazy-load",
                                rawName: "v-lazy-load"
                            }],
                            staticClass: "game",
                            attrs: {
                                alt: "@/assets/images/logo-big.svg",
                                "data-src": e.serviceLogo
                            }
                        }) : t._e(), t._v(" "), "search" == e.smallImage ? n("img", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy",
                                value: {
                                    content: t.$t("home.examples.status.browsing")
                                },
                                expression: "{\n\t\t\t\t\t\t\t\t\t\t\t\tcontent: $t('home.examples.status.browsing')\n\t\t\t\t\t\t\t\t\t\t\t}"
                            }, {
                                name: "lazy-load",
                                rawName: "v-lazy-load"
                            }],
                            staticClass: "status-icon",
                            attrs: {
                                "data-src": r(615)
                            }
                        }) : t._e(), t._v(" "), 1 == e.smallImage ? n("img", {
                            directives: [{
                                name: "tippy",
                                rawName: "v-tippy",
                                value: {
                                    content: t.$t("home.examples.status.playing")
                                },
                                expression: "{\n\t\t\t\t\t\t\t\t\t\t\t\tcontent: $t('home.examples.status.playing')\n\t\t\t\t\t\t\t\t\t\t\t}"
                            }],
                            staticClass: "status-icon",
                            attrs: {
                                src: "https://cdn.discordapp.com/app-assets/501021996336021504/501023626984816650.png"
                            }
                        }) : t._e()]), t._v(" "), n("div", {
                            staticClass: "game__content"
                        }, [n("div", {
                            staticClass: "game__title text-row"
                        }, [n("span", [t._v(t._s(e.service_title))])]), t._v(" "), n("div", {
                            staticClass: "game__st-line text-row"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(e.data[0]) + "\n\t\t\t\t\t\t\t\t\t\t")]), t._v(" "), e.data[1] ? n("div", {
                            staticClass: "game__nd-line text-row"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(e.data[1]) + "\n\t\t\t\t\t\t\t\t\t\t")]) : t._e(), t._v(" "), n("div", {
                            staticClass: "game__time text-row"
                        }, [t._v("\n\t\t\t\t\t\t\t\t\t\t\t" + t._s(e.elapsed ? t.$t("home.examples.timestamp2", {
                            0: e.presence_time
                        }) : t.$t("home.examples.timestamp", {
                            0: e.presence_time
                        })) + "\n\t\t\t\t\t\t\t\t\t\t")])])])])])])
                    })), 0)]), t._v(" "), n("div", {
                        staticClass: "section section--features pattern",
                        attrs: {
                            id: "features"
                        }
                    }, [n("div", {
                        staticClass: "waves-divider waves-divider_top"
                    }, [n("svg", {
                        staticClass: "wave",
                        attrs: {
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 100",
                            preserveAspectRatio: "none"
                        }
                    }, [n("path", {
                        staticClass: "wave-animation",
                        attrs: {
                            d: "M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z",
                            fill: "currentColor"
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "section__heading section__heading--center"
                    }, [n("h1", {
                        attrs: {
                            id: "featuresHeading"
                        }
                    }, [t._v(t._s(t.$t("home.features.heading")))])]), t._v(" "), n("div", {
                        staticClass: "card--feature"
                    }, [n("div", {
                        staticClass: "card--feature__details"
                    }, [n("h1", {
                        domProps: {
                            innerHTML: t._s(t.markdown(t.$t("home.features.presencesystem.heading")))
                        }
                    }), t._v(" "), n("p", [t._v(t._s(t.$t("home.features.presencesystem.description")))]), t._v(" "), n("p", [n("nuxt-link", {
                        staticClass: "button button--lg",
                        attrs: {
                            to: "/store"
                        },
                        domProps: {
                            textContent: t._s(t.$t("home.features.presencesystem.button"))
                        }
                    })], 1)]), t._v(" "), n("div", {
                        staticClass: "card--feature__promo"
                    }, [n("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "card--feature__promo--image1",
                        staticStyle: {
                            "max-width": "100%"
                        },
                        attrs: {
                            "data-src": t.cardThumbnail1
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "card--feature card--feature--reverse"
                    }, [n("div", {
                        staticClass: "card--feature__details"
                    }, [n("h1", [t._v(t._s(t.$t("home.features.simpleInterface.heading")))]), t._v(" "), n("p", [t._v(t._s(t.$t("home.features.simpleInterface.description")))]), t._v(" "), n("ul", [n("li", [n("p", [t._v(t._s(t.$t("home.features.simpleInterface.description.1")))])]), t._v(" "), n("li", [n("p", [t._v(t._s(t.$t("home.features.simpleInterface.description.2")))])]), t._v(" "), n("li", [n("p", [t._v(t._s(t.$t("home.features.simpleInterface.description.3")))])])])]), t._v(" "), n("div", {
                        staticClass: "card--feature__promo"
                    }, [n("video", {
                        attrs: {
                            autoplay: "",
                            loop: ""
                        }
                    }, [n("source", {
                        attrs: {
                            src: r(496),
                            type: "video/mp4"
                        }
                    }), t._v(" "), n("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "card--feature__promo--image2",
                        attrs: {
                            "data-src": t.cardThumbnail2
                        }
                    })])])]), t._v(" "), n("div", {
                        staticClass: "card--feature"
                    }, [n("div", {
                        staticClass: "card--feature__details"
                    }, [n("h1", [t._v(t._s(t.$t("home.features.quickSupport.heading")))]), t._v(" "), n("p", [t._v(t._s(t.$t("home.features.quickSupport.description")))]), t._v(" "), n("p", [n("a", {
                        staticClass: "button button--lg",
                        attrs: {
                            href: "https://discord.premid.app"
                        }
                    }, [t._v(t._s(t.$t("home.features.quickSupport.button")))])])]), t._v(" "), n("div", {
                        staticClass: "card--feature__promo"
                    }, [n("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "card--feature__promo--image1",
                        attrs: {
                            "data-src": t.cardThumbnail4
                        }
                    })])]), t._v(" "), n("div", {
                        staticClass: "waves-divider waves-divider_bottom"
                    }, [n("svg", {
                        staticClass: "wave",
                        attrs: {
                            version: "1.1",
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 1440 100",
                            preserveAspectRatio: "none"
                        }
                    }, [n("path", {
                        staticClass: "wave-animation",
                        attrs: {
                            d: "M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z",
                            fill: "currentColor"
                        }
                    })])])])])])], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        }
    }
]);