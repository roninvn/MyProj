Geezeo.views.CSRForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen: true,
	style: {
		'margin-left' : '-14px',
		width : '100%'
	},
	items : [{
		xtype: 'list',
		itemTpl : '{reqfrom}  - {shipname}',
		itemCls : 'dashboardListItem',
		store: CSRStore,
		style: {
			width : '100%'
		},
		listeners:{
			itemtap: function(v,i,it,e){
				detailWin.update(v.getRecord(it).data);
				detailWin.show();
			}
		}	
	}]
});


Ext.reg('CSRForm', Geezeo.views.CSRForm);
