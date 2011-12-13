/**
 * This file will define and register the application
 */
Ext.regApplication({
    name: 'Geezeo',
    defaultTarget: "viewport",
    launch: function() {
    	LocalStore.load();
    	this.viewport = new Geezeo.views.Viewport();
		Ext.dispatch({
			controller : Geezeo.controllers.LoginController,
			action : 'afterLaunch'
		});
    },
});
