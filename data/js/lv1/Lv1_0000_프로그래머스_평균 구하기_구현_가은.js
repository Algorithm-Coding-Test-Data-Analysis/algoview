function solution(arr) {
  let answer = arr.reduce((a, c) => a + c);
  return answer / arr.length;
}