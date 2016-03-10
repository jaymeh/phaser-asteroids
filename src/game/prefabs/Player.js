var RPG = RPG || {};

// TODO: While this class is simple we may not need to but perhaps implement the data variable and setup
RPG.Player = function(state, x, y, data) {
	// This allows us to inherit all properties of the sprite class
	Phaser.Sprite.call(this, state.game, x, y, 'character');

	// Smooth sprite to false (stop antialiasing), Set anchor to middle and increase scale
	this.smoothed = false;
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(2, 2);
	
	// Enable Physics for collisions
	this.game.physics.arcade.enable(this);

	// Setup Variables to control and keep track of movement
	this.moveSpeed = 2;
	this.moveX = 0;
	this.moveY = 0;
	this.isMoving = false;
	this.remainingMove = 0;

	// Setup our animations with speed of 8 and Looping enabled
	this.animations.add('walk_side', ["side_03.png", "side_02.png", "side_01.png"], 8, true);
	this.animations.add('walk_down', ["down_01.png", "down_02.png", "down_03.png"], 8, true);
	this.animations.add('walk_up', ["up_03.png", "up_02.png", "up_01.png"], 8, true);

	this.animations.play('walk_down');
	this.animations.stop();
};

// Javascript inheritance from Phaser.Sprite and setup function called on class startup (constructor)
RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;

RPG.Player.movementEngine = function(player) {
	// Check if the player is already moving
	if(player.isMoving) {
		// Check our Y. And if the player shouldn't stop moving
		if((player.moveY < 0 || player.moveY > 0) && player.remainingMove > 0) {
			// Move either negative or positive. This is because of Maths :D
		 	player.body.y += player.moveY;
		 	player.remainingMove -= player.moveSpeed;

		 	// If move is a positive number we are moving down. Otherwise we are moving up
		 	if(player.moveY > 0) {
		 		// Down
		 		player.animations.play('walk_down', false);
		 	} else {
		 		// Up
		 		player.animations.play('walk_up', false);
		 	}
		// If we aren't moving in Y check our x and if we still have a way to go
		} else if((player.moveX < 0 || player.moveX > 0)  && player.remainingMove > 0) {
			// Move either left or right. Maths sorts this out.
			player.body.x += player.moveX;
			player.remainingMove -= player.moveSpeed;

			// If we are moving is positive x we are going right otherwise left.
			if(player.moveX > 0) {
				// Right
				player.animations.play('walk_side', false);
				player.scale.setTo(2, 2);
			} else {
				// Left
				player.animations.play('walk_side', false);
				player.scale.setTo(-2, 2);
			}
		}
	}

	// If we can't move anymore then set our moving variable to false. 
	// And reset our other two move variables back to 0 so we don't start 
	// moving in the previous direction
	if(player.remainingMove == 0) {
		player.isMoving = false;
		player.moveY = 0;
		player.moveX = 0;
	}

	// If we are not moving then we are allowed to start again
	if(!player.isMoving) {
		// TODO: Before we do anything we need to check we can
		// move with collisions
		if (RPG.GameState.cursors.up.isDown) {
			player.isMoving = true;
			player.moveY = -player.moveSpeed;
			player.remainingMove = GRID_SIZE;
		} else if (RPG.GameState.cursors.down.isDown) {
			player.isMoving = true;
			player.moveY = player.moveSpeed;
			player.remainingMove = GRID_SIZE;
		} else if (RPG.GameState.cursors.left.isDown) {
			player.isMoving = true;
			player.moveX = -player.moveSpeed;
			player.remainingMove = GRID_SIZE;
		} else if (RPG.GameState.cursors.right.isDown) {
			player.isMoving = true;
			player.moveX = player.moveSpeed;
			player.remainingMove = GRID_SIZE;
		}
	}

	// Handle animations in seperate if. This is in case
	// our player continues to move in the same frame 
	// to prevent stuttering in the animations
	if(player.remainingMove == 0) {
		// Stop animation and set current frame to 1 (stood still frame)
		player.animations.stop();
		player.animations.currentAnim.frame = 1;
	}
}