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