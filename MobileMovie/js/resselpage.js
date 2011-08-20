/*
 * ResSelectPage
 */
Page.extend("ResSelectPage",
// static methods 
{},
// prototype methods
{
	
	resListItemTemplate: null,
	resList: null,
	
	init : function(id){	
		this._super(id);
		this.resListItemTemplate = this.el.find("#resListItem");		
		this.resList = this.el.find("#resList");		
	},
	/*
	 * page is showed
	 */
	onPageShow: function(e, ui){
		this._super(e, ui);
		
		var me = this;
		this.resList.listview();	
		//fill list
		this.resList.empty();
		this.resListItemTemplate.tmpl(Page.exchangeData.resListResult.movieTrailers).appendTo(this.resList);
		this.resList.find("a").live("vclick", function(e){me.listItemButtonClicked(e);});		
		this.resList.listview("refresh");
		
	},
	
	listItemButtonClicked: function(e){
		  e.stopPropagation();
		  var btn = $(e.target);
		  var mvurl = btn.attr("data-mvUrl");
		  Page.exchangeData.mvUrl = mvurl;
		  $.mobile.changePage("#VidPlayPage");
	}
  
});