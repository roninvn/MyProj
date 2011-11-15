Geezeo.views.CSRForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	items : [{
		xtype: 'list',
		itemTpl : '{reqfrom}  - {shipname}',
		itemCls : 'dashboardListItem',
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
