function solution(strings, n) {
  return strings
      .sort()
      .reverse()
      .sort((a, b) => a[n] > b[n] ? 1 : -1)
}