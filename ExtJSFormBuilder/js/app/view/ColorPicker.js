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
        //return this.parseDate(rawValue) || rawValue || null;
    	//return this.getValue();
    	return rawValue;
    },

    valueToRaw: function(value) {
        //return this.formatDate(this.parseDate(value));
    	return this.picker === undefined ? "" : this.picker.getValue();
    },
    

    // @private
    getSubmitValue: function() {
        /*var me = this,
            format = me.submitFormat || me.format,
            value = me.getValue();

        return value ? Ext.Date.format(value, format) : null;*/
    	
    	return this.picker.getValue();
    },

    /**
     * @private
     * Creates the {@link Ext.picker.Time}
     */
    createPicker: function() {    	
        var me = this,
            picker = Ext.create('Ext.picker.Color', {
                floating: true,
                hidden: true,
                ownerCt: this.ownerCt,
                renderTo: document.body,
                focusOnToFront: true               
            });

        picker.mon('select', function(){
        	console.log('select');
        });
        return picker;
    },

    /**
     * @private
     * Enables the key nav for the Time picker when it is expanded.
     * TODO this is largely the same logic as ComboBox, should factor out.
     */
    onExpand: function() {
    	this.picker.setSize({height: 200});
    	this.callParent();
       /* var me = this,
            keyNav = me.pickerKeyNav,
            selectOnTab = me.selectOnTab,
            picker = me.getPicker(),
            lastSelected = picker.getSelectionModel().lastSelected,
            itemNode;

        if (!keyNav) {
            keyNav = me.pickerKeyNav = Ext.create('Ext.view.BoundListKeyNav', this.inputEl, {
                boundList: picker,
                forceKeyDown: true,
                tab: function(e) {
                    if (selectOnTab) {
                        if(me.picker.highlightedItem) {
                            this.selectHighlighted(e);
                        } else {
                            me.collapse();
                        }
                        me.triggerBlur();
                    }
                    // Tab key event is allowed to propagate to field
                    return true;
                }
            });
            // stop tab monitoring from Ext.form.field.Trigger so it doesn't short-circuit selectOnTab
            if (selectOnTab) {
                me.ignoreMonitorTab = true;
            }
        }
        Ext.defer(keyNav.enable, 1, keyNav); //wait a bit so it doesn't react to the down arrow opening the picker

        // Highlight the last selected item and scroll it into view
        if (lastSelected) {
            itemNode = picker.getNode(lastSelected);
            if (itemNode) {
                picker.highlightItem(itemNode);
                picker.el.scrollChildIntoView(itemNode, false);
            }
        }*/
    },

    /**
     * @private
     * Disables the key nav for the Time picker when it is collapsed.
     */
    onCollapse: function() {
    	console.log('onCollapse');
        /*var me = this,
            keyNav = me.pickerKeyNav;
        if (keyNav) {
            keyNav.disable();
            me.ignoreMonitorTab = false;
        }*/
    	this.callParent();
    },

    /**
     * @private
     * Clears the highlighted item in the picker on change.
     * This prevents the highlighted item from being selected instead of the custom typed in value when the tab key is pressed.
     */
    onChange: function() {
    	//console.log('onChange');
       /* var me = this,
            picker = me.picker;

        me.callParent(arguments);
        if(picker) {
            picker.clearHighlight();
        }*/
    	this.callParent();
    },

    /**
     * @private
     * Handles a time being selected from the Time picker.
     */
    onListSelect: function(list, recordArray) {
       /* var me = this,
            record = recordArray[0],
            val = record ? record.get('date') : null;
        me.setValue(val);
        me.fireEvent('select', me, val);
        me.picker.clearHighlight();
        me.collapse();
        me.inputEl.focus();*/
    }
});