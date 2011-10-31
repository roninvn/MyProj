Ext.define('Flower.view.ux.ImageControl', {
    extend: 'Ext.form.field.Base',
    alias: ['widget.img'],
    requires: ['Ext.XTemplate'],
    
    fieldSubTpl: [
        '<img  class="custimg"></img>',
        {
            disableFormats: true,
            compiled: true
        }
    ],


    initComponent: function(){
        this.callParent(arguments);
        //if(this.src)
       // 	this.setSrc(this.src);
    },
    
    setSrc: function(src){
    	this.getEl().down(".custimg").set({src: src});
    }


});