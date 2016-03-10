var RPG = RPG || {};
var GRID_SIZE  = GRID_SIZE || 32;

RPG.GameState = {
    init: function() {
        // Delete this init block or replace with your own logic.
        RPG.Dialog.init(60, 50, {'extendedBackground': true});

        //keyboard cursors
        this.cursors = this.game.input.keyboard.createCursorKeys();
    },
    preload: function() {
        // State preload logic goes here
        RPG.game.load.atlas('character', '../assets/guy.png', '../assets/guy.JSON', Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        RPG.game.load.image('collider', '../assets/collider.png');
    },
    create: function(){
      // Start Physics system
      RPG.game.physics.startSystem(Phaser.Physics.ARCADE);

      // Load our player onto screen
      var playerData = {};
      this.player = new RPG.Player(this, 100, 100, playerData);
      this.add.existing(this.player);
      
      // Load our collider onto screen
      var colliderData = {};
      this.collider = new RPG.Collider(this, 100, (100 + GRID_SIZE), colliderData);
      this.add.existing(this.collider);

      this.player.play('walk_side');
    },
    update: function() {
        // State Update Logic goes here.
        //stop each time
        /*this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;

        if(this.cursors.left.isDown) {
          this.player.body.velocity.x = -90;
          this.player.scale.setTo(1, 1);
          this.player.play('walk_side');
        }
        if(this.cursors.right.isDown) {
          this.player.body.velocity.x = 90;
          this.player.scale.setTo(-1,1);
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
        } */

        RPG.Player.movementEngine();
    }
}; 