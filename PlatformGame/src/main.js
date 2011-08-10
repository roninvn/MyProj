// Import the cocos2d module
var cocos = require('cocos2d'),
// Import the geometry module
    geo = require('geometry');

var Bat = require('Bat').Bat;
<<<<<<< HEAD
var Ball = require('Ball').Ball;

// Create a new layer
var PlatformGame = cocos.nodes.Layer.extend({
	
	bat: null,
	ball: null,
	
    init: function() {
        // You must always call the super class version of init
        PlatformGame.superclass.init.call(this);
        
        var bat = Bat.create();
        bat.set('position', new geo.Point(160, 280));
        this.addChild({child: bat});
        this.set('bat', bat);
        
        var ball = Ball.create();
        ball.set('position', new geo.Point(160, 250));
        this.addChild({child: ball});
        this.set('ball', ball);

        this.set('isMouseEnabled', true);        
    }, //end init
    
    mouseMoved: function(evt) {
        var bat = this.get('bat');
 
        var batPos = bat.get('position');
        batPos.x = evt.locationInCanvas.x;
        //batPos.y = evt.locationInCanvas.y;
        bat.set('position', batPos);
    }
});

exports.main = function() {
    // Initialise application

    // Get director
    var director = cocos.Director.get('sharedDirector');

    // Attach director to our <div> element
    director.attachInView(document.getElementById('platform_game_app'));

    // Create a scene
    var scene = cocos.nodes.Scene.create();

    // Add our layer to the scene
    scene.addChild({child: PlatformGame.create()});

    // Run the scene
    director.runWithScene(scene);
};
