function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;

    stdin.resume();
    stdout.write(question + "\n" + "---> ");

    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}

module.exports = prompt;