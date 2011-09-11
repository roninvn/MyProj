var mainControl = $.buildClass({
	
	id: null,
	name:null,
	style:null,
	el:null,
	isContainer:false,
	propBoxID : null,
	isSelected : false,
	
	constructor: function(){
		
		if($.browser.msie){ //fix div cant clickthrough on IE		
			
			if(this.className !='CheckBox')
				this.el.children().css({
					width:'85%'
				});
			
		}
		
		uid++;
		this.id = 'uid' + uid;
		this.el.attr('id', this.id);
		this.el.owner = this;
		var me = this;
		/*
		this.el.click(function(e){
			me.el.trigger('dragstart');
		});*/
		
		this.el.draggable();
		
		if(this.className !='CheckBox')
			this.el.resizable({				
				stop:function(ev,ui){					
						ui.element.children('.childControl').css({
							height: '100%'
						});
				}
				
			}); //make this resizable

		if(this.isContainer) {		
			this.el.droppable({
				greedy:true,
				drop: function(ev, ui) {					
						var id	= ui.draggable[0].id;
						ev.stopPropagation();
						if(ui.draggable[0].nodeName.toLowerCase() === 'li'){
							
							var pos = translateCoord(me.el, ui);
							
					  		var obj;				  		
					  		eval("obj =  new " + id + "();");
							obj.el.css({
								top : pos.top-10 +"px",
								left : pos.left +"px"
							});	
					  		me.appendToMe(obj);
					  		arrControls[obj.id] = obj;
					  		cfg.currControl = obj;
					  		obj.showPropBox();
				  		}
						else{
							
							if($('#' + id).parent().attr('id') == me.id)
								return;
							
							var pos = translateCoord(me.el, arrControls[id].el);
							
							$('#'+id).remove();
							var obj = arrControls[id].clone();
							me.appendToMe(obj);
							obj.el.css({
								top : pos.top-22 +"px",
								left : pos.left-3 +"px"
							});							
							
							arrControls[obj.id] = obj;					  		
					  		arrControls[id] = undefined;

							
							
						}
				  		
				  		
				  	}
				});
		}

		
		this.el.mouseover(function(e) {			
			  e.stopPropagation();
			  
			  me.isSelected = true;
			  me.el.css("outline", "dashed 1px red");
			  cfg.currControl = me;
			});

		this.el.mouseout(function(e) {
		  e.stopPropagation();
		  
		  me.isSelected = false;
		  me.el.css("outline", "");
		  cfg.currControl = null;
		});
	},
	
	append: function(id) {
		this.el.appendTo($("#" + id));
	},
	
	appendToMe:function(obj) {
		obj.el.appendTo(this.el);
	},
	
	
	showPropBox: function(){

		var me = this;
		
		$(("#btn" + me.propBoxID + "Cancel")).unbind();
		$(("#btn" + me.propBoxID + "OK")).unbind();
		
		
		
		$(("#btn" + me.propBoxID + "Cancel")).click(function() {
			me.hidePropBox();
		});
		
		$(("#btn" + me.propBoxID + "OK")).click(function() {
			me.setProp();
		});
		
		if(this.className !='CheckBox'){
			$(("#" + this.propBoxID + "Name")).val(this.el.children('.childControl').attr('name'));
			
			if(this.className !='Fieldset')
				$('#' + this.propBoxID + " #txtStyle").val(this.el.children('.childControl').attr('style'));
			else{
				
				$('#' + this.propBoxID + " #txtStyle").val(this.el.attr('style'));
			}
		}
		else{
			$(("#" + this.propBoxID + "Name")).val(this.el.children('.childControl2').attr('name'));
			$('#' + this.propBoxID + " #txtStyle").val(this.el.children('.childControl2').attr('style'));
		}
		 
		 if($("#" + this.propBoxID + "Legend").length > 0){
			 $("#" + this.propBoxID + "Legend").val($("#" + this.id + " legend").text());
		 }
		 
		 
		 
		 
		 if($(("#" + this.propBoxID + "Text")).length > 0){
			 $(("#" + this.propBoxID + "Text")).val(this.el.text());
		 }
		 
		 $('#ComboBoxProbBoxOptionList').children('option').remove();
		 
		 this.el.children('select').children('option').each(function(){
			 var name		= $(this).text();
			 var val		= $(this).val();
			 var option	= '<option value="'+val+'">'+ name +'</option>';
			 $('#ComboBoxProbBoxOptionList').append(option);
			 
  		});
		 
		
			 
		$.blockUI(
			{ 
				message: $('#' + this.propBoxID),
				css:{
					width: "500px"
				}
			
			}
		); 		
	},
	
	hidePropBox:function() {
		 $.unblockUI({}); 
	},
	
	setProp: function(){		
		var name	= $(("#" + this.propBoxID + "Name")).val();
		
		if(this.className !='CheckBox'){			
			this.el.children('.childControl').attr('name', name);
			this.el.children('.childControl').attr('style', $('#' + this.propBoxID + " #txtStyle").val());
		}
		else{
			this.el.children('.childControl2').attr('name', name);
			this.el.children('.childControl2').attr('style', $('#' + this.propBoxID + " #txtStyle").val());
		}
		this.hidePropBox();
	},	
	
	showBoundDiv: function(){
		var control	= this.el;
		
		position	= control.position();
		width		= control.width();
		height		= control.height();
		
		$('#divBorderclose').css({
			top: position.top - 5+"px",
			left: position.left - 5 +"px",
			width: width + 10 + "px",
			height: height + 10 + "px",
			visibility: "visible",
			position:"absolute",
			border: "3px coral solid"
		});
		
		$('#divMenuBox').css({
			top: (position.top - 20) +"px",
			left: (position.left + width - 55) +"px",
			visibility: "visible",
		});
		
		$('#divBorderclose').show();
		$('#divMenuBox').show();
	},
	hideBoundDiv:function(){
		$('#divBorderclose').hide();
		$('#divMenuBox').hide();
	},
	deleteMe: function(){
		this.el.remove();
		this.hideBoundDiv();
	},
	
	clone : function(){
		
		var obj;		
  		eval("obj =  new " + this.className + "();");
  		obj.el.attr("name", this.el.attr("name"));
  		obj.el.attr("style", this.el.attr("style"));
  		
  		return obj;
	}
}); 