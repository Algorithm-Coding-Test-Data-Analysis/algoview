function solution(s) {
  const midLen = Math.floor(s.length / 2);

  if (s.length % 2 === 0) return s.substr(midLen - 1, 2);
  else return s.substr(midLen, 1);
}
