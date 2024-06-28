(() => {
        "use strict";
        var e = {
            359: function(e, t, l) {
                var r, a = this && this.__extends || (r = function(e, t) {
                        return r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var l in t) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l])
                        }, r(e, t)
                    }, function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

                        function __() {
                            this.constructor = e
                        }
                        r(e, t), e.prototype = null === t ? Object.create(t) : (__.prototype = t.prototype, new __)
                    }),
                    c = this && this.__rest || function(e, t) {
                        var l = {};
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (l[r] = e[r]);
                        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                            var a = 0;
                            for (r = Object.getOwnPropertySymbols(e); a < r.length; a++) t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (l[r[a]] = e[r[a]])
                        }
                        return l
                    },
                    n = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = n(l(685)),
                    s = n(l(609)),
                    i = function(e) {
                        function t(t) {
                            var l = e.call(this, t) || this;
                            return l.refCanvas = s.default.createRef(), l.confetti = null, l
                        }
                        return a(t, e), t.prototype.componentDidMount = function() {
                            if (this.refCanvas.current) {
                                var e = this.props,
                                    t = e.resize,
                                    l = e.useWorker,
                                    r = {
                                        resize: void 0 === t || t,
                                        useWorker: void 0 === l || l
                                    };
                                this.confetti = o.default.create(this.refCanvas.current, r), this.setRefConfetti()
                            }
                        }, t.prototype.componentDidUpdate = function(e) {
                            var t = this.props,
                                l = t.fire,
                                r = t.reset,
                                a = !!l,
                                c = l !== e.fire;
                            a && c && this.fireConfetti();
                            var n = !!r,
                                o = r !== e.reset;
                            n && o && this.resetConfetti()
                        }, t.prototype.componentWillUnmount = function() {
                            this.unsetRefConfetti()
                        }, t.prototype.setRefConfetti = function() {
                            var e = this.props.refConfetti;
                            e && e(this.confetti)
                        }, t.prototype.unsetRefConfetti = function() {
                            var e = this.props.refConfetti;
                            e && e(null)
                        }, t.prototype.fireConfetti = function() {
                            if (this.confetti) {
                                var e = this.props,
                                    t = e.onFire,
                                    l = e.onDecay,
                                    r = (e.onReset, e.className, e.style, e.width, e.height, e.refConfetti, e.fire, e.reset, c(e, ["onFire", "onDecay", "onReset", "className", "style", "width", "height", "refConfetti", "fire", "reset"]));
                                t && t();
                                var a = this.confetti(r);
                                a && a.then((function() {
                                    l && l()
                                }))
                            }
                        }, t.prototype.resetConfetti = function() {
                            if (this.confetti) {
                                this.confetti.reset();
                                var e = this.props.onReset;
                                e && e()
                            }
                        }, t.prototype.render = function() {
                            var e = this.props,
                                t = e.style,
                                l = e.className,
                                r = e.width,
                                a = e.height;
                            return s.default.createElement("canvas", {
                                ref: this.refCanvas,
                                style: t,
                                className: l,
                                width: r,
                                height: a
                            })
                        }, t
                    }(s.default.Component);
                t.default = i
            },
            609: e => {
                e.exports = window.React
            },
            87: e => {
                e.exports = window.wp.element
            },
            685: (e, t, l) => {
                l.r(t), l.d(t, {
                    create: () => c,
                    default: () => a
                });
                var r = {};
                ! function e(t, l, r, a) {
                    var c = !!(t.Worker && t.Blob && t.Promise && t.OffscreenCanvas && t.OffscreenCanvasRenderingContext2D && t.HTMLCanvasElement && t.HTMLCanvasElement.prototype.transferControlToOffscreen && t.URL && t.URL.createObjectURL);

                    function n() {}

                    function o(e) {
                        var r = l.exports.Promise,
                            a = void 0 !== r ? r : t.Promise;
                        return "function" == typeof a ? new a(e) : (e(n, n), null)
                    }
                    var s, i, m, h, d, w, u, v, f, g = (m = Math.floor(1e3 / 60), h = {}, d = 0, "function" == typeof requestAnimationFrame && "function" == typeof cancelAnimationFrame ? (s = function(e) {
                            var t = Math.random();
                            return h[t] = requestAnimationFrame((function l(r) {
                                d === r || d + m - 1 < r ? (d = r, delete h[t], e()) : h[t] = requestAnimationFrame(l)
                            })), t
                        }, i = function(e) {
                            h[e] && cancelAnimationFrame(h[e])
                        }) : (s = function(e) {
                            return setTimeout(e, m)
                        }, i = function(e) {
                            return clearTimeout(e)
                        }), {
                            frame: s,
                            cancel: i
                        }),
                        y = (v = {}, function() {
                            if (w) return w;
                            if (!r && c) {
                                var t = ["var CONFETTI, SIZE = {}, module = {};", "(" + e.toString() + ")(this, module, true, SIZE);", "onmessage = function(msg) {", "  if (msg.data.options) {", "    CONFETTI(msg.data.options).then(function () {", "      if (msg.data.callback) {", "        postMessage({ callback: msg.data.callback });", "      }", "    });", "  } else if (msg.data.reset) {", "    CONFETTI && CONFETTI.reset();", "  } else if (msg.data.resize) {", "    SIZE.width = msg.data.resize.width;", "    SIZE.height = msg.data.resize.height;", "  } else if (msg.data.canvas) {", "    SIZE.width = msg.data.canvas.width;", "    SIZE.height = msg.data.canvas.height;", "    CONFETTI = module.exports.create(msg.data.canvas);", "  }", "}"].join("\n");
                                try {
                                    w = new Worker(URL.createObjectURL(new Blob([t])))
                                } catch (e) {
                                    return void 0 !== typeof console && "function" == typeof console.warn && console.warn("🎊 Could not load worker", e), null
                                }! function(e) {
                                    function t(t, l) {
                                        e.postMessage({
                                            options: t || {},
                                            callback: l
                                        })
                                    }
                                    e.init = function(t) {
                                        var l = t.transferControlToOffscreen();
                                        e.postMessage({
                                            canvas: l
                                        }, [l])
                                    }, e.fire = function(l, r, a) {
                                        if (u) return t(l, null), u;
                                        var c = Math.random().toString(36).slice(2);
                                        return u = o((function(r) {
                                            function n(t) {
                                                t.data.callback === c && (delete v[c], e.removeEventListener("message", n), u = null, a(), r())
                                            }
                                            e.addEventListener("message", n), t(l, c), v[c] = n.bind(null, {
                                                data: {
                                                    callback: c
                                                }
                                            })
                                        }))
                                    }, e.reset = function() {
                                        for (var t in e.postMessage({
                                                reset: !0
                                            }), v) v[t](), delete v[t]
                                    }
                                }(w)
                            }
                            return w
                        }),
                        E = {
                            particleCount: 50,
                            angle: 90,
                            spread: 45,
                            startVelocity: 45,
                            decay: .9,
                            gravity: 1,
                            drift: 0,
                            ticks: 200,
                            x: .5,
                            y: .5,
                            shapes: ["square", "circle"],
                            zIndex: 100,
                            colors: ["#26ccff", "#a25afd", "#ff5e7e", "#88ff5a", "#fcff42", "#ffa62d", "#ff36ff"],
                            disableForReducedMotion: !1,
                            scalar: 1
                        };

                    function p(e, t, l) {
                        return function(e, t) {
                            return t ? t(e) : e
                        }(e && null != e[t] ? e[t] : E[t], l)
                    }

                    function C(e) {
                        return e < 0 ? 0 : Math.floor(e)
                    }

                    function z(e) {
                        return parseInt(e, 16)
                    }

                    function x(e) {
                        return e.map(b)
                    }

                    function b(e) {
                        var t = String(e).replace(/[^0-9a-f]/gi, "");
                        return t.length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]), {
                            r: z(t.substring(0, 2)),
                            g: z(t.substring(2, 4)),
                            b: z(t.substring(4, 6))
                        }
                    }

                    function P(e) {
                        e.width = document.documentElement.clientWidth, e.height = document.documentElement.clientHeight
                    }

                    function k(e) {
                        var t = e.getBoundingClientRect();
                        e.width = t.width, e.height = t.height
                    }

                    function S(e, l) {
                        var n, s = !e,
                            i = !!p(l || {}, "resize"),
                            m = p(l, "disableForReducedMotion", Boolean),
                            h = c && p(l || {}, "useWorker") ? y() : null,
                            d = s ? P : k,
                            w = !(!e || !h || !e.__confetti_initialized),
                            u = "function" == typeof matchMedia && matchMedia("(prefers-reduced-motion)").matches;

                        function v(t, l, c) {
                            for (var s, i, m, h, w = p(t, "particleCount", C), u = p(t, "angle", Number), v = p(t, "spread", Number), f = p(t, "startVelocity", Number), y = p(t, "decay", Number), E = p(t, "gravity", Number), z = p(t, "drift", Number), b = p(t, "colors", x), P = p(t, "ticks", Number), k = p(t, "shapes"), S = p(t, "scalar"), V = function(e) {
                                    var t = p(e, "origin", Object);
                                    return t.x = p(t, "x", Number), t.y = p(t, "y", Number), t
                                }(t), G = w, B = [], M = e.width * V.x, _ = e.height * V.y; G--;) B.push((void 0, void 0, i = (s = {
                                x: M,
                                y: _,
                                angle: u,
                                spread: v,
                                startVelocity: f,
                                color: b[G % b.length],
                                shape: k[(0, h = k.length, Math.floor(Math.random() * (h - 0)) + 0)],
                                ticks: P,
                                decay: y,
                                gravity: E,
                                drift: z,
                                scalar: S
                            }).angle * (Math.PI / 180), m = s.spread * (Math.PI / 180), {
                                x: s.x,
                                y: s.y,
                                wobble: 10 * Math.random(),
                                wobbleSpeed: Math.min(.11, .1 * Math.random() + .05),
                                velocity: .5 * s.startVelocity + Math.random() * s.startVelocity,
                                angle2D: -i + (.5 * m - Math.random() * m),
                                tiltAngle: (.5 * Math.random() + .25) * Math.PI,
                                color: s.color,
                                shape: s.shape,
                                tick: 0,
                                totalTicks: s.ticks,
                                decay: s.decay,
                                drift: s.drift,
                                random: Math.random() + 2,
                                tiltSin: 0,
                                tiltCos: 0,
                                wobbleX: 0,
                                wobbleY: 0,
                                gravity: 3 * s.gravity,
                                ovalScalar: .6,
                                scalar: s.scalar
                            }));
                            return n ? n.addFettis(B) : (n = function(e, t, l, c, n) {
                                    var s, i, m = t.slice(),
                                        h = e.getContext("2d"),
                                        d = o((function(t) {
                                                function o() {
                                                    s = i = null, h.clearRect(0, 0, c.width, c.height), n(), t()
                                                }
                                                s = g.frame((function t() {
                                                        !r || c.width === a.width && c.height === a.height || (c.width = e.width = a.width, c.height = e.height = a.height), c.width || c.height || (l(e), c.width = e.width, c.height = e.height), h.clearRect(0, 0, c.width, c.height), m = m.filter((function(e) {
                                                                return function(e, t) {
                                                                    t.x += Math.cos(t.angle2D) * t.velocity + t.drift, t.y += Math.sin(t.angle2D) * t.velocity + t.gravity, t.wobble += t.wobbleSpeed, t.velocity *= t.decay, t.tiltAngle += .1, t.tiltSin = Math.sin(t.tiltAngle), t.tiltCos = Math.cos(t.tiltAngle), t.random = Math.random() + 2, t.wobbleX = t.x + 10 * t.scalar * Math.cos(t.wobble), t.wobbleY = t.y + 10 * t.scalar * Math.sin(t.wobble);
                                                                    var l = t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,a=t.y+t.random*t.tiltSin,c=t.wobbleX+t.random*t.tiltCos,n=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle="rgba("+t.color.r+", "+t.color.g+", "+t.color.b+", "+(1-l)+")",e.beginPath(),"circle"===t.shape)e.ellipse?e.ellipse(t.x,t.y,Math.abs(c-r)*t.ovalScalar,Math.abs(n-a)*t.ovalScalar,Math.PI/
                                                                    10 * t.wobble, 0, 2 * Math.PI): function(e, t, l, r, a, c, n, o, s) {
                                                                    e.save(), e.translate(t, l), e.rotate(c), e.scale(r, a), e.arc(0, 0, 1, 0, o, void 0), e.restore()
                                                                }(e, t.x, t.y, Math.abs(c - r) * t.ovalScalar, Math.abs(n - a) * t.ovalScalar, Math.PI / 10 * t.wobble, 0, 2 * Math.PI);
                                                                else if ("star" === t.shape)
                                                                    for (var o = Math.PI / 2 * 3, s = 4 * t.scalar, i = 8 * t.scalar, m = t.x, h = t.y, d = 5, w = Math.PI / d; d--;) m = t.x + Math.cos(o) * i, h = t.y + Math.sin(o) * i, e.lineTo(m, h), o += w, m = t.x + Math.cos(o) * s, h = t.y + Math.sin(o) * s, e.lineTo(m, h), o += w;
                                                                else e.moveTo(Math.floor(t.x), Math.floor(t.y)), e.lineTo(Math.floor(t.wobbleX), Math.floor(a)), e.lineTo(Math.floor(c), Math.floor(n)), e.lineTo(Math.floor(r), Math.floor(t.wobbleY));
                                                                return e.closePath(), e.fill(), t.tick < t.totalTicks
                                                            }(h, e)
                                                        })), m.length ? s = g.frame(t) : o()
                                                })), i = o
                                        }));
                                return {
                                    addFettis: function(e) {
                                        return m = m.concat(e), d
                                    },
                                    canvas: e,
                                    promise: d,
                                    reset: function() {
                                        s && g.cancel(s), i && i()
                                    }
                                }
                            }(e, B, d, l, c)).promise
                    }

                    function f(l) {
                        var r = m || p(l, "disableForReducedMotion", Boolean),
                            a = p(l, "zIndex", Number);
                        if (r && u) return o((function(e) {
                            e()
                        }));
                        s && n ? e = n.canvas : s && !e && (e = function(e) {
                            var t = document.createElement("canvas");
                            return t.style.position = "fixed", t.style.top = "0px", t.style.left = "0px", t.style.pointerEvents = "none", t.style.zIndex = e, t
                        }(a), document.body.appendChild(e)), i && !w && d(e);
                        var c = {
                            width: e.width,
                            height: e.height
                        };

                        function f() {
                            if (h) {
                                var t = {
                                    getBoundingClientRect: function() {
                                        if (!s) return e.getBoundingClientRect()
                                    }
                                };
                                return d(t), void h.postMessage({
                                    resize: {
                                        width: t.width,
                                        height: t.height
                                    }
                                })
                            }
                            c.width = c.height = null
                        }

                        function g() {
                            n = null, i && t.removeEventListener("resize", f), s && e && (document.body.removeChild(e), e = null, w = !1)
                        }
                        return h && !w && h.init(e), w = !0, h && (e.__confetti_initialized = !0), i && t.addEventListener("resize", f, !1), h ? h.fire(l, c, g) : v(l, c, g)
                    }
                    return f.reset = function() {
                        h && h.reset(), n && n.reset()
                    }, f
                }

                function V() {
                    return f || (f = S(null, {
                        useWorker: !0,
                        resize: !0
                    })), f
                }
                l.exports = function() {
                    return V().apply(this, arguments)
                }, l.exports.reset = function() {
                    V().reset()
                }, l.exports.create = S
            }(function() {
                return "undefined" != typeof window ? window : "undefined" != typeof self ? self : this || {}
            }(), r, !1);
            const a = r.exports;
            var c = r.exports.create
        }
    }, t = {};

    function l(r) {
        var a = t[r];
        if (void 0 !== a) return a.exports;
        var c = t[r] = {
            exports: {}
        };
        return e[r].call(c.exports, c, c.exports, l), c.exports
    }
    l.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return l.d(t, {
            a: t
        }), t
    }, l.d = (e, t) => {
        for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, l.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), l.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        var e;
        l.g.importScripts && (e = l.g.location + "");
        var t = l.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var r = t.getElementsByTagName("script");
            if (r.length)
                for (var a = r.length - 1; a > -1 && (!e || !/^http(s?):/.test(e));) e = r[a--].src
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), l.p = e
    })(), (() => {
        var e = {};
        l.r(e), l.d(e, {
            activatePublishGuideFab: () => Z,
            closePublishGuide: () => D,
            deactivatePublishGuideFab: () => T,
            openPublishGuide: () => N,
            setGuideItems: () => U,
            togglePublishGuide: () => O
        });
        var t = {};
        l.r(t), l.d(t, {
            getGuideItems: () => $,
            getGuideItemsComplete: () => Y,
            isPublishGuideFabActive: () => j,
            isPublishGuideOpened: () => q
        });
        var r = l(87);
        const a = window.wp.i18n,
            c = window.wp.domReady;
        var n = l.n(c);
        const o = window.wp.notices,
            s = window.wp.coreData,
            i = window.wp.data,
            m = window.wp.apiFetch;
        var h = l.n(m),
            d = l(609);
        const w = window.wp.primitives,
            u = (0, d.createElement)(w.SVG, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, (0, d.createElement)(w.Path, {
                d: "M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"
            })),
            v = window.wp.components;

        function f(e) {
            const {
                tooltip: t,
                closeCallback: l
            } = e;
            return (0, r.createElement)(v.Popover, {
                anchorRect: t.anchorRect,
                className: "publish-guide-tooltip godaddy-styles" + (t.nextTooltip ? "" : " publish-guide-tooltip--next"),
                noArrow: !1
            }, (0, r.createElement)("p", {
                className: "publish-guide-tooltip__label"
            }, (0, r.createElement)("svg", {
                fill: "none",
                height: "16",
                viewBox: "0 0 18 16",
                width: "18",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)("path", {
                d: "M15.5266 0.730524C13.6559 -0.433974 11.1932 -0.159034 8.99681 1.21948C6.80726 -0.158272 4.34306 -0.433974 2.47469 0.730524C-0.48083 2.57438 -0.840161 7.32376 1.67287 11.3374C3.52521 14.2978 6.42199 16.0312 9.00063 15.9992C11.5793 16.0312 14.476 14.2978 16.3284 11.3374C18.8384 7.32376 18.4821 2.57438 15.5266 0.730524ZM3.03161 10.4905C2.51329 9.67028 2.12232 8.77644 1.87199 7.83937C1.6494 7.02621 1.56431 6.18166 1.62023 5.34054C1.73237 3.85769 2.33736 2.70233 3.32304 2.08695C4.30872 1.47157 5.61178 1.43577 6.99951 1.98489C7.21046 2.06958 7.41696 2.1649 7.61823 2.2705C6.8469 2.972 6.17632 3.7765 5.62551 4.66118C4.09969 7.09833 3.63431 9.81117 4.16682 11.9726C3.74261 11.5153 3.36252 11.0191 3.03161 10.4905ZM16.13 7.83937C15.8794 8.77632 15.4884 9.67012 14.9704 10.4905C14.6396 11.0201 14.2595 11.5174 13.8352 11.9757C14.3112 10.0374 13.9878 7.66344 12.8205 5.4365C12.802 5.39967 12.776 5.36715 12.7441 5.34104C12.7122 5.31494 12.6751 5.29584 12.6353 5.28499C12.5955 5.27414 12.5538 5.27178 12.5131 5.27807C12.4723 5.28436 12.4333 5.29916 12.3986 5.3215L8.75955 7.59185C8.72638 7.61245 8.69761 7.63939 8.6749 7.67112C8.65218 7.70284 8.63597 7.73873 8.62718 7.77673C8.61839 7.81473 8.6172 7.85408 8.62368 7.89254C8.63016 7.931 8.64419 7.9678 8.66494 8.00083L9.19898 8.85307C9.21962 8.88618 9.2466 8.9149 9.27839 8.93758C9.31017 8.96025 9.34612 8.97644 9.38418 8.98521C9.42224 8.99399 9.46167 8.99517 9.50019 8.9887C9.53871 8.98223 9.57557 8.96824 9.60867 8.94751L11.9676 7.47685C12.0439 7.70533 12.1202 7.93 12.1774 8.16229C12.3999 8.97547 12.485 9.82 12.4291 10.6611C12.317 12.1447 11.712 13.3001 10.7263 13.9155C10.2179 14.2258 9.63537 14.3941 9.03953 14.4029H8.96324C8.36738 14.3943 7.78478 14.226 7.27645 13.9155C6.29 13.3001 5.68502 12.1447 5.57287 10.6611C5.51741 9.82001 5.60249 8.97554 5.82463 8.16229C6.33618 6.28117 7.39305 4.59284 8.86254 3.30933C9.49632 2.75373 10.2182 2.30718 10.9987 1.98794C12.3826 1.43882 13.688 1.47461 14.6744 2.08999C15.6608 2.70537 16.2651 3.86073 16.3772 5.34358C16.4339 6.18344 16.3504 7.02686 16.13 7.83937Z",
                fill: "#2B2B2B"
            })), (0, a.__)("Get Started", "godaddy-launch")), (0, r.createElement)("h3", {
                className: "publish-guide-tooltip__title"
            }, t.title), (0, r.createElement)("div", {
                className: "publish-guide-tooltip__description"
            }, t.description), (0, r.createElement)(v.Icon, {
                className: "publish-guide-tooltip__close",
                icon: u,
                onClick: l
            }))
        }
        const g = window._expDataLayer || [],
            y = ({
                eid: e,
                type: t = "click",
                data: l = null
            }) => {
                g.push({
                    data: {
                        custom_properties: l,
                        eid: `${e}.${t}`,
                        type: t
                    },
                    schema: "add_event",
                    version: "v1"
                })
            },
            E = l.p + "images/illustration-rocket.d730dedc.png",
            p = "wp." + (window.location.pathname.includes("post-new") || window.location.pathname.includes("post.php") ? "editor" : "wpadmin"),
            C = e => {
                const {
                    children: t,
                    section: l,
                    target: a,
                    action: c
                } = e;
                return (0, r.isValidElement)(t) ? (0, r.cloneElement)(t, { ...t.props,
                    "data-test-eid": `${p}.${l}.${a}.${c}`,
                    onClick: (...e) => {
                        t.props ? .onClick && t.props ? .onClick(...e), y({
                            eid: `${p}.${l}.${a}`
                        })
                    }
                }) : t
            },
            z = ({
                isCaaSGenerated: e,
                isCompleted: t,
                onCloseModal: l,
                onCompleteStep: c
            }) => {
                const [n, o] = (0, r.useState)(!1);
                return (0, r.useEffect)((() => {
                    var e;
                    e = `${p}.launch/modal.finish.impression`, g.push({
                        data: {
                            eid: e,
                            type: "impression"
                        },
                        schema: "add_event",
                        version: "v1"
                    })
                }), []), (0, r.createElement)(v.Modal, {
                    className: "gdl-launch-site-confirm-modal godaddy-styles",
                    isDismissible: !1
                }, !t && (0, r.createElement)("div", {
                    className: "gdl-launch-site-confirm-modal__icon-container"
                }, (0, r.createElement)("img", {
                    alt: "",
                    src: E
                })), (0, r.createElement)("p", {
                    className: "gdl-launch-site-confirm-modal__header"
                }, e && t ? (0, a.__)("Before you launch your site, review your content.", "godaddy-launch") : (0, a.__)("Ready to launch?", "godaddy-launch")), (0, r.createElement)("div", {
                    className: "gdl-launch-site-confirm-modal__list-container"
                }, !e && (0, r.createElement)("p", {
                    className: "gdl-launch-site-confirm-modal__list-container__list-header"
                }, (0, a.__)("After your site is launched, it will be discoverable by search engines and available to the world.", "godaddy-launch")), e && (0, r.createElement)(r.Fragment, null, (0, r.createElement)("p", {
                    className: "gdl-launch-site-confirm-modal__list-container__list-header"
                }, t ? (0, a.__)("Your site was built using AI generated content, and we want to make sure you’re happy with it before launching.", "godaddy-launch") : (0, a.__)("Your site will be discoverable by search engines and available to the world. We want to make sure you’re happy with the AI generated content on your site before you launch it.", "godaddy-launch")), (0, r.createElement)("p", {
                    className: "gdl-launch-site-confirm-modal__agree-checkbox"
                }, (0, r.createElement)("label", {
                    htmlFor: "review-confirm"
                }, (0, r.createElement)("input", {
                    checked: n,
                    id: "review-confirm",
                    onClick: () => o(!n),
                    type: "checkbox"
                }), (0, a.__)("I have reviewed my content and am ready to launch.", "godaddy-launch"))))), (0, r.createElement)("div", {
                    className: "gdl-launch-site-confirm-modal__cta-container"
                }, (0, r.createElement)(C, {
                    action: "click",
                    section: "launch/modal/finish/choices",
                    target: "yes"
                }, (0, r.createElement)(v.Button, {
                    className: "live-site-confirm-modal-success",
                    disabled: !(!e || n),
                    onClick: c,
                    variant: "primary"
                }, (0, a.__)("Yes, launch my site", "godaddy-launch"))), (0, r.createElement)(C, {
                    action: "click",
                    section: "launch/modal/finish/choices",
                    target: "no"
                }, (0, r.createElement)(v.Button, {
                    onClick: l,
                    variant: "secondary"
                }, (0, a.__)("No, not yet", "godaddy-launch")))))
            };
        var x = (((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((({
            default: (0, r.createElement)(w.SVG, {
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, (0, r.createElement)(w.G, {
                fill: "currentColor"
            }, (0, r.createElement)(w.Circle, {
                cx: "12",
                cy: "4",
                r: "2"
            }), (0, r.createElement)(w.Path, {
                d: "M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"
            })))
        }.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19 9c0-.27614-.2239-.5-.5-.5h-13c-.27614 0-.5.22386-.5.5v7.5c0 .2761.22386.5.5.5h13c.2761 0 .5-.2239.5-.5zm-13.875-3.5c-.89746 0-1.625.72754-1.625 1.625v9.75c0 .8975.72754 1.625 1.625 1.625h13.75c.8975 0 1.625-.7275 1.625-1.625v-9.75c0-.89746-.7275-1.625-1.625-1.625z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Accordion Item",
                keywords: ["interface", "modal", "window"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m19 7c0-.27614-.2239-.5-.5-.5h-13c-.27614 0-.5.22386-.5.5v4.5c0 .2761.22386.5.5.5h13c.2761 0 .5-.2239.5-.5zm-.125 10h-13.75c-.06904 0-.125.056-.125.125v1.75c0 .069.05596.125.125.125h13.75c.069 0 .125-.056.125-.125v-1.75c0-.069-.056-.125-.125-.125zm-13.75-13.5c-.89746 0-1.625.72754-1.625 1.625v6.75c0 .8975.72754 1.625 1.625 1.625h13.75c.8975 0 1.625-.7275 1.625-1.625v-6.75c0-.89746-.7275-1.625-1.625-1.625zm0 12c-.89746 0-1.625.7275-1.625 1.625v1.75c0 .8975.72754 1.625 1.625 1.625h13.75c.8975 0 1.625-.7275 1.625-1.625v-1.75c0-.8975-.7275-1.625-1.625-1.625z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Accordion",
                keywords: ["item", "window"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M22 11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M22,11V3h-7v3H9V3H2v8h7V8h2v10h4v3h7v-8h-7v3h-2V8h2v3H22z M7,9H4V5h3V9z M17,15h3v4h-3V15z M17,5h3v4h-3V5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Diagram",
                keywords: ["blueprint", "flowchart", "hierarchy", "layout", "map", "sitemap"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5s2.01-4.5 4.5-4.5 4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0.26 0.27 20.1 20.1",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.2895508.29378255c-5.52000002 0-10.00000002 4.48-10.00000002 10.00000005 0 5.52 4.48 10 10.00000002 10 5.52 0 10-4.48 10-10 0-5.52000005-4.48-10.00000005-10-10.00000005zm0 18.00000005c-4.41000002 0-8.00000002-3.59-8.00000002-8 0-4.41000005 3.59-8.00000005 8.00000002-8.00000005 4.41 0 8 3.59 8 8.00000005 0 4.41-3.59 8-8 8zm0-12.50000005c-2.49000002 0-4.50000002 2.01-4.50000002 4.50000005 0 2.49 2.01 4.5 4.50000002 4.5 2.49 0 4.5-2.01 4.5-4.5 0-2.49000005-2.01-4.50000005-4.5-4.50000005zm0 5.50000005c-.55000002 0-1.00000002-.45-1.00000002-1 0-.55000005.45-1.00000005 1.00000002-1.00000005.55 0 1 .45 1 1.00000005 0 .55-.45 1-1 1z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Album",
                keywords: ["audio", "bullseye", "media", "music", "song", "target"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.1758 20.4657c0 1.0083.8159 1.8242 1.8242 1.8242s1.8242-.8159 1.8242-1.8242z"
                }), (0, r.createElement)(w.Path, {
                    d: "m12 4.5c2 0 5.5 1.5 5.5 4.78988v6.71012c0 .2761-.2239.5-.5.5h-10.00002c-.27614 0-.5-.2239-.5-.5v-6.71012c0-3.28988 3.5-4.78988 5.50002-4.78988zm0-3c-.7608 0-1.375.76821-1.375 1.52904-3.12502.97096-5.62502 3.47096-5.62501 6.26084v7.08582c0 .2652-.10536.5195-.29289.7071l-1.3506 1.3506c-.12155.1215-.18984.2864-.18984.4583 0 .358.2902.6482.64818.6482h16.37026c.358 0 .6482-.2902.6482-.6482 0-.1719-.0683-.3368-.1898-.4583l-1.3506-1.3506c-.1876-.1876-.2929-.4419-.2929-.7071v-7.08582c0-2.78988-2.5-5.28988-5.625-6.26084 0-.76083-.6142-1.52904-1.375-1.52904z"
                })))
            },
            meta: {
                label: "Alert",
                keywords: ["bell", "danger", "ring", "sound", "warning"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01.01L13.52 12h-.01l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.37-5.4-5.37z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Infinity",
                keywords: ["cycle", "eternal", "figure eight", "loop"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    className: "coblocks-icon-animation",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    className: "small-circle",
                    d: "M5.68,15.87a3.87,3.87,0,1,1,0-7.74,3.87,3.87,0,1,1,0,7.74Z",
                    stroke: "#fff",
                    strokeWidth: "1.5px",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }), (0, r.createElement)(w.Path, {
                    className: "medium-circle",
                    d: "M10.71,17.32A5.32,5.32,0,1,1,16.13,12,5.38,5.38,0,0,1,10.71,17.32Z",
                    stroke: "#fff",
                    strokeWidth: "1.5px",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }), (0, r.createElement)(w.Path, {
                    className: "large-circle",
                    d: "M16.15,18A6.06,6.06,0,0,1,10,12a6.12,6.12,0,0,1,12.23,0A6.06,6.06,0,0,1,16.15,18Z",
                    stroke: "#fff",
                    strokeWidth: "1.5px",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Animation",
                keywords: ["balls", "loading", "movement", "progression"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m7.4 8.5 4.77-8.26c-.7-.15-1.42-.24-2.17-.24-2.4 0-4.6.85-6.32 2.25l3.66 6.35zm12.14-1.5c-.92-2.92-3.15-5.26-6-6.34l-3.66 6.34zm.26 1h-7.49l.29.5 4.76 8.25c1.64-1.78 2.64-4.14 2.64-6.75 0-.69-.07-1.35-.2-2zm-13.26 2-3.9-6.75c-1.63 1.78-2.64 4.14-2.64 6.75 0 .69.07 1.35.2 2h7.49zm-6.08 3c.92 2.92 3.15 5.26 6 6.34l3.66-6.34zm11.27 0-3.9 6.76c.7.15 1.42.24 2.17.24 2.4 0 4.6-.85 6.32-2.25l-3.66-6.35z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12.25.26-.08-.04-.01.02c-.7-.15-1.42-.24-2.16-.24-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10c0-4.75-3.31-8.72-7.75-9.74zm5.16 6.74h-7.99l2.71-4.7c2.4.66 4.35 2.42 5.28 4.7zm-6.31-4.92-2.83 4.92-1.15 2-2.72-4.7c1.44-1.42 3.42-2.3 5.6-2.3.37 0 .74.03 1.1.08zm-7.4 3.01 2.84 4.91 1.15 2h-5.43c-.16-.64-.26-1.31-.26-2 0-1.85.64-3.55 1.7-4.91zm-1.11 7.91h7.98l-2.71 4.7c-2.4-.67-4.34-2.42-5.27-4.7zm6.31 4.91 3.99-6.91 2.72 4.7c-1.45 1.42-3.43 2.3-5.61 2.3-.38 0-.74-.04-1.1-.09zm7.4-3-4-6.91h5.43c.17.64.27 1.31.27 2 0 1.85-.64 3.55-1.7 4.91z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Aperture",
                keywords: ["camera", "creative", "film", "media", "photo", "photography"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12 4c-4.416 0-8 3.584-8 8s3.584 8 8 8h4v-1.6h-4c-3.472 0-6.4-2.928-6.4-6.4s2.928-6.4 6.4-6.4 6.4 2.928 6.4 6.4v1.144c0 .632-.568 1.256-1.2 1.256s-1.2-.624-1.2-1.256v-1.144c0-2.208-1.792-4-4-4s-4 1.792-4 4 1.792 4 4 4c1.104 0 2.112-.448 2.832-1.176.52.712 1.416 1.176 2.368 1.176 1.576 0 2.8-1.28 2.8-2.856v-1.144c0-4.416-3.584-8-8-8zm0 10.4c-1.328 0-2.4-1.072-2.4-2.4s1.072-2.4 2.4-2.4 2.4 1.072 2.4 2.4-1.072 2.4-2.4 2.4z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "At",
                keywords: ["at sign", "email", "letter", "mail", "mention", "message", "symbol"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 14 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0v11.7222222c-.65555556-.3777778-1.41111111-.6111111-2.22222222-.6111111-2.45555556 0-4.44444445 1.9888889-4.44444445 4.4444445 0 2.4555555 1.98888889 4.4444444 4.44444445 4.4444444 2.45555552 0 4.44444442-1.9888889 4.44444442-4.4444444v-11.11111116h4.4444445v-4.44444444z",
                    transform: "translate(-3)",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 14 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0v11.7222222c-.65555556-.3777778-1.41111111-.6111111-2.22222222-.6111111-2.45555556 0-4.44444445 1.9888889-4.44444445 4.4444445 0 2.4555555 1.98888889 4.4444444 4.44444445 4.4444444 2.45555552 0 4.44444442-1.9888889 4.44444442-4.4444444v-11.11111116h4.4444445v-4.44444444zm-2.22222222 17.7777778c-1.22222222 0-2.22222222-1-2.22222222-2.2222222 0-1.2222223 1-2.2222223 2.22222222-2.2222223s2.22222222 1 2.22222222 2.2222223c0 1.2222222-1 2.2222222-2.22222222 2.2222222z",
                    transform: "translate(-3)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Audiotrack",
                keywords: ["media", "music", "podcast", "song", "sound", "tune"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m20 21v-3c0-1.1046-.8954-2-2-2h-12c-1.10457 0-2 .8954-2 2v3",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }), (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "8",
                    fill: "currentColor",
                    r: "5"
                }))
            },
            meta: {
                label: "Author",
                keywords: ["head", "human", "people", "person"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.3519669 11.7141378v8.2858622h8.2815735v-8.2858622zm-10.3519669 8.2858622h8.2815735v-8.2858622h-8.2815735zm0-18.64319006v8.28586225h8.2815735v-8.28586225zm14.1407867-1.35680994-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.1407867 2.93112377 2.9296067 2.93112377-2.9296067 2.93112377-2.9296066-2.93112377zm-7.92960658.49715173v4.14293113h-4.14078675v-4.14293113zm10.35196688 10.3573278v4.1429311h-4.1407868v-4.1429311zm-10.35196688 0v4.1429311h-4.14078675v-4.1429311zm7.92960658-13.7856033-5.8592132 5.85189021 5.8592132 5.86224759 5.8592133-5.86224759zm-5.8592132 1.35680994h-8.2815735v8.28586225h8.2815735zm10.3519669 10.35732786h-8.2815735v8.2858622h8.2815735zm-10.3519669 0h-8.2815735v8.2858622h8.2815735z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Blocks",
                keywords: ["boxes", "build", "square", "stack", "widgets"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M6 13c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-3 .5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM6 5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm15 5.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM14 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0-3.5c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zm-11 10c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm7 7c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm0-17c.28 0 .5-.22.5-.5s-.22-.5-.5-.5-.5.22-.5.5.22.5.5.5zM10 7c.55 0 1-.45 1-1s-.45-1-1-1-1 .45-1 1 .45 1 1 1zm0 5.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm8 .5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-8c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 8.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zM14 17c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 3.5c-.28 0-.5.22-.5.5s.22.5.5.5.5-.22.5-.5-.22-.5-.5-.5zm-4-12c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm4-4.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-4c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Blur",
                keywords: ["dots", "plot", "random"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m17.5215122.06508061c-.2732809 0-.5360511.10510805-.7462672.30481335l-9.41768139 9.41768143 2.89047139 2.89047141 9.4176815-9.41768142c.4099214-.4099214.4099214-1.07210213 0-1.48202353l-1.4084479-1.40844789c-.2102161-.2102161-.4729863-.30481335-.7357564-.30481335zm-12.26610962 11.56188569c-1.74479366 0-3.15324155 1.4084479-3.15324155 3.1532415 0 1.3769155-1.2192534 2.1021611-2.10216103 2.1021611.96699408 1.2823182 2.61719049 2.102161 4.20432206 2.102161 2.32288795 0 4.20432207-1.8814341 4.20432207-4.2043221 0-1.7447936-1.40844789-3.1532415-3.15324155-3.1532415z",
                    transform: "translate(0 .5)",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5.25540258 13.7291273c.57809428 0 1.05108052.4729863 1.05108052 1.0510805 0 1.1561886-.94597247 2.1021611-2.10216104 2.1021611-.17868368 0-.34685657-.0210216-.52554025-.0525541.32583496-.5780942.52554025-1.2718074.52554025-2.049607 0-.5780942.47298624-1.0510805 1.05108052-1.0510805zm12.26610962-13.66404669c-.2732809 0-.5360511.10510805-.7462672.30481335l-9.41768139 9.41768143 2.89047139 2.89047141 9.4176815-9.41768142c.4099214-.4099214.4099214-1.07210213 0-1.48202353l-1.4084479-1.40844789c-.2102161-.2102161-.4729863-.30481335-.7357564-.30481335zm-12.26610962 11.56188569c-1.74479366 0-3.15324155 1.4084479-3.15324155 3.1532415 0 1.3769155-1.2192534 2.1021611-2.10216103 2.1021611.96699408 1.2823182 2.61719049 2.102161 4.20432206 2.102161 2.32288795 0 4.20432207-1.8814341 4.20432207-4.2043221 0-1.7447936-1.40844789-3.1532415-3.15324155-3.1532415z",
                    transform: "translate(0 .5)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Brush",
                keywords: ["artist", "colors", "creative", "design", "media", "paint", "paintbrush", "palette"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "-3 -3 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M1.5 18.75A.75.75 0 0 1 .75 18V3A2.753 2.753 0 0 1 3.5.25h11A2.753 2.753 0 0 1 17.25 3v10a2.752 2.752 0 0 1-2.75 2.75H6.166c-.27 0-.533.088-.749.25L1.95 18.6a.751.751 0 0 1-.45.15Zm2-17A1.251 1.251 0 0 0 2.25 3v13.5l2.267-1.7a2.767 2.767 0 0 1 1.65-.55H14.5A1.25 1.25 0 0 0 15.75 13V3a1.251 1.251 0 0 0-1.25-1.25h-11Z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Bubble",
                keywords: ["conversation", "head", "human", "people", "person", "speach", "speak", "talk", "testimonial"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.6611198 16.3587437-8.2604891-8.26048913c.8460633-2.12880446.4093855-4.63970202-1.3100335-6.36821846-2.09241464-2.09241464-5.34930351-2.2834612-7.66915452-.59133458l3.4934227 3.50252016-1.2918386 1.28274115-3.48432525-3.48432525c-1.69212662 2.31075356-1.50108006 5.57673988.59133458 7.66005711 1.69212662 1.6921266 4.15753691 2.1379019 6.26814645 1.3464233l8.28778144 8.2877814c.3548008.3548008.9279404.3548008 1.2827412 0l2.0924146-2.0924146c.3638982-.3457033.3638982-.9188429 0-1.2827411z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.6627376 17.0986011-8.2473132-8.24731315c.8447138-2.1254089.4087325-4.63230145-1.307944-6.35806082-2.08907708-2.08907713-5.34077104-2.27981895-7.65692177-.59039136l3.48785051 3.49693345-1.28977806 1.28069511-3.47876756-3.47876757c-1.68942759 2.30706779-1.49868577 5.56784469.59039136 7.64783884 1.68942759 1.6894276 4.15090542 2.1344919 6.25814844 1.3442758l8.27456198 8.274562c.3542348.3542348.9264603.3542348 1.2806951 0l2.0890772-2.0890772c.3633177-.3451518.3633177-.9173773 0-1.2806951zm-2.7248832 1.4532711-8.5924651-8.59246508c-.55405958.40873248-1.17169978.65397198-1.8165888.74480138-1.23528039.1816589-2.53414139-.1907418-3.47876757-1.13536797-.86287968-.85379674-1.26252922-1.99824769-1.19894861-3.12453275l2.80662971 2.80662971 3.85116827-3.85116827-2.80662971-2.80662971c1.12628506-.0635806 2.26165307.33606893 3.12453275 1.18986567.98095795.98095796 1.35335866 2.33431662 1.12628506 3.59684584-.10899533.64488902-.38148365 1.24436333-.79929908 1.78025703l8.58338208 8.58338215z",
                    fill: "currentColor",
                    transform: "translate(0 -.734049)"
                }))
            },
            meta: {
                label: "Tools",
                keywords: ["build", "construction", "settings", "work", "wrench"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 5.45454545c1.0090909 0 1.8181818-.81818181 1.8181818-1.81818181 0-.34545455-.0909091-.66363637-.2636363-.93636364l-1.5545455-2.7-1.55454545 2.7c-.17272728.27272727-.26363637.59090909-.26363637.93636364 0 1 .81818182 1.81818181 1.81818182 1.81818181zm4.1818182 9.08181815-.9727273-.9727272-.9818182.9727272c-1.1818182 1.1818182-3.25454543 1.1909091-4.44545452 0l-.97272727-.9727272-.99090909.9727272c-.59090909.5909091-1.38181818.9181819-2.21818182.9181819-.66363636 0-1.27272727-.209091-1.78181818-.5545455v4.1909091c0 .5.40909091.9090909.90909091.9090909h14.54545457c.5 0 .9090909-.4090909.9090909-.9090909v-4.1909091c-.5090909.3454545-1.1181818.5545455-1.7818182.5545455-.8363636 0-1.6272727-.3272728-2.2181818-.9181819zm1.2727273-6.35454542h-4.5454546v-1.81818182h-1.81818181v1.81818182h-4.54545454c-1.50909091 0-2.72727273 1.21818182-2.72727273 2.72727272v1.4c0 .9818182.8 1.7818182 1.78181818 1.7818182.47272727 0 .92727273-.1818182 1.25454545-.5181818l1.94545455-1.9363637 1.93636364 1.9363637c.67272727.6727272 1.84545456.6727272 2.51818186 0l1.9454545-1.9363637 1.9363636 1.9363637c.3363637.3363636.7818182.5181818 1.2545455.5181818.9818182 0 1.7818182-.8 1.7818182-1.7818182v-1.4c.0090909-1.5090909-1.2090909-2.72727272-2.7181818-2.72727272z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Cake",
                keywords: ["baking", "birthday", "celebration", "food", "fun", "party", "taste"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m22 4h-1v-2h-2v2h-14v-2h-2v2h-1c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm0 18h-20v-11h20zm0-13h-20v-3h20zm-18 4h4v4h-4z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Calendar",
                keywords: ["date", "day", "month", "time"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m7 1-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2h-3.17l-1.83-2zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18 3h-3.17l-1.83-2h-6l-1.83 2h-3.17c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm0 14h-16v-12h4.05l1.83-2h4.24l1.83 2h4.05zm-8-11c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Camera",
                keywords: ["aperture", "creative", "film", "media", "photography", "photo"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    fill: "currentColor",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.39 14.99l-1.41 1.41L12 10.43 6.02 16.4l-1.41-1.41L12 7.6l7.39 7.39z"
                }))
            },
            meta: {
                label: "Caret",
                keywords: ["arrow", "direction", "up"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M21 3H3c-1.1 0-2 .9-2 2v3h2V5h18v14h-7v2h7c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM1 18v3h3c0-1.66-1.34-3-3-3zm0-4v2c2.76 0 5 2.24 5 5h2c0-3.87-3.13-7-7-7zm0-4v2c4.97 0 9 4.03 9 9h2c0-6.08-4.93-11-11-11z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Cast",
                keywords: ["broadcast", "chromecast", "screen", "television", "tv", "video", "vodcast"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m5.87563 13 5.50317-5.48574-1.194-1.01418-4.24673 4.23322-1.43827-1.5881-1.24834.9572zm14.12437-7.49992h-7v1.49992h7zm0 5.99992h-10v1.5h10zm-13 5.5156h13v1.4843h-13z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Checklist",
                keywords: ["check", "done", "list", "okay", "task"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12 0.0585938c-6.5916562 0-11.9414062 5.34975-11.9414062 11.9414062s5.34975 11.9414062 11.9414062 11.9414062 11.9414062-5.34975 11.9414062-11.9414062-5.34975-11.9414062-11.9414062-11.9414062zm0 21.7138671c-5.3870691 0-9.7724609-4.3853918-9.7724609-9.7724609s4.3853918-9.7724609 9.7724609-9.7724609 9.7724609 4.3853918 9.7724609 9.7724609-4.3853918 9.7724609-9.7724609 9.7724609zm4.59-14.1924609-6.59 6.59-2.59-2.58-1.41 1.41 4 4 8-8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Checkmark circle",
                keywords: ["check", "confirm", "done", "okay"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5 11h-4v4h-2v-4h-4v-2h4v-4h2v4h4z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11 5h-2v4h-4v2h4v4h2v-4h4v-2h-4zm-1-5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Add Circle",
                keywords: ["add", "circle", "insert", "math", "plus"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm5 11h-10v-2h10z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 9v2h10v-2zm5-9c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Substract Circle",
                keywords: ["remove", "circle", "insert", "delete", "math", "minus"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m13.1578947 9.47368421v-6.31578947l-3.1578947-3.15789474-3.15789474 3.15789474v2.10526315h-6.31578947v14.73684211h18.94736841v-10.52631579zm-8.42105259 8.42105259h-2.10526316v-2.1052631h2.10526316zm0-4.2105263h-2.10526316v-2.1052631h2.10526316zm0-4.21052629h-2.10526316v-2.10526316h2.10526316zm6.31578949 8.42105259h-2.10526318v-2.1052631h2.10526318zm0-4.2105263h-2.10526318v-2.1052631h2.10526318zm0-4.21052629h-2.10526318v-2.10526316h2.10526318zm0-4.21052632h-2.10526318v-2.10526315h2.10526318zm6.3157895 12.63157891h-2.1052632v-2.1052631h2.1052632zm0-4.2105263h-2.1052632v-2.1052631h2.1052632z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "City",
                keywords: ["building", "business", "corporation", "location", "map", "public", "skyscraper", "town"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6m0-2C9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96C18.67 6.59 15.64 4 12 4z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Cloud",
                keywords: ["forecast", "internet", "network", "rain", "sky", "weather"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M8.13877 4.50131L15.7841 4.5C17.2301 4.49975 17.7552 4.65057 18.2852 4.93385C18.8153 5.21712 19.2322 5.63288 19.5174 6.16268C19.8027 6.69248 19.9558 7.21802 19.9628 8.66734L19.9998 16.3299C20.0068 17.7793 19.8587 18.3048 19.5786 18.8347C19.2984 19.3646 18.8855 19.7805 18.3582 20.064C17.8309 20.3475 17.3073 20.4984 15.8612 20.4987L8.21593 20.5C6.76988 20.5002 6.24478 20.3494 5.71476 20.0662C5.18474 19.7829 4.76784 19.3671 4.48256 18.8373C4.19728 18.3075 4.04418 17.782 4.03719 16.3327L4.00024 8.67006C3.99325 7.22074 4.14128 6.69516 4.42145 6.16526C4.70162 5.63536 5.11451 5.21946 5.64179 4.936C6.16908 4.65255 6.69272 4.50155 8.13877 4.50131V4.50131ZM7.55556 7.16667C7.06464 7.16667 6.66667 7.56464 6.66667 8.05556V16.9444C6.66667 17.4354 7.06464 17.8333 7.55556 17.8333H10.2222C10.7131 17.8333 11.1111 17.4354 11.1111 16.9444V8.05556C11.1111 7.56464 10.7131 7.16667 10.2222 7.16667H7.55556ZM13.7778 13.3889C13.2869 13.3889 12.8889 13.7869 12.8889 14.2778V16.9444C12.8889 17.4354 13.2869 17.8333 13.7778 17.8333H16.4444C16.9354 17.8333 17.3333 17.4354 17.3333 16.9444V14.2778C17.3333 13.7869 16.9354 13.3889 16.4444 13.3889H13.7778ZM13.7778 7.16667C13.2869 7.16667 12.8889 7.56464 12.8889 8.05556V10.7222C12.8889 11.2131 13.2869 11.6111 13.7778 11.6111H16.4444C16.9354 11.6111 17.3333 11.2131 17.3333 10.7222V8.05556C17.3333 7.56464 16.9354 7.16667 16.4444 7.16667H13.7778Z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "CoBlocks",
                keywords: ["blocks", "build", "design", "gutenberg"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c-5.52222222 0-10 4.47777778-10 10 0 5.5222222 4.47777778 10 10 10 .9222222 0 1.6666667-.7444444 1.6666667-1.6666667 0-.4333333-.1666667-.8222222-.4333334-1.1222222-.2555555-.2888889-.4222222-.6777778-.4222222-1.1 0-.9222222.7444445-1.6666667 1.6666667-1.6666667h1.9666666c3.0666667 0 5.5555556-2.4888888 5.5555556-5.55555551 0-4.91111111-4.4777778-8.88888889-10-8.88888889zm-6.11111111 10c-.92222222 0-1.66666667-.74444444-1.66666667-1.66666667 0-.92222222.74444445-1.66666666 1.66666667-1.66666666s1.66666667.74444444 1.66666667 1.66666666c0 .92222223-.74444445 1.66666667-1.66666667 1.66666667zm3.33333333-4.44444444c-.92222222 0-1.66666666-.74444445-1.66666666-1.66666667s.74444444-1.66666667 1.66666666-1.66666667 1.66666667.74444445 1.66666667 1.66666667-.74444445 1.66666667-1.66666667 1.66666667zm5.55555558 0c-.9222222 0-1.6666667-.74444445-1.6666667-1.66666667s.7444445-1.66666667 1.6666667-1.66666667 1.6666666.74444445 1.6666666 1.66666667-.7444444 1.66666667-1.6666666 1.66666667zm3.3333333 4.44444444c-.9222222 0-1.6666667-.74444444-1.6666667-1.66666667 0-.92222222.7444445-1.66666666 1.6666667-1.66666666s1.6666667.74444444 1.6666667 1.66666666c0 .92222223-.7444445 1.66666667-1.6666667 1.66666667z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 20c-5.51 0-10-4.49-10-10s4.49-10 10-10 10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67 0 1.38-1.12 2.5-2.5 2.5zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5 0-.16-.08-.28-.14-.35-.41-.46-.63-1.05-.63-1.65 0-1.38 1.12-2.5 2.5-2.5h1.77c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"
                }), (0, r.createElement)(w.Circle, {
                    cx: "4.5",
                    cy: "9.5",
                    r: "1.5"
                }), (0, r.createElement)(w.Circle, {
                    cx: "7.5",
                    cy: "5.5",
                    r: "1.5"
                }), (0, r.createElement)(w.Circle, {
                    cx: "12.5",
                    cy: "5.5",
                    r: "1.5"
                }), (0, r.createElement)(w.Circle, {
                    cx: "15.5",
                    cy: "9.5",
                    r: "1.5"
                })))
            },
            meta: {
                label: "Color Palette",
                keywords: ["artist", "creative", "design", "media", "paint", "palette"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.6750451 2.92459381-2.5996389-2.59963894c-.4332732-.43327316-1.133176-.43327316-1.5664491 0l-3.4661853 3.46618525-2.14414661-2.12192751-1.5664491 1.5664491 1.57755867 1.57755868-9.90973476 9.90973471v5.2770449h5.27704485l9.90973475-9.9097348 1.5775587 1.5775587 1.5664491-1.5664491-2.1330371-2.13303707 3.4661853-3.46618525c.4443827-.44438273.4443827-1.14428552.0111095-1.57755867zm-15.3200944 14.85349259-2.13303708-2.1330371 8.95431188-8.9543119 2.1330371 2.13303708z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m16.2866269 2.68018331 1.0220802 1.02208026-2.9884738 2.98847383-1.0220803-1.02208027zm.0111095-2.67740592c-.2888487 0-.5665879.11109568-.7887793.32217748l-3.4661853 3.46618525-2.14414661-2.12192751-1.5664491 1.5664491 1.57755867 1.57755868-9.90973476 9.90973471v5.2770449h5.27704485l9.90973475-9.9097348 1.5775587 1.5775587 1.5664491-1.5664491-2.1330371-2.13303707 3.4661853-3.46618525c.4443827-.44438273.4443827-1.14428552.0111095-1.57755867l-2.5996389-2.59963894c-.2221914-.2110818-.4999306-.32217748-.7776698-.32217748zm-11.9427857 17.77530901-2.13303708-2.1330371 8.95431188-8.9543119 2.1330371 2.13303708z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Color Picker",
                keywords: ["artist", "creative", "design", "eye dropper", "media", "paint", "palette"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 4.75h14c.6904 0 1.25.55964 1.25 1.25v12c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25v-12c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m9 5.5h6v13h-6z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Column",
                keywords: ["divider", "middle", "separator"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M22,10V6c0-1.11-0.9-2-2-2H4C2.9,4,2.01,4.89,2.01,6v4C3.11,10,4,10.9,4,12s-0.89,2-2,2v4c0,1.1,0.9,2,2,2h16 c1.1,0,2-0.9,2-2v-4c-1.1,0-2-0.9-2-2S20.9,10,22,10z M13,17.5h-2v-2h2V17.5z M13,13h-2v-2h2V13z M13,8.5h-2v-2h2V8.5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM11 15h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Ticket",
                keywords: ["admission", "coupon", "receipt", "voucher"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m4.99996 5-.00005 1.55h8.71739v-1.55zm-.00005 6.5312-.00005 1.5h14.00004v-1.5zm-.00015 5.9688.00005 1.5h8.71739v-1.5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Content",
                keywords: ["line", "paragraph", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18.1818182 7.87545455c-1.0045455 0-1.8181818.81363636-1.8181818 1.81818181v2.72727274h-12.72727276v-2.72727274c0-1.00454545-.81363637-1.81818181-1.81818182-1.81818181-1.00454546 0-1.81818182.81363636-1.81818182 1.81818181v5.14764964c0 1 .81818182 1.8181818 1.81818182 1.8181818h16.36363638c1 0 1.8181818-.8181818 1.8181818-1.8181818v-5.14764964c0-1.00454545-.8136364-1.81818181-1.8181818-1.81818181zm-2.7272727-4.54545455h-10.90909095c-1 0-1.81818182.81818182-1.81818182 1.81818182v1.95909091c1.05454545.37727272 1.81818182 1.37727272 1.81818182 2.55909091v1.84545456h10.90909095v-1.84545456c0-1.18181819.7636363-2.18181819 1.8181818-2.55909091v-1.95909091c0-1-.8181818-1.81818182-1.8181818-1.81818182z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m17.5 7.5v-1.66666667c0-1.375-1.125-2.5-2.5-2.5h-10c-1.375 0-2.5 1.125-2.5 2.5v1.66666667c-1.375 0-2.5 1.125-2.5 2.5v4.1666667c0 1.375 1.125 2.5 2.5 2.5h15c1.375 0 2.5-1.125 2.5-2.5v-4.1666667c0-1.375-1.125-2.5-2.5-2.5zm-13.33333333-1.66666667c0-.45833333.375-.83333333.83333333-.83333333h10c.4583333 0 .8333333.375.8333333.83333333v2.31666667c-.5083333.45833333-.8333333 1.11666667-.8333333 1.85v1.6666667h-10v-1.6666667c0-.73333333-.325-1.39166667-.83333333-1.85zm14.16666663 8.33333337c0 .4583333-.375.8333333-.8333333.8333333h-15c-.45833333 0-.83333333-.375-.83333333-.8333333v-4.1666667c0-.45833333.375-.83333333.83333333-.83333333s.83333333.375.83333333.83333333v3.3333333h13.33333337v-3.3333333c0-.45833333.375-.83333333.8333333-.83333333s.8333333.375.8333333.83333333z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Couch",
                keywords: ["chair", "chill", "relax", "rest", "sleep", "sofa", "weekend"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    fill: "currentColor",
                    d: "m12.11 5.19 1.09.2a7.76 7.76 0 0 1 6.13 5.82l.33 1.35-.15 1.35A7.78 7.78 0 1 1 11 5.29l1.08-.1h.03ZM12.25 0C11 0 10 .34 10 .75c0 .22.29.42.75.56v1a10.78 10.78 0 1 0 11.74 11.94H24c.55 0 1-.84 1-1.87 0-1.03-.45-1.88-1-1.88h-1.75a10.78 10.78 0 0 0-8.5-8.06V1.31c.46-.14.75-.34.75-.56 0-.41-1-.75-2.25-.75Z"
                }), (0, r.createElement)(w.Path, {
                    fill: "currentColor",
                    d: "M6.19 11.42v-.41c.8 0 1-.13 1-.67h.52V15h-.56v-3.58h-.96ZM9 14.91c0-1.25 2.42-1.92 2.42-3.29a.769.769 0 0 0-.85-.86c-.7 0-1 .49-1 1.14H9a1.5 1.5 0 0 1 1.55-1.63 1.23 1.23 0 0 1 1.37 1.35c0 1.35-1.9 2.15-2.29 2.87h2.61v.5H9v-.08Zm4.7-3.81h.54c0 .6.43 1 1.11 1 .68 0 1.11-.32 1.11-.9 0-.58-.57-.89-1.18-.89H15v-.5h.25c.53 0 .93-.2.93-.77 0-.57-.34-.76-.87-.76a.83.83 0 0 0-.92.84h-.51a1.32 1.32 0 0 1 1.43-1.33 1.26 1.26 0 0 1 1.41 1.19 1 1 0 0 1-.68 1 1.13 1.13 0 0 1 .96 1.19c0 .84-.66 1.39-1.67 1.39a1.46 1.46 0 0 1-1.63-1.46Zm2.17 5.55h-2.3v-.34l2.35-3.21h.48v3h.75v.5h-.75v1.1h-.53v-1.05Zm0-.5v-2.24l-1.6 2.24h1.6Z"
                }))
            },
            meta: {
                label: "Counter",
                keywords: ["count", "number", "stats", "ticker", "time", "watch"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18 2h-16c-1.11 0-1.99.89-1.99 2l-.01 12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2v-12c0-1.11-.89-2-2-2zm0 14h-16v-6h16zm0-10h-16v-2h16z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Credit Card",
                keywords: ["cash", "checkout", "commerce", "ecommerce", "money", "payment", "shop", "store"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m12.8672 6h1.3535l4.8164 12.4277h-1.96l-1.0371-2.8125h-4.0736-.8668l-.3078.6177.0557-.1498-.87191 2.3446h-1.91602l1.49903-3.875h-2.6211l-.69727 1.875h-1.27734l3.20508-8.28512h.90234l1.48539 3.83272zm2.6455 8.0596-1.9863-5.51956-1.9864 5.51956zm-5.58106-.544-1.32422-3.67966-1.32422 3.67966z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Custom typography",
                keywords: ["alphabet", "letter", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11 0v3.03759398c3.39.49122808 6 3.39849625 6 6.93734336 0 .90225566-.18 1.75438596-.48 2.54636596l2.6 1.5338345c.56-1.2431077.88-2.6265664.88-4.08020046 0-5.19298245-3.95-9.47368421-9-9.97493734zm-1 16.9924812c-3.87 0-7-3.1378446-7-7.01754386 0-3.53884711 2.61-6.44611528 6-6.93734336v-3.03759398c-5.06.50125313-9 4.77192982-9 9.97493734 0 5.53383456 4.47 10.02506266 9.99 10.02506266 3.31 0 6.24-1.6140351 8.06-4.1002506l-2.6-1.5338346c-1.28 1.60401-3.24 2.6265664-5.45 2.6265664z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Pie Chart",
                keywords: ["analytics", "chart", "circle", "data", "graph", "pie", "stats"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18.1818182 0h-16.36363638c-1 0-1.81818182.81818182-1.81818182 1.81818182v12.90909088c0 1 .81818182 1.8181818 1.81818182 1.8181818h6.36363636l-1.81818182 2.7272728v.9090909h7.27272724v-.9090909l-1.8181818-2.7272728h6.3636364c1 0 1.8181818-.8181818 1.8181818-1.8181818v-12.90909088c0-1-.8181818-1.81818182-1.8181818-1.81818182z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18.1818182 0h-16.36363638c-1 0-1.81818182.81818182-1.81818182 1.81818182v12.90909088c0 1 .81818182 1.8181818 1.81818182 1.8181818h6.36363636l-1.81818182 2.7272728v.9090909h7.27272724v-.9090909l-1.8181818-2.7272728h6.3636364c1 0 1.8181818-.8181818 1.8181818-1.8181818v-12.90909088c0-1-.8181818-1.81818182-1.8181818-1.81818182zm0 12.9090909h-16.36363638v-11.09090908h16.36363638z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Desktop",
                keywords: ["computer", "device", "monitor", "office", "pc", "screen"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12.5 0c.8325 0 1.5.61363636 1.5 1.36363636v11.27272724c0 .75-.675 1.3636364-1.5 1.3636364l-.5-2v-9h-10v9h10l.5 2h-11c-.8325 0-1.5-.6136364-1.5-1.3636364v-11.27272724c0-.75.6675-1.36363636 1.5-1.36363636zm-10 1c-.27614237 0-.5.22385763-.5.5s.22385763.5.5.5.5-.22385763.5-.5-.22385763-.5-.5-.5z",
                    transform: "translate(1 1.001872)"
                }))
            },
            meta: {
                label: "Desktop",
                keywords: ["square", "window"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m15.5555556 14.4444444-4.4444445-4.4444444v-3.53333333c1.2888889-.46666667 2.2222222-1.68888889 2.2222222-3.13333334 0-1.84444444-1.4888889-3.33333333-3.3333333-3.33333333-1.84444444 0-3.33333333 1.48888889-3.33333333 3.33333333 0 1.44444445.93333333 2.66666667 2.22222222 3.13333334v3.53333333l-4.44444445 4.4444444h-4.44444444v5.5555556h5.55555556v-3.3888889l4.44444444-4.6666667 4.4444444 4.6666667v3.3888889h5.5555556v-5.5555556z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Hub",
                keywords: ["connect", "device", "share", "social", "usb"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m3.33333333 5h14.99999997v-1.66666667h-14.99999997c-.91666666 0-1.66666666.75-1.66666666 1.66666667v9.1666667h-1.66666667v2.5h11.6666667v-2.5h-8.33333337zm15.83333337 1.66666667h-5c-.4583334 0-.8333334.375-.8333334.83333333v8.3333333c0 .4583334.375.8333334.8333334.8333334h5c.4583333 0 .8333333-.375.8333333-.8333334v-8.3333333c0-.45833333-.375-.83333333-.8333333-.83333333zm-.8333334 7.50000003h-3.3333333v-5.83333337h3.3333333z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Devices",
                keywords: ["computer", "ipad", "office", "pc", "screen", "surface"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M3 6h18V4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4v-2H3V6zm10 6H9v1.78c-.61.55-1 1.33-1 2.22s.39 1.67 1 2.22V20h4v-1.78c.61-.55 1-1.34 1-2.22s-.39-1.67-1-2.22V12zm-2 5.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM22 8h-6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h6c.5 0 1-.5 1-1V9c0-.5-.5-1-1-1zm-1 10h-4v-8h4v8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Devices Alternate",
                keywords: ["computer", "desk", "devices", "ipad", "office", "pc", "screen", "surface", "tablet", "watch"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5.6064238 11.1802028 2.96010809-2.96010811-7.34274162-7.33228187c-1.63172036 1.63172036-1.63172036 4.27803607 0 5.92021617zm7.0917077-1.89321403c1.6003411.74264193 3.8491865.21965466 5.5122861-1.44344493 1.9978115-1.99781147 2.3848221-4.86378185.8472394-6.40136449-1.5271229-1.5271229-4.3930933-1.15057205-6.4013645.84723942-1.6630996 1.66309959-2.1860869 3.91194496-1.4434449 5.51228608l-10.20871199 10.20871195 1.47482417 1.4748242 7.20676492-7.1858454 7.1963052 7.1963052 1.4748241-1.4748242-7.1963051-7.1963052z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Dining",
                keywords: ["cafe", "cutlery", "drink", "eat", "food", "fork", "menu", "restaurant", "spoon", "taste"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.99 7c0-.72-.37-1.35-.94-1.7l-9.05-5.3-9.05 5.3c-.57.35-.95.98-.95 1.7v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-9.99 5-8.26-5.16 8.26-4.84 8.26 4.84z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.99 7c0-.72-.37-1.35-.94-1.7l-9.05-5.3-9.05 5.3c-.57.35-.95.98-.95 1.7v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0v.01l-7.99 4.99-8-5 8-4.68zm-15.99 11v-8.66l8 5.02 7.99-4.99.01 8.63z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Email",
                keywords: ["letter", "mail", "message", "open", "read"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.75 8v10.7885c0 1.0833-.8794 1.9615-1.9656 1.9615-3.0519 0-8.97462 0-12.7844 0",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m6 4.5h10c.2761 0 .5.22386.5.5v12c0 .2761-.2239.5-.5.5h-10c-.27614 0-.5-.2239-.5-.5v-12c0-.27614.22386-.5.5-.5zm10-1.5h-10c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h10c1.1046 0 2-.8954 2-2v-12c0-1.10457-.8954-2-2-2zm-1 3.75h-8v1.5h8zm-8 3.25h8v1.5h-8zm6 3.25h-6v1.5h6z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Duplicate",
                keywords: ["copy", "paper", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.5 4h1.5v15.5h-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m8 4h8.5v1.5h-8.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m8 18.5h8.5v1.5h-8.5z"
                })))
            },
            meta: {
                label: "Dynamic HR",
                keywords: ["cursor", "divider", "horizontal rule"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m9.99 0c5.53 0 10.01 4.48 10.01 10s-4.48 10-10.01 10c-5.52 0-9.99-4.48-9.99-10s4.47-10 9.99-10zm3.51 9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5h-10.22c.8 2.04 2.78 3.5 5.11 3.5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m9.99 0c-5.52 0-9.99 4.48-9.99 10s4.47 10 9.99 10c5.53 0 10.01-4.48 10.01-10s-4.48-10-10.01-10zm.01 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5h-10.22c.8 2.04 2.78 3.5 5.11 3.5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Emoticon",
                keywords: ["emotion", "fun", "happy", "joy", "smile"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 3.75h14c.6904 0 1.25.55964 1.25 1.25v14c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25v-14c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m3 5c0-1.10457.89543-2 2-2h14c1.1046 0 2 .89543 2 2v2h-18z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.6959 13.7224c.3563-.5469.599-.9586.7281-1.2351.1351-.2765.2027-.5376.2027-.7834 0-.2642-.0768-.47-.2304-.6175-.1475-.1536-.3533-.2304-.6175-.2304-.2949 0-.5684.0707-.8203.212s-.4977.3318-.7373.5714l-.1475-1.1889c.2888-.2335.5899-.4086.9033-.52538.3133-.11675.6605-.17512 1.0414-.17512.3748 0 .6943.07988.9586.23963.2642.15357.4608.36257.5898.62677.1352.2642.2028.556.2028.8755 0 .3626-.0799.7343-.2396 1.1152-.1537.381-.4271.8695-.8203 1.4655l-.7558 1.1521h2.0461v1.1059h-4z"
                })))
            },
            meta: {
                label: "Event item",
                keywords: ["calendar", "date", "day", "month", "time"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 3.75h14c.6904 0 1.25.55964 1.25 1.25v14c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25v-14c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m3 5c0-1.10457.89543-2 2-2h14c1.1046 0 2 .89543 2 2v2h-18z"
                }), (0, r.createElement)(w.Path, {
                    d: "m7 10h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m7 14h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11 10h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m15 10h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11 14h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m15 14h2v2h-2z"
                })))
            },
            meta: {
                label: "Events",
                keywords: ["calendar", "date", "day", "month", "schedule", "time"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Explore",
                keywords: ["adventure", "circle", "compass", "map", "quest", "safari browser"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m8.71794872 0c-1.41538462 0-2.56410257 1.14871795-2.56410257 2.56410256h-4.1025641c-1.12820513 0-2.04102564.92307693-2.04102564 2.05128206v3.89743589h.2974359c1.52820513 0 2.76923077 1.24102564 2.76923077 2.76923079 0 1.5282051-1.24102564 2.7692308-2.76923077 2.7692308h-.30769231v3.8974358c0 1.1282052.92307692 2.0512821 2.05128205 2.0512821h3.8974359v-.3076923c0-1.5282051 1.24102564-2.7692308 2.76923077-2.7692308 1.52820508 0 2.76923078 1.2410257 2.76923078 2.7692308v.3076923h3.8974359c1.1282051 0 2.051282-.9230769 2.051282-2.0512821v-4.1025641c1.4153847 0 2.5641026-1.1487179 2.5641026-2.5641025 0-1.41538463-1.1487179-2.56410258-2.5641026-2.56410258v-4.1025641c0-1.12820513-.9230769-2.05128206-2.051282-2.05128206h-4.1025641c0-1.41538461-1.148718-2.56410256-2.56410258-2.56410256z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m9.23076923 2.56410256v2.05128206h6.15384617v6.15384618h2.051282c.2871795 0 .5128205.225641.5128205.5128205s-.225641.5128205-.5128205.5128205h-2.051282v6.1538461h-2.174359c-.6974359-1.7948717-2.451282-3.076923-4.49230768-3.076923-2.04102564 0-3.7948718 1.2820513-4.49230769 3.076923h-2.17435898v-2.1743589c1.7948718-.6974359 3.07692308-2.4512821 3.07692308-4.4923077 0-2.04102566-1.27179487-3.79487181-3.06666667-4.49230771l-.01025641-2.17435897h6.15384616v-2.05128206c0-.28717948.22564102-.51282051.51282051-.51282051s.51282051.22564103.51282051.51282051zm-.51282051-2.56410256c-1.41538462 0-2.56410257 1.14871795-2.56410257 2.56410256h-4.1025641c-1.12820513 0-2.04102564.92307693-2.04102564 2.05128206v3.89743589h.2974359c1.52820513 0 2.76923077 1.24102564 2.76923077 2.76923079 0 1.5282051-1.24102564 2.7692308-2.76923077 2.7692308h-.30769231v3.8974358c0 1.1282052.92307692 2.0512821 2.05128205 2.0512821h3.8974359v-.3076923c0-1.5282051 1.24102564-2.7692308 2.76923077-2.7692308 1.52820508 0 2.76923078 1.2410257 2.76923078 2.7692308v.3076923h3.8974359c1.1282051 0 2.051282-.9230769 2.051282-2.0512821v-4.1025641c1.4153847 0 2.5641026-1.1487179 2.5641026-2.5641025 0-1.41538463-1.1487179-2.56410258-2.5641026-2.56410258v-4.1025641c0-1.12820513-.9230769-2.05128206-2.051282-2.05128206h-4.1025641c0-1.41538461-1.148718-2.56410256-2.56410258-2.56410256z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Extension",
                keywords: ["game", "plugin", "puzzle", "widget"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Face",
                keywords: ["eyes", "friendly", "happy", "hair", "head", "human", "person", "user"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m11.9731 4.00028c-4.15965-.00653-7.62297 3.2243-7.94838 7.41482-.32541 4.1905 2.59681 7.9277 6.70658 8.5769v-5.6309h-2.02198v-2.3167h2.02198v-1.7697c-.0901-.83737.1934-1.67177.7735-2.27661.58-.60484 1.3965-.91732 2.2275-.85256.5973.00788 1.1932.05895 1.7832.15283v1.97885h-1.0031c-.3459-.045-.6934.07049-.9454.31419s-.3814.5895-.3521.9407v1.5123h2.213l-.3582 2.3247h-1.8548v5.6309c4.1346-.6239 7.0873-4.3734 6.7604-8.5849-.3269-4.21147-3.8219-7.44995-8.0022-7.41482z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Facebook",
                keywords: ["media", "share", "social"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2.25A9.75 9.75 0 1 0 21.75 12 9.761 9.761 0 0 0 12 2.25Zm0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25Z",
                    fill: "currentColor"
                }), (0, r.createElement)(w.Path, {
                    d: "M12 7.083a2.753 2.753 0 0 0-2.75 2.75.75.75 0 1 0 1.5 0 1.25 1.25 0 0 1 2.5 0c0 .374-.166.613-.658.945A2.595 2.595 0 0 0 11.25 13v.25a.75.75 0 1 0 1.5 0V13c0-.39.171-.636.68-.978a2.555 2.555 0 0 0 1.32-2.188A2.753 2.753 0 0 0 12 7.084ZM11.996 15.125a1.127 1.127 0 1 0 .004 0h-.004Z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "FAQ",
                keywords: ["answer", "frequently asked questions", "question"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m6 14h12v-1.5h-12z"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 18h16v-1.5h-16z"
                }), (0, r.createElement)(w.Path, {
                    d: "m6 22h12v-1.5h-12z"
                })), (0, r.createElement)(w.Path, {
                    d: "m10.389 3.26543 3.2192-.00042c.0835-.00006.1661.01633.2432.04823s.1472.07869.2062.13769c.059.05899.1057.12904.1376.20614.0319.07709.0483.15973.0483.24317l.0017 3.85454-2.2452 2.24522-2.24463-2.24463.0005-3.85679c.00052-.16774.0674-.32849.18603-.44712.1186-.11863.2794-.18551.4471-.18603z",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    fill: "none"
                }))
            },
            meta: {
                label: "Feature",
                keywords: ["list", "pointer", "stack"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.9047619 3.80952381c0-1.04761905-.8571429-1.90476191-1.9047619-1.90476191h-.95238095v-.95238095c0-.52380952-.42857143-.95238095-.95238095-.95238095h-3.80952381c-.52380953 0-.95238096.42857143-.95238096.95238095v.95238095h-.95238095c-1.04761905 0-1.9047619.85714286-1.9047619 1.90476191v14.28571429c0 1.047619.85714285 1.9047619 1.9047619 1.9047619h7.61904762c1.047619 0 1.9047619-.8571429 1.9047619-1.9047619h7.6190476v-14.28571429zm-1.9047619 12.38095239h-1.9047619v-1.9047619h1.9047619zm0-8.57142858h-1.9047619v-1.90476191h1.9047619zm3.8095238 8.57142858h-1.9047619v-1.9047619h1.9047619zm0-8.57142858h-1.9047619v-1.90476191h1.9047619zm3.8095238 8.57142858h-1.9047619v-1.9047619h1.9047619zm0-8.57142858h-1.9047619v-1.90476191h1.9047619z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.9047619 3.80952381c0-1.04761905-.8571429-1.90476191-1.9047619-1.90476191h-.95238095v-.95238095c0-.52380952-.42857143-.95238095-.95238095-.95238095h-3.80952381c-.52380953 0-.95238096.42857143-.95238096.95238095v.95238095h-.95238095c-1.04761905 0-1.9047619.85714286-1.9047619 1.90476191v14.28571429c0 1.047619.85714285 1.9047619 1.9047619 1.9047619h7.61904762c1.047619 0 1.9047619-.8571429 1.9047619-1.9047619h7.6190476v-14.28571429zm5.7142857 12.38095239h-7.6190476v1.9047619h-7.61904762v-14.28571429h2.85714286v-1.90476191h1.9047619v1.90476191h2.85714286v1.9047619h7.6190476zm-10.47619046-2.8571429h1.90476191v1.9047619h-1.90476191zm0-6.66666663h1.90476191v1.9047619h-1.90476191zm3.80952386 6.66666663h1.9047619v1.9047619h-1.9047619zm0-6.66666663h1.9047619v1.9047619h-1.9047619zm3.8095238 6.66666663h1.9047619v1.9047619h-1.9047619zm0-6.66666663h1.9047619v1.9047619h-1.9047619z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Film",
                keywords: ["aperture", "camera", "creative", "director", "media", "photography", "producer", "video"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.53571",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m10.302 7.30717c.5217-.26086 1.0434-.39128 1.6955-.52171-1.4347 1.56512-1.826 3.91284-.7825 5.99964 1.0434 1.9564 3.2606 2.9998 5.3475 2.739-.3913.3912-.913.7825-1.4347 1.0434-2.6086 1.4347-5.73882.3912-7.04309-2.2173-1.43469-2.4781-.39128-5.73876 2.21729-7.04303z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Filter - Dark",
                keywords: ["moon", "night"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.53571",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m12 11.5 8 8.5h-8z"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 4h8v7.5l-7.99993 8.5z"
                })))
            },
            meta: {
                label: "Filter - Grayscale",
                keywords: ["black", "white"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m9.94924 3.75h-5.19924c-.55228 0-1 .44772-1 1v14.5c0 .5523.44772 1 1 1h14.5313c.5523 0 1-.4477 1-1v-5.6458",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m16.8656 9.85.9234-2.02354 2.0235-.92336-2.0235-.92336-.9234-2.02354-.9234 2.02354-2.0235.92336 2.0235.92336zm-3.6836.7367-1.2279-2.7013-1.2279 2.7013-2.7013 1.2279 2.7013 1.2279 1.2279 2.7013 1.2279-2.7013 2.7013-1.2279z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Filter - Main",
                keywords: ["shine", "star"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.25",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 16 4.57143-3.3333 3.42857 2.2222 4-3.8889 4 3.8889",
                    strokeLinejoin: "round"
                })))
            },
            meta: {
                label: "Filter - None",
                keywords: ["default", "mountain"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.53571",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75"
                }), (0, r.createElement)(w.Path, {
                    d: "m15.2225 13.2414c0 1.7797-1.4428 3.2225-3.2225 3.2225-1.7798 0-3.22253-1.4428-3.22253-3.2225 0-.3585.17475-.9012.53447-1.5851.34749-.6606.81936-1.3646 1.30426-2.01861.4828-.65129.9674-1.23811 1.3321-1.66292.0175-.02039.0347-.0404.0517-.06001.0169.01961.0341.03962.0516.06001.3647.42481.8493 1.01163 1.3321 1.66292.4849.65401.9568 1.35801 1.3043 2.01861.3597.6839.5345 1.2266.5345 1.5851z"
                })))
            },
            meta: {
                label: "Filter - Saturation",
                keywords: ["drop", "water", "wet"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.53571",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m9.27273 11.4545h-3.27273v1.091h3.27273zm1.18367-1.76723-1.1564-1.15636-.76909.76909 1.15636 1.1564zm2.0891-3.68727h-1.091v3.27273h1.091zm2.9236 3.3-.7691-.76909-1.1564 1.15636.7691.76913zm-.7418 2.1545v1.091h3.2727v-1.091zm-2.7273-1.0909c-.9055 0-1.6364.7309-1.6364 1.6364s.7309 1.6364 1.6364 1.6364 1.6364-.7309 1.6364-1.6364-.7309-1.6364-1.6364-1.6364zm1.5436 3.9491 1.1564 1.1564.7691-.7691-1.1564-1.1564zm-5.01269.3873.76909.7691 1.1564-1.1564-.76913-.7691zm2.92359 3.3h1.091v-3.2727h-1.091z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Filter - Sepia",
                keywords: ["flower", "old", "shine", "star", "vintage"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.53571",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m15.4536 12.2145c-.1443-.0858-.2938-.1555-.4433-.2145.1495-.059.299-.1287.4433-.2145.9897-.5952 1.5412-1.6729 1.5464-2.78282-.4691-.27882-1.0052-.42895-1.5515-.42895-.5258 0-1.0567.13941-1.5413.42895-.1443.08579-.2783.18767-.402.28955.0257-.16622.0412-.33781.0412-.50939 0-1.19035-.6237-2.2252-1.5464-2.78284-.9227.55764-1.5464 1.59249-1.5464 2.78284 0 .17158.0155.34317.0412.50939-.1237-.10724-.2577-.20912-.402-.29491-.48455-.28955-1.01548-.42896-1.54125-.42896-.54124 0-1.08248.15014-1.55155.42896 0 1.10988.55155 2.18768 1.54639 2.78288.14433.0858.29382.1555.4433.2144-.14948.059-.29897.1287-.4433.2145-.98969.5952-1.54124 1.6729-1.54639 2.7829.46907.2788 1.00515.4289 1.55155.4289.52577 0 1.0567-.1394 1.54125-.4289.1443-.0858.2783-.1877.402-.2896-.0257.1716-.0412.3432-.0412.5148 0 1.1903.6237 2.2252 1.5464 2.7828.9227-.5576 1.5464-1.5925 1.5464-2.7828 0-.1716-.0155-.3432-.0412-.5094.1237.1072.2577.2037.402.2895.4846.2896 1.0155.429 1.5413.429.5412 0 1.0824-.1502 1.5515-.429-.0052-1.1099-.5567-2.1876-1.5464-2.7828zm-1.3093-2.0805c.1083-.0911.1959-.15545.2784-.19834.3144-.18767.6701-.28955 1.0309-.28955.1392 0 .2732.01609.4072.0429-.1598.48789-.4845.90619-.9175 1.16889-.0876.0536-.1856.0965-.299.1448l-.7113.2788c-.0876-.2466-.2114-.4665-.3711-.6649zm-2.1443-2.76135c.3247.38606.5155.89008.5155 1.41019 0 .10188-.0103.21984-.0258.3378l-.1186.77212c-.1237-.02145-.2474-.03753-.3711-.03753s-.2474.01608-.366.03753l-.1185-.77212c-.0207-.11796-.031-.23592-.031-.3378 0-.52547.1908-1.02413.5155-1.41019zm-3.86082 2.311c.13402-.03218.27319-.0429.41237-.0429.35567 0 .71134.09652 1.02577.28955.07732.04825.16495.1072.25258.1877l.5928.5147c-.1547.193-.2732.4075-.3608.6434l-.71138-.2788c-.10825-.0482-.20619-.0965-.28866-.1448-.44846-.268-.76805-.6809-.92268-1.16885zm1.71649 4.17695c-.10825.0911-.19588.1555-.27835.1984-.31443.1876-.6701.2895-1.03093.2895-.13917 0-.27319-.0161-.40721-.0429.15979-.4879.48453-.9061.91752-1.1689.08763-.0536.18557-.0965.29897-.1447l.71133-.2789c.0825.2467.2114.4719.3711.6649zm2.14433 2.7667c-.3247-.386-.5155-.89-.5155-1.4101 0-.1073.0103-.2199.031-.3486l.1134-.7614c.1185.0215.2422.0376.3711.0376.1237 0 .2474-.0161.366-.0376l.1185.7722c.0207.1179.031.2359.031.3378 0 .5254-.1908 1.0241-.5155 1.4101zm3.4485-2.2734c-.3557 0-.7114-.0965-1.0258-.2896-.0928-.0536-.1753-.1179-.2526-.1823l-.5928-.5147c.1547-.193.2784-.4075.3608-.6488l.7114.2788c.1134.0429.2113.0912.2938.1394.4381.2628.7577.681.9175 1.1689-.1392.0376-.2783.0483-.4123.0483z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Filter - Vintage",
                keywords: ["flower", "old", "sepia"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.7660485 2.56204547c-.0789273 0-.1578547-.01973185-.2269162-.05919554-1.894257-.97672626-3.532-1.39109498-5.49531846-1.39109498-1.95345253 0-3.80824585.46369833-5.49531849 1.39109498-.23678212.12825699-.53275978.03946369-.67088269-.19731843-.12825698-.23678213-.03946368-.54262571.19731844-.67088269 1.83506147-.99645811 3.84770954-1.50948605 5.96888274-1.50948605 2.10144136 0 3.93650286.46369833 5.94915086 1.49962013.2466481.12825698.3354414.42423464.2071844.66101676-.0887933.1775866-.256514.27624582-.4341006.27624582zm-14.11813418 5.17960898c-.09865922 0-.19731844-.02959776-.28611174-.08879329-.2269162-.15785475-.27624581-.46369833-.11839106-.69061454.97672627-1.38122906 2.21983242-2.46648047 3.69972071-3.22615645 3.09789947-1.59827935 7.06400007-1.60814527 10.17176547-.00986592 1.4798883.75967598 2.7229944 1.83506147 3.6997207 3.20642461.1578547.21705028.1085251.53275978-.1183911.69061453s-.5327598.10852514-.6906145-.11839106c-.887933-1.24310616-2.0126481-2.21983243-3.3445475-2.90058104-2.8315196-1.45029051-6.45231293-1.45029051-9.27396659.00986593-1.34176537.69061453-2.46648047 1.67720672-3.35441344 2.92031287-.07892737.13812291-.2269162.20718436-.38477095.20718436zm6.16620117 11.90816775c-.12825698 0-.25651396-.0493296-.34530726-.1479889-.85833521-.8583352-1.32203353-1.4108268-1.9830503-2.6046033-.68074861-1.2135084-1.0359218-2.6933967-1.0359218-4.2818101 0-2.93017884 2.50594416-5.31773193 5.58411179-5.31773193 3.07816758 0 5.58411178 2.38755309 5.58411178 5.31773193 0 .2762458-.2170503.4932961-.4932961.4932961s-.4932961-.2170503-.4932961-.4932961c0-2.3875531-2.0619777-4.33113974-4.59751958-4.33113974-2.53554193 0-4.5975196 1.94358664-4.5975196 4.33113974 0 1.4206927.3157095 2.7328603.91753074 3.7983799.631419 1.134581 1.06551956 1.6180112 1.82519554 2.3875531.18745252.1973184.18745252.503162 0 .7004804-.10852514.0986593-.23678212.1479889-.36503911.1479889zm7.07386601-1.8251956c-1.1740447 0-2.2099665-.2959776-3.0584358-.878067-1.47002236-.9964581-2.34808941-2.6144693-2.34808941-4.3311397 0-.2762459.21705028-.4932961.4932961-.4932961.27624581 0 .49329609.2170502.49329609.4932961 0 1.3910949.71034642 2.7032626 1.91398882 3.5122682.7004805.4735642 1.519352.7004804 2.5059442.7004804.2367821 0 .631419-.0295978 1.0260559-.0986592.2663798-.0493296.5228938.128257.5722234.4045028.0493296.2663799-.128257.5228938-.4045028.5722235-.5623575.1085251-1.0556536.118391-1.1937765.118391zm-1.9830503 2.0323799c-.0394637 0-.0887933-.0098659-.128257-.0197318-1.5686816-.4341006-2.59473745-1.01619-3.67012294-2.0718436-1.38122906-1.3713632-2.14090505-3.1965587-2.14090505-5.1500112 0-1.5982794 1.36149722-2.90058107 3.03870394-2.90058107 1.67720675 0 3.03870395 1.30230167 3.03870395 2.90058107 0 1.0556536.9175307 1.9139888 2.0521117 1.9139888 1.1345811 0 2.0521118-.8583352 2.0521118-1.9139888 0-3.71945259-3.2064246-6.73842468-7.15279337-6.73842468-2.80192181 0-5.3670615 1.55881565-6.52137436 3.97596652-.38477096.79913966-.58208939 1.73640226-.58208939 2.76245816 0 .7695419.06906145 1.9830503.66101676 3.5615978.09865922.2565139-.02959776.5426257-.28611173.631419-.25651397.0986592-.54262571-.0394637-.631419-.2861118-.48343018-1.2924357-.7202123-2.5750056-.7202123-3.906905 0-1.1839107.2269162-2.2592961.67088269-3.19655873 1.31216761-2.7525922 4.22261456-4.53832406 7.40930733-4.53832406 4.48899447 0 8.13938557 3.46293858 8.13938557 7.72501679 0 1.5982794-1.3614972 2.9005811-3.038704 2.9005811-1.6772067 0-3.0387039-1.3023017-3.0387039-2.9005811 0-1.0556536-.9175307-1.9139888-2.05211175-1.9139888-1.13458101 0-2.05211175.8583352-2.05211175 1.9139888 0 1.6870727.65115084 3.2656202 1.84492739 4.4495308.93726258.9273967 1.83506151 1.4404246 3.22615641 1.8251956.2663799.0690614.4143688.3453072.3453073.6018212-.0493296.2269162-.256514.374905-.4636983.374905z",
                    transform: "translate(1)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Fingerprint",
                keywords: ["biometric", "defense", "identify", "privacy", "safe", "scan", "secure", "security"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m8.91322329.78180339s.69401426 2.48532134.69401426 4.50171413c0 1.93198565-1.2661071 3.49820703-3.19809275 3.49820703-1.94136422 0-3.40442131-1.56622138-3.40442131-3.49820703l.02813571-.33762856c-1.89447137 2.25085707-3.02927847 5.16759264-3.02927847 8.33754974 0 4.1453284 3.35752846 7.5028569 7.50285689 7.5028569 4.14532848 0 7.50285688-3.3575285 7.50285688-7.5028569 0-5.05504985-2.4290499-9.56614256-6.09607121-12.50163531zm-1.67876423 17.19092081c-1.66938566 0-3.0198999-1.3129999-3.0198999-2.9448713 0-1.5193285.98474997-2.5884856 2.63537848-2.9261142 1.66000709-.3376285 3.37628556-1.1348071 4.33289986-2.41967133.3657643 1.20983563.5533357 2.48532133.5533357 3.78894273 0 2.4853213-2.0163928 4.5017141-4.50171414 4.5017141z",
                    transform: "translate(2.553223 -.786621)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Fire",
                keywords: ["camping", "cook", "flame", "heat", "hot", "spicy", "trending"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M17.833 4.901c-.105.049-2.345.917-3.977 2.122a9.592 9.592 0 00-2.93-2.556c-.817-1.47.334-2.797.334-2.797-2.344-.699-4.102.893-5.023 2.002-3.453.868-6.09 4.895-6.09 5.69 0 .627 3.076 5.474 6.97 5.811.523.675 1.59 1.64 2.992 1.23 0 0-.67-.747-.23-1.591a8.58 8.58 0 004.102-3.038c1.612 1.157 3.747 2 3.872 2.05-.041-.146-.962-3.328-.962-4.462-.021-1.663.92-4.364.942-4.46zM3.997 9.048c-.546 0-1-.454-1-1 0-.545.454-1 1-1s1 .455 1 1c0 .564-.455 1-1 1z"
                }))
            },
            meta: {
                label: "Fish",
                keywords: ["fish", "sea", "sea-creature"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5.45454545 9.09090909h-5.45454545v1.81818181h5.45454545zm1.97272728-2.94545454-1.92727273-1.92727273-1.28181818 1.28181818 1.92727273 1.92727273zm3.48181817-6.14545455h-1.81818181v5.45454545h1.81818181zm4.8727273 5.5-1.2818182-1.28181818-1.9272727 1.92727273 1.2818182 1.28181818zm-1.2363637 3.59090909v1.81818181h5.4545455v-1.81818181zm-4.5454545-1.81818182c-1.50909091 0-2.72727273 1.21818182-2.72727273 2.72727273 0 1.5090909 1.21818182 2.7272727 2.72727273 2.7272727 1.5090909 0 2.7272727-1.2181818 2.7272727-2.7272727 0-1.50909091-1.2181818-2.72727273-2.7272727-2.72727273zm2.5727273 6.58181823 1.9272727 1.9272727 1.2818182-1.2818182-1.9272727-1.9272727zm-8.35454548.6454545 1.28181818 1.2818182 1.92727273-1.9272727-1.28181818-1.2818182zm4.87272727 5.5h1.81818181v-5.4545455h-1.81818181z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Flare",
                keywords: ["camera", "creative", "flower", "light", "photography", "sun"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m5.5 18v-12c0-.27614.22386-.5.5-.5h3v-1.5h-3c-1.10457 0-2 .89543-2 2v12c0 1.1046.89543 2 2 2h3v-1.5h-3c-.27614 0-.5-.2239-.5-.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m13 2v20h-2v-20z"
                }), (0, r.createElement)(w.Path, {
                    d: "m16.5 4v1.5h-1.5v-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m20 6c0-1.10457-.8954-2-2-2v1.5c.2761 0 .5.22386.5.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18.5 16.5v-2h1.5v2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m20 13h-1.5v-2h1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18 18.5c.2761 0 .5-.2239.5-.5h1.5c0 1.1046-.8954 2-2 2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m16.5 20v-1.5h-1.5v1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18.5 9.5h1.5v-2h-1.5z"
                })))
            },
            meta: {
                label: "Filter - Horizontal",
                keywords: ["divider", "flip", "separator"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m6 5.5h12c.2761 0 .5.22386.5.5v3h1.5v-3c0-1.10457-.8954-2-2-2h-12c-1.10457 0-2 .89543-2 2v3h1.5v-3c0-.27614.22386-.5.5-.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m22 13h-20v-2h20z"
                }), (0, r.createElement)(w.Path, {
                    d: "m20 16.5h-1.5v-1.5h1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18 20c1.1046 0 2-.8954 2-2h-1.5c0 .2761-.2239.5-.5.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m7.5 18.5h2v1.5h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11 20v-1.5h2v1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m5.5 18c0 .2761.22386.5.5.5v1.5c-1.10457 0-2-.8954-2-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 16.5h1.5v-1.5h-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m14.5 18.5v1.5h2v-1.5z"
                })))
            },
            meta: {
                label: "Flip vertical",
                keywords: ["divider", "flip", "separator"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 20c4.7333333 0 8.5714286-3.8380952 8.5714286-8.5714286-4.7333334 0-8.5714286 3.8380953-8.5714286 8.5714286zm-6.0952381-11.19047619c0 1.31428569 1.06666667 2.38095239 2.38095239 2.38095239.5047619 0 .96190476-.152381 1.35238095-.4190476l-.01904762.1809524c0 1.3142857 1.06666667 2.3809523 2.38095238 2.3809523 1.3142857 0 2.3809524-1.0666666 2.3809524-2.3809523l-.0190476-.1809524c.3809523.2666666.847619.4190476 1.3523809.4190476 1.3142857 0 2.3809524-1.0666667 2.3809524-2.38095239 0-.95238095-.5619048-1.76190476-1.3619048-2.14285714.8-.38095238 1.3619048-1.19047619 1.3619048-2.14285715 0-1.31428571-1.0666667-2.38095238-2.3809524-2.38095238-.5047619 0-.9619047.15238096-1.3523809.41904762l.0190476-.18095238c0-1.31428571-1.0666667-2.38095238-2.3809524-2.38095238-1.31428571 0-2.38095238 1.06666667-2.38095238 2.38095238l.01904762.18095238c-.38095238-.26666666-.84761905-.41904762-1.35238095-.41904762-1.31428572 0-2.38095239 1.06666667-2.38095239 2.38095238 0 .95238096.56190477 1.76190477 1.36190477 2.14285715-.8.38095238-1.36190477 1.19047619-1.36190477 2.14285714zm6.0952381-4.52380952c1.3142857 0 2.3809524 1.06666666 2.3809524 2.38095238 0 1.31428571-1.0666667 2.38095238-2.3809524 2.38095238-1.31428571 0-2.38095238-1.06666667-2.38095238-2.38095238 0-1.31428572 1.06666667-2.38095238 2.38095238-2.38095238zm-8.57142857 7.14285711c0 4.7333334 3.83809524 8.5714286 8.57142857 8.5714286 0-4.7333333-3.83809524-8.5714286-8.57142857-8.5714286z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m6.81904762 11.4952381c.14285714 0 .27619048-.0095238.40952381-.0285714.44761905 1.0952381 1.52380952 1.8666666 2.77142857 1.8666666 1.247619 0 2.3238095-.7714285 2.7714286-1.8666666.1333333.0190476.2761904.0285714.4095238.0285714 1.647619 0 2.9904762-1.3428571 2.9904762-2.9904762 0-.67619047-.2380953-1.32380952-.6380953-1.83809523.4095238-.51428572.6380953-1.16190477.6380953-1.83809524 0-1.64761905-1.3428572-2.99047619-2.9904762-2.99047619-.1428572 0-.2761905.00952381-.4095238.02857143-.4476191-1.0952381-1.5238096-1.86666667-2.7714286-1.86666667-1.24761905 0-2.32380952.77142857-2.77142857 1.86666667-.13333333-.01904762-.27619048-.02857143-.40952381-.02857143-1.64761905 0-2.99047619 1.34285714-2.99047619 2.99047619 0 .67619047.23809524 1.32380952.63809524 1.83809524-.40952381.51428571-.64761905 1.16190476-.64761905 1.83809523 0 1.6476191 1.34285714 2.9904762 3 2.9904762zm3.18095238-.0666667c-.59047619 0-1.06666667-.4666666-1.08571429-1.047619l.11428572-1.03809526c.3047619.11428572.62857143.18095238.97142857.18095238.3428571 0 .6761905-.06666666.9809524-.18095238l.1047619 1.03809526c-.0190476.5809524-.4952381 1.047619-1.0857143 1.047619zm3.1809524-1.83809521c-.2285714 0-.4380953-.06666667-.6095238-.19047619l-.7714286-.54285714c.5238095-.42857143.8952381-1.03809524 1.0095238-1.74285715l.8380952.4c.3809524.18095239.6285715.56190477.6285715.98095239 0 .6095238-.4952381 1.09523809-1.0952381 1.09523809zm-.6190476-5.65714286c.1904762-.12380952.4-.19047619.6190476-.19047619.6 0 1.0857143.48571429 1.0857143 1.08571429 0 .41904762-.2380953.79047619-.6285715.98095238l-.8380952.4c-.1142857-.70476191-.4857143-1.31428571-1.0190476-1.74285714zm-2.5619048-2.02857143c.5904762 0 1.0666667.46666667 1.0857143 1.04761905l-.1047619 1.03809524c-.3047619-.11428571-.6380953-.18095238-.9809524-.18095238-.34285714 0-.66666667.06666667-.97142857.18095238l-.11428572-1.03809524c.01904762-.58095238.4952381-1.04761905 1.08571429-1.04761905zm-3.18095238 1.83809524c.22857143 0 .43809524.06666667.60952381.19047619l.77142857.53333334c-.52380952.42857143-.8952381 1.03809523-1.00952381 1.74285714l-.83809524-.4c-.38095238-.19047619-.62857143-.56190476-.62857143-.98095238 0-.6.4952381-1.08571429 1.0952381-1.08571429zm-.46666667 3.78095238.83809524-.4c.11428571.70476191.48571429 1.31428572 1.01904762 1.74285715l-.77142857.52380952c-.19047619.12380952-.4.19047619-.61904762.19047619-.6 0-1.08571429-.48571428-1.08571429-1.08571428-.00952381-.40952381.23809524-.78095239.61904762-.97142858zm3.64761905 12.47619048c4.7333333 0 8.5714286-3.8380952 8.5714286-8.5714286-4.7333334 0-8.5714286 3.8380953-8.5714286 8.5714286zm2.3238095-2.3238095c.6761905-1.8095238 2.1142857-3.2571429 3.9238095-3.9238095-.6761904 1.8095238-2.1142857 3.247619-3.9238095 3.9238095zm-10.89523807-6.2476191c0 4.7333334 3.83809524 8.5714286 8.57142857 8.5714286 0-4.7333333-3.83809524-8.5714286-8.57142857-8.5714286zm2.32380952 2.3238096c1.80952381.6761904 3.25714286 2.1142857 3.92380953 3.9238095-1.80952381-.6761905-3.24761905-2.1142857-3.92380953-3.9238095z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Flower",
                keywords: ["garden", "landscape", "outdoors", "petal", "scent", "smell"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m7.93 11.5h4.14l-2.07-5.52zm10.07-11.5h-16c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm-4.05 16.5-1.14-3h-5.64l-1.12 3h-2.09l5.11-13h1.86l5.11 13z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m7.17 13.5h5.64l1.14 3h2.09l-5.11-13h-1.86l-5.11 13h2.09zm2.83-7.52 2.07 5.52h-4.14zm8-5.98h-16c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-16c0-1.1-.9-2-2-2zm0 18h-16v-16h16z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Font",
                keywords: ["alphabet", "square", "text", "typography"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m20.2 17h-16.536c-.4424 0-.664-.3619-.664-.8095 0-4.9656 1.9848-9.12821 6.564-10.22997v-1.71351c0-.44766.3576-.80952.8-.80952h3.2c.4424 0 .8.36186.8.80952v1.71351c4.5792 1.10176 6.636 5.26437 6.636 10.22997 0 .4476-.3576.8095-.8.8095zm-7.336-12h-2v.70796c.2648-.02105.8296-.04129 1.1-.04129s.6352.02024.9.04129zm-.9 2.29688c-4.94375 0-7.0584 3.67062-7.464 8.20312h14.864c-.4056-4.5325-2.4563-8.20312-7.4-8.20312z"
                }), (0, r.createElement)(w.Path, {
                    d: "m2 18.5h20v1.5h-20z"
                })))
            },
            meta: {
                label: "Food and Drink",
                keywords: ["bell", "ring"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m17.7646 7.89213c-.096.53182-.5444.96979-1.1209 1.06364l-.4164.06257 1.2491 2.28376c.2242.4066.2242.9072-.032 1.3452-.2563.4066-.7046.6569-1.185.6569-.2563 0-.4805-.0626-.7046-.1877l-3.491-2.0022-3.39495 2.0022c-.22419.1251-.48041.1877-.7046.1877-.48041 0-.89677-.2503-1.18501-.6257-.25622-.3754-.28825-.8759-.09609-1.2826l1.12096-2.37756-.73663-.1877c-.44838-.12514-.80068-.43797-.96082-.84466-1.88962 1.3452-3.10666 3.34732-3.10666 5.59982 0 4.0981 4.03546 7.4142 8.9997 7.4142 4.9643 0 8.9997-3.3161 8.9997-7.4142.032-2.2837-1.2491-4.34847-3.2348-5.69367z"
                }), (0, r.createElement)(w.Path, {
                    d: "m7.35566 7.70438 1.92165.46925c.09608.03129.16014.15642.12811.25027l-1.6334 3.4725c-.06406.1564.09608.3128.25622.219l3.90736-2.31501c.064-.03129.1281-.03129.1922 0l4.0034 2.31501c.1601.0938.3523-.0939.2562-.2503l-1.9216-3.50377c-.0641-.09385 0-.25027.1281-.25027l1.7935-.31283c.1922-.03129.1922-.31284.032-.34412-.8967-.25027-2.4341-.65696-3.6511-.81338.0961-1.12621.4804-2.62783.7687-3.25351.2242-.50053-1.5694-.53182-1.7616 0-.1601.46926-.4483 2.03345-.5444 3.22223-1.24909.12513-2.94654.50054-3.90737.75081-.12811.06256-.12811.31283.03203.34412z"
                })))
            },
            meta: {
                label: "Food item",
                keywords: ["eat", "restaurant", "tomato", "vegetable"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    fill: "currentColor",
                    r: "8"
                }), (0, r.createElement)(w.Path, {
                    d: "m14.9586 9.09098-3.9304 5.28592-2.27901-1.6946",
                    stroke: "#fff",
                    strokeWidth: "1.5"
                }))
            },
            meta: {
                label: "Form - Checkbox",
                keywords: ["check", "confirm", "okay", "success"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 3.75h14c.6904 0 1.25.55964 1.25 1.25v14c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25v-14c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.6959 13.9724c.3563-.5469.599-.9586.7281-1.2351.1351-.2765.2027-.5376.2027-.7834 0-.2642-.0768-.47-.2304-.6175-.1475-.1536-.3533-.2304-.6175-.2304-.2949 0-.5684.0707-.8203.212s-.4977.3318-.7373.5714l-.1475-1.1889c.2888-.2335.5899-.4086.9033-.5254.3133-.1167.6605-.1751 1.0414-.1751.3748 0 .6943.0799.9586.2396.2642.1536.4608.3626.5898.6268.1352.2642.2028.556.2028.8755 0 .3626-.0799.7343-.2396 1.1152-.1537.381-.4271.8695-.8203 1.4655l-.7558 1.1521h2.0461v1.1059h-4z"
                }), (0, r.createElement)(w.Path, {
                    d: "m3 5c0-1.10457.89543-2 2-2h14c1.1046 0 2 .89543 2 2v2h-18z"
                })))
            },
            meta: {
                label: "Form - Date",
                keywords: ["date", "day", "month", "time"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.5 4c-4.692 0-8.5 3.808-8.5 8.5s3.808 8.5 8.5 8.5h4.25v-1.7h-4.25c-3.689 0-6.8-3.111-6.8-6.8s3.111-6.8 6.8-6.8 6.8 3.111 6.8 6.8v1.2155c0 .6715-.6035 1.3345-1.275 1.3345s-1.275-.663-1.275-1.3345v-1.2155c0-2.346-1.904-4.25-4.25-4.25s-4.25 1.904-4.25 4.25 1.904 4.25 4.25 4.25c1.173 0 2.244-.476 3.009-1.2495.5525.7565 1.5045 1.2495 2.516 1.2495 1.6745 0 2.975-1.36 2.975-3.0345v-1.2155c0-4.692-3.808-8.5-8.5-8.5zm0 11.05c-1.411 0-2.55-1.139-2.55-2.55s1.139-2.55 2.55-2.55 2.55 1.139 2.55 2.55-1.139 2.55-2.55 2.55z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Form - Email",
                keywords: ["at sign", "email", "letter", "mail", "mention", "message", "symbol"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12.0041 8.15789c2.2592 0 4.0928 1.76843 4.0928 3.94741 0 .5131-.1065.9947-.2947 1.4447l2.3902 2.3053c1.236-.9948 2.2101-2.2816 2.8076-3.75-1.4161-3.46583-4.9113-5.92109-9.0041-5.92109-1.146 0-2.24283.19737-3.25784.55263l1.76804 1.70527c.4666-.18158.9659-.28422 1.498-.28422zm-8.18555-2.15526 1.86631 1.8.37653.36316c-1.3588 1.01842-2.42292 2.37631-3.06139 3.93951 1.4161 3.4658 4.91132 5.921 9.0041 5.921 1.2688 0 2.4802-.2368 3.5853-.6631l.3438.3315 2.3983 2.3053 1.0396-1.0026-14.51298-13.9974zm4.52661 4.36577 1.26876 1.2237c-.04093.1658-.06549.3395-.06549.5132 0 1.3105 1.09687 2.3684 2.45567 2.3684.1801 0 .3602-.0237.5321-.0632l1.2687 1.2237c-.5484.2605-1.1541.4184-1.8008.4184-2.25922 0-4.09278-1.7684-4.09278-3.9473 0-.6237.16371-1.2079.43384-1.7369zm3.52794-.61577 2.5785 2.48687.0163-.1263c0-1.3106-1.0968-2.36846-2.4556-2.36846z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Form - Hidden",
                keywords: ["eye", "secret"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Path, {
                    d: "m13 11.9999v-1c0-1.10459-.8954-2.00002-2-2.00002h-4c-1.10457 0-2 .89543-2 2.00002v1"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 19.2499h9"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 15.2499h16"
                })), (0, r.createElement)(w.Circle, {
                    cx: "9",
                    cy: "5",
                    fill: "currentColor",
                    r: "2"
                }))
            },
            meta: {
                label: "Form - Name",
                keywords: ["paragraph", "person", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "14.5",
                    rx: "1.25",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "8.5",
                    x: "7.75",
                    y: "4.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m11 16h2v1.5h-2z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Form - Phone",
                keywords: ["call", "mobile", "number", "tablet"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    r: "7.25",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    fill: "currentColor",
                    r: "4"
                }), (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    r: "4",
                    stroke: "currentColor"
                }))
            },
            meta: {
                label: "Form - Radio",
                keywords: ["circle", "round", "select"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    r: "7.25"
                }), (0, r.createElement)(w.Path, {
                    d: "m8 11 3.7141 2.7755c.1781.133.4225.1326.6001-.001l3.6858-2.7745"
                })))
            },
            meta: {
                label: "Form - Select",
                keywords: ["collapse", "dropdown", "option"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 7.25h14c.6904 0 1.25.55964 1.25 1.25v7c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25v-7c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m16 12.75h-8v-1.5h8z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Form - Submit",
                keywords: ["input"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m4 8h16c.6904 0 1.25.55964 1.25 1.25v5c0 .6904-.5596 1.25-1.25 1.25h-16c-.69036 0-1.25-.5596-1.25-1.25v-5c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }))
            },
            meta: {
                label: "Form - Text",
                keywords: ["input", "rectangle"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    clipRule: "evenodd",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.9998 15.5h-16.00004v-1.5h16.00004z"
                }), (0, r.createElement)(w.Path, {
                    d: "m15.9998 5.5h-12.00004v-1.5h12.00004z"
                }), (0, r.createElement)(w.Path, {
                    d: "m19.9998 10.5h-16.00004v-1.5h16.00004z"
                }), (0, r.createElement)(w.Path, {
                    d: "m19.9998 20h-16.00004v-1.5h16.00004z"
                })))
            },
            meta: {
                label: "Form - Textarea",
                keywords: ["paragraph", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    r: "7.25",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m10.5018 11.3502 4.4504-2.98515-1.4486 4.72825-4.45583 2.9533z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Form - Website",
                keywords: ["browser", "safari", "web"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Path, {
                    d: "m19 6.75h-14c-.69036 0-1.25.55964-1.25 1.25v8.5c0 .6904.55964 1.25 1.25 1.25h14c.6904 0 1.25-.5596 1.25-1.25v-8.5c0-.69036-.5596-1.25-1.25-1.25z"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 7 8 6 8-6"
                })))
            },
            meta: {
                label: "Form",
                keywords: ["envelope", "write"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M23 7V1h-6v2H7V1H1v6h2v10H1v6h6v-2h10v2h6v-6h-2V7h2zM3 3h2v2H3V3zm2 18H3v-2h2v2zm12-2H7v-2H5V7h2V5h10v2h2v10h-2v2zm4 2h-2v-2h2v2zM19 5V3h2v2h-2zm-5.27 9h-3.49l-.73 2H7.89l3.4-9h1.4l3.41 9h-1.63l-.74-2zm-3.04-1.26h2.61L12 8.91l-1.31 3.83z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Format Shapes",
                keywords: ["alphabet", "font", "frame", "letter", "square", "text box", "typography"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m17.9645996 0h-15.99999999v2.5l8.12499999 7.5-8.12499999 7.5v2.5h15.99999999v-3.75h-9.74999999l6.24999999-6.25-6.24999999-6.25h9.74999999z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Sigma",
                keywords: ["code", "function", "greek", "math", "sigma", "sum", "total"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "14.5",
                    rx: ".875",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "14.5",
                    x: "4.75",
                    y: "4.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m5.06667 14.6666 3.9619-2.1334 2.97143 1.4222 3.4667-2.4888 3.4666 2.4888",
                    stroke: "currentColor",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"
                })))
            },
            meta: {
                label: "Gallery - Carousel",
                keywords: ["display", "mountains"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Rect, {
                    height: "13.5",
                    rx: ".875",
                    width: "13.5",
                    x: "7.75",
                    y: "7.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m8 17 3.7143-2 2.7857 1.3333 3.25-2.3333 3.25 2.3333",
                    strokeLinejoin: "round",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m22 3.75h-4.0005c-1.1046 0-1.9995.89543-1.9995 2v1.25m-12.25 15v-3.0002c0-1.1046.89543-1.9998 2-1.9998h1.25m-2-6.25c-1.5 0-2.25-.89543-2.25-2v-4c0-1.10457.89543-2 2-2h4c1.10457 0 2.25.75 2.25 2.25"
                })))
            },
            meta: {
                label: "Gallery - Collage",
                keywords: ["display", "mountains"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    fill: "none",
                    height: "13.5",
                    rx: ".875",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "13.5",
                    x: "3.75",
                    y: "3.75"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 13 3.71429-2 2.78571 1.3333 3.25-2.3333 3.25 2.3333",
                    stroke: "currentColor",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m21.5 11c-.8284 0-1.5-.6716-1.5-1.5v-5c0-.82843.6716-1.5 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m21.5 21c-.8284 0-1.5-.6716-1.5-1.5v-5c0-.8284.6716-1.5 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m3 21.5c0-.8284.67157-1.5 1.5-1.5h12c.8284 0 1.5.6716 1.5 1.5z"
                })))
            },
            meta: {
                label: "Gallery - Masonry",
                keywords: ["display", "mountains"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Path, {
                    d: "m20.75 21.75v-1c0-.5523-.4477-1-1-1h-5c-.5523 0-1 .4477-1 1v1"
                }), (0, r.createElement)(w.Path, {
                    d: "m10.25 21.75v-1c0-.5523-.44772-1-1-1h-5c-.55228 0-1 .4477-1 1v1"
                }), (0, r.createElement)(w.Rect, {
                    height: "13.5",
                    rx: ".875",
                    width: "13.5",
                    x: "5.25",
                    y: "2.75"
                }), (0, r.createElement)(w.Path, {
                    d: "m5.5 12 3.71429-2 2.78571 1.3333 3.25-2.3333 3.25 2.3333",
                    strokeLinejoin: "round"
                })))
            },
            meta: {
                label: "Gallery - Offset",
                keywords: ["display", "mountains"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "13.5",
                    rx: ".875",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 13 4.5-2.5 3.5 1.8333 4-3.3333 4 3.3333",
                    stroke: "currentColor",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m3 21.5c0-.8284.67157-1.5 1.5-1.5h15c.8284 0 1.5.6716 1.5 1.5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Gallery - Stacked",
                keywords: ["display", "mountains"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m20 13.8587524v-11.87893062c0-1.08890198-.8909198-1.97982178-1.9798218-1.97982178h-11.87893064c-1.08890198 0-1.97982178.8909198-1.97982178 1.97982178v11.87893062c0 1.088902.8909198 1.9798218 1.97982178 1.9798218h11.87893064c1.088902 0 1.9798218-.8909198 1.9798218-1.9798218zm-10.88901978-3.95964351 2.00951908 2.68265851 2.9400354-3.6725694 3.9596435 4.9495544h-11.87893064zm-9.11098022-5.89910889v14.028125c0 1.088902.8909198 1.9798218 1.97982178 1.9798218l14.02017822-.0079468v-1.9798218l-14.02017822.0079468v-14.028125z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18 2v12h-12v-12zm0-2h-12c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-12c0-1.1-.9-2-2-2zm-8.5 9.67 1.69 2.26 2.48-3.1 3.33 4.17h-10zm-9.5-5.67v14c0 1.1.9 2 2 2h14v-2h-14v-14z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Gallery",
                keywords: ["aperture", "camera", "collection", "image", "media", "photos"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M15 7.5V2H9v5.5l3 3 3-3zM7.5 9H2v6h5.5l3-3-3-3zM9 16.5V22h6v-5.5l-3-3-3 3zM16.5 9l-3 3 3 3H22V9h-5.5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M13 4v2.67l-1 1-1-1V4h2m7 7v2h-2.67l-1-1 1-1H20M6.67 11l1 1-1 1H4v-2h2.67M12 16.33l1 1V20h-2v-2.67l1-1M15 2H9v5.5l3 3 3-3V2zm7 7h-5.5l-3 3 3 3H22V9zM7.5 9H2v6h5.5l3-3-3-3zm4.5 4.5l-3 3V22h6v-5.5l-3-3z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Game Controls",
                keywords: ["controller", "direction", "d-pad", "plus", "video games"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m1.92731278 4.32703003c.77092511-.7897664 1.54185022-1.50166852 1.88325991-1.3570634.55066079.22246941 0 1.14571746-.33039648 1.69076752-.2753304.46718576-3.14977973 4.32703003-3.14977973 7.01890985 0 1.4238043.52863436 2.6028922 1.47577092 3.3147943.82599119.6229143 1.91629956.8120133 2.90748899.5116796 1.17841409-.3448276 2.14757709-1.5572859 3.37004405-3.0812013 1.33259912-1.6573971 3.11674006-3.82647389 4.49339206-3.82647389 1.7951542 0 1.8171806 1.12347053 1.938326 1.99110119-4.1629956.7119022-5.92511013 4.0823137-5.92511013 5.9733037s1.58590313 3.4371524 3.53524233 3.4371524c1.7951541 0 4.7246696-1.4794216 5.1651982-6.785317h2.7092511v-2.7808676h-2.7202643c-.1651983-1.83537269-1.2004405-4.67185767-4.438326-4.67185767-2.4779736 0-4.60352424 2.12458287-5.44052864 3.15906563-.63876652.81201335-2.26872247 2.75862064-2.52202643 3.02558394-.2753304.3337042-.74889868.9343716-1.22246696.9343716-.49559472 0-.79295155-.9232481-.39647578-2.1357064.38546256-1.21245826 1.54185022-3.18131254 2.03744494-3.9154616.85903084-1.26807564 1.43171806-2.13570634 1.43171806-3.64849833 0-2.4137931-1.8061674-3.18131257-2.76431718-3.18131257-1.45374449 0-2.72026432 1.11234705-2.99559471 1.39043382-.39647577.40044493-.72687225.73414905-.969163 1.03448275zm10.23127752 12.96996667c-.3414097 0-.814978-.2892103-.814978-.8008899 0-.6674082.8039648-2.4471635 3.160793-3.0700779-.3303965 2.9922136-1.5748899 3.8709678-2.345815 3.8709678z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Doodle",
                keywords: ["art", "creative", "doodle", "drawing", "font", "marker", "pencil", "typography"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.25",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m8 4.5-4 5v-5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m12 10.5h1v4h-1z"
                }), (0, r.createElement)(w.Path, {
                    d: "m10.2 10.5h-2.4c-.48 0-.8.3333-.8.6667v2.6666c0 .3334.32.6667.8.6667h2.4c.48 0 .8-.3333.8-.6667v-1.3333h-1.2v1h-1.6v-2h2.8v-.3333c0-.3334-.32-.6667-.8-.6667z"
                }), (0, r.createElement)(w.Path, {
                    d: "m17 11.5v-1h-3v4h1v-1.3333h1.3333v-1h-1.3333v-.6667z"
                })))
            },
            meta: {
                label: "Gif",
                keywords: ["animated", "image", "photo", "picture"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12 3c-4.9725 0-9 4.13206-9 9.2285 0 4.0782 2.5785 7.5366 6.15375 8.7556.45.0869.615-.1985.615-.4438 0-.2192-.0075-.7998-.01125-1.5688-2.5035.5568-3.0315-1.2382-3.0315-1.2382-.4095-1.0651-1.00125-1.3497-1.00125-1.3497-.81525-.5721.063-.5606.063-.5606.90375.0646 1.3785.9505 1.3785.9505.8025 1.4112 2.10675 1.0036 2.62125.7676.081-.5968.3128-1.0036.57-1.2344-1.99875-.2307-4.0995-1.0243-4.0995-4.5604 0-1.0074.34875-1.8303.92625-2.4763-.10125-.23302-.405-1.17125.07875-2.44248 0 0 .75375-.24763 2.475.94593.72-.20534 1.485-.30685 2.25-.31147.765.00462 1.53.10613 2.25.31147 1.71-1.19356 2.4638-.94593 2.4638-.94593.4837 1.27123.18 2.20946.09 2.44248.5737.646.9225 1.4689.9225 2.4763 0 3.5453-2.1038 4.3259-4.1063 4.5527.315.2769.6075.8429.6075 1.7073 0 1.2351-.0112 2.2272-.0112 2.5271 0 .2422.1575.5306.6187.4383 3.6008-1.2104 6.177-4.6711 6.177-8.7432 0-5.09644-4.0297-9.2285-9-9.2285",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "GitHub",
                keywords: ["cat", "profile", "share", "social"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-8 10c0-.61.08-1.21.21-1.78l4.78 4.78v1c0 1.1.9 2 2 2v1.93c-3.93-.5-6.99-3.86-6.99-7.93zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1v-2h2c1.1 0 2-.9 2-2v-.41c2.93 1.18 5.01 4.06 5.01 7.41 0 2.08-.81 3.98-2.11 5.4z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Globe",
                keywords: ["earth", "global", "location", "map", "public", "world"]
            }
        }).styles.default;
        ((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((({
            default: (0, r.createElement)(w.SVG, {
                viewBox: "0 0 14 14",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)(w.Path, {
                d: "M6.998 0C3.139 0 0 3.14 0 6.998s3.14 6.997 6.998 6.997 6.997-3.139 6.997-6.997S10.856 0 6.998 0zm-.166 8.722c-.174.187-.36.353-.658.499-.3.145-.676.218-1.133.218-.58 0-1.068-.18-1.435-.541-.368-.36-.566-.829-.566-1.405v-.99c0-.574.192-1.042.545-1.404.353-.362.815-.543 1.371-.543.578 0 1.025.141 1.332.422.308.282.467.658.473 1.117l-.005.026H5.86c-.017-.274-.098-.458-.241-.605-.143-.147-.353-.223-.63-.223a.838.838 0 00-.695.335c-.178.225-.26.513-.26.867v.996c0 .36.085.653.27.878.184.224.43.337.742.337.222 0 .406-.023.541-.069.135-.045.201-.101.313-.169V7.6h-.883v-.659h1.815v1.78zm4.116-3.372H8.585v1.318h2.027v.708H8.585v1.977h-.932V4.641h3.295z"
            }))
        }.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m4 4h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11 4h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18 4h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 18h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11 18h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18 18h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 11h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m10 10h4v4h-4z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18 11h2v2h-2z"
                })))
            },
            meta: {
                label: "Grid position",
                keywords: ["align", "centered", "dots", "position"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M5 15v-3h3v-2H5V7H3v3H0v2h3v3zm7-1.25c-2.34 0-7 1.17-7 3.5V19h14v-1.75c0-2.33-4.66-3.5-7-3.5zM7.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H7.34zM12 12c1.93 0 3.5-1.57 3.5-3.5S13.93 5 12 5 8.5 6.57 8.5 8.5 10.07 12 12 12zm0-5c.83 0 1.5.67 1.5 1.5S12.83 10 12 10s-1.5-.67-1.5-1.5S11.17 7 12 7zm5 5c1.93 0 3.5-1.57 3.5-3.5S18.93 5 17 5c-.24 0-.48.02-.71.07.76.94 1.21 2.13 1.21 3.43 0 1.3-.47 2.48-1.23 3.42.24.05.48.08.73.08zm2.32 2.02c1 .81 1.68 1.87 1.68 3.23V19h3v-1.75c0-1.69-2.44-2.76-4.68-3.23z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Group Add",
                keywords: ["bulk", "plus", "team", "users"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                }), (0, r.createElement)(w.Circle, {
                    cx: "8",
                    cy: "14",
                    r: "2"
                }), (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "8",
                    r: "2"
                }), (0, r.createElement)(w.Circle, {
                    cx: "16",
                    cy: "14",
                    r: "2"
                })))
            },
            meta: {
                label: "Team",
                keywords: ["circle", "cluster", "crowd", "group", "huddle", "meet"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.0384629.01236979c-5.23157899 0-9.47368425 4.24210526-9.47368425 9.47368421v7.3684211c0 1.7473684 1.41052631 3.1578947 3.15789473 3.1578947h3.15789474v-8.4210526h-4.21052632v-2.1052632c0-4.07368421 3.29473685-7.36842105 7.3684211-7.36842105 4.0736842 0 7.368421 3.29473684 7.368421 7.36842105v2.1052632h-4.2105263v8.4210526h3.1578947c1.7473685 0 3.1578948-1.4105263 3.1578948-3.1578947v-7.3684211c0-5.23157895-4.2421053-9.47368421-9.4736842-9.47368421z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Headset",
                keywords: ["audio", "headphones", "music", "song", "sound"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 20-1.45-1.4386921c-5.15-5.0899183-8.55-8.4468665-8.55-12.56675749 0-3.35694823 2.42-5.99455041 5.5-5.99455041 1.74 0 3.41.88283379 4.5 2.27792916 1.09-1.39509537 2.76-2.27792916 4.5-2.27792916 3.08 0 5.5 2.63760218 5.5 5.99455041 0 4.11989099-3.4 7.47683919-8.55 12.57765669",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.5 0c-1.74 0-3.41.88283379-4.5 2.27792916-1.09-1.39509537-2.76-2.27792916-4.5-2.27792916-3.08 0-5.5 2.63760218-5.5 5.99455041 0 4.11989099 3.4 7.47683919 8.55 12.57765669l1.45 1.4277929 1.45-1.4386921c5.15-5.0899183 8.55-8.4468665 8.55-12.56675749 0-3.35694823-2.42-5.99455041-5.5-5.99455041zm-4.4 16.9482289-.1.1089918-.1-.1089918c-4.76-4.6975477-7.9-7.80381473-7.9-10.95367849 0-2.17983651 1.5-3.8147139 3.5-3.8147139 1.54 0 3.04 1.07901908 3.57 2.57220709h1.87c.52-1.49318801 2.02-2.57220709 3.56-2.57220709 2 0 3.5 1.63487739 3.5 3.8147139 0 3.14986376-3.14 6.25613079-7.9 10.95367849z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Heart",
                keywords: ["kiss", "love", "shape", "valentine"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.25",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m5 15.25h14c.6904 0 1.25.5596 1.25 1.25v2.5c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25v-2.5c0-.6904.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 4h16v11h-16z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Hero",
                keywords: ["display"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m6 22h8v-1.5h-8z"
                }), (0, r.createElement)(w.Path, {
                    d: "m13.1758 2.46347c-2.1834 3.59813-4.63759 7.27765-6.46611 10.71183-.08879.1668-.0675.1566-.05735.2834.12017.985.57349 2.8924.57349 2.8924s-.82048 1.913-1.22583 2.6489h2.4c.27105-.3982.5519-1.0806.78287-1.4935.28752-.0817 1.90663-.5383 2.75273-.9084.1162-.0508.144-.0958.2151-.1962 2.0301-3.6693 3.8383-7.45927 5.7349-11.1769.2357-.55654.1087-1.07052-.3943-1.35894-.9591-.56757-1.9166-1.13821-2.8746-1.70778-.5347-.27141-1.0654-.20883-1.4409.30519zm-5.42348 11.82773c-.03001-.1268.10567-.2255.21813-.1598l2.79925 1.6362c.1099.0643.0947.2271-.0257.2686-.584.2016-1.17592.3838-1.53469.4923-.03989.0121-.08273.0069-.11871-.0142l-.91474-.5345c-.03871-.0226-.0652-.0613-.07265-.1055-.09848-.5844-.23671-1.1009-.35089-1.5831z"
                })))
            },
            meta: {
                label: "Highlight",
                keywords: ["annotate", "pen", "trace", "underline", "write"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Lock Closed",
                keywords: ["https", "key", "padlock", "privacy", "safe", "secure", "security"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.389 3.26543 3.2192-.00042c.0835-.00006.1661.01633.2432.04823s.1472.07869.2062.13769c.059.05899.1057.12904.1376.20614.0319.07709.0483.15973.0483.24317l.0017 3.85454-2.2452 2.24522-2.24463-2.24463.0005-3.85679c.00052-.16774.0674-.32849.18603-.44712.1186-.11863.2794-.18551.4471-.18603z"
                }), (0, r.createElement)(w.Path, {
                    d: "m13.611 20.7346-3.2192.0004c-.0835 0-.1661-.0163-.2432-.0482s-.1472-.0787-.20616-.1377c-.059-.059-.10578-.1291-.13769-.2062-.0319-.0771-.04829-.1597-.04823-.2431l-.00174-3.8546 2.24522-2.2452 2.2446 2.2446-.0005 3.8568c-.0005.1678-.0674.3285-.186.4471-.1186.1187-.2794.1855-.4471.1861z"
                }), (0, r.createElement)(w.Path, {
                    d: "m20.7346 10.389.0004 3.2192c0 .0835-.0163.1661-.0482.2432s-.0787.1472-.1377.2062-.1291.1057-.2062.1376-.1597.0483-.2431.0483l-3.8546.0017-2.2452-2.2452 2.2446-2.24463 3.8568.0005c.1678.00052.3285.0674.4471.18603.1187.1186.1855.2794.1861.4471z"
                }), (0, r.createElement)(w.Path, {
                    d: "m3.26543 13.611-.00042-3.2192c-.00006-.0835.01633-.1661.04823-.2432s.07869-.1472.13769-.20616c.05899-.059.12904-.10578.20614-.13769.07709-.0319.15973-.04829.24317-.04823l3.85454-.00174 2.24522 2.24522-2.24463 2.2446-3.85679-.0005c-.16774-.0005-.32849-.0674-.44712-.186s-.18551-.2794-.18603-.4471z"
                })))
            },
            meta: {
                label: "Icon",
                keywords: ["arrow", "d-pad", "direction", "pad"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 12.6315789c1.7473684 0 3.1473684-1.4105263 3.1473684-3.15789469l.0105263-6.31578947c0-1.74736842-1.4105263-3.15789474-3.1578947-3.15789474-1.74736842 0-3.15789474 1.41052632-3.15789474 3.15789474v6.31578947c0 1.74736839 1.41052632 3.15789469 3.15789474 3.15789469zm-1.26315789-9.57894732c0-.69473684.56842105-1.2631579 1.26315789-1.2631579.6947368 0 1.2631579.56842106 1.2631579 1.2631579l-.0105263 6.52631579c0 .69473683-.5578948 1.26315793-1.2526316 1.26315793-.69473684 0-1.26315789-.5684211-1.26315789-1.26315793zm6.84210529 6.42105263c0 3.15789469-2.6736842 5.36842109-5.5789474 5.36842109-2.90526316 0-5.57894737-2.2105264-5.57894737-5.36842109h-1.78947368c0 3.58947369 2.86315789 6.55789469 6.31578947 7.07368419v3.4526316h2.10526318v-3.4526316c3.4526316-.5052631 6.3157895-3.4736842 6.3157895-7.07368419z"
                }), (0, r.createElement)(w.Path, {
                    d: "m10 12.6315789c1.7473684 0 3.1473684-1.4105263 3.1473684-3.15789469l.0105263-6.31578947c0-1.74736842-1.4105263-3.15789474-3.1578947-3.15789474-1.74736842 0-3.15789474 1.41052632-3.15789474 3.15789474v6.31578947c0 1.74736839 1.41052632 3.15789469 3.15789474 3.15789469zm5.5789474-3.15789469c0 3.15789469-2.6736842 5.36842109-5.5789474 5.36842109-2.90526316 0-5.57894737-2.2105264-5.57894737-5.36842109h-1.78947368c0 3.58947369 2.86315789 6.55789469 6.31578947 7.07368419v3.4526316h2.10526318v-3.4526316c3.4526316-.5052631 6.3157895-3.4736842 6.3157895-7.07368419z"
                }))),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 12.6315789c1.7473684 0 3.1473684-1.4105263 3.1473684-3.15789469l.0105263-6.31578947c0-1.74736842-1.4105263-3.15789474-3.1578947-3.15789474-1.74736842 0-3.15789474 1.41052632-3.15789474 3.15789474v6.31578947c0 1.74736839 1.41052632 3.15789469 3.15789474 3.15789469zm-1.26315789-9.57894732c0-.69473684.56842105-1.2631579 1.26315789-1.2631579.6947368 0 1.2631579.56842106 1.2631579 1.2631579l-.0105263 6.52631579c0 .69473683-.5578948 1.26315793-1.2526316 1.26315793-.69473684 0-1.26315789-.5684211-1.26315789-1.26315793zm6.84210529 6.42105263c0 3.15789469-2.6736842 5.36842109-5.5789474 5.36842109-2.90526316 0-5.57894737-2.2105264-5.57894737-5.36842109h-1.78947368c0 3.58947369 2.86315789 6.55789469 6.31578947 7.07368419v3.4526316h2.10526318v-3.4526316c3.4526316-.5052631 6.3157895-3.4736842 6.3157895-7.07368419z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Microphone",
                keywords: ["audio", "media", "music", "podcast", "song", "voice", "microphone"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18 0h-16c-1.1 0-1.99.9-1.99 2l-.01 10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2zm-9 3h2v2h-2zm0 3h2v2h-2zm-3-3h2v2h-2zm0 3h2v2h-2zm-1 2h-2v-2h2zm0-3h-2v-2h2zm9 7h-8v-2h8zm0-4h-2v-2h2zm0-3h-2v-2h2zm3 3h-2v-2h2zm0-3h-2v-2h2z",
                    transform: "translate(0, 3)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Keyboard",
                keywords: ["computer", "desk", "device", "ipad", "office", "pc", "surface"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m16.6666667 15c.9166666 0 1.6583333-.75 1.6583333-1.6666667l.0083333-9.16666663c0-.91666667-.75-1.66666667-1.6666666-1.66666667h-13.33333337c-.91666666 0-1.66666666.75-1.66666666 1.66666667v9.16666663c0 .9166667.75 1.6666667 1.66666666 1.6666667h-3.33333333c0 .9166667.75 1.6666667 1.66666667 1.6666667h16.66666663c.9166667 0 1.6666667-.75 1.6666667-1.6666667zm-13.33333337-10.83333333h13.33333337v9.16666663h-13.33333337zm6.66666667 11.66666663c-.45833333 0-.83333333-.375-.83333333-.8333333s.375-.8333333.83333333-.8333333c.4583333 0 .8333333.375.8333333.8333333s-.375.8333333-.8333333.8333333z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Laptop",
                keywords: ["computer", "device", "monitor", "office", "pc", "screen"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m9.99610362 17.0837787-7.42990299-5.7765731-1.63316728 1.2702412 9.07315155 7.0568956 9.0731515-7.0568956-1.6432485-1.2803225zm.01008128-2.560645 7.4198217-5.77657311 1.6533298-1.28032249-9.0731515-7.05689565-9.07315155 7.05689565 1.64324856 1.28032249z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Layers",
                keywords: ["build", "cards", "creative", "design", "stack"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Live TV",
                keywords: ["broadcast", "livestream", "media", "television", "video", "youtube"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Lock Open",
                keywords: ["http", "insecure", "key", "lock", "open", "padlock", "privacy", "safe", "security"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m12.0026 7.67357c-2.3621 0-4.25762 1.92468-4.25762 4.25763 0 2.3621 1.92468 4.2576 4.25762 4.2576 2.3621 0 4.2576-1.9247 4.2576-4.2576 0-2.33295-1.8955-4.25763-4.2576-4.25763zm.3208 5.36573-.9624.9624-.9623-.9624-.93318-.9331.96238-.9624.9331.9332 2.2163-2.2163.9624.9623zm8.1944-2.3037c-.3791-.35-.5249-.90406-.3207-1.37065l.1749-.43742c.2917-.67072-.0875-1.42893-.7873-1.63306l-.4666-.11665c-.4958-.14581-.8457-.58324-.8749-1.10815v-.49575c-.0291-.72904-.6999-1.25396-1.3997-1.13731l-.4666.08749c-.5249.08748-1.0207-.14581-1.254-.6124l-.2333-.40827c-.3499-.64155-1.1665-.81653-1.7497-.40826l-.3791.26246c-.4083.29161-.9915.29161-1.3998 0l-.3791-.29162c-.5832-.43743-1.42889-.2333-1.77883.40826l-.23329.40827c-.26246.46659-.75821.69988-1.28312.6124l-.46659-.08749c-.72905-.11665-1.37061.40826-1.42893 1.13731l-.02916.46659c-.02916.52491-.3791.96234-.87485 1.10815l-.46659.1458c-.69989.20414-1.07899.96234-.78737 1.63306l.17497.43743c.20413.46659.05832 1.02071-.32078 1.37061l-.34994.3208c-.55408.4666-.55408 1.3414 0 1.808l.34994.3208c.3791.3499.52491.904.32078 1.3706l-.17497.4374c-.29162.6707.08748 1.4289.78737 1.6331l.46659.1166c.49575.1458.84569.5833.87485 1.1082l.02916.4666c.02916.729.69988 1.2539 1.39977 1.1373l.46658-.0875c.52492-.0875 1.02067.1458 1.25396.6124l.2333.4082c.34994.6416 1.16645.8166 1.74975.4083l.3791-.2624c.4082-.2917.9915-.2917 1.3997 0l.3791.2916c.5833.4374 1.429.2333 1.7789-.4083l.2333-.4083c.2624-.4665.7582-.6998 1.2831-.6124l.4666.0875c.729.1167 1.3706-.4082 1.4289-1.1373l.0292-.4666c.0291-.5249.3791-.9623.8748-1.1081l.4666-.1167c.6999-.2041 1.079-.9623.7874-1.633l-.175-.4375c-.2041-.4665-.0583-1.0206.3208-1.3706l.3499-.3207c.5541-.4666.5541-1.3415 0-1.8081zm-8.5152 7.1154c-3.26612 0-5.89068-2.6537-5.89068-5.8906 0-3.26617 2.65372-5.89073 5.89068-5.89073 3.2661 0 5.8907 2.65372 5.8907 5.89073 0 3.2369-2.6246 5.8906-5.8907 5.8906z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Logos",
                keywords: ["certified", "checkmark"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.6976 16.8149-4.5045 2.7755c-.1023.0623-.219.0952-.338.0952-.1189 0-.2356-.0329-.3379-.0952l-3.2947-2.0192c.2929-.5543.4809-1.1606.5542-1.7867l3.2233 2.0124v-9.50002l-5.46036-3.34376v6.29688c-.4582-.4688-1.23302-.6921-2.00388-.7355-.09631 0-.19431-.0087-.29399-.0087-.09969 0-.19938 0-.29569.0087-.85883.0493-1.7495.4304-2.44608.9485v-4.963c-.0002-.11068.02756-.21953.08057-.31591s.12945-.177.22187-.23399l4.56823-2.85494c.10228-.06229.21901-.09516.33793-.09516s.23564.03287.3379.09516l4.807 2.96287 4.6025-2.83623c.0546-.03341.1169-.05136.1804-.05203.0636-.00067.1263.01598.1815.04824.0553.03225.1013.07897.1333.1354s.0488.12055.0488.18584v12.72755c-.0001.1103-.028.2188-.081.3149-.053.096-.1293.1764-.2214.2332zm-10.15796.8309-2.01909 2.2291c-.03574.0395-.07901.071-.12712.0925s-.10003.0326-.15251.0326-.10439-.0111-.15251-.0326c-.04811-.0215-.09138-.053-.12712-.0925l-2.01908-2.2291c-.46748-.5034-.77835-1.1384-.893-1.8239-.11465-.6856-.02788-1.3906.24925-2.0254.24163-.5429.62326-1.0077 1.10363-1.344.48036-.3364 1.04116-.5314 1.62172-.5641h.21796.21795c.58056.0327 1.14136.2277 1.62172.5641.48037.3363.862.8011 1.10366 1.344.2769.6349.3634 1.3401.2484 2.0256-.1149.6856-.4261 1.3205-.89386 1.8237zm-.81102-2.4164c0-.3019-.0872-.5971-.25058-.8481s-.39559-.4467-.66728-.5622c-.27169-.1156-.57064-.1458-.85907-.0869-.28842.0589-.55335.2043-.76129.4178s-.34955.4855-.40692.7816-.02793.603.08461.882c.11254.2789.30311.5173.54762.6851.24451.1677.53198.2572.82606.2572.19539 0 .38888-.0395.56938-.1163.18051-.0769.34449-.1895.48258-.3314s.24757-.3104.3222-.4958c.07462-.1854.11291-.3841.11269-.5847z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Map",
                keywords: ["location", "marker", "position", "world"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c3.921743 0 7.114273 3.19253001 7.114273 7.11427301 0 4.95331259-6.1894175 11.86305029-6.4562027 12.15651399l-.6580703.729213-.65807025-.729213c-.26678524-.2934637-6.45620276-7.2032014-6.45620276-12.15651399 0-3.921743 3.19253001-7.11427301 7.11427301-7.11427301zm-1.36060471 9.04401956-1.56514007-1.5740329-1.26278345 1.26278346 2.82792352 2.82792348 5.34459761-5.34459756-1.2538906-1.26278346z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 0c-3.921743 0-7.11427301 3.19253001-7.11427301 7.11427301 0 4.95331259 6.18941752 11.86305029 6.45620276 12.15651399l.65807025.729213.6580703-.729213c.2667852-.2934637 6.4562027-7.2032014 6.4562027-12.15651399 0-3.921743-3.19253-7.11427301-7.114273-7.11427301zm0 17.3143619c-1.9386394-2.3210315-5.33570476-7.0520231-5.33570476-10.20008889 0-2.94353046 2.3921743-5.33570476 5.33570476-5.33570476 2.9435305 0 5.3357048 2.3921743 5.3357048 5.33570476 0 3.40595819-3.7794576 8.32369939-5.3357048 10.20008889zm-1.36060471-8.27034234-1.56514007-1.5740329-1.26278345 1.26278346 2.82792352 2.82792348 5.34459761-5.34459756-1.2538906-1.26278346z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Marker",
                keywords: ["check", "directions", "location", "map", "pin", "verified"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m15.75 18v1.75c0 .5523-.4477 1-1 1h-10c-.55228 0-1-.4477-1-1v-15c0-.55228.44772-1 1-1h10c.5523 0 1 .44959 1 1.00188 0 2.11305 0 1.45031 0 1.24812",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Rect, {
                    fill: "currentColor",
                    height: "8",
                    rx: "1",
                    width: "8",
                    x: "12",
                    y: "8"
                }))
            },
            meta: {
                label: "Media card",
                keywords: ["square"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "M21,5c-1.11-0.35-2.33-0.5-3.5-0.5c-1.95,0-4.05,0.4-5.5,1.5c-1.45-1.1-3.55-1.5-5.5-1.5S2.45,4.9,1,6v14.65 c0,0.25,0.25,0.5,0.5,0.5c0.1,0,0.15-0.05,0.25-0.05C3.1,20.45,5.05,20,6.5,20c1.95,0,4.05,0.4,5.5,1.5c1.35-0.85,3.8-1.5,5.5-1.5 c1.65,0,3.35,0.3,4.75,1.05c0.1,0.05,0.15,0.05,0.25,0.05c0.25,0,0.5-0.25,0.5-0.5V6C22.4,5.55,21.75,5.25,21,5z M21,18.5 c-1.1-0.35-2.3-0.5-3.5-0.5c-1.7,0-4.15,0.65-5.5,1.5V8c1.35-0.85,3.8-1.5,5.5-1.5c1.2,0,2.4,0.15,3.5,0.5V18.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "M17.5,10.5c0.88,0,1.73,0.09,2.5,0.26V9.24C19.21,9.09,18.36,9,17.5,9c-1.7,0-3.24,0.29-4.5,0.83v1.66 C14.13,10.85,15.7,10.5,17.5,10.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "M13,12.49v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26V11.9c-0.79-0.15-1.64-0.24-2.5-0.24 C15.8,11.66,14.26,11.96,13,12.49z"
                }), (0, r.createElement)(w.Path, {
                    d: "M17.5,14.33c-1.7,0-3.24,0.29-4.5,0.83v1.66c1.13-0.64,2.7-0.99,4.5-0.99c0.88,0,1.73,0.09,2.5,0.26v-1.52 C19.21,14.41,18.36,14.33,17.5,14.33z"
                })))
            },
            meta: {
                label: "Menu",
                keywords: ["book", "cafe", "magazine", "open", "pages", "read", "restaurant"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M17 20.41L18.41 19 15 15.59 13.59 17 17 20.41zM7.5 8H11v5.59L5.59 19 7 20.41l6-6V8h3.5L12 3.5 7.5 8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Merge",
                keywords: ["arrows", "combine", "join", "mix", "up"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m6.5 0h-5c-.825 0-1.5.61363636-1.5 1.36363636v9.27272724c0 .75.675 1.3636364 1.5 1.3636364h5c.825 0 1.5-.6136364 1.5-1.3636364v-9.27272724c0-.75-.675-1.36363636-1.5-1.36363636zm-.5 10h-4v-8h4z",
                    transform: "translate(4 2)"
                }))
            },
            meta: {
                label: "Mobile",
                keywords: ["call", "number", "phone", "tablet"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.8181818 4.54545455-3.40909089 4.54545454 2.59090909 3.45454541-1.45454545 1.0909091c-1.53636364-2.0454545-4.0909091-5.45454542-4.0909091-5.45454542l-5.45454545 7.27272732h20z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.8181818 4.54545455-3.83636362 5.11818181 1.13636364 1.51818184 2.69999998-3.60909093 4.5454546 6.06363633h-7.69090913l-3.64545454-4.88181815-5.02727273 6.70000005h20zm-8.18181816 9.09090905 1.38181818-1.8454545 1.38181818 1.8454545z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Mountains",
                keywords: ["backpacking", "hills", "hiking", "landscape", "outdoors", "peaks", "summit", "valley"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m13 10.5h-8c-.27614 0-.5.2239-.5.5v8c0 .2761.22386.5.5.5h8c.2761 0 .5-.2239.5-.5v-8c0-.2761-.2239-.5-.5-.5zm-8-1.5h8c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-8c-1.10457 0-2-.8954-2-2v-8c0-1.10457.89543-2 2-2z",
                    fillRule: "evenodd"
                }), (0, r.createElement)(w.Path, {
                    d: "m7.67708 16.8438v-3.6875l3.07292 1.8437z"
                }), (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m9.03508 5c0-1.10457.89543-2 2.00002-2h7.9649c1.1046 0 2 .89543 2 2v8c0 1.1046-.8954 2-2 2h-1.9961v-1.5h1.9961c.2761 0 .5-.2239.5-.5v-2.838l-1.728-1.59293-.9927 1.11671c-.1351.15198-.3261.24259-.5292.25107-.2032.00848-.4011-.06589-.5484-.20609l-2.0421-1.9437-2.3585 2.55494-1.1022-1.01737 2.875-3.11459c.1363-.14762.3261-.2344.5269-.24089.2008-.0065.3958.06784.5413.20634l2.0317 1.93375.9844-1.10751c.1337-.15043.3223-.2408.5233-.2508s.3976.06121.5456.19762l1.2729 1.17337v-3.12192c0-.27614-.2239-.5-.5-.5h-7.9649c-.2762 0-.5.22386-.5.5v1.98438h-1.50002z",
                    fillRule: "evenodd"
                })))
            },
            meta: {
                label: "Multimedia",
                keywords: ["media", "photo", "picture", "video"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m20.0286458 10.0068123-2.2181818-2.52727276.3090909-3.34545455-3.2818182-.74545454-1.7181818-2.8909091-3.0909091 1.32727273-3.09090906-1.32727273-1.71818182 2.8909091-3.28181818.73636363.30909091 3.34545455-2.21818182 2.53636367 2.21818182 2.5272727-.30909091 3.3545454 3.28181818.7454546 1.71818182 2.8909091 3.09090906-1.3363637 3.0909091 1.3272728 1.7181818-2.8909091 3.2818182-.7454546-.3090909-3.3454545zm-9.0909091 4.5454545h-1.81818178v-1.8181818h1.81818178zm0-3.6363636h-1.81818178v-5.45454548h1.81818178z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m20.5555013 9.96270419-2.2181818-2.52727273.3090909-3.34545454-3.2818182-.74545455-1.7181818-2.89090909-3.0909091 1.32727273-3.09090909-1.32727273-1.71818182 2.89090909-3.28181818.73636364.30909091 3.34545454-2.21818182 2.53636364 2.21818182 2.52727271-.30909091 3.3545455 3.28181818.7454545 1.71818182 2.8909091 3.09090909-1.3363636 3.0909091 1.3272727 1.7181818-2.8909091 3.2818182-.7454545-.3090909-3.3454546zm-4.1 1.91818181.2363636 2.5363636-2.4909091.5636364-1.3 2.1909091-2.3454545-1.0090909-2.34545454 1.0090909-1.3-2.1909091-2.49090909-.5636364.23636363-2.5454545-1.68181818-1.90909091 1.68181818-1.92727273-.23636363-2.52727272 2.49090909-.55454546 1.3-2.19090909 2.34545454 1 2.3454545-1.00909091 1.3 2.19090909 2.4909091.56363637-.2363636 2.53636363 1.6818182 1.91818182zm-6.80909091.8090909h1.81818181v1.8181818h-1.81818181zm0-7.27272726h1.81818181v5.45454546h-1.81818181z",
                    transform: "translate(-.565918)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "New",
                keywords: ["alert", "badge", "exclamation mark", "important", "info", "notice", "notification", "sticker", "warning"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-4.51 2.11l.26 2.79-2.74.62-1.43 2.41L12 18.82l-2.58 1.11-1.43-2.41-2.74-.62.26-2.8L3.66 12l1.85-2.12-.26-2.78 2.74-.61 1.43-2.41L12 5.18l2.58-1.11 1.43 2.41 2.74.62-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Releases",
                keywords: ["exclamation", "new"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zM11.48 20v-6.26H8L13 4v6.26h3.35L11.48 20z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M12 2.02c-5.51 0-9.98 4.47-9.98 9.98s4.47 9.98 9.98 9.98 9.98-4.47 9.98-9.98S17.51 2.02 12 2.02zm0 17.96c-4.4 0-7.98-3.58-7.98-7.98S7.6 4.02 12 4.02 19.98 7.6 19.98 12 16.4 19.98 12 19.98zM12.75 5l-4.5 8.5h3.14V19l4.36-8.5h-3z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Offline Bolt",
                keywords: ["amp", "circle", "lightning", "performance", "power"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m8.5 8.5 3.5-3.5 3.5 3.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m15.5 15.5-3.5 3.5-3.5-3.5",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.25 18.0625v-12.25h1.5v12.25z"
                }))
            },
            meta: {
                label: "Open",
                keywords: ["arrows", "down", "up", "vertical"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M.59 12c0-1.152.927-2.085 2.07-2.085 1.144 0 2.07.933 2.07 2.085a2.078 2.078 0 01-2.07 2.085A2.077 2.077 0 01.59 12zm14.54 2.085A2.077 2.077 0 0113.06 12c0-1.152.927-2.085 2.07-2.085 1.143 0 2.07.933 2.07 2.085a2.078 2.078 0 01-2.07 2.085zm0-10.426c-4.572 0-8.28 3.735-8.28 8.34 0 4.608 3.707 8.342 8.28 8.342 4.573 0 8.28-3.734 8.28-8.341 0-4.606-3.707-8.34-8.28-8.34z",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "OpenTable",
                keywords: ["profile", "share", "social"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    height: "25",
                    viewBox: "0 0 24 25",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m14.5314 1v1.49242h-2.0067v-1.49242zm4.9776 0c1.0996 0 1.991.89091 1.991 1.98989h-1.4933c0-.27475-.2228-.49747-.4977-.49747zm-1.4933 1.49242v-1.49242h-2.0067v1.49242zm1.991 10.94438v-1.9899h1.4933v1.9899zm0-3.4823h1.4933v-1.98989h-1.4933zm-.4977 5.4722c.2749 0 .4977-.2227.4977-.4975h1.4933c0 1.099-.8914 1.9899-1.991 1.9899zm1.991-8.95451h-1.4933v-1.98989h1.4933zm-10.4063-5.47219c-1.09964 0-1.99105.89091-1.99105 1.98989h1.49325c0-.27475.2229-.49747.4978-.49747zm-2.16208 4.87109 7.54938 7.54501v5.9282c0 .2976-.2415.5389-.5393.5389h-10.78475c-.29781 0-.53923-.2413-.53923-.5389v-12.93428c0-.29764.24142-.53893.53923-.53893zm5.39238-1.61678h-7.01009-2.15696c-1.19125 0-2.15695.96514-2.15695 2.15571v12.93428c0 1.1906.9657 2.1557 2.15695 2.1557h10.78475c1.1913 0 2.157-.9651 2.157-2.1557v-4.3114-7.0061-1.61678c0-1.19057-.9657-2.15571-2.157-2.15571z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Page duplicate",
                keywords: ["corner", "ghost", "paper"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    height: "24",
                    viewBox: "0 0 24 24",
                    width: "24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m17.9584 12.5417-7.5833-7.58336h-3.79169c-.29915 0-.54166.24251-.54166.54166v13c0 .2991.24251.5417.54166.5417h10.83329c.2992 0 .5417-.2426.5417-.5417zm-9.20832-9.20836h7.04162 1.625c1.1967 0 2.1667.97005 2.1667 2.16666v1.625 7.0417 4.3333c0 1.1967-.97 2.1667-2.1667 2.1667h-10.83329c-1.19661 0-2.16666-.97-2.16666-2.1667v-13c0-1.19661.97005-2.16666 2.16666-2.16666z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Page",
                keywords: ["corner", "paper"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m20.1658 18.312c0 .9283-.7596 1.6879-1.688 1.6879-.9283 0-1.6879-.7596-1.6879-1.6879 0-.9284 1.6879-3.3758 1.6879-3.3758s1.688 2.4474 1.688 3.3758z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }), (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m4.97449 13c0 .422.16879.844.42198 1.1815l4.30419 4.3042c.67514.6752 1.68794.6752 2.36304 0l4.3042-4.3042c.2532-.3375.422-.7595.422-1.1815z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }), (0, r.createElement)(w.Path, {
                    d: "m7.92839 3.71155 6.66731 6.66725m-4.895 8.2708-4.30419-4.3042c-.67517-.6751-.67517-1.6879 0-2.3631l5.48569-5.3169 5.4014 5.4013c.6752.6752.6752 1.688 0 2.3631l-4.3042 4.3042c-.5908.5908-1.6035.5908-2.2787-.0844z",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }))
            },
            meta: {
                label: "Paint can",
                keywords: ["artist", "colors", "creative", "design", "palette"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.4389323 2.01845703v-.99840495c0-.54912272-.4492822-.99840494-.998405-.99840494h-11.98085933c-.54912272 0-.99840495.44928222-.99840495.99840494v3.99361979c0 .54912273.44928223.99840495.99840495.99840495h11.98085933c.5491228 0 .998405-.44928222.998405-.99840495v-.99840494h.9984049v3.99361979h-9.98404944v10.98245438c0 .5491228.44928223.998405.99840495.998405h1.99680989c.54912273 0 .99840495-.4492822.99840495-.998405v-8.9856445h7.98723955v-7.98723957z",
                    transform: "translate(1)",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.4389323 2.01845703v-.99840495c0-.54912272-.4492822-.99840494-.998405-.99840494h-11.98085933c-.54912272 0-.99840495.44928222-.99840495.99840494v3.99361979c0 .54912273.44928223.99840495.99840495.99840495h11.98085933c.5491228 0 .998405-.44928222.998405-.99840495v-.99840494h.9984049v3.99361979h-9.98404944v10.98245438c0 .5491228.44928223.998405.99840495.998405h1.99680989c.54912273 0 .99840495-.4492822.99840495-.998405v-8.9856445h7.98723955v-7.98723957zm-1.9968099 1.9968099h-9.98404948v-1.9968099h9.98404948z",
                    transform: "translate(1)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Paint",
                keywords: ["artist", "brush", "colors", "creative", "design", "media", "palette"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m18.5806749.77408854h-15.55555554c-1.22222222 0-2.22222222 1-2.22222222 2.22222222v15.55555554c0 1.2222222 1 2.2222222 2.22222222 2.2222222h15.55555554c1.2222222 0 2.2222222-1 2.2222222-2.2222222v-15.55555554c0-1.22222222-1-2.22222222-2.2222222-2.22222222zm-11.1111111 15.55555556h-2.22222222v-7.77777778h2.22222222zm4.4444444 0h-2.22222218v-11.11111111h2.22222218zm4.4444445 0h-2.2222222v-4.4444444h2.2222222z",
                    transform: "translate(-.802897 -.774089)",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m17.7777778 0h-15.55555558c-1.22222222 0-2.22222222 1-2.22222222 2.22222222v15.55555558c0 1.2222222 1 2.2222222 2.22222222 2.2222222h15.55555558c1.2222222 0 2.2222222-1 2.2222222-2.2222222v-15.55555558c0-1.22222222-1-2.22222222-2.2222222-2.22222222zm0 17.7777778h-15.55555558v-15.55555558h15.55555558zm-13.33333336-10.00000002h2.22222223v7.77777782h-2.22222223zm4.44444445-3.33333334h2.22222221v11.11111116h-2.22222221zm4.44444441 6.66666666h2.2222223v4.4444445h-2.2222223z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Poll",
                keywords: ["analytics", "chart", "data", "graph", "square", "stats", "survey", "vote"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m6 4.75h12c.6904 0 1.25.55964 1.25 1.25v12c0 .6904-.5596 1.25-1.25 1.25h-12c-.69036 0-1.25-.5596-1.25-1.25v-12c0-.69036.55964-1.25 1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m7 9h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m7 13h2v2h-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m10 9h7v2h-7z"
                }), (0, r.createElement)(w.Path, {
                    d: "m10 13h7v2h-7z"
                }), (0, r.createElement)(w.Path, {
                    d: "m23 18c-.8284 0-1.5-.6716-1.5-1.5v-9c0-.82843.6716-1.5 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m1 6c.82843 0 1.5.67157 1.5 1.5v9c0 .8284-.67157 1.5-1.500001 1.5z"
                })))
            },
            meta: {
                label: "Post carousel",
                keywords: ["lines", "list", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    fill: "currentColor",
                    height: "8",
                    rx: "1",
                    width: "8",
                    x: "3",
                    y: "3"
                }), (0, r.createElement)(w.Rect, {
                    fill: "currentColor",
                    height: "8",
                    rx: "1",
                    width: "8",
                    x: "13",
                    y: "3"
                }), (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Path, {
                    d: "m13 18.25h5"
                }), (0, r.createElement)(w.Path, {
                    d: "m13 14.25h7"
                }), (0, r.createElement)(w.Path, {
                    d: "m3 18.25h5"
                }), (0, r.createElement)(w.Path, {
                    d: "m3 14.25h7"
                })))
            },
            meta: {
                label: "Posts",
                keywords: ["double", "text", "twice"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    clipRule: "evenodd",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, (0, r.createElement)(w.Path, {
                    d: "m18 4.5h-12c-.27614 0-.5.22386-.5.5v14.5c0 .2761.22386.5.5.5h12c.2761 0 .5-.2239.5-.5v-14.5c0-.27614-.2239-.5-.5-.5zm-12-1.5h12c1.1046 0 2 .89543 2 2v14.5c0 1.1046-.8954 2-2 2h-12c-1.10457 0-2-.8954-2-2v-14.5c0-1.10457.89543-2 2-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m10.9123 9.87699c-.3141.21991-.4123.45171-.4123.62301s.0982.4031.4123.623c.3118.2182.7824.377 1.3377.377v1.5c-.8254 0-1.6048-.233-2.1979-.6481-.59069-.4135-1.0521-1.0567-1.0521-1.8519 0-.79516.46141-1.43835 1.0521-1.85186.5931-.41517 1.3725-.64814 2.1979-.64814s1.6048.23297 2.1979.64814c.5907.41351 1.0521 1.0567 1.0521 1.85186 0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75c0-.1713-.0982-.4031-.4123-.62301-.3118-.21821-.7824-.37699-1.3377-.37699s-1.0259.15878-1.3377.37699z"
                }), (0, r.createElement)(w.Path, {
                    d: "m13.5877 14.623c.3141-.2199.4123-.4517.4123-.623s-.0982-.4031-.4123-.623c-.3118-.2182-.7824-.377-1.3377-.377v-1.5c.8254 0 1.6048.233 2.1979.6481.5907.4135 1.0521 1.0567 1.0521 1.8519s-.4614 1.4384-1.0521 1.8519c-.5931.4151-1.3725.6481-2.1979.6481s-1.6048-.233-2.1979-.6481c-.59069-.4135-1.0521-1.0567-1.0521-1.8519 0-.4142.33579-.75.75-.75.4142 0 .75.3358.75.75 0 .1713.0982.4031.4123.623.3118.2182.7824.377 1.3377.377s1.0259-.1588 1.3377-.377z"
                }), (0, r.createElement)(w.Path, {
                    d: "m12.25 15.5c.4142 0 .75.3358.75.75v.5c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-.5c0-.4142.3358-.75.75-.75z"
                }), (0, r.createElement)(w.Path, {
                    d: "m12.25 7c.4142 0 .75.33579.75.75v.5c0 .41421-.3358.75-.75.75s-.75-.33579-.75-.75v-.5c0-.41421.3358-.75.75-.75z"
                })))
            },
            meta: {
                label: "Pricing table - Item",
                keywords: ["cash", "money", "paper", "sign"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    clipRule: "evenodd",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, (0, r.createElement)(w.Path, {
                    d: "m16 3h-10c-.27614 0-.5.22386-.5.5v13.5c0 .2761.22386.5.5.5h10c.2761 0 .5-.2239.5-.5v-13.5c0-.27614-.2239-.5-.5-.5zm-10-1.5h10c1.1046 0 2 .89543 2 2v13.5c0 1.1046-.8954 2-2 2h-10c-1.10457 0-2-.8954-2-2v-13.5c0-1.10457.89543-2 2-2z"
                }), (0, r.createElement)(w.Path, {
                    d: "m9.91233 7.87699c-.31409.21986-.41233.45167-.41233.62301s.09824.40315.41233.62301c.31177.21821.78237.37699 1.33767.37699v1.5c-.8254 0-1.60477-.233-2.19786-.6481-.59073-.41355-1.05214-1.05674-1.05214-1.8519s.46141-1.43835 1.05214-1.85186c.59309-.41517 1.37246-.64814 2.19786-.64814s1.6048.23297 2.1979.64814c.5907.41351 1.0521 1.0567 1.0521 1.85186 0 .41421-.3358.75-.75.75s-.75-.33579-.75-.75c0-.17134-.0982-.40315-.4123-.62301-.3118-.21821-.7824-.37699-1.3377-.37699s-1.0259.15878-1.33767.37699z"
                }), (0, r.createElement)(w.Path, {
                    d: "m12.5877 12.623c.3141-.2199.4123-.4517.4123-.623s-.0982-.4031-.4123-.623c-.3118-.2182-.7824-.377-1.3377-.377v-1.5c.8254 0 1.6048.23297 2.1979.6481.5907.4135 1.0521 1.0567 1.0521 1.8519s-.4614 1.4384-1.0521 1.8519c-.5931.4151-1.3725.6481-2.1979.6481s-1.60477-.233-2.19786-.6481c-.59073-.4135-1.05214-1.0567-1.05214-1.8519 0-.4142.33579-.75.75-.75s.75.3358.75.75c0 .1713.09824.4031.41233.623.31177.2182.78237.377 1.33767.377s1.0259-.1588 1.3377-.377z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.25 13.5c.4142 0 .75.3358.75.75v.5c0 .4142-.3358.75-.75.75s-.75-.3358-.75-.75v-.5c0-.4142.3358-.75.75-.75z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.25 5c.4142 0 .75.33579.75.75v.5c0 .41421-.3358.75-.75.75s-.75-.33579-.75-.75v-.5c0-.41421.3358-.75.75-.75z"
                })), (0, r.createElement)(w.Path, {
                    d: "m20.25 8.25v11c0 1.1046-.8954 2-2 2h-8",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }))
            },
            meta: {
                label: "Pricing table",
                keywords: ["cash", "money", "paper", "sign"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Circle, {
                    cx: "9",
                    cy: "9",
                    r: "4"
                }), (0, r.createElement)(w.Path, {
                    d: "M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"
                }))),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M9 13c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 8c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm-6 4c.22-.72 3.31-2 6-2 2.7 0 5.8 1.29 6 2H3zM15.08 7.05c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27l-1.68 1.69zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Voice",
                keywords: ["accouncement", "audio", "broadcast", "megaphone", "podcast", "record", "shout", "sing", "speak", "talk", "voice over"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m5.83333333 6.66666667v-2.5l-5.83333333 5.83333333 5.83333333 5.8333333v-2.5l-3.33333333-3.3333333zm4.99999997.83333333v-3.33333333l-5.8333333 5.83333333 5.8333333 5.8333333v-3.4166666c4.1666667 0 7.0833334 1.3333333 9.1666667 4.25-.8333333-4.1666667-3.3333333-8.33333337-9.1666667-9.1666667z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Reply",
                keywords: ["arrows", "back", "comment", "email", "mail", "message", "respond", "reverse"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "-2 -1 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 2.538C0 1.865.258 1.22.716.744A2.4 2.4 0 0 1 2.443 0h14.114a2.4 2.4 0 0 1 1.727.744c.458.476.715 1.121.716 1.794v18.616c0 .009-.005.017-.005.026-.018.11-.043.22-.074.327-.004.008-.003.017-.007.025-.008.017-.027.024-.036.04a.817.817 0 0 1-.228.258.77.77 0 0 1-.464.17h-.004a.776.776 0 0 1-.338-.084c-.007-.003-.015-.002-.023-.005l-2.53-1.315-2.532 1.315a.791.791 0 0 1-.728 0L9.5 20.596l-2.532 1.315a.788.788 0 0 1-.727 0L3.71 20.596l-2.532 1.315c-.008.004-.016.003-.024.006-.104.034-.21.06-.318.078-.007 0-.014.005-.022.005a.711.711 0 0 1-.1-.021.767.767 0 0 1-.189-.04 1.97 1.97 0 0 1-.261-.17.829.829 0 0 1-.105-.14.794.794 0 0 1-.073-.097c-.004-.008-.003-.017-.007-.025a.87.87 0 0 1-.042-.16.864.864 0 0 1-.032-.168c0-.01-.005-.016-.005-.025V2.538Zm4.074 16.355 2.53 1.314 2.532-1.314a.79.79 0 0 1 .728 0l2.531 1.314 2.531-1.314a.79.79 0 0 1 .729 0l1.716.892V2.538a.864.864 0 0 0-.238-.598.8.8 0 0 0-.576-.248H2.443a.8.8 0 0 0-.576.249.864.864 0 0 0-.238.597v17.247l1.717-.892a.788.788 0 0 1 .728 0Z",
                    fill: "currentColor"
                }), (0, r.createElement)(w.Path, {
                    d: "M8.414 7.333h5.429c.216 0 .423-.089.576-.248a.863.863 0 0 0 .238-.598.863.863 0 0 0-.238-.598.799.799 0 0 0-.576-.248H8.414a.799.799 0 0 0-.575.248.863.863 0 0 0-.239.598c0 .225.086.44.239.598a.8.8 0 0 0 .575.248ZM8.414 11.846h5.429c.216 0 .423-.089.576-.248a.863.863 0 0 0 .238-.598.863.863 0 0 0-.238-.598.799.799 0 0 0-.576-.248H8.414a.799.799 0 0 0-.575.248A.863.863 0 0 0 7.6 11c0 .224.086.44.239.598.152.159.36.248.575.248ZM8.414 16.359h5.429c.216 0 .423-.09.576-.248a.863.863 0 0 0 .238-.598.863.863 0 0 0-.238-.598.799.799 0 0 0-.576-.248H8.414a.799.799 0 0 0-.575.248.863.863 0 0 0-.239.598c0 .224.086.44.239.598.152.159.36.248.575.248ZM5.157 7.333a.787.787 0 0 0 .315-.067.853.853 0 0 0 .26-.181.869.869 0 0 0 .224-.762.852.852 0 0 0-.223-.435.697.697 0 0 0-.261-.181.782.782 0 0 0-.892.179.873.873 0 0 0-.171.927.813.813 0 0 0 .749.52ZM5.157 11.846a.786.786 0 0 0 .315-.068.852.852 0 0 0 .26-.18.85.85 0 0 0 .24-.599.876.876 0 0 0-.24-.599.786.786 0 0 0-.957-.147.824.824 0 0 0-.27.242.863.863 0 0 0-.137.71.858.858 0 0 0 .16.33.79.79 0 0 0 .63.31ZM5.157 16.359a.784.784 0 0 0 .576-.25.873.873 0 0 0 .174-.932.841.841 0 0 0-.235-.33.782.782 0 0 0-.752-.154.806.806 0 0 0-.511.484.873.873 0 0 0 .173.932.812.812 0 0 0 .575.25Z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Request",
                keywords: ["bullets", "list", "paper", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m3.75 18v-12c0-.69036.55964-1.25 1.25-1.25h14c.6904 0 1.25.55964 1.25 1.25v12c0 .6904-.5596 1.25-1.25 1.25h-14c-.69036 0-1.25-.5596-1.25-1.25z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m3 15h6v18h-6z",
                    fill: "currentColor",
                    transform: "matrix(0 -1 1 0 -12 18)"
                }))
            },
            meta: {
                label: "Row",
                keywords: ["divider", "line"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m4.08163265 16.3265306c-2.25510204 0-4.08163265-1.8265306-4.08163265-4.0816326 0-2.25510208 1.82653061-4.08163269 4.08163265-4.08163269s4.08163266 1.82653061 4.08163266 4.08163269c0 2.255102-1.82653062 4.0816326-4.08163266 4.0816326zm7.08163265-8.16326529c-2.25510203 0-4.08163265-1.82653062-4.08163265-4.08163266s1.82653062-4.08163265 4.08163265-4.08163265c2.255102 0 4.0816327 1.82653061 4.0816327 4.08163265s-1.8265307 4.08163266-4.0816327 4.08163266zm4.7142857 11.83673469c-2.255102 0-4.0816326-1.8265306-4.0816326-4.0816327 0-2.255102 1.8265306-4.0816326 4.0816326-4.0816326 2.2551021 0 4.0816327 1.8265306 4.0816327 4.0816326 0 2.2551021-1.8265306 4.0816327-4.0816327 4.0816327z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m4.08163265 16.3265306c-2.25510204 0-4.08163265-1.8265306-4.08163265-4.0816326 0-2.25510208 1.82653061-4.08163269 4.08163265-4.08163269s4.08163266 1.82653061 4.08163266 4.08163269c0 2.255102-1.82653062 4.0816326-4.08163266 4.0816326zm0-6.122449c-1.12244898 0-2.04081632.9183674-2.04081632 2.0408164 0 1.1224489.91836734 2.0408163 2.04081632 2.0408163s2.04081633-.9183674 2.04081633-2.0408163c0-1.122449-.91836735-2.0408164-2.04081633-2.0408164zm7.08163265-2.04081629c-2.25510203 0-4.08163265-1.82653062-4.08163265-4.08163266s1.82653062-4.08163265 4.08163265-4.08163265c2.255102 0 4.0816327 1.82653061 4.0816327 4.08163265s-1.8265307 4.08163266-4.0816327 4.08163266zm0-6.12244898c-1.122449 0-2.04081632.91836734-2.04081632 2.04081632s.91836732 2.04081633 2.04081632 2.04081633 2.0408163-.91836735 2.0408163-2.04081633-.9183673-2.04081632-2.0408163-2.04081632zm4.7142857 17.95918367c-2.255102 0-4.0816326-1.8265306-4.0816326-4.0816327 0-2.255102 1.8265306-4.0816326 4.0816326-4.0816326 2.2551021 0 4.0816327 1.8265306 4.0816327 4.0816326 0 2.2551021-1.8265306 4.0816327-4.0816327 4.0816327zm0-6.122449c-1.122449 0-2.0408163.9183674-2.0408163 2.0408163 0 1.122449.9183673 2.0408164 2.0408163 2.0408164s2.0408163-.9183674 2.0408163-2.0408164c0-1.1224489-.9183673-2.0408163-2.0408163-2.0408163z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Scatter Plot",
                keywords: ["analytics", "chart", "circle", "data", "dots", "graph", "random", "stats"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m4.63589015 9.40022032v3.64467918l6.37818865 3.4806687 6.3781886-3.4806687v-3.64467918l-6.3781886 3.48066868zm6.37818865-9.2757086-10.02286786 5.46701882 10.02286786 5.46701886 8.2005282-4.47384377v6.29618337h1.8223396v-7.28935846z",
                    transform: "translate(-1 1.713379)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "School",
                keywords: ["college", "degree", "diploma", "education", "graduation", "hat", "university"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Shield",
                keywords: ["armor", "guard", "protect", "safe", "security"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor",
                    fillRule: "evenodd"
                }, (0, r.createElement)(w.Path, {
                    d: "m.00952381 18.5714286 19.99047619-8.5714286-19.99047619-8.57142857-.00952381 6.66666667 14.2857143 1.9047619-14.2857143 1.9047619z"
                }), (0, r.createElement)(w.Path, {
                    d: "m1.91428571 4.31428571 7.15238096 3.06666667-7.16190477-.95238095zm7.14285715 8.30476189-7.15238096 3.0666667v-2.1142857zm-9.04761905-11.19047617-.00952381 6.66666667 14.2857143 1.9047619-14.2857143 1.9047619.00952381 6.6666667 19.99047619-8.5714286z"
                }))),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m1.91428571 4.31428571 7.15238096 3.06666667-7.16190477-.95238095zm7.14285715 8.30476189-7.15238096 3.0666667v-2.1142857zm-9.04761905-11.19047617-.00952381 6.66666667 14.2857143 1.9047619-14.2857143 1.9047619.00952381 6.6666667 19.99047619-8.5714286z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Send",
                keywords: ["deliver", "email", "mail", "message", "paper airplane"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m4 20.25h16",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 16.25h9",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Rect, {
                    fill: "currentColor",
                    height: "9",
                    rx: "2",
                    width: "16",
                    x: "4",
                    y: "4"
                }))
            },
            meta: {
                label: "Service item",
                keywords: ["bubble", "lines", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }, (0, r.createElement)(w.Path, {
                    d: "m4 20.25h16"
                }), (0, r.createElement)(w.Path, {
                    d: "m4 16.25h9"
                }), (0, r.createElement)(w.Path, {
                    d: "m22.25 9.5v-5.75c0-1.10457-.8954-2-2-2h-12.75"
                })), (0, r.createElement)(w.Rect, {
                    fill: "currentColor",
                    height: "9",
                    rx: "2",
                    width: "16",
                    x: "4",
                    y: "4"
                }))
            },
            meta: {
                label: "Services",
                keywords: ["bubble", "lines", "text"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m8.5 9.5c0-.82843-.67157-1.5-1.5-1.5s-1.5.67157-1.5 1.5c0 .8284.67157 1.5 1.5 1.5s1.5-.6716 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m13.5 14.5c0-.8284-.6716-1.5-1.5-1.5s-1.5.6716-1.5 1.5.6716 1.5 1.5 1.5 1.5-.6716 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m18.5 9.5c0-.82843-.6716-1.5-1.5-1.5s-1.5.67157-1.5 1.5c0 .8284.6716 1.5 1.5 1.5s1.5-.6716 1.5-1.5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m16.5 5h1v13.825h-1z"
                }), (0, r.createElement)(w.Path, {
                    d: "m6.5 5h1v14h-1z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.5 5h1v14h-1z"
                }))
            },
            meta: {
                label: "Settings",
                keywords: ["dots", "lines", "preferences", "sliders"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Rect, {
                    height: "16.5",
                    rx: "1.53571",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    width: "16.5",
                    x: "3.75",
                    y: "3.75",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    clipRule: "evenodd",
                    d: "m19.5 8.5v11h-15v-5-2c0 3.5 3.5 3.5 5 3.5 3 0 3.5-3.0452 5-5 1.2022-1.56673 3.2746-2.39739 5-2.5z",
                    fill: "currentColor",
                    fillRule: "evenodd"
                }))
            },
            meta: {
                label: "Shape divider",
                keywords: ["rectangle", "wave"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m15.5 6-8 6 8 6",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Rect, {
                    height: "4",
                    rx: "1",
                    width: "4",
                    x: "5",
                    y: "10"
                }), (0, r.createElement)(w.Rect, {
                    height: "4",
                    rx: "1",
                    width: "4",
                    x: "15",
                    y: "4"
                }), (0, r.createElement)(w.Rect, {
                    height: "4",
                    rx: "1",
                    width: "4",
                    x: "15",
                    y: "16"
                })))
            },
            meta: {
                label: "Share",
                keywords: ["dots", "line", "path", "share"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m17.2727273 4.36363636h-2.7272728v-3.63636363h-12.72727268c-1 0-1.81818182.81818182-1.81818182 1.81818182v9.99999995h1.81818182c0 1.509091 1.21818182 2.7272728 2.72727273 2.7272728 1.5090909 0 2.72727272-1.2181818 2.72727272-2.7272728h5.45454543c0 1.509091 1.2181818 2.7272728 2.7272728 2.7272728 1.5090909 0 2.7272727-1.2181818 2.7272727-2.7272728h1.8181818v-4.5454545zm-.4545455 1.36363637 1.7818182 2.27272727h-4.0545455v-2.27272727zm-12.27272725 7.72727277c-.5 0-.90909091-.409091-.90909091-.909091s.40909091-.9090909.90909091-.9090909.9090909.4090909.9090909.9090909-.4090909.909091-.9090909.909091zm2.01818181-2.7272728c-.5-.5545454-1.20909091-.90909088-2.01818181-.90909088-.80909091 0-1.51818182.35454548-2.01818182.90909088h-.70909091v-8.18181815h10.90909088v8.18181815zm8.89090914 2.7272728c-.5 0-.909091-.409091-.909091-.909091s.409091-.9090909.909091-.9090909.9090909.4090909.9090909.9090909-.4090909.909091-.9090909.909091z",
                    transform: "translate(0 2)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Shipping",
                keywords: ["auto", "cart", "commerce", "delivery", "ecommerce", "ship", "shop", "store", "transport", "truck", "woo"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10 8.675c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 2c0-3.31-2.69-6-6-6s-6 2.69-6 6c0 2.22 1.21 4.15 3 5.19l1-1.74c-1.19-.7-2-1.97-2-3.45 0-2.21 1.79-4 4-4s4 1.79 4 4c0 1.48-.81 2.75-2 3.45l1 1.74c1.79-1.04 3-2.97 3-5.19zm-6-10c-5.52 0-10 4.48-10 10 0 3.7 2.01 6.92 4.99 8.65l1-1.73c-2.38-1.39-3.99-3.96-3.99-6.92 0-4.42 3.58-8 8-8s8 3.58 8 8c0 2.96-1.61 5.53-4 6.92l1 1.73c2.99-1.73 5-4.95 5-8.65 0-5.52-4.48-10-10-10z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Signal",
                keywords: ["radar", "radio", "sonar", "waves", "wifi"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m20 9h-4.17l3.24-3.24-1.41-1.42-4.66 4.66h-2v-2l4.66-4.66-1.42-1.41-3.24 3.24v-4.17h-2v4.17l-3.24-3.24-1.42 1.41 4.66 4.66v2h-2l-4.66-4.66-1.41 1.42 3.24 3.24h-4.17v2h4.17l-3.24 3.24 1.41 1.42 4.66-4.66h2v2l-4.66 4.66 1.42 1.41 3.24-3.24v4.17h2v-4.17l3.24 3.24 1.42-1.41-4.66-4.66v-2h2l4.66 4.66 1.41-1.42-3.24-3.24h4.17z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Snowflake",
                keywords: ["chill", "cold", "frozen", "global", "ice", "season", "winter"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 25",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    fill: "none",
                    d: "m12.5 17v-2c0-1.1046-.8954-2-2-2h-4c-1.10457 0-2 .8954-2 2v2",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }), (0, r.createElement)(w.Path, {
                    d: "m19.5 17v-1c0-1.1046-.8954-2-2-2h-2.5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5"
                }), (0, r.createElement)(w.Circle, {
                    cx: "15.5",
                    cy: "10",
                    fill: "currentColor",
                    r: "2"
                }), (0, r.createElement)(w.Circle, {
                    cx: "8.5",
                    cy: "9",
                    fill: "currentColor",
                    r: "2"
                }), (0, r.createElement)(w.Circle, {
                    cx: "12",
                    cy: "12",
                    r: "9",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }))
            },
            meta: {
                label: "Social profiles",
                keywords: ["people", "person", "profiles", "share", "social"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63-2.14 2.14-3.32 4.86-3.55 7.63 1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-3.44-4.44c.63 1.03 1.07 2.18 1.3 3.38-.47.3-.91.63-1.34.98-.42-.34-.87-.67-1.33-.97.25-1.2.71-2.35 1.37-3.39zM12 15.45c-.82-1.25-1.86-2.34-3.06-3.2-.13-.09-.27-.16-.4-.26.13.09.27.17.39.25C6.98 10.83 4.59 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45zm1.32 4.15c-.44.15-.88.27-1.33.37-.44-.09-.87-.21-1.28-.36-3.29-1.18-5.7-3.99-6.45-7.35 1.1.26 2.15.71 3.12 1.33l-.02.01c.13.09.26.18.39.25l.07.04c.99.72 1.84 1.61 2.51 2.65L12 19.1l1.67-2.55c.69-1.05 1.55-1.95 2.53-2.66l.07-.05c.09-.05.18-.11.27-.17l-.01-.02c.98-.65 2.07-1.13 3.21-1.4-.75 3.37-3.15 6.18-6.42 7.35zm-4.33-7.32c-.02-.01-.04-.03-.05-.04 0 0 .01 0 .01.01.01.01.02.02.04.03z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Spa",
                keywords: ["flower", "health", "plant", "resort", "sauna", "zen"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M8.929 11.815C7.78 13.062 7.132 15.124 6.984 18 4.186 17.223 2.5 14.79 2.5 11.963 2.5 7.2 6.109 6.166 5.69 0c.788.014 3.969 1.94 4.562 6.511.622-.65.94-2.804.82-3.685 2.822 2.26 4.285 5.16 4.285 8.395 0 3.203-1.673 5.919-4.484 6.765-.15-2.869-.798-4.926-1.944-6.171z"
                }))
            },
            meta: {
                label: "Spicy",
                keywords: ["heat", "hot", "flavor", "spicy", "spice"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.0268555.55859375-2.81000003 6.63-7.19.61 5.46 4.72999995-1.64 7.03 6.18000003-3.73 6.18 3.73-1.64-7.03 5.46-4.72999995-7.19-.61z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.0268555 5.68859375.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.62999995-.91.79.27 1.18.56 2.41-2.12-1.28-1.03-.64-1.03000003.62-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.62999995 2.47-.21 1.2-.1.47-1.11zm0-5.13-2.81000003 6.63-7.19.61 5.46 4.72999995-1.64 7.03 6.18000003-3.73 6.18 3.73-1.64-7.03 5.46-4.72999995-7.19-.61z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Star",
                keywords: ["favorite", "like", "plus", "rate", "shape", "vote"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zM7.88 8.75c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 11c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "M2.53 19.65l1.34.56v-9.03l-2.43 5.86c-.41 1.02.08 2.19 1.09 2.61zm19.5-3.7L17.07 3.98c-.31-.75-1.04-1.21-1.81-1.23-.26 0-.53.04-.79.15L7.1 5.95c-.75.31-1.21 1.03-1.23 1.8-.01.27.04.54.15.8l4.96 11.97c.31.76 1.05 1.22 1.83 1.23.26 0 .52-.05.77-.15l7.36-3.05c1.02-.42 1.51-1.59 1.09-2.6zm-9.2 3.8L7.87 7.79l7.35-3.04h.01l4.95 11.95-7.35 3.05z"
                }), (0, r.createElement)(w.Circle, {
                    cx: "11",
                    cy: "9",
                    r: "1"
                }), (0, r.createElement)(w.Path, {
                    d: "M5.88 19.75c0 1.1.9 2 2 2h1.45l-3.45-8.34v6.34z"
                })))
            },
            meta: {
                label: "Cards",
                keywords: ["games", "layers", "shuffle", "stack"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M0 0h24v24H0V0z",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-7-5.5l3.5 3.5-3.5 3.5V11h-4V9h4V6.5zm-6 11L5.5 14 9 10.5V13h4v2H9v2.5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-13.5V9h-4v2h4v2.5l3.5-3.5zm-6 4L5.5 14 9 17.5V15h4v-2H9z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Swap Horizontal",
                keywords: ["arrows", "circle", "move", "shift", "transition"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM6.5 9L10 5.5 13.5 9H11v4H9V9zm11 6L14 18.5 10.5 15H13v-4h2v4z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Swap Vertical",
                keywords: ["arrows", "circle", "move", "shift", "transition"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m7.34133533 6.23855964v-1.98499625c-2.17404351.03150788-4.03300825 1.38634659-4.85221305 3.27681921-.31507877.72468117-.44111028 1.51237809-.4096024 2.33158289.06301575 1.13428361.47261815 2.20555141 1.16579145 3.05626411.37809452.4411102.28357089 1.1027757-.18904726 1.4493623-.44111028.3150788-1.07126782.2205551-1.41785447-.1890473-.85071268-1.0397599-1.38634658-2.3315829-1.54388597-3.7179294-.12603151-1.00825211-.03150788-2.01650417.25206302-2.9302326.88222055-3.02475619 3.6864216-5.26181546 6.99474868-5.29332334v-1.98499624c0-.09452363.12603151-.15753939.22055514-.09452363l4.09602403 2.99324831c.0630157.06301575.0630157.15753938 0 .18904726l-4.09602403 2.99324831c-.09452363.06301575-.22055514 0-.22055514-.09452363zm.22055514 13.17029256c.09452363.0630158.22055514 0 .22055514-.0945236v-1.9849963c3.30832709-.0315078 6.11252809-2.2685671 6.99474869-5.2933233.252063-.9137284.3780945-1.8904726.252063-2.93023256-.1575394-1.38634658-.7246812-2.67816954-1.543886-3.71792948-.3465866-.44111028-.9767441-.53563391-1.4178544-.18904726-.4726182.34658665-.5671418 1.00825206-.1890473 1.44936234.6931733.85071268 1.1027757 1.89047262 1.1657915 3.05626407.0315078.81920479-.1260315 1.63840959-.4096024 2.33158289-.787697 1.8904726-2.6466617 3.2453113-4.85221309 3.2768192v-1.9849962c0-.0945237-.12603151-.1575394-.22055514-.0945237l-4.096024 2.9932483c-.06301576.0630158-.06301576.1575394 0 .1890473z",
                    transform: "translate(4 2)"
                }))
            },
            meta: {
                label: "Sync",
                keywords: ["arrows", "circle", "refresh", "synchronize", "update"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m15.8333333 0h-11.66666663c-1.15 0-2.08333334.93333333-2.08333334 2.08333333v15.83333337c0 1.15.93333334 2.0833333 2.08333334 2.0833333h11.66666663c1.15 0 2.0833334-.9333333 2.0833334-2.0833333v-15.83333337c0-1.15-.9333334-2.08333333-2.0833334-2.08333333zm-5.8333333 19.1666667c-.69166667 0-1.25-.5583334-1.25-1.25 0-.6916667.55833333-1.25 1.25-1.25.6916667 0 1.25.5583333 1.25 1.25 0 .6916666-.5583333 1.25-1.25 1.25zm6.25-3.3333334h-12.5v-13.3333333h12.5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Tablet",
                keywords: ["computer", "device", "ipad", "monitor", "office", "pc", "screen", "surface"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.25 0h-9c-.825 0-1.5.61363636-1.5 1.36363636v13.27272724c0 .75.675 1.3636364 1.5 1.3636364h9c.825 0 1.5-.6136364 1.5-1.3636364v-13.27272724c0-.75-.675-1.36363636-1.5-1.36363636zm-.5 14h-8v-12h8z",
                    transform: "translate(1.25)"
                }))
            },
            meta: {
                label: "Tablet",
                keywords: ["computer", "device", "ipad", "monitor", "office", "pc", "screen", "surface"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "M7.075 19.32a6.603 6.603 0 0 0-4.62 1.889.53.53 0 0 0 .003.763 6.6 6.6 0 0 0 9.205-.037.529.529 0 0 0-.004-.763 6.623 6.623 0 0 0-4.584-1.852Zm-.032 3.445a5.542 5.542 0 0 1-3.414-1.18 5.53 5.53 0 0 1 6.86-.026 5.528 5.528 0 0 1-3.446 1.206Z"
                }), (0, r.createElement)(w.Path, {
                    d: "M7.059 10.059A6.89 6.89 0 0 0 .177 16.94 6.794 6.794 0 0 0 .92 20.02a.53.53 0 0 0 .946-.476 5.75 5.75 0 0 1-.632-2.603 5.824 5.824 0 0 1 11.647 0 5.724 5.724 0 0 1-.632 2.6.528.528 0 0 0 .75.691.53.53 0 0 0 .195-.212 6.767 6.767 0 0 0 .746-3.08A6.89 6.89 0 0 0 7.06 10.06Z"
                }), (0, r.createElement)(w.Path, {
                    d: "M9.372 15.195c0-.322-.024-.62-.132-.91a2.168 2.168 0 0 0-1.271-1.27c-.29-.11-.618-.133-.91-.133-.292 0-.62.024-.91.132a2.166 2.166 0 0 0-1.27 1.27c-.11.291-.133.605-.133.91 0 2.595 1.45 2.982 2.313 2.982.864 0 2.313-.387 2.313-2.981Zm-3.567 0c0-.173-.003-.342.052-.504a1.124 1.124 0 0 1 .698-.698c.162-.055.272-.09.504-.09.231 0 .342.035.504.09a1.123 1.123 0 0 1 .697.698c.056.162.053.342.053.504 0 1.922-.945 1.922-1.254 1.922-.309 0-1.254 0-1.254-1.922ZM10.412 13.765a.53.53 0 0 1-.53-.53V2.647A2.65 2.65 0 0 1 12.53 0h8.472a2.648 2.648 0 0 1 2.645 2.645v5.158a2.648 2.648 0 0 1-2.645 2.644h-7.053l-3.163 3.163a.53.53 0 0 1-.374.155ZM12.53 1.059a1.59 1.59 0 0 0-1.589 1.588v9.31l2.414-2.414a.53.53 0 0 1 .374-.155h7.273a1.588 1.588 0 0 0 1.586-1.585V2.645a1.587 1.587 0 0 0-1.586-1.586H12.53Z"
                }), (0, r.createElement)(w.Path, {
                    d: "M12.706 3.735h8.47M12.706 6.559h8.47"
                })))
            },
            meta: {
                label: "Testimonial",
                keywords: ["bubble", "conversation", "head", "human", "people", "person", "speach", "speak", "talk"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 23.52C9.72154 23.52 7.49427 22.8444 5.59982 21.5785C3.70536 20.3127 2.22881 18.5135 1.35689 16.4085C0.484972 14.3035 0.256838 11.9872 0.701339 9.75257C1.14584 7.51791 2.24301 5.46524 3.85412 3.85414C5.46522 2.24304 7.51788 1.14586 9.75254 0.701362C11.9872 0.25686 14.3035 0.484995 16.4085 1.35692C18.5135 2.22884 20.3127 3.70539 21.5785 5.59984C22.8443 7.49429 23.52 9.72157 23.52 12C23.52 15.0553 22.3063 17.9855 20.1459 20.1459C17.9854 22.3063 15.0553 23.52 12 23.52ZM12 2.78401C10.1772 2.78401 8.39541 3.32452 6.87985 4.33718C5.36429 5.34985 4.18305 6.78919 3.48551 8.4732C2.78797 10.1572 2.60547 12.0102 2.96107 13.798C3.31667 15.5857 4.19441 17.2278 5.48329 18.5167C6.77217 19.8056 8.4143 20.6833 10.202 21.0389C11.9898 21.3945 13.8428 21.212 15.5268 20.5145C17.2108 19.8169 18.6501 18.6357 19.6628 17.1201C20.6755 15.6046 21.216 13.8228 21.216 12C21.216 9.55577 20.245 7.21165 18.5167 5.48331C16.7883 3.75498 14.4442 2.78401 12 2.78401V2.78401Z",
                    fill: "currentColor"
                }), (0, r.createElement)(w.Path, {
                    d: "M12 13.536C11.6945 13.536 11.4015 13.4146 11.1854 13.1986C10.9694 12.9825 10.848 12.6895 10.848 12.384V5.856H13.152V12.384C13.152 12.6895 13.0307 12.9825 12.8146 13.1986C12.5986 13.4146 12.3056 13.536 12 13.536V13.536Z",
                    fill: "currentColor"
                }), (0, r.createElement)(w.Path, {
                    d: "M21.9357 0.434855L18.8647 3.50585L20.4939 5.13502L23.5649 2.06403L21.9357 0.434855Z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Timer",
                keywords: ["chrono", "hour", "start", "stop", "time", "watch"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Radar",
                keywords: ["find", "locate", "radio", "scan", "search", "signal", "sonar", "time", "tracking"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m10.8187411 12.8292466-2.30909089-2.2818182.02727273-.0272727c1.58181816-1.76363641 2.70909086-3.79090913 3.37272726-5.93636368h2.6636364v-1.81818182h-6.36363639v-1.81818181h-1.81818182v1.81818181h-6.36363636v1.80909091h10.15454547c-.60909092 1.75454546-1.57272729 3.41818182-2.8818182 4.87272728-.84545454-.93636364-1.54545454-1.96363637-2.1-3.04545455h-1.81818181c.66363636 1.48181818 1.57272727 2.88181818 2.7090909 4.14545456l-4.62727272 4.5636363 1.29090909 1.2909091 4.54545454-4.5454545 2.8272727 2.8272727zm5.1181818-4.60909094h-1.8181818l-4.0909091 10.90909094h1.8181818l1.0181819-2.7272728h4.3181818l1.0272727 2.7272728h1.8181818zm-2.3818181 6.36363634 1.4727272-3.9363636 1.4727273 3.9363636z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Translate",
                keywords: ["alphabet", "global", "internationalization", "language", "linguistics", "localization", "polyglot", "speech", "world"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m7.34532 7.19644c.03127-.69843.67672-1.20533 1.36267-1.07017l8.89421 1.75261c.6859.13516 1.0908.84904.8547 1.50713l-3.8044 10.60739c-.1909.5322-.7422.8448-1.2968.7355l-5.59369-1.1022c-.55466-.1093-.94606-.6077-.92076-1.1725z",
                    stroke: "currentColor",
                    strokeWidth: "1.4",
                    fill: "none"
                }), (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m18.7958.00018311-14.7958 6.08966689.76121 1.84948 14.79579-6.08967z"
                }), (0, r.createElement)(w.Path, {
                    d: "m13.5123 2.17454s-.9464.38951-2.1138.86999c-1.1673.48043-2.11357.86993-2.11357.86993-.48046-1.16736.0764-2.50318 1.24367-2.983611 1.1674-.480475 2.5032.076331 2.9837 1.243691z"
                }), (0, r.createElement)(w.Path, {
                    d: "m6.5 17 10-4-2.5 7-7-1z"
                })))
            },
            meta: {
                label: "Trash confirm",
                keywords: ["confirm", "delete", "garbage", "half full", "remove"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m6.33693 7.16999c-.02446-.16261-.01354-.3286.03202-.48661.04555-.15801.12466-.30433.23193-.42898.10727-.12464.24018-.22467.38964-.29325.14946-.06859.31196-.10411.47641-.10416h9.06497c.7 0 1.235.622 1.13 1.313l-1.681 11.14301c-.0407.2706-.1771.5176-.3844.6961-.2074.1786-.4719.2768-.7456.2769h-5.70197c-.27363-.0001-.53816-.0983-.74552-.2769-.20736-.1785-.34378-.4255-.38448-.6961z",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    fill: "none"
                }), (0, r.createElement)(w.Path, {
                    d: "m20 4.99999h-16v2h16zm-5.714 0h-4.572c0-.60629.24085-1.18774.6696-1.61645.4287-.4287 1.0101-.66955 1.6164-.66955s1.1877.24085 1.6164.66955c.4288.42871.6696 1.01016.6696 1.61645z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Trash",
                keywords: ["delete", "empty", "garbage", "remove"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m20.9644 6.21958c-.6699.29445-1.3852.49504-2.1383.58663.7675-.46249 1.3579-1.19144 1.6372-2.06117-.7198.4201-1.5177.72591-2.3669.89623-.6783-.72592-1.6449-1.18009-2.7183-1.18009-2.0566 0-3.7241 1.66756-3.7241 3.72192 0 .29521.034.57907.0961.85082-3.09594-.1461-5.83988-1.63275-7.67624-3.88013-.32322.54652-.50413 1.1816-.50413 1.87345 0 1.29439.65854 2.43208 1.6562 3.10046-.61085-.0197-1.18538-.18772-1.68648-.46627v.04617c0 1.8053 1.28152 3.3109 2.98692 3.6538-.31262.084-.64265.1294-.981.1294-.23769 0-.46553-.0227-.69337-.0651.47764 1.4784 1.85074 2.5563 3.485 2.5865-1.27168.9985-2.88322 1.5934-4.61891 1.5934-.29521 0-.58966-.0174-.88563-.0507 1.65696 1.0552 3.60913 1.6721 5.72027 1.6721 6.85347 0 10.59657-5.6741 10.59657-10.5867 0-.1582 0-.31792-.0114-.47688.7274-.52154 1.3625-1.18084 1.8621-1.9287z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Twitter",
                keywords: ["media", "share", "social"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 18.5v1.5h14v-1.5h-7z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.1155 4-4.88894 12.4444h2l.99556-2.6666h5.55558l.9955 2.6666h2l-4.88-12.4444zm-1.22672 8 2.11552-5.62667 2.1156 5.62667z"
                }))),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 24 24",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m5 18.5v1.5h14v-1.5h-7z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.1155 4-4.88894 12.4444h2l.99556-2.6666h5.55558l.9955 2.6666h2l-4.88-12.4444zm-1.22672 8 2.11552-5.62667 2.1156 5.62667z"
                })), (0, r.createElement)(w.Rect, null))
            },
            meta: {
                label: "Typography",
                keywords: ["letter", "underline", "text", "typo"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m19.9986483 8.20489366h-7.5333334l3.0444445-3.13333333c-3.0333334-3-7.94444447-3.11111111-10.97777781-.11111111-3.03333333 3.01111111-3.03333333 7.86666668 0 10.87777778 3.03333334 3.0111111 7.94444441 3.0111111 10.97777781 0 1.5111111-1.4888889 2.2666666-3.2333333 2.2666666-5.4333333h2.2222223c0 2.2-.9777778 5.0555555-2.9333334 6.9888889-3.9 3.8666666-10.23333331 3.8666666-14.13333331 0-3.88888889-3.8555556-3.92222222-10.12222227-.02222222-13.97777783 3.9-3.85555555 10.15555553-3.85555555 14.05555553 0l3.0333334-3.12222222zm-9.4444445-2.35555555v4.72222219l3.8888889 2.3111111-.8 1.3444445-4.75555555-2.8222222v-5.55555559z",
                    transform: "translate(0 -.293783)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Update",
                keywords: ["arrow", "backup", "circle", "clock", "future", "history", "hour", "schedule", "time machine"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M15.45.431c-.131-.412-.694-.468-.919-.093C12.787 3.524 8.981 4.5 9.47 7.2c.112.581.45 1.069.937 1.444a11.272 11.272 0 012.513-3.038l-4.744 9.807L3.037 4.819a.776.776 0 00-1.012-.356.776.776 0 00-.356 1.012l5.812 12c.131.263.394.431.675.431s.563-.168.675-.431l3.881-7.987c1.125.093 2.27-.207 2.944-.994 1.369-1.613.581-5.738-.206-8.063z"
                }))
            },
            meta: {
                label: "Vegan",
                keywords: ["vegan", "diet", "health"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    viewBox: "0 0 18 18",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "M.295 17.802c1.52 1.368 11.712-4.7 13.22-7.255.725-1.227-.13-3.028-1.528-4.467 1.59-1.057 2.988 2.233 4.316 1.54.604-.323.996-1.319.704-1.933-.523-1.086-2.264-1.086-3.44-1.217.834-.201 2.837-1.057 2.877-2.264.04-.926-1.137-1.982-2.063-1.871-1.217.14-1.66 1.891-2.073 3.018-.05-.714-.2-2.284-.986-2.968-1.046-.916-2.304-.05-2.334 1.056-.04 1.339 2.838 2.083 1.932 3.693-1.53-1.177-3.33-1.821-4.488-1.147-.493.312-1.056.916-1.64 1.7.896.946 2.134 2.083 3.11 2.737.2.141.261.423.11.624a.444.444 0 01-.624.12c-.996-.673-2.213-1.79-3.119-2.726a26.985 26.985 0 00-1.348 2.244c.855.865 1.942 1.841 2.807 2.425a.45.45 0 01.11.623.454.454 0 01-.633.121c-.855-.583-1.871-1.489-2.727-2.334C.698 13.032-.61 16.997.295 17.8z"
                }))
            },
            meta: {
                label: "Vegetarian",
                keywords: ["plant-eater", "veggies", "diet", "herbavore"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24"
                }, (0, r.createElement)(w.Path, {
                    d: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm7 10c0 4.52-2.98 8.69-7 9.93-4.02-1.24-7-5.41-7-9.93V6.3l7-3.11 7 3.11V11zm-11.59.59L6 13l4 4 8-8-1.41-1.42L10 14.17z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Shield Check",
                keywords: ["armor", "guard", "protect", "safe", "security", "verified"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m16 2 2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-14z",
                    fill: "currentColor"
                }), (0, r.createElement)(w.Path, {
                    d: "m3.76 8h14.24v8h-16v-11.53zm16.24-6h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m3.76 8h14.24v8h-16v-11.53zm16.24-6h-4l2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Video",
                keywords: ["creative", "director", "media", "producer", "film"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.9874888 10.357462c-.2502234-.1429848-.5093833-.2591599-.7685433-.357462.25916-.09830206.5183199-.21447721.7685433-.35746202 1.7158177-.9919571 2.6720286-2.78820375 2.6809652-4.6380697-1.5996426-.92046471-3.6371761-.99195711-5.3619303 0-.2502234.1429848-.4825737.31277926-.697051.48257372.0446828-.27703306.0714924-.56300268.0714924-.84897229 0-1.98391421-1.0813226-3.70866846-2.6809651-4.63806971-1.59964254.92940125-2.68096515 2.6541555-2.68096515 4.63806971 0 .28596961.02680965.57193923.07149241.84897229-.21447722-.17873101-.44682753-.34852547-.69705094-.49151028-1.7158177-.9919571-3.75335121-.9204647-5.3619303 0 0 1.84986596.95621091 3.64611261 2.68096515 4.63806971.25022341.14298481.50938338.25915996.76854334.35746202-.25915996.09830205-.51831993.21447725-.76854334.35746205-1.71581769.9919571-2.6720286 2.7882037-2.68096515 4.6380697 1.59964254.9204647 3.63717605.9919571 5.3619303 0 .25022341-.1429848.48257372-.3127793.69705094-.4825738-.04468276.2859697-.07149241.5719393-.07149241.8579089 0 1.9839142 1.08132261 3.7086684 2.68096515 4.6380697 1.5996425-.9294013 2.6809651-2.6541555 2.6809651-4.6380697 0-.2859696-.0268096-.5719392-.0714924-.8489723.2144773.178731.4468276.3395889.697051.4825737 1.7158177.9919571 3.7533512.9204647 5.3619303 0-.0089366-1.8498659-.9651475-3.6461126-2.6809652-4.6380697zm-5.9874888 3.2171582c-1.97497766 0-3.5746202-1.5996425-3.5746202-3.5746202 0-1.97497766 1.59964254-3.5746202 3.5746202-3.5746202 1.9749777 0 3.5746202 1.59964254 3.5746202 3.5746202 0 1.9749777-1.5996425 3.5746202-3.5746202 3.5746202z",
                    transform: "translate(1)",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m14.9874888 10.357462c-.2502234-.1429848-.5093833-.2591599-.7685433-.357462.25916-.09830206.5183199-.21447721.7685433-.35746202 1.7158177-.9919571 2.6720286-2.78820375 2.6809652-4.6380697-.8132261-.46470063-1.7426274-.71492404-2.6899017-.71492404-.9115282 0-1.8319929.23235031-2.6720286.71492404-.2502234.1429848-.4825737.31277926-.697051.48257372.0446828-.27703306.0714924-.56300268.0714924-.84897229 0-1.98391421-1.0813226-3.70866846-2.6809651-4.63806971-1.59964254.92940125-2.68096515 2.6541555-2.68096515 4.63806971 0 .28596961.02680965.57193923.07149241.84897229-.21447722-.17873101-.44682753-.34852547-.69705094-.49151028-.84003575-.48257372-1.76050045-.71492403-2.6720286-.71492403-.9383378 0-1.8766756.25022341-2.6899017.71492403 0 1.84986596.95621091 3.64611261 2.68096515 4.63806971.25022341.14298481.50938338.25915996.76854334.35746202-.25915996.09830205-.51831993.21447725-.76854334.35746205-1.71581769.9919571-2.6720286 2.7882037-2.68096515 4.6380697.8132261.4647006 1.74262735.714924 2.6899017.714924.91152815 0 1.83199285-.2323503 2.6720286-.714924.25022341-.1429848.48257372-.3127793.69705094-.4825738-.04468276.2859697-.07149241.5719393-.07149241.8579089 0 1.9839142 1.08132261 3.7086684 2.68096515 4.6380697 1.5996425-.9294013 2.6809651-2.6541555 2.6809651-4.6380697 0-.2859696-.0268096-.5719392-.0714924-.8489723.2144773.178731.4468276.3395889.697051.4825737.8400357.4825738 1.7605004.7149241 2.6720286.7149241.9383378 0 1.8766756-.2502234 2.6899017-.7149241-.0089366-1.8498659-.9651475-3.6461126-2.6809652-4.6380697zm-2.2698838-3.46738157c.1876676-.15192136.3395889-.25915997.4825737-.33065237.5451296-.31277927 1.1617516-.48257373 1.7873101-.48257373.2412869 0 .4736372.02680966.7059875.07149241-.277033.81322609-.8400357 1.51027703-1.590706 1.94816801-.1519213.0893655-.3217158.1608579-.5183199.24128686l-1.233244.46470062c-.1519213-.41108132-.3663985-.77747989-.6434316-1.10813226zm-3.717605-4.6023235c.56300268.64343163.89365505 1.48346738.89365505 2.35031278 0 .16979445-.0178731.36639857-.04468275.56300268l-.20554066 1.28686327c-.21447722-.03574621-.42895443-.06255586-.64343164-.06255586s-.42895442.02680965-.63449508.06255586l-.20554067-1.28686327c-.0357462-.19660411-.0536193-.39320823-.0536193-.56300268 0-.87578195.33065237-1.70688115.89365505-2.35031278zm-6.69347632 3.85165326c.23235031-.05361931.47363718-.07149241.71492404-.07149241.61662199 0 1.23324397.16085791 1.77837355.48257373.13404826.08042895.28596961.17873101.43789097.31277927l1.02770331.85790884c-.26809652.32171582-.47363718.67917784-.62555853 1.07238606l-1.23324397-.46470062c-.18766756-.08042896-.35746202-.16085791-.50044683-.24128687-.77747989-.44682752-1.33154602-1.13494191-1.59964254-1.948168zm2.97587132 6.96157281c-.18766756.1519214-.33958892.25916-.48257373.3306524-.54512958.3127793-1.16175156.4825737-1.7873101.4825737-.24128686 0-.47363718-.0268096-.70598749-.0714924.27703307-.8132261.84003575-1.510277 1.59070599-1.948168.15192136-.0893655.32171582-.1608579.51831993-.2412869l1.23324397-.4647006c.1429848.4110813.36639857.7864165.64343163 1.1081323zm3.717605 4.6112601c-.56300268-.6434317-.89365505-1.4834674-.89365505-2.3503128 0-.178731.0178731-.3663986.0536193-.5808758l.19660411-1.2689902c.20554067.0357462.42001788.0625559.64343164.0625559.21447721 0 .42895442-.0268097.63449508-.0625559l.20554067 1.2868633c.0357462.1966041.0536193.3932082.0536193.5630027 0 .8757819-.33065237 1.7068811-.89365505 2.3503128zm5.9785523-3.7890974c-.616622 0-1.233244-.1608579-1.7783736-.4825738-.1608579-.0893655-.3038427-.1966041-.4378909-.3038427l-1.0277033-.8579088c.2680965-.3217158.4825737-.6791779.6255585-1.0813226l1.233244.4647006c.1966041.0714924.3663985.1519213.5093833.2323503.7596068.437891 1.313673 1.1349419 1.590706 1.948168-.2412868.0625559-.4825737.080429-.714924.080429z",
                    transform: "translate(1)",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Vintage Filter",
                keywords: ["artist", "camera", "creative", "flower", "photography"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m0 6.66666667v6.66666663h4.44444444l5.55555556 5.5555556v-17.77777779l-5.55555556 5.55555556zm15 3.33333333c0-1.96666667-1.1333333-3.65555556-2.7777778-4.47777778v8.94444448c1.6444445-.8111111 2.7777778-2.5 2.7777778-4.4666667zm-2.7777778-9.74444444v2.28888888c3.2111111.95555556 5.5555556 3.93333334 5.5555556 7.45555556 0 3.5222222-2.3444445 6.5-5.5555556 7.4555556v2.2888888c4.4555556-1.0111111 7.7777778-4.9888888 7.7777778-9.7444444 0-4.75555556-3.3222222-8.73333333-7.7777778-9.74444444z",
                    fill: "currentColor"
                })),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "1 0.05 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m.99267578 6.72328559v6.66666671h4.44444445l5.55555557 5.5555555v-17.77777777l-5.55555557 5.55555556zm7.77777778-.18888889v7.0444444l-2.41111111-2.4111111h-3.14444445v-2.22222219h3.14444445zm7.22222224 3.5222222c0-1.96666664-1.1333334-3.65555553-2.7777778-4.47777775v8.94444445c1.6444444-.8111111 2.7777778-2.5 2.7777778-4.4666667zm-2.7777778-9.74444442v2.28888889c3.2111111.95555555 5.5555556 3.93333333 5.5555556 7.45555553s-2.3444445 6.5-5.5555556 7.4555556v2.2888889c4.4555556-1.0111111 7.7777778-4.9888889 7.7777778-9.7444445 0-4.75555553-3.3222222-8.73333331-7.7777778-9.74444442z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Volume",
                keywords: ["audio", "media", "music", "song", "sound"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.G, {
                    fill: "currentColor"
                }, (0, r.createElement)(w.Path, {
                    d: "m16.6666667 10c0-2.11666667-.9916667-4.00833333-2.5333334-5.225l-.8-4.775h-6.66666663l-.79166667 4.775c-1.55 1.21666667-2.54166667 3.1-2.54166667 5.225s.99166667 4.0083333 2.54166667 5.225l.79166667 4.775h6.66666663l.8-4.775c1.5416667-1.2166667 2.5333334-3.1083333 2.5333334-5.225zm-11.6666667 0c0-2.75833333 2.24166667-5 5-5 2.7583333 0 5 2.24166667 5 5 0 2.7583333-2.2416667 5-5 5-2.75833333 0-5-2.2416667-5-5z"
                }), (0, r.createElement)(w.Path, {
                    d: "m11.925 1.66666667.3416667 2.06666666c-.7083334-.25833333-1.4666667-.4-2.2666667-.4-.79166667 0-1.55833333.14166667-2.25833333.39166667l.34166666-2.05833333zm.3416667 14.60000003-.3416667 2.0666666h-3.84166667l-.34166666-2.0583333c.7.25 1.46666666.3916667 2.25833333.3916667.8 0 1.5583333-.1416667 2.2666667-.4zm1.0666666-16.2666667h-6.66666663l-.79166667 4.775c-1.55 1.21666667-2.54166667 3.1-2.54166667 5.225s.99166667 4.0083333 2.54166667 5.225l.79166667 4.775h6.66666663l.8-4.775c1.5416667-1.2166667 2.5333334-3.1083333 2.5333334-5.225 0-2.11666667-.9916667-4.00833333-2.5333334-5.225zm-3.3333333 15c-2.75833333 0-5-2.2416667-5-5 0-2.75833333 2.24166667-5 5-5 2.7583333 0 5 2.24166667 5 5 0 2.7583333-2.2416667 5-5 5z"
                }))),
                outlined: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m11.925 1.66666667.3416667 2.06666666c-.7083334-.25833333-1.4666667-.4-2.2666667-.4-.79166667 0-1.55833333.14166667-2.25833333.39166667l.34166666-2.05833333zm.3416667 14.60000003-.3416667 2.0666666h-3.84166667l-.34166666-2.0583333c.7.25 1.46666666.3916667 2.25833333.3916667.8 0 1.5583333-.1416667 2.2666667-.4zm1.0666666-16.2666667h-6.66666663l-.79166667 4.775c-1.55 1.21666667-2.54166667 3.1-2.54166667 5.225s.99166667 4.0083333 2.54166667 5.225l.79166667 4.775h6.66666663l.8-4.775c1.5416667-1.2166667 2.5333334-3.1083333 2.5333334-5.225 0-2.11666667-.9916667-4.00833333-2.5333334-5.225zm-3.3333333 15c-2.75833333 0-5-2.2416667-5-5 0-2.75833333 2.24166667-5 5-5 2.7583333 0 5 2.24166667 5 5 0 2.7583333-2.2416667 5-5 5z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Watch",
                keywords: ["clock", "device", "hour", "time", "wrist"]
            }
        }).styles.default, {
            styles: {
                default: (0, r.createElement)(w.SVG, {
                    fill: "none",
                    viewBox: "0 0 20 20",
                    xmlns: "http://www.w3.org/2000/svg"
                }, (0, r.createElement)(w.Path, {
                    d: "m15 16.6594678c-1.35 0-2.2.42-2.95.8-.65.33-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.95c1.35 0 2.2-.42 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.42 2.95-.8c.65-.33 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm0-5.604419c-1.35 0-2.2.43-2.95.8-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.32-1.17.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.35 1.15-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8zm2.95-10.2550488c-.75-.38-1.58-.8-2.95-.8s-2.2.42-2.95.8c-.65.32-1.18.6-2.05.6-.9 0-1.4-.25-2.05-.6-.75-.37-1.57-.8-2.95-.8s-2.2.42-2.95.8c-.65.33-1.17.6-2.05.6v1.93c1.35 0 2.2-.43 2.95-.8.65-.33 1.17-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.58zm-2.95 4.65062988c-1.35 0-2.2.43-2.95.8-.65.35-1.15.6-2.05.6s-1.4-.25-2.05-.6c-.75-.38-1.57-.8-2.95-.8s-2.2.43-2.95.8c-.65.35-1.15.6-2.05.6v1.95c1.35 0 2.2-.43 2.95-.8.65-.32 1.18-.6 2.05-.6s1.4.25 2.05.6c.75.38 1.57.8 2.95.8s2.2-.43 2.95-.8c.65-.32 1.18-.6 2.05-.6.9 0 1.4.25 2.05.6.75.38 1.58.8 2.95.8v-1.95c-.9 0-1.4-.25-2.05-.6-.75-.38-1.6-.8-2.95-.8z",
                    fill: "currentColor"
                }))
            },
            meta: {
                label: "Waves",
                keywords: ["fun", "ocean", "outdoors", "sea", "summer", "surf", "water"]
            }
        }).styles.default;
        const b = window.wp.compose,
            P = (0, r.forwardRef)((function({
                icon: e,
                size: t = 24,
                ...l
            }, a) {
                return (0, r.cloneElement)(e, {
                    width: t,
                    height: t,
                    ...l,
                    ref: a
                })
            })),
            k = (0, d.createElement)(w.SVG, {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24"
            }, (0, d.createElement)(w.Path, {
                d: "M14.5 5.5h-7V7h7V5.5ZM7.5 9h7v1.5h-7V9Zm7 3.5h-7V14h7v-1.5Z"
            }), (0, d.createElement)(w.Path, {
                d: "M16 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM6 3.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5Z"
            }), (0, d.createElement)(w.Path, {
                d: "M20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z"
            }));
        var S = l(359),
            V = l.n(S);
        const G = () => (0, r.createElement)(w.SVG, {
                fill: "none",
                height: "32",
                viewBox: "0 0 32 32",
                width: "32",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)("g", {
                clipPath: "url(#clip0_5431_23117)"
            }, (0, r.createElement)(w.Path, {
                d: "M32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 23.9859 5.85094 30.6053 13.5 31.8056V20.625H9.4375V16H13.5V12.475C13.5 8.465 15.8888 6.25 19.5434 6.25C21.2934 6.25 23.125 6.5625 23.125 6.5625V10.5H21.1075C19.12 10.5 18.5 11.7334 18.5 13V16H22.9375L22.2281 20.625H18.5V31.8056C26.1491 30.6053 32 23.9859 32 16Z",
                fill: "#1877F2"
            }), (0, r.createElement)(w.Path, {
                d: "M22.2281 20.625L22.9375 16H18.5V13C18.5 11.7347 19.12 10.5 21.1075 10.5H23.125V6.5625C23.125 6.5625 21.2941 6.25 19.5434 6.25C15.8888 6.25 13.5 8.465 13.5 12.475V16H9.4375V20.625H13.5V31.8056C15.1566 32.0648 16.8434 32.0648 18.5 31.8056V20.625H22.2281Z",
                fill: "white"
            })), (0, r.createElement)("defs", null, (0, r.createElement)("clipPath", {
                id: "clip0_5431_23117"
            }, (0, r.createElement)("rect", {
                fill: "white",
                height: "32",
                width: "32"
            })))),
            B = () => (0, r.createElement)(w.SVG, {
                fill: "none",
                height: "32",
                viewBox: "0 0 32 32",
                width: "32",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)("g", {
                clipPath: "url(#clip0_5431_23112)"
            }, (0, r.createElement)("path", {
                d: "M31.6883 16.3685C31.6883 15.2809 31.6002 14.1874 31.412 13.1174H16.3203V19.2787H24.9626C24.604 21.2658 23.4517 23.0237 21.7644 24.1407V28.1385H26.9204C29.9481 25.3518 31.6883 21.2365 31.6883 16.3685Z",
                fill: "#4285F4"
            }), (0, r.createElement)("path", {
                d: "M16.3205 32.0011C20.6357 32.0011 24.2749 30.5842 26.9264 28.1385L21.7704 24.1407C20.3359 25.1167 18.484 25.6693 16.3263 25.6693C12.1522 25.6693 8.61294 22.8532 7.34306 19.067H2.02246V23.1883C4.73861 28.5912 10.2709 32.0011 16.3205 32.0011Z",
                fill: "#34A853"
            }), (0, r.createElement)("path", {
                d: "M7.33703 19.0671C6.66681 17.0799 6.66681 14.9282 7.33703 12.941V8.81976H2.02231C-0.247022 13.3408 -0.247022 18.6673 2.02231 23.1883L7.33703 19.0671Z",
                fill: "#FBBC04"
            }), (0, r.createElement)("path", {
                d: "M16.3205 6.33288C18.6016 6.29761 20.8062 7.15596 22.4583 8.73156L27.0263 4.16349C24.1338 1.44734 20.2947 -0.0459547 16.3205 0.00107822C10.2709 0.00107822 4.73861 3.41096 2.02246 8.81974L7.33718 12.941C8.60119 9.14897 12.1463 6.33288 16.3205 6.33288Z",
                fill: "#EA4335"
            })), (0, r.createElement)("defs", null, (0, r.createElement)("clipPath", {
                id: "clip0_5431_23112"
            }, (0, r.createElement)("rect", {
                fill: "white",
                height: "32",
                width: "32"
            })))),
            M = () => (0, r.createElement)(w.SVG, {
                fill: "none",
                height: "32",
                viewBox: "0 0 32 32",
                width: "32",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)("path", {
                d: "M16 2.88249C20.2723 2.88249 20.7783 2.89849 22.4656 2.97555C24.0257 3.04672 24.8729 3.30709 25.4366 3.52637C26.1838 3.81682 26.7166 4.16308 27.2765 4.72299C27.8363 5.2829 28.1833 5.8158 28.4731 6.56285C28.6924 7.1266 28.9528 7.97376 29.0239 9.53392C29.1009 11.2212 29.117 11.7271 29.117 15.9995C29.117 20.2719 29.101 20.7776 29.0239 22.4649C28.9528 24.0251 28.6924 24.8722 28.4731 25.436C28.1827 26.1832 27.8364 26.716 27.2765 27.2759C26.7166 27.8356 26.1837 28.1827 25.4366 28.4725C24.8729 28.6918 24.0257 28.9521 22.4656 29.0233C20.7784 29.1002 20.2724 29.1164 16 29.1164C11.7276 29.1164 11.2218 29.1004 9.53456 29.0233C7.9744 28.9521 7.12724 28.6918 6.56349 28.4725C5.81631 28.1819 5.28354 27.8356 4.72363 27.2759C4.16385 26.716 3.81682 26.1831 3.52701 25.436C3.3076 24.8722 3.04736 24.0251 2.97619 22.4649C2.89926 20.7778 2.88313 20.2718 2.88313 15.9995C2.88313 11.7272 2.89913 11.2213 2.97619 9.53392C3.04736 7.97376 3.30773 7.1266 3.52701 6.56285C3.81746 5.81567 4.16372 5.2829 4.72363 4.72299C5.28354 4.16321 5.81644 3.81618 6.56349 3.52637C7.12724 3.30709 7.9744 3.04672 9.53456 2.97555C11.2217 2.89926 11.7277 2.88249 16 2.88249ZM16 0C11.6546 0 11.1096 0.0185612 9.4031 0.0961342C7.69982 0.173707 6.53712 0.444444 5.51946 0.83999C4.4671 1.2491 3.57514 1.79621 2.68561 2.68561C1.79621 3.57514 1.24859 4.4671 0.83999 5.51946C0.444316 6.53725 0.173707 7.70046 0.0961342 9.4031C0.0185612 11.1097 0 11.6548 0 16C0 20.3452 0.0185612 20.8904 0.0961342 22.5969C0.173707 24.3002 0.444444 25.4629 0.83999 26.4805C1.2491 27.5329 1.79621 28.4249 2.68561 29.3144C3.57514 30.2039 4.46774 30.7509 5.51946 31.16C6.53725 31.5557 7.70046 31.8263 9.4031 31.9039C11.1096 31.9814 11.6546 32 16 32C20.3454 32 20.8904 31.9814 22.5969 31.9039C24.3002 31.8263 25.4629 31.5556 26.4805 31.16C27.5329 30.7508 28.4249 30.2038 29.3144 29.3144C30.2039 28.4249 30.7509 27.5323 31.16 26.4805C31.5557 25.4629 31.8263 24.2995 31.9039 22.5969C31.9814 20.8904 32 20.3454 32 16C32 11.6546 31.9814 11.1096 31.9039 9.4031C31.8263 7.69982 31.5556 6.53712 31.16 5.51946C30.7508 4.4671 30.2038 3.57514 29.3144 2.68561C28.4249 1.79621 27.5323 1.2491 26.4805 0.83999C25.4629 0.444316 24.2995 0.173707 22.5969 0.0961342C20.8906 0.0185612 20.3454 0 16 0ZM16 7.78392C11.4622 7.78392 7.78392 11.4622 7.78392 16C7.78392 20.5378 11.4622 24.2162 16 24.2162C20.5378 24.2162 24.2162 20.5378 24.2162 16C24.2162 11.4622 20.5378 7.78392 16 7.78392ZM16 21.3337C13.0547 21.3337 10.6664 18.9462 10.6664 16.0001C10.6664 13.054 13.0547 10.6665 16 10.6665C18.9453 10.6665 21.3336 13.054 21.3336 16.0001C21.3336 18.9462 18.9453 21.3337 16 21.3337ZM24.5407 5.53943C23.48 5.53943 22.6207 6.39875 22.6207 7.45942C22.6207 8.5201 23.48 9.37954 24.5407 9.37954C25.6014 9.37954 26.4608 8.5201 26.4608 7.45942C26.4608 6.39875 25.6015 5.53943 24.5407 5.53943Z",
                fill: "black"
            })),
            _ = () => (0, r.createElement)(w.SVG, {
                fill: "none",
                height: "32",
                viewBox: "0 0 32 32",
                width: "32",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)(w.Path, {
                d: "M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z",
                fill: "black"
            }), (0, r.createElement)(w.Path, {
                d: "M6.14195 6.70581L13.7898 16.9315L6.09375 25.2454H7.82595L14.5639 17.9663L20.0079 25.2454H25.9022L17.8239 14.4447L24.9874 6.70581H23.2552L17.0501 13.4096L12.0363 6.70581H6.14195ZM8.68923 7.98161H11.3971L23.3546 23.9696H20.6468L8.68923 7.98161Z",
                fill: "white"
            })),
            L = () => (0, r.createElement)(w.SVG, {
                fill: "none",
                height: "32",
                viewBox: "0 0 26 32",
                width: "26",
                xmlns: "http://www.w3.org/2000/svg"
            }, (0, r.createElement)(w.Path, {
                d: "M8.375 20.1902L9.84849 19.8497C9.87948 19.8426 9.93067 19.8308 9.9932 19.8107C10.3998 19.7012 10.7482 19.4384 10.965 19.0771C11.1819 18.7159 11.2503 18.2847 11.1558 17.8744C11.1538 17.8654 11.1518 17.8568 11.1497 17.8478C11.1013 17.6511 11.0166 17.4652 10.8998 17.2999C10.7346 17.0903 10.5303 16.9151 10.2981 16.7839C10.0249 16.628 9.73888 16.4954 9.44321 16.3879L7.82761 15.7981C6.92094 15.4611 6.01433 15.1325 5.09919 14.812C4.50573 14.6008 4.00292 14.4154 3.566 14.2803C3.48353 14.2549 3.39256 14.2295 3.31858 14.204C2.79039 14.0421 2.41927 13.975 2.10519 13.9727C1.89542 13.965 1.68647 14.0032 1.49284 14.0844C1.29106 14.1714 1.10984 14.3 0.961035 14.4619C0.887014 14.5461 0.817419 14.634 0.752534 14.7253C0.691648 14.8185 0.63581 14.9148 0.585261 15.0139C0.529602 15.1203 0.481768 15.2305 0.442146 15.3437C0.14229 16.2301 -0.00707418 17.1604 0.000257353 18.096C0.00566274 18.9418 0.0283802 20.0274 0.493287 20.7633C0.605314 20.9521 0.755649 21.1154 0.934603 21.2426C1.26581 21.4712 1.60049 21.5014 1.94869 21.5265C2.46904 21.5638 2.97315 21.4359 3.4757 21.3198L8.37089 20.1888L8.375 20.1902Z",
                fill: "#FF1A1A"
            }), (0, r.createElement)(w.Path, {
                d: "M24.8141 12.3672C24.4118 11.5229 23.871 10.7521 23.214 10.0867C23.1291 10.0023 23.0381 9.92413 22.9417 9.85294C22.8527 9.78618 22.7603 9.72413 22.6648 9.66704C22.5666 9.61321 22.4656 9.56467 22.3623 9.52162C22.1579 9.44141 21.9389 9.40525 21.7197 9.41548C21.5099 9.42742 21.3053 9.48487 21.1199 9.58387C20.8389 9.72357 20.5348 9.9481 20.1304 10.3241C20.0746 10.3796 20.0043 10.4422 19.9413 10.5012C19.6076 10.8149 19.2365 11.2017 18.7948 11.6521C18.1124 12.3416 17.4404 13.035 16.7725 13.7359L15.5777 14.975C15.3589 15.2014 15.1596 15.446 14.9821 15.7061C14.8309 15.9259 14.7237 16.1731 14.667 16.4339C14.6342 16.6338 14.639 16.8381 14.6812 17.0363C14.6832 17.0453 14.6853 17.0538 14.6873 17.0628C14.7818 17.4733 15.0316 17.831 15.3845 18.0604C15.7372 18.2901 16.1652 18.3737 16.5786 18.2936C16.6441 18.2841 16.6949 18.2728 16.7258 18.2653L23.0967 16.7933C23.5988 16.6772 24.1083 16.5709 24.5594 16.3091C24.8619 16.1336 25.1497 15.9597 25.3471 15.6089C25.4525 15.4161 25.5164 15.2033 25.5345 14.9844C25.6322 14.1161 25.1789 13.1301 24.8141 12.3672Z",
                fill: "#FF1A1A"
            }), (0, r.createElement)(w.Path, {
                d: "M13.4112 15.0462C13.8729 14.4662 13.8717 13.6018 13.913 12.895C14.052 10.5337 14.1983 8.17206 14.3143 5.80943C14.3585 4.91453 14.4549 4.03176 14.4017 3.13006C14.3578 2.38619 14.3524 1.53213 13.8828 0.921672C13.0537 -0.15482 11.286 -0.0663457 10.0798 0.100638C9.7103 0.151925 9.34015 0.220882 8.97301 0.309024C8.60585 0.397168 8.24246 0.493434 7.88691 0.607299C6.72953 0.986415 5.10242 1.68232 4.8269 3.01591C4.67158 3.76983 5.03963 4.54105 5.32517 5.22907C5.67127 6.0631 6.14401 6.81439 6.57487 7.59949C7.71398 9.67216 8.87422 11.7319 10.0312 13.7938C10.3767 14.4093 10.7533 15.1889 11.4218 15.5078C11.4659 15.5271 11.5111 15.5442 11.557 15.5589C11.8567 15.6724 12.1835 15.6943 12.4958 15.6218C12.5146 15.6174 12.5331 15.6132 12.5515 15.6088C12.8399 15.5305 13.101 15.3737 13.3058 15.1558C13.3428 15.1211 13.378 15.0846 13.4112 15.0462Z",
                fill: "#FF1A1A"
            }), (0, r.createElement)(w.Path, {
                d: "M12.859 21.368C12.6788 21.1146 12.4231 20.9246 12.1284 20.8253C11.8337 20.726 11.5151 20.7224 11.2182 20.8153C11.1484 20.8383 11.0805 20.8666 11.0148 20.8996C10.9133 20.9513 10.8164 21.0116 10.7252 21.0802C10.4597 21.2768 10.2361 21.5324 10.0325 21.7888C9.9809 21.8541 9.93377 21.9412 9.87234 21.9971L8.84758 23.4068C8.26675 24.1964 7.69393 24.988 7.12591 25.7923C6.7553 26.3115 6.43472 26.75 6.18149 27.138C6.13351 27.211 6.08368 27.2926 6.03808 27.3576C5.73459 27.8272 5.5627 28.1699 5.47448 28.4751C5.40822 28.678 5.38725 28.8929 5.41305 29.1046C5.44126 29.3253 5.51553 29.5373 5.63104 29.7273C5.69245 29.8225 5.75864 29.9147 5.82936 30.0033C5.90285 30.0886 5.98089 30.1697 6.06315 30.2465C6.15101 30.3303 6.24497 30.4075 6.34426 30.4775C7.05158 30.9695 7.8259 31.3231 8.64039 31.5963C9.31817 31.8213 10.0227 31.956 10.7357 31.9967C10.8571 32.003 10.9786 32.0002 11.0996 31.9889C11.2117 31.9792 11.3232 31.9635 11.4336 31.942C11.544 31.9163 11.6529 31.8845 11.76 31.8472C11.9682 31.7693 12.1578 31.6487 12.3165 31.4929C12.4668 31.3424 12.5824 31.161 12.6554 30.9611C12.7739 30.6659 12.8518 30.2909 12.903 29.7344C12.9075 29.6553 12.9188 29.5604 12.9266 29.4733C12.9671 29.0116 12.9856 28.4692 13.0153 27.8314C13.0654 26.8505 13.1047 25.8739 13.1358 24.8946C13.1358 24.8946 13.2018 23.1542 13.2016 23.1532C13.2167 22.7521 13.2043 22.3077 13.0931 21.9084C13.0442 21.7169 12.9652 21.5346 12.859 21.368Z",
                fill: "#FF1A1A"
            }), (0, r.createElement)(w.Path, {
                d: "M24.4257 24.093C24.2118 23.8585 23.9087 23.6246 23.4307 23.3355C23.3618 23.297 23.2809 23.2456 23.2063 23.2009C22.8083 22.9616 22.3289 22.7097 21.7689 22.4056C20.9086 21.9333 20.0477 21.4729 19.1787 21.0163L17.6433 20.202C17.5638 20.1786 17.4829 20.1211 17.4079 20.085C17.1129 19.9439 16.8001 19.8123 16.4756 19.7519C16.3637 19.7304 16.2501 19.7186 16.1363 19.7166C16.0628 19.7157 15.9895 19.7202 15.9166 19.73C15.6096 19.7776 15.3254 19.9208 15.1045 20.1396C14.8836 20.3582 14.7372 20.6409 14.6863 20.9476C14.6629 21.1427 14.67 21.3401 14.7075 21.533C14.7825 21.9416 14.965 22.3457 15.1537 22.6997L15.9736 24.2364C16.4298 25.1031 16.8916 25.9649 17.365 26.8239C17.6703 27.3841 17.9244 27.8637 18.1625 28.2611C18.2076 28.3359 18.2587 28.4163 18.2973 28.4855C18.5871 28.9634 18.8199 29.2641 19.0559 29.4798C19.2087 29.6274 19.3921 29.7398 19.5928 29.8092C19.8039 29.8791 20.0274 29.904 20.2486 29.882C20.3612 29.8687 20.473 29.8494 20.5835 29.824C20.6923 29.7948 20.7996 29.76 20.9047 29.7195C21.0183 29.6768 21.1286 29.6258 21.2347 29.5671C21.8582 29.2175 22.4327 28.7873 22.9437 28.2876C23.5566 27.6845 24.0983 27.0269 24.5196 26.274C24.5783 26.1675 24.6289 26.0569 24.6715 25.9431C24.7112 25.8377 24.7456 25.7305 24.7745 25.6216C24.7993 25.511 24.8185 25.3991 24.8317 25.2866C24.8528 25.0654 24.8271 24.8424 24.7564 24.6318C24.6868 24.4302 24.5739 24.2462 24.4257 24.093Z",
                fill: "#FF1A1A"
            })),
            H = ({
                SocialMediaIcon: e,
                label: t,
                link: l
            }) => (0, r.createElement)("a", {
                className: "gdl-launch-site-success-modal__social-media-cta",
                href: l,
                onClick: () => y({
                    eid: `${p}.launch_site_success_modal/${t.toLowerCase()}/social_media_cta.icon`
                }),
                rel: "noopener noreferrer",
                target: "_blank"
            }, (0, r.createElement)("div", {
                className: "icon-container"
            }, (0, r.createElement)(v.Icon, {
                icon: e
            })), (0, r.createElement)("p", {
                className: "label-container"
            }, t)),
            R = ({
                url: e
            }) => (0, r.createElement)("div", {
                className: "gdl-live-site-preview"
            }, (0, r.createElement)("div", {
                className: "gdl-live-site-preview__container"
            }, (0, r.createElement)("iframe", {
                src: e + "?gdl-live-control-preview=true",
                title: "site-preview"
            }))),
            F = ({
                closeModal: e
            }) => {
                const [t, l] = (0, r.useState)((0, a.__)("Copy the URL", "godaddy-launch")), c = e => e.includes("//localhost") || e.includes("//gdl.test") ? e : e.replace("http:/", "https:/"), {
                    url: n
                } = (0, i.useSelect)((e => ({
                    url: c(e("core").getSite() ? .url || window.location.origin)
                }))), o = (0, b.useCopyToClipboard)(n, (() => l((0, a.__)("Copied!", "godaddy-launch"))));
                return (0, r.createElement)(r.Fragment, null, (0, r.createElement)(v.Modal, {
                    className: "gdl-launch-site-success-modal godaddy-styles",
                    onRequestClose: e,
                    title: (0, a.__)("Good work! Your site is live.", "godaddy-launch")
                }, (0, r.createElement)("div", {
                    className: "gdl-post-publish-social-media-modal__site-preview"
                }, (0, r.createElement)(R, {
                    url: n
                })), (0, r.createElement)("p", {
                    className: "gdl-launch-site-success-modal__description"
                }, (0, a.__)("Share it and get people excited about your new site.", "godaddy-launch")), (0, r.createElement)("div", {
                    className: "gdl-launch-site-success-modal__social-media"
                }, (0, r.createElement)(H, {
                    label: "Instagram",
                    link: "https://www.instagram.com",
                    SocialMediaIcon: M
                }), (0, r.createElement)(H, {
                    label: "Twitter",
                    link: "https://www.twitter.com",
                    SocialMediaIcon: _
                }), (0, r.createElement)(H, {
                    label: "Google",
                    link: "https://www.google.com",
                    SocialMediaIcon: B
                }), (0, r.createElement)(H, {
                    label: "Facebook",
                    link: "https://www.facebook.com/",
                    SocialMediaIcon: G
                }), (0, r.createElement)(H, {
                    label: "Yelp",
                    link: "https://www.yelp.com/",
                    SocialMediaIcon: L
                })), (0, r.createElement)("div", {
                    className: "gdl-launch-site-success-modal__content"
                }, (0, r.createElement)("div", {
                    className: "gdl-launch-site-success-modal__site-description-container"
                }, (0, r.createElement)("div", {
                    className: "gdl-launch-site-success-modal__site-description-container__icon-container border-right"
                }, (0, r.createElement)(P, {
                    icon: x,
                    size: 18
                })), (0, r.createElement)("p", {
                    className: "gdl-launch-site-success-modal__site-description-container__site-name"
                }, n)), (0, r.createElement)(C, {
                    action: "click",
                    section: "gdl_launch_site_success_modal/copy_url",
                    target: "button"
                }, (0, r.createElement)(v.Button, {
                    icon: (0, r.createElement)(P, {
                        icon: k
                    }),
                    isSecondary: !0,
                    ref: o
                }, t))), (0, r.createElement)("div", {
                    className: "gdl-launch-site-success-modal__cta-container"
                }, (0, r.createElement)(v.Button, {
                    href: n,
                    isPrimary: !0,
                    target: "_blank"
                }, (0, a.__)("View Site", "godaddy-launch")))), ((e, t = !1) => {
                    const l = (0, r.useRef)(null),
                        a = (0, r.useCallback)((e => {
                            l.current = e
                        }), [e]),
                        c = (0, r.useCallback)(((e, t) => {
                            l.current && l.current({ ...t,
                                colors: ["#09757a", "#00a4a6", "#1bdbdb"],
                                gravity: .5,
                                origin: {
                                    y: .55
                                },
                                particleCount: Math.floor(250 * e)
                            })
                        }), []);
                    return (0, r.useEffect)((() => {
                        c(.25, {
                            spread: 26,
                            startVelocity: t ? 155 : 15
                        }), c(.2, {
                            spread: 60
                        }), c(.35, {
                            decay: .91,
                            scalar: 1.5,
                            spread: 100
                        }), c(.1, {
                            decay: .92,
                            scalar: 1.2,
                            spread: 120,
                            startVelocity: t ? 25 : 10
                        }), c(.1, {
                            spread: 200,
                            startVelocity: t ? 45 : 10
                        })
                    }), [e]), (0, r.createElement)(V(), {
                        disableForReducedMotion: !0,
                        refConfetti: a,
                        style: {
                            bottom: 0,
                            height: "100%",
                            left: 0,
                            pointerEvents: "none",
                            position: "absolute",
                            right: 0,
                            top: 0,
                            width: "100%",
                            zIndex: 1e6
                        },
                        useWorker: !0
                    })
                })(!0, !0))
            };

        function A({
            launchWorkflow: e
        }) {
            const t = gdlLiveSiteControlData.WPEX_3590_active,
                [l, c] = (0, r.useState)(null),
                [n] = (0, s.useEntityProp)("root", "site", gdlLiveSiteControlData.settings.publishState),
                [o] = (0, s.useEntityProp)("root", "site", gdlLiveSiteControlData.settings.blogPublic),
                {
                    isPublishGuideFabActive: m
                } = (0, i.useSelect)((e => ({
                    isPublishGuideFabActive: e("godaddy-launch/publish-guide").isPublishGuideFabActive()
                })), []),
                h = ".publish-guide-popover__footer";
            return (0, r.useEffect)((() => {
                let e = document.querySelector(h);
                setTimeout((() => {
                    e = document.querySelector(h), c(e)
                }))
            }), [m]), l ? !n && !o && (0, r.createPortal)((0, r.createElement)("div", {
                className: "wrap gdl-live-site-button__container"
            }, (0, r.createElement)(C, {
                action: "click",
                section: t ? "WPEX_3590_guide" : "guide",
                target: "launch"
            }, (0, r.createElement)(v.Button, {
                isPrimary: !0,
                onClick: e
            }, (0, a.__)("Launch My Site", "godaddy-launch")))), l) : null
        }

        function I({
            launchWorkflow: e
        }) {
            const [t, l] = (0, r.useState)(null), {
                isPublishGuideFabActive: c
            } = (0, i.useSelect)((e => ({
                isPublishGuideFabActive: e("godaddy-launch/publish-guide").isPublishGuideFabActive()
            })), []), {
                closePublishGuide: n
            } = (0, i.useDispatch)("godaddy-launch/publish-guide"), o = ".publish-guide-popover__footer";
            return (0, r.useEffect)((() => {
                let e = document.querySelector(o);
                e ? l(e) : setTimeout((() => {
                    e = document.querySelector(o), l(e)
                }))
            }), [c]), t ? (0, r.createPortal)((0, r.createElement)("div", {
                className: "postbox wrap gdl-live-site-button__container"
            }, (0, r.createElement)(C, {
                action: "click",
                section: "guide",
                target: "launch"
            }, (0, r.createElement)(v.Button, {
                isPrimary: !0,
                onClick: e
            }, (0, a.__)("Yes! Launch My Site", "godaddy-launch"))), (0, r.createElement)(C, {
                action: "click",
                section: "guide",
                target: "no"
            }, (0, r.createElement)(v.Button, {
                className: "publish-guide-continue-button",
                onClick: n,
                variant: "tertiary"
            }, (0, a.__)("Continue Editing", "godaddy-launch")))), t) : null
        }

        function W({
            launchWorkflow: e
        }) {
            const [t, l] = (0, r.useState)(null), {
                isPublishGuideFabActive: c
            } = (0, i.useSelect)((e => ({
                isPublishGuideFabActive: e("godaddy-launch/publish-guide").isPublishGuideFabActive()
            })), []), n = ".publish-guide-popover__footer";
            return (0, r.useEffect)((() => {
                let e = document.querySelector(n);
                e ? l(e) : setTimeout((() => {
                    e = document.querySelector(n), l(e)
                }))
            }), [c]), t ? (0, r.createPortal)((0, r.createElement)("div", {
                className: "postbox wrap gdl-live-site-button__container"
            }, (0, r.createElement)(v.Button, {
                isPrimary: !0,
                onClick: e
            }, (0, a.__)("Launch My Site", "godaddy-launch"))), t) : null
        }

        function Z() {
            return {
                type: "ACTIVATE_PUBLISH_GUIDE_FAB"
            }
        }

        function T() {
            return {
                type: "DEACTIVATE_PUBLISH_GUIDE_FAB"
            }
        }

        function N() {
            return {
                type: "OPEN_PUBLISH_GUIDE"
            }
        }

        function D() {
            return {
                type: "CLOSE_PUBLISH_GUIDE"
            }
        }

        function O() {
            return {
                type: "TOGGLE_PUBLISH_GUIDE"
            }
        }

        function U(e) {
            return {
                guideItems: e,
                type: "SET_GUIDE_ITEMS"
            }
        }

        function j(e) {
            return e.publishGuideFabActive
        }

        function q(e) {
            return e.publishGuideActive
        }

        function $(e) {
            return e.guideItems
        }

        function Y(e) {
            return e.guideItems.filter((e => e.props.hasCompleted)).length === e.guideItems.length
        }
        const X = (0, i.combineReducers)({
                guideItems: function(e = [], t) {
                    return "SET_GUIDE_ITEMS" === t.type ? [...t.guideItems] : e
                },
                publishGuideActive: function(e = !1, t) {
                    switch (t.type) {
                        case "OPEN_PUBLISH_GUIDE":
                            return !0;
                        case "CLOSE_PUBLISH_GUIDE":
                            return !1;
                        case "TOGGLE_PUBLISH_GUIDE":
                            return !e
                    }
                    return e
                },
                publishGuideFabActive: function(e = !1, t) {
                    switch (t.type) {
                        case "ACTIVATE_PUBLISH_GUIDE_FAB":
                            return !0;
                        case "DEACTIVATE_PUBLISH_GUIDE_FAB":
                            return !1
                    }
                    return e
                }
            }),
            K = (0, i.createReduxStore)("godaddy-launch/publish-guide", {
                actions: e,
                reducer: X,
                selectors: t
            });
        (0, i.register)(K);
        const Q = () => {
            const {
                saveEditedEntityRecord: e
            } = (0, i.useDispatch)(s.store), {
                createErrorNotice: t,
                createSuccessNotice: l
            } = (0, i.useDispatch)(o.store), [c, n] = (0, r.useState)(null), [m, d] = (0, r.useState)([]), [w, u] = (0, r.useState)("choice"), [, v] = (0, s.useEntityProp)("root", "site", gdlLiveSiteControlData.settings.publishState), [, g] = (0, s.useEntityProp)("root", "site", gdlLiveSiteControlData.settings.blogPublic), y = "wp-admin-bar-gdl-live-site-banner-enabled", {
                isCompleted: E
            } = (0, i.useSelect)((e => ({
                isCompleted: e(K).getGuideItemsComplete()
            })), []), {
                activatePublishGuideFab: p,
                closePublishGuide: C
            } = (0, i.useDispatch)("godaddy-launch/publish-guide"), {
                isWelcomeGuideActive: x
            } = (0, i.useSelect)((e => {
                if ("post-new.php" !== gdlLiveSiteControlData.page) return !1;
                const {
                    isFeatureActive: t
                } = e("core/edit-post");
                return {
                    isWelcomeGuideActive: t("welcomeGuide")
                }
            }), []), b = {
                launchLater: {
                    autoHide: 1e4,
                    collapseSidePanel: !1,
                    description: (0, a.__)('When you\'re ready for visitors, open the menu here and find the "Launch my site" button.', "godaddy-launch"),
                    refID: "gdl-publish-guide-trigger-button",
                    title: (0, a.__)("Go live for the world to see", "godaddy-launch")
                }
            }, [P, k] = (0, r.useState)(!1), S = (0, r.useCallback)((() => {
                window.removeEventListener(gdlLiveSiteControlData.eventName, V)
            }), []);
            (0, r.useEffect)((() => (window.addEventListener(gdlLiveSiteControlData.eventName, V), S)), []), (0, r.useEffect)((() => {
                document.getElementById("wp-admin-bar-gdl-live-site") && document.documentElement.classList.add(y)
            }), []);
            const V = (0, r.useCallback)((() => {
                    u("confirm"), k(!0)
                }), []),
                G = () => {
                    M(), document.getElementById("wp-admin-bar-gdl-live-site") ? .remove(), document.documentElement.classList.remove(y), u("success")
                },
                B = new URLSearchParams(window.location.search).get("gdl_action");
            async function M() {
                try {
                    await g(!0), await v(!0), await e("root", "site"), await (async (e, t = {}, l = 3) => {
                        let r;
                        for (let a = 0; a < l; a++) try {
                            return await h()(e, t)
                        } catch (e) {
                            r = e
                        }
                        throw r
                    })({
                        method: "POST",
                        path: "gdl/v1/milestone/publish/"
                    }), l((0, a.__)("Site published!", "godaddy-launch"), {
                        type: "snackbar"
                    })
                } catch (e) {
                    const l = e.message && "unknown_error" !== e.code ? e.message : (0, a.__)("An error occurred while publishing the site", "godaddy-launch");
                    t(l, {
                        type: "snackbar"
                    })
                }
            }(0, r.useEffect)((() => {
                switch (B) {
                    case "launch-now":
                        V();
                        break;
                    case "share-on-social":
                        u("success"), k(!0)
                }
            }), [B]);
            const _ = (0, r.useCallback)((() => {
                k(!1), setTimeout((() => p()), 500)
            }), []);
            (0, r.useEffect)((() => {
                setTimeout((() => p()), 500)
            }), []);
            const L = {
                confirm: {
                    Component: z,
                    props: {
                        isCaaSGenerated: "true" === gdlLiveSiteControlData ? .isCaaSGenerated,
                        isCompleted: E,
                        onCloseModal: () => {
                            _(), setTimeout((() => {
                                (e => {
                                    if (m.find((t => t === e))) return null;
                                    const t = b[e];
                                    if (!t) return null;
                                    const l = document.getElementById(t.refID);
                                    n({ ...t,
                                        anchorRect: l.getBoundingClientRect()
                                    })
                                })("launchLater"), d([...m, "launchLater"])
                            }), 500)
                        },
                        onCompleteStep: G
                    }
                },
                success: {
                    Component: F,
                    props: {
                        closeModal: () => {
                            _(), setTimeout((() => {
                                (0, r.unmountComponentAtNode)(document.getElementById(gdlLiveSiteControlData.appContainerClass)), S()
                            }), 500)
                        }
                    }
                }
            };
            return x ? null : (0, r.createElement)(r.Fragment, null, (() => {
                if (!P) return null;
                const e = L[w],
                    t = e ? .Component,
                    l = e ? .props;
                return (0, r.createElement)(t, l)
            })(), gdlLiveSiteControlData.isMigratedSite ? (0, r.createElement)(W, {
                launchWorkflow: () => {
                    C(), k(!0), G()
                }
            }) : E ? (0, r.createElement)(I, {
                launchWorkflow: () => {
                    C(), "true" === gdlLiveSiteControlData ? .isCaaSGenerated ? V() : M()
                }
            }) : (0, r.createElement)(A, {
                launchWorkflow: () => {
                    C(), V()
                }
            }), c ? (0, r.createPortal)((0, r.createElement)(f, {
                closeCallback: () => n(null),
                tooltip: c
            }), document.body) : null)
        };
        n()((() => {
            const e = document.getElementById(gdlLiveSiteControlData.appContainerClass);
            if (e)
                if ("true" === gdlLiveSiteControlData.shouldUseReact18Syntax) {
                    const {
                        createRoot: t
                    } = l(87);
                    t(e).render((0, r.createElement)(Q, null))
                } else {
                    const {
                        render: t
                    } = l(87);
                    t((0, r.createElement)(Q, null), e)
                }
        }))
    })()
})();