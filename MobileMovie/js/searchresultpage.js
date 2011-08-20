/*
 * SearchResultPage
 */
Page.extend("SearchResultPage",
// static methods
{
},
// prototype methods
{

	movieListItemTemplate : null,
	resultList : null,
	scroller : null,

	init : function(id) {
		this._super(id);
		this.movieListItemTemplate = this.el.find("#movieListItem");
		this.resultList = this.el.find("#resultList");
		//this.scroller = this.el.find("#wrapper");
		//this.scroller.touchScroll();

	},
	/*
	 * call when page opens
	 */
	onPageShow : function(e, ui) {
		this._super(e, ui);
		var me = this;
		this.resultList.listview();
		//fill list
		this.resultList.empty();
		this.movieListItemTemplate.tmpl(Page.exchangeData.movieSearchResult.contentData).appendTo(this.resultList);

		this.resultList.find("a").live("vclick", function(e) {
			me.listItemButtonClicked(e);
		});
		//refresh list
		this.resultList.listview("refresh");
		setTimeout(function() {
			myScroll.refresh();
		}, 0);
	},
	listItemButtonClicked : function(e) {
		e.stopPropagation();
		var btn = $(e.target);
		var id = btn.attr("data-messageId");

		//Page.exchangeData.resSelect = {movID : id};

		$.mobile.pageLoading();
		AjaxService.getResList(id, function(d) {

			Page.exchangeData.resListResult = d;

			$.mobile.pageLoading(true);
			$.mobile.changePage("#ResSelectPage");
		});
	}
});
