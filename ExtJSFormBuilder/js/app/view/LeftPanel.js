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
			            cfg:{Label:'Textbox', "Allow blank" : true, Validation : ""
			            	}
        				},
        				{
    			            name: 'Checkbox',
    			            extClass: 'Ext.form.field.Checkbox',
    			            src: "img/checkbox.JPG",
    			            cfg:{Label:'Checkbox'}
            			},
            			{
    			            name: 'DateField',
    			            extClass: 'Ext.form.field.Date',
    			            src: "img/datefield.JPG",
    			            cfg:{Label:'DateField', "Allow blank" : true}
            			},
            			{
    			            name: 'Radio',
    			            extClass: 'Ext.form.field.Radio',
    			            src: "img/radio.JPG",
    			            cfg:{Label:'Radio'}
            			},
            			{
    			            name: 'Combobox',
    			            extClass: 'Ext.form.field.ComboBox',
    			            src: "img/combobox.JPG",
    			            cfg:{Label:'Combobox'}
            			},
            			{
    			            name: 'Button',
    			            extClass: 'Ext.button.Button',
    			            src: "img/button.JPG",
    			            cfg:{Text:'Button'}
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
        
        var txtArea = Ext.create('Ext.form.field.TextArea', {
												        	grow      : false,
												            name      : 'json',
												            anchor    : '100%'});
        
        var btn = Ext.create('Ext.Button', {
            text: 'Send',            
            handler: function() {
            	
            	var items = Ext.getCmp('centerpanel').items;
            	var cfgs = [];
            	items.each(function(itm, i, l){
            		//console.log(itm.designControl);
            		cfgs.push(itm.designControl.oCfg);
            		
            	});
            	
            	//console.log(Ext.JSON.encode(cfgs));
            	
            	//var c = Ext.create('FB.view.DesignControl',{cdt : cfgs[0]});            	
            	//Ext.getCmp('centerpanel').add(c.ctr);
            	
            	txtArea.setValue(Ext.JSON.encode(cfgs));
                
            }
        });
        
        var btn2 = Ext.create('Ext.Button', {
            text: 'Build',            
            handler: function() {
            	
            	var cfgs = Ext.JSON.decode(txtArea.getValue());
            	var  p = Ext.getCmp('centerpanel');
            	
            	p.removeAll(true);
            	
            	for(var i=0 ; i<cfgs.length; i++){
                	var c = Ext.create('FB.view.DesignControl',{cdt : cfgs[i]});            	
                	p.add(c.ctr);
            	}
            	
            }
        });
        
        this.items = [controlsView,txtArea, btn,btn2];
        this.callParent(arguments);
    }
});