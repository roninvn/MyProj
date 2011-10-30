/*
 * @author Nam Hoang
 */
Ext.define('FB.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
		'FB.view.CenterPanel',
		'FB.view.LeftPanel'
    ],

	layout: 'border',
	items: [{
				region: 'center',
				id:'centerpanel',
				xtype: 'CenterPanel'
			},{
				region: 'west',
				xtype: 'LeftPanel'
			}]
});
