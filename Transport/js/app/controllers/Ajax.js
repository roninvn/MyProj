var Ajax = {
	baseUrl : 'https://85cf17e2fe0dc0af9acb2ac824fb15ec79252cca@geez3o.geezeo.com/api/v1/',
	services : {
		getAccounts : 'accounts.json',
		getAlerts : 'alerts.json',
		getBudgets : 'budgets.json',
		getGoals : 'goals.json',
		getExpenses: 'bills.json',
		
		getTransactions : 'transactions.json'
	},
	
	/*
	 * Ajax request via JSONP
	 */
	request : function(funcName, params, callback) {
		
		var url = Ajax.baseUrl;
		//fill in params
		if(params && params != null){
			for (var key in params){
				url += encodeURIComponent(key) + "/" + encodeURIComponent(params[key]) + "/";
			}
		}
		
		url += Ajax.services[funcName];
		
		//request
		Ext.util.JSONP.request({
			url : url,
			callbackKey : 'callback',
			callback : callback
		});
	}	
};
