function solution(arr) {
  const len = arr.length;
  arr = arr.reduce((a, b) => a + b);
  return arr / len;
}
