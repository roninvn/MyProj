/*
 * Toolbar
 */
Ext.define('FB.view.Toolbar', {
	extend : 'Ext.toolbar.Toolbar',
	id : 'toolbar',
	alias : 'widget.fbtoolbar',
	items : [{
		xtype : 'textfield',
		fieldLabel : 'Form Name',
		id : 'txtFormName'
	}, {
		text : 'Save',
		handler : function() {//call AJAX to save form

			var name = Ext.getCmp('txtFormName').getValue();

			if(name == "") {
				Ext.Msg.show({
					title : 'Error',
					msg : 'Please input Form Name',
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.WARNING
				});
				return;
			}

			var ccs = FB.view.DesignControl.getControls();

			Ext.Ajax.request({
				url : 'data/saveform.json',
				method : 'POST',
				params : {
					name : name,
					controls : Ext.JSON.encode(ccs)
				},
				success : function(response) {
					var text = response.responseText;
					var obj = Ext.JSON.decode(text);

					if(obj.success)
						Ext.Msg.show({
							title : 'Success',
							msg : 'Form is saved.',
							buttons : Ext.Msg.OK
						});

				}//end function success
			});//end Ajax request

		}//end functon handler
	}, {
		text : 'Load',
		handler : function() {

			var name = Ext.getCmp('txtFormName').getValue();

			if(name == "") {
				Ext.Msg.show({
					title : 'Error',
					msg : 'Please input Form Name',
					buttons : Ext.Msg.OK,
					icon : Ext.Msg.WARNING
				});
				return;
			}

			Ext.Ajax.request({
				url : 'data/loadform.json',
				method : 'POST',
				params : {
					name : name
				},
				success : function(response) {
					var text = response.responseText;
					console.log(text);

					var obj = Ext.JSON.decode(text);
					var cfgs = Ext.JSON.decode(obj.controls);
					
					FB.view.DesignControl.loadControls(cfgs);

				}//end success
			});

		}
	}, {
		text : 'Clear',
		handler : function() {

			Ext.Msg.show({
				title : 'Clear form?',
				msg : 'Are you sure you want to clear the form?',
				buttons : Ext.Msg.YESNO,
				icon : Ext.Msg.QUESTION,

				fn : function(buttonId) {
					if(buttonId == "yes")
						FB.view.DesignControl.clearControls();
				}
			});
		}
	}]
});
