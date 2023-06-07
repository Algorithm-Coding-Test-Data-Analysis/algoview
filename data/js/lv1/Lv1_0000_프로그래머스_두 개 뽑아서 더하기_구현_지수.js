function solution(numbers) {
  let arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let k = i + 1; k < numbers.length; k++) {
      arr.push(numbers[i] + numbers[k]);
    }
  }
  let set = new Set(arr.sort((a, b) => a - b));
  return [...set];
}
