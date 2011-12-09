Geezeo.views.CSRForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',		
		cls:'logo',
		items : [{
			text : 'Back',
			ui : 'back',
			handler : function() {
				Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm, 'slide');
			}
		}]
	}],
	items : [{
		xtype : 'list',
		itemTpl : ['<img src ="img/',
		           '<tpl if="Status == \'1\'">icon_blue.png</tpl>',
		           '<tpl if="Status == \'2\'">icon_gray.png</tpl>',
		           '<tpl if="Status == \'3\'">icon_green.png</tpl>',
		           '<tpl if="Status == \'4\'">icon_orange.png</tpl>',
		           '<tpl if="Status == \'5\'">icon_pink.png</tpl>',
		           '<tpl if="Status == \'6\'">icon_white.png</tpl>',
		           '" class="icon" />{CON}  - {ShipName} - {EquipmentFamily} - {ETAPlace}'],
		itemCls : 'dashboardListItem',
		//margin: '-25 0 0 -20',
		store : CSRStore,
		listeners : {
			itemtap : function(v, i, it, e) {
				detailWin.update(v.getRecord(it).data);
				detailWin.show();
			},
			afterrender: function(){
				Ext.dispatch({
					controller: Geezeo.controllers.CSRController,
					action: 'csrFormRender'
				});
			}
		}
	}]
});

Ext.reg('CSRForm', Geezeo.views.CSRForm);
