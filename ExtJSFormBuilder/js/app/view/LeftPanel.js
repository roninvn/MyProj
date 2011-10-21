/**
 * This file will define a left panel and dock it to the viewport 
 * 
 * @author Nam Hoang
 */
Ext.define('FB.view.LeftPanel', {
	extend: 'Ext.panel.Panel',
    region: 'west',
	id: 'west-panel', 
	title: 'Controls',
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
			            src: "img/textbox.JPG",
			            cfg:{Label:'Textbox', "Allow blank" : true, Validation : "", "Label Color":"",Datasource:'', "Field Color":"", 
			            		"Label Style":"", "Field Style":""}
        				},
        				{
    			            name: 'Checkbox',
    			            extClass: 'Ext.form.field.Checkbox',
    			            src: "img/checkbox.JPG",
    			            cfg:{Label:'Checkbox', "Label Color":"",Datasource:'',"Label Style":""}
            			},
            			{
    			            name: 'DateField',
    			            extClass: 'Ext.form.field.Date',
    			            src: "img/datefield.JPG",
    			            cfg:{Label:'DateField', "Allow blank" : true, "Label Color":"",Datasource:'',"Field Color":""
    			            		,"Label Style":"", "Field Style":""}
            			},
            			{
    			            name: 'Radio',
    			            extClass: 'Ext.form.RadioGroup',
    			            src: "img/radio.JPG",
    			            cfg:{Label:'Radio', Items:"Radio1,Radio2", "Label Color":"",Datasource:'',"Label Style":""}
            			},
            			{
    			            name: 'Combobox',
    			            extClass: 'Ext.form.field.ComboBox',
    			            src: "img/combobox.JPG",
    			            cfg:{Label:'Combobox', Datasource:'', "Label Color":"",Datasource:'',"Field Color":"",
    			            		"Label Style":"", "Field Style":""}
            			},
            			{
    			            name: 'Button',
    			            extClass: 'Ext.button.Button',
    			            src: "img/button.JPG",
    			            cfg:{Text:'Button', Datasource:'', Action: ''}
            			},
            			{
    			            name: 'Label',
    			            extClass: 'Ext.form.Label',
    			            src: "img/label.JPG",
    			            cfg:{Text:'Label', "Label Color":"",Datasource:'',"Label Style":""}
            			},
            			{
    			            name: 'File',
    			            extClass: 'Ext.form.field.File',
    			            src: "img/file.JPG",
    			            cfg:{Label:'Upload file', "Label Color":"",Datasource:'', "Field Color":"","Label Style":"", "Field Style":""}
            			},
            			{
    			            name: 'Textarea',
    			            extClass: 'Ext.form.field.TextArea',
    			            src: "img/textarea.JPG",
    			            cfg:{Label:'Text area', "Label Color":"",Datasource:'', "Field Color":"","Label Style":"","Field Style":""}
            			},
            			{
    			            name: 'Timefield',
    			            extClass: 'Ext.form.field.Time',
    			            src: "img/timefield.JPG",
    			            cfg:{Label:'Time', "Label Color":"",Datasource:'', "Field Color":"","Label Style":"", "Field Style":""}
            			},
            			{
    			            name: 'HTMLEditor',
    			            extClass: 'Ext.form.field.HtmlEditor',
    			            src: "img/htmleditor.JPG",
    			            cfg:{Label:'Html editor', "Label Color":"","Label Style":""}
            			},
            			{
    			            name: 'Line',
    			            extClass: 'Ext.form.field.VertLine',
    			            src: "img/line.JPG",
    			            cfg:{"Line Color":"", size:{width:2, height:50}}
            			}
            			
        				];         

        var controlsStore = Ext.create('Ext.data.Store', {
            model: 'FB.model.MenuModel',
            data: controls
        });
        
        var controlsView = Ext.create('Ext.view.View', {        	
            tpl: '<tpl for=".">' +
            		'<div class="control-source" style="cursor:move"><img src = "{src}" style = "width:75px;" /></div>' +
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