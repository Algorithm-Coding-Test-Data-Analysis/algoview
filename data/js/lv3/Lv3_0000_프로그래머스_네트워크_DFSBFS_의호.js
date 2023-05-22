function solution(n, computers) {
  let answer = 0;

  let stack = [];
  let visited = Array.from({ length: n }, () => false);

  for (let i = 0; i < computers.length; i++) {
    if (visited[i] === false) {
      stack.push(i);
      visited[i] = true;
      while (stack.length) {
        let curNode = stack.pop();
        for (let j = 0; j < computers[curNode].length; j++) {
          if (computers[curNode][j] === 1 && visited[j] === false) {
            stack.push(j);
            visited[j] = true;
          }
        }
      }
      answer++;
    }
  }

  return answer;
}
