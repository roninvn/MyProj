USitISit.views.MyCircleForm = Ext.extend(Ext.Panel, {    
    scroll: 'vertical',
	fullscreen: true,
	styleHtmlContent:true,
	dockedItems: [{
		xtype: 'toolbar',
        dock: 'top',
        title: 'USitISit',
        items:[{
            text: 'Back to Dashboard',
            handler: function(){
            	USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
            }
        }]
	},{
		xtype: "toolbar",
		dock : "bottom",		
		title: "Ad"
	}],

    items: [{html: "My Circle",style:{'text-align':'center'}
    	},{
    		xtype:"panel",
		    layout: {
		        	    type: 'hbox',
		        	    align: 'center'
		        	},
		     items:[{		        		
		        		xtype:'button',
		        		text:'Invite',
		        		html:'<div style="position: absolute; bottom: 0;">Add friends to my circle</div>',
		        		style:{'margin-left': '20%','margin-right': '20%','margin-top': '-40px'}
		        	},{		        		
		        		xtype:'button',
		        		text:'Invitation Received'
		        	}]
		}]
});

Ext.reg('MyCircleForm', USitISit.views.MyCircleForm);