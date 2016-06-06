'use strict';

function Boot() {};

Boot.prototype.preload = function () {
  this.load.image('preloader', 'assets/preloader.gif');
};

Boot.prototype.create = function () {
  this.game.input.maxPointers = 1;

  // This function is called after the preload function     
  // Here we set up the game, display sprites, etc.  
  this.physics.startSystem(Phaser.Physics.ARCADE);
  this.physics.arcade.gravity.y = 0;
  this.world.setBounds(0, 0, 1920, 1200);

  //this.input.keyboard.addKeyCapture(Phaser.Keyboard.SPACEBAR);
  this.state.start('preloader');
};

Boot.prototype.init = function() {
  this.stage.smoothed = false;
};

module.exports = Boot;
