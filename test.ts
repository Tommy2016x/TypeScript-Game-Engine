class Item{
    name: String;
    quantity: number;
}

class Player {
    name: String;
    inventory: Array<Item>;
    health: number;

    constructor(name:String){
        this.name = name;
        this.inventory = [];
        this.health = 100;
    }
}

class NPC{
    name: String;
    health: number;
    type: String;
}

class Room1 {
    currentPlayer: Player

    constructor(player: Player){
        this.currentPlayer = player;
    }

    getCurrentPlayerName() : String{
        return this.currentPlayer.name;
    }
}

const player1 = new Player('tommy');

const room1 = new Room1(player1);

console.log(room1.getCurrentPlayerName());