import Phaser from 'phaser'
import FirstScene from './scenes/FirstScene'
import BootScene from './scenes/BootScene'
import PlayScene from './scenes/PlayScene'


const config = {
    type: Phaser.AUTO,
    parent: 'game-container',
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 400 },
            debug: true
        }
    },
    scene: [FirstScene]
};


function launch() {
    new Phaser.Game(config);
    // new Phaser.Game({
    //   type: Phaser.AUTO,
    //   width: 800,
    //   height: 600,
    //   parent: 'game-container',
    //   physics: {
    //     default: 'arcade',
    //     arcade: {
    //       gravity: { y: 300 },
    //       debug: false
    //     }
    //   },
    //   scene: [BootScene, PlayScene]
    // })
}

export default launch
export {launch}
