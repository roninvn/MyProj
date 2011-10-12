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

BookID = "TestBook";
BookMarkKey = "nam.com.monocleenh.bookmark." + BookID;
//locus that bookmarked
Bookmarks = [];
styleIndex = -1;
  // Initialize the reader element.
Monocle.Events.listen(
    window,
    'load',
    function () {
    	loadBookmarks();
    	updateBookmarkLink();
		window.reader = Monocle.Reader('book', null, null, function(){
	        	var bookmark=new Monocle.Controls.Bookmark(window.reader)
	        	window.reader.addControl(bookmark);	        	
	    	});
		
		
		Monocle.Events.listen(window.reader.dom.find('box'), "bookish:unbookmark", function(){
			//Bookmarks.removeByValue(window.reader.getPlace().getLocus().page);
			var min = reader.getPlace().percentAtTopOfPage(), max = reader.getPlace().percentAtBottomOfPage();
			
			for(var i=0; i<window.Bookmarks.length; i++){
				if(window.Bookmarks[i].percent > min && window.Bookmarks[i].percent <= max){
					window.Bookmarks.splice(i, 1);
					break;
				}
			}
			
			updateBookmarkLink();
			saveBookmarks();
		});
		
		Monocle.Events.listen(window.reader.dom.find('box'), "bookish:bookmark", function(){
			Bookmarks.push(window.reader.getPlace().getLocus());
			updateBookmarkLink();
			saveBookmarks();
		});
		
		$("#selFontSize").change(function(){
			var sz = $("#selFontSize option:selected").val();
			if(styleIndex ==-1){
				styleIndex = reader.addPageStyles("body{font-size: " + sz + "% !important}");
			}
			else{
				reader.updatePageStyles(styleIndex, "body{font-size: " + sz + "% !important}");
			}
				
		});
	
    }
);


function updateBookmarkLink(){
	var bm = $("#bookmarks").empty();
	for(var i=0; i<Bookmarks.length; i++) {
		$("<a href='#'>Bookmark "+i+"</a>").data('page', i).appendTo(bm).click(function(){
			var x = $(this).data('page');
			//window.reader.moveTo(Bookmarks[x]);
			window.reader.moveTo({percent: Bookmarks[x].percent});
		});
	}
}

function saveBookmarks(){
	window.localStorage.setItem(BookMarkKey, $.toJSON(Bookmarks));
}

function loadBookmarks(){
	var v = window.localStorage.getItem(BookMarkKey);
	if(v)
		Bookmarks = $.parseJSON(v);
	else
		Bookmarks =[];
	
	/*for(var i=0; i<Bookmarks.length; i++)
		Bookmarks[i] = parseInt(Bookmarks[i]);*/
}