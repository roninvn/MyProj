/*
 * class Section
 */
Control.extend("Section",
// static methods
{
},
// prototype methods
{
	init : function(cfg){		
		this.el = $("<div></div>").addClass("Section");		
		this._super(cfg);		
		this.props.elements = [];
		this.showDialog();
		
		this.el.droppable({
			greedy:true,
			drop: function(ev, ui) {
				if($(ui.draggable[0]).attr("role") === "dialog")
					return;
				
				if(ui.draggable[0].nodeName.toLowerCase() === 'img' && ui.draggable[0].id === "Section"){
					Application.dropSection(ev, ui);
					return;
				}
				
				if(ui.draggable[0].nodeName.toLowerCase() === 'img' && ui.draggable[0].id !== "Section"){
					eval('var c = new ' + ui.draggable[0].id + '();');
				}
				
				
			}//end drop
		});//end droppable
		
	},
	
	showDialog: function(){
		Application.sectionDlg.dialog("open");
	},
	
	/*
	 * validate inputed properties 
	 */
	validateVal: function(dialog, arrControls){		
		return this._super(dialog, arrControls);		
	},
	
	bindValue: function(dialog){
		this._super(dialog);
	}
});
