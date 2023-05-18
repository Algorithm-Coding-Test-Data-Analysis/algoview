function solution(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans *= i;

    if (ans === n) {
      return i;
    }

    if (ans > n) {
      return i - 1;
    }
  }

  return answer;
}
