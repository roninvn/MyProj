var Ajax = {
	baseUrl : 'http://217.18.115.228/CSRInterop/Service.aspx/',
	services : {
		login : 'Login',
		loadCSRActive : 'CSR/List/Active',
		loadCSRClose: 'CSR/List/Closed',
		loadAllClose: 'CSR/List',
		loadDetailList: 'CSR/Detail/'
	},
	
	/*
	 * Ajax request via JSONP
	 */
	request : function(funcName, params, callback) {
		
		var url = Ajax.baseUrl + Ajax.services[funcName];
		
		//request
		Ext.util.JSONP.request({
			url : url,
			params: params,
			callbackKey : 'jsoncallback',
			callback : callback
		});
	}	
};
