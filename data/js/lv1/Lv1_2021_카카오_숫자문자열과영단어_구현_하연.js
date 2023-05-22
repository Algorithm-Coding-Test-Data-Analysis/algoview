function solution(s) {
  const numList = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight' ,'nine'];
  numList.forEach((v, i) => {
    s = s.split(v).join(i);
  });
  return parseInt(s);
}