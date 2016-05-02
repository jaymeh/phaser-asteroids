/**
 *
 * This is a simple state template to use for getting a Phaser game up
 * and running quickly. Simply add your own game logic to the default
 * state object or delete it and make your own.
 *
 */

var Asteroids = Asteroids || {};

var GRID_SIZE = 32 || 32;

Asteroids.game = new Phaser.Game(
    '100%',
    '100%',
    Phaser.AUTO
);

Asteroids.game.state.add('GameState', Asteroids.GameState);
Asteroids.game.state.start('GameState');