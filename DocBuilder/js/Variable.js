/*
 * class Variable
 */
Control.extend("Variable",
// static methods
{
},
//prototype methods
{
	init : function(cfg){		
		this.el = $("<div></div>");
		Application.currentVariable = this;	
		this._super(cfg);
		//this.showDialog();
		
		//this.doConfig();
	},
	
	showDialog: function(){
		Application.variableDlg.dialog("open");
	},
	
	/*
	 * validate inputed properties 
	 */
	validateVal: function(dialog, arrControls){		
		return this._super(dialog, arrControls);		
	},
	
	bindValue: function(dialog){
		this._super(dialog);
		this.props.text = dialog.find("#text").val();		
		this.el.find("span").text(this.props.text);
	},
	
	loadValue: function(dialog){
		this._super(dialog);
		dialog.find("#text").val(this.props.text);
	}
});