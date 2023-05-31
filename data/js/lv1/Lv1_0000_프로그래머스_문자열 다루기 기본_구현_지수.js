function solution(s) {
  if (s.length == 4 || s.length == 6) {
    return s.split("").every((x) => !isNaN(x));
  } else return false;
}
