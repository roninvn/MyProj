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
    },
    
    listeners: {
        render: function(grid){
        	
        	grid.dropZone = Ext.create('Ext.dd.DropZone', grid.el, {

//              If the mouse is over a target node, return that node. This is
//              provided as the "target" parameter in all "onNodeXXXX" node event handling functions
                getTargetFromEvent: function(e) {                	
                    return grid.el;
                },
                
//              While over a target node, return the default drop allowed class which
//              places a "tick" icon into the drag proxy.
                onNodeOver : function(target, dd, e, data){                	
                    return Ext.dd.DropZone.prototype.dropAllowed;
                },

//              On node drop, we can interrogate the target node to find the underlying
//              application object that is the real target of the dragged data.
//              In this case, it is a Record in the GridPanel's Store.
//              We can use the data set up by the DragZone's getDragData method to read
//              any data we decided to attach.
                onNodeDrop : function(target, dd, e, data){
                	//console.log(e, grid,e.getX()-grid.el.getX());
                	var x = e.getX()-grid.el.getX(),
                		y=e.getY()-grid.el.getY();
                	
                	if(data.isDesign){
                		data.control.setPosition(x,y);
                	}
                	else{
                	
	                	var cdt = data.controlData;
	                	
	                	var c = Ext.create('FB.view.DesignControl',{
	                		x: x,
	                		y: y,
	                		label: cdt.label,
	                		extClass: cdt.extClass
	                	});
	                	                	
	                	grid.add(c.ctr);
                	}
                    return true;
                }
            });
        }
    }
    
});