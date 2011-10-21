/*
 * Add Friends Form
 * 
 */
USitISit.views.AddFriendsForm = Ext.extend(Ext.form.FormPanel, {
    dockedItems:[{
        xtype: 'toolbar',
        title: 'Add Friends ',
        ui : 'yellow',
    }],
    scroll: 'vertical',
	fullscreen: true,
    items: [
    			{
                    xtype: 'fieldset',
                    title: 'Add friends',
                    centered:true,
                    items: [
	               		{
	               			style: 'margin:2%;text-align:center',
	               			html:'Invite friends to your Sitter circle'
	               		},
	               		{
	               			style: 'margin:2%;text-align:center',
	               			html:'From Phone Address Book<br /> 2 of your contacts are on USitISit'
	               		},
	               		{
			                xtype: 'textfield',
			                id: 'txtEmail',
			                placeHolder: "Not in your address book? Enter friend's email here."
			            },
	               		{
			                xtype: 'button',
			                id: 'btnLogin',
			                ui : 'orange-round',
			                style: 'margin:2%;text-align:center',
			                html:'INVITE<br /> Select friends to invite below. Then click here.',
			                handler: function() {				                    
				           }
			            },			            
			            {
							xtype: 'list',
							itemTpl: new Ext.XTemplate(
								'<tpl for=".">',
									'<span class="count">{count}</span> <span class="unit">{firstName}</span> - {lastName}',
									'<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;',
									'</div>',
								'</tpl>'
							),
							store: 'ContactStore',
							listeners: {
								itemtap: {
									fn: function(list, index, item, e){ 
										var i = index;
										Ext.dispatch({
											controller: 'ContactController',
											action: 'setDone',
											data: i
										});
									}
								}
							}
						},
	               		{
							style: 'margin:2%;',
	               			html:'Invite other friends to join your circle:'
			            },			            
			            {
							xtype: 'list',
							itemTpl: new Ext.XTemplate(
								'<tpl for=".">',
									'<span class="count">{count}</span> <span class="unit">{firstName}</span> - {lastName}',
									'<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;',
									'</div>',
								'</tpl>'
							),
							store: 'AddFriendsEmailStore',
							listeners: {
								itemtap: {
									fn: function(list, index, item, e){ 
										var i = index;
										Ext.dispatch({
											controller: 'ContactController',
											action: 'setDone',
											data: i
										});
									}
								}
							}
						}
                    ]
               }
    ],
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            ui : 'yellow',
            items: [
	                {
	                    text: 'Login',
	                    ui: 'round',
						cls : 'smallbutton',
	                  //  ui: 'confirm',
	                    handler: function() {
	                       USitISit.viewport.setActiveItem(USitISit.views.LoginForm);
	                    }
	                }
            ]
        }
    ]
});

Ext.reg('AddFriendsForm', USitISit.views.AddFriendsForm);