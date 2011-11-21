Geezeo.views.HelpForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen: true,
	html: 'This is Help page',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		title : 'TWS',
		items : [ {
			text : 'Back',
			ui : 'back',
			handler : function() {
				Geezeo.viewport.setActiveItem(
						Geezeo.views.MenuForm, 'slide');
			}
		} ]
	} ]
});


Ext.reg('HelpForm', Geezeo.views.HelpForm);
