function solution(numbers) {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numFilter = num.filter((v) => !numbers.includes(v));
  const sum = numFilter.reduce((a, c) => a + c, 0);
  return sum;
}
