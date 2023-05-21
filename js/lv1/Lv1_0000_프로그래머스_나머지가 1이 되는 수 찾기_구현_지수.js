function solution(n) {
  let x = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      x.push(i);
    }
  }
  return Math.min(...x);
}
