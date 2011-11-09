Ext.onReady(function() {
	Ext.define('PersonalInfo', {
		extend: 'Ext.data.Model',
		fields: [{name:'id',type:'int'}, 'name', 'address', 'state']
	});
	
	var store = Ext.create('Ext.data.Store', {
		model: 'PersonalInfo',
        
        proxy: {
            type: 'ajax',
            url : 'php/pinfo.php',
            reader: {
                type: 'json',
                root: 'pinfo',
                totalProperty: 'totalCount'
                },
        },
        id: 'store',
        remoteSort: true,
        pageSize: 200,
        buffered: true,
        remoteFilter: true,
        sorters: [{
            property: 'name',
            direction: 'ASC'
        }]
	});
		
	var rowEditing = Ext.create('Ext.grid.plugin.RowEditing', {
		clicksToMoveEditor: 1,
		autoCancel: false
	});
	
	var alphaSpaceTest = /^[-\sa-zA-Z]+$/;
	
	Ext.apply(Ext.form.field.VTypes, {
	    //  vtype validation function
	    alphaSpace: function(val, field) {
	        return alphaSpaceTest.test(val);
	    },
	    alphaSpaceText: 'Not a valid state. Must not contain numbers.',
	    alphaSpaceMask: /^[-\sa-zA-Z]+$/
	});
	
	// create the Grid
	var grid = Ext.create('Ext.grid.Panel', {
		height: 500,
		width: 700,
		cls: 'grid',
		title: 'Velociraptor Owners',
		store: store,
        verticalScrollerType: 'paginggridscroller',
        loadMask: true,
        disableSelection: true,
        invalidateScrollerOnRefresh: false,
//        viewConfig: {
//            trackOver: false
//        },
        plugins: [
                Ext.create('Ext.ux.grid.GridHeaderFilters')
        ,
                rowEditing
        ],
        headerFilters: {},
        dockedItems: [
        {
                 xtype: 'toolbar',
                        dock: 'top',
                        items: [
                            {
                                xtype: 'button',
                                text: 'Reset Filters',
                                handler: function(){
                                    grid.resetHeaderFilters();
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Clear Filters',
                                handler: function(){
                                    grid.clearHeaderFilters();
                                }
                            },
                            {
                                xtype: 'button',
                                text: 'Apply Filters',
                                handler: function(){
                                    grid.applyHeaderFilters();
                                }
                            }
                        ]
        },
        {
            xtype: 'toolbar',
            dock: 'bottom',
            //creating, add items
            items: [{
                iconCls: 'add',
                text: 'Add',
                handler: function() {
                    rowEditing.cancelEdit();
                    // create a blank record from PersonalInfo
                    var record = Ext.create('PersonalInfo');
                    //insert at top
                    store.insert(0, record);
                    //edit at row 0
                    rowEditing.startEdit(0, 0);
                }
            }, {
                iconCls: 'delete',
                text: 'Delete',
                handler: function() {
                    rowEditing.cancelEdit();
                    var sm = grid.getSelectionModel();
                    Ext.Msg.show({
                         title:'Delete Record?',
                         msg: 'You are deleting a record permanently, this cannot be undone. Proceed?',
                         buttons: Ext.Msg.YESNO,
                         icon: Ext.Msg.QUESTION,
                         fn: function(btn){
                             if(btn === 'yes') {
                                 store.remove(sm.getSelection());
                                 store.sync();
                             }
                         }
                    });
                }
            }]
        }],
                     
                     
		columns: [{
            xtype: 'rownumberer',
            width: 50,
            sortable: false
        },{
			dataIndex: 'id',
			width: 50,
			text: 'ID'
		}, {
			dataIndex: 'name',
			flex: 1,
			text: 'Name',
			allowBlank: false,
			field: {
				type: 'textfield',
				allowBlank: false
			},
            filter: {
                xtype: 'textfield'
//                filterName: 'name',
//                filterLabel: 'Abcd'
            }
   		}, {
			dataIndex: 'address',
			flex: 1.3,
			text: 'Address',
			allowBlank: false,
			field: {
				type: 'textfield',
				allowBlank: false
			},
            filter: {
                xtype: 'textfield'
//                filterName: 'Address',
//                filterLabel: 'Abcd'
            }
		}, {
			dataIndex: 'state',
			flex: 0.8,
			text: 'State',
			allowBlank: false,
			field: {
				type: 'textfield',
				allowBlank: false,
				vtype: 'alphaSpace'
			},
            filter: {
                xtype: 'textfield'
//                filterName: 'state',
//                filterLabel: 'Abcd'
            }
		}],
		renderTo: Ext.getBody(),
	});

	grid.on('edit', function(e) {
        e.record.save();
	});
//        renderTo: Ext.getBody(),
    store.guaranteeRange(0, 199);
});