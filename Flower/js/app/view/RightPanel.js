/**
 * This file will define a left panel and dock it to the viewport
 *
 * @author Nam Hoang
 */
Ext.define('Flower.view.RightPanel', {
	extend : 'Ext.panel.Panel',
	region : 'east',
	id : 'east-panel',
	title : 'Flowers',
	split : true,
	width : 150,
	minWidth : 150,
	maxWidth : 400,
	autoHeight : true,
	collapsible : true,
	animCollapse : true,
	margins : '0 0 0 5',
	layout : 'accordion',
	alias : 'widget.RightPanel',

	requires : ['Flower.model.MenuModel', 'Flower.view.ux.FlowerThumbnails'],

	items : [{
		title : 'Design',
		layout : 'vbox',
		listeners : {
			render : function(c) {
				var controls = [{
					src : "img/Flower10.jpg"
				}];

				var controlsStore = Ext.create('Ext.data.Store', {
					model : 'Flower.model.MenuModel',
					data : controls
				});
				var controlsView = Ext.create('Flower.view.ux.FlowerThumbnails',{store: controlsStore});
				c.add(controlsView);
			}//end render event
		}
	}], //end items

	initComponent : function() {

		this.callParent(arguments);
	}
});
