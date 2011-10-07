Monocle.Controls.Bookmark = function(reader) {
	var API = {
		constructor : Monocle.Controls.Bookmark
	};
	var c = API.constants = API.constructor;
	var props = API.properties = {
		//history : controller.history,
		reader : reader
	};
	function createControlElements(h) {
		props.bookmarkButton = h.dom.make("div", "r_bookmark");
		Monocle.Events.listenForTap(props.bookmarkButton, bookmarkToggle);
		setClass();
		props.reader.listen("monocle:turn", setClass);
		return props.bookmarkButton
	}
	function bookmarkToggle() {
		console.log('sasa');
		if (props.bookmarkButton.dom.hasClass(c.ACTIVE_CLASS)) {
			props.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS);
			props.reader.dispatchEvent("bookish:unbookmark")
		} else {
			props.bookmarkButton.dom.addClass(c.ACTIVE_CLASS);
			props.reader.dispatchEvent("bookish:setClass")
		}
	}
	function setClass(h) {
		/*if (props.history.bookmarkForPlace(props.reader.getPlace())) {
			props.bookmarkButton.dom.addClass(c.ACTIVE_CLASS)
		} else {
			props.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS)
		}*/
		props.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS)
	}
	API.createControlElements = createControlElements;
	API.bookmarkToggle = bookmarkToggle;
	return API;
};
Monocle.Controls.Bookmark.ACTIVE_CLASS = "r_bookmark_active";