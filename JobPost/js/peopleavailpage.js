/*
 * People Avail Page
 */
Page.extend("PeopleAvailPage",
// static methods 
{},
// prototype methods
{
  pplList: null,
  pplItemTemplate : null,
  
  init : function(id){
	  this._super(id);	  
	  console.log(111);
	  this.pplList = this.el.find("#peopleList");
	  this.pplList.listview();	  
  },//end init
  
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	  var me = this;
	  
	  var jid = this.el.attr("data-messageId");
	  console.log(jid);
	  AjaxService.getPeopleAvail(jid, function(d){
		  if(!$.isArray(d))
			  d = [d];
		  
		  me.afterGetPeopleAvail(d);
	  });
  },
  
  afterGetPeopleAvail: function(d){
	  console.log(d);
  }
  
});