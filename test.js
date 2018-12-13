var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.inventory = [];
        this.health = 100;
    }
    return Player;
}());
var NPC = /** @class */ (function () {
    function NPC() {
    }
    return NPC;
}());
var Room1 = /** @class */ (function () {
    function Room1(player) {
        this.currentPlayer = player;
    }
    Room1.prototype.getCurrentPlayerName = function () {
        return this.currentPlayer.name;
    };
    return Room1;
}());
var player1 = new Player('tommy');
var room1 = new Room1(player1);
console.log(room1.getCurrentPlayerName());
