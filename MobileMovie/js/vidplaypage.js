/*
 * VidPlayPage
 */
Page.extend("VidPlayPage",
// static methods 
{},
// prototype methods
{	
	player: null,
	
	init : function(id){	
		this._super(id);
		this.player = this.el.find("#player");
	},
	
	onPageShow: function(e, ui){
		this._super(e, ui);
		
		this.player.attr("src", "");
		this.player.find("source").attr("src", "");
		
		
		this.player.find("source").attr("src", Page.exchangeData.mvUrl);
		this.player.attr("src", Page.exchangeData.mvUrl).load();		
		this.player.get(0).play();
	},
	/*
	 * run before page hide
	 */
	onPageBeforeHide: function(e, u){		
		//remove video
		this.player.get(0).pause();
		this.player.attr("src", "");
		this.player.find("source").attr("src", "");
		
	}
  
});