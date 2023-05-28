function solution(n, m) {
  let a;
  let b;
  for (let i = 1; i <= Math.max(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      a = i;
    }
  }
  b = (n * m) / a;
  return [a, b];
}
