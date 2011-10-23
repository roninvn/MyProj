/*
 * Create Invitation Form
 *
 */
USitISit.views.LoginForm = Ext.extend(Ext.Panel, {
	//scroll: 'vertical',
	fullscreen : true,
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	items : [{
		html : '<img src="img/USitISit-icon-512x512.png" style="height:150px;width:150px" />',
		height : '38%',
		width : '100%',
		style : {
			'text-align' : 'center'
		}
	}, {
		xtype : 'fieldset',
		title : 'Login:',
		layout : {
			type : 'vbox',
			align : 'left'
		},
		items : [{
			xtype : 'textfield',
			id : 'txtEmail',
			name:'email',
			placeHolder : "Email address"
		}, {
			xtype : 'passwordfield',
			id : 'txtPassword',
			name:'password',
			placeHolder : "Password"
		}, {
			xtype : "togglefield",
			label : "Save info and log in automatically next time",
			labelAlign : 'right',
			style : {
				'-webkit-box-pack' : 'start',
				width:'100%'
			}
		}, {
			xtype : "button",
			ui : 'orange-round',
			text : "Done",
			style:{
				'margin-top': '10px'
			},
			handler : function() {
				Ext.dispatch({
					controller : USitISit.controllers.LoginController,
					action : 'login'
				});
			}
		}, {
			xtype : "button",
			ui : 'orange-round',
			text : "Registration",
			style:{
				'margin-top': '10px'
			},
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.RegistrationForm);
			}
		}]
	}]
});

Ext.reg('LoginForm', USitISit.views.LoginForm);
