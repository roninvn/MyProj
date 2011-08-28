/**
 * This file will define a right panel and dock it to the viewport 
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.RightPanel', {
	extend: 'Ext.panel.Panel',
    region: 'east',
	id: 'right-panel',
	title: '',
	split: true,
	width: 300,
	minWidth: 175,
	maxWidth: 400,
	autoHeight: true,
	collapsible: true,
	animCollapse: true,
	margins: '0 0 0 5',
	layout: 'fit',
    alias: 'widget.RightPanel',
    
    initComponent: function() {
    	
    	var pGrid = Ext.create('Ext.grid.property.Grid', {
												    	    title: 'Properties',
												    	    id: "propGrid",
												    	    source: {
												    	    }
												    	});
    	
        this.items = [pGrid];
        this.callParent(arguments);
    }
});