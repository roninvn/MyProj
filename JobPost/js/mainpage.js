/*
 * Main Page
 */
Page.extend("MainPage",
// static methods 
{},
// prototype methods
{
  // called when a new monster is created
  init : function(id){
	  this._super(id);
  },//end init
  
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	//  $.mobile.pageLoading();
	  var me = this;
	  //get Job Available
	  AjaxService.getNumberJobOfUser(function(d){		  
		  var l;		  
		  if(!$.isArray(d))
			  l = 1;
		  else
			  l = d.length;
		  
		  me.el.find('#jobAvail').text(l);
		//  $.mobile.pageLoading(true);
	  });
  }
  
});