USitISit.stores.ContactStore = new Ext.data.Store({
    model  : 'ContactModel',
    sorters: 'lastName',
    data: [
        {firstName: 'Tommy',   lastName: 'Maintz', address:'Town, ST', done:false},
        {firstName: 'Rob',     lastName: 'Dougan', address:'Town, ST', done:false},
        {firstName: 'Ed',      lastName: 'Spencer', address:'Town, ST', done:false},
        {firstName: 'Jamie',   lastName: 'Avins', address:'Town, ST', done:false},
        {firstName: 'Aaron',   lastName: 'Conran', address:'Town, ST', done:false},
        {firstName: 'Dave',    lastName: 'Kaneda', address:'Town, ST', done:false},
        {firstName: 'Michael', lastName: 'Mullany', address:'Town, ST', done:false},
        {firstName: 'Abraham', lastName: 'Elias', address:'Town, ST', done:false},
        {firstName: 'Jay',     lastName: 'Robinson', address:'Town, ST', done:false}
    ]
});

Ext.regStore('ContactStore', USitISit.stores.ContactStore);
