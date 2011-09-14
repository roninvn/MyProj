/*
 * Class Application
 */
$.Class.extend("Application",
// static methods
{
	sections : [],
	currentSection: null,
	sectionDlg: null,
	
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
				var c = new Section();
				//Application.sections.push(c);
				
				//clear for new section
				$("#centerPanel").empty();									
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
	},
	
	continueClick: function(){
		var doc = {};
		doc.name = "MyDoc";
		doc.sections=[];
		for(var i=0,l=Application.sections.length; i<l; i++){
			var s = Application.sections[i];
			var sec ={};
			sec.name = s.props.name;
			sec.elements=[];
			sec.inputs=[];
			doc.sections.push(sec);
			
			for(var x=0,y=s.props.elements.length; x<y; x++){
				var e = s.props.elements[x];
				var ele = {};
				ele.name = e.props.name
				ele.text = e.props.text;
				sec.elements.push(ele);
			}
			
			for(var x=0,y=s.props.vars.length; x<y; x++){
				var v = s.props.vars[x];
				var vr = {};
				vr.name = e.props.name
				vr.text = e.props.text;
				sec.inputs.push(vr);
			}
		}
		
		var json = $.toJSON(doc);
		Application.contDlg.find("textarea").text(json);
		Application.contDlg.dialog("open");
	},
		
	saveClick: function(){
		//build link		
		if(Application.currentSection !== null){
			$("#rightPanel").empty();
			Application.addSection(Application.currentSection);			
			
			for(var i=0,l=Application.sections.length; i<l; i++){
				var s = Application.sections[i];
				var d=$("<div></div>").appendTo("#rightPanel");
				var a = $("<a href='#'></a>").text(s.props.name).appendTo(d);
				
				a.click(function(e){
					var name=$(e.srcElement).text();
					Application.loadSection(name)
					return false;

				});
			}
		}
	},
	
	addSection: function(s){
		for(var i=0,l=Application.sections.length; i<l; i++){
			if(Application.sections[i] === s)
				return;
		}
		Application.sections.push(s);
	},
	
	loadSection: function(name){		
		for(var i=0,l=Application.sections.length; i<l; i++){			
			var s = Application.sections[i];
			
			if(s.props.name === name){
				$("#centerPanel").empty();
				s.getEl().appendTo("#centerPanel");
				Application.currentSection = s;
				s.doConfig();
				return;
			}
			
		}
	}
	
},
// prototype methods
{
	// called when a new instance is created
	init : function(cfg) {
		
		$("button").button();
		
		$("#btnCancel").click(Application.cancelClick);
		$("#btnSave").click(Application.saveClick);
		$("#btnContinue").click(Application.continueClick);
		
		Application.sectionDlg = $("#dialog-Section");
		Application.elementDlg = $("#dialog-Element");
		Application.variableDlg = $("#dialog-Variable");
		Application.contDlg = $("#dialog-Continue");
		
		Application.contDlg.dialog({
			autoOpen: false,
			height: 400,
			width: 400,
			modal: true,
			resizable: false
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
				Application.currentSection.loadValue(Application.sectionDlg);
			}
		});
		
		Application.elementDlg.dialog({
			autoOpen: false,
			height: 200,
			width: 400,
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
				Application.currentElement.loadValue(Application.elementDlg);
			}
		});
		
		Application.variableDlg.dialog({
			autoOpen: false,
			height: 200,
			width: 400,
			modal: true,
			resizable: false,
			
			beforeClose: function(e,ui){//validate & bind data to new section
				if(Application.currentVariable.validateVal(Application.variableDlg, Application.currentSection.props.vars)){
					Application.currentVariable.bindValue(Application.variableDlg);
					return true;
				}
				return false;
			},
			
			open:function(e,u){
				Application.currentVariable.loadValue(Application.variableDlg);
			}
		});
		
		$("#leftPanel img").draggable({helper: 'clone',cursor: 'move', revert: "invalid" });		
		$("#centerPanel").droppable({			
			drop: Application.dropSection//function(e, ui){}
		});
		
	}// end init
});
var myapp = new Application();