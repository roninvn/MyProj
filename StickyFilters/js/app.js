/*
 * @author Nam Hoang
 */
Ext.require([
   'Ext.grid.*',
    'Ext.data.*'    
]);

Ext.application({
    name: 'Demo',	//name of the application
    controllers: [],	//define controller here
    appFolder:'js/app',	//define app folder
    requires:['Demo.view.Viewport'],	


    launch: function() {
    	Ext.create('Demo.view.Viewport').show();
    	
    }
});
