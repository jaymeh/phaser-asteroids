var RPG = RPG || {};

RPG.GameState = {
    init: function() {
        // Delete this init block or replace with your own logic.
        RPG.Dialog.init(60, 50, {'extendedBackground': true});
    },
    preload: function() {
        // State preload logic goes here
        RPG.game.load.atlas('character', '../assets/character.png', '../assets/character.JSON', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    },
    create: function(){
      // State create logic goes here
      // RPG.Player.create();
      console.log('create');
      var playerData = {};
      this.player = new RPG.Player(this, 100, 100, playerData);

      this.add.existing(this.player);

      this.player.play('walk_up');
    },
    update: function() {
        // State Update Logic goes here.
    }
}; 