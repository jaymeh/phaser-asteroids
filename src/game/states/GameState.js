var RPG = RPG || {};

RPG.GameState = {
    init: function() {
        // Delete this init block or replace with your own logic.
        RPG.Dialog.init(60, 50, {'extendedBackground': true});

        //keyboard cursors
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    preload: function() {
        // State preload logic goes here
        RPG.game.load.atlas('character', '../assets/character.png', '../assets/character.JSON', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
    },
    create: function(){
      // State create logic goes here
      // RPG.Player.create();

      RPG.game.physics.startSystem(Phaser.Physics.ARCADE);

      var playerData = {};
      this.player = new RPG.Player(this, 100, 100, playerData);

      this.add.existing(this.player);

      this.player.play('walk_up');
    },
    update: function() {
        // State Update Logic goes here.
        //stop each time
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if(this.cursors.left.isDown) {
          this.player.body.velocity.x = -90;
          this.player.scale.setTo(3,3);
          this.player.play('walk_side');
        }
        if(this.cursors.right.isDown) {
          this.player.body.velocity.x = 90;
          this.player.scale.setTo(-3,3);
          this.player.play('walk_side');
        }
        if(this.cursors.up.isDown) {
          this.player.body.velocity.y = -90;
          this.player.play('walk_up');
        }
        if(this.cursors.down.isDown) {
          this.player.body.velocity.y = 90;
          this.player.play('walk_down');
        }

        //play walking animation'
        if(this.player.body.velocity.x == 0 && this.player.body.velocity.y == 0) {
          this.player.animations.stop();
          //this.player.frame = 1;
          console.log(this.player.body.velocity);
        }
    }
}; 