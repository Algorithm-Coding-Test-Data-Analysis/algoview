function solution(n) {
  let answer =  String(n).split("").reduce((a,c) => a + c * 1, 0)
  return answer;
}