function solution(n) {
  let watermelon = '';
  for (let i = 0; i < n; i++) {
    watermelon += i % 2 === 0 ? '수' : '박';
  }

  return watermelon;
}
