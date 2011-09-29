/**
 * This file will define a right panel and dock it to the viewport 
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.RightPanel', {
	extend: 'Ext.panel.Panel',
    region: 'east',
	id: 'right-panel',
	title: '',
	split: true,
	width: 300,
	minWidth: 175,
	maxWidth: 400,
	autoHeight: true,
	collapsible: true,
	animCollapse: true,
	margins: '0 0 0 5',
	layout: 'fit',
    alias: 'widget.RightPanel',
 
    initComponent: function() {
    	
    	var validation = Ext.create('Ext.data.Store', {
            fields: ['type'],
            data : [                
                {"type":"[No validation]"},                
                {"type":"Email"},
                {"type":"Date format"},
                {"type":"Integer"},
                {"type":"Decimal"}
            ]
        });

    	
    	var pGrid = Ext.create('Ext.grid.property.Grid', {
												    	    title: 'Properties',
												    	    id: "propGrid",
												    	    
												    	    customEditors : {
												    	    	Validation: Ext.create('Ext.form.field.ComboBox', {                                         
											                        store: validation,
											                        queryMode: 'local',
											                        displayField: 'type',
											                        valueField: 'type'
											                    }),
											                    Datasource: Ext.create('Ext.form.field.ComboBox', {                                         
											                        store: datasource,
											                        queryMode: 'local',
											                        displayField: 'src',
											                        valueField: 'src'
											                    })
												    	    },
												    	    
											                source: {
											                	
												    	    }
												    	});
    	
        this.items = [pGrid];
        this.callParent(arguments);
    }
});