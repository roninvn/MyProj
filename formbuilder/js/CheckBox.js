var CheckBox = $.buildClass({
	className:'CheckBox',
	constructor: function(){ 
		this.el = $("#mainCheckBox").clone();
		this.propBoxID = "CheckBoxProbBox";
		this.uber.constructor();
	}
}, mainControl);