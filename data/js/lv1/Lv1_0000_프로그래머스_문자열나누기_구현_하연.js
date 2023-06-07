function solution(s) {
  let answer = 0;
  let current;
  let count = 0;
  for(let i = 0; i < s.length; i++) {
      if(count === 0) {
          answer++;
          current = s[i];
          count = 1;
      } else {
          current === s[i] ? count++ : count--;
      }
  }
  return answer;
}