function solution(k, ranges) {
  const graph = [k];

  while (k !== 1) {
    if (k % 2) {
      k = k * 3 + 1;
    } else {
      k /= 2;
    }
    graph.push(k);
  }

  return ranges.map((cur) => {
    let result = 0;
    if (cur[0] > graph.length - 1 + cur[1]) {
      return -1;
    } else {
      for (let i = cur[0]; i < graph.length - 1 + cur[1]; i++) {
        result += (graph[i] + graph[i + 1]) / 2;
      }
      return result;
    }
  });
}
