Geezeo.views.AlertsForm = Ext.extend(Ext.Panel, {
	//scroll: 'vertical',
	fullscreen : true,
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		title : 'Accounts',
		items : [{
			text:'Dashboard',
			ui:'back',
			handler: function(){
				Geezeo.controllers.DashboardController.backToDashboard();
			}
		},{
			xtype : 'spacer'
		}, {
			text : 'Logout'
		}]
	}],

	items : [{
		xtype: 'list',
		itemTpl : '{source_type}',
		itemCls : 'dashboardListItem',
		store: AlertStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
			}
		}
		
	}]
});

Ext.reg('AlertsForm', Geezeo.views.AlertsForm);
