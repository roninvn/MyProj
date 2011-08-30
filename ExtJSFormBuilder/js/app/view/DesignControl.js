Ext.define('FB.view.DesignControl', {
	
	statics:{
		uid: 0
	},
	
	ctr: null,
	oCfg: null,

	constructor: function (config) {
		this.oCfg = config.cdt;
		var me = this;
		var ctrCfg  ={
	    		name: 'cn' + FB.view.DesignControl.uid,
	    		id: 'id' + FB.view.DesignControl.uid,	            
	            
	            listeners:{
	            	render: function(c){            		
	            		c.dragZone = Ext.create('Ext.dd.DragZone', c.getEl(), {
	            		    getDragData: function(e) {
	            		        
	            		    	var t;
	            		    	
	            		    	if(me.oCfg.name == "Button")
	            		    		t = e.getTarget('div.x-btn');
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
	            	//set current value to propgrid
	            	//console.log('');
	            	var pg = Ext.getCmp("propGrid");
	            	pg.clearListeners();
	            	/*Ext.each(Ext.getCmp('centerpanel').getEl().query('div.x-field'), function(c){            		
	            		Ext.core.DomHelper.applyStyles(c, {"background-color": "white"});
	            	});*/
	            	//Ext.getCmp('centerpanel').getEl().query('div.x-field').setStyle("background-color": "gray"})
	            	
	            	pg.setSource(me.oCfg.cfg);
	            	
	            	//e.getEl().setStyle({"background-color": "gray"});
	            	
	            	pg.on("propertychange", function(obj,c,val){
	            		if(c=="Label"){
	            			e.getEl().down('label').update(val);
	            			me.oCfg.cfg.Label = val;
	            		}
	            		else if(c=="Text"){
	            			e.setText(val);
	            			me.oCfg.cfg.Text = val;
	            		}
	            	});
	            	
	            }
	            
	          },//end listeners            
	    	};
		
		
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
		else if(this.oCfg.name == "Button"){
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
    	
    	
    	FB.view.DesignControl.uid++;
    	
    	this.ctr.setPosition(config.x,config.y);
    	
    	/*Ext.util.Observable.capture(this.ctr, function(a,b,c){
																console.log(a,b,c);	
															}
		);*/
    	
    	this.ctr.designControl = this;
    }

});