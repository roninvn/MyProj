/**
 * This file will create the Center Panel and dock it to the viewport of the
 * system.
 * 
 * @author Nam Hoang
 */
Ext.define('Demo.view.CenterPanel', {
	extend : 'Ext.panel.Panel',
	activeItem : 0,
	margins : '5 5 5 5',
	region : 'center', // a center region is ALWAYS required for border layout
	deferredRender : false,
	alias : 'widget.CenterPanel',
	layout : 'absolute',

	requires : [ 'Ext.ux.grid.plugin.StickyFilter' ],

	initComponent : function() {
		this.callParent(arguments);
	},

	listeners : {
		render : function() {

			Ext.define('Company', {
				extend : 'Ext.data.Model',
				fields : [ {
					name : 'id',
					type : 'number'
				}, {
					name : 'company'
				}, {
					name : 'price',
					type : 'float'
				}, {
					name : 'date',
					type : 'date',
					dateFormat : 'Y-m-d'
				}, {
					name : 'visible',
					type : 'boolean'
				}, {
					name : 'size'
				} ]
			});

			var store = Ext.create('Ext.data.JsonStore', {
				autoDestroy : true,
				model: 'Company',
				proxy : {
					type : 'ajax',
					url : 'data/data.json',
					reader : {
						type : 'json',
						root : 'data',
						idProperty : 'id',
						totalProperty : 'total'
					}
				},

				remoteSort : false,
				sortInfo : {
					field : 'company',
					direction : 'ASC'
				},
				pageSize : 50,
				storeId : 'myStore'

			});// end store

			var grid = Ext.create('Ext.grid.Panel', {
				title : 'Demo',
				store : store,
				columns : [ {
					header : 'id',
					dataIndex : 'id',
					filter:{
						type: 'numeric'
					}
				}, {
					header : 'company',
					dataIndex : 'company',
					filter:{
						type: 'string'
					}
				}, {
					header : 'price',
					dataIndex : 'price'
				} ],

				plugins : [ {
					ptype : 'stickyfilter'
				} ]

			});

			this.add(grid);

			store.load();

		}// end render
	}
// end listeners

});