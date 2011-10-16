/*
 * Create Invitation Form
 * 
 */
USitISit.views.LoginForm = Ext.extend(Ext.Panel, {    
    //scroll: 'vertical',
	fullscreen: true,
	styleHtmlContent:true,
	layout:{
		type:'vbox',
        align:'stretch'
	},
    items: [{
    		html:'<img src="img/usitisit-launch-image.png" style="height:100%;width:100%;" />',
            height:'38%',
            width:'100%'
    	},{
    		 xtype: 'fieldset',
             title: 'Login:',
             layout:{
				type:'vbox',
				align:'left'
			},
             items: [{
                 xtype: 'textfield',
                 id: 'txtEmail',
                 placeHolder: "Email address"
             },{
                 xtype: 'passwordfield',
                 id: 'txtPassword',
                 placeHolder: "Password"
             },{
            	 xtype:"togglefield",
            	 label:"Save info and log in automatically next time",
            	 labelAlign : 'right',
            	 style:{'-webkit-box-pack':'start'}
             },{
            	 xtype:"button",
            	 text:"Done",
            	 handler: function() {
            		 USitISit.viewport.setActiveItem(USitISit.views.DashboardForm);
            	 }
             },{
            	 xtype:"button",
            	 text:"Registration",
            	 handler: function() {
                     USitISit.viewport.setActiveItem(USitISit.views.RegistrationForm);
                 }
             }]
    	}]
});

Ext.reg('LoginForm', USitISit.views.LoginForm);