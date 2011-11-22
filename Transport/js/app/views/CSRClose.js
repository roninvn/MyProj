Geezeo.views.CSRClose = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(){
			Geezeo.views.CSRForm.detailForm = this;
			CSRStore.clearFilter();
			CSRStore.filter({
				property: 'isactive',
				value: false
			});
		}
		
	}
});

Ext.reg('CSRClose', Geezeo.views.CSRClose);
