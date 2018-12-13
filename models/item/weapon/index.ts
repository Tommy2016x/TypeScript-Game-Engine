import Item from '../index'

class Weapon extends Item{
    damage: number

    constructor(name:String,quan:number,dam:number){
        super(name,quan);
        this.damage = dam;
    }
}

export default Weapon;