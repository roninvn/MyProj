var bookDir = "eBooks";
var rootFS = null;

/*
 * read the file system
 */
function ReadFileSystem(){
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFileSystem, onFailure);
}

function onFailure() {
    alert('Reading file system failed.');
}

function gotFileSystem(fs) {
	rootFS = fs.root;
	rootFS.getDirectory(bookDir, {create: false, exclusive:false }, gotFileEntry, onFailure);
}

function gotFileEntry(entry) {
    
	var directoryReader = entry.createReader();
    
    directoryReader.readEntries(function(entries) { //populate list of books
    	$('#selBooks').empty();
    	$("<option></option>").appendTo($('#selBooks'));
        var i;
        for (i=0; i<entries.length; i++) {        	
            var name = entries[i].name;           
            if(name.indexOf('.html') !== -1){ //get html file only            	
            	$("<option></option>").html(name).appendTo($('#selBooks'));
            }
        }
        
        $('#selBooks').unbind();
        $('#selBooks').change(selectBook);
        
    },onFailure);
}

/*
 * a book is selected
 */
function selectBook(){
	var name  = $("#selBooks option:selected").text();
	
	if(name === "")
		return;
	
	BookID = name;
	BookMarkKey = "nam.com.monocleenh.bookmark." + BookID;
	
	rootFS.getFile(bookDir + "/" + name, {create: false, exclusive:false }, loadFileData, onFailure);
}

function loadFileData(f){
	var reader = new FileReader();
	
	reader.onload = function(data){
		var txt = data.target.result;
		$("#book").empty();
		$("#book").html(txt);
		createBook();
	};
	
	reader.readAsText(f);
}