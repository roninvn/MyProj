/**
 * This file will define a left panel and dock it to the viewport 
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.LeftPanel', {
	extend: 'Ext.panel.Panel',
    region: 'west',
	id: 'west-panel', 
	title: 'West',
	split: true,
	width: 150,
	minWidth: 150,
	maxWidth: 400,
	autoHeight: true,
	collapsible: true,
	animCollapse: true,
	margins: '0 0 0 5',
	layout: 'vbox',
    alias: 'widget.LeftPanel',
    
    requires: ['FB.model.MenuModel'],
    
    initComponent: function() {
    	
        var controls = [{
			            name: 'Textbox',
			            extClass: 'Ext.form.field.Text',			            
			            cfg:{Label:'Textbox'			            	 
			            	}
        				},
        				{
    			            name: 'Checkbox',
    			            extClass: 'Ext.form.field.Checkbox',
    			            cfg:{Label:'Checkbox'}
            			},
            			{
    			            name: 'DateField',
    			            extClass: 'Ext.form.field.Date',
    			            cfg:{Label:'DateField'}
            			},
            			{
    			            name: 'Radio',
    			            extClass: 'Ext.form.field.Radio',
    			            cfg:{Label:'Radio'}
            			},
            			{
    			            name: 'Combobox',
    			            extClass: 'Ext.form.field.ComboBox',
    			            cfg:{Label:'Combobox'
    			            	}
            			}
        				];         

        var controlsStore = Ext.create('Ext.data.Store', {
            model: 'FB.model.MenuModel',
            data: controls
        });
        
        var controlsView = Ext.create('Ext.view.View', {        	
            tpl: '<tpl for=".">' +
            		'<div class="control-source" style="cursor:move"><h1>The title</h1><p>{name}</p></div>' +
                 '</tpl>',
            
            itemSelector: 'div.control-source',
            
            singleSelect: true,
            
            store: controlsStore,
            
            listeners: {
                render: function(v){
                    v.dragZone = Ext.create('Ext.dd.DragZone', v.getEl(), {

                        getDragData: function(e) {
                            var sourceEl = e.getTarget(v.itemSelector, 10), d;
                            if (sourceEl) {
                                d = sourceEl.cloneNode(true);
                                d.id = Ext.id();
                                return v.dragData = {
                                    sourceEl: sourceEl,
                                    repairXY: Ext.fly(sourceEl).getXY(),
                                    ddel: d, 
                                    controlData: v.getRecord(sourceEl).data
                                };
                            }
                        },


                        getRepairXY: function() {
                            return this.dragData.repairXY;
                        }
                    });
                }
            }
        });
        this.items = [controlsView];
        this.callParent(arguments);
    }
});