USitISit.views.SitScheduleForm = Ext.extend(Ext.Panel, {
	scroll : 'vertical',
	fullscreen : true,
	styleHtmlContent : true,
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		ui : 'yellow',
		title : 'USitISit',
		items : [{
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
		html : "Sit Schedule",
		cls : 'FormTitle'
	}, {

		xtype : "button",
		ui : 'orange-round',
		text : "Check Calendar",
		style : {
			'margin-top' : '15px',
			'margin-bottom' : '15px',
			'margin-left' : '25%',
			width : '50%'
		},

	}, {
		xtype : "panel",
		items : [{
			html : "<hr /><b>Friend's Name</b><br />Saturday, 10/29; 6:30pm - 11:00pm <br />123 Street Name, Anytown<br /><b>Point Value:</b> 4.5"
		}, {
			xtype : "panel",
			border : "1",
			layout : {
				type : 'hbox',
				align : 'left'
			},
			items : [{
				html : '<b>You are sitting.</b>',
				style : {
					'font-size' : '140%'
				}
			}, {
				xtype : 'spacer'
			}, {
				xtype : "button",
				ui : 'orange-round',
				text : "Change"
			}]
		}]
	}, {
		xtype : "panel",
		items : [{
			html : "<hr /><b>Friend's Name</b><br />Saturday, 10/29; 6:30pm - 11:00pm <br />123 Street Name, Anytown<br /><b>Point Value:</b> 4.5"
		}, {
			xtype : "panel",
			border : "1",
			layout : {
				type : 'hbox',
				align : 'left'
			},
			items : [{
				html : '<b>Sitting for you.</b>',
				style : {
					'font-size' : '140%'
				}
			}, {
				xtype : 'spacer'
			}, {
				xtype : "button",
				ui : 'orange-round',
				text : "Change"
			}]
		}]
	}]
});

Ext.reg('SitScheduleForm', USitISit.views.SitScheduleForm);
