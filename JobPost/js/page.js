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
		$('#Dialog #header').text(header);
		$('#Dialog #content').html(content);
		$('#aDialog').trigger('click');
	}
},
// prototype methods
{
  el : null,
  // called when a new monster is created
  init : function(id){
	  this.el = $('#' + id);
	  var me = this;
	  this.el.live('pageshow', function(e,u){me.onPageShow(e,u);});
  },//end init
  
  onPageShow: function(e, ui){	  
  }
  
});
