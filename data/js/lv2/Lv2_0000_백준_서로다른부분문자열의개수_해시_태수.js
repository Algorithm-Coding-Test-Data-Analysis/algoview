const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const input = fs.readFileSync(filePath).toString().trim();

const set = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = input.length; j > i; j--) {
    set.add(input.slice(i, j));
  }
}

console.log(set.size);
