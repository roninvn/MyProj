var DashboardStore = new Ext.data.JsonStore({
    model  : 'DashboardModel',
    
    data: [
        {name: 'Accounts'},
        {name: 'Alerts'},
        {name: 'Budgets'},
        {name: 'Goals'},
        {name: 'Expenses'}
    ]
});