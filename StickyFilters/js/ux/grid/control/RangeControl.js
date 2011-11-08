Ext.define('Ext.ux.grid.control.RangeControl', {
	extend : 'Ext.panel.Panel',
	alias : 'widget.rangecontrol',
	items : [{
		xtype: 'numberfield'
	}],

	constructor : function(config) {
		var me = this;
		me.callParent(arguments);
	}
});
