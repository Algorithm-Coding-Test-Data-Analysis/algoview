function solution(tickets) {
  let answer = [];
  let newObj = {};

  for (let ticket of tickets) {
    if (newObj[ticket[0]] === undefined) {
      newObj[ticket[0]] = [ticket[1]];
    } else {
      newObj[ticket[0]] = [...newObj[ticket[0]], ticket[1]];
    }
  }

  for (let key in newObj) {
    newObj[key].sort().reverse();
  }

  let stack = ["ICN"];

  while (stack.length) {
    let curNode = stack[stack.length - 1];
    if (newObj[curNode] && newObj[curNode].length > 0) {
      stack.push(newObj[curNode].pop());
    } else {
      answer.unshift(stack.pop());
    }
  }

  return answer;
}
