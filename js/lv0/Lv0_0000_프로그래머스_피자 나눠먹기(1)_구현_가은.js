function solution(n) {
  return n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1
}