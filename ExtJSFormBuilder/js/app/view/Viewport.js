/*
 * @author Nam Hoang
 */
Ext.define('FB.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'Ext.layout.container.Border',
		'FB.view.CenterPanel',
		'FB.view.LeftPanel',
		'FB.view.RightPanel',
		'FB.view.BottomPanel'
    ],

	layout: 'border',
	items: [{
				region: 'center',
				id:'centerpanel',
				xtype: 'CenterPanel'
			},{
				region: 'west',
				xtype: 'LeftPanel'
			},{
				region: 'east',
				xtype: 'RightPanel'
			},{
				region: 'south',
				xtype: 'BottomPanel'
			}]
});
