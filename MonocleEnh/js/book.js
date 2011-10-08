Array.prototype.removeByValue = function(val) {
	for(var i=0; i<this.length; i++) {
		if(this[i] === val) {
			this.splice(i, 1);
			break;
		}
	}
};

Array.prototype.isValueExisted = function(val) {
	for(var i=0; i<this.length; i++) {
		if(this[i] === val) {
			return true;
		}
	}	
	return false;
};

//locus that bookmarked
Bookmarks = [];

  // Initialize the reader element.
Monocle.Events.listen(
    window,
    'load',
    function () { 
		window.reader = Monocle.Reader('book', null, null, function(){
	        	var bookmark=new Monocle.Controls.Bookmark(window.reader)
	        	window.reader.addControl(bookmark);	        	
	    	});
		
		
		Monocle.Events.listen(window.reader.dom.find('box'), "bookish:unbookmark", function(){
			Bookmarks.removeByValue(window.reader.getPlace().getLocus().page);
			updateBookmarkLink();
		});
		
		Monocle.Events.listen(window.reader.dom.find('box'), "bookish:bookmark", function(){
			Bookmarks.push(window.reader.getPlace().getLocus().page);
			updateBookmarkLink();
		});
	
    }
);


function updateBookmarkLink(){
	var bm = $("#bookmarks").empty();
	for(var i=0; i<Bookmarks.length; i++) {
		$("<a href='#'>Page "+Bookmarks[i]+"</a>").data('page', Bookmarks[i]).appendTo(bm).click(function(){			
			window.reader.moveTo({page: $(this).data('page')});
		});
	}
}