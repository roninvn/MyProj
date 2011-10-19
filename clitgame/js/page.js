/*
 * Class Page
 */
$.Class.extend("Page",
// static methods 
{
	Pages: {},
	
	/*
	 * show a pgae with id
	 */
	show: function(id){		
		$('div.page').css("visibility", "hidden");		
		Page.Pages[id].el.css("visibility", "visible");		
		Page.Pages[id].onPageShow();
	}
},
// prototype methods
{
  el : null,
  
  init : function(element){	  
	  this.el = $(element);	  
	  var me = this;
	  
  },//end init
  
  onPageShow: function(){
  }
  
});
