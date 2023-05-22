function solution(my_string) {
  let result = my_string.split("").filter(v => !['a', 'e', 'i', 'o', 'u'].includes(v)).join("");
  return result;
}