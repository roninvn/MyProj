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
  ad : null,
  init : function(id){
	  this._super(id);	  
	  
	  this.pplList = this.el.find("#peopleList");
	  this.pplList.listview();	  
	  this.ad = this.el.find("#ad");
  },//end init
  
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	  var me = this;

	  AjaxService.getPeopleAvail(Page.exchangeData.jobID, function(d){
		  if(!$.isArray(d))
			  d = [d];
		  
		  me.afterGetPeopleAvail(d);
	  });
	  
	  AjaxService.getAd(function(d){
		  if(d){
			  me.ad.attr("src", d);
		  	  me.ad.css({display:"block", visibility:"visible"});
		  }
	  });
  },
  
  afterGetPeopleAvail: function(d){
	  console.log(d);
  }
  
});