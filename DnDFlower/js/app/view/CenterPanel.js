/**
 * This file will create the Center Panel and dock it to the viewport of the
 * system.
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.CenterPanel', {
	extend : 'Ext.panel.Panel',
	activeItem : 0,
	margins : '5 5 5 5',
	region : 'center', // a center region is ALWAYS required for border layout
	deferredRender : false,
	alias : 'widget.CenterPanel',
	layout : 'absolute',

	requires : [],
	/**
	 * This function is used to init it own component and call parent arguments
	 * 
	 * @author Nam Hoang
	 * 
	 * @return void
	 */
	initComponent : function() {
		this.callParent(arguments);

		var nav = new Ext.util.KeyNav(Ext.get(document), {
			"del" : function(e) {
				if (FB.view.DesignControl.selectedControl) {
					this.remove(FB.view.DesignControl.selectedControl.ctr, true);
					FB.view.DesignControl.selectedControl.ctr = null;
				}
			},
			scope : this
		});
	},

	listeners : {
		render : function(grid) {

			grid.dropZone = Ext.create('Ext.dd.DropZone', grid.el, {

				getTargetFromEvent : function(e) {
					return grid.el;
				},

				onNodeOver : function(target, dd, e, data) {
					return false;
				},

				onNodeDrop : function(target, dd, e, data) {
					return false;
				}
			});
		}
	}

});