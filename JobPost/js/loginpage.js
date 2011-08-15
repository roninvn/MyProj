/*
 * Login Page
 */
Page.extend("LoginPage",
// static methods 
{},
// prototype methods
{
  // called when a new monster is created
  init : function(id){
	  this._super(id);
	  var me = this;
	  $('#login', me.el).live("click", function(e){me.loginClick(e)});
	  
  },//end init
  
  /*
   * login page show
   */
  onPageShow: function(e, ui){
	  this._super(e, ui);
	  var me = this;
	  //get Job Available
	  AjaxService.getNumberofJobs(function(jobs){
		  //var d = jobs.Value;
		  console.log(me);
		  me.el.find('#jobAvail').text(jobs);
	  });	  
  },
  
  /*
   * click button login
   */
  loginClick: function(e){
	  
	  var usr = $('#name', this.el).val(),
	  		pwd = $('#password', this.el).val();
	  
	  AjaxService.login(usr, pwd, function(d){
		  if(d == null)
			  Page.showDialog();
		  else{			 	  
			  //set API key and userid
			  AjaxService.APIKey = d.APIKey;
			  AjaxService.UserID = d.UserID;
			  $.mobile.changePage($("#MainPage"));
			 
		  }
	  });
  }
  
});