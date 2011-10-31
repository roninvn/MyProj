/**
 * This file will create the Center Panel and dock it to the viewport of the
 * system.
 * 
 * @author Nam Hoang
 */
Ext.define('Flower.view.CenterPanel', {
	extend : 'Ext.panel.Panel',
	activeItem : 0,
	margins : '5 5 5 5',
	region : 'center', // a center region is ALWAYS required for border layout
	deferredRender : false,
	alias : 'widget.CenterPanel',
	layout : 'absolute',

	requires : ['Flower.view.ux.ImageControl'],
	/**
	 * This function is used to init it own component and call parent arguments
	 * 
	 * @author Nam Hoang
	 * 
	 * @return void
	 */
	initComponent : function() {
		this.callParent(arguments);

		/*var nav = new Ext.util.KeyNav(Ext.get(document), {
			"del" : function(e) {
				if (Flower.view.DesignControl.selectedControl) {
					this.remove(Flower.view.DesignControl.selectedControl.ctr, true);
					Flower.view.DesignControl.selectedControl.ctr = null;
				}
			},
			scope : this
		});*/
	},

	listeners : {
		render : function(c) {

			c.dropZone = Ext.create('Ext.dd.DropZone', c.el, {

				getTargetFromEvent : function(e) {
					return c.el;
				},

				onNodeOver : function(target, dd, e, data) {
					return Ext.dd.DropZone.prototype.dropAllowed;
				},

				onNodeDrop : function(target, dd, e, data) {
					
					var img = Ext.create('Flower.view.ux.ImageControl',{});
					
					c.add(img);
					img.setSrc(data.controlData.src);
					img.setSize({
						width: 100,
						height: 100
					});
					return true;
				}
			});
		}
	}

});