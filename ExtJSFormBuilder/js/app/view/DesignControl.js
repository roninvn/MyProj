Ext.define('FB.view.DesignControl', {
	
	statics:{
		uid: 0,
		selectedControl: null,
		updateControlProperties: function(control,cfg){
			if(cfg.Label){
				if(control.designControl.oCfg.name === "Label")
					control.getEl().update(cfg.Label);
				else
					control.getEl().down('label').update(cfg.Label);
			}
			
			if(cfg.Text)
				control.setText(cfg.Text);
			
			if(cfg.Validation){
				var val = cfg.Validation;
				if(val == "Email")
    				control.regex = /[\w-]+@([\w-]+\.)+[\w-]+/;
    			else if(val == "Date format")
    				control.regex = /^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$|^\d{4}$/;
    			else if(val == "Integer")
    				control.regex = /^\d+$/;
    			else if(val == "Decimal")
    				control.regex = /\d+(\.\d{1,2})?/;
    			else
    				control.regex = "";				
			}
			
			if(cfg.Values){
				//set value
				var arr = FB.view.DesignControl.createValuesArray(cfg.Values);
				control.store.loadData(arr);

			}
			
			if(cfg.Items){
				//set value
				var arr = FB.view.DesignControl.createItemsArray(cfg.Items, control.id);
				control.removeAll(true);
				control.add(arr);
				control.doLayout();

			}
			
			if(cfg["Allow blank"])
				control.allowBlank = cfg["Allow blank"];
			
			if(cfg["Label Color"]){
				if(control.designControl.oCfg.name === "Label")
					control.getEl().applyStyles({'color': "#" + cfg["Label Color"]});
				else
					control.getEl().down('label').applyStyles({'color': "#" + cfg["Label Color"]});
			}
			
			if(cfg["Field Color"]){
				control.setFieldStyle({'color': "#" + cfg["Field Color"]});
			}
			
			//Label Style
			
			if(cfg["Label Style"]){
				
				var labelstyle = {};
				labelstyle["font-style"] = cfg["Label Style"].indexOf("Italic") !==-1 ? "italic" : null;
				labelstyle["font-weight"] = cfg["Label Style"].indexOf("Bold") !==-1 ? "bold" : null;
				labelstyle["text-decoration"] = cfg["Label Style"].indexOf("Underline") !==-1 ? "underline" : null;
				
				if(control.designControl.oCfg.name === "Label")
					control.getEl().applyStyles(labelstyle);
				else
					control.getEl().down('label').applyStyles(labelstyle);
				
			}
			
			if(cfg["Field Style"]){
				
				var fieldstyle = {};
				fieldstyle["font-style"] = cfg["Field Style"].indexOf("Italic") !==-1 ? "italic" : null;
				fieldstyle["font-weight"] = cfg["Field Style"].indexOf("Bold") !==-1 ? "bold" : null;
				fieldstyle["text-decoration"] = cfg["Field Style"].indexOf("Underline") !==-1 ? "underline" : null;
				
				control.setFieldStyle(fieldstyle);
			}
			
			if(cfg["Line Color"]){
				control.setColor(cfg["Line Color"]);
			}
    		
		},//end updateControlProperties
		
		createValuesArray: function(str){
			var arr = str.split(",");
			var dt = [];			
			for(var i=0; i<arr.length; i++)
				dt.push({name: arr[i], val: arr[i]});
			
			return dt;
		},
		
		createItemsArray: function(str, name){
			var arr = str.split(",");
			var dt = [];			
			for(var i=0; i<arr.length; i++){
				var c = Ext.create("Ext.form.field.Radio",{boxLabel: arr[i], name: name, inputValue: arr[i] });
				dt.push(c);
			}		
			
			return dt;
		}
	},
	
	ctr: null,
	oCfg: null,

	constructor: function (config) {
		this.oCfg = config.cdt;
		var me = this;
		var ctrCfg  = {
	    		name: 'cn' + FB.view.DesignControl.uid,
	    		id: 'id' + FB.view.DesignControl.uid,	    		
	    		resizable: {dynamic: false, transparent:true, handles:"s e se", heightIncrement : 10, widthIncrement:10},
	    		
	    		draggable: {
	    			listeners:{
	    				dragend: function(t, e, eo){
	    					var p = me.ctr.getPosition(true);
	    					p[0] = Math.floor(p[0]/10)*10;
	    					p[1] = Math.floor(p[1]/10)*10;
	    					
	    					me.ctr.setPosition(p[0],p[1]);
	    				}
	    			}
	    		},
	            
	            listeners:{
	            	
	            	afterrender: function(c){
	            		
	            		c.dd.onDrag = function(e) {
							            	        var me = this,
							                        comp = (me.proxy && !me.comp.liveDrag) ? me.proxy : me.comp,
							                        offset = me.getOffset(me.constrain || me.constrainDelegate ? 'dragTarget' : null);
							            	        
							            	        var c2 = comp.findParentByType("panel").getPosition();
							            	        
							            	        comp.setPosition(me.startPosition[0] + offset[0]-c2[0], me.startPosition[1] + offset[1]);

	            								};	            		
	            		
	            		c.getEl().on("click", function(e){
	            			FB.view.DesignControl.selectedControl = me;
	            			var items = Ext.getCmp('centerpanel').items;	                    	
	                    	items.each(function(itm, i, l){
	                    		
	                    		if(itm.designControl.oCfg.name == "Button")
	                    			itm.getEl().down('button').applyStyles({'background-color': null});
	                    		else
	                    			itm.getEl().applyStyles({'background-color': null});
	                    		
	                    	});
	            			
	            			
	            			if(me.oCfg.name == "Button")
	            				c.getEl().down('button').applyStyles({'background-color': "#BDD2EF"});
	            			else
	            				c.getEl().applyStyles({'background-color': "#BDD2EF"});

	            			
	            			var pg = Ext.getCmp("propGrid");
	    	            	pg.clearListeners();
	    	            	
	    	            	pg.setSource(me.oCfg.cfg);
	    	            	
	    	            	pg.on("propertychange", function(obj,c,val){
	    	            		var v = val;
	    	            		if(val.constructor == Array)
	    	            			v = val.join();
	    	            		me.oCfg.cfg[c] = v;
	    	            		FB.view.DesignControl.updateControlProperties(me.ctr,me.oCfg.cfg);	            		
	    	   
	    	            	}); //end pg on
	            			
	            			
	            		});
	            		
	            	}, //end after render
	            	
	            	render: function(c){
	            	}//end render    
	            		            
	          }//end listeners        
	    	}; //end ctrCfg
		
		
		if(this.oCfg.extClass == "Ext.form.field.ComboBox"){//create store for combobox

			
			var cbStore = Ext.create('Ext.data.Store', {
			    fields: ['val', 'name'],
			    data : []
			});
			
			ctrCfg.store = cbStore,
			ctrCfg.queryMode = 'local';
			ctrCfg.displayField = 'name';
			ctrCfg.valueField = 'val';
            
			
		}
		
		if(this.oCfg.extClass == "Ext.form.RadioGroup"){
			ctrCfg.items = FB.view.DesignControl.createItemsArray(this.oCfg.cfg.Items, ctrCfg.id);
			ctrCfg.layout= "vbox";
		}
		
		if(this.oCfg.cfg.size){
			if(this.oCfg.cfg.size.width)
				ctrCfg.width = this.oCfg.cfg.size.width;
			if(this.oCfg.cfg.size.height)
				ctrCfg.height = this.oCfg.cfg.size.height;
		}

		
		if(this.oCfg.cfg.Label){
			ctrCfg.fieldLabel = this.oCfg.cfg.Label;
		}
		
		if(this.oCfg.cfg.Text){
			ctrCfg.text = this.oCfg.cfg.Text;
		}
		
    	this.ctr = Ext.create(this.oCfg.extClass,ctrCfg);    	
    	
    	
    	FB.view.DesignControl.uid++;
    	
    	this.ctr.setPosition(this.oCfg.x,this.oCfg.y);
    	
    	
    	/*Ext.util.Observable.capture(this.ctr, function(a,b,c){
																console.log(a,b,c);	
															}
		);*/
    	
    	this.ctr.designControl = this;    	
    }
});