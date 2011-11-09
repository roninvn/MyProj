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
		console.log(filter);
		if (filter) {
			filter.setWidth(width);
		}
	},
	task : new Ext.util.DelayedTask(),

	onGridRender : function(grid, obj) {
		var me = this;
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
				layout : 'fit',
				componentCls : 'x-column-no-filter',
				height : container.height,
				id : item.id + "-filter",
				hidden : item.hidden,
				width : item.flex || item.width
			};

			if (item.filter) {
				panelCfg.items = me.buildFilterControls(item.filter.type);
			}

			container.add(panelCfg);
		});
		grid.dockedItems.add(container);
	},

	/*
	 * Build filter control by type
	 */
	buildFilterControls : function(ctype) {

		if (!ctype)
			return []; // no control

		if (ctype === 'number' || ctype === 'numeric' || ctype === 'int' || ctype === 'float') {
			return [ {
				xtype : 'numberfield'
			}, {
				xtype : 'numberfield'
			}, {
				xtype : 'numberfield'
			} ];
		}
		else if (ctype === 'string'){
			return[{
				xtype : 'textfield'
			}];
		}

		return [];
	}

});