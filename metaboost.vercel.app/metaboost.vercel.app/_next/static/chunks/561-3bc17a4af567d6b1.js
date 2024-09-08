"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [561], {
        13304: function(e, n, t) {
            t.d(n, {
                Dx: function() {
                    return et
                },
                VY: function() {
                    return en
                },
                aV: function() {
                    return ee
                },
                dk: function() {
                    return er
                },
                fC: function() {
                    return J
                },
                h_: function() {
                    return $
                },
                jm: function() {
                    return K
                },
                p8: function() {
                    return D
                },
                x8: function() {
                    return eo
                },
                xz: function() {
                    return Q
                }
            });
            var r = t(2265),
                o = t(78149),
                i = t(1584),
                l = t(98324),
                u = t(53201),
                a = t(91715),
                s = t(53938),
                c = t(80467),
                d = t(56935),
                f = t(31383),
                p = t(25171),
                v = t(20589),
                m = t(9219),
                g = t(78369),
                y = t(71538),
                N = t(57437),
                b = "Dialog",
                [h, D] = (0, l.b)(b),
                [O, j] = h(b),
                R = e => {
                    let {
                        __scopeDialog: n,
                        children: t,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: l,
                        modal: s = !0
                    } = e, c = r.useRef(null), d = r.useRef(null), [f = !1, p] = (0, a.T)({
                        prop: o,
                        defaultProp: i,
                        onChange: l
                    });
                    return (0, N.jsx)(O, {
                        scope: n,
                        triggerRef: c,
                        contentRef: d,
                        contentId: (0, u.M)(),
                        titleId: (0, u.M)(),
                        descriptionId: (0, u.M)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                        modal: s,
                        children: t
                    })
                };
            R.displayName = b;
            var x = "DialogTrigger",
                I = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, l = j(x, t), u = (0, i.e)(n, l.triggerRef);
                    return (0, N.jsx)(p.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": l.open,
                        "aria-controls": l.contentId,
                        "data-state": q(l.open),
                        ...r,
                        ref: u,
                        onClick: (0, o.M)(e.onClick, l.onOpenToggle)
                    })
                });
            I.displayName = x;
            var E = "DialogPortal",
                [M, C] = h(E, {
                    forceMount: void 0
                }),
                w = e => {
                    let {
                        __scopeDialog: n,
                        forceMount: t,
                        children: o,
                        container: i
                    } = e, l = j(E, n);
                    return (0, N.jsx)(M, {
                        scope: n,
                        forceMount: t,
                        children: r.Children.map(o, e => (0, N.jsx)(f.z, {
                            present: t || l.open,
                            children: (0, N.jsx)(d.h, {
                                asChild: !0,
                                container: i,
                                children: e
                            })
                        }))
                    })
                };
            w.displayName = E;
            var _ = "DialogOverlay",
                A = r.forwardRef((e, n) => {
                    let t = C(_, e.__scopeDialog),
                        {
                            forceMount: r = t.forceMount,
                            ...o
                        } = e,
                        i = j(_, e.__scopeDialog);
                    return i.modal ? (0, N.jsx)(f.z, {
                        present: r || i.open,
                        children: (0, N.jsx)(T, { ...o,
                            ref: n
                        })
                    }) : null
                });
            A.displayName = _;
            var T = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = j(_, t);
                    return (0, N.jsx)(m.Z, {
                        as: y.g7,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, N.jsx)(p.WV.div, {
                            "data-state": q(o.open),
                            ...r,
                            ref: n,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                P = "DialogContent",
                k = r.forwardRef((e, n) => {
                    let t = C(P, e.__scopeDialog),
                        {
                            forceMount: r = t.forceMount,
                            ...o
                        } = e,
                        i = j(P, e.__scopeDialog);
                    return (0, N.jsx)(f.z, {
                        present: r || i.open,
                        children: i.modal ? (0, N.jsx)(F, { ...o,
                            ref: n
                        }) : (0, N.jsx)(W, { ...o,
                            ref: n
                        })
                    })
                });
            k.displayName = P;
            var F = r.forwardRef((e, n) => {
                    let t = j(P, e.__scopeDialog),
                        l = r.useRef(null),
                        u = (0, i.e)(n, t.contentRef, l);
                    return r.useEffect(() => {
                        let e = l.current;
                        if (e) return (0, g.Ry)(e)
                    }, []), (0, N.jsx)(U, { ...e,
                        ref: u,
                        trapFocus: t.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, e => {
                            var n;
                            e.preventDefault(), null === (n = t.triggerRef.current) || void 0 === n || n.focus()
                        }),
                        onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, e => {
                            let n = e.detail.originalEvent,
                                t = 0 === n.button && !0 === n.ctrlKey;
                            (2 === n.button || t) && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                W = r.forwardRef((e, n) => {
                    let t = j(P, e.__scopeDialog),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, N.jsx)(U, { ...e,
                        ref: n,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: n => {
                            var r, l;
                            null === (r = e.onCloseAutoFocus) || void 0 === r || r.call(e, n), n.defaultPrevented || (o.current || null === (l = t.triggerRef.current) || void 0 === l || l.focus(), n.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: n => {
                            var r, l;
                            null === (r = e.onInteractOutside) || void 0 === r || r.call(e, n), n.defaultPrevented || (o.current = !0, "pointerdown" !== n.detail.originalEvent.type || (i.current = !0));
                            let u = n.target;
                            (null === (l = t.triggerRef.current) || void 0 === l ? void 0 : l.contains(u)) && n.preventDefault(), "focusin" === n.detail.originalEvent.type && i.current && n.preventDefault()
                        }
                    })
                }),
                U = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        trapFocus: o,
                        onOpenAutoFocus: l,
                        onCloseAutoFocus: u,
                        ...a
                    } = e, d = j(P, t), f = r.useRef(null), p = (0, i.e)(n, f);
                    return (0, v.EW)(), (0, N.jsxs)(N.Fragment, {
                        children: [(0, N.jsx)(c.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: l,
                            onUnmountAutoFocus: u,
                            children: (0, N.jsx)(s.XB, {
                                role: "dialog",
                                id: d.contentId,
                                "aria-describedby": d.descriptionId,
                                "aria-labelledby": d.titleId,
                                "data-state": q(d.open),
                                ...a,
                                ref: p,
                                onDismiss: () => d.onOpenChange(!1)
                            })
                        }), (0, N.jsxs)(N.Fragment, {
                            children: [(0, N.jsx)(Y, {
                                titleId: d.titleId
                            }), (0, N.jsx)(G, {
                                contentRef: f,
                                descriptionId: d.descriptionId
                            })]
                        })]
                    })
                }),
                V = "DialogTitle",
                S = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = j(V, t);
                    return (0, N.jsx)(p.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: n
                    })
                });
            S.displayName = V;
            var L = "DialogDescription",
                z = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, o = j(L, t);
                    return (0, N.jsx)(p.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: n
                    })
                });
            z.displayName = L;
            var B = "DialogClose",
                Z = r.forwardRef((e, n) => {
                    let {
                        __scopeDialog: t,
                        ...r
                    } = e, i = j(B, t);
                    return (0, N.jsx)(p.WV.button, {
                        type: "button",
                        ...r,
                        ref: n,
                        onClick: (0, o.M)(e.onClick, () => i.onOpenChange(!1))
                    })
                });

            function q(e) {
                return e ? "open" : "closed"
            }
            Z.displayName = B;
            var H = "DialogTitleWarning",
                [K, X] = (0, l.k)(H, {
                    contentName: P,
                    titleName: V,
                    docsSlug: "dialog"
                }),
                Y = e => {
                    let {
                        titleId: n
                    } = e, t = X(H), o = "`".concat(t.contentName, "` requires a `").concat(t.titleName, "` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(t.titleName, "`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(t.docsSlug);
                    return r.useEffect(() => {
                        n && !document.getElementById(n) && console.error(o)
                    }, [o, n]), null
                },
                G = e => {
                    let {
                        contentRef: n,
                        descriptionId: t
                    } = e, o = X("DialogDescriptionWarning"), i = "Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(o.contentName, "}.");
                    return r.useEffect(() => {
                        var e;
                        let r = null === (e = n.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby");
                        t && r && !document.getElementById(t) && console.warn(i)
                    }, [i, n, t]), null
                },
                J = R,
                Q = I,
                $ = w,
                ee = A,
                en = k,
                et = S,
                er = z,
                eo = Z
        },
        31383: function(e, n, t) {
            t.d(n, {
                z: function() {
                    return u
                }
            });
            var r = t(2265),
                o = t(54887),
                i = t(1584),
                l = t(1336),
                u = e => {
                    var n, t;
                    let u, s;
                    let {
                        present: c,
                        children: d
                    } = e, f = function(e) {
                        var n, t;
                        let [i, u] = r.useState(), s = r.useRef({}), c = r.useRef(e), d = r.useRef("none"), [f, p] = (n = e ? "mounted" : "unmounted", t = {
                            mounted: {
                                UNMOUNT: "unmounted",
                                ANIMATION_OUT: "unmountSuspended"
                            },
                            unmountSuspended: {
                                MOUNT: "mounted",
                                ANIMATION_END: "unmounted"
                            },
                            unmounted: {
                                MOUNT: "mounted"
                            }
                        }, r.useReducer((e, n) => {
                            let r = t[e][n];
                            return null != r ? r : e
                        }, n));
                        return r.useEffect(() => {
                            let e = a(s.current);
                            d.current = "mounted" === f ? e : "none"
                        }, [f]), (0, l.b)(() => {
                            let n = s.current,
                                t = c.current;
                            if (t !== e) {
                                let r = d.current,
                                    o = a(n);
                                e ? p("MOUNT") : "none" === o || (null == n ? void 0 : n.display) === "none" ? p("UNMOUNT") : t && r !== o ? p("ANIMATION_OUT") : p("UNMOUNT"), c.current = e
                            }
                        }, [e, p]), (0, l.b)(() => {
                            if (i) {
                                let e = e => {
                                        let n = a(s.current).includes(e.animationName);
                                        e.target === i && n && o.flushSync(() => p("ANIMATION_END"))
                                    },
                                    n = e => {
                                        e.target === i && (d.current = a(s.current))
                                    };
                                return i.addEventListener("animationstart", n), i.addEventListener("animationcancel", e), i.addEventListener("animationend", e), () => {
                                    i.removeEventListener("animationstart", n), i.removeEventListener("animationcancel", e), i.removeEventListener("animationend", e)
                                }
                            }
                            p("ANIMATION_END")
                        }, [i, p]), {
                            isPresent: ["mounted", "unmountSuspended"].includes(f),
                            ref: r.useCallback(e => {
                                e && (s.current = getComputedStyle(e)), u(e)
                            }, [])
                        }
                    }(c), p = "function" == typeof d ? d({
                        present: f.isPresent
                    }) : r.Children.only(d), v = (0, i.e)(f.ref, (u = null === (n = Object.getOwnPropertyDescriptor(p.props, "ref")) || void 0 === n ? void 0 : n.get) && "isReactWarning" in u && u.isReactWarning ? p.ref : (u = null === (t = Object.getOwnPropertyDescriptor(p, "ref")) || void 0 === t ? void 0 : t.get) && "isReactWarning" in u && u.isReactWarning ? p.props.ref : p.props.ref || p.ref);
                    return "function" == typeof d || f.isPresent ? r.cloneElement(p, {
                        ref: v
                    }) : null
                };

            function a(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            u.displayName = "Presence"
        },
        12218: function(e, n, t) {
            t.d(n, {
                j: function() {
                    return i
                }
            });
            let r = e => "boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e,
                o = function() {
                    for (var e, n, t = 0, r = ""; t < arguments.length;)(e = arguments[t++]) && (n = function e(n) {
                        var t, r, o = "";
                        if ("string" == typeof n || "number" == typeof n) o += n;
                        else if ("object" == typeof n) {
                            if (Array.isArray(n))
                                for (t = 0; t < n.length; t++) n[t] && (r = e(n[t])) && (o && (o += " "), o += r);
                            else
                                for (t in n) n[t] && (o && (o += " "), o += t)
                        }
                        return o
                    }(e)) && (r && (r += " "), r += n);
                    return r
                },
                i = (e, n) => t => {
                    var i;
                    if ((null == n ? void 0 : n.variants) == null) return o(e, null == t ? void 0 : t.class, null == t ? void 0 : t.className);
                    let {
                        variants: l,
                        defaultVariants: u
                    } = n, a = Object.keys(l).map(e => {
                        let n = null == t ? void 0 : t[e],
                            o = null == u ? void 0 : u[e];
                        if (null === n) return null;
                        let i = r(n) || r(o);
                        return l[e][i]
                    }), s = t && Object.entries(t).reduce((e, n) => {
                        let [t, r] = n;
                        return void 0 === r || (e[t] = r), e
                    }, {});
                    return o(e, a, null == n ? void 0 : null === (i = n.compoundVariants) || void 0 === i ? void 0 : i.reduce((e, n) => {
                        let {
                            class: t,
                            className: r,
                            ...o
                        } = n;
                        return Object.entries(o).every(e => {
                            let [n, t] = e;
                            return Array.isArray(t) ? t.includes({ ...u,
                                ...s
                            }[n]) : ({ ...u,
                                ...s
                            })[n] === t
                        }) ? [...e, t, r] : e
                    }, []), null == t ? void 0 : t.class, null == t ? void 0 : t.className)
                }
        }
    }
]);