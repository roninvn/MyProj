Geezeo.views.AccountsForm = Ext.extend(Ext.Panel, {
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
		itemTpl : '<div class="accountListItemName">{name}</div><div class="accountListItemBalance">${balance}</div>',
		itemCls : 'accountListItem',
		store: AccountStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
				Ext.dispatch({
					controller : Geezeo.controllers.AccountsController,
					action : 'accountItemTap',
					args : [i]
				});
			}
		}
		
	}]
});

Ext.reg('AccountsForm', Geezeo.views.AccountsForm);
