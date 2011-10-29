var bookDir = "eBooks/MyBook";
var rootFS = null;

var bookData = {

	  getComponents: function () {
	    /*return [
	      'component1.xhtml',
	      'component2.xhtml',
	      'component3.xhtml',
	      'component4.xhtml'
	    ];*/
		  
		return this.components;
	  },
	  getContents: function () {
	    /*return [
	      {
	        title: "Chapter 1",
	        src: "component1.xhtml"
	      },
	      {
	        title: "Chapter 2",
	        src: "component3.xhtml#chapter-2"
	      }
	    ]*/
		  
		return this.contents;
	  },
	  getComponent: function (componentId) {
	    /*return {
	      'component1.xhtml':
	        '<h1>Chapter 1</h1><p>Hello world</p>',
	      'component2.xhtml':
	        '<p>Chapter 1 continued.</p>',
	      'component3.xhtml':
	        '<p>Chapter 1 continued again.</p>' +
	        '<h1 id="chapter-2">Chapter 2</h1>' +
	        '<p>Hello from the second chapter.</p>',
	      'component4.xhtml':
	        '<p>THE END.</p>'
	    }[componentId];*/
		  
		return  this.componentsContent[componentId];
	  },
	  
	  getMetaData: function(key) {
	    /*return {
	      title: "A book",
	      creator: "Inventive Labs"
	    }[key];*/
		  
		return this.metaData[key];		  
	  },
	  
	  
	  /*
	   * set data of book
	   */
	  setData: function(dataArr){
		  
		  this.components = [];
		  this.contents =[];
		  this.componentsContent = {};
		  
		  this.metaData = {title: "A book", creator : "Nam Hoang"};
		  
		  for(var i=0; i< dataArr.length; i++){
			  
			  var d = dataArr[i];
			  
			  this.components.push(d.name);
			  
			  this.contents.push({title: d.name, src: d.name});
			  
			  this.componentsContent[d.name] = d.content;
		  }
		  
	  }// end setData
}




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

        var names = [];
    	
        for (var i=0; i<entries.length; i++) {        	
            var name = entries[i].name;           
            if(name.indexOf('.html') !== -1){ //get html file only
            	names.push(name);
            }
        }
        
        var dataArr =[], index = 0;        
        loadFilesData(names, dataArr, index, onAfterReadAllContent);
        
        
    },onFailure);
}

/*
 * call after all data from sd card is reading up
 */
function onAfterReadAllContent(dataArr){	
	createBook(dataArr);
}

/*
 * read file content from sd card
 */
function loadFilesData(entries, dataArr, index, finishCallback){	
	if(index >= entries.length){//finish loading
		finishCallback(dataArr);
		return;
	}
	
	rootFS.getFile(bookDir + "/" + entries[index], {create: false, exclusive:false }, function(f){
		var reader = new FileReader();
		
		reader.onload = function(data){
			
			var txt = data.target.result;			
			dataArr.push({name: entries[index], content: txt});
			index++;
			loadFilesData(entries, dataArr, index, finishCallback);// read next
		};
		
		reader.readAsText(f);
		
	}, onFailure);
}