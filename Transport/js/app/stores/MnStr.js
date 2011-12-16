var MenuStore = new Ext.data.JsonStore({
	model : 'MenuModel',
	getGroupString : function(record) {
		return record.get('type');
	},
	data : [{
		"img" : "newcsr.png",
		"section" : "New CSR",
		"type" : "group1",
		"childpanel" : "bookSettingsPanel"
	}, {
		"img" : "csractive.png",
		"section" : "CSR Active",
		"type" : "group1",
		"childpanel" : "bookServiceGroupsPanel"
	}, {
		"img" : "csrclosed.png",
		"section" : "CSR Closed",
		"type" : "group1",
		"childpanel" : "sellSetingsPanel"
	}, {
		"img" : "allcsr.png",
		"section" : "All CSR",
		"type" : "group1",
		"childpanel" : "sellVendorPanel"
	}, {
		"img" : "csrsearch.png",
		"section" : "Search",
		"type" : "group1",
		"childpanel" : "sellProductGroupsPanel"
	}, {
		"img" : "gotoweb.png",
		"section" : "Go To WebSite",
		"type" : "group2",
		"childpanel" : "sellProductGroupsPanel"
	}, {
		"img" : "csrhelp.png",
		"section" : "Help",
		"type" : "group2",
		"childpanel" : "App.View.Help"
	}]
});
