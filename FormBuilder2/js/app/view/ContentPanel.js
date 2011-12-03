Ext.define('FB.view.ContentPanel', {
	extend : 'Ext.panel.Panel',
	id : 'content-panel',
	title : 'Form Builder',	
	margins : '0 0 0 5',
	alias : 'widget.ContentPanel',
	renderTo: 'content',
	layout:'fit',
	requires:['FB.view.PropertyPanel', 'FB.view.DesignPanel'],
	
	items: [{
		xtype:'toolbar',
		items:[{
			text:'Add new Fieldset',
			id:'btnAddnew'
		}] //end item of toolbar
	},{
		xtype:'panel',
		layout : 'border',
		height: '360',
		items:[{
			xtype:'DesignPanel'
		},{
			xtype:'PropertyPanel'
		}]
	}],	
	initComponent : function() {
		this.callParent(arguments);
	}
	
});
