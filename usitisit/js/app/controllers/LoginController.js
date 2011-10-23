/*
 * This file will define Login Controller and its function
 */
USitISit.controllers.LoginController = new Ext.Controller({

	login : function() {
		Utils.showLoadMask();
		var params = Utils.getFormParams(USitISit.views.LoginForm);
		params.password = Utils.md5(params.password);
		//console.log(params);

		Utils.ajaxRequest('login', params, function(result) {
			Utils.hideLoadMask();
			//console.log(result);

			if(result && result.response) {
				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
			} else {
				Ext.Msg.alert('Failed', 'Login failed. Please check your email/password.', Ext.emptyFn);
			}

		});
	}
});

Ext.regController('LoginController', USitISit.controllers.LoginController);
