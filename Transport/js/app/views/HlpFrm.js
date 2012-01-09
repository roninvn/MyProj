Geezeo.views.HelpForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen: true,
	html: 'When logged in, you will be presented with a menu and you must select the appropriate button.<br/><br/>The available choices are:<br/><b>New CSR</b> - initiates a new request<br/><b>CSR Active</b> - reviews the list of active requests<br/><b>CSR Closed</b> - reviews the list of closed requests<br/><b>All CSR</b> - reviews the list of all requests<br/><b>Search</b> - Search the presence of your data<br/><b>Go To WebSite</b> - Go to the TWS web application<br/><b>Help</b> - This help',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		cls:'logo',
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
