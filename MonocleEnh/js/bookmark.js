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
		return props.bookmarkButton;
	}
	function bookmarkToggle() {		
		if (props.bookmarkButton.dom.hasClass(c.ACTIVE_CLASS)) {
			props.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS);
			props.reader.dispatchEvent("bookish:unbookmark")
		} else {
			props.bookmarkButton.dom.addClass(c.ACTIVE_CLASS);
			props.reader.dispatchEvent("bookish:bookmark");
		}
	}
	function setClass(h) {
		
		var min = props.reader.getPlace().percentAtTopOfPage(), max = props.reader.getPlace().percentAtBottomOfPage();
		
		for(var i=0; i<window.Bookmarks.length; i++){
			if(window.Bookmarks[i].percent > min && window.Bookmarks[i].percent <= max && window.Bookmarks[i].componentId == props.reader.getPlace().componentId()){
				props.bookmarkButton.dom.addClass(c.ACTIVE_CLASS);
				return;
			}
		}
		
		props.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS);
		/*
		
		if(window.Bookmarks.isValueExisted(page))
			props.bookmarkButton.dom.addClass(c.ACTIVE_CLASS);
		else
			props.bookmarkButton.dom.removeClass(c.ACTIVE_CLASS);*/
	}
	
	API.createControlElements = createControlElements;
	API.bookmarkToggle = bookmarkToggle;
	return API;
};
Monocle.Controls.Bookmark.ACTIVE_CLASS = "r_bookmark_active";