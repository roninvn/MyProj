/*
 * Class Control
 */
$.Class.extend("Control",
// static methods
{ ID: 0 },
// prototype methods
{	
	
	// called when a new instance is created
	init : function(cfg) {		
		this.props = {name : null};
		this.el.draggable({containment: 'parent', cursor: 'move'});
		this.el.resizable(); //make this resizable
	},
	
	showDialog: function(){		
	}
	,
	
	validateVal: function(dialog, arrControls){
		
		var name = dialog.find("#name").val();
		
		if(name.length === 0){
			alert("Name is empty");
			return false;
		}
		
		for(var i=0,l=arrControls.length; i<l; i++){
			if(arrControls[i] !== this && arrControls[i].props.name === name){
				alert("This name is used. Please enter a new one.");
				return false;
			}				
		}
		
		return true;
	},
	
	
	bindValue: function(dialog){		
		this.props.name = dialog.find("#name").val();		
	},
	
	getEl: function(){
		return this.el;
	}
});
