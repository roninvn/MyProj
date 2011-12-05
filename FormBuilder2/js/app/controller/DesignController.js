Ext.define('FB.controller.DesignController', {
	extend : 'Ext.app.Controller',
	views : [ 'ContentPanel', 'DesignPanel' ],
	requires : [ 'FB.view.FieldsetPanel', 'FB.view.Control','FB.view.Section' ],
	
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
					if(i2.items)
						i2.items.each(function(i3){
							FB.controller.DesignController.UnselectControl(i3);
						});						
				});
			});
			
			Ext.getCmp('propGrid').setSource({});
		},
		/*
		 * select a control
		 */
		Select: function(c){
			FB.controller.DesignController.UnselectAll();
			if(c.getXType() === 'FieldsetPanel' || c.getXType() === 'Section')
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
			title : 'Fieldset',
			desc:'A fieldset'
		});
		dv.add(c);
		
		//var k = Ext.create('FB.view.Control');
	},

	buildDesign: function(obj){
		//console.log(obj);
		var dv = Ext.getCmp('designpanel');
		
		for(var i=0; i< obj.fieldsets.length; i++){
			var c = Ext.create('FB.view.FieldsetPanel',{
				title: obj.fieldsets[i].name,
				desc : obj.fieldsets[i].desc
			});
			dv.add(c);
			
			for(var j=0; j<obj.fieldsets[i].inputs.length; j++)
				c.addChild(obj.fieldsets[i].inputs[j]);
			
			for(var j=0; j<obj.fieldsets[i].sections.length; j++){
				var s = obj.fieldsets[i].sections[j];
				var se = Ext.create('FB.view.Section',{
					title: s.name
				});
				c.add(se);
				
				for(var k=0; k<s.inputs.length; k++)
					se.addChild(s.inputs[k]);
			}
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
				fieldsets: [{
					name: 'Default fieldset',
					desc : 'This is the default fieldset',
					inputs:[],
					sections:[]
				}]
		};
		
		var fs = obj.fieldsets[0];
		
		var dupvars ={}, vars = {};
		
		
		for(var i=0; i< docObj.sections.length; i++){
			var sec = docObj.sections[i];
			if(sec.optional){//create a section if it is optional
				fs.sections.push({
					name : sec.name,
					inputs:[]
				});
				
				for(var j=0; j< sec.elements.length; j++){
					var el = sec.elements[j];
					for(var k=0; k<el.inputs.length; k++){
						var vname = el.inputs[k].name;
						if(dupvars[vname]){}//already has
						else if(vars[vname] || vars[vname] === 0){ //already has, move to dup
							dupvars[vname] = true;
							delete vars[vname];
						}
						else{
							vars[vname] = fs.sections.length; //add var to section
						}
					}
				}
			} //end if optional
			else{ //not optional => all vars to dup
				for(var j=0; j< sec.elements.length; j++){
					var el = sec.elements[j];
					for(var k=0; k<el.inputs.length; k++){
						var vname = el.inputs[k].name;
						if(vars[vname] || vars[vname] === 0){ //already has, move to dup
							dupvars[vname] = true;
							delete vars[vname];
						}
						else
							dupvars[vname] = true;
					}
				}
			}//end else
		}
		
		
		//add control & section
		
		for(var i=0 ; i<fs.sections.length; i++){//sections
			for(v in vars){
				if(vars[v] === i){
					fs.sections[i].inputs.push({
						type: 'textfield',
						input: v,
						label: v
					});
				}
			}
		}
		
		for(v in dupvars){
			fs.inputs.push({
				type: 'textfield',
				input: v,
				label: v
			});
		}
		//console.log(obj)
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
				
				if(itm.items){
					itm.items.each(function(i2){
						if(i2.isSelected){
							i2.setTitle(val);
							return;
						}
					});
					
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
					
					if(i2.items){
						i2.items.each(function(i3){
							if(i3.isSelected){
								i3._baseControl.setLabel(val);
								return;
							}
						});
						
					}
					
				});
			});
		}//end Label
		
		else if(name === "Description"){
			dv.items.each(function(itm){
				if(itm.isSelected){
					itm.desc = val;
					return;
				}
			});
		}
	},
	
	exportToJSON: function(){
		var dv = Ext.getCmp('designpanel');
		var obj = {name : 'My Form', fieldsets:[]};
		
		dv.items.each(function(panel){
			
			var  p = {name: panel.title, inputs:[], sections:[], desc: panel.desc};
			
			panel.items.each(function(control){
				if(control.getXType() !== 'Section'){
					var c = control._baseControl.info;				
					p.inputs.push(c);
				}
				else{
					var s  = {name: control.title, inputs: []};
					p.sections.push(s);
					control.items.each(function(c2){
						var c = c2._baseControl.info;				
						s.inputs.push(c);
					});
				}
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
