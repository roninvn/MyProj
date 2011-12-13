Ext.define('FB.view.OptionsWindow', {
	extend : 'Ext.window.Window',
	alias : 'widget.OptionsWindow',
	modal: true,
	title: 'Options',
	id: 'optWin',
	layout:'hbox',
	
	width : 550,
	height: 300,
	
	items: [{
		xtype:'panel',
		height: 230,
		width: 250,
		items: [{
			padding: '20 0 0 0',
			xtype : 'textfield',
			id:'txtOption',
			fieldLabel: 'Option',
			width: 220
		},{
			xtype : 'textfield',
			id:'txtValue',
			fieldLabel: 'Value',
			width: 220
		},{
			xtype: 'button',
			text : 'Add',
			width : 100,
			margin : '20 0 0 100',
			handler: function(){
				var me  = Ext.getCmp('optWin');
				
				var opt = me.down('#txtOption').getValue();
				var val = me.down('#txtValue').getValue();
				
				if(opt === "" || val === ""){
					Ext.Msg.alert('Error', 'Option & Value cannot be empty.');
					return;
				}
				
				var store = me.down('#list').getStore();
				store.add({
					option: opt,
					value: val
				});
				
				me.down('#txtOption').setValue('');
				me.down('#txtValue').setValue('');
					
			}
		}]
	},{
		xtype: 'panel',
		padding: '0 0 0 20',
		height: 230,
		items:[{
			xtype:'gridpanel',
			title: 'Options',
			id:'list',
			width : 220,
			height : 150,
			columns: [
			          { header: 'Option',  dataIndex: 'option' },
			          { header: 'Value', dataIndex: 'value'}
			      ],
			 
			 store: Ext.create('Ext.data.Store', {				    
				    fields:['option', 'value'],
				    data:[],
				    proxy: {
				        type: 'memory'
				    }
				})
		},{
			xtype: 'button',
			text : 'Remove',
			width : 100,
			margin : '20 0 0 50',
			
			handler: function(){
				var me  = Ext.getCmp('optWin');
				var list = me.down('#list');
				var m = list.getSelectionModel().selected;				
				if(m)
					list.getStore().remove(m.items);
			}
		}]
	}],	
	
	initComponent : function() {
		this.callParent(arguments);
	},
	
	listeners: {
		beforeclose: function(){
			var opts = this.down('#list').getStore().getRange();
			if(this._control.info.type === "combobox")
				this._control._control.getStore().loadData(opts, false);
			
			else if(this._control.info.type === "radiogroup"){
				this._control._control.removeAll(true);
				for(var i=0; i<opts.length; i++){
					this._control._control.add({
						boxLabel : opts[i].data.option,
						name : opts[i].data.option,
						inputValue : opts[i].data.value,
					});
				}
			}
		},
		
		render: function(){
			if(this._control.info.type === "combobox")
				this.down('#list').getStore().loadData(this._control._control.getStore().getRange(), false);
			else if(this._control.info.type === "radiogroup"){
				var arr = [];
				this._control._control.items.each(function(itm){
					//console.log(itm);
					arr.push({
						option : itm.name,
						value: itm.inputValue
					});
				});
				this.down('#list').getStore().loadData(arr, false);				
			}
		}
	}
	
});
