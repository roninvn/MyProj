Ext.define('FB.view.Control', {	
	extend : 'Ext.Base',
	alias : 'widget.Control',	
	
	constructor : function() {		
		this.info = Ext.clone(arguments[0]);
		
		this.createControl();
		
		this.callParent(arguments);
	},
	
	
	createControl: function(){
		var me = this;
		
		this._control = Ext.createByAlias("widget." + this.info.type,{			
			fieldLabel : this.info.label,
			_baseControl: this,
			
			listeners: {
				render: function(c){
					me.onControlRender(c);
				}
			}
			
		});
	},
	
	onControlRender: function(c){
		var me = this;
		this._control.getEl().on("click", function(e) {
			e.preventDefault();
			e.stopPropagation();			
			me.doSelect();
		});
		
		this._control.getEl().on("contextmenu", function(e) {
			e.preventDefault();
			e.stopPropagation();
			me.showContextMenu(e.getXY());
		});
	},
	
	doSelect: function(){
		FB.controller.DesignController.Select(this._control);
		
		var pg = Ext.getCmp("propGrid");
		
		pg.setSource({Label: this.info.label});
	},
	
	setLabel: function(l){
		this._control.getEl().down('label').update(l);
		this.info.label = l;
	},
	
	showContextMenu: function(pos){
		var me = this;

		// build menu
		var dv = Ext.getCmp('designpanel');
		var menuData = {
				items : []
		};
		
		if (dv.items.items.length > 1) {
			var movData = {
				text : 'To fieldset',
				menu : []
			};
			
			for ( var i = 0; i < dv.items.items.length; i++) {
				if (dv.items.items[i] !== me._control.ownerCt)
					movData.menu.push({
						text : dv.items.items[i].title,
						movIndex : i,
						listeners : {
							click : function() {
								me.triggerMoveFieldSet(this.movIndex);
							}
						}
					});
			}
			
			menuData.items.push(movData);
		}//end move fieldset menu
		
		var parent = this._control.ownerCt;
		//Move menu
		if (parent.items.items.length > 1) {
			var movData = {
				text : 'Move',
				menu : []
			};

			for ( var i = 0; i < parent.items.items.length; i++) {
				if (parent.items.items[i] !== this._control && parent.items.items[i-1] !== this._control)
					movData.menu.push({
						text : 'Above ' + parent.items.items[i]._baseControl.info.label,
						movIndex : i,
						listeners : {
							click : function() {
								me.triggerMoveControl(this.movIndex);
							}
						}
					});
			}
			if(parent.items.items[parent.items.items.length-1] !== this._control){
				movData.menu.push({
					text : 'To bottom',
					movIndex : -1,
					listeners : {
						click : function() {
							me.triggerMoveControl(this.movIndex);
						}
					}
				});
			}

			menuData.items.push(movData);
			

		}// end if of movData
		
		
		//transform menu
		var transfData = {
				text : 'Transform to',
				menu : []
			};
		
		var arr =[{
			name:'Textbox',
			type:'textfield'
		},{
			name:'Text area',
			type:'textareafield'
		},{
			name:'Date',
			type:'datefield'
		},{
			name:'Checkbox',
			type:'checkboxfield'
		},{
			name:'Combobox',
			type:'combobox'
		}];
		
		for(var i = 0; i < arr.length; i++){
			if(arr[i].type !== this.info.type){
				transfData.menu.push({
					text: arr[i].name,
					ctype: arr[i].type,
					listeners : {
						click : function() {
							me.triggerTransform(this.ctype);
						}
					}
				});
			}
		}
		
		menuData.items.push(transfData);//end transform data
		
		var menu = Ext.create("Ext.menu.Menu", menuData);
		menu.showAt(pos);
	},
	
	triggerMoveFieldSet: function(movIndex){
		//console.log(movIndex);
		var dv = Ext.getCmp('designpanel');
		this._control.ownerCt.remove(this._control, false);
		dv.items.getAt(movIndex).add(this._control);
	},
	
	triggerMoveControl: function(index){
		var dv = this._control.ownerCt;
		if(index === -1){
			dv.remove(this._control, false);
			dv.add(this._control);
			return;
		}
		
		var arr = [];
		dv.remove(this._control, false);
		for(var i = 0; i< dv.items.items.length; i++){
			if(i === index){
				arr.push(this._control);
			}
			arr.push(dv.items.items[i]);
		}
		
		dv.removeAll(false);
		dv.add(arr);
	},
	
	triggerTransform: function(type){
		//console.log(type);
		var c = this._control;
		var dv = this._control.ownerCt;
		
		var arr = [];
		//dv.remove(this._control, false);
		for(var i = 0; i< dv.items.items.length; i++){
			if(this._control !== dv.items.items[i]){
				arr.push(dv.items.items[i]);
			}
			else{
				this.info.type = type;
				this.createControl();
				arr.push(this._control);
			}
			
		}
		
		dv.removeAll(false);
		c.destroy();
		dv.add(arr);
		
		FB.controller.DesignController.UnselectAll();
		
	}
	
});