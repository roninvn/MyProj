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
	
	csrCloseLoad: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token
		};
		
		Utils.showLoadMask();

		Ajax.request('loadCSRClose', params, function(data) {
			Utils.hideLoadMask();
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				CSRCloseStore.loadData(data.ListCSR);
				Geezeo.views.SearchForm.doComponentLayout();
			}
			else{
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
	},
	
	csrAllLoad: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token
		};
		
		Utils.showLoadMask();

		Ajax.request('loadAllClose', params, function(data) {
			Utils.hideLoadMask();
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				CSRAllStore.loadData(data.ListCSR);
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
	},
	
	
	csrSearch: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token,
			shipname: Ext.getCmp('txtSearchName').getValue()
		};
		
		Utils.showLoadMask();

		Ajax.request('searchCSR', params, function(data) {
			Utils.hideLoadMask();
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				CSRSearchStore.loadData(data.ListCSR);
				Geezeo.views.SearchForm.doLayout();
			}
			else{
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
	},
	
	
	csrNewLoad: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token			
		};
		
		//load country
		Utils.showLoadMask();
		Ajax.request('loadCountry', params, function(data) {			
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				var ops = [];
				for(var i=0; i<data.ListCountries.length;i++)
					ops.push({
						text: data.ListCountries[i].Country,
						value: data.ListCountries[i].idCountries
					});
				Ext.getCmp('selEtaCountry').setOptions(ops);
				me.loadManufacturer();
			}
			else{
				Utils.hideLoadMask();
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
		
	},
	
	loadManufacturer: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token			
		};
		
		//load country
		
		Ajax.request('loadManufacturer', params, function(data) {			
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				var ops = [];
				for(var i=0; i<data.ListManufacturers.length;i++)
					ops.push({
						text: data.ListManufacturers[i].ManufacturerName,
						value: data.ListManufacturers[i].idEquipmentManufacturers
					});
				Ext.getCmp('selManf').setOptions(ops);
				me.loadShipList();
			}
			else{
				Utils.hideLoadMask();
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
	},
	
	loadShipList: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token			
		};
		
		//load country
		
		Ajax.request('loadShipList', params, function(data) {
			Utils.hideLoadMask();
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				var ops = [];
				for(var i=0; i<data.ListShips.length;i++)
					ops.push({
						text: data.ListShips[i].ShipName,
						value: data.ListShips[i].idShips
					});
				Ext.getCmp('selShip').setOptions(ops);
				me.loadShipList();
			}
			else{				
				Ext.Msg.alert('Error', 'Error loading data, please re-login', function(){
					Geezeo.viewport.setActiveItem(Geezeo.views.LoginForm, 'slide');
				});
			}
			
			//console.log(data);
		});
	},
	
	csrSaveNew: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token,
			idShip: Ext.getCmp('selShip').getValue(),
			Shipname: Ext.getCmp('txtShipName').getValue(),
			ETAPlace: Ext.getCmp('txtETAPlace').getValue(),
			ETACountry: Ext.getCmp('selEtaCountry').getValue(),
			ETADate: Ext.getCmp('dtETADate').getValue(),
			ETDDate: Ext.getCmp('dtETDDate').getValue(),
			EquipmentManufacturer: Ext.getCmp('selManf').getValue(),
			EquipmentFamily: Ext.getCmp('txtEqFam').getValue(),
			EquipmentType: Ext.getCmp('txtEqType').getValue(),
			EquipmentFault: Ext.getCmp('txtEqFault').getValue(),
			CSRNote: Ext.getCmp('txtFaultDesc').getValue()
		};
		
		if(params.idShip === "" || params.EquipmentManufacturer === "" || params.EquipmentFamily === "" || params.EquipmentFault === ""){
			Ext.Msg.alert('Error', 'Please input all required fields', Ext.emptyFn);
			return;
		}
		
		
		Utils.showLoadMask();

		Ajax.request('saveCSR', params, function(data) {
			Utils.hideLoadMask();
			//console.log(data);
			if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
				Ext.Msg.alert('Success', 'Data is saved', Ext.emptyFn);
			}
			else{
				Ext.Msg.alert('Error', 'Error saving.', Ext.emptyFn);
			}
			
			//console.log(data);
		});
	}
	
});

Ext.regController('CSRController', Geezeo.controllers.CSRController);
