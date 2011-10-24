/*
 * Create Registration Form
 */
USitISit.views.RegistrationForm = Ext.extend(Ext.form.FormPanel, {
	scroll : 'vertical',
	fullscreen : true,
	items : [{
		xtype : 'fieldset',
		title : 'How will your friends contact you?',
		items : [{
			xtype : 'textfield',
			name : 'first_name',
			id : 'txtFirstName',
			placeHolder : 'First Name',
			useClearIcon : true,
			autoCapitalize : false,
			required : true
		}, {
			xtype : 'textfield',
			name : 'last_name',
			id : 'txtLastName',
			placeHolder : 'Last Name',
			useClearIcon : true,
			autoCapitalize : false,
			required : true
		}, {
			xtype : 'emailfield',
			name : 'email_address',
			id : 'txtEmail',
			placeHolder : 'Email Address',
			required : true
		}, {
			xtype : 'textfield',
			name : 'phone_number',
			id : 'txtPhone',
			placeHolder : 'Phone #',
			useClearIcon : true,
			required : true
		}]
	}, {
		xtype : 'fieldset',
		title : 'Where will you need sitting?',
		items : [{
			xtype : 'textfield',
			name : 'home_address',
			id : 'txtAddress',
			placeHolder : 'Home Address',
			useClearIcon : true,
			autoCapitalize : false,
		}, {
			xtype : 'panel',
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			cls : 'panel-noborder',
			items : [{
				xtype : 'selectfield',
				name : 'home_state',
				style : {
					width : '140px',
					'margin-right' : '10px'
				},
				placeHolder : 'State',
				id : 'cboState',
				options : [{
					text : '',
					value : '0'
				}, {
					text : 'State 1',
					value : 'first'
				}, {
					text : 'State 2',
					value : 'second'
				}, {
					text : 'State 3',
					value : 'third'
				}]

			}, {
				xtype : 'textfield',
				style : {
					width : '140px'
				},
				name : 'home_zip_code',
				id : 'txtZipCode',
				placeHolder : 'Zip Code'
			}]
		}]
	}, {
		xtype : 'fieldset',
		title : 'Who will your friends be sitting?',
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		items : [{
			xtype : 'selectfield',
			style : {
				width : '140px',
				'margin-right' : '10px'
			},
			name : 'number_of_children',
			id : 'cboChildren',
			placeHolder : '# of Children',
			options : [{
				text : '',
				value : '0'
			}, {
				text : '1',
				value : '1'
			}, {
				text : '2',
				value : '2'
			}, {
				text : '3',
				value : '3'
			}]

		}, {
			xtype : 'selectfield',
			style : {
				width : '140px'
			},
			name : 'number_of_pets',
			id : 'cboPet',
			placeHolder : '# of Pets',
			options : [{
				text : '',
				value : '0'
			}, {
				text : '1',
				value : '1'
			}, {
				text : '2',
				value : '2'
			}, {
				text : '3',
				value : '3'
			}]

		}]
	}, {
		xtype : 'fieldset',
		title : 'Choose your password',
		items : [{
			xtype : 'passwordfield',
			placeHolder : 'Password',
			id : 'txtPassword',
			name : 'password',
			required : true
		}, {
			xtype : 'passwordfield',
			placeHolder : 'Confirm Password',
			id : 'txtConfirmPassword',
			name : 'confirm_password',
			required : true
		}]
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		style : {
			'margin-left' : '-35px',
			'margin-right' : '-30px'
		},
		items : [{
			xtype : 'button',
			text : 'ENTER SPOUSE\'S INFO',
			ui : 'orange-round',
			cls : 'x-button-verysmall',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.SpouseInfoForm);
			}
		}, {
			xtype : 'spacer'
		}, {
			xtype : 'button',
			text : 'DONE',
			ui : 'orange-round',
			cls : 'x-button-verysmall',
			handler : function() {
				Ext.dispatch({
					controller : USitISit.controllers.RegistrationController,
					action : 'regProfile'
				});
			}
		}]
	}]
});

Ext.reg('RegistrationForm', USitISit.views.RegistrationForm);
