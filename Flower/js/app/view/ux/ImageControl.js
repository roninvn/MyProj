Ext.define('Flower.view.ux.ImageControl', {
    extend: 'Ext.form.field.Base',
    alias: ['widget.img'],
    requires: ['Ext.XTemplate'],
    
    fieldSubTpl: [
        '<img  class="custimg" style="width:100%;height:100%"></img>',
        {
            disableFormats: true,
            compiled: true
        }
    ],
    
    width: 100,
    height: 100,
    
    listeners: {
    	
    	render: function(img){
    		this.draggable = {
    			constrain: true,
    			constrainTo : Ext.get(Ext.query("#centerpanel")[0]),
    			listeners: {
    				drag: function(e){    					
    					img.onDragAround(e);    					
    				}
    			}
    		};
    	}
    },
    
    initComponent: function(){
        this.callParent(arguments);        
    },
    
    setSrc: function(src){
    	this.getEl().down(".custimg").set({src: src});
    },
    
    onDragAround: function(e){
		var pos = e.getXY();
		if(pos[0] < 500){
			this.getEl().down('img').applyStyles({'-webkit-transform': 'rotate(270deg)'});
		}
		else if(pos[0] > 1000){
			this.getEl().down('img').applyStyles({'-webkit-transform': 'rotate(90deg)'});
		}
    }


});