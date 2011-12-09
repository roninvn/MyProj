Geezeo.views.MenuForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	bodyPadding : 0,
	dockedItems : [ {
		dock : 'top',
		xtype : 'toolbar',		
		cls:'logo'
	} ],
	items : [ {
		xtype : 'list',
		itemTpl : '<img class="menulisticon" src="img/{img}" />{section}',
		groupTpl : [ '<tpl for=".">',		        
				'<div class="x-list-group x-group-{id}">', ,
				'<h3 class="x-list-header x-settings-header" ></h3>',
				'<div class="x-list-group-items">', '{items}', '</div>',
				'</div>', '</tpl>' ],
		itemCls : 'dashboardListItem',
		grouped : true,
		store : MenuStore,
		listeners : {
			itemtap : function(v, i, it, e) {

				var sec = v.getRecord(it).data.section;

				if (sec === "CSR Active")
					Geezeo.viewport.setActiveItem(Geezeo.views.CSRActive,'slide');
				else if (sec === "CSR Closed")
					Geezeo.viewport.setActiveItem(Geezeo.views.CSRClose,'slide');
				else if (sec === "All CSR")
					Geezeo.viewport.setActiveItem(Geezeo.views.CSRAll,'slide');
				else if (sec === "Go To WebSite")
					window.open('tws.temporary.link','_newtab');
				else if (sec === "Help")
					Geezeo.viewport.setActiveItem(Geezeo.views.HelpForm,'slide');
				else if (sec === "Search")
					Geezeo.viewport.setActiveItem(Geezeo.views.SearchForm,'slide');

				// detailWin.update(v.getRecord(it).data);
				// detailWin.show();
			}
		}
	} ]
});

Ext.reg('MenuForm', Geezeo.views.MenuForm);
