var pages = [];
currentpage = 0;

x$(window).on('load', onWindowLoad);

/*
 * start
 */
function onWindowLoad(){
	//loadpage();
}

function loadpage(newpage){
	
	if(newpage)
		currentpage = newpage;
	
	if(!pages[currentpage]){
		alert("Error loading page " + currentpage);
		return;
	}
	
	x$('#content').inner("");	
	x$('#links').inner("");	
	
	captionLength = 0;
	
	typeText();
	
}

function typeText(){
	
	var  str = pages[currentpage].content;
	
	x$('#content').inner(str.substr(0,captionLength++));
	
	if(captionLength < str.length){
	  setTimeout(typeText, 50);
	 }
	 else{
		 buildLink();
	 } 
}

function buildLink(){
	var p = pages[currentpage];
	
	for(var i=0; i<p.links.length; i++){
		var l = p.links[i];
		x$('#links').bottom("<a href='#' onclick='loadpage(" + l.page + ");'>" + l.text + "</a><br />");
	}	
}


function showMenu(){
	x$('#splash').setStyle('visibility', 'hidden');
	x$('#menu').setStyle('visibility', 'visible');
}

function startGame(){
	x$('#menu').setStyle('visibility', 'hidden');
	x$('#wrap').setStyle('visibility', 'visible');
	loadpage(0);
}



