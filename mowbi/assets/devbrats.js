var myScroll;

function loaded() {
    window.scrollTo(0,0);
    myScroll = new iScroll('searchWrapper', { useTransition: true, checkDOMChanges: true });
}

document.addEventListener('DOMContentLoaded', setTimeout(function () { loaded(); }, 200), false);

function isTouchDevice(){
    try{
        document.createEvent("TouchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}
function touchScroll(id) {
    if(isTouchDevice()){ //if touch events exist...
        var el=document.getElementById(id);
        var scrollStartPos=0;
        document.getElementById(id).addEventListener("touchstart", function(event) {
            scrollStartPos=this.scrollTop+event.touches[0].pageY;    
        },false);
        document.getElementById(id).addEventListener("touchmove", function(event) 
        {
            this.scrollTop=scrollStartPos-event.touches[0].pageY;
            event.preventDefault();
        },false);
    }
}

function toggleSearchBox(e) {
    if (e) e.preventDefault();
    var display = $("#search-box").css("display");
    if (display == "block") {
        $("#search-box").css("display", "none");
    }
    else {
        $("#search-box").css("display", "block");
    }
}
         
function openWheelPicker(e, src) {
	
    if('ontouchstart' in document.documentElement){    	
        if (e) e.preventDefault();        
        var values = {};
    	
	    $(src).children("option").each(function(index, opt) { 
	        values[$(opt).val()] = $(opt).text();
	    });
	    
	    SpinningWheel.addSlot(values, '', null);
	    
	    var cancel = function cancelCalendar() {
	    };
	
	    var done = function doneCalendar() {
	        var results = SpinningWheel.getSelectedValues();
	        $(src).val(results.keys);
	        $(src).trigger("onchange");
	    };
	
	    SpinningWheel.setCancelAction(cancel);
	    SpinningWheel.setDoneAction(done);
	
	    SpinningWheel.open();
    }
    else{
    	$('select.devbrats').addClass('hide');
    	$(src).removeClass('hide');
    	$(src).css('float', 'right');
    	e.preventDefault();
    }
}