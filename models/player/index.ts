import Item from '../item'
import Weapon from '../item/weapon';
import NPC from '../NPC';

class Player {
    name: String;
    inventory: Array<Item>;
    health: number;
    damage: number;
    equipedWeapon: Weapon;

    constructor(name:String){
        this.name = name;
        this.inventory = [];
        this.health = 100;
        this.damage = 3;
    }

    pickUpItem(item:Item){
        let inInv = false;

        this.inventory.map(curItem =>{
            let numItems;
            if(curItem.name == item.name){
                numItems = curItem.quantity;
                curItem.quantity = numItems + item.quantity;
                inInv = true;
            }
        })
        if(!inInv)
            this.inventory.push(item);
    }

    printInventory(){
        this.inventory.map(item => {
            console.log(item);
        })
    }

    attack(target: NPC){
        if(this.equipedWeapon){
            target.health -= this.equipedWeapon.damage; 
        }
        else{
            target.health -= this.damage;
        }
    }
}

export default Player;
