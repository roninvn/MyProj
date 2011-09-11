var TextArea = $.buildClass({
	className:'TextArea',
	constructor: function(){ 
		this.el = $("#mainTextArea").clone();	
		this.propBoxID = "TextAreaProbBox";
		this.uber.constructor();	
	}
}, mainControl);