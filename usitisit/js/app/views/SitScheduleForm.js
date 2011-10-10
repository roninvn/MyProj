USitISit.views.SitScheduleForm = Ext.extend(Ext.form.FormPanel, {    
    scroll: 'vertical',
	fullscreen: true,
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

    items: [{html: "Friends' Sitter Requests"
    		},{
		    	xtype: "button",
		    	title: "Check Calendar"
		    	
    		},{
		    	xtype: "fieldset",
		    	title: "Friend's Name",
		    	items:[{html:"Saturday, 10/29; 6:30pm - 11:00pm <br />123 Street Name, Anytown<br />Point Value: 4.5"},{
		        	xtype:"panel",
		        	border: "1",
		        	layout: {
		        	    type: 'hbox',
		        	    align: 'left'
		        	},
		        	items:[{		        		
		        		html: "You are sitting"
		        	},{
		        		xtype:"button",
		        		text: "Change"
		        	}]
		        }]
		    },{
		    	xtype: "fieldset",
		    	title: "Friend's Name",
		    	items:[{html:"Saturday, 10/29; 6:30pm - 11:00pm <br />123 Street Name, Anytown<br />Point Value: 3"},{
		        	xtype:"panel",
		        	border: "1",
		        	layout: {
		        	    type: 'hbox',
		        	    align: 'left'
		        	},
		        	items:[{		        		
		        		html: "You are sitting"
		        	},{
		        		xtype:"button",
		        		text: "Change"
		        	}]
		        }]
		    }],
    
    
    initComponent: function() {
    	USitISit.views.SitScheduleForm.superclass.initComponent.apply(this, arguments);    	
   }
});

Ext.reg('SitScheduleForm', USitISit.views.SitScheduleForm);