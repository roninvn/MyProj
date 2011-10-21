var Utils = {

	loadMask : new Ext.LoadMask(Ext.getBody(), {
		msg : "Please wait..."
	}),
	/*
	 * show the loading mask
	 */
	showLoadMask : function() {
		this.loadMask.show();
	},
	/*
	 * hide the loading mask
	 */
	hideLoadMask : function() {
		this.loadMask.hide();
	},
	/*
	 * Get params object from form controls, based on control name
	 */
	getFormParams : function(form) {
		var params = {};
		var arr = form.query('field');

		for(var i = 0; i < arr.length; i++) {
			if(arr[i].name && arr[i].name !== '')
				params[arr[i].name] = arr[i].getValue();
		}

		return params;
	},
	/*
	 * Ajax request via JSONP
	 */
	ajaxRequest : function(funcName, params, callback) {
		Ext.util.JSONP.request({
			url : 'http://dev.marketlytics.com/usit/backend/',
			params : {
				func : funcName,
				params : Ext.encode(params)
			},
			callbackKey : 'callback',
			callback : callback
		});
	}
};
