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
	id : 'centerpanel',

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

		var nav = new Ext.util.KeyNav(Ext.get(document), {
			"del" : function(e) {
				//get Selected control
				var sels = this.query('ImageControl[isSelected=true]');
				if(sels && sels.length > 0)
					this.remove(sels[0]);
			},
			scope : this
		});
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
					
					var x = e.getX() - c.el.getX(), y = e.getY() - c.el.getY();
					
					var img = Ext.create('Flower.view.ux.ImageControl',{});
					
					c.add(img);
					img.setSrc(data.controlData.src);
					/*img.setSize({
						width: 100,
						height: 100
					});*/
					
					img.setPosition(x,y);
					
					return true;
				}
			});
		}// end event render
	},
	
	setZoom: function(newVal){
		this.zoomLevel = newVal;
		this.items.each(function(itm){
			itm.setZoom(newVal);
		});
	}

});