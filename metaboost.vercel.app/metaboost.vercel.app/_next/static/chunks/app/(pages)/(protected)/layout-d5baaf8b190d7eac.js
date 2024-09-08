(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [770], {
        19683: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 7651)), Promise.resolve().then(r.bind(r, 25971))
        },
        7651: function(e, t, r) {
            "use strict";
            var n = r(57437),
                a = r(78395),
                u = r(84074),
                s = r(99178),
                i = r(16463),
                d = r(2265);
            t.default = e => {
                var t;
                let {
                    children: r
                } = e, c = (0, s.C)(e => e.user), o = (0, s.T)();
                (0, d.useEffect)(() => {
                    o((0, u.FQ)())
                }, []);
                let l = (0, i.usePathname)();
                return "succeeded" !== c.status ? (0, n.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500",
                    children: (0, n.jsxs)("div", {
                        className: "text-center",
                        children: [(0, n.jsx)("div", {
                            className: "mb-4 inline-block h-12 w-12 animate-spin rounded-full border-t-4 border-white"
                        }), (0, n.jsx)("h2", {
                            className: "mb-2 text-2xl font-semibold text-white",
                            children: "Loading"
                        }), (0, n.jsx)("p", {
                            className: "text-white text-opacity-80",
                            children: "Please wait..."
                        })]
                    })
                }) : (l.startsWith("/admin") && !a.kI.includes((null === (t = c.data) || void 0 === t ? void 0 : t.role) + "") && (0, i.redirect)("/login"), (0, n.jsx)(n.Fragment, {
                    children: r
                }))
            }
        },
        25971: function(e, t, r) {
            "use strict";
            r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r(57437),
                a = r(66862),
                u = r(84074);
            let s = (0, a.xC)({
                reducer: {
                    user: u.ZP
                }
            });
            var i = r(11444);
            r(2265);
            var d = e => {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(i.zt, {
                    store: s,
                    children: t
                })
            }
        },
        78395: function(e, t, r) {
            "use strict";
            r.d(t, {
                FS: function() {
                    return c
                },
                Im: function() {
                    return l
                },
                No: function() {
                    return d
                },
                Ul: function() {
                    return o
                },
                eL: function() {
                    return i
                },
                kI: function() {
                    return f
                },
                lH: function() {
                    return a
                },
                ot: function() {
                    return u
                },
                w: function() {
                    return n
                },
                xG: function() {
                    return s
                }
            });
            let n = 5e3,
                a = 500,
                u = 5,
                s = 30,
                i = 1,
                d = 2e-4,
                c = 15e3,
                o = 5,
                l = 10,
                f = ["ADMIN", "SUPERADMIN"]
        },
        96264: function(e, t, r) {
            "use strict";
            r.d(t, {
                k: function() {
                    return u
                }
            });
            var n = r(38472),
                a = r(88726);
            async function u(e, t, r) {
                try {
                    let u = (await (0, n.Z)({
                        method: e,
                        url: t,
                        data: r
                    })).data;
                    if (!u.success) return a.default.error(u.msg), null;
                    return u
                } catch (e) {
                    return e.response ? a.default.error(e.response.data.msg) : e.message ? a.default.error(e.message) : a.default.error("Something went wrong, please try again later."), null
                }
            }
        },
        16463: function(e, t, r) {
            "use strict";
            var n = r(71169);
            r.o(n, "redirect") && r.d(t, {
                redirect: function() {
                    return n.redirect
                }
            }), r.o(n, "usePathname") && r.d(t, {
                usePathname: function() {
                    return n.usePathname
                }
            })
        },
        84074: function(e, t, r) {
            "use strict";
            r.d(t, {
                Al: function() {
                    return s
                },
                FQ: function() {
                    return u
                }
            });
            var n = r(96264),
                a = r(66862);
            let u = (0, a.hg)("user/fetchUserData", async () => {
                    let e = await (0, n.k)("GET", "/api/user");
                    if (!e) throw Error("Failed to fetch user data");
                    return e.user
                }),
                s = (0, a.hg)("user/updateUserData", async () => {
                    let e = await (0, n.k)("GET", "/api/user");
                    if (!e) throw Error("Failed to fetch user data");
                    return e.user
                }),
                i = (0, a.oM)({
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
                        e.addCase(u.pending, e => {
                            e.status = "loading"
                        }).addCase(u.fulfilled, (e, t) => {
                            e.status = "succeeded", e.data = t.payload
                        }).addCase(u.rejected, (e, t) => {
                            e.status = "failed", e.error = t.error.message || "Failed to fetch user data"
                        }).addCase(s.fulfilled, (e, t) => {
                            e.data = t.payload
                        }).addCase(s.rejected, (e, t) => {
                            e.error = t.error.message || "Failed to update user data"
                        })
                    }
                }),
                {
                    setUser: d
                } = i.actions;
            t.ZP = i.reducer
        },
        99178: function(e, t, r) {
            "use strict";
            r.d(t, {
                C: function() {
                    return u
                },
                T: function() {
                    return a
                }
            });
            var n = r(11444);
            let a = n.I0,
                u = n.v9
        }
    },
    function(e) {
        e.O(0, [726, 472, 444, 862, 971, 23, 744], function() {
            return e(e.s = 19683)
        }), _N_E = e.O()
    }
]);