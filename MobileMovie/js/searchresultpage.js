/*
 * SearchResultPage
 */
Page.extend("SearchResultPage",
// static methods 
{},
// prototype methods
{
	
	movieListItemTemplate: null,
	resultList: null,
	scroller: null,
	
	init : function(id){	
		this._super(id);
		this.movieListItemTemplate = this.el.find("#movieListItem");		
		this.resultList = this.el.find("#resultList");
		this.scroller = new iScroll('wrapper');
		
	},
	
	onPageShow: function(e, ui){
		this._super(e, ui);
		this.resultList.listview();
		
		//fill list
		this.resultList.empty();		  
		this.movieListItemTemplate.tmpl(Page.exchangeData.movieSearchResult.contentData).appendTo(this.resultList);		
		this.resultList.listview("refresh");
	}
  
});