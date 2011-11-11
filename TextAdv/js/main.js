var pages = [];
currentpage = 0;
TypeInterval = 20;
CharsPerInterval = 3;

SaveKey = "nam.com.textadv.save";

x$(window).on('load', onWindowLoad);

/*
 * start
 */
function onWindowLoad(){
	//alert(window.innerHeight);
	/*x$('body').getStyle("height",function(e){
		alert("body :" + e);
		var h = parseInt(e.replace("px", ""));
		h -= 40;
		x$('#content').setStyle("height", h + "px");
	});
	
	x$(window).getStyle("height",function(e){
		alert("window :" + e);
	});*/
	
	/*x$('body').setStyle("height",document.documentElement.clientHeight + "px");*/
	/*x$('#menu').setStyle("height",document.documentElement.clientHeight + "px");*/
	
	//alert(document.documentElement.clientHeight);

	
}

function loadpage(newpage){
	
	if(newpage || newpage === 0)
		currentpage = newpage;
	
	if(currentpage == -1){
		setCookie(SaveKey,"",365);
		showMenu();		
		return;
	}
	
	if(!pages[currentpage]){
		alert("Error loading page " + currentpage);
		return;
	}
	
	x$('#content').inner("");
	
	var bg = pages[currentpage].bgColor || "white";
	x$('#wrap').setStyle("background-color", bg);
	
	var img = pages[currentpage].cornerImg || "img/blank.png";
	x$('#imgman').attr('src', img);
	var cls = pages[currentpage].cornerImgCls || "";
	x$('#imgman').attr('class', cls);
	
	captionLength = 0;
	
	typeText();
	
}

function typeText(){
	
	var  str = pages[currentpage].content;
	
	captionLength += CharsPerInterval;
	x$('#content').inner(str.substr(0,captionLength));
	
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
		x$('#content').bottom("<p><button onclick='loadpage(" + l.page + ");'>" + l.text + "</button></p>");
	}	
}


function showMenu(){
	x$('#splash').setStyle('visibility', 'hidden');
	x$('#menu').setStyle('visibility', 'visible');
	x$('#wrap').setStyle('visibility', 'hidden');
	
	//var v = window.localStorage.getItem(SaveKey);
	
	if(checkCookie(SaveKey))
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
	//window.localStorage.setItem(SaveKey, currentpage);
	setCookie(SaveKey,currentpage,365);
	exitGame();
}

function loadGame(){
	//var v = window.localStorage.getItem(SaveKey);
	var v = getCookie(SaveKey);
	if(v){
		v = parseInt(v);
		x$('#menu').setStyle('visibility', 'hidden');
		x$('#wrap').setStyle('visibility', 'visible');
		x$('#resumeGame').setStyle('visibility', 'hidden');
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

function quitApp(){
	blackberry.app.exit(); 
}

function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
	var i,x,y,ARRcookies=document.cookie.split(";");
	for (i=0;i<ARRcookies.length;i++)
	{
	  x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
	  y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
	  x=x.replace(/^\s+|\s+$/g,"");
	  if (x==c_name)
	    {
	    return unescape(y);
	    }
	  }
}

function checkCookie(c_name)
{
	var username=getCookie(c_name);
	  if (username!=null && username!=""){
		  return true;
	  }
	else{
		return false;
	 }
}