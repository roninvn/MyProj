/*
 * Create Invitation Form
 * 
 */
USitISit.views.LoginForm = Ext.extend(Ext.form.FormPanel, {    
    scroll: 'vertical',
	fullscreen: true,
    //items: [],
    
    initComponent: function() {
    	USitISit.views.InvitationForm.superclass.initComponent.apply(this, arguments);    	
   }
});

Ext.reg('LoginForm', USitISit.views.LoginForm);