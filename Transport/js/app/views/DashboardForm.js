Geezeo.views.DashboardForm = Ext.extend(Ext.Panel, {
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
		title : 'Dashboard',
		items : [{
			xtype : 'spacer'
		}, {
			text : 'Logout'
		}]
	}],

	items : [{
		xtype: 'list',
		itemTpl : '{name}',
		itemCls : 'dashboardListItem',
		store: DashboardStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
				//console.log(v,i,it,e);
				Ext.dispatch({
					controller : Geezeo.controllers.DashboardController,
					action : 'dashboardItemTap',
					args : [i]
				});
			}
		}
		
	}]
});

Ext.reg('DashboardForm', Geezeo.views.DashboardForm);
