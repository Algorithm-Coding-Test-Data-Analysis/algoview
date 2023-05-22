function solution(array) {
  const newArr = array.sort((a,b) => a - b);
  return newArr[Math.floor(newArr.length/2)];
}
