Geezeo.views.NewCSR = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,
	scroll: 'vertical',
	layout: 'fit',
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
		html: "Ship",
		cls:'accountListItem'
	},{
		xtype: 'textfield',
		label: 'ETA Place',
		name: 'etaplace'
	},{
		xtype: 'selectfield',
		name: 'etacountry',
		label: 'ETA Country',
		options: [
		          {text: 'USA',  value: 'USA'},
		          {text: 'Italy', value: 'Italy'},
		          {text: 'France',  value: 'France'}
		      ]
	},{
		xtype: 'datepickerfield',
		name: 'etadate',
		label: 'ETA Date'
	},{
		xtype: 'datepickerfield',
		label: 'ETD Date'
	},{
		xtype: 'selectfield',
		name: 'etaplace',
		label: 'ETA Place',
		options: [
		          {text: 'New York',  value: 'NY'},
		          {text: 'Rome', value: 'RM'},
		          {text: 'London',  value: 'LD'}
		      ]
	},{
		xtype: 'selectfield',
		name: 'eqman',
		label: 'Equipment Manufacturer',
		options: [
		          {text: 'M1',  value: '1'},
		          {text: 'M2', value: '2'},
		          {text: 'M3',  value: '3'}
		      ]
	},{
		xtype: 'selectfield',
		name: 'eqfam',
		label: 'Equipment Family',
		options: [
		          {text: 'F1',  value: '1'},
		          {text: 'F2', value: '2'},
		          {text: 'F3',  value: '3'}
		      ]
	},{
		xtype: 'textfield',
		name: 'eqtype',
		label: 'Equipement Type'
	},{
		xtype: 'textfield',
		name: 'eqfaultdesc',
		label: 'Fault Description'
	}]

});

Ext.reg('NewCSR', Geezeo.views.NewCSR);

