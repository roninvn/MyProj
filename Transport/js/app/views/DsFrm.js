Geezeo.views.DashboardForm = Ext.extend(Ext.TabPanel, {
	//scroll: 'vertical',	
	styleHtmlContent : true,
	fullscreen : true,
	layout : 'fit',
	bodyPadding: 0,
	tabBar: {
		dock: 'top',
		layout: {
			pack : 'center'
		}
	},
	
	items : [{
		xtype: 'CSRActive',
		title: 'CSR Active'
	},{
		xtype: 'CSRClose',
		title: 'CSR closed'
	},{
		xtype: 'CSRAll',
		title: 'All CSR'
	}]
});

Ext.reg('DashboardForm', Geezeo.views.DashboardForm);
