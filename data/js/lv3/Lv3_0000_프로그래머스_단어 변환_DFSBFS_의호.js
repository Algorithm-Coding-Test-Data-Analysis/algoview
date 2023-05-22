function solution(begin, target, words) {
  let answer = 0;

  let queue = [begin];
  let visited = { [begin]: 0 };
  let curNode;

  while (queue.length) {
    curNode = queue.shift();
    if (curNode === target) {
      break;
    }
    for (let i = 0; i < words.length; i++) {
      if (
        !visited[words[i]] &&
        curNode.split("").filter((value, index) => value === words[i][index])
          .length ===
          begin.length - 1
      ) {
        queue.push(words[i]);
        visited[words[i]] = visited[curNode] + 1;
      }
    }
  }
  answer = visited[target] ? visited[target] : 0;
  return answer;
}
