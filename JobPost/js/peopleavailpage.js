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
  email: null,
  
  init : function(id){
	  this._super(id);	  
	  
	  this.pplList = this.el.find("#peopleList");
	  this.pplList.listview();
	  this.pplItemTemplate = this.el.find("#peopleListItem");
	  this.email = this.el.find("#email");
	  var me  = this;
	  this.email.live("tap", function(e){me.emailClicked(e);});
	  
	  this.ad = this.el.find("#ad");
  },//end init
  
  emailClicked: function(e){
	//  $.mobile.pageLoading();
	  AjaxService.mailPeopleAvail(Page.exchangeData.jobID, function(d){		  
		  Page.showDialog("Success", "Email sent.");		  
	  });
	  
  },
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	  var me = this;
	 // $.mobile.pageLoading();
	  AjaxService.getPeopleAvail(Page.exchangeData.jobID, function(d){
		  if(!$.isArray(d))
			  d = [d];
		  
		  me.afterGetPeopleAvail(d);
	  });
  },
  
  /*
   * call after loading data of the list
   */
  afterGetPeopleAvail: function(d){
	  this.pplList.empty();	  
	  this.pplItemTemplate.tmpl(d).appendTo(this.pplList);
	  this.pplList.listview("refresh");
	  var me = this;
	  this.pplList.find("a").live("tap", function(e){me.listItemClicked(e);});
	  
	  //get Ad
	  AjaxService.getAd(function(d){
		  if(d){
			  me.ad.attr("src", d);
		  	  me.ad.css({display:"block", visibility:"visible"});
		  }
		 // $.mobile.pageLoading(true);
	  });
	  
  },
  
  listItemClicked: function(e){
		e.stopPropagation();
		var btn = $(e.target);
		var uid = btn.attr("data-messageId");	
		
		Page.exchangeData.userID = uid;
  }
  
});