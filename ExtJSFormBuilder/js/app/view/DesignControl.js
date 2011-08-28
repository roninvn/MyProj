Ext.define('FB.view.DesignControl', {
	
	statics:{
		uid: 0
	},
	
	ctr: null,
	oCfg: null,

	constructor: function (config) {
		this.oCfg = config;
		
    	this.ctr = Ext.create(config.extClass,{
    		name: 'cn' + FB.view.DesignControl.uid,
    		id: 'id' + FB.view.DesignControl.uid,
            fieldLabel: config.label,
            
            listeners:{
            	render: function(c){
            		
            		c.dragZone = Ext.create('Ext.dd.DragZone', c.getEl(), {            			
            		    getDragData: function(e) {
            		        
            		    	var t = e.getTarget('div.x-field');
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
            	//console.log(e.getEl().down("label").update('Test 123'));
            	var pg = Ext.getCmp("propGrid");
            	pg.clearListeners();
            	Ext.each(Ext.getCmp('centerpanel').getEl().query('div.x-field'), function(c){            		
            		Ext.core.DomHelper.applyStyles(c, {"background-color": "white"});
            	});
            	//Ext.getCmp('centerpanel').getEl().query('div.x-field').setStyle("background-color": "gray"})
            	
            	pg.setSource({
            		"Label":e.getEl().down('label').dom.innerHTML           		
            	});
            	
            	e.getEl().setStyle({"background-color": "gray"});
            	
            	pg.on("propertychange", function(obj,c,val){
            		if(c=="Label")
            			e.getEl().down('label').update(val);
            	});
            	
            }
            
          },//end listeners
          

            
    	});
    	
    	
    	FB.view.DesignControl.uid++;
    	
    	this.ctr.setPosition(config.x,config.y);
    	
    	/*Ext.util.Observable.capture(this.ctr, function(a,b,c){
																console.log(a,b,c);	
															}
		);*/
    	
    	this.ctr.designControl = this;
    }

});