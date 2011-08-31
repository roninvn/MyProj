/*
 * @author Nam Hoang
 */
Ext.require([
   'Ext.grid.*',
    'Ext.data.*',
    'Ext.util.*',
    'Ext.grid.PagingScroller'
]);

Ext.application({
    name: 'FB',	//name of the application
    controllers: [],	//define controller here
    appFolder:'js/app',	//define app folder
    requires:['FB.view.Viewport', 'FB.view.DragTextbox'],	


    launch: function() {
    	Ext.create('FB.view.Viewport').show();
    	
    }
});
