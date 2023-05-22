function solution(n) {
  return n
    .toString()
    .split("")
    .map((el) => parseInt(el))
    .reverse();
}