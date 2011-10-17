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
        		InvitationForm: new USitISit.views.InvitationForm(),
        		AddFriendsForm: new USitISit.views.AddFriendsForm(),
        		LoginForm: new USitISit.views.LoginForm(),
        		DashboardForm: new USitISit.views.DashboardForm(),
        		ReqSitterForm: new USitISit.views.ReqSitterForm(),
        		FriendReqForm: new USitISit.views.FriendReqForm(),
        		SitScheduleForm: new USitISit.views.SitScheduleForm(),
        		MyCircleForm: new USitISit.views.MyCircleForm(), //
        		FriendInfoForm: new USitISit.views.FriendInfoForm()
        		
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
               USitISit.views.LoginForm,
               USitISit.views.RegistrationForm,
               USitISit.views.SpouseInfoForm,
               USitISit.views.InvitationForm,
               USitISit.views.AddFriendsForm,
               USitISit.views.DashboardForm,
               USitISit.views.ReqSitterForm,
               USitISit.views.FriendReqForm,
               USitISit.views.SitScheduleForm,
               USitISit.views.MyCircleForm,
               USitISit.views.FriendInfoForm
               
            ]
        });
        USitISit.views.Viewport.superclass.initComponent.apply(this, arguments);
    },
    layoutOrientation : function(orientation, w, h) {
        USitISit.views.Viewport.superclass.layoutOrientation.call(this, orientation, w, h);        
    }
});
