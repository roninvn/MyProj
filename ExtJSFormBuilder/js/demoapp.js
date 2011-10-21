/*
 * @author Nam Hoang
 */
Ext.require([
   'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*'
]);

Ext.application({
    name: 'FB',
    appFolder:'js/app',	//define app folder
    requires:['FB.view.DemoViewport'],	


    launch: function() {
    	Ext.create('FB.view.DemoViewport').show();
    	
    }
});
