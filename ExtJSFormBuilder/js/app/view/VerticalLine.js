Ext.define('Ext.form.field.VertLine', {
    extend: 'Ext.form.field.Base',
    alias: ['widget.vline'],
    alternateClassName: 'Ext.form.Vline',
    requires: ['Ext.XTemplate'],
    
    fieldSubTpl: [
        '<div style="width:100%;height:100%;background-color: black" class="xtraLine"></div>',
        {
            disableFormats: true,
            compiled: true
        }
    ],


    initComponent: function(){
    	this.minWidth = 2;
    	this.minHeight = 2;
        this.callParent(arguments);
    },
    
    setColor: function(color){
    	this.getEl().down(".xtraLine").applyStyles({"background-color": "#" + color});
    },

    initValue: function() {
    },

    // private
    onRender : function(ct, position) {
        var me = this;
        me.callParent(arguments);
    },

    initEvents: function() {
        var me = this;
        me.callParent();       
    },
    getRawValue: function() {
        return "";
    },

    getValue: function() {
        return "";
    },

    getSubmitValue: function() {
        return "";
    },

    setRawValue: function(value) {
        return "";
    },

    setValue: function(checked) {
        var me = this;
        return me;
    },

    // private
    valueToRaw: function(value) {        
        return value;
    },

    onChange: function(newVal, oldVal) {
        me.callParent(arguments);
    }

});