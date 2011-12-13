Ext.define('FB.view.FieldsetPanel', {	
	extend : 'Ext.panel.Panel',	
	height : 200,
	alias : 'widget.FieldsetPanel',
	resizable : {
		handles : 's'
	},
	
	autoScroll : true,

	listeners : {
		render : function(c) {
			c.getEl().on("contextmenu", function(e) {
				e.preventDefault();
				c.showContextMenu(e.getXY());
			});
			
			c.getEl().on("click", function(e) {
				e.preventDefault();
				//c.showContextMenu(e.getXY());
				c.doSelect();
			});
			
			/*c.tip = Ext.create('Ext.tip.ToolTip', {
			    target: c.getEl(),
			    html: c.tooltip,
			    trackMouse: true
			});*/
			

		}
	},

	initComponent : function() {
		this.callParent(arguments);		
	},

	showContextMenu : function(pos) {

		var me = this;

		// build menu
		var dv = Ext.getCmp('designpanel');
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
				if (dv.items.items[i] !== this && dv.items.items[i-1] !== this)
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
		
		//Delete menu
		if(this.items.items.length === 0){
			menuData.items.push({
				text:'Delete',
				listeners : {
					click : function() {
						me.triggerDelete();
					}
				}
			});
		}

		var menu = Ext.create("Ext.menu.Menu", menuData);

		menu.showAt(pos);
	},

	triggerMove : function(index) {
		
		var dv = Ext.getCmp('designpanel');
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
	
	triggerDelete: function(){
		var dv = Ext.getCmp('designpanel');
		dv.remove(this, true);
	},
	
	
	doSelect: function(){
		
		FB.controller.DesignController.Select(this);
		
		var pg = Ext.getCmp("propGrid");
		
		pg.setSource({Title: this.title, Description: this.desc});
	},
	
	
	addChild: function(cfg){
		//console.log(cfg);
		var c = Ext.create('FB.view.Control', cfg);
		this.add(c._control);
	},
	
	toJSON: function(){
		var obj = {
			type:'fieldset',
			title: this.title,
			desc: this.desc,
			items:[]
		};
		
		this.items.each(function(i){
			if(i.getXType() === 'Section')
				obj.items.push(i.toJSON());
			else
				obj.items.push(i._baseControl.toJSON());
		});
		
		return obj;
	}

});