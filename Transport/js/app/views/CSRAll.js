Geezeo.views.CSRAll = Ext.extend(Geezeo.views.CSRForm, {	
	listeners:{
		activate: function(){
			CSRStore.clearFilter();
		}
	}
});

Ext.reg('CSRAll', Geezeo.views.CSRAll);
