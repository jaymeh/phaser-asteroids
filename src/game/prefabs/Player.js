var RPG = RPG || {};

RPG.Player = function(state, x, y, data) {
	Phaser.Sprite.call(this, state.game, x, y, 'character');

	this.smoothed = false;
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(3, 3);

	//walking left
	this.animations.add('walk_side', ["side-01.png", "side-02.png", "side-01.png"], 20, true);

	this.animations.add('walk_down', ["front-02.png", "front-01.png", "front-02.png", "front-03.png"], 20, true);

	this.animations.add('walk_up', ["back-02.png", "back-01.png", "back-02.png", "back-03.png"], 20, true);

	this.game.physics.arcade.enable(this);
};

RPG.Player.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Player.prototype.constructor = RPG.Player;