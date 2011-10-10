/*
 * Create Invitation Form
 * 
 */
USitISit.views.LoginForm = Ext.extend(Ext.form.FormPanel, {    
    scroll: 'vertical',
	fullscreen: true,
    items: [{
    		html:'<img src="img/babysitter.jpg"><img>',
    		style: 'width:100%; height: 70%;',
    	},{
    		 xtype: 'fieldset',
             title: 'Login:',
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
            	 label:"Save info and log in automatically next time"
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
    	}],
    
    initComponent: function() {
    	USitISit.views.InvitationForm.superclass.initComponent.apply(this, arguments);
    	this.doLayout();
   }
});

Ext.reg('LoginForm', USitISit.views.LoginForm);