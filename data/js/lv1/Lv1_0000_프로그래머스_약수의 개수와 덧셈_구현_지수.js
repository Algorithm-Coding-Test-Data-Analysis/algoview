function solution(left, right) {
  let measure = 0;
  let answer = 0;
  for (let i = left; i <= right; i++) {
    for (let k = 1; k <= i; k++) {
      if (i % k == 0) {
        measure++;
      }
    }
    measure % 2 == 0 ? (answer += i) : (answer -= i);
    measure = 0;
  }
  return answer;
}
