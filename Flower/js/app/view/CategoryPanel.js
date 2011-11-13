Ext.define('Flower.view.CategoryPanel', {
	extend : 'Ext.grid.Panel',
	id : 'catg-panel',
	title : 'Category',
	split : true,
	width : 150,
	minWidth : 150,
	maxWidth : 400,
	autoHeight : true,
	collapsible : true,
	animCollapse : true,
	margins : '0 0 0 5',
	alias : 'widget.CategoryPanel',	
	store: 'CategoryStore',
	
	columns: [
	          { header: 'Category',  dataIndex: 'name' }
	      ]
	
});
