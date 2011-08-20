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
		    //console.log(val)
	  		//console.log('Application.Pages["'+val.id+'"] = new ' + val.id +'("' + val.id + '");');
	  		eval('Application.Pages["'+val.id+'"] = new ' + val.id +'("' + val.id + '");');
	  });
  }
});

var myScroll;
function loaded() {	
    myScroll = new iScroll('wrapper');
    myapp = new Application();
    VideoJS.setupAllWhenReady();
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
document.addEventListener('DOMContentLoaded', setTimeout(function () { loaded(); }, 200), false);

