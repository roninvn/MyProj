/*
 * Posted Job Page
 */
Page.extend("PostedJobPage",
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
	  var me = this;
	  //get Job Available
	  AjaxService.getNumberJobOfUser(function(d){
		  //TODO : fix JSON format from server
		  /*var o = $.parseJSON(d);		  
		  $('#jobAvail', me.el).text(o.length);*/		  
	  });
  }
  
});