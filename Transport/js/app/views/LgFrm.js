/*
 * Login Form
 *
 */
Geezeo.views.LoginForm = Ext.extend(Ext.Panel, {
	fullscreen : true,
	styleHtmlContent : true,
	ui : 'light',
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [{
		dock : 'top',
		xtype : 'toolbar',		
		cls:'logo',
		type : 'light'
	}, {
		dock : 'bottom',
		xtype : 'toolbar',
		type : 'light',
		items : [{
			xtype : 'spacer'
		}, {
			text : 'Reset',
			ui : 'confirm'
		}, {
			text : 'Submit',
			ui : 'confirm',
			handler : function() {
				Ext.dispatch({
					controller : Geezeo.controllers.LoginController,
					action : 'login'
				});
			}
		}]
	}],
	items : [{
		xtype : 'fieldset',		
		title : 'Login',
		instructions : 'Please enter the information above.',
		defaults : {
			required : true,
			labelAlign : 'left',
			labelWidth : '40%'
		},
		items : [{
			xtype : 'textfield',
			name : 'username',
			id:'txtUserName',
			placeHolder : "Username",
			label : 'Name'
		}, {
			xtype : 'passwordfield',
			name : 'password',
			id:'txtPassword',
			placeHolder : "Password",
			label : 'Password'
		}]
	}],
	
	
	
	
	listeners: {
		show: function(){

		}
	}
});

Ext.reg('LoginForm', Geezeo.views.LoginForm);
