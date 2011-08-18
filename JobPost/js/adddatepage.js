/*
 * Add Date Page
 */
Page.extend("AddDatePage",
// static methods 
{},
// prototype methods
{
  date: null,
  region: null,
  vendortype: null,
  desc: null,
  postDate: null,
  regionItemTemplate: null,
  vendortypeItemTemplate: null,
  
  init : function(id){
	  
	  this._super(id);
	  
	  this.date = this.el.find('#date');
	  this.region = this.el.find('#region');
	  this.vendortype = this.el.find('#vendortype');
	  this.vendortype.controlgroup();
	  this.desc = this.el.find('#desc');	  
	  this.postDate = this.el.find('#postDate');
	  this.regionItemTemplate = this.el.find("#regionListItem");
	  this.vendortypeItemTemplate = this.el.find("#vendortypeItem");
	  
	  var me = this;
	  this.postDate.live("tap", function(e){me.postDateClicked(e);});
	  
	  
  },//end init
  
  
  /*
   * main page show
   */
  onPageShow: function(e, ui){	  
	  this._super(e, ui);
	  var me = this;
	  
	  $.mobile.pageLoading();
	  
	  AjaxService.getRegion(function(d){
		  if(!$.isArray(d))
			  d = [d];
		  
		  me.poplulateRegionList(d); 
	  });

  },
  
  postDateClicked: function(e){
	  var dt = this.date.val().split('-');	  
	  AjaxService.postDate(this.desc.val(), dt[0],dt[1],dt[2],this.region.val(), function(d){
		  Page.showDialog("Success", "Thank you, this date has been posted. All users in this region have been notified. Give it a day or two and check back for your referral list.");
		  //$.mobile.changePage("#MainPage");
	  });
  },
  
  poplulateRegionList: function(regions){	  
	  this.region.empty();
	  this.regionItemTemplate.tmpl(regions).appendTo(this.region);
	  var me = this;
	  AjaxService.getVendorTypes(function(d){		  
		  if(!$.isArray(d))
			  d = [d];
		  
		  me.poplulateVendorTypeList(d); 
	  });
  },
  
  poplulateVendorTypeList: function(vds){	  
	  this.vendortype.find("label").remove();
	  this.vendortype.find("input").remove();
	  this.vendortypeItemTemplate.tmpl(vds).appendTo(this.vendortype);
	  this.vendortype.find("input[type='checkbox']").checkboxradio();
	  this.vendortype.find("input[type='checkbox']").checkboxradio("refresh");
	  $.mobile.pageLoading(true);
  }
  
});