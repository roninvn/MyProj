/*
 * Create Spouse Information Form
 */
USitISit.views.SpouseInfoForm = Ext.extend(Ext.form.FormPanel, {
    dockedItems:[{
        xtype: 'toolbar',
        title: 'Registration',
        ui: 'light'
    }],
    scroll: 'vertical',
	fullscreen: true,
	//url: _APP_URL + 'auth/signin',
    items: [
    			{
                    xtype: 'fieldset',
                    title: 'Spouse\'s Info',
                    items: [
	                    {
	                        xtype: 'textfield',
	                        name : 'txtFirstName',
	                        id : 'txtSFirstName',
	                        //label: 'First Name',
	                        placeHolder: 'First Name',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                        required: true
	                    },
	                     {
	                        xtype: 'textfield',
	                        name : 'txtSLastName',
	                        id : 'txtLastName',
	                        //label: 'Last Name',
	                         placeHolder: 'Last Name',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                        required: true
	                    },
	                     {
			                xtype: 'emailfield',
			                name: 'txtSEmail',
			                id: 'txtEmail',
			                //label: 'Email Address',
			                placeHolder: 'Email Address',
			                required: true
			            }
                    ]
               }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    text: 'DONE',
                  //  ui: 'confirm',
                    handler: function() {
                       USitISit.viewport.setActiveItem(
							USitISit.views.RegistrationForm
						);
                    }
                }
            ]
        }
    ],
    initComponent: function() {
    	USitISit.views.SpouseInfoForm.superclass.initComponent.apply(this, arguments);
   }
});

Ext.reg('SpouseInfoForm', USitISit.views.SpouseInfoForm);