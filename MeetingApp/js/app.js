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
	  
	  $('div[data-role="page"]').each(function(i, val){
	  		//console.log(val.id);		    
	  		//console.log('Application.Pages["'+val.id+'"] = new ' + val.id +'("' + val.id + '");');
	  		eval('Application.Pages["'+val.id+'"] = new ' + val.id +'("' + val.id + '");');
	  });
	  	
	  
  }
});

myapp = new Application();

