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
		html : "My Circle",
		cls : 'FormTitle'
	}, {
		xtype : "panel",
		layout : {
			type : 'hbox'
		},
		style : {
			'margin-top' : '10px',
			'margin-left' : '-10px'
		},
		items : [{
			xtype : 'button',
			ui : 'orange-round',
			html : '<center><b>Invite</b><br />Add friends to My Circle</center>',
			style : {
				'margin-right' : '1%',
				height : '90px',
				width : '150px'
			}
		}, {
			xtype : 'button',
			ui : 'orange-round',
			html : '<center><b>Invitations<br />Received</b><br />Join a Friend\'s Circle</center>',
			style : {
				height : '90px',
				width : '150px'
			}
		}]
	}, {
		xtype : 'button',
		ui : 'orange-round',
		text : 'Go to Friends\' request',
		style : {
			height : '90px',
			width : '250px',
			'margin-left' : '25px',
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
