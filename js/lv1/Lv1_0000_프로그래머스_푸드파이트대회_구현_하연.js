function solution(food) {
  let answer = '';
  food.forEach((num, i) => {
      answer += `${i}`.repeat(Math.trunc(num / 2));
  })
  return answer + '0' + answer.split('').reverse().join('');
}

// https://school.programmers.co.kr/learn/courses/30/lessons/134240