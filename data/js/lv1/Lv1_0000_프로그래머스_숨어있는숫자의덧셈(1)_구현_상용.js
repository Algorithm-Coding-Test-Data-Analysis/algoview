function solution(my_string) {
  return [...my_string]
    .filter((el) => !isNaN(el))
    .reduce((a, c) => parseInt(a) + parseInt(c), 0);
}
