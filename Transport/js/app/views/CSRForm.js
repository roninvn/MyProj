Geezeo.views.CSRForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen: true,
	bodyPadding: 0,
	items : [{
		xtype: 'list',
		itemTpl : '<img src ="img/icon.png" class="icon" />{con}  - {shipname} - {family} - {etaplace}',
		itemCls : 'dashboardListItem',
		//margin: '-25 0 0 -20',
		store: CSRStore,		
		listeners:{
			itemtap: function(v,i,it,e){
				detailWin.update(v.getRecord(it).data);
				detailWin.show();
			}
		}	
	}]
});


Ext.reg('CSRForm', Geezeo.views.CSRForm);
