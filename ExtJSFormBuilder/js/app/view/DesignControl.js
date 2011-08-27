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
            		
            	}//end render
            }//end listeners
            
            
    	});
    	
    	FB.view.DesignControl.uid++;
    	
    	this.ctr.setPosition(config.x,config.y);
    	
    	this.ctr.designControl = this;
    }

});