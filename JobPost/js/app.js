/*
 * Class Application
 */
$.Class.extend("Application",
// static methods 
{
	Pages : {}
},
// prototype methods
{
  // called when a new monster is created
  init : function(cfg){	  
	  $.mobile.page.prototype.options.addBackBtn= true;
	  
	  $('div[data-role="page"]').live('pagecreate',function(e){
		  //console.log(e.target.id);
		  if(!Application.Pages[e.target.id]){ //create page instance
			  //console.log('Application.Pages["'+e.target.id+'"] = new ' + e.target.id +'("' + e.target.id + '");');
			  eval('Application.Pages["'+e.target.id+'"] = new ' + e.target.id +'("' + e.target.id + '");');			  
		  }
		});
  }
});

var myapp = new Application();