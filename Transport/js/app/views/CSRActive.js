Geezeo.views.CSRActive = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(list){
			
			Geezeo.views.CSRForm.detailForm = this;
			
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
