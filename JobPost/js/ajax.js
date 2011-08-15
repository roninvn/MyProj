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
	  			GetPeopleAvail : "{vstrApiKey}/job/{vstrJobID}/emaillist"
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
	  var q = AjaxService.services.GetPeopleAvail.replace('{vstrApiKey}', AjaxService.APIKey).replace('{vstrJobID}',jobid);
	  AjaxService.__query(q, callback);
  }
},

// prototype methods
{
  // called when a new monster is created
  init : function(){
  }
});