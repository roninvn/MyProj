Geezeo.views.SearchForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		title : 'TWS',
		items : [ {
			text : 'Back',
			ui : 'back',
			handler : function() {
				Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm, 'slide');
			}
		} ]
	} ],
	
	
	items: [
			{
				xtype: 'fieldset',
				title: 'Search',
				instructions: 'Please enter the information above.',
				defaults: {
					required: true,
					labelAlign: 'left',
					labelWidth: '40%'
				},
				items: [{
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Name',
                    useClearIcon: true,
                    autoCapitalize : false
				}]
			}
		]
	
	
});

Ext.reg('SearchForm', Geezeo.views.SearchForm);
