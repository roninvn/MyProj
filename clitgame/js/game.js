/*
 * Game class
 */
$.Class.extend("Game",
// static methods
{
	Level : [
			{
				name : 'Loser',
				min : 0,
				max : 20,
				quotes : [ 'Go home and wank', 'What are you doing?',
						'Seen a pussy before?' ]
			},
			{
				name : 'Beginner',
				min : 21,
				max : 40,
				quotes : [ 'You must be a virgin', 'Am I boring you?',
						'Is this all you’ve got?' ]
			},
			{
				name : 'Intermediate',
				min : 41,
				max : 60,
				quotes : [ 'I fake it at times!', 'Why did you stop?',
						'Not bad for a learner' ]
			},
			{
				name : 'Professional',
				min : 61,
				max : 80,
				quotes : [ 'Done this before?', 'Aye Papi ! Speedy Gonzales',
						'Mmmm that’s the spot' ]
			},
			{
				name : 'Porn Star',
				min : 81,
				max : 100,
				quotes : [ 'Magic touch babe', 'I’m shaking! You’re Sex God',
						'Want a job with us?' ]
			} ],
	 
	RandomSounds: ["#r1","","#r2","","", ""]
},
// prototype methods
{
	init : function() {
		this.animPlaying = false;
		this.playSound = false;
		this.timeRemain = 10; // 10sec
		this.meter = 0; // start with 0%
		this.playGround = $('#PlayGround');
		$('#dTime').html('0:' + this.timeRemain);
		
	},
	
	playAnim: function(){
		if(this.animPlaying)
			return;
		
		var me = this;
		this.animPlaying = true;
		$("#dClick").addClass("anim2");
		
		this.playGround.oneTime(100, function() {
			$("#dClick").removeClass("anim2");
			me.animPlaying = false;
		});
	},	

	/*
	 * start playing
	 */
	play : function() {

		this.emptyResource();
		$('#dPlay').hide();
		$('#dResult').hide();
		$('#resultInfo').hide();

		var me = this;

		$('#dClick').click(function() {
			me.tapPussy();
		});

		this.playGround.everyTime(1000, "Tick", function() {
			me.tick();
		});

		this.playGround.everyTime(300, "Drop", function() {
			me.dropMeter();
		});

	},

	dropMeter : function() {
		this.meter--;
		if (this.meter <= 0)
			this.meter = 0;
		this.showMeter();
	},
	
	playRandomSound: function(){
		
		if(this.playSound)
			return;
		
		var idx = Math.floor(Math.random() * Game.RandomSounds.length);
		var s = Game.RandomSounds[idx];
		
		var me = this;
		
		if(s !== ""){
			this.playSound = true;
			$(s).bind("ended", function(){
				$(s).unbind();
				me.playSound =  false;
			});
			
			$(s)[0].play();
		}
	},

	tapPussy : function() {		
		//vibrate
		if(navigator && navigator.notification && navigator.notification.vibrate)
			navigator.notification.vibrate(500);
		
		this.playAnim();
		this.playRandomSound();
		
		this.meter += 5; // inscrese 5%
		if (this.meter > 100)
			this.meter = 100;
		this.showMeter();
	},

	tick : function() {
		this.timeRemain--;
		
		var s;
		if(this.timeRemain > 9)
			s = this.timeRemain;
		else
			s = "0" + this.timeRemain;
		
		$('#dTime').html('0:' + s);
		if (this.timeRemain <= 0)
			this.endGame();
	},

	emptyResource : function() {
		$('#dClick').unbind();
		this.playGround.stopTime("Tick");
		this.playGround.stopTime("Drop");
	},

	endGame : function() {
		this.emptyResource();
		$('#dPlay').show();
		this.showResult();
	},

	showMeter : function() {
		$('#dBar').css({
			left : this.meter + "%"
		});
		$('#dMeterText').html(this.meter + "%");
	},
	
	showResult: function(){
		for(var i=0; i<Game.Level.length; i++ ){
			var l = Game.Level[i];
			if(this.meter >=l.min && this.meter<= l.max){
				var idx = Math.floor(Math.random() * l.quotes.length);
				var q = l.quotes[idx];
				//console.log(l.name, q);
				$("#resPercent").html(this.meter + "%");
				$("#resName").html(l.name);
				$("#resQuote").html(q);
				break;
			}
		}
		
		$("#adResult")[0].play();		
		$('#dResult').show();
		$('#resultInfo').show();
	}

});
