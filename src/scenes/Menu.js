class Menu extends Phaser.Scene {
    constructor() {
        super("menu");
    }
    create() {
        let menuText = this.add.text(300, 240, "Menu goes here").setOrigin(0.5,0.5);
    }
}