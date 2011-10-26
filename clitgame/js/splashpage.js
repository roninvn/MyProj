/*
 * Splash Page
 */
Page.extend("SplashPage",
// static methods 
{},
// prototype methods
{
  init : function(e){	  
	  this._super(e);
	  
	  this.el.click(function(e){
		  Page.show("HomePage");
		  $("#adOhYeah")[0].play();
	  });
	  
  }//end init  
});