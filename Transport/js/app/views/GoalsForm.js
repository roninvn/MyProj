Geezeo.views.GoalsForm = Ext.extend(Ext.Panel, {
	//scroll: 'vertical',
	fullscreen : true,
	styleHtmlContent : true,
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	dockedItems : [{
		xtype : 'toolbar',
		dock : 'top',
		title : 'Goals',
		items : [{
			text:'Dashboard',
			ui:'back',
			handler: function(){
				Geezeo.controllers.DashboardController.backToDashboard();
			}
		},{
			xtype : 'spacer'
		}, {
			text : 'Logout'
		}]
	}],

	items : [{
		xtype: 'list',
		itemTpl : '<div class="accountListItemName">{name}</div><div class="accountListItemBalance">{percent_completed}%</div>',
		itemCls : 'accountListItem',
		store: GoalStore,
		
		listeners:{
			itemtap: function(v,i,it,e){
			}
		}
		
	}]
});

Ext.reg('GoalsForm', Geezeo.views.GoalsForm);
