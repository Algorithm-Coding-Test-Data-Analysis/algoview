function solution(arr) {
  var answer = arr.reduce((acc,cur)=>acc+cur,0)/arr.length;
  return answer;
}