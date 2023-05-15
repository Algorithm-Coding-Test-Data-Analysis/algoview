function solution(dartResult) {
  const answer = [];
  const area = {'S':1, 'D':2, 'T':3};
  for (let i = 0; i < dartResult.length; i+=2) {
      if (dartResult.slice(i, i+2) === '10') {
          i++;
          answer.push(10 ** area[dartResult[i+1]]);
      } else {
          answer.push(dartResult[i] ** area[dartResult[i+1]]);
      }
      if (dartResult[i+2] === '*') {
          answer[answer.length - 1] *= 2;
          answer[answer.length - 2] *= 2;
          i++;
      } else if (dartResult[i+2] === '#') {
          answer[answer.length - 1] *= -1;
          i++;
      }
  }
  return answer.reduce((a, b) => a + b);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/17682