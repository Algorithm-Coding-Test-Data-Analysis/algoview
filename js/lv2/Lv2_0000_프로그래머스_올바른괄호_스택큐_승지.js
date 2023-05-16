function solution(s) {
  let 스택 = 0;
  for (let i = 0; i < s.length; i++) {
    스택 += s[i] === "(" ? 1 : -1;
    if (스택 < 0) return false;
  }
  return 스택 === 0 ? true : false;
}
