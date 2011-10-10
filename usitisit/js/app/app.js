/**
 * This file will define and register the application
 */
Ext.regApplication({
    name: 'USitISit',
    defaultTarget: "viewport",
    launch: function() {
    	this.viewport = new USitISit.views.Viewport();
    },
});
