/*
 * @author Nam Hoang
 */
Ext.require([
   'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*'  
]);

Ext.application({
    name: 'FB',	//name of the application    
    appFolder:'js/app',	//define app folder
    requires:['FB.view.ContentPanel'],
    
	controllers: ['DesignController'],

    launch: function() {
    	Ext.tip.QuickTipManager.init();
    	Ext.create('FB.view.ContentPanel').show();
    	
    }
});
