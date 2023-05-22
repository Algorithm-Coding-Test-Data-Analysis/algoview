function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((ac, cu) => parseInt(ac) + parseInt(cu), 0);
}