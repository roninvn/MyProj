/*
 * Create Spouse Information Form
 */
USitISit.views.SpouseInfoForm = Ext.extend(Ext.form.FormPanel, {

	fullscreen : true,
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
	}, {
		xtype : 'panel',
		layout : {
			type : 'hbox',
			align : 'stretch'
		},
		items : [{
			xtype : 'spacer'
		}, {
			xtype : 'button',
			text : 'DONE',
			ui : 'orange-round',
			cls : 'x-button-verysmall',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.RegistrationForm);
			}
		}]
	}]
});

Ext.reg('SpouseInfoForm', USitISit.views.SpouseInfoForm);
