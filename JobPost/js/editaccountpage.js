/*
 * Edit Account Page
 */
Page.extend("EditAccountPage",
// static methods 
{},
// prototype methods
{
  btnAddRegion: null,
  regionListItemTemplate : null,
  regonList: null,
  btnSave: null,
  
  // called when a new instance is created
  init : function(id){
	  this._super(id);
	  var me = this;
	  
	  this.btnAddRegion = this.el.find("#btnAddRegion");	  
	  this.btnAddRegion.live("vclick", function(e){me.addRegionClick(e);});
	  this.btnSave = this.el.find("#Save");	 
	  this.btnSave.live("vclick", function(e){alert("Save click");});	  
	  
	  this.regionListItemTemplate = this.el.find("#regionListItem");
	  this.regonList = this.el.find("#regonList");
	  this.regonList.listview();
	  
  },//end init
  
  onPageShow: function(e, ui){
	  this._super(e, ui);
  },
  
  addRegionClick: function(e){
	  
	  var rg =  this.el.find('#region :selected').text(), rv = this.el.find('#region').val();
	  
	  if(this.regonList.find("img[data-messageid='"+ rv +"']").length > 0)
		  return;
	  
	  var a = this.regionListItemTemplate.tmpl({Region : rg, RegionVal : rv});
	  a.appendTo(this.regonList);	  
	  this.regonList.listview("refresh");

	  this.regonList.find("img[data-messageid='"+ rv +"']").live("vclick", function(e){		  
		  a.remove();
	  });
  }
  
});