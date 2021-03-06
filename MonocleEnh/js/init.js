(function(Z) {
	var Y = Z.documentElement, X, W, V = [], U = [], T = {}, S = {}, R = Z.createElement("script").async === true || "MozAppearance" in Z.documentElement.style || window.opera;
	var Q = window.head_conf && head_conf.head || "head", P = window[Q] = window[Q] ||
	function() {
		P.ready.apply(null, arguments)
	};

	var O = 0, N = 1, M = 2, L = 3;
	R ? P.js = function() {
		var e = arguments, d = e[e.length - 1], f = [];
		G(d) || ( d = null), H(e, function(b, a) {b != d && ( b = I(b), f.push(b), C(b, d && a == e.length - 2 ? function() {F(f) && K(d)
			} : null))
		});
		return P
	} : P.js = function() {
		var e = arguments, c = [].slice.call(e, 1), f = c[0];
		if(!X) {
			U.push(function() {
				P.js.apply(null, e)
			});
			return P
		}
		f ? (H(c, function(b) {G(b) || D(I(b))
		}), C(I(e[0]), G(f) ? f : function() {
			P.js.apply(null, c)
		})) : C(I(e[0]));
		return P
	}, P.ready = function(e, d) {
		if(e == "dom") {
			W ? K(d) : V.push(d);
			return P
		}G(e) && ( d = e, e = "ALL");
		var h = S[e];
		if(h && h.state == L || e == "ALL" && F() && W) {K(d);
			return P
		}
		var g = T[e];
		g ? g.push(d) : g = T[e] = [d];
		return P
	}, P.ready("dom", function() {X && F() && H(T.ALL, function(b) {K(b)
		}), P.feature && P.feature("domloaded", true)
	});
	function K(b) {
		b._done || (b(), b._done = 1)
	}

	function J(f) {
		var e = f.split("/"), h = e[e.length - 1], g = h.indexOf("?");
		return g != -1 ? h.substring(0, g) : h
	}

	function I(f) {
		var e;
		if( typeof f == "object") {
			for(var h in f) {
				f[h] && ( e = {
					name : h,
					url : f[h]
				})
			}
		} else {
			e = {
				name : J(f),
				url : f
			}
		}
		var g = S[e.name];
		if(g && g.url === e.url) {
			return g
		}
		S[e.name] = e;
		return e
	}

	function H(e, d) {
		if(e) { typeof e == "object" && ( e = [].slice.call(e));
			for(var f = 0; f < e.length; f++) {
				d.call(e, e[f], f)
			}
		}
	}

	function G(b) {
		return Object.prototype.toString.call(b) == "[object Function]"
	}

	function F(f) {
		f = f || S;
		var e = false, h = 0;
		for(var g in f) {
			if(f[g].state != L) {
				return false
			} e = true, h++
		}
		return e || h === 0
	}

	function E(b) {b.state = O, H(b.onpreload, function(c) {
			c.call()
		})
	}

	function D(d, c) {
		d.state || (d.state = N, d.onpreload = [], B({
			src : d.url,
			type : "cache"
		}, function() {E(d)
		}))
	}

	function C(d, c) {
		if(d.state == L && c) {
			return c()
		}
		if(d.state == M) {
			return P.ready(d.name, c)
		}
		if(d.state == N) {
			return d.onpreload.push(function() {C(d, c)
			})
		}d.state = M, B(d.url, function() {d.state = L, c && c(), H(T[d.name], function(b) {K(b)
			}), W && F() && H(T.ALL, function(b) {K(b)
			})
		})
	}

	function B(f, b) {
		var a = Z.createElement("script");
		a.type = "text/" + (f.type || "javascript"), a.src = f.src || f, a.async = false, a.onreadystatechange = a.onload = function() {
			var c = a.readyState;
			!b.done && (!c || /loaded|complete/.test(c)) && (b(), b.done = true)
		}, Y.appendChild(a)
	}setTimeout(function() { X = true, H(U, function(b) {b()
		})
	}, 0);
	function A() {
		W || ( W = true, H(V, function(b) {K(b)
		}))
	}window.addEventListener ? (Z.addEventListener("DOMContentLoaded", A, false), window.addEventListener("onload", A, false)) : window.attachEvent && (Z.attachEvent("onreadystatechange", function() {Z.readyState === "complete" && A()
	}), window.frameElement == null && Y.doScroll && function() {
		try {Y.doScroll("left"), A()
		} catch(b) {setTimeout(arguments.callee, 1);
			return
		}
	}(), window.attachEvent("onload", A)), !Z.readyState && Z.addEventListener && (Z.readyState = "loading", Z.addEventListener("DOMContentLoaded", handler = function() {Z.removeEventListener("DOMContentLoaded", handler, false), Z.readyState = "complete"
	}, false))
})(document);
Reading = {
	Panels : {},
	Controls : {},
	TabSheet : {},
	Tabs : {}
};
Reading.ReportingController = function(d) {
	var c = {
		constructor : Reading.ReportingController
	};
	var e = c.constants = c.constructor;
	var b = c;
	function g() {
		b.start = (new Date()).getTime();
		a();
		b.config = d;
		b.bookData = new Reading.BookData(c, b.config.book);
		b.storage = new Reading.Storage(c);
		b.embedded = (top != self);
		window.addEventListener("load", h, false)
	}

	function h() {a();
		b.storage.watchCache(f)
	}

	function f() {a()
	}

	function a(j) {
		var k = document.getElementById("out");
		if(k) {
			k.innerHTML += "."
		}
	}

	function i(k) {
		if(b.embedded && window.parent.postMessage) {
			window.parent.postMessage("cache:" + k, "*")
		}
		var j = document.getElementById("out");
		if(j) {
			j.innerHTML += k == "progress" ? "-" : "\nCaching: " + k
		}
	}
	c.progress = a;
	c.cacheReport = i;
	g();
	return c
};
Reading.ViewingController = function(f) {
	var e = {
		constructor : Reading.ViewingController
	};
	var h = e.constants = e.constructor;
	var d = e;
	function j() {
		d.start = (new Date()).getTime();
		a();
		d.config = f;
		d.bookData = new Reading.BookData(e, d.config.book);
		d.storage = new Reading.Storage(e);
		d.embedded = (top != self);
		d.lectern = new Reading.Lectern(e);
		window.addEventListener("load", l, false)
	}

	function o(k) {
		d.element = k;
		g();
		d.lectern.readerElement(d.element);
		d.element.addEventListener("monocle:componentfailed", function(p) {
			d.binding.componentFailedToLoad(p)
		}, false);
		a()
	}

	function l() {a();
		d.storage.watchCache(i);
		head.js.apply(head, f.paths.monocle.concat([b]))
	}

	function i() {
	}

	function b() {
		Monocle.Browser.survey(function() {
			if(Monocle.Browser.env.embedded && Monocle.Browser.env.brokenIframeTouchModel) {
				return top.location = self.location.href
			}a();
			d.history = new Reading.History(e);
			d.preferences = new Reading.Preferences(e);
			d.binding = new Reading.Binding(e);
			head.js.apply(head, f.paths.ui.concat([n]))
		})
	}

	function n() {a();
		if(d.lectern) {
			d.cover = d.lectern.spawnCover();
			d.lectern.spawnFooter()
		}
		head.js.apply(head, f.paths.controls.concat([r]))
	}

	function r() {a();
		head.js.apply(head, f.paths.tabs.concat([q]))
	}

	function q() {a();
		d.binding.libsLoaded()
	}

	function g() {
		d.element.addEventListener("monocle:frameprimed", a, false);
		d.element.addEventListener("monocle:firstcomponentchange", a, false);
		d.element.addEventListener("monocle:loaded", a, false)
	}

	function a(k) {
		if(d.progressBar) {
			d.progressBar.progress()
		}
	}

	function c() {
		if(d.progressBar) {
			d.progressBar.complete(2000)
		}
		d.cover.open()
	}

	function m(s) {
		var p = s.match(/^progress=(\d+)\/(\d+)$/);
		if(s == "done") {
			d.cacheDone = true
		} else {
			if(!p) {
				d.cacheStatus = s
			}
		}
		if(d.binding) {
			var k = d.binding.properties.reader;
			if(k) {
				if(s == "done") {
					k.dispatchEvent("bookish:cachingcomplete", {
						msg : d.cacheStatus
					})
				} else {
					if(p) {
						k.dispatchEvent("bookish:caching", {
							cnt : parseInt(p[1]),
							max : parseInt(p[2])
						})
					}
				}
			}
		}
	}
	e.readerElement = o;
	e.progress = a;
	e.complete = c;
	e.cacheReport = m;
	j();
	return e
};
Reading.BookData = function(r, f) {
	var e = {
		constructor : Reading.BookData
	};
	var h = e.constants = e.constructor;
	var d = e.properties = f;
	function b() {
		return d.componentIds
	}

	function g(k, p) {
		if(navigator.userAgent.match(/Firefox\/3/) && s(k)) {
			return {
				url : k
			}
		}
		if(!Monocle || !Monocle.Browser.is.Gecko) {n(k, p)
		} else {m(k, p)
		}
	}

	function o() {
		return d.contents
	}

	function i(k) {
		return d.metadata[k]
	}

	function n(k, w) {
		var t = l(k);
		if(t) {
			return w({
				javascript : t
			})
		}
		var p = new XMLHttpRequest();
		var v = q();
		p.open( v ? "POST" : "GET", k, true);
		if(v) {
			p.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
		}
		p.onreadystatechange = function() {
			if(p.readyState != 4) {
				return
			}
			if(p.status != 200) {
				return w(false)
			}
			var y = j(p.responseText);
			if(s(k)) {
				var x = location.protocol + "//" + location.host + "/" + k;
				y = y.replace(new RegExp("(<head[^>]*>)", "im"), '$1<base href="' + x + '">')
			}
			if(a(k, y)) {c(k, y);
				w({
					javascript : y
				})
			} else {
				console.warn("Failed to fetch component: " + k);
				w(false)
			}
		};
		try {
			p.send(v)
		} catch(u) {w(false)
		}
		return p
	}

	function m(k, p) {n(k, function(t) {
			if(t === false) {
				return p(false)
			}
			var u = document.createElement("iframe");
			u.onload = function() {p({
					doc : u.contentDocument
				})
			};
			u.src = "javascript:'" + t.javascript + "';";
			document.getElementById("hiddenFrames").appendChild(u)
		})
	}

	function c(p, k) {
		return controller.storage.store("cmpt:" + p, k, false)
	}

	function l(k) {
		return controller.storage.retrieve("cmpt:" + k, false)
	}

	function q() {
		var t = document.getElementsByTagName("meta");
		for(var k = 0, p = t.length; k < p; ++k) {
			if(t[k].getAttribute("name") == "tok") {
				return "token=" + t[k].getAttribute("content")
			}
		}
		return null
	}

	function a(k, p) {
		return p.length ? true : false
	}

	function s(k) {
		return k.match(/\//) ? true : false
	}

	function j(k) {
		k = k.replace(/>\s+</g, "> <");
		k = k.replace(/\n/g, "\\n").replace(/\r/, "\\r");
		k = k.replace(/\'/g, "\\'");
		k = k.replace(new RegExp("^.*<html[^>]*>", "m"), '<html xmlns="http://www.w3.org/1999/xhtml">');
		return k
	}
	e.getComponents = b;
	e.getComponent = g;
	e.getContents = o;
	e.getMetaData = i;
	e.fetchComponentViaAjax = n;
	return e
};
Reading.Cookie = function(h) {
	var b = {
		constructor : Reading.Cookie
	};
	var f = b.constants = b.constructor;
	var a = b.properties = {
		prefix : h || f.COOKIE_PREFIX
	};
	var i = {};
	function e(k) {
		return i[k] || j(k)
	}

	function l(m, n, k) {g(m, n, k);
		return i[m] = n
	}

	function d(k) {g(k, "", new Date(0));
		i[k] = null
	}

	function j(k) {
		if(!document.cookie) {
			return null
		}
		var m = new RegExp(a.prefix + k + "=(.+?)(;|$)");
		var n = document.cookie.match(m);
		if(!n) {
			return null
		}
		return unescape(n[1])
	}

	function g(m, n, k) {
		k = k || {
			days : f.DEFAULT_EXPIRY_IN_DAYS
		};
		var o = [a.prefix + m + "=" + escape(n)];
		o.push("expires=" + c(k).toGMTString());
		o.push("path=/");
		o.push("domain=." + location.hostname);
		document.cookie = o.join(";");
		return n
	}

	function c(m) {
		var o = new Date();
		var k = o.getTime();
		var p = 0;
		if(!m) {
			p = 0
		} else {
			if(m.seconds) {
				p = m.seconds * 1000
			} else {
				if(m.minutes) {
					p = m.minutes * 60 * 1000
				} else {
					if(m.hours) {
						p = m.hours * 60 * 60 * 1000
					} else {
						if(m.days) {
							p = m.days * 24 * 60 * 60 * 1000
						} else {
							if(m.months) {
								p = m.months * 30 * 24 * 60 * 60 * 1000
							} else {
								if(m.years) {
									p = m.years * 365 * 24 * 60 * 60 * 1000
								}
							}
						}
					}
				}
			}
		}
		o.setTime(o.getTime() + p);
		return o
	}
	b.get = e;
	b.set = l;
	b.erase = d;
	return b
};
Reading.Cookie.DEFAULT_EXPIRY_IN_DAYS = 14;
Reading.Cookie.COOKIE_PREFIX = "Reading.Cookie.";
Reading.Storage = function(e) {
	var m = {
		constructor : Reading.Storage
	};
	var o = m.constants = m.constructor;
	var l = m.properties = {
		cookie : new Reading.Cookie(),
		hasLocalStorage : ( typeof localStorage != "undefined")
	};
	function g(k, v, p) {
		if(l.hasLocalStorage) {
			localStorage.setItem(k, v)
		} else {
			if(p !== false) {
				l.cookie.set(k, v)
			}
		}
	}

	function j(k, p) {
		var v = null;
		if(l.hasLocalStorage) {
			v = localStorage.getItem(k)
		}
		if(!v && p !== false) {
			v = l.cookie.get(k)
		}
		return v
	}

	function q(k) {
		if(k) {
			l.cookie.set(o.CACHE_FORCE_COOKIE, k)
		} else {
			l.cookie.erase(o.CACHE_FORCE_COOKIE)
		}
	}

	function f(k) {
		if(k) {
			l.cookie.set(o.CACHE_TIMESTAMP_COOKIE, e.config.cache.served / 1000)
		} else {
			l.cookie.erase(o.CACHE_TIMESTAMP_COOKIE)
		}
	}

	function s() {
		return l.cached ? true : false
	}

	function t(k) {
		e.cacheReport("checking");
		l.cacheTotal = e.config.cache.totalFiles;
		l.cachingCallback = k;
		if(!navigator.onLine) {
			e.cacheReport("offline");
			return d()
		}
		if( typeof window.applicationCache != "undefined") {
			l.appCache = window.applicationCache
		}
		if(!l.appCache || !e.config.cache.available || !document.documentElement.getAttribute("manifest")) {
			return n("uncached")
		}
		e.cacheReport("probably " + (l.cookie.get(o.CACHE_TIMESTAMP_COOKIE) ? "" : "not ") + "cached");
		l.appCache.addEventListener("cached", n, false);
		l.appCache.addEventListener("noupdate", n, false);
		l.appCache.addEventListener("updateready", n, false);
		l.appCache.addEventListener("obsolete", n, false);
		l.appCache.addEventListener("error", function(p) {b();
			c(p)
		}, false);
		l.appCache.addEventListener("downloading", r, false);
		l.cachingFailsafe = setTimeout(a, o.CACHE_WATCHING_TIMEOUT)
	}

	function r(k) {f(true);
		l.cacheProgressCounter = 0;
		l.appCache.addEventListener("progress", i, false);
		clearTimeout(l.cachingFailsafe);
		l.cachingFailsafe = setInterval(function() {
			if(l.appCache.status == l.appCache.IDLE) {
				e.cacheReport("download timeout");
				n("cached")
			}
		}, o.CACHE_POLLING_TIMEOUT);
		e.cacheReport("downloading")
	}

	function i(k) {
		l.cacheProgressCounter += 1;
		e.cacheReport("progress=" + l.cacheProgressCounter + "/" + l.cacheTotal)
	}

	function n(k) {clearTimeout(l.cachingFailsafe);
		var v = ( typeof k == "string") ? k : k.type;
		if(v == "uncached" || v == "obsolete") {
			e.cacheReport(v == "uncached" ? "nocache" : v);
			l.cached = false;
			f(false);
			d()
		} else {
			var p = function(w) {
				if(w !== false) {f(true);
					l.cached = true;
					e.cacheReport(v == "updateready" ? "updated" : "cached");
					d()
				} else {c()
				}
			};
			if(v == "updateready" || v == "cached" || v == "noupdate") {h(p)
			} else {p(true)
			}
		}u()
	}

	function c(k) {clearTimeout(l.cachingFailsafe);
		l.cached = false;
		l.cacheError = true;
		f(false);
		e.cacheReport("error");
		d()
	}

	function a() {clearTimeout(l.cachingFailsafe);
		e.cacheReport("failsafe");
		d()
	}

	function h(y) {clearTimeout(l.cachingFailsafe);
		var v = e.bookData.getComponents();
		var k = [];
		for(var w = 0, x = v.length; w < x; ++w) {
			if(!j("cmpt:" + v[w])) {
				k.push(v[w])
			}
		}
		var p = function(z) {
			return e.bookData.fetchComponentViaAjax(z, function(A) {
				if(l.cacheError) {
					return
				}
				if(A === false) {y(false)
				} else {i();
					k.splice(k.indexOf(z), 1);
					if(k.length == 0) {y(true)
					}
				}
			})
		};
		if(k.length) {
			l.cacheProgressCounter = l.cacheTotal - k.length;
			e.cacheReport("downloading");
			for(var w = 0, x = k.length; w < x; ++w) {p(k[w])
			}
		} else {y(true)
		}
	}

	function d() {
		e.cacheReport("done");
		var k = l.cachingCallback;
		l.cachingCallback = null;
		if( typeof k == "function") {k()
		}
	}

	function u() {
		if(l.appCache) {
			l.appCache.removeEventListener("downloading", r, false);
			l.appCache.removeEventListener("progress", i, false);
			l.appCache.removeEventListener("cached", n, false);
			l.appCache.removeEventListener("noupdate", n, false);
			l.appCache.removeEventListener("updateready", n, false);
			l.appCache.removeEventListener("obsolete", n, false)
		}
	}

	function b() {
		var k = document.documentElement.getAttribute("manifest");
		k = k.replace(/^.*\//, "");
		var v = 0;
		var p = k.match(/^(\d+)\.manifest$/);
		if(p) {
			v = parseInt(p[1])
		}
		v += 1;
		l.cookie.set(o.CACHE_MANIFEST_URL_COOKIE, v);
		console.warn("Invalidated cache group: " + k + " -> " + v + ".manifest")
	}
	m.store = g;
	m.retrieve = j;
	m.forceCache = q;
	m.watchCache = t;
	m.isCached = s;
	return m
};
Reading.Storage.CACHE_TIMESTAMP_COOKIE = "cacheStamp";
Reading.Storage.CACHE_FORCE_COOKIE = "cacheForce";
Reading.Storage.CACHE_MANIFEST_URL_COOKIE = "cacheManifestURL";
Reading.Storage.CACHE_WATCHING_TIMEOUT = 5000;
Reading.Storage.CACHE_POLLING_TIMEOUT = 250;
Reading.Lectern = function(f) {
	var m = {
		constructor : Reading.Lectern
	};
	var q = m.constants = m.constructor;
	var l = m.properties = {};
	function j(k) {
		l.box = k.parentNode;
		s();
		a();
		o();
		document.addEventListener("bookish:reader", c, false);
		window.addEventListener("resize", i, false);
		window.addEventListener("orientationchange", e, false)
	}

	function a() {
		var v = document.createElement("div");
		v.id = "camera";
		var p = document.createElement("div");
		p.id = "book";
		v.appendChild(p);
		var w = document.createElement("div");
		w.id = "frontCover";
		p.appendChild(w);
		var k = document.createElement("div");
		k.id = "outFaceFront";
		w.appendChild(k);
		l.coverImg = document.createElement("img");
		l.coverImg.src = f.config.system.urls.cover;
		l.coverImg.id = "coverImg";
		l.coverImg.style.zIndex = "5";
		k.appendChild(l.coverImg);
		l.box.insertBefore(v, l.box.lastChild)
	}

	function o() {
		controller.progressBar = new Reading.ProgressBar(l.coverImg.parentNode, 13, controller.start)
	}

	function n() {
		if(f.embedded) {
			return false
		}
		return f.config.system.access == "sample"
	}

	function t() {
		if(f.embedded) {
			return false
		}
		if(navigator.userAgent.indexOf(" Mobile") > 0) {
			return false
		}
		if(navigator.userAgent.indexOf(" Kindle") > 0) {
			return false
		}
		return window.innerHeight > q.ASPECT_VERT_THRESHOLD
	}

	function i() {s();
		if(l.cover) {
			l.cover.mimicDimensions(l.box)
		}
	}

	function e() {u()
	}

	function s() {
		l.footerHeight = n() ? q.DEFAULT_FOOTER_HEIGHT : 0;
		l.dims = r();
		l.constrained = l.dims.width != "100%" || l.dims.height != "100%";
		if(l.footer) {
			l.constrained ? l.footer.show() : l.footer.hide()
		}d(l.dims);
		u();
		if(l.reader) {
			l.reader.resized()
		}
	}

	function r() {
		var A = window.innerWidth, v = window.innerHeight;
		var C = 0, y = 0, x = 0, B = 0, z = 0, p = 0;
		if(t()) {
			if(A < v * q.MIN_WIDTH_RATIO) {
				B = A * q.MARGIN_PERCENT_X;
				C = A - B * 2;
				y = C * q.HEIGHT_RATIO - l.footerHeight;
				x = (v - y) / 2
			} else {
				if(A > v * q.MAX_WIDTH_RATIO) {
					x = v * q.MARGIN_PERCENT_Y;
					y = (v - x * 2) - l.footerHeight;
					C = y * q.MAX_WIDTH_RATIO;
					B = (A - C) / 2
				}
			}
		} else {
			if(n()) {
				C = A;
				y = v - l.footerHeight
			}
		}
		if(!C) {
			document.body.className = "";
			return {
				width : "100%",
				height : l.footerHeight ? v - l.footerHeight : "100%",
				margins : "0px 0px " + l.footerHeight + "px 0px"
			}
		}
		document.body.className = "body_constrained";
		p = Math.max(l.footerHeight, p);
		var k = Math.round;
		return {
			width : k(C) + "px",
			height : k(y) + "px",
			margins : k(x) + "px " + k(z) + "px " + k(p) + "px " + k(B) + "px"
		}
	}

	function d(p) {
		var k = "width:" + p.width + ";height:" + p.height + ";margin:" + p.margins + ";";
		l.box.style.cssText += k
	}

	function u() {
		if(!navigator.userAgent.match(/iPhone/) || window.navigator.standalone || f.embedded) {
			return
		}
		if(!l.chromeHider) {
			l.chromeHider = document.createElement("div");
			l.chromeHider.style.cssText += "position: absolute; width: 100%; height: " + q.HIDER_HEIGHT + "px";
			l.chromeHider.className = "monelem_r_chromeHider";
			l.box.parentNode.insertBefore(l.chromeHider, l.box)
		}
		l.box.style.marginTop = q.HIDER_HEIGHT + "px";
		var k = ((window.orientation == 0) ? 416 : 268) - l.footerHeight;
		l.box.style.height = k + "px";
		document.body.style.height = (k + q.HIDER_HEIGHT + l.footerHeight) + "px";
		document.body.style.position = "relative";
		if(l.reader) {
			l.reader.resized()
		}setTimeout(b, 100)
	}

	function b() {
		if(l.chromeHider) {
			window.top.scrollTo(0, q.HIDER_HEIGHT)
		}
	}

	function g() {
		if(l.chromeHider) {
			Monocle.Events.listenForTap(l.chromeHider, b)
		}
		l.cover = new Reading.Cover(l.box, l.coverImg);
		var k = f.config.system.color;
		l.cover.setColor(k[0], k[1], k[2]);
		l.cover.mimicDimensions(l.box);
		return l.cover
	}

	function h() {
		l.footer = new Reading.Footer(l.box);
		l.constrained ? l.footer.show() : l.footer.hide();
		return l.footer
	}

	function c(k) {
		l.reader = k.m.reader
	}
	m.readerElement = j;
	m.spawnCover = g;
	m.spawnFooter = h;
	m.scrollOutChrome = b;
	return m
};
Reading.Lectern.ASPECT_VERT_THRESHOLD = 400;
Reading.Lectern.MARGIN_PERCENT_Y = 0.025;
Reading.Lectern.MARGIN_PERCENT_Y = 0.025;
Reading.Lectern.MIN_WIDTH_RATIO = 0.65;
Reading.Lectern.MAX_WIDTH_RATIO = 0.8;
Reading.Lectern.HEIGHT_RATIO = 1.35;
Reading.Lectern.DEFAULT_FOOTER_HEIGHT = 30;
Reading.Lectern.HIDER_HEIGHT = 20;
Reading.History = function(ctlr) {
	var API = {
		constructor : Reading.History
	};
	var k = API.constants = API.constructor;
	var p = API.properties = {
		storage : ctlr.storage,
		position : null,
		bookmarks : [],
		jumps : [],
		onReaderCallbacks : []
	};
	function initialize() {
		document.addEventListener("bookish:reader", assignReader, false);
		restoreLegacy();
		restorePosition();
		restoreBookmarks();
		checkForRemotePosition()
	}

	function positionLocus() {
		return p.position.locus()
	}

	function assignReader(evt) {
		p.reader = evt.m.reader;
		p.reader.listen("monocle:turn", positionChanged);
		p.reader.listen("monocle:jumping", aboutToJump);
		p.reader.listen("bookish:bookmark", bookmarked);
		p.reader.listen("bookish:unbookmark", unbookmarked);
		if(p.bookmarks.length) {dispatchHistoryEvent()
		}
		while(p.onReaderCallbacks.length) {(p.onReaderCallbacks.shift())()
		}
	}

	function positionChanged() {
		p.position.update("position", p.reader.getPlace(), new Date());
		store();
		var str = p.position.toString();
		delayedSync(k.SYNC_DELAY, "position=" + str + "&page_turns=" + pageTurns(1));
		if(Monocle.Browser.env.embedded && window.parent.postMessage) {
			window.parent.postMessage("place:" + str, "*")
		}
	}

	function bookmarked() {
		var bm = newHistoryItemHere("bookmark");
		p.bookmarks.push(bm);
		setIndexes(p.bookmarks);
		store();
		dispatchHistoryEvent();
		syncBookmarks({
			add : bm
		});
		return bm
	}

	function unbookmarked() {
		var bm = bookmarkForPlace(p.reader.getPlace());
		p.bookmarks.splice(p.bookmarks.indexOf(bm), 1);
		setIndexes(p.bookmarks);
		store();
		dispatchHistoryEvent();
		syncBookmarks({
			del : bm
		});
		return bm
	}

	function aboutToJump(evt) {
		var newJump;
		var place = p.reader.getPlace();
		if( newJump = jumpForPlace(place)) {
			p.jumps.splice(p.jumps.indexOf(newJump), 1);
			newJump.update("jump", place, new Date())
		}
		if(p.jumps.length < k.MAX_JUMPS) {
			newJump = newHistoryItemHere("jump")
		} else {
			newJump = p.jumps.shift();
			newJump.update("jump", place, new Date())
		}
		p.jumps.push(newJump);
		setIndexes(p.jumps);
		store();
		dispatchHistoryEvent();
		return newJump
	}

	function store() {
		p.storage.store(k.KEY_POSITION, p.position.toString());
		p.storage.store(k.KEY_BOOKMARKS_LIST, bookmarksToString(p.bookmarks));
		p.storage.store(k.KEY_SYNC_STAMP, (new Date()).getTime())
	}

	function restoreLegacy() {
		var ck = new Reading.Cookie("Reader.Hoard.");
		var syncParams = [];
		var pos = ck.get("place");
		if(pos) {
			if(pos.split(",").length < 3) {
				pos += "," + (new Date()).getTime()
			}
			p.position = Reading.HistoryItem.fromString("position", pos);
			store();
			ck.erase("place")
		}
		var bmks = ck.get("scrb_bookmarks");
		if(bmks) {onReader(function() {
				var ts = (new Date()).getTime();
				p.bookmarks = [];
				var arr = bmks.split(",");
				for(var i = 0, ii = arr.length; i < ii; ++i) {
					var parts = arr[i].split(":");
					var bmk = Reading.HistoryItem.fromPercentageOfBook(p.reader, "bookmark", parts[1], new Date(ts - i));
					p.bookmarks.push(bmk)
				}store();
				syncBookmarks({
					add : p.bookmarks
				});
				ck.erase("scrb_bookmarks")
			})
		}
	}

	function restorePosition() {
		var str = "0,0";
		var matches = window.location.hash.match(/^#(\d+,[\d\.]+)/);
		if(matches) {
			str = matches[1];
			if(history && history.replaceState) {
				history.replaceState({}, "", "/")
			} else {
				location.hash = ""
			}
		} else {
			var nstr = p.storage.retrieve(k.KEY_POSITION);
			if(nstr) {
				str = nstr
			}
		}
		if(str.split(",").length < 3) {
			str += "," + (new Date()).getTime()
		}
		p.position = Reading.HistoryItem.fromString("position", str)
	}

	function restoreBookmarks() {
		var str;
		if(isLocalPositionOlderThan(controller.config.place.sync_stamp)) {
			str = controller.config.place.bookmarks
		} else {
			str = p.storage.retrieve(k.KEY_BOOKMARKS_LIST)
		}
		if(str) {stringToBookmarks(str)
		}
	}

	function sync(params, callback) {
		if(p.syncTimer) {clearTimeout(p.syncTimer)
		}
		if(!navigator.onLine) {
			return
		}
		if(!ctlr.config.system.possession) {
			return
		}
		if(p.preventSync) {
			return
		}
		var ajReq = new XMLHttpRequest();
		ajReq.open("POST", "/bksh/sync", true);
		ajReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		ajReq.onreadystatechange = function() {
			if(ajReq.readyState == 4 && ajReq.status == 200) {onSync(ajReq.responseText, callback)
			}
		};
		ajReq.send(params);
		if(params && params.indexOf("page_turns") >= 0) {setPageTurns(0)
		}
	}

	function onSync(response, callback) {
		var obj = null;
		try {
			obj = eval("(" + response + ")")
		} catch(e) {
			return
		}
		currMarks = p.storage.retrieve(k.KEY_BOOKMARKS_LIST) || "";
		if(obj.bookmarks != currMarks) {stringToBookmarks(obj.bookmarks)
		}
		if( typeof callback == "function") {callback(obj)
		}
	}

	function delayedSync(delay, params, callback) {
		if(p.syncTimer) {clearTimeout(p.syncTimer)
		}
		p.syncTimer = setTimeout(function() {sync(params, callback)
		}, delay)
	}

	function checkForRemotePosition() {
		if(!navigator.onLine) {
			return
		}
		var processString = function(str) {
			var pos = Reading.HistoryItem.fromString("position", str);
			if(pos.valid()) {
				if(controller.config.system.access == "full") {onReader(function() {promptForRemotePosition(pos)
					})
				} else {goTo(pos)
				}
			}
		};
		if(isLocalPositionOlderThan(controller.config.place.sync_stamp)) {
			var str = controller.config.place.position;
			if(str) {
				return processString(str)
			}
		}
		var syncThreshold = (new Date()).getTime() - k.CACHE_AGE_BEFORE_REMOTE;
		if(controller.config.cache.served < syncThreshold) {sync(null, function(result) {
				p.preventSync = false;
				if(result.position) {
					var remoteStamp = parseInt(result.timestamp);
					if(remoteStamp && isLocalPositionOlderThan(remoteStamp)) {processString(result.position)
					}
				}
			});
			p.preventSync = true
		}
	}

	function promptForRemotePosition(pos) {
		if(pos.marksPlace(p.reader.getPlace())) {
			return
		}
		var pc1 = (p.position.percentageOfBook() * 100).toFixed(1);
		var pc2 = (pos.percentageOfBook() * 100).toFixed(1);
		if(pc1 == pc2) {
			return
		}
		var promptCntr = p.reader.dom.make("div", "r_history_prompt");
		var para = promptCntr.dom.append("p");
		para.innerHTML = "You are at " + pc1 + "%. Your <strong>most recent position</strong> is " + pc2 + "%.";
		var goThere = promptCntr.dom.append("span", "r_button", {
			text : "Go there"
		});
		var tapFns = Monocle.Events.listenForTap(goThere, function() {goTo(pos);
			controller.binding.properties.notice.notify("Synchronised position.");
			controller.binding.properties.infoPane.close();
			Monocle.Events.deafenForTap(goThere, tapFns)
		});
		controller.binding.presentInfoPane(promptCntr, null, true)
	}

	function goTo(pos) {
		p.position = pos;
		if(p.reader) {
			p.reader.moveTo(positionLocus())
		}
	}

	function syncBookmarks(mods) {
		var str = "bookmarks[ord]=" + bookmarksToString(p.bookmarks);
		if(mods.add) {
			str += "&bookmarks[add]=" + bookmarksToString(mods.add)
		}
		if(mods.del) {
			str += "&bookmarks[del]=" + bookmarksToString(mods.del)
		}sync(str)
	}

	function bookmarksToString(bmks) {
		var arr = [];
		if(!bmks.length) {
			bmks = [bmks]
		}
		for(var i = 0, ii = bmks.length; i < ii; ++i) {
			arr.push(bmks[i].toString())
		}
		return bmks.join(k.LIST_SEPARATOR)
	}

	function stringToBookmarks(str) {
		p.bookmarks = [];
		if(!str) {
			return
		}
		var arr = str.split(k.LIST_SEPARATOR);
		while(arr.length) {
			var bmk = Reading.HistoryItem.fromString("bookmark", arr.shift());
			if(bmk.valid()) {
				p.bookmarks.push(bmk)
			}
		}setIndexes(p.bookmarks);
		dispatchHistoryEvent()
	}

	function jumpForPlace(place) {
		return itemForPlace(p.jumps, place)
	}

	function bookmarkForPlace(place) {
		return itemForPlace(p.bookmarks, place)
	}

	function itemForPlace(collection, place) {
		for(var i = 0, ii = collection.length; i < ii; ++i) {
			if(collection[i].marksPlace(place)) {
				return collection[i]
			}
		}
	}

	function newHistoryItemHere(label) {
		return new Reading.HistoryItem(label, p.reader.getPlace(), new Date())
	}

	function setIndexes(coll) {
		for(var i = 0, ii = coll.length; i < ii; ++i) {
			coll[i].setIndex(i)
		}
	}

	function dispatchHistoryEvent() {
		if(p.reader) {
			p.reader.dispatchEvent("bookish:history", p)
		}
	}

	function pageTurns(inc) {
		var pt = parseInt(p.storage.retrieve(k.KEY_PAGE_TURNS) || 0);
		if(inc) {
			pt += inc;
			setPageTurns(pt)
		}
		return pt
	}

	function setPageTurns(val) {
		p.storage.store(k.KEY_PAGE_TURNS, val)
	}

	function isLocalPositionOlderThan(stamp) {
		var localStamp = parseInt(p.storage.retrieve(k.KEY_SYNC_STAMP));
		return !localStamp || localStamp < stamp
	}

	function onReader(cb) {
		if(p.reader) {cb()
		} else {
			p.onReaderCallbacks.push(cb)
		}
	}
	API.positionLocus = positionLocus;
	API.jumpForPlace = jumpForPlace;
	API.bookmarkForPlace = bookmarkForPlace;
	initialize();
	return API
};
Reading.History.MAX_JUMPS = 3;
Reading.History.SYNC_DELAY = 2000;
Reading.History.CACHE_AGE_BEFORE_REMOTE = 10000;
Reading.History.LIST_SEPARATOR = "|";
Reading.History.KEY_POSITION = "positions_current";
Reading.History.KEY_BOOKMARKS_LIST = "positions_bookmarks";
Reading.History.KEY_SYNC_STAMP = "positions_synchronised_at";
Reading.History.KEY_PAGE_TURNS = "page_turns_since_sync";
Reading.HistoryItem = function(g, i, e) {
	var m = {
		constructor : Reading.HistoryItem
	};
	var q = m.constants = m.constructor;
	var j = m.properties = {};
	function h(w, p, z) {
		j.label = w;
		j.timestamp = z.getTime();
		var v = controller.bookData.getComponents();
		if( typeof p.componentId == "function") {
			var k = p;
			j.componentId = k.componentId();
			j.componentIndex = v.indexOf(j.componentId);
			j.percentageThrough = k.percentageThrough();
			j.percentageOfBook = k.percentageOfBook();
			j.chapterTitle = k.chapterTitle();
			j.locus = k.getLocus()
		} else {
			var y = p.split(",");
			if(y.length == 2) {
				j.percentageThrough = parseFloat(y[1]) || 0;
				var x = parseInt(y[0]);
				j.componentIndex = controller.config.book.spine.indexOf(x);
				j.componentId = v[j.componentIndex];
				j.locus = {
					componentId : j.componentId,
					percent : j.percentageThrough
				}
			}
		}
	}

	function u() {
		return j.componentId
	}

	function r() {
		if(!j.chapterTitle) {
			j.chapterTitle = "§ " + (j.componentIndex + 1);
			if(controller.history.properties.reader) {
				var p = controller.history.properties.reader.getBook();
				var k = p.chaptersForComponent(j.componentId);
				if(k) {
					var v = k[Math.floor(k.length * j.percentageThrough)];
					if(v) {
						j.chapterTitle = v.title
					}
				}
			}
		}
		return j.chapterTitle
	}

	function s() {
		return j.percentageThrough
	}

	function n() {
		if( typeof j.percentageOfBook != "number") {
			var p = controller.bookData.getComponents();
			var v = 1 / p.length;
			var k = p.indexOf(j.componentId) * v;
			j.percentageOfBook = k + (v * j.percentageThrough)
		}
		return j.percentageOfBook
	}

	function d() {
		return j.locus
	}

	function c() {
		return j.index
	}

	function t(k) {
		j.index = k
	}

	function b() {
		return j.timestamp
	}

	function f() {
		var p = new Date();
		var A = new Date(j.timestamp);
		var z = (p.getTime() - A.getTime()) / 1000;
		if(z < 2) {
			return "Just now"
		} else {
			if(z < 60) {
				return Math.round(z) + " seconds ago"
			} else {
				if(z < 3600) {
					z = Math.round(z / 60);
					return z == 1 ? "a minute ago" : z + " minutes ago"
				}
			}
		}
		var w = A.getHours(), k = "am";
		if(w > 12) {
			w = w % 12;
			k = "pm"
		} else {
			if(w == 0) {
				w = 12
			}
		}
		var x = A.getMinutes();
		var y = w + ":" + (x < 10 ? "0" : "") + x + k;
		if(A > new Date(p.getFullYear(), p.getMonth(), p.getDate())) {
			return y
		}
		var v = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
		if(A > new Date(p.getFullYear(), 0, 1)) {
			return y + ", " + A.getDate() + " " + v[A.getMonth()]
		}
		return A.getDay() + " " + v[A.getMonth()] + " " + A.getFullYear()
	}

	function l() {
		return j.componentIndex >= 0 && j.percentageThrough && j.timestamp
	}

	function o() {
		return j.componentIndex + "," + s() + "," + b()
	}

	function a(k) {
		if(u() == k.componentId()) {
			var p = s();
			return (p > k.percentAtTopOfPage() && p <= k.percentAtBottomOfPage())
		}
		return false
	}
	m.update = h;
	m.componentId = u;
	m.chapterTitle = r;
	m.percentageThrough = s;
	m.percentageOfBook = n;
	m.locus = d;
	m.index = c;
	m.setIndex = t;
	m.timestamp = b;
	m.timeString = f;
	m.valid = l;
	m.toString = o;
	m.marksPlace = a;
	h(g, i, e);
	return m
};
Reading.HistoryItem.fromString = function(b, e) {
	var a = e.split(","), c = new Date();
	if(a.length == 3) {
		c = new Date(parseInt(a.pop()))
	} else {
		if(a.length != 2) {
			console.warn("Unknown position string format: " + e)
		}
	}
	var d = a.join(",");
	return new Reading.HistoryItem(b, d, c)
};
Reading.HistoryItem.fromPercentageOfBook = function(c, b, e, f) {
	var d = Monocle.Place.percentOfBookToLocus(c, e);
	var a = controller.bookData.getComponents().indexOf(d.componentId);
	f = f || new Date();
	return new Reading.HistoryItem(b, a + "," + d.percent, f)
};
Reading.Preferences = function(o) {
	var b = {
		constructor : Reading.Preferences
	};
	var e = b.constants = b.constructor;
	var a = b.properties = {
		storage : o.storage,
		readerCallbacks : []
	};
	function g() {m()
	}

	function h() {
		return d()
	}

	function l(k, p) {
		a.reader = k;
		a.sheetIndex = p;
		if(a.reader && a.readerCallbacks.length) {
			for(var r = 0, s = a.readerCallbacks.length; r < s; ++r) {a.readerCallbacks[r](a.reader)
			}
		}
	}

	function n() {
		if(!a.sheetIndex) {
			return
		}
		a.reader.updatePageStyles(a.sheetIndex, d())
	}

	function f(k, p) {
		q(k).set(p);
		n();
		i()
	}

	function d() {
		var k = {
			rules : {},
			applyToReader : function(p) {
				if(a.reader) {p(a.reader)
				} else {
					a.readerCallbacks.push(p)
				}
			},
			append : function(p) {
				return this.rules[p] = this.rules[p] || {}
			}
		};
		c(function(p) {
			p.toRule(k)
		});
		return j(k.rules)
	}

	function j(r) {
		var k = [];
		for(selector in r) {
			var p = [];
			for(var s in r[selector]) {
				p.push(s + ": " + r[selector][s] + ";")
			}
			k.push(selector + " {" + p.join(" ") + "}")
		}
		return k.join("\n")
	}

	function i() {
		var k = ["on"];
		c(function(p) {
			if(p.get()) {
				k.push(p.name() + ":" + p.get())
			}
		});
		a.storage.store("rdby", k.join(","))
	}

	function m() {
		var r = a.storage.retrieve("rdby");
		if(!r) {
			return
		}
		var k = r.split(",");
		if(k.shift() == "off") {
			return
		}
		for(var p = null; p = k.shift(); ) {
			p = p.split(":");
			q(p[0]).set(p[1])
		}
	}

	function c(r) {
		for(var k = 0, p = e.PREFS.length; k < p; ++k) {r(e.PREFS[k])
		}
	}

	function q(k) {
		for(var p = 0, r = e.PREFS.length; p < r; ++p) {
			if(e.PREFS[p].name() == k) {
				return e.PREFS[p]
			}
		}
	}
	b.generateDefaultStylesheet = h;
	b.setDefaultStylesheet = l;
	b.updateDefaultStylesheet = n;
	b.activate = f;
	b.eachPref = c;
	b.getPref = q;
	g();
	return b
};
Reading.Preferences.PREFS = [{
	name : function() {
		return "font-size"
	},
	heading : function() {
		return "Font size"
	},
	options : function() {
		var a = ["super", "largest", "large", "medium", "small", "smallest"];
		if(Monocle.Browser.on.iPhone) {
			a.shift()
		}
		return a
	},
	defaultOption : function() {
		return "medium"
	},
	toRule : function(d) {
		if(!this.selected) {
			return
		}
		var c = Reading.Preferences.RESET_STYLESHEET;
		for(var a in c) {
			var b = d.append(a);
			for(var e in c[a]) {
				b[e] = c[a][e]
			}
		}
		d.append("html body")["font-size"] = this.value()
	},
	set : function(a) {
		this.selected = a
	},
	get : function() {
		return this.selected
	},
	value : function() {
		return this.values()[this.selected] + "% !important"
	},
	values : function() {
		return {
			"super" : 190,
			largest : 145,
			large : 128,
			medium : 115,
			small : 103,
			smallest : 96
		}
	}
}, {
	name : function() {
		return "text-align"
	},
	heading : function() {
		return "Justification"
	},
	options : function() {
		return ["left", "justify"]
	},
	defaultOption : function() {
		return this.options[0]
	},
	toRule : function(b) {
		if(!this.selected) {
			return
		}
		b.append("div")["text-align"] = this.get();
		b.append("p, li")["text-align"] = this.value();
		if(this.selected == "justify") {
			var a = b.append("body");
			a["-webkit-hyphens"] = "auto";
			a["-moz-hyphens"] = "auto";
			a.hyphens = "auto"
		}
	},
	set : function(a) {
		this.selected = a
	},
	get : function() {
		return this.selected
	},
	value : function() {
		return this.selected + " !important"
	}
}, {
	name : function() {
		return "line-height"
	},
	heading : function() {
		return "Leading"
	},
	options : function() {
		return ["tight", "normal", "loose"]
	},
	defaultOption : function() {
		return "normal"
	},
	toRule : function(a) {
		if(!this.selected) {
			return
		}
		a.append("body *")["line-height"] = this.value()
	},
	set : function(a) {
		this.selected = a
	},
	get : function() {
		return this.selected
	},
	value : function() {
		return this.values()[this.selected] + " !important"
	},
	values : function() {
		return {
			tight : 1.1,
			normal : 1.25,
			loose : 1.6
		}
	}
}, {
	name : function() {
		return "font-family"
	},
	heading : function() {
		return "Typeface"
	},
	options : function() {
		if(this.plainFonts()) {
			return ["Classic", "Clean"]
		} else {
			return ["Elegant", "Classic", "Clean", "Assistive"]
		}
	},
	defaultOption : function() {
		return "Classic"
	},
	toRule : function(a) {
		if(!this.selected) {
			return
		}
		a.append("body *")["font-family"] = this.value()
	},
	set : function(a) {
		this.selected = a
	},
	get : function() {
		return this.selected
	},
	value : function() {
		return this.values()[this.selected] + " !important"
	},
	values : function() {
		if(this.plainFonts()) {
			return {
				Classic : "serif",
				Clean : "sans-serif"
			}
		} else {
			return {
				Elegant : "Cochin, Baskerville, Palatino, serif",
				Classic : "Times New Roman, Georgia, serif",
				Clean : "Thonburi, Helvetica, Arial, sans-serif",
				Assistive : "Arial Rounded MT Bold, monospace"
			}
		}
	},
	plainFonts : function() {
		return Monocle.Browser.on.Android || Monocle.Browser.on.Kindle3
	},
	styleButton : function(a, b) {
		a.innerHTML = b;
		a.style.fontFamily = this.values()[b]
	}
}, {
	name : function() {
		return "contrast"
	},
	heading : function() {
		return "Contrast"
	},
	options : function() {
		return ["sunlight", "moonlight"]
	},
	defaultOption : function() {
		return "moonlight"
	},
	toRule : function(d) {
		var b = d.append("body, body *");
		var a = "r_rdby_contrast_sunlight", c = "r_rdby_contrast_moonlight";
		if(this.selected == "sunlight") {
			b.color = "black !important";
			b.background = "white !important";
			d.applyToReader(function(e) {
				e.dom.addClass(a);
				e.dom.removeClass(c)
			})
		} else {
			if(this.selected == "moonlight") {
				b.color = "#DDD !important";
				b.background = "#191919 !important";
				d.applyToReader(function(e) {
					e.dom.removeClass(a);
					e.dom.addClass(c)
				})
			} else {
				d.applyToReader(function(e) {
					e.dom.removeClass(a);
					e.dom.removeClass(c)
				})
			}
		}
	},
	set : function(a) {
		this.selected = a
	},
	get : function() {
		return this.selected
	}
}];
Reading.Preferences.RESET_STYLESHEET = {
	h1 : {
		"font-size" : "1.75em !important"
	},
	h2 : {
		"font-size" : "1.4em !important"
	},
	h3 : {
		"font-size" : "1.1em !important"
	},
	h4 : {
		"font-size" : "1em !important"
	},
	h5 : {
		"font-size" : "0.9em !important"
	},
	h6 : {
		"font-size" : "0.8em !important"
	}
};
Reading.Preferences.RESET_STYLESHEET["html, body, div, span,p, blockquote, pre,abbr, address, cite, code,del, dfn, em, img, ins, kbd, q, samp,small, strong, sub, sup, var,b, i,dl, dt, dd, ol, ul, li,fieldset, form, label, legend,table, caption, tbody, tfoot, thead, tr, th, td,article, aside, details, figcaption, figure,footer, header, hgroup, menu, nav, section, summary,time, mark"] = {
	"font-size" : "100% !important",
	"-webkit-text-size-adjust" : "100% !important"
};
Reading.Binding = function(f) {
	var n = {
		constructor : Reading.Binding
	};
	var q = n.constants = n.constructor;
	var m = n.properties = {};
	function c() {
		var k = {
			panels : Monocle.Panels.IMode,
			primeURL : "/noop",
			place : controller.history.positionLocus(),
			stylesheet : f.preferences.generateDefaultStylesheet()
		};
		if(Monocle.Browser.on.Android) {
			k.flipper = Monocle.Flippers.Instant
		}
		if(Monocle.Browser.on.Kindle3) {
			k.flipper = Monocle.Flippers.Instant;
			k.panels = Reading.Panels.Kindle;
			Monocle.Reader.DEFAULT_STYLE_RULES.push("p, ul, table { font-size: 120% !important;font-family: serif !important;}")
		}
		if(f.config.system.css) {
			Monocle.Reader.DEFAULT_STYLE_RULES.push(f.config.system.css)
		}
		controller.element.addEventListener("monocle:componentmodify", s, false);
		Monocle.Reader(controller.element, controller.bookData, k, b)
	}

	function h() {
		m.libsLoaded = true;
		controller.progress();
		o()
	}

	function b(k) {
		m.reader = k;
		controller.progress();
		controller.preferences.setDefaultStylesheet(m.reader, m.reader.properties.initialStyles);
		o()
	}

	function o() {
		if(!m.reader || !m.libsLoaded || m.doneLoad) {
			return
		}
		m.doneLoad = true;
		r()
	}

	function r() {
		var k = function() {
			m.reader.moveTo({
				direction : 1
			})
		};
		var w = function() {
			m.reader.moveTo({
				direction : -1
			})
		};
		m.keyBindings = [new Reading.Keys("C", function() {
			controller.cover.toggle()
		}), new Reading.Keys("B", function() {
			m.bookmark.bookmarkToggle()
		}), new Reading.Keys("pageup", w), new Reading.Keys("pagedown", k), new Reading.Keys("left", w), new Reading.Keys("right", k)];
		if(f.config.system.access == "sample") {
			m.reader.listen("monocle:notfound", function() {
				if(m.notice) {
					m.notice.notify("Sorry, that part of the book is not accessible.")
				}
				Monocle.defer(i, 500)
			})
		}
		m.spinner = Monocle.Controls.Spinner(m.reader);
		m.reader.addControl(m.spinner, "standard", {
			hidden : true
		});
		m.spinner.listenForUsualDelays();
		m.pageNumber = new Reading.Controls.PageNumber();
		m.pageNumber.addToPages(m.reader);
		if(Monocle.Browser.is.MobileSafari && !Monocle.Browser.on.Android) {
			m.guard = new Reading.Controls.Guard();
			m.reader.addControl(m.guard, "page")
		}
		m.stencil = new Monocle.Controls.Stencil(m.reader);
		m.reader.addControl(m.stencil);
		m.infoPane = new Reading.Controls.InfoPane(m.reader);
		m.reader.addControl(m.infoPane, "modal", {
			hidden : true
		});
		var v = [], x = document.getElementById("endPromptPanes").childNodes;
		for(var p = 0, u = x.length; p < u; ++p) {
			if(x[p].tagName && x[p].tagName.toLowerCase() == "div") {
				v.push(x[p])
			}
		}
		m.endPrompt = new Reading.Controls.MultiPane(m.reader, v);
		m.reader.addControl(m.endPrompt, "modal", {
			hidden : true
		});
		a(m.endPrompt.properties.box);
		m.reader.listen("monocle:boundaryend", i);
		m.bookmark = new Reading.Controls.Bookmark(m.reader);
		m.reader.addControl(m.bookmark);
		m.tabFolder = new Reading.Controls.TabFolder(m.reader);
		m.reader.addControl(m.tabFolder, "modal", {
			hidden : true
		});
		e();
		m.notice = Reading.Controls.Notice(m.reader);
		m.reader.addControl(m.notice, "standard", {
			hidden : true
		});
		Monocle.Events.dispatch(document, "bookish:reader", {
			reader : m.reader
		});
		if(f.cacheDone) {setTimeout(d, 2000)
		} else {
			m.reader.listen("bookish:cachingcomplete", d)
		}
		if(!Monocle.Browser.on.Kindle3 && !Monocle.Browser.on.Android) {
			m.reader.dom.addClass("animated")
		}j();
		controller.complete()
	}

	function e() {
		var k = m.reader.properties.flipper.properties.panels;
		var p = {};
		k.menuCallbacks({
			start : function(v, u, w) {
				p.contact = (new Date()).getTime();
				p.timeout = setTimeout(function() {
					p = {};
					if(controller.config.system.cp) {
						k.modeOn()
					} else {
						m.notice.notify("Interactive mode is unavailable.")
					}
				}, q.IMODE_DELAY)
			},
			end : function(v, u, w) {
				if(p.contact) {clearTimeout(p.timeout);
					m.reader.showControl(m.tabFolder)
				}
				p = {}
			}
		})
	}

	function t(p, k, u) {
		if(m.infoPane.go(p, k, u)) {
			m.reader.showControl(m.infoPane);
			a(m.infoPane.properties.box)
		}
	}

	function i(k, p) {
		if(m.reader.showingControl(m.tabFolder)) {
			m.tabFolder.close(function() {i(null, p)
			})
		}
		if(!k || !k.m.page || k.m.page == m.reader.visiblePages()[0]) {
			if(m.reader.showingControl(m.endPrompt)) {
				m.endPrompt.close()
			} else {
				m.reader.showControl(m.endPrompt);
				m.endPrompt.go(p)
			}
		}
	}

	function j() {
		var w = "", x = null;
		if(f.config.system.access == "sample") {
			if(!f.config.system.account && !Monocle.Browser.env.embedded && !document.referrer) {
				w = m.reader.dom.make("div", "signPrompt");
				w.dom.append("span", null, {
					text : "Have you bought this book? "
				});
				var v = w.dom.append("span", "r_claimLink", {
					text : "Sign in to claim it"
				});
				Monocle.Events.listenForTap(v, function(E) {
					E.preventDefault();
					m.infoPane.close(function() {i(null, "authPane")
					})
				});
				w.dom.append("span", null, {
					text : "."
				});
				var u = w.dom.append("img");
				u.src = "/images/home/compat.png"
			} else {
				return
			}
		} else {
			if(!Monocle.Browser.env.embedded) {
				var z = Monocle.Browser.on.iPhone, A = Monocle.Browser.on.iPad;
				if(!(z || A) || navigator.standalone) {
					return
				}
				var C = document.getElementsByTagName("link"), D = null;
				for(var p = 0, B = C.length; p < B; ++p) {
					if(C[p].getAttribute("rel") == "apple-touch-icon-precomposed") {
						D = C[p].getAttribute("href");
						break
					}
				}
				var y = '<img src="' + q.UTILS_SKETCH + '" />';
				var k = q.ATHS_VIDEO[ z ? "iphone" : "ipad"];
				w = ('<div class="athsPrompt">' + ( D ? '<img src="' + D + '" class="appScreenIcon" />' : "") + "<p><b>Add this book</b> as a Home Screen app! Tap the " + y + " button in the toolbar " + ( z ? "below" : "above") + ( A ? " and follow the prompts" : "") + ".</p></div>");
				x = ('<div class="athsPrompt"><p><b>INSTRUCTIONS</b></p><p>Every Booki.sh book can be a full-screen ' + ( z ? "iPhone" : "iPad") + " app. In your browser toolbar at the " + ( z ? "base" : "top") + " of the screen, tap the " + y + ' button. Then tap <b>"Add to Home Screen"</b>.</p><p><a href="' + k + '">Watch a step-by-step video</a>.</p><p>When you finish the book, you can remove it from your Home Screen &mdash; it\'s always in your library at <a href="http://booki.sh">http://<b>booki.sh</b></a>.</p></div>')
			}
		}
		if(w) {
			Monocle.defer(function() {t(w, x)
			}, q.ATHS_DELAY)
		}
	}

	function l(k) {
		if(controller.cover) {
			controller.cover.open()
		}
		var p = "Booki.sh could not load this part. Try refreshing, or clearing your cache. If this error persists, contact hello@booki.sh.";
		if(m.infoPane) {
			var u = function() {t(p)
			};
			if(m.reader.showingControl(m.tabFolder)) {
				m.tabFolder.close(u)
			} else {
				if(m.reader.showingControl(m.endPrompt)) {
					m.endPrompt.close();
					setTimeout(u, 500)
				} else {t(p)
				}
			}
		} else {setTimeout(function() {alert(p)
			}, 1000)
		}
	}

	function g(u) {
		var k = function(w) {
			w.stopPropagation();
			u.focus()
		};
		if(u.type == "submit") {
			k = function(w) {
				var x = u.parentNode;
				while(x && x.tagName.toLowerCase() != "form") {
					x = x.parentNode
				}
				if(x) {
					x.submit()
				}
			}
		} else {
			if(u.type == "button") {
				k = u.onclick
			}
		}
		var v = function(w) {
			w.stopPropagation()
		};
		var p = function() {
			controller.lectern.scrollOutChrome()
		};
		Monocle.Events.listen(u, "mousedown", k);
		Monocle.Events.listen(u, "touchstart", k);
		Monocle.Events.listen(u, "keyup", v);
		Monocle.Events.listen(u, "focus", p)
	}

	function a(v) {
		var k = v.getElementsByTagName("input");
		for(var p = 0, u = k.length; p < u; ++p) {g(k[p])
		}
		var k = v.getElementsByTagName("textarea");
		for(var p = 0, u = k.length; p < u; ++p) {g(k[p])
		}
	}

	function d() {
		var k = controller.cacheStatus;
		var p = null;
		if(k == "cached" || k == "updated") {
			p = "This book will be available offline."
		}
		if(p) {
			m.notice.notify(p)
		}
	}

	function s(k) {
		var p = k.m.document.body;
		if(p.className) {
			p.className += " "
		}
		p.className += "mon_engine" + Monocle.Browser.engine;
		if(Monocle.Browser.is.MobileSafari) {
			p.className += " mon_iOS mon_iOSVersion" + Monocle.Browser.iOSVersion
		}
	}
	n.libsLoaded = h;
	n.presentInfoPane = t;
	n.showEndPrompt = i;
	n.prepareInput = g;
	n.prepareInputsIn = a;
	n.componentFailedToLoad = l;
	c();
	return n
};
Reading.Binding.IMODE_DELAY = 600;
Reading.Binding.ATHS_DELAY = 1500;
Reading.Binding.UTILS_SKETCH = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAYAAAAyhueAAAABG0lEQVR42q3RP0tCURyHcQ0pCNxEgkKSBCGM%2FgzlEBQUIShoSw4GQtxJWhoEobFVtwYdc9HEAjdxcXCoIV0amnwTvoHrI%2Fxuw%2BXec5LbFz7DOcMDh%2BMzTfPXErvHGNuwpuno94AO2tiUmOdoGSUY%2BEHULdp3YS2FBob4RgYryKOHA%2Beo85LoooUi4tjHKqxIDiPE%2FxKN4g1ZicgcP%2BcCUxyqomv4xA1kyuglmjhTRZ%2FwjICct5BHFke2559ihhPV83cwRhARVOVcxwu%2BcIfFrvCOhO6jaijjFj1UEII1A48oYIJjCbpGNyTURAt7sM%2FAKwaISUwZvcYMFbithA%2FsSqSvi54jDb8iuo4wfPro8tNHPbBFPY6InVz%2BszksQRhD3e7JtAAAAABJRU5ErkJggg%3D%3D";
Reading.Binding.ATHS_VIDEO = {
	iphone : "http://bookish-instructional-videos.s3.amazonaws.com/aths-iphone.m4v",
	ipad : "http://bookish-instructional-videos.s3.amazonaws.com/aths-ipad.m4v"
};
Reading.ProgressBar = function(n, g, a) {
	var e = {
		constructor : Reading.ProgressBar
	};
	var h = e.constants = e.constructor;
	var d = e.properties = {
		max : g,
		count : 0,
		start : a
	};
	function i() {
		d.cntr = document.createElement("span");
		d.cntr.className = "loadProgressCntr";
		n.appendChild(d.cntr);
		d.box = document.createElement("span");
		d.box.className = "loadProgressBox";
		d.cntr.appendChild(d.box);
		d.bar = document.createElement("span");
		d.bar.className = "loadProgressBar";
		d.box.appendChild(d.bar);
		l(controller.config.system.color)
	}

	function b(k) {
		if( typeof k == "number") {
			d.count = k
		} else {
			d.count += 1
		}
		var o = (new Date).getTime() - d.start;
		if(d.completed) {
		} else {m(d.count / d.max)
		}
	}

	function c(k) {m(1);
		d.completed = true;
		if(k) {setTimeout(j, k)
		}
	}

	function j() {
		d.cntr.parentNode.removeChild(d.cntr)
	}

	function m(k) {
		d.bar.style.visibility = "visible";
		d.bar.style.width = Math.min(k, 1) * 100 + "%"
	}

	function l(o) {
		d.bar.style.backgroundColor = f(o[0], o[1], o[2]);
		var k = "inset 0px 1px 0px 0px " + f(o[0], o[1], o[2], 1.3) + ",inset 0px -1px 1px " + f(o[0], o[1], o[2], 0.8);
		d.bar.style.webkitBoxShadow = k;
		d.bar.style.MozBoxShadow = k;
		d.bar.style.boxShadow = k;
		d.bar.style.border = "1px solid " + f(o[0], o[1], o[2], 0.5)
	}

	function f(p, o, k, q) {
		if( typeof q != "number") {
			q = 1
		}
		var s = function(r) {
			r = Math.max(r, 50);
			return Math.min(255, Math.max(0, Math.round(r * q)))
		};
		return "rgb(" + s(p) + "," + s(o) + "," + s(k) + ")"
	}
	e.progress = b;
	e.complete = c;
	i();
	return e
};
Reading.Panels.Kindle = function(d, f) {
	var c = {
		constructor : Reading.Panels.Kindle
	};
	var b = c.constants = c.constructor;
	var e = c.properties = {
		flipper : d
	};
	function a() {
		e.panel = new Monocle.Controls.Panel();
		var h = d.properties.reader;
		h.addControl(e.panel);
		h.listen("monocle:componentchanging", function() {
			e.panel.properties.div.style.opacity = 1;
			Monocle.defer(function() {
				e.panel.properties.div.style.opacity = 0
			}, 40)
		});
		e.panel.properties.div.style.width = "100%";
		e.panel.properties.div.style.background = "#000";
		e.panel.properties.div.style.opacity = 0
	}

	function g(h) {
		e.menuCallbacks = h;
		e.panel.listenTo(e.menuCallbacks)
	}
	c.menuCallbacks = g;
	a();
	return c
};
