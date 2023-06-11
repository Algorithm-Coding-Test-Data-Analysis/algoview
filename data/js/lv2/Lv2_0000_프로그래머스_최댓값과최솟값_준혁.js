function solution(s) {
  var answer = '';

  let arr = s.split(' ');
  arr = arr.map(item => {
    return parseInt(item, 10);
  });
  const min = Math.min.apply(null, arr);
  const max = Math.max.apply(null, arr);

  answer = min + ' ' + max;

  return answer;
}
