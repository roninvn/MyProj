/*
 * Class for Ajax service
 */
$.Class.extend("AjaxService",
// static methods 
{  //base service URL
  baseURL : "",
  
  services : {
	  			SearchMovie: "search.json?name={movieName}",
	  			GetResList: "trailers.json?id={mvID}"
  			 },
  
  /*
   * query data from server, this is a private data
   */
  __query: function(serviceURL, callback){	  	
		// If no url was passed, exit.
		if ( !serviceURL ) {
			alert('No site was passed.');
			return false;
		}
		$.getJSON(AjaxService.baseURL + serviceURL, cbFunc );		
		function cbFunc(data) {			
			if ( typeof callback === 'function') {
				callback(data);	
			}
		}
  },//end __query  
  
  
  /*
   * searchMovie by name
   */
  searchMovie : function(mvName, callback){
	  var q = AjaxService.services.SearchMovie.replace('{movieName}', encodeURIComponent(mvName));
	  AjaxService.__query(q, callback);
  },
  
  /*
   * getResList
   */
  getResList : function(mvID, callback){
	  var q = AjaxService.services.GetResList.replace('{mvID}', encodeURIComponent(mvID));
	  AjaxService.__query(q, callback);
  },
  
},

// prototype methods
{
  // called when a new monster is created
  init : function(){
  }
});