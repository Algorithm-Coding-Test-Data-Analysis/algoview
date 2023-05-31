function solution(n, k) {
  var answer = 0;
  n.toString(k)
    .split('0')
    .filter((a) => a !== '' && a !== '1')
    .map(Number)
    .forEach((a, i) => {
      for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
          return false;
        }
      }
      answer++;
    });

  return answer;
}
