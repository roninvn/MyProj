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
	  			NumJobsOfUser : "{vstrApiKey}/user/{vstrUserId}/availjobs"
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
		
		// Take the provided url, and add it to a YQL query. Make sure you encode it!
		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from json where url="' + AjaxService.baseURL + serviceURL + '"') + '&format=json&callback=?';		
		// Request that YSQL string, and run a callback function.
		// Pass a defined function to prevent cache-busting.
		$.getJSON( yql, cbFunc );		
		function cbFunc(data) {			
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
  }
  
  
},

// prototype methods
{
  // called when a new monster is created
  init : function(){
  }
});