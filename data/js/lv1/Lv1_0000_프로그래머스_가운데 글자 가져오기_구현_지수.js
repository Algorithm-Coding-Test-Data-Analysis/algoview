function solution(s) {
  const cnt = Math.floor(s.length / 2);
  return s.length % 2 == 0 ? s.slice(cnt - 1, cnt + 1) : s.slice(cnt, cnt + 1);
}
