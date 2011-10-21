/*
 * Create Invitation Form
 *
 */
USitISit.views.InvitationForm = Ext.extend(Ext.form.FormPanel, {
	dockedItems : [{
		xtype : 'toolbar',
		title : 'Registration',
		ui : 'yellow',
	}],
	scroll : 'vertical',
	fullscreen : true,
	items : [{
		xtype : 'fieldset',
		title : 'Invitation',
		centered : true,
		items : [{
			style : 'margin:2%;text-align:center',
			html : 'You\s been invited by your friend to join each other\'s sitter circle'
		}, {
			xtype : 'button',
			ui : 'orange-round',
			id : 'btnLogin',
			style : 'margin:2%;text-align:center',
			html : 'ACCEPT<br /> Select below and click here to join each other\'s sitter circle',
			handler : function() {
			}
		}, {
			xtype : 'button',
			ui : 'orange-round',
			id : 'btnLater',
			style : 'margin:2%;text-align:center',
			html : 'LATER<br /> You can accept your friend\'s invitation later',
			handler : function() {

			}
		}, {
			xtype : 'list',
			itemTpl : new Ext.XTemplate('<tpl for=".">', '<span class="count">{count}</span> <span class="unit">{firstName}</span> - {lastName}', '<div class="checkitem {[values.done ? "done" : ""]}">&nbsp;', '</div>', '</tpl>'),
			store : 'ContactStore',
			listeners : {
				itemtap : {
					fn : function(list, index, item, e) {
						var i = index;
						Ext.dispatch({
							controller : 'ContactController',
							action : 'setDone',
							data : i
						});
					}
				}
			}
		}]
	}],
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'bottom',
		items : [{
			text : 'DONE',
			ui : 'round',
			//  ui: 'confirm',
			handler : function() {
				USitISit.viewport.setActiveItem(USitISit.views.RegistrationForm);
			}
		}]
	}],
	initComponent : function() {
		USitISit.views.InvitationForm.superclass.initComponent.apply(this, arguments);
	}
});

Ext.reg('InvitationForm', USitISit.views.InvitationForm);
