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
			/*$('#Dialog #header').text(header);
			$('#Dialog #content').html(content);
			$('#aDialog').trigger('click');*/
			alert(content);
		}
	},
	
	exchangeData : null
	
},
// prototype methods
{
  el : null,
  id: null,
  // called when a new monster is created
  init : function(id){
	  this.id = id;
	  this.el = $('#' + id);	  
	  var me = this;
	  this.el.live('pageshow', function(e,u){me.onPageShow(e,u);});
	  this.el.live("pagebeforehide", function(e,u){me.onPageBeforeHide(e,u);});
	  
  },//end init
  
  onPageShow: function(e, ui){
	  //init scroller
	  var sn = 'wrapper' + this.id;	  
	  if(this.el.find('#' + sn).length > 0)
		  this.scroller = new iScroll(sn);
  },
  
  refreshScroller: function(){
	  var me =  this;
	  setTimeout(function() {
		  me.scroller.refresh();
		}, 0);
  },
  
  onPageBeforeHide: function(e,u){
	  if(this.scroller){		  
		  this.scroller.destroy();
		  this.scroller = null;
	  }
  }
  
});
