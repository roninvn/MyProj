/*
 * SearchMovTrailersPage
 */
Page.extend("SearchMovTrailersPage",
// static methods 
{},
// prototype methods
{
 
  btnSearch : null,
  txtTitle: null,
	
  init : function(id){
	  
	  this._super(id);
	  this.btnSearch = this.el.find("#btnSearch");
	  this.txtTitle = this.el.find("#title");
	  var me = this;
	  this.btnSearch.live('vclick', function(e){me.searchClick(e);});
  },
  
  searchClick: function(e){
	  $.mobile.pageLoading();
	  AjaxService.searchMovie(this.txtTitle.val(), function(d){		  
		  Page.exchangeData.movieSearchResult = d;
		  //console.log(d);
		  $.mobile.pageLoading(true);
		  $.mobile.changePage("#SearchResultPage");
	  });
  }
  
});