function solution(a, b) {
  return a.reduce((sum, num, index) => sum + num * b[index], 0);
}
