Ext.define('FB.view.PropertyPanel', {
	extend : 'Ext.panel.Panel',	
	region : 'east', 
	deferredRender : false,
	alias : 'widget.PropertyPanel',
	id : 'propertypanel',
	split : true,
	width : 250,
	minWidth : 50,
	maxWidth : 400,
	autoHeight : true,
	collapsible : true,
	animCollapse : true,
	
	layout : 'fit',
	
	initComponent : function() {

		var pGrid = Ext.create('Ext.grid.property.Grid', {
			title : 'Properties',
			id : "propGrid",
			source : {}
		});

		this.items = [ pGrid ];
		
		this.callParent(arguments);
		
	}

});