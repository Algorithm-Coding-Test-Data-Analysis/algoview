function solution(s, skip, index) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    .filter(v => !skip.includes(v));
  let answer = '';
  for (const v of s) {
    answer += alphabet[(alphabet.indexOf(v) + index) % alphabet.length];
  }
  return answer;
}