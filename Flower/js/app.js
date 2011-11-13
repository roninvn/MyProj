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
    appFolder:'js/app',	//define app folder
    requires:['Flower.view.Viewport'],
    
	controllers: ['SelectorController'],

    launch: function() {
    	Ext.create('Flower.view.Viewport').show();
    	
    }
});
