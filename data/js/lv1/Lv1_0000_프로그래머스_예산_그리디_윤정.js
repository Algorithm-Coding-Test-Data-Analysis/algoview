function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) {
      break;
    }
    result++;
  }

  return result;
}
