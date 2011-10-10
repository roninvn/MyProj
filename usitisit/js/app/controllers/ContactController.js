
/*
 * This file will define Contact Controller and its function
 */
USitISit.controllers.ContactController = new Ext.Controller({
	model:'ContactModel',
	index:function() {
	},
   /**
	 * Set done flag in model
	 *
	 * @param {} options
	 */
	setDone: function(options) {
		var store = Ext.getStore('ContactStore'),
			model = store.getAt(options.data);

		model.set('done', model.get('done') ? false : true );
		//store.sync();
	}
});

Ext.regController('ContactController', USitISit.controllers.ContactController);

