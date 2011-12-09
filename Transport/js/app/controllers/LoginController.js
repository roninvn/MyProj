/*
 * This file will define Login Controller and its function
 */
Geezeo.controllers.LoginController = new Ext.Controller({
	
	userID: null,

	login : function() {
		
		Geezeo.controllers.LoginController.userID = 1;
		Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm,'slide');
		Utils.showLoadMask();
		Ext.util.JSONP.request({
			url : 'http://217.18.115.228/CSRInterop/Service.aspx/CSR/List/Active',
			callbackKey : 'jsoncallback',
			callback : function(data){				
				Utils.hideLoadMask();
				CSRStore.loadData(data, false);
			}
		});
	}
});

Ext.regController('LoginController', Geezeo.controllers.LoginController);
