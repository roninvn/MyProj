/*
 * Home Page
 */
Page.extend("HomePage",
// static methods 
{},
// prototype methods
{
  init : function(e){	  
	  this._super(e);
	  
	  $('#btnPlay').click(function(){
		  Page.show("PlayPage");
		  $("#adOhYeah2")[0].play();
	  });
	  
  }//end init  
});