/*
 * @author Nam Hoang
 */
Ext.define('FB.view.DemoViewport', {
	extend : 'Ext.container.Viewport',

	requires : [ 'Ext.layout.container.Border', 'FB.view.AutoForm' ],

	layout : 'fit',
	items : [ {
		id : 'autoform',
		xtype : 'AutoForm',
		listeners : {
			afterrender : function() {

				var arr = [ {
					"name" : "Checkbox",
					"extClass" : "Ext.form.field.Checkbox",
					"src" : "img/checkbox.JPG",
					"cfg" : {
						"Label" : "asdasd",
						"Label Color" : "FF0000",
						"Datasource" : "",
						"Label Style" : "Bold,Underline"
					},
					"x" : 52,
					"y" : 22,
					"size" : {
						"width" : 120,
						"height" : 40
					},
					"pos" : [ 170, 20 ]
				} ];

				this.loadForm(arr);

			}
		}
	} ]
});
