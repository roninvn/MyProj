/*
 * This file will define Login Controller and its function
 */
USitISit.controllers.RegistrationController = new Ext.Controller({
	/*
	 * Reg a new account
	 */
	regProfile : function() {

		Utils.showLoadMask();

		var params = Utils.getFormParams(USitISit.views.RegistrationForm);

		Ext.apply(params, Utils.getFormParams(USitISit.views.SpouseInfoForm));

		Utils.ajaxRequest('registerProfile', params, function(result) {

			Utils.hideLoadMask();

			if(result && result.response) {
				Ext.Msg.alert('Success', 'Profile is created successfully.', function() {
					USitISit.viewport.setActiveItem(USitISit.views.LoginForm);
				});
			} else {
				Ext.Msg.alert('Failed', 'Error creating profile. Please check your inputted info or your phone internet connection.', Ext.emptyFn);
			}

		});
	}
});

Ext.regController('RegistrationController', USitISit.controllers.RegistrationController);
