var RPG = RPG || {};

RPG.Player = function(state, x, y, data) {
	Phaser.Sprite.call(this, state.game, x, y, 'character');

	this.smoothed = false;
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(1, 1);

	//walking left
	this.animations.add('walk_side', ["side_01.png", "side_02.png", "side_03.png"], 3, true);

	this.animations.add('walk_down', ["down_01.png", "down_02.png", "down_03.png"], 3, true);

	this.animations.add('walk_up', ["up_01.png", "up_02.png", "up_03.png"], 3, true);

	// this.game.physics.arcade.enable(this);
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;

RPG.Player.movementEngine = function() {
	// console.log(GRID_SIZE);
	// Detect if theres a solid object in front of me


	// If there isn't then we can move that way

	// 
}