'use strict';

var Fox = require('../Fox.js');

function Game() {};

Game.prototype.create = function () {
  	this.map = this.game.add.tilemap('level1');

	//the first parameter is the tileset name as specified in Tiled, the second is the key to the asset
	this.map.addTilesetImage('foresttiles', 'gameTiles');

	//create layer
	this.backgroundlayer = this.map.createLayer('backgroundLayer');
	this.foregroundLayer = this.map.createLayer('foregroundLayer');
	this.blockedLayer = this.map.createLayer('blockedLayer');

	//collision on blockedLayer
	this.map.setCollisionBetween(1, 2000, true, 'blockedLayer');

	this.fox = new Fox(this.game, 100, 345);
	this.game.add.existing(this.fox);
	this.test = this.add.sprite(100, 245, 'fox');

	this.physics.arcade.enable(this.test);

	this.camera.follow(this.fox);

	this.game.physics.arcade.collide(this.fox, this.test);
	//resizes the game world to match the layer dimensions
	this.backgroundlayer.resizeWorld();

};

Game.prototype.update = function () {
	this.game.physics.arcade.collide(this.fox, this.blockedLayer);
};

Game.prototype.onInputDown = function () {
  //this.game.state.start('menu');
};

module.exports = Game;
