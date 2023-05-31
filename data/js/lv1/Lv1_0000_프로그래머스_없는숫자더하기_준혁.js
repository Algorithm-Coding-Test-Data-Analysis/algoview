function solution(numbers) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) sum += i;
  }
  return sum;
}
