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
				//console.log(v.getRecord(it));
				Geezeo.views.CSRDetail.update(v.getRecord(it).data);
				Geezeo.viewport.setActiveItem(Geezeo.views.CSRDetail,'slide');
			}
		}	
	}]
});

Ext.reg('CSRForm', Geezeo.views.CSRForm);
