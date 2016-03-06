var RPG = RPG || {};

RPG.Collider = function(state, x, y, data) {
	Phaser.Sprite.call(this, state.game, x, y, 'collider');

	this.smoothed = false;
	this.anchor.setTo(0.5, 0.5);
	this.scale.setTo(1, 1);

	this.game.physics.arcade.enable(this);
};

RPG.Collider.prototype = Object.create(Phaser.Sprite.prototype);
RPG.Collider.prototype.constructor = RPG.Collider;