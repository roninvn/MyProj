USitISit.views.DashboardForm = Ext.extend(Ext.form.FormPanel, {    
    scroll: 'vertical',
	fullscreen: true,
	dockedItems: [{
		xtype: 'toolbar',
        dock: 'top',
        title: 'USitISit',
        items: [
                {
                    text: 'Account'
                },{xtype: 'spacer'},
                {
                    text: 'My profile',
                    align: 'right'
                }
            ]
	},{
		xtype: "toolbar",
		dock : "bottom",		
		title: "Ad"
	}],

    items: [{
    	html:"Dashboard",
    	style: 'margin:2%;text-align:center'
    },{
    	xtype:"panel",
    	border: "1",
    	layout: {
    	    type: 'hbox',
    	    align: 'left'
    	},
    	items:[{
    		html: '8 points',
    		width: "30%"
    		
    	},{
    		html:"<ul><li>*2 friends' requests</li><li>*1 requested sitter</li><li>*1 upcoming sit</li><li>*1 circle invitation</li></ul>"    		
    	}]
    },{
    	xtype:"panel",
    	border: "1",
    	layout: {
    	    type: 'hbox',
    	    align: 'left'
    	},
    	items:[{
    		xtype:"button",
    		text: "Reques A Sitter",
    		handler: function(){
    			USitISit.viewport.setActiveItem(USitISit.views.ReqSitterForm);
    		}
    	},{
    		xtype:"button",
    		text: "Friends' Requests",
    		handler: function(){
    			USitISit.viewport.setActiveItem(USitISit.views.FriendReqForm);
    		}
    	}]
    },{
    	xtype:"panel",
    	border: "1",
    	layout: {
    	    type: 'hbox',
    	    align: 'left'
    	},
    	items:[{
    		xtype:"button",
    		text: "Sit Schedule",
    		handler: function(){
    			USitISit.viewport.setActiveItem(USitISit.views.SitScheduleForm);
    		}
    	},{
    		xtype:"button",
    		text: "My Circle"
    	}]
    }],
    
    initComponent: function() {
    	USitISit.views.DashboardForm.superclass.initComponent.apply(this, arguments);    	
   }
});

Ext.reg('DashboardForm', USitISit.views.DashboardForm);