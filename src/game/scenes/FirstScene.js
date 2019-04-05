import {Scene, Input} from 'phaser'

import sky from '../assets/sky.png'
import ground from '../assets/platform.png'
import star from '../assets/star.png'
import bomb from '../assets/bomb.png'
import dude from '../assets/dude.png'

export default class FirstScene extends Scene {
    constructor() {
        super({key: 'FirstScene'})
    }

    platforms;
    player;
    cursors;

    preload() {
        this.load.image('sky', sky);
        this.load.image('ground', ground);
        this.load.image('star', star);
        this.load.image('bomb', bomb);
        this.load.spritesheet('dude',
            dude,
            {frameWidth: 32, frameHeight: 48}
        );

    }

    create() {
        this.add.image(400, 300, 'sky');

        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
        this.platforms.create(600, 400, 'ground');
        this.platforms.create(50, 250, 'ground');
        this.platforms.create(750, 220, 'ground');

        this.player = this.physics.add.sprite(100, 450, 'dude');
        this.player.setBounce(0.1);
        this.player.setCollideWorldBounds(true);

        this.anims.create({
            kay: 'left',
            frames: this.anims.generateFrameNumbers('dude', {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1,
        });
        this.anims.create({
            kay: 'turn',
            frames: [{key: 'dude', frame: 4}],
            frameRate: 20
        });
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', {start: 5, end: 8}),
            frameRate: 10,
            repeat: -1
        });

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platforms);
    }

    update() {
        if (this.cursors.left.isDown) {
            this.player.setVelocityX(-160);
            this.player.anims.play('left', true);
        } else if (this.cursors.right.isDown) {
            this.player.setVelocityX(160);
            // this.player.anims.play('right', true);
        } else {
            this.player.setVelocityX(0);
            // this.player.anims.play('turn');
        }

        if (this.cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }
    }
}
