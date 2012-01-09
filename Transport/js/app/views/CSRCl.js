Geezeo.views.CSRClose = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,
	scroll: 'vertical',
	layout: 'fit',
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
		itemTpl :  new Ext.XTemplate('<img src ="img/',
		           '{CodeColor:this.formatColor}.png',		          
		           '" class="icon" />{ShipName} - {EquipmentFamily} - {ETAPlace}',
		           {
					formatColor: function(val){
						return val.replace('#', '');
					}
		           }
		),
		itemCls : 'dashboardListItem',
		// margin: '-25 0 0 -20',
		store : CSRCloseStore,
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
				action : 'csrCloseLoad'
			});
		}
	}

});

Ext.reg('CSRClose', Geezeo.views.CSRClose);

