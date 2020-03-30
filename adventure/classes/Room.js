class Room {
    constructor(name, description, id, n_to=null, s_to=null, e_to=null, w_to=null) {
        this.name = name;
        this.description = description;
        this.id = id
        this.n_to = n_to;
        this.s_to = s_to;
        this.e_to = e_to;
        this.w_to = w_to;
    }
    getDescription() {
        return this.description
    }
}