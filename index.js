class Character {
    constructor(attackPower, health){
        this.attackPower = attackPower;
        this.health = health;
    }
    attack(opposingPlayer){
        if (Math.random() > 0.5){
            opposingPlayer.health - this.attackPower;
        }
    }
}

class Red extends Character {
    constructor (x, y) {
        super(x, y);
    }
}

class Blue extends Character {
    constructor(a, b) {
        super(a, b);
    }
}

var winnerArr = ['red', 'red', 'blue', 'blue', 'red'];

winnerArr.map((item, index) => {winner: item});

const red = new Red(3, 40);
const blue = new Blue(5, 30);

(red, blue) => {
    let attacker;
    Math.random() > 0.5 ? attacker = red : attacker = blue;

    while (red.health > 0 && blue.health > 0){

    }

}