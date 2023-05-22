function solution(n) {
  let sw = 0;
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) {
      sw++;
    }
  }
  return sw;
}
