Geezeo.views.CSRAll = Ext.extend(Ext.Panel, {
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
		           '<tpl if="CodeStatus == \'1\'">icon_blue.png</tpl>',
		           '<tpl if="CodeStatus == \'2\'">icon_gray.png</tpl>',
		           '<tpl if="CodeStatus == \'3\'">icon_green.png</tpl>',
		           '<tpl if="CodeStatus == \'4\'">icon_orange.png</tpl>',
		           '<tpl if="CodeStatus == \'5\'">icon_pink.png</tpl>',
		           '<tpl if="CodeStatus == \'6\'">icon_white.png</tpl>',
		           '" class="icon" />{CON}  - {ShipName} - {EquipmentFamily} - {ETAPlace}'],
		itemCls : 'dashboardListItem',
		// margin: '-25 0 0 -20',
		store : CSRAllStore,
		listeners : {
			itemtap : function(v, i, it, e) {
				var d = v.getRecord(it).data;
				detailWin.update(d);
				detailWin.idCSR = d.idCSR;
				detailWin.show();
			}
		}
	}],
	
	listeners:{
		activate: function(list){			
			Geezeo.views.CSRForm.detailForm = this;
			Ext.dispatch({
				controller : Geezeo.controllers.CSRController,
				action : 'csrAllLoad'
			});
		}
	}

});

Ext.reg('CSRAll', Geezeo.views.CSRAll);

