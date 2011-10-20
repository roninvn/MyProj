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
	                        name : 'first_name',
	                        id : 'txtFirstName',
	                        //label: 'First Name',
	                        placeHolder: 'First Name',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                        required: true
	                    },
	                     {
	                        xtype: 'textfield',
	                        name : 'last_name',
	                        id : 'txtLastName',
	                        //label: 'Last Name',
	                         placeHolder: 'Last Name',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                        required: true
	                    },
	                     {
			                xtype: 'emailfield',
			                name: 'email_address',
			                id: 'txtEmail',
			                //label: 'Email Address',
			                placeHolder: 'Email Address',
			                required: true
			            },
			            {
	                        xtype: 'textfield',
	                        name : 'phone_number',
	                        id : 'txtPhone',
	                        //label: 'Last Name',
	                        placeHolder: 'Phone #',
	                        useClearIcon: true,	                        
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
	                        name : 'home_address',
	                        id : 'txtAddress',
	                        
	                       // label: 'Home Address',
	                        placeHolder: 'Home Address',
	                        useClearIcon: true,
	                        autoCapitalize : false,
	                    },
	                    {
	                        xtype: 'selectfield',
	                        name : 'home_state',
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
			                name: 'home_zip_code',
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
	                        name : 'number_of_children',
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
	                        name : 'number_of_pets',
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
			                name: 'password',
			                required: true
			            }, {
			                xtype: 'passwordfield',
			                placeHolder: 'Confirm Password',
			                id: 'txtConfirmPassword',
			                name: 'cpassword',
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
                    	//console.log(USitISit.views.RegistrationForm.items);
                    	var params = {};
                    	
                    	var arr = USitISit.views.RegistrationForm.query('field');
                    	
                    	for(var i=0; i<arr.length; i++){
                    		params[arr[i].name] = arr[i].getValue();
                    	}
                    	
                    	arr = USitISit.views.SpouseInfoForm.query('field');
                    	
                    	for(var i=0; i<arr.length; i++){
                    		params[arr[i].name] = arr[i].getValue();
                    	}
                    	
                    	//console.log(params);
                    	
                    	Ext.util.JSONP.request({
                    		url:'http://dev.marketlytics.com/usit/backend/',
                    		params:{func:'registerProfile', params: Ext.encode(params)},
                    		callbackKey:'callback',
                    		callback:function(a,b,c){
                    			//console.log(a,b,c);
                    		}
                    	});                      
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