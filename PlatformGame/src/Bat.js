/**
 * 
 */

var cocos = require('cocos2d');
var geom = require('geometry');

var Bat = cocos.nodes.Node.extend({
    init: function() {
       Bat.superclass.init.call(this);
       
       var sprite = cocos.nodes.Sprite.create({
    	    file: '/resources/img/fire-extinguisher.png',
    	    rect: new geom.Rect(0, 0, 42, 111)
    	});       
       sprite.set('anchorPoint', new geom.Point(0, 0));

       this.addChild({child: sprite});

       this.set('contentSize', sprite.get('contentSize'));
    }
});

exports.Bat = Bat;
