/*
 * This file will define Login Controller and its function
 */
Geezeo.controllers.LoginController = new Ext.Controller({
	
	userID: null,

	login : function() {
		
		Geezeo.controllers.LoginController.userID = 1;
		Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm,'slide');
		/*Ext.Msg.alert('Login', 'This is a mock function. Supposed we login successfully with UserID #1', function(){
			Geezeo.viewport.setActiveItem(Geezeo.views.DashboardForm,'slide');
		});*/
	}
});

Ext.regController('LoginController', Geezeo.controllers.LoginController);
