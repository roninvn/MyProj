var TextField = $.buildClass({
	className:'TextField',
	constructor: function(){ 
		this.propBoxID = "TextFieldProbBox";
		this.el = $("#mainTextBox").clone();
		this.uber.constructor();		
	}
}, mainControl);