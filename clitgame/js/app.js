/*
 * Class Application
 */
$.Class.extend("Application",
// static methods 
{	
},
// prototype methods
{
  //constructor
  init : function(){
	
	$('div.page').each(function(i,v){		  
		  eval('Page.Pages["'+v.id+'"] = new ' + v.id +'(v);');
	});
	
	Page.show("SplashPage");
  }
});

var myapp;
myapp = new Application();

