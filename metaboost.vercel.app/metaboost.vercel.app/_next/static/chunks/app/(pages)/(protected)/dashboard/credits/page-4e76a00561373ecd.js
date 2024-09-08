(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [31], {
        95965: function(e, s, t) {
            Promise.resolve().then(t.bind(t, 94415))
        },
        94415: function(e, s, t) {
            "use strict";
            t.r(s), t.d(s, {
                default: function() {
                    return P
                }
            });
            var a = t(57437),
                l = t(2265),
                r = t(50495),
                n = t(83102),
                i = t(36013),
                c = t(78395),
                d = t(37440),
                o = t(88726),
                u = t(17722),
                m = t(6884),
                x = t(30690),
                f = t(30338),
                h = t(22638),
                p = t(87138),
                j = t(70074),
                N = t(84074),
                g = t(99178),
                b = t(96264),
                v = e => {
                    let {
                        credits: s
                    } = e, t = (0, l.useRef)(null), r = (0, g.T)(), n = async () => {
                        try {
                            let e = await (0, b.k)("POST", "/api/paypal/create-order", {
                                credits: s
                            });
                            if (e.success) return t.current = e.transactionId, e.orderId
                        } catch (e) {
                            throw console.error("Failed to create order:", e), e
                        }
                    }, i = async (e, s) => {
                        try {
                            console.log(e);
                            let s = await (0, b.k)("POST", "/api/paypal/capture-order", {
                                orderID: e.orderID,
                                transactionId: t.current
                            });
                            console.log("Capture result", s), r((0, N.Al)())
                        } catch (e) {
                            console.error("Failed to capture order:", e)
                        }
                    };
                    return (0, a.jsx)(j.Vv, {
                        options: {
                            clientId: "AThuj1Jy7c1G1GtbRTaDtnJPtE7ESPeuX1_vHXIqYy2x32o_8YqlyglA815cXw_lChOe9E67HG3P929y"
                        },
                        children: (0, a.jsx)(j.ch, {
                            createOrder: n,
                            onApprove: i
                        })
                    })
                },
                y = t(82695);
            let w = e => {
                    let {
                        text: s
                    } = e, [t, n] = (0, l.useState)(!1), i = async () => {
                        try {
                            await navigator.clipboard.writeText(s), n(!0), setTimeout(() => n(!1), 2e3)
                        } catch (e) {
                            console.error("Failed to copy text: ", e)
                        }
                    };
                    return (0, a.jsx)(r.z, {
                        onClick: i,
                        variant: "outline",
                        size: "sm",
                        className: "ml-2",
                        children: t ? (0, a.jsx)(u.Z, {
                            size: 16
                        }) : (0, a.jsx)(m.Z, {
                            size: 16
                        })
                    })
                },
                C = e => {
                    let {
                        bankName: s,
                        accountNumber: t,
                        iban: l,
                        whatsappNumber: r
                    } = e;
                    return (0, a.jsxs)("div", {
                        className: "mx-auto mt-4 max-w-2xl rounded-lg bg-muted p-6 shadow-md",
                        children: [(0, a.jsx)("h2", {
                            className: "mb-4 text-2xl font-bold text-primary",
                            children: "Payment Details"
                        }), (0, a.jsxs)("div", {
                            className: "mb-6",
                            children: [(0, a.jsx)("h3", {
                                className: "mb-3 text-lg font-semibold",
                                children: "Bank Transfer"
                            }), (0, a.jsx)("div", {
                                className: "space-y-2",
                                children: [{
                                    label: "Bank Name",
                                    value: s
                                }, {
                                    label: "Account Title",
                                    value: "Muhammad"
                                }, {
                                    label: "Account Number",
                                    value: t
                                }, {
                                    label: "IBAN Code",
                                    value: l
                                }].map(e => {
                                    let {
                                        label: s,
                                        value: t
                                    } = e;
                                    return (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, a.jsxs)("span", {
                                            className: "font-medium",
                                            children: [s, ":"]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-sm",
                                                children: t
                                            }), (0, a.jsx)(w, {
                                                text: t
                                            })]
                                        })]
                                    }, s)
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mb-6",
                            children: [(0, a.jsx)("h3", {
                                className: "mb-3 text-lg font-semibold",
                                children: "JazzCash"
                            }), (0, a.jsx)("div", {
                                className: "space-y-2",
                                children: [{
                                    label: "Name",
                                    value: "Waseem Anjum"
                                }, {
                                    label: "Number",
                                    value: "03019222435"
                                }].map(e => {
                                    let {
                                        label: s,
                                        value: t
                                    } = e;
                                    return (0, a.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [(0, a.jsxs)("span", {
                                            className: "font-medium",
                                            children: [s, ":"]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center space-x-2",
                                            children: [(0, a.jsx)("span", {
                                                className: "text-sm",
                                                children: t
                                            }), (0, a.jsx)(w, {
                                                text: t
                                            })]
                                        })]
                                    }, s)
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "rounded-md bg-blue-50 p-4",
                            children: (0, a.jsxs)("div", {
                                className: "flex",
                                children: [(0, a.jsx)("div", {
                                    className: "flex-shrink-0",
                                    children: (0, a.jsx)(x.Z, {
                                        className: "h-5 w-5 text-blue-400"
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "ml-3",
                                    children: [(0, a.jsx)("h3", {
                                        className: "text-sm font-medium text-blue-800",
                                        children: "Payment Confirmation"
                                    }), (0, a.jsxs)("div", {
                                        className: "mt-2 flex items-center text-sm text-blue-700",
                                        children: [(0, a.jsx)("p", {
                                            children: "After payment, please send a screenshot to our WhatsApp: "
                                        }), (0, a.jsxs)(p.default, {
                                            href: "https://wa.link/m5rrem",
                                            target: "_blank",
                                            className: "flex items-center font-bold",
                                            children: [r, " ", (0, a.jsx)(f.Z, {
                                                size: 16
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                k = e => {
                    let {
                        credits: s,
                        onSelect: t,
                        section: l,
                        description: n
                    } = e, {
                        price: o,
                        discount: u
                    } = (0, d.xH)(s), m = Math.floor(s / ("our" === l ? c.ot : c.eL));
                    return (0, a.jsxs)(i.Zb, {
                        className: "flex w-full flex-col rounded-3xl lg:h-[600px]",
                        children: [(0, a.jsxs)(i.Ol, {
                            children: [(0, a.jsxs)(i.ll, {
                                children: [s.toLocaleString(), " Credits"]
                            }), (0, a.jsx)(i.SZ, {
                                children: n
                            })]
                        }), (0, a.jsxs)(i.aY, {
                            children: [(0, a.jsxs)("p", {
                                className: "mt-5 text-5xl font-semibold",
                                children: ["$", o, u > 0 && (0, a.jsxs)("span", {
                                    className: "ml-2 text-2xl text-gray-500 line-through",
                                    children: ["$", o + u]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-9 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsxs)("span", {
                                    className: "block text-lg",
                                    children: ["~", m, " images"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-2 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsx)("span", {
                                    className: "block text-lg",
                                    children: "our" === l ? "Don't Need a API Key" : "Your OpenAI/Gemini API Key"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-2 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsx)("span", {
                                    className: "block text-lg",
                                    children: "our" === l ? "Fast Processing" : "Speed Depends on your API"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-2 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsx)("span", {
                                    className: "block text-lg",
                                    children: "AI Vision Included"
                                })]
                            })]
                        }), (0, a.jsx)(i.eW, {
                            className: "mt-auto",
                            children: (0, a.jsx)(r.z, {
                                onClick: () => t(s, o),
                                size: "lg",
                                className: "w-full",
                                children: "Continue"
                            })
                        })]
                    })
                },
                z = e => {
                    let {
                        onSelect: s,
                        section: t
                    } = e, [u, m] = (0, l.useState)(""), [x, f] = (0, l.useState)({
                        price: 0,
                        discount: 0
                    }), [p, j] = (0, l.useState)(0);
                    return (0, a.jsxs)(i.Zb, {
                        className: "flex w-full flex-col rounded-3xl lg:h-[600px]",
                        children: [(0, a.jsxs)(i.Ol, {
                            children: [(0, a.jsx)(i.ll, {
                                children: "Custom Package"
                            }), (0, a.jsx)(i.SZ, {
                                children: "Choose your own amount"
                            })]
                        }), (0, a.jsxs)(i.aY, {
                            children: [(0, a.jsx)(n.I, {
                                type: "text",
                                value: u,
                                onChange: e => {
                                    let s = e.target.value;
                                    /^\d*$/.test(s) && (m(s), f((0, d.xH)(Number(s))), j(Math.floor(Number(s) / ("our" === t ? c.ot : c.eL))))
                                },
                                placeholder: "Enter credits amount (min 20000)"
                            }), (0, a.jsxs)("div", {
                                className: "mt-4",
                                children: [(0, a.jsxs)("p", {
                                    children: ["Estimated price: $", (0, d.xH)(Number(u)).price]
                                }), (0, a.jsx)("p", {
                                    children: x.discount > 0 && (0, a.jsxs)("span", {
                                        className: "text-sm text-gray-500 line-through",
                                        children: ["Discount: $", x.price + x.discount]
                                    })
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-9 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsxs)("span", {
                                    className: "block text-lg",
                                    children: ["~", p, " images"]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-2 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsx)("span", {
                                    className: "block text-lg",
                                    children: "Customizable amount"
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "mt-2 flex items-center gap-2",
                                children: [(0, a.jsx)(h.Z, {
                                    size: 18,
                                    className: "text-green-500"
                                }), (0, a.jsx)("span", {
                                    className: "block text-lg",
                                    children: "our" === t ? "Don't Need an API Key" : "Your OpenAI/Gemini API Key"
                                })]
                            })]
                        }), (0, a.jsx)(i.eW, {
                            className: "mt-auto",
                            children: (0, a.jsx)(r.z, {
                                onClick: () => {
                                    let e = Number(u);
                                    if (e < 2e4) {
                                        o.default.error("Minimum amount is 20000 credits");
                                        return
                                    }
                                    if (e <= 0) {
                                        o.default.error("Please enter a valid amount");
                                        return
                                    }
                                    s(e, x.price)
                                },
                                size: "lg",
                                className: "w-full",
                                children: "Continue"
                            })
                        })]
                    })
                };
            var P = () => {
                let [e, s] = (0, l.useState)(null), [t, n] = (0, l.useState)("our"), [i, c] = (0, l.useState)(null), o = (e, t) => {
                    s({
                        credits: e,
                        price: t
                    })
                };
                return (0, a.jsxs)("div", {
                    className: "container mx-auto px-4",
                    children: [(0, a.jsxs)("div", {
                        className: "mb-5 flex flex-wrap items-center gap-3",
                        children: [(0, a.jsx)("h1", {
                            className: "mb-4 text-5xl font-semibold",
                            children: "Buy Credits"
                        }), !e && (0, a.jsxs)("div", {
                            className: "relative h-14 cursor-pointer grid-cols-2 whitespace-nowrap rounded-full bg-black/10 px-4 text-sm",
                            onClick: () => n("our" === t ? "own" : "our"),
                            children: [(0, a.jsxs)("div", {
                                className: "relative z-10 flex h-full items-center gap-2",
                                children: [(0, a.jsx)("div", {
                                    className: "flex h-full w-40 items-center justify-center",
                                    children: "I don't have API Key"
                                }), (0, a.jsx)("div", {
                                    className: "flex h-full w-40 items-center justify-center",
                                    children: "I have API Key"
                                })]
                            }), (0, a.jsx)("div", {
                                className: (0, d.cn)("pointer-events-none absolute top-1/2 h-[calc(100%-8px)] w-[calc(50%+4px)] -translate-y-1/2 rounded-full bg-white", "our" === t ? "left-1" : "right-1")
                            })]
                        })]
                    }), e ? (0, a.jsxs)("div", {
                        className: "mx-auto max-w-2xl",
                        children: [(0, a.jsxs)("h2", {
                            className: "mb-4 text-2xl font-semibold",
                            children: ["Selected Package: ", e.credits.toLocaleString(), " Credits for $", e.price]
                        }), i ? "paypal" === i ? (0, a.jsx)("div", {
                            className: "mt-10",
                            children: (0, a.jsx)(v, {
                                credits: e.credits
                            })
                        }) : (0, a.jsx)(C, {
                            bankName: "Habib Bank Limited",
                            accountNumber: "25747000060599",
                            iban: "PK96HABB0025747000060599",
                            whatsappNumber: "+923019222435"
                        }) : (0, a.jsxs)("div", {
                            className: "mx-auto mt-20 flex min-h-96 flex-col justify-center gap-3",
                            children: [(0, a.jsx)("h3", {
                                className: "mb-5 text-4xl",
                                children: "Select Payment Method"
                            }), (0, a.jsxs)(r.z, {
                                onClick: () => c("paypal"),
                                size: "lg",
                                variant: "ghost",
                                className: "bg-gray-200",
                                children: [(0, a.jsx)(y.zy, {}), "Pay with PayPal/Card"]
                            }), (0, a.jsx)(r.z, {
                                onClick: () => c("bank"),
                                size: "lg",
                                children: "Direct Bank, JazzCash"
                            })]
                        }), (0, a.jsx)(r.z, {
                            onClick: () => {
                                s(null), c(null)
                            },
                            className: "ml-auto mt-4 block",
                            size: "lg",
                            variant: "destructive",
                            children: "Choose Different Package"
                        })]
                    }) : (0, a.jsxs)("div", {
                        className: "mx-auto mt-20 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-5",
                        children: [(0, a.jsx)(k, {
                            credits: 1e4,
                            onSelect: o,
                            section: t,
                            description: "Starter: Great for beginners."
                        }), (0, a.jsx)(k, {
                            credits: 1e5,
                            onSelect: o,
                            section: t,
                            description: "Pro: Best value for high-volume users."
                        }), (0, a.jsx)(z, {
                            onSelect: o,
                            section: t
                        })]
                    })]
                })
            }
        },
        36013: function(e, s, t) {
            "use strict";
            t.d(s, {
                Ol: function() {
                    return i
                },
                SZ: function() {
                    return d
                },
                Zb: function() {
                    return n
                },
                aY: function() {
                    return o
                },
                eW: function() {
                    return u
                },
                ll: function() {
                    return c
                }
            });
            var a = t(57437),
                l = t(2265),
                r = t(37440);
            let n = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("rounded-lg border bg-card text-card-foreground shadow-sm", t),
                    ...l
                })
            });
            n.displayName = "Card";
            let i = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("flex flex-col space-y-1.5 p-6", t),
                    ...l
                })
            });
            i.displayName = "CardHeader";
            let c = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("h3", {
                    ref: s,
                    className: (0, r.cn)("text-2xl font-semibold leading-none tracking-tight", t),
                    ...l
                })
            });
            c.displayName = "CardTitle";
            let d = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("p", {
                    ref: s,
                    className: (0, r.cn)("text-sm text-muted-foreground", t),
                    ...l
                })
            });
            d.displayName = "CardDescription";
            let o = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("p-6 pt-0", t),
                    ...l
                })
            });
            o.displayName = "CardContent";
            let u = l.forwardRef((e, s) => {
                let {
                    className: t,
                    ...l
                } = e;
                return (0, a.jsx)("div", {
                    ref: s,
                    className: (0, r.cn)("flex items-center p-6 pt-0", t),
                    ...l
                })
            });
            u.displayName = "CardFooter"
        },
        83102: function(e, s, t) {
            "use strict";
            t.d(s, {
                I: function() {
                    return n
                }
            });
            var a = t(57437),
                l = t(2265),
                r = t(37440);
            let n = l.forwardRef((e, s) => {
                let {
                    className: t,
                    type: l,
                    ...n
                } = e;
                return (0, a.jsx)("input", {
                    type: l,
                    className: (0, r.cn)("flex h-12 w-full rounded-xl border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t),
                    ref: s,
                    ...n
                })
            });
            n.displayName = "Input"
        },
        84074: function(e, s, t) {
            "use strict";
            t.d(s, {
                Al: function() {
                    return n
                },
                FQ: function() {
                    return r
                }
            });
            var a = t(96264),
                l = t(66862);
            let r = (0, l.hg)("user/fetchUserData", async () => {
                    let e = await (0, a.k)("GET", "/api/user");
                    if (!e) throw Error("Failed to fetch user data");
                    return e.user
                }),
                n = (0, l.hg)("user/updateUserData", async () => {
                    let e = await (0, a.k)("GET", "/api/user");
                    if (!e) throw Error("Failed to fetch user data");
                    return e.user
                }),
                i = (0, l.oM)({
                    name: "user",
                    initialState: {
                        data: null,
                        status: "idle",
                        error: null
                    },
                    reducers: {
                        setUser(e, s) {
                            e.data = s.payload
                        }
                    },
                    extraReducers: e => {
                        e.addCase(r.pending, e => {
                            e.status = "loading"
                        }).addCase(r.fulfilled, (e, s) => {
                            e.status = "succeeded", e.data = s.payload
                        }).addCase(r.rejected, (e, s) => {
                            e.status = "failed", e.error = s.error.message || "Failed to fetch user data"
                        }).addCase(n.fulfilled, (e, s) => {
                            e.data = s.payload
                        }).addCase(n.rejected, (e, s) => {
                            e.error = s.error.message || "Failed to update user data"
                        })
                    }
                }),
                {
                    setUser: c
                } = i.actions;
            s.ZP = i.reducer
        },
        99178: function(e, s, t) {
            "use strict";
            t.d(s, {
                C: function() {
                    return r
                },
                T: function() {
                    return l
                }
            });
            var a = t(11444);
            let l = a.I0,
                r = a.v9
        }
    },
    function(e) {
        e.O(0, [726, 472, 5, 231, 444, 862, 825, 692, 971, 23, 744], function() {
            return e(e.s = 95965)
        }), _N_E = e.O()
    }
]);