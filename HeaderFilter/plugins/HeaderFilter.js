Ext.define('Ext.ux.grid.HeaderFilter',{
	extend:'Ext.util.Observable',
	alias:'plugin.hfilter',
	uses:[
		'Ext.container.Container',
		'Ext.util.DelayedTask'
	],
	init:function(grid){
		var me=this;
		me.filterArray=[];
		grid.on({
			scope:me,
			afterrender:me.onGridRender,
			columnresize:me.onGridColumnResize,
			columnhide:me.onGridColumnHide,
			columnshow:me.onGridCOlumnShow
		});
		grid.addEvents('filterupdate');
	},
	updateBuffer:500,
	onGridColumnHide:function(headerCt,col){
		var filter=Ext.getCmp(col.id+"-filter");
		if(filter){filter.hide();}
	},
	onGridCOlumnShow:function(headerCt,col){
		var filter=Ext.getCmp(col.id+"-filter");
		if(filter){filter.show();}
	},
	onGridColumnResize:function(headerCt,col,width){
		var filter=Ext.getCmp(col.id+"-filter");
		if(filter){filter.setWidth(width);}
	},
	task:new Ext.util.DelayedTask(),
	onGridRender:function(grid,obj){
		var me=this;
		var container=Ext.create('Ext.container.Container',{
			dock:'top',
			componentCls:'x-column-hfilter',
			weight:101,
			height:22,
			layout:'hbox'
		});
		Ext.each(grid.headerCt.items.items,function(item){
			item=Ext.getCmp(item.id);
			if(!item.filter){
				var col=Ext.create("Ext.container.Container",{
					layout:'fit',
					componentCls:'x-column-no-filter',
					height:container.height,
					id:item.id+"-filter",
					hidden:item.hidden,
					width:item.flex||item.width
				});
			}
			else{
				var col=item.filter;
				Ext.apply(col,{
					layout:'fit',
					componentCls:'x-column-filter',
					id:item.id+"-filter",
					hidden:item.hidden,
					width:item.flex||item.width,
					listeners:{
						scope:me,
						change:function(field,newVal,oldVal,eOpts){
							me.task.delay(me.updateBuffer,function(){
    							var newFilter={property:item.dataIndex,value:newVal},myIndex=-1;
    							Ext.Array.forEach(me.filterArray,function(item2,index,allItems){if(item2.property===item.dataIndex){myIndex=index;}},this);
    							if(myIndex!=-1){me.filterArray.splice(myIndex,1);}
    							if(newVal){me.filterArray.push(newFilter);}
    							grid.store.clearFilter();
    							if(me.filterArray.length>0){grid.store.filter(me.filterArray);}
    							else{grid.store.filterBy(function(){return true;});}
    						});
						}
					}
				});
			}
			container.add(col);
		});
		grid.dockedItems.add(container);
	}
});