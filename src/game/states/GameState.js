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