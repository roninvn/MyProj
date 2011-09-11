var Fieldset = $.buildClass({
	className:'Fieldset',
	constructor: function(){ 	
		this.el = $("#mainFieldset").clone();
		this.isContainer	= true;
		this.propBoxID = "FieldSetProbBox";
		
		this.uber.constructor();	
	},
	setProp: function(){
		var name	= $(("#" + this.propBoxID + "Name")).val();		
		var legend	= $(("#" + this.propBoxID + "Legend")).val();
		
		if(legend == "")
			legend = "[Fieldset]";		
		$(("#" + this.id + " legend")).text(legend);
		this.el.attr('name', name);
		this.el.attr('style', $('#' + this.propBoxID + " #txtStyle").val());
		this.hidePropBox();
	},
	
	clone: function(){
		
		var obj;		
  		eval("obj =  new " + this.className + "();");
  		obj.el.attr("name", this.el.attr("name"));
  		obj.el.attr("style", this.el.attr("style"));
  		
  		obj.el.children('legend').text(this.el.children('legend').text());
  		
  		return obj;
		
		
	}
	
}, mainControl);