/*
 * @author Nam Hoang
 */
Ext.define('Flower.view.Viewport', {
	extend : 'Ext.container.Viewport',

	requires : ['Flower.view.CenterPanel', 'Flower.view.RightPanel','Flower.view.CategoryPanel','Flower.view.PreviewPanel','Flower.view.BasketPanel','Flower.view.CatFlowersPanel', 'Flower.view.ArrangerToolbar' ],

	layout : 'fit',

	items : [ {
		xtype : 'tabpanel',
		items : [ {
			title : 'Selector',
			layout : 'border',
			items : [ {
				region : 'center',
				xtype : 'PreviewPanel'
			}, {
				region : 'west',
				xtype : 'CategoryPanel'
			}, {
				region : 'east',
				xtype : 'BasketPanel'
			}, {
				region : 'south',
				xtype : 'CatFlowersPanel'
			} ]//end Selector items
		}, {
			title : 'Arranger',
			layout : 'border',
			items : [ {
				region : 'center',				
				xtype : 'CenterPanel'
			}, {
				region : 'east',
				xtype : 'RightPanel'
			},{
				region:'south',
				xtype:'ArrangerToolbar'
				
			} ]// items of Arranger
		
		} ]// items of tab panel
	
	} ]// items of Viewport

});
