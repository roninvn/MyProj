Geezeo.views.SearchForm = Ext.extend(Ext.Panel, {
	styleHtmlContent : true,
	fullscreen : true,
	//layout : 'fit',
	//scroll: 'vertical',
	dockedItems : [ {
		xtype : 'toolbar',
		dock : 'top',
		title : 'TWS',
		cls : 'logo',
		items : [ {
			text : 'Back',
			ui : 'back',
			handler : function() {
				Geezeo.viewport.setActiveItem(Geezeo.views.MenuForm, 'slide');
			}
		} ]
	} ],

	items : [ {
		xtype : 'fieldset',
		title : 'Search',
		instructions : 'Please enter the information above.',
		defaults : {
			required : true,
			labelAlign : 'left',
			labelWidth : '40%'
		},
		items : [ {
			xtype : 'textfield',
			name : 'name',
			id:'txtSearchName',
			label : 'Name',
			useClearIcon : true,
			autoCapitalize : false
		},{
			xtype:'button',
			text:'Search',
			handler: function(){
				Ext.dispatch({
					controller : Geezeo.controllers.CSRController,
					action : 'csrSearch'
				});
			}
		} ]
	},{
		xtype : 'list',		
		scroll: 'vertical',
		height:300,
		itemTpl :  new Ext.XTemplate('<img src ="img/',
		           '{CodeColor:this.formatColor}.png',		          
		           '" class="icon" />{CON}  - {ShipName} - {EquipmentFamily} - {ETAPlace}',
		           {
					formatColor: function(val){
						return val.replace('#', '');
					}
		           }
		),
		itemCls : 'dashboardListItem',
		
		store : CSRSearchStore,
		listeners : {
			itemtap : function(v, i, it, e) {
				var d = v.getRecord(it).data;
				detailWin.update(d);
				detailWin.idCSR = d.idCSR;
				detailWin.show();
			}
		}
	} ],
	
	listeners:{
		activate: function(){			
			Geezeo.views.CSRForm.detailForm = this;
		}
	}

});

Ext.reg('SearchForm', Geezeo.views.SearchForm);
