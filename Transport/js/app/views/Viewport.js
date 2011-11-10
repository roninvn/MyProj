/**
 * This file will define the viewport of Mobile
 * 
 */
Geezeo.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    initComponent: function() {
        //put instances of cards into app.views namespace
      Ext.apply(Geezeo.views, {
        		LoginForm: new Geezeo.views.LoginForm(),
        		DashboardForm: new Geezeo.views.DashboardForm(),
        		AccountsForm: new Geezeo.views.AccountsForm(),
        		AlertsForm: new Geezeo.views.AlertsForm(),
        		BudgetsForm: new Geezeo.views.BudgetsForm(),
        		GoalsForm: new Geezeo.views.GoalsForm(),
        		ExpensesForm: new Geezeo.views.ExpensesForm(),
        		TransactionsForm: new Geezeo.views.TransactionsForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
               Geezeo.views.LoginForm,
               Geezeo.views.DashboardForm,
               Geezeo.views.AccountsForm,
               Geezeo.views.AlertsForm,
               Geezeo.views.BudgetsForm,
               Geezeo.views.GoalsForm,
               Geezeo.views.ExpensesForm,
               Geezeo.views.TransactionsForm
            ]
        });
        Geezeo.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        Geezeo.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
