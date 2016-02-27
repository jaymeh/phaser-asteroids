/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */

var RPG = RPG || {};

RPG.game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO
);

RPG.game.state.add('GameState', RPG.GameState);
RPG.game.state.start('GameState');