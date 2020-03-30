const Room = require("./classes/Room")
let prompt = require("./utils/prompt")
let rooms = require("./utils/rooms");
let Player = require("./classes/Player.js")

const directions = {
    n: "north",
    s: "south",
    e:"east",
    w: "west"
}
let player = new Player( new Room("Outside","You're outside, dude.", 1, 2));


prompt(`You are in ${player.current_room.name}. ${player.current_room.description} Indicate your move:`, input => {
    if (directions[input]) {
        player.current_room = rooms.find(item => item.id === player.current_room[`${input}_to`])
        console.log(`You move ${directions[input]}. You are now in ${player.current_room.name}`)
    }
    process.exit()
})

