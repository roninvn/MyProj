/**
 * This file will define the viewport of Mobile
 * 
 */
Geezeo.views.Viewport = Ext.extend(Ext.Panel, {
	fullscreen : true,
	layout : 'card',
	initComponent : function() {
		// put instances of cards into app.views namespace
		Ext.apply(Geezeo.views, {
			Splash : new Geezeo.views.Splash(),
			LoginForm : new Geezeo.views.LoginForm(),
			CSRActive : new Geezeo.views.CSRActive(),
			CSRClose : new Geezeo.views.CSRClose(),
			CSRAll : new Geezeo.views.CSRAll(),
			CSRDetailList : new Geezeo.views.CSRDetailList(),
			MenuForm : new Geezeo.views.MenuForm(),
			HelpForm : new Geezeo.views.HelpForm(),
			SearchForm : new Geezeo.views.SearchForm(),
			NewCSR : new Geezeo.views.NewCSR()
		});
		// put instances of cards into viewport
		Ext.apply(this, {
			items : [ Geezeo.views.Splash,
			          Geezeo.views.LoginForm, 
			          Geezeo.views.CSRActive,
					Geezeo.views.CSRClose, Geezeo.views.CSRAll,
					Geezeo.views.CSRDetailList, Geezeo.views.MenuForm,
					Geezeo.views.HelpForm, Geezeo.views.SearchForm,
					Geezeo.views.NewCSR ]
		});
		Geezeo.views.Viewport.superclass.initComponent.apply(this, arguments);
	},
	layoutOrientation : function(orientation, w, h) {
		Geezeo.views.Viewport.superclass.layoutOrientation.call(this,
				orientation, w, h);
	}
});
