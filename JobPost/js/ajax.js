/*
 * Class for Ajax service
 */
$.Class.extend("AjaxService",
// static methods 
{  //base service URL
  baseURL : "http://adamhuds.w06.winhost.com/waa/",
  
  services : {
	  			NumJobs: "NumJobs",
	  			LogIn: "user/{vstrUserName}/{vstrPsw}/APIKey",
	  			NumJobsOfUser : "{vstrApiKey}/user/{vstrUserId}/availjobs",
	  			MarkJobForUser : "{vstrApiKey}/user/{vstrUserId}/job/{vstrJobID}/setAvail/{vstrAvail}",
	  			MyPostedJobs :"{vstrApiKey}/user/{vstrUserId}/mypostedjobs",
	  			GetPeopleAvail : "{vstrApiKey}/user/{vstrUserId}/mypostedjobs/job/{vstrJobID}/users",
	  			MailPeopleAvail : "{vstrApiKey}/job/{vstrJobID}/emaillist",
	  			GetRegion: "regions",	  			
	  			PostDate: "{vstrApiKey}/PostJob/{vstrUserId}/{vstrDesc}/{vstrDateMonth}/{vstrDateDay}/{vstrDateYear}/{vstrRegionID}",
	  			GetUserInfo: "{vstrApiKey}/user/{vstrUserID}",
	  			GetAd: "{vstrApiKey}/user/{vstrUserID}/ad",
	  			GetVendorTypes: "VendorTypes",
	  			CreateUser: "user/create/{vstrUserName}/{vstrPsw}/{vstrFirstName}/{vstrLastName}/{vstrCompanyName}/{vstrAddress1}/{vstrAddress2}/{vstrCity}/{vstrState}/{vstrZip}/{vstrEmail}/{vstrUrl1}/{vstrUrl2}/{vstrVendorTypeID}",
	  			AddRegion: "{vstrApiKey}/user/{vstrUserId}/AddRegion/{vstrRegion}",
	  			RemoveRegion: "{vstrApiKey}/user/{vstrUserId}/RemoveRegion/{vstrRegion}",
	  			GetUserInfo: "{vstrApiKey}/user/{vstrUserID}",
	  			UpdateUser: "{vstrApiKey}/user/{vstrUserID}/update/{vstrFirstName}/{vstrLastName}/{vstrCompanyName}/{vstrAddress1}/{vstrAddress2}/{vstrCity}/{vstrState}/{vstrZip}/{vstrEmail}/{vstrUrl1}/{vstrUrl2}"
  			 },
  
  APIKey: null,
  UserID : null,
  			 
  
  /*
   * query data from server, this is a private data
   */
  __query: function(serviceURL, callback){	  	
		// If no url was passed, exit.
		if ( !serviceURL ) {
			alert('No site was passed.');
			return false;
		}
		//console.log(AjaxService.baseURL + serviceURL);
		// Take the provided url, and add it to a YQL query. Make sure you encode it!
		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + AjaxService.baseURL + serviceURL + '"') + '&format=json&callback=?';		
		// Request that YSQL string, and run a callback function.
		// Pass a defined function to prevent cache-busting.
		$.getJSON( yql, cbFunc );		
		function cbFunc(data) {
			//console.log(data);
			var d;
			if(data && data.query && data.query.results && data.query.results.json){//extract data				
				d = data.query.results.json;
				if(d.json)
					d = d.json;
			}
			else if(data && data.query && data.query.results && data.query.results.Value)
				d = data.query.results.Value;
			else if(data && data.query && data.query.results && data.query.results.Image)
				d = data.query.results.Image;
			else
				d = null;			
			
			if ( typeof callback === 'function') {
				callback(d);
	
			}
		}
  },//end __query
  
  /*
   * get number of Job
   */
  getNumberofJobs : function(callback){
	  AjaxService.__query(AjaxService.services.NumJobs, callback);
  },
  
  /*
   * login
   */
  login: function(usr, pwd, callback){
	  var q = AjaxService.services.LogIn.replace('{vstrUserName}', usr).replace('{vstrPsw}',pwd);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * Number of Job for user
   */
  getNumberJobOfUser: function(callback){
	  var q = AjaxService.services.NumJobsOfUser.replace('{vstrApiKey}', AjaxService.APIKey).replace('{vstrUserId}',AjaxService.UserID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * Mark Job avail/unavail for an user - AvailJobPage
   */
  markJobForUser: function(jobID, avail, callback){	  
	  var q = AjaxService.services.MarkJobForUser.replace('{vstrApiKey}', AjaxService.APIKey)
									  			.replace('{vstrUserId}',AjaxService.UserID)
									  			.replace('{vstrJobID}',jobID)
									  			.replace('{vstrAvail}',avail);
	  
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getMyPostedJobs - PostedJobPage
   */
  getMyPostedJobs: function(callback){
	  var q = AjaxService.services.MyPostedJobs.replace('{vstrApiKey}', AjaxService.APIKey).replace('{vstrUserId}',AjaxService.UserID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getPeopleAvail - PeopleAvailPage
   */
  getPeopleAvail: function(jobid, callback){
	  var q = AjaxService.services.GetPeopleAvail.replace('{vstrApiKey}', AjaxService.APIKey)
	  												.replace('{vstrUserId}',AjaxService.UserID)
	  												.replace('{vstrJobID}',jobid);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * mailPeopleAvail - PeopleAvailPage
   */
  mailPeopleAvail: function(jobid, callback){
	  var q = AjaxService.services.MailPeopleAvail.replace('{vstrApiKey}', AjaxService.APIKey).replace('{vstrJobID}',jobid);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getRegion - AddDatePage
   */
  getRegion: function(callback){
	  var q = AjaxService.services.GetRegion;
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getVendorTypes - AddDatePage
   */
  getVendorTypes: function(callback){
	  var q = AjaxService.services.GetVendorTypes;
	  AjaxService.__query(q, callback);
  },
  
  /*
   * postDate - AddDatePage
   */
  postDate: function(desc,year, month, day, regionID, callback){
	  var q = AjaxService.services.PostDate.replace('{vstrApiKey}', AjaxService.APIKey)
	  										.replace('{vstrUserId}',AjaxService.UserID)
	  										.replace('{vstrDesc}',desc)
	  										.replace('{vstrDateMonth}',month)
	  										.replace('{vstrDateDay}',day)
	  										.replace('{vstrDateYear}',year)
	  										.replace('{vstrRegionID}',regionID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getUserInfo - PeopleInfoPage
   */
  getUserInfo: function(userID, callback){
	  var q = AjaxService.services.GetUserInfo.replace('{vstrApiKey}', AjaxService.APIKey)
												.replace('{vstrUserID}',userID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getAd
   */
  getAd: function(callback){
	  var q = AjaxService.services.GetAd.replace('{vstrApiKey}', AjaxService.APIKey).replace('{vstrUserID}',AjaxService.UserID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * Create user
   */
  createUser: function(vstrUserName,vstrPsw,vstrFirstName,vstrLastName,vstrCompanyName,vstrAddress1,vstrAddress2,vstrCity,vstrState,vstrZip,vstrEmail,vstrUrl1,vstrUrl2,vstrVendorTypeID, callback){
	  var q = AjaxService.services.CreateUser.replace('{vstrUserName}',vstrUserName)
	  													.replace('{vstrPsw}',vstrPsw)
	  													.replace('{vstrFirstName}',vstrFirstName)
	  													.replace('{vstrLastName}',vstrLastName)
	  													.replace('{vstrCompanyName}',vstrCompanyName)
	  													.replace('{vstrAddress1}',vstrAddress1)
	  													.replace('{vstrAddress2}',vstrAddress2)
	  													.replace('{vstrCity}',vstrCity)
	  													.replace('{vstrState}',vstrState)
	  													.replace('{vstrZip}',vstrZip)
	  													.replace('{vstrEmail}',vstrEmail)
	  													.replace('{vstrUrl1}',vstrUrl1)
	  													.replace('{vstrUrl2}',vstrUrl2)
	  													.replace('{vstrVendorTypeID}',vstrVendorTypeID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getUserInfo
   */
  getUserInfo: function(callback){
	  var q = AjaxService.services.GetUserInfo.replace('{vstrApiKey}', AjaxService.APIKey).replace('{vstrUserID}',AjaxService.UserID);
	  AjaxService.__query(q, callback);	  
  },
  
  /*
   * updateUser
   */
  updateUser:function(vstrFirstName,vstrLastName,vstrCompanyName,vstrAddress1,vstrAddress2,vstrCity,vstrState,vstrZip,vstrEmail,vstrUrl1,vstrUrl2, callback){
	  var q = AjaxService.services.UpdateUser.replace('{vstrApiKey}', AjaxService.APIKey)
												.replace('{vstrUserID}',AjaxService.UserID)
												.replace('{vstrFirstName}',vstrFirstName)
												.replace('{vstrLastName}',vstrLastName)
												.replace('{vstrCompanyName}',vstrCompanyName)
												.replace('{vstrAddress1}',vstrAddress1)
												.replace('{vstrAddress2}',vstrAddress2)
												.replace('{vstrCity}',vstrCity)
												.replace('{vstrState}',vstrState)
												.replace('{vstrZip}',vstrZip)
												.replace('{vstrEmail}',vstrEmail)
												.replace('{vstrUrl1}',vstrUrl1)
												.replace('{vstrUrl2}',vstrUrl2);
	  AjaxService.__query(q, callback);
  },
  
  /*
  * removeRegion
  */
  removeRegion: function(regionID,callback){
	  var q = AjaxService.services.RemoveRegion.replace('{vstrApiKey}', AjaxService.APIKey)
	  																.replace('{vstrUserId}',AjaxService.UserID)
	  																.replace('{vstrRegion}',regionID);
	  AjaxService.__query(q, callback);
  },
  
  /*
   * addUserRegion
   */
  addUserRegion: function(regionID,callback){
	  var q = AjaxService.services.AddRegion.replace('{vstrApiKey}', AjaxService.APIKey)
	  																.replace('{vstrUserId}',AjaxService.UserID)
	  																.replace('{vstrRegion}',regionID);
	  AjaxService.__query(q, callback);
  }
},

// prototype methods
{
  // called when a new monster is created
  init : function(){
  }
});