const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [N, A] = require('fs').readFileSync(filePath).toString().trim().split('\n');
A = A.split(' ').map(i => +i);

let memo = new Array(N * 1).fill(1);
for (let i = 1; i < N; i++) {
    const values = [1];
    for (let j = 0; j < i; j++) {
        if (A[i] < A[j]) {
            values.push(memo[j] + 1);
        }
    }
    memo[i] = Math.max(...values);
}
console.log(Math.max(...memo));