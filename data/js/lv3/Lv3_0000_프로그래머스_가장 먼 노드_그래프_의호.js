function solution(n, vertex) {
  let answer = 0;

  let list = Array(n + 1).fill([]);
  let count = Array(n + 1).fill(0);
  count[1] = 1;

  let node = [1];
  let queue = [node];

  vertex.map((v) => {
    list[v[0]] = [...list[v[0]], v[1]];
    list[v[1]] = [...list[v[1]], v[0]];
  });

  while (queue.length) {
    node = queue.shift();

    list[node].forEach((x) => {
      if (!count[x]) {
        queue.push(x);
        count[x] = count[node] + 1;
      }
    });
  }

  answer = count.filter((x) => x === Math.max(...count)).length;
  return answer;
}
