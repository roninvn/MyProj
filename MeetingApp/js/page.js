/*
 * Class Page
 */
$.Class.extend("Page",
// static methods 
{
	/*
	 * show dialog
	 */
	showDialog: function(header, content){
		
	},
	
	exchangeData : {}
	
},
// prototype methods
{
  el : null,
  // called when a new class is created
  init : function(id){
	  this.el = $('#' + id);
	  var me = this;
	  this.el.live('pageshow', function(e,u){me.onPageShow(e,u);});
	  this.el.live("pagebeforehide", function(e,u){me.onPageBeforeHide(e,u);});
  },//end init
  
  onPageShow: function(e, ui){	  
  },
  
  onPageBeforeHide: function(e,u){	  
  }
  
});
