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
		this._super(cfg);
		
		this.props.elements = [];
		this.el = $("<div></div>").addClass("Section");		
		this.showDialog();
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
