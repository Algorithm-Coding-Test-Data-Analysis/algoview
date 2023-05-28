function solution(number) {
  let result = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let k = i + 1; k < number.length - 1; k++) {
      for (let j = k + 1; j < number.length; j++) {
        number[i] + number[k] + number[j] == 0 ? result++ : null;
      }
    }
  }
  return result;
}
