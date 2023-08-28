import Phaser from 'phaser'

export default class Billetes extends Phaser.Scene {
    
    constructor() {
        super('Billetes')
    }

    init() {
        console.log('Scene Billetes')
    }

    preload() {
             
    }

    create() {
        this.scene.launch('UI');  
        const sceneUI = this.scene.get('UI');
        sceneUI.goBackTo('Billetes','BilletesMonedas')

        this.audio = this.sound.add('billetes-audio');
        if(!sceneUI.isMuted()){
            this.audio.play();    
        }   
        sceneUI.stopAudio(this.audio);

		this.add.image(0, 0, 'bg').setScale(1.3).setOrigin(0);
        this.add.text(this.sys.game.config.width/2, 50, 'Los Billetes son de papel y tienen diferentes valores', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '30px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)

        this.add.text(this.sys.game.config.width/2, 120, 'Selecciona cada uno de ellos para conocerlos en detalle', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '20px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('yellow')
        .setShadow(1, 1)

        let initialPositionY = 200
        let positionY = 200
        let nextElementPaddingY = 150

        let pesos10 = this.add.image(this.sys.game.config.width/2 - 350, positionY, '10-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos10.displayWidth = 300;
        pesos10.scaleY = pesos10.scaleX;
        pesos10.on('pointerover',function(pointer){
            pesos10.setAlpha(1);
        })        
        pesos10.on('pointerout',function(pointer){
            pesos10.setAlpha(0.8);
        })

        positionY += nextElementPaddingY
        let pesos20 = this.add.image(this.sys.game.config.width/2 - 350, positionY, '20-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos20.displayWidth = 300;
        pesos20.scaleY = pesos20.scaleX;
        pesos20.on('pointerover',function(pointer){
            pesos20.setAlpha(1);
        })        
        pesos20.on('pointerout',function(pointer){
            pesos20.setAlpha(0.8);
        })

        positionY += nextElementPaddingY
        let pesos50 = this.add.image(this.sys.game.config.width/2 - 350, positionY, '50-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos50.displayWidth = 300;
        pesos50.scaleY = pesos50.scaleX;
        pesos50.on('pointerover',function(pointer){
            pesos50.setAlpha(1);
        })        
        pesos50.on('pointerout',function(pointer){
            pesos50.setAlpha(0.8);
        })

        positionY = initialPositionY        
        let pesos100 = this.add.image(this.sys.game.config.width/2 + 50, positionY, '100-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos100.displayWidth = 300;
        pesos100.scaleY = pesos100.scaleX;
        pesos100.on('pointerover',function(pointer){
            pesos100.setAlpha(1);
        })        
        pesos100.on('pointerout',function(pointer){
            pesos100.setAlpha(0.8);
        })
        pesos100.on('pointerdown', () => {
            this.audio.stop();
            this.scene.start('DetalleBilletes');
        })

        positionY += nextElementPaddingY
        let pesos200 = this.add.image(this.sys.game.config.width/2 + 50, positionY, '200-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos200.displayWidth = 300;
        pesos200.scaleY = pesos200.scaleX;
        pesos200.on('pointerover',function(pointer){
            pesos200.setAlpha(1);
        })        
        pesos200.on('pointerout',function(pointer){
            pesos200.setAlpha(0.8);
        })

        positionY += nextElementPaddingY
        let pesos500 = this.add.image(this.sys.game.config.width/2 + 50, positionY, '500-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos500.displayWidth = 300;
        pesos500.scaleY = pesos500.scaleX;
        pesos500.on('pointerover',function(pointer){
            pesos500.setAlpha(1);
        })        
        pesos500.on('pointerout',function(pointer){
            pesos500.setAlpha(0.8);
        })

        positionY = initialPositionY
        let pesos1000 = this.add.image(this.sys.game.config.width/2 + 1000, positionY, '1000-frente').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos1000.displayWidth = 300;
        pesos1000.scaleY = pesos1000.scaleX;
        pesos1000.on('pointerover',function(pointer){
            pesos1000.setAlpha(1);
        })        
        pesos1000.on('pointerout',function(pointer){
            pesos1000.setAlpha(0.8);
        })       

    }

}