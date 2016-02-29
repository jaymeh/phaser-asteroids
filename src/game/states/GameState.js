var RPG = RPG || {};

RPG.GameState = {
    init: function() {
        // Delete this init block or replace with your own logic.
        RPG.Dialog.init(60, 50, {'extendedBackground': true});
        RPG.Player.init();

    },
    preload: function() {
        // State preload logic goes here
        RPG.game.load.atlas('character', '../assets/character.png', '../assets/character.JSON', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    },
    create: function(){
      // State create logic goes here
      RPG.Player.create();
    },
    update: function() {
        // State Update Logic goes here.
    }
}; 