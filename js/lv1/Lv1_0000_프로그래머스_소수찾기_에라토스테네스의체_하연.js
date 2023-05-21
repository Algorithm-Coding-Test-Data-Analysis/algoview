function solution(n) {
  const arr = [...Array(n-1).keys()].map(v => v+2);
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (arr[i-2] !== null) {
      for (let j = 2; i * j <= n; j++) {
        arr[i * j - 2] = null;
      }
    }
  }
  return arr.filter(v => v !== null).length;
}