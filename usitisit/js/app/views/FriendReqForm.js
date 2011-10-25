USitISit.views.FriendReqForm = Ext.extend(Ext.Panel, {
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
		html : "Friends' Sitter Requests",
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
				xtype : "button",
				ui : 'orange-round',
				text : "Sorry, Unavailable"
			}, {
				xtype : 'spacer'
			}, {
				xtype : "button",
				ui : 'orange-round',
				text : "I'll Sit"
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
				xtype : "button",
				ui : 'orange-round',
				text : "Sorry, Unavailable"
			}, {
				xtype : 'spacer'
			}, {
				xtype : "button",
				ui : 'orange-round',
				text : "I'll Sit"
			}]
		}]
	}]
});

Ext.reg('FriendReqForm', USitISit.views.FriendReqForm);
