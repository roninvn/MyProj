/*
 * @author Nam Hoang
 */
Ext.define('FB.view.DragControl', {
	
	elStr: '<h1 style="cursor:move">The title</h1><p>The content</p>',
	
	ctr: null,
	
	constructor: function (config) {
		this.ctr = new Ext.Component({
			    constrain: true,
			    floating: true,
			    style: {
			        backgroundColor: '#fff',
			        border: '1px solid black'
			    },
			    html: this.elStr,
			    draggable: {
			    				constrain: true,
			    				constrainTo: 'centerpanel',
						    	startDrag : function(){
						            this.constrainTo("centerpanel");
						        }
			    		}
			});
		
		this.ctr.show();
	
    }
});