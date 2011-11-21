var MenuStore = new Ext.data.JsonStore({
	model : 'MenuModel',
	getGroupString : function(record) {
		return record.get('type');
	},
	data : [{
		"section" : "New CSR",
		"type" : "group1",
		"childpanel" : "bookSettingsPanel"
	}, {
		"section" : "CSR Active",
		"type" : "group1",
		"childpanel" : "bookServiceGroupsPanel"
	}, {
		"section" : "CSR Closed",
		"type" : "group1",
		"childpanel" : "sellSetingsPanel"
	}, {
		"section" : "All CSR",
		"type" : "group1",
		"childpanel" : "sellVendorPanel"
	}, {
		"section" : "Search",
		"type" : "group1",
		"childpanel" : "sellProductGroupsPanel"
	}, {
		"section" : "Go To WebSite",
		"type" : "group2",
		"childpanel" : "sellProductGroupsPanel"
	}, {
		"section" : "Help",
		"type" : "group2",
		"childpanel" : "App.View.Help"
	}]
});
