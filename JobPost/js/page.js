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
		
		if(navigator && navigator.notification && navigator.notification.alert){
			navigator.notification.alert(content, function(){}, header);
		}
		else{//PC
			$('#Dialog #header').text(header);
			$('#Dialog #content').html(content);
			$('#aDialog').trigger('click');
		}
	},
	
	exchangeData : null
	
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
