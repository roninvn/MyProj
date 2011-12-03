Ext.define('FB.view.DesignPanel', {
	extend : 'Ext.panel.Panel',	
	region : 'center', 
	deferredRender : false,
	alias : 'widget.DesignPanel',
	id : 'designpanel',
	height:'100%',	
	autoScroll: true,
	initComponent : function() {
		this.callParent(arguments);		
	}

});