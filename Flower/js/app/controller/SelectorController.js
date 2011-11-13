Ext.define('Flower.controller.SelectorController', {
	extend : 'Ext.app.Controller',
	models : [ 'CategoryModel', 'BasketModel' ],
	stores : [ 'CategoryStore', 'BasketStore' ],
	views : [ 'CategoryPanel', 'Flower.view.BasketPanel' ],

	/**
	 * This private function is initializing of Cities controller
	 */
	init : function() {
		this.control({
			'#catg-panel' : {
				itemclick : this.categoryPanelItemClicked
			},
			'#zoomslider': {
				change : this.zoomSliderDataChanged
			}
		});
	},

	categoryPanelItemClicked : function(grid, rec) {
		Ext.getCmp('catflower-panel').update("Load list of flowers of categoryid " + rec.get("id"));
	},
	
	zoomSliderDataChanged: function(slider, newVal){
		Ext.getCmp("centerpanel").setZoom(newVal);
	}

});
