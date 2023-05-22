function solution(s) {
  var answer = '';
  answer = `${Math.min(...s.split(' ').map(Number))} ${Math.max(
    ...s.split(' ').map(Number)
  )}`;

  return answer;
}
