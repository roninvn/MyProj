USitISit.views.MyCircleForm = Ext.extend(Ext.Panel, {
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
		html : "My Circle",
		style : {
			'text-align' : 'center'
		}
	}, {
		xtype : "panel",
		layout : {
			type : 'hbox'
		},
		items : [{
			xtype : 'button',
			ui : 'orange-round',
			html : '<div style="position: absolute; top: 0;font-weight:bold;text-align:center;width:100%;">Invite</div><div style="position: absolute; bottom: 0;">Add friends to my circle</div>',
			style : {
				'margin-right' : '1%',
				height : '70px',
				width : '150px'
			}
		}, {
			xtype : 'button',
			ui : 'orange-round',
			html : '<div style="position: absolute; top: 0;font-weight:bold;text-align:center;width:100%;">Invitation received</div><div style="position: absolute; bottom: 0;">Join a Friend\'s circle</div>',
			style : {
				height : '70px',
				width : '150px'
			}
		}]
	}, {
		xtype : 'button',
		ui : 'orange-round',
		text : 'Go to Friends\' request',
		style : {
			height : '70px',
			width : '250px',
			'margin-left' : '10%',
			'margin-top' : '10px'
		}
	}, {
		xtype : 'list',
		itemTpl : '<div style="font-weight:bold;">{firstName} {lastName}</div><div>{desc}</div><div style="">{point} point(s)</div>',
		store : USitISit.stores.FriendInfoStore,
		style : {
			'margin-top' : '10px'
		},
		listeners : {
			itemtap : function() {
				USitISit.viewport.setActiveItem(USitISit.views.FriendInfoForm);
			}
		}
	}]
});

Ext.reg('MyCircleForm', USitISit.views.MyCircleForm);
