const Room = require("../classes/Room")
const Item = require("../classes/Item")


const rooms = [
    //name, description, id, n_to=null, s_to=null, e_to=null, w_to=null,items=[]
    new Room("outside","You're outside, dude.", 1, 2, null, null, null, [new Item("Helm of the Dominator", "This is a horned helmet with magical powers"), new Item("Holy Locket", "A holy relic with healing porperties.")]),
    new Room("inside","You're inside, dude.", 2, 5, 1, 3),
    new Room("on a dusty corridor","You're in a corridor, dude.", 3, 4, null, null, 2),
    new Room("in the treasure room","You're in a treasure room, dude.", 4, null, 3),
    new Room("on an overlook","You're at an overlook, dude.", 5, null, 2)
]

module.exports = rooms;