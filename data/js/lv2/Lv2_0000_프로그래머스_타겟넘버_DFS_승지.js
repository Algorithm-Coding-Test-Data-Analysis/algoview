function solution(numbers, target) {
  let answer = 0;

  function dfs(index, currentSum) {
    if (index === numbers.length) {
      if (currentSum === target) {
        answer++;
      }
      return;
    }

    dfs(index + 1, currentSum + numbers[index]);
    dfs(index + 1, currentSum - numbers[index]);
  }

  dfs(0, 0);

  return answer;
}
