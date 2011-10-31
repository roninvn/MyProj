USitISit.views.ReqSitterForm = Ext.extend(Ext.form.FormPanel, {
	scroll : 'vertical',
	fullscreen : true,
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		ui : 'yellow',
		title : 'USitISit',
		items:[{
			text : 'Back to Dashboard',
			cls : 'smallbutton',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
			}
		}]
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
			label : "Date",
			picker:{yearFrom: Utils.yearFrom, yearTo : Utils.yearTo},
			
			name:'fromDate'
		}, {
			xtype : "textfield",
			label : "Time",
			name:'from_time'
		}]
	}, {
		xtype : "fieldset",
		title : 'To',
		items : [{
			xtype : "datepickerfield",
			label : "Date",
			picker:{yearFrom: Utils.yearFrom, yearTo : Utils.yearTo},
			name:'toDate'
		}, {
			xtype : "textfield",
			label : "Time",
			name:'to_time'
		}]
	}, {
		xtype : "selectfield",
		label : "Repeat:",
		name: 'request_repeat',
		options : [{
			text : 'None',
			value : 'None'
		},{
			text : 'Daily',
			value : 'Daily'
		}, {
			text : 'Weekly',
			value : 'Weekly'
		}, {
			text : 'Monthly',
			value : 'Monthly'
		}]
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox'
		},
		style : {
			'margin-left' : '-30px'
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
			'margin-left' : '-30px'
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
			'margin-left' : '-30px'
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
				Ext.dispatch({
					controller : USitISit.controllers.MainController,
					action : 'reqSitter'
				});
			}
		}]
	}]
});

Ext.reg('ReqSitterForm', USitISit.views.ReqSitterForm);
