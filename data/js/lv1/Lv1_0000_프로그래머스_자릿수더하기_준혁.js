function solution(n) {
  let sum = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += parseInt(n[i]);
  }
  return sum;
}
