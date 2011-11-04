Ext.define('Flower.view.ux.ImageControl', {
    extend: 'Ext.form.field.Base',
    alias: ['widget.ImageControl'],
    requires: ['Ext.XTemplate'],
    
    fieldSubTpl: [
    	'<div class="ImageControlToolbar"></div>',
        '<img  class="imageControl"></img>',
        {
            disableFormats: true,
            compiled: true
        }
    ],
    
    width: 100,
    height: 100,
    
    listeners: {
    	
    	render: function(img){
    		
    		this.getEl().down('.imageControl').on('click', function(){
    			img.onSelect();
    		});
    		   		
    		this.draggable = {
    			constrain: true,
    			constrainTo : Ext.get(Ext.query("#centerpanel")[0]),
    			listeners: {
    				drag: function(e){    					
    					img.onDragAround(e);    					
    				}
    			}
    		};
    	},//end render event
    	
    	destroy: function(){
    		MessageBus.unsubscribe('ImageControl.BeforeSelectAnImage', this.beforeSelectAnImage, this);
    	}//end destroy event    	
    },
    
    initComponent: function(){
    	this.isSelected = false;
        this.callParent(arguments);
         MessageBus.subscribe('ImageControl.BeforeSelectAnImage', this.beforeSelectAnImage, this);        
    },
    
    setSrc: function(src){
    	this.getEl().down(".imageControl").set({src: src});
    },
    
    /*
     * fire when control is dragged
     */
    onDragAround: function(e){
		var pos = e.getXY();
		if(pos[0] < 500){
			this.getEl().down('img').applyStyles({'-webkit-transform': 'rotate(270deg)'});
		}
		else if(pos[0] > 1000){
			this.getEl().down('img').applyStyles({'-webkit-transform': 'rotate(90deg)'});
		}
    },
    
    /*
     * Control is clicked
     */
    onSelect: function(){
    	MessageBus.publish('ImageControl.BeforeSelectAnImage');
    	this.getEl().down('.imageControl').addCls('imgSelected');
    	this.isSelected = true;
    },
    
    deSelect: function(){
    	this.getEl().down('.imageControl').removeCls('imgSelected');
    	this.isSelected = false;
    },
    
    beforeSelectAnImage: function(){
    	//console.log(sc,sb, img);
    	this.deSelect(); //deselect before other control is selected
    }


});