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
	width: 300,
	minWidth: 175,
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
			            label:'Textbox'
        				},
        				{
    			            name: 'Checkbox',
    			            extClass: 'Ext.form.field.Checkbox',
    			            label:'Checkbox'
            			},
            			{
    			            name: 'DateField',
    			            extClass: 'Ext.form.field.Date',
    			            label:'DateField'
            			},
            			{
    			            name: 'Radio',
    			            extClass: 'Ext.form.field.Radio',
    			            label:'Radio'
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

//                      On receipt of a mousedown event, see if it is within a draggable element.
//                      Return a drag data object if so. The data object can contain arbitrary application
//                      data, but it should also contain a DOM element in the ddel property to provide
//                      a proxy to drag.
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

//                      Provide coordinates for the proxy to slide back to on failed drag.
//                      This is the original XY coordinates of the draggable element.
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