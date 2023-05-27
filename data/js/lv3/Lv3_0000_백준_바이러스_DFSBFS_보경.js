const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [C, N, ...arr] = require('fs').readFileSync(filePath).toString().trim().split('\n');

let graph = {};
for (let i = 1; i <= C; i++) {
    graph[i] = []
}
for (let i = 0; i < N; i++) {
    const [a, b] = arr[i].split(' ').map(v => +v);
    graph[a].push(b);
    graph[b].push(a);
}

const dfs = (graph, startNode) => {
    let visited = [];
    let needVisit = [];

    needVisit.push(startNode);

    while (needVisit.length !== 0) {
        const node = needVisit.pop();
        if (!visited.includes(node)) {
            visited.push(node);
            needVisit = [...needVisit, ...graph[node]];
        }
    }
    return visited;
};

console.log(dfs(graph, 1).length - 1);