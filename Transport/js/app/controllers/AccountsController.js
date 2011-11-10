/*
 * This file will define Accounts Controller and its function
 */
Geezeo.controllers.AccountsController = new Ext.Controller({

	accountItemTap : function(interaction) {
		var index = interaction.args[0];
		var accountID = AccountStore.getAt(index).get("id");
		var name = AccountStore.getAt(index).get("name");
		//get Transaction
		Utils.showLoadMask();
		Ajax.request('getTransactions',{users : Geezeo.controllers.LoginController.userID, accounts: accountID}, function(data){
			Utils.hideLoadMask();
			if(data){
				TransactionStore.loadData(data, false);
				
				//set title
				Geezeo.views.TransactionsForm.query('toolbar')[0].setTitle(name);
				
				Geezeo.viewport.setActiveItem(Geezeo.views.TransactionsForm,'slide');
			}
			else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}
		});
		
	}
});

Ext.regController('AccountsController', Geezeo.controllers.AccountsController);
