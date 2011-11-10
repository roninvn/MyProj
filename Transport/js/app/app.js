/**
 * This file will define and register the application
 */
Ext.regApplication({
    name: 'Geezeo',
    defaultTarget: "viewport",
    launch: function() {
    	this.viewport = new Geezeo.views.Viewport();
    },
});
