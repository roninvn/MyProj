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

			filter.setWidth(width);/*
			filter.items.each(function(ctr) {
				ctr.setWidth(width);				
			});*/
			this.setChildrenWidth(filter, width);
		}
	},
	task : new Ext.util.DelayedTask(),
	
	/*
	 * set children width
	 */
	setChildrenWidth: function(filter, w){
		filter.items.each(function(ctr) {
			ctr.setWidth(w-10);				
		});
	},
	
	onGridRender : function(grid, obj) {
		var me = this;
		me.grid = grid;
		var container = Ext.create('Ext.panel.Panel', {
			dock : 'top',			
			weight : 101,
			layout : 'hbox'
		});
		Ext.each(grid.headerCt.items.items, function(item) {
			item = Ext.getCmp(item.id);

			var panelCfg = {
				xtype : 'panel',				
				height : container.height,
				id : item.id + "-filter",
				hidden : item.hidden,
				width : item.flex || item.width,
				listeners : {
					afterrender : function(panel) {
						me.setChildrenWidth(panel, panel.getWidth());
						/*panel.items.each(function(ctr) {
							ctr.setWidth(panel.getWidth());
						});*/
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

		var me = this;
		me.task.delay(me.updateBuffer, function() {
			
			me.addFilter(control.dataIndex, control.name, newVal);
			me.doFilter();

		});
	},
	
	/*
	 * filter store data
	 */
	doFilter: function(){
		var me = this;
		var grid = me.grid;
		
		grid.store.clearFilter();
		
		var filter = {filterFn: function(item){			
			
			for(var i=0; i< me.filterArray.length; i++){
				
				var data = item.get(me.filterArray[i].dataIndex);
				
				if(me.filterArray[i].filterType === "like"){ //filter for like
					if(data.indexOf(me.filterArray[i].value) === -1)
						return false;
				}
				else if(me.filterArray[i].filterType === "eq"){ //filter for equal
					if(data !== me.filterArray[i].value)
						return false;
				}
				else if(me.filterArray[i].filterType === "ge"){ //filter for greater or equal
					if(data < me.filterArray[i].value)
						return false;
				}
				else if(me.filterArray[i].filterType === "le"){ //filter for greater or equal
					if(data > me.filterArray[i].value)
						return false;
				}
			}
			
			return true;
		}};

		grid.store.filter(filter);
	},
	
	
	/*
	 * add a new filter
	 */
	addFilter: function(dataIndex, filterType, newVal){
		var me = this;
		var filter = {
			dataIndex : dataIndex,
			filterType: filterType,
			value: newVal
		};
		
		var foundIndex = -1;
		
		//search current filter type
		for(var i=0; i< me.filterArray.length; i++){
			if(me.filterArray[i].dataIndex===dataIndex && me.filterArray[i].filterType === filterType){//found
				if(newVal && newVal !== "") //not empty
					me.filterArray[i] = filter; //overwrite filter
				else
					me.filterArray.splice(i, 1);
				
				foundIndex =  i;
				break;
			}
		}
		
		//not found
		if(foundIndex === -1)
			me.filterArray.push(filter); //add into
		
	},
	

	/*
	 * Build filter control by type
	 */
	buildFilterControls : function(ctype, dataIndex) {

		var me = this;

		if (!ctype)
			return []; // no control

		if (ctype === 'number' || ctype === 'numeric' || ctype === 'int' || ctype === 'float') {
			return [ {
				xtype : 'numberfield',
				cls: 'filterControl',
				fieldLabel : '>=',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name: 'ge',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			}, {
				xtype : 'numberfield',
				cls: 'filterControl',
				fieldLabel : '<=',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name:'le',
				listeners : {
					scope : me,
					change : me.onValueChange
				}

			}, {
				xtype : 'numberfield',
				cls: 'filterControl',
				fieldLabel : '==',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name:'eq',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			} ];
		} else if (ctype === 'string') {
			return [ {
				xtype : 'textfield',
				cls: 'filterControl',
				fieldLabel : 'has',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name:'like',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			} ];
		} else if (ctype === 'date') {
			return [ {
				xtype : 'datefield',
				cls: 'filterControl',
				fieldLabel : '>=',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name:'ge',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			}, {
				xtype : 'datefield',
				cls: 'filterControl',
				fieldLabel : '<=',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name:'le',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			}, {
				xtype : 'datefield',
				cls: 'filterControl',
				fieldLabel : '==',
				labelSeparator: '',
				labelPad: 1,
				labelWidth: 20,
				dataIndex : dataIndex,
				name:'eq',
				listeners : {
					scope : me,
					change : me.onValueChange
				}
			} ];
		}

		return [];
	}

});