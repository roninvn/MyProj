Geezeo.views.Splash = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,	
	html :'<center><img src="img/splash.png" style="padding-top: 20%;" /></center>',
	
	listeners:{
		render:function(c){
			this.getEl().on('click', function(){
				Ext.dispatch({
					controller : Geezeo.controllers.LoginController,
					action : 'afterLaunch'
				});
			});
		}
	}
});

Ext.reg('Splash', Geezeo.views.Splash);
