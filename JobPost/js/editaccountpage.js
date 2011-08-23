/*
 * Edit Account Page
 */
Page.extend("EditAccountPage",
// static methods 
{},
// prototype methods
{
  btnAddRegion: null,
  regionListItemTemplate : null,
  regionSelectItemTemplate : null,
  vendorItemTenplate: null,
  regonList: null,
  btnSave: null,
  vendor: null,
  region: null,
  isLogin: false,
  
  // called when a new instance is created
  init : function(id){
	  this._super(id);
	  var me = this;
	  
	  this.btnAddRegion = this.el.find("#btnAddRegion");	  
	  this.btnAddRegion.live("vclick", function(e){me.addRegionClick(e);});
	  this.btnSave = this.el.find("#Save");	 
	  this.btnSave.live("vclick", function(e){me.saveClicked(e);});	  
	  
	  this.regionListItemTemplate = this.el.find("#regionListItem");
	  this.vendorItemTenplate = this.el.find("#vendorListItem");
	  this.regionSelectItemTemplate = this.el.find("#regionSelectItem");
	  
	  this.regonList = this.el.find("#regonList");
	  this.regonList.listview();
	  
	  this.vendor = this.el.find('#vendor');
	  this.region = this.el.find('#region');
	  
  },//end init
  
  onPageShow: function(e, ui){
	  this._super(e, ui);
	  var me  = this;
	  
	  if(AjaxService.UserID)
		  this.isLogin = true;
	  else
		  this.isLogin = false;
	  
	  AjaxService.getVendorTypes(function(d){
		  if(!$.isArray(d))
			  d = [d];		  
		  me.poplulateVendorList(d); 
	  });
  },
  
  addRegionClick: function(e){
	  
	  var rg =  this.el.find('#region :selected').text(), rv = this.el.find('#region').val();
	  
	  if(this.regonList.find("img[data-messageid='"+ rv +"']").length > 0)
		  return;
	  
	  var a = this.regionListItemTemplate.tmpl({Region : rg, RegionVal : rv});
	  a.appendTo(this.regonList);	  
	  this.regonList.listview("refresh");

	  this.regonList.find("img[data-messageid='"+ rv +"']").live("vclick", function(e){		  
		  a.remove();
		  AjaxService.removeRegion(rv, function(d){			  
		  });
	  });
	  
	  if(this.isLogin){
		  AjaxService.addUserRegion(rv, function(d){			  
		  });
	  }
  },
  
  poplulateVendorList: function(d){	  
	  this.vendor.empty();
	  this.vendorItemTenplate.tmpl(d).appendTo(this.vendor);
	  this.vendor.selectmenu("refresh");
	  
	  var me = this;
	  
	  AjaxService.getRegion(function(d){
		  if(!$.isArray(d))
			  d = [d];		  
		  me.poplulateRegionList(d); 
	  });
  },
  
  poplulateRegionList: function(d){
	  this.region.empty();
	  this.regionSelectItemTemplate.tmpl(d).appendTo(this.region);
	  this.region.selectmenu("refresh");
	  
	  if(this.isLogin)
		  this.loadUserInfo();
  },
  
  
  /*
   * load user info into form
   */
  loadUserInfo: function(){
	  var me = this;
	  AjaxService.getUserInfo(function(d){
		  //bind data
		  me.el.find("#name").attr("readonly", true);
		  me.el.find("#password").attr("readonly", true);
		  
		  me.el.find("#firstname").val(d.FirstName);
		  me.el.find("#lastname").val(d.LastName);
		  me.el.find("#email").val(d.Email);
		  if(d.VendorTypeID)
			  me.el.find("#vendor").val(d.VendorTypeID);
		  me.el.find("#company").val(d.CompanyName);
		  me.el.find("#adr1").val(d.Address1);
		  me.el.find("#adr2").val(d.Address2);
		  me.el.find("#city").val(d.City);
		  me.el.find("#state").val(d.State);
		  me.el.find("#zip").val(d.Zip);
		  me.el.find("#phone").val(d.Phone);
		  me.el.find("#url1").val(d.Url1);
		  me.el.find("#url2").val(d.Url2);
		  
	  });
	  
  },
  
  
  saveClicked: function(e){

	  //validate data
	  if(!this.isLogin){
		  var username = $.trim(this.el.find("#name").val());
		  if(username.length == 0){
			  Page.showDialog("Error", "User name is empty");
			  return;
		  }
		  
		  var password = $.trim(this.el.find("#password").val());
		  if(password.length == 0){
			  Page.showDialog("Error", "Password is empty");
			  return;
		  }
		  
		  var regions = this.el.find("#regonList img");
		  if(regions.length == 0){
			  Page.showDialog("Error", "Region is empty");
			  return;
		  }
	  }
	  
	  var firstname = $.trim(this.el.find("#firstname").val());
	  if(firstname.length == 0){
		  Page.showDialog("Error", "First name is empty");
		  return;
	  }
	  
	  var lastname = $.trim(this.el.find("#lastname").val());
	  if(lastname.length == 0){
		  Page.showDialog("Error", "Last name is empty");
		  return;
	  }
	  
	  var email = $.trim(this.el.find("#email").val());
	  if(email.length == 0){
		  Page.showDialog("Error", "Email is empty");
		  return;
	  }
	  
	  var vendor =this.el.find("#vendor").val();
	  if(vendor.length == 0){
		  Page.showDialog("Error", "Vendor type is empty");
		  return;
	  }
	  
	  var company = $.trim(this.el.find("#company").val());
	  var adr1 = $.trim(this.el.find("#adr1").val());
	  var adr2 = $.trim(this.el.find("#adr2").val());
	  var city = $.trim(this.el.find("#city").val());
	  var state = $.trim(this.el.find("#state").val());
	  var zip = $.trim(this.el.find("#zip").val());
	  var phone = $.trim(this.el.find("#phone").val());
	  var url1 = $.trim(this.el.find("#url1").val());
	  var url2 = $.trim(this.el.find("#url2").val());
	  
	  var me = this;
	  if(this.isLogin){
		  AjaxService.updateUser(firstname,lastname,company,adr1,adr2,city,state,zip,email,url1,url2,function(d){
			  Page.showDialog("Success", "Account is updated");
			  $.mobile.changePage($("#MainPage"));
		  });
	  }
	  else{
		  AjaxService.createUser(username,password,firstname,lastname,company,adr1,adr2,city,state,zip,email,url1,url2,vendor,function(d){
			  me.afterCreateUser(username,password,regions);
		  });
	  }
  },
  
  afterCreateUser: function(username,password,regions){
	  
	  //login
	  AjaxService.login(username, password, function(d){
		  if(d == null)
			  Page.showDialog("Error", "Invalid Username/password");
		  else{			 	  
			  //set API key and userid
			  AjaxService.APIKey = d.APIKey;
			  AjaxService.UserID = d.UserID;			  
			  //Add region
			  var count = 0;
			  for(var i = 0 ; i<regions.length; i++){
				  var regionId = $(regions[i]).attr("data-messageId");
				  AjaxService.addUserRegion(regionId, function(){
					  count++;
					  if(count >= regions.length){//done
						  Page.showDialog("Success", "Account is created");
						  $.mobile.changePage($("#MainPage"));						  
					  }
						  
				  });
			  }
			  
		  }
	  });
  }
  
});