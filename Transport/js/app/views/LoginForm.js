/*
 * Login Form
 *
 */
Geezeo.views.LoginForm = Ext.extend(Ext.Panel, {
	fullscreen : true,
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [{
			xtype : 'textfield',
			name:'username',			
			placeHolder : "Username",
			label:'Login'
		}, {
			xtype : 'passwordfield',
			name:'password',			
			placeHolder : "Password",
			label:'Password'
		}, {
			xtype : "button",
			text : "Login",
			style:{
				'margin-top': '20px'
			},
			handler : function() {
				Ext.dispatch({
					controller : Geezeo.controllers.LoginController,
					action : 'login'
				});
			}
		}]
});

Ext.reg('LoginForm', Geezeo.views.LoginForm);
