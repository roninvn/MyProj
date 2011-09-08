Ext.define('FB.view.DesignControl', {
	
	statics:{
		uid: 0,
		updateControlProperties: function(control,cfg){
			
			if(cfg.Label)
				control.getEl().down('label').update(cfg.Label);
			
			if(cfg.Text)
				control.setText(c.Text);
			
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
			
			if(cfg["Allow blank"])
				control.allowBlank = cfg["Allow blank"];
    		
		}//end updateControlProperties
	},
	
	ctr: null,
	oCfg: null,

	constructor: function (config) {
		this.oCfg = config.cdt;
		var me = this;
		var ctrCfg  = {
	    		name: 'cn' + FB.view.DesignControl.uid,
	    		id: 'id' + FB.view.DesignControl.uid,	    		
	    		resizable: {
	    			dynamic: false,
	    			listeners: {
	    				beforeresize : function(r, w, h, e){
	    					console.log('beforeresize', me.ctr);
	    				}
	    			}//end listeners,		
	    		},
	    		/*
	    		draggable: {
	    			listeners:{
	    				dragstart: function(c,e,o){
	    					//console.log(me.ctr.getPosition());
	    					//var a = me.ctr.getPosition();
	    					//me.ctr.setPosition(a[0]-150,a[1]);
	    				},
	    				drag: function(c,e,t){
	    					//console.log('drag', e);
	    				}
	    			}//end listeners,
	    		},*/
	            
	            listeners:{
	            	render: function(c){            		
	            		c.dragZone = Ext.create('Ext.dd.DragZone', c.getEl(), {
	            			
	            			onBeforeDrag : function(data,e){
	            				console.log('onBeforeDrag',e);
	            			},
	            			
	            			getDragData: function(e) {
	            				console.log('getDragData',e);
	            		    	var t;	            		    	
	            		    	if(me.oCfg.name == "Button")
	            		    		t = e.getTarget('div.x-btn');
	            		    	else if(me.oCfg.name == "Label")
	            		    		t = e.getTarget('label.x-component');
	            		    	else
	            		    		t = e.getTarget('div.x-field');
	            		    	
	            		        var t2 = Ext.clone(t);
	            		        
            		        	Ext.core.DomHelper.applyStyles(t2, {left:"0px", top:"0px", border: "1px dashed red"});            		            
	        		        	
	            		        e.stopEvent();        		            
	        		            
	        		        	return {            		                
	        		                ddel: t2,
	        		                isDesign: true,
	        		                control : c
	        		            };            		        
	            		    },
	            			
	            			getRepairXY: function() {
	                             return this.dragData.repairXY;
	                        }
	            		});//end dragZone
	            		
	            		
	            		//c.dragZone.setXConstraint( 0, 2000, 30 );
	            		//c.dragZone.setYConstraint( 0, 2000, 30 );
	            		
	            	},//end render    
	            	
	            focus: function(e){
	            	
	            	var pg = Ext.getCmp("propGrid");
	            	pg.clearListeners();
	            	
	            	pg.setSource(me.oCfg.cfg);
	            	
	            	pg.on("propertychange", function(obj,c,val){
	            		
	            		//console.log(obj,c,val);
	            		
	            		me.oCfg.cfg[c] = val;
	            		FB.view.DesignControl.updateControlProperties(e,me.oCfg.cfg);	            		
	   
	            	}); //end pg on
	            } //end focus
	            
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
		else if(this.oCfg.name == "Button" || this.oCfg.name == "Label"){
			ctrCfg.listeners.click = ctrCfg.listeners.focus;
			ctrCfg.listeners.focus = function(e){};
		}
			
		
		if(this.oCfg.cfg.Label){
			ctrCfg.fieldLabel = this.oCfg.cfg.Label;
		}
		
		if(this.oCfg.cfg.Text){
			ctrCfg.text = this.oCfg.cfg.Text;
		}
		
    	this.ctr = Ext.create(this.oCfg.extClass,ctrCfg);
    	//FB.view.DesignControl.updateControlProperties(this.ctr, this.oCfg.cfg);
    	
    	
    	FB.view.DesignControl.uid++;
    	
    	this.ctr.setPosition(this.oCfg.x,this.oCfg.y);
    	
    	/*Ext.util.Observable.capture(this.ctr, function(a,b,c){
																console.log(a,b,c);	
															}
		);*/
    	
    	this.ctr.designControl = this;
    }

});