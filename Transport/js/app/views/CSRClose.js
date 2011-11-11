Geezeo.views.CSRClose = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(){
			CSRStore.clearFilter();
			CSRStore.filter({
				property: 'isactive',
				value: false
			});
		}
		
	}
});

Ext.reg('CSRClose', Geezeo.views.CSRClose);
