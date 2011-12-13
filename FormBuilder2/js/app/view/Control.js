Ext.define('FB.view.Control', {	
	extend : 'Ext.Base',
	alias : 'widget.Control',
	
	requires: ['FB.view.OptionsWindow'],
	
	constructor : function() {		
		this.info = Ext.clone(arguments[0]);		
		this.createControl();
		
		this.callParent(arguments);
	},
	
	
	createControl: function(){
		var me = this;
		
		var cfg = {			
			fieldLabel : this.info.label,
			_baseControl: this,
			
			listeners: {
				render: function(c){
					me.onControlRender(c);
				}
			}
			
		};
		
		if(this.info.type === "combobox"){
			this.info.options = [];
			var store = Ext.create('Ext.data.Store', {
			    fields: ['option', 'value'],
			    data : this.info.options
			});
			
			Ext.apply(cfg, {
				store: store,
				queryMode: 'local',
			    displayField: 'option',
			    valueField: 'value'
			});
		}
		
		else if(this.info.type === "radiogroup"){
			Ext.apply(cfg,{
				vertical: true,
				columns: 5,
				width : 600,
				//height: 200,
				items:[{ boxLabel: 'Option 1', name: 'Option 1', inputValue: 'Value 1' }]
			});
		}
		
		this._control = Ext.createByAlias("widget." + this.info.type,cfg);
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
		
		Ext.tip.QuickTipManager.register({
		    target: this._control.getEl(),		    
		    text: this.info.tooltip
		});
	},
	
	doSelect: function(){
		FB.controller.DesignController.Select(this._control);
		
		var pg = Ext.getCmp("propGrid");		
		
		var src = {Label: this.info.label, Tooltip: this.info.tooltip};
		
		pg.setSource(src);
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
		
		if (this._control.ownerCt.getXType() === "FieldsetPanel" &&  dv.items.items.length > 1) {
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
				if (parent.items.items[i] !== this._control && parent.items.items[i-1] !== this._control) //&& parent.items.items[i].getXType() !== 'Section'
					movData.menu.push({
						text : 'Above ' + ( parent.items.items[i].getXType() !== 'Section' ? parent.items.items[i]._baseControl.info.label :  parent.items.items[i].title),
						movIndex : i,
						listeners : {
							click : function() {
								me.triggerMoveControl(this.movIndex);
							}
						}
					});
			}
			
			if(parent.items.items[parent.items.items.length-1] !== this){
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
		},{
			name:'Radio',
			type: 'radiogroup'
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
		
		
		if(this.info.type === "combobox" || this.info.type === 'radiogroup'){
			menuData.items.push({
				text: 'Options',
				listeners : {
					click : function() {
						me.showOptionsWindow();
					}
				}
			});
		}
		
		var menu = Ext.create("Ext.menu.Menu", menuData);
		menu.showAt(pos);
	},
	
	
	showOptionsWindow: function(){
		Ext.create('FB.view.OptionsWindow',{
			_control: this
		}).show();
	},
	
	
	
	triggerMoveFieldSet: function(movIndex){
		//console.log(movIndex);
		var dv = Ext.getCmp('designpanel');
		//var dv = this._control.ownerCt;
		this._control.ownerCt.remove(this._control, false);
		dv.items.getAt(movIndex).add(this._control);
	},
	
	triggerMoveControl: function(index){
		//console.log(index);
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
		
	},
	
	
	toJSON: function(){
		var obj = {
			type: this.info.type,
			label: this.info.label,
			tooltip: this.info.tooltip			
		};
		
		if(this.info.type === "combobox"){
			obj.options =[];
			var opts = this._control.getStore().getRange();
			for(var i=0; i<opts.length; i++){
				obj.options.push({
					option: opts[i].data.option,
					value: opts[i].data.value
				});
			}
		}
		
		else if(this.info.type === "radiogroup"){
			obj.options =[];
			var opts = this._control.items;
			
			opts.each(function(i){
				obj.options.push({
					option:  i.name,
					value: i.inputValue
				});
			});
		}
		
		
		return obj;
	}
	
});