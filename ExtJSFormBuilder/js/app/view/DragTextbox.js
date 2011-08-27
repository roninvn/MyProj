/*
 * @author Nam Hoang
 */
Ext.define('FB.view.DragTextbox', {
	
	extend: 'FB.view.DragControl',
	
	constructor: function (config) {
		this.elStr =  '<h1 style="cursor:move">The title</h1><p>Textbox</p>';
		
		this.callParent(arguments);
    }
});