USitISit.views.FriendReqForm = Ext.extend(Ext.Panel, {
	scroll : 'vertical',
	fullscreen : true,
	styleHtmlContent : true,
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		ui : 'yellow',
		title : 'USitISit',
		items : [ {
			text : 'Back to Dashboard',
			cls : 'smallbutton',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
			}
		} ]
	}, {
		xtype : "toolbar",
		dock : "bottom",
		ui : 'yellow',
		title : "Ad"
	} ],

	items : [ {
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
		xtype : 'panel',
		id : 'reqList',
		items : []
	} ]
});

Ext.reg('FriendReqForm', USitISit.views.FriendReqForm);
