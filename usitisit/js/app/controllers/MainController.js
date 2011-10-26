/*
 * This file will define Login Controller and its function
 */
USitISit.controllers.MainController = new Ext.Controller({
	/*
	 * request a sitter
	 */
	reqSitter: function(){
		Utils.showLoadMask();
		var params = Utils.getFormParams(USitISit.views.ReqSitterForm);
		
		Utils.hideLoadMask();
		console.log(params);
	}
});

Ext.regController('MainController', USitISit.controllers.MainController);

