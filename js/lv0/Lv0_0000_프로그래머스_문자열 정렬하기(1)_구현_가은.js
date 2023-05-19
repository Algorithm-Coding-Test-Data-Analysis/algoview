function solution(my_string) {
  let answer = my_string.split("").map(Number).filter((v) => !Number.isNaN(v)).sort((a, b) => a - b);
  return answer;
}