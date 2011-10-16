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
    		html:'<img src="img/USitISit-icon-512x512.png" style="height:150px;width:150px" />',
            height:'38%',
            width:'100%',
            style:{'text-align': 'center'}
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