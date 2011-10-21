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
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
			}
		}]
	}, {
		xtype : "toolbar",
		dock : "bottom",
		title : "Ad"
	}],

	items : [{
		html : "Friends' Sitter Requests",
		style : {
			'text-align' : 'center'
		}
	}, {

		xtype : "button",
		ui : 'orange-round',
		text : "Check Calendar"

	}, {
		xtype : "fieldset",
		title : "Friend's Name",
		items : [{
			html : "Saturday, 10/29; 6:30pm - 11:00pm <br />123 Street Name, Anytown<br />Point Value: 4.5"
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
				xtype : "button",
				ui : 'orange-round',
				text : "I'll Sit",
				style : {
					'margin-left' : '20px'
				}
			}]
		}]
	}, {
		xtype : "fieldset",
		title : "Friend's Name",
		items : [{
			html : "Saturday, 10/29; 6:30pm - 11:00pm <br />123 Street Name, Anytown<br />Point Value: 3"
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
				xtype : "button",
				ui : 'orange-round',
				text : "I'll Sit",
				style : {
					'margin-left' : '20px'
				}
			}]
		}]
	}],

	initComponent : function() {
		USitISit.views.FriendReqForm.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('FriendReqForm', USitISit.views.FriendReqForm);
