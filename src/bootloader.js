import Phaser from 'phaser'
import WebFontFile from './objects/web-fonts-loader'

export default class Bootloader extends Phaser.Scene {
    
    constructor() {
        super('Bootloader')
    }
 
    preload() {

        this.load.image('bg', './src/assets/deepblue.png');

        this.load.image('10-frente', './src//assets/billetes/10-frente.png');
        this.load.image('20-frente', './src//assets/billetes/20-frente.png');
        this.load.image('50-frente', './src//assets/billetes/50-frente.png');
        this.load.image('100-frente', './src//assets/billetes/100-frente.png');
        this.load.image('100-dorso', './src//assets/billetes/100-dorso.png');
        this.load.image('100-evita', './src//assets/billetes/100-evita.png');
        this.load.image('100-taruca', './src//assets/billetes/100-taruca.jpeg');
        this.load.image('200-frente', './src//assets/billetes/200-frente.jpeg');
        this.load.image('500-frente', './src//assets/billetes/500-frente.jpeg');
        this.load.image('1000-frente', './src//assets/billetes/1000-frente.jpeg');

        this.load.spritesheet('1c', './src/assets/monedas/1c.png', {frameWidth:91,frameHeight:93});
        this.load.image('5c', './src//assets/monedas/5c.png');
        this.load.image('10c', './src//assets/monedas/10c.png');
        this.load.image('25c', './src//assets/monedas/25c.png');
        this.load.image('50c', './src//assets/monedas/50c.png');
        this.load.image('1p', './src//assets/monedas/1p.png');  
        this.load.image('2p', './src//assets/monedas/2p.png');        
        this.load.image('5p', './src//assets/monedas/5p.png');        
        this.load.image('10p', './src//assets/monedas/10p.png');
        

        this.load.spritesheet('btn', './src/assets/spritesheet.png', {frameWidth:163,frameHeight:81});
        this.load.spritesheet('btn-billetes-monedas', './src/assets/btn-billetes-monedas.png', {frameWidth:163,frameHeight:81});
        this.load.spritesheet('btn-contar-dinero', './src/assets/btn-contar-dinero.png', {frameWidth:163,frameHeight:81});
        this.load.spritesheet('btn-compras', './src/assets/btn-compras.png', {frameWidth:163,frameHeight:81});
        this.load.spritesheet('btn-billetes', './src/assets/btn-billetes.png', {frameWidth:163,frameHeight:81});
        this.load.spritesheet('btn-monedas', './src/assets/btn-monedas.png', {frameWidth:163,frameHeight:81});
        this.load.spritesheet('btn-home', './src/assets/btn-home.png', {frameWidth:81,frameHeight:82});
        this.load.spritesheet('btn-go-back', './src/assets/btn-go-back.png', {frameWidth:81,frameHeight:82});
        this.load.spritesheet('btn-sound-off', './src/assets/btn-sound-off.png', {frameWidth:81,frameHeight:82});
        this.load.spritesheet('btn-opciones', './src/assets/btn-opciones.png', {frameWidth:109,frameHeight:41});
        this.load.spritesheet('btn-aceptar', './src/assets/btn-aceptar.png', {frameWidth:163,frameHeight:81});

        this.load.spritesheet('btn-si', './src/assets/si.png', {frameWidth:50,frameHeight:50});
        this.load.spritesheet('btn-no', './src/assets/no.png', {frameWidth:50,frameHeight:50});

        this.load.spritesheet('panel-opciones', './src/assets/panel-opciones.png', {frameWidth:1212,frameHeight:844});

        this.load.audio('100-pesos-audio', './src/assets/100-pesos-audio.mp3');
        this.load.audio('billetes-audio', './src/assets/billetes-audio.mp3');
        this.load.audio('monedas-audio', './src/assets/monedas-audio.mp3');
        this.load.audio('billetes-monedas-audio', './src/assets/billetes-monedas-audio.mp3');

        this.load.multiatlas('coins', './src/assets/coin-flip/texture.json', './src/assets/coin-flip/');

        this.load.addFile(new WebFontFile(this.load, ['Ubuntu Mono']))

        this.load.on('complete', () => {
            this.scene.start('Menu');
        });
    }
 
 }