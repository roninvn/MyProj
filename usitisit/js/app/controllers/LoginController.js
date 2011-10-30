/*
 * This file will define Login Controller and its function
 */
USitISit.controllers.LoginController = new Ext.Controller({

	user_id : null,
	auth_token : null,
	SaveLogInKey : 'com.nam.usitisit.login',

	login : function() {
		Utils.showLoadMask();
		var params = Utils.getFormParams(USitISit.views.LoginForm);
		params.password = Utils.md5(params.password);
		//console.log(params);

		Utils.ajaxRequest('login', params, function(result) {
			Utils.hideLoadMask();
			if(result && result.response) {
				USitISit.controllers.LoginController.user_id = result.user_id;
				USitISit.controllers.LoginController.auth_token = result.auth_token;

				if(USitISit.views.LoginForm.query("#chkSaveInfo")[0].getValue() === 1) {
					//save login info
					window.localStorage.setItem(USitISit.controllers.LoginController.SaveLogInKey, Ext.util.JSON.encode({
						user_id : result.user_id,
						auth_token : result.auth_token

					}));
				}

				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
			} else {
				Ext.Msg.alert('Failed', 'Login failed. Please check your email/password.', Ext.emptyFn);
			}

		});
	}
});

Ext.regController('LoginController', USitISit.controllers.LoginController);
