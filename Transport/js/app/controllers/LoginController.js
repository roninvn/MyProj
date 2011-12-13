/*
 * This file will define Login Controller and its function
 */
Geezeo.controllers.LoginController = new Ext.Controller({

	token : null,

	afterLaunch: function(){
		var rec = LocalStore.findRecord('name', 'token');
		if(rec !== null){
			Geezeo.controllers.LoginController.token = rec.get('value');
			Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm); //already login
		}
	},
	
	
	login : function() {
		var me = this;
		var params = {
			User: Geezeo.views.LoginForm.down('#txtUserName').getValue(),
			Password: Geezeo.views.LoginForm.down('#txtPassword').getValue()
		};
		
		Utils.showLoadMask();

		Ajax.request('login', params, function(data) {
			Utils.hideLoadMask();
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "1"){//success
				me.token = data.Token;
				
				var rec = LocalStore.findRecord('name', 'token');
				if(rec === null)
					LocalStore.add({
						name: 'token',
						value: data.Token
					});
				else
					rec.set('token', data.Token);
				
				LocalStore.sync();
				
				Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm,'slide');
			}
			else{
				Ext.Msg.alert('Error', 'Login failed.', Ext.emptyFn);
			}
			
			//console.log(data);
		});

		/*
		 * Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm,'slide');
		 * 
		 * 
		 * Utils.showLoadMask(); Ext.util.JSONP.request({ url :
		 * 'http://217.18.115.228/CSRInterop/Service.aspx/CSR/List/Active',
		 * callbackKey : 'jsoncallback', callback : function(data){
		 * Utils.hideLoadMask(); CSRStore.loadData(data, false); } });
		 */
	}
});

Ext.regController('LoginController', Geezeo.controllers.LoginController);
