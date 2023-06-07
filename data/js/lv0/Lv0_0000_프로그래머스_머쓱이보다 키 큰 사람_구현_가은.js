function solution(array, height) {
  let num = [];
  for (let i = 0; i <= array.length; i++) {
    if (height < array[i]) {
      num.push(i)
    }
  }
  return num.length;
}