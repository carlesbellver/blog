/**
 * Original file: /npm/minisearch@6.3.0/dist/umd/index.js
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).MiniSearch = e()
}(this, (function() {
    "use strict";
    var t = function() {
        return t = Object.assign || function(t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
                for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }, t.apply(this, arguments)
    };

    function e(t, e, r, n) {
        return new(r || (r = Promise))((function(i, o) {
            function u(t) {
                try {
                    s(n.next(t))
                } catch (t) {
                    o(t)
                }
            }

            function a(t) {
                try {
                    s(n.throw(t))
                } catch (t) {
                    o(t)
                }
            }

            function s(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof r ? e : new r((function(t) {
                    t(e)
                }))).then(u, a)
            }
            s((n = n.apply(t, e || [])).next())
        }))
    }

    function r(t, e) {
        var r, n, i, o, u = {
            label: 0,
            sent: function() {
                if (1 & i[0]) throw i[1];
                return i[1]
            },
            trys: [],
            ops: []
        };
        return o = {
            next: a(0),
            throw: a(1),
            return: a(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
            return this
        }), o;

        function a(a) {
            return function(s) {
                return function(a) {
                    if (r) throw new TypeError("Generator is already executing.");
                    for (; o && (o = 0, a[0] && (u = 0)), u;) try {
                        if (r = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, a[1])).done) return i;
                        switch (n = 0, i && (a = [2 & a[0], i.value]), a[0]) {
                            case 0:
                            case 1:
                                i = a;
                                break;
                            case 4:
                                return u.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(i = u.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
                                    u.label = a[1];
                                    break
                                }
                                if (6 === a[0] && u.label < i[1]) {
                                    u.label = i[1], i = a;
                                    break
                                }
                                if (i && u.label < i[2]) {
                                    u.label = i[2], u.ops.push(a);
                                    break
                                }
                                i[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        a = e.call(t, u)
                    } catch (t) {
                        a = [6, t], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }([a, s])
            }
        }
    }

    function n(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function i(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, i, o = r.call(t),
            u = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = o.next()).done;) u.push(n.value)
        } catch (t) {
            i = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    }
    "function" == typeof SuppressedError && SuppressedError;
    var o, u = "KEYS",
        a = "VALUES",
        s = "",
        l = function() {
            function t(t, e) {
                var r = t._tree,
                    n = Array.from(r.keys());
                this.set = t, this._type = e, this._path = n.length > 0 ? [{
                    node: r,
                    keys: n
                }] : []
            }
            return t.prototype.next = function() {
                var t = this.dive();
                return this.backtrack(), t
            }, t.prototype.dive = function() {
                if (0 === this._path.length) return {
                    done: !0,
                    value: void 0
                };
                var t = c(this._path),
                    e = t.node,
                    r = t.keys;
                if (c(r) === s) return {
                    done: !1,
                    value: this.result()
                };
                var n = e.get(c(r));
                return this._path.push({
                    node: n,
                    keys: Array.from(n.keys())
                }), this.dive()
            }, t.prototype.backtrack = function() {
                if (0 !== this._path.length) {
                    var t = c(this._path).keys;
                    t.pop(), t.length > 0 || (this._path.pop(), this.backtrack())
                }
            }, t.prototype.key = function() {
                return this.set._prefix + this._path.map((function(t) {
                    var e = t.keys;
                    return c(e)
                })).filter((function(t) {
                    return t !== s
                })).join("")
            }, t.prototype.value = function() {
                return c(this._path).node.get(s)
            }, t.prototype.result = function() {
                switch (this._type) {
                    case a:
                        return this.value();
                    case u:
                        return this.key();
                    default:
                        return [this.key(), this.value()]
                }
            }, t.prototype[Symbol.iterator] = function() {
                return this
            }, t
        }(),
        c = function(t) {
            return t[t.length - 1]
        },
        h = function(t, e, r, i, o, u, a, l) {
            var c, d, f = u * a;
            try {
                t: for (var y = n(t.keys()), v = y.next(); !v.done; v = y.next()) {
                    var p = v.value;
                    if (p === s) {
                        var m = o[f - 1];
                        m <= r && i.set(l, [t.get(p), m])
                    } else {
                        for (var _ = u, g = 0; g < p.length; ++g, ++_) {
                            for (var F = p[g], x = a * _, w = x - a, b = o[x], A = Math.max(0, _ - r - 1), C = Math.min(a - 1, _ + r), E = A; E < C; ++E) {
                                var z = F !== e[E],
                                    S = o[w + E] + +z,
                                    D = o[w + E + 1] + 1,
                                    I = o[x + E] + 1,
                                    k = o[x + E + 1] = Math.min(S, D, I);
                                k < b && (b = k)
                            }
                            if (b > r) continue t
                        }
                        h(t.get(p), e, r, i, o, _, a, l + p)
                    }
                }
            }
            catch (t) {
                c = {
                    error: t
                }
            } finally {
                try {
                    v && !v.done && (d = y.return) && d.call(y)
                } finally {
                    if (c) throw c.error
                }
            }
        },
        d = function() {
            function t(t, e) {
                void 0 === t && (t = new Map), void 0 === e && (e = ""), this._size = void 0, this._tree = t, this._prefix = e
            }
            return t.prototype.atPrefix = function(e) {
                var r, o;
                if (!e.startsWith(this._prefix)) throw new Error("Mismatched prefix");
                var u = i(f(this._tree, e.slice(this._prefix.length)), 2),
                    a = u[0],
                    l = u[1];
                if (void 0 === a) {
                    var c = i(g(l), 2),
                        h = c[0],
                        d = c[1];
                    try {
                        for (var y = n(h.keys()), v = y.next(); !v.done; v = y.next()) {
                            var p = v.value;
                            if (p !== s && p.startsWith(d)) {
                                var m = new Map;
                                return m.set(p.slice(d.length), h.get(p)), new t(m, e)
                            }
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            v && !v.done && (o = y.return) && o.call(y)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                }
                return new t(a, e)
            }, t.prototype.clear = function() {
                this._size = void 0, this._tree.clear()
            }, t.prototype.delete = function(t) {
                return this._size = void 0, p(this._tree, t)
            }, t.prototype.entries = function() {
                return new l(this, "ENTRIES")
            }, t.prototype.forEach = function(t) {
                var e, r;
                try {
                    for (var o = n(this), u = o.next(); !u.done; u = o.next()) {
                        var a = i(u.value, 2);
                        t(a[0], a[1], this)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        u && !u.done && (r = o.return) && r.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, t.prototype.fuzzyGet = function(t, e) {
                return function(t, e, r) {
                    var n = new Map;
                    if (void 0 === e) return n;
                    for (var i = e.length + 1, o = i + r, u = new Uint8Array(o * i).fill(r + 1), a = 0; a < i; ++a) u[a] = a;
                    for (var s = 1; s < o; ++s) u[s * i] = s;
                    return h(t, e, r, n, u, 1, i, ""), n
                }(this._tree, t, e)
            }, t.prototype.get = function(t) {
                var e = y(this._tree, t);
                return void 0 !== e ? e.get(s) : void 0
            }, t.prototype.has = function(t) {
                var e = y(this._tree, t);
                return void 0 !== e && e.has(s)
            }, t.prototype.keys = function() {
                return new l(this, u)
            }, t.prototype.set = function(t, e) {
                if ("string" != typeof t) throw new Error("key must be a string");
                return this._size = void 0, v(this._tree, t).set(s, e), this
            }, Object.defineProperty(t.prototype, "size", {
                get: function() {
                    if (this._size) return this._size;
                    this._size = 0;
                    for (var t = this.entries(); !t.next().done;) this._size += 1;
                    return this._size
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.update = function(t, e) {
                if ("string" != typeof t) throw new Error("key must be a string");
                this._size = void 0;
                var r = v(this._tree, t);
                return r.set(s, e(r.get(s))), this
            }, t.prototype.fetch = function(t, e) {
                if ("string" != typeof t) throw new Error("key must be a string");
                this._size = void 0;
                var r = v(this._tree, t),
                    n = r.get(s);
                return void 0 === n && r.set(s, n = e()), n
            }, t.prototype.values = function() {
                return new l(this, a)
            }, t.prototype[Symbol.iterator] = function() {
                return this.entries()
            }, t.from = function(e) {
                var r, o, u = new t;
                try {
                    for (var a = n(e), s = a.next(); !s.done; s = a.next()) {
                        var l = i(s.value, 2),
                            c = l[0],
                            h = l[1];
                        u.set(c, h)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        s && !s.done && (o = a.return) && o.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return u
            }, t.fromObject = function(e) {
                return t.from(Object.entries(e))
            }, t
        }(),
        f = function(t, e, r) {
            var i, o;
            if (void 0 === r && (r = []), 0 === e.length || null == t) return [t, r];
            try {
                for (var u = n(t.keys()), a = u.next(); !a.done; a = u.next()) {
                    var l = a.value;
                    if (l !== s && e.startsWith(l)) return r.push([t, l]), f(t.get(l), e.slice(l.length), r)
                }
            } catch (t) {
                i = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (o = u.return) && o.call(u)
                } finally {
                    if (i) throw i.error
                }
            }
            return r.push([t, e]), f(void 0, "", r)
        },
        y = function(t, e) {
            var r, i;
            if (0 === e.length || null == t) return t;
            try {
                for (var o = n(t.keys()), u = o.next(); !u.done; u = o.next()) {
                    var a = u.value;
                    if (a !== s && e.startsWith(a)) return y(t.get(a), e.slice(a.length))
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (i = o.return) && i.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
        },
        v = function(t, e) {
            var r, i, o = e.length;
            t: for (var u = 0; t && u < o;) {
                try {
                    for (var a = (r = void 0, n(t.keys())), l = a.next(); !l.done; l = a.next()) {
                        var c = l.value;
                        if (c !== s && e[u] === c[0]) {
                            for (var h = Math.min(o - u, c.length), d = 1; d < h && e[u + d] === c[d];) ++d;
                            var f = t.get(c);
                            if (d === c.length) t = f;
                            else {
                                var y = new Map;
                                y.set(c.slice(d), f), t.set(e.slice(u, u + d), y), t.delete(c), t = y
                            }
                            u += d;
                            continue t
                        }
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (i = a.return) && i.call(a)
                    } finally {
                        if (r) throw r.error
                    }
                }
                var v = new Map;
                return t.set(e.slice(u), v), v
            }
            return t
        },
        p = function(t, e) {
            var r = i(f(t, e), 2),
                n = r[0],
                o = r[1];
            if (void 0 !== n)
                if (n.delete(s), 0 === n.size) m(o);
                else if (1 === n.size) {
                var u = i(n.entries().next().value, 2),
                    a = u[0],
                    l = u[1];
                _(o, a, l)
            }
        },
        m = function(t) {
            if (0 !== t.length) {
                var e = i(g(t), 2),
                    r = e[0],
                    n = e[1];
                if (r.delete(n), 0 === r.size) m(t.slice(0, -1));
                else if (1 === r.size) {
                    var o = i(r.entries().next().value, 2),
                        u = o[0],
                        a = o[1];
                    u !== s && _(t.slice(0, -1), u, a)
                }
            }
        },
        _ = function(t, e, r) {
            if (0 !== t.length) {
                var n = i(g(t), 2),
                    o = n[0],
                    u = n[1];
                o.set(u + e, r), o.delete(u)
            }
        },
        g = function(t) {
            return t[t.length - 1]
        },
        F = "or",
        x = function() {
            function o(e) {
                if (null == (null == e ? void 0 : e.fields)) throw new Error('MiniSearch: option "fields" must be provided');
                var r = null == e.autoVacuum || !0 === e.autoVacuum ? k : e.autoVacuum;
                this._options = t(t(t({}, E), e), {
                    autoVacuum: r,
                    searchOptions: t(t({}, z), e.searchOptions || {}),
                    autoSuggestOptions: t(t({}, S), e.autoSuggestOptions || {})
                }), this._index = new d, this._documentCount = 0, this._documentIds = new Map, this._idToShortId = new Map, this._fieldIds = {}, this._fieldLength = new Map, this._avgFieldLength = [], this._nextId = 0, this._storedFields = new Map, this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = I, this.addFields(this._options.fields)
            }
            return o.prototype.add = function(t) {
                var e, r, i, o, u, a, s = this._options,
                    l = s.extractField,
                    c = s.tokenize,
                    h = s.processTerm,
                    d = s.fields,
                    f = s.idField,
                    y = l(t, f);
                if (null == y) throw new Error('MiniSearch: document does not have ID field "'.concat(f, '"'));
                if (this._idToShortId.has(y)) throw new Error("MiniSearch: duplicate ID ".concat(y));
                var v = this.addDocumentId(y);
                this.saveStoredFields(v, t);
                try {
                    for (var p = n(d), m = p.next(); !m.done; m = p.next()) {
                        var _ = m.value,
                            g = l(t, _);
                        if (null != g) {
                            var F = c(g.toString(), _),
                                x = this._fieldIds[_],
                                w = new Set(F).size;
                            this.addFieldLength(v, x, this._documentCount - 1, w);
                            try {
                                for (var b = (i = void 0, n(F)), A = b.next(); !A.done; A = b.next()) {
                                    var C = h(A.value, _);
                                    if (Array.isArray(C)) try {
                                        for (var E = (u = void 0, n(C)), z = E.next(); !z.done; z = E.next()) {
                                            var S = z.value;
                                            this.addTerm(x, v, S)
                                        }
                                    } catch (t) {
                                        u = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            z && !z.done && (a = E.return) && a.call(E)
                                        } finally {
                                            if (u) throw u.error
                                        }
                                    } else C && this.addTerm(x, v, C)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    A && !A.done && (o = b.return) && o.call(b)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        m && !m.done && (r = p.return) && r.call(p)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, o.prototype.addAll = function(t) {
                var e, r;
                try {
                    for (var i = n(t), o = i.next(); !o.done; o = i.next()) {
                        var u = o.value;
                        this.add(u)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                }
            }, o.prototype.addAllAsync = function(t, e) {
                var r = this;
                void 0 === e && (e = {});
                var n = e.chunkSize,
                    i = void 0 === n ? 10 : n,
                    o = {
                        chunk: [],
                        promise: Promise.resolve()
                    },
                    u = t.reduce((function(t, e, n) {
                        var o = t.chunk,
                            u = t.promise;
                        return o.push(e), (n + 1) % i == 0 ? {
                            chunk: [],
                            promise: u.then((function() {
                                return new Promise((function(t) {
                                    return setTimeout(t, 0)
                                }))
                            })).then((function() {
                                return r.addAll(o)
                            }))
                        } : {
                            chunk: o,
                            promise: u
                        }
                    }), o),
                    a = u.chunk;
                return u.promise.then((function() {
                    return r.addAll(a)
                }))
            }, o.prototype.remove = function(t) {
                var e, r, i, o, u, a, s = this._options,
                    l = s.tokenize,
                    c = s.processTerm,
                    h = s.extractField,
                    d = s.fields,
                    f = s.idField,
                    y = h(t, f);
                if (null == y) throw new Error('MiniSearch: document does not have ID field "'.concat(f, '"'));
                var v = this._idToShortId.get(y);
                if (null == v) throw new Error("MiniSearch: cannot remove document with ID ".concat(y, ": it is not in the index"));
                try {
                    for (var p = n(d), m = p.next(); !m.done; m = p.next()) {
                        var _ = m.value,
                            g = h(t, _);
                        if (null != g) {
                            var F = l(g.toString(), _),
                                x = this._fieldIds[_],
                                w = new Set(F).size;
                            this.removeFieldLength(v, x, this._documentCount, w);
                            try {
                                for (var b = (i = void 0, n(F)), A = b.next(); !A.done; A = b.next()) {
                                    var C = c(A.value, _);
                                    if (Array.isArray(C)) try {
                                        for (var E = (u = void 0, n(C)), z = E.next(); !z.done; z = E.next()) {
                                            var S = z.value;
                                            this.removeTerm(x, v, S)
                                        }
                                    } catch (t) {
                                        u = {
                                            error: t
                                        }
                                    } finally {
                                        try {
                                            z && !z.done && (a = E.return) && a.call(E)
                                        } finally {
                                            if (u) throw u.error
                                        }
                                    } else C && this.removeTerm(x, v, C)
                                }
                            } catch (t) {
                                i = {
                                    error: t
                                }
                            } finally {
                                try {
                                    A && !A.done && (o = b.return) && o.call(b)
                                } finally {
                                    if (i) throw i.error
                                }
                            }
                        }
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        m && !m.done && (r = p.return) && r.call(p)
                    } finally {
                        if (e) throw e.error
                    }
                }
                this._storedFields.delete(v), this._documentIds.delete(v), this._idToShortId.delete(y), this._fieldLength.delete(v), this._documentCount -= 1
            }, o.prototype.removeAll = function(t) {
                var e, r;
                if (t) try {
                    for (var i = n(t), o = i.next(); !o.done; o = i.next()) {
                        var u = o.value;
                        this.remove(u)
                    }
                } catch (t) {
                    e = {
                        error: t
                    }
                } finally {
                    try {
                        o && !o.done && (r = i.return) && r.call(i)
                    } finally {
                        if (e) throw e.error
                    }
                } else {
                    if (arguments.length > 0) throw new Error("Expected documents to be present. Omit the argument to remove all documents.");
                    this._index = new d, this._documentCount = 0, this._documentIds = new Map, this._idToShortId = new Map, this._fieldLength = new Map, this._avgFieldLength = [], this._storedFields = new Map, this._nextId = 0
                }
            }, o.prototype.discard = function(t) {
                var e = this,
                    r = this._idToShortId.get(t);
                if (null == r) throw new Error("MiniSearch: cannot discard document with ID ".concat(t, ": it is not in the index"));
                this._idToShortId.delete(t), this._documentIds.delete(r), this._storedFields.delete(r), (this._fieldLength.get(r) || []).forEach((function(t, n) {
                    e.removeFieldLength(r, n, e._documentCount, t)
                })), this._fieldLength.delete(r), this._documentCount -= 1, this._dirtCount += 1, this.maybeAutoVacuum()
            }, o.prototype.maybeAutoVacuum = function() {
                if (!1 !== this._options.autoVacuum) {
                    var t = this._options.autoVacuum,
                        e = t.minDirtFactor,
                        r = t.minDirtCount,
                        n = t.batchSize,
                        i = t.batchWait;
                    this.conditionalVacuum({
                        batchSize: n,
                        batchWait: i
                    }, {
                        minDirtCount: r,
                        minDirtFactor: e
                    })
                }
            }, o.prototype.discardAll = function(t) {
                var e, r, i = this._options.autoVacuum;
                try {
                    this._options.autoVacuum = !1;
                    try {
                        for (var o = n(t), u = o.next(); !u.done; u = o.next()) {
                            var a = u.value;
                            this.discard(a)
                        }
                    } catch (t) {
                        e = {
                            error: t
                        }
                    } finally {
                        try {
                            u && !u.done && (r = o.return) && r.call(o)
                        } finally {
                            if (e) throw e.error
                        }
                    }
                } finally {
                    this._options.autoVacuum = i
                }
                this.maybeAutoVacuum()
            }, o.prototype.replace = function(t) {
                var e = this._options,
                    r = e.idField,
                    n = (0, e.extractField)(t, r);
                this.discard(n), this.add(t)
            }, o.prototype.vacuum = function(t) {
                return void 0 === t && (t = {}), this.conditionalVacuum(t)
            }, o.prototype.conditionalVacuum = function(t, e) {
                var r = this;
                return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && e, null != this._enqueuedVacuum || (this._enqueuedVacuum = this._currentVacuum.then((function() {
                    var e = r._enqueuedVacuumConditions;
                    return r._enqueuedVacuumConditions = I, r.performVacuuming(t, e)
                }))), this._enqueuedVacuum) : !1 === this.vacuumConditionsMet(e) ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(t), this._currentVacuum)
            }, o.prototype.performVacuuming = function(t, o) {
                return e(this, void 0, void 0, (function() {
                    var e, u, a, s, l, c, h, d, f, y, v, p, m, _, g, F, x, w, b, A, C, E, z, S, I;
                    return r(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (e = this._dirtCount, !this.vacuumConditionsMet(o)) return [3, 10];
                                u = t.batchSize || D.batchSize, a = t.batchWait || D.batchWait, s = 1, r.label = 1;
                            case 1:
                                r.trys.push([1, 7, 8, 9]), l = n(this._index), c = l.next(), r.label = 2;
                            case 2:
                                if (c.done) return [3, 6];
                                h = i(c.value, 2), d = h[0], f = h[1];
                                try {
                                    for (E = void 0, y = n(f), v = y.next(); !v.done; v = y.next()) {
                                        p = i(v.value, 2), m = p[0], _ = p[1];
                                        try {
                                            for (S = void 0, g = n(_), F = g.next(); !F.done; F = g.next()) x = i(F.value, 1), w = x[0], this._documentIds.has(w) || (_.size <= 1 ? f.delete(m) : _.delete(w))
                                        } catch (t) {
                                            S = {
                                                error: t
                                            }
                                        } finally {
                                            try {
                                                F && !F.done && (I = g.return) && I.call(g)
                                            } finally {
                                                if (S) throw S.error
                                            }
                                        }
                                    }
                                } catch (t) {
                                    E = {
                                        error: t
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (z = y.return) && z.call(y)
                                    } finally {
                                        if (E) throw E.error
                                    }
                                }
                                return 0 === this._index.get(d).size && this._index.delete(d), s % u != 0 ? [3, 4] : [4, new Promise((function(t) {
                                    return setTimeout(t, a)
                                }))];
                            case 3:
                                r.sent(), r.label = 4;
                            case 4:
                                s += 1, r.label = 5;
                            case 5:
                                return c = l.next(), [3, 2];
                            case 6:
                                return [3, 9];
                            case 7:
                                return b = r.sent(), A = {
                                    error: b
                                }, [3, 9];
                            case 8:
                                try {
                                    c && !c.done && (C = l.return) && C.call(l)
                                } finally {
                                    if (A) throw A.error
                                }
                                return [7];
                            case 9:
                                this._dirtCount -= e, r.label = 10;
                            case 10:
                                return [4, null];
                            case 11:
                                return r.sent(), this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null, [2]
                        }
                    }))
                }))
            }, o.prototype.vacuumConditionsMet = function(t) {
                if (null == t) return !0;
                var e = t.minDirtCount,
                    r = t.minDirtFactor;
                return e = e || k.minDirtCount, r = r || k.minDirtFactor, this.dirtCount >= e && this.dirtFactor >= r
            }, Object.defineProperty(o.prototype, "isVacuuming", {
                get: function() {
                    return null != this._currentVacuum
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(o.prototype, "dirtCount", {
                get: function() {
                    return this._dirtCount
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(o.prototype, "dirtFactor", {
                get: function() {
                    return this._dirtCount / (1 + this._documentCount + this._dirtCount)
                },
                enumerable: !1,
                configurable: !0
            }), o.prototype.has = function(t) {
                return this._idToShortId.has(t)
            }, o.prototype.getStoredFields = function(t) {
                var e = this._idToShortId.get(t);
                if (null != e) return this._storedFields.get(e)
            }, o.prototype.search = function(t, e) {
                var r, u;
                void 0 === e && (e = {});
                var a = this.executeQuery(t, e),
                    s = [];
                try {
                    for (var l = n(a), c = l.next(); !c.done; c = l.next()) {
                        var h = i(c.value, 2),
                            d = h[0],
                            f = h[1],
                            y = f.score,
                            v = f.terms,
                            p = f.match,
                            m = v.length || 1,
                            _ = {
                                id: this._documentIds.get(d),
                                score: y * m,
                                terms: Object.keys(p),
                                queryTerms: v,
                                match: p
                            };
                        Object.assign(_, this._storedFields.get(d)), (null == e.filter || e.filter(_)) && s.push(_)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        c && !c.done && (u = l.return) && u.call(l)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return t === o.wildcard && null == e.boostDocument && null == this._options.searchOptions.boostDocument || s.sort(V), s
            }, o.prototype.autoSuggest = function(e, r) {
                var o, u, a, s;
                void 0 === r && (r = {}), r = t(t({}, this._options.autoSuggestOptions), r);
                var l = new Map;
                try {
                    for (var c = n(this.search(e, r)), h = c.next(); !h.done; h = c.next()) {
                        var d = h.value,
                            f = d.score,
                            y = (x = d.terms).join(" ");
                        null != (g = l.get(y)) ? (g.score += f, g.count += 1) : l.set(y, {
                            score: f,
                            terms: x,
                            count: 1
                        })
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        h && !h.done && (u = c.return) && u.call(c)
                    } finally {
                        if (o) throw o.error
                    }
                }
                var v = [];
                try {
                    for (var p = n(l), m = p.next(); !m.done; m = p.next()) {
                        var _ = i(m.value, 2),
                            g = _[0],
                            F = _[1],
                            x = (f = F.score, F.terms),
                            w = F.count;
                        v.push({
                            suggestion: g,
                            terms: x,
                            score: f / w
                        })
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        m && !m.done && (s = p.return) && s.call(p)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return v.sort(V), v
            }, Object.defineProperty(o.prototype, "documentCount", {
                get: function() {
                    return this._documentCount
                },
                enumerable: !1,
                configurable: !0
            }), Object.defineProperty(o.prototype, "termCount", {
                get: function() {
                    return this._index.size
                },
                enumerable: !1,
                configurable: !0
            }), o.loadJSON = function(t, e) {
                if (null == e) throw new Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
                return this.loadJS(JSON.parse(t), e)
            }, o.getDefault = function(t) {
                if (E.hasOwnProperty(t)) return w(E, t);
                throw new Error('MiniSearch: unknown option "'.concat(t, '"'))
            }, o.loadJS = function(t, e) {
                var r, u, a, s, l, c, h = t.index,
                    f = t.documentCount,
                    y = t.nextId,
                    v = t.documentIds,
                    p = t.fieldIds,
                    m = t.fieldLength,
                    _ = t.averageFieldLength,
                    g = t.storedFields,
                    F = t.dirtCount,
                    x = t.serializationVersion;
                if (1 !== x && 2 !== x) throw new Error("MiniSearch: cannot deserialize an index created with an incompatible version");
                var w = new o(e);
                w._documentCount = f, w._nextId = y, w._documentIds = L(v), w._idToShortId = new Map, w._fieldIds = p, w._fieldLength = L(m), w._avgFieldLength = _, w._storedFields = L(g), w._dirtCount = F || 0, w._index = new d;
                try {
                    for (var b = n(w._documentIds), A = b.next(); !A.done; A = b.next()) {
                        var C = i(A.value, 2),
                            E = C[0],
                            z = C[1];
                        w._idToShortId.set(z, E)
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        A && !A.done && (u = b.return) && u.call(b)
                    } finally {
                        if (r) throw r.error
                    }
                }
                try {
                    for (var S = n(h), D = S.next(); !D.done; D = S.next()) {
                        var I = i(D.value, 2),
                            k = I[0],
                            M = I[1],
                            O = new Map;
                        try {
                            for (var V = (l = void 0, n(Object.keys(M))), T = V.next(); !T.done; T = V.next()) {
                                var j = T.value,
                                    B = M[j];
                                1 === x && (B = B.ds), O.set(parseInt(j, 10), L(B))
                            }
                        } catch (t) {
                            l = {
                                error: t
                            }
                        } finally {
                            try {
                                T && !T.done && (c = V.return) && c.call(V)
                            } finally {
                                if (l) throw l.error
                            }
                        }
                        w._index.set(k, O)
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        D && !D.done && (s = S.return) && s.call(S)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return w
            }, o.prototype.executeQuery = function(e, r) {
                var n = this;
                if (void 0 === r && (r = {}), e === o.wildcard) return this.executeWildcardQuery(r);
                if ("string" != typeof e) {
                    var i = t(t(t({}, r), e), {
                            queries: void 0
                        }),
                        u = e.queries.map((function(t) {
                            return n.executeQuery(t, i)
                        }));
                    return this.combineResults(u, i.combineWith)
                }
                var a = this._options,
                    s = a.tokenize,
                    l = a.processTerm,
                    c = a.searchOptions,
                    h = t(t({
                        tokenize: s,
                        processTerm: l
                    }, c), r),
                    d = h.tokenize,
                    f = h.processTerm,
                    y = d(e).flatMap((function(t) {
                        return f(t)
                    })).filter((function(t) {
                        return !!t
                    })).map(C(h)).map((function(t) {
                        return n.executeQuerySpec(t, h)
                    }));
                return this.combineResults(y, h.combineWith)
            }, o.prototype.executeQuerySpec = function(e, r) {
                var o, u, a, s, l, c, h = t(t({}, this._options.searchOptions), r),
                    d = (h.fields || this._options.fields).reduce((function(e, r) {
                        var n;
                        return t(t({}, e), ((n = {})[r] = w(h.boost, r) || 1, n))
                    }), {}),
                    f = h.boostDocument,
                    y = h.weights,
                    v = h.maxFuzzy,
                    p = h.bm25,
                    m = t(t({}, z.weights), y),
                    _ = m.fuzzy,
                    g = m.prefix,
                    F = this._index.get(e.term),
                    x = this.termResults(e.term, e.term, 1, F, d, f, p);
                if (e.prefix && (l = this._index.atPrefix(e.term)), e.fuzzy) {
                    var b = !0 === e.fuzzy ? .2 : e.fuzzy,
                        A = b < 1 ? Math.min(v, Math.round(e.term.length * b)) : b;
                    A && (c = this._index.fuzzyGet(e.term, A))
                }
                if (l) try {
                    for (var C = n(l), E = C.next(); !E.done; E = C.next()) {
                        var S = i(E.value, 2),
                            D = S[0],
                            I = S[1];
                        if (V = D.length - e.term.length) {
                            null == c || c.delete(D);
                            var k = g * D.length / (D.length + .3 * V);
                            this.termResults(e.term, D, k, I, d, f, p, x)
                        }
                    }
                } catch (t) {
                    o = {
                        error: t
                    }
                } finally {
                    try {
                        E && !E.done && (u = C.return) && u.call(C)
                    } finally {
                        if (o) throw o.error
                    }
                }
                if (c) try {
                    for (var M = n(c.keys()), O = M.next(); !O.done; O = M.next()) {
                        D = O.value;
                        var V, T = i(c.get(D), 2),
                            L = T[0];
                        if (V = T[1]) {
                            k = _ * D.length / (D.length + V);
                            this.termResults(e.term, D, k, L, d, f, p, x)
                        }
                    }
                } catch (t) {
                    a = {
                        error: t
                    }
                } finally {
                    try {
                        O && !O.done && (s = M.return) && s.call(M)
                    } finally {
                        if (a) throw a.error
                    }
                }
                return x
            }, o.prototype.executeWildcardQuery = function(e) {
                var r, o, u = new Map,
                    a = t(t({}, this._options.searchOptions), e);
                try {
                    for (var s = n(this._documentIds), l = s.next(); !l.done; l = s.next()) {
                        var c = i(l.value, 2),
                            h = c[0],
                            d = c[1],
                            f = a.boostDocument ? a.boostDocument(d, "", this._storedFields.get(h)) : 1;
                        u.set(h, {
                            score: f,
                            terms: [],
                            match: {}
                        })
                    }
                } catch (t) {
                    r = {
                        error: t
                    }
                } finally {
                    try {
                        l && !l.done && (o = s.return) && o.call(s)
                    } finally {
                        if (r) throw r.error
                    }
                }
                return u
            }, o.prototype.combineResults = function(t, e) {
                if (void 0 === e && (e = F), 0 === t.length) return new Map;
                var r = e.toLowerCase();
                return t.reduce(b[r]) || new Map
            }, o.prototype.toJSON = function() {
                var t, e, r, o, u = [];
                try {
                    for (var a = n(this._index), s = a.next(); !s.done; s = a.next()) {
                        var l = i(s.value, 2),
                            c = l[0],
                            h = l[1],
                            d = {};
                        try {
                            for (var f = (r = void 0, n(h)), y = f.next(); !y.done; y = f.next()) {
                                var v = i(y.value, 2),
                                    p = v[0],
                                    m = v[1];
                                d[p] = Object.fromEntries(m)
                            }
                        } catch (t) {
                            r = {
                                error: t
                            }
                        } finally {
                            try {
                                y && !y.done && (o = f.return) && o.call(f)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        u.push([c, d])
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (e = a.return) && e.call(a)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return {
                    documentCount: this._documentCount,
                    nextId: this._nextId,
                    documentIds: Object.fromEntries(this._documentIds),
                    fieldIds: this._fieldIds,
                    fieldLength: Object.fromEntries(this._fieldLength),
                    averageFieldLength: this._avgFieldLength,
                    storedFields: Object.fromEntries(this._storedFields),
                    dirtCount: this._dirtCount,
                    index: u,
                    serializationVersion: 2
                }
            }, o.prototype.termResults = function(t, e, r, i, o, u, a, s) {
                var l, c, h, d, f;
                if (void 0 === s && (s = new Map), null == i) return s;
                try {
                    for (var y = n(Object.keys(o)), v = y.next(); !v.done; v = y.next()) {
                        var p = v.value,
                            m = o[p],
                            _ = this._fieldIds[p],
                            g = i.get(_);
                        if (null != g) {
                            var F = g.size,
                                x = this._avgFieldLength[_];
                            try {
                                for (var b = (h = void 0, n(g.keys())), C = b.next(); !C.done; C = b.next()) {
                                    var E = C.value;
                                    if (this._documentIds.has(E)) {
                                        var z = u ? u(this._documentIds.get(E), e, this._storedFields.get(E)) : 1;
                                        if (z) {
                                            var S = g.get(E),
                                                D = this._fieldLength.get(E)[_],
                                                I = r * m * z * A(S, F, this._documentCount, D, x, a),
                                                k = s.get(E);
                                            if (k) {
                                                k.score += I, M(k.terms, t);
                                                var O = w(k.match, e);
                                                O ? O.push(p) : k.match[e] = [p]
                                            } else s.set(E, {
                                                score: I,
                                                terms: [t],
                                                match: (f = {}, f[e] = [p], f)
                                            })
                                        }
                                    } else this.removeTerm(_, E, e), F -= 1
                                }
                            } catch (t) {
                                h = {
                                    error: t
                                }
                            } finally {
                                try {
                                    C && !C.done && (d = b.return) && d.call(b)
                                } finally {
                                    if (h) throw h.error
                                }
                            }
                        }
                    }
                } catch (t) {
                    l = {
                        error: t
                    }
                } finally {
                    try {
                        v && !v.done && (c = y.return) && c.call(y)
                    } finally {
                        if (l) throw l.error
                    }
                }
                return s
            }, o.prototype.addTerm = function(t, e, r) {
                var n = this._index.fetch(r, T),
                    i = n.get(t);
                if (null == i)(i = new Map).set(e, 1), n.set(t, i);
                else {
                    var o = i.get(e);
                    i.set(e, (o || 0) + 1)
                }
            }, o.prototype.removeTerm = function(t, e, r) {
                if (this._index.has(r)) {
                    var n = this._index.fetch(r, T),
                        i = n.get(t);
                    null == i || null == i.get(e) ? this.warnDocumentChanged(e, t, r) : i.get(e) <= 1 ? i.size <= 1 ? n.delete(t) : i.delete(e) : i.set(e, i.get(e) - 1), 0 === this._index.get(r).size && this._index.delete(r)
                } else this.warnDocumentChanged(e, t, r)
            }, o.prototype.warnDocumentChanged = function(t, e, r) {
                var i, o;
                try {
                    for (var u = n(Object.keys(this._fieldIds)), a = u.next(); !a.done; a = u.next()) {
                        var s = a.value;
                        if (this._fieldIds[s] === e) return void this._options.logger("warn", "MiniSearch: document with ID ".concat(this._documentIds.get(t), ' has changed before removal: term "').concat(r, '" was not present in field "').concat(s, '". Removing a document after it has changed can corrupt the index!'), "version_conflict")
                    }
                } catch (t) {
                    i = {
                        error: t
                    }
                } finally {
                    try {
                        a && !a.done && (o = u.return) && o.call(u)
                    } finally {
                        if (i) throw i.error
                    }
                }
            }, o.prototype.addDocumentId = function(t) {
                var e = this._nextId;
                return this._idToShortId.set(t, e), this._documentIds.set(e, t), this._documentCount += 1, this._nextId += 1, e
            }, o.prototype.addFields = function(t) {
                for (var e = 0; e < t.length; e++) this._fieldIds[t[e]] = e
            }, o.prototype.addFieldLength = function(t, e, r, n) {
                var i = this._fieldLength.get(t);
                null == i && this._fieldLength.set(t, i = []), i[e] = n;
                var o = (this._avgFieldLength[e] || 0) * r + n;
                this._avgFieldLength[e] = o / (r + 1)
            }, o.prototype.removeFieldLength = function(t, e, r, n) {
                if (1 !== r) {
                    var i = this._avgFieldLength[e] * r - n;
                    this._avgFieldLength[e] = i / (r - 1)
                } else this._avgFieldLength[e] = 0
            }, o.prototype.saveStoredFields = function(t, e) {
                var r, i, o = this._options,
                    u = o.storeFields,
                    a = o.extractField;
                if (null != u && 0 !== u.length) {
                    var s = this._storedFields.get(t);
                    null == s && this._storedFields.set(t, s = {});
                    try {
                        for (var l = n(u), c = l.next(); !c.done; c = l.next()) {
                            var h = c.value,
                                d = a(e, h);
                            void 0 !== d && (s[h] = d)
                        }
                    } catch (t) {
                        r = {
                            error: t
                        }
                    } finally {
                        try {
                            c && !c.done && (i = l.return) && i.call(l)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                }
            }, o.wildcard = Symbol("*"), o
        }(),
        w = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e) ? t[e] : void 0
        },
        b = ((o = {})[F] = function(t, e) {
            var r, i;
            try {
                for (var o = n(e.keys()), u = o.next(); !u.done; u = o.next()) {
                    var a = u.value,
                        s = t.get(a);
                    if (null == s) t.set(a, e.get(a));
                    else {
                        var l = e.get(a),
                            c = l.score,
                            h = l.terms,
                            d = l.match;
                        s.score = s.score + c, s.match = Object.assign(s.match, d), O(s.terms, h)
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (i = o.return) && i.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
            return t
        }, o.and = function(t, e) {
            var r, i, o = new Map;
            try {
                for (var u = n(e.keys()), a = u.next(); !a.done; a = u.next()) {
                    var s = a.value,
                        l = t.get(s);
                    if (null != l) {
                        var c = e.get(s),
                            h = c.score,
                            d = c.terms,
                            f = c.match;
                        O(l.terms, d), o.set(s, {
                            score: l.score + h,
                            terms: l.terms,
                            match: Object.assign(l.match, f)
                        })
                    }
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    a && !a.done && (i = u.return) && i.call(u)
                } finally {
                    if (r) throw r.error
                }
            }
            return o
        }, o.and_not = function(t, e) {
            var r, i;
            try {
                for (var o = n(e.keys()), u = o.next(); !u.done; u = o.next()) {
                    var a = u.value;
                    t.delete(a)
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (i = o.return) && i.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
            return t
        }, o),
        A = function(t, e, r, n, i, o) {
            var u = o.k,
                a = o.b,
                s = o.d;
            return Math.log(1 + (r - e + .5) / (e + .5)) * (s + t * (u + 1) / (t + u * (1 - a + a * n / i)))
        },
        C = function(t) {
            return function(e, r, n) {
                return {
                    term: e,
                    fuzzy: "function" == typeof t.fuzzy ? t.fuzzy(e, r, n) : t.fuzzy || !1,
                    prefix: "function" == typeof t.prefix ? t.prefix(e, r, n) : !0 === t.prefix
                }
            }
        },
        E = {
            idField: "id",
            extractField: function(t, e) {
                return t[e]
            },
            tokenize: function(t) {
                return t.split(j)
            },
            processTerm: function(t) {
                return t.toLowerCase()
            },
            fields: void 0,
            searchOptions: void 0,
            storeFields: [],
            logger: function(t, e) {
                "function" == typeof(null === console || void 0 === console ? void 0 : console[t]) && console[t](e)
            },
            autoVacuum: !0
        },
        z = {
            combineWith: F,
            prefix: !1,
            fuzzy: !1,
            maxFuzzy: 6,
            boost: {},
            weights: {
                fuzzy: .45,
                prefix: .375
            },
            bm25: {
                k: 1.2,
                b: .7,
                d: .5
            }
        },
        S = {
            combineWith: "and",
            prefix: function(t, e, r) {
                return e === r.length - 1
            }
        },
        D = {
            batchSize: 1e3,
            batchWait: 10
        },
        I = {
            minDirtFactor: .1,
            minDirtCount: 20
        },
        k = t(t({}, D), I),
        M = function(t, e) {
            t.includes(e) || t.push(e)
        },
        O = function(t, e) {
            var r, i;
            try {
                for (var o = n(e), u = o.next(); !u.done; u = o.next()) {
                    var a = u.value;
                    t.includes(a) || t.push(a)
                }
            } catch (t) {
                r = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (i = o.return) && i.call(o)
                } finally {
                    if (r) throw r.error
                }
            }
        },
        V = function(t, e) {
            var r = t.score;
            return e.score - r
        },
        T = function() {
            return new Map
        },
        L = function(t) {
            var e, r, i = new Map;
            try {
                for (var o = n(Object.keys(t)), u = o.next(); !u.done; u = o.next()) {
                    var a = u.value;
                    i.set(parseInt(a, 10), t[a])
                }
            } catch (t) {
                e = {
                    error: t
                }
            } finally {
                try {
                    u && !u.done && (r = o.return) && r.call(o)
                } finally {
                    if (e) throw e.error
                }
            }
            return i
        },
        j = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u;
    return x
}));
//# sourceMappingURL=/sm/95587fc7a9bfa5214058fc3fb97c3c5d3b111ac270f67b9f272b7b392a558ad9.map