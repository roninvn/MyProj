/*
 * @author Nam Hoang
 */
Ext.define('Flower.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
		'Flower.view.CenterPanel',
		'Flower.view.RightPanel'
    ],

	layout: 'border',
	items: [{
				region: 'center',
				id:'centerpanel',
				xtype: 'CenterPanel'
			},{
				region: 'east',
				xtype: 'RightPanel'
			}]
});
