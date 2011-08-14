/*
 * Class Page
 */
$.Class.extend("Page",
// static methods 
{
	/*
	 * show dialog
	 */
	showDialog: function(){
		$('#aDialog').trigger('click');
	}
},
// prototype methods
{
  el : null,
  // called when a new monster is created
  init : function(id){
	  //console.log('page');
	  this.el = $('#' + id);
	  this.el.live('pageshow', this.onPageShow);
  },//end init
  
  onPageShow: function(e, ui){	  
  }
  
});
