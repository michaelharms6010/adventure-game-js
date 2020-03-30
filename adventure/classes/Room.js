class Room {
    constructor(name, description, id, n_to=null, s_to=null, e_to=null, w_to=null,items) {
        this.name = name;
        this.description = description;
        this.id = id
        this.n_to = n_to;
        this.s_to = s_to;
        this.e_to = e_to;
        this.w_to = w_to;
        this.items = items;
    }
    getDescription() {
        return this.description
    }
    getExits() {
        let exits = []
        if (this.n_to) exits.push("north")
        if (this.s_to) exits.push("south")
        if (this.e_to) exits.push("east")
        if (this.w_to) exits.push("west")
        if (exits.length === 1) return "There is an exit to the " + exits[0] + "."
        return `Exits: ${exits.join(", ")}`
    }
}

module.exports = Room;