var RPG = RPG || {};

RPG.GameState = {
    init: function() {
        // Delete this init block or replace with your own logic.

        // Create simple text display for current Phaser version
        /*var text = "Phaser Version "+Phaser.VERSION + " works!";
        var style = { font: "24px Arial", fill: "#fff", align: "center" };
        var t = game.add.text(this.world.centerX, this.world.centerY, text, style);
        t.anchor.setTo(0.5, 0.5); */
        dialog.init(60, 50, {'extendedBackground': true});

    },
    preload: function() {
        // STate preload logic goes here
    },
    create: function(){
      // State create logic goes here
    },
    update: function() {
        // State Update Logic goes here.
    }
}; 