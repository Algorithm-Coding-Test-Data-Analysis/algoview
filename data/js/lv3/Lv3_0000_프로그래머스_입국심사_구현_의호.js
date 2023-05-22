function solution(n, times) {
  let answer = 0;

  let low = 1;
  let high = Math.max(...times) * n;

  while (low <= high) {
    let count = 0;
    let mid = Math.floor((low + high) / 2);

    times.forEach((v) => (count += Math.floor(mid / v)));

    if (count >= n) {
      answer = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return answer;
}
