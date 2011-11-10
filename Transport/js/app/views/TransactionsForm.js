Geezeo.views.TransactionsForm = Ext.extend(Ext.Panel, {
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
		title : 'Transactions',
		items : [{
			text:'Accounts',
			ui:'back',
			handler: function(){
				Geezeo.viewport.setActiveItem(Geezeo.views.AccountsForm,{type:'slide', direction:'left'});
			}
		},{
			xtype : 'spacer'
		}, {
			text : 'Logout'
		}]
	}],

	items : [{
		xtype: 'list',
		itemTpl : '<div class="transactionName">{original_name}</div><div class="transactionBalance">${balance}</div><div class="transactionDate">{created_at:date("m/d/Y G:i")}</div>',
		itemCls : 'transactionListItem',
		store: TransactionStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
			}
		}
		
	}]
});

Ext.reg('TransactionsForm', Geezeo.views.TransactionsForm);
