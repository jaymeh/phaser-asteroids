var Asteroids = Asteroids || {};

Asteroids.GameState = {
	init: function() {
		//keyboard cursors
		this.cursors = this.game.input.keyboard.createCursorKeys();
	},
	preload: function() {
		// State preload logic goes here
		Asteroids.game.load.image('ship', 'assets/sprites/player.png')
	},
	create: function(){
	  // Start Physics system
	  Asteroids.game.physics.startSystem(Phaser.Physics.ARCADE);

	  this.player = Asteroids.game.add.sprite(Asteroids.game.width / 2, Asteroids.game.height / 2, 'ship');
	  this.player.anchor.setTo(0.5, 0.5);
	  this.player.scale.setTo(0.5);
	  Asteroids.game.physics.arcade.enable([this.player]);

	},
	update: function() {
		// State Update Logic goes here.
		// Asteroids.Player();
		this.playerMove();
	},
	playerMove: function() {
		this.player.body.velocity.x = 0;
	    this.player.body.velocity.y = 0;
	    this.player.body.angularVelocity = 0;

		if (Asteroids.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
	        this.player.body.angularVelocity -= 200;
	    }
	    else if (Asteroids.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
	        this.player.body.angularVelocity = 200;
	    }

	    if (Asteroids.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
	        Asteroids.game.physics.arcade.velocityFromAngle(this.player.angle, 300, this.player.body.velocity);
	    }
	},
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