Geezeo.views.CSRActive = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(list){
			CSRStore.clearFilter();
			CSRStore.filter({
				property: 'isactive',
				value: true
			});
			
			//list.refresh();
		}
	}
});

Ext.reg('CSRActive', Geezeo.views.CSRActive);
