import Phaser from 'phaser';
import Bootloader from './bootloader.js';
import Menu from "./scenes/menu.js"
import BilletesMonedas from "./scenes/billetes-monedas.js"
import Billetes from "./scenes/billetes.js"
import DetalleBilletes from "./scenes/detalle-billetes.js"
import Opciones from "./scenes/opciones.js"
import UI from "./scenes/ui.js"
import Monedas from "./scenes/monedas.js"


const config = {
    
    //opcionales
    title: 'ManejandoDinero',    
    pixelArt: false, // remarca los pixeles de las imagenes

    //obligatorios
    width: 1024, //tamaño de lienzo
    height: 768, 
    type: Phaser.AUTO, // WebGL o Canvas automatico
    backgroundColor: '#d4d4d4', // color de fondo del lienzo

    //escenas del juego
    scene: [Bootloader, Menu, BilletesMonedas, Billetes, DetalleBilletes, Monedas, UI, Opciones]
}

//intancia del juego
const game = new Phaser.Game(config)