Ext.define('Flower.view.BasketPanel', {
	extend : 'Ext.panel.Panel',
	id : 'basket-panel',
	title : 'Basket',
	split : true,
	width : 150,
	minWidth : 150,
	maxWidth : 400,
	autoHeight : true,
	collapsible : true,
	animCollapse : true,
	margins : '0 0 0 5',
	alias : 'widget.BasketPanel',
	
	layout : 'fit',
	
	items: [{
		xtype: 'dataview',
		tpl: '<tpl for=".">' + '<div class="control-source"><img src = "http://www.flowers.clubsareus.org/{img}" /></div>' + '</tpl>',
		itemSelector : 'div.control-source',
		store : 'BasketStore'
	}]
	
});
