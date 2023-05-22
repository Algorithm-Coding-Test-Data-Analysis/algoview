function solution(num, k) {
  const newArr = Array.from(String(num));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === String(k)) {
      return newArr.indexOf(String(k)) + 1;
    }
  }
  return -1;
}
