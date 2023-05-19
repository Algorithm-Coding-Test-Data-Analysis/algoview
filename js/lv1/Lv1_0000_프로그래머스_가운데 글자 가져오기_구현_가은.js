function solution(s) {
  let middle = Math.floor(s.length / 2);

  if (s.length % 2 !== 0) {
      return s[middle];
  } else {
      return s.slice(middle - 1, middle + 1);
  }
}