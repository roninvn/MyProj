/*
 * Create Spouse Information Form
 */
USitISit.views.SpouseInfoForm = Ext.extend(Ext.form.FormPanel, {
	dockedItems : [{
		xtype : 'toolbar',
		title : 'Registration',
		ui : 'yellow'
	}],
	scroll : 'vertical',
	fullscreen : true,
	//url: _APP_URL + 'auth/signin',
	items : [{
		xtype : 'fieldset',
		title : 'Spouse\'s Info',
		items : [{
			xtype : 'textfield',
			name : 'spouse_first_name',
			id : 'txtSFirstName',
			//label: 'First Name',
			placeHolder : 'First Name',
			useClearIcon : true,
			autoCapitalize : false,
			required : true
		}, {
			xtype : 'textfield',
			name : 'spouse_last_name',
			id : 'txtLastName',
			//label: 'Last Name',
			placeHolder : 'Last Name',
			useClearIcon : true,
			autoCapitalize : false,
			required : true
		}, {
			xtype : 'emailfield',
			name : 'spouse_email_address',
			id : 'txtEmail',
			//label: 'Email Address',
			placeHolder : 'Email Address',
			required : true
		}, {
			xtype : 'textfield',
			name : 'spouse_phone_number',
			id : 'txtPhone',
			//label: 'Last Name',
			placeHolder : 'Phone #',
			useClearIcon : true,
			required : true
		}]
	}],
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'bottom',
		items : [{
			text : 'DONE',
			//  ui: 'confirm',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.RegistrationForm);
			}
		}]
	}],
	initComponent : function() {
		USitISit.views.SpouseInfoForm.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('SpouseInfoForm', USitISit.views.SpouseInfoForm);
