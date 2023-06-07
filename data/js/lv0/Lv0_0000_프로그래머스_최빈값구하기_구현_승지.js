function solution(array) {
  let arr = new Map();

  for (let i of array) {
    arr.set(i, (arr.get(i) || 0) + 1);
  }

  let result = [...arr].sort((a, b) => b[0] - a[0]); // 원소 먼저 정렬
  result.sort((a, b) => b[1] - a[1]); // 최빈값 정렬

  if (result.length === 1) return result[0][0];
  else if (result[0][1] === result[1][1]) return -1;
  else return result[0][0];
}
