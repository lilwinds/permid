(window.webpackJsonp = window.webpackJsonp || []).push([
    [35, 10], {
        487: function(t, r, e) {
            "use strict";
            e.r(r);
            var n = e(327),
                o = e.n(n),
                c = {
                    name: "Creditcard",
                    props: ["user"],
                    data: function() {
                        return {
                            hovered: !1
                        }
                    },
                    computed: {
                        cardGradientColor: function() {
                            return {
                                primary: o()(this.$props.user.roleColor).setAlpha(1).darken(5).toRgbString(),
                                secondary: o()(this.$props.user.roleColor).analogous()[2].setAlpha(.5).saturate(20).toRgbString()
                            }
                        },
                        cardShadowColor: function() {
                            return this.hovered ? o()(this.cardGradientColor.primary).setAlpha(.3).saturate(20).toRgbString() : "transparent"
                        }
                    },
                    methods: {
                        copyId: function(t) {
                            var r = document.createElement("textarea");
                            r.value = t, document.body.appendChild(r), r.select(), document.execCommand("copy"), document.body.removeChild(r), this.$noty.success(this.$t("contributors.cards.userIdCopied"))
                        }
                    }
                },
                d = e(9),
                component = Object(d.a)(c, (function() {
                    var t = this,
                        r = t.$createElement,
                        e = t._self._c || r;
                    return e("div", {
                        staticClass: "credit-card",
                        style: "background: linear-gradient(-35deg, " + t.cardGradientColor.secondary + " 20%, " + t.cardGradientColor.primary + " 130%); box-shadow: 0 2px 52px 0 " + t.cardShadowColor,
                        on: {
                            mouseover: function(r) {
                                t.hovered = !0
                            },
                            mouseleave: function(r) {
                                t.hovered = !1
                            }
                        }
                    }, [e("div", {
                        staticClass: "credit-card__user"
                    }, [e("h1", {
                        attrs: {
                            title: t.user.name
                        },
                        domProps: {
                            textContent: t._s(t.user.name)
                        }
                    }), t._v(" "), e("h2", [t._v("\n\t\t\t" + t._s("515874214750715904" == t.user.roleId ? "Patron" : t.$t("contributors.roles." + (t.user.role.replace(/\s/g, "").charAt(0).toLowerCase() + t.user.role.replace(/\s/g, "").substring(1)))) + "\n\t\t")])]), t._v(" "), e("div", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: t.$t("contributors.cards.copyUserId")
                            },
                            expression: "{ content: $t('contributors.cards.copyUserId') }"
                        }],
                        staticClass: "credit-card__avatar",
                        on: {
                            click: function(r) {
                                return t.copyId(t.user.id)
                            }
                        }
                    }, [e("span", {
                        class: t.user.status
                    }), t._v(" "), e("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        attrs: {
                            "data-src": t.user.avatar + "?size=64",
                            draggable: "false"
                        },
                        on: {
                            error: function(r) {
                                t.user.avatar = "https://premid.app/assets/images/logo.png"
                            }
                        }
                    })])])
                }), [], !1, null, null, null);
            r.default = component.exports
        },
        551: function(t, r, e) {
            var content = e(568);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(74).default)("961e150e", content, !0, {
                sourceMap: !1
            })
        },
        567: function(t, r, e) {
            "use strict";
            e(551)
        },
        568: function(t, r, e) {
            var n = e(73)(!1);
            n.push([t.i, '.titleHeading{margin:0 5px;font-family:"Discord Font","Segoe UI",Tahoma,Geneva,Verdana,sans-serif;color:#7289da;font-size:2.5em}', ""]), t.exports = n
        },
        633: function(t, r, e) {
            "use strict";
            e.r(r);
            var n = e(2),
                o = (e(33), {
                    name: "Contributors",
                    auth: !1,
                    asyncData: function(t) {
                        return Object(n.a)(regeneratorRuntime.mark((function r() {
                            var e, n;
                            return regeneratorRuntime.wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return e = t.app, r.next = 3, e.$graphql("\n\t\t\t{\n\t\t\t\tcredits {\n\t\t\t\t\tuser {\n\t\t\t\t\t\tid\n\t\t\t\t\t\tavatar\n\t\t\t\t\t\tstatus\n\t\t\t\t\t\tname\n\t\t\t\t\t\trole\n\t\t\t\t\t\troleId\n\t\t\t\t\t\troleColor\n\t\t\t\t\t\trolePosition\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}");
                                    case 3:
                                        return n = r.sent, r.abrupt("return", {
                                            contributors: n.credits.sort((function(a, b) {
                                                return b.user.rolePosition - a.user.rolePosition
                                            }))
                                        });
                                    case 5:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))()
                    },
                    data: function() {
                        return {
                            contributors: [],
                            display: !1
                        }
                    },
                    methods: {
                        isStaffRole: function(t) {
                            return -1 !== ["493135149274365975", "691382096878370837", "673681900476432387", "685969048399249459", "630445337143935009", "811262682408943616", "691396820236107837", "691386502566903850", "514546359865442304", "566417964820070421", "691384256672563332"].indexOf(t)
                        },
                        isSupporterRole: function(t) {
                            return -1 !== ["502165799172309013", "515874214750715904", "585532751663333383"].indexOf(t)
                        },
                        isTranslatorRole: function(t) {
                            return -1 !== ["502148045991968788", "522755339448483840"].indexOf(t)
                        },
                        userNameColor: function(t, r) {
                            return "#fff" == t ? r : t
                        }
                    },
                    head: function() {
                        return {
                            title: "Contributors"
                        }
                    }
                }),
                c = (e(567), e(9)),
                component = Object(c.a)(o, (function() {
                    var t = this,
                        r = t.$createElement,
                        e = t._self._c || r;
                    return e("div", [e("title", [t._v("PreMiD - Contributors")]), t._v(" "), e("section", {
                        staticClass: "contributors"
                    }, [e("div", {
                        staticClass: "contributor-container"
                    }, [e("h1", {
                        staticClass: "titleHeading",
                        domProps: {
                            textContent: t._s(t.$t("contributors.headings.staff"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "contributor-inner"
                    }, t._l(t.contributors, (function(r) {
                        return e("div", {
                            key: r.user.id,
                            staticClass: "contributor-card"
                        }, [t.isStaffRole(r.user.roleId) ? e("CreditCard", {
                            attrs: {
                                user: r.user
                            }
                        }) : t._e()], 1)
                    })), 0)]), t._v(" "), e("div", {
                        staticClass: "contributor-container"
                    }, [e("h1", {
                        staticClass: "titleHeading",
                        domProps: {
                            textContent: t._s(t.$t("contributors.headings.supporters"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "contributor-inner"
                    }, t._l(t.contributors, (function(r) {
                        return e("div", {
                            key: r.user.id,
                            staticClass: "contributor-card"
                        }, [t.isSupporterRole(r.user.roleId) ? e("CreditCard", {
                            attrs: {
                                user: r.user
                            }
                        }) : t._e()], 1)
                    })), 0)]), t._v(" "), e("div", {
                        staticClass: "contributor-container"
                    }, [e("h1", {
                        staticClass: "titleHeading",
                        domProps: {
                            textContent: t._s(t.$t("contributors.headings.translators"))
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "contributor-inner"
                    }, t._l(t.contributors, (function(r) {
                        return e("div", {
                            key: r.user.id,
                            staticClass: "contributor-card"
                        }, [t.isTranslatorRole(r.user.roleId) ? e("CreditCard", {
                            attrs: {
                                user: r.user
                            }
                        }) : t._e()], 1)
                    })), 0)])])])
                }), [], !1, null, null, null);
            r.default = component.exports;
            installComponents(component, {
                CreditCard: e(487).default
            })
        }
    }
]);