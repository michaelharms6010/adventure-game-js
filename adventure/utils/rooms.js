const Room = require("../classes/Room")

const rooms = [
   new Room("outside","You're outside, dude.", 1, 2),
    new Room("inside","You're inside, dude.", 2, 5, 1, 3),
    new Room("on a dusty corridor","You're in a corridor, dude.", 3, 4, null, null, 2),
    new Room("in the treasure room","You're in a treasure room, dude.", 4, null, 3),
    new Room("on an overlook","You're at an overlook, dude.", 5, null, 2)
]

module.exports = rooms;