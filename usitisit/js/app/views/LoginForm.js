/*
 * Create Invitation Form
 * 
 */
USitISit.views.LoginForm = Ext.extend(Ext.form.FormPanel, {    
    //scroll: 'vertical',
	fullscreen: true,
	styleHtmlContent:true,
	layout:{
		type:'vbox'
	},
    items: [{
    		html:'<img src="img/babysitter.jpg" />'
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