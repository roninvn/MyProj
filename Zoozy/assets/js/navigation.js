var navigation = function() {

        // here is where you can put your onLoad code.
	var onLoad = function(){
		
		x$("#leftbutton").click(function(e){

			x$("#leftbutton").toggleClass("lb2");
			x$("#imgball").toggleClass("ball2");
		});
		
		x$("#rightbutton").click(function(e){

			x$("#rightbutton").toggleClass("rb2");
			x$("#imgpizza").toggleClass("pizza2");
		});

	};
	
	return {
		onLoad : onLoad
	};
	
}();
