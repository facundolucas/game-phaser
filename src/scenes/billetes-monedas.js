import Phaser from 'phaser'

export default class BilletesMonedas extends Phaser.Scene {
    
    constructor() {
        super('BilletesMonedas')
    }

    init() {
        console.log('Scene BilletesMonedas')
    }

    create() {
        this.add.image(0, 0, 'bg').setScale(1.3).setOrigin(0);

        this.scene.launch('UI');  
        const sceneUI = this.scene.get('UI');
        sceneUI.goBackTo('BilletesMonedas','Menu')

        this.audio = this.sound.add('billetes-monedas-audio');
        if(!sceneUI.isMuted()){
            this.audio.play();    
        }   
        sceneUI.stopAudio(this.audio);

		this.add.text(this.sys.game.config.width/2, 100, 'Billetes y Monedas Argentinas', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '50px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)

        let label = this.add.text(this.sys.game.config.width/2, 250, '', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '20px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')

        this.typewriteText(label, 'En ARGENTINA utilizamos el PESO como moneda oficial.\nPara hacer uso del mismo,\npodemos utilizar BILLETES o MONEDAS...')

        this.add.text(this.sys.game.config.width/2, 350, 'Ahora aprendamos juntos sobre billetes y monedas', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '30px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('#C3ABD1')
        .setShadow(1, 1)

        const button1 = this.add.sprite(this.sys.game.config.width/2 - 100, this.sys.game.config.height/2 + 100, 'btn-billetes').setInteractive();
        const button2 = this.add.sprite(this.sys.game.config.width/2 + 100, this.sys.game.config.height/2 + 100, 'btn-monedas').setInteractive();

        button1.on('pointerover',function(pointer){
            button1.setFrame(1);
        })        
        button1.on('pointerout',function(pointer){
            button1.setFrame(0);
        })
        button1.on('pointerdown', () => {
            this.audio.stop();
            this.scene.start('Billetes');
        })

        button2.on('pointerover',function(pointer){
            button2.setFrame(1);
        })        
        button2.on('pointerout',function(pointer){
            button2.setFrame(0);
        })
        button2.on('pointerdown', () => {
            this.audio.stop();
            this.scene.start('Monedas');
        })
    }

    typewriteText(label, text){
        const length = text.length
        let i = 0
        this.time.addEvent({
            callback: () => {
                label.text += text[i]
                ++i
            },
            repeat: length - 1,
            delay: 60,            
        })        
    }
}