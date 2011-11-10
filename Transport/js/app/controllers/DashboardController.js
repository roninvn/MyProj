/*
 * This file will define Login Controller and its function
 */
Geezeo.controllers.DashboardController = new Ext.Controller({

	dashboardItemTap : function(interaction) {
		//get item index
		var index = interaction.args[0];
		
		//open associated screen
		if(index === 0)
			this.openAccountForm();
		else if(index === 1)
			this.openAlertsForm();
		else if(index === 2)
			this.openBudgetsForm();
		else if(index === 3)
			this.openGoalsForm();
		else if(index === 4)
			this.openExpensesForm();
	},
	
	openAccountForm: function(){
		
		//get account
		Utils.showLoadMask();
		Ajax.request('getAccounts',{users : Geezeo.controllers.LoginController.userID}, function(data){
			Utils.hideLoadMask();
			if(data && data.accounts){
				AccountStore.loadData(data.accounts, false);
				Geezeo.viewport.setActiveItem(Geezeo.views.AccountsForm,'slide');
			}
			else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}
		});
		
	},
	
	openAlertsForm: function(){
		
		//get alerts
		Utils.showLoadMask();
		Ajax.request('getAlerts',{users : Geezeo.controllers.LoginController.userID}, function(data){
			
			Utils.hideLoadMask();
			if(data && data.alerts){
				AlertStore.loadData(data.alerts, false);
				Geezeo.viewport.setActiveItem(Geezeo.views.AlertsForm,'slide');
			}
			else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}
		});
		
	},
	
	openBudgetsForm: function(){
		//get budgets
		Utils.showLoadMask();
		Ajax.request('getBudgets',{users : Geezeo.controllers.LoginController.userID}, function(data){
			
			Utils.hideLoadMask();
			if(data && data.budgets){
				BudgetStore.loadData(data.budgets, false);
				Geezeo.viewport.setActiveItem(Geezeo.views.BudgetsForm,'slide');
			}
			else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}
		});
	},
	
	openGoalsForm: function(){
		//get budgets
		Utils.showLoadMask();
		Ajax.request('getGoals',{users : Geezeo.controllers.LoginController.userID}, function(data){
			
			Utils.hideLoadMask();
			
			if(data && data.goals){
				GoalStore.loadData(data.goals, false);
				Geezeo.viewport.setActiveItem(Geezeo.views.GoalsForm,'slide');
			}
			else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}
		});
	},
	
	openExpensesForm: function(){
		//get budgets
		Utils.showLoadMask();
		Ajax.request('getExpenses',{users : Geezeo.controllers.LoginController.userID}, function(data){
			
			Utils.hideLoadMask();

			if(data && data.bills){
				ExpenseStore.loadData(data.bills, false);
				Geezeo.viewport.setActiveItem(Geezeo.views.ExpensesForm,'slide');
			}
			else {
				Ext.Msg.alert('Failed', 'Loading data failed.', Ext.emptyFn);
			}
		});
	},
	
	/*
	 * go back to dashboard screen
	 */
	backToDashboard: function(){
		
		Geezeo.viewport.setActiveItem(Geezeo.views.DashboardForm,{type:'slide', direction:'left'});
		
	}
});

Ext.regController('DashboardController', Geezeo.controllers.DashboardController);
