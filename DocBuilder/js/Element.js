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
		this.el = $("<div></div>").addClass("Element");		
		this._super(cfg);
		this.showDialog();		
	},
	
	showDialog: function(){
		//Application.sectionDlg.dialog("open");
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
