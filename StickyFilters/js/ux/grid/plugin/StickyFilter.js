Ext.define('Ext.ux.grid.plugin.StickyFilter', {
	extend : 'Ext.util.Observable',
	alias : 'plugin.stickyfilter',
	uses : [ 'Ext.container.Container', 'Ext.util.DelayedTask' ],
	init : function(grid) {
		var me = this;
		me.filterArray = [];
		grid.on({
			scope : me,
			afterrender : me.onGridRender,
			columnresize : me.onGridColumnResize,
			columnhide : me.onGridColumnHide,
			columnshow : me.onGridColumnShow
		});
		grid.addEvents('filterupdate');
	},
	updateBuffer : 500,
	onGridColumnHide : function(headerCt, col) {
		var filter = Ext.getCmp(col.id + "-filter");
		if (filter) {
			filter.hide();
		}
	},
	onGridColumnShow : function(headerCt, col) {
		var filter = Ext.getCmp(col.id + "-filter");
		if (filter) {
			filter.show();
		}
	},
	onGridColumnResize : function(headerCt, col, width) {
		var filter = Ext.getCmp(col.id + "-filter");
		// console.log(filter.getXType());
		if (filter) {

			filter.setWidth(width);
			filter.items.each(function(ctr) {
				ctr.setWidth(width);
				;
			});
		}
	},
	task : new Ext.util.DelayedTask(),

	onGridRender : function(grid, obj) {
		var me = this;
		me.grid = grid;
		var container = Ext.create('Ext.panel.Panel', {
			dock : 'top',
			componentCls : 'x-column-hfilter',
			weight : 101,
			layout : 'hbox'
		});
		Ext.each(grid.headerCt.items.items, function(item) {
			item = Ext.getCmp(item.id);

			var panelCfg = {
				xtype : 'panel',
				componentCls : 'x-column-no-filter',
				height : container.height,
				id : item.id + "-filter",
				hidden : item.hidden,
				width : item.flex || item.width,
				listeners : {
					afterrender : function(panel) {
						panel.items.each(function(ctr) {
							ctr.setWidth(panel.getWidth());
						});
					}
				}
			};

			if (item.filter) {
				panelCfg.items = me.buildFilterControls(item.filter.type,
						item.dataIndex);
			}

			container.add(panelCfg);
		});
		grid.dockedItems.add(container);
	},

	/*
	 * fire when a value in filter control is changed
	 */
	onValueChange : function(control, newVal, oldval, eOpts) {
		//console.log(control, newval, oldval);

		var me = this;
		me.task.delay(me.updateBuffer, function() {
			
			var newFilter = {
				property : control.dataindex,
				value : newVal
			}, myIndex = -1;
			Ext.Array.forEach(me.filterArray, function(item2, index, allItems) {
				if (item2.property === control.dataIndex) {
					myIndex = index;
				}
			}, this);
			if (myIndex != -1) {
				me.filterArray.splice(myIndex, 1);
			}
			if (newVal) {
				me.filterArray.push(newFilter);
			}
			
			var grid = me.grid;
			
			grid.store.clearFilter();
			if (me.filterArray.length > 0) {
				grid.store.filter(me.filterArray);
			} else {
				grid.store.filterBy(function() {
					return true;
				});
			}
		});
	},

	/*
	 * Build filter control by type
	 */
	buildFilterControls : function(ctype, dataindex) {

		var me = this;

		if (!ctype)
			return []; // no control

		if (ctype === 'number' || ctype === 'numeric' || ctype === 'int' || ctype === 'float') {
			return [ {
				xtype : 'numberfield',
				dataindex : dataindex,
				name: 'ge',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			}, {
				xtype : 'numberfield',
				dataindex : dataindex,
				name:'le',
				listeners : {
					scope : me,
					change : me.onValueChange
				}

			}, {
				xtype : 'numberfield',
				dataindex : dataindex,
				name:'e',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			} ];
		} else if (ctype === 'string') {
			return [ {
				xtype : 'textfield',
				dataindex : dataindex,
				name:'like',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			} ];
		} else if (ctype === 'date') {
			return [ {
				xtype : 'datefield',
				dataindex : dataindex,
				name:'ge',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			}, {
				xtype : 'datefield',
				dataindex : dataindex,
				name:'le',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			}, {
				xtype : 'datefield',
				dataindex : dataindex,
				name:'e',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			} ];
		}

		return [];
	}

});