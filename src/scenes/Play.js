class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }
    preload() {
        this.load.image('starfield', 'assets/starfield.png');
    }

    create () {
        let playText = this.add.text(20, 20, "This is the play scene");

        this.add.rectangle(0,borderUISize + borderPadding, game.config.width, borderUISize * 2, 0x00FF00).setOrigin(0,0);


        this.add.rectangle(0,0, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0, game.config.height - borderUISize, game.config.width, borderUISize, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(0,0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
        this.add.rectangle(game.config.width - borderUISize, 0, borderUISize, game.config.height, 0xFFFFFF).setOrigin(0,0);
    }
}