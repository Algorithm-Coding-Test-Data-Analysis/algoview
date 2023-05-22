function solution(citations) {
  citations.sort((a, b) => b - a);

  return citations.reduce((acc, cur, idx) => (idx < cur ? idx + 1 : acc), 0);
}
