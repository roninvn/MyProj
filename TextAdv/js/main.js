var pages = [];
currentpage = 0;
TypeInterval = 20;

SaveKey = "nam.com.textadv.save";

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
	
	if(currentpage == -1){
		showMenu();
		return;
	}
	
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
	  setTimeout(typeText, TypeInterval);
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
	x$('#wrap').setStyle('visibility', 'hidden');
	
	var v = window.localStorage.getItem(SaveKey);
	
	if(v)
		x$('#resumeGame').setStyle('visibility', 'visible');
	else
		x$('#resumeGame').setStyle('visibility', 'hidden');
}

function startGame(){
	x$('#menu').setStyle('visibility', 'hidden');
	x$('#wrap').setStyle('visibility', 'visible');
	x$('#resumeGame').setStyle('visibility', 'hidden');
	loadpage(0);
}

function saveGame(){ //save and exit
	window.localStorage.setItem(SaveKey, currentpage);
	exitGame();
}

function loadGame(){
	var v = window.localStorage.getItem(SaveKey);
	if(v){
		v = parseInt(v);
		x$('#menu').setStyle('visibility', 'hidden');
		x$('#wrap').setStyle('visibility', 'visible');
		loadpage(v);
	}
}

function exitGame(){
	currentpage = 0;
	x$('#splash').setStyle('visibility', 'visible');
	x$('#menu').setStyle('visibility', 'hidden');
	x$('#wrap').setStyle('visibility', 'hidden');
	x$('#resumeGame').setStyle('visibility', 'hidden');
}



