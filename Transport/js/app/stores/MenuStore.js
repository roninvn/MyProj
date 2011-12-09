var MenuStore = new Ext.data.JsonStore({
	model : 'MenuModel',
	getGroupString : function(record) {
		return record.get('type');
	},
	data : [{
		"img" : "new_csr.png",
		"section" : "New CSR",
		"type" : "group1",
		"childpanel" : "bookSettingsPanel"
	}, {
		"img" : "csr_active.png",
		"section" : "CSR Active",
		"type" : "group1",
		"childpanel" : "bookServiceGroupsPanel"
	}, {
		"img" : "csr_closed.png",
		"section" : "CSR Closed",
		"type" : "group1",
		"childpanel" : "sellSetingsPanel"
	}, {
		"img" : "all_csr.png",
		"section" : "All CSR",
		"type" : "group1",
		"childpanel" : "sellVendorPanel"
	}, {
		"img" : "csr_search.png",
		"section" : "Search",
		"type" : "group1",
		"childpanel" : "sellProductGroupsPanel"
	}, {
		"img" : "gotoweb.png",
		"section" : "Go To WebSite",
		"type" : "group2",
		"childpanel" : "sellProductGroupsPanel"
	}, {
		"img" : "csr_help.png",
		"section" : "Help",
		"type" : "group2",
		"childpanel" : "App.View.Help"
	}]
});
