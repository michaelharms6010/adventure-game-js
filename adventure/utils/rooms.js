const Room = require("../classes/Room")

const rooms = [
   new Room("Outside","You're outside, dude.", 1, 2),
    new Room("Inside","You're inside, dude.", 2, null, 1)
]

module.exports = rooms;