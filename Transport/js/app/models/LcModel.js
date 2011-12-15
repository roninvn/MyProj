Ext.regModel('LocalModel', {
    fields: ['name', 'value'],
    
    proxy: {
        type: 'localstorage',
        id  : 'csr-localstorage'
    }
});