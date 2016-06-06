'use strict';

function Preloader() {
  this.asset = null;
  this.ready = false;
};

Preloader.prototype.preload = function () {
  this.asset = this.add.sprite(this.game.width * 0.5 - 110, this.game.height * 0.5 - 10, 'preloader');
  this.load.setPreloadSprite(this.asset);
  this.load.spritesheet('fox', 'assets/foxsmall_sprite.png', 60, 50, 16); 
  this.load.tilemap('level1', 'assets/tilemaps/level1.json', null, Phaser.Tilemap.TILED_JSON);
  this.load.image('gameTiles', 'assets/foresttiles.gif');
  this.load.audio('footstep', 'assets/footstep.wav');
  this.load.audio('footstep2', 'assets/footstep2.wav');
  this.load.audio('footstep3', 'assets/footstep3.wav');
  // this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
  // this.loadResources();
  this.ready = true;
};

Preloader.prototype.loadResources = function () {
  // load your resources here
};

Preloader.prototype.create = function () {

};

Preloader.prototype.update = function () {
  // if (!!this.ready) {
    this.game.state.start('game');
  // }
};

Preloader.prototype.onLoadComplete = function () {
  // this.ready = true;
};

module.exports = Preloader;
