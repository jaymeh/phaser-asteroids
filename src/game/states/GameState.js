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

	  this.player.body.drag.set(30);
	  this.player.body.maxVelocity.set(300);

	},
	update: function() {
		// State Update Logic goes here.
		// Asteroids.Player();
		this.playerMove();
	},
	playerMove: function() {
		if (Asteroids.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
	        this.player.body.angularVelocity = -220;
	    }
	    else if (Asteroids.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
	        this.player.body.angularVelocity = 220;
	    } else {
	    	this.player.body.angularVelocity = 0;
	    }

	    console.log(this.player.body.acceleration);
	    console.log(this.player.rotation);

	    if (Asteroids.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
	        Asteroids.game.physics.arcade.accelerationFromRotation(this.player.rotation, 300, this.player.body.acceleration);
	    } else {
	    	this.player.body.acceleration.set(0);
	    }
	},
}; 