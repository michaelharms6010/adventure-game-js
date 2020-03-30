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
let player = new Player( rooms[0]);
playerTurn();
function playerTurn() {
    prompt(`You are ${player.current_room.name}. ${player.current_room.getDescription()} ${player.current_room.getExits()} Indicate your move:`, input => {
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
            console.log("Goodbye!")
            process.exit()
        }else if (input === "rq") {
            console.log("R-R-R-R-R-R-RRRRRRAGE QUIT!")
            process.exit()
        } else if (input === "help") {
            console.log("Type 'n', 's', 'e', or 'w' to move. Type 'q' to quit.")
            playerTurn();
        } else {
            console.log("I didn't understand your input. Type 'help' for available commands.")
            playerTurn();
        }
        

    })


}