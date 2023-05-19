function solution(x) {
  var answer = true;
  
  pivot = (x+'').split('').reduce((acc,cur)=>acc+cur*1,0)
  return !(x%pivot);
}