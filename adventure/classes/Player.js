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
    drop(search) {
        let itemsearch = search.replace("drop ", "");
        let droppedItem = this.inventory.find(item => item.name === itemsearch || item.name.split(" ")[0] === itemsearch)
        if (droppedItem) {
            this.inventory = this.inventory.filter(item => item.name !== droppedItem.name);
            this.current_room.items.push(droppedItem);
            console.log(`You dropped ${droppedItem.name}`)
        } else {
            console.log(`You aren't carrying ${itemsearch}.`)
        }
    }
    printItems() {
        return this.inventory.map(item => item.name).join("\n")
    }

}

module.exports = Player;