
var uid	= 0;
var cfg = {currControl : null};

var arrControls = [];

function translateCoord(p, c){
	
	
	var pos = {};
	
	var off1 = p.offset();
	var off2;
	if(typeof c.offset == 'function')
		off2 = c.offset();
	else
		off2 = c.offset;
	
	pos.left = off2.left - off1.left;
	pos.top = off2.top - off1.top;	
	return pos;
	
}

function getDomConfig ($items){
	
	var arr = [];
	
    $items.each(function() {
    	
    	if(this.nodeName.toLowerCase() != 'legend'){
    	
	    	var obj	= {};
	   		obj.xtype	= this.nodeName.toLowerCase();
	   		obj.name	= $(this).attr('name');
	   		obj.style	= $(this).attr('style');
	   		
	   		if(obj.xtype == "select") {
	   			obj.options = [];
	   			var options	= {};
	   			
	   			$(this).find('option').each(function() {
					 options.option		= $(this).text();
					 options.value		= $(this).val();
			
					 obj.options.push(options);
		         });
	   		}
	   		else if(obj.xtype == "input"){
	   			obj.xtype = $(this).attr('type');
	   		}
	   		else if(obj.xtype == "fieldset"){
	   			obj.legend = $(this).find('legend').text();
	   		}
	   		
	   		arr.push(obj);
	   		
	   		obj.items = getDomConfig($(this).children());
	   		
	   		if(obj.items.length == 0)
	   			obj.items = undefined;
   		}
    });  
     
    return arr; 
}

$(document).ready(function() {
	
	$('#Content').editableText({
        // default value
        newlinesEnabled: true
   });
	
	(function(){
            $(function() {
        		$('#tabs1').tabs({
					    closable: false, 
					    cache:true
					 });
		});	
	})(jQuery);	
	
	$("#rbMenu li").draggable({helper: 'clone'});
	
	
	$("ul li a").click(function() {
		
		if( $(this).attr('href') == "#divView") {
			var c = $("#Content").clone();
			c.appendTo($("#divView"));
			$("#divView").find('.ui-resizable-handle').remove();
			$("#divView").find('.ui-draggable').removeClass('ui-draggable ui-resizable ui-droppable');
			$("#divView").find('.clickthrough').removeClass('clickthrough');
			
			$("#divView #Content").css({
				top:"0px",
				left:"0px",
				margin: "0px"
			});
			
			$("#divJsonContinue").show();
			
			//.css({
				//top : $("#divView #Content").height() + 70 + "px"
			//})
		}
		else {
			
			$("#divView #Content").remove();
		}
		
	});
	
	$(("#btnJSONContinue")).click(function() {
		
		var object = getDomConfig($("#divView").children());
		alert($.toJSON(object));
	});
	
	$("#Content").droppable({
		  drop: function(ev, ui) {
			  	
			  	var id	= ui.draggable[0].id;
				ev.stopPropagation();
				if(ui.draggable[0].nodeName.toLowerCase() === 'li'){
					
					var pos = translateCoord($("#Content"), ui);
					
			  		var obj;				  		
			  		eval("obj =  new " + id + "();");
					obj.el.css({
						top : pos.top +"px",
						left : pos.left +"px"
					});	
			  		obj.append('Content');
			  		arrControls[obj.id] = obj;
			  		cfg.currControl = obj;
			  		obj.showPropBox();
		  		}
				else{
					
					if($('#' + id).parent().attr('id') == 'Content')
						return;
					
					var pos = translateCoord($("#Content"), arrControls[id].el);
					
					$('#'+id).remove();
					var obj = arrControls[id].clone();
					obj.append('Content');
					
					obj.el.css({
						top : pos.top +"px",
						left : pos.left +"px"
					});	
					arrControls[obj.id] = obj;					  		
			  		arrControls[id] = undefined;
					
				}
		}});
	
	
	$("#btnAddComboBoxProbBoxOption").click(function() {
		
		var option	= $('#ComboBoxProbBoxOption').val();
		var value	= $('#ComboBoxProbBoxValue').val();
		
		var combooption	= '<option value="'+value+'">'+ option +'</option>';
		
		$('#ComboBoxProbBoxOptionList').append(combooption);
		
		 $('#ComboBoxProbBoxOption').val('');
		 $('#ComboBoxProbBoxValue').val('');
	});
	
	
	$("#btnRemoveComboBoxProbBoxOption").click(function() {
		$("#ComboBoxProbBoxOptionList option[value='"+ $('#ComboBoxProbBoxOptionList').val() +"']").remove();
	});
	
	$(("#btnComboBoxProbBoxOK")).click(function() {
		cfg.currControl.setProp();
	});
	
	
	//catch delete & insert key
	$(document).keyup(function(ev) {		
		if(cfg.currControl){
			if(ev.keyCode == 46){ //delete
				ev.preventDefault();
				cfg.currControl.deleteMe();
			}
			else if(ev.keyCode == 45){ //Insert
				ev.preventDefault();
				cfg.currControl.showPropBox();
			}
		}
		
	});
	
	$('#Content').resizable();
	
});


