USitISit.controllers.AddFriendsController = new Ext.Controller({
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

Ext.regController('AddFriendsController', USitISit.controllers.AddFriendsController);

