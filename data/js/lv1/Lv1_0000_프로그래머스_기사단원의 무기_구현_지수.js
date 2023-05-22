function solution(number, limit, power) {
  let answer = 0;

  for (let i = 1; i <= number; i++) {
    let divisor = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) divisor += 1;
        else divisor += 2;
      }
      if (divisor > limit) {
        divisor = power;
        break;
      }
    }
    answer += divisor;
  }
  
  return answer;
}
