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
    name: 'Flower',	//name of the application
    controllers: [],	//define controller here
    appFolder:'js/app',	//define app folder
    requires:['Flower.view.Viewport'],	


    launch: function() {
    	Ext.create('Flower.view.Viewport').show();
    	
    }
});
