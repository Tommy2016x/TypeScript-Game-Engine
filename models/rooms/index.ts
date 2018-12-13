import Player from '../player';
import Item from '../item';

class Room {
    currentPlayer: Player;
    roomItems: Array<Item>;

    constructor(player: Player){
        this.currentPlayer = player;
    }
}

export default Room;