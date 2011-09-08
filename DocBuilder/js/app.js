/*
 * Class Application
 */
$.Class.extend("Application",
// static methods
{},
// prototype methods
{
	// called when a new instance is created
	init : function(cfg) {		
		$("#leftPanel img").draggable({helper: 'clone',cursor: 'move'});
	}
});
var myapp = new Application();