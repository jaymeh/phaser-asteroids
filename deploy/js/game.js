var Asteroids = Asteroids || {};

// TODO: While this class is simple we may not need to but perhaps implement the data variable and setup
Asteroids.Player = function(state, x, y, data) {
	// This allows us to inherit all properties of the sprite class
	// Phaser.Sprite.call(this, state.game, x, y, 'character');
};

// Javascript inheritance from Phaser.Sprite and setup function called on class startup (constructor)
Asteroids.Player.prototype = Object.create(Phaser.Sprite.prototype);
Asteroids.Player.prototype.constructor = Asteroids.Player;

Asteroids.Player.movementEngine = function(player) {
	
}
var Asteroids = Asteroids || {};

Asteroids.GameState = {
	init: function() {
		//keyboard cursors
		this.cursors = this.game.input.keyboard.createCursorKeys();
	},
	preload: function() {
		// State preload logic goes here
	},
	create: function(){
	  // Start Physics system
	  Asteroids.game.physics.startSystem(Phaser.Physics.ARCADE);
	},
	update: function() {
		// State Update Logic goes here.
		
	}
}; 
/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */

var Asteroids = Asteroids || {};

var GRID_SIZE = 32 || 32;

Asteroids.game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO
);

Asteroids.game.state.add('GameState', Asteroids.GameState);
Asteroids.game.state.start('GameState');