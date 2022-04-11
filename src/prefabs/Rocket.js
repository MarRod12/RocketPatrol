class Rocket extends Phaser.GameObjects.Sprite {

    constructor(scene, x, y, texture) {
        super(scene, x, y, texture);

        scene.add.existing(this);
        this.isFiring = false;
        this.movementSpeed = 2;
    }

    update() {

        //move left and right
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.movementSpeed;
            } else if(keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.movementSpeed;
            }
        }

        //fire
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
        }

        //if fired move up
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.movementSpeed;
        }

        //reset on miss 
        if(this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }

    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }

}