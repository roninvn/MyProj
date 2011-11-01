Ext.define('FB.view.ImageControl', {
    extend: 'Ext.form.field.Base',
    alias: ['widget.img'],
    requires: ['Ext.XTemplate'],
    
    fieldSubTpl: [
        '<img  style="width:100%;height:100%" class="custimg"></img>',
        {
            disableFormats: true,
            compiled: true
        }
    ],


    initComponent: function(){
        this.callParent(arguments);
    },
    
    setSrc: function(src){
    	var img = this.getEl().down(".custimg");
    	if(src == "" || src == null)
    		img.dom.removeAttribute("src");
    	else
    		img.set({src: src});    	
    }

});