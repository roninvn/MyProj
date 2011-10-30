/**
 * This file will define and register the application
 */
Ext.regApplication({
	name : 'USitISit',
	defaultTarget : "viewport",
	launch : function() {
		this.viewport = new USitISit.views.Viewport();

		var str = window.localStorage.getItem(USitISit.controllers.LoginController.SaveLogInKey);
		if(str && str !== "") {
			var obj = Ext.util.JSON.decode(str);
			if(obj && obj.user_id && obj.auth_token) {
				USitISit.controllers.LoginController.user_id = obj.user_id;
				USitISit.controllers.LoginController.auth_token = obj.auth_token;
				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);

			}
		}
	},
});
