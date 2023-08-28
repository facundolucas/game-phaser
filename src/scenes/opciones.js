import Phaser from 'phaser'

export default class Opciones extends Phaser.Scene {
    
    constructor() {
        super('Opciones')
    }

    init() {
        console.log('Scene Opciones')
    }

    preload() {
    }

    create() {
        this.scene.launch('UI');  
        const sceneUI = this.scene.get('UI');
        sceneUI.goBackTo('Opciones','Menu')
    }

}