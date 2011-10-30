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

			var items = Ext.getCmp('centerpanel').items;
			var cfgs = [];
			items.each(function(itm, i, l) {
				itm.designControl.oCfg.size = itm.designControl.ctr.getSize();
				itm.designControl.oCfg.pos = itm.designControl.ctr.getPosition(true);
				cfgs.push(itm.designControl.oCfg);
			});

			Ext.Ajax.request({
				url : 'data/saveform.json',
				method: 'POST',
				params : {
					name: name,
					controls : cfgs
				},
				success : function(response) {
					var text = response.responseText;
					console.log(text);
					// process server response here
				}
			});

		}
	}, {
		text : 'Load'
	}]
});
