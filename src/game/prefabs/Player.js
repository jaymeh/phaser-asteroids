var RPG = RPG || {};

RPG.Player = function(state, x, y, data) {
	Phaser.Sprite.call(this, state.game, x, y, 'character');

	this.smoothed = false;
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(1, 1);

	//walking left
	this.animations.add('walk_side', ["side_01.png", "side_02.png", "side_03.png", "side_04.png", "side_05.png", "side_06.png", "side_07.png", "side_08.png", "side_09.png"], 20, true);

	this.animations.add('walk_down', ["down_01.png", "down_02.png", "down_03.png", "down_04.png", "down_05.png", "down_06.png", "down_07.png", "down_08.png", "down_09.png"], 20, true);

	this.animations.add('walk_up', ["up_01.png", "up_02.png", "up_03.png", "up_04.png", "up_05.png", "up_06.png", "up_07.png", "up_08.png", "up_09.png"], 20, true);

	this.game.physics.arcade.enable(this);
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;