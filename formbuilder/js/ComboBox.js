var ComboBox = $.buildClass({
	className:'ComboBox',
	
	constructor: function(){ 
		this.el = $("#mainComboBox").clone();
		this.propBoxID = "ComboBoxProbBox";
		this.uber.constructor();
	},
	/*
	 * override the function setProp of Main Control
	 */
	setProp: function(){
		var name	= $(("#" + this.propBoxID + "Name")).val();
		
		var me = this;
		me.el.children('select').children('option').remove();
		$("#" + this.propBoxID +"OptionList option").each(function() {
			 var name		= $(this).text();
			 var val		= $(this).val();
			 var option	= '<option value="'+val+'">'+ name +'</option>';
			 me.el.children('select').append(option);
         });
		
		this.el.children('select').attr('name', name);
		this.el.children('.childControl').attr('style', $('#' + this.propBoxID + " #txtStyle").val());
		this.hidePropBox();
	},
	
	clone: function(){
		var obj;
		
  		eval("obj =  new " + this.className + "();");
  		obj.el.attr("name", this.el.attr("name"));
  		obj.el.attr("style", this.el.attr("style"));
  		
  		this.el.children('select').children('option').each(function(){
			 var name		= $(this).text();
			 var val		= $(this).val();
			 var option	= '<option value="'+val+'">'+ name +'</option>';
			 obj.el.children('select').append(option);
			 
  		});
  		
  		return obj;
	}
	
}, mainControl);