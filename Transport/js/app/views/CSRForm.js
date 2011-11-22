Geezeo.views.CSRForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		title : 'TWS',
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
		itemTpl : '<img src ="img/icon.png" class="icon" />{con}  - {shipname} - {family} - {etaplace}',
		itemCls : 'dashboardListItem',
		//margin: '-25 0 0 -20',
		store : CSRStore,
		listeners : {
			itemtap : function(v, i, it, e) {
				detailWin.update(v.getRecord(it).data);
				detailWin.show();
			}
		}
	}]
});

Ext.reg('CSRForm', Geezeo.views.CSRForm);
