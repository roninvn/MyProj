Ext.define('Flower.view.PreviewPanel', {
	extend : 'Ext.panel.Panel',
	activeItem : 0,
	margins : '5 5 5 5',
	region : 'center', // a center region is ALWAYS required for border layout
	deferredRender : false,
	alias : 'widget.PreviewPanel',
	
	initComponent : function() {
		this.callParent(arguments);
	}

});