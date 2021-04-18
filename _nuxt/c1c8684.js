(window.webpackJsonp = window.webpackJsonp || []).push([
    [46, 14, 30], {
        325: function(e, t, r) {
            "use strict";
            var n = r(3),
                c = r(75).find,
                o = r(127),
                l = "find",
                d = !0;
            l in [] && Array(1).find((function() {
                d = !1
            })), n({
                target: "Array",
                proto: !0,
                forced: d
            }, {
                find: function(e) {
                    return c(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), o(l)
        },
        326: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(2),
                c = (r(33), r(7), r(325), r(30), r(18), {
                    data: function() {
                        return {
                            isInstalled: !1,
                            presencesInstalled: []
                        }
                    },
                    methods: {
                        sendPresence: function(e) {
                            var t = new CustomEvent("PreMiD_AddPresence", {
                                detail: e
                            });
                            window.dispatchEvent(t), this.$store.commit("presences/add", e), this.isInstalled = !0
                        },
                        removePresence: function(e) {
                            var t = new CustomEvent("PreMiD_RemovePresence", {
                                detail: e
                            });
                            window.dispatchEvent(t), this.$store.commit("presences/remove", e), this.isInstalled = !1
                        },
                        isPresenceInstalled: function(e) {
                            var t = this;
                            return Object(n.a)(regeneratorRuntime.mark((function r() {
                                return regeneratorRuntime.wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.abrupt("return", new Promise((function(r, n) {
                                                t.$store.dispatch("presences/getPresences").then((function(t) {
                                                    return !!t && Array.from(t).find((function(p) {
                                                        return p.toLowerCase() == e.toLowerCase()
                                                    }))
                                                })).then((function(t) {
                                                    return t ? t.toLowerCase() == e.toLowerCase() ? r(!0) : void 0 : r(!1)
                                                }))
                                            })));
                                        case 1:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            })))()
                        },
                        getInstalledPresences: function() {
                            return this.$root.presenceList
                        }
                    }
                });
            t.default = c
        },
        333: function(e, t, r) {
            "use strict";
            r.r(t);
            r(35), r(50), r(15), r(54), r(76), r(16), r(128), r(43), r(44), r(17), r(34);
            var n = r(326),
                c = r(327),
                o = r.n(c),
                l = {
                    name: "StoreCard",
                    mixins: [n.default],
                    props: ["presence", "submit", "nsfw", "hot", "partner", "altnamesSearch"],
                    data: function() {
                        return {
                            cardHovered: !1,
                            presenceLinkName: this.$props.presence.service
                        }
                    },
                    computed: {
                        presenceGradientColor: function() {
                            return o()(this.presence.color).darken(45).toHexString()
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.isPresenceInstalled(this.presence.service).then((function(t) {
                            t && (e.isInstalled = !0)
                        }))
                    },
                    methods: {
                        like: function() {
                            var e = this,
                                t = localStorage.getItem("likedPresences");
                            if (t) {
                                if (t.split(",").includes(this.presence.service)) localStorage.setItem("likedPresences", t.split(",").filter((function(i) {
                                    return i !== e.presence.service
                                })).join(","));
                                else if (!t.split(",").includes(this.presence.service)) {
                                    var r = t.split(",");
                                    r.push(this.presence.service), localStorage.setItem("likedPresences", r.join(","))
                                }
                            } else localStorage.setItem("likedPresences", this.presence.service);
                            this.$store.commit("presences/like", this.presence.service)
                        },
                        brightColorFix: function() {
                            return o()(this.presence.color).getBrightness() >= 200 ? "#111218" : "#ffffff"
                        },
                        linkify: function(e) {
                            if (e) {
                                if (e.match(/\[([^\]]+)\]\(([^)]+)\)/g) && /\[([^\]]+)\]\(([^)]+)\)/g.exec(e)) {
                                    var t = e.match(/\[([^\]]+)\]\(([^)]+)\)/g),
                                        r = /\[([^\]]+)\]\(([^)]+)\)/g.exec(e);
                                    return e.replace(t, '<a target="_blank" href="'.concat(r[2], '">').concat(r[1], "</a>"))
                                }
                                return e
                            }
                        },
                        openInNewTab: function(e) {
                            window.open(e, "_blank");
                            win.focus()
                        },
                        getPresenceDescription: function() {
                            return this.presence.description[this.$root.getCurrentLanguage()] ? this.presence.description[this.$root.getCurrentLanguage()] : this.presence.description.en ? this.presence.description.en : this.presence.description
                        }
                    }
                },
                d = r(9),
                component = Object(d.a)(l, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", [r("div", {
                        class: "store-card " + (e.cardHovered ? "hovered" : ""),
                        on: {
                            mouseover: function(t) {
                                e.cardHovered = !0
                            },
                            mouseleave: function(t) {
                                e.cardHovered = !1
                            }
                        }
                    }, [r("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        staticClass: "store-card__background",
                        attrs: {
                            "data-src": e.presence.thumbnail
                        },
                        on: {
                            error: function(t) {
                                e.presence.thumbnail = ""
                            }
                        }
                    }), e._v(" "), r("div", {
                        staticClass: "store-card__service-logo"
                    }, [r("img", {
                        directives: [{
                            name: "lazy-load",
                            rawName: "v-lazy-load"
                        }],
                        attrs: {
                            "data-src": e.presence.logo
                        },
                        on: {
                            error: function(t) {
                                e.presence.logo = "/assets/images/logo.png"
                            }
                        }
                    })]), e._v(" "), r("div", {
                        staticClass: "store-card__service-info"
                    }, [r("div", {
                        staticClass: "store-card__service"
                    }, [r("h2", [r("nuxt-link", {
                        key: e.presenceLinkName,
                        style: "color: " + e.brightColorFix(),
                        attrs: {
                            to: "/store/presences/" + encodeURIComponent(e.presenceLinkName)
                        }
                    }, [e._v("\n\t\t\t\t\t\t" + e._s(e.altnamesSearch && !e.presence.service.toLowerCase().includes(e.altnamesSearch) && e.presence.altnames && e.presence.altnames.find((function(a) {
                        return a.toLowerCase().includes(e.altnamesSearch)
                    })) || e.presence.service) + "\n\t\t\t\t\t\t"), e.partner ? r("span", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: e.$t("store.cards.partner")
                            },
                            expression: "{\n\t\t\t\t\t\t\t\tcontent: $t('store.cards.partner')\n\t\t\t\t\t\t\t}"
                        }],
                        staticClass: "fa-stack"
                    }, [r("i", {
                        staticClass: "fa-circle fa-stack-2x fas",
                        style: "color:" + e.brightColorFix()
                    }), e._v(" "), r("i", {
                        staticClass: "fa-gem fa-inverse fa-stack-1x fas",
                        style: "color: " + e.presence.color + "; font-size: 10px; top:1px;"
                    })]) : e._e(), e._v(" "), e.hot ? r("span", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: e.$t("store.cards.popular")
                            },
                            expression: "{\n\t\t\t\t\t\t\t\tcontent: $t('store.cards.popular')\n\t\t\t\t\t\t\t}"
                        }],
                        staticClass: "fa-stack",
                        style: 1 == e.partner ? "margin-left:-4px" : ""
                    }, [r("i", {
                        staticClass: "fa-circle fa-stack-2x fas",
                        style: "color:" + e.brightColorFix()
                    }), e._v(" "), r("i", {
                        staticClass: "fa-fire-alt fa-inverse fa-stack-1x fas",
                        style: "color: " + e.presence.color + ";"
                    })]) : e._e(), e._v(" "), "boolean" == typeof e.presence.warning && !0 === e.presence.warning ? r("span", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: e.$t("store.cards.extraStepsRequired")
                            },
                            expression: "{\n\t\t\t\t\t\t\t\tcontent: $t('store.cards.extraStepsRequired')\n\t\t\t\t\t\t\t}"
                        }],
                        staticClass: "fa-stack",
                        style: 1 == e.hot || 1 == e.partner ? "margin-left:-4px" : ""
                    }, [r("i", {
                        staticClass: "fa-circle fa-stack-2x fas",
                        style: "color:" + e.brightColorFix()
                    }), e._v(" "), r("i", {
                        staticClass: "fa-exclamation fa-inverse fa-stack-1x fas",
                        style: "color: " + e.presence.color + ";"
                    })]) : e._e()])], 1), e._v(" "), r("p", {
                        style: "color: " + e.brightColorFix()
                    }, [e._v("\n\t\t\t\t\t" + e._s(e.$t("store.cards.creator")) + ":\n\t\t\t\t\t"), r("nuxt-link", {
                        style: "color: " + e.brightColorFix() + ";font-weight:bold;",
                        attrs: {
                            to: "/users/" + e.presence.author.id
                        }
                    }, [e._v(e._s(e.presence.author.name))])], 1), e._v(" "), r("transition", {
                        attrs: {
                            name: "card-animation",
                            mode: "out-in"
                        }
                    }, [e.cardHovered && this.$store.state.extension.extensionInstalled ? e._e() : r("div", {
                        key: e.presence.service + "_desc"
                    }, [r("p", {
                        staticClass: "store-card__desc",
                        style: "color: " + e.brightColorFix(),
                        domProps: {
                            innerHTML: e._s(e.linkify(this.getPresenceDescription()))
                        }
                    })]), e._v(" "), e.cardHovered && this.$store.state.extension.extensionInstalled ? r("div", {
                        key: e.presence.service + "_buttons"
                    }, [this.$store.state.extension.extensionInstalled && null === e.presence.button ? r("div", {
                        staticClass: "on-desktop store-card__buttons"
                    }, [e.isInstalled ? e._e() : r("button", {
                        staticClass: "button button--",
                        on: {
                            click: function(t) {
                                return e.sendPresence(e.presence.service)
                            }
                        }
                    }, [r("span", {
                        staticClass: "icon"
                    }, [r("i", {
                        staticClass: "fa-plus fas"
                    })]), e._v("\n\t\t\t\t\t\t\t\t" + e._s(e.$t("store.card.presence.add")) + "\n\t\t\t\t\t\t\t")]), e._v(" "), e.isInstalled ? r("button", {
                        staticClass: "button button--black",
                        on: {
                            click: function(t) {
                                return e.removePresence(e.presence.service)
                            }
                        }
                    }, [r("span", {
                        staticClass: "icon"
                    }, [r("i", {
                        staticClass: "fa-minus fas"
                    })]), e._v("\n\t\t\t\t\t\t\t\t" + e._s(e.$t("store.card.presence.remove")) + "\n\t\t\t\t\t\t\t")]) : e._e(), e._v(" "), r("a", {
                        staticClass: "button button--red button--like",
                        on: {
                            click: function(t) {
                                return e.like()
                            }
                        }
                    }, [r("i", {
                        class: e.$store.state.presences.likedPresences.includes(e.presence.service) ? "fas fa-heart" : "far fa-heart"
                    })])]) : e._e(), e._v(" "), !this.$store.state.extension.extensionInstalled || !1 !== e.presence.button && "false" !== e.presence.button ? e._e() : r("div", [r("p", {
                        staticClass: "store-card__warning"
                    }, [e._v(e._s(e.$t("store.card.presence.included")))])])]) : e._e()])], 1)]), e._v(" "), r("div", {
                        staticClass: "store-card__gradient",
                        style: "background: linear-gradient(135deg, " + e.presence.color + " 0%, " + e.presenceGradientColor + " 100%);"
                    })])])
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        561: function(e, t, r) {
            var content = r(611);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(74).default)("62e2a848", content, !0, {
                sourceMap: !1
            })
        },
        608: function(e, t, r) {
            "use strict";
            var n = r(3),
                c = r(203).trim;
            n({
                target: "String",
                proto: !0,
                forced: r(609)("trim")
            }, {
                trim: function() {
                    return c(this)
                }
            })
        },
        609: function(e, t, r) {
            var n = r(6),
                c = r(204);
            e.exports = function(e) {
                return n((function() {
                    return !!c[e]() || "​᠎" != "​᠎" [e]() || c[e].name !== e
                }))
            }
        },
        610: function(e, t, r) {
            "use strict";
            r(561)
        },
        611: function(e, t, r) {
            var n = r(73)(!1);
            n.push([e.i, ".store-menu__searchbar-container{position:relative;display:flex}.store-menu__searchbar-container span{position:absolute;margin:2px;background-color:#191b24;padding:2.5px 5px;border-radius:4px;cursor:pointer}.store-menu__searchbar-container .searchSuggestions{font-size:small;z-index:999;position:absolute;background-color:#191b24;border-bottom-right-radius:4px;border-bottom-left-radius:4px;box-shadow:0 1px teal;width:-webkit-fill-available;width:-moz-available;margin-top:2.5em}.store-menu__searchbar-container .searchSuggestions span{position:unset;width:100%}.store-menu__searchbar-container .searchSuggestions .filterBox{width:100%;display:inline-flex}.store-menu__searchbar-container .searchSuggestions .filterBox span:first-child{float:left;text-align:left}.store-menu__searchbar-container .searchSuggestions .filterBox span:nth-child(2){float:right;text-align:right}.store-menu__searchbar-container .button,.store-menu__searchbar-container button{display:inline-block;padding:.09rem 10px;font-size:14px;line-height:25px;font-weight:700}.store-menu__searchbar-container .button:not(:first-child),.store-menu__searchbar-container .button:not(:last-child),.store-menu__searchbar-container button:not(:first-child),.store-menu__searchbar-container button:not(:last-child){border-radius:0 0 0 0}.fa-search{position:absolute;margin-left:.6rem;color:#74787c}", ""]), e.exports = n
        },
        643: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(2),
                c = (r(33), r(16), r(35), r(50), r(27), r(202), r(23), r(55), r(15), r(131), r(43), r(608), r(28), r(54), {
                    name: "Store",
                    auth: !1,
                    head: {
                        title: "Store"
                    },
                    asyncData: function(e) {
                        return Object(n.a)(regeneratorRuntime.mark((function t() {
                            var r, n, c, o, l, d, h;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return r = e.app, n = e.error, t.prev = 1, t.next = 4, r.$graphql("\n\t\t\t\t{\n\t\t\t\t\tpresences {\n\t\t\t\t\t\tmetadata {\n\t\t\t\t\t\t\tauthor {\n\t\t\t\t\t\t\t\tname\n\t\t\t\t\t\t\t\tid\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\taltnames\n\t\t\t\t\t\t\tlogo\n\t\t\t\t\t\t\tthumbnail\n\t\t\t\t\t\t\tservice\n\t\t\t\t\t\t\tcolor\n\t\t\t\t\t\t\turl\n\t\t\t\t\t\t\twarning\n\t\t\t\t\t\t\ttags\n\t\t\t\t\t\t\tdescription\n\t\t\t\t\t\t\tbutton\n\t\t\t\t\t\t\tcategory\n\t\t\t\t\t\t}\n\t\t\t\t\t\tusers\n\t\t\t\t\t}\n\t\t\t\t\tpartners {\n\t\t\t\t\t\tstoreName\n\t\t\t\t\t}\n\t\t\t\t\tscience {\n\t\t\t\t\t\tusers\n\t\t\t\t\t}\n\t\t\t\t}");
                                    case 4:
                                        return c = t.sent, o = c.presences, l = c.partners, d = c.science, h = d.users, t.abrupt("return", {
                                            presences: o,
                                            topPresences: o.sort((function(a, b) {
                                                return b.users - a.users
                                            })) || [],
                                            partners: l,
                                            hotPresences: o.filter((function(p) {
                                                if (p.users / h * 100 > 5) return p
                                            }))
                                        });
                                    case 12:
                                        return t.prev = 12, t.t0 = t.catch(1), t.abrupt("return", n({
                                            message: "API returned an error."
                                        }));
                                    case 15:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 12]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            presences: [],
                            addedPresences: [],
                            nsfw: !1,
                            mostUsed: !0,
                            showAdded: !1,
                            filterLiked: !1,
                            presenceSearch: "",
                            presencesPerPage: 12,
                            filters: {
                                url: {
                                    enabled: !1,
                                    padding: 45
                                },
                                tag: {
                                    enabled: !1,
                                    padding: 50
                                },
                                author: {
                                    enabled: !1,
                                    padding: 75
                                }
                            },
                            typing: !1
                        }
                    },
                    computed: {
                        currentCategory: function() {
                            return this.$route.query.category || "all"
                        },
                        filteredPresences: function() {
                            var e = this;
                            return this.presences.filter((function(t) {
                                return 1 == e.filters.url.enabled ? Array.isArray(t.metadata.url) && t.metadata.url.filter((function(t) {
                                    return t.toLowerCase().includes(e.presenceSearch.toLowerCase())
                                })).length > 0 || "string" == typeof t.metadata.url && t.metadata.url.toLowerCase().includes(e.presenceSearch.toLowerCase()) : 1 == e.filters.author.enabled ? t.metadata.author.name.toLowerCase().includes(e.presenceSearch.toLowerCase()) || t.metadata.author.id.includes(e.presenceSearch) : 1 == e.filters.tag.enabled ? !!Array.isArray(t.metadata.tags) && t.metadata.tags.filter((function(t) {
                                    return t.toLowerCase().includes(e.presenceSearch.toLowerCase())
                                })).length > 0 : !e.showAdded && (t.metadata.service.toLowerCase().includes(e.presenceSearch.toLowerCase()) || Array.isArray(t.metadata.altnames) && t.metadata.altnames.filter((function(t) {
                                    return t.toLowerCase().includes(e.presenceSearch.toLowerCase())
                                })).length > 0) ? !e.addedPresences.includes(t.metadata.service) : t.metadata.service.toLowerCase().includes(e.presenceSearch.toLowerCase()) || Array.isArray(t.metadata.tags) && t.metadata.tags.filter((function(t) {
                                    return t.toLowerCase().includes(e.presenceSearch.toLowerCase())
                                })).length > 0 || Array.isArray(t.metadata.altnames) && t.metadata.altnames.filter((function(t) {
                                    return t.toLowerCase().includes(e.presenceSearch.toLowerCase())
                                })).length > 0
                            })).filter((function(t) {
                                return !!e.nsfw || !t.metadata.tags.includes("nsfw")
                            })).filter((function(t) {
                                return !(!e.filterLiked || !e.$store.state.presences.likedPresences.includes(t.metadata.service)) || !e.filterLiked
                            })).filter((function(t) {
                                return "all" === e.currentCategory ? t.metadata : t.metadata.category == e.currentCategory
                            })).sort((function(a, b) {
                                return a.metadata.service.localeCompare(b.metadata.service)
                            })).sort((function(a, b) {
                                if (e.mostUsed) return b.users - a.users
                            }))
                        },
                        currentPageNumber: {
                            get: function() {
                                return Number(this.$route.query.page) ? this.pageCount < this.$route.query.page ? 1 : Number(this.$route.query.page) : 1
                            },
                            set: function(e) {
                                return e
                            }
                        },
                        pageCount: function() {
                            var e = this.filteredPresences.length,
                                t = this.presencesPerPage;
                            return Math.ceil(e / t)
                        },
                        paginatedData: function() {
                            var e = (this.currentPageNumber - 1) * this.presencesPerPage,
                                t = e + this.presencesPerPage;
                            return this.filteredPresences.slice(e, t)
                        }
                    },
                    created: function() {
                        var e = this;
                        (this.pageCount < Number(this.$route.query.page) || this.$route.query.page <= -1) && this.$nuxt.error({
                            statusCode: 404,
                            message: "No presences available."
                        }), this.interval = setInterval((function() {
                            e.addedPresences = e.$store.state.presences.addedPresences
                        }), 100)
                    },
                    mounted: function() {
                        var e = this,
                            t = this.$route.query.q || this.$route.query.query || this.$route.query.search;
                        t && (this.presenceSearch = t.replace("author:", "author ").replace("url:", "url ").replace("tag:", "tag ").replace(/\+/g, " "), this.searchHandle(null, !1)), this.listener = this.$el.addEventListener("click", (function(t) {
                            "searchbar" != t.target.className && (e.typing = !1)
                        }))
                    },
                    beforeDestroy: function() {
                        this.$el.removeEventListener("click", this.listener), this.interval && clearInterval(this.interval)
                    },
                    methods: {
                        setSearchStyle: function() {
                            var e = 10;
                            for (var t in this.filters) !0 === this.filters[t].enabled && (e = this.filters[t].padding);
                            return this.$refs.search.style.paddingLeft = "".concat(e, "px"), !0
                        },
                        searchHandle: function(e, t) {
                            if (this.presenceSearch = this.presenceSearch.trim(), this.presenceSearch || (this.typing = !1), e && "" == this.presenceSearch && "backspace" == e.key.toLowerCase()) {
                                for (var r in this.filters) this.filters[r].enabled = !1;
                                this.setSearchStyle()
                            } else if (!e || "backspace" != e.key.toLowerCase()) {
                                if (this.typing = "undefined" == t || t, -1 !== Object.keys(this.filters).indexOf(this.presenceSearch.split(" ")[0])) {
                                    for (var n in this.filters) n == this.presenceSearch.split(" ")[0] ? this.filters[n].enabled = !0 : this.filters[n].enabled = !1;
                                    this.presenceSearch = this.presenceSearch.split(" ")[0].replace(this.presenceSearch.split(" ")[0], "") + this.presenceSearch.split(" ").slice(1), this.setSearchStyle()
                                }
                            }
                        },
                        removeFilter: function(filter) {
                            return this.filters[filter].enabled = !1, this.setSearchStyle(), !0
                        },
                        paginationEvent: function(e) {
                            this.$router.push({
                                query: {
                                    page: e,
                                    category: this.currentCategory
                                }
                            })
                        }
                    }
                }),
                o = (r(610), r(9)),
                component = Object(o.a)(c, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("section", [r("div", {
                        staticClass: "store-grid"
                    }, [r("div", {
                        staticClass: "store-grid__sidebar store-menu"
                    }, [r("p", {
                        staticClass: "sidebar__subheader"
                    }, [e._v(e._s(e.$t("store.header.search")))]), e._v(" "), r("div", {
                        staticClass: "store-menu__searchbar-container"
                    }, [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.presenceSearch,
                            expression: "presenceSearch"
                        }],
                        ref: "search",
                        staticClass: "searchbar",
                        attrs: {
                            type: "text",
                            placeholder: e.$t("store.search")
                        },
                        domProps: {
                            value: e.presenceSearch
                        },
                        on: {
                            keydown: e.searchHandle,
                            click: function(t) {
                                e.typing = !0
                            },
                            input: function(t) {
                                t.target.composing || (e.presenceSearch = t.target.value)
                            }
                        }
                    }), e._v(" "), e.filters.url.enabled ? r("span", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: e.$t("store.search.removeFilter")
                            },
                            expression: "{ content: $t('store.search.removeFilter') }"
                        }],
                        on: {
                            click: function(t) {
                                e.removeFilter("url"), e.$refs.search.focus()
                            }
                        }
                    }, [e._v("url:")]) : e._e(), e._v(" "), e.filters.tag.enabled ? r("span", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: e.$t("store.search.removeFilter")
                            },
                            expression: "{ content: $t('store.search.removeFilter') }"
                        }],
                        on: {
                            click: function(t) {
                                e.removeFilter("tag"), e.$refs.search.focus()
                            }
                        }
                    }, [e._v("tag:")]) : e._e(), e._v(" "), e.filters.author.enabled ? r("span", {
                        directives: [{
                            name: "tippy",
                            rawName: "v-tippy",
                            value: {
                                content: e.$t("store.search.removeFilter")
                            },
                            expression: "{ content: $t('store.search.removeFilter') }"
                        }],
                        on: {
                            click: function(t) {
                                e.removeFilter("author"), e.$refs.search.focus()
                            }
                        }
                    }, [e._v("author:")]) : e._e(), e._v(" "), r("transition", {
                        attrs: {
                            name: "card-animation",
                            mode: "out-in"
                        }
                    }, [e.typing && 0 == e.filters.author.enabled && 0 == e.filters.url.enabled ? r("div", {
                        staticClass: "searchSuggestions"
                    }, [r("div", {
                        staticClass: "filterBox",
                        on: {
                            click: function(t) {
                                e.filters.url.enabled = !0, e.$refs.search.focus(), e.setSearchStyle()
                            }
                        }
                    }, [r("span", [e._v("url")]), e._v(" "), r("span", [e._v(e._s(e.$t("store.search.filters")))])]), e._v(" "), r("div", {
                        staticClass: "filterBox",
                        on: {
                            click: function(t) {
                                e.filters.tag.enabled = !0, e.$refs.search.focus(), e.setSearchStyle()
                            }
                        }
                    }, [r("span", [e._v("tag")]), e._v(" "), r("span", [e._v(e._s(e.$t("store.search.filters")))])]), e._v(" "), r("div", {
                        staticClass: "filterBox",
                        on: {
                            click: function(t) {
                                e.filters.author.enabled = !0, e.$refs.search.focus(), e.setSearchStyle()
                            }
                        }
                    }, [r("span", [e._v("author")]), e._v(" "), r("span", [e._v(e._s(e.$t("store.search.filters")))])])]) : e._e()])], 1), e._v(" "), r("p", {
                        staticClass: "sidebar__subheader"
                    }, [e._v("\n\t\t\t\t" + e._s(e.$t("store.category.filters.heading")) + "\n\t\t\t")]), e._v(" "), r("div", {
                        staticClass: "checkbox-switcher"
                    }, [r("label", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.mostUsed,
                            expression: "mostUsed"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.mostUsed) ? e._i(e.mostUsed, null) > -1 : e.mostUsed
                        },
                        on: {
                            change: function(t) {
                                var r = e.mostUsed,
                                    n = t.target,
                                    c = !!n.checked;
                                if (Array.isArray(r)) {
                                    var o = e._i(r, null);
                                    n.checked ? o < 0 && (e.mostUsed = r.concat([null])) : o > -1 && (e.mostUsed = r.slice(0, o).concat(r.slice(o + 1)))
                                } else e.mostUsed = c
                            }
                        }
                    }), e._v(" "), r("span", {
                        ref: "checkbox",
                        staticClass: "checkbox-container"
                    }), e._v(" "), r("span", {
                        staticClass: "title"
                    }, [e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.filters.mostUsed")) + "\n\t\t\t\t\t")])])]), e._v(" "), e.$store.state.extension.extensionInstalled && e.addedPresences.length > 0 ? r("div", {
                        staticClass: "checkbox-switcher"
                    }, [r("label", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.showAdded,
                            expression: "showAdded"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.showAdded) ? e._i(e.showAdded, null) > -1 : e.showAdded
                        },
                        on: {
                            change: function(t) {
                                var r = e.showAdded,
                                    n = t.target,
                                    c = !!n.checked;
                                if (Array.isArray(r)) {
                                    var o = e._i(r, null);
                                    n.checked ? o < 0 && (e.showAdded = r.concat([null])) : o > -1 && (e.showAdded = r.slice(0, o).concat(r.slice(o + 1)))
                                } else e.showAdded = c
                            }
                        }
                    }), e._v(" "), r("span", {
                        ref: "checkbox",
                        staticClass: "checkbox-container"
                    }), e._v(" "), r("span", {
                        staticClass: "title"
                    }, [e._v(e._s(e.$t("store.filters.added")))])])]) : e._e(), e._v(" "), r("div", {
                        staticClass: "checkbox-switcher"
                    }, [r("label", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.nsfw,
                            expression: "nsfw"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.nsfw) ? e._i(e.nsfw, null) > -1 : e.nsfw
                        },
                        on: {
                            change: function(t) {
                                var r = e.nsfw,
                                    n = t.target,
                                    c = !!n.checked;
                                if (Array.isArray(r)) {
                                    var o = e._i(r, null);
                                    n.checked ? o < 0 && (e.nsfw = r.concat([null])) : o > -1 && (e.nsfw = r.slice(0, o).concat(r.slice(o + 1)))
                                } else e.nsfw = c
                            }
                        }
                    }), e._v(" "), r("span", {
                        ref: "checkbox",
                        staticClass: "checkbox-container"
                    }), e._v(" "), r("span", {
                        staticClass: "title"
                    }, [e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.filters.allowAdult")) + "\n\t\t\t\t\t")])])]), e._v(" "), r("div", {
                        staticClass: "checkbox-switcher"
                    }, [r("label", [r("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.filterLiked,
                            expression: "filterLiked"
                        }],
                        attrs: {
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(e.filterLiked) ? e._i(e.filterLiked, null) > -1 : e.filterLiked
                        },
                        on: {
                            change: function(t) {
                                var r = e.filterLiked,
                                    n = t.target,
                                    c = !!n.checked;
                                if (Array.isArray(r)) {
                                    var o = e._i(r, null);
                                    n.checked ? o < 0 && (e.filterLiked = r.concat([null])) : o > -1 && (e.filterLiked = r.slice(0, o).concat(r.slice(o + 1)))
                                } else e.filterLiked = c
                            }
                        }
                    }), e._v(" "), r("span", {
                        ref: "checkbox",
                        staticClass: "checkbox-container"
                    }), e._v(" "), r("span", {
                        staticClass: "title"
                    }, [e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.filters.likedOnly")) + "\n\t\t\t\t\t")])])]), e._v(" "), r("p", {
                        staticClass: "sidebar__subheader"
                    }, [e._v(e._s(e.$t("store.category.heading")))]), e._v(" "), r("div", {
                        staticClass: "container"
                    }, [r("div", {
                        staticClass: "category-container"
                    }, [r("nuxt-link", {
                        staticClass: "category-item",
                        class: {
                            "nuxt-link-exact-active": "all" == e.currentCategory
                        },
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "all"
                                }
                            }
                        }
                    }, [r("i", {
                        class: "fas fa-map"
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.all")) + "\n\t\t\t\t\t")]), e._v(" "), r("nuxt-link", {
                        staticClass: "category-item",
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "anime"
                                }
                            }
                        }
                    }, [r("i", {
                        staticClass: "fa-star fas"
                    }), e._v("\n\t\t\t\t\t\tAnime\n\t\t\t\t\t")]), e._v(" "), r("nuxt-link", {
                        staticClass: "category-item",
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "games"
                                }
                            }
                        }
                    }, [r("i", {
                        staticClass: "fa-leaf fas"
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.games")) + "\n\t\t\t\t\t")]), e._v(" "), r("nuxt-link", {
                        staticClass: "category-item",
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "music"
                                }
                            }
                        }
                    }, [r("i", {
                        staticClass: "fa-music fas"
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.music")) + "\n\t\t\t\t\t")]), e._v(" "), r("nuxt-link", {
                        staticClass: "category-item",
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "socials"
                                }
                            }
                        }
                    }, [r("i", {
                        staticClass: "fa-comments fas"
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.socials")) + "\n\t\t\t\t\t")]), e._v(" "), r("nuxt-link", {
                        staticClass: "category-item",
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "videos"
                                }
                            }
                        }
                    }, [r("i", {
                        staticClass: "fa-play fas"
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.videos")) + "\n\t\t\t\t\t")]), e._v(" "), r("nuxt-link", {
                        staticClass: "category-item",
                        attrs: {
                            to: {
                                query: {
                                    page: e.currentPageNumber,
                                    category: "other"
                                }
                            }
                        }
                    }, [r("i", {
                        staticClass: "fa-box fas"
                    }), e._v("\n\t\t\t\t\t\t" + e._s(e.$t("store.category.other")) + "\n\t\t\t\t\t")])], 1)])]), e._v(" "), r("div", {
                        staticClass: "store-grid__content"
                    }, [e.filteredPresences.length ? r("div", {
                        staticClass: "presence-container"
                    }, e._l(e.paginatedData, (function(t) {
                        return r("StoreCard", {
                            key: t.metadata.service,
                            attrs: {
                                presence: t.metadata,
                                altnamesSearch: e.presenceSearch,
                                hot: e.hotPresences.filter((function(p) {
                                    return p.metadata.service === t.metadata.service
                                })).length > 0,
                                partner: e.partners.filter((function(p) {
                                    return p.storeName == t.metadata.service
                                })).length
                            }
                        })
                    })), 1) : r("div", {
                        staticClass: "presence-container",
                        attrs: {
                            id: "error"
                        }
                    }, [r("h1", {
                        staticClass: "heading text-highlight"
                    }, [e._v("\n\t\t\t\t\t" + e._s(e.$t("store.search.notFound")) + "\n\t\t\t\t\t"), r("i", {
                        staticClass: "fa-sad-tear fas"
                    })])])])]), e._v(" "), r("paginate", {
                        attrs: {
                            "container-class": "pagination-container",
                            "no-li-surround": !0,
                            "break-view-link-class": "hidden",
                            "page-link-class": "button--pagination",
                            "page-count": e.pageCount,
                            "page-range": 5,
                            "click-handler": e.paginationEvent,
                            "prev-text": "",
                            "next-text": "",
                            "page-class": "page-item"
                        },
                        model: {
                            value: e.currentPageNumber,
                            callback: function(t) {
                                e.currentPageNumber = t
                            },
                            expression: "currentPageNumber"
                        }
                    }, [r("span", {
                        attrs: {
                            slot: "breakViewContent"
                        },
                        slot: "breakViewContent"
                    })]), e._v(" "), r("adsense", {
                        staticStyle: {
                            "text-align": "center",
                            "margin-top": "0.25em"
                        },
                        attrs: {
                            "ad-slot": "5201967746"
                        }
                    })], 1)
                }), [], !1, null, null, null);
            t.default = component.exports;
            installComponents(component, {
                StoreCard: r(333).default
            })
        }
    }
]);