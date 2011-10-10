/**
 * This file will define the viewport of Mobile
 * 
 */
USitISit.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    initComponent: function() {
        //put instances of cards into app.views namespace
      Ext.apply(USitISit.views, {
        		RegistrationForm: new USitISit.views.RegistrationForm(),
        		SpouseInfoForm: new USitISit.views.SpouseInfoForm(),
        		InvitationForm: new USitISit.views.InvitationForm()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
               USitISit.views.RegistrationForm,
               USitISit.views.SpouseInfoForm,
               USitISit.views.InvitationForm
            ]
        });
        USitISit.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        USitISit.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
