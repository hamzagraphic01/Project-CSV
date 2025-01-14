"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [957], {
        22468: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            /**
             * @license lucide-react v0.427.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let r = (0, n(78030).Z)("Check", [
                ["path", {
                    d: "M20 6 9 17l-5-5",
                    key: "1gmf2c"
                }]
            ])
        },
        90976: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return f
                }
            });
            var r = n(2265),
                i = n(98324),
                o = n(1584),
                l = n(71538),
                a = n(57437);

            function f(e) {
                let t = e + "CollectionProvider",
                    [n, f] = (0, i.b)(t),
                    [u, c] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    s = e => {
                        let {
                            scope: t,
                            children: n
                        } = e, i = r.useRef(null), o = r.useRef(new Map).current;
                        return (0, a.jsx)(u, {
                            scope: t,
                            itemMap: o,
                            collectionRef: i,
                            children: n
                        })
                    };
                s.displayName = t;
                let d = e + "CollectionSlot",
                    p = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: r
                        } = e, i = c(d, n), f = (0, o.e)(t, i.collectionRef);
                        return (0, a.jsx)(l.g7, {
                            ref: f,
                            children: r
                        })
                    });
                p.displayName = d;
                let h = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    g = r.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: i,
                            ...f
                        } = e, u = r.useRef(null), s = (0, o.e)(t, u), d = c(h, n);
                        return r.useEffect(() => (d.itemMap.set(u, {
                            ref: u,
                            ...f
                        }), () => void d.itemMap.delete(u))), (0, a.jsx)(l.g7, {
                            [m]: "",
                            ref: s,
                            children: i
                        })
                    });
                return g.displayName = h, [{
                    Provider: s,
                    Slot: p,
                    ItemSlot: g
                }, function(t) {
                    let n = c(e + "CollectionConsumer", t);
                    return r.useCallback(() => {
                        let e = n.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll("[".concat(m, "]")));
                        return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
                    }, [n.collectionRef, n.itemMap])
                }, f]
            }
        },
        87513: function(e, t, n) {
            n.d(t, {
                gm: function() {
                    return o
                }
            });
            var r = n(2265);
            n(57437);
            var i = r.createContext(void 0);

            function o(e) {
                let t = r.useContext(i);
                return e || t || "ltr"
            }
        },
        25510: function(e, t, n) {
            n.d(t, {
                ee: function() {
                    return e$
                },
                Eh: function() {
                    return eG
                },
                VY: function() {
                    return eZ
                },
                fC: function() {
                    return eq
                },
                D7: function() {
                    return eP
                }
            });
            var r = n(2265);
            let i = ["top", "right", "bottom", "left"],
                o = Math.min,
                l = Math.max,
                a = Math.round,
                f = Math.floor,
                u = e => ({
                    x: e,
                    y: e
                }),
                c = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                },
                s = {
                    start: "end",
                    end: "start"
                };

            function d(e, t) {
                return "function" == typeof e ? e(t) : e
            }

            function p(e) {
                return e.split("-")[0]
            }

            function h(e) {
                return e.split("-")[1]
            }

            function m(e) {
                return "x" === e ? "y" : "x"
            }

            function g(e) {
                return "y" === e ? "height" : "width"
            }

            function y(e) {
                return ["top", "bottom"].includes(p(e)) ? "y" : "x"
            }

            function v(e) {
                return e.replace(/start|end/g, e => s[e])
            }

            function w(e) {
                return e.replace(/left|right|bottom|top/g, e => c[e])
            }

            function x(e) {
                return "number" != typeof e ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...e
                } : {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }
            }

            function b(e) {
                let {
                    x: t,
                    y: n,
                    width: r,
                    height: i
                } = e;
                return {
                    width: r,
                    height: i,
                    top: n,
                    left: t,
                    right: t + r,
                    bottom: n + i,
                    x: t,
                    y: n
                }
            }

            function R(e, t, n) {
                let r, {
                        reference: i,
                        floating: o
                    } = e,
                    l = y(t),
                    a = m(y(t)),
                    f = g(a),
                    u = p(t),
                    c = "y" === l,
                    s = i.x + i.width / 2 - o.width / 2,
                    d = i.y + i.height / 2 - o.height / 2,
                    v = i[f] / 2 - o[f] / 2;
                switch (u) {
                    case "top":
                        r = {
                            x: s,
                            y: i.y - o.height
                        };
                        break;
                    case "bottom":
                        r = {
                            x: s,
                            y: i.y + i.height
                        };
                        break;
                    case "right":
                        r = {
                            x: i.x + i.width,
                            y: d
                        };
                        break;
                    case "left":
                        r = {
                            x: i.x - o.width,
                            y: d
                        };
                        break;
                    default:
                        r = {
                            x: i.x,
                            y: i.y
                        }
                }
                switch (h(t)) {
                    case "start":
                        r[a] -= v * (n && c ? -1 : 1);
                        break;
                    case "end":
                        r[a] += v * (n && c ? -1 : 1)
                }
                return r
            }
            let A = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: i = "absolute",
                    middleware: o = [],
                    platform: l
                } = n, a = o.filter(Boolean), f = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: i
                }), {
                    x: c,
                    y: s
                } = R(u, r, f), d = r, p = {}, h = 0;
                for (let n = 0; n < a.length; n++) {
                    let {
                        name: o,
                        fn: m
                    } = a[n], {
                        x: g,
                        y: y,
                        data: v,
                        reset: w
                    } = await m({
                        x: c,
                        y: s,
                        initialPlacement: r,
                        placement: d,
                        strategy: i,
                        middlewareData: p,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    c = null != g ? g : c, s = null != y ? y : s, p = { ...p,
                        [o]: { ...p[o],
                            ...v
                        }
                    }, w && h <= 50 && (h++, "object" == typeof w && (w.placement && (d = w.placement), w.rects && (u = !0 === w.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: i
                    }) : w.rects), {
                        x: c,
                        y: s
                    } = R(u, d, f)), n = -1)
                }
                return {
                    x: c,
                    y: s,
                    placement: d,
                    strategy: i,
                    middlewareData: p
                }
            };
            async function C(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: i,
                    platform: o,
                    rects: l,
                    elements: a,
                    strategy: f
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: c = "viewport",
                    elementContext: s = "floating",
                    altBoundary: p = !1,
                    padding: h = 0
                } = d(t, e), m = x(h), g = a[p ? "floating" === s ? "reference" : "floating" : s], y = b(await o.getClippingRect({
                    element: null == (n = await (null == o.isElement ? void 0 : o.isElement(g))) || n ? g : g.contextElement || await (null == o.getDocumentElement ? void 0 : o.getDocumentElement(a.floating)),
                    boundary: u,
                    rootBoundary: c,
                    strategy: f
                })), v = "floating" === s ? {
                    x: r,
                    y: i,
                    width: l.floating.width,
                    height: l.floating.height
                } : l.reference, w = await (null == o.getOffsetParent ? void 0 : o.getOffsetParent(a.floating)), R = await (null == o.isElement ? void 0 : o.isElement(w)) && await (null == o.getScale ? void 0 : o.getScale(w)) || {
                    x: 1,
                    y: 1
                }, A = b(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
                    elements: a,
                    rect: v,
                    offsetParent: w,
                    strategy: f
                }) : v);
                return {
                    top: (y.top - A.top + m.top) / R.y,
                    bottom: (A.bottom - y.bottom + m.bottom) / R.y,
                    left: (y.left - A.left + m.left) / R.x,
                    right: (A.right - y.right + m.right) / R.x
                }
            }

            function S(e, t) {
                return {
                    top: e.top - t.height,
                    right: e.right - t.width,
                    bottom: e.bottom - t.height,
                    left: e.left - t.width
                }
            }

            function E(e) {
                return i.some(t => e[t] >= 0)
            }
            async function L(e, t) {
                let {
                    placement: n,
                    platform: r,
                    elements: i
                } = e, o = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), l = p(n), a = h(n), f = "y" === y(n), u = ["left", "top"].includes(l) ? -1 : 1, c = o && f ? -1 : 1, s = d(t, e), {
                    mainAxis: m,
                    crossAxis: g,
                    alignmentAxis: v
                } = "number" == typeof s ? {
                    mainAxis: s,
                    crossAxis: 0,
                    alignmentAxis: null
                } : {
                    mainAxis: 0,
                    crossAxis: 0,
                    alignmentAxis: null,
                    ...s
                };
                return a && "number" == typeof v && (g = "end" === a ? -1 * v : v), f ? {
                    x: g * c,
                    y: m * u
                } : {
                    x: m * u,
                    y: g * c
                }
            }

            function O(e) {
                return k(e) ? (e.nodeName || "").toLowerCase() : "#document"
            }

            function T(e) {
                var t;
                return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function P(e) {
                var t;
                return null == (t = (k(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
            }

            function k(e) {
                return e instanceof Node || e instanceof T(e).Node
            }

            function H(e) {
                return e instanceof Element || e instanceof T(e).Element
            }

            function M(e) {
                return e instanceof HTMLElement || e instanceof T(e).HTMLElement
            }

            function W(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof ShadowRoot || e instanceof T(e).ShadowRoot)
            }

            function j(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: i
                } = z(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i)
            }

            function D(e) {
                return [":popover-open", ":modal"].some(t => {
                    try {
                        return e.matches(t)
                    } catch (e) {
                        return !1
                    }
                })
            }

            function F(e) {
                let t = N(),
                    n = H(e) ? z(e) : e;
                return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some(e => (n.willChange || "").includes(e)) || ["paint", "layout", "strict", "content"].some(e => (n.contain || "").includes(e))
            }

            function N() {
                return "undefined" != typeof CSS && !!CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")
            }

            function V(e) {
                return ["html", "body", "#document"].includes(O(e))
            }

            function z(e) {
                return T(e).getComputedStyle(e)
            }

            function B(e) {
                return H(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.scrollX,
                    scrollTop: e.scrollY
                }
            }

            function I(e) {
                if ("html" === O(e)) return e;
                let t = e.assignedSlot || e.parentNode || W(e) && e.host || P(e);
                return W(t) ? t.host : t
            }

            function _(e, t, n) {
                var r;
                void 0 === t && (t = []), void 0 === n && (n = !0);
                let i = function e(t) {
                        let n = I(t);
                        return V(n) ? t.ownerDocument ? t.ownerDocument.body : t.body : M(n) && j(n) ? n : e(n)
                    }(e),
                    o = i === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    l = T(i);
                if (o) {
                    let e = Y(l);
                    return t.concat(l, l.visualViewport || [], j(i) ? i : [], e && n ? _(e) : [])
                }
                return t.concat(i, _(i, [], n))
            }

            function Y(e) {
                return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
            }

            function X(e) {
                let t = z(e),
                    n = parseFloat(t.width) || 0,
                    r = parseFloat(t.height) || 0,
                    i = M(e),
                    o = i ? e.offsetWidth : n,
                    l = i ? e.offsetHeight : r,
                    f = a(n) !== o || a(r) !== l;
                return f && (n = o, r = l), {
                    width: n,
                    height: r,
                    $: f
                }
            }

            function q(e) {
                return H(e) ? e : e.contextElement
            }

            function $(e) {
                let t = q(e);
                if (!M(t)) return u(1);
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: i,
                        $: o
                    } = X(t),
                    l = (o ? a(n.width) : n.width) / r,
                    f = (o ? a(n.height) : n.height) / i;
                return l && Number.isFinite(l) || (l = 1), f && Number.isFinite(f) || (f = 1), {
                    x: l,
                    y: f
                }
            }
            let Z = u(0);

            function G(e) {
                let t = T(e);
                return N() && t.visualViewport ? {
                    x: t.visualViewport.offsetLeft,
                    y: t.visualViewport.offsetTop
                } : Z
            }

            function J(e, t, n, r) {
                var i;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let o = e.getBoundingClientRect(),
                    l = q(e),
                    a = u(1);
                t && (r ? H(r) && (a = $(r)) : a = $(e));
                let f = (void 0 === (i = n) && (i = !1), r && (!i || r === T(l)) && i) ? G(l) : u(0),
                    c = (o.left + f.x) / a.x,
                    s = (o.top + f.y) / a.y,
                    d = o.width / a.x,
                    p = o.height / a.y;
                if (l) {
                    let e = T(l),
                        t = r && H(r) ? T(r) : r,
                        n = e,
                        i = Y(n);
                    for (; i && r && t !== n;) {
                        let e = $(i),
                            t = i.getBoundingClientRect(),
                            r = z(i),
                            o = t.left + (i.clientLeft + parseFloat(r.paddingLeft)) * e.x,
                            l = t.top + (i.clientTop + parseFloat(r.paddingTop)) * e.y;
                        c *= e.x, s *= e.y, d *= e.x, p *= e.y, c += o, s += l, i = Y(n = T(i))
                    }
                }
                return b({
                    width: d,
                    height: p,
                    x: c,
                    y: s
                })
            }

            function K(e) {
                return J(P(e)).left + B(e).scrollLeft
            }

            function Q(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = T(e),
                        r = P(e),
                        i = n.visualViewport,
                        o = r.clientWidth,
                        l = r.clientHeight,
                        a = 0,
                        f = 0;
                    if (i) {
                        o = i.width, l = i.height;
                        let e = N();
                        (!e || e && "fixed" === t) && (a = i.offsetLeft, f = i.offsetTop)
                    }
                    return {
                        width: o,
                        height: l,
                        x: a,
                        y: f
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = P(e),
                        n = B(e),
                        r = e.ownerDocument.body,
                        i = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        o = l(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        a = -n.scrollLeft + K(e),
                        f = -n.scrollTop;
                    return "rtl" === z(r).direction && (a += l(t.clientWidth, r.clientWidth) - i), {
                        width: i,
                        height: o,
                        x: a,
                        y: f
                    }
                }(P(e));
                else if (H(t)) r = function(e, t) {
                    let n = J(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        i = n.left + e.clientLeft,
                        o = M(e) ? $(e) : u(1),
                        l = e.clientWidth * o.x;
                    return {
                        width: l,
                        height: e.clientHeight * o.y,
                        x: i * o.x,
                        y: r * o.y
                    }
                }(t, n);
                else {
                    let n = G(e);
                    r = { ...t,
                        x: t.x - n.x,
                        y: t.y - n.y
                    }
                }
                return b(r)
            }

            function U(e) {
                return "static" === z(e).position
            }

            function ee(e, t) {
                return M(e) && "fixed" !== z(e).position ? t ? t(e) : e.offsetParent : null
            }

            function et(e, t) {
                let n = T(e);
                if (D(e)) return n;
                if (!M(e)) {
                    let t = I(e);
                    for (; t && !V(t);) {
                        if (H(t) && !U(t)) return t;
                        t = I(t)
                    }
                    return n
                }
                let r = ee(e, t);
                for (; r && ["table", "td", "th"].includes(O(r)) && U(r);) r = ee(r, t);
                return r && V(r) && U(r) && !F(r) ? n : r || function(e) {
                    let t = I(e);
                    for (; M(t) && !V(t);) {
                        if (F(t)) return t;
                        if (D(t)) break;
                        t = I(t)
                    }
                    return null
                }(e) || n
            }
            let en = async function(e) {
                    let t = this.getOffsetParent || et,
                        n = this.getDimensions,
                        r = await n(e.floating);
                    return {
                        reference: function(e, t, n) {
                            let r = M(t),
                                i = P(t),
                                o = "fixed" === n,
                                l = J(e, !0, o, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                f = u(0);
                            if (r || !r && !o) {
                                if (("body" !== O(t) || j(i)) && (a = B(t)), r) {
                                    let e = J(t, !0, o, t);
                                    f.x = e.x + t.clientLeft, f.y = e.y + t.clientTop
                                } else i && (f.x = K(i))
                            }
                            return {
                                x: l.left + a.scrollLeft - f.x,
                                y: l.top + a.scrollTop - f.y,
                                width: l.width,
                                height: l.height
                            }
                        }(e.reference, await t(e.floating), e.strategy),
                        floating: {
                            x: 0,
                            y: 0,
                            width: r.width,
                            height: r.height
                        }
                    }
                },
                er = {
                    convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                        let {
                            elements: t,
                            rect: n,
                            offsetParent: r,
                            strategy: i
                        } = e, o = "fixed" === i, l = P(r), a = !!t && D(t.floating);
                        if (r === l || a && o) return n;
                        let f = {
                                scrollLeft: 0,
                                scrollTop: 0
                            },
                            c = u(1),
                            s = u(0),
                            d = M(r);
                        if ((d || !d && !o) && (("body" !== O(r) || j(l)) && (f = B(r)), M(r))) {
                            let e = J(r);
                            c = $(r), s.x = e.x + r.clientLeft, s.y = e.y + r.clientTop
                        }
                        return {
                            width: n.width * c.x,
                            height: n.height * c.y,
                            x: n.x * c.x - f.scrollLeft * c.x + s.x,
                            y: n.y * c.y - f.scrollTop * c.y + s.y
                        }
                    },
                    getDocumentElement: P,
                    getClippingRect: function(e) {
                        let {
                            element: t,
                            boundary: n,
                            rootBoundary: r,
                            strategy: i
                        } = e, a = [..."clippingAncestors" === n ? D(t) ? [] : function(e, t) {
                            let n = t.get(e);
                            if (n) return n;
                            let r = _(e, [], !1).filter(e => H(e) && "body" !== O(e)),
                                i = null,
                                o = "fixed" === z(e).position,
                                l = o ? I(e) : e;
                            for (; H(l) && !V(l);) {
                                let t = z(l),
                                    n = F(l);
                                n || "fixed" !== t.position || (i = null), (o ? !n && !i : !n && "static" === t.position && !!i && ["absolute", "fixed"].includes(i.position) || j(l) && !n && function e(t, n) {
                                    let r = I(t);
                                    return !(r === n || !H(r) || V(r)) && ("fixed" === z(r).position || e(r, n))
                                }(e, l)) ? r = r.filter(e => e !== l) : i = t, l = I(l)
                            }
                            return t.set(e, r), r
                        }(t, this._c) : [].concat(n), r], f = a[0], u = a.reduce((e, n) => {
                            let r = Q(t, n, i);
                            return e.top = l(r.top, e.top), e.right = o(r.right, e.right), e.bottom = o(r.bottom, e.bottom), e.left = l(r.left, e.left), e
                        }, Q(t, f, i));
                        return {
                            width: u.right - u.left,
                            height: u.bottom - u.top,
                            x: u.left,
                            y: u.top
                        }
                    },
                    getOffsetParent: et,
                    getElementRects: en,
                    getClientRects: function(e) {
                        return Array.from(e.getClientRects())
                    },
                    getDimensions: function(e) {
                        let {
                            width: t,
                            height: n
                        } = X(e);
                        return {
                            width: t,
                            height: n
                        }
                    },
                    getScale: $,
                    isElement: H,
                    isRTL: function(e) {
                        return "rtl" === z(e).direction
                    }
                },
                ei = e => ({
                    name: "arrow",
                    options: e,
                    async fn(t) {
                        let {
                            x: n,
                            y: r,
                            placement: i,
                            rects: a,
                            platform: f,
                            elements: u,
                            middlewareData: c
                        } = t, {
                            element: s,
                            padding: p = 0
                        } = d(e, t) || {};
                        if (null == s) return {};
                        let v = x(p),
                            w = {
                                x: n,
                                y: r
                            },
                            b = m(y(i)),
                            R = g(b),
                            A = await f.getDimensions(s),
                            C = "y" === b,
                            S = C ? "clientHeight" : "clientWidth",
                            E = a.reference[R] + a.reference[b] - w[b] - a.floating[R],
                            L = w[b] - a.reference[b],
                            O = await (null == f.getOffsetParent ? void 0 : f.getOffsetParent(s)),
                            T = O ? O[S] : 0;
                        T && await (null == f.isElement ? void 0 : f.isElement(O)) || (T = u.floating[S] || a.floating[R]);
                        let P = T / 2 - A[R] / 2 - 1,
                            k = o(v[C ? "top" : "left"], P),
                            H = o(v[C ? "bottom" : "right"], P),
                            M = T - A[R] - H,
                            W = T / 2 - A[R] / 2 + (E / 2 - L / 2),
                            j = l(k, o(W, M)),
                            D = !c.arrow && null != h(i) && W !== j && a.reference[R] / 2 - (W < k ? k : H) - A[R] / 2 < 0,
                            F = D ? W < k ? W - k : W - M : 0;
                        return {
                            [b]: w[b] + F,
                            data: {
                                [b]: j,
                                centerOffset: W - j - F,
                                ...D && {
                                    alignmentOffset: F
                                }
                            },
                            reset: D
                        }
                    }
                }),
                eo = (e, t, n) => {
                    let r = new Map,
                        i = {
                            platform: er,
                            ...n
                        },
                        o = { ...i.platform,
                            _c: r
                        };
                    return A(e, t, { ...i,
                        platform: o
                    })
                };
            var el = n(54887),
                ea = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect;

            function ef(e, t) {
                let n, r, i;
                if (e === t) return !0;
                if (typeof e != typeof t) return !1;
                if ("function" == typeof e && e.toString() === t.toString()) return !0;
                if (e && t && "object" == typeof e) {
                    if (Array.isArray(e)) {
                        if ((n = e.length) !== t.length) return !1;
                        for (r = n; 0 != r--;)
                            if (!ef(e[r], t[r])) return !1;
                        return !0
                    }
                    if ((n = (i = Object.keys(e)).length) !== Object.keys(t).length) return !1;
                    for (r = n; 0 != r--;)
                        if (!({}).hasOwnProperty.call(t, i[r])) return !1;
                    for (r = n; 0 != r--;) {
                        let n = i[r];
                        if (("_owner" !== n || !e.$$typeof) && !ef(e[n], t[n])) return !1
                    }
                    return !0
                }
                return e != e && t != t
            }

            function eu(e) {
                return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
            }

            function ec(e, t) {
                let n = eu(e);
                return Math.round(t * n) / n
            }

            function es(e) {
                let t = r.useRef(e);
                return ea(() => {
                    t.current = e
                }), t
            }
            let ed = e => ({
                    name: "arrow",
                    options: e,
                    fn(t) {
                        let {
                            element: n,
                            padding: r
                        } = "function" == typeof e ? e(t) : e;
                        return n && ({}).hasOwnProperty.call(n, "current") ? null != n.current ? ei({
                            element: n.current,
                            padding: r
                        }).fn(t) : {} : n ? ei({
                            element: n,
                            padding: r
                        }).fn(t) : {}
                    }
                }),
                ep = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = 0), {
                            name: "offset",
                            options: n,
                            async fn(e) {
                                var t, r;
                                let {
                                    x: i,
                                    y: o,
                                    placement: l,
                                    middlewareData: a
                                } = e, f = await L(e, n);
                                return l === (null == (t = a.offset) ? void 0 : t.placement) && null != (r = a.arrow) && r.alignmentOffset ? {} : {
                                    x: i + f.x,
                                    y: o + f.y,
                                    data: { ...f,
                                        placement: l
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eh = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "shift",
                            options: n,
                            async fn(e) {
                                let {
                                    x: t,
                                    y: r,
                                    placement: i
                                } = e, {
                                    mainAxis: a = !0,
                                    crossAxis: f = !1,
                                    limiter: u = {
                                        fn: e => {
                                            let {
                                                x: t,
                                                y: n
                                            } = e;
                                            return {
                                                x: t,
                                                y: n
                                            }
                                        }
                                    },
                                    ...c
                                } = d(n, e), s = {
                                    x: t,
                                    y: r
                                }, h = await C(e, c), g = y(p(i)), v = m(g), w = s[v], x = s[g];
                                if (a) {
                                    let e = "y" === v ? "top" : "left",
                                        t = "y" === v ? "bottom" : "right",
                                        n = w + h[e],
                                        r = w - h[t];
                                    w = l(n, o(w, r))
                                }
                                if (f) {
                                    let e = "y" === g ? "top" : "left",
                                        t = "y" === g ? "bottom" : "right",
                                        n = x + h[e],
                                        r = x - h[t];
                                    x = l(n, o(x, r))
                                }
                                let b = u.fn({ ...e,
                                    [v]: w,
                                    [g]: x
                                });
                                return { ...b,
                                    data: {
                                        x: b.x - t,
                                        y: b.y - r
                                    }
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                em = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            options: n,
                            fn(e) {
                                let {
                                    x: t,
                                    y: r,
                                    placement: i,
                                    rects: o,
                                    middlewareData: l
                                } = e, {
                                    offset: a = 0,
                                    mainAxis: f = !0,
                                    crossAxis: u = !0
                                } = d(n, e), c = {
                                    x: t,
                                    y: r
                                }, s = y(i), h = m(s), g = c[h], v = c[s], w = d(a, e), x = "number" == typeof w ? {
                                    mainAxis: w,
                                    crossAxis: 0
                                } : {
                                    mainAxis: 0,
                                    crossAxis: 0,
                                    ...w
                                };
                                if (f) {
                                    let e = "y" === h ? "height" : "width",
                                        t = o.reference[h] - o.floating[e] + x.mainAxis,
                                        n = o.reference[h] + o.reference[e] - x.mainAxis;
                                    g < t ? g = t : g > n && (g = n)
                                }
                                if (u) {
                                    var b, R;
                                    let e = "y" === h ? "width" : "height",
                                        t = ["top", "left"].includes(p(i)),
                                        n = o.reference[s] - o.floating[e] + (t && (null == (b = l.offset) ? void 0 : b[s]) || 0) + (t ? 0 : x.crossAxis),
                                        r = o.reference[s] + o.reference[e] + (t ? 0 : (null == (R = l.offset) ? void 0 : R[s]) || 0) - (t ? x.crossAxis : 0);
                                    v < n ? v = n : v > r && (v = r)
                                }
                                return {
                                    [h]: g,
                                    [s]: v
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                eg = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "flip",
                            options: n,
                            async fn(e) {
                                var t, r, i, o, l;
                                let {
                                    placement: a,
                                    middlewareData: f,
                                    rects: u,
                                    initialPlacement: c,
                                    platform: s,
                                    elements: x
                                } = e, {
                                    mainAxis: b = !0,
                                    crossAxis: R = !0,
                                    fallbackPlacements: A,
                                    fallbackStrategy: S = "bestFit",
                                    fallbackAxisSideDirection: E = "none",
                                    flipAlignment: L = !0,
                                    ...O
                                } = d(n, e);
                                if (null != (t = f.arrow) && t.alignmentOffset) return {};
                                let T = p(a),
                                    P = y(c),
                                    k = p(c) === c,
                                    H = await (null == s.isRTL ? void 0 : s.isRTL(x.floating)),
                                    M = A || (k || !L ? [w(c)] : function(e) {
                                        let t = w(e);
                                        return [v(e), t, v(t)]
                                    }(c)),
                                    W = "none" !== E;
                                !A && W && M.push(... function(e, t, n, r) {
                                    let i = h(e),
                                        o = function(e, t, n) {
                                            let r = ["left", "right"],
                                                i = ["right", "left"];
                                            switch (e) {
                                                case "top":
                                                case "bottom":
                                                    if (n) return t ? i : r;
                                                    return t ? r : i;
                                                case "left":
                                                case "right":
                                                    return t ? ["top", "bottom"] : ["bottom", "top"];
                                                default:
                                                    return []
                                            }
                                        }(p(e), "start" === n, r);
                                    return i && (o = o.map(e => e + "-" + i), t && (o = o.concat(o.map(v)))), o
                                }(c, L, E, H));
                                let j = [c, ...M],
                                    D = await C(e, O),
                                    F = [],
                                    N = (null == (r = f.flip) ? void 0 : r.overflows) || [];
                                if (b && F.push(D[T]), R) {
                                    let e = function(e, t, n) {
                                        void 0 === n && (n = !1);
                                        let r = h(e),
                                            i = m(y(e)),
                                            o = g(i),
                                            l = "x" === i ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                                        return t.reference[o] > t.floating[o] && (l = w(l)), [l, w(l)]
                                    }(a, u, H);
                                    F.push(D[e[0]], D[e[1]])
                                }
                                if (N = [...N, {
                                        placement: a,
                                        overflows: F
                                    }], !F.every(e => e <= 0)) {
                                    let e = ((null == (i = f.flip) ? void 0 : i.index) || 0) + 1,
                                        t = j[e];
                                    if (t) return {
                                        data: {
                                            index: e,
                                            overflows: N
                                        },
                                        reset: {
                                            placement: t
                                        }
                                    };
                                    let n = null == (o = N.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : o.placement;
                                    if (!n) switch (S) {
                                        case "bestFit":
                                            {
                                                let e = null == (l = N.filter(e => {
                                                    if (W) {
                                                        let t = y(e.placement);
                                                        return t === P || "y" === t
                                                    }
                                                    return !0
                                                }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : l[0];e && (n = e);
                                                break
                                            }
                                        case "initialPlacement":
                                            n = c
                                    }
                                    if (a !== n) return {
                                        reset: {
                                            placement: n
                                        }
                                    }
                                }
                                return {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                ey = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "size",
                            options: n,
                            async fn(e) {
                                let t, r;
                                let {
                                    placement: i,
                                    rects: a,
                                    platform: f,
                                    elements: u
                                } = e, {
                                    apply: c = () => {},
                                    ...s
                                } = d(n, e), m = await C(e, s), g = p(i), v = h(i), w = "y" === y(i), {
                                    width: x,
                                    height: b
                                } = a.floating;
                                "top" === g || "bottom" === g ? (t = g, r = v === (await (null == f.isRTL ? void 0 : f.isRTL(u.floating)) ? "start" : "end") ? "left" : "right") : (r = g, t = "end" === v ? "top" : "bottom");
                                let R = b - m.top - m.bottom,
                                    A = x - m.left - m.right,
                                    S = o(b - m[t], R),
                                    E = o(x - m[r], A),
                                    L = !e.middlewareData.shift,
                                    O = S,
                                    T = E;
                                if (w ? T = v || L ? o(E, A) : A : O = v || L ? o(S, R) : R, L && !v) {
                                    let e = l(m.left, 0),
                                        t = l(m.right, 0),
                                        n = l(m.top, 0),
                                        r = l(m.bottom, 0);
                                    w ? T = x - 2 * (0 !== e || 0 !== t ? e + t : l(m.left, m.right)) : O = b - 2 * (0 !== n || 0 !== r ? n + r : l(m.top, m.bottom))
                                }
                                await c({ ...e,
                                    availableWidth: T,
                                    availableHeight: O
                                });
                                let P = await f.getDimensions(u.floating);
                                return x !== P.width || b !== P.height ? {
                                    reset: {
                                        rects: !0
                                    }
                                } : {}
                            }
                        }),
                        options: [e, t]
                    }
                },
                ev = (e, t) => {
                    var n;
                    return { ...(void 0 === (n = e) && (n = {}), {
                            name: "hide",
                            options: n,
                            async fn(e) {
                                let {
                                    rects: t
                                } = e, {
                                    strategy: r = "referenceHidden",
                                    ...i
                                } = d(n, e);
                                switch (r) {
                                    case "referenceHidden":
                                        {
                                            let n = S(await C(e, { ...i,
                                                elementContext: "reference"
                                            }), t.reference);
                                            return {
                                                data: {
                                                    referenceHiddenOffsets: n,
                                                    referenceHidden: E(n)
                                                }
                                            }
                                        }
                                    case "escaped":
                                        {
                                            let n = S(await C(e, { ...i,
                                                altBoundary: !0
                                            }), t.floating);
                                            return {
                                                data: {
                                                    escapedOffsets: n,
                                                    escaped: E(n)
                                                }
                                            }
                                        }
                                    default:
                                        return {}
                                }
                            }
                        }),
                        options: [e, t]
                    }
                },
                ew = (e, t) => ({ ...ed(e),
                    options: [e, t]
                });
            var ex = n(25171),
                eb = n(57437),
                eR = r.forwardRef((e, t) => {
                    let {
                        children: n,
                        width: r = 10,
                        height: i = 5,
                        ...o
                    } = e;
                    return (0, eb.jsx)(ex.WV.svg, { ...o,
                        ref: t,
                        width: r,
                        height: i,
                        viewBox: "0 0 30 10",
                        preserveAspectRatio: "none",
                        children: e.asChild ? n : (0, eb.jsx)("polygon", {
                            points: "0,0 30,0 15,10"
                        })
                    })
                });
            eR.displayName = "Arrow";
            var eA = n(1584),
                eC = n(98324),
                eS = n(75137),
                eE = n(1336),
                eL = n(75238),
                eO = "Popper",
                [eT, eP] = (0, eC.b)(eO),
                [ek, eH] = eT(eO),
                eM = e => {
                    let {
                        __scopePopper: t,
                        children: n
                    } = e, [i, o] = r.useState(null);
                    return (0, eb.jsx)(ek, {
                        scope: t,
                        anchor: i,
                        onAnchorChange: o,
                        children: n
                    })
                };
            eM.displayName = eO;
            var eW = "PopperAnchor",
                ej = r.forwardRef((e, t) => {
                    let {
                        __scopePopper: n,
                        virtualRef: i,
                        ...o
                    } = e, l = eH(eW, n), a = r.useRef(null), f = (0, eA.e)(t, a);
                    return r.useEffect(() => {
                        l.onAnchorChange((null == i ? void 0 : i.current) || a.current)
                    }), i ? null : (0, eb.jsx)(ex.WV.div, { ...o,
                        ref: f
                    })
                });
            ej.displayName = eW;
            var eD = "PopperContent",
                [eF, eN] = eT(eD),
                eV = r.forwardRef((e, t) => {
                    var n, i, a, u, c, s, d, p;
                    let {
                        __scopePopper: h,
                        side: m = "bottom",
                        sideOffset: g = 0,
                        align: y = "center",
                        alignOffset: v = 0,
                        arrowPadding: w = 0,
                        avoidCollisions: x = !0,
                        collisionBoundary: b = [],
                        collisionPadding: R = 0,
                        sticky: A = "partial",
                        hideWhenDetached: C = !1,
                        updatePositionStrategy: S = "optimized",
                        onPlaced: E,
                        ...L
                    } = e, O = eH(eD, h), [T, k] = r.useState(null), H = (0, eA.e)(t, e => k(e)), [M, W] = r.useState(null), j = (0, eL.t)(M), D = null !== (d = null == j ? void 0 : j.width) && void 0 !== d ? d : 0, F = null !== (p = null == j ? void 0 : j.height) && void 0 !== p ? p : 0, N = "number" == typeof R ? R : {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        ...R
                    }, V = Array.isArray(b) ? b : [b], z = V.length > 0, B = {
                        padding: N,
                        boundary: V.filter(e_),
                        altBoundary: z
                    }, {
                        refs: I,
                        floatingStyles: Y,
                        placement: X,
                        isPositioned: $,
                        middlewareData: Z
                    } = function(e) {
                        void 0 === e && (e = {});
                        let {
                            placement: t = "bottom",
                            strategy: n = "absolute",
                            middleware: i = [],
                            platform: o,
                            elements: {
                                reference: l,
                                floating: a
                            } = {},
                            transform: f = !0,
                            whileElementsMounted: u,
                            open: c
                        } = e, [s, d] = r.useState({
                            x: 0,
                            y: 0,
                            strategy: n,
                            placement: t,
                            middlewareData: {},
                            isPositioned: !1
                        }), [p, h] = r.useState(i);
                        ef(p, i) || h(i);
                        let [m, g] = r.useState(null), [y, v] = r.useState(null), w = r.useCallback(e => {
                            e !== A.current && (A.current = e, g(e))
                        }, []), x = r.useCallback(e => {
                            e !== C.current && (C.current = e, v(e))
                        }, []), b = l || m, R = a || y, A = r.useRef(null), C = r.useRef(null), S = r.useRef(s), E = null != u, L = es(u), O = es(o), T = r.useCallback(() => {
                            if (!A.current || !C.current) return;
                            let e = {
                                placement: t,
                                strategy: n,
                                middleware: p
                            };
                            O.current && (e.platform = O.current), eo(A.current, C.current, e).then(e => {
                                let t = { ...e,
                                    isPositioned: !0
                                };
                                P.current && !ef(S.current, t) && (S.current = t, el.flushSync(() => {
                                    d(t)
                                }))
                            })
                        }, [p, t, n, O]);
                        ea(() => {
                            !1 === c && S.current.isPositioned && (S.current.isPositioned = !1, d(e => ({ ...e,
                                isPositioned: !1
                            })))
                        }, [c]);
                        let P = r.useRef(!1);
                        ea(() => (P.current = !0, () => {
                            P.current = !1
                        }), []), ea(() => {
                            if (b && (A.current = b), R && (C.current = R), b && R) {
                                if (L.current) return L.current(b, R, T);
                                T()
                            }
                        }, [b, R, T, L, E]);
                        let k = r.useMemo(() => ({
                                reference: A,
                                floating: C,
                                setReference: w,
                                setFloating: x
                            }), [w, x]),
                            H = r.useMemo(() => ({
                                reference: b,
                                floating: R
                            }), [b, R]),
                            M = r.useMemo(() => {
                                let e = {
                                    position: n,
                                    left: 0,
                                    top: 0
                                };
                                if (!H.floating) return e;
                                let t = ec(H.floating, s.x),
                                    r = ec(H.floating, s.y);
                                return f ? { ...e,
                                    transform: "translate(" + t + "px, " + r + "px)",
                                    ...eu(H.floating) >= 1.5 && {
                                        willChange: "transform"
                                    }
                                } : {
                                    position: n,
                                    left: t,
                                    top: r
                                }
                            }, [n, f, H.floating, s.x, s.y]);
                        return r.useMemo(() => ({ ...s,
                            update: T,
                            refs: k,
                            elements: H,
                            floatingStyles: M
                        }), [s, T, k, H, M])
                    }({
                        strategy: "fixed",
                        placement: m + ("center" !== y ? "-" + y : ""),
                        whileElementsMounted: function() {
                            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return function(e, t, n, r) {
                                let i;
                                void 0 === r && (r = {});
                                let {
                                    ancestorScroll: a = !0,
                                    ancestorResize: u = !0,
                                    elementResize: c = "function" == typeof ResizeObserver,
                                    layoutShift: s = "function" == typeof IntersectionObserver,
                                    animationFrame: d = !1
                                } = r, p = q(e), h = a || u ? [...p ? _(p) : [], ..._(t)] : [];
                                h.forEach(e => {
                                    a && e.addEventListener("scroll", n, {
                                        passive: !0
                                    }), u && e.addEventListener("resize", n)
                                });
                                let m = p && s ? function(e, t) {
                                        let n, r = null,
                                            i = P(e);

                                        function a() {
                                            var e;
                                            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
                                        }
                                        return ! function u(c, s) {
                                            void 0 === c && (c = !1), void 0 === s && (s = 1), a();
                                            let {
                                                left: d,
                                                top: p,
                                                width: h,
                                                height: m
                                            } = e.getBoundingClientRect();
                                            if (c || t(), !h || !m) return;
                                            let g = f(p),
                                                y = f(i.clientWidth - (d + h)),
                                                v = {
                                                    rootMargin: -g + "px " + -y + "px " + -f(i.clientHeight - (p + m)) + "px " + -f(d) + "px",
                                                    threshold: l(0, o(1, s)) || 1
                                                },
                                                w = !0;

                                            function x(e) {
                                                let t = e[0].intersectionRatio;
                                                if (t !== s) {
                                                    if (!w) return u();
                                                    t ? u(!1, t) : n = setTimeout(() => {
                                                        u(!1, 1e-7)
                                                    }, 1e3)
                                                }
                                                w = !1
                                            }
                                            try {
                                                r = new IntersectionObserver(x, { ...v,
                                                    root: i.ownerDocument
                                                })
                                            } catch (e) {
                                                r = new IntersectionObserver(x, v)
                                            }
                                            r.observe(e)
                                        }(!0), a
                                    }(p, n) : null,
                                    g = -1,
                                    y = null;
                                c && (y = new ResizeObserver(e => {
                                    let [r] = e;
                                    r && r.target === p && y && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                                        var e;
                                        null == (e = y) || e.observe(t)
                                    })), n()
                                }), p && !d && y.observe(p), y.observe(t));
                                let v = d ? J(e) : null;
                                return d && function t() {
                                    let r = J(e);
                                    v && (r.x !== v.x || r.y !== v.y || r.width !== v.width || r.height !== v.height) && n(), v = r, i = requestAnimationFrame(t)
                                }(), n(), () => {
                                    var e;
                                    h.forEach(e => {
                                        a && e.removeEventListener("scroll", n), u && e.removeEventListener("resize", n)
                                    }), null == m || m(), null == (e = y) || e.disconnect(), y = null, d && cancelAnimationFrame(i)
                                }
                            }(...t, {
                                animationFrame: "always" === S
                            })
                        },
                        elements: {
                            reference: O.anchor
                        },
                        middleware: [ep({
                            mainAxis: g + F,
                            alignmentAxis: v
                        }), x && eh({
                            mainAxis: !0,
                            crossAxis: !1,
                            limiter: "partial" === A ? em() : void 0,
                            ...B
                        }), x && eg({ ...B
                        }), ey({ ...B,
                            apply: e => {
                                let {
                                    elements: t,
                                    rects: n,
                                    availableWidth: r,
                                    availableHeight: i
                                } = e, {
                                    width: o,
                                    height: l
                                } = n.reference, a = t.floating.style;
                                a.setProperty("--radix-popper-available-width", "".concat(r, "px")), a.setProperty("--radix-popper-available-height", "".concat(i, "px")), a.setProperty("--radix-popper-anchor-width", "".concat(o, "px")), a.setProperty("--radix-popper-anchor-height", "".concat(l, "px"))
                            }
                        }), M && ew({
                            element: M,
                            padding: w
                        }), eY({
                            arrowWidth: D,
                            arrowHeight: F
                        }), C && ev({
                            strategy: "referenceHidden",
                            ...B
                        })]
                    }), [G, K] = eX(X), Q = (0, eS.W)(E);
                    (0, eE.b)(() => {
                        $ && (null == Q || Q())
                    }, [$, Q]);
                    let U = null === (n = Z.arrow) || void 0 === n ? void 0 : n.x,
                        ee = null === (i = Z.arrow) || void 0 === i ? void 0 : i.y,
                        et = (null === (a = Z.arrow) || void 0 === a ? void 0 : a.centerOffset) !== 0,
                        [en, er] = r.useState();
                    return (0, eE.b)(() => {
                        T && er(window.getComputedStyle(T).zIndex)
                    }, [T]), (0, eb.jsx)("div", {
                        ref: I.setFloating,
                        "data-radix-popper-content-wrapper": "",
                        style: { ...Y,
                            transform: $ ? Y.transform : "translate(0, -200%)",
                            minWidth: "max-content",
                            zIndex: en,
                            "--radix-popper-transform-origin": [null === (u = Z.transformOrigin) || void 0 === u ? void 0 : u.x, null === (c = Z.transformOrigin) || void 0 === c ? void 0 : c.y].join(" "),
                            ...(null === (s = Z.hide) || void 0 === s ? void 0 : s.referenceHidden) && {
                                visibility: "hidden",
                                pointerEvents: "none"
                            }
                        },
                        dir: e.dir,
                        children: (0, eb.jsx)(eF, {
                            scope: h,
                            placedSide: G,
                            onArrowChange: W,
                            arrowX: U,
                            arrowY: ee,
                            shouldHideArrow: et,
                            children: (0, eb.jsx)(ex.WV.div, {
                                "data-side": G,
                                "data-align": K,
                                ...L,
                                ref: H,
                                style: { ...L.style,
                                    animation: $ ? void 0 : "none"
                                }
                            })
                        })
                    })
                });
            eV.displayName = eD;
            var ez = "PopperArrow",
                eB = {
                    top: "bottom",
                    right: "left",
                    bottom: "top",
                    left: "right"
                },
                eI = r.forwardRef(function(e, t) {
                    let {
                        __scopePopper: n,
                        ...r
                    } = e, i = eN(ez, n), o = eB[i.placedSide];
                    return (0, eb.jsx)("span", {
                        ref: i.onArrowChange,
                        style: {
                            position: "absolute",
                            left: i.arrowX,
                            top: i.arrowY,
                            [o]: 0,
                            transformOrigin: {
                                top: "",
                                right: "0 0",
                                bottom: "center 0",
                                left: "100% 0"
                            }[i.placedSide],
                            transform: {
                                top: "translateY(100%)",
                                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                                bottom: "rotate(180deg)",
                                left: "translateY(50%) rotate(-90deg) translateX(50%)"
                            }[i.placedSide],
                            visibility: i.shouldHideArrow ? "hidden" : void 0
                        },
                        children: (0, eb.jsx)(eR, { ...r,
                            ref: t,
                            style: { ...r.style,
                                display: "block"
                            }
                        })
                    })
                });

            function e_(e) {
                return null !== e
            }
            eI.displayName = ez;
            var eY = e => ({
                name: "transformOrigin",
                options: e,
                fn(t) {
                    var n, r, i, o, l;
                    let {
                        placement: a,
                        rects: f,
                        middlewareData: u
                    } = t, c = (null === (n = u.arrow) || void 0 === n ? void 0 : n.centerOffset) !== 0, s = c ? 0 : e.arrowWidth, d = c ? 0 : e.arrowHeight, [p, h] = eX(a), m = {
                        start: "0%",
                        center: "50%",
                        end: "100%"
                    }[h], g = (null !== (o = null === (r = u.arrow) || void 0 === r ? void 0 : r.x) && void 0 !== o ? o : 0) + s / 2, y = (null !== (l = null === (i = u.arrow) || void 0 === i ? void 0 : i.y) && void 0 !== l ? l : 0) + d / 2, v = "", w = "";
                    return "bottom" === p ? (v = c ? m : "".concat(g, "px"), w = "".concat(-d, "px")) : "top" === p ? (v = c ? m : "".concat(g, "px"), w = "".concat(f.floating.height + d, "px")) : "right" === p ? (v = "".concat(-d, "px"), w = c ? m : "".concat(y, "px")) : "left" === p && (v = "".concat(f.floating.width + d, "px"), w = c ? m : "".concat(y, "px")), {
                        data: {
                            x: v,
                            y: w
                        }
                    }
                }
            });

            function eX(e) {
                let [t, n = "center"] = e.split("-");
                return [t, n]
            }
            var eq = eM,
                e$ = ej,
                eZ = eV,
                eG = eI
        },
        75238: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return o
                }
            });
            var r = n(2265),
                i = n(1336);

            function o(e) {
                let [t, n] = r.useState(void 0);
                return (0, i.b)(() => {
                    if (e) {
                        n({
                            width: e.offsetWidth,
                            height: e.offsetHeight
                        });
                        let t = new ResizeObserver(t => {
                            let r, i;
                            if (!Array.isArray(t) || !t.length) return;
                            let o = t[0];
                            if ("borderBoxSize" in o) {
                                let e = o.borderBoxSize,
                                    t = Array.isArray(e) ? e[0] : e;
                                r = t.inlineSize, i = t.blockSize
                            } else r = e.offsetWidth, i = e.offsetHeight;
                            n({
                                width: r,
                                height: i
                            })
                        });
                        return t.observe(e, {
                            box: "border-box"
                        }), () => t.unobserve(e)
                    }
                    n(void 0)
                }, [e]), t
            }
        }
    }
]);