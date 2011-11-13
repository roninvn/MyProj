Ext.define('Flower.view.ArrangerToolbar', {
	extend : 'Ext.panel.Panel',
	id : 'arrangertoolbar',
	alias : 'widget.ArrangerToolbar',	
	
	items: [{
		xtype: 'slider',
		width: 400,
	    value: 100,
	    increment: 5,
	    minValue: 20,
	    maxValue: 200,
	    fieldLabel: 'Zoom',
	    id: 'zoomslider'
	}]	
});
