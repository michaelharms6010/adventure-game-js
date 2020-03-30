class Player {
    constructor(current_room) {
        this.current_room = current_room;
        this.inventory = []
    }
    pickUp(item) {
        this.inventory.push(item)
    }

}

module.exports = Player;