var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update,
    }

};

var game = new Phaser.Game(config);

var tartaruguinha;

var tart;

function preload() {
    this.load.image('mar', 'assets/ponta-negra-natal-rn.jpg');
    this.load.image('logo', 'assets/logo-inteli_branco.png');
    this.load.image('tartaruga', 'assets/peixes/tartaruga.png');
    
}

function create() {
    this.add.image(400,300, 'mar')
    this.add.image(400,525, 'logo').setScale(0.5);

    tartaruguinha = this.add.image(400,300, 'tartaruga');

    tartaruguinha.setFlip(true,false);

}

function update() {

    tartaruguinha.x = this.input.x;
    tartaruguinha.y = this.input.y;

} 