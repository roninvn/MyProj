Ext.Loader.setConfig({enabled:true});
Ext.create("Ext.app.Application",{
	name:"HeaderFilterExample",
	controllers:['GridExample'],
	views:['GridExample'],
	enableQuickTips:true,
	launch:function(){
		Ext.create('Ext.container.Viewport',{
			layout:'fit',
			id:'viewport',
			items:[{
				xtype:'tabpanel',
				items:[{
					xtype:'gridexample',
					title:'Example'
				},{
					title:'HeaderFilter.js',
					autoScroll:true,
					html:'<code><pre>Ext.define(\'Ext.ux.grid.HeaderFilter\',{\n'+
					'	extend:\'Ext.util.Observable\',\n'+
					'	alias:\'plugin.hfilter\',\'\'\n'+
					'	uses:[\n'+
					'		\'Ext.container.Container\',\n'+
					'		\'Ext.util.DelayedTask\'\n'+
					'	],\n'+
					'	init:function(grid){\n'+
					'		var me=this;\n'+
					'		me.filterArray=[];\n'+
					'		grid.on({\n'+
					'			scope:me,\n'+
					'			afterrender:me.onGridRender,\n'+
					'			columnresize:me.onGridColumnResize,\n'+
					'			columnhide:me.onGridColumnHide,\n'+
					'			columnshow:me.onGridCOlumnShow\n'+
					'		});\n'+
					'		grid.addEvents(\'filterupdate\');\n'+
					'	},\n'+
					'	updateBuffer:500,\n'+
					'	onGridColumnHide:function(headerCt,col){\n'+
					'		var filter=Ext.getCmp(col.id+"-filter");\n'+
					'		if(filter){filter.hide();}\n'+
					'	},\n'+
					'	onGridCOlumnShow:function(headerCt,col){\n'+
					'		var filter=Ext.getCmp(col.id+"-filter");\n'+
					'		if(filter){filter.show();}\n'+
					'	},\n'+
					'	onGridColumnResize:function(headerCt,col,width){\n'+
					'		var filter=Ext.getCmp(col.id+"-filter");\n'+
					'		if(filter){filter.setWidth(width);}\n'+
					'	},\n'+
					'	task:new Ext.util.DelayedTask(),\n'+
					'	onGridRender:function(grid,obj){\n'+
					'		var me=this;\n'+
					'		var container=Ext.create(\'Ext.container.Container\',{\n'+
					'			dock:\'top\',\n'+
					'			componentCls:\'x-column-hfilter\',\n'+
					'			weight:101,\n'+
					'			height:22,\n'+
					'			layout:\'hbox\'\n'+
					'		});'+
					'		Ext.each(grid.headerCt.items.items,function(item){\n'+
					'			item=Ext.getCmp(item.id);\n'+
					'			if(!item.filter){\n'+
					'				var col=Ext.create("Ext.container.Container",{\n'+
					'					layout:\'fit\',\n'+
					'					componentCls:\'x-column-no-filter\',\n'+
					'					height:container.height,\n'+
					'					id:item.id+"-filter",\n'+
					'					hidden:item.hidden,\n'+
					'					width:item.flex||item.width\n'+
					'				});\n'+
					'			}\n'+
					'			else{\n'+
					'				var col=item.filter;\n'+
					'				Ext.apply(col,{\n'+
					'					layout:\'fit\',\n'+
					'					componentCls:\'x-column-filter\',\n'+
					'					id:item.id+"-filter",\n'+
					'					hidden:item.hidden,\n'+
					'					width:item.flex||item.width,\n'+
					'					listeners:{\n'+
					'						scope:me,\n'+
					'						change:function(field,newVal,oldVal,eOpts){\n'+
					'							me.task.delay(me.updateBuffer,function(){\n'+
				    '								var newFilter={property:item.dataIndex,value:newVal},myIndex=-1;\n'+
				    '								Ext.Array.forEach(me.filterArray,function(item2,index,allItems){if(item2.property===item.dataIndex){myIndex=index;}},this);\n'+
				    '								if(myIndex!=-1){me.filterArray.splice(myIndex,1);}\n'+
				    '								if(newVal){me.filterArray.push(newFilter);}\n'+
				    '								grid.store.clearFilter();\n'+
				    '								if(me.filterArray.length>0){grid.store.filter(me.filterArray);}\n'+
				    '								else{grid.store.filterBy(function(){return true;});}\n'+
				    '							});\n'+
					'						}\n'+
					'					}\n'+
					'				});\n'+
					'			}\n'+
					'			container.add(col);\n'+
					'		});\n'+
					'		grid.dockedItems.add(container);\n'+
					'	}\n'+
					'});</pre></code>'
				}],
				tbar:[{
					xtype:'button',
					text:'Download HeaderFilter.js',
					handler:function(){
						window.location.href="plugins/HeaderFilter.js";
					}
				},'-',{
					xtype:'button',
					text:'Download Example',
					handler:function(){
						window.location.href="plugins/HeaderFilter.zip";
					}
				}]
			}]
	    });
	}
});