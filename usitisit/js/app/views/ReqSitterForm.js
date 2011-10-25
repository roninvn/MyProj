USitISit.views.ReqSitterForm = Ext.extend(Ext.form.FormPanel, {
	scroll : 'vertical',
	fullscreen : true,
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		ui : 'yellow',
		title : 'USitISit'
	}, {
		xtype : "toolbar",
		dock : "bottom",
		ui : 'yellow',
		title : "Ad"
	}],

	items : [{
		html : 'Request a Sitter',
		cls : 'FormTitle'
	}, {
		xtype : "fieldset",
		title : 'From',
		items : [{
			xtype : "datepickerfield",
			label : "Date"
		}, {
			xtype : "textfield",
			label : "Time"
		}, {
			xtype : "button",
			ui : 'orange-round',
			text : "See Calendar"
		}]
	}, {
		xtype : "fieldset",
		title : 'From',
		items : [{
			xtype : "datepickerfield",
			label : "Date"
		}, {
			xtype : "textfield",
			label : "Time"
		}, {
			xtype : "button",
			ui : 'orange-round',
			text : "See Calendar"
		}]
	}, {
		xtype : "selectfield",
		label : "Repeat:",
		options : [{
			text : 'Daily',
			value : '1'
		}, {
			text : 'Weekly',
			value : '2'
		}, {
			text : 'Monthly',
			value : '3'
		}]
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox'
		},
		style : {
			'margin-left' : '-50px'
		},
		items : [{
			html : '<b>Place:</b><br /> My home'
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			text : 'Change Location',
			ui : 'orange-round',
			cls:'regSitterButton'
		}]
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox'
		},
		style : {
			'margin-left' : '-50px'
		},
		items : [{
			html : '<b>Sitting:</b><br /> 2 Children, 1 pet'
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			text : 'Change',
			ui : 'orange-round',
			cls:'regSitterButton'
		}]
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox'
		},
		style : {
			'margin-left' : '-50px'
		},
		items : [{
			html : '<b>Point Value: 00</b><br />(You have 8 points)'
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			text : 'Done',
			ui : 'orange-round',
			cls:'regSitterButton',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
			}
		}]
	}]
});

Ext.reg('ReqSitterForm', USitISit.views.ReqSitterForm);
