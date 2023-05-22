function solution(a, b, n) {
  let cnt = 0;
  while(n >= a) {
    n -= (a - b);
    cnt++;
  }
  return cnt * b;
}

function solution(a, b, n) {
  let answer = 0;
  while(n >= a) {
    const cola = Math.trunc(n / a) * b;
    answer += cola;
    n = (n % a) + cola;
  }
  return answer;
}

// https://school.programmers.co.kr/learn/courses/30/lessons/132267