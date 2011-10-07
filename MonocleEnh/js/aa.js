Reading.Controls.Bookmark = function(a) {
	var d = {
		constructor : Reading.Controls.Bookmark
	};
	var c = d.constants = d.constructor;
	var g = d.properties = {
		history : controller.history,
		reader : a
	};
	function f(h) {
		g.bookmarkButton = h.dom.make("div", "r_bookmark");
		Monocle.Events.listenForTap(g.bookmarkButton, b);
		e();
		g.reader.listen("monocle:turn", e);
		return g.bookmarkButton
	}
	function b() {
		if (g.bookmarkButton.dom.hasClass(c.ACTIVE_CLASS)) {
			g.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS);
			g.reader.dispatchEvent("bookish:unbookmark")
		} else {
			g.bookmarkButton.dom.addClass(c.ACTIVE_CLASS);
			g.reader.dispatchEvent("bookish:bookmark")
		}
	}
	function e(h) {
		if (g.history.bookmarkForPlace(g.reader.getPlace())) {
			g.bookmarkButton.dom.addClass(c.ACTIVE_CLASS)
		} else {
			g.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS)
		}
	}
	d.createControlElements = f;
	d.bookmarkToggle = b;
	return d
};
Reading.Controls.Bookmark.ACTIVE_CLASS = "r_bookmark_active";
Reading.Controls.Notice = function(b) {
	var d = {
		constructor : Reading.Controls.Notice
	};
	var c = d.constants = d.constructor;
	var g = d.properties = {};
	function a() {
		g.reader = b
	}
	function f(i) {
		g.strip = i.dom.make("div", "r_notice_strip");
		g.message = g.strip.dom.append("div", "r_notice_message");
		return g.strip
	}
	function e(i) {
		if (!g.showing) {
			g.message.innerHTML = i;
			g.showing = true;
			g.reader.showControl(d);
			g.strip.dom.setBetaStyle("transition", "none");
			g.strip.dom.setBetaStyle("transform", "translateX(-100%)");
			setTimeout(function() {
				g.strip.dom.setBetaStyle("transition", "ease-out 200ms");
				g.strip.dom.setBetaStyle("transform", "translateX(0)")
			}, 0)
		} else {
			clearTimeout(g.timer);
			g.message.innerHTML += "<br />" + i
		}
		g.timer = setTimeout(h, c.DURATION)
	}
	function h() {
		g.showing = false;
		g.strip.dom.setBetaStyle("transform", "translateX(100%)");
		var i = function() {
			g.reader.hideControl(d);
			Monocle.Events.deafen(g.strip, i)
		};
		if (typeof WebKitTransitionEvent != "undefined") {
			Monocle.Events.listen(g.strip, "webkitTransitionEvent", i)
		} else {
			i()
		}
	}
	d.createControlElements = f;
	d.notify = e;
	a();
	return d
};
Reading.Controls.Notice.DURATION = 4000;
Reading.Controls.PageNumber = function() {
	var b = {
		constructor : Reading.Controls.PageNumber
	};
	var f = b.properties = {
		runners : []
	};
	function e(j) {
		var i = j.dom.make("div", "r_pagenumber");
		f.runners.push(i);
		h(j);
		return i
	}
	function g(i) {
		f.reader = i;
		i.addControl(b, "page");
		i.addControl(a());
		i.listen("monocle:pagechange", d);
		i.listen("monocle:resize", c);
		c()
	}
	function a() {
		return {
			createControlElements : function(i) {
				f.overlay = i.dom.make("div", "r_coverToggle");
				Monocle.Events.listenForTap(f.overlay, function() {
					controller.lectern.properties.cover.toggle()
				});
				return f.overlay
			}
		}
	}
	function c() {
		var j = f.reader.dom.find("component");
		for ( var k = 0; k < f.runners.length; ++k) {
			f.runners[k].style.right = j.parentNode.offsetLeft + "px"
		}
		var l = f.runners[0];
		if (l) {
			f.overlay.dom.setStyles({
				top : l.offsetTop + "px",
				right : l.style.right,
				width : "67%",
				height : (j.parentNode.offsetTop - l.offsetTop) + "px"
			})
		}
	}
	function h(l, m) {
		var k = f.runners[l.m.pageIndex];
		if (!m) {
			var j = l.m.place;
			if (j && j.pageNumber()) {
				var i = j.properties.component.lastPageNumber();
				m = "<i>" + f.reader.getBook().getMetaData("title") + "</i>";
				m += "&nbsp;&nbsp;&nbsp&nbsp;&nbsp;";
				m += "<b>" + j.pageNumber() + "</b> &#9675; " + i
			} else {
				m = ""
			}
		}
		k.innerHTML = m
	}
	function d(i) {
		h(i.m.page)
	}
	b.createControlElements = e;
	b.addToPages = g;
	return b
};
Reading.Controls.Guard = function() {
	var a = {
		constructor : Reading.Controls.Guard
	};
	var c = a.properties = {};
	function b(d) {
		return c.div = d.dom.make("div", "r_guard")
	}
	a.createControlElements = b;
	return a
};
Reading.Controls.InfoPane = function(h, m) {
	var b = {
		constructor : Reading.Controls.InfoPane
	};
	var f = b.constants = b.constructor;
	var a = b.properties = {
		options : (typeof m == "object") ? m : {}
	};
	function d(k) {
		a.overlay = k.dom.make("div", "r_infopane_overlay");
		a.box = a.overlay.dom.append("div", "r_infopane_box");
		if (a.options.growable) {
			a.scrollBox = new Reading.ScrollBox(h);
			a.box.appendChild(a.scrollBox.createControlElements(a.box));
			a.scrollBox.properties.staticHeight = true;
			a.scrollBox.properties.outer.dom.addClass("r_infopane_content");
			a.scrollBox.properties.outer.style.position = "relative";
			a.contentArea = a.scrollBox.properties.inner
		} else {
			a.contentArea = a.box.dom.append("div", "r_infopane_content")
		}
		h.listen("monocle:controlshow", function(n) {
			if (n.m.control == b) {
				Monocle.defer(function() {
					Monocle.Styles.setY(a.box, "0")
				}, 100)
			}
		});
		Monocle.Events.listenForTap(a.overlay, c);
		Monocle.Events.listenForTap(a.box, j);
		return a.overlay
	}
	function e(n, k, o) {
		if (!o && h.showingControl(b)) {
			return false
		}
		if (!n || typeof n == "string") {
			a.contentArea.innerHTML = n
		} else {
			a.contentArea.innerHTML = "";
			a.contentArea.appendChild(n)
		}
		a.expansion = k;
		g(a.contentArea);
		return true
	}
	function j() {
		if (a.add || !a.expansion) {
			return
		}
		a.add = a.box.dom.append("div", "r_infopane_additional_content");
		a.add.dom.addClass("r_infopane_content");
		if (typeof a.expansion == "string") {
			a.add.innerHTML = a.expansion
		} else {
			a.add.innerHTML = "";
			a.add.appendChild(a.expansion)
		}
		g(a.add)
	}
	function c(k) {
		if (k.target == a.overlay) {
			l()
		}
	}
	function l(k) {
		Monocle.Styles.setY(a.box, "100%");
		Monocle.defer(function() {
			i(k)
		}, 400)
	}
	function i(k) {
		e("");
		if (a.add) {
			a.add.parentNode.removeChild(a.add);
			a.add = null
		}
		h.hideControl(b);
		if (typeof k == "function") {
			k()
		}
	}
	function g(q) {
		if (typeof q != "object") {
			return
		}
		var k = q.getElementsByTagName("a");
		var p = function(r) {
			return function() {
				window.top.location = r.href
			}
		};
		for ( var n = 0, o = k.length; n < o; ++n) {
			Monocle.Events.listenForTap(k[n], p(k[n]))
		}
	}
	b.createControlElements = d;
	b.go = e;
	b.close = l;
	return b
};
Reading.Controls.MultiPane = function(m, q) {
	var b = {
		constructor : Reading.Controls.MultiPane
	};
	var h = b.constants = b.constructor;
	var a = b.properties = {
		reader : m,
		activePane : 0,
		panes : q
	};
	function i() {
		a.reader.listen("monocle:controlshow", function(k) {
			if (k.m.control != b) {
				return
			}
			o()
		})
	}
	function o() {
		a.paneWidth = a.box.offsetWidth;
		f(a.activePane)
	}
	function c(s) {
		a.overlay = s.dom.make("div", h.CLS.overlay);
		a.box = a.overlay.dom.append("div", h.CLS.box);
		a.contentCntr = a.box.dom.append("div", h.CLS.contentCntr);
		a.contentArea = a.contentCntr.dom.append("div", h.CLS.content);
		a.dots = a.box.dom.append("ol", h.CLS.dots);
		a.ribbon = a.box.dom.append("div", h.CLS.ribbon);
		for ( var k = 0, p = a.panes.length; k < p; ++k) {
			j(a.panes[k], k)
		}
		m.listen("monocle:controlshow", function(t) {
			if (t.m.control == b) {
				Monocle.defer(function() {
					a.overlay.dom.addClass(h.CLS.show)
				}, 20)
			}
		});
		Monocle.Events.listenForTap(a.ribbon, r);
		Monocle.Events.listenForTap(a.overlay, function(t) {
			var u = t.target || window.event.srcElement;
			if (u == a.overlay) {
				r()
			}
		});
		if (a.panes.length > 1) {
			Monocle.Events.listenForContact(a.box, {
				start : n
			})
		}
		return a.overlay
	}
	function n(k) {
		var p = k.target || window.event.srcElement;
		a.swipeStartTime = (new Date()).getTime();
		a.swipeStartX = k.m.registrantX;
		a.moveListener = Monocle.Events.listenForContact(a.box, {
			move : l
		});
		a.endListener = Monocle.Events.listenForContact(document.body, {
			end : d,
			cancel : d
		});
		a.contentArea.dom.addClass(h.CLS.swiping)
	}
	function l(p) {
		var k = p.m.registrantX;
		a.swipeDiffX = k - a.swipeStartX;
		if (!a.swipeUnderway && Math.abs(a.swipeDiffX) < 10) {
			return
		}
		a.swipeUnderway = true;
		e(a.activePane * (0 - a.paneWidth) + a.swipeDiffX)
	}
	function d(k) {
		a.contentArea.dom.removeClass(h.CLS.swiping);
		a.swipeStartX = null;
		Monocle.Events.deafenForContact(a.box, a.moveListener);
		Monocle.Events.deafenForContact(document.body, a.endListener);
		a.moveListener = null;
		a.endListener = null;
		if (!a.swipeUnderway) {
			return
		}
		a.swipeUnderway = null;
		var s = h.SWIPE_PERCENT * a.paneWidth;
		var p = (new Date()).getTime() - a.swipeStartTime;
		if (p < 600 && p > 60) {
			s *= (p / 600)
		}
		if (a.activePane < (a.panes.length - 1) && a.swipeDiffX < 0 - s) {
			f(a.activePane + 1)
		} else {
			if (a.activePane > 0 && a.swipeDiffX > s) {
				f(a.activePane - 1)
			} else {
				f(a.activePane)
			}
		}
		a.swipeDiffX = null
	}
	function j(x, k) {
		if (typeof x == "string") {
			x = document.getElementById(x)
		}
		a.contentArea.appendChild(x);
		var s = x.querySelectorAll(".orLink a");
		for ( var p = 0, u = s.length; p < u; ++p) {
			Monocle.Events.listenForTap(s[p], function() {
				f(k + 1)
			})
		}
		var t = x.getElementsByTagName("a");
		var v = function(y) {
			return function() {
				window.top.location = y.href
			}
		};
		for ( var p = 0, u = t.length; p < u; ++p) {
			var w = t[p];
			if (w.getAttribute("href")[0] != "#") {
				Monocle.Events.listenForTap(w, v(w))
			}
		}
		a.dots.dom.append("li", null)
	}
	function g(s) {
		for ( var k = 0, p = a.panes.length; k < p; ++k) {
			if (a.panes[k].id == s) {
				return f(k)
			}
		}
		f(0)
	}
	function f(t) {
		a.activePane = t % a.panes.length;
		a.contentArea.dom.removeClass(h.CLS.swiping);
		e(a.activePane * (0 - a.paneWidth));
		for ( var p = 0, s = a.dots.childNodes.length; p < s; ++p) {
			var k = a.dots.childNodes[p];
			k.dom[p == a.activePane ? "addClass" : "removeClass"]
					(h.CLS.activeDot)
		}
	}
	function e(k) {
		for ( var p = 0, s = a.panes.length; p < s; ++p) {
			Monocle.Styles.setX(a.panes[p], k);
			k += a.paneWidth
		}
	}
	function r() {
		a.overlay.dom.removeClass(h.CLS.show);
		Monocle.defer(function() {
			a.reader.hideControl(b)
		}, 400)
	}
	b.createControlElements = c;
	b.go = g;
	b.close = r;
	i();
	return b
};
Reading.Controls.MultiPane.CLS = {
	overlay : "r_multipane_overlay",
	box : "r_multipane_box",
	contentCntr : "r_multipane_content_container",
	content : "r_multipane_content",
	show : "r_multipane_overlay_show",
	swiping : "r_multipane_content_swiping",
	ribbon : "r_multipane_ribbon",
	dots : "r_multipane_dots",
	activeDot : "r_multipane_dots_active"
};
Reading.Controls.MultiPane.SWIPE_PERCENT = 0.2;