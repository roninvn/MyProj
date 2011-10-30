/**
 * This file will define a left panel and dock it to the viewport
 *
 * @author Nam Hoang
 */
Ext.define('FB.view.LeftPanel', {
	extend : 'Ext.panel.Panel',
	region : 'west',
	id : 'west-panel',
	title : 'Controls',
	split : true,
	width : 150,
	minWidth : 150,
	maxWidth : 400,
	autoHeight : true,
	collapsible : true,
	animCollapse : true,
	margins : '0 0 0 5',
	layout : 'accordion',
	alias : 'widget.LeftPanel',

	requires : ['FB.model.MenuModel'],

	items : [{
		title : 'Design',
		layout : 'vbox',
		listeners : {
			render : function(c) {

				var controls = [{
					name : 'Textbox',
					extClass : 'Ext.form.field.Text',
					src : "img/textbox.JPG",
					cfg : {
						Label : 'Textbox',
						"Allow blank" : true,
						Validation : "",
						"Label Color" : "",
						Datasource : '',
						"Field Color" : "",
						"Label Style" : "",
						"Field Style" : ""
					}
				}];

				var controlsStore = Ext.create('Ext.data.Store', {
					model : 'FB.model.MenuModel',
					data : controls
				});

				var controlsView = Ext.create('Ext.view.View', {
					tpl : '<tpl for=".">' + '<div class="control-source" style="cursor:move"><img src = "{src}" style = "width:75px;" /></div>' + '</tpl>',

					itemSelector : 'div.control-source',

					singleSelect : true,

					store : controlsStore,

					listeners : {
						render : function(v) {
							
							var sprite, drawComponent;
							
							v.dragZone = Ext.create('Ext.dd.DragZone', v.getEl(), {

								getDragData : function(e) {									
									var sourceEl = e.getTarget(v.itemSelector, 10), d;
									//console.log(sourceEl);
									if(sourceEl) {
										var se = sourceEl.cloneNode(false);										
										
										drawComponent = Ext.create('Ext.draw.Component', {
										    width: 100,
										    height: 100,
										    renderTo: se,
										    autoShow: true,
										    toFrontOnShow: true
										});
										
										drawComponent.id = Ext.id();
										
										sprite = drawComponent.surface.add({
										    type: 'circle',
										    fill: 'black',
										    radius: 100
										});
										
										sprite.show(true);	
										
										return v.dragData = {
											sourceEl : sourceEl,
											repairXY : Ext.fly(sourceEl).getXY(),
											ddel : se,
											controlData : v.getRecord(sourceEl).data
										};
									}
								},
								getRepairXY : function(e) {									
									return this.dragData.repairXY;
								},
								
								onDrag:function(e){
									var x = e.getX();
									
									if(x > 100 && sprite.attr.fill != 'blue'){		
										
										sprite.setAttributes({fill: 'blue'}, true);	
										
										console.log(v.dragZone.dragData.ddel);
										
									}
									
									
									//sprite.redraw();
									
									//console.log(e.getX(),sprite);
								}
							});
						}
					}
				});

				c.add(controlsView);
			}//end render event
		}
	}], //end items

	initComponent : function() {

		//this.items = [controlsView];
		this.callParent(arguments);
	}
});
