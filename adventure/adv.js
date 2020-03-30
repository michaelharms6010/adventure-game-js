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
playerTurn();
function playerTurn() {
    prompt(`You are ${player.current_room.name}. ${player.current_room.description} ${player.current_room.getExits()} Indicate your move:`, input => {
        if (directions[input] && player.current_room[`${input}_to`]) {
            player.current_room = rooms.find(item => item.id === player.current_room[`${input}_to`])
            console.log(`You move ${directions[input]}. You are now ${player.current_room.name}`)
            // process.exit()
            playerTurn();
        } else if(["n", "s", "e", "w"].includes(input)) {
            console.log("You cannot move that direction.")
            playerTurn();
        }
        else if (input === "q") {
            quit = true
            console.log("Goodbye!")
            process.exit()
        }else if (input === "rq") {
            quit = true
            console.log("R-R-R-R-R-R-RRRRRRAGE QUIT!")
            process.exit()
        }
        

    })


}