Geezeo.views.Splash = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	bodyPadding : 0,	
	html :'<div style="text-align: center;"><img src="img/splash.png" style="padding-top: 40%;" /></div>',
	
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
