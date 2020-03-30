let Room = require('./classes/Room');
let prompt = require("./utils/prompt")


const directions = {
    n: "north",
    s: "south",
    e:"east",
    w: "west"
}

prompt("Indicate your move:", input => {
    if (directions[input]) {
        console.log(`You move ${directions[input]}.`)
    }
    process.exit()
})

