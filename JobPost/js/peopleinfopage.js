/*
 * People Info Page
 */
Page.extend("PeopleInfoPage",
// static methods 
{},
// prototype methods
{

  userInfo: null,
  infoTpl: null,
  ad : null,
  init : function(id){
	  this._super(id);
	  this.userInfo = this.el.find("#userInfo");
	  this.infoTpl = this.el.find("#infoTpl");
	  this.ad = this.el.find("#ad");
	  
  },//end init
  
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	  var me = this;
	  $.mobile.pageLoading();
	  AjaxService.getUserInfo(Page.exchangeData.userID, function(d){
		  me.userInfo.empty();	  
		  me.infoTpl.tmpl(d).appendTo(me.userInfo);
		  
		  AjaxService.getAd(function(d){
			  if(d){
				  me.ad.attr("src", d);
			  	  me.ad.css({display:"block", visibility:"visible"});
			  }
			  $.mobile.pageLoading(true);
		  });
		  
	  }); 
  }
  
});