import NPC from '../index';
import Player from '../../player';

class Monster extends NPC{
    damage: number;

    constructor(name:String,health:number,damage:number){
        super(name,health);
        this.damage = damage;
    }

    attack(player:Player){
        player.health -= this.damage;
    }
}

export default Monster;