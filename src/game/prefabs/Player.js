var RPG = RPG || {};

RPG.Player = {
	init: function() {
		// Create the player sprite on screen
		RPG.game.load.atlas('character', '../assets/character.png', '../assets/character.JSON', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
		// Setup physics

		//RPG.game.add.sprite(0, 0, 'character', 'front.png');
	},

	create: function() {
		RPG.Player.sprite = RPG.game.add.sprite(60, 60, 'character', 'side.png');

		RPG.Player.sprite.anchor.setTo(0.5, 0.5);
		RPG.Player.sprite.smoothed = false;

		RPG.Player.sprite.scale.setTo(3, 3);
	},
};