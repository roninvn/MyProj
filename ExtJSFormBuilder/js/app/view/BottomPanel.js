/**
 * This file will define a bottom panel and dock it to the viewport
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.BottomPanel', {
	extend : 'Ext.panel.Panel',
	region : 'south',
	id : 'bottom-panel',
	title : '',
	split : false,
	height : 80,
	alias : 'widget.BottomPanel',
	align : 'center',
	layout : {
		type : 'hbox',
		align : 'middle'
	},

	initComponent : function() {

		var txtArea = Ext.create('Ext.form.field.TextArea', {
			grow : false,
			name : 'json',
			anchor : '100%',
			fieldLabel : 'JSON'

		});

		var btn = Ext.create('Ext.Button', {
			text : 'Save',
			handler : function() {

				var items = Ext.getCmp('centerpanel').items;
				var cfgs = FB.view.DesignControl.getControls();

				txtArea.setValue(Ext.JSON.encode(cfgs));

			}
		});

		var btn2 = Ext.create('Ext.Button', {
			text : 'Load',
			handler : function() {

				var cfgs = Ext.JSON.decode(txtArea.getValue());
				
				FB.view.DesignControl.loadControls(cfgs);
			}
		});
		this.items = [ txtArea, btn, btn2 ];
		this.callParent(arguments);
	}
});