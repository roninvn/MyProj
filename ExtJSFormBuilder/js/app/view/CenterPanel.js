/**
 * This file will create the Center Panel and dock it to the viewport of the system.
 * @author Nam Hoang
 */
Ext.define('FB.view.CenterPanel', {
    extend: 'Ext.panel.Panel',
    activeItem: 0,
    margins: '5 5 5 5',
	region: 'center', // a center region is ALWAYS required for border layout
    deferredRender: false,   
    alias: 'widget.CenterPanel',
    layout: 'absolute',
    
    requires:['FB.view.DesignControl'],
	 /**
     * This function is used to init it own component and call parent arguments
     * 
     * @author Nam Hoang
     * 
     * @return void
     */
    initComponent: function() {		
		this.callParent(arguments);
		
		//Ext.get(document).on('keypress', function(e,f,g,h){
			//console.log(e.getKey(), e.getCharCode());
		//});
		
		var nav = new Ext.util.KeyNav(Ext.get(document), {
				    "del" : function(e){
				        //this.moveLeft(e.ctrlKey);
				        //console.log(FB.view.DesignControl.selectedControl);
				        if(FB.view.DesignControl.selectedControl)
				        	this.remove(FB.view.DesignControl.selectedControl.ctr, true);
				    },
				    scope : this
		});
    },
    
    listeners: {
        render: function(grid){
        	
        	grid.dropZone = Ext.create('Ext.dd.DropZone', grid.el, {

                getTargetFromEvent: function(e) {                	
                    return grid.el;
                },
                

                onNodeOver : function(target, dd, e, data){                	
                    return Ext.dd.DropZone.prototype.dropAllowed;
                },

                onNodeDrop : function(target, dd, e, data){
                	//console.log(e, grid,e.getX()-grid.el.getX());
                	var x = e.getX()-grid.el.getX(),
                		y=e.getY()-grid.el.getY();
                	
                	if(data.isDesign){
                		data.control.setPosition(x,y);
                		
                		data.control.designControl.oCfg.x = x;
                		data.control.designControl.oCfg.y = y;
                	}
                	else{
                	
	                	var cdt = Ext.clone(data.controlData);
	                	cdt.x = x;
	                	cdt.y = y;
	                	
	                	var c = Ext.create('FB.view.DesignControl',{cdt : cdt});
	                	                	
	                	grid.add(c.ctr);
                	}
                    return true;
                }
            });
        }
    }
    
});