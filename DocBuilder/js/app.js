/*
 * Class Application
 */
$.Class.extend("Application",
// static methods
{
	sections : [],
	currentSection: null,
	sectionDlg: null
},
// prototype methods
{
	// called when a new instance is created
	init : function(cfg) {
		
		Application.sectionDlg = $("#dialog-Section");
		Application.sectionDlg.dialog({
			autoOpen: false,
			height: 200,
			width: 400,
			modal: true,
			
			beforeClose: function(e,ui){//validate & bind data to new section
				if(Application.currentSection.validateVal(Application.sectionDlg, Application.sections)){
					Application.currentSection.bindValue(Application.sectionDlg);
					return true;
				}
				return false;
			}
		});
		
		$("#leftPanel img").draggable({helper: 'clone',cursor: 'move'});		
		$("#centerPanel").droppable({			
			drop: function(e, ui){
				
				if($(ui.draggable[0]).attr("role") === "dialog")
					return;
				
				console.log(ui);
				
				if(ui.draggable[0].nodeName.toLowerCase() === 'img'){
					if(ui.draggable[0].id !== "Section")
						alert('Only section can be added here.');
					else{
						var c = new Section();
						Application.sections.push(c);
						
						//clear for new section
						$("#centerPanel").empty();
						Application.currentSection = c;						
						c.getEl().appendTo($("#centerPanel"));
						
					}
				}
				
			}
		});
		
	}// end init
});
var myapp = new Application();