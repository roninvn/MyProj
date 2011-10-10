Ext.regModel('ContactModel', {
    fields: ['firstName', 'lastName', 'address',
    	
    	{
			name: 'done',
			type: 'boolean',
			defaultValue: false
		}]
});