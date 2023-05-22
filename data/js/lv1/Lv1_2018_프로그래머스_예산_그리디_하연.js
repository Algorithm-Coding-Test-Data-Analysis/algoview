function solution(d, budget) {
  let answer = budget;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    answer -= d[i];
    if (answer < 0) return i;
  }
  return d.length;
}