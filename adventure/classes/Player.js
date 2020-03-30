class Player {
    constructor(current_room) {
        this.current_room = current_room;
        this.inventory = []
    }
    pickUp(search) {
        let itemsearch = search.replace("get ", "");
        let pickedUpItem = this.current_room.items.find(item => item.name === itemsearch || item.name.split(" ")[0] === itemsearch)
        if (pickedUpItem) {
            this.inventory.push(pickedUpItem)
            this.current_room.items = this.current_room.items.filter(item => item.name !== pickedUpItem.name);
            console.log(`You picked up ${pickedUpItem.name}`)
        } else {
            console.log(`I don't see ${itemsearch} here.`)
        }
    }
    printItems() {
        console.log(this.inventory.join(" "))
    }

}

module.exports = Player;