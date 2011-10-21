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
		title : "Ad"
	}],

	items : [{
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
		xtype : "textfield",
		value : "My home",
		label : "Place:",
		disabled : true
	}, {
		xtype : "button",
		ui : 'orange-round',
		text : "Change location"
	}, {
		xtype : "textfield",
		value : "2 children, 1 pet",
		label : "Sitting:",
		disabled : true
	}, {
		xtype : "button",
		ui : 'orange-round',
		text : "Change"
	}, {
		html : "Point Value: 00 <br /> You have 8 points"
	}, {
		xtype : "button",
		ui : 'orange-round',
		text : "Done",
		handler : function() {
			USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
		}
	}],

	initComponent : function() {
		USitISit.views.ReqSitterForm.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('ReqSitterForm', USitISit.views.ReqSitterForm);
