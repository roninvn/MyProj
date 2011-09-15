/*
 * class Element
 */
Control.extend("Element",
// static methods
{
},
// prototype methods
{
	init : function(cfg){		
		this.el = $("<div><span></span></div>").addClass("Element");
		Application.currentElement = this;	
		this._super(cfg);
		this.showDialog();
		
		this.doConfig();
	},
	
	doConfig: function(){
		this._super();
		this.el.find("span").editable();
	},
		
	showDialog: function(){
		Application.elementDlg.dialog("open");
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
