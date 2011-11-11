Geezeo.views.CSRActive = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(){
			CSRStore.clearFilter(true);
			CSRStore.filter({
				property: 'isactive',
				value: true
			});
		}
	}
});

Ext.reg('CSRActive', Geezeo.views.CSRActive);
