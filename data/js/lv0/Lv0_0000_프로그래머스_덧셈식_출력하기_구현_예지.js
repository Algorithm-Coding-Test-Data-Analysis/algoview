const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const [first, second] = input.map(a => Number(a))
    console.log(`${first} + ${second} = ${first + second}`);
});
