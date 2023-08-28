import Phaser from 'phaser'

export default class Menu extends Phaser.Scene {
   constructor() {
        super('Menu')
   }

   init() {
        console.log('Scene Menu')
   }

   preload() {
        
   }

   create() {

        this.scene.stop('UI')

        this.add.image(0, 0, 'bg').setScale(1.3).setOrigin(0);
        
        this.add.text(this.sys.game.config.width/2, this.sys.game.config.height/2-150, 'Aprendamos juntos sobre el uso del dinero', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '30px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('#C3ABD1')
        .setShadow(1, 1)

		this.add.text(this.sys.game.config.width/2, this.sys.game.config.height/2-50, 'Comencemos!', {
			fontFamily: '"Ubuntu Mono"',
			fontSize: '50px'
		})
        .setOrigin(0.5, 0.5)
        .setColor('white')
        .setShadow(1, 1)
        
        const button1 = this.add.sprite(300, 500, 'btn-billetes-monedas').setInteractive();
        const button2 = this.add.sprite(500, 500, 'btn-contar-dinero').setInteractive();
        const button3 = this.add.sprite(700, 500, 'btn-compras').setInteractive();

        const btnOptions = this.add.sprite(500, 600, 'btn-opciones').setInteractive();
        const optionsBack = this.add.sprite(0, 0, 'panel-opciones').setOrigin(0).setScale(0.6);
        const btnOptionsSalir = this.add.sprite(350, 450, 'btn-aceptar').setInteractive().setScale(0.6);

         // Crear ventana emergente
        const popup = this.add.container(this.sys.game.config.width / 2 - 350, this.sys.game.config.height / 2 - 200);
        popup.setVisible(false);
        popup.setSize(730, 510);
        popup.add(optionsBack);
        popup.add(btnOptionsSalir);

        const checkboxMusica = this.add.image(600, 150, 'btn-si').setOrigin(0);        
        const checkboxMusicaText = this.add.text(100, 150, 'MUSICA FONDO', {
            font: '40px Nunito-Bold',
            color: '#4c4c4c',
        });
        popup.add(checkboxMusica);
        popup.add(checkboxMusicaText);
        checkboxMusica.setInteractive().on('pointerdown', toggleCheckboxMusica);
        function toggleCheckboxMusica() {
            if (checkboxMusica.texture.key === 'btn-no') {
                checkboxMusica.setTexture('btn-si');
            } else {
                checkboxMusica.setTexture('btn-no');
            }
        }

        const checkboxSonido = this.add.image(600, 220, 'btn-si').setOrigin(0);        
        const checkboxSonidoText = this.add.text(100, 220, 'EFECTOS DE SONIDO', {
            font: '40px Nunito-Bold',
            color: '#4c4c4c',
        });
        popup.add(checkboxSonido);
        popup.add(checkboxSonidoText);
        checkboxSonido.setInteractive().on('pointerdown', toggleCheckboxSonido);
        function toggleCheckboxSonido() {
            if (checkboxSonido.texture.key === 'btn-no') {
                checkboxSonido.setTexture('btn-si');
            } else {
                checkboxSonido.setTexture('btn-no');
            }
        }

        const checkboxCalculadora = this.add.image(600, 290, 'btn-si').setOrigin(0);        
        const checkboxCalculadoraText = this.add.text(100, 290, 'CALCULADORA', {
            font: '40px Nunito-Bold',
            color: '#4c4c4c',
        });
        popup.add(checkboxCalculadora);
        popup.add(checkboxCalculadoraText);
        checkboxCalculadora.setInteractive().on('pointerdown', toggleCheckboxCalculadora);
        function toggleCheckboxCalculadora() {
            if (checkboxCalculadora.texture.key === 'btn-no') {
                checkboxCalculadora.setTexture('btn-si');
            } else {
                checkboxCalculadora.setTexture('btn-no');
            }
        }

        const checkboxAyudas = this.add.image(600, 360, 'btn-si').setOrigin(0);        
        const checkboxAyudasText = this.add.text(100, 360, 'AYUDAS', {
            font: '40px Nunito-Bold',
            color: '#4c4c4c',
        });
        popup.add(checkboxAyudas);
        popup.add(checkboxAyudasText);
        checkboxAyudas.setInteractive().on('pointerdown', toggleCheckboxAyudas);
        function toggleCheckboxAyudas() {
            if (checkboxAyudas.texture.key === 'btn-no') {
                checkboxAyudas.setTexture('btn-si');
            } else {
                checkboxAyudas.setTexture('btn-no');
            }
        }

        button1.on('pointerover',function(pointer){
            button1.setFrame(1);
        })        
        button1.on('pointerout',function(pointer){
            button1.setFrame(0);
        })
        button1.on('pointerdown', () => {
            this.scene.start('BilletesMonedas');
        })

        button2.on('pointerover',function(pointer){
            button2.setFrame(1);
        })        
        button2.on('pointerout',function(pointer){
            button2.setFrame(0);
        })

        button3.on('pointerover',function(pointer){
            button3.setFrame(1);
        })        
        button3.on('pointerout',function(pointer){
            button3.setFrame(0);
        })

        btnOptions.on('pointerover',function(pointer){
            btnOptions.setFrame(1);
        })        
        btnOptions.on('pointerout',function(pointer){
            btnOptions.setFrame(0);
        })
        btnOptions.on('pointerdown', () => {
            popup.setVisible(true);
        })

        
        btnOptionsSalir.on('pointerover',function(pointer){
            btnOptionsSalir.setFrame(1);
        })        
        btnOptionsSalir.on('pointerout',function(pointer){
            btnOptionsSalir.setFrame(0);
        })
        btnOptionsSalir.on('pointerdown', () => {
            popup.setVisible(false);
        })

        // this.anims.create({
        //     key: 'coin-flip',
        //     frameRate: 5,
        //     frames: this.anims.generateFrameNumbers('coins', { start: 0, end: 5 }),
        //     repeat: -1
        // });

        // const coins = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2-260, 'coins').setScale(0.1);
        // coins.play('coin-flip');

        let coin = this.add.sprite(this.sys.game.config.width/2, this.sys.game.config.height/2-260, 'coins');
        coin.setScale(0.2);

        var frameNames = this.anims.generateFrameNames('coins', {
            start: 21, end: 30, zeroPad: 0,
            prefix: 'Gold_', suffix: '.png'
        });

        this.anims.create({ key: 'coin-flip', frames: frameNames, frameRate: 10, repeat: -1 });
        coin.anims.play('coin-flip');
        
	}

}