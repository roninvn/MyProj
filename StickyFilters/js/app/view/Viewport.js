/*
 * @author Nam Hoang
 */
Ext.define('Demo.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
		'Demo.view.CenterPanel'
    ],

	layout: 'border',
	items: [{
				region: 'center',
				id:'centerpanel',
				xtype: 'CenterPanel'
			}]
});
