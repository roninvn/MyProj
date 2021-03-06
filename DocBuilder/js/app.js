/*
 * Class Application
 */
$.Class.extend("Application",
// static methods
{
	sections : [],
	vars: [],	
	currentSection: null,
	sectionDlg: null,
	
	dialogMouseover: function(e){
		e.preventDefault();
	},
	
	translateCoord: function (p, c){
		
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
	},
	
	dropSection: function(e, ui){
		if($(ui.draggable[0]).attr("role") === "dialog")
			return;
		
		if(ui.draggable[0].nodeName.toLowerCase() === 'img'){
			if(ui.draggable[0].id !== "Section")
				alert('Only section can be dropped here.');
			else{
				
				if(Application.currentSection !== null)
					return;
				
				var c = new Section();
				//Application.sections.push(c);
				
				//clear for new section
				$("#centerPanel").empty();
				c.getEl().resizable({disabled: true});
				c.getEl().appendTo($("#centerPanel"));
				
				var pos = Application.translateCoord($("#centerPanel"), ui);
				
				c.getEl().css({
					top : pos.top +"px",
					left : pos.left +"px"
				});
			}
		}
	},// end dropSection
	
	
	cancelClick: function(){
		$("#centerPanel").empty();
		Application.currentSection = null;
	},
	
	continueClick: function(){
		var doc = {};
		doc.name = "MyDoc";
		doc.sections=[];
		for(var i=0,l=Application.sections.length; i<l; i++){
			var s = Application.sections[i];
			var sec ={};
			sec.name = s.props.name;
			sec.optional = s.props.checked;
			sec.elements=[];
			if(s.el && s.el.attr)
				sec.style = s.el.attr('style');
			else if(s.style)
				sec.style = s.style;
			else
				sec.style = "";
			
			doc.sections.push(sec);
			
			for(var x=0,y=s.props.elements.length; x<y; x++){
				var e = s.props.elements[x];
				var ele = {};
				ele.name = e.props.name
				ele.text = e.props.text;
				ele.orderindex = e.props.orderindex;
				if(e.el && e.el.attr)
					ele.style = e.el.attr('style');
				else if(e.style)
					ele.style = e.style;
				else
					ele.style = "";
				
				ele.inputs = Application.getVarsinElement(e);
				
				sec.elements.push(ele);
			}
			
			//sec.inputs = Application.getVarsinSections(s);
		}
		
		var json = $.toJSON(doc);
		Application.contDlg.find("textarea").text(json);
		Application.contDlg.dialog("open");
	},
	
	
	getVarsinElement: function(e){
		var vars = [];
		for(var i=0, l=Application.vars.length; i<l; i++){
			var v = Application.vars[i];
			if(e.props.text.indexOf("${" + v.props.name + "}") !== -1)
				vars.push({name: v.props.name, text: v.props.text});
		}
		
		return vars;
	},
	
	
	getVarsinSections: function(s){
		var vars = [];
		for(var i=0, l=Application.vars.length; i<l; i++){
			for(var ii=0, ll=s.props.elements.length; ii<ll; ii++){
				var ele = s.props.elements[ii];
				var v = Application.vars[i];
				if(ele.props.text.indexOf("${" + v.props.name + "}") != -1){
					vars.push({name: v.props.name, text: v.props.text});
					break;
				}
				
			}
		}
		return vars;
	},
	
		
	saveClick: function(){
		//build link		
		if(Application.currentSection !== null){
			
			Application.addSection(Application.currentSection);			
			
			Application.buildSectionLink();
			
			$("#centerPanel").empty();
			Application.currentSection = null;
		}
	},
	
	buildSectionLink: function(){
		$("#rightPanel").empty();
		for(var i=0,l=Application.sections.length; i<l; i++){
				var s = Application.sections[i];
				var d=$("<div></div>").appendTo("#rightPanel");
				var a = $("<a class = 'sectionLink' href='#'></a>").text(s.props.name).appendTo(d);
				var updown = $("<div class ='sectionUpDown'><a href='#' id='aUp' >UP</a>  <a href='#' id= 'aDown'>DOWN</a> <a href='#' id= 'aDel' class='btnDelete2'>X</a></div>").appendTo(d);
				
				a.click(function(e){					
					var name=$(this).text();
					Application.loadSection(name)
					return false;
				});
				
				updown.find('#aUp').click(function(){
					var name = $($(this).parent().parent().children()[0]).text();
					var index = Application.getSectionIndex(name);
					
					if(index !==-1 && index !== 0){
						var obj2 = Application.sections[index-1];
						 Application.sections[index-1] =  Application.sections[index];
						  Application.sections[index] = obj2;
						  Application.buildSectionLink();
					}
					
					return false;
				});
				
				updown.find('#aDown').click(function(){
					
					var name = $($(this).parent().parent().children()[0]).text();
					var index = Application.getSectionIndex(name);
					
					if(index !==-1 && index !== Application.sections.length-1){
						var obj2 = Application.sections[index+1];
						 Application.sections[index+1] =  Application.sections[index];
						  Application.sections[index] = obj2;
						  Application.buildSectionLink();
					}
					
					return false;
				});
				
				updown.find('#aDel').click(function(){
					var name = $($(this).parent().parent().children()[0]).text();
					var index = Application.getSectionIndex(name);					
					Application.sections.splice(index,1);
					if(Application.currentSection && Application.currentSection.props.name === name){
						Application.removeSection();
					}
					Application.buildSectionLink();
					return false;
				});
				
			}
	},
	
	
	getSectionIndex: function(name){
		for(var i=0,l=Application.sections.length; i<l; i++){
			var s = Application.sections[i];
			if(s.props.name === name){
				return i;
			}
		}
		return -1;
	},
	
	
	addSection: function(s){
		
		var ss = Application.cloneSection(s);
		//sort by orderindex
		for(var ii = 0; ii < ss.props.elements.length-1; ii++)
			for(var jj = ii+1; jj < ss.props.elements.length; jj++){
				if(ss.props.elements[ii].props.orderindex > ss.props.elements[jj].props.orderindex){
					var t = ss.props.elements[ii];
					ss.props.elements[ii] = ss.props.elements[jj];
					ss.props.elements[jj] = t;
				}
			}
		
		for(var i=0,l=Application.sections.length; i<l; i++){
			if(Application.sections[i].props.name === ss.props.name || Application.sections[i].props.name === s.oldName){
				Application.sections[i] = ss;								
				return;
			}
		}
		
		Application.sections.push(ss);
		
	},
	
	loadSection: function(name){		
		for(var i=0,l=Application.sections.length; i<l; i++){			
			var s = Application.sections[i];
			
			if(s.props.name === name){				
				$("#centerPanel").empty();
				//s.getEl().appendTo("#centerPanel");
				Application.currentSection = Application.cloneSection(s);
				Application.currentSection.oldName = s.props.name;
				//s.el.attr("style", s.style);
				Application.currentSection.getEl().appendTo("#centerPanel");
				Application.currentSection.doConfig();
				
				return;
			}
			
		}
	},
	
	cloneSection: function(s){
		var id = s.props.id;		
		var ss = new Section({hideDlg: true, id: id});
		//console.log(s);
		if(s.el && s.el.attr)
			ss.el.attr("style", s.el.attr("style"));
		else if(s.style){
			ss.el.attr("style", s.style);
			//delete s.style;
		}
		else
			ss.el.attr("style", "");
			
		
		ss.props.name = s.props.name;
		ss.props.checked = s.props.checked
		ss.props.elements = [];
		ss.props.id = id;
		
		for(var i=0, l=s.props.elements.length; i<l; i++){ //clone elements
			var e = new Element({hideDlg: true});
			
			if(s.props.elements[i].el && s.props.elements[i].el.attr)
				e.el.attr("style", s.props.elements[i].el.attr("style"));			
			else if(s.props.elements[i].style){				
				e.el.attr("style", s.props.elements[i].style);
				//delete s.props.elements[i].style;
			}
			else
				e.el.attr("style", "");
			
			//e.el.attr("style", s.props.elements[i].el.attr("style"));
			
			e.props.name = s.props.elements[i].props.name;
			e.props.text = s.props.elements[i].props.text;
			e.props.orderindex = s.props.elements[i].props.orderindex;
			e.el.appendTo(ss.el);
			
			
			var arr = e.props.text.split("\n");
			var str = "";
			for(var x=0, y=arr.length; x<y; x++){
				str += "<p>" + arr[x] + "</p>";			
			}
			e.el.find("span").empty();
			e.el.find("span").append($(str));
			
			
			ss.props.elements.push(e);
		}
		
		return ss;
	},
	
	onKeyDown: function(e){
		if(e.keyCode === 46 && Application.selElement)
			Application.currentSection.removeElement(Application.selElement);
	},
	
	loadVarsOption: function(opt){
		opt.empty();
		for(var i=0,l=Application.vars.length; i<l; i++){
			var s = Application.vars[i].props;
			var ss = $("<option></option>").val(s.name).text(s.name);
			ss.appendTo(opt);
		}
	},
	
	varIsUsed: function(vname){		
		for(var i=0, l=Application.sections.length; i<l; i++){			
			var s = Application.sections[i];
			for(var x=0, y=s.props.elements.length; x<y; x++){
				var e = s.props.elements[x];
				if(e.props.text.indexOf("${" + vname + "}") != -1)
					return true;
			}
		}
		
		var s = Application.currentSection;
		for(var x=0, y=s.props.elements.length; x<y; x++){
			var e = s.props.elements[x];
			if(e.props.text && (e.props.text.indexOf("${" + vname + "}") != -1))
				return true;
		}
		
		return false;
		
	},
	/*
	 * remove the section
	 */
	removeSection: function(){
		if(Application.currentSection){
			Application.currentSection.el.remove();
			Application.currentSection = null;
		}
	},
	/*
	 * load from saved json string
	 */
	loadFromJSON: function(jsonStr){
		$("#centerPanel").empty();
		Control.ID = 0;
		Application.vars = [];	
		Application.currentSection = null;
		Application.sections = $.parseJSON(jsonStr).sections;
		Application.vars = [];
		//normalize array
		
		for(var i=0; i< Application.sections.length; i++){
			var sec = Application.sections[i];
			sec.props = {};
			sec.props.name = sec.name;
			sec.props.id = ++Control.ID;
			sec.props.elements = sec.elements;
			sec.props.checked = sec.optional;
			delete sec.elements;
			
			for(var j=0; j< sec.props.elements.length; j++){
				var e = sec.props.elements[j];
				e.props = {};
				e.props.name = e.name;
				e.props.text = e.text;
				e.props.orderindex = e.orderindex;
				
				for(var k=0; k< e.inputs.length; k++){
					Application.addVar(e.inputs[k].name);
				}
			}
			
		}
		
		Application.buildSectionLink();
		
	},
	
	addVar: function(varname){
		for(var i=0; i<Application.vars.length; i++){
			if(Application.vars[i].props.name === varname)
				return;
		}
		
		var v = new Variable({hideDlg: true});
		v.props.name = varname;
		Application.vars.push(v);
	}
	
},
// prototype methods
{
	// called when a new instance is created
	init : function(cfg) {
		
		$(document).keydown(Application.onKeyDown);
		
		$("button").button();
		
		$("#btnCancel").click(Application.cancelClick);
		$("#btnSave").click(Application.saveClick);
		$("#btnContinue").click(Application.continueClick); 
		
		
		Application.sectionDlg = $("#dialog-Section");
		Application.elementDlg = $("#dialog-Element");
		Application.variableDlg = $("#dialog-Variable");
		Application.contDlg = $("#dialog-Continue");
		
		
		$("#addVar").click(function(){
			var s = $("#selVars option:selected").val();
			
			if(s === undefined)
				return;
			
			var sel = $("#dialog-Element #text").getSelection();			
			var str = $("#dialog-Element #text").val();			
			var s2 = str.substr(0,sel.start) + "${" + s + "}" + str.substr(sel.start);
			$("#dialog-Element #text").val(s2);
			
			
		});
		
		$("#saveVar").click(function(){
			var name = $("#dialog-Element #varname").val();
			if(name.length ===0)
				return;
			
			var arrControls = Application.vars;
			
			for(var i=0,l=arrControls.length; i<l; i++){
				if(arrControls[i].props.name === name){					
					alert("This name is used. Please enter a new one.");
					return;
				}				
			}
			
			var v = new Variable();
			v.props.name = name;
			v.props.text = $("#dialog-Element #varvalue").val();
			Application.vars.push(v);			
			Application.loadVarsOption($("#selVars"));
			
			Application.elementDlg.find("#varname").val("");
			Application.elementDlg.find("#varvalue").val("");
			
		});
		
		$("#deleteVar").click(function(){
			var s = $("#selVars option:selected").val();			
			if(s === undefined)
				return;
			
			if(Application.varIsUsed(s) || ($("#dialog-Element #text").val().indexOf("${" + s + "}") !==-1) ){
				alert("This variable is in used.");
				return;
			}
			
			for(var i=0,l=Application.vars.length; i<l; i++){
				if(s === Application.vars[i].props.name){
					Application.vars.splice(i,1);
					Application.loadVarsOption($("#selVars"));
					return;
				}				
			}
			
		});
		
		Application.contDlg.dialog({
			autoOpen: false,
			height: 400,
			width: 400,
			modal: true,
			resizable: false,
			
			open: function(){
				$('.Control').resizable({disabled: true});
			},			
			close: function(){
				$('.Control').resizable({disabled: false});
			}
		});
		
		Application.sectionDlg.dialog({
			autoOpen: false,
			height: 200,
			width: 400,
			modal: true,
			resizable: false,
			
			beforeClose: function(e,ui){//validate & bind data to new section
				if(Application.currentSection.validateVal(Application.sectionDlg, Application.sections)){
					Application.currentSection.bindValue(Application.sectionDlg);
					return true;
				}
				return false;
			},
			
			open:function(e,u){				
				$('.Control').resizable({disabled: true});
				Application.sectionDlg.find("#opt").prop("checked", false);
				Application.currentSection.loadValue(Application.sectionDlg);
			},			
			close: function(){
				$('.Control').resizable({disabled: false});
			}
		});
		
		Application.elementDlg.dialog({
			autoOpen: false,
			height: 450,
			width: 600,
			modal: true,
			resizable: false,
			
			beforeClose: function(e,ui){//validate & bind data to new section
				if(Application.currentElement.validateVal(Application.elementDlg, Application.currentSection.props.elements)){
					Application.currentElement.bindValue(Application.elementDlg);
					return true;
				}
				return false;
			},
			
			open:function(e,u){
				$('.Control').resizable({disabled: true});
				Application.elementDlg.find("#varname").val("");
				Application.elementDlg.find("#varvalue").val("");
				Application.currentElement.loadValue(Application.elementDlg);
				Application.loadVarsOption($("#selVars"));
			},			
			close: function(){
				$('.Control').resizable({disabled: false});
			}
		});
		
		Application.variableDlg.dialog({
			autoOpen: false,
			height: 200,
			width: 400,
			modal: true,
			resizable: false,
			
			beforeClose: function(e,ui){//validate & bind data to new section
				if(Application.currentVariable.validateVal(Application.variableDlg, Application.vars)){
					Application.currentVariable.bindValue(Application.variableDlg);
					return true;
				}
				return false;
			},
			
			open:function(e,u){
				$('.Control').resizable({disabled: true});
				Application.currentVariable.loadValue(Application.variableDlg);
			},			
			close: function(){
				$('.Control').resizable({disabled: false});
			}
		});
		
		$("#leftPanel img").draggable({helper: 'clone',cursor: 'move', revert: "invalid" });		
		$("#centerPanel").droppable({			
			drop: Application.dropSection//function(e, ui){}
		});
		
	}// end init
});
var myapp = new Application();
$(document).trigger('DocBuilderReady');