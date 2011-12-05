Ext.define('FB.controller.DesignController', {
	extend : 'Ext.app.Controller',
	views : [ 'ContentPanel', 'DesignPanel' ],
	requires : [ 'FB.view.FieldsetPanel', 'FB.view.Control' ],
	
	statics:{
		
		UnselectControl: function(c){
			c.getEl().applyStyles({
				border : null,
				'background-color': null
			});				
			c.isSelected = false;
		},
		
		/*
		 * unselect all controls
		 */
		UnselectAll: function(){
			var dv = Ext.getCmp('designpanel');
			dv.items.each(function(itm){
				FB.controller.DesignController.UnselectControl(itm);				
				itm.items.each(function(i2){
					FB.controller.DesignController.UnselectControl(i2);
				});
			});
			
			Ext.getCmp('propGrid').setSource({});
		},
		/*
		 * select a control
		 */
		Select: function(c){
			FB.controller.DesignController.UnselectAll();
			if(c.getXType() === 'FieldsetPanel')
				c.getEl().applyStyles({
					border : "1px dashed red"					
				});
			else
				c.getEl().applyStyles({
					'background-color': 'cyan'
				});
			c.isSelected = true;
		}
	},

	init : function() {
		this.control({
			'#btnAddnew' : {
				click : this.addNewFieldset
			},
			"#designpanel" : {
				afterrender : this.designPanelAfterRender
			},
			"#propGrid": {
				propertychange: this.onPropertyChanged
			},
			"#btnExport": {
				click: this.exportToJSON
			}
		});
	},

	addNewFieldset : function() {
		var dv = Ext.getCmp('designpanel');
		var c = Ext.create('FB.view.FieldsetPanel',{
			title : 'Fieldset'
		});
		dv.add(c);
		
		//var k = Ext.create('FB.view.Control');
	},

	buildDesign: function(obj){
		//console.log(obj);
		var dv = Ext.getCmp('designpanel');
		
		for(var i=0; i< obj.fieldsets.length; i++){
			var c = Ext.create('FB.view.FieldsetPanel',{
				title: obj.fieldsets[i].name
			});
			dv.add(c);
			
			for(var j=0; j<obj.fieldsets[i].inputs.length; j++)
				c.addChild(obj.fieldsets[i].inputs[j]);
		}
	},
	
	designPanelAfterRender : function() {
		if(jsonString && jsonString !== "")
			this.loadFromDocBuilderJSON();
	},
	
	loadFromDocBuilderJSON: function(){
		var obj = Ext.JSON.decode(jsonString);
		var obj2 = this.convertDocBuilderToFormCfg(obj);
		this.buildDesign(obj2)
	},
	
	convertDocBuilderToFormCfg: function(docObj){
		//console.log(docObj);
		var obj = {
				name: 'My Form',
				fieldsets: []
		};
		
		var dupvars ={}, vars = {};
		
		for(var i=0; i< docObj.sections.length; i++){
			obj.fieldsets.push({
				name: docObj.sections[i].name
			});
			
			for(var j=0; j<docObj.sections[i].elements.length; j++){
				var el = docObj.sections[i].elements[j];
				for(var k=0; k<el.inputs.length; k++){
					var vname = el.inputs[k].name;
					//console.log(vname);
					//console.log('vars[vname] : ', vars[vname]);
					if(dupvars[vname]){
						//already have
						//console.log('already in dup');
					}
					else if(vars[vname] || vars[vname] === 0){
						//move to duplicated
						dupvars[vname] = true;
						delete vars[vname];
						//console.log('to dup');
					}
					else{
						vars[vname] = i;
						//console.log('added');
					}
				}
			}
				
		}
		
		for(var i=0; i<obj.fieldsets.length; i++){
			var fs = obj.fieldsets[i];
			fs.inputs = [];			
			for(v in vars)
				if(vars[v] === i){
					fs.inputs.push({
						type: 'textfield',
						input: v,
						label: v
					});
				}
		}
		
		var dups = [];
		for(v in dupvars){
			dups.push({
				type: 'textfield',
				input: v,
				label: v
			});
		}
		
		if(dups.length > 0){
			obj.fieldsets.push({
				name: "Duplicated",
				inputs: dups
			});
		}
		
		//console.log(obj);
		return obj;
	},
	
	onPropertyChanged: function(obj,name,val,oldval){
		var dv = Ext.getCmp('designpanel');
		if(name === "Title"){
			dv.items.each(function(itm){
				if(itm.isSelected){
					itm.setTitle(val);
					return;
				}
			});
		}//end Title
		else if(name === "Label"){
			dv.items.each(function(itm){
				itm.items.each(function(i2){
					if(i2.isSelected){
						i2._baseControl.setLabel(val);
						return;
					}
				});
			});
		}//end Label
	},
	
	exportToJSON: function(){
		var dv = Ext.getCmp('designpanel');
		var obj = {name : 'My Form', fieldsets:[]};
		
		dv.items.each(function(panel){
			
			var  p = {name: panel.title, inputs:[]};
			
			panel.items.each(function(control){
				var c = control._baseControl.info;				
				p.inputs.push(c);
			});
			
			obj.fieldsets.push(p);
		});
		
		//console.log(obj);
		
		Ext.create('Ext.window.Window', {
		    title: 'JSON string',
		    height: 300,
		    width: 400,
		    layout: 'fit',
		    items: [{
		        xtype: 'textareafield',
		        value : Ext.JSON.encode(obj)
		    }]
		}).show();
	}

});
