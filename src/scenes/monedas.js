import Phaser from 'phaser'

export default class Monedas extends Phaser.Scene {
    
    constructor() {
        super('Monedas')
    }

    init() {
        console.log('Scene Monedas')
    }

    preload() {
             
    }

    create() {
        this.scene.launch('UI');  
        const sceneUI = this.scene.get('UI');
        sceneUI.goBackTo('Monedas','BilletesMonedas')

        this.audio = this.sound.add('monedas-audio');
        if(!sceneUI.isMuted()){
            this.audio.play();    
        }   
        sceneUI.stopAudio(this.audio);

		this.add.image(0, 0, 'bg').setScale(1.3).setOrigin(0);
        this.add.text(this.sys.game.config.width/2, 50, 'Las monedas son de metal y tienen diferentes tamaños, colores y valores', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '25px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)

        this.add.text(this.sys.game.config.width/2, 120, 'Selecciona cada una de ellas para conocerlas en detalle', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '20px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('yellow')
        .setShadow(1, 1)

        let initialPositionY = 300
        let positionY = 300
        let nextElementPaddingY = 150

        const centavo1 = this.add.sprite(this.sys.game.config.width/2 - 300, positionY, '1c').setOrigin(0).setAlpha(0.8).setInteractive();       
        centavo1.displayWidth = 50;
        centavo1.scaleY = centavo1.scaleX;
        centavo1.on('pointerover',function(pointer){
            centavo1.setAlpha(1);
        })        
        centavo1.on('pointerout',function(pointer){
            centavo1.setAlpha(0.8);
        })
        centavo1.on('pointerdown', () => {
            //this.audio.stop();
            //this.scene.start('DetalleBilletes');
            centavo1.setFrame(1);
        })
        centavo1.on('pointerup', () => {
            //this.audio.stop();
            //this.scene.start('DetalleBilletes');
            centavo1.setFrame(0);
        })
        
        positionY = initialPositionY
        //positionY += nextElementPaddingY
        let centavo5 = this.add.image(this.sys.game.config.width/2 - 180, positionY - 15, '5c').setOrigin(0).setAlpha(0.8).setInteractive();
        centavo5.displayWidth = 70;
        centavo5.scaleY = centavo5.scaleX;
        centavo5.on('pointerover',function(pointer){
            centavo5.setAlpha(1);
        })        
        centavo5.on('pointerout',function(pointer){
            centavo5.setAlpha(0.8);
        })

        positionY = initialPositionY 
       // positionY += nextElementPaddingY
        let centavo10 = this.add.image(this.sys.game.config.width/2 - 50, positionY - 10, '10c').setOrigin(0).setAlpha(0.8).setInteractive();
        centavo10.displayWidth = 70;
        centavo10.scaleY = centavo10.scaleX;
        centavo10.on('pointerover',function(pointer){
            centavo10.setAlpha(1);
        })        
        centavo10.on('pointerout',function(pointer){
            centavo10.setAlpha(0.8);
        })

        positionY = initialPositionY        
        let centavo25 = this.add.image(this.sys.game.config.width/2 + 80, positionY - 25, '25c').setOrigin(0).setAlpha(0.8).setInteractive();
        centavo25.displayWidth = 90;
        centavo25.scaleY = centavo25.scaleX;
        centavo25.on('pointerover',function(pointer){
            centavo25.setAlpha(1);
        })        
        centavo25.on('pointerout',function(pointer){
            centavo25.setAlpha(0.8);
        })
        centavo25.on('pointerdown', () => {
            this.audio.stop();
            this.scene.start('DetalleBilletes');
        })

        positionY = initialPositionY 
       // positionY += nextElementPaddingY
        let centavo50 = this.add.image(this.sys.game.config.width/2 + 220, positionY - 25, '50c').setOrigin(0).setAlpha(0.8).setInteractive();
        centavo50.displayWidth = 85;
        centavo50.scaleY = centavo50.scaleX;
        centavo50.on('pointerover',function(pointer){
            centavo50.setAlpha(1);
        })        
        centavo50.on('pointerout',function(pointer){
            centavo50.setAlpha(0.8);
        })

        positionY += nextElementPaddingY
        let pesos1 = this.add.image(this.sys.game.config.width/2 - 250, positionY, '1p').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos1.displayWidth = 95;
        pesos1.scaleY = pesos1.scaleX;
        pesos1.on('pointerover',function(pointer){
            pesos1.setAlpha(1);
        })        
        pesos1.on('pointerout',function(pointer){
            pesos1.setAlpha(0.8);
        })

        //positionY += nextElementPaddingY
        let pesos2 = this.add.image(this.sys.game.config.width/2 - 45, positionY, '2p').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos2.displayWidth = 95;
        pesos2.scaleY = pesos2.scaleX;
        pesos2.on('pointerover',function(pointer){
            pesos2.setAlpha(1);
        })        
        pesos2.on('pointerout',function(pointer){
            pesos2.setAlpha(0.8);
        })       

        let pesos10 = this.add.image(this.sys.game.config.width/2 + 150, positionY + 10, '10p').setOrigin(0).setAlpha(0.8).setInteractive();
        pesos10.displayWidth = 90;
        pesos10.scaleY = pesos10.scaleX;
        pesos10.on('pointerover',function(pointer){
            pesos10.setAlpha(1);
        })        
        pesos10.on('pointerout',function(pointer){
            pesos10.setAlpha(0.8);
        })       

    }

}