Geezeo.views.CSRAll = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(){
			Geezeo.views.CSRForm.detailForm = this;
			CSRStore.clearFilter();
		}
	}
});

Ext.reg('CSRAll', Geezeo.views.CSRAll);
