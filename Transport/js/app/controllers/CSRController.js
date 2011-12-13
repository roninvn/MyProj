Geezeo.controllers.CSRController = new Ext.Controller({

	csrFormRender : function() {

	},
	
	csrActiveLoad: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token
		};
		
		Utils.showLoadMask();

		Ajax.request('loadCSRActive', params, function(data) {
			Utils.hideLoadMask();
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				CSRActiveStore.loadData(data.ListCSR);
			}
			else{
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
	},
	
	loadDetailList: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token,
			IdCSR: detailWin.idCSR
		};
		
		Utils.showLoadMask();

		Ajax.request('loadDetailList', params, function(data) {
			Utils.hideLoadMask();
			console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				//CSRActiveStore.loadData(data.ListCSR);
				Geezeo.views.CSRDetailList.items.each(function(itm){
					//console.log(itm.getXTypes());
					itm.update(data.CSRDetail);
				});
				Geezeo.viewport.setActiveItem(Geezeo.views.CSRDetailList,'slide');
			}
			else{
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
	}
});

Ext.regController('CSRController', Geezeo.controllers.CSRController);
