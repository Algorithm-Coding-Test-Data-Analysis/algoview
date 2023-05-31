function solution(arr) {
  const min = Math.min(...arr);
  arr = arr.filter(num => num !== min);
  if (arr.length === 0) return [-1];
  else return arr;
}
