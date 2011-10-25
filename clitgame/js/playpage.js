/*
 * Play Page
 */
Page.extend("PlayPage",
// static methods 
{},
// prototype methods
{
  init : function(e){	  
	  this._super(e);
	  
	  var me = this;
	  $('#dPlay').click(function(){me.play();});
	  
	  $('#dResult').hide();
	  
  },//end init
  
  play: function(){
	  this.game = new Game();
	  this.game.play();
  }
  
});