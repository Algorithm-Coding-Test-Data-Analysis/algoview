function solution(my_string, n) {
  let print = "";
  for (let i = 0; i < my_string.length; i++) {
    print += my_string[i].repeat(n);
  }
  return print;
}
