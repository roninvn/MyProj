/*
 * VidPlayPage
 */
Page.extend("VidPlayPage",
// static methods
{
},
// prototype methods
{
	player : null,

	init : function(id) {
		this._super(id);
		
	},
	onPageShow : function(e, ui) {		
		this._super(e, ui);
		this.player = this.el.find("#player");
		this.player.jPlayer({
			  ready: function () {
			   $(this).jPlayer("setMedia", {
			    m4v: Page.exchangeData.mvUrl			    
			   });
			  },
			  swfPath: "js/lib",
			  supplied: "m4v"			  
			 });
	},
	/*
	 * run before page hide
	 */
	onPageBeforeHide : function(e, u) {		
		this.player.jPlayer( "clearMedia" );
		this.player = null;
	}
});
