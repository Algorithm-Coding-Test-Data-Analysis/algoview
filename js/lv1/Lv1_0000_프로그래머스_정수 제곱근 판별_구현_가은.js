function solution(n) {
  let answer = -1;
  let sqrt = Math.sqrt(n);
  if (parseInt(sqrt) === Math.sqrt(n)){
      answer = (sqrt + 1) ** 2;
  } 
  return answer;
}