function solution(x) {
  const sum = x
    .toString()
    .split('')
    .map(num => parseInt(num))
    .reduce((a, b) => a + b);
  if (x % sum === 0) return true;
  else return false;
}
