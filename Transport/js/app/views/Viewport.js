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
        		CSRActive: new Geezeo.views.CSRActive(),
        		CSRClose: new Geezeo.views.CSRClose(),
        		CSRAll: new Geezeo.views.CSRAll(),
        		CSRDetail: new Geezeo.views.CSRDetail()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
               Geezeo.views.LoginForm,
               Geezeo.views.DashboardForm,
               Geezeo.views.CSRActive,
               Geezeo.views.CSRClose,
               Geezeo.views.CSRAll,
               Geezeo.views.CSRDetail
            ]
        });
        Geezeo.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        Geezeo.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
