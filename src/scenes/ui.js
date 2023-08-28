import Phaser from 'phaser'

export default class UI extends Phaser.Scene {
    constructor() {
        super('UI');
    }

    preload() {
        console.log('Soy UI');
    }
    
    create() {    
        
        this.origin;
        this.target;
        this.sound;
        this.isSoundMuted = false;

        const home = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height - 40, 'btn-home')
                        .setInteractive()
                        .setScale(0.6);
        
        home.on('pointerover',function(pointer){
            home.setFrame(1);
        })        
        home.on('pointerout',function(pointer){
            home.setFrame(0);
        })
        home.on('pointerdown', () => {
            this.sound.stop();
            this.scene.stop('BilletesMonedas')
            this.scene.stop('Billetes')
            this.scene.stop('DetalleBilletes')
            this.scene.stop('Monedas')
            .launch('Menu');
        })

        const goBack = this.add.sprite(this.sys.game.config.width/2 - 60, this.sys.game.config.height - 40, 'btn-go-back')
                        .setInteractive()
                        .setScale(0.6);
        
        goBack.on('pointerover',function(pointer){
            goBack.setFrame(1);
        })        
        goBack.on('pointerout',function(pointer){
            goBack.setFrame(0);
        })
        goBack.on('pointerdown', () => {
            this.sound.stop();
            this.scene.stop(this.origin).launch(this.target);
        })

        const soundOff = this.add.sprite(this.sys.game.config.width/2 + 60, this.sys.game.config.height - 40, 'btn-sound-off')
                        .setInteractive()
                        .setScale(0.6);
        
        soundOff.on('pointerover',function(pointer){
            soundOff.setFrame(1);
        })        
        soundOff.on('pointerout',function(pointer){
            soundOff.setFrame(0);
        })
        soundOff.on('pointerdown', () => {
            this.muteUnMuteSounds();
        })

    }

    goBackTo(origin, target) {
        this.origin = origin;
        this.target = target;
    }    

    stopAudio(sound){
        this.sound = sound;
    }

    muteUnMuteSounds() {
        if(this.isSoundMuted){
            this.isSoundMuted = false;
        }else{
            this.isSoundMuted = true;
        }
        
    }

    isMuted() {
        return this.isSoundMuted;
    }

}