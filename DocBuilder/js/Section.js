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
		this.showDialog();
	},
	
	showDialog: function(){
		Application.sectionDlg.dialog("open");
	}

});
