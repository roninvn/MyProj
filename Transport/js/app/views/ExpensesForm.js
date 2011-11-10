Geezeo.views.ExpensesForm = Ext.extend(Ext.Panel, {
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
		title : 'Expenses',
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
		itemTpl : '<div class="accountListItemName">{name}</div><div class="accountListItemBalance">{interval} {interval_type}</div>',
		itemCls : 'accountListItem',
		store: ExpenseStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
			}
		}
		
	}]
});

Ext.reg('ExpensesForm', Geezeo.views.ExpensesForm);
