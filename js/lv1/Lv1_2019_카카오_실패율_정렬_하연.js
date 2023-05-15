function solution(N, stages) {
  const cnt = {};
  for (let i = 1; i <= N + 1; i++) cnt[i] = 0;
  stages.forEach(v => cnt[v]++);
  
  const answer = [];
  let num = stages.length;
  for (let i = 1; i <= N; i++) {
      answer.push([i, cnt[i] / num]);
      num -= cnt[i];
  }
  return answer.sort((a, b) => b[1] - a[1]).map(v => v[0]);
}