function solution(order) {
  var answer = 0;
  
  answer=order.toString().split('').filter(v=>"369".split('').includes(v)).length
  
  return answer;
}