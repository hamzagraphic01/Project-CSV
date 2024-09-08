(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [543], {
        38138: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 65809))
        },
        65809: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return ee
                }
            });
            var s = a(57437),
                r = a(78395),
                i = a(59800),
                l = a(96264),
                n = a(37440),
                d = a(84074),
                o = a(99178),
                c = a(2265),
                m = a(88726),
                u = a(50495),
                f = a(90837),
                x = a(46294),
                p = a(6649),
                g = a(59061),
                h = a(74697),
                v = a(66648),
                y = a(83102),
                j = a(12218),
                b = a(71935),
                N = a(42421),
                w = a(22468),
                C = a(91773),
                k = a(48484);
            let S = c.forwardRef((e, t) => {
                let {
                    className: a,
                    orientation: r = "horizontal",
                    decorative: i = !0,
                    ...l
                } = e;
                return (0, s.jsx)(k.f, {
                    ref: t,
                    decorative: i,
                    orientation: r,
                    className: (0, n.cn)("shrink-0 bg-border", "horizontal" === r ? "h-[1px] w-full" : "h-full w-[1px]", a),
                    ...l
                })
            });
            S.displayName = k.f.displayName;
            var D = a(94693),
                z = a(61485);
            let F = z.fC,
                R = z.xz,
                I = c.forwardRef((e, t) => {
                    let {
                        className: a,
                        align: r = "center",
                        sideOffset: i = 4,
                        ...l
                    } = e;
                    return (0, s.jsx)(z.h_, {
                        children: (0, s.jsx)(z.VY, {
                            ref: t,
                            align: r,
                            sideOffset: i,
                            className: (0, n.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", a),
                            ...l
                        })
                    })
                });
            I.displayName = z.VY.displayName;
            var K = a(36643),
                T = a(54817);
            let Z = c.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(K.mY, {
                    ref: t,
                    className: (0, n.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground", a),
                    ...r
                })
            });
            Z.displayName = K.mY.displayName;
            let M = c.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsxs)("div", {
                    className: "flex items-center border-b px-3",
                    "cmdk-input-wrapper": "",
                    children: [(0, s.jsx)(T.Z, {
                        className: "mr-2 h-4 w-4 shrink-0 opacity-50"
                    }), (0, s.jsx)(K.mY.Input, {
                        ref: t,
                        className: (0, n.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50", a),
                        ...r
                    })]
                })
            });
            M.displayName = K.mY.Input.displayName;
            let A = c.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(K.mY.List, {
                    ref: t,
                    className: (0, n.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden", a),
                    ...r
                })
            });
            A.displayName = K.mY.List.displayName;
            let P = c.forwardRef((e, t) => (0, s.jsx)(K.mY.Empty, {
                ref: t,
                className: "py-6 text-center text-sm",
                ...e
            }));
            P.displayName = K.mY.Empty.displayName;
            let E = c.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(K.mY.Group, {
                    ref: t,
                    className: (0, n.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground", a),
                    ...r
                })
            });
            E.displayName = K.mY.Group.displayName;
            let V = c.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(K.mY.Separator, {
                    ref: t,
                    className: (0, n.cn)("-mx-1 h-px bg-border", a),
                    ...r
                })
            });
            V.displayName = K.mY.Separator.displayName;
            let Y = c.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(K.mY.Item, {
                    ref: t,
                    className: (0, n.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50", a),
                    ...r
                })
            });
            Y.displayName = K.mY.Item.displayName;
            let _ = (0, j.j)("m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300", {
                    variants: {
                        variant: {
                            default: "border-foreground/10 text-foreground bg-card hover:bg-card/80",
                            secondary: "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
                            destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                            inverted: "inverted"
                        }
                    },
                    defaultVariants: {
                        variant: "default"
                    }
                }),
                G = c.forwardRef((e, t) => {
                    let {
                        options: a,
                        onValueChange: r,
                        variant: i,
                        defaultValue: l = [],
                        placeholder: d = "Select options",
                        animation: o = 0,
                        maxCount: m = 3,
                        modalPopover: f = !1,
                        asChild: x = !1,
                        className: p,
                        ...g
                    } = e, [v, y] = c.useState(l), [j, k] = c.useState(!1), [z, K] = c.useState(!1);
                    c.useEffect(() => {
                        JSON.stringify(v) !== JSON.stringify(l) && y(v)
                    }, [l, v]);
                    let T = e => {
                            let t = v.includes(e);
                            if (m === v.length + 1 && !t) return;
                            let a = v.includes(e) ? v.filter(t => t !== e) : [...v, e];
                            y(a), r(a)
                        },
                        G = () => {
                            y([]), r([])
                        };
                    return (0, s.jsxs)(F, {
                        open: j,
                        onOpenChange: k,
                        modal: f,
                        children: [(0, s.jsx)(R, {
                            asChild: !0,
                            children: (0, s.jsx)(u.z, {
                                ref: t,
                                ...g,
                                variant: "ghost",
                                onClick: () => {
                                    k(e => !e)
                                },
                                className: (0, n.cn)("flex h-auto min-h-12 w-full items-center justify-between rounded-md border bg-inherit p-1 hover:bg-inherit", p),
                                children: v.length > 0 ? (0, s.jsxs)("div", {
                                    className: "flex w-full items-center justify-between",
                                    children: [(0, s.jsx)("div", {
                                        className: "flex flex-wrap items-center",
                                        children: v.map(e => {
                                            let t = a.find(t => t.value === e),
                                                r = null == t ? void 0 : t.icon;
                                            return (0, s.jsxs)(D.C, {
                                                className: (0, n.cn)(z ? "animate-bounce" : "", _({
                                                    variant: i
                                                })),
                                                style: {
                                                    animationDuration: "".concat(o, "s")
                                                },
                                                children: [r && (0, s.jsx)(r, {
                                                    className: "mr-2 h-4 w-4"
                                                }), null == t ? void 0 : t.label, (0, s.jsx)(b.Z, {
                                                    className: "ml-2 h-4 w-4 cursor-pointer",
                                                    onClick: t => {
                                                        t.stopPropagation(), T(e)
                                                    }
                                                })]
                                            }, e)
                                        })
                                    }), (0, s.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, s.jsx)(h.Z, {
                                            className: "mx-2 h-4 cursor-pointer text-muted-foreground",
                                            onClick: e => {
                                                e.stopPropagation(), G()
                                            }
                                        }), (0, s.jsx)(S, {
                                            orientation: "vertical",
                                            className: "flex h-full min-h-6"
                                        }), (0, s.jsx)(N.Z, {
                                            className: "mx-2 h-4 cursor-pointer text-muted-foreground"
                                        })]
                                    })]
                                }) : (0, s.jsxs)("div", {
                                    className: "mx-auto flex w-full items-center justify-between",
                                    children: [(0, s.jsx)("span", {
                                        className: "mx-3 text-sm text-muted-foreground",
                                        children: d
                                    }), (0, s.jsx)(N.Z, {
                                        className: "mx-2 h-4 cursor-pointer text-muted-foreground"
                                    })]
                                })
                            })
                        }), (0, s.jsx)(I, {
                            className: "w-auto p-0",
                            align: "start",
                            onEscapeKeyDown: () => k(!1),
                            children: (0, s.jsxs)(Z, {
                                children: [(0, s.jsx)(M, {
                                    placeholder: "Search...",
                                    onKeyDown: e => {
                                        if ("Enter" === e.key) k(!0);
                                        else if ("Backspace" === e.key && !e.currentTarget.value) {
                                            let e = [...v];
                                            e.pop(), y(e), r(e)
                                        }
                                    }
                                }), (0, s.jsxs)(A, {
                                    children: [(0, s.jsx)(P, {
                                        children: "No results found."
                                    }), (0, s.jsxs)(E, {
                                        children: [(0, s.jsxs)(Y, {
                                            onSelect: () => {
                                                if (v.length === a.length) G();
                                                else {
                                                    let e = a.map(e => e.value);
                                                    y(e), r(e)
                                                }
                                            },
                                            className: "cursor-pointer",
                                            children: [(0, s.jsx)("div", {
                                                className: (0, n.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", v.length === a.length ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"),
                                                children: (0, s.jsx)(w.Z, {
                                                    className: "h-4 w-4"
                                                })
                                            }), (0, s.jsx)("span", {
                                                children: "(Select All)"
                                            })]
                                        }, "all"), a.map(e => {
                                            let t = v.includes(e.value);
                                            return (0, s.jsxs)(Y, {
                                                onSelect: () => T(e.value),
                                                className: "cursor-pointer",
                                                children: [(0, s.jsx)("div", {
                                                    className: (0, n.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary", t ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible"),
                                                    children: (0, s.jsx)(w.Z, {
                                                        className: "h-4 w-4"
                                                    })
                                                }), e.icon && (0, s.jsx)(e.icon, {
                                                    className: "mr-2 h-4 w-4 text-muted-foreground"
                                                }), (0, s.jsx)("span", {
                                                    children: e.label
                                                })]
                                            }, e.value)
                                        })]
                                    }), (0, s.jsx)(V, {}), (0, s.jsx)(E, {
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center justify-between",
                                            children: [v.length > 0 && (0, s.jsxs)(s.Fragment, {
                                                children: [(0, s.jsx)(Y, {
                                                    onSelect: G,
                                                    className: "flex-1 cursor-pointer justify-center",
                                                    children: "Clear"
                                                }), (0, s.jsx)(S, {
                                                    orientation: "vertical",
                                                    className: "flex h-full min-h-6"
                                                })]
                                            }), (0, s.jsx)(Y, {
                                                onSelect: () => k(!1),
                                                className: "max-w-full flex-1 cursor-pointer justify-center",
                                                children: "Close"
                                            })]
                                        })
                                    })]
                                })]
                            })
                        }), o > 0 && v.length > 0 && (0, s.jsx)(C.Z, {
                            className: (0, n.cn)("my-2 h-3 w-3 cursor-pointer bg-background text-foreground", z ? "" : "text-muted-foreground"),
                            onClick: () => K(!z)
                        })]
                    })
                });
            G.displayName = "MultiSelect";
            var q = a(93146),
                B = e => {
                    var t, a, r, i, l, d, o, m, j, b, N, w, C, k, S, D, z, F, R, I, K, T, Z, M, A, P, E, V, Y, _, B, O, L, Q, H;
                    let {
                        file: J,
                        postData: $,
                        setPostData: U,
                        generator: W
                    } = e, [X, ee] = (0, c.useState)(J), [et, ea] = (0, c.useState)(""), es = e => {
                        U(t => ({ ...t,
                            files: t.files.filter(t => t.id !== e)
                        }))
                    };
                    return (0, s.jsxs)("li", {
                        className: "group relative flex flex-col items-start gap-4 rounded-lg bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md md:flex-row md:items-center",
                        children: [(0, s.jsx)(v.default, {
                            src: J.url ? J.url : J.thumbnail,
                            alt: J.title,
                            width: 200,
                            height: 200,
                            className: (0, n.cn)("rounded-lg object-cover shadow-sm", J.metadata.status ? "h-32 w-full md:w-32" : "h-16 w-full md:w-16")
                        }), (0, s.jsx)("div", {
                            className: "w-full flex-grow space-y-2 2xl:pr-20",
                            children: (null === (t = J.metadata) || void 0 === t ? void 0 : t.status) === null ? (0, s.jsx)("span", {
                                className: "block text-sm font-medium text-gray-700",
                                children: "Processing..."
                            }) : (null === (a = J.metadata) || void 0 === a ? void 0 : a.status) ? (0, s.jsxs)(s.Fragment, {
                                children: [((null === (r = J.metadata) || void 0 === r ? void 0 : r.Title) || (null === (i = J.metadata) || void 0 === i ? void 0 : i["Image Name"]) || (null === (l = J.metadata) || void 0 === l ? void 0 : l.Description)) && (0, s.jsx)("span", {
                                    className: "line-clamp-1 block text-lg font-semibold text-gray-700",
                                    children: (0, n.aS)((null === (d = J.metadata) || void 0 === d ? void 0 : d.Title) || (null === (o = J.metadata) || void 0 === o ? void 0 : o["Image Name"]) || (null === (m = J.metadata) || void 0 === m ? void 0 : m.Description) || "", 50)
                                }), (null === (j = J.metadata) || void 0 === j ? void 0 : j.Keywords) && (0, s.jsx)("div", {
                                    className: "flex flex-wrap gap-1 text-2xs text-gray-500",
                                    children: null === (b = J.metadata) || void 0 === b ? void 0 : b.Keywords.map(e => (0, s.jsx)("span", {
                                        className: "rounded-full bg-purple-500 px-2 py-0.5 text-white",
                                        children: e
                                    }, e))
                                }), (null === (N = J.metadata) || void 0 === N ? void 0 : N.Category) && (0, s.jsxs)("div", {
                                    className: "text-xs text-gray-500",
                                    children: ["Category:", " ", null == W ? void 0 : null === (C = W.categories) || void 0 === C ? void 0 : null === (w = C.find(e => {
                                        var t;
                                        return e.id === (null === (t = J.metadata) || void 0 === t ? void 0 : t.Category)
                                    })) || void 0 === w ? void 0 : w.name]
                                }), (null === (k = J.metadata) || void 0 === k ? void 0 : k.Categories) && (0, s.jsxs)("div", {
                                    className: "flex flex-wrap items-center gap-2",
                                    children: [(0, s.jsx)("span", {
                                        className: "text-sm font-medium",
                                        children: "Categories:"
                                    }), null === (S = J.metadata) || void 0 === S ? void 0 : S.Categories.map(e => {
                                        var t, a;
                                        return (0, s.jsx)("span", {
                                            className: "rounded-full bg-purple-500 px-2 py-0.5 text-white",
                                            children: null === (a = W.categories) || void 0 === a ? void 0 : null === (t = a.find(t => t.id === e)) || void 0 === t ? void 0 : t.name
                                        }, e)
                                    })]
                                }), (null === (D = J.metadata) || void 0 === D ? void 0 : D.Model) && (0, s.jsxs)("div", {
                                    className: "text-xs text-gray-500",
                                    children: ["Model: ", null === (z = J.metadata) || void 0 === z ? void 0 : z.Model]
                                })]
                            }) : (0, s.jsx)("span", {
                                className: "block text-sm font-medium text-red-500",
                                children: "Error processing file"
                            })
                        }), (0, s.jsxs)("div", {
                            className: "absolute right-4 top-4 flex gap-2",
                            children: [(0, s.jsxs)(f.Vq, {
                                children: [(0, s.jsx)(f.hg, {
                                    asChild: !0,
                                    children: (0, s.jsx)(u.z, {
                                        size: "icon-sm",
                                        variant: "secondary",
                                        className: "rounded-full",
                                        "aria-label": "Edit file",
                                        onClick: () => {
                                            ea(J.metadata.Keywords.join(", ")), ee(J)
                                        },
                                        children: (0, s.jsx)(p.Z, {
                                            size: 16
                                        })
                                    })
                                }), (0, s.jsxs)(f.cZ, {
                                    className: "max-w-2xl",
                                    children: [(0, s.jsx)(f.fK, {
                                        children: (0, s.jsx)(f.$N, {
                                            children: "Edit File Details"
                                        })
                                    }), ((null === (F = J.metadata) || void 0 === F ? void 0 : F.Title) || (null === (R = J.metadata) || void 0 === R ? void 0 : R["Image Name"]) || W.csvRequirements.structure.includes("Title") || W.csvRequirements.structure.includes("Image Name")) && (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("label", {
                                            className: "mb-1 text-xs font-bold",
                                            htmlFor: "title",
                                            children: "Title:"
                                        }), (0, s.jsx)(y.I, {
                                            id: "title",
                                            placeholder: "Title",
                                            value: (null === (I = X.metadata) || void 0 === I ? void 0 : I.Title) || (null === (K = X.metadata) || void 0 === K ? void 0 : K["Image Name"]) || "",
                                            onChange: e => {
                                                ee(t => {
                                                    var a;
                                                    return { ...t,
                                                        metadata: { ...t.metadata,
                                                            ...(null === (a = J.metadata) || void 0 === a ? void 0 : a.Title) ? {
                                                                Title: e.target.value
                                                            } : {
                                                                "Image Name": e.target.value
                                                            }
                                                        }
                                                    }
                                                })
                                            }
                                        })]
                                    }), ((null === (T = J.metadata) || void 0 === T ? void 0 : T.Description) || W.csvRequirements.structure.includes("Description")) && (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("label", {
                                            className: "mb-1 text-xs font-bold",
                                            htmlFor: "description",
                                            children: "Description:"
                                        }), (0, s.jsx)(q.g, {
                                            id: "description",
                                            placeholder: "Description",
                                            value: (null === (Z = X.metadata) || void 0 === Z ? void 0 : Z.Description) || "",
                                            onChange: e => {
                                                ee(t => ({ ...t,
                                                    metadata: { ...t.metadata,
                                                        Description: e.target.value
                                                    }
                                                }))
                                            }
                                        })]
                                    }), ((null === (M = J.metadata) || void 0 === M ? void 0 : M.Keywords) || W.csvRequirements.structure.includes("Keywords")) && (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("label", {
                                            className: "mb-1 text-xs font-bold",
                                            htmlFor: "keywords",
                                            children: "Keywords:"
                                        }), (0, s.jsx)(q.g, {
                                            id: "keywords",
                                            placeholder: "Keywords",
                                            value: et,
                                            onChange: e => {
                                                let t = e.target.value;
                                                ea(t);
                                                let a = t.split(",").map(e => e.trim());
                                                a = a.filter(e => "" !== e), ee(e => ({ ...e,
                                                    metadata: { ...e.metadata,
                                                        Keywords: a
                                                    }
                                                }))
                                            }
                                        })]
                                    }), ((null === (A = J.metadata) || void 0 === A ? void 0 : A.Category) || W.csvRequirements.structure.includes("Category")) && (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("label", {
                                            className: "mb-1 text-xs font-bold",
                                            htmlFor: "category",
                                            children: "Category:"
                                        }), (0, s.jsxs)(x.Ph, {
                                            defaultValue: (null === (P = X.metadata) || void 0 === P ? void 0 : P.Category) ? null === (E = X.metadata) || void 0 === E ? void 0 : E.Category.toString() : "1",
                                            onValueChange: e => ee(t => ({ ...t,
                                                metadata: { ...t.metadata,
                                                    Category: parseInt(e)
                                                }
                                            })),
                                            children: [(0, s.jsx)(x.i4, {
                                                className: "",
                                                children: (0, s.jsx)(x.ki, {
                                                    placeholder: "Category"
                                                })
                                            }), (0, s.jsx)(x.Bw, {
                                                children: null == W ? void 0 : null === (V = W.categories) || void 0 === V ? void 0 : V.map(e => (0, s.jsx)(x.Ql, {
                                                    value: e.id.toString(),
                                                    children: e.name
                                                }, e.id))
                                            })]
                                        })]
                                    }), ((null === (Y = J.metadata) || void 0 === Y ? void 0 : Y.Categories) || W.csvRequirements.structure.includes("Categories")) && (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("label", {
                                            className: "mb-1 text-xs font-bold",
                                            htmlFor: "categories",
                                            children: "Categories:"
                                        }), (0, s.jsx)(G, {
                                            options: W && W.categories ? null == W ? void 0 : W.categories.map(e => ({
                                                value: e.id.toString(),
                                                label: e.name
                                            })) : [],
                                            defaultValue: (null === (_ = X.metadata) || void 0 === _ ? void 0 : _.Categories) ? null === (B = X.metadata) || void 0 === B ? void 0 : B.Categories.map(e => (null == e ? void 0 : e.toString()) || "") : [],
                                            onValueChange: e => ee(t => ({ ...t,
                                                metadata: { ...t.metadata,
                                                    Categories: e.map(e => parseInt(e))
                                                }
                                            })),
                                            variant: "secondary"
                                        })]
                                    }), ((null === (O = J.metadata) || void 0 === O ? void 0 : O.Model) || W.csvRequirements.structure.includes("Model")) && (0, s.jsxs)("div", {
                                        children: [(0, s.jsx)("label", {
                                            className: "mb-1 text-xs font-bold",
                                            htmlFor: "category",
                                            children: "Model:"
                                        }), (0, s.jsxs)(x.Ph, {
                                            defaultValue: (null === (L = X.metadata) || void 0 === L ? void 0 : L.Model) ? null === (Q = X.metadata) || void 0 === Q ? void 0 : Q.Model.toString() : "",
                                            onValueChange: e => ee(t => ({ ...t,
                                                metadata: { ...t.metadata,
                                                    Model: e
                                                }
                                            })),
                                            children: [(0, s.jsx)(x.i4, {
                                                className: "",
                                                children: (0, s.jsx)(x.ki, {
                                                    placeholder: "Model"
                                                })
                                            }), (0, s.jsx)(x.Bw, {
                                                children: null == W ? void 0 : null === (H = W.models) || void 0 === H ? void 0 : H.map(e => (0, s.jsx)(x.Ql, {
                                                    value: e,
                                                    children: e
                                                }, e))
                                            })]
                                        })]
                                    }), (0, s.jsx)(f.GG, {
                                        asChild: !0,
                                        children: (0, s.jsxs)(u.z, {
                                            size: "lg",
                                            className: "mt-4",
                                            onClick: () => {
                                                let e = { ...X,
                                                    metadata: { ...X.metadata,
                                                        status: !0
                                                    }
                                                };
                                                U(t => ({ ...t,
                                                    files: t.files.map(t => t.id === (null == X ? void 0 : X.id) ? e : t)
                                                }))
                                            },
                                            children: [(0, s.jsx)(g.Z, {
                                                size: 16
                                            }), "Save"]
                                        })
                                    })]
                                })]
                            }), (0, s.jsx)(u.z, {
                                size: "icon-sm",
                                variant: "destructive",
                                className: "rounded-full",
                                "aria-label": "Delete file",
                                onClick: () => es(J.id),
                                children: (0, s.jsx)(h.Z, {
                                    size: 16
                                })
                            })]
                        })]
                    }, J.id)
                },
                O = a(82695),
                L = e => {
                    var t, a, l, d, c, m, u, f;
                    let {
                        postData: x,
                        setPostData: p
                    } = e, g = (0, o.C)(e => e.user);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: "relative flex justify-between text-lg font-medium text-muted-foreground",
                            children: (0, s.jsx)("p", {
                                children: "Choose a generator to get started"
                            })
                        }), (0, s.jsx)("div", {
                            className: "mt-8 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5",
                            children: i.K3.map((e, t) => (0, s.jsxs)("div", {
                                className: (0, n.cn)("relative flex cursor-pointer flex-col items-center justify-center gap-5 rounded-2xl bg-muted p-5", x.generatorId === e.id && !e.comingSoon && "bg-gradient-to-r from-blue-500 to-purple-500 text-white", e.comingSoon && "cursor-not-allowed opacity-70"),
                                onClick: () => !e.comingSoon && p({ ...x,
                                    generatorId: e.id
                                }),
                                children: [(0, s.jsxs)("div", {
                                    className: "relative",
                                    style: {
                                        color: e.color
                                    },
                                    children: [(0, s.jsx)(O.$B, {}), (0, s.jsx)(e.icon, {
                                        className: "absolute -bottom-2 -right-2"
                                    })]
                                }), (0, s.jsx)("p", {
                                    className: "font-medium",
                                    children: e.title
                                }), e.comingSoon && (0, s.jsx)("div", {
                                    className: "absolute inset-0 flex items-center justify-center rounded-2xl bg-black bg-opacity-50",
                                    children: (0, s.jsx)("span", {
                                        className: "text-lg font-bold text-white",
                                        children: "Coming Soon"
                                    })
                                })]
                            }, t))
                        }), (null === (t = i.K3.find(e => e.id === x.generatorId)) || void 0 === t ? void 0 : t.csvRequirements.structure.includes("Keywords")) && (0, s.jsxs)("div", {
                            className: "mt-5",
                            children: [(0, s.jsx)("label", {
                                htmlFor: "numKeywords",
                                className: "text-sm text-muted-foreground",
                                children: "Number of keywords: (max 50)"
                            }), (0, s.jsx)(y.I, {
                                type: "number",
                                id: "numKeywords",
                                min: 1,
                                max: 50,
                                value: x.numKeywords,
                                onChange: e => p({ ...x,
                                    numKeywords: parseInt(e.target.value) > 50 ? 50 : parseInt(e.target.value)
                                }),
                                className: "mt-1"
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "mt-5 flex flex-col justify-between rounded-xl  text-lg text-muted-foreground",
                            children: [(0, s.jsxs)("p", {
                                children: ["Own Api:", " ", (null === (a = g.data) || void 0 === a ? void 0 : a.geminiApiKey) && g.data.openAiApiKey ? g.data.preferredApi : (null == g ? void 0 : null === (l = g.data) || void 0 === l ? void 0 : l.geminiApiKey) ? "Yes (Gemini)" : (null === (d = g.data) || void 0 === d ? void 0 : d.openAiApiKey) ? "Yes (OpenAI)" : "No"]
                            }), (0, s.jsxs)("p", {
                                children: ["Vision: ", (null === (c = g.data) || void 0 === c ? void 0 : c.useAiVision) ? "Enabled" : "Disabled"]
                            }), (0, s.jsxs)("p", {
                                children: ["Credits:", " ", (null === (m = g.data) || void 0 === m ? void 0 : m.geminiApiKey) || (null == g ? void 0 : null === (u = g.data) || void 0 === u ? void 0 : u.openAiApiKey) ? r.eL : (null === (f = g.data) || void 0 === f ? void 0 : f.useAiVision) ? r.xG : r.ot, "/image"]
                            })]
                        })]
                    })
                },
                Q = a(38746),
                H = a(58184),
                J = a(99913),
                $ = a(62561),
                U = a(57497),
                W = e => {
                    let {
                        postData: t,
                        setPostData: a
                    } = e, [r, i] = (0, c.useState)("list"), [l, d] = (0, c.useState)(null), [o, m] = (0, c.useState)(""), f = e => {
                        a(t => ({ ...t,
                            files: t.files.filter(t => t.id !== e)
                        }))
                    }, x = (e, t) => {
                        d(e), m(t)
                    }, p = e => {
                        a(t => ({ ...t,
                            files: t.files.map(t => t.id === e ? { ...t,
                                title: o
                            } : t)
                        })), d(null)
                    }, g = e => l === e.id ? (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, s.jsx)(y.I, {
                            type: "text",
                            value: o,
                            onChange: e => m(e.target.value),
                            className: "mr-2 max-w-80"
                        }), (0, s.jsx)(u.z, {
                            size: "icon",
                            variant: "secondary",
                            onClick: () => p(e.id),
                            "aria-label": "Save title",
                            children: (0, s.jsx)(w.Z, {
                                className: "h-4 w-4"
                            })
                        })]
                    }) : (0, s.jsxs)("div", {
                        className: "flex items-center",
                        children: [(0, s.jsx)("span", {
                            className: "mr-2 block text-sm font-medium text-gray-700",
                            children: e.title
                        }), (0, s.jsx)(u.z, {
                            size: "icon",
                            variant: "secondary",
                            onClick: () => x(e.id, e.title),
                            "aria-label": "Edit title",
                            children: (0, s.jsx)(J.Z, {
                                className: "h-4 w-4"
                            })
                        })]
                    });
                    return (0, s.jsx)(s.Fragment, {
                        children: t.files.length > 0 && (0, s.jsxs)("div", {
                            className: "mt-8 rounded-xl border border-gray-100 bg-white py-6 ",
                            children: [(0, s.jsxs)("div", {
                                className: "mb-6 flex flex-col items-center justify-between gap-3 px-4 sm:flex-row",
                                children: [(0, s.jsxs)("div", {
                                    children: [(0, s.jsxs)("h4", {
                                        className: "text-2xl font-bold text-gray-800",
                                        children: ["Selected Files (", t.files.length, ")"]
                                    }), (0, s.jsx)("p", {
                                        className: "text-sm text-gray-500",
                                        children: "You can update filenames to make them more descriptive."
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "flex space-x-2 rounded-lg bg-gray-100 p-1",
                                    children: [(0, s.jsxs)(u.z, {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: () => i("list"),
                                        className: (0, n.cn)("transition-all duration-300", "list" === r && "bg-white text-gray-800 shadow-md"),
                                        children: [(0, s.jsx)($.Z, {
                                            className: "mr-2 h-4 w-4"
                                        }), "List"]
                                    }), (0, s.jsxs)(u.z, {
                                        size: "sm",
                                        variant: "ghost",
                                        onClick: () => i("grid"),
                                        className: (0, n.cn)("transition-all duration-300", "grid" === r && "bg-white text-gray-800 shadow-md"),
                                        children: [(0, s.jsx)(U.Z, {
                                            className: "mr-2 h-4 w-4"
                                        }), "Grid"]
                                    })]
                                })]
                            }), (0, s.jsx)("div", {
                                className: " overflow-y-auto px-4",
                                children: "list" === r ? (0, s.jsx)("ul", {
                                    className: "space-y-3",
                                    children: t.files.map(e => (0, s.jsxs)("li", {
                                        className: "group flex items-center gap-4 rounded-lg bg-gray-50 p-4 shadow-sm transition-all duration-300 hover:shadow-md",
                                        children: [(0, s.jsx)(v.default, {
                                            src: e.url ? e.url : e.thumbnail,
                                            alt: e.title,
                                            width: 200,
                                            height: 200,
                                            className: "h-16 w-16 rounded-lg object-cover shadow-sm"
                                        }), (0, s.jsxs)("div", {
                                            className: "flex-grow",
                                            children: [g(e), (0, s.jsx)("span", {
                                                className: "text-xs text-gray-500",
                                                children: (0, n.td)(e.size)
                                            })]
                                        }), (0, s.jsx)(u.z, {
                                            size: "icon-sm",
                                            variant: "destructive",
                                            onClick: () => f(e.id),
                                            className: "rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                            "aria-label": "Delete file",
                                            children: (0, s.jsx)(h.Z, {})
                                        })]
                                    }, e.id))
                                }) : (0, s.jsx)("ul", {
                                    className: "grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5",
                                    children: t.files.map(e => (0, s.jsxs)("li", {
                                        className: "group relative rounded-lg bg-gray-50 p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
                                        children: [(0, s.jsx)("div", {
                                            className: "mb-2 aspect-square overflow-hidden rounded-lg",
                                            children: (0, s.jsx)(v.default, {
                                                src: e.thumbnail,
                                                alt: e.filename,
                                                width: 200,
                                                height: 200,
                                                className: "h-full w-full object-cover"
                                            })
                                        }), g(e), (0, s.jsx)("span", {
                                            className: "text-xs text-gray-500",
                                            children: (0, n.td)(e.size)
                                        }), (0, s.jsx)(u.z, {
                                            size: "icon-sm",
                                            variant: "destructive",
                                            onClick: () => f(e.id),
                                            className: "absolute right-2 top-2 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                                            "aria-label": "Delete file",
                                            children: (0, s.jsx)(h.Z, {})
                                        })]
                                    }, e.id))
                                })
                            })]
                        })
                    })
                };
            a(72107);
            var X = e => {
                    let {
                        postData: t,
                        setPostData: a
                    } = e, [l, d] = (0, c.useState)(!1), [o, m] = (0, c.useState)(0), [f, x] = (0, c.useState)(0), p = (0, c.useCallback)(e => {
                        x(t => t + e.length), y(e)
                    }, []), {
                        getRootProps: g,
                        getInputProps: h,
                        isDragActive: v
                    } = (0, Q.uI)({
                        onDrop: p,
                        accept: i.Jo.reduce((e, t) => (e[t.type] = [], e), {})
                    }), y = async e => {
                        for (let t of (d(!0), e)) {
                            m(e => e + 1);
                            let e = Math.random().toString(36).substr(2, 9);
                            a(a => ({ ...a,
                                files: [...a.files, {
                                    id: e,
                                    filename: t.name,
                                    title: t.name.split(".")[0],
                                    size: t.size,
                                    type: t.type,
                                    thumbnail: "/images/place.jpg",
                                    file: t,
                                    metadata: {
                                        Title: "",
                                        status: null,
                                        Keywords: []
                                    }
                                }]
                            }))
                        }
                        d(!1), m(0)
                    };
                    return (0, s.jsxs)(s.Fragment, {
                        children: [l && (0, s.jsx)("div", {
                            className: "fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-90",
                            children: (0, s.jsxs)("div", {
                                className: "flex flex-col items-center gap-2",
                                children: [(0, s.jsx)("div", {
                                    className: "relative h-10 w-10",
                                    children: (0, s.jsx)("div", {
                                        className: "h-10 w-10 animate-spin rounded-full border-2 border-dashed border-primary"
                                    })
                                }), (0, s.jsxs)("p", {
                                    children: ["Processing ", o, " of ", f, " files, please wait..."]
                                })]
                            })
                        }), (0, s.jsx)("p", {
                            className: "text-lg font-medium text-muted-foreground",
                            children: "Select all your files you want to generate"
                        }), (0, s.jsxs)("div", { ...g(),
                            className: (0, n.cn)("mt-8 cursor-pointer rounded-xl border-2 border-dashed text-center transition-all duration-300 max-w-3xl mx-auto", v ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary/50 hover:bg-gray-50", t.files.length > 0 ? "mx-auto max-w-xl p-4" : "p-10"),
                            children: [(0, s.jsx)("input", { ...h()
                            }), 0 === t.files.length ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)("div", {
                                    className: "mb-4 flex flex-wrap items-center justify-center gap-5",
                                    children: i.Jo.map((e, t) => (0, s.jsxs)("div", {
                                        className: "relative text-[#808e9b]",
                                        children: [(0, s.jsx)(O.$B, {
                                            size: 60
                                        }), (0, s.jsx)("p", {
                                            className: "absolute -left-3 top-1/2 -translate-y-1/2 rounded-md px-1 py-0.5 text-xs text-white",
                                            style: {
                                                backgroundColor: e.color
                                            },
                                            children: e.title
                                        })]
                                    }, t))
                                }), (0, s.jsxs)("h3", {
                                    className: "text-xl font-medium",
                                    children: [v ? "Drop the files here" : "Drag and Drop Files Here", " ", "(max ", r.lH, ")"]
                                }), (0, s.jsx)("p", {
                                    className: "mt-2 text-sm text-black/20",
                                    children: "or click to select files"
                                })]
                            }) : (0, s.jsxs)("div", {
                                className: "flex items-center justify-center",
                                children: [(0, s.jsx)(H.Z, {
                                    className: "mr-2 h-6 w-6 text-gray-400"
                                }), (0, s.jsxs)("p", {
                                    className: "text-sm text-gray-600",
                                    children: [t.files.length, " file(s) selected"]
                                })]
                            }), (0, s.jsx)(u.z, {
                                size: t.files.length > 0 ? "sm" : "lg",
                                className: (0, n.cn)("mt-4", t.files.length > 0 && "text-xs"),
                                onClick: () => {},
                                children: t.files.length > 0 ? "Add More Files" : "Browse Files"
                            })]
                        }), (0, s.jsx)(W, {
                            postData: t,
                            setPostData: a
                        })]
                    })
                },
                ee = () => {
                    let e = (0, o.T)(),
                        t = (0, o.C)(e => e.user),
                        [a, f] = (0, c.useState)(1),
                        [x, p] = (0, c.useState)({
                            generatorId: 1,
                            numKeywords: 25,
                            files: []
                        }),
                        [g, h] = (0, c.useState)(!1),
                        [v, y] = (0, c.useState)(!1),
                        [j, b] = (0, c.useState)({
                            total: 0,
                            processed: 0,
                            success: 0,
                            error: 0
                        }),
                        [N, w] = (0, c.useState)(null);
                    (0, c.useEffect)(() => {
                        x.generatorId && w(i.K3.find(e => e.id === x.generatorId) || null)
                    }, [x.generatorId]);
                    let C = async () => {
                            var e;
                            if (!i.K3.find(e => e.id === x.generatorId)) {
                                m.default.error("Invalid generator");
                                return
                            }
                            if (x.files.length > r.lH) {
                                m.default.error("You can only process ".concat(r.lH, " files at a time"));
                                return
                            }
                            h(!0), f(3);
                            let a = [];
                            (null === (e = t.data) || void 0 === e ? void 0 : e.useAiVision) ? (a = await (0, n.OM)(x.files), p(e => ({ ...e,
                                files: a
                            }))) : a = x.files;
                            let s = a.map(e => ({
                                    id: e.id,
                                    filename: e.filename,
                                    title: e.title,
                                    url: e.url
                                })),
                                d = {
                                    generatorId: x.generatorId,
                                    numKeywords: x.numKeywords,
                                    files: s
                                },
                                o = await (0, l.k)("POST", "/api/generate", d);
                            o && o.success ? (b({
                                total: x.files.length,
                                processed: 0,
                                success: 0,
                                error: 0
                            }), setTimeout(() => k(o.taskId), r.w)) : (h(!1), f(2))
                        },
                        k = async t => {
                            let a = await (0, l.k)("GET", "/api/task?taskId=".concat(t));
                            if (a.success) {
                                let {
                                    status: s,
                                    progress: i,
                                    result: l
                                } = a.task;
                                b(e => ({ ...e,
                                    processed: i
                                })), l && p(e => ({ ...e,
                                    files: e.files.map(e => {
                                        let t = l.find(t => t.id === e.id);
                                        if (t) {
                                            let a = t.metadata;
                                            return { ...e,
                                                metadata: a
                                            }
                                        }
                                        return e
                                    })
                                })), "COMPLETED" === s ? (y(!0), h(!1), e((0, d.Al)()), m.default.success("Processing completed")) : "FAILED" === s ? m.default.error("Task processing failed") : setTimeout(() => k(t), r.w)
                            }
                        },
                        S = async () => {
                            let e = x.files.map(e => e.metadata);
                            (0, n.gp)({
                                metadata: e,
                                generator: N
                            })
                        };
                    return (0, s.jsxs)("div", {
                        className: "mt-5 flex flex-1 flex-col",
                        children: [(0, s.jsxs)("div", {
                            className: "flex-1",
                            children: [1 === a && (0, s.jsx)(L, {
                                postData: x,
                                setPostData: p
                            }), 2 === a && (0, s.jsx)(X, {
                                postData: x,
                                setPostData: p
                            }), 3 === a && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsxs)("p", {
                                    className: "text-lg font-medium text-muted-foreground",
                                    children: [v ? "Processing completed, you can download the files now" : "Processing  ".concat(j.total, " files ..."), (0, s.jsx)("br", {})]
                                }), (0, s.jsx)("div", {
                                    className: "mt-8 space-y-6",
                                    children: (0, s.jsxs)("div", {
                                        className: "max-h-[calc(100vh-410px)] overflow-y-auto rounded-lg bg-white p-6 shadow",
                                        children: [(0, s.jsx)("h3", {
                                            className: "mb-4 text-lg font-semibold",
                                            children: "Files"
                                        }), (0, s.jsx)("ul", {
                                            className: "space-y-3",
                                            children: x.files.map((e, t) => (0, s.jsx)(B, {
                                                file: e,
                                                postData: x,
                                                setPostData: p,
                                                generator: N
                                            }, t))
                                        })]
                                    })
                                })]
                            })]
                        }), (0, s.jsxs)("div", {
                            className: "fixed bottom-5 right-20 flex items-center justify-end gap-5 rounded-xl bg-gray-500/20 px-10 py-2",
                            children: [a > 1 && a < 3 && (0, s.jsx)(u.z, {
                                onClick: () => f(a - 1),
                                size: "lg",
                                variant: "secondary",
                                children: "Back"
                            }), a < 2 && a < 3 && (0, s.jsx)(u.z, {
                                onClick: () => f(a + 1),
                                size: "lg",
                                children: "Next"
                            }), 2 === a && (0, s.jsx)(u.z, {
                                size: "lg",
                                disabled: 0 === x.files.length,
                                onClick: C,
                                children: "Generate"
                            }), 3 === a && (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(u.z, {
                                    onClick: () => {
                                        f(1), p(e => ({ ...e,
                                            files: []
                                        })), y(!1)
                                    },
                                    size: "lg",
                                    variant: "secondary",
                                    children: "Generate More"
                                }), (0, s.jsx)(u.z, {
                                    size: "lg",
                                    disabled: 0 === x.files.length || g || !v,
                                    onClick: S,
                                    children: "Download"
                                })]
                            })]
                        })]
                    })
                }
        },
        94693: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return n
                }
            });
            var s = a(57437);
            a(2265);
            var r = a(12218),
                i = a(37440);
            let l = (0, r.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
                variants: {
                    variant: {
                        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                        success: "border-transparent bg-green-200 text-green-600 hover:bg-green-300",
                        outline: "text-foreground"
                    }
                },
                defaultVariants: {
                    variant: "default"
                }
            });

            function n(e) {
                let {
                    className: t,
                    variant: a,
                    ...r
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, i.cn)(l({
                        variant: a
                    }), t),
                    ...r
                })
            }
        },
        90837: function(e, t, a) {
            "use strict";
            a.d(t, {
                $N: function() {
                    return g
                },
                GG: function() {
                    return m
                },
                Vq: function() {
                    return d
                },
                cN: function() {
                    return p
                },
                cZ: function() {
                    return f
                },
                fK: function() {
                    return x
                },
                hg: function() {
                    return o
                }
            });
            var s = a(57437),
                r = a(2265),
                i = a(13304),
                l = a(74697),
                n = a(37440);
            let d = i.fC,
                o = i.xz,
                c = i.h_,
                m = i.x8,
                u = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...r
                    } = e;
                    return (0, s.jsx)(i.aV, {
                        ref: t,
                        className: (0, n.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...r
                    })
                });
            u.displayName = i.aV.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...d
                } = e;
                return (0, s.jsxs)(c, {
                    children: [(0, s.jsx)(u, {}), (0, s.jsxs)(i.VY, {
                        ref: t,
                        className: (0, n.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                        ...d,
                        children: [r, (0, s.jsxs)(i.x8, {
                            className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                            children: [(0, s.jsx)(l.Z, {
                                className: "h-4 w-4"
                            }), (0, s.jsx)("span", {
                                className: "sr-only",
                                children: "Close"
                            })]
                        })]
                    })]
                })
            });
            f.displayName = i.VY.displayName;
            let x = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, n.cn)("flex flex-col space-y-1.5 text-center sm:text-left", t),
                    ...a
                })
            };
            x.displayName = "DialogHeader";
            let p = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, s.jsx)("div", {
                    className: (0, n.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...a
                })
            };
            p.displayName = "DialogFooter";
            let g = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(i.Dx, {
                    ref: t,
                    className: (0, n.cn)("text-lg font-semibold leading-none tracking-tight", a),
                    ...r
                })
            });
            g.displayName = i.Dx.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(i.dk, {
                    ref: t,
                    className: (0, n.cn)("text-sm text-muted-foreground", a),
                    ...r
                })
            }).displayName = i.dk.displayName
        },
        83102: function(e, t, a) {
            "use strict";
            a.d(t, {
                I: function() {
                    return l
                }
            });
            var s = a(57437),
                r = a(2265),
                i = a(37440);
            let l = r.forwardRef((e, t) => {
                let {
                    className: a,
                    type: r,
                    ...l
                } = e;
                return (0, s.jsx)("input", {
                    type: r,
                    className: (0, i.cn)("flex h-12 w-full rounded-xl border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a),
                    ref: t,
                    ...l
                })
            });
            l.displayName = "Input"
        },
        46294: function(e, t, a) {
            "use strict";
            a.d(t, {
                Bw: function() {
                    return p
                },
                Ph: function() {
                    return c
                },
                Ql: function() {
                    return g
                },
                i4: function() {
                    return u
                },
                ki: function() {
                    return m
                }
            });
            var s = a(57437),
                r = a(2265),
                i = a(613),
                l = a(42421),
                n = a(14392),
                d = a(22468),
                o = a(37440);
            let c = i.fC;
            i.ZA;
            let m = i.B4,
                u = r.forwardRef((e, t) => {
                    let {
                        className: a,
                        children: r,
                        ...n
                    } = e;
                    return (0, s.jsxs)(i.xz, {
                        ref: t,
                        className: (0, o.cn)("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", a),
                        ...n,
                        children: [r, (0, s.jsx)(i.JO, {
                            asChild: !0,
                            children: (0, s.jsx)(l.Z, {
                                className: "h-4 w-4 opacity-50"
                            })
                        })]
                    })
                });
            u.displayName = i.xz.displayName;
            let f = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(i.u_, {
                    ref: t,
                    className: (0, o.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...r,
                    children: (0, s.jsx)(n.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            f.displayName = i.u_.displayName;
            let x = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(i.$G, {
                    ref: t,
                    className: (0, o.cn)("flex cursor-default items-center justify-center py-1", a),
                    ...r,
                    children: (0, s.jsx)(l.Z, {
                        className: "h-4 w-4"
                    })
                })
            });
            x.displayName = i.$G.displayName;
            let p = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    position: l = "popper",
                    ...n
                } = e;
                return (0, s.jsx)(i.h_, {
                    children: (0, s.jsxs)(i.VY, {
                        ref: t,
                        className: (0, o.cn)("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === l && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", a),
                        position: l,
                        ...n,
                        children: [(0, s.jsx)(f, {}), (0, s.jsx)(i.l_, {
                            className: (0, o.cn)("p-1", "popper" === l && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
                            children: r
                        }), (0, s.jsx)(x, {})]
                    })
                })
            });
            p.displayName = i.VY.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(i.__, {
                    ref: t,
                    className: (0, o.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", a),
                    ...r
                })
            }).displayName = i.__.displayName;
            let g = r.forwardRef((e, t) => {
                let {
                    className: a,
                    children: r,
                    ...l
                } = e;
                return (0, s.jsxs)(i.ck, {
                    ref: t,
                    className: (0, o.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", a),
                    ...l,
                    children: [(0, s.jsx)("span", {
                        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: (0, s.jsx)(i.wU, {
                            children: (0, s.jsx)(d.Z, {
                                className: "h-4 w-4"
                            })
                        })
                    }), (0, s.jsx)(i.eT, {
                        children: r
                    })]
                })
            });
            g.displayName = i.ck.displayName, r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)(i.Z0, {
                    ref: t,
                    className: (0, o.cn)("-mx-1 my-1 h-px bg-muted", a),
                    ...r
                })
            }).displayName = i.Z0.displayName
        },
        93146: function(e, t, a) {
            "use strict";
            a.d(t, {
                g: function() {
                    return l
                }
            });
            var s = a(57437),
                r = a(2265),
                i = a(37440);
            let l = r.forwardRef((e, t) => {
                let {
                    className: a,
                    ...r
                } = e;
                return (0, s.jsx)("textarea", {
                    className: (0, i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", a),
                    ref: t,
                    ...r
                })
            });
            l.displayName = "Textarea"
        },
        59800: function(e, t, a) {
            "use strict";
            a.d(t, {
                Jo: function() {
                    return m
                },
                K3: function() {
                    return c
                },
                zG: function() {
                    return o
                }
            });
            var s = a(82695),
                r = a(24559),
                i = a(92940),
                l = a(96273),
                n = a(40121),
                d = a(24258);
            let o = [{
                    title: "Create CSV",
                    icon: r.Z,
                    href: "/dashboard"
                }, {
                    title: "Recent Tasks",
                    icon: i.Z,
                    href: "/dashboard/tasks"
                }, {
                    title: "Buy Credits",
                    icon: l.Z,
                    href: "/dashboard/credits",
                    badge: "Discounts"
                }, {
                    title: "Tutorials",
                    icon: n.Z,
                    href: "/dashboard/tutorials",
                    badge: "How to use"
                }, {
                    title: "Settings",
                    icon: d.Z,
                    href: "/dashboard/settings"
                }],
                c = [{
                    id: 1,
                    title: "AdobeStock",
                    color: "#FD4949",
                    icon: s.hd,
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
                    icon: s.QQ,
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
                    icon: s.FQ,
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
                    icon: s.wT,
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
                    icon: s.FQ,
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
                    icon: s.RQ,
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
                    icon: s.RQ,
                    csvRequirements: {
                        structure: ["Filename", "Image Name", "Description", "Category 1", "Category 2", "Category 3", "Keywords"],
                        generate: ["Image Name", "Description", "keywords"],
                        delimiter: ","
                    },
                    comingSoon: !0
                }],
                m = [{
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
        84074: function(e, t, a) {
            "use strict";
            a.d(t, {
                Al: function() {
                    return l
                },
                FQ: function() {
                    return i
                }
            });
            var s = a(96264),
                r = a(66862);
            let i = (0, r.hg)("user/fetchUserData", async () => {
                    let e = await (0, s.k)("GET", "/api/user");
                    if (!e) throw Error("Failed to fetch user data");
                    return e.user
                }),
                l = (0, r.hg)("user/updateUserData", async () => {
                    let e = await (0, s.k)("GET", "/api/user");
                    if (!e) throw Error("Failed to fetch user data");
                    return e.user
                }),
                n = (0, r.oM)({
                    name: "user",
                    initialState: {
                        data: null,
                        status: "idle",
                        error: null
                    },
                    reducers: {
                        setUser(e, t) {
                            e.data = t.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(i.pending, e => {
                            e.status = "loading"
                        }).addCase(i.fulfilled, (e, t) => {
                            e.status = "succeeded", e.data = t.payload
                        }).addCase(i.rejected, (e, t) => {
                            e.status = "failed", e.error = t.error.message || "Failed to fetch user data"
                        }).addCase(l.fulfilled, (e, t) => {
                            e.data = t.payload
                        }).addCase(l.rejected, (e, t) => {
                            e.error = t.error.message || "Failed to update user data"
                        })
                    }
                }),
                {
                    setUser: d
                } = n.actions;
            t.ZP = n.reducer
        },
        99178: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return i
                },
                T: function() {
                    return r
                }
            });
            var s = a(11444);
            let r = s.I0,
                i = s.v9
        }
    },
    function(e) {
        e.O(0, [726, 472, 5, 149, 957, 561, 208, 444, 862, 173, 890, 692, 971, 23, 744], function() {
            return e(e.s = 38138)
        }), _N_E = e.O()
    }
]);