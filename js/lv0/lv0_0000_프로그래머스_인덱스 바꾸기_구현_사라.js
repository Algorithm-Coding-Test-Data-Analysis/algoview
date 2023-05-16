function solution(my_string, num1, num2) {
  let answer = [...my_string];
  answer.splice(num1, 1, my_string[num2]);
  answer.splice(num2, 1, my_string[num2]);
  return answer.join('');
}
