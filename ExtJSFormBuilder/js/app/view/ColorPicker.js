Ext.define('Ext.form.field.ColorPicker', {
    extend:'Ext.form.field.Picker',
    alias: 'widget.timefield',
    requires: ['Ext.picker.Color'],
    alternateClassName: ['Ext.form.ColorPicker', 'Ext.form.ColorPicker'],

    
    initComponent: function() {
        var me = this;
        this.callParent();
    },

    initValue: function() {
        var me = this;
        me.callParent();
    },   

    rawToValue: function(rawValue) {
    	return rawValue;
    },

    valueToRaw: function(value) {
    	return this.picker === undefined ? "" : this.picker.getValue();
    },
    

    // @private
    getSubmitValue: function() {    	
    	return this.picker.getValue();
    },

    createPicker: function() {    	
        var me = this,
            picker = Ext.create('Ext.picker.Color', {
                floating: true,
                hidden: true,
                ownerCt: this.ownerCt,
                renderTo: document.body,
                focusOnToFront: true,
                listeners:{
                	select: function(){
                		me.setValue(picker.getValue());
                		me.collapse();
                	}
                }
            });
        return picker;
    },

    onExpand: function() {
    	this.picker.setSize({height: 200});
    	this.callParent();       
    },
    onCollapse: function() {
    	this.callParent();
    },

    onChange: function() {    	
    	this.callParent();
    }
});