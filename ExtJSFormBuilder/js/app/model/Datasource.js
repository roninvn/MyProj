var datasource = Ext.create('Ext.data.Store', {
            fields: ['src'],
            data : [                
                {"src":"Source 1"},                
                {"src":"Source 2"},
                {"src":"Source 3"}
            ]
        });
        
var buttonActions =  Ext.create('Ext.data.Store', {
            fields: ['act'],
            data : [                
                {"act":"Action 1"},                
                {"act":"Action 2"},
                {"act":"Action 3"}
            ]
        });