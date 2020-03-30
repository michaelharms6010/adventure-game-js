let Room = require('./classes/Room');

function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question + "\n" + "---> ");

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

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

