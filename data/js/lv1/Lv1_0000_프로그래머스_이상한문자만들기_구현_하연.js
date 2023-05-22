function solution(s) {
  return s.toUpperCase().replace(/\w{2}/g, v => v[0] + v[1].toLowerCase())
}