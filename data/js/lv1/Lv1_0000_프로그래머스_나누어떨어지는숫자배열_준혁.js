function solution(arr, divisor) {
  let res = arr.filter(num => num % divisor === 0).sort((a, b) => a - b);
  if (res.length === 0) return [-1];
  else return res;
}
