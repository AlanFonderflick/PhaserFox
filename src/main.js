var FoxGame = new Phaser.Game(640, 480, Phaser.AUTO, 'Test-game');
FoxGame.state.add('boot', require('./states/boot'));
FoxGame.state.add('preloader', require('./states/preloader'));
FoxGame.state.add('menu', require('./states/menu'));
FoxGame.state.add('game', require('./states/game'));
FoxGame.state.start('boot');


