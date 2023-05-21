const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "text.txt";
const newLine = process.platform === "linux" ? "\n" : "\r\n";
const key = fs.readFileSync(filePath).toString().trim().split(newLine)[1].split(" ").map(Number);
const map = new Map();

[...new Set(key)].sort((a, b) => a - b).forEach((el, i) => map.set(el, i));
let answer = "";
key.forEach((el) => {
  answer += `${map.get(el)} `;
});
console.log(answer.trim());
