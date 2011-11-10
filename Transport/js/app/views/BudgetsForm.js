Geezeo.views.BudgetsForm = Ext.extend(Ext.Panel, {
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
		title : 'Budgets',
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
		itemTpl : '<div class="accountListItemName">{name}</div><div class="accountListItemBalance">${spent}</div>',
		itemCls : '',
		store: BudgetStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
			}
		}
		
	}]
});

Ext.reg('BudgetsForm', Geezeo.views.BudgetsForm);
