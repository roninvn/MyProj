USitISit.views.DashboardForm = Ext.extend(Ext.Panel, {
	//scroll: 'vertical',
	fullscreen : true,
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		title : 'USitISit',
		ui : 'yellow',
		items : [{
			text : 'Account',
			cls : 'smallbutton'
		}, {
			xtype : 'spacer'
		}, {
			text : 'My profile',
			align : 'right',
			cls : 'smallbutton'
		}]
	}, {
		xtype : "toolbar",
		dock : "bottom",
		title : "Ad",
		ui : 'yellow',
	}],

	items : [{
		html : "Dashboard",
		cls : 'FormTitle'
	}, {
		xtype : "panel",
		style : {
			width : '100%',
			'margin-top' : '10px'
		},
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		items : [{
			html : '8 points',
			style : {
				height : '100%',
				'padding-top' : '7%',
				'font-weight' : 'bold',
				'padding-right' : '13%',
				'font-size' : '1.5em',
				'padding-left' : '25px'
			}
		}, {
			html : "<ul><li>2 friends' requests</li><li>1 requested sitter</li><li>1 upcoming sit</li><li>1 circle invitation</li></ul>"
		}]
	}, {
		xtype : "panel",
		style : {
			'margin-top' : '10px',
			'margin-left' : '-10px'
		},
		layout : {
			type : 'hbox'
		},
		items : [{
			xtype : "button",
			text : "Request A Sitter",
			ui : 'orange-round',
			style : {
				'margin-right' : '5px',
				'margin-bottom' : '10px',
				width : '150px',
				height : '90px'
			},
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.ReqSitterForm);
			}
		}, {
			xtype : "button",
			ui : 'orange-round',
			style : {
				'margin-bottom' : '10px',
				width : '150px',
				height : '90px'
			},
			text : "Friends' Requests",
			handler : function() {
				Ext.dispatch({
					controller : USitISit.controllers.MainController,
					action : 'openFriendReqForm'
				});
			}
		}]
	}, {
		xtype : "panel",
		layout : {
			type : 'hbox',
			align : 'left'
		},
		style : {
			'margin-top' : '10px',
			'margin-left' : '-10px'
		},
		items : [{
			xtype : "button",
			text : "Sit Schedule",
			ui : 'orange-round',
			style : {
				'margin-right' : '5px',
				'margin-bottom' : '10px',
				width : '150px',
				height : '90px'
			},
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.SitScheduleForm);
			}
		}, {
			xtype : "button",
			ui : 'orange-round',
			style : {
				'margin-right' : '5px',
				'margin-bottom' : '10px',
				width : '150px',
				height : '90px'
			},
			text : "My Circle",
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.MyCircleForm);
			}
		}]
	}]
});

Ext.reg('DashboardForm', USitISit.views.DashboardForm);
