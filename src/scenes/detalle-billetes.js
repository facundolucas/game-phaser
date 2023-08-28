import Phaser from 'phaser'

export default class DetalleBilletes extends Phaser.Scene {
    
    constructor() {
        super('DetalleBilletes')
    }

    init() {
        console.log('Scene DetalleBilletes')
    }

    preload() {
    }

    create() {
        this.scene.launch('UI');  
        const sceneUI = this.scene.get('UI');
        sceneUI.goBackTo('DetalleBilletes','Billetes')

        this.audio = this.sound.add('100-pesos-audio');
        if(!sceneUI.isMuted()){
            this.audio.play();    
        }        
        sceneUI.stopAudio(this.audio);

		this.add.image(0, 0, 'bg').setScale(1.3).setOrigin(0);
        this.add.text(this.sys.game.config.width/2, 50, 'Este es el BILLETE de 100 PESOS', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '30px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)

        this.add.text(this.sys.game.config.width/2, 100, 'El billete de 100 PESOS tiene diferentes presentaciones', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '25px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)
        this.add.text(this.sys.game.config.width/2, 130, 'todas tienen el mismo valor', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '25px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)

        this.add.text(this.sys.game.config.width/2, 200, 'Presiona sobre el billete para girarlo y ver la parte de atras', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '20px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('#C3ABD1')
        .setShadow(1, 1)
      
        let frente = this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, '100-frente').setAlpha(1).setInteractive();
        frente.displayWidth = 500;
        frente.scaleY = frente.scaleX;
        frente.on('pointerdown',function(pointer){
            frente.setAlpha(0);
            dorso.setAlpha(1);
        })
     
        let dorso = this.add.image(this.sys.game.config.width/2, this.sys.game.config.height/2, '100-dorso').setAlpha(0).setInteractive();
        dorso.displayWidth = 500;
        dorso.scaleY = dorso.scaleX;
        dorso.on('pointerdown',function(pointer){
            frente.setAlpha(1);
            dorso.setAlpha(0);
        })

        let billete1 = this.add.image(200, 600, '100-frente').setAlpha(0.8).setInteractive();
        billete1.displayWidth = 200;
        billete1.scaleY = billete1.scaleX;
        billete1.on('pointerover',function(pointer){
            billete1.setAlpha(1);
        })        
        billete1.on('pointerout',function(pointer){
            billete1.setAlpha(0.8);
        })

        let billete2 = this.add.image(500, 600, '100-evita').setAlpha(0.8).setInteractive();
        billete2.displayWidth = 200;
        billete2.scaleY = billete2.scaleX;
        billete2.on('pointerover',function(pointer){
            billete2.setAlpha(1);
        })        
        billete2.on('pointerout',function(pointer){
            billete2.setAlpha(0.8);
        })

        let billete3 = this.add.image(800, 600, '100-taruca').setAlpha(0.8).setInteractive();
        billete3.displayWidth = 200;
        billete3.scaleY = billete3.scaleX;
        billete3.on('pointerover',function(pointer){
            billete3.setAlpha(1);
        })        
        billete3.on('pointerout',function(pointer){
            billete3.setAlpha(0.8);
        })

    }

}