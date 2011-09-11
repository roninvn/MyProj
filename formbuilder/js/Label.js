var Label = $.buildClass({
	className:'Label',
	constructor: function(){ 
		this.el = $("#mainLabel").clone();
		this.propBoxID = "LabelProbBox";
		this.uber.constructor();	
	},
	setProp: function(){
		var name	= $(("#" + this.propBoxID + "Name")).val();		
		var text	= $(("#" + this.propBoxID + "Text")).val();
		
		if(text == "")
			text = "[Label]";
		
		this.el.children('label').text(text);
		
		this.el.children('label').attr('name', name);
		this.el.children('.childControl').attr('style', $('#' + this.propBoxID + " #txtStyle").val());
		
		this.hidePropBox();
	},
	
	clone: function(){
		var obj;
		
  		eval("obj =  new " + this.className + "();");
  		obj.el.children('label').attr("name", this.el.children('label').attr("name"));
  		obj.el.children('label').attr("style", this.el.children('label').attr("style"));
  		
  		obj.el.children('label').text(this.el.children('label').text());
  		
  		return obj;
	}
	
}, mainControl);