(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [538], {
        20567: function(e, r, t) {
            Promise.resolve().then(t.bind(t, 82659)), Promise.resolve().then(t.bind(t, 8080)), Promise.resolve().then(t.bind(t, 94880))
        },
        8080: function(e, r, t) {
            "use strict";
            t.d(r, {
                default: function() {
                    return z
                }
            });
            var i = t(57437),
                n = t(2265),
                a = t(37213),
                s = t(37440);
            let l = e => {
                let {
                    shouldScaleBackground: r = !0,
                    ...t
                } = e;
                return (0, i.jsx)(a.d.Root, {
                    shouldScaleBackground: r,
                    ...t
                })
            };
            l.displayName = "Drawer";
            let o = a.d.Trigger,
                d = a.d.Portal,
                c = a.d.Close,
                u = n.forwardRef((e, r) => {
                    let {
                        className: t,
                        ...n
                    } = e;
                    return (0, i.jsx)(a.d.Overlay, {
                        ref: r,
                        className: (0, s.cn)("fixed inset-0 z-50 bg-black/80", t),
                        ...n
                    })
                });
            u.displayName = a.d.Overlay.displayName;
            let m = n.forwardRef((e, r) => {
                let {
                    className: t,
                    children: n,
                    ...l
                } = e;
                return (0, i.jsxs)(d, {
                    children: [(0, i.jsx)(u, {}), (0, i.jsxs)(a.d.Content, {
                        ref: r,
                        className: (0, s.cn)("fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background", t),
                        ...l,
                        children: [(0, i.jsx)("div", {
                            className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted"
                        }), n]
                    })]
                })
            });
            m.displayName = "DrawerContent";
            let f = e => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, i.jsx)("div", {
                    className: (0, s.cn)("grid gap-1.5 p-4 text-center sm:text-left", r),
                    ...t
                })
            };
            f.displayName = "DrawerHeader";
            let x = e => {
                let {
                    className: r,
                    ...t
                } = e;
                return (0, i.jsx)("div", {
                    className: (0, s.cn)("mt-auto flex flex-col gap-2 p-4", r),
                    ...t
                })
            };
            x.displayName = "DrawerFooter";
            let p = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)(a.d.Title, {
                    ref: r,
                    className: (0, s.cn)("text-lg font-semibold leading-none tracking-tight", t),
                    ...n
                })
            });
            p.displayName = a.d.Title.displayName;
            let g = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)(a.d.Description, {
                    ref: r,
                    className: (0, s.cn)("text-sm text-muted-foreground", t),
                    ...n
                })
            });
            g.displayName = a.d.Description.displayName;
            var h = t(32653),
                b = t(83102),
                j = t(59772),
                y = t(39343),
                N = t(31014),
                v = t(93146),
                w = t(69324),
                D = t(22468);
            let k = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)(w.fC, {
                    ref: r,
                    className: (0, s.cn)("peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", t),
                    ...n,
                    children: (0, i.jsx)(w.z$, {
                        className: (0, s.cn)("flex items-center justify-center text-current"),
                        children: (0, i.jsx)(D.Z, {
                            className: "h-4 w-4"
                        })
                    })
                })
            });
            k.displayName = w.fC.displayName;
            var F = t(88726),
                C = t(50495),
                R = t(17583),
                S = t(13476),
                I = t(96264);
            let T = [{
                id: "IMPROVEMENT",
                label: "Improvement \uD83D\uDC4D"
            }, {
                id: "INTEGRATION",
                label: "Integrations \uD83D\uDD17"
            }, {
                id: "STYLING",
                label: "Styling \uD83C\uDFA8"
            }, {
                id: "MISC",
                label: "Misc \uD83E\uDD37"
            }, {
                id: "BUG",
                label: "Bug Report \uD83D\uDC1B"
            }, {
                id: "FEATURE",
                label: "Feature Request \uD83D\uDE80"
            }];
            var z = () => {
                let [e, r] = (0, n.useState)(!1), t = j.Ry({
                    title: j.Z_().min(1, {
                        message: "Please write a short title"
                    }),
                    description: j.Z_().max(500, {
                        message: "Please write a description less than 500 characters"
                    }),
                    type: j.IX(j.Z_())
                }), a = (0, y.cI)({
                    resolver: (0, N.F)(t),
                    defaultValues: {
                        title: "",
                        description: "",
                        type: []
                    }
                });
                async function s(e) {
                    r(!0), console.log(e);
                    let t = await (0, I.k)("POST", "/api/feedback", e);
                    t.success ? (F.default.success(t.msg), a.reset()) : F.default.error(t.msg), r(!1)
                }
                return (0, i.jsxs)(l, {
                    direction: "right",
                    children: [(0, i.jsxs)(o, {
                        className: "group fixed bottom-5 right-5 flex h-12 items-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-3 text-white",
                        children: [(0, i.jsx)(R.Z, {
                            className: "h-6 w-6"
                        }), (0, i.jsxs)("span", {
                            className: "max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs",
                            children: [(0, i.jsx)("span", {
                                className: "pl-2"
                            }), "Feedback"]
                        })]
                    }), (0, i.jsxs)(m, {
                        className: "left-auto right-0 top-0 mt-0 h-screen max-w-[400px] sm:px-5",
                        children: [(0, i.jsxs)(f, {
                            children: [(0, i.jsx)(p, {
                                children: "Found a bug or need a feature to be added?"
                            }), (0, i.jsx)(g, {
                                children: "Let us know and we will do the same."
                            })]
                        }), (0, i.jsx)(h.l0, { ...a,
                            children: (0, i.jsxs)("form", {
                                onSubmit: a.handleSubmit(s),
                                className: "flex h-full flex-col p-4",
                                children: [(0, i.jsxs)("div", {
                                    className: "flex-1 space-y-6",
                                    children: [(0, i.jsx)(h.Wi, {
                                        control: a.control,
                                        name: "title",
                                        render: e => {
                                            let {
                                                field: r
                                            } = e;
                                            return (0, i.jsxs)(h.xJ, {
                                                children: [(0, i.jsx)(h.lX, {
                                                    htmlFor: "title",
                                                    children: "Title:"
                                                }), (0, i.jsx)(h.NI, {
                                                    children: (0, i.jsx)(b.I, {
                                                        type: "text",
                                                        id: "title",
                                                        placeholder: "Your problem or idea in a few words",
                                                        ...r
                                                    })
                                                }), (0, i.jsx)(h.zG, {})]
                                            })
                                        }
                                    }), (0, i.jsx)(h.Wi, {
                                        control: a.control,
                                        name: "description",
                                        render: e => {
                                            let {
                                                field: r
                                            } = e;
                                            return (0, i.jsxs)(h.xJ, {
                                                children: [(0, i.jsx)(h.lX, {
                                                    htmlFor: "description",
                                                    children: "Description:"
                                                }), (0, i.jsx)(h.NI, {
                                                    children: (0, i.jsx)(v.g, {
                                                        id: "description",
                                                        placeholder: "Why your Idea is useful, who would benefit and how it should work?",
                                                        ...r
                                                    })
                                                }), (0, i.jsx)(h.zG, {})]
                                            })
                                        }
                                    }), (0, i.jsx)(h.Wi, {
                                        control: a.control,
                                        name: "type",
                                        render: () => (0, i.jsxs)(h.xJ, {
                                            children: [(0, i.jsx)("div", {
                                                className: "mb-4",
                                                children: (0, i.jsx)("p", {
                                                    className: "text-sm font-medium dark:text-white",
                                                    children: "Choose up to 3 Topics for this Idea (optional)"
                                                })
                                            }), (0, i.jsx)("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: T.map(e => (0, i.jsx)(h.Wi, {
                                                    control: a.control,
                                                    name: "type",
                                                    render: r => {
                                                        var t;
                                                        let {
                                                            field: n
                                                        } = r;
                                                        return (0, i.jsx)(h.xJ, {
                                                            className: "flex w-max flex-row items-center space-x-3 space-y-0",
                                                            children: (0, i.jsx)(h.NI, {
                                                                children: (0, i.jsxs)("div", {
                                                                    children: [(0, i.jsx)(k, {
                                                                        checked: null === (t = n.value) || void 0 === t ? void 0 : t.includes(e.id),
                                                                        id: e.id,
                                                                        onCheckedChange: r => {
                                                                            if (r && a.getValues("type").length < 3) n.onChange([...n.value, e.id]);
                                                                            else {
                                                                                var t;
                                                                                n.onChange(null === (t = n.value) || void 0 === t ? void 0 : t.filter(r => r !== e.id))
                                                                            }
                                                                        },
                                                                        className: "hidden"
                                                                    }), (0, i.jsx)("label", {
                                                                        htmlFor: e.id,
                                                                        className: "cursor-pointer rounded-full border px-2 py-1 text-xs ".concat(a.getValues("type").includes(e.id) ? "border-primary text-primary" : "border-borderColour dark:border-borderColour-dark"),
                                                                        children: e.label
                                                                    })]
                                                                })
                                                            })
                                                        }, e.id)
                                                    }
                                                }, e.id))
                                            }), (0, i.jsx)(h.zG, {})]
                                        })
                                    })]
                                }), (0, i.jsx)(x, {
                                    children: (0, i.jsxs)("div", {
                                        className: "flex gap-3",
                                        children: [(0, i.jsx)(c, {
                                            asChild: !0,
                                            children: (0, i.jsx)(C.z, {
                                                type: "button",
                                                variant: "outline",
                                                className: "flex-1",
                                                size: "lg",
                                                children: "Cancel"
                                            })
                                        }), (0, i.jsxs)(C.z, {
                                            type: "submit",
                                            className: "flex-1",
                                            size: "lg",
                                            children: [e && (0, i.jsx)(S.Z, {
                                                className: "h-6 w-6 animate-spin stroke-white transition-colors duration-500"
                                            }), " ", "Submit"]
                                        })]
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        82659: function(e, r, t) {
            "use strict";
            var i = t(57437),
                n = t(59800),
                a = t(37440),
                s = t(99178),
                l = t(42873),
                o = t(89896),
                d = t(92513),
                c = t(98174),
                u = t(66648),
                m = t(87138),
                f = t(16463),
                x = t(2265),
                p = t(50495);
            r.default = () => {
                var e, r, t;
                let g = (0, f.usePathname)(),
                    h = (0, s.C)(e => e.user),
                    [b, j] = (0, x.useState)(!1);
                return (0, x.useEffect)(() => {
                    j(!1)
                }, [g]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: (0, a.cn)("fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-50", b ? "block" : "hidden"),
                        onClick: () => j(!1)
                    }), (0, i.jsxs)("div", {
                        className: (0, a.cn)("left-0 top-0 z-20 mr-0 flex w-[350px] flex-col p-5 max-lg:fixed max-lg:h-screen max-lg:bg-white max-lg:p-4 max-lg:transition-all max-lg:duration-300", b ? "translate-x-0" : "max-lg:-translate-x-full"),
                        children: [(0, i.jsx)(p.z, {
                            size: "icon",
                            variant: "secondary",
                            className: (0, a.cn)("absolute top-0 bg-background transition-all duration-300 lg:hidden", b ? "left-[85%]" : "left-full"),
                            onClick: () => j(!b),
                            children: (0, i.jsx)(l.Z, {})
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center gap-3 px-5 pt-5",
                            children: [(0, i.jsx)(u.default, {
                                src: (null === (e = h.data) || void 0 === e ? void 0 : e.image) || "/images/avatar.jpg",
                                width: 50,
                                height: 50,
                                alt: "Logo",
                                className: "rounded-full"
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)("h1", {
                                    className: "text-lg font-bold",
                                    children: null === (r = h.data) || void 0 === r ? void 0 : r.name
                                }), (0, i.jsxs)("p", {
                                    className: "font-bold text-muted-foreground text-sm",
                                    children: [(0, i.jsx)("span", {
                                        className: "font-normal",
                                        children: "Balance:"
                                    }), " ", null === (t = h.data) || void 0 === t ? void 0 : t.credits.balance, " credits"]
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mt-5 flex-1",
                            children: [n.zG.map((e, r) => (0, i.jsxs)(m.default, {
                                href: e.href,
                                className: (0, a.cn)("group flex items-center gap-4 rounded-full px-8 py-6 text-[#5F5F5F] transition-all", g === e.href ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white" : "hover:bg-muted hover:text-black"),
                                children: [(0, i.jsx)(e.icon, {
                                    className: "transition-transform group-hover:rotate-12"
                                }), (0, i.jsxs)("span", {
                                    children: [e.title, e.badge && (0, i.jsx)("span", {
                                        className: "ml-3 rounded-full bg-red-500 px-2 py-1.5 text-2xs text-white",
                                        children: e.badge
                                    })]
                                })]
                            }, r)), (0, i.jsxs)("button", {
                                className: (0, a.cn)("group flex w-full items-center gap-4 rounded-full px-8 py-6 text-[#5F5F5F] transition-all hover:bg-muted hover:text-black"),
                                onClick: () => {
                                    (0, c.w7)({
                                        callbackUrl: "/",
                                        redirect: !0
                                    })
                                },
                                children: [(0, i.jsx)(o.Z, {
                                    className: "transition-transform duration-300 group-hover:rotate-12"
                                }), (0, i.jsx)("span", {
                                    children: "Logout"
                                })]
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "mt-5 rounded-2xl bg-white px-5 py-8 text-center",
                            children: [(0, i.jsx)("h1", {
                                className: "text-2xl font-bold",
                                children: "Buy more credits"
                            }), (0, i.jsx)("p", {
                                className: "max mt-2 text-sm text-muted-foreground",
                                children: "Running out of credits? Buy more now to keep generating."
                            }), (0, i.jsx)(m.default, {
                                href: "/dashboard/credits",
                                children: (0, i.jsxs)(p.z, {
                                    className: "mt-3",
                                    size: "lg",
                                    children: [(0, i.jsx)(d.Z, {
                                        className: "h-6 w-6"
                                    }), "Buy Now"]
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        32653: function(e, r, t) {
            "use strict";
            t.d(r, {
                NI: function() {
                    return g
                },
                Wi: function() {
                    return u
                },
                l0: function() {
                    return d
                },
                lX: function() {
                    return p
                },
                pf: function() {
                    return h
                },
                xJ: function() {
                    return x
                },
                zG: function() {
                    return b
                }
            });
            var i = t(57437),
                n = t(2265),
                a = t(71538),
                s = t(39343),
                l = t(37440),
                o = t(67135);
            let d = s.RV,
                c = n.createContext({}),
                u = e => {
                    let { ...r
                    } = e;
                    return (0, i.jsx)(c.Provider, {
                        value: {
                            name: r.name
                        },
                        children: (0, i.jsx)(s.Qr, { ...r
                        })
                    })
                },
                m = () => {
                    let e = n.useContext(c),
                        r = n.useContext(f),
                        {
                            getFieldState: t,
                            formState: i
                        } = (0, s.Gc)(),
                        a = t(e.name, i);
                    if (!e) throw Error("useFormField should be used within <FormField>");
                    let {
                        id: l
                    } = r;
                    return {
                        id: l,
                        name: e.name,
                        formItemId: "".concat(l, "-form-item"),
                        formDescriptionId: "".concat(l, "-form-item-description"),
                        formMessageId: "".concat(l, "-form-item-message"),
                        ...a
                    }
                },
                f = n.createContext({}),
                x = n.forwardRef((e, r) => {
                    let {
                        className: t,
                        ...a
                    } = e, s = n.useId();
                    return (0, i.jsx)(f.Provider, {
                        value: {
                            id: s
                        },
                        children: (0, i.jsx)("div", {
                            ref: r,
                            className: (0, l.cn)("space-y-2", t),
                            ...a
                        })
                    })
                });
            x.displayName = "FormItem";
            let p = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e, {
                    error: a,
                    formItemId: s
                } = m();
                return (0, i.jsx)(o._, {
                    ref: r,
                    className: (0, l.cn)(a && "text-destructive", t),
                    htmlFor: s,
                    ...n
                })
            });
            p.displayName = "FormLabel";
            let g = n.forwardRef((e, r) => {
                let { ...t
                } = e, {
                    error: n,
                    formItemId: s,
                    formDescriptionId: l,
                    formMessageId: o
                } = m();
                return (0, i.jsx)(a.g7, {
                    ref: r,
                    id: s,
                    "aria-describedby": n ? "".concat(l, " ").concat(o) : "".concat(l),
                    "aria-invalid": !!n,
                    ...t
                })
            });
            g.displayName = "FormControl";
            let h = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e, {
                    formDescriptionId: a
                } = m();
                return (0, i.jsx)("p", {
                    ref: r,
                    id: a,
                    className: (0, l.cn)("text-sm text-muted-foreground", t),
                    ...n
                })
            });
            h.displayName = "FormDescription";
            let b = n.forwardRef((e, r) => {
                let {
                    className: t,
                    children: n,
                    ...a
                } = e, {
                    error: s,
                    formMessageId: o
                } = m(), d = s ? String(null == s ? void 0 : s.message) : n;
                return d ? (0, i.jsx)("p", {
                    ref: r,
                    id: o,
                    className: (0, l.cn)("text-sm font-medium text-destructive", t),
                    ...a,
                    children: d
                }) : null
            });
            b.displayName = "FormMessage"
        },
        83102: function(e, r, t) {
            "use strict";
            t.d(r, {
                I: function() {
                    return s
                }
            });
            var i = t(57437),
                n = t(2265),
                a = t(37440);
            let s = n.forwardRef((e, r) => {
                let {
                    className: t,
                    type: n,
                    ...s
                } = e;
                return (0, i.jsx)("input", {
                    type: n,
                    className: (0, a.cn)("flex h-12 w-full rounded-xl border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
                    ref: r,
                    ...s
                })
            });
            s.displayName = "Input"
        },
        67135: function(e, r, t) {
            "use strict";
            t.d(r, {
                _: function() {
                    return d
                }
            });
            var i = t(57437),
                n = t(2265),
                a = t(38364),
                s = t(12218),
                l = t(37440);
            let o = (0, s.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
                d = n.forwardRef((e, r) => {
                    let {
                        className: t,
                        ...n
                    } = e;
                    return (0, i.jsx)(a.f, {
                        ref: r,
                        className: (0, l.cn)(o(), t),
                        ...n
                    })
                });
            d.displayName = a.f.displayName
        },
        94880: function(e, r, t) {
            "use strict";
            t.d(r, {
                ScrollArea: function() {
                    return l
                }
            });
            var i = t(57437),
                n = t(2265),
                a = t(80023),
                s = t(37440);
            let l = n.forwardRef((e, r) => {
                let {
                    className: t,
                    children: n,
                    ...l
                } = e;
                return (0, i.jsxs)(a.fC, {
                    ref: r,
                    className: (0, s.cn)("relative overflow-hidden", t),
                    ...l,
                    children: [(0, i.jsx)(a.l_, {
                        className: "h-full w-full rounded-[inherit]",
                        children: n
                    }), (0, i.jsx)(o, {}), (0, i.jsx)(a.Ns, {})]
                })
            });
            l.displayName = a.fC.displayName;
            let o = n.forwardRef((e, r) => {
                let {
                    className: t,
                    orientation: n = "vertical",
                    ...l
                } = e;
                return (0, i.jsx)(a.gb, {
                    ref: r,
                    orientation: n,
                    className: (0, s.cn)("flex touch-none select-none transition-colors", "vertical" === n && "h-full w-2.5 border-l border-l-transparent p-[1px]", "horizontal" === n && "h-2.5 flex-col border-t border-t-transparent p-[1px]", t),
                    ...l,
                    children: (0, i.jsx)(a.q4, {
                        className: "relative flex-1 rounded-full bg-border"
                    })
                })
            });
            o.displayName = a.gb.displayName
        },
        93146: function(e, r, t) {
            "use strict";
            t.d(r, {
                g: function() {
                    return s
                }
            });
            var i = t(57437),
                n = t(2265),
                a = t(37440);
            let s = n.forwardRef((e, r) => {
                let {
                    className: t,
                    ...n
                } = e;
                return (0, i.jsx)("textarea", {
                    className: (0, a.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
                    ref: r,
                    ...n
                })
            });
            s.displayName = "Textarea"
        },
        59800: function(e, r, t) {
            "use strict";
            t.d(r, {
                Jo: function() {
                    return u
                },
                K3: function() {
                    return c
                },
                zG: function() {
                    return d
                }
            });
            var i = t(82695),
                n = t(24559),
                a = t(92940),
                s = t(96273),
                l = t(40121),
                o = t(24258);
            let d = [{
                    title: "Create CSV",
                    icon: n.Z,
                    href: "/dashboard"
                }, {
                    title: "Recent Tasks",
                    icon: a.Z,
                    href: "/dashboard/tasks"
                }, {
                    title: "Buy Credits",
                    icon: s.Z,
                    href: "/dashboard/credits",
                    badge: "Discounts"
                }, {
                    title: "Tutorials",
                    icon: l.Z,
                    href: "/dashboard/tutorials",
                    badge: "How to use"
                }, {
                    title: "Settings",
                    icon: o.Z,
                    href: "/dashboard/settings"
                }],
                c = [{
                    id: 1,
                    title: "AdobeStock",
                    color: "#FD4949",
                    icon: i.hd,
                    csvRequirements: {
                        structure: ["Filename", "Title", "Keywords", "Category"],
                        generate: ["Title", "Keywords", "Category"],
                        delimiter: ","
                    },
                    categories: [{
                        id: 1,
                        name: "Animals"
                    }, {
                        id: 2,
                        name: "Buildings and Architecture"
                    }, {
                        id: 3,
                        name: "Business"
                    }, {
                        id: 4,
                        name: "Drinks"
                    }, {
                        id: 5,
                        name: "The Environment"
                    }, {
                        id: 6,
                        name: "States of Mind"
                    }, {
                        id: 7,
                        name: "Food"
                    }, {
                        id: 8,
                        name: "Graphic Resources"
                    }, {
                        id: 9,
                        name: "Hobbies and Leisure"
                    }, {
                        id: 10,
                        name: "Industry"
                    }, {
                        id: 11,
                        name: "Landscape"
                    }, {
                        id: 12,
                        name: "Lifestyle"
                    }, {
                        id: 13,
                        name: "People"
                    }, {
                        id: 14,
                        name: "Plants and Flowers"
                    }, {
                        id: 15,
                        name: "Culture and Religion"
                    }, {
                        id: 16,
                        name: "Science"
                    }, {
                        id: 17,
                        name: "Social Issues"
                    }, {
                        id: 18,
                        name: "Sports"
                    }, {
                        id: 19,
                        name: "Technology"
                    }, {
                        id: 20,
                        name: "Transport"
                    }, {
                        id: 21,
                        name: "Travel"
                    }],
                    comingSoon: !1
                }, {
                    id: 2,
                    title: "Shutterstock",
                    color: "#FDB549",
                    icon: i.QQ,
                    csvRequirements: {
                        structure: ["Filename", "Description", "Keywords", "Categories"],
                        generate: ["Description", "Keywords", "Categories"],
                        delimiter: ","
                    },
                    categories: [{
                        id: 1,
                        name: "Abstract"
                    }, {
                        id: 2,
                        name: "Animals/Wildlife"
                    }, {
                        id: 3,
                        name: "Arts"
                    }, {
                        id: 4,
                        name: "Backgrounds/Textures"
                    }, {
                        id: 5,
                        name: "Beauty/Fashion"
                    }, {
                        id: 6,
                        name: "Buildings/Landmarks"
                    }, {
                        id: 7,
                        name: "Business/Finance"
                    }, {
                        id: 8,
                        name: "Celebrities"
                    }, {
                        id: 9,
                        name: "Education"
                    }, {
                        id: 10,
                        name: "Food and Drink"
                    }, {
                        id: 11,
                        name: "Healthcare/Medical"
                    }, {
                        id: 12,
                        name: "Holidays"
                    }, {
                        id: 13,
                        name: "Industrial"
                    }, {
                        id: 14,
                        name: "Interiors"
                    }, {
                        id: 15,
                        name: "Miscellaneous"
                    }, {
                        id: 16,
                        name: "Nature"
                    }, {
                        id: 17,
                        name: "Objects"
                    }, {
                        id: 18,
                        name: "Parks/Outdoor"
                    }, {
                        id: 19,
                        name: "People"
                    }, {
                        id: 20,
                        name: "Religion"
                    }, {
                        id: 21,
                        name: "Science"
                    }, {
                        id: 22,
                        name: "Signs/Symbols"
                    }, {
                        id: 23,
                        name: "Sports/Recreation"
                    }, {
                        id: 24,
                        name: "Technology"
                    }, {
                        id: 25,
                        name: "Transportation"
                    }, {
                        id: 26,
                        name: "Vintage"
                    }],
                    comingSoon: !1
                }, {
                    id: 3,
                    title: "Freepik",
                    color: "#83FD49",
                    icon: i.FQ,
                    csvRequirements: {
                        structure: ["File name", "Title", "Keywords", "Prompt", "Model"],
                        generate: ["Title", "Keywords"],
                        delimiter: ";"
                    },
                    models: ["Adobe Firefly", "Dall-e 1", "Dall-e 2", "Dall-e 3", "Freepik Pikaso", "Ideogram 1.0", "Leonardo", "Midjourney 1", "Midjourney 2", "Midjourney 3", "Midjourney 4", "Midjourney 5", "Midjourney 5.1", "Midjourney 5.2", "Midjourney 6", "Stable Diffusion 1.4", "Stable Diffusion 1.5", "Stable Diffusion 2.0", "Stable Diffusion 2.1", "Stable Diffusion XL", "Wepik"],
                    comingSoon: !1
                }, {
                    id: 4,
                    title: "Vecteezy",
                    color: "#49fddd",
                    icon: i.wT,
                    csvRequirements: {
                        structure: ["Filename", "Title", "Description", "Keywords"],
                        generate: ["Title", "Description", "Keywords"],
                        delimiter: ","
                    },
                    comingSoon: !1
                }, {
                    id: 5,
                    title: "123rf",
                    color: "#6D49FD",
                    icon: i.FQ,
                    csvRequirements: {
                        structure: ["Filename", "Title", "Description", "Keywords"],
                        generate: ["Title", "Description", "Keywords"],
                        delimiter: ","
                    },
                    comingSoon: !0
                }, {
                    id: 6,
                    title: "Dreamstime",
                    color: "#FD49C0",
                    icon: i.RQ,
                    csvRequirements: {
                        structure: ["Filename", "Image Name", "Description", "Category 1", "Category 2", "Category 3", "Keywords"],
                        generate: ["Image Name", "Description", "keywords"],
                        delimiter: ","
                    },
                    comingSoon: !0
                }, {
                    id: 7,
                    title: "Motion Element",
                    color: "#DD4FC3",
                    icon: i.RQ,
                    csvRequirements: {
                        structure: ["Filename", "Image Name", "Description", "Category 1", "Category 2", "Category 3", "Keywords"],
                        generate: ["Image Name", "Description", "keywords"],
                        delimiter: ","
                    },
                    comingSoon: !0
                }],
                u = [{
                    id: 1,
                    title: "JPG",
                    type: "image/jpeg",
                    color: "#00d8d6"
                }, {
                    id: 2,
                    title: "PNG",
                    type: "image/png",
                    color: "#7d5fff"
                }]
        },
        99178: function(e, r, t) {
            "use strict";
            t.d(r, {
                C: function() {
                    return a
                },
                T: function() {
                    return n
                }
            });
            var i = t(11444);
            let n = i.I0,
                a = i.v9
        }
    },
    function(e) {
        e.O(0, [726, 472, 5, 149, 231, 561, 444, 336, 173, 3, 692, 971, 23, 744], function() {
            return e(e.s = 20567)
        }), _N_E = e.O()
    }
]);