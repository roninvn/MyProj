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
				}, {
					name : 'Checkbox',
					extClass : 'Ext.form.field.Checkbox',
					src : "img/checkbox.JPG",
					cfg : {
						Label : 'Checkbox',
						"Label Color" : "",
						Datasource : '',
						"Label Style" : ""
					}
				}, {
					name : 'DateField',
					extClass : 'Ext.form.field.Date',
					src : "img/datefield.JPG",
					cfg : {
						Label : 'DateField',
						"Allow blank" : true,
						"Label Color" : "",
						Datasource : '',
						"Field Color" : "",
						"Label Style" : "",
						"Field Style" : ""
					}
				}, {
					name : 'Radio',
					extClass : 'Ext.form.RadioGroup',
					src : "img/radio.JPG",
					cfg : {
						Label : 'Radio',
						Items : "Radio1,Radio2",
						"Label Color" : "",
						Datasource : '',
						"Label Style" : ""
					}
				}, {
					name : 'Combobox',
					extClass : 'Ext.form.field.ComboBox',
					src : "img/combobox.JPG",
					cfg : {
						Label : 'Combobox',
						Datasource : '',
						"Label Color" : "",
						Datasource : '',
						"Field Color" : "",
						"Label Style" : "",
						"Field Style" : ""
					}
				}, {
					name : 'Button',
					extClass : 'Ext.button.Button',
					src : "img/button.JPG",
					cfg : {
						Text : 'Button',
						Datasource : '',
						Action : ''
					}
				}, {
					name : 'Label',
					extClass : 'Ext.form.Label',
					src : "img/label.JPG",
					cfg : {
						Text : 'Label',
						"Label Color" : "",
						Datasource : '',
						"Label Style" : ""
					}
				}, {
					name : 'File',
					extClass : 'Ext.form.field.File',
					src : "img/file.JPG",
					cfg : {
						Label : 'Upload file',
						"Label Color" : "",
						Datasource : '',
						"Field Color" : "",
						"Label Style" : "",
						"Field Style" : ""
					}
				}, {
					name : 'Textarea',
					extClass : 'Ext.form.field.TextArea',
					src : "img/textarea.JPG",
					cfg : {
						Label : 'Text area',
						"Label Color" : "",
						Datasource : '',
						"Field Color" : "",
						"Label Style" : "",
						"Field Style" : ""
					}
				}, {
					name : 'Timefield',
					extClass : 'Ext.form.field.Time',
					src : "img/timefield.JPG",
					cfg : {
						Label : 'Time',
						"Label Color" : "",
						Datasource : '',
						"Field Color" : "",
						"Label Style" : "",
						"Field Style" : ""
					}
				}, {
					name : 'HTMLEditor',
					extClass : 'Ext.form.field.HtmlEditor',
					src : "img/htmleditor.JPG",
					cfg : {
						Label : 'Html editor',
						"Label Color" : "",
						"Label Style" : ""
					}
				}, {
					name : 'VertLine',
					extClass : 'Ext.form.field.VertLine',
					src : "img/VertLine.jpg",
					cfg : {
						"Line Color" : "",
						size : {
							width : 2,
							height : 70
						}
					}
				}, {
					name : 'HorzLine',
					extClass : 'Ext.form.field.VertLine',
					src : "img/HorzLine.jpg",
					cfg : {
						"Line Color" : "",
						size : {
							width : 70,
							height : 2
						}
					}
				}, {
					name : 'Image',
					extClass : 'FB.view.ImageControl',
					src : "img/image.png",
					cfg : {
						"Image Source" : "",
						size : {
							width : 40,
							height : 40
						}
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
							v.dragZone = Ext.create('Ext.dd.DragZone', v.getEl(), {

								getDragData : function(e) {
									var sourceEl = e.getTarget(v.itemSelector, 10), d;
									if(sourceEl) {
										d = sourceEl.cloneNode(true);
										d.id = Ext.id();
										return v.dragData = {
											sourceEl : sourceEl,
											repairXY : Ext.fly(sourceEl).getXY(),
											ddel : d,
											controlData : v.getRecord(sourceEl).data
										};
									}
								},
								getRepairXY : function() {
									return this.dragData.repairXY;
								}
							});
						}
					}
				});

				c.add(controlsView);
			}//end render event
		}
	}, {
		xtype : 'treepanel',
		title: 'Templates',
		store: Ext.create('Ext.data.TreeStore'),		
		listeners:{
			render: function(tree, e){
				//load templates
				
				Ext.Ajax.request({
					url : 'data/templates.json',
					success : function(response) {
						var text = response.responseText;
						var obj = Ext.JSON.decode(text);
						
						if(obj.success){
							//build store
							var data = [];
							
							for(var i=0; i<obj.templates.length; i++){
								var tmpl = obj.templates[i];
								var grp = {text: tmpl.name, children: []};								
								data.push(grp);
								for(var j=0; j<tmpl.forms.length; j++){
									var frm  = tmpl.forms[j];
									var child = {text: frm.name, leaf: true, controls: Ext.JSON.decode(frm.controls)};
									grp.children.push(child);
								}
							}//end for							

							//build tree
							//tree.getStore().setRootNode(data);
							//tree.getStore().load();
							//console.log(tree.getStore());
							//tree.store = store;
							//store.load();
							
							tree.setRootNode({
									text: 'Templates',
							        expanded: true,
							        children: data
							 });
							
						}//end if

					}//end success
				});
				
			},
			
			itemdblclick: function(tree, record){
				console.log(record);
			}
		}
	}], //end items

	initComponent : function() {

		//this.items = [controlsView];
		this.callParent(arguments);
	}
});
