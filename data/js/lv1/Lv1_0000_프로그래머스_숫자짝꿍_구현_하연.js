function solution(X, Y) {
  const cntX = [0,0,0,0,0,0,0,0,0,0];
  const cntY = [0,0,0,0,0,0,0,0,0,0];
  
  for (const x of X) cntX[x]++;
  for (const y of Y) cntY[y]++;
  
  let answer = '';
  for (let i = 9; i >= 0; i--) {
    answer += `${i}`.repeat(Math.min(cntX[i], cntY[i]));
  }
  return !answer ? '-1' : answer[0] === '0' ? '0' : answer;
}