/**
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.AutoForm', {
	extend : 'Ext.form.Panel',
	alias : 'widget.AutoForm',

	requires : [ 'FB.view.DesignControl' ],

	initComponent : function() {
		this.callParent(arguments);
	},
	/*
	 * Load items into form from an array
	 */
	loadForm : function(arrItems) {

		this.removeAll(true);

		for ( var i = 0; i < arrItems.length; i++) {
			var c = Ext.create('FB.view.DesignControl', {
				cdt : arrItems[i],
				normalMode : true
			});
			this.add(c.ctr);
		}

	}
});