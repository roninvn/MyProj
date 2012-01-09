Geezeo.controllers.CSRController = new Ext.Controller({

	csrFormRender : function() {

	},
	
	csrActiveLoad: function(){
		var me = this;
		
		var params = {
			Token: Geezeo.controllers.LoginController.token, RowPerPage:40
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
			Token: Geezeo.controllers.LoginController.token, RowPerPage:40
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
			Token: Geezeo.controllers.LoginController.token, RowPerPage:40
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
					console.log(itm.getXTypes());
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
			Token: Geezeo.controllers.LoginController.token, RowPerPage:2000		
		};
		
		//load country
		Utils.showLoadMask();
					
			//console.log(data);
			var stubresponsecountry={"ListCountries":[{"idCountries":"1","Country":"Afghanistan","active":"True"},{"idCountries":"2","Country":"Albania","active":"True"},{"idCountries":"3","Country":"Algeria","active":"True"},{"idCountries":"4","Country":"American Samoa","active":"True"},{"idCountries":"5","Country":"Andorra","active":"True"},{"idCountries":"6","Country":"Angola","active":"True"},{"idCountries":"7","Country":"Anguilla","active":"True"},{"idCountries":"8","Country":"Antarctica","active":"True"},{"idCountries":"9","Country":"Antigua","active":"True"},{"idCountries":"10","Country":"Argentina","active":"True"},{"idCountries":"11","Country":"Armenia","active":"True"},{"idCountries":"12","Country":"Aruba","active":"True"},{"idCountries":"13","Country":"Australia","active":"True"},{"idCountries":"14","Country":"Austria","active":"True"},{"idCountries":"15","Country":"Azerbaijan","active":"True"},{"idCountries":"16","Country":"Bahamas","active":"True"},{"idCountries":"17","Country":"Bahrain","active":"True"},{"idCountries":"18","Country":"Bangladesh","active":"True"},{"idCountries":"19","Country":"Barbados","active":"True"},{"idCountries":"20","Country":"Belarus","active":"True"},{"idCountries":"21","Country":"Belgium","active":"True"},{"idCountries":"22","Country":"Belize","active":"True"},{"idCountries":"23","Country":"Benin","active":"True"},{"idCountries":"24","Country":"Bermuda","active":"True"},{"idCountries":"25","Country":"Bhutan","active":"True"},{"idCountries":"26","Country":"Bolivia","active":"True"},{"idCountries":"27","Country":"Bosnia Herzegovina","active":"True"},{"idCountries":"28","Country":"Botswana","active":"True"},{"idCountries":"29","Country":"Brazil","active":"True"},{"idCountries":"30","Country":"British Virgin Islands","active":"True"},{"idCountries":"31","Country":"Brunei","active":"True"},{"idCountries":"32","Country":"Bulgaria","active":"True"},{"idCountries":"33","Country":"Burkina Faso","active":"True"},{"idCountries":"34","Country":"Burma","active":"True"},{"idCountries":"35","Country":"Burundi","active":"True"},{"idCountries":"36","Country":"Cambodia","active":"True"},{"idCountries":"37","Country":"Cameroon","active":"True"},{"idCountries":"38","Country":"Canada","active":"True"},{"idCountries":"39","Country":"Cape Verde","active":"True"},{"idCountries":"227","Country":"Cayman Island","active":"True"},{"idCountries":"40","Country":"Central African Republic","active":"True"},{"idCountries":"41","Country":"Chad","active":"True"},{"idCountries":"42","Country":"Chile","active":"True"},{"idCountries":"43","Country":"China","active":"True"},{"idCountries":"44","Country":"Colombia","active":"True"},{"idCountries":"45","Country":"Comoros","active":"True"},{"idCountries":"46","Country":"Congo","active":"True"},{"idCountries":"47","Country":"Cook Islands","active":"True"},{"idCountries":"48","Country":"Costa Rica","active":"True"},{"idCountries":"49","Country":"Croatia","active":"True"},{"idCountries":"50","Country":"Cuba","active":"True"},{"idCountries":"51","Country":"Cyprus","active":"True"},{"idCountries":"52","Country":"Czech Republic","active":"True"},{"idCountries":"53","Country":"Denmark","active":"True"},{"idCountries":"54","Country":"Djibouti","active":"True"},{"idCountries":"55","Country":"Dominica","active":"True"},{"idCountries":"56","Country":"Dominican Republic","active":"True"},{"idCountries":"57","Country":"Ecuador","active":"True"},{"idCountries":"58","Country":"Egypt","active":"True"},{"idCountries":"59","Country":"El Salvador","active":"True"},{"idCountries":"60","Country":"Equatorial Guinea","active":"True"},{"idCountries":"61","Country":"Eritrea","active":"True"},{"idCountries":"62","Country":"Estonia","active":"True"},{"idCountries":"63","Country":"Ethiopia","active":"True"},{"idCountries":"64","Country":"Falkland Islands","active":"True"},{"idCountries":"225","Country":"Faroe Islands","active":"True"},{"idCountries":"130","Country":"Federated States of Micronesia","active":"True"},{"idCountries":"65","Country":"Fiji","active":"True"},{"idCountries":"66","Country":"Finland","active":"True"},{"idCountries":"67","Country":"France","active":"True"},{"idCountries":"68","Country":"French Guiana","active":"True"},{"idCountries":"69","Country":"French Polynesia","active":"True"},{"idCountries":"70","Country":"Gabon","active":"True"},{"idCountries":"71","Country":"Gambia","active":"True"},{"idCountries":"72","Country":"Gaza Strip and West Bank","active":"True"},{"idCountries":"73","Country":"Georgia","active":"True"},{"idCountries":"74","Country":"Germany","active":"True"},{"idCountries":"75","Country":"Ghana","active":"True"},{"idCountries":"76","Country":"Gibraltar","active":"True"},{"idCountries":"77","Country":"Greece","active":"True"},{"idCountries":"78","Country":"Greenland","active":"True"},{"idCountries":"79","Country":"Grenada","active":"True"},{"idCountries":"80","Country":"Guadeloupe","active":"True"},{"idCountries":"81","Country":"Guam","active":"True"},{"idCountries":"82","Country":"Guatemala","active":"True"},{"idCountries":"83","Country":"Guinea","active":"True"},{"idCountries":"84","Country":"Guinea-Bissau","active":"True"},{"idCountries":"85","Country":"Guyana","active":"True"},{"idCountries":"86","Country":"Haiti","active":"True"},{"idCountries":"87","Country":"Honduras","active":"True"},{"idCountries":"88","Country":"Hong Kong","active":"True"},{"idCountries":"89","Country":"Hungary","active":"True"},{"idCountries":"90","Country":"Iceland","active":"True"},{"idCountries":"91","Country":"India","active":"True"},{"idCountries":"92","Country":"Indonesia","active":"True"},{"idCountries":"93","Country":"Iran","active":"True"},{"idCountries":"94","Country":"Iraq","active":"True"},{"idCountries":"95","Country":"Ireland","active":"True"},{"idCountries":"224","Country":"Ireland (E.I.R.E.)","active":"True"},{"idCountries":"96","Country":"Israel","active":"True"},{"idCountries":"97","Country":"Italy","active":"True"},{"idCountries":"98","Country":"Ivory Coast","active":"True"},{"idCountries":"99","Country":"Jamaica","active":"True"},{"idCountries":"100","Country":"Japan","active":"True"},{"idCountries":"101","Country":"Jordan","active":"True"},{"idCountries":"102","Country":"Kazakhstan","active":"True"},{"idCountries":"103","Country":"Kenya","active":"True"},{"idCountries":"104","Country":"Kiribati","active":"True"},{"idCountries":"105","Country":"Kuwait","active":"True"},{"idCountries":"106","Country":"Kyrgyzstan","active":"True"},{"idCountries":"107","Country":"Laos","active":"True"},{"idCountries":"108","Country":"Latvia","active":"True"},{"idCountries":"109","Country":"Lebanon","active":"True"},{"idCountries":"110","Country":"Lesotho","active":"True"},{"idCountries":"111","Country":"Liberia","active":"True"},{"idCountries":"112","Country":"Libya","active":"True"},{"idCountries":"113","Country":"Liechtenstein","active":"True"},{"idCountries":"114","Country":"Lithuania","active":"True"},{"idCountries":"115","Country":"Luxembourg","active":"True"},{"idCountries":"116","Country":"Macau","active":"True"},{"idCountries":"117","Country":"Macedonia","active":"True"},{"idCountries":"118","Country":"Madagascar","active":"True"},{"idCountries":"119","Country":"Malawi","active":"True"},{"idCountries":"120","Country":"Malaysia","active":"True"},{"idCountries":"121","Country":"Maldives","active":"True"},{"idCountries":"122","Country":"Mali","active":"True"},{"idCountries":"123","Country":"Malta","active":"True"},{"idCountries":"124","Country":"Marshall Islands","active":"True"},{"idCountries":"125","Country":"Martinique","active":"True"},{"idCountries":"126","Country":"Mauritania","active":"True"},{"idCountries":"127","Country":"Mauritius","active":"True"},{"idCountries":"128","Country":"Mayotte","active":"True"},{"idCountries":"129","Country":"Mexico","active":"True"},{"idCountries":"131","Country":"Moldova","active":"True"},{"idCountries":"132","Country":"Monaco","active":"True"},{"idCountries":"133","Country":"Mongolia","active":"True"},{"idCountries":"134","Country":"Montserrat","active":"True"},{"idCountries":"135","Country":"Morocco","active":"True"},{"idCountries":"136","Country":"Mozambique","active":"True"},{"idCountries":"137","Country":"Namibia","active":"True"},{"idCountries":"138","Country":"Nauru","active":"True"},{"idCountries":"139","Country":"Nepal","active":"True"},{"idCountries":"140","Country":"Netherlands","active":"True"},{"idCountries":"141","Country":"Netherlands Antilles","active":"True"},{"idCountries":"142","Country":"New Caledonia","active":"True"},{"idCountries":"143","Country":"New Zealand","active":"True"},{"idCountries":"144","Country":"Nicaragua","active":"True"},{"idCountries":"145","Country":"Niger","active":"True"},{"idCountries":"146","Country":"Nigeria","active":"True"},{"idCountries":"147","Country":"North Korea","active":"True"},{"idCountries":"148","Country":"Northern Mariana Islands","active":"True"},{"idCountries":"149","Country":"Norway","active":"True"},{"idCountries":"150","Country":"Oman","active":"True"},{"idCountries":"151","Country":"Pakistan","active":"True"},{"idCountries":"152","Country":"Palau","active":"True"},{"idCountries":"153","Country":"Panama","active":"True"},{"idCountries":"154","Country":"Papua New Guinea","active":"True"},{"idCountries":"155","Country":"Paraguay","active":"True"},{"idCountries":"156","Country":"Peru","active":"True"},{"idCountries":"157","Country":"Philippines","active":"True"},{"idCountries":"158","Country":"Pitcairn Islands","active":"True"},{"idCountries":"159","Country":"Poland","active":"True"},{"idCountries":"160","Country":"Portugal","active":"True"},{"idCountries":"161","Country":"Puerto Rico","active":"True"},{"idCountries":"162","Country":"Qatar","active":"True"},{"idCountries":"228","Country":"Republic of Panama","active":"True"},{"idCountries":"163","Country":"Reunion","active":"True"},{"idCountries":"164","Country":"Romania","active":"True"},{"idCountries":"165","Country":"Russia","active":"True"},{"idCountries":"166","Country":"Rwanda","active":"True"},{"idCountries":"167","Country":"Saint Kitts and Nevis","active":"True"},{"idCountries":"168","Country":"Saint Lucia","active":"True"},{"idCountries":"169","Country":"Saint Pierre and Miquelon","active":"True"},{"idCountries":"170","Country":"Saint Vincent and the Grenadines","active":"True"},{"idCountries":"171","Country":"Samoa","active":"True"},{"idCountries":"172","Country":"San Marino","active":"True"},{"idCountries":"173","Country":"Sao Tome and Principe","active":"True"},{"idCountries":"174","Country":"Saudi Arabia","active":"True"},{"idCountries":"175","Country":"Senegal","active":"True"},{"idCountries":"176","Country":"Seychelles","active":"True"},{"idCountries":"177","Country":"Sierra Leone","active":"True"},{"idCountries":"178","Country":"Singapore","active":"True"},{"idCountries":"179","Country":"Slovakia","active":"True"},{"idCountries":"180","Country":"Slovenia","active":"True"},{"idCountries":"181","Country":"Solomon Islands","active":"True"},{"idCountries":"182","Country":"Somalia","active":"True"},{"idCountries":"183","Country":"South Africa","active":"True"},{"idCountries":"184","Country":"South Korea","active":"True"},{"idCountries":"185","Country":"Spain","active":"True"},{"idCountries":"186","Country":"Sri Lanka","active":"True"},{"idCountries":"187","Country":"Sudan","active":"True"},{"idCountries":"188","Country":"Suriname","active":"True"},{"idCountries":"189","Country":"Swaziland","active":"True"},{"idCountries":"190","Country":"Sweden","active":"True"},{"idCountries":"191","Country":"Switzerland","active":"True"},{"idCountries":"192","Country":"Syria","active":"True"},{"idCountries":"226","Country":"Tahiti","active":"True"},{"idCountries":"193","Country":"Taiwan","active":"True"},{"idCountries":"194","Country":"Tajikistan","active":"True"},{"idCountries":"195","Country":"Tanzania","active":"True"},{"idCountries":"196","Country":"Thailand","active":"True"},{"idCountries":"197","Country":"Togo","active":"True"},{"idCountries":"198","Country":"Tonga","active":"True"},{"idCountries":"199","Country":"Trinidad and Tobago","active":"True"},{"idCountries":"200","Country":"Tunisia","active":"True"},{"idCountries":"201","Country":"Turkey","active":"True"},{"idCountries":"202","Country":"Turkmenistan","active":"True"},{"idCountries":"203","Country":"Turks and Caicos Islands","active":"True"},{"idCountries":"204","Country":"Tuvalu","active":"True"},{"idCountries":"205","Country":"Uganda","active":"True"},{"idCountries":"206","Country":"Ukraine","active":"True"},{"idCountries":"207","Country":"United Arab Emirates","active":"True"},{"idCountries":"208","Country":"United Kingdom","active":"True"},{"idCountries":"209","Country":"United States of America","active":"True"},{"idCountries":"210","Country":"United States Virgin Islands","active":"True"},{"idCountries":"223","Country":"Unknown","active":"True"},{"idCountries":"211","Country":"Uruguay","active":"True"},{"idCountries":"212","Country":"Uzbekistan","active":"True"},{"idCountries":"213","Country":"Vanuatu","active":"True"},{"idCountries":"214","Country":"Venezuela","active":"True"},{"idCountries":"215","Country":"Vietnam","active":"True"},{"idCountries":"216","Country":"West Bank and Gaza Strip","active":"True"},{"idCountries":"217","Country":"Western Sahara","active":"True"},{"idCountries":"218","Country":"Yemen","active":"True"},{"idCountries":"219","Country":"Yugoslavia","active":"True"},{"idCountries":"220","Country":"Zaire","active":"True"},{"idCountries":"221","Country":"Zambia","active":"True"},{"idCountries":"222","Country":"Zimbabwe","active":"True"}],"PageInfo":{"CurrentPage":"1","TotalRecords":"228","TotalPages":"1"},"RequestResult":{"Code":"0","Description":"Success"}}
			//if(data && data.RequestResult && data.RequestResult.Code && data.RequestResult.Code === "0"){//success
			if(true){	
			var ops = [];
				for(var i=0; i<stubresponsecountry.ListCountries.length;i++)
					ops.push({
						text: stubresponsecountry.ListCountries[i].Country,
						value: stubresponsecountry.ListCountries[i].idCountries
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
				//me.loadShipList();
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
