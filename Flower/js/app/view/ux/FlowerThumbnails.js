/*
 * Flower thumb nail
 */
Ext.define('Flower.view.ux.FlowerThumbnails',{
	extend : 'Ext.view.View',
	alias : 'widget.FlowerThumbnails',
	tpl : '<tpl for=".">'
			+ '<div class="control-source" style="cursor:move"><img src = "{src}" style = "width:75px;" /></div>'
			+ '</tpl>',
	itemSelector : 'div.control-source',
	singleSelect : true,
	
	listeners : {
		render : function(v) {			
			v.dragZone = Ext.create('Ext.dd.DragZone',v.getEl(),{
					getDragData : function(e) {						
						var sourceEl = e.getTarget(v.itemSelector, 10), d;
						// console.log(sourceEl);
						if (sourceEl) {
							var se = sourceEl.cloneNode(true);

							return v.dragData = {
								sourceEl : sourceEl,
								repairXY : Ext.fly(sourceEl).getXY(),
								ddel : se,
								controlData : v.getRecord(sourceEl).data
							};
						}
					},
					getRepairXY : function(e) {
						return this.dragData.repairXY;
					},
					
					onDrag: function(e){
						
						var pos = e.getXY();						
						if(pos[0] < 500){
							//Ext.get(this.dragData.ddel).down('img').remove();
							//console.log(this.dragData.ddel);
							//this.dragData.ddel = this.dragData.ddel.cloneNode(false);
							//Ext.Element.get(Ext.Element.get(document.body).query('img[src="img/Flower10.jpg"]')[1]).applyStyles({'-webkit-transform': 'rotate(270deg)'});
							
							//Ext.Element.get(this.dragData.ddel).down('img').applyStyles({'-webkit-transform': 'rotate(270deg)'});
							
							//console.log(Ext.Element.get(document.body).query('img[src="img/Flower10.jpg"]')[1], this.dragData.ddel);
							Ext.get(v.dragZone.getDragEl()).down('img').applyStyles({'-webkit-transform': 'rotate(270deg)'});
							
						}
					}
				});
		}
	}
});