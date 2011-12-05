Ext.define('FB.view.Section', {	
	extend : 'Ext.panel.Panel',	
	height : 100,
	alias : 'widget.Section',
	resizable : {
		handles : 's'
	},
	
	autoScroll : true,

	listeners : {
		render : function(c) {
			c.getEl().on("contextmenu", function(e) {
				e.preventDefault();
				e.stopPropagation();
				c.showContextMenu(e.getXY());
			});
			
			c.getEl().on("click", function(e) {
				e.preventDefault();
				e.stopPropagation();
				c.doSelect();
			});
		}
	},

	initComponent : function() {
		this.callParent(arguments);		
	},

	showContextMenu : function(pos) {
		
		var me = this;

		// build menu
		var dv = this.ownerCt;
		var menuData = {
			items : []
		};
		
		//Move menu
		if (dv.items.items.length > 1) {
			var movData = {
				text : 'Move',
				menu : []
			};

			for ( var i = 0; i < dv.items.items.length; i++) {
				if (dv.items.items[i] !== this && dv.items.items[i-1] !== this && dv.items.items[i].getXType() === 'Section')
					movData.menu.push({
						text : 'Above ' + dv.items.items[i].title,
						movIndex : i,
						listeners : {
							click : function() {
								me.triggerMove(this.movIndex);
							}
						}
					});
			}
			if(dv.items.items[dv.items.items.length-1] !== this){
				movData.menu.push({
					text : 'To bottom',
					movIndex : -1,
					listeners : {
						click : function() {
							me.triggerMove(this.movIndex);
						}
					}
				});
			}

			menuData.items.push(movData);

		}// end if of movData		


		var menu = Ext.create("Ext.menu.Menu", menuData);

		menu.showAt(pos);
	},

	triggerMove : function(index) {
		
		var dv = this.ownerCt;
		if(index === -1){
			dv.remove(this, false);
			dv.add(this);
			return;
		}
		
		var arr = [];
		dv.remove(this, false);
		for(var i = 0; i< dv.items.items.length; i++){
			if(i === index){
				arr.push(this);
			}
			arr.push(dv.items.items[i]);
		}
		
		dv.removeAll(false);
		dv.add(arr);
		
	},

	
	
	doSelect: function(){
		
		FB.controller.DesignController.Select(this);
		
		var pg = Ext.getCmp("propGrid");
		
		pg.setSource({Title: this.title});
	},
	
	
	addChild: function(cfg){
		//console.log(cfg);
		var c = Ext.create('FB.view.Control', cfg);
		this.add(c._control);
	}

});