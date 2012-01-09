Geezeo.views.NewCSR = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,
	scroll: 'vertical',
	layout: {
		type: 'vbox',
		align:'stretch'
	},
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',		
		cls:'logo',
		items : [{
			text : 'Back',
			ui : 'back',
			handler : function() {
				Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm, 'slide');
			}
		}]
	}],
	items : [{
		xtype: 'panel',
		items:[{
			xtype: 'textfield',
			label: 'ETA Place',
			name: 'etaplace',
			id:'txtETAPlace'
		},{
			xtype: 'selectfield',
			name: 'etacountry',
			id:'selEtaCountry',
			label: 'ETA Country'
		},{
			xtype: 'datepickerfield',
			name: 'etadate',
			label: 'ETA Date',
			id:'dtETADate'
		},{
			xtype: 'datepickerfield',
			label: 'ETD Date',
			id:'dtETDDate'
		},{
			xtype: 'selectfield',
			name: 'eqman',
			id:'selManf',
			label: 'Equipment Manufacturer',
			required: true
		},{
			xtype: 'textfield',
			id:'txtEqFam',
			label: 'Equipment Family',
			required: true
		},{
			xtype: 'selectfield',
			name: 'eqfam',
			id:'selShip',
			label: 'Ship',
			required: true
		},{
			xtype: 'textfield',
			name: 'eqtype',
			id:'txtShipName',
			label: 'Ship name'
		},{
			xtype: 'textfield',
			name: 'eqtype',
			label: 'Equipement Type',
			id:'txtEqType'
		},{
			xtype: 'textfield',
			label: 'Equipement Fault',
			id:'txtEqFault',
			required: true
		},{
			xtype: 'textfield',
			name: 'eqfaultdesc',
			label: 'Fault Description',
			id:'txtFaultDesc'
		}]
	},{
		xtype:'button',
		text: 'Save',
		handler: function(){
			Ext.dispatch({
				controller : Geezeo.controllers.CSRController,
				action : 'csrSaveNew'
			});
		}
	}],
	
	listeners:{
		activate: function(){			
			Ext.dispatch({
				controller : Geezeo.controllers.CSRController,
				action : 'csrNewLoad'
			});
		}
	}

});

Ext.reg('NewCSR', Geezeo.views.NewCSR);

