'use strict';

var Fox = function(game, x, y, frame) {  
	// The super call to Phaser.Sprite
	Phaser.Sprite.call(this, game, x, y, 'fox')
	// set the sprite's anchor to the center
	this.anchor.setTo(0.5, 0.5)
	// add and play animations
  	this.animations.add("walking_down", [0, 1, 2, 3], 11, true);
	this.animations.add("walking_left", [12, 13, 14, 15], 11, true);
	this.animations.add("walking_right", [8, ,9, 10, 11], 11, true);
	this.animations.add("walking_up", [4, 5, 6, 7], 11, true);
	this.stopped_frames = [0, 4];

    this.game.physics.arcade.enableBody(this);
    this.body.collideWorldBounds = true;
    this.isJumping = false;

    this.cursors = this.game.input.keyboard.createCursorKeys();
  	this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

  	this.game.footstepSound = this.game.add.audio('footstep');
	this.game.footstepSound.forceRestart = false ;
	this.game.footstepSound.volume = 0.1 ;

};

Fox.prototype = Object.create(Phaser.Sprite.prototype);
Fox.prototype.constructor = Fox;

Fox.prototype.update = function() {
	this.walking_speed = 180;
    // This function is called 60 times per second    
    // It contains the game's logic  
    if (this.cursors.left.isDown && this.body.velocity.x <= 0) {
        // move left
        this.body.velocity.x = -this.walking_speed;
        if (this.body.velocity.y === 0) {
            this.animations.play('walking_left');
            if(this.game.footstepSound.isPlaying == 0)
            this.game.footstepSound.play();
        }
    } 
    else if (this.cursors.right.isDown && this.body.velocity.x >= 0) {
        // move right
        this.body.velocity.x = +this.walking_speed;
        if (this.body.velocity.y === 0) {
            this.animations.play('walking_right');
            if(this.game.footstepSound.isPlaying == 0)
            this.game.footstepSound.play();
        }
    } 
    else {
        this.body.velocity.x = 0;
    }

    if (this.cursors.up.isDown && this.body.velocity.y <= 0) {
        // move up
        this.body.velocity.y = -this.walking_speed;
        if (this.body.velocity.x === 0) {
            this.animations.play('walking_up');
            if(this.game.footstepSound.isPlaying == 0)
            this.game.footstepSound.play();
        }
    } else if (this.cursors.down.isDown && this.body.velocity.y >= 0) {
        // move down
        this.body.velocity.y = +this.walking_speed;
        if (this.body.velocity.x === 0) {
            this.animations.play('walking_down');
            if(this.game.footstepSound.isPlaying == 0)
            this.game.footstepSound.play();
        }
    } else {
        this.body.velocity.y = 0;
    }
    
    if (this.body.velocity.x === 0 && this.body.velocity.y === 0) {
        // stop current animation
        this.animations.stop();
        this.frame = 0;
    } 

    if(this.spacebar.isDown && !this.isJumping)
    {
        this.isJumping = true;
    }
};

module.exports = Fox;  