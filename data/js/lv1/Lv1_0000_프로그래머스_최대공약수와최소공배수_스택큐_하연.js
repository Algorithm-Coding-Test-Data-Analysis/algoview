function solution(n, m) {
  const GCD = findGCD(n, m);
  const LCM = n * m / GCD;
  return [GCD, LCM];
}
function findGCD(a, b) {
  return a % b === 0 ? b : findGCD(b, a % b);
}
