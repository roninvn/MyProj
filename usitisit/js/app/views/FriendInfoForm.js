USitISit.views.FriendInfoForm = Ext.extend(Ext.Panel, {    
    scroll: 'vertical',
	fullscreen: true,
	styleHtmlContent:true,
	dockedItems: [{
		xtype: 'toolbar',
        dock: 'top',
        title: 'USitISit',
        items:[{
            text: 'Back to My Circle',
            handler: function(){
            	USitISit.viewport.setActiveItem(USitISit.views.MyCircleForm);
            }
        }]
	},{
		xtype: "toolbar",
		dock : "bottom",		
		title: "Ad"
	}],

    items: [{
    			xtype:'panel',
    			layout: {
		        	    type: 'hbox'
		        },
		        items:[{
		        	html:"<b>Sit Request</b> 10/29 00:00"
		        },{
		        	xtype:'button',
		        	text:'Go to Friends\' request',
                       style:{'position': 'absolute',right: 0, width:'80px', height: '50px'}
		        }]
    	},{
    		html: "<div style='text-align:center;'><b>Friends' name<br /> 6 points <br /></b>Street Address Town ST</div>",
    		style:{'margin-top': '30px'}
    	},{
    			xtype:'panel',
    			layout: {
		        	    type: 'hbox'
		        },
                style:{'margin-top': '10px'},
		        items:[{
		        	xtype:'button',
		        	text:'Call..',
                    style:{'margin-left': '15px'}
		        },{
		        	xtype:'button',
		        	text:'Message..',
                    style:{'margin-left': '15px'}
		        },{
		        	xtype:'button',
		        	text:'Email..',
                    style:{'margin-left': '15px'}
		        }]
    	},{
    			xtype:'panel',
    			layout: {
		        	    type: 'hbox'
		        },
                style:{'margin-top': '10px'},
		        items:[{
		        	xtype:'button',
		        	text:'Delete from My Circle..',
                    style:{'margin-left': '0px'}
		        },{
		        	xtype:'button',
		        	text:'See Friends\' circle',
                    style:{'margin-left': '5px'}
		        }]
    	}]
});

Ext.reg('FriendInfoForm', USitISit.views.FriendInfoForm);