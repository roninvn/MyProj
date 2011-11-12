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
				//Geezeo.views.CSRDetail.update(v.getRecord(it).data);
				//Geezeo.viewport.setActiveItem(Geezeo.views.CSRDetail,'slide');
				//Geezeo.views.CSRDetail.showBy(Ext.getBody(),true, true);
				var s =  new Geezeo.views.CSRDetail();
				s.update(v.getRecord(it).data);
				s.show();
			}
		}	
	}]
});

Ext.reg('CSRForm', Geezeo.views.CSRForm);
