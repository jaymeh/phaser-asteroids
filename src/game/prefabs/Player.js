var RPG = RPG || {};

RPG.Player = function(state, x, y, data) {
	Phaser.Sprite.call(this, state.game, x, y, 'character');

	this.smoothed = false;
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(2, 2);
	this.game.physics.arcade.enable(this);
	this.moveSpeed = 4;
	this.moveX = 0;
	this.moveY = 0;
	this.isMoving = false;
	this.remainingMove = 0;

	//walking left
	this.animations.add('walk_side', ["side_01.png", "side_02.png", "side_03.png"], 4, true);

	this.animations.add('walk_down', ["down_01.png", "down_02.png", "down_03.png"], 4, true);

	this.animations.add('walk_up', ["up_01.png", "up_02.png", "up_03.png"], 4, true);
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;

RPG.Player.movementEngine = function(player) {
	// Detect if theres a solid object in front of me
	if(!player.isMoving) {
		if (RPG.GameState.cursors.up.isDown) {
			player.isMoving = true;
			player.moveY = -player.moveSpeed;
		} else if (RPG.GameState.cursors.down.isDown) {
			player.isMoving = true;
			player.moveY = player.moveSpeed;
		} else if (RPG.GameState.cursors.left.isDown) {
			player.isMoving = true;
			player.moveX = -player.moveSpeed;
		} else if (RPG.GameState.cursors.right.isDown) {
			player.isMoving = true;
			player.moveX = player.moveSpeed;
		}
	} else {
		player.isMoving = false;

		// Keep moving using the variables we defined above
		if(player.moveY < 0 || player.moveY > 0) {
			player.body.y += player.moveY;
		} 

		if(player.moveX < 0 || player.moveX > 0) {
			player.body.x += player.moveX;
		}
	}
}