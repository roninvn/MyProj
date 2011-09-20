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
		Application.currentSection = this;
		
		this._super(cfg);
		
		this.props.elements = [];
		//this.props.vars = [];
		this.showDialog();
		
		this.doConfig();
	},
	
	doConfig: function(){
		this._super();
		
		for(var i=0,l=this.props.elements.length; i<l; i++){
			this.props.elements[i].doConfig();
		}
		
		/*for(var i=0,l=this.props.vars.length; i<l; i++){
			
			this.props.vars[i].doConfig();
		}*/
		
		var me = this;
		
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
					//eval('var c = new ' + ui.draggable[0].id + '();');
					var c;
					if(ui.draggable[0].id === "Element" ){
						c = new Element();						
						me.props.elements.push(c);						
					}
					/*else if(ui.draggable[0].id === "Variable" ){
						c = new Variable();						
						me.props.vars.push(c);						
					}*/
					
					var pos = Application.translateCoord(me.getEl(), ui);
					
					c.getEl().css({
						top : pos.top +"px",
						left : pos.left +"px"
					});
					
					c.getEl().appendTo(me.getEl());
					
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
		this.props.checked = dialog.find("#opt").is(':checked');
	},
	
	loadValue: function(dialog){
		this._super(dialog);
		dialog.find("#opt").prop("checked", this.props.checked);
	},
	
	removeElement: function(ele){
		for(var i=0,l=this.props.elements.length; i<l; i++){
			if(this.props.elements[i] === ele){
				ele.el.remove();
				this.props.elements.splice(i,1);
				return;
			}				
		}
	}
});