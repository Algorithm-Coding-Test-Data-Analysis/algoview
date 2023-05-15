function solution(array) {
  const bigNum = Math.max(...array);
  const bigIndex = array.indexOf(bigNum);
  return [bigNum, bigIndex];
}
