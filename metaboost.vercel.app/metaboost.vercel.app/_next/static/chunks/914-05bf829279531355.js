(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [914], {
        83914: function(e, t, a) {
            Promise.resolve().then(a.bind(a, 38381))
        },
        38381: function(e, t, a) {
            "use strict";
            a.d(t, {
                default: function() {
                    return y
                }
            });
            var r = a(57437),
                i = a(2265),
                n = a(33514),
                s = a(54175),
                o = a(50495),
                l = a(94693),
                d = a(96264);
            /**
             * @license lucide-react v0.427.0 - ISC
             *
             * This source code is licensed under the ISC license.
             * See the LICENSE file in the root directory of this source tree.
             */
            let c = (0, a(78030).Z)("CloudDownload", [
                ["path", {
                    d: "M12 13v8l-4-4",
                    key: "1f5nwf"
                }],
                ["path", {
                    d: "m12 21 4-4",
                    key: "1lfcce"
                }],
                ["path", {
                    d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284",
                    key: "ui1hmy"
                }]
            ]);
            var u = a(90399),
                m = a(37440),
                f = a(59800),
                g = a(21552),
                p = a(88726);

            function y(e) {
                var t, a;
                let {
                    isAdmin: y = !0
                } = e, [h, x] = (0, i.useState)(null), [{
                    pageIndex: v,
                    pageSize: b
                }, j] = (0, i.useState)({
                    pageIndex: 0,
                    pageSize: 10
                }), [k, w] = (0, i.useState)(null), {
                    isLoading: D,
                    isError: C,
                    refetch: N
                } = function(e, t) {
                    let [a, r] = (0, i.useState)(!0), [n, s] = (0, i.useState)(!1), o = (0, i.useCallback)(async () => {
                        r(!0), s(!1);
                        try {
                            let a = await (0, d.k)("GET", "/api/tasks?page=".concat(e.pageIndex + 1, "&limit=").concat(e.pageSize, "&isAdmin=").concat(e.isAdmin));
                            if (!a.success) throw Error("Failed to fetch tasks");
                            t(a)
                        } catch (e) {
                            s(!0)
                        } finally {
                            r(!1)
                        }
                    }, [e.pageIndex, e.pageSize]);
                    return (0, i.useEffect)(() => {
                        o()
                    }, [o]), {
                        isLoading: a,
                        isError: n,
                        refetch: o
                    }
                }({
                    pageIndex: v,
                    pageSize: b,
                    isAdmin: y
                }, w), S = (0, i.useMemo)(() => [], []), A = (0, i.useMemo)(() => ({
                    pageIndex: v,
                    pageSize: b
                }), [v, b]), F = (0, i.useCallback)(e => {
                    x(e)
                }, []), M = (0, i.useCallback)(async () => {
                    if (h) try {
                        if ((await fetch("/api/tasks/".concat(h), {
                                method: "DELETE"
                            })).ok) p.default.success("Task deleted successfully"), w(e => e ? { ...e,
                            tasks: e.tasks.filter(e => e.id !== h)
                        } : null);
                        else throw Error("Failed to delete task")
                    } catch (e) {
                        p.default.error("Failed to delete task. Please try again.")
                    } finally {
                        x(null)
                    }
                }, [h]), R = (0, i.useMemo)(() => [...y ? [{
                    accessorKey: "user",
                    header: "User",
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return t.original.user.name
                    }
                }] : [], {
                    accessorKey: "status",
                    header: "Status",
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return (0, r.jsx)(l.C, {
                            variant: "COMPLETED" === t.original.status ? "success" : "FAILED" === t.original.status ? "destructive" : "default",
                            children: t.original.status
                        })
                    }
                }, {
                    accessorKey: "progress",
                    header: "Processed",
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return "".concat(t.original.progress)
                    }
                }, {
                    accessorKey: "totalFiles",
                    header: "Total Files"
                }, {
                    accessorKey: "generator",
                    header: "Generator"
                }, {
                    accessorKey: "creditsUsed",
                    header: "Credits"
                }, {
                    accessorKey: "createdAt",
                    header: "Created At",
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return new Date(t.original.createdAt).toLocaleString()
                    }
                }, {
                    accessorKey: "status",
                    header: "Actions",
                    cell: e => {
                        let {
                            row: t
                        } = e;
                        return (0, r.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0, r.jsx)(o.z, {
                                size: "icon",
                                disabled: "COMPLETED" !== t.original.status,
                                onClick: () => {
                                    if (t.original.result) {
                                        let e = Array.isArray(t.original.result) ? t.original.result.map(e => e.metadata) : [],
                                            a = t.original.generator,
                                            r = f.K3.find(e => e.title === a);
                                        (0, m.gp)({
                                            metadata: e,
                                            generator: r
                                        })
                                    }
                                },
                                children: (0, r.jsx)(c, {
                                    size: 16
                                })
                            }), (0, r.jsx)(o.z, {
                                size: "icon",
                                variant: "destructive",
                                onClick: () => F(t.original.id),
                                children: (0, r.jsx)(u.Z, {
                                    size: 16
                                })
                            })]
                        })
                    }
                }], []), T = (0, n.b7)({
                    data: null !== (t = null == k ? void 0 : k.tasks) && void 0 !== t ? t : S,
                    columns: R,
                    pageCount: null !== (a = null == k ? void 0 : k.pageCount) && void 0 !== a ? a : -1,
                    state: {
                        pagination: A
                    },
                    onPaginationChange: j,
                    getCoreRowModel: (0, s.sC)(),
                    manualPagination: !0
                });
                return D ? (0, r.jsx)("div", {
                    children: "Loading..."
                }) : C ? (0, r.jsx)("div", {
                    children: "Error loading tasks"
                }) : (0, r.jsxs)("div", {
                    className: "space-y-4",
                    children: [(0, r.jsxs)("table", {
                        className: "min-w-full divide-y divide-gray-200",
                        children: [(0, r.jsx)("thead", {
                            className: "bg-gray-50",
                            children: T.getHeaderGroups().map(e => (0, r.jsx)("tr", {
                                children: e.headers.map(e => (0, r.jsx)("th", {
                                    className: "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500",
                                    children: e.isPlaceholder ? null : (0, n.ie)(e.column.columnDef.header, e.getContext())
                                }, e.id))
                            }, e.id))
                        }), (0, r.jsx)("tbody", {
                            className: "divide-y divide-gray-200 bg-white",
                            children: T.getRowModel().rows.map(e => (0, r.jsx)("tr", {
                                children: e.getVisibleCells().map(e => (0, r.jsx)("td", {
                                    className: "whitespace-nowrap px-6 py-4",
                                    children: (0, n.ie)(e.column.columnDef.cell, e.getContext())
                                }, e.id))
                            }, e.id))
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0, r.jsx)(o.z, {
                            onClick: () => T.previousPage(),
                            disabled: !T.getCanPreviousPage(),
                            children: "Previous"
                        }), (0, r.jsxs)("span", {
                            className: "flex items-center gap-1",
                            children: [(0, r.jsx)("div", {
                                children: "Page"
                            }), (0, r.jsxs)("strong", {
                                children: [T.getState().pagination.pageIndex + 1, " of", " ", T.getPageCount()]
                            })]
                        }), (0, r.jsx)(o.z, {
                            onClick: () => T.nextPage(),
                            disabled: !T.getCanNextPage(),
                            children: "Next"
                        })]
                    }), (0, r.jsx)(g.aR, {
                        open: !!h,
                        onOpenChange: () => x(null),
                        children: (0, r.jsxs)(g._T, {
                            children: [(0, r.jsxs)(g.fY, {
                                children: [(0, r.jsx)(g.f$, {
                                    children: "Are you sure?"
                                }), (0, r.jsx)(g.yT, {
                                    children: "This action cannot be undone. This will permanently delete the task."
                                })]
                            }), (0, r.jsxs)(g.xo, {
                                children: [(0, r.jsx)(g.le, {
                                    children: "Cancel"
                                }), (0, r.jsx)(g.OL, {
                                    onClick: M,
                                    children: "Delete"
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        21552: function(e, t, a) {
            "use strict";
            a.d(t, {
                aR: function() {
                    return T
                },
                OL: function() {
                    return V
                },
                le: function() {
                    return O
                },
                _T: function() {
                    return K
                },
                yT: function() {
                    return L
                },
                xo: function() {
                    return E
                },
                fY: function() {
                    return Z
                },
                f$: function() {
                    return I
                },
                vW: function() {
                    return P
                }
            });
            var r = a(57437),
                i = a(2265),
                n = a(98324),
                s = a(1584),
                o = a(13304),
                l = a(78149),
                d = a(71538),
                c = "AlertDialog",
                [u, m] = (0, n.b)(c, [o.p8]),
                f = (0, o.p8)(),
                g = e => {
                    let {
                        __scopeAlertDialog: t,
                        ...a
                    } = e, i = f(t);
                    return (0, r.jsx)(o.fC, { ...i,
                        ...a,
                        modal: !0
                    })
                };
            g.displayName = c;
            var p = i.forwardRef((e, t) => {
                let {
                    __scopeAlertDialog: a,
                    ...i
                } = e, n = f(a);
                return (0, r.jsx)(o.xz, { ...n,
                    ...i,
                    ref: t
                })
            });
            p.displayName = "AlertDialogTrigger";
            var y = e => {
                let {
                    __scopeAlertDialog: t,
                    ...a
                } = e, i = f(t);
                return (0, r.jsx)(o.h_, { ...i,
                    ...a
                })
            };
            y.displayName = "AlertDialogPortal";
            var h = i.forwardRef((e, t) => {
                let {
                    __scopeAlertDialog: a,
                    ...i
                } = e, n = f(a);
                return (0, r.jsx)(o.aV, { ...n,
                    ...i,
                    ref: t
                })
            });
            h.displayName = "AlertDialogOverlay";
            var x = "AlertDialogContent",
                [v, b] = u(x),
                j = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: a,
                        children: n,
                        ...c
                    } = e, u = f(a), m = i.useRef(null), g = (0, s.e)(t, m), p = i.useRef(null);
                    return (0, r.jsx)(o.jm, {
                        contentName: x,
                        titleName: k,
                        docsSlug: "alert-dialog",
                        children: (0, r.jsx)(v, {
                            scope: a,
                            cancelRef: p,
                            children: (0, r.jsxs)(o.VY, {
                                role: "alertdialog",
                                ...u,
                                ...c,
                                ref: g,
                                onOpenAutoFocus: (0, l.M)(c.onOpenAutoFocus, e => {
                                    var t;
                                    e.preventDefault(), null === (t = p.current) || void 0 === t || t.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerDownOutside: e => e.preventDefault(),
                                onInteractOutside: e => e.preventDefault(),
                                children: [(0, r.jsx)(d.A4, {
                                    children: n
                                }), (0, r.jsx)(F, {
                                    contentRef: m
                                })]
                            })
                        })
                    })
                });
            j.displayName = x;
            var k = "AlertDialogTitle",
                w = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: a,
                        ...i
                    } = e, n = f(a);
                    return (0, r.jsx)(o.Dx, { ...n,
                        ...i,
                        ref: t
                    })
                });
            w.displayName = k;
            var D = "AlertDialogDescription",
                C = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: a,
                        ...i
                    } = e, n = f(a);
                    return (0, r.jsx)(o.dk, { ...n,
                        ...i,
                        ref: t
                    })
                });
            C.displayName = D;
            var N = i.forwardRef((e, t) => {
                let {
                    __scopeAlertDialog: a,
                    ...i
                } = e, n = f(a);
                return (0, r.jsx)(o.x8, { ...n,
                    ...i,
                    ref: t
                })
            });
            N.displayName = "AlertDialogAction";
            var S = "AlertDialogCancel",
                A = i.forwardRef((e, t) => {
                    let {
                        __scopeAlertDialog: a,
                        ...i
                    } = e, {
                        cancelRef: n
                    } = b(S, a), l = f(a), d = (0, s.e)(t, n);
                    return (0, r.jsx)(o.x8, { ...l,
                        ...i,
                        ref: d
                    })
                });
            A.displayName = S;
            var F = e => {
                    let {
                        contentRef: t
                    } = e, a = "`".concat(x, "` requires a description for the component to be accessible for screen reader users.\n\nYou can add a description to the `").concat(x, "` by passing a `").concat(D, "` component as a child, which also benefits sighted users by adding visible context to the dialog.\n\nAlternatively, you can use your own component as a description by assigning it an `id` and passing the same value to the `aria-describedby` prop in `").concat(x, "`. If the description is confusing or duplicative for sighted users, you can use the `@radix-ui/react-visually-hidden` primitive as a wrapper around your description component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/alert-dialog");
                    return i.useEffect(() => {
                        var e;
                        document.getElementById(null === (e = t.current) || void 0 === e ? void 0 : e.getAttribute("aria-describedby")) || console.warn(a)
                    }, [a, t]), null
                },
                M = a(37440),
                R = a(50495);
            let T = g,
                P = p,
                z = i.forwardRef((e, t) => {
                    let {
                        className: a,
                        ...i
                    } = e;
                    return (0, r.jsx)(h, {
                        className: (0, M.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", a),
                        ...i,
                        ref: t
                    })
                });
            z.displayName = h.displayName;
            let K = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsxs)(y, {
                    children: [(0, r.jsx)(z, {}), (0, r.jsx)(j, {
                        ref: t,
                        className: (0, M.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg", a),
                        ...i
                    })]
                })
            });
            K.displayName = j.displayName;
            let Z = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, M.cn)("flex flex-col space-y-2 text-center sm:text-left", t),
                    ...a
                })
            };
            Z.displayName = "AlertDialogHeader";
            let E = e => {
                let {
                    className: t,
                    ...a
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, M.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t),
                    ...a
                })
            };
            E.displayName = "AlertDialogFooter";
            let I = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(w, {
                    ref: t,
                    className: (0, M.cn)("text-lg font-semibold", a),
                    ...i
                })
            });
            I.displayName = w.displayName;
            let L = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(C, {
                    ref: t,
                    className: (0, M.cn)("text-sm text-muted-foreground", a),
                    ...i
                })
            });
            L.displayName = C.displayName;
            let V = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(N, {
                    ref: t,
                    className: (0, M.cn)((0, R.d)(), a),
                    ...i
                })
            });
            V.displayName = N.displayName;
            let O = i.forwardRef((e, t) => {
                let {
                    className: a,
                    ...i
                } = e;
                return (0, r.jsx)(A, {
                    ref: t,
                    className: (0, M.cn)((0, R.d)({
                        variant: "outline"
                    }), "mt-2 sm:mt-0", a),
                    ...i
                })
            });
            O.displayName = A.displayName
        },
        94693: function(e, t, a) {
            "use strict";
            a.d(t, {
                C: function() {
                    return o
                }
            });
            var r = a(57437);
            a(2265);
            var i = a(12218),
                n = a(37440);
            let s = (0, i.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", {
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

            function o(e) {
                let {
                    className: t,
                    variant: a,
                    ...i
                } = e;
                return (0, r.jsx)("div", {
                    className: (0, n.cn)(s({
                        variant: a
                    }), t),
                    ...i
                })
            }
        },
        59800: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            var r = a(82695),
                i = a(24559),
                n = a(92940),
                s = a(96273),
                o = a(40121),
                l = a(24258);
            let d = [{
                    title: "Create CSV",
                    icon: i.Z,
                    href: "/dashboard"
                }, {
                    title: "Recent Tasks",
                    icon: n.Z,
                    href: "/dashboard/tasks"
                }, {
                    title: "Buy Credits",
                    icon: s.Z,
                    href: "/dashboard/credits",
                    badge: "Discounts"
                }, {
                    title: "Tutorials",
                    icon: o.Z,
                    href: "/dashboard/tutorials",
                    badge: "How to use"
                }, {
                    title: "Settings",
                    icon: l.Z,
                    href: "/dashboard/settings"
                }],
                c = [{
                    id: 1,
                    title: "AdobeStock",
                    color: "#FD4949",
                    icon: r.hd,
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
                    icon: r.QQ,
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
                    icon: r.FQ,
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
                    icon: r.wT,
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
                    icon: r.FQ,
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
                    icon: r.RQ,
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
                    icon: r.RQ,
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
        92940: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            let r = (0, a(78030).Z)("CircleCheckBig", [
                ["path", {
                    d: "M21.801 10A10 10 0 1 1 17 3.335",
                    key: "yps3ct"
                }],
                ["path", {
                    d: "m9 11 3 3L22 4",
                    key: "1pflzl"
                }]
            ])
        },
        96273: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            let r = (0, a(78030).Z)("CirclePlus", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M8 12h8",
                    key: "1wcyev"
                }],
                ["path", {
                    d: "M12 8v8",
                    key: "napkw2"
                }]
            ])
        },
        24559: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            let r = (0, a(78030).Z)("FilePenLine", [
                ["path", {
                    d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",
                    key: "142zxg"
                }],
                ["path", {
                    d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
                    key: "2t3380"
                }],
                ["path", {
                    d: "M8 18h1",
                    key: "13wk12"
                }]
            ])
        },
        40121: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            let r = (0, a(78030).Z)("FileVideo", [
                ["path", {
                    d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
                    key: "1rqfz7"
                }],
                ["path", {
                    d: "M14 2v4a2 2 0 0 0 2 2h4",
                    key: "tnqrlb"
                }],
                ["path", {
                    d: "m10 11 5 3-5 3v-6Z",
                    key: "7ntvm4"
                }]
            ])
        },
        24258: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            let r = (0, a(78030).Z)("Settings", [
                ["path", {
                    d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
                    key: "1qme2f"
                }],
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "3",
                    key: "1v7zrd"
                }]
            ])
        },
        90399: function(e, t, a) {
            "use strict";
            a.d(t, {
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
            let r = (0, a(78030).Z)("Trash", [
                ["path", {
                    d: "M3 6h18",
                    key: "d0wm0j"
                }],
                ["path", {
                    d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",
                    key: "4alrt4"
                }],
                ["path", {
                    d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",
                    key: "v07s0e"
                }]
            ])
        }
    }
]);