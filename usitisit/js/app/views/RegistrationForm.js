/*
 * Create Registration Form
 */
USitISit.views.RegistrationForm = Ext.extend(Ext.form.FormPanel, {
    dockedItems:[{
        xtype: 'toolbar',
        title: 'Registration',
        ui: 'light'
    }],
    scroll: 'vertical',
	fullscreen: true,
    items: [
    			{
                    xtype: 'fieldset',
                    title: 'How will your friends contact you?',
                    items: [
	                    {
	                        xtype: 'textfield',
	                        name : 'txtFirstName',
	                        id : 'txtFirstName',
	                        //label: 'First Name',
	                        placeHolder: 'First Name',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                        required: true
	                    },
	                     {
	                        xtype: 'textfield',
	                        name : 'txtLastName',
	                        id : 'txtLastName',
	                        //label: 'Last Name',
	                         placeHolder: 'Last Name',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                        required: true
	                    },
	                     {
			                xtype: 'emailfield',
			                name: 'txtEmail',
			                id: 'txtEmail',
			                //label: 'Email Address',
			                placeHolder: 'Email Address',
			                required: true
			            }
                    ]
               },
               {
                    xtype: 'fieldset',
                    title: 'Where will you need sitting?',
                    items: [
	                    {
	                        xtype: 'textfield',
	                        name : 'txtAddress',
	                        id : 'txtAddress',
	                        
	                       // label: 'Home Address',
	                        placeHolder: 'Home Address',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                    },
	                    {
	                        xtype: 'selectfield',
	                        name : 'cboState',
	                        placeHolder: 'State',
	                        id : 'cboState',
	                        /*valueField : 'id',
	                        displayField : 'state',*/
	                       options: [
	                       		{text: '',  value: '0'},
						        {text: 'State 1',  value: 'first'},
						        {text: 'State 2', value: 'second'},
						        {text: 'State 3',  value: 'third'}
						    ]
	                        
	                    },
	                    {
			                xtype: 'textfield',
			                name: 'txtZipCode',
			                id: 'txtZipCode',
			                placeHolder: 'Zip Code'
			            }
                    ]
               },
               {
                    xtype: 'fieldset',
                    title: 'Who will your friends be sitting?',
                    items: [
	                    {
	                        xtype: 'selectfield',
	                        name : 'cboChildren',
	                        id : 'cboChildren',
	                        placeHolder: '# of Children',
	                       options: [
	                      		 {text: '',  value: '0'},
						        {text: '1',  value: '1'},
						        {text: '2', value: '2'},
						        {text: '3',  value: '3'}
						    ]
	                        
	                    },
	                    {
	                        xtype: 'selectfield',
	                        name : 'cboPet',
	                        id : 'cboPet',
	                        placeHolder: '# of Pets',
	                       options: [
	                       		{text: '',  value: '0'},
						        {text: '1',  value: '1'},
						        {text: '2', value: '2'},
						        {text: '3',  value: '3'}
						    ]
	                        
	                    }
                    ]
               },{
                    xtype: 'fieldset',
                    title: 'Choose your password',
                    items: [
	                    {
			                xtype: 'passwordfield',
			                placeHolder: 'Password',
			                id: 'txtPassword',
			                name: 'txtPassword',
			                required: true
			            }, {
			                xtype: 'passwordfield',
			                placeHolder: 'Confirm Password',
			                id: 'txtConfirmPassword',
			                name: 'txtConfirmPassword',
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
                    text: 'ENTER SPOUSE\'S INFO',
                    ui: 'round',
                    handler: function() {
                    	console.log('aaaaaaaaa');
                        USitISit.viewport.setActiveItem(
							USitISit.views.SpouseInfoForm
						);
                    }
                },
                 {xtype: 'spacer'},
                {
                    text: 'DONE',
                    ui: 'round',
                    handler: function() {                       
                    }
                }
            ]
        }
    ],
    initComponent: function() {
    	USitISit.views.RegistrationForm.superclass.initComponent.apply(this, arguments);
   }
});

Ext.reg('RegistrationForm', USitISit.views.RegistrationForm);