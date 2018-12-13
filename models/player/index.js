"use strict";
exports.__esModule = true;
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
        this.inventory = [];
        this.health = 100;
    }
    Player.prototype.pickUpItem = function (item) {
        var inInv = false;
        this.inventory.map(function (curItem) {
            var numItems;
            if (curItem.name == item.name) {
                numItems = curItem.quantity;
                curItem.quantity = numItems + item.quantity;
                inInv = true;
            }
        });
        if (!inInv)
            this.inventory.push(item);
    };
    Player.prototype.printInventory = function () {
        this.inventory.map(function (item) {
            console.log(item);
        });
    };
    return Player;
}());
exports["default"] = Player;
