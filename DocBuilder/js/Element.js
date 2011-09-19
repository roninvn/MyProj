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
	},
		
	showDialog: function(){
		Application.currentElement = this;
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
		var arr = this.props.text.split("\n");
		var s = "";
		for(var i=0, l=arr.length; i<l; i++){
			s += "<p>" + arr[i] + "</p>";			
		}
		this.el.find("span").empty();
		this.el.find("span").append($(s));
		
	},
	
	loadValue: function(dialog){
		this._super(dialog);		
		dialog.find("#text").val(this.props.text);
	}
});